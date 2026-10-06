// Appends a website lead to the shared "Heaven Websites — All Website Leads (Live Sheet)".
//
// Rows are written by HEADER NAME, so columns can be added or reordered in the sheet
// without a code change. Unknown fields are ignored; missing columns stay blank.
//
// Required Worker secrets (wrangler secret put):
//   GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, LEADS_SHEET_ID
//
// Never throws: a sheet failure must not break the form. Call it inside ctx.waitUntil().

let cachedToken = null; // { token, exp }
const headerCache = new Map(); // tab -> { headers, exp }

async function accessToken(env) {
  if (cachedToken && cachedToken.exp > Date.now() + 60_000) return cachedToken.token;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      refresh_token: env.GOOGLE_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  if (!res.ok) throw new Error(`token ${res.status}: ${await res.text()}`);
  const j = await res.json();
  cachedToken = { token: j.access_token, exp: Date.now() + (j.expires_in || 3600) * 1000 };
  return cachedToken.token;
}

const enc = (tab) => encodeURIComponent(`'${tab.replace(/'/g, "''")}'`);

async function headersFor(env, token, tab) {
  const hit = headerCache.get(tab);
  if (hit && hit.exp > Date.now()) return hit.headers;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.LEADS_SHEET_ID}/values/${enc(tab)}!1:1`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) throw new Error(`headers ${tab} ${res.status}: ${await res.text()}`);
  const headers = ((await res.json()).values || [[]])[0].map((h) => String(h).trim());
  headerCache.set(tab, { headers, exp: Date.now() + 10 * 60_000 });
  return headers;
}

// Cell values are written RAW, so a "+91…" phone or "=…" text is stored as text, never a formula.
function clean(v) {
  if (v === undefined || v === null) return '';
  const s = typeof v === 'string' ? v : Array.isArray(v) ? v.join(', ') : String(v);
  return s.slice(0, 45000);
}

async function appendByHeader(env, token, tab, fields) {
  const headers = await headersFor(env, token, tab);
  const lower = Object.fromEntries(Object.entries(fields).map(([k, v]) => [k.toLowerCase(), v]));
  const row = headers.map((h) => clean(lower[h.toLowerCase()]));
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.LEADS_SHEET_ID}/values/${enc(tab)}!A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ values: [row] }),
  });
  if (!res.ok) throw new Error(`append ${tab} ${res.status}: ${await res.text()}`);
}

function istParts(d = new Date()) {
  const ist = new Date(d.getTime() + 5.5 * 3600_000).toISOString().replace('T', ' ').slice(0, 19);
  const utc = d.toISOString().replace('T', ' ').slice(0, 19);
  return { ist, utc, month: ist.slice(0, 7) };
}

/**
 * @param env      Worker env with the four secrets
 * @param website  'HeavenGreens' | 'Qbits' | 'Heaven Designs' | 'Quickestimate' (must match the tab name)
 * @param lead     { name, email, phone, company, form, page, city, state, country, message, extra:{...}, test:bool }
 */
export async function appendLeadToSheet(env, website, lead) {
  if (!env.LEADS_SHEET_ID || !env.GOOGLE_REFRESH_TOKEN) return { ok: false, skipped: 'not configured' };
  try {
    const token = await accessToken(env);
    const { ist, utc, month } = istParts();
    const id = `WEB-${website.replace(/\s+/g, '')}-${Date.now().toString(36)}`;
    const extraText = Object.entries(lead.extra || {})
      .filter(([, v]) => v !== undefined && v !== null && v !== '')
      .map(([k, v]) => `${k}: ${clean(v)}`)
      .join('\n');
    const message = [lead.message, extraText].filter(Boolean).join('\n');

    if (website === 'Quickestimate') {
      await appendByHeader(env, token, 'Quickestimate', {
        'Received (IST)': ist,
        Form: lead.form,
        'Real / Test': lead.test ? 'Test' : 'Real',
        Name: lead.name,
        Company: lead.company,
        Mobile: lead.phone,
        Email: lead.email,
        State: lead.state,
        Country: lead.country,
        Message: message,
        'Form page': lead.page,
        Referrer: lead.referrer,
        ...(lead.qe || {}),
      });
      return { ok: true, id };
    }

    const common = {
      Website: website,
      'Record ID': id,
      'Data source': 'Website form (live)',
      Scope: 'Branded website',
      'Test exclusion': lead.test ? 'Test submission' : '',
      Name: `Website Lead: ${lead.name || lead.email || ''}`.trim(),
      'Contact name': lead.name,
      Email: lead.email,
      'Mobile / WhatsApp': lead.phone,
      'Normalized phone': String(lead.phone || '').replace(/\D/g, '').slice(-10),
      'Customer company': lead.company,
      'Created / submitted': ist,
      'Timestamp timezone': 'Asia/Kolkata (website form)',
      'Created UTC': utc,
      Month: month,
      'Form / service': lead.form,
      'Submitted page': lead.page,
      'CRM source': lead.crmSource,
      'CRM medium': 'Website',
      Campaign: lead.campaign,
      Status: 'New',
      City: lead.city,
      State: lead.state,
      Country: lead.country,
      'Monthly electricity bill': lead.bill,
      'Full saved message / requirements': message,
    };
    await appendByHeader(env, token, website, common);
    await appendByHeader(env, token, 'All website leads', common);
    return { ok: true, id };
  } catch (err) {
    console.error('[leads-sheet]', website, err && err.message);
    return { ok: false, error: String(err && err.message) };
  }
}
