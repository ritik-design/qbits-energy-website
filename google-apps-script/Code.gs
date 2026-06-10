/**
 * Qbits Energy — Lead Capture Web App
 * Receives contact-form submissions, appends them to the Leads sheet,
 * and notifies the team by email.
 *
 * Deployment:
 *   1. Open https://script.google.com → New project → paste this file.
 *   2. Update SHEET_ID and (optionally) SHEET_NAME / NOTIFY_EMAILS below.
 *   3. Deploy → New deployment → Type: Web app
 *        - Execute as: Me
 *        - Who has access: Anyone
 *      Copy the resulting /exec URL and put it in the website form's
 *      GAS_ENDPOINT constant (src/pages/contact-us/index.astro).
 *   4. First run will prompt for Sheets + Gmail permissions — accept.
 */

const SHEET_ID      = '1yEKswp6NqE4zHq0LPdJx_AIdVBL8ktEEezB2P5ZiiTo';
const SHEET_NAME    = 'Leads';
const NOTIFY_EMAILS = ['ritik@thestacc.com', 'keyur@heavendesigns.in'];
const SENDER_NAME   = 'Qbits Energy Website';

// Shared form token. Set via:
//   Apps Script editor → Project Settings → Script Properties → Add:
//     KEY: FORM_TOKEN  VALUE: <any random string>
// Then set PUBLIC_FORM_TOKEN to the same value in Cloudflare Pages env vars.
// Leave both unset to disable token check (anyone can POST).
function getExpectedToken_() {
  try { return PropertiesService.getScriptProperties().getProperty('FORM_TOKEN') || ''; }
  catch (_) { return ''; }
}

const HEADERS = ['Timestamp', 'Name', 'Email', 'Phone', 'City', 'System Size', 'Subject', 'Message', 'Source', 'Page', 'User Agent'];

function doPost(e) {
  try {
    const data = parsePayload(e);

    // CSRF-ish: validate shared token if one is configured.
    const expected = getExpectedToken_();
    if (expected && data.token !== expected) {
      return jsonResponse_({ ok: false, error: 'forbidden' });
    }

    // Honeypot: real users never fill this; bots typically do.
    if (data.website) {
      // Pretend success — don't tip the bot off.
      return jsonResponse_({ ok: true });
    }

    const sheet = getOrCreateSheet();

    const row = [
      new Date(),
      data.name       || '',
      data.email      || '',
      data.phone      || '',
      data.city       || '',
      data.systemSize || '',
      data.subject    || '',
      data.message    || '',
      data.source     || 'contact-form',
      data.page       || '',
      (e && e.parameter && e.parameter.userAgent) || ''
    ];
    sheet.appendRow(row);

    sendNotification_(data);

    return jsonResponse_({ ok: true });
  } catch (err) {
    console.error(err);
    return jsonResponse_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return jsonResponse_({ ok: true, service: 'qbits-leads', time: new Date().toISOString() });
}

function parsePayload(e) {
  if (!e) return {};
  // Form-encoded submission (preferred — avoids CORS preflight)
  if (e.parameter && Object.keys(e.parameter).length) return e.parameter;
  // JSON fallback
  if (e.postData && e.postData.contents) {
    try { return JSON.parse(e.postData.contents); } catch (_) {}
  }
  return {};
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#f1f5f9');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function sendNotification_(data) {
  const subject = `New Qbits lead: ${data.name || 'Unknown'}${data.subject ? ' — ' + data.subject : ''}`;

  const rows = [
    ['Name',    data.name],
    ['Email',   data.email],
    ['Phone',   data.phone],
    ['Subject', data.subject],
    ['Source',  data.source || 'contact-form'],
    ['Page',    data.page]
  ].filter(r => r[1]);

  const htmlRows = rows.map(r =>
    `<tr><td style="padding:6px 12px;color:#64748b;font-size:13px;width:120px;">${r[0]}</td>` +
    `<td style="padding:6px 12px;color:#0f172a;font-size:14px;font-weight:500;">${escapeHtml_(r[1])}</td></tr>`
  ).join('');

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#0f172a;margin:0 0 16px;">New website lead</h2>
      <table style="border-collapse:collapse;width:100%;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
        ${htmlRows}
      </table>
      ${data.message ? `
        <h3 style="color:#0f172a;margin:24px 0 8px;font-size:14px;">Message</h3>
        <div style="padding:12px 16px;background:#f8fafc;border-radius:8px;color:#334155;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml_(data.message)}</div>
      ` : ''}
      <p style="margin-top:24px;color:#94a3b8;font-size:12px;">Received ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
    </div>
  `;

  const plain = rows.map(r => `${r[0]}: ${r[1]}`).join('\n') +
    (data.message ? `\n\nMessage:\n${data.message}` : '');

  MailApp.sendEmail({
    to: NOTIFY_EMAILS.join(','),
    replyTo: data.email || undefined,
    subject: subject,
    body: plain,
    htmlBody: html,
    name: SENDER_NAME
  });
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml_(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}
