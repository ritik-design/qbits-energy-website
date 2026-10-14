import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  CATEGORY_LINKS,
  CATEGORIES_WITHOUT_LINKS,
  TERM_LINKS,
  getGlossaryCommercialLinks,
  getGlossaryApplyRow,
} from '../src/data/glossary-commercial-links.ts';
import { getGlossaryJourney } from '../src/data/article-journeys.ts';

const root = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url));
const glossaryDir = root('src/content/glossary');
const entries = readdirSync(glossaryDir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const text = readFileSync(`${glossaryDir}/${f}`, 'utf8');
    const m = text.match(/^category:\s*"?([^"\n]+?)"?\s*$/m);
    return { slug: f.replace(/\.md$/, ''), category: m ? m[1] : '' };
  });

function targetExists(href) {
  assert.ok(href.startsWith('/') && href.endsWith('/'), `${href} must be a root-relative path with a trailing slash`);
  const blog = href.match(/^\/blog\/([^/]+)\/$/);
  if (blog) return ['md', 'mdx'].some((ext) => existsSync(root(`src/content/blog/${blog[1]}.${ext}`)));
  return existsSync(root(`src/pages${href}index.astro`));
}

test('every glossary category is classified (mapped or explicitly link-free)', () => {
  const categories = [...new Set(entries.map((e) => e.category))];
  assert.ok(categories.length > 10);
  for (const c of categories) {
    assert.ok(c in CATEGORY_LINKS || CATEGORIES_WITHOUT_LINKS.includes(c), `unclassified glossary category: ${c}`);
  }
});

test('spec categories map to the specified targets', () => {
  const hrefs = (c) => (CATEGORY_LINKS[c] ?? []).map((l) => l.href);
  for (const c of ['MPPT and Strings', 'Electrical Basics', 'Installation']) {
    assert.deepEqual(hrefs(c), ['/string-sizing-calculator/', '/download-datasheets/']);
  }
  assert.deepEqual(hrefs('Batteries'), ['/hybrid-inverter/', '/blog/battery-sizing-hybrid-solar/']);
  for (const c of ['Protection', 'Power Quality', 'Grid Compliance', 'Standards']) {
    assert.deepEqual(hrefs(c), ['/download-datasheets/']);
  }
  assert.equal(hrefs('Policies')[0], '/on-grid-inverter/');
  assert.equal(hrefs('Metering and Grid')[0], '/on-grid-inverter/');
  for (const c of ['Finance', 'Performance', 'Solar Resource', 'Panels and Modules']) {
    assert.deepEqual(CATEGORY_LINKS[c] ?? [], []);
    assert.ok(CATEGORIES_WITHOUT_LINKS.includes(c));
  }
});

test('every link target exists as a route or content file, with 1-2 links and descriptive text', () => {
  const all = [...Object.values(CATEGORY_LINKS), ...Object.values(TERM_LINKS)];
  for (const links of all) {
    assert.ok(links.length <= 2);
    for (const l of links) {
      assert.ok(targetExists(l.href), `missing target ${l.href}`);
      assert.ok(l.label.length > 15, `label too short: ${l.label}`);
      assert.doesNotMatch(l.label, /\b(best|guaranteed?|cheapest|#1|certified)\b/i);
    }
  }
});

test('per-term overrides name real glossary terms', () => {
  const slugs = new Set(entries.map((e) => e.slug));
  for (const k of Object.keys(TERM_LINKS)) assert.ok(slugs.has(k), `override for unknown term: ${k}`);
});

test('uncategorised and unknown categories get no links', () => {
  assert.deepEqual(getGlossaryCommercialLinks('made-up-term', ''), []);
  assert.deepEqual(getGlossaryCommercialLinks('made-up-term', 'Nonexistent'), []);
  const journey = { kind: 'learning', primaryHref: '/blog/', secondaryHref: '/glossary/' };
  assert.equal(getGlossaryApplyRow('made-up-term', '', journey), null);
});

test('inverter types route to the matching hub', () => {
  assert.equal(getGlossaryCommercialLinks('hybrid-inverter', 'Inverter Types')[0].href, '/hybrid-inverter/');
  assert.equal(getGlossaryCommercialLinks('string-inverter', 'Inverter Types')[0].href, '/on-grid-inverter/');
});

test('the row never duplicates the journey CTA and is skipped for technical journeys', () => {
  let rendered = 0;
  for (const { slug, category } of entries) {
    const journey = getGlossaryJourney(slug, category);
    const row = getGlossaryApplyRow(slug, category, journey);
    if (journey.kind === 'technical') {
      assert.equal(row, null, `${slug}: technical journey must skip the row`);
      continue;
    }
    if (!row) continue;
    rendered += 1;
    assert.ok(row.links.length >= 1 && row.links.length <= 2);
    for (const l of row.links) {
      assert.notEqual(l.href, journey.primaryHref, `${slug}: duplicates journey primary`);
      assert.notEqual(l.href, journey.secondaryHref, `${slug}: duplicates journey secondary`);
    }
  }
  assert.ok(rendered > 0, 'at least some glossary pages render the row');
});
