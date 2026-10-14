// Runs the REAL inline submit scripts of the four lead forms (extracted from the .astro
// sources) against a stub DOM + stub fetch, with the shared src/lib/lead-client.js helper.
// Run: node --test tests/lead-form-scripts.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const leadClient = read('src/lib/lead-client.js');

const FORMS = [
  { name: 'contact', file: 'src/pages/contact-us/index.astro', formId: 'lead-form', btn: 'lead-submit', status: 'lead-status', fields: { name: 'A', email: 'a@b.co', phone: '9999900000', subject: 'Product Inquiry', message: 'hello there world' } },
  { name: 'quick_lead', file: 'src/components/home/QuickLeadForm.astro', formId: 'quick-lead-form', btn: 'ql-submit', status: 'ql-status', fields: { name: 'A', phone: '9999900000', city: 'Surat' } },
  { name: 'datasheet', file: 'src/pages/download-datasheets/index.astro', formId: 'datasheet-bundle-form', btn: 'db-submit', status: 'db-status', fields: { name: 'A', email: 'a@b.co', phone: '9999900000', companyName: 'Co' } },
  { name: 'partner', file: 'src/pages/become-our-partner/index.astro', formId: 'partner-form', btn: 'partner-submit', status: 'partner-status', fields: { companyName: 'Co', registeredAddress: '12 Test Road', businessEmail: 'a@b.co', whatsappNumber: '9999900000', state: 'Gujarat', city: 'Surat' } },
];

function el() {
  const classes = new Set();
  const e = {
    value: '', disabled: false, textContent: '', className: '', attrs: {}, children: [],
    classList: { toggle: (c, on) => (on ? classes.add(c) : classes.delete(c)), add: (c) => classes.add(c), remove: (c) => classes.delete(c) },
    setAttribute(k, v) { e.attrs[k] = v; }, appendChild(c) { e.children.push(c); }, scrollIntoView() {},
    addEventListener(type, fn) { (e.handlers ??= {})[type] = fn; },
    querySelector: () => el(), querySelectorAll: () => [],
  };
  return e;
}

function formScript(file, formId) {
  const blocks = [...read(file).matchAll(/<script is:inline>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const found = blocks.filter((code) => code.includes(`getElementById('${formId}')`));
  assert.equal(found.length, 1, `${file}: expected exactly one inline script for #${formId}`);
  return found[0];
}

async function run(form, mode, { clicks = 1, honeypot = '' } = {}) {
  const formEl = el();
  const fieldEls = {};
  formEl.elements = { namedItem: (n) => (fieldEls[n] ??= Object.assign(el(), { value: n === 'hp_field_x7' ? honeypot : (form.fields[n] ?? '') })) };
  formEl.checkValidity = () => true;
  formEl.reportValidity = () => {};
  formEl.reset = () => { formEl.resets = (formEl.resets || 0) + 1; };
  const btn = el();
  const status = el();
  const dom = { [form.formId]: formEl, [form.btn]: btn, [form.status]: status };
  const events = [];
  const calls = [];
  const sandbox = { console: { ...console, error() {} }, URL, URLSearchParams, Promise, JSON, Date, Math, Array, Object, Set, Error, setTimeout };
  sandbox.window = sandbox;
  sandbox.document = { getElementById: (id) => dom[id] ?? null, createElement: () => el(), createTextNode: (t) => t };
  sandbox.location = { search: '', pathname: '/test/' };
  sandbox.sessionStorage = { getItem: () => JSON.stringify({ utm_source: 'google', landing_page: '/' }), setItem() {} };
  sandbox.crypto = { randomUUID: () => 'uuid-' + Math.random().toString(16).slice(2) };
  sandbox.gtag = (...args) => events.push(args);
  sandbox.FormData = class { entries() { return Object.entries(form.fields)[Symbol.iterator](); } };
  sandbox.HTMLSelectElement = class {};
  const good = (body) => ({ ok: true, status: 200, json: async () => body });
  const bad = () => ({ ok: false, status: 500, json: async () => ({ success: false }) });
  sandbox.fetch = async (url, init) => {
    calls.push({ url, body: JSON.parse(init.body) });
    await new Promise((r) => setTimeout(r, 5));
    const crm = url === '/api/lead';
    if (mode === 'both-ok') return good({ success: true });
    if (mode === 'crm-only') return crm ? good({ success: true }) : bad();
    if (mode === 'email-only') return crm ? bad() : good({ success: true });
    return bad();
  };
  vm.createContext(sandbox);
  vm.runInContext(leadClient, sandbox);
  vm.runInContext(formScript(form.file, form.formId), sandbox);
  const submit = formEl.handlers.submit;
  await Promise.all(Array.from({ length: clicks }, () => submit({ preventDefault() {} })));
  return { events, calls, btn, status, formEl };
}

for (const form of FORMS) {
  test(`${form.name}: success if either channel worked, one generate_lead, same id on both calls`, async () => {
    for (const mode of ['both-ok', 'crm-only', 'email-only']) {
      const r = await run(form, mode);
      const leads = r.events.filter((e) => e[1] === 'generate_lead');
      assert.equal(leads.length, 1, mode);
      assert.equal(leads[0][2].form_id, form.name, mode);
      assert.equal(r.events.filter((e) => e[1] === 'form_error').length, 0, mode);
      assert.equal(r.events.some((e) => e[1] === 'lead_form_success'), false, 'legacy duplicate event removed');
      assert.equal(r.formEl.resets, 1, mode);
      assert.equal(r.btn.disabled, false, 'button re-enabled after the request');
      const crm = r.calls.find((c) => c.url === '/api/lead').body;
      const other = r.calls.find((c) => c.url !== '/api/lead').body;
      assert.ok(crm.submission_id, 'submission id sent to /api/lead');
      assert.equal(other.submission_id, crm.submission_id, 'same id on the email path');
      assert.equal(crm.utm_source, 'google', 'first-touch attribution included');
    }
  });

  test(`${form.name}: error state only when both channels fail, no conversion event`, async () => {
    const r = await run(form, 'both-fail');
    assert.equal(r.events.filter((e) => e[1] === 'generate_lead').length, 0);
    assert.equal(r.events.filter((e) => e[1] === 'form_error').length, 1);
    assert.equal(r.formEl.resets ?? 0, 0, 'form keeps the visitor input for a retry');
    assert.match(r.status.className, /rose/);
  });

  test(`${form.name}: double click sends once and counts one lead`, async () => {
    const r = await run(form, 'both-ok', { clicks: 2 });
    assert.equal(r.calls.filter((c) => c.url === '/api/lead').length, 1);
    assert.equal(r.events.filter((e) => e[1] === 'generate_lead').length, 1);
  });

  test(`${form.name}: honeypot sends nothing`, async () => {
    const r = await run(form, 'both-ok', { honeypot: 'spam' });
    assert.equal(r.calls.length, 0);
    assert.equal(r.events.length, 0);
  });
}

test('datasheet form: CRM-only success is worded honestly (no "catalogue is on its way")', async () => {
  const r = await run(FORMS[2], 'crm-only');
  assert.match(r.status.textContent, /could not be sent/);
  assert.doesNotMatch(r.status.textContent, /on its way/);
});
