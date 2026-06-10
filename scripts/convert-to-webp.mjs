import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { existsSync } from 'fs';

const ROOT = 'public';
const EXTS = new Set(['.png', '.jpg', '.jpeg']);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(p));
    else if (EXTS.has(extname(entry.name).toLowerCase())) out.push(p);
  }
  return out;
}

const files = await walk(ROOT);
let converted = 0, skipped = 0, failed = 0;

for (const f of files) {
  const webp = f.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  if (existsSync(webp)) { skipped++; continue; }
  try {
    await sharp(f).webp({ quality: 82 }).toFile(webp);
    converted++;
    console.log(`✓ ${f} -> ${webp}`);
  } catch (e) {
    failed++;
    console.log(`✗ ${f}: ${e.message}`);
  }
}

console.log(`\nDone. converted=${converted} skipped=${skipped} failed=${failed} total=${files.length}`);
