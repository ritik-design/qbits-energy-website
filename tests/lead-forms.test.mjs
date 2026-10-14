// Unit tests for the lead-form plumbing (client helper + server guard).
// Run: node --experimental-strip-types --test tests/lead-forms.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import {
  cleanSubmissionId,
  createRecentIds,
  honeypotTripped,
  isAllowedOrigin,
  isValidEmail,
  isValidPhone,
  readJsonObject,
  sanitizeFields,
} from '../src/lib/lead-guard.ts';

const clientSource = readFileSync(new URL('../src/lib/lead-client.js', import.meta.url), 'utf8');

// Same comment/indent stripping Layout.astro applies before inlining the helper on every page.
const layoutMinified = clientSource
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/^\s*\/\/.*$/gm, '')
  .replace(/^\s+/gm, '')
  .trim();

function loadClient(source = clientSource) {
  const sandbox = { URL, URLSearchParams, Promise, JSON, Date, Math, console };
  sandbox.window = sandbox; // lead-client.js publishes onto `window` when present
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  const api = sandbox.QbLead;
  // Objects built inside the vm have another realm's prototypes; normalise for deepEqual.
  const getAttribution = api.getAttribution;
  api.getAttribution = (storage) => JSON.parse(JSON.stringify(getAttribution(storage)));
  return api;
}

function memoryStorage(initial = {}) {
  const map = new Map(Object.entries(initial));
  return {
    getItem: (k) => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => map.set(k, String(v)),
    dump: () => Object.fromEntries(map),
  };
}

// ---------- client helper ----------

test('inlined (comment-stripped) helper still parses and exposes the same API', () => {
  const full = loadClient();
  const mini = loadClient(layoutMinified);
  assert.deepEqual(Object.keys(mini).sort(), Object.keys(full).sort());
  assert.ok(layoutMinified.length < clientSource.length);
});

test('first-touch attribution is captured once and never overwritten', () => {
  const lead = loadClient();
  const storage = memoryStorage();
  lead.captureFirstTouch(
    { search: '?utm_source=google&utm_medium=cpc&utm_campaign=inv&gclid=abc123&q=secret', referrer: 'https://www.google.com/search?q=private+term', pathname: '/blog/a/' },
    storage,
  );
  const first = lead.getAttribution(storage);
  assert.equal(first.utm_source, 'google');
  assert.equal(first.utm_medium, 'cpc');
  assert.equal(first.utm_campaign, 'inv');
  assert.equal(first.gclid, 'abc123');
  assert.equal(first.referrer, 'https://www.google.com/search', 'referrer query string must be dropped');
  assert.equal(first.landing_page, '/blog/a/');
  assert.ok(!('q' in first), 'unrelated query params are not stored');

  lead.captureFirstTouch({ search: '?utm_source=facebook', referrer: 'https://facebook.com/', pathname: '/contact-us/' }, storage);
  assert.deepEqual(lead.getAttribution(storage), first);
});

test('direct first visit still locks the first touch (landing page only)', () => {
  const lead = loadClient();
  const storage = memoryStorage();
  lead.captureFirstTouch({ search: '', referrer: '', pathname: '/' }, storage);
  lead.captureFirstTouch({ search: '?utm_source=late', referrer: 'https://x.test/', pathname: '/b/' }, storage);
  assert.deepEqual(lead.getAttribution(storage), { landing_page: '/' });
});

test('attribution capture and read survive blocked or corrupt storage', () => {
  const lead = loadClient();
  const throwing = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } };
  assert.doesNotThrow(() => lead.captureFirstTouch({ search: '', referrer: '', pathname: '/' }, throwing));
  assert.deepEqual(lead.getAttribution(throwing), {});
  assert.deepEqual(lead.getAttribution(memoryStorage({ [lead.FIRST_TOUCH_KEY]: '{not json' })), {});
  assert.deepEqual(lead.getAttribution(memoryStorage({ [lead.FIRST_TOUCH_KEY]: JSON.stringify({ utm_source: 7, evil: 'x', gclid: 'ok' }) })), { gclid: 'ok' });
});

