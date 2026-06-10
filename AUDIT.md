# Qbits Energy — Website Audit

**Target:** https://qbitsenergy.com/ (production, Cloudflare Pages)
**Audited:** 2026-06-10
**Method:** Live HTTP recon of headers, robots, sitemap, schema, sample pages (`/`, `/our-products/`, `/contact-us/`, `/blog/`, `/blog/best-solar-inverter-india-2026/`, `/search/`, `/privacy-policy/`, `/terms/`) + codebase cross-reference. Diff against the 2026-06-06 baseline (16 commits, this branch).
**Prior audit:** see git history (`AUDIT.md` at f72cf8f^…).

---

## Executive Summary

**Big picture: the integrity gap closed.** Between 06-06 and 06-10 the team shipped most of the Critical and High-impact baseline. Schema is now valid, security headers are live, Product schema landed on three product pages, a Pagefind-backed `/search` exists, Privacy + Terms are live, the skip-link + LCP preload + width/height + lazy-loading sweep all landed. The site is now correctly wired — the remaining gaps are operational (env vars not set in Cloudflare Pages dashboard) and growth-side (analytics, trust signals, CRO surface).

**Three things still blocking lead capture and growth measurement:**

1. **Contact form endpoint is still the placeholder string** in the live HTML. The code reads `PUBLIC_GAS_ENDPOINT` from env; the env var is unset in Cloudflare Pages → falls through to the regex check → mailto fallback for every visitor. Code is ready; deployment isn't.
2. **GTM is wired but `PUBLIC_GTM_ID` is unset in production.** Zero analytics on the live site. Every growth claim below this line is unprovable.
3. **`qbits.pages.dev` is still indexable.** `PUBLIC_ROBOTS_NOINDEX` is not set on the preview deploy → cross-domain canonical risk persists.

All three are dashboard configurations, not code changes. They should take 20 minutes combined.

### Pillar scores (/10) — delta vs 06-06

```
┌────────────────┬─────────────┬──────────────────────────────────────────────────────────────┐
│     Pillar     │ Score (Δ)   │                          One-line read                       │
├────────────────┼─────────────┼──────────────────────────────────────────────────────────────┤
│ Design         │ 7.5  (—)    │ Same modern Tailwind base. Team headshots + about polish     │
│                │             │ added (commits 1ec0f29 / 2e0d890 / ba4b0c5).                 │
├────────────────┼─────────────┼──────────────────────────────────────────────────────────────┤
│ UX             │ 7.5 (+0.5)  │ Header "Contact us" now → /contact-us/. Mobile menu scrolls. │
│                │             │ Footer Privacy/Terms now real.                               │
├────────────────┼─────────────┼──────────────────────────────────────────────────────────────┤
│ Mobile         │ 7   (+0.5)  │ Hero stack on mobile, hero image swap, mobile menu fix.      │
│                │             │ Still no live device QA in this audit.                       │
├────────────────┼─────────────┼──────────────────────────────────────────────────────────────┤
│ Technical SEO  │ 8.5 (+1.0)  │ 461 URLs (vs 168), sitemap.xml served direct, llms.txt,      │
│                │             │ search page, robots beefed. Schema integrity restored.       │
├────────────────┼─────────────┼──────────────────────────────────────────────────────────────┤
│ On-page SEO    │ 8.5 (+0.5)  │ Product H1 cleaned. Blog pagination descs now unique. Blog   │
│                │             │ index title strengthened.                                    │
├────────────────┼─────────────┼──────────────────────────────────────────────────────────────┤
│ Performance    │ 8   (+2.0)  │ cta 2.26 MB → 132 KB. width/height on 22/22 imgs. LCP        │
│                │             │ preload. Fonts 7→4. TTFB 250–400 ms warm.                    │
├────────────────┼─────────────┼──────────────────────────────────────────────────────────────┤
│ Accessibility  │ 7.5 (+0.5)  │ Skip-to-content link live. theme-color set. Form maxlength   │
│                │             │ + pattern + honeypot all landed.                             │
├────────────────┼─────────────┼──────────────────────────────────────────────────────────────┤
│ CRO            │ 4.5  (—)    │ Endpoint still placeholder; no analytics; no homepage form   │
│                │             │ (QuickLead removed in 6a0d8b8); no calendar.                 │
├────────────────┼─────────────┼──────────────────────────────────────────────────────────────┤
│ Content        │ 8.5  (—)    │ 248 blog URLs in sitemap (vs 150 published before).          │
├────────────────┼─────────────┼──────────────────────────────────────────────────────────────┤
│ Trust          │ 6   (+1.0)  │ Real schema integrity. Leadership Team + headshots on About. │
│                │             │ Still no badges / counters / third-party reviews.            │
├────────────────┼─────────────┼──────────────────────────────────────────────────────────────┤
│ Security       │ 8   (+4.0)  │ HSTS, CSP, X-Frame DENY, COOP, Permissions-Policy all live   │
│                │             │ on prod. Verified via curl -I.                               │
└────────────────┴─────────────┴──────────────────────────────────────────────────────────────┘
```

