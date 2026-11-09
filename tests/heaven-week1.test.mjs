// Heaven Group plan week 1 (W3, W5, W8) for qbitsenergy.com.
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { isQaSubmission } from '../src/lib/lead-qa.ts';
import { pageRefFor } from '../src/data/pageRefs.ts';

const clientSource = readFileSync(new URL('../src/lib/lead-client.js', import.meta.url), 'utf8');
const minified = clientSource.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '').replace(/^\s+/gm, '').trim();
function load(source = clientSource, extra = {}) {
  const sandbox = { URL, URLSearchParams, Promise, JSON, Date, Math, console, AbortController, setTimeout, ...extra };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return sandbox.QbLead;
}
const SERVICE = 'https://thestacc-leads.stacc.workers.dev';
const ok = () => Promise.resolve({ ok: true, json: async () => ({ success: true }) });

for (const [label, src] of [['source', clientSource], ['inlined (minified) copy', minified]]) {
  test(`datasheet regression (${label}): the site's own email endpoint is called directly, not replaced by the lead service`, async () => {
    const calls = [];
    const fetchImpl = (url) => { calls.push(url); return ok(); };
    assert.equal(await load(src).postFormSubmit(fetchImpl, '/api/datasheet-bundle', { name: 'A', email: 'a@b.co' }), true);
    assert.deepEqual(calls, ['/api/datasheet-bundle']);
  });
}

test('FormSubmit endpoints still go to the lead service first', async () => {
  const calls = [];
  await load().postFormSubmit((url) => { calls.push(url); return ok(); }, 'https://formsubmit.co/ajax/x@y.z', { name: 'A' });
  assert.deepEqual(calls, [SERVICE]);
});

test('QA token never reaches the lead service; the service gets its test marker instead', async () => {
  let sent;
  await load().postFormSubmit((url, init) => { sent = JSON.parse(init.body); return ok(); }, 'https://formsubmit.co/ajax/x@y.z', { name: 'A', qa_token: 'secret' });
  assert.equal(sent.qa_token, undefined);
  assert.match(sent.qa, /automated form check/);
});

test('submitLead adds page_ref, page_title and (in a QA tab) qa_token to the lead', async () => {
  const store = { qb_qa: 'tok' };
  const document = { title: 'Qbits Hybrid Inverter', querySelector: (s) => (s.includes('qb-page-ref') ? { content: 'PRODUCT-X' } : null) };
  const api = load(clientSource, { document, sessionStorage: { getItem: (k) => store[k] ?? null } });
  const bodies = [];
  const data = { name: 'A' };
  await api.submitLead({ data, fetchImpl: (u, init) => { bodies.push(JSON.parse(init.body)); return ok(); }, sendEmail: () => Promise.resolve(true) });
  assert.equal(bodies[0].page_ref, 'PRODUCT-X');
  assert.equal(bodies[0].page_title, 'Qbits Hybrid Inverter');
  assert.equal(bodies[0].qa_token, 'tok');
});

test('isQaSubmission: token or legacy marker only', () => {
  assert.equal(isQaSubmission({ qa_token: 't' }, 't'), true);
  assert.equal(isQaSubmission({ qa_token: 'x' }, 't'), false);
  assert.equal(isQaSubmission({ qa_token: '' }, ''), false);
  assert.equal(isQaSubmission({ companyName: 'TEST - ignore (automated form check) Co' }), true);
  assert.equal(isQaSubmission({ name: 'Asha' }), false);
});

test('server sources: tests skip Odoo + sheet; datasheet alert copies team@ and tests go to team@ only', () => {
  const lead = readFileSync(new URL('../src/pages/api/lead.ts', import.meta.url), 'utf8');
  const ds = readFileSync(new URL('../src/pages/api/datasheet-bundle.ts', import.meta.url), 'utf8');
  assert.ok(lead.indexOf('if (isTest)') < lead.indexOf('appendLeadToSheet(env'), 'test return comes before the sheet write');
  assert.ok(lead.indexOf('if (isTest)') < lead.indexOf("'crm.lead', 'create'"), 'test return comes before Odoo');
  assert.match(ds, /INTERNAL_TO = \['service@qbitsenergy\.com', TEAM_COPY\]/);
  assert.match(ds, /to: isTest \? \[TEAM_COPY\] : INTERNAL_TO/);
});

test('page refs', () => {
  assert.equal(pageRefFor('/'), 'HOME');
  assert.equal(pageRefFor('/become-our-partner/'), 'PARTNER');
  assert.equal(pageRefFor('/download-datasheets/'), 'DATASHEET');
  assert.equal(pageRefFor('/blog/solar-panel-price-india/'), 'HOME-HANDOFF');
  assert.equal(pageRefFor('/blog/solar-dealer-margin-india/'), 'PARTNER');
  assert.equal(pageRefFor('/hybrid-inverter/qb-6k/'), 'PRODUCT-QB-6K');
});
