import assert from 'node:assert/strict';
import test from 'node:test';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';

import remarkCharts, { renderChartBlock, formatNumber, applyUnit } from '../src/lib/markdown/charts.mjs';
import remarkSteps from '../src/lib/markdown/steps.mjs';
import rehypeCallouts from '../src/lib/markdown/callouts.mjs';
import rehypeTables from '../src/lib/markdown/tables.mjs';

// Same plugin order as astro.config.mjs, run through Astro's own markdown pipeline.
const processor = await createMarkdownProcessor({
  remarkPlugins: [remarkCharts, remarkSteps],
  rehypePlugins: [rehypeCallouts, rehypeTables],
});
const plain = await createMarkdownProcessor({});
const FILE = new URL('file:///site/src/content/blog/test-post.md');
const render = async (md, p = processor) => (await p.render(md, { fileURL: FILE })).code;

// ------------------------------------------------------------------ callouts

for (const [marker, cls, title] of [
  ['NOTE', 'note', 'Note'],
  ['TIP', 'tip', 'Tip'],
  ['IMPORTANT', 'important', 'Important'],
  ['WARNING', 'warning', 'Warning'],
  ['CAUTION', 'caution', 'Caution'],
  ['KEYTAKEAWAYS', 'keytakeaways', 'Key takeaways'],
  ['EXAMPLE', 'example', 'Worked example'],
  ['FORMULA', 'formula', 'Formula'],
  ['CHECKLIST', 'checklist', 'Checklist'],
]) {
  test(`callout [!${marker}] renders an accessible aside`, async () => {
    const html = await render(`> [!${marker}]\n> Body text here.\n`);
    assert.match(html, new RegExp(`<aside class="callout callout--${cls}" role="note">`));
    assert.match(html, /<svg[^>]+aria-hidden="true"/);
    assert.match(html, new RegExp(`<span class="callout__label">${title}</span>`));
    assert.match(html, /<div class="callout__body"><p>Body text here\.<\/p><\/div>/);
    assert.doesNotMatch(html, /<blockquote/);
    assert.doesNotMatch(html, /\[!/);
  });
}

test('callout markers are case-insensitive', async () => {
  const html = await render('> [!tip]\n> Lower case works.\n');
  assert.match(html, /callout--tip/);
});

test('callout custom title on the marker line', async () => {
  const html = await render('> [!TIP] Sizing rule of thumb\n> Keep DC/AC near 1.2.\n');
  assert.match(html, /<span class="callout__label">Sizing rule of thumb<\/span>/);
  assert.match(html, /<p>Keep DC\/AC near 1\.2\.<\/p>/);
  assert.doesNotMatch(html, /Sizing rule of thumb[\s\S]*<p>Sizing/);
});

test('callout renders nested markdown: lists, bold, links, code', async () => {
  const md = [
    '> [!KEYTAKEAWAYS]',
    '> - **MPPT** gains 10 to 30 percent.',
    '> - See the [glossary](/glossary/mppt/) and `Vmp`.',
    '',
  ].join('\n');
  const html = await render(md);
  assert.match(html, /<aside class="callout callout--keytakeaways"/);
  assert.match(html, /<ul>[\s\S]*<strong>MPPT<\/strong> gains 10 to 30 percent\.[\s\S]*<\/ul>/);
  assert.match(html, /<a href="\/glossary\/mppt\/">glossary<\/a>/);
  assert.match(html, /<code>Vmp<\/code>/);
});

test('callout with multiple paragraphs and a table inside', async () => {
  const md = '> [!EXAMPLE]\n> First paragraph.\n>\n> Second paragraph.\n>\n> | A | B |\n> | --- | --- |\n> | 1 | 2 |\n';
  const html = await render(md);
  assert.match(html, /<p>First paragraph\.<\/p>/);
  assert.match(html, /<p>Second paragraph\.<\/p>/);
  assert.match(html, /<div class="table-wrap"/);
});

test('plain blockquotes render exactly as before', async () => {
  const samples = [
    '> **TL;DR**\n> - one\n> - two\n',
    '> Just a quoted sentence with a [link](/x/).\n',
    '> **Direct answer.** MPPT is better.\n',
    '> [!UNKNOWN] not a real type\n> body\n',
    '> A paragraph mentioning [!NOTE] mid-line is fine.\n',
  ];
  for (const md of samples) {
    assert.equal(await render(md), await render(md, plain), md);
  }
});

test('nested blockquote inside a callout stays a blockquote', async () => {
  const html = await render('> [!NOTE]\n> Outer.\n>\n> > Inner quote.\n');
  assert.match(html, /<aside class="callout callout--note"/);
  assert.match(html, /<blockquote>[\s\S]*Inner quote\.[\s\S]*<\/blockquote>/);
});

// ------------------------------------------------------------------ charts

const BAR_YAML = `type: bar
title: Typical on-grid inverter price per watt by capacity
unit: "₹/W"
source: "Retailer listings, as of Oct 2026"
sourceUrl: https://example.com/listings
note: "Ranges vary by city and installer"
data:
  - { label: "3 kW", value: 9.5 }
  - { label: "5 kW", value: 8.2 }
  - { label: "10 kW", value: 7.1 }`;

const chartMd = (body) => '```chart\n' + body + '\n```\n';

test('bar chart (YAML): svg, figcaption, source link, note, hidden table', async () => {
  const html = await render(chartMd(BAR_YAML));
  assert.match(html, /<figure class="chart chart--bar">/);
  assert.match(html, /<svg class="chart__svg chart__svg--lg" viewBox="0 0 520 [\d.]+" role="img" aria-label="Bar chart: Typical on-grid/);
  assert.match(html, /<svg class="chart__svg chart__svg--sm" viewBox="0 0 340 [\d.]+" role="img"/);
  assert.equal((html.match(/<svg /g) || []).length, 2, 'one wide and one narrow layout');
  assert.equal((html.match(/<rect /g) || []).length, 6, '3 bars x 2 layouts');
  assert.match(html, /<figcaption class="chart__caption"><strong class="chart__title">Typical on-grid inverter price per watt by capacity<\/strong>/);
  assert.match(html, /<a href="https:\/\/example\.com\/listings"[^>]*>Source: Retailer listings, as of Oct 2026<\/a>/);
  assert.match(html, /<span class="chart__note">Ranges vary by city and installer<\/span>/);
  assert.match(html, /<table class="chart__table"><caption>Typical on-grid[\s\S]*<th scope="row">3 kW<\/th><td>₹9\.5\/W<\/td>/);
  assert.match(html, />₹9\.5\/W<\/text>/);
  assert.doesNotMatch(html, /<script/);
});

test('bar chart accepts JSON', async () => {
  const json = JSON.stringify({ type: 'bar', title: 'T', source: 'S', unit: '%', data: [{ label: 'A', value: 10 }, { label: 'B', value: 20 }] });
  const html = await render(chartMd(json));
  assert.match(html, /chart--bar/);
  assert.match(html, />20%<\/text>/);
});

test('hbar chart with long labels wraps them and shows values', async () => {
  const html = renderChartBlock(`type: hbar
title: Cost per kWh delivered
unit: "₹/kWh"
source: "Calculated in this article"
data:
  - { label: "VRLA 150Ah 12V lead-acid battery", value: 41.3 }
  - { label: "LiFePO4 2.4kWh", value: 7.5 }`);
  assert.match(html, /chart--hbar/);
  assert.match(html, /<tspan/);
  assert.match(html, />₹41\.3\/kWh<\/text>/);
  assert.match(html, /<tspan[^>]*>lead-acid<\/tspan>|<tspan[^>]*>battery<\/tspan>/);
});

test('line chart: single series and multi-series with legend', () => {
  const single = renderChartBlock(`type: line
title: Degradation
unit: "%"
source: "Datasheet"
data:
  - { label: "Year 1", value: 100 }
  - { label: "Year 10", value: 92 }
  - { label: "Year 25", value: 84.8 }`);
  assert.match(single, /<path d="M[\d. L]+" fill="none"/);
  assert.equal((single.match(/<circle /g) || []).length, 6);

  const multi = renderChartBlock(`type: line
title: Two series
source: "Made up for the test"
series:
  - name: Alpha
    data: [{ label: "2024", value: 1 }, { label: "2025", value: 2 }]
  - name: Beta
    data: [{ label: "2024", value: 2 }, { label: "2025", value: 3 }]`);
  assert.match(multi, /<ul class="chart__legend">.*Alpha.*Beta/);
  assert.equal((multi.match(/<path /g) || []).length, 4);
  assert.match(multi, /stroke-dasharray/);
});

test('stacked-bar chart', () => {
  const html = renderChartBlock(`type: stacked-bar
title: Split
unit: kWh
source: "Test"
series:
  - { name: Self-use, data: [{ label: "Jan", value: 10 }, { label: "Feb", value: 12 }] }
  - { name: Export, data: [{ label: "Jan", value: 5 }, { label: "Feb", value: 6 }] }`);
  assert.match(html, /chart--stacked-bar/);
  assert.equal((html.match(/<rect /g) || []).length, 8);
  assert.match(html, />15 kWh<\/text>/); // stack total
});

test('range bars (min/max) render a floating bar and a range label', () => {
  const html = renderChartBlock(`type: bar
title: Price range
unit: "₹/W"
source: "Quotes"
data:
  - { label: "3 kW", min: 8, max: 11 }
  - { label: "5 kW", min: 7, max: 9.5 }`);
  assert.match(html, />₹8–11\/W<\/text>/);
  assert.match(html, /<th scope="col">Minimum<\/th><th scope="col">Maximum<\/th>/);
});

test('₹ values use Indian digit grouping; other units use thousands grouping', () => {
  assert.equal(formatNumber(150000, { indian: true }), '1,50,000');
  assert.equal(formatNumber(12345678, { indian: true }), '1,23,45,678');
  assert.equal(formatNumber(999, { indian: true }), '999');
  assert.equal(formatNumber(1497, { indian: false }), '1,497');
  assert.equal(formatNumber(41.2999, { indian: true }), '41.3');
  assert.equal(applyUnit('1,50,000', '₹'), '₹1,50,000');
  assert.equal(applyUnit('9.5', '₹/W'), '₹9.5/W');
  assert.equal(applyUnit('5', 'kW'), '5 kW');
  assert.equal(applyUnit('12', '%'), '12%');
  const html = renderChartBlock(`type: bar
title: System cost
unit: "₹"
source: "Quotes"
data:
  - { label: "3 kW", value: 150000 }
  - { label: "5 kW", value: 235000 }`);
  assert.match(html, />₹1,50,000<\/text>/);
  assert.match(html, />₹2,35,000<\/text>/);
});

test('chart validation throws a build error that names the file', async () => {
  await assert.rejects(render(chartMd(BAR_YAML.replace(/^source:.*\n/m, ''))), /\[chart\].*test-post\.md.*"source" is required/);
  await assert.rejects(render(chartMd(BAR_YAML.replace(/^source:.*\n/m, 'source: "   "\n'))), /"source" is required/);
  await assert.rejects(render(chartMd(BAR_YAML.replace(/^title:.*\n/m, ''))), /"title" is required/);
  await assert.rejects(render(chartMd('type: bar\ntitle: T\nsource: S\ndata: []')), /no data points/);
  await assert.rejects(render(chartMd('type: bar\ntitle: T\nsource: S')), /no data points/);
  await assert.rejects(render(chartMd('type: bar\ntitle: T\nsource: S\ndata:\n  - { label: A, value: "ten" }')), /non-numeric/);
  await assert.rejects(render(chartMd('type: bar\ntitle: T\nsource: S\ndata:\n  - { label: A }')), /non-numeric/);
  await assert.rejects(render(chartMd('type: bar\ntitle: T\nsource: S\ndata:\n  - { label: A, value: -3 }')), /negative/);
  await assert.rejects(render(chartMd('type: pie\ntitle: T\nsource: S\ndata:\n  - { label: A, value: 1 }')), /unknown type/);
  await assert.rejects(render(chartMd('type: bar\ntitle: T\nsource: S\nsourceUrl: not-a-url\ndata:\n  - { label: A, value: 1 }')), /sourceUrl/);
  await assert.rejects(render(chartMd('type: bar\ntitle: [unclosed')), /could not parse/);
  await assert.rejects(render(chartMd('type: stacked-bar\ntitle: T\nsource: S\ndata:\n  - { label: A, value: 1 }')), /at least two series/);
  await assert.rejects(render(chartMd('type: line\ntitle: T\nsource: S\ndata:\n  - { label: A, min: 1, max: 2 }')), /range/);
});

test('chart text is HTML-escaped', () => {
  const html = renderChartBlock('type: bar\ntitle: "A <b>&</b> B"\nsource: "x & y"\ndata:\n  - { label: "<i>", value: 1 }');
  assert.doesNotMatch(html, /<b>|<i>/);
  assert.match(html, /A &lt;b&gt;&amp;&lt;\/b&gt; B/);
});

test('other code fences are untouched', async () => {
  const md = '```js\nconst a = 1;\n```\n';
  assert.equal(await render(md), await render(md, plain));
});

// ------------------------------------------------------------------ tables

const TABLE = '| Panel | Vmp | Note |\n| --- | --- | --- |\n| 300 W | 36 V | legacy |\n| 375 W | 38 V | modern |\n';

test('tables are wrapped in a scrollable, labelled, focusable region', async () => {
  const html = await render('## Sizing table\n\n' + TABLE);
  assert.match(html, /<div class="table-wrap" role="region" aria-label="Table: Sizing table" tabindex="0" style="--cols:3">\s*<table>/);
  assert.match(html, /<\/table>\s*<\/div>/);
  assert.equal((html.match(/class="table-wrap"/g) || []).length, 1);
});

test('"Table: caption" line becomes <caption> and is removed from the body', async () => {
  const html = await render('Intro paragraph.\n\nTable: PWM yield by panel type\n\n' + TABLE);
  assert.match(html, /<caption>PWM yield by panel type<\/caption>/);
  assert.match(html, /aria-label="PWM yield by panel type"/);
  assert.doesNotMatch(html, /<p>Table:/);
  assert.match(html, /<p>Intro paragraph\.<\/p>/);
});

test('caption line keeps inline markdown (bold, code)', async () => {
  const html = await render('Table: With **bold** and `code`\n\n' + TABLE);
  assert.match(html, /<caption>With <strong>bold<\/strong> and <code>code<\/code><\/caption>/);
});

test('a "Table:" paragraph not followed by a table is left alone', async () => {
  const html = await render('Table: not a caption\n\nSome other paragraph.\n');
  assert.match(html, /<p>Table: not a caption<\/p>/);
});

test('numeric columns are marked for right alignment; text columns are not', async () => {
  const html = await render(
    '| Item | Price | Warranty | Notes |\n| --- | --- | --- | --- |\n| A | ₹8,000–₹12,000 | 5 years | good value |\n| B | ₹10,000 | 3 years | fine |\n| C | ₹1,50,000 | 10 years | premium |\n',
  );
  assert.match(html, /<th class="num">Price<\/th>/);
  assert.match(html, /<td class="num">₹1,50,000<\/td>/);
  assert.match(html, /<td class="num">5 years<\/td>/);
  assert.doesNotMatch(html, /<th class="num">Item/);
  assert.doesNotMatch(html, /<th class="num">Notes/);
  assert.doesNotMatch(html, /<td class="num">good value/);
});

test('explicit GFM alignment is respected', async () => {
  const html = await render('| A | B |\n| --- | :---: |\n| x | 10 |\n| y | 20 |\n');
  assert.match(html, /<td align="center">10<\/td>/);
  assert.doesNotMatch(html, /class="num"/);
});

test('table content is preserved (links, bold) after wrapping', async () => {
  const md = '| Brand | Link |\n| --- | --- |\n| **Qbits** | [site](/our-products/) |\n';
  const html = await render(md);
  assert.match(html, /<strong>Qbits<\/strong>/);
  assert.match(html, /<a href="\/our-products\/">site<\/a>/);
});

// ------------------------------------------------------------------ steps

test('<!-- steps --> numbers the next ordered list and drops the comment', async () => {
  const html = await render('<!-- steps -->\n1. Measure Voc.\n2. Check **Vmp**.\n3. Size the string.\n');
  assert.match(html, /<ol class="steps">/);
  assert.doesNotMatch(html, /<!--/);
  assert.equal((html.match(/<li>/g) || []).length, 3);
});

test('ordinary ordered lists are untouched', async () => {
  const md = '1. one\n2. two\n';
  assert.equal(await render(md), await render(md, plain));
});

test('<!-- steps --> not followed by an ordered list is a build error', async () => {
  await assert.rejects(render('<!-- steps -->\n\n- bullet\n'), /\[steps\].*test-post\.md/);
});

// ------------------------------------------------------------------ combined

test('callout + chart + table + steps together', async () => {
  const md = [
    '> [!KEYTAKEAWAYS]',
    '> - Point one.',
    '',
    '```chart',
    BAR_YAML,
    '```',
    '',
    'Table: A caption',
    '',
    TABLE,
    '<!-- steps -->',
    '1. a',
    '2. b',
    '',
  ].join('\n');
  const html = await render(md);
  for (const re of [/callout--keytakeaways/, /<figure class="chart/, /<caption>A caption<\/caption>/, /<ol class="steps">/]) {
    assert.match(html, re);
  }
});

test('numbers stay glued to their units when long labels wrap', () => {
  const html = renderChartBlock('type: hbar\ntitle: T\nsource: S\ndata:\n  - { label: "36-cell, 75 W (Vmp 17.5 V)", value: 82 }');
  assert.doesNotMatch(html, /<tspan[^>]*>V\)<\/tspan>/);
  assert.doesNotMatch(html, /\u00a0/);
});
