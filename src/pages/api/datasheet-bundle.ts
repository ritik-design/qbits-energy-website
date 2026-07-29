import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

// Runs on-demand (Cloudflare Worker), not statically prerendered.
export const prerender = false;

const SITE = 'https://qbitsenergy.com';
const CATALOGUE_URL = `${SITE}/datasheets/qbits-inverter-full-catalogue.pdf`;

// Verified sending domain in Resend must be qbitsenergy.com for this to deliver.
const FROM = 'Qbits Energy <datasheets@qbitsenergy.com>';
const REPLY_TO = 'service@qbitsenergy.com';
const INTERNAL_TO = ['service@qbitsenergy.com'];

function escapeHtml(str: string) {
  return str.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  );
}

async function sendEmail(payload: Record<string, unknown>) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`Resend HTTP ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

const FONT = `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif`;

// What's-inside grid, rendered as a 2-column table so it survives Outlook.
const CONTENTS: [string, string][] = [
  ['Datasheets', 'Full technical specs for every Qbits model'],
  ['User manuals', 'Installation, commissioning and operation'],
  ['Warranty terms', 'Coverage details and claim procedure'],
  ['Certificates', 'BIS, IEC and ISO compliance documents'],
];

function contentsRows() {
  const cell = ([title, desc]: [string, string]) => `
    <td width="50%" valign="top" style="padding:0 8px 20px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td width="26" valign="top" style="padding-top:2px">
            <div style="width:18px;height:18px;border-radius:9px;background:#ecfdf5;text-align:center;line-height:18px;font-size:11px;color:#047857;font-weight:700">&#10003;</div>
          </td>
          <td valign="top" style="font-family:${FONT}">
            <div style="font-size:14px;font-weight:700;color:#0f172a;line-height:1.4">${title}</div>
            <div style="font-size:12px;color:#64748b;line-height:1.5;margin-top:3px">${desc}</div>
          </td>
        </tr>
      </table>
    </td>`;
  let out = '';
  for (let i = 0; i < CONTENTS.length; i += 2) {
    out += `<tr>${cell(CONTENTS[i])}${CONTENTS[i + 1] ? cell(CONTENTS[i + 1]) : '<td width="50%"></td>'}</tr>`;
  }
  return out;
}

function customerHtml(name: string) {
  const firstName = escapeHtml(name.split(' ')[0] || name);
  return `<!doctype html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="x-apple-disable-message-reformatting"/>
<meta name="color-scheme" content="light"/>
<meta name="supported-color-schemes" content="light"/>
<title>Your Qbits inverter catalogue</title>
<!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
<style>
  @media only screen and (max-width:620px){
    .px{padding-left:24px!important;padding-right:24px!important}
    .h1{font-size:26px!important}
    .stack{display:block!important;width:100%!important}
  }
</style>
</head>
<body style="margin:0;padding:0;background:#eef2f6;">
<div style="display:none;font-size:1px;color:#eef2f6;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">Your Qbits inverter catalogue is ready — datasheets, manuals, warranty terms and certifications in one PDF.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef2f6">
  <tr><td align="center" style="padding:32px 12px">

    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 2px 12px rgba(15,23,42,.07)">

      <!-- Brand bar -->
      <tr><td class="px" style="padding:22px 40px;border-bottom:1px solid #eef2f6">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
          <td align="left"><a href="${SITE}"><img src="${SITE}/email/logo.png" width="104" height="36" alt="Qbits Energy" style="display:block;border:0;height:36px;width:104px"/></a></td>
          <td align="right" style="font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#94a3b8">Product Catalogue</td>
        </tr></table>
      </td></tr>

      <!-- Hero -->
      <tr><td style="font-size:0;line-height:0">
        <img src="${SITE}/email/hero.jpg" width="600" alt="Qbits solar inverter" style="display:block;border:0;width:100%;max-width:600px;height:auto"/>
      </td></tr>

      <!-- Headline + CTA -->
      <tr><td class="px" style="padding:36px 40px 8px;font-family:${FONT}">
        <div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#049D65">Your download is ready</div>
        <h1 class="h1" style="margin:12px 0 0;font-size:30px;line-height:1.25;font-weight:700;color:#0f172a;letter-spacing:-.5px">The complete Qbits<br/>inverter catalogue</h1>
        <p style="margin:16px 0 0;font-size:15px;line-height:1.65;color:#475569">
          Hi ${firstName}, thanks for your interest in Qbits. Every model, specification and certification is in the PDF below, ready for your BoQ, EPC bids and net-metering paperwork.
        </p>
      </td></tr>

      <tr><td class="px" style="padding:28px 40px 4px" align="left">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
          <td align="center" style="border-radius:10px;background:#049D65">
            <a href="${CATALOGUE_URL}" style="display:inline-block;padding:15px 34px;font-family:${FONT};font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:10px">Download the catalogue &nbsp;&rarr;</a>
          </td>
        </tr></table>
        <div style="font-family:${FONT};font-size:12px;color:#94a3b8;margin-top:12px">PDF &middot; 11 MB &middot; No password required</div>
      </td></tr>

      <!-- Divider -->
      <tr><td class="px" style="padding:32px 40px 0"><div style="height:1px;background:#eef2f6;font-size:0;line-height:0">&nbsp;</div></td></tr>

      <!-- What's inside -->
      <tr><td class="px" style="padding:28px 32px 8px;font-family:${FONT}">
        <div style="padding:0 8px 16px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#94a3b8">What's inside</div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${contentsRows()}</table>
      </td></tr>

      <!-- Help block -->
      <tr><td class="px" style="padding:8px 40px 36px;font-family:${FONT}">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;border-radius:12px">
          <tr><td style="padding:20px 22px">
            <div style="font-size:15px;font-weight:700;color:#0f172a">Need pricing or help sizing a system?</div>
            <div style="font-size:14px;line-height:1.6;color:#475569;margin-top:6px">
              Reply to this email and it reaches our team directly, or write to
              <a href="mailto:${REPLY_TO}" style="color:#047857;font-weight:600;text-decoration:none">${REPLY_TO}</a>.
            </div>
          </td></tr>
        </table>
      </td></tr>

      <!-- Footer -->
      <tr><td class="px" style="padding:24px 40px 28px;background:#0f172a;font-family:${FONT}">
        <div style="font-size:13px;font-weight:700;color:#ffffff">Qbits Energy</div>
        <div style="font-size:12px;line-height:1.7;color:#94a3b8;margin-top:6px">
          <a href="${SITE}/our-products/" style="color:#6ee7b7;text-decoration:none">Products</a> &nbsp;&middot;&nbsp;
          <a href="${SITE}/download-datasheets/" style="color:#6ee7b7;text-decoration:none">Datasheets</a> &nbsp;&middot;&nbsp;
          <a href="${SITE}/become-our-partner/" style="color:#6ee7b7;text-decoration:none">Become a partner</a> &nbsp;&middot;&nbsp;
          <a href="${SITE}/contact-us/" style="color:#6ee7b7;text-decoration:none">Contact</a>
        </div>
        <div style="font-size:11px;line-height:1.6;color:#64748b;margin-top:14px">
          You received this because you requested the catalogue at
          <a href="${SITE}" style="color:#64748b">qbitsenergy.com</a>.
        </div>
      </td></tr>

    </table>
  </td></tr>
