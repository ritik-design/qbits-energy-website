// Tests the REAL tracking script inlined in src/layouts/Layout.astro (extracted and run in a stub DOM).
// Run: node --test tests/cta-events.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';

const layout = readFileSync(new URL('../src/layouts/Layout.astro', import.meta.url), 'utf8');
const blocks = [...layout.matchAll(/<script is:inline>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
const found = blocks.filter((c) => c.includes('cta-events:begin'));
assert.equal(found.length, 1, 'expected exactly one inline tracking script');
const code = found[0];

function boot({ gtag = true, pathname = '/blog/x/' } = {}) {
  const events = [];
  const listeners = { click: [], input: [] };
  const window = {};
  if (gtag) window.gtag = (kind, name, params) => events.push({ kind, name, params });
  const document = { addEventListener: (t, fn) => (listeners[t] ||= []).push(fn) };
  const ctx = vm.createContext({ window, document, location: { pathname }, setTimeout, clearTimeout, decodeURIComponent });
  vm.runInContext(code, ctx);
  const resolve = (info) => {
    const r = window.QbCtaEvents.resolve({ pathname, ...info });
    return r && JSON.parse(JSON.stringify(r)); // normalise cross-realm objects
  };
  // minimal anchor stub: closest() returns self for matching selectors
  const anchor = (attrs, text = 'link') => {
    const a = {
      id: attrs.id || '', textContent: text,
      getAttribute: (k) => (k in attrs.attrs ? attrs.attrs[k] : null),
      closest(sel) {
        if (sel === '[data-cta]') return 'data-cta' in attrs.attrs ? a : null;
        if (sel === 'a[href]') return 'href' in attrs.attrs ? a : null;
        return null;
      },
    };
    return a;
  };
  const click = (attrs, text) => listeners.click.forEach((fn) => fn({ target: anchor(attrs, text) }));
  return { events, resolve, click, listeners, window, ctx };
}

test('related_inverter maps to related_inverter_click with link_type', () => {
  const { resolve } = boot();
  assert.deepEqual(resolve({ cta: 'related_inverter', model: 'QB-4-6KTLD', href: '/our-products/QB-4-6KTLD/' }),
    { name: 'related_inverter_click', params: { source_path: '/blog/x/', link_type: 'view_model', link_url: '/our-products/QB-4-6KTLD/', model_id: 'QB-4-6KTLD' } });
  const ds = resolve({ cta: 'related_inverter', model: 'QB-4-6KTLD', action: 'datasheet', href: '/datasheets/a.pdf' });
  assert.equal(ds.name, 'related_inverter_click');
  assert.equal(ds.params.link_type, 'datasheet');
  const hub = resolve({ cta: 'related_inverter', model: 'hub', href: '/on-grid-inverter/' });
  assert.equal(hub.params.link_type, 'hub');
  assert.equal('model_id' in hub.params, false);
});

test('glossary, calculator and datasheet-row events', () => {
  const { resolve } = boot({ pathname: '/glossary/mppt/' });
  const g = resolve({ cta: 'glossary_apply_click', href: '/string-sizing-calculator/', text: 'Check it' });
  assert.equal(g.name, 'glossary_apply_click');
  assert.equal(g.params.term, 'mppt');
  const c1 = resolve({ id: 'calc-datasheet', href: '/datasheets/q.pdf', pathname: '/string-sizing-calculator/' });
  assert.equal(c1.name, 'calculator_model_link');
  assert.equal(c1.params.link_type, 'datasheet');
  const c2 = resolve({ id: 'calc-product-page', href: '/our-products/QB-30-40KTLC-Pro/' });
  assert.equal(c2.params.model_id, 'QB-30-40KTLC-Pro');
  assert.equal(c2.params.link_type, 'product_page');
  const q = resolve({ href: '/contact-us/?subject=Product%20Inquiry&model=QB-5KS%2F6K&from=%2Fdownload-datasheets%2F#lead-form', pathname: '/download-datasheets/' });
  assert.equal(q.name, 'datasheet_row_quote_click');
  assert.equal(q.params.model_id, 'QB-5KS/6K');
  // same href on another page is not a datasheet row
  assert.equal(resolve({ href: '/contact-us/?model=X', pathname: '/blog/y/' }), null);
});

test('tel, WhatsApp, PDF and generic CTA', () => {
  const { resolve } = boot();
  assert.equal(resolve({ href: 'tel:+919979192935' }).name, 'phone_click');
  assert.equal(resolve({ href: 'https://wa.me/919979192935' }).name, 'whatsapp_click');
  assert.equal(resolve({ href: 'https://api.whatsapp.com/send?phone=1' }).name, 'whatsapp_click');
  assert.equal(resolve({ href: '/files/x.PDF?v=2' }).name, 'datasheet_download');
  const wa = resolve({ cta: 'product_whatsapp', model: 'QB-5KS', href: 'https://wa.me/1' });
  assert.equal(wa.name, 'whatsapp_click');
  assert.equal(wa.params.cta_id, 'product_whatsapp');
  assert.equal(wa.params.model_id, 'QB-5KS');
  const g = resolve({ cta: 'product_quote', model: 'QB-5KS', href: '/contact-us/', text: '  Request a quote  ' });
  assert.deepEqual(g, { name: 'cta_click', params: { cta_id: 'product_quote', cta_text: 'Request a quote', link_url: '/contact-us/', page_path: '/blog/x/', model_id: 'QB-5KS' } });
  assert.equal(resolve({ href: '/about/' }), null);
});

test('listener fires exactly one event per click', () => {
  const t = boot();
  t.click({ attrs: { href: '/our-products/QB-5KS/', 'data-cta': 'related_inverter', 'data-model': 'QB-5KS' } });
  t.click({ attrs: { href: '/datasheets/a.pdf', 'data-cta': 'related_inverter', 'data-model': 'QB-5KS', 'data-action': 'datasheet' } });
  t.click({ attrs: { href: 'https://wa.me/1', 'data-cta': 'product_whatsapp' } });
  t.click({ attrs: { href: '/files/a.pdf' } });
  t.click({ attrs: { href: '/about/' } });
  assert.deepEqual(t.events.map((e) => e.name), ['related_inverter_click', 'related_inverter_click', 'whatsapp_click', 'datasheet_download']);
  assert.ok(t.events.every((e) => e.kind === 'event'));
});

test('never throws without gtag, and does not double-bind', () => {
  const t = boot({ gtag: false });
  assert.doesNotThrow(() => t.click({ attrs: { href: 'tel:123' } }));
  assert.equal(t.events.length, 0);
  assert.doesNotThrow(() => t.listeners.click.forEach((fn) => fn({ target: null })));
  assert.doesNotThrow(() => t.listeners.click.forEach((fn) => fn({ target: {} })));
  // second run of the same script in the same window must not add listeners
  const before = t.listeners.click.length;
  vm.runInContext(code, t.ctx);
  assert.equal(t.listeners.click.length, before);
  assert.equal(before, 1);
});
