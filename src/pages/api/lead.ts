import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
// @ts-ignore -- plain JS module shared across Heaven sites
import { appendLeadToSheet } from '../../lib/leads-sheet.js';
import {
  cleanSubmissionId,
  createRecentIds,
  HONEYPOT_FIELD,
  honeypotTripped,
  isAllowedOrigin,
  isValidEmail,
  isValidPhone,
  jsonResponse,
  readJsonObject,
  sanitizeFields,
} from '../../lib/lead-guard';

// Runs on-demand (Cloudflare Pages Function), not statically prerendered.
export const prerender = false;

// utm.medium "Website" — same for every form.
const WEBSITE_MEDIUM_ID = 1;

// One utm.source per form so lead origin is traceable in Odoo.
// Human-readable form labels for the shared leads sheet ("Form / service").
const FORM_LABELS: Record<string, string> = {
  'contact-form': 'Contact Form',
  'home-quick-lead': 'Quick Lead (Home)',
  'datasheet-bundle': 'Datasheet Bundle Download',
  'partner-form': 'Channel Partner Application',
};

// Odoo utm.source names, mirrored into the sheet's "CRM source" column.
const CRM_SOURCE_LABELS: Record<string, string> = {
  'contact-form': 'Qbits Website - Contact Form',
  'home-quick-lead': 'Qbits Website - Quick Lead',
  'datasheet-bundle': 'Qbits Website - Datasheet Bundle',
  'partner-form': 'Qbits Website - Channel Partner Application',
};

// Fields mapped to dedicated sheet columns; everything else goes to `extra`.
const SHEET_SKIP_KEYS = new Set([
  'name', 'email', 'phone', 'companyName', 'businessEmail', 'whatsappNumber', 'city', 'state',
  'message', 'page', 'source',
]);

// Only these keys are read from the request body; anything else is dropped, so a
// crafted payload cannot add arbitrary columns/lines to the sheet row or Odoo description.
const FORM_KEYS = [
  'source', 'page', 'submittedAt', 'submission_id',
  'name', 'email', 'phone', 'city', 'state', 'message',
  'role', 'subject', 'systemSize', 'model', 'quantity', 'requiredDate', 'sourcePage',
  'companyName', 'website',
];
const ATTRIBUTION_KEYS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid', 'referrer', 'landing_page',
];
const PARTNER_KEYS = [
  'registeredAddress', 'businessEmail', 'whatsappNumber', 'gstPan', 'businessType',
  'pmSuryagharName', 'annualTurnover', 'brandsUsed', 'officeType', 'warehouseAvailable',
  'warehouseSize', 'salesTeam', 'technicalSupportTeam', 'serviceTeam',
  'serviceCenterAvailable', 'serviceCenterLocation', 'workingCapital', 'bankLoanAmount',
  'ccLimits', 'otherCapital', 'hypothicatedBank', 'targetSales', 'readyToPromote',
  'previousExperience',
];
const ALLOWED_KEYS: ReadonlySet<string> = new Set([...FORM_KEYS, ...ATTRIBUTION_KEYS, ...PARTNER_KEYS]);

// Length caps (characters). Default 200. Partner free-text fields get the room the
// form's own maxlength already allows.
const FIELD_CAPS: Record<string, number> = {
  name: 120,
  email: 254,
  businessEmail: 254,
  phone: 30,
  whatsappNumber: 30,
  message: 4000,
  registeredAddress: 500,
  brandsUsed: 250,
  previousExperience: 1000,
};
const fieldCap = (key: string) => FIELD_CAPS[key] ?? 200;

// Inquiry types that mean "I want to become a dealer/distributor".
const DEALER_SUBJECTS = new Set(['Become a Dealer', 'Become a Distributor']);

// Recently stored submission ids (this isolate only, no storage).
const recentSubmissions = createRecentIds();

const SOURCE_IDS: Record<string, number> = {
  'contact-form': 186, // Qbits Website - Contact Form
  'home-quick-lead': 187, // Qbits Website - Quick Lead
  'datasheet-bundle': 188, // Qbits Website - Datasheet Bundle
  'partner-form': 189, // Qbits Website - Channel Partner Application
};

let rpcId = 1;

async function odooCall(baseUrl: string, service: string, method: string, args: unknown[]) {
  const res = await fetch(`${baseUrl}/jsonrpc`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      params: { service, method, args },
      id: rpcId++,
    }),
  });
  if (!res.ok) throw new Error(`Odoo HTTP ${res.status}`);
  const json: any = await res.json();
  if (json.error) {
    throw new Error(json.error.data?.message || json.error.message || 'Odoo RPC error');
  }
  return json.result;
}

