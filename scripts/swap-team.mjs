import sharp from 'sharp';

const pairs = [
  ['public/Tam/Nirav.png', 'public/team/nirav-dhanani.webp'],
  ['public/Tam/Keyur.png', 'public/team/keyur-rakholiya.webp'],
  ['public/Tam/Akash.png', 'public/team/akash-hirapara.webp'],
];

for (const [src, dst] of pairs) {
  await sharp(src).webp({ quality: 88 }).toFile(dst);
  const m = await sharp(dst).metadata();
  console.log(`${dst}: ${m.width}x${m.height}`);
}
