import sharp from 'sharp';
const src = 'public/team/piyush-chandel.webp';
const meta = await sharp(src).metadata();
console.log('original:', meta.width, 'x', meta.height);
// Source 800x800 stage photo. Piyush is on the right half holding a mic.
// His head is around x=540..680, y=120..280. Crop 280x350 around head + torso.
await sharp(src)
  .extract({ left: 420, top: 80, width: 280, height: 360 })
  .resize(600, 750, { fit: 'cover', position: 'top' })
  .webp({ quality: 85 })
  .toFile('public/team/piyush-chandel-cropped.webp');
const m2 = await sharp('public/team/piyush-chandel-cropped.webp').metadata();
console.log('output:', m2.width, 'x', m2.height);
