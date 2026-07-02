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
};

const FORM_TITLES: Record<string, string> = {
  'contact-form': 'Website Inquiry',
  'home-quick-lead': 'Quick Site Survey Request',
  'datasheet-bundle': 'Datasheet Bundle Request',
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
    message: 'Message',
  };
  const rows = Object.entries(fieldLabels)
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

  // Honeypot — silently succeed for bots, same as the client-side check.
  if (data.website) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name = (data.name || '').trim();
  const mobile = (data.phone || '').trim();
  const email = (data.email || '').trim();
  if (!name || (!mobile && !email)) {
    return new Response(JSON.stringify({ success: false, message: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const formSource = data.source && SOURCE_IDS[data.source] ? data.source : 'contact-form';
  const sourceId = SOURCE_IDS[formSource];
  const title = `${FORM_TITLES[formSource]} - ${name}`;

  try {
    const uid = await odooLogin(env);
    const partnerId = await findOrCreateContact(env, uid, { name, mobile, email });

    const leadVals: Record<string, unknown> = {
      name: title,
      type: 'opportunity',
      contact_name: name,
      partner_id: partnerId,
      medium_id: WEBSITE_MEDIUM_ID,
      source_id: sourceId,
      description: buildDescription(data),
    };
    if (mobile) leadVals.mobile = mobile;
    if (email) leadVals.email_from = email;
    if (data.city) leadVals.city = data.city.trim();

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