async function odooLogin(env: Env): Promise<number> {
  const uid = await odooCall(env.ODOO_URL, 'common', 'login', [env.ODOO_DB, env.ODOO_USERNAME, env.ODOO_PASSWORD]);
  if (!uid) throw new Error('Odoo authentication failed');
  return uid;
}

async function odooExecute(
  env: Env,
  uid: number,
  model: string,
  method: string,
  args: unknown[],
  kwargs: Record<string, unknown> = {},
) {
  return odooCall(env.ODOO_URL, 'object', 'execute_kw', [
    env.ODOO_DB,
    uid,
    env.ODOO_PASSWORD,
    model,
    method,
    args,
    kwargs,
  ]);
}

// Looks up an existing res.partner by mobile/email so the opportunity can link
// to it. It never creates one: a website that created res.partner records
// turned every spam submission into a permanent contact the API user can't
// delete. Contact creation is left to the sales team in Odoo. No match (or no
// mobile/email to match on) = null = an unlinked opportunity.
async function findExistingContact(
  env: Env,
  uid: number,
  { mobile, email }: { mobile?: string; email?: string },
): Promise<number | null> {
  const domain: unknown[] = [];
  if (mobile && email) domain.push('|', ['mobile', '=', mobile], ['email', '=', email]);
  else if (mobile) domain.push(['mobile', '=', mobile]);
  else if (email) domain.push(['email', '=', email]);

  if (!domain.length) return null;

  const existing = await odooExecute(env, uid, 'res.partner', 'search_read', [domain], {
    fields: ['id'],
    limit: 1,
  });
  return existing.length ? existing[0].id : null;
}

function escapeHtml(str: string) {
  return str.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  );
}

const ATTRIBUTION_LABELS: Record<string, string> = {
  utm_source: 'utm_source',
  utm_medium: 'utm_medium',
  utm_campaign: 'utm_campaign',
  utm_term: 'utm_term',
  utm_content: 'utm_content',
  gclid: 'gclid',
  referrer: 'Referrer',
  landing_page: 'Landing page',
};

// Clearly labelled trailing block shared by every description: first-touch
// attribution plus the client submission id used to recognise duplicates.
function buildTrackingBlock(data: Record<string, string>) {
  const attribution = Object.entries(ATTRIBUTION_LABELS)
    .filter(([key]) => data[key])
    .map(([key, label]) => `${label}: ${escapeHtml(data[key])}`);
  const parts: string[] = [];
  if (attribution.length) {
    parts.push(`<p><b>Attribution (first touch):</b><br/>${attribution.join('<br/>')}</p>`);
  }
  if (data.submission_id) {
    parts.push(`<p><i>Submission ID: ${escapeHtml(data.submission_id)}</i></p>`);
  }
  return parts.join('');
}

function buildDescription(data: Record<string, string>) {
  const fieldLabels: Record<string, string> = {
    role: 'Role',
    companyName: 'Company Name',
    subject: 'Inquiry Type',
    systemSize: 'System Size',
    model: 'Inverter Model',
    quantity: 'Inverter Quantity',
    requiredDate: 'Required Delivery Date',
    sourcePage: 'Source Page',
    city: 'City',
    state: 'State',
    message: 'Message',
  };
  const rows = Object.entries(fieldLabels)
    .filter(([key]) => data[key])
    .map(([key, label]) => `<b>${label}:</b> ${escapeHtml(data[key])}`);
  const meta = `Submitted from ${escapeHtml(data.page || 'the Qbits Energy website')}.`;
  return `<p>${rows.join('<br/>')}</p><p><i>${meta}</i></p>${buildTrackingBlock(data)}`;
}