</table>
</body></html>`;
}

function internalHtml(d: Record<string, string>) {
  const rows: [string, string][] = [
    ['Name', d.name],
    ['Email', d.email],
    ['Mobile', d.phone],
    ['Company', d.companyName],
    ['Page', d.page],
    ['Submitted at', d.submittedAt],
  ];
  const body = rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr>
          <td style="padding:10px 16px;border-bottom:1px solid #eef2f6;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#94a3b8;white-space:nowrap">${k}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #eef2f6;font-size:14px;color:#0f172a">${escapeHtml(v)}</td>
        </tr>`,
    )
    .join('');
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#eef2f6">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef2f6">
 <tr><td align="center" style="padding:28px 12px">
  <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="width:560px;max-width:560px;background:#ffffff;border-radius:14px;overflow:hidden;font-family:${FONT}">
   <tr><td style="padding:18px 24px;background:#0f172a">
     <div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#6ee7b7">New lead &middot; Datasheet bundle</div>
     <div style="font-size:18px;font-weight:700;color:#ffffff;margin-top:4px">${escapeHtml(d.name || 'Unknown')}</div>
   </td></tr>
   <tr><td style="padding:8px 8px 4px">
     <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${body}</table>
   </td></tr>
   <tr><td style="padding:18px 24px 22px">
     <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
       <td align="center" style="border-radius:8px;background:#049D65">
         <a href="mailto:${escapeHtml(d.email || '')}" style="display:inline-block;padding:11px 22px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:8px">Reply to ${escapeHtml((d.name || '').split(' ')[0] || 'lead')}</a>
       </td>
     </tr></table>
     <div style="font-size:11px;color:#94a3b8;margin-top:12px">The catalogue email has already been sent to this lead automatically.</div>
   </td></tr>
  </table>
 </td></tr>
</table>
</body></html>`;
}

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, message: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Honeypot — silently succeed for bots.
  if (data.website) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const phone = (data.phone || '').trim();
  const companyName = (data.companyName || '').trim();

  if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return new Response(JSON.stringify({ success: false, message: 'Missing or invalid name/email' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!env?.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return new Response(JSON.stringify({ success: false, message: 'Email not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    await sendEmail({
      from: FROM,
      to: [email],
      reply_to: REPLY_TO,
      subject: 'Your Qbits inverter catalogue (PDF inside)',
      html: customerHtml(name),
      text: `Hi ${name},\n\nThanks for your interest in Qbits. Download the full Qbits Inverter Catalogue here:\n${CATALOGUE_URL}\n\nNeed pricing or sizing help? Reply to this email or write to ${REPLY_TO}.\n\n— Qbits Energy\n${SITE}`,
    });
  } catch (err) {
    console.error('Resend customer email failed:', err);
    return new Response(JSON.stringify({ success: false, message: 'Could not send the catalogue' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Internal notification — best effort, never blocks the customer's confirmation.
  try {
    await sendEmail({
      from: FROM,
      to: INTERNAL_TO,
      reply_to: email,
      subject: `Datasheet bundle request: ${name}${companyName ? ` (${companyName})` : ''}`,
      html: internalHtml({ name, email, phone, companyName, page: data.page, submittedAt: data.submittedAt }),
    });
  } catch (err) {
    console.error('Resend internal notification failed:', err);
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