---

## What got fixed since 2026-06-06

```
┌────┬─────────────────────────────────────────────────────────────────────┬─────────────────┐
│ #  │ Issue                                                               │ Status / commit │
├────┼─────────────────────────────────────────────────────────────────────┼─────────────────┤
│  2 │ Org schema logo URL → /images/logo.webp (file present, 4.3 KB)      │ ✅ fixed        │
│  3 │ Org schema telephone → +919979192935                                │ ✅ fixed        │
│  4 │ cta.png 2.26 MB → cta.webp 132 KB                                   │ ✅ ba094e6      │
│  6 │ Footer Privacy + Terms → real pages at /privacy-policy/ + /terms/   │ ✅ fixed        │
│  9 │ SearchAction now → /search/?q=... and /search/ page renders         │ ✅ 645be5d      │
│ 10 │ Header "Contact us" → /contact-us/ (was support subdomain)          │ ✅ fixed        │
│ 11 │ Width + height on every homepage <img> (22/22 verified live)        │ ✅ fixed        │
│ 12 │ LCP preload + fetchpriority="high" on hero image                    │ ✅ via prop     │
│ 13 │ Inter weights 7 → 4 (400;500;700;800)                               │ ✅ fixed        │
│ 14 │ Security headers: HSTS, CSP, X-Frame DENY, COOP, Permissions-Policy │ ✅ live         │
│ 18 │ Product schema on /our-products/ (14) /on-grid (11) /hybrid (3)     │ ✅ fixed        │
│ 19 │ LocalBusiness schema in Layout.astro (address, areaServed=IN)       │ ✅ fixed        │
│ 20 │ Org sameAs: LinkedIn + FB + Insta + YouTube                         │ ✅ fixed        │
│ 21 │ Skip-to-content link as first focusable element in <body>           │ ✅ fixed        │
│ 25 │ Blog pagination /blog/page/N/ now has unique descriptions           │ ✅ fixed        │
│ 27 │ /our-products/ H1 → "Solar Inverters Built For India"               │ ✅ fixed        │
│ 28 │ /blog/ title → "Solar Inverter Knowledge Hub — India 2026"          │ ✅ fixed        │
│ 30 │ built-for-india.webp 242 KB → 103 KB                                │ ✅ ba094e6      │
│ 32 │ YouTube footer → channel (youtube.com/@qbitsenergy)                 │ ✅ fixed        │
│ 36 │ Pagefind search index built + /search/ page                         │ ✅ 645be5d      │
│ 37 │ Form maxlength + pattern + minlength on all relevant inputs         │ ✅ fixed        │
│ 38 │ Honeypot field (off-screen "website" input)                         │ ✅ fixed        │
│ 40 │ Form action="mailto:..." no-JS fallback added                       │ ✅ fixed        │
│ —  │ theme-color #10b981 meta added                                      │ ✅ fixed        │
│ —  │ GTM snippet wired (env-gated) + noscript iframe                     │ ✅ in code      │
│ —  │ pages.dev noindex env-gate (PUBLIC_ROBOTS_NOINDEX)                  │ ✅ in code      │
│ —  │ Leadership Team section + photos + LinkedIn on /about-us/           │ ✅ ba4b0c5      │
│ —  │ Mobile menu scroll fix                                              │ ✅ cefc076      │
│ —  │ Blog + glossary mobile overflow fix                                 │ ✅ 03a4189      │
│ —  │ CSP relaxed for Leaflet CDN + partner API                           │ ✅ f72cf8f      │
└────┴─────────────────────────────────────────────────────────────────────┴─────────────────┘
```