test('submission ids are unique and use crypto.randomUUID when available', () => {
  const lead = loadClient();
  assert.equal(lead.newSubmissionId({ randomUUID: () => 'uuid-1234-abcd' }), 'uuid-1234-abcd');
  const a = lead.newSubmissionId(undefined);
  const b = lead.newSubmissionId(undefined);
  assert.notEqual(a, b);
  assert.match(a, /^[A-Za-z0-9-]{8,64}$/, 'fallback id must satisfy the server id pattern');
});

test('outcome: success if EITHER channel worked, error only if BOTH failed', () => {
  const { decideOutcome } = loadClient();
  assert.deepEqual(JSON.parse(JSON.stringify(decideOutcome(true, true))), { success: true, crmOk: true, emailOk: true, bothFailed: false });
  assert.equal(decideOutcome(true, false).success, true);
  assert.equal(decideOutcome(false, true).success, true);
  const none = decideOutcome(false, false);
  assert.equal(none.success, false);
  assert.equal(none.bothFailed, true);
  assert.equal(decideOutcome('yes', undefined).success, false, 'only strict true counts');
});

test('duplicate-submit guard allows one in-flight submit at a time', () => {
  const guard = loadClient().createGuard();
  assert.equal(guard.begin(), true);
  assert.equal(guard.begin(), false);
  assert.equal(guard.isBusy(), true);
  guard.end();
  assert.equal(guard.begin(), true);
});

test('generate_lead fires exactly once per submission id', () => {
  const lead = loadClient();
  const events = [];
  const gtag = (...args) => events.push(args);
  assert.equal(lead.trackLeadOnce(gtag, 'id-aaaaaaaa', { form_id: 'contact' }), true);
  assert.equal(lead.trackLeadOnce(gtag, 'id-aaaaaaaa', { form_id: 'contact' }), false);
  assert.equal(lead.trackLeadOnce(gtag, 'id-bbbbbbbb', { form_id: 'contact' }), true);
  assert.equal(lead.trackLeadOnce(gtag, '', {}), false);
  assert.deepEqual(events.map((e) => e[1]), ['generate_lead', 'generate_lead']);
  assert.doesNotThrow(() => lead.track(undefined, 'x'));
  assert.doesNotThrow(() => lead.track(() => { throw new Error('boom'); }, 'x'));
});

function fakeFetch(handlers) {
  const calls = [];
  const fn = async (url, init) => {
    calls.push({ url, body: init && init.body ? JSON.parse(init.body) : null });
    const handler = handlers[url];
    if (!handler) throw new Error('unexpected url ' + url);
    return handler(init);
  };
  fn.calls = calls;
  return fn;
}
const jsonRes = (status, body) => ({ ok: status >= 200 && status < 300, status, json: async () => body });

test('submitLead: CRM stores it, email path fails -> still success', async () => {
  const lead = loadClient();
  const fetchImpl = fakeFetch({ '/api/lead': () => jsonRes(200, { success: true }), 'https://mail.test': () => jsonRes(200, { success: 'false' }) });
  const out = await lead.submitLead({ data: { submission_id: 's1' }, fetchImpl, sendEmail: () => lead.postFormSubmit(fetchImpl, 'https://mail.test', {}) });
  assert.equal(out.success, true);
  assert.equal(out.crmOk, true);
  assert.equal(out.emailOk, false);
  assert.equal(fetchImpl.calls[0].body.submission_id, 's1', 'submission id reaches /api/lead');
});

test('submitLead: CRM 502 and network error, email succeeds -> success', async () => {
  const lead = loadClient();
  for (const crm of [() => jsonRes(502, { success: false }), () => { throw new Error('network'); }, () => jsonRes(200, { success: false })]) {
    const fetchImpl = fakeFetch({ '/api/lead': crm, 'https://mail.test': () => jsonRes(200, { success: 'true' }) });
    const out = await lead.submitLead({ data: {}, fetchImpl, sendEmail: () => lead.postFormSubmit(fetchImpl, 'https://mail.test', {}) });
    assert.equal(out.success, true);
    assert.equal(out.crmOk, false);
    assert.equal(out.emailOk, true);
  }
});

test('submitLead: both fail (including a throwing email path) -> error state', async () => {
  const lead = loadClient();
  const fetchImpl = fakeFetch({ '/api/lead': () => jsonRes(500, { success: false }) });
  const a = await lead.submitLead({ data: {}, fetchImpl, sendEmail: async () => { throw new Error('mail down'); } });
  assert.equal(a.success, false);
  assert.equal(a.bothFailed, true);
  const b = await lead.submitLead({ data: {}, fetchImpl, sendEmail: () => false });
  assert.equal(b.bothFailed, true);
});

