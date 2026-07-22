import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

// Runs on-demand (Cloudflare Pages Function), not statically prerendered.
export const prerender = false;

// utm.medium "Website" — same for every form.
const WEBSITE_MEDIUM_ID = 1;

// One utm.source per form so lead origin is traceable in Odoo.
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

async function findOrCreateContact(
  env: Env,
  uid: number,
  { name, mobile, email }: { name: string; mobile?: string; email?: string },
): Promise<number> {
  const domain: unknown[] = [];
  if (mobile && email) domain.push('|', ['mobile', '=', mobile], ['email', '=', email]);
  else if (mobile) domain.push(['mobile', '=', mobile]);
  else if (email) domain.push(['email', '=', email]);

  if (domain.length) {
    const existing = await odooExecute(env, uid, 'res.partner', 'search_read', [domain], {
      fields: ['id'],
      limit: 1,
    });
    if (existing.length) return existing[0].id;
  }

  // Odoo enforces mobile-must-be-unique on this instance, which fires even for
  // repeated blank values — so blank optional fields must be omitted, not sent as false.
  const vals: Record<string, unknown> = { name, company_type: 'person' };
  if (mobile) vals.mobile = mobile;
  if (email) vals.email = email;

  return odooExecute(env, uid, 'res.partner', 'create', [vals]);
}

function escapeHtml(str: string) {
  return str.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  );
}

function buildDescription(data: Record<string, string>) {
  const fieldLabels: Record<string, string> = {
    role: 'Role',
    subject: 'Inquiry Type',
    systemSize: 'System Size',
    city: 'City',
    message: 'Message',
  };
  const rows = Object.entries(fieldLabels)
    .filter(([key]) => data[key])
    .map(([key, label]) => `<b>${label}:</b> ${escapeHtml(data[key])}`);
  const meta = `Submitted from ${escapeHtml(data.page || 'the Qbits Energy website')}.`;
  return `<p>${rows.join('<br/>')}</p><p><i>${meta}</i></p>`;
}

// Partner form field labels mapped to the Odoo fields shared by the user.
// Fields with a standard crm.lead equivalent are mapped directly; everything
// else is included in the description so no data is lost.
const PARTNER_FIELD_LABELS: Record<string, string> = {
  companyName: 'Company Name',
  registeredAddress: 'Registered Address',
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
  return `<p>${rows.join('<br/>')}</p><p><i>${meta}</i></p>`;
}

export const POST: APIRoute = async ({ request }) => {
  if (!env?.ODOO_URL) {
    return new Response(JSON.stringify({ success: false, message: 'Odoo not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, message: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const formSource = data.source && SOURCE_IDS[data.source] ? data.source : 'contact-form';
  const isPartnerForm = formSource === 'partner-form';

  // Honeypot — silently succeed for bots, same as the client-side check.
  // Partner form uses a real 'website' field, so its honeypot is named 'website2'.
  const honeypotKey = isPartnerForm ? 'website2' : 'website';
  if (data[honeypotKey]) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Validation differs by form: partner applications are keyed to the company,
  // while the contact form is keyed to the person's name.
  const name = isPartnerForm ? (data.companyName || '').trim() : (data.name || '').trim();
  const mobile = isPartnerForm ? (data.whatsappNumber || '').trim() : (data.phone || '').trim();
  const email = isPartnerForm ? (data.businessEmail || '').trim() : (data.email || '').trim();
  if (!name || (!mobile && !email)) {
    return new Response(JSON.stringify({ success: false, message: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const sourceId = SOURCE_IDS[formSource];

  try {
    const uid = await odooLogin(env);
    const partnerId = await findOrCreateContact(env, uid, { name, mobile, email });

    // Partner applications get an explicit title prefix so they are easy to
    // find in Odoo (filter/search "Channel Partner"). Other forms keep the
    // plain customer name as the opportunity title.
    const leadName = isPartnerForm ? `Channel Partner - ${name}` : name;

    const leadVals: Record<string, unknown> = {
      name: leadName,
      type: 'opportunity',
      contact_name: name,
      partner_id: partnerId,
      medium_id: WEBSITE_MEDIUM_ID,
      source_id: sourceId,
      description: isPartnerForm ? buildPartnerDescription(data) : buildDescription(data),
    };
    if (mobile) leadVals.mobile = mobile;
    if (email) leadVals.email_from = email;
    if (data.city) leadVals.city = data.city.trim();

    // Partner-form specific direct mappings to standard crm.lead fields.
    if (isPartnerForm) {
      leadVals.partner_name = name;
      if (data.registeredAddress) leadVals.street = data.registeredAddress.trim();
      // Only map website when it looks like a URL — Odoo can reject free text
      // and that would drop the entire opportunity.
      const website = (data.website || '').trim();
      if (website && /^https?:\/\//i.test(website)) leadVals.website = website;
    }

    const leadId = await odooExecute(env, uid, 'crm.lead', 'create', [leadVals]);

    return new Response(JSON.stringify({ success: true, leadId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Odoo lead creation failed:', err);
    return new Response(JSON.stringify({ success: false, message: 'Could not sync to CRM' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