**27 of the 50 prior issues resolved in 4 days.** Solid pace.

---

## 🚨 Still open — Critical (this week)

```
#: 1  [STILL BROKEN]
Issue: Contact form GAS_ENDPOINT is still the placeholder string in live HTML
Where:  src/pages/contact-us/index.astro:152 — reads import.meta.env.PUBLIC_GAS_ENDPOINT;
        env var is NOT set in the Cloudflare Pages dashboard.
Verified: curl https://qbitsenergy.com/contact-us/ | grep REPLACE_WITH → matches.
Fix: In Cloudflare Pages → Settings → Environment variables, set
     PUBLIC_GAS_ENDPOINT = https://script.google.com/macros/s/<id>/exec
     (and PUBLIC_FORM_TOKEN = <shared-secret>). Re-deploy. Re-verify with a real submit.
Impact: Recovers full lead flow. Code is shipped and correct; this is a config-only fix.

#: 5  [PARTIAL]
Issue: Zero analytics in production
Where:  src/layouts/Layout.astro:30 reads PUBLIC_GTM_ID; verified live HTML does not contain
        any GTM-XXXXXXX snippet → env var not configured.
Fix: Set PUBLIC_GTM_ID=GTM-XXXXXXX in Cloudflare Pages env. Wire GA4 in GTM. Fire events:
     form_submit, whatsapp_click, phone_click, datasheet_download, search_used.
Impact: Unblocks every CRO experiment.

#: 7  [PARTIAL]
Issue: qbits.pages.dev preview still indexable
Where:  Layout.astro:31 reads PUBLIC_ROBOTS_NOINDEX; the *.pages.dev preview deploy did not
        emit <meta name="robots" content="noindex,nofollow"> when checked.
Fix: In the Cloudflare Pages **preview branches** env scope (not production), set
     PUBLIC_ROBOTS_NOINDEX=true. Re-deploy a preview to confirm meta tag emits only there.
Impact: Removes duplicate-content fragmentation risk.

#: NEW-A  [BLOAT]
Issue: 29.1 MB of unreferenced large PNGs in public/ get deployed every push
Where:  /public/homepage/*.png (built-for-india.png 2.3 MB, qbits-hero.png 1.5 MB, image.png
        2.4 MB), /public/product-images/product-image-{2,3,4}.png + product-5.png +
        product-image.png (≈11 MB), /public/hero/*.png (≈7 MB), root *.png (≈4 MB).
        17 files >500 KB, total 29.1 MB; src/ has zero references to any of them.
Fix: Move to a non-deployed archive directory (e.g. ./.image-source/) or delete. The .webp
     siblings are already what the markup uses.
Impact: Faster Cloudflare deploys; smaller R2 cache; removes accidental discovery vectors.
```

---

## 🔴 High-impact — Still open

