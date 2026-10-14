import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { getInverterRecommendations, INVERTER_RULES } from '../src/data/inverter-recommendations.ts';
import { getProductById } from '../src/data/products.ts';

const HUBS = ['/on-grid-inverter/', '/hybrid-inverter/', '/c-i-solution/'];

test('every model id in the mapping exists in products.ts', () => {
  for (const rule of INVERTER_RULES) {
    assert.ok(HUBS.includes(rule.hub), rule.hub);
    assert.ok(rule.models.length >= 1 && rule.models.length <= 3, `${rule.pattern} model count`);
    for (const id of rule.models) assert.ok(getProductById(id), `missing product ${id}`);
  }
});

test('one slug per mapping branch returns the expected hub and models', () => {
  const cases = [
    ['hybrid-inverter-price-india', 'Buying Guide', '/hybrid-inverter/', ['QBH-3-6KS48P', 'QBH-7-8KS48P', 'QBH-5-12KS48P3']],
    ['3kw-solar-system-price-india', 'Buying Guide', '/on-grid-inverter/', ['QB-1.5-4.0KTLS', 'QBH-3-6KS48P']],
    ['5kw-solar-system-cost', 'Buying Guide', '/on-grid-inverter/', ['QB-4.6-6KTLS', 'QB-4-6KTLD', 'QBH-3-6KS48P']],
    ['best-10kw-solar-inverter-india-2026', 'Buying Guide', '/on-grid-inverter/', ['QB-6-17KTLC', 'QBH-5-12KS48P3']],
    ['factory-rooftop-solar-guide', 'Guide', '/c-i-solution/', ['QB-20-30KTLC', 'QB-30-40KTLC-Pro', 'QB-40-50KTLC-Plus']],
    ['mppt-tracking-explained', 'Technology', '/on-grid-inverter/', ['QB-1.5-4.0KTLS', 'QB-4.6-6KTLS', 'QB-6-17KTLC']],
  ];
  for (const [slug, category, hub, models] of cases) {
    const rec = getInverterRecommendations(slug, category);
    assert.ok(rec, slug);
    assert.equal(rec.hub, hub, slug);
    assert.deepEqual(rec.models, models, slug);
  }
});

test('mapping order: first match wins', () => {
  // "battery" beats "3kw" and "commercial"
  assert.equal(getInverterRecommendations('3kw-battery-backup-system', 'Guide').hub, '/hybrid-inverter/');
  assert.equal(getInverterRecommendations('commercial-battery-storage', 'Guide').hub, '/hybrid-inverter/');
});

test('unmatched slugs return null', () => {
  assert.equal(getInverterRecommendations('indian-startup-funding-news', 'Industry'), null);
});

test('software, case-study and Policy-without-subsidy slugs return null', () => {
  assert.equal(getInverterRecommendations('best-solar-design-software-india', 'Solar Software'), null);
  assert.equal(getInverterRecommendations('solar-crm-for-installers-hybrid', 'Buying Guide'), null);
  assert.equal(getInverterRecommendations('solar-proposal-tool-comparison', 'Comparison'), null);
  assert.equal(getInverterRecommendations('some-installer-inverter-rollout', 'Solar Software'), null);
  assert.equal(getInverterRecommendations('rooftop-solar-case-study-factory', 'Guide'), null);
  assert.equal(getInverterRecommendations('factory-install-results', 'Case Study'), null);
  // Policy without subsidy|surya|net-meter in the slug
  assert.equal(getInverterRecommendations('solar-inverter-bis-regulations-india', 'Policy'), null);
  assert.equal(getInverterRecommendations('mnre-rooftop-solar-scheme-5kw', 'Policy'), null);
});

