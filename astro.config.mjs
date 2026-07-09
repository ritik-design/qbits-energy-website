// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// Build url→lastmod map from blog & glossary frontmatter dates at config load.
function buildLastmodMap() {
  const map = new Map();
  const collections = [
    { dir: 'src/content/blog', prefix: '/blog/', dateKey: 'date' },
    { dir: 'src/content/glossary', prefix: '/glossary/', dateKey: 'updatedDate' },
  ];
  for (const { dir, prefix, dateKey } of collections) {
    let entries = [];
    try { entries = readdirSync(dir); } catch { continue; }
    for (const file of entries) {
      if (!file.endsWith('.md')) continue;
      const slug = file.replace(/\.md$/, '');
      const path = join(dir, file);
      let date;
      try {
        const raw = readFileSync(path, 'utf8');
        const fm = raw.match(/^---\n([\s\S]*?)\n---/);
        if (fm) {
          const re = new RegExp(`^${dateKey}:\\s*(\\S+)`, 'm');
          const m = fm[1].match(re);
          if (m) date = new Date(m[1]);
        }
        if (!date || isNaN(+date)) date = statSync(path).mtime;
      } catch { continue; }
      map.set(`${prefix}${slug}/`, date.toISOString());
    }
  }
  return map;
}

const LASTMOD = buildLastmodMap();

// https://astro.build/config
export default defineConfig({
  site: 'https://qbitsenergy.com',
  output: 'static',
  adapter: cloudflare({ imageService: 'passthrough' }),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !page.includes('/search'),
      serialize(item) {
        // Higher priority for top-of-funnel landing pages
        if (item.url.match(/qbitsenergy\.com\/?$/)) item.priority = 1.0;
        else if (item.url.match(/\/(our-products|on-grid-inverter|hybrid-inverter|contact-us)\/?$/)) item.priority = 0.9;
        else if (item.url.match(/\/(residential-solution|c-i-solution|why-qbits|about-us|authorized-service-partners)\/?$/)) item.priority = 0.8;
        else if (item.url.includes('/blog/')) item.priority = 0.7;

        // Per-URL lastmod from blog/glossary frontmatter dates only.
        // Evergreen static pages omit lastmod rather than inherit the build timestamp.
        try {
          const path = new URL(item.url).pathname;
          const stamp = LASTMOD.get(path);
          if (stamp) item.lastmod = stamp;
          else delete item.lastmod;
        } catch {
          delete item.lastmod;
        }
        return item;
      },
    }),
  ],

  // 301 redirects: hand-authored directly in public/_redirects (one line per
  // entry) instead of here — see the note at the top of that file for why.
});
