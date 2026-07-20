import sharp from 'sharp';
import { mkdir } from 'fs/promises';

const SRC = 'Expo';
const OUT = 'public/events/global-solar-expo-varanasi-2026';

// source number -> descriptive slug (SEO-friendly filenames)
const PHOTOS = [
  { src: '13.png', slug: 'qbits-stall-ai-inverter-display' },
  { src: '12.png', slug: 'visitors-at-qbits-stall' },
  { src: '2.png',  slug: 'visitor-product-demo' },
  { src: '5.png',  slug: 'qbits-inverter-lineup' },
  { src: '1.png',  slug: 'qbits-team-at-booth' },
  { src: '6.png',  slug: 'qbits-on-sponsor-board' },
  { src: '7.png',  slug: 'global-solar-expo-varanasi-entrance' },
];

await mkdir(OUT, { recursive: true });

for (const { src, slug } of PHOTOS) {
  const inPath = `${SRC}/${src}`;
  const before = await sharp(inPath).metadata();

  // trim() removes uniform border matching the top-left pixel — kills the
  // white letterbox bars on the square-padded shots, no-ops on the rest.
  const trimmed = sharp(inPath).trim({ threshold: 12 });
  const { info } = await trimmed.toBuffer({ resolveWithObject: true });

  await sharp(inPath)
    .trim({ threshold: 12 })
    .resize({ width: 1000, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUT}/${slug}.webp`);

  const pct = Math.round((info.height / before.height) * 100);
  console.log(
    `${src.padEnd(7)} ${before.width}x${before.height} -> ${info.width}x${info.height}` +
    `${pct < 98 ? `  (trimmed to ${pct}% height)` : ''}  =>  ${slug}.webp`
  );
}
