#!/usr/bin/env node
/**
 * Submit the built sitemap's canonical URLs to IndexNow (Bing, Yandex, Naver,
 * Seznam — Google does not participate).
 *
 * THE BUILD OUTPUT IS dist/client/, NOT dist/. The Cloudflare adapter splits
 * the build into dist/client (static assets, where public/ and the sitemap
 * land) and dist/server. Pointing this at dist/ finds no sitemap at all.
 *
 * The URL list comes from the built sitemap rather than the route table, so it
 * inherits the exclusion declared in astro.config.mjs — /search is filtered out
 * there, and walking src/pages would push it.
 *
 * Only sitemap-N.xml is read, never sitemap-index.xml: an index yields .xml
 * entries that IndexNow accepts with a 200 while indexing nothing.
 *
 * Dry run by default. Pass --submit to actually POST.
 */
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://qbitsenergy.com';
const HOST = 'qbitsenergy.com';
const KEY = 'a9eb6699c45cb7b9f1fe662ffa3c7cf8';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const DIST = path.resolve('dist/client');

const shouldSubmit = process.argv.includes('--submit');

/* The key must be reachable at the live host root or IndexNow rejects the whole
   batch with 403 — not per URL. A missing copy here means no build has run. */
if (!fs.existsSync(path.join(DIST, `${KEY}.txt`))) {
  console.error(`${KEY}.txt is missing from dist/client/. Run \`npm run build\` first.`);
  process.exit(1);
}

const sitemaps = fs
  .readdirSync(DIST)
  .filter((f) => /^sitemap-\d+\.xml$/.test(f))
  .map((f) => path.join(DIST, f));

if (sitemaps.length === 0) {
  console.error('No dist/client/sitemap-N.xml found. Build the site before submitting.');
  process.exit(1);
}

const urlList = [
  ...new Set(
    sitemaps.flatMap((file) =>
      [...fs.readFileSync(file, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]),
    ),
  ),
].filter((url) => url === SITE || url === `${SITE}/` || url.startsWith(`${SITE}/`));

const sitemapish = urlList.filter((u) => u.endsWith('.xml'));
if (sitemapish.length) {
  console.error(
    `Refusing to submit: ${sitemapish.length} entr(ies) are sitemap files, not pages ` +
      `(e.g. ${sitemapish[0]}). Check which file this script is reading.`,
  );
  process.exit(1);
}

if (urlList.length === 0) {
  console.error('The sitemap parsed to zero canonical URLs — refusing to submit an empty batch.');
  process.exit(1);
}

if (!shouldSubmit) {
  console.log(`IndexNow dry run: ${urlList.length} canonical URLs from ${sitemaps.length} sitemap(s).`);
  console.log(`  key location: ${KEY_LOCATION}`);
  console.log(`  first: ${urlList[0]}`);
  console.log(`  last:  ${urlList[urlList.length - 1]}`);
  console.log('Pass --submit to send them.');
  process.exit(0);
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

if (![200, 202].includes(response.status)) {
  const body = await response.text();
  console.error(`IndexNow submission failed (${response.status}): ${body.slice(0, 500)}`);
  process.exit(1);
}

console.log(`IndexNow accepted ${urlList.length} canonical URLs (${response.status}).`);
