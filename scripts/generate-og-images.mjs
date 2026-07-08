// Generates per-page Open Graph images at build time: one per blog post and one per
// product, using a branded title-overlay template (dark background, footer-logo, brand
// accent bar). Output goes to public/og/ so Astro copies it into the static build as-is.
// Run before `astro build` (see package.json's "build" script).
import sharp from 'sharp';
import { readFile, readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

const WIDTH = 1200;
const HEIGHT = 630;
const OUT_DIR = 'public/og';
const BLOG_DIR = 'src/content/blog';
const PRODUCTS_FILE = 'src/data/products.ts';

const BRAND_500 = '#049D65';
const BRAND_700 = '#036046';
const SLATE_900 = '#0f172a';
const SLATE_800 = '#1e293b';

function escapeXml(str) {
  return str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));
}

// Rough word-wrap for a bold sans-serif: ~0.56em average advance per character.
function wrapText(text, fontSize, maxWidth, maxLines) {
  const avgCharWidth = fontSize * 0.56;
  const maxCharsPerLine = Math.floor(maxWidth / avgCharWidth);
  const words = text.split(/\s+/);
  const lines = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  if (lines.length > maxLines) {
    const truncated = lines.slice(0, maxLines);
    truncated[maxLines - 1] = truncated[maxLines - 1].replace(/\s*\S*$/, '') + '…';
    return truncated;
  }
  return lines;
}

async function buildSvg({ title, kicker, logoDataUri }) {
  const titleFontSize = title.length > 60 ? 52 : 60;
  const lines = wrapText(title, titleFontSize, WIDTH - 160, 4);
  const lineHeight = titleFontSize * 1.22;
  const blockHeight = lines.length * lineHeight;
  const startY = HEIGHT / 2 - blockHeight / 2 + titleFontSize * 0.7;

  const tspans = lines
    .map((line, i) => `<tspan x="80" y="${startY + i * lineHeight}">${escapeXml(line)}</tspan>`)
    .join('');

  return `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${SLATE_900}"/>
      <stop offset="100%" stop-color="${SLATE_800}"/>
    </linearGradient>
    <radialGradient id="glow" cx="88%" cy="8%" r="55%">
      <stop offset="0%" stop-color="${BRAND_500}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${BRAND_500}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accentBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${BRAND_500}"/>
      <stop offset="100%" stop-color="${BRAND_700}"/>
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>
  <rect x="0" y="0" width="${WIDTH}" height="10" fill="url(#accentBar)"/>

  <image x="80" y="64" width="141" height="45" href="${logoDataUri}"/>

  ${kicker ? `<text x="80" y="${startY - titleFontSize * 1.5}" font-family="Inter, Liberation Sans, DejaVu Sans, sans-serif" font-size="24" font-weight="700" letter-spacing="2" fill="${BRAND_500}">${escapeXml(kicker.toUpperCase())}</text>` : ''}

  <text font-family="Inter, Liberation Sans, DejaVu Sans, sans-serif" font-weight="800" font-size="${titleFontSize}" fill="#ffffff">${tspans}</text>

  <text x="80" y="${HEIGHT - 56}" font-family="Inter, Liberation Sans, DejaVu Sans, sans-serif" font-size="22" font-weight="500" fill="#94a3b8">qbitsenergy.com</text>
</svg>`;
}

async function renderOg(outPath, opts) {
  const svg = await buildSvg(opts);
  await sharp(Buffer.from(svg)).webp({ quality: 85 }).toFile(outPath);
}

async function main() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

  // librsvg's <image> embed doesn't reliably decode WebP data URIs — use PNG instead.
  const logoPngBuf = await sharp('public/images/footer-logo.webp').png().toBuffer();
  const logoDataUri = `data:image/png;base64,${logoPngBuf.toString('base64')}`;

  let generated = 0;

  // Blog posts
  const blogFiles = (await readdir(BLOG_DIR)).filter((f) => f.endsWith('.md'));
  for (const file of blogFiles) {
    const slug = file.replace(/\.md$/, '');
    const raw = await readFile(join(BLOG_DIR, file), 'utf8');
    const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const titleMatch = fm.match(/^title:\s*"?(.*?)"?\s*$/m);
    const categoryMatch = fm.match(/^category:\s*"?(.*?)"?\s*$/m);
    const title = titleMatch ? titleMatch[1] : slug;
    const category = categoryMatch ? categoryMatch[1] : 'Blog';

    const outPath = join(OUT_DIR, `blog-${slug}.webp`);
    await renderOg(outPath, { title, kicker: category, logoDataUri });
    generated++;
  }
  console.log(`✓ ${blogFiles.length} blog OG images generated`);

  // Products
  const productsSrc = await readFile(PRODUCTS_FILE, 'utf8');
  const productRe = /id:\s*'([^']+)'[\s\S]*?name:\s*'([^']+)'[\s\S]*?category:\s*'([^']+)'/g;
  let match;
  const products = [];
  const seen = new Set();
  while ((match = productRe.exec(productsSrc))) {
    const [, id, name, category] = match;
    if (seen.has(id)) continue;
    seen.add(id);
    products.push({ id, name, category });
  }
  for (const product of products) {
    const kicker = product.category === 'on-grid' ? 'On-Grid Inverter' : 'Hybrid Inverter';
    const outPath = join(OUT_DIR, `product-${product.id}.webp`);
    await renderOg(outPath, { title: `Qbits ${product.name}`, kicker, logoDataUri });
    generated++;
  }
  console.log(`✓ ${products.length} product OG images generated`);

  console.log(`\nDone. ${generated} OG images written to ${OUT_DIR}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