// Partner form field labels mapped to the Odoo fields shared by the user.
// Fields with a standard crm.lead equivalent are mapped directly; everything
// else is included in the description so no data is lost.
const PARTNER_FIELD_LABELS: Record<string, string> = {
  companyName: 'Company Name',
  registeredAddress: 'Registered Address',
  state: 'State',
  city: 'City',
  sourcePage: 'Source Page',
  businessEmail: 'Official Business Email',
  whatsappNumber: 'WhatsApp Number',
  website: 'Website',
  gstPan: 'GST Number',
  businessType: 'Business Type',
  pmSuryagharName: 'PM Suryaghar Registered Name',
  annualTurnover: 'Annual Turnover (₹)',
  brandsUsed: 'Brands Currently Using in Inverter for Solar projects',
  officeType: 'Office Type',
  warehouseAvailable: 'Warehouse Available',
  warehouseSize: 'Warehouse Size in Sq. Feet',
  salesTeam: 'Sales Team Availability',
  technicalSupportTeam: 'Technical Support Team',
  serviceTeam: 'Service Team Availability',
  serviceCenterAvailable: 'Service Center Available',
  serviceCenterLocation: 'Service Center Location',
  workingCapital: 'Working Capital Total Available (In Lacs)',
  bankLoanAmount: 'Total Bank Loan Amount',
  ccLimits: 'CC Limits',
  otherCapital: 'Others (If Any)',
  hypothicatedBank: 'Hypothicated To (Bank Name)',
  targetSales: 'Target Sales Commitment per Month (Nos.)',
  readyToPromote: 'Ready to Promote Brand in Market?',
  previousExperience: 'Previous Experience in Solar Inverter Business',
};

function buildPartnerDescription(data: Record<string, string>) {
  const rows = Object.entries(PARTNER_FIELD_LABELS)
    .filter(([key]) => data[key])
    .map(([key, label]) => `<b>${label}:</b> ${escapeHtml(data[key])}`);
  const meta = `Submitted from ${escapeHtml(data.page || 'the Qbits Energy website')}.`;
  return `<p>${rows.join('<br/>')}</p><p><i>${meta}</i></p>${buildTrackingBlock(data)}`;
}