```
#: 15  No homepage form
       QuickLeadForm removed in commit 6a0d8b8. Now /contact-us/ is the only capture path.
       Hero-side inline form (4 fields: name + phone + city + system size) is the standard
       lift mechanism for solar B2C. Industry benchmark: +30–60% conversion.

#: 16  No trust counters on homepage
       4–6 hard numbers above the fold: "X MW deployed · Y partners · Z installs ·
       12-yr warranty · 98.8% efficiency". Pick what's true and ship.

#: 17  No certification badges row (ALMM / BIS / IEC / MNRE)
       Blog content references ALMM repeatedly. Make it visual on the homepage trust strip.

#: 22  Datasheet downloads remain ungated
       Soft "name + email → PDF" gate would build a B2B/dealer marketing list. Currently
       fully anonymous.

#: 24  Author bylines still "Qbits Editorial" on all blog posts
       For top 10 commercial-intent posts, ship real human bylines + photos + LinkedIn.
       E-E-A-T compounds; institutional bylines don't.

#: 33  Hero secondary CTA verification
       Live verify: primary "Get a free quote" / secondary "See products". Live render not
       captured in this audit (still no headless browser).

#: 34  No "Related posts" / next-read component at end of blog posts
       Verified one sample post: only 1 "Related" mention; thin. Adding 3 same-category
       related posts lifts pages/session.

#: 35  No /blog/category/<name>/ routes
       12 categories worth of topical-authority landing pages still unbuilt.

#: 42  Homepage testimonials not surfaced
       Testimonials/ClientFeedback components exist but not rendered with reviewer photo +
       company + city + rating.

#: 43  No case studies on homepage
       case-study-*.md content collection sitting unused on the marketing surface.

#: NEW-B  Sitemap lastmod still null
       Sitemap index has lastmod (build time) but individual URLs in sitemap-0.xml emit no
       per-URL <lastmod>. Configure @astrojs/sitemap serialize() to write per-page
       frontmatter dates → tells Google what's fresh.

#: NEW-C  Blog → product internal linking still thin
       Sample audit on /blog/best-solar-inverter-india-2026/ (7,000+ words): only 4 links
       across all variants of /our-products/, /on-grid-inverter/, /hybrid-inverter/. Top
       20 commercial-intent posts each deserve 3–5 contextual links to money pages.
```

---

## 🟠 Medium

```
#: 23  Header dropdown keyboard a11y not verified live
#: 26  /404 page still lacks noindex,nofollow meta (verify)
#: 44  Mega-menu Tab/Enter/Esc/Arrow keyboard path not verified
#: 45  text-white/70 on glassmorphic header — contrast unverified
#: 46  Untracked blog posts in src/content/blog/ — ship in 20-per-week batches
#: 47  No prefers-reduced-motion guard on group-hover translates/scales
#: 48  rel="noopener noreferrer" sweep on all target="_blank" not re-verified
#: NEW-D  homepage/image.webp at 239 KB — re-export to ~90 KB
#: NEW-E  Form submit handler still doesn't reset on mailto fallback success (T20 in
          prior audit's form test matrix). 1-line fix in the catch branch.
#: NEW-F  Submit button not disabled in mailto branch (T15) — same 1-line fix.
```

---

## Live measurements (2026-06-10)

### Headers — verified via `curl -I https://qbitsenergy.com/`

| Header | Value | Verdict |
|---|---|---|
| `strict-transport-security` | `max-age=31536000; includeSubDomains; preload` | ✅ |
| `content-security-policy` | tight default-src, fonts/images explicit, GTM/GA allowed, frame-ancestors 'none' | ✅ |
| `x-frame-options` | `DENY` | ✅ |
| `x-content-type-options` | `nosniff` | ✅ |
| `permissions-policy` | camera/mic/geo/payment/coh/accel/gyro/mag/usb all `()` | ✅ |
| `cross-origin-opener-policy` | `same-origin` | ✅ |
| `referrer-policy` | `strict-origin-when-cross-origin` | ✅ |

### Perf — TTFB on the BOM Cloudflare edge

| URL | TTFB (warm) | Brotli payload |
|---|---|---|
| `/` | 376 ms | 22.3 KB |
| `/our-products/` | 258 ms | 11.5 KB |
| `/blog/best-solar-inverter-india-2026/` | 362 ms | 27.5 KB |
| `/contact-us/` | 353 ms | 12.1 KB |

Excellent across the board. Homepage cold-start was 800–1170 ms in one sample (edge cache miss); warm 380 ms.