test('a double click yields one send and one GA4 lead event', async () => {
  const lead = loadClient();
  const guard = lead.createGuard();
  const events = [];
  const fetchImpl = fakeFetch({ '/api/lead': () => jsonRes(200, { success: true }), 'https://mail.test': () => jsonRes(200, { success: true }) });
  // Same control flow as the page handlers: guard, one id per intent, track once on success.
  let submissionId = null;
  async function onSubmit() {
    if (!guard.begin()) return 'ignored';
    try {
      if (!submissionId) submissionId = lead.newSubmissionId(undefined);
      const data = { submission_id: submissionId };
      const out = await lead.submitLead({ data, fetchImpl, sendEmail: () => lead.postFormSubmit(fetchImpl, 'https://mail.test', data) });
      if (out.success) {
        lead.trackLeadOnce((...a) => events.push(a), data.submission_id, { form_id: 'contact' });
        submissionId = null;
      }
      return out.success ? 'ok' : 'error';
    } finally {
      guard.end();
    }
  }
  const [first, second] = await Promise.all([onSubmit(), onSubmit()]);
  assert.deepEqual([first, second], ['ok', 'ignored']);
  assert.equal(fetchImpl.calls.filter((c) => c.url === '/api/lead').length, 1);
  assert.equal(events.length, 1);
});

test('collectFields trims strings and skips honeypot and non-strings', () => {
  const lead = loadClient();
  const out = lead.collectFields([['name', '  Asha  '], ['website', 'spam'], ['file', { size: 1 }], ['city', 'Surat']], ['website']);
  assert.deepEqual(JSON.parse(JSON.stringify(out)), { name: 'Asha', city: 'Surat' });
});

// ---------- server guard ----------

const h = (obj) => new Headers(obj);

test('origin check: production and local dev origins only', () => {
  assert.equal(isAllowedOrigin(h({ origin: 'https://qbitsenergy.com' })), true);
  assert.equal(isAllowedOrigin(h({ origin: 'https://www.qbitsenergy.com' })), true);
  assert.equal(isAllowedOrigin(h({ origin: 'http://localhost:4400' })), true);
  assert.equal(isAllowedOrigin(h({ origin: 'http://127.0.0.1:4321' })), true);
  assert.equal(isAllowedOrigin(h({ origin: 'http://[::1]:4400' })), true);
  assert.equal(isAllowedOrigin(h({ origin: 'https://evil.example' })), false);
  assert.equal(isAllowedOrigin(h({ origin: 'https://qbitsenergy.com.evil.example' })), false);
  assert.equal(isAllowedOrigin(h({ origin: 'http://qbitsenergy.com' })), false, 'plain http prod origin is refused');
  assert.equal(isAllowedOrigin(h({ origin: 'http://localhost.evil.example' })), false);
  assert.equal(isAllowedOrigin(h({ origin: 'null' })), false);
  assert.equal(isAllowedOrigin(h({})), false, 'neither Origin nor Referer');
  assert.equal(isAllowedOrigin(h({ referer: 'https://qbitsenergy.com/contact-us/' })), true);
  assert.equal(isAllowedOrigin(h({ referer: 'https://evil.example/x' })), false);
  assert.equal(isAllowedOrigin(h({ referer: 'not a url' })), false);
  assert.equal(isAllowedOrigin(h({ origin: 'https://evil.example', referer: 'https://qbitsenergy.com/' })), false, 'a bad Origin is not rescued by Referer');
});

test('readJsonObject never throws and bounds the body', async () => {
  const req = (body) => new Request('http://localhost/api', { method: 'POST', body });
  assert.equal((await readJsonObject(req('{"a":"b"}'))).ok, true);
  for (const bad of ['', 'nope', '[]', 'null', '"str"', '42']) {
    const r = await readJsonObject(req(bad));
    assert.equal(r.ok, false, bad);
    assert.equal(r.status, 400);
  }
  const big = await readJsonObject(req(JSON.stringify({ message: 'x'.repeat(40_000) })));
  assert.equal(big.ok, false);
  assert.equal(big.status, 413);
});

