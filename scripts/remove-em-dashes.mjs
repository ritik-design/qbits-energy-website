import { readdir, readFile, writeFile, stat } from 'fs/promises';
import { join, extname } from 'path';

const TARGETS = [
  { dir: 'src/content/blog', exts: ['.md'] },
  { dir: 'src/content/glossary', exts: ['.md'] },
  { dir: 'src/pages', exts: ['.astro'] },
  { dir: 'src/components', exts: ['.astro'] },
];

async function walk(dir, exts) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(p, exts));
    else if (exts.includes(extname(entry.name).toLowerCase())) out.push(p);
  }
  return out;
}

let totalFiles = 0, changedFiles = 0, totalReplacements = 0;

for (const { dir, exts } of TARGETS) {
  const files = await walk(dir, exts);
  for (const f of files) {
    totalFiles++;
    const src = await readFile(f, 'utf8');
    if (!src.includes('\u2014')) continue;

    // Count occurrences
    const count = (src.match(/\u2014/g) || []).length;

    // Replace patterns:
    //  " — "  -> " - "  (most common: aside/break)
    //  "— "   -> "- "
    //  " —"   -> " -"
    //  "—"    -> "-"
    let out = src
      .replace(/ \u2014 /g, ' - ')
      .replace(/\u2014 /g, '- ')
      .replace(/ \u2014/g, ' -')
      .replace(/\u2014/g, '-');

    await writeFile(f, out, 'utf8');
    changedFiles++;
    totalReplacements += count;
    console.log(`✓ ${f}: ${count} replacements`);
  }
}

console.log(`\nDone. files=${totalFiles} changed=${changedFiles} replacements=${totalReplacements}`);