test('tokens, not substrings: "ups" misses startups, "home" misses nursing-home, "string" misses stringent', () => {
  assert.equal(getInverterRecommendations('indian-solar-startups-funding', 'Industry'), null);
  assert.equal(getInverterRecommendations('solar-groups-and-setups', 'Guide'), null);
  assert.equal(getInverterRecommendations('stringent-solar-rules-explained', 'Guide'), null);
  assert.equal(getInverterRecommendations('solar-inverter-vs-ups', 'Comparison').hub, '/hybrid-inverter/');
  assert.equal(getInverterRecommendations('solar-for-rented-homes-tenants-india', 'Guide').models[0], 'QB-4.6-6KTLS');
  assert.equal(getInverterRecommendations('best-battery-brands', 'Guide').hub, '/hybrid-inverter/');
});

test('clinic, hospital and nursing-home slugs are C&I, ahead of the residential branch', () => {
  for (const slug of ['solar-for-clinic-nursing-home-india', 'solar-inverter-for-hospital', 'solar-for-clinic-india']) {
    const rec = getInverterRecommendations(slug, 'Buying Guide');
    assert.equal(rec.hub, '/c-i-solution/', slug);
    assert.deepEqual(rec.models, ['QB-20-30KTLC', 'QB-30-40KTLC-Pro', 'QB-40-50KTLC-Plus'], slug);
  }
  assert.equal(getInverterRecommendations('solar-system-for-2bhk-india', 'Buying Guide').hub, '/on-grid-inverter/');
});

test('dealer, distributor, partner, franchise and margin slugs get no module (partner journey covers them)', () => {
  for (const slug of ['solar-dealer-margin-india', 'dealer-vs-distributor-vs-epc', 'indian-inverter-partner-programmes', 'solar-distributor-credit-territory-terms', 'solar-dealership-inverter-guide', 'solar-franchise-opportunity', 'inverter-margin-structure']) {
    assert.equal(getInverterRecommendations(slug, 'Business'), null, slug);
  }
});

test('Policy posts check the subsidy/surya/net-meter branch before the C&I open-access match', () => {
  const policy = getInverterRecommendations('almm-list-ii-exemption-net-metering-open-access', 'Policy');
  assert.equal(policy.hub, '/on-grid-inverter/');
  assert.deepEqual(policy.models, ['QB-1.5-4.0KTLS', 'QB-4.6-6KTLS', 'QB-6-17KTLC']);
  // Same words in a non-Policy post keep the C&I order.
  assert.equal(getInverterRecommendations('net-metering-open-access-guide', 'Guide').hub, '/c-i-solution/');
});

test('blog template skips the generic product block when the module renders', () => {
  const src = readFileSync(fileURLToPath(new URL('../src/pages/blog/[slug].astro', import.meta.url)), 'utf8');
  assert.match(src, /hasInverterModule = !!getInverterRecommendations\(post\.id, category\)/);
  assert.match(src, /journey\.kind !== 'learning' && !hasInverterModule/);
});

test('Policy slugs with subsidy, surya or net-meter still map', () => {
  assert.equal(getInverterRecommendations('solar-subsidy-kerala-2026', 'Policy').hub, '/on-grid-inverter/');
  assert.equal(getInverterRecommendations('pm-surya-ghar-3kw-subsidy', 'Policy').models[0], 'QB-1.5-4.0KTLS');
  assert.ok(getInverterRecommendations('net-meter-rules-state', 'Policy'));
});

test('every blog slug resolves to null or valid hub with existing models', () => {
  const dir = fileURLToPath(new URL('../src/content/blog/', import.meta.url));
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const slug = file.replace(/\.md$/, '');
    const m = readFileSync(dir + file, 'utf8').match(/^category:\s*"?([^"\n]+?)"?\s*$/m);
    const rec = getInverterRecommendations(slug, m ? m[1] : '');
    if (!rec) continue;
    assert.ok(HUBS.includes(rec.hub), slug);
    assert.ok(rec.models.length >= 1 && rec.models.length <= 3, slug);
    for (const id of rec.models) assert.ok(getProductById(id), `${slug}: ${id}`);
  }
});