const ALLOWED = new Set(['name', 'email', 'phone', 'message', 'city', 'model', 'sourcePage', 'website']);
const caps = (key) => ({ name: 120, email: 254, phone: 30, message: 4000 })[key] ?? 200;

test('sanitizeFields: non-string values are rejected, not thrown on', () => {
  for (const value of [123, true, { a: 1 }, ['x']]) {
    const r = sanitizeFields({ name: value }, ALLOWED, caps);
    assert.equal(r.ok, false, JSON.stringify(value));
  }
  assert.equal(sanitizeFields({ unknownField: { nested: 1 } }, ALLOWED, caps).ok, true, 'unknown keys are dropped, not validated');
});

test('sanitizeFields: length caps, trimming, allow-list and control characters', () => {
  assert.equal(sanitizeFields({ name: 'x'.repeat(121) }, ALLOWED, caps).ok, false);
  assert.equal(sanitizeFields({ name: 'x'.repeat(120) }, ALLOWED, caps).ok, true);
  assert.equal(sanitizeFields({ email: 'a'.repeat(250) + '@b.co' }, ALLOWED, caps).ok, false);
  assert.equal(sanitizeFields({ phone: '9'.repeat(31) }, ALLOWED, caps).ok, false);
  assert.equal(sanitizeFields({ message: 'm'.repeat(4001) }, ALLOWED, caps).ok, false);
  assert.equal(sanitizeFields({ message: 'm'.repeat(4000) }, ALLOWED, caps).ok, true);
  assert.equal(sanitizeFields({ city: 'c'.repeat(201) }, ALLOWED, caps).ok, false);

  const r = sanitizeFields({ name: '  Asha\r\nBcc: x@y.z \u0000', message: 'line1\nline2\u0007', evil: 'dropped', model: 'M'.repeat(500), sourcePage: '/a'.repeat(300) }, ALLOWED, caps);
  assert.equal(r.ok, true);
  assert.equal(r.data.name, 'Asha  Bcc: x@y.z', 'single-line field loses CR/LF and control chars');
  assert.equal(r.data.message, 'line1\nline2', 'message keeps newlines, loses control chars');
  assert.ok(!('evil' in r.data));
  assert.equal(r.data.model.length, 80, 'prefill fields are truncated, not rejected');
  assert.equal(r.data.sourcePage.length, 200);
  assert.equal(sanitizeFields(Object.fromEntries(Array.from({ length: 81 }, (_, i) => ['k' + i, 'v'])), ALLOWED, caps).ok, false, 'too many keys');
});

test('honeypot trips on any truthy value of any type', () => {
  assert.equal(honeypotTripped({ website: 'http://spam' }, ['website']), true);
  assert.equal(honeypotTripped({ website: { a: 1 } }, ['website']), true);
  assert.equal(honeypotTripped({ website: '' }, ['website']), false);
  assert.equal(honeypotTripped({}, ['website']), false);
});

test('email, phone and submission id validators', () => {
  assert.equal(isValidEmail('a@b.co'), true);
  assert.equal(isValidEmail('a b@c.d'), false);
  assert.equal(isValidEmail('nope'), false);
  assert.equal(isValidPhone('+91 99791 92935'), true);
  assert.equal(isValidPhone('9979192935'), true);
  assert.equal(isValidPhone('12345'), false);
  assert.equal(isValidPhone('<script>1234567'), false);
  assert.equal(cleanSubmissionId('3f2b8c1e-aaaa-4bbb-8ccc-1234567890ab'), '3f2b8c1e-aaaa-4bbb-8ccc-1234567890ab');
  assert.equal(cleanSubmissionId('short'), '');
  assert.equal(cleanSubmissionId('x'.repeat(65)), '');
  assert.equal(cleanSubmissionId('bad id with spaces!'), '');
  assert.equal(cleanSubmissionId(undefined), '');
});

test('recent-id memory recognises duplicates, expires and stays bounded', () => {
  const ids = createRecentIds(3, 1000);
  assert.equal(ids.has('a', 0), false);
  ids.add('a', 0);
  assert.equal(ids.has('a', 500), true);
  assert.equal(ids.has('a', 2000), false, 'expired');
  ids.add('b', 3000); ids.add('c', 3001); ids.add('d', 3002); ids.add('e', 3003);
  assert.equal(ids.has('b', 3004), false, 'oldest evicted beyond max');
  assert.equal(ids.has('e', 3004), true);
  assert.equal(ids.has('', 0), false);
});

