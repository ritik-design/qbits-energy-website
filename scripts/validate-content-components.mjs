// Render markdown files through the site's content plugins without a full build.
// Usage: node scripts/validate-content-components.mjs <file.md> [...more]
//        node scripts/validate-content-components.mjs --all
// Fails (exit 1) on any chart/plugin error; reports component counts per file
// and callout bodies repeated verbatim across the checked files.
import { readFileSync, readdirSync } from 'node:fs';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import remarkCharts from '../src/lib/markdown/charts.mjs';
import remarkSteps from '../src/lib/markdown/steps.mjs';
import rehypeCallouts from '../src/lib/markdown/callouts.mjs';
import rehypeTables from '../src/lib/markdown/tables.mjs';

let files = process.argv.slice(2);
if (files.includes('--all')) {
  files = ['blog', 'glossary'].flatMap((d) =>
    readdirSync(`src/content/${d}`).filter((f) => f.endsWith('.md')).map((f) => `src/content/${d}/${f}`),
  );
}
if (!files.length) {
  console.error('usage: node scripts/validate-content-components.mjs <file.md>... | --all');
  process.exit(2);
}

const processor = await createMarkdownProcessor({
  remarkPlugins: [remarkCharts, remarkSteps],
  rehypePlugins: [rehypeCallouts, rehypeTables],
});

const calloutBodies = new Map();
let failed = 0;
for (const file of files) {
  const raw = readFileSync(file, 'utf8');
  const body = raw.startsWith('---') ? raw.slice(raw.indexOf('\n---', 3) + 4) : raw;
  try {
    const { code } = await processor.render(body, { fileURL: new URL(`file://${process.cwd()}/${file}`) });
    const count = (re) => (code.match(re) || []).length;
    const callouts = [...code.matchAll(/<aside class="callout[^"]*"[\s\S]*?<\/aside>/g)].map((m) => m[0]);
    for (const c of callouts) {
      const text = c.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      if (text.length < 60) continue;
      if (!calloutBodies.has(text)) calloutBodies.set(text, new Set());
      calloutBodies.get(text).add(file);
    }
    console.log(
      `ok   ${file}  callouts=${callouts.length} charts=${count(/<figure class="chart/g)} tables=${count(/<table/g)}`,
    );
  } catch (err) {
    failed++;
    console.log(`FAIL ${file}  ${err.message}`);
  }
}

const dupes = [...calloutBodies.entries()].filter(([, s]) => s.size > 1);
for (const [text, s] of dupes) {
  console.log(`DUPLICATE callout in ${s.size} files: "${text.slice(0, 90)}…" -> ${[...s].join(', ')}`);
}
console.log(`\n${files.length} files, ${failed} failed, ${dupes.length} duplicated callouts`);
process.exit(failed || dupes.length ? 1 : 0);