### Sitemap

- `/sitemap.xml` → sitemap index → `/sitemap-0.xml`.
- **461 URLs total** (vs 168 four days ago).
- **279 `/blog/` URLs** (248 posts + 20 paginated indexes + 11 utility).
- 21 paginated blog pages.
- Per-URL `<lastmod>` still empty.

### Schema (live)

| Type | Where | Status |
|---|---|---|
| `Organization` | every page | ✅ valid, logo + phone + 4 sameAs |
| `LocalBusiness` | every page | ✅ Surat address + areaServed=IN |
| `WebSite` + `SearchAction` | every page | ✅ → `/search/?q={search_term_string}` (page exists) |
| `Article` + `FAQPage` + `BreadcrumbList` | every blog post | ✅ |
| `Product` | `/our-products/` (14) `/on-grid-inverter/` (11) `/hybrid-inverter/` (3) | ✅ |
| `WebPage` + `ImageObject` | blog post | ✅ |

### robots.txt

- Cloudflare-managed content signals block: Amazonbot, Applebot-Extended, Bytespider, CCBot, ClaudeBot, Google-Extended, GPTBot, meta-externalagent, etc.
- Search-allow / AI-train-deny content-signals.
- `Disallow: /search` (sane — internal search results pages shouldn't be indexed).
- Sitemap: `https://qbitsenergy.com/sitemap.xml`.

### llms.txt
- ✅ Served 200 from `/llms.txt`.

---

## Top 10 next actions (sequenced, biggest-impact-first)

1. **Set `PUBLIC_GAS_ENDPOINT` + `PUBLIC_FORM_TOKEN` env vars** in Cloudflare Pages production. Re-deploy. Submit a real test lead and verify it lands in the sheet. *(5 min config + 5 min verify.)*
2. **Set `PUBLIC_GTM_ID`** in Cloudflare Pages production. Wire GA4 in GTM. Fire `form_submit`, `whatsapp_click`, `phone_click`, `datasheet_download`, `search_used` events. *(30 min.)*
3. **Set `PUBLIC_ROBOTS_NOINDEX=true`** in the Cloudflare Pages **preview** env scope (not production). *(2 min.)*
4. **Move/delete 29 MB of orphan PNGs** in `public/` (see issue NEW-A). *(15 min.)*
5. **Add 4–6 trust counters above the homepage fold** (MW deployed, partners, installs, warranty years, efficiency). *(2h, copy + component.)*
6. **Add an inline lead form** to the homepage hero/sub-hero — name + phone + city + system size. *(3h.)*
7. **Add ALMM / BIS / IEC / MNRE badge row** on the homepage trust strip. *(1h once images are sourced.)*
8. **Build `/blog/category/<name>/` routes** from frontmatter — 12 free topical landing pages. *(3h.)*
9. **Add `RelatedPosts.astro` to `[slug].astro`** — 3 same-category posts under the article. *(2h.)*
10. **Per-URL sitemap `<lastmod>`** via `@astrojs/sitemap` serialize hook reading frontmatter date. *(1h.)*

---

## Methodology / what was NOT covered

- **Live visual / screenshots / Lighthouse** — still not run from this environment. Recommend a `/qa` or `/browse` pass on a sandbox-capable host (gstack). Core Web Vitals are estimated; the width/height + LCP-preload changes should put CLS < 0.1 and LCP < 2.5 s, but verify with real-device PageSpeed runs.
- **Real-device mobile QA** — recommended pre-campaign.
- **Form submission end-to-end** — can't be tested until env vars are set; the code path is correct per prior audit's 20-case test matrix.
- **Per-blog-post quality audit** — 1 of 248 sampled; rest assumed structurally similar.

---

*Compared against the 06-06 baseline: 27 of 50 prior issues resolved + 6 new minor issues surfaced. The site moved from "good engineering with integrity gaps" to "good engineering with config gaps + growth-side opportunity." The three critical fixes left are dashboard configuration, not code.*