// ---------- batch1b review regressions ----------

test('origin check: same-origin https request host is allowed (workers.dev preview), cross-site still refused', () => {
  const hdr = (o) => new Headers(o);
  const url = 'https://qbits-energy-website.example.workers.dev/api/lead';
  assert.equal(isAllowedOrigin(hdr({ origin: 'https://qbits-energy-website.example.workers.dev' }), url), true);
  assert.equal(isAllowedOrigin(hdr({ referer: 'https://qbits-energy-website.example.workers.dev/contact-us/' }), url), true);
  assert.equal(isAllowedOrigin(hdr({ origin: 'https://evil.example' }), url), false);
  assert.equal(isAllowedOrigin(hdr({ origin: 'http://qbits-energy-website.example.workers.dev' }), url), false, 'http origin never matches an https request');
  assert.equal(isAllowedOrigin(hdr({ origin: 'https://evil.example' }), 'https://evil.example/api/lead'), true, 'same-origin to whatever host serves the Worker; the Worker is only reachable on its own hosts');
});

test('phones typed the way people really type them are accepted (form pattern= is ignored by browsers)', () => {
  assert.equal(isValidPhone('98765 43210 / 91234 56789'), true);
  assert.equal(isValidPhone('98765-43210, 91234-56789'), true);
  assert.equal(isValidPhone('(022) 2345 6789'), true);
  assert.equal(isValidPhone('+91-98765-43210'), true);
  assert.equal(isValidPhone('098765 43210'), true);
  assert.equal(isValidPhone('call me'), false);
  assert.equal(isValidPhone('1'.repeat(25)), false);
});

test('sanitizeFields: CRLF textareas count one char per newline and NBSP phones become plain spaces', () => {
  const allowed = new Set(['registeredAddress', 'phone']);
  const caps = (k) => (k === 'registeredAddress' ? 500 : 30);
  const address = Array.from({ length: 250 }, () => 'a').join('\r\n'); // 499 visible chars with LF, 748 with CRLF
  const r = sanitizeFields({ registeredAddress: address, phone: '+91 98765 43210' }, allowed, caps);
  assert.equal(r.ok, true);
  assert.equal(r.data.registeredAddress.includes('\r'), false);
  assert.equal(r.data.phone, '+91 98765 43210');
  assert.equal(isValidPhone(r.data.phone), true);
});

test('getAttribution() never throws when reading window.sessionStorage itself throws', () => {
  const sandbox = { URL, URLSearchParams, Promise, JSON, Date, Math, console };
  sandbox.window = sandbox;
  Object.defineProperty(sandbox, 'sessionStorage', { get() { throw new Error('SecurityError: storage blocked'); } });
  vm.createContext(sandbox);
  vm.runInContext(clientSource, sandbox);
  assert.deepEqual(JSON.parse(JSON.stringify(sandbox.QbLead.getAttribution())), {});
});

test('form pages call getAttribution() without touching window.sessionStorage directly', () => {
  for (const f of ['../src/pages/contact-us/index.astro', '../src/components/home/QuickLeadForm.astro', '../src/pages/download-datasheets/index.astro', '../src/pages/become-our-partner/index.astro']) {
    const src = readFileSync(new URL(f, import.meta.url), 'utf8');
    assert.ok(src.includes('lead.getAttribution()'), `${f} uses the safe zero-arg form`);
    assert.equal(/getAttribution\(\s*window\.sessionStorage/.test(src), false, `${f} must not read sessionStorage outside a try`);
  }
});

test('postLead and postFormSubmit abort a hung request instead of spinning forever', async () => {
  const sandbox = { URL, URLSearchParams, Promise, JSON, Date, Math, console, AbortController, setTimeout };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(clientSource, sandbox);
  let seenSignal = null;
  const fetchImpl = (url, init) => { seenSignal = init.signal; return Promise.resolve({ ok: true, json: async () => ({ success: true }) }); };
  assert.equal(await sandbox.QbLead.postLead(fetchImpl, {}), true);
  assert.ok(seenSignal && typeof seenSignal.aborted === 'boolean', 'an AbortSignal is passed to fetch');
});