export const POST: APIRoute = async ({ request, locals }) => {
  // Browser forms on the production site (or local dev) only. Not a substitute for
  // rate limiting or CAPTCHA, which need business/infrastructure decisions.
  if (!isAllowedOrigin(request.headers, request.url)) {
    return jsonResponse(403, { success: false, message: 'Forbidden' });
  }

  const parsed = await readJsonObject(request);
  if (!parsed.ok) return jsonResponse(parsed.status, { success: false, message: parsed.message });
  const body = parsed.body;

  const formSource = typeof body.source === 'string' && SOURCE_IDS[body.source] ? body.source : 'contact-form';
  const isPartnerForm = formSource === 'partner-form';

  // Honeypot: silently succeed for bots, same as the client-side check, before any
  // other validation so bots learn nothing. The honeypot is named so autofill never
  // targets it. 'website' is NOT a honeypot any more: the partner form uses it as a real
  // URL field and, for the other forms, a stale cached page that still posts it is
  // treated as an ordinary unknown field (dropped below).
  if (honeypotTripped(body, [HONEYPOT_FIELD])) {
    return jsonResponse(200, { success: true });
  }
  if (!isPartnerForm) delete body.website;

  const cleaned = sanitizeFields(body, ALLOWED_KEYS, fieldCap);
  if (!cleaned.ok) return jsonResponse(400, { success: false, message: cleaned.message });
  const data = cleaned.data;

  // These optional RFQ fields are descriptive text, never trusted URLs or CRM IDs.
  if (data.sourcePage && (!/^\/(?!\/)[A-Za-z0-9/_.-]*$/.test(data.sourcePage) || /\/\.{1,2}(?:\/|$)/.test(data.sourcePage))) data.sourcePage = '';
  data.submission_id = cleanSubmissionId(data.submission_id);

  // Validation differs by form: partner applications are keyed to the company,
  // while the contact form is keyed to the person's name.
  const name = isPartnerForm ? (data.companyName || '') : (data.name || '');
  let mobile = isPartnerForm ? (data.whatsappNumber || '') : (data.phone || '');
  let email = isPartnerForm ? (data.businessEmail || '') : (data.email || '');
  // A malformed phone or email must not cost us the lead when the other channel is
  // usable: drop the bad one (it is still in the FormSubmit email copy) and store the rest.
  if (mobile && !isValidPhone(mobile)) {
    if (email && isValidEmail(email)) mobile = '';
    else return jsonResponse(400, { success: false, message: 'Invalid phone number' });
  }
  if (email && !isValidEmail(email)) {
    if (mobile) email = '';
    else return jsonResponse(400, { success: false, message: 'Invalid email address' });
  }
  if (!name || (!mobile && !email)) {
    return jsonResponse(400, { success: false, message: 'Missing required fields' });
  }

  // Same submission already stored by this isolate (a retry after a lost response):
  // report success without writing a second Sheet row / Odoo lead.
  if (data.submission_id && recentSubmissions.has(data.submission_id)) {
    return jsonResponse(200, { success: true, duplicate: true });
  }

  const isDealerEnquiry = !isPartnerForm && DEALER_SUBJECTS.has(data.subject || '');

  // Copy the lead to the shared Google Sheet. Started before the Odoo call so a CRM
  // outage never loses the sheet row. Its result is awaited below: success is
  // reported if Odoo OR the sheet stored the lead.
  const extra: Record<string, string> = {};
  for (const [k, v] of Object.entries(data)) {
    if (SHEET_SKIP_KEYS.has(k) || (k === 'website' && !isPartnerForm)) continue;
    if (v) extra[k] = v;
  }
  let pageUrl = data.page || '';
  try {
    pageUrl = pageUrl ? new URL(pageUrl, request.url).href : request.headers.get('referer') || '';
  } catch {}
  const sheetTask: Promise<{ ok?: boolean }> = Promise.resolve(
    appendLeadToSheet(env, 'Qbits', {
      name, // partner form has no person field, so this is the company name
      email,
      phone: mobile,
      company: isPartnerForm ? name : (data.companyName || ''),
      form: FORM_LABELS[formSource],
      page: pageUrl,
      city: data.city || '',
      state: data.state || '',
      country: 'India',
      message: data.message || '',
      crmSource: CRM_SOURCE_LABELS[formSource],
      campaign: data.utm_campaign || '',
      extra,
      test: false,
    }),
  ).catch(() => ({ ok: false }));
  const cfCtx = (locals as any)?.cfContext;
  if (cfCtx?.waitUntil) cfCtx.waitUntil(sheetTask);

  const sourceId = SOURCE_IDS[formSource];
  const odooConfigured = Boolean(env?.ODOO_URL);
  let odooLeadId: unknown;
  let odooOk = false;

  if (odooConfigured) {
    try {
      const uid = await odooLogin(env);
      // The lookup only enriches the lead (links an existing contact). A partner
      // fault must never abort crm.lead.create, so degrade to an unlinked lead.
      const partnerId = await findExistingContact(env, uid, { mobile, email }).catch((err) => {
        console.error('Odoo partner lookup failed, filing the lead unlinked:', err);
        return null;
      });

      // Title prefixes make dealer/partner leads easy to find and filter in Odoo.
      // Partner applications: "Channel Partner - <company>" (unchanged, so existing
      // filters keep working). Dealer/distributor enquiries from the contact form:
      // "Dealer enquiry - <name>". Everything else keeps the plain customer name.
      const leadName = isPartnerForm
        ? `Channel Partner - ${name}`
        : isDealerEnquiry
          ? `Dealer enquiry - ${name}`
          : name;

      const leadVals: Record<string, unknown> = {
        name: leadName,
        // Website enquiries land in the pipeline as opportunities. No res.partner
        // is ever created here; contact creation is left to the sales team.
        type: 'opportunity',
        contact_name: name,
        medium_id: WEBSITE_MEDIUM_ID,
        source_id: sourceId,
        description: isPartnerForm ? buildPartnerDescription(data) : buildDescription(data),
      };
      if (partnerId) leadVals.partner_id = partnerId;
      if (mobile) leadVals.mobile = mobile;
      if (email) leadVals.email_from = email;
      if (data.city) leadVals.city = data.city;

      // Partner-form specific direct mappings to standard crm.lead fields.
      if (isPartnerForm) {
        leadVals.partner_name = name;
        if (data.registeredAddress) leadVals.street = data.registeredAddress;
        // Only map website when it looks like a URL: Odoo can reject free text
        // and that would drop the entire lead.
        const website = data.website || '';
        if (website && /^https?:\/\//i.test(website)) leadVals.website = website;
      }

      odooLeadId = await odooExecute(env, uid, 'crm.lead', 'create', [leadVals]);
      odooOk = true;
    } catch (err) {
      console.error('Odoo lead creation failed:', err);
    }
  }

  const sheetOk = (await sheetTask)?.ok === true;

  if (odooOk || sheetOk) {
    recentSubmissions.add(data.submission_id);
    return jsonResponse(200, { success: true, leadId: odooLeadId, crm: odooOk, sheet: sheetOk });
  }
  if (!odooConfigured) {
    return jsonResponse(500, { success: false, message: 'Odoo not configured' });
  }
  return jsonResponse(502, { success: false, message: 'Could not sync to CRM' });
};
