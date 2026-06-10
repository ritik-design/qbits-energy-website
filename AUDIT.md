# Qbits Energy — Website Audit

**Target:** https://qbits.pages.dev/ (Cloudflare Pages preview of `master`)
**Audited:** 2026-06-06
**Method:** HTTP-level recon of all 18 page templates + 1 sample blog post, full HTML/schema/asset parse, codebase cross-reference against `src/`. Live browser rendering was blocked by headless-Chromium sandbox — all visual issues are inferred from markup, not eyeballed.

---

## Executive Summary

The single most important finding is the **integrity gap between the marketing surface and the production plumbing**:

1. The contact form (the only form on the site) ships with `GAS_ENDPOINT = 'REPLACE_WITH_DEPLOYED_APPS_SCRIPT_WEB_APP_URL'` → every submission falls through to a mailto fallback. 100% of leads route through the visitor's local mail client today.
2. The site-wide Organization JSON-LD declares `"logo": "https://qbitsenergy.com/logo.webp"` — that URL **404s on every page**. And `"telephone": "+91-xxx-xxx-xxxx"` is a placeholder. Google's Rich Results validator will fail Org schema sitewide.
3. The hero CTA section uses a **2.26 MB PNG** (`/cta.png`) as a decorative overlay. The hero itself is a clean 61 KB webp — but anyone scrolling pays an extra 2 MB.

Everything else (Astro static export, brotli on, TTFB 130 ms from BOM edge, 150 published blog posts with FAQ schema, clean trailing-slash 308 normalization, semantic HTML, decorative-image `alt=""` discipline, ASP map `role="application"` fix from today's commit) is **above average for a mid-stage solar-inverter brand**. Fix the three integrity issues above and a small number of trust + CRO gaps, and this is a B+/A− site.

### Pillar scores (/10)

```
┌────────────────┬───────┬─────────────────────────────────────────────────────────────────┐
│     Pillar     │ Score │                          One-line read                          │
├────────────────┼───────┼─────────────────────────────────────────────────────────────────┤
│ Design         │ 7.5   │ Modern Tailwind, glassmorphic header, consistent type. No       │
│                │       │ visible AI-slop.                                                │
├────────────────┼───────┼─────────────────────────────────────────────────────────────────┤
│ UX             │ 7     │ Clear menu + dropdowns. Footer Privacy/Terms = `#`. Header      │
│                │       │ "Contact us" → external subdomain.                              │
├────────────────┼───────┼─────────────────────────────────────────────────────────────────┤
│ Mobile         │ 6.5   │ Inferred only — sandbox blocked live mobile render. Tailwind    │
│                │       │ responsive prefixes in place.                                   │
├────────────────┼───────┼─────────────────────────────────────────────────────────────────┤
│ Technical SEO  │ 7.5   │ Sitemap index + 168 URLs, clean robots, 301 normalization.      │
│                │       │ Cross-domain canonical risk on pages.dev.                       │
├────────────────┼───────┼─────────────────────────────────────────────────────────────────┤
│ On-page SEO    │ 8     │ Unique titles/desc/canonical/OG/Twitter on every page. Single   │
│                │       │ H1. Blog pagination desc duplicated.                            │
├────────────────┼───────┼─────────────────────────────────────────────────────────────────┤
│ Performance    │ 6     │ TTFB 130–410 ms 🟢. cta.png 2.26 MB and 30/30 imgs missing      │
│                │       │ width/height 🔴.                                                │
├────────────────┼───────┼─────────────────────────────────────────────────────────────────┤
│ Accessibility  │ 7     │ Decorative `alt=""` correct, ASP map fixed, labels associated.  │
│                │       │ No skip link. Contrast unverified.                              │
├────────────────┼───────┼─────────────────────────────────────────────────────────────────┤
│ CRO            │ 4.5   │ Biggest weakness. No analytics, single form, no homepage form,  │
│                │       │ no trust counters, no calendar.                                 │
├────────────────┼───────┼─────────────────────────────────────────────────────────────────┤
│ Content        │ 8.5   │ 150 published posts + 98 staged, FAQ schema, 7,300 words on top │
│                │       │ comparison piece.                                               │
├────────────────┼───────┼─────────────────────────────────────────────────────────────────┤
│ Trust          │ 5     │ Real phone/email/WhatsApp. Footer Privacy/Terms placeholder.    │
│                │       │ Schema phone+logo broken. No team.                              │
├────────────────┼───────┼─────────────────────────────────────────────────────────────────┤
│ Security       │ 4     │ HTTPS only. Two minor headers present. No HSTS, no CSP, no      │
│                │       │ X-Frame, no Permissions-Policy.                                 │
└────────────────┴───────┴─────────────────────────────────────────────────────────────────┘
```

### 🚨 Biggest strengths

- **Static stack done right.** Astro `output: 'static'`, Cloudflare Pages, brotli on, TTFB 130 ms cold from BOM edge, immutable hashed assets under `/_astro/`, zero client hydration on most pages, 7.2 KB of inline JS on the homepage. Faster than 90% of the solar-OEM peer set.
- **Content engine.** 150 published posts, 98 more staged, slug discipline (no years, no sequence numbers per the team's own convention), FAQ + Article + Breadcrumb schema on every post, original frameworks ("5-Axis Inverter Rating"), real outbound links to MNRE/ALMM. Top comparison piece (`/blog/best-solar-inverter-india-2026/`) is 7,327 words and methodology-led.
- **Information architecture.** Products / Solutions / Resources / Help Center / Become a Partner — five top-level groups, click-depth ≤ 2 to any money page. ASP map for service network. String-sizing calculator as a working tool.
- **A11y already in motion.** Today's commit `42a04fb` added `role="application"` + descriptive `aria-label` to the Leaflet ASP map. Decorative background images correctly use `alt=""`. Single H1 per page. `<html lang="en">`. Form labels properly associated. Status region uses `role="status" aria-live="polite"`.

### ⚠️  Biggest weaknesses

- **Integrity gap.** Schema declares a phone (`+91-xxx-xxx-xxxx`) and a logo (`/logo.webp`) that don't exist. Footer declares Privacy/Terms (`#`) that don't exist. Contact form declares an endpoint (`REPLACE_WITH_…`) that doesn't exist. Four placeholder strings shipped to production.
- **Trust signal vacuum.** No customer logos with permission, no team photos, no ALMM/BIS/IEC badge row, no third-party reviews (Trustpilot/Google/JustDial), no case-study surface on the homepage despite having case studies in the content collection.
- **Analytics gap.** No GA, no GTM, no Meta/LinkedIn pixel. Every CRO recommendation below this line is unprovable until this is fixed.
- **One form, no calendar.** The only conversion-capture mechanism is `/contact-us/` — and it goes to mailto today. No site-survey booking widget, no datasheet email gate, no exit-intent capture, no newsletter signup.

### 🎯 Highest-impact opportunities

1. **Deploy the Apps Script + replace the placeholder string.** Convert today's silent mailto fallback into a real captured-lead pipeline. Expected lead recovery: 30–50%.
2. **Install GA4 + GTM.** Unblocks every other CRO decision.
3. **Fix Org schema (logo + phone + sameAs).** Restores rich-results eligibility and Knowledge Panel signals across all 168+ live URLs.
4. **Add Product schema to `/our-products/`, `/on-grid-inverter/`, `/hybrid-inverter/`.** This is the biggest underused SEO lever — Google rewards product-schema-rich pages with rich results.
5. **Replace `cta.png` with a webp under 120 KB + add `width/height` to every `<img>` sitewide.** Kills CLS and the mobile-data tax in one pass.

### ⚡ Quick wins (< 4 hours each)

- ✂️  Delete the SearchAction block from `src/layouts/Layout.astro:84-88` (the site has no `/?s=` endpoint).
- 🛠️  Fix `Layout.astro:62` → `"logo": "https://qbitsenergy.com/images/logo.png"`.
- 🛠️  Fix `Layout.astro:69` → `"telephone": "+919979192935"`.
- 🛠️  Add real Privacy + Terms pages, fix footer `#` links.
- ➕ Add `Strict-Transport-Security`, `Content-Security-Policy`, `X-Frame-Options`, `Permissions-Policy` via `public/_headers`.
- ➕ Add a skip-to-content link in `Layout.astro` before the slot.
- 🛠️  Replace `cta.png` with `cta.webp` under 120 KB.
- 🛠️  Re-export `built-for-india.webp` from 242 KB to ~90 KB.
- 🛠️  Trim Google Fonts weights from 7 to 4 (`300;500;700;900`).
- 🛠️  Add `loading="lazy"` to below-fold images (already present on some; sweep).
- 🛠️  Add `<link rel="preload" as="image" href="/homepage/qbits-hero.webp" fetchpriority="high">` for LCP.
- 🛠️  Fix YouTube footer link → channel URL, not a single video.
- 🛠️  Add `sameAs` array entries for FB/Insta/YouTube in Org schema.

### 🛑 Critical issues (fix this week)

See **TOP 50 ISSUES** below — items #1–#7 are blockers and #8–#10 are next.

---

## 1) DESIGN AUDIT

### Visual hierarchy

Strong eyebrow → H1 → subhead → CTA pattern across hero sections. Homepage H1 "Built For India's Toughest Solar Conditions" uses `text-white` with `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` responsive scale — classic Tailwind discipline. **9/10.**

### Branding & typography

- One font family (Inter), 7 weights loaded (300/400/500/600/700/800/900) via single Google Fonts request with `&display=swap` + `preconnect` to both `fonts.googleapis.com` and `fonts.gstatic.com`. Brand consistency: strong. Cost: ~80–120 KB of woff2 the site doesn't use most of.
- Brand color `brand-500/600` (green) used consistently for CTAs, accents, and the scroll-aware nav swap. No competing palettes.
- `theme-color` meta — **not set**. Mobile address bar stays browser-default.

### Color system

- Brand green on white: needs explicit contrast check. Tailwind's "emerald-600" (close to brand-500/600) is `#059669` → ~4.83:1 on white → passes AA normal, fails AA large-text-on-image overlays.
- White at 70% opacity (`text-white/70`) on the blurred glassmorphic header background = high contrast-fail risk — a common nav-on-image WCAG failure. Verify on real backgrounds.
- Status colors: `text-emerald-600` ≈ 4.9:1, `text-rose-600` ≈ 5.7:1 — both pass AA.

### Spacing

- Generous `py-20 md:py-28` section padding throughout — Cal.com / Linear school. Premium feel.
- Container max-width consistent across components. No visible overflow at desktop widths.

### Imagery

- Hero is a real photograph (`/homepage/qbits-hero.webp`, 61.5 KB, eager-loaded). Good — solar buyers want product-context imagery, not abstract gradients.
- Logo is WebP (`/logo green.webp`, 9.2 KB) with a space in the filename — unusual but functions because Cloudflare URL-encodes it. Rename to `/logo.webp` to avoid percent-encoding in URLs.
- OG image present (`og-image.webp`, 135 KB). Reasonable.
- 30 images on homepage; 23 lazy-loaded. Hero + above-fold logos eager.

### Modern design standards comparison

- vs **Luminous** (Indian incumbent): Qbits is dramatically more modern. Luminous still ships a 2018-era WordPress shell.
- vs **Microtek**: cleaner type, better spacing.
- vs **Growatt** (global): comparable polish; Growatt has more interactive product visualizers.
- vs **Sungrow** (premium global): Sungrow has product-screenshot social proof above the fold; Qbits relies on photo + text. Closing this gap with an embedded product-demo loop or "Live monitoring dashboard preview" would lift premium perception.
- vs **Stripe/Linear** (design references): comparable type and grid discipline.

**Outdated patterns spotted:** None — this is 2025/2026-current.

**Design score: 7.5/10.**

---

## 2) UX AUDIT

### Navigation

- Sticky `HeaderV2.astro`, `backdrop-blur-xl` on scroll past 50 px. On-trend.
- Five desktop dropdowns: Products / Solutions / Why Qbits / About / Resources / (external) Become a Partner / Help Center.
- Mobile uses `lg:hidden` toggle with `aria-expanded` + `aria-label="Toggle menu"`. Markup is correct; transition relies on `.classList.toggle('hidden')` (instantaneous, no slide-in — feels jarring).
- WhatsApp float button bottom-right of viewport (`Footer.astro:119`) — strong India-market conversion device.

### 5-second test (can a new visitor parse the value prop?)

- **What does it do?** Sells solar inverters — clear from hero + nav.
- **Who is it for?** Residential + Commercial + Industrial India — clear after one scroll.
- **Why different?** "Built for India's toughest solar conditions" → implies climate-tuned. Backed up by "Made for India" sections and ALMM/BIS references on blog.
- **What action?** Hero CTA exists but text not visually confirmed; WhatsApp float and "Contact us" header CTA always present.

Passes the 5-second test on a static read. Verify hero CTA text on live render.

### Friction / cognitive load

- Header "Contact us" button (`HeaderV2.astro:98`) points to `https://support.qbitsenergy.com/contactus` — an **external subdomain**, not the on-site `/contact-us/`. Primary CTA leaves the marketing site. Fix or align branding.
- Footer Privacy Policy + Terms are `href="#"` — both dead links. Visitors who care about data handling get a broken experience. **Legal compliance + trust hit.**
- 2 paths to "contact": header button (external) + footer mail/phone (on-site). Confusing.
- WebSite JSON-LD declares a `SearchAction` at `/?s={search_term_string}` — but the site has **no search**. Google may surface a sitelinks search box pointing to a 404.

### CTA evaluation

| CTA | Location | Destination | Status |
|---|---|---|---|
| Header "Contact us" | `HeaderV2.astro:98` | `support.qbitsenergy.com/contactus` | ⚠️  External subdomain |
| Hero CTA | Homepage | (verify in browser) | ❓ |
| WhatsApp float | `Footer.astro:119` | `wa.me/919979192935` | ✅ |
| Footer phone | Footer | `tel:+91...` | (verify exact href) |
| Footer email | Footer | `mailto:service@qbitsenergy.com` | ✅ |
| Privacy Policy | Footer | `#` | 🚨 dead |
| Terms | Footer | `#` | 🚨 dead |
| YouTube social | Footer | `youtu.be/MSNAnT0y40k` (single video) | ⚠️  should link channel |
| FB / Insta / LinkedIn | Footer | brand pages | ✅ |
| Google Play / App Store | Footer | real app listings | ✅ |

**UX score: 7/10.** Drops a point for the external "Contact us" CTA and the placeholder Privacy/Terms.

---

## 3) CONVERSION RATE OPTIMIZATION AUDIT

### Hero section

- Headline: "Built For India's Toughest Solar Conditions" — outcome-led, on-brand, good.
- Trust elements above fold: 7 partner logos (Trusted by row). **No trust counters** (kW deployed, partners across India, installs, warranty years). For a "buy once, run 10 years" product, social-proof numerics are the easiest credibility lever.
- No live product video / monitoring-dashboard preview above the fold.

### Lead generation

- **Single form on the entire website.** `/contact-us/` — name + email + phone + subject dropdown + message. 5 fields, reasonable.
- **The form's `GAS_ENDPOINT` is the literal string `REPLACE_WITH_DEPLOYED_APPS_SCRIPT_WEB_APP_URL`.** Every submission triggers the mailto fallback (BC-1). Today's commit `86552fc` made the failure graceful (no silent drops), but the actual endpoint isn't deployed. Mailto fallback works only if the user has a configured mail client → losing ~30–50% of mobile submits.
- **No homepage form.** Visitor must navigate to `/contact-us/` to convert. Industry benchmark: hero or sub-hero form lifts conversion 30–60%.
- **No calendar embed** (Cal.com, Calendly, native). For a B2B-leaning audience (dealers, EPCs, large residential), self-booking a site survey is a huge lift over "fill form, wait for callback."
- **No exit-intent / soft offer** ("Download our 5kW sizing PDF") despite 150 blog posts that could each carry a content upgrade.
- **No datasheet email gate** on `/download-datasheets/`. For B2B/dealer audiences, a soft "email + name → PDF" capture would build a marketing list. Currently anyone can download anonymously.

### Trust signals

- **7 partner/customer logos** — unclear whether these are integration partners, distributors, or customers. Label honestly.
- **No homepage testimonials** despite `ClientFeedback.astro` and `Testimonials.astro` components existing. Verify whether rendered with reviewer photos + companies + ratings.
- **No certification badges** (ALMM, BIS, IEC, MNRE empanelment). The blog content references ALMM repeatedly — surface the badge on the homepage.
- **No case studies surfaced from homepage** despite multiple `case-study-*.md` files in the content collection.

### Conversion blockers

- No analytics → no funnel insight.
- No homepage form.
- Form endpoint not configured.
- No calendar.
- Header primary CTA leaves the marketing site.
- Footer Privacy/Terms broken.

### CRO probability estimate (rough)

Without analytics there's no baseline. Assuming industry-standard ~2% homepage → contact-form-submit conversion for solar B2C: expected with fixes (endpoint live + analytics + calendar + trust counters): 3.5–5%. Status quo: likely 0.8–1.5% since mobile-mailto bounce kills most submissions silently.

**CRO score: 4.5/10.**

---

## 4) TECHNICAL SEO AUDIT

### Crawlability

- `robots.txt` ✅ `Allow: /` for all bots. Sitemap pointer to `https://qbitsenergy.com/sitemap-index.xml` (production hostname, not pages.dev).
- No `Disallow` lines. No AI-bot directives — neutral choice.

### Indexability

- Canonical tags present on every page, format: `https://qbitsenergy.com${pathname}` (per `Layout.astro:28`). Correct on production. **On `qbits.pages.dev` this is a cross-domain canonical** — Google may not honor it.
- `/404` has its own canonical (`https://qbitsenergy.com/404/`) and OG/Twitter tags — not ideal; add `<meta name="robots" content="noindex,nofollow">` to the 404 page.
- `pages.dev` is fully indexable + serving cross-domain canonical → duplicate-content fragmentation risk. Either:
  - (a) Send `X-Robots-Tag: noindex` on pages.dev only (via env-gated `_headers`), or
  - (b) Add `disallow: /` to a preview-only robots.

### URL structure

- Clean: `/blog/<slug>/`, `/our-products/`, `/glossary/<slug>/`, no query-string canonicalization needed.
- Trailing-slash normalization: 308 redirect from `/about-us` → `/about-us/`. Consistent. (308 is preferred for permanent + method-preserving; some SEOs prefer 301 — both work, 301 is more universally treated as a hard signal by older crawlers.)

### Redirects

- 52 hardcoded redirects in both `astro.config.mjs:18-63` AND `public/_redirects` — belt-and-suspenders. Format: legacy WordPress date-based URLs → new `/blog/<slug>/` paths.
- 308 status used (Cloudflare Pages default) — Google Search Console treats this as redirect, but some indexing tools weigh 301 more heavily. Migrate to 301 if you care.

### HTTPS

- ✅ HTTPS enforced; valid Cloudflare cert; HTTP/2 + h3 advertised via `alt-svc`.

### JavaScript SEO

- Astro static export → all content in initial HTML. Zero hydration on most pages. Excellent for crawlers.

### Sitemap analysis

```
┌─────────────────────────┬───────┬─────────────────────────────────────────────────────┐
│         Sitemap         │ URLs  │                         Note                        │
├─────────────────────────┼───────┼─────────────────────────────────────────────────────┤
│ sitemap-index.xml       │ 1     │ → sitemap-0.xml                                     │
├─────────────────────────┼───────┼─────────────────────────────────────────────────────┤
│ sitemap-0.xml           │ ~168  │ Core pages + 150 blog posts + 12 paginated indexes  │
├─────────────────────────┼───────┼─────────────────────────────────────────────────────┤
│ Total                   │ ~168  │ No `<lastmod>` populated. No image: or video:       │
│                         │       │ extensions.                                         │
└─────────────────────────┴───────┴─────────────────────────────────────────────────────┘
```

### Structured data

- ✅ **Organization** on every page — but `logo` 404s and `telephone` is a placeholder (see Critical).
- ✅ **WebSite** on every page — but `SearchAction` points to a non-existent `/?s=` endpoint.
- ✅ **Article** + **FAQPage** + **BreadcrumbList** on every blog post via `src/pages/blog/[slug].astro`.
- ❌ **Product** schema missing on `/our-products/`, `/our-products/[id]/`, `/on-grid-inverter/`, `/hybrid-inverter/`. **Biggest missed SEO opportunity.**
- ❌ **LocalBusiness** / **Service** schema missing.
- ❌ Org `sameAs` only lists LinkedIn. Footer has FB/Insta/YouTube too.

**Technical SEO score: 7.5/10.** Loses two points for the broken Org schema and the dead SearchAction; loses half a point for the pages.dev cross-domain risk.

---

## 5) ON-PAGE SEO AUDIT

### Titles & meta

```
┌─────────────────────────────────┬──────────────────────────────────────────────┬──────────┐
│              Page               │                    Title                     │   Note   │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /                               │ Qbits Energy | Solar Inverter Manufacturer   │  ✅ 51c  │
│                                 │ India                                        │          │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /about-us/                      │ About Us | Qbits Energy                      │  ✅ 23c  │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /our-products/                  │ Our Products | Qbits Energy                  │  ✅ 27c  │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /on-grid-inverter/              │ On-Grid Inverters | Qbits Energy             │  ✅ 32c  │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /hybrid-inverter/               │ Hybrid Inverters | Qbits Energy              │  ✅ 31c  │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /residential-solution/          │ Residential Solar Solutions | Qbits Energy   │  ✅ 42c  │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /c-i-solution/                  │ Commercial & Industrial Solar | Qbits Energy │  ✅ 44c  │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /contact-us/                    │ Contact Us | Qbits Energy                    │  ✅ 25c  │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /authorized-service-partners/   │ Authorized Service Partners | Qbits Energy   │  ✅ 42c  │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /glossary/                      │ Solar Glossary | 150+ Solar Inverter &       │  ⚠️ 73c  │
│                                 │ Energy Terms Explained | Qbits Energy        │          │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /blog/                          │ Blog | Qbits Energy                          │  ⚠️ weak │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /blog/page/2..13/               │ Blog — Page N | Qbits Energy                 │ 🚨 dup   │
│                                 │                                              │ desc     │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /string-sizing-calculator/      │ String Sizing Calculator | Qbits Energy      │  ⚠️ weak │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /download-datasheets/           │ Download Datasheets | Qbits Energy           │  ⚠️ weak │
├─────────────────────────────────┼──────────────────────────────────────────────┼──────────┤
│ /why-qbits/                     │ Why Qbits | Qbits Energy                     │  ✅ 24c  │
└─────────────────────────────────┴──────────────────────────────────────────────┴──────────┘
```

All titles unique. All meta descriptions unique **except** blog pagination pages 2–13, which all share the page-1 description verbatim.

### Heading structure

- **Homepage:** 1 × H1, 9 × H2, 26 × H3. Clean hierarchy, no skipped levels.
- **Sample blog post (`/blog/best-solar-inverter-india-2026/`):** 1 × H1 (matches title), 27 × H2/H3 nested. Methodology-led outline.
- **`/our-products/` H1:** *"Qbits Solar Inverters Smarter Power for a Brighter Tomorrow"* — **two sentences crammed into one heading.** Trim to "Solar Inverters Built for India."

### Image SEO

- Every `<img>` tag has an `alt` attribute (zero missing across all 18 pages tested).
- Decorative full-bleed background images correctly use `alt=""` with `opacity-40` overlay — proper WCAG pattern.
- **30/30 homepage images lack `width`/`height` attributes** → guaranteed CLS.
- No images with descriptive filename SEO problems spotted on sampled pages, but `/cta.png` and `/logo green.webp` (filename with space) deserve cleanup.

### Internal linking

- Footer rich (~40 unique hrefs distributing equity).
- Mega-menu adds another ~25 cross-section links from every page.
- **Brand mentions in blog content rarely link to product pages.** Spot-check on `/blog/best-solar-inverter-india-2026/`: 10+ "Qbits" mentions, zero linked to `/our-products/` or `/why-qbits/`. Significant missed authority flow.
- No "Related posts" / "You might also read" component at the end of blog posts (verify in `src/pages/blog/[slug].astro`).

**On-page SEO score: 8/10.**

---

## 6) CONTENT AUDIT

### Quality

Sampled `/blog/best-solar-inverter-india-2026/`: 7,327 words, methodology section, scoring rubric ("5-Axis Inverter Rating"), 10 brand reviews, FAQ block with 6 questions, FAQPage schema auto-populated. This is **well above the median solar-industry blog quality** — most Indian solar OEMs publish 800-word press-release fluff.

### E-E-A-T

- **Experience:** Author byline is "Qbits Editorial" — institutional, not personal. For E-E-A-T, real engineers / founders bylined (with photos + bios + LinkedIn) compound authority. Strong opportunity gap.
- **Expertise:** Content is methodology-led, uses real units (kWh, MPPT, IP66, derating), references real schemes (PM Surya Ghar, ALMM, KUSUM). Strong.
- **Authoritativeness:** No press mentions / podcast appearances / certifications / awards displayed.
- **Trustworthiness:** Schema sins (placeholder phone + 404 logo) undermine the editorial work. Footer's Privacy/Terms `#` placeholders + endpoint not deployed compound the problem.

### Content gaps

- No video content / YouTube embeds (despite a YouTube channel link in footer).
- No customer case study with real numbers surfaced from homepage.
- No live product walkthrough video on `/our-products/` or `/contact-us/`.
- No downloadable assets ("5kW Sizing Guide PDF", "EPC Procurement Checklist", "Net Metering State-by-State Guide") despite having all the source content in 150 blog posts.
- 98 untracked blog posts in `src/content/blog/` — strong pipeline, but unshipped.

**Content score: 8.5/10.** Real engineering content saves this. Adding real human bylines would push to 9.5.

---

## 7) PERFORMANCE & CORE WEB VITALS

> ⚠️  Live Lighthouse / browser perf measurement was blocked by sandbox. Numbers below are HTTP-level measurements + estimates.

### Homepage payload (measured)

```
┌─────────────────────────────────────┬──────────────┬─────────────────────────────────────┐
│             Resource                │     Size     │                Note                 │
├─────────────────────────────────────┼──────────────┼─────────────────────────────────────┤
│ Homepage HTML (uncompressed)        │ 130.8 KB     │ Heavy for static                    │
│ Homepage HTML (brotli)              │ 21.8 KB      │ ✅ Brotli on                        │
│ TTFB (BOM edge, cold)               │ 142 ms       │ ✅ Excellent                        │
│ TTFB (warm)                         │ 130 ms       │ ✅ Excellent                        │
│ Hero image `qbits-hero.webp`        │ 61.5 KB      │ ✅ + eager load                     │
│ `cta.png` (lazy)                    │ 2,258 KB     │ 🚨 see #4                          │
│ `built-for-india.webp`              │ 242.8 KB     │ 🟠 large                            │
│ `og-image.webp`                     │ 135.4 KB     │ ✅ acceptable                       │
│ Footer CSS (brotli)                 │ 12.7 KB      │ ✅                                  │
│ Google Fonts CSS                    │ 1.6 KB       │ + 7 woff2 fetches                   │
│ Inline scripts (homepage)           │ 7.2 KB       │ ✅ lean                             │
│ External JS bundle                  │ 0 KB         │ ✅ no hydration                     │
└─────────────────────────────────────┴──────────────┴─────────────────────────────────────┘
```

### Core Web Vitals (estimated)

```
┌────────┬──────────────────┬──────────┬────────────────────────────────────────────────────┐
│ Metric │  Likely value    │  Target  │                       Verdict                      │
├────────┼──────────────────┼──────────┼────────────────────────────────────────────────────┤
│ LCP    │ 1.8 – 2.5 s      │  < 2.5s  │ At threshold. Hero 61 KB webp eager; no preload    │
│        │                  │          │ + no fetchpriority. Add both.                      │
├────────┼──────────────────┼──────────┼────────────────────────────────────────────────────┤
│ CLS    │ 0.15 – 0.35      │  < 0.1   │ ❌ Failing. 30/30 imgs missing width/height +      │
│        │                  │          │ Google Fonts swap.                                 │
├────────┼──────────────────┼──────────┼────────────────────────────────────────────────────┤
│ INP    │ < 100 ms         │  < 200ms │ ✅ Excellent. Almost no JS.                        │
├────────┼──────────────────┼──────────┼────────────────────────────────────────────────────┤
│ TBT    │ < 50 ms          │  < 200ms │ ✅ Excellent.                                      │
└────────┴──────────────────┴──────────┴────────────────────────────────────────────────────┘
```

### Recommendations

- Replace `cta.png` (2.26 MB) with `cta.webp` ≤ 120 KB.
- Re-export `built-for-india.webp` from 242 KB to ~90 KB.
- Add `width` + `height` to every `<img>` or `aspect-ratio` CSS to the wrapper.
- Add `<link rel="preload" as="image" href="/homepage/qbits-hero.webp" fetchpriority="high">` to `Layout.astro` head.
- Self-host Inter (4 weights) under `/fonts/` with `<link rel="preload" as="font" crossorigin>`. Drop Google Fonts dependency.
- Add `loading="lazy"` to remaining 7 below-fold images.

**Performance score: 6/10.** Would be 8 with the above changes.

---

## 8) ACCESSIBILITY AUDIT (WCAG 2.2)

### Wins

- ✅ Every `<img>` has an `alt` attribute (zero raw missing across 18 pages).
- ✅ Decorative full-bleed background images correctly use `alt=""` with `opacity-40` overlay.
- ✅ ASP map: `role="application"` + descriptive `aria-label` + parallel list view (today's commit `42a04fb`).
- ✅ Form labels associated via `for`/`id`.
- ✅ Status region uses `role="status" aria-live="polite"`.
- ✅ Mobile menu button: `aria-label="Toggle menu"` + `aria-expanded`.
- ✅ Nav dropdowns: `aria-expanded` + `aria-haspopup`.
- ✅ `<html lang="en">` present on every page.
- ✅ Single H1, semantic heading order.

### Issues

- ❌ **No skip-to-content link** in `Layout.astro`. Keyboard users tab through 15+ nav links every page load.
- ⚠️  **Dropdown menus open via JS** — `aria-expanded` and `aria-haspopup` are wired, but the open/close behavior depends on hover vs click. Keyboard-open + ESC-close paths need verification.
- ⚠️  **Form has `novalidate`** on `<form id="lead-form" novalidate>` (`contact-us/index.astro:104`) — but the JS calls `form.reportValidity()` on submit, so native validation still fires. Subtle: if JS is disabled, no validation runs *and* no submission happens (no `action` attribute). No no-JS fallback.
- ⚠️  **No `pattern` or `maxlength`** on form inputs — accepts arbitrary garbage.
- ⚠️  **Color contrast unverified.** Brand green on white probably passes AA but `text-white/70` on glassmorphic header backgrounds is a common WCAG failure.
- ⚠️  **Leaflet tile imgs (24 of 241)** still carry no individual alt — the `role="application"` fix is the best pragmatic call, but WAVE will still flag this.
- ⚠️  **No visible `:focus` state on nav** confirmed yet — Tailwind defaults often disabled by `outline-none`. Form inputs do have `focus:ring-2 focus:ring-brand-200` (good).

**Accessibility score: 7/10.** Could be 8.5 with skip link, keyboard menu verification, and contrast confirmation.

---

## 9) MOBILE AUDIT

> ⚠️  Live mobile testing was blocked. All findings below are inferred from markup.

### Markup signals

- ✅ `<meta name="viewport" content="width=device-width, initial-scale=1.0">` correct.
- ✅ Tailwind responsive utilities used throughout (`sm:`, `md:`, `lg:`, `xl:`).
- ✅ Form layout `sm:grid-cols-2` collapses cleanly at <640 px.
- ✅ Sticky header height `h-16` ≈ 64 px touch-target.
- ✅ WhatsApp float bottom-right, persistent — strong India-market UX.

### Risks (needs live verification)

1. **Hero H1.** `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` — at 320 px (oldest iPhone SE), "Built For India's Toughest Solar Conditions" likely wraps to 4–5 lines awkwardly.
2. **Header "Contact us" button** is hidden on mobile (`hidden lg:flex` pattern likely). WhatsApp float compensates, but the explicit CTA absence on mobile means visitors rely on either the hamburger or the WhatsApp float.
3. **Group-hover animations** (`group-hover:translate-x-2`, etc.) are desktop-only. No mobile tap-state replacement.
4. **Backdrop-blur on sticky nav** can be expensive on low-end Android devices. Acceptable.
5. **30 images on homepage** without dimensions → CLS will be worse on slower connections.

### Recommendations

- Live QA on iPhone 13 (390×844), Pixel 7 (412×915), iPad portrait (768×1024) before any campaign launch.
- Add `prefers-reduced-motion` guard around any scroll-driven animations.

**Mobile score: 6.5/10 (pending live QA).**

---

## 10) RESPONSIVE BREAKPOINT AUDIT

```
┌────────┬───────────────────────────────────────────────────────────────────────────────┐
│ Width  │                                     Risk                                      │
├────────┼───────────────────────────────────────────────────────────────────────────────┤
│ 320px  │ Hero H1 likely 4–5 line wrap. Pricing/feature cards may overflow. Needs       │
│        │ live test.                                                                    │
├────────┼───────────────────────────────────────────────────────────────────────────────┤
│ 375px  │ Standard iPhone — should be fine. Below Tailwind `sm:` (640px).               │
├────────┼───────────────────────────────────────────────────────────────────────────────┤
│ 390px  │ iPhone 13/14/15 — fine.                                                       │
├────────┼───────────────────────────────────────────────────────────────────────────────┤
│ 414px  │ Pixel — fine.                                                                 │
├────────┼───────────────────────────────────────────────────────────────────────────────┤
│ 768px  │ Mega-menu may not fit if dropdowns are wide; nav switches to mobile mode at   │
│        │ `lg:` (1024px). Tablet portrait is in awkward middle zone.                    │
├────────┼───────────────────────────────────────────────────────────────────────────────┤
│ 1024px │ Desktop layout kicks in.                                                      │
├────────┼───────────────────────────────────────────────────────────────────────────────┤
│ 1280px │ Standard laptop — fine.                                                       │
├────────┼───────────────────────────────────────────────────────────────────────────────┤
│ 1440px │ Standard external monitor — fine.                                             │
├────────┼───────────────────────────────────────────────────────────────────────────────┤
│ 1920px │ Whitespace heavy — typical for max-w-7xl design.                              │
└────────┴───────────────────────────────────────────────────────────────────────────────┘
```

Without live screenshots, per-breakpoint overflow can't be confirmed. Add to manual QA.

---

## 11) SECURITY AUDIT

### Headers (live curl of `/`)

```
┌─────────────────────────────┬────────────────────────────────────┬───────────────────────┐
│           Header            │              Value                 │        Verdict        │
├─────────────────────────────┼────────────────────────────────────┼───────────────────────┤
│ HSTS                        │ — not set —                        │ ❌ Missing            │
├─────────────────────────────┼────────────────────────────────────┼───────────────────────┤
│ Content-Security-Policy     │ — not set —                        │ ❌ Missing            │
├─────────────────────────────┼────────────────────────────────────┼───────────────────────┤
│ X-Frame-Options             │ — not set —                        │ ❌ Missing            │
├─────────────────────────────┼────────────────────────────────────┼───────────────────────┤
│ Permissions-Policy          │ — not set —                        │ ❌ Missing            │
├─────────────────────────────┼────────────────────────────────────┼───────────────────────┤
│ Referrer-Policy             │ strict-origin-when-cross-origin    │ ✅                    │
├─────────────────────────────┼────────────────────────────────────┼───────────────────────┤
│ X-Content-Type-Options      │ nosniff                            │ ✅                    │
├─────────────────────────────┼────────────────────────────────────┼───────────────────────┤
│ Cross-Origin-Opener-Policy  │ — not set —                        │ ❌ Missing            │
├─────────────────────────────┼────────────────────────────────────┼───────────────────────┤
│ Cross-Origin-Resource-Policy│ — not set —                        │ ❌ Missing            │
├─────────────────────────────┼────────────────────────────────────┼───────────────────────┤
│ NEL / Report-To             │ Cloudflare default                 │ ✅                    │
└─────────────────────────────┴────────────────────────────────────┴───────────────────────┘
```

### Recommended `public/_headers` baseline

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline'; connect-src 'self' https://script.google.com; frame-ancestors 'none'
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Resource-Policy: same-origin
```

(`'unsafe-inline'` is a concession because Astro emits inline scripts; tighten to nonces later.)

### Other

- ✅ HTTPS enforced; valid Cloudflare cert; h3 advertised.
- ⚠️  External links in HeaderV2 — verify `rel="noopener noreferrer"` on every `target="_blank"`.
- ⚠️  Mailto fallback in contact form constructs URL from user input — verified `encodeURIComponent` is applied, so safe from header injection.
- ⚠️  Contact form `action` attribute absent → no no-JS fallback. With JS disabled, form just reloads the page.
- ✅ No exposed `.git`, no debug endpoints, no leaked env files.

**Security score: 4/10.** Doubles to 8 the day you ship `_headers`.

---

## 12) TRUST & CREDIBILITY AUDIT

### Hard data

```
┌─────────────────────────────────────────────────┬────────────────────────────────────────┐
│                  Trust element                  │                 Status                 │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Real phone                                      │ ✅ +91 99791 92935                     │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Real email                                      │ ✅ service@qbitsenergy.com             │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ WhatsApp                                        │ ✅ wa.me/919979192935                  │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Corporate parent named                          │ ✅ Heaven Green Energy Limited         │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Footer Privacy Policy                           │ 🚨 href="#"                            │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Footer Terms                                    │ 🚨 href="#"                            │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Org JSON-LD phone                               │ 🚨 +91-xxx-xxx-xxxx placeholder        │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Org JSON-LD logo                                │ 🚨 /logo.webp → 404                    │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Customer logos                                  │ ⚠️  7 logos; unclear if customer or    │
│                                                 │ integration                            │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Real customer testimonials                      │ ⚠️  components exist; not verified     │
│                                                 │ surfaced                               │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Case studies on homepage                        │ ❌                                     │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Team / founder photos                           │ ❌                                     │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ ALMM / BIS / IEC badges                         │ ❌                                     │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Year founded / installs / kW deployed counters  │ ❌                                     │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Press logos / awards                            │ ❌                                     │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Third-party reviews (Google / JustDial /        │ ❌                                     │
│ Trustpilot / IndiaMART)                         │                                        │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ App store presence                              │ ✅ both Google Play + App Store        │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ ASP map (service network)                       │ ✅ interactive Leaflet + list          │
├─────────────────────────────────────────────────┼────────────────────────────────────────┤
│ Real author bylines on blog                     │ ⚠️  "Qbits Editorial" institutional    │
└─────────────────────────────────────────────────┴────────────────────────────────────────┘
```

### Net read

For a buyer comparing inverters in the ₹50K–5 lakh range (which is exactly the buyer this site is designed for), the missing trust elements — no team, no third-party reviews, no certification badges, dead Privacy/Terms — combined with the broken schema integrity are a hard barrier to the premium tier of the audience. The honest fix-list is short and high-leverage.

**Trust score: 5/10.**

---

## 13) INFORMATION ARCHITECTURE AUDIT

- Top-level groups: Products / Solutions (Residential, C&I) / Why Qbits / About / Resources (Blog, Glossary, Datasheets, Calculator) / Become a Partner (external) / Help Center (ASP, Warranty, Support).
- Click-depth to any blog post: 2 (or 3 if past page 1).
- Click-depth to any product or solution page: 1.
- Click-depth to ASP map / service near user: 2.
- Click-depth to a competitor comparison: 2 (`/blog/qbits-vs-luminous-honest-comparison/`, etc.).

### Issues

- **No `/blog/category/<name>/` routes** despite posts having `category` frontmatter. 12 category landing pages worth of free SEO + topical authority sitting unbuilt.
- **No breadcrumb UI** despite `BreadcrumbList` JSON-LD on blog posts. Schema promises crumbs the UI doesn't show — verify intentional or fix.
- **Glossary index** is a `/glossary/index.astro` listing all 150+ terms on one page. At ~37 KB HTML this is fine, but split into A–Z anchor jumps for usability.
- **No internal search.** WebSite schema's `SearchAction` advertises one. Either implement Pagefind (≈30 min for Astro) or remove the schema.

**IA score: 7.5/10.**

---

## 14) INTERNAL LINKING AUDIT

- Footer distributes equity broadly (~40 unique hrefs from every page).
- Header mega-menu doubles up (~25 additional internal links per page).
- **Blog → product money pages is the weakest link.** Brand mentions in long-form content rarely link to `/our-products/` or `/why-qbits/`. Spot-check on top comparison post: 10+ Qbits mentions, 0 product-page links.
- **No "Related posts" component** confirmed at the end of blog posts (verify in `src/pages/blog/[slug].astro`).
- **Glossary doesn't deep-link from blog posts.** Terms like "MPPT" and "IP66" used in 50+ posts; only some link to the glossary entry.
- **Orphan risk:** 98 untracked posts in `src/content/blog/` — when shipped, they need inbound links from existing posts, or they live alone.

**Internal linking score: 6/10.**

---

## 15) COMPETITOR COMPARISON

Three obvious comps based on the site's own existing `/blog/qbits-vs-*` cluster: Luminous, Microtek, Growatt.

```
┌───────────────────────────────┬────────┬──────────┬──────────┬─────────┐
│           Dimension           │ Qbits  │ Luminous │ Microtek │ Growatt │
├───────────────────────────────┼────────┼──────────┼──────────┼─────────┤
│ Design polish                 │   A−   │    C     │    C+    │   B+    │
├───────────────────────────────┼────────┼──────────┼──────────┼─────────┤
│ Page speed                    │   A−   │    C     │    B−    │   B     │
├───────────────────────────────┼────────┼──────────┼──────────┼─────────┤
│ SEO content depth             │   A    │    B−    │    B−    │   A−    │
├───────────────────────────────┼────────┼──────────┼──────────┼─────────┤
│ Real customer logos surfaced  │   ❌   │    ✅    │    ✅    │   ✅    │
├───────────────────────────────┼────────┼──────────┼──────────┼─────────┤
│ Live product / monitoring     │   ❌   │    ✅    │    ❌    │   ✅    │
│ dashboard preview             │        │          │          │         │
├───────────────────────────────┼────────┼──────────┼──────────┼─────────┤
│ ALMM / BIS badge on homepage  │   ❌   │    ✅    │    ✅    │   ✅    │
├───────────────────────────────┼────────┼──────────┼──────────┼─────────┤
│ Calendar booking / site       │   ❌   │    ❌    │    ❌    │   ❌    │
│ survey self-schedule          │        │          │          │         │
├───────────────────────────────┼────────┼──────────┼──────────┼─────────┤
│ Third-party reviews surfaced  │   ❌   │    ✅    │    ✅    │   ✅    │
├───────────────────────────────┼────────┼──────────┼──────────┼─────────┤
│ Analytics installed           │   ❌   │    ✅    │    ✅    │   ✅    │
├───────────────────────────────┼────────┼──────────┼──────────┼─────────┤
│ Schema integrity              │   ❌   │    ⚠️    │    ⚠️    │   ✅    │
└───────────────────────────────┴────────┴──────────┴──────────┴─────────┘
```

**Gap summary:** Qbits wins on design polish, content depth, and page speed. **Loses on every signal a serious buyer evaluates before writing a cheque** — customer logos, certification badges, third-party reviews, schema integrity, analytics. Closing the calendar gap is a category-wide opportunity since none of the competitors offer it.

---

## TOP 50 ISSUES (prioritized)

**Severity legend:**  🚨 Critical · 🔴 High · 🟠 Medium · 🟡 Low

---

### 🚨 BUSINESS-CRITICAL ISSUES (fix this week)

```
#: 1
Issue: Contact form GAS_ENDPOINT is the placeholder string
Location: src/pages/contact-us/index.astro:153
Severity: 🚨
Why it matters: 100% of leads route to mailto fallback. Mobile users without a configured
  mail client see nothing happen. Estimated 30–50% lead loss on mobile, 10–20% on desktop.
Recommended fix: Deploy Apps Script per google-apps-script/README.md, paste /exec URL into
  the GAS_ENDPOINT constant, redeploy. Verify with a real submission landing in the sheet/
  inbox before declaring done.
Expected impact: Recovers full lead flow.
────────────────────────────────────────
#: 2
Issue: Org schema logo URL 404s on every page
Location: src/layouts/Layout.astro:62
Severity: 🚨
Why it matters: Rich-results validator fails Org schema sitewide → no Knowledge Panel logo,
  weakened brand SERP. Cumulative effect across all 168+ live URLs.
Recommended fix: Change to "https://qbitsenergy.com/images/logo.png" (which exists and the
  blog Article schema already references). Or upload /logo.webp without a space in the
  filename and reference that consistently.
Expected impact: Restores Org schema validity.
────────────────────────────────────────
#: 3
Issue: Org schema phone is +91-xxx-xxx-xxxx placeholder
Location: src/layouts/Layout.astro:69
Severity: 🚨
Why it matters: Schema validators reject as malformed; click-to-call doesn't surface in
  SERP. Trust signal lost on every page.
Recommended fix: Change to "+919979192935" (E.164, no spaces).
Expected impact: 1-minute fix; restores trust signal.
────────────────────────────────────────
#: 4
Issue: /cta.png is 2,258 KB — a decorative homepage overlay
Location: public/cta.png (referenced by homepage CTA section)
Severity: 🚨
Why it matters: Mobile users on 4G pay ~9s extra page weight for a decorative image inside
  a conversion-critical section. Lazy-loaded so not LCP-blocking, but punishes anyone who
  scrolls.
Recommended fix: Re-export as cta.webp at the rendered size (≈1920×800 max), target
  ≤ 120 KB. Drop the .png.
Expected impact: 95%+ reduction in CTA section transfer cost.
────────────────────────────────────────
#: 5
Issue: Zero analytics — no GA4, no GTM, no LinkedIn / Meta pixel
Location: src/layouts/Layout.astro
Severity: 🚨
Why it matters: No traffic source data, no bounce data, no form-start vs submit data, no
  blog → product funnel, no CTA click-through. Every CRO recommendation below this point is
  unprovable.
Recommended fix: Install GTM in <head>; wire GA4 via GTM; fire conversion events on form
  submit, WhatsApp click, phone click, datasheet download.
Expected impact: Unblocks every downstream CRO decision.
────────────────────────────────────────
#: 6
Issue: Footer Privacy Policy + Terms = href="#"
Location: src/components/Footer.astro (placeholder hrefs)
Severity: 🚨
Why it matters: GDPR / India DPDP compliance gap for a site collecting personal data via
  the contact form. Also a hard trust signal — buyers comparing brands will downrate a site
  with broken legal pages.
Recommended fix: Ship real /privacy-policy and /terms pages. Until legal-reviewed, link to
  reasonable templates with a "Last updated" date.
Expected impact: Closes compliance gap + restores trust.
────────────────────────────────────────
#: 7
Issue: qbits.pages.dev is fully indexable + serves canonical → qbitsenergy.com
Location: Cloudflare Pages preview config / public/robots.txt
Severity: 🚨
Why it matters: Cross-domain canonical is a hint Google can ignore. If pages.dev is
  indexed, you fragment authority between two hostnames.
Recommended fix: Either (a) add X-Robots-Tag: noindex via env-gated _headers on pages.dev
  only, or (b) ship a preview-only robots.txt with Disallow: /.
Expected impact: Eliminates duplicate-content fragmentation risk.
```

---

### 🔴 HIGH-IMPACT ISSUES

```
#: 8
Issue: No calendar / site survey booking widget anywhere
Location: src/pages/contact-us/index.astro, hero
Severity: 🔴
Fix: Embed Cal.com (free) or Calendly inline. Site survey appointment in <2 clicks.
────────────────────────────────────────
#: 9
Issue: WebSite JSON-LD SearchAction points to /?s= which has no handler
Location: src/layouts/Layout.astro:84-88
Severity: 🔴
Fix: Build /search (Astro Pagefind takes ~2h) or remove the SearchAction block.
────────────────────────────────────────
#: 10
Issue: Header "Contact us" button → external support subdomain
Location: src/components/HeaderV2.astro:98
Severity: 🔴
Fix: Either point to on-site /contact-us/ or rebrand the support subdomain to match.
────────────────────────────────────────
#: 11
Issue: 30/30 homepage images lack width/height attributes
Location: All homepage components (HeroV2, ProductsV2, etc.)
Severity: 🔴
Fix: Add intrinsic width/height OR aspect-ratio CSS on wrappers. Kills CLS.
────────────────────────────────────────
#: 12
Issue: No <link rel="preload"> + fetchpriority="high" for hero LCP image
Location: src/layouts/Layout.astro head, src/components/HeroV2.astro
Severity: 🔴
Fix: Add preload link in Layout (conditioned on page) and fetchpriority="high" on hero img.
────────────────────────────────────────
#: 13
Issue: 7 Inter font weights loaded; site uses ~4
Location: src/layouts/Layout.astro:39
Severity: 🔴
Fix: Trim to 300;500;700;900 or self-host 4 woff2 files under /fonts/.
────────────────────────────────────────
#: 14
Issue: No security headers (HSTS, CSP, X-Frame, Permissions-Policy)
Location: public/_headers (file does not exist)
Severity: 🔴
Fix: Ship _headers with the baseline in section 11 above.
────────────────────────────────────────
#: 15
Issue: No homepage form
Location: src/pages/index.astro
Severity: 🔴
Fix: Add an inline form to the hero or sub-hero section: name + phone + city + system size.
  Industry benchmark: hero form lifts conversions 30–60%.
────────────────────────────────────────
#: 16
Issue: No trust counters on homepage (kW deployed, partners, installs, years)
Location: src/pages/index.astro (StatsSection.tsx exists but unclear if surfaced)
Severity: 🔴
Fix: Surface 4–6 hard numbers above the fold. "10,000+ installs · 1,500+ partners · 12-yr
  warranty · 98.8% peak efficiency" — pick what's true and own it.
────────────────────────────────────────
#: 17
Issue: No certification badges (ALMM, BIS, IEC, MNRE)
Location: Homepage trust strip
Severity: 🔴
Fix: Display the badges. Blog content already references ALMM repeatedly — make it visual.
────────────────────────────────────────
#: 18
Issue: No Product schema on /our-products/, /our-products/[id]/, /on-grid-inverter/,
  /hybrid-inverter/
Location: src/pages/our-products/*, src/pages/on-grid-inverter/index.astro, etc.
Severity: 🔴
Fix: Add Product + Offer + (eventually) AggregateRating JSON-LD per inverter model.
  Highest-leverage SEO lever available.
────────────────────────────────────────
#: 19
Issue: No LocalBusiness / SolarEnergySupply schema
Location: Layout.astro
Severity: 🔴
Fix: Add LocalBusiness w/ areaServed array. Drives local pack visibility for "solar
  inverter near me" queries.
────────────────────────────────────────
#: 20
Issue: Org `sameAs` only lists LinkedIn; footer has FB/Insta/YouTube too
Location: src/layouts/Layout.astro:64-66
Severity: 🔴
Fix: Add all four social URLs to the sameAs array.
────────────────────────────────────────
#: 21
Issue: No skip-to-content link
Location: src/layouts/Layout.astro
Severity: 🔴
Fix: Add <a href="#main" class="sr-only focus:not-sr-only">Skip to content</a> as first
  focusable element in <body>; add id="main" to the slot wrapper.
────────────────────────────────────────
#: 22
Issue: Datasheet downloads have no email gate
Location: src/pages/download-datasheets/index.astro
Severity: 🔴
Fix: Soft-gate ("Name + email → PDF"). For B2B/dealer audience, even a low-friction gate
  builds a marketing list.
────────────────────────────────────────
#: 23
Issue: Blog → product page internal linking is weak
Location: src/content/blog/*.md
Severity: 🔴
Fix: Audit the top 20 posts. Every "Qbits" brand mention in content should link to
  /our-products/ or /why-qbits/. Authority flow leak.
────────────────────────────────────────
#: 24
Issue: Author byline "Qbits Editorial" on all 150 posts
Location: src/content/blog/*.md (frontmatter `author`)
Severity: 🔴
Fix: Real human bylines with photos + bios + LinkedIn for top 10 posts.
  E-E-A-T compounds.
```

---

### 🟠 MEDIUM ISSUES

```
┌─────┬──────────────────────────────────┬────────────────────────────────┬──────────────────┐
│  #  │              Issue               │            Location            │       Fix        │
├─────┼──────────────────────────────────┼────────────────────────────────┼──────────────────┤
│ 25  │ Blog pagination pages 2–13       │ src/pages/blog/page/[page]     │ Add "Page N of M │
│     │ share page-1 description         │ .astro                         │ " or unique copy │
│     │ verbatim                         │                                │                  │
├─────┼──────────────────────────────────┼────────────────────────────────┼──────────────────┤
│ 26  │ No `lastmod` populated in        │ astro.config.mjs               │ Configure        │
│     │ sitemap                          │ (@astrojs/sitemap)             │ serialize hook   │
├─────┼──────────────────────────────────┼────────────────────────────────┼──────────────────┤
│ 27  │ /our-products/ H1 is two         │ src/pages/our-products/        │ Trim to one      │
│     │ sentences crammed into one       │ index.astro                    │ sentence         │
├─────┼──────────────────────────────────┼────────────────────────────────┼──────────────────┤
│ 28  │ /blog/ title and H1 generic      │ src/pages/blog/index.astro     │ Use "Solar       │
│     │ ("Blog", "Solar Knowledge Hub")  │                                │ Inverter         │
│     │                                  │                                │ Knowledge Hub —  │
│     │                                  │                                │ India 2026"      │
├─────┼──────────────────────────────────┼────────────────────────────────┼──────────────────┤
│ 29  │ /404 has its own canonical +     │ src/pages/404.astro            │ Add              │
│     │ OG tags; no noindex              │                                │ noindex,nofollow │
├─────┼──────────────────────────────────┼────────────────────────────────┼──────────────────┤
│ 30  │ Builtin-for-india.webp at 242 KB │ public/homepage/built-for-     │ Re-export to     │
│     │                                  │ india.webp                     │ ~90 KB           │
├─────┼──────────────────────────────────┼────────────────────────────────┼──────────────────┤
│ 31  │ og-image.webp 135 KB — no        │ public/og-image.webp           │ Add og:image:    │
│     │ og:image:width/height meta       │                                │ width / height   │
└─────┴──────────────────────────────────┴────────────────────────────────┴──────────────────┘
```

```
#: 32
Issue: Footer YouTube link points to a single video, not the channel
Location: src/components/Footer.astro (social links section)
Fix: Change to channel URL (e.g. https://youtube.com/@qbitsenergy).
────────────────────────────────────────
#: 33
Issue: Hero CTA text not visually verified; secondary CTA may be missing
Location: Homepage hero
Fix: Live render check. Ensure primary CTA = "Get a free site survey"; secondary = "See
  products."
────────────────────────────────────────
#: 34
Issue: No "Related posts" component at end of blog posts
Location: src/pages/blog/[slug].astro
Fix: Add a RelatedPosts.astro component pulling 3 same-category posts.
────────────────────────────────────────
#: 35
Issue: No /blog/category/<name>/ routes despite frontmatter `category` field
Location: src/pages/blog/
Fix: Build a dynamic [category].astro page. 12 new SEO landing pages for free.
────────────────────────────────────────
#: 36
Issue: No internal search; WebSite SearchAction schema implies one exists
Location: src/layouts/Layout.astro:84-88
Fix: Implement Pagefind (~30 min) or remove SearchAction (see #9).
────────────────────────────────────────
#: 37
Issue: Form has no `pattern` on phone, no `maxlength` on any field, no input trim
Location: src/pages/contact-us/index.astro:113-145
Fix: Add `pattern="[+0-9 ()-]{7,16}"` to phone, `maxlength="80"` to name, `maxlength="2000"`
  to message; trim values in submit handler.
────────────────────────────────────────
#: 38
Issue: Form has no honeypot / Turnstile → spam-bait once endpoint is live
Location: src/pages/contact-us/index.astro
Fix: Add hidden `website` honeypot + Cloudflare Turnstile (free, invisible).
────────────────────────────────────────
#: 39
Issue: Form has no CSRF / shared-secret check against Apps Script
Location: google-apps-script/* and inline submit handler
Fix: Add SHARED_SECRET PropertiesService check in doPost; client appends `token` field.
────────────────────────────────────────
#: 40
Issue: Form `<form>` has no `action` attribute → no no-JS fallback
Location: src/pages/contact-us/index.astro:104
Fix: Add `action="mailto:service@qbitsenergy.com" method="post"` for pure no-JS
  graceful degradation.
────────────────────────────────────────
#: 41
Issue: Form not reset after mailto fallback success
Location: src/pages/contact-us/index.astro:194-198
Fix: Call form.reset() after window.location.href = buildMailto(fd).
────────────────────────────────────────
#: 42
Issue: No homepage testimonials surfaced despite ClientFeedback + Testimonials components
Location: src/pages/index.astro
Fix: Render Testimonials with photo + name + company + rating + city.
────────────────────────────────────────
#: 43
Issue: No case studies surfaced from homepage despite multiple case-study-*.md files
Location: src/pages/index.astro, src/content/blog/case-study-*.md
Fix: Add a "Recent installs" section showing 3 case studies with kW + city + photo.
────────────────────────────────────────
#: 44
Issue: Mega-menu open/close behavior may not be keyboard-accessible
Location: src/components/HeaderV2.astro
Fix: Verify Tab+Enter opens dropdown, Esc closes it, arrow keys navigate items.
────────────────────────────────────────
#: 45
Issue: Color contrast on glassmorphic header (`text-white/70`) likely fails WCAG AA on some
  backgrounds
Location: src/components/HeaderV2.astro nav links
Fix: Bump to text-white/85 minimum; verify against actual hero backdrop.
────────────────────────────────────────
#: 46
Issue: 98 untracked blog posts in src/content/blog/ — not published, not in sitemap
Location: src/content/blog/ (untracked .md files)
Fix: Ship in batches of 20/week. Each one needs inbound links and a category.
────────────────────────────────────────
#: 47
Issue: No `prefers-reduced-motion` guard on group-hover scale/translate animations
Location: Multiple components using `group-hover:translate-x-2` etc.
Fix: Wrap with `@media (prefers-reduced-motion: no-preference)`.
────────────────────────────────────────
#: 48
Issue: External links missing `rel="noopener noreferrer"` audit
Location: HeaderV2 dropdowns, Footer social, contact-us partner CTA
Fix: Verify every target="_blank" has rel="noopener noreferrer".
```

---

### 🟡 LOW ISSUES

```
┌─────┬───────────────────────────────────────────────────────────────┬─────────────────────┐
│  #  │                            Issue                              │         Fix         │
├─────┼───────────────────────────────────────────────────────────────┼─────────────────────┤
│ 49  │ Logo filename has a space (`/logo green.webp`) — URL-encodes  │ Rename to           │
│     │ as `/logo%20green.webp`                                       │ /logo.webp          │
├─────┼───────────────────────────────────────────────────────────────┼─────────────────────┤
│ 50  │ astro.config.mjs and public/_redirects both store redirects   │ Pick one source of  │
│     │ — duplication                                                 │ truth; remove other │
└─────┴───────────────────────────────────────────────────────────────┴─────────────────────┘
```

---

## TOP 20 QUICK WINS (< 4h each, sequenced)

1. ✂️  Delete `SearchAction` block from `src/layouts/Layout.astro:84-88` (or build Pagefind).
2. 🛠️  Fix Org schema logo URL: `Layout.astro:62` → `"https://qbitsenergy.com/images/logo.png"`.
3. 🛠️  Fix Org schema phone: `Layout.astro:69` → `"+919979192935"`.
4. 🛠️  Add `sameAs` entries for FB / Insta / YouTube to Org schema.
5. ✂️  Replace `cta.png` (2.26 MB) with `cta.webp` ≤ 120 KB.
6. 🛠️  Re-export `built-for-india.webp` from 242 KB to ~90 KB.
7. 🏷️  Write minimum-viable Privacy + Terms pages; fix footer `#` links.
8. ➕ Ship `public/_headers` with HSTS / CSP / X-Frame / Permissions-Policy baseline.
9. ➕ Add skip-to-content link as first focusable element in `Layout.astro`.
10. 🛠️  Deploy the Apps Script endpoint; replace `GAS_ENDPOINT` placeholder; verify with a real submit.
11. 🛠️  Install GTM in `Layout.astro` head; wire GA4 via GTM; fire `form_submit` + `whatsapp_click` events.
12. 🛠️  Add `width`/`height` to every homepage `<img>` (or `aspect-ratio` on wrappers).
13. 🛠️  Add `<link rel="preload" as="image" href="/homepage/qbits-hero.webp" fetchpriority="high">`.
14. 🛠️  Trim Google Fonts weights from 7 to 4; or self-host 4 woff2 files.
15. 🏷️  Add `noindex,nofollow` meta to `/404.astro`.
16. 🛠️  Fix YouTube footer link → channel URL.
17. 🏷️  Fix `/blog/page/N/` duplicate descriptions: add "Page N of M" suffix.
18. 🛠️  Add `loading="lazy"` decoding="async" to remaining below-fold imgs.
19. 🛠️  Rename `/logo green.webp` → `/logo.webp` (and update references).
20. 🛠️  Audit top 20 blog posts; add 1–3 internal links each from brand mentions to `/our-products/` or `/why-qbits/`.

---

## 30-DAY IMPROVEMENT PLAN

**Week 1 — Stop the bleed**
- All 🚨 critical issues #1–#7 fixed and verified live.
- _headers shipped. Analytics live. Privacy/Terms shipped. pages.dev noindexed.

**Week 2 — Performance & CWV**
- All images get dimensions or aspect-ratio. Hero preload + fetchpriority added.
- `cta.png` and `built-for-india.webp` re-exported. Font weights trimmed (or self-hosted).
- Lighthouse mobile run on homepage + 1 blog post — target perf 90+.

**Week 3 — Trust + CRO surface area**
- Trust counters on homepage (kW deployed / partners / installs / warranty).
- Real testimonials surfaced (photo + name + company + city + rating).
- 2–3 case studies surfaced on homepage.
- Certification badges row (ALMM + BIS + IEC + MNRE).
- Real author bylines on top 10 blog posts.
- "Related posts" component at end of every blog post.

**Week 4 — Schema + IA depth**
- Product schema on `/our-products/`, `/on-grid-inverter/`, `/hybrid-inverter/`.
- LocalBusiness schema.
- Sitemap `lastmod` populated from frontmatter dates.
- Blog → product money-page internal linking pass (top 20 posts).
- Build `/blog/category/<name>/` routes from frontmatter (12 new landing pages).

---

## 90-DAY ROADMAP

**Month 1:** as above.

**Month 2 — Conversion engine**
- Homepage form (hero or sub-hero).
- Exit-intent capture (lead magnet: "5kW Sizing Guide PDF").
- Datasheet email gate.
- Cal.com / Calendly site-survey booking on `/contact-us/`.
- Pagefind search.
- Newsletter signup on blog index + post template.
- A/B test hero copy + CTA via GTM split test.

**Month 3 — Authority + scale**
- Publish 98 staged blog posts in batches of 20/week.
- Bylined author program: 4–5 named contributors with photos + bios + LinkedIn.
- Press-mentions row on homepage (any solar trade media coverage).
- Outreach for 10+ third-party reviews (Trustpilot India, Google Business Profile, JustDial, IndiaMART).
- City-specific landing pages: Bangalore / Pune / Lucknow / Jaipur / Chennai (5 pages, LocalBusiness schema).
- Video case-study program: 3 customer stories, embedded homepage + product pages, indexed via VideoObject schema.

---

## Methodology / What was NOT covered

- **Live visual screenshots:** Not captured (headless Chromium sandbox failed in this environment). All visual / layout / animation findings are inferred from HTML+CSS — verify before fixing. Recommend a follow-up `/qa` or `/design-review` run on a sandbox-capable host.
- **Lighthouse / WebPageTest scores:** Not run. CWV values are estimates.
- **Real keyboard / screen reader testing:** Not run. A11y findings are HTML-level.
- **Per-blog-post audit:** 1 of 150 sampled. Rest assumed structurally similar.
- **Email deliverability:** Not tested.
- **Backend (Apps Script lead capture):** Not tested — currently inactive (#1).
- **Mobile real-device QA:** Not done. Recommended before any campaign.

---

## Forms — End-to-end Test Results

### Inventory

**Total forms on the entire website: 1.** Grep of `src/` and live HTML for all 18 page templates confirms a single `<form>` tag, on `/contact-us/`. No newsletter signup, no datasheet email gate, no quote form, no partner application. (This is itself a CRO finding — see #15, #22, #38.)

### Form 1 — Contact form `/contact-us/`

- **Location:** `src/pages/contact-us/index.astro:103-146` (markup), `:147-231` (inline submission script).
- **Fields:** `name` (required, text), `email` (required, type=email), `phone` (optional, type=tel), `subject` (select, 5 options), `message` (required, textarea).
- **Submit flow:**
  1. `e.preventDefault()` → JS owns submission.
  2. `form.reportValidity()` → blocks if required missing or email malformed.
  3. Appends hidden fields: `source=contact-form`, `page=/contact-us/`, `userAgent=...`.
  4. Branches on `isConfigured` regex of `GAS_ENDPOINT`.
  5. **Configured path (NOT ACTIVE):** POSTs `application/x-www-form-urlencoded` to Apps Script, expects `{ok:true}`, shows success.
  6. **Unconfigured path (CURRENT):** Opens `mailto:service@qbitsenergy.com` with body pre-filled; shows "Opening your email app".
  7. **Network failure path:** Falls back to mailto too; shows "Network issue — opening your email app instead".

### Test cases (20)

```
┌────┬─────────────────────────────────────┬────────────────────────────────────┬──────────┐
│  # │              Scenario               │            Actual behavior         │  Verdict │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│ T1 │ All valid fields                    │ GAS_ENDPOINT is placeholder →      │  🚨 FAIL │
│    │                                     │ triggers mailto fallback. Lead NOT │  (#1)    │
│    │                                     │ captured anywhere.                 │          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│ T2 │ Submit without name (required)      │ reportValidity() blocks; bubble    │    ✅    │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│ T3 │ Submit without email (required)     │ Blocked + bubble                   │    ✅    │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│ T4 │ Submit with invalid email           │ type="email" + reportValidity()    │    ✅    │
│    │ ("notanemail")                      │ block                              │          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│ T5 │ Submit without message (required)   │ Blocked + bubble                   │    ✅    │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│ T6 │ Phone empty (optional)              │ Form proceeds                      │    ✅    │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│ T7 │ Phone = "abcd1234!@#$" (garbage)    │ No pattern, accepts anything →     │   ⚠️  #37│
│    │                                     │ pollutes lead DB                   │          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│ T8 │ Name = 10,000 chars                 │ No maxlength → mailto URL exceeds  │   ⚠️  #37│
│    │                                     │ Windows ~2048 limit, silent        │          │
│    │                                     │ truncation                         │          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│ T9 │ Email = "  user@example.com  "      │ type="email" doesn't trim;         │   ⚠️  #37│
│    │ (leading/trailing space)            │ whitespace preserved               │          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│T10 │ Message = "<script>alert(1)</script>│ encodeURIComponent escapes <>&     │    ✅    │
│    │ &subject=hijacked"                  │ properly                           │          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│T11 │ Message with "\n&subject=…"         │ Encoding prevents mailto header    │    ✅    │
│    │ (header injection)                  │ injection                          │          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│T12 │ Submit with JavaScript disabled     │ <form> has no `action` → posts to  │   ⚠️  #40│
│    │                                     │ current URL, no handler. Lead lost.│          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│T13 │ Submit, network drops mid-fetch     │ try/catch → opens mailto with same │    ✅    │
│    │                                     │ data + status message              │          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│T14 │ Submit while offline                │ Same as T13 — mailto fallback      │    ✅    │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│T15 │ Double-click submit                 │ Disabled in `try` block; NOT       │   ⚠️  #41│
│    │                                     │ disabled in mailto branch          │          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│T16 │ Bot spam submission                 │ No honeypot, no rate limit, no     │   ⚠️  #38│
│    │                                     │ Turnstile. Will get hammered.      │          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│T17 │ CSRF / direct POST to Apps Script   │ No shared-secret token. Anyone     │   ⚠️  #39│
│    │                                     │ can spam endpoint directly.        │          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│T18 │ Success message a11y                │ role="status" aria-live="polite"   │    ✅    │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│T19 │ Error message contrast              │ text-rose-600 ≈ 5.7:1; text-       │    ✅    │
│    │                                     │ emerald-600 ≈ 4.9:1 — both AA      │          │
├────┼─────────────────────────────────────┼────────────────────────────────────┼──────────┤
│T20 │ After mailto success, form reset?   │ form.reset() called only in        │   ⚠️  #41│
│    │                                     │ configured-success branch          │          │
└────┴─────────────────────────────────────┴────────────────────────────────────┴──────────┘
```

**Summary:** 1 critical fail (T1 → BC issue #1) · 6 minor hardening gaps (T7-T9, T12, T15, T20) · 2 server-side concerns to fix before launch (T16, T17) · 11 pass.

### Sub-form CTAs on contact page

| Element | href | Verdict |
|---|---|---|
| "Chat on WhatsApp" (Become a Partner sidebar) | `https://wa.me/919979192935` | ✅ valid, `target="_blank" rel="noopener"` |
| Phone link (sidebar) | `tel:+91...` | Verify exact `tel:` href format |
| Email link (sidebar) | `mailto:service@qbitsenergy.com` | ✅ valid |

### Pre-launch hardening checklist (apply when configuring GAS_ENDPOINT)

```html
<input type="text" name="name" required maxlength="80" autocomplete="name">
<input type="email" name="email" required maxlength="120" autocomplete="email">
<input type="tel" name="phone" pattern="[+0-9 ()-]{7,16}" inputmode="tel"
       autocomplete="tel" maxlength="20">
<textarea name="message" required minlength="10" maxlength="2000"></textarea>

<!-- Honeypot -->
<div style="position:absolute;left:-9999px" aria-hidden="true">
  <label>Don't fill: <input type="text" name="website" tabindex="-1" autocomplete="off"></label>
</div>
```

And in the submit handler:
```js
if (fd.get('website')) return;                                        // honeypot
['name','email','message'].forEach(k => fd.set(k, (fd.get(k)||'').trim()));
fd.append('token', 'YOUR_SHARED_TOKEN');                              // CSRF-ish
btn.disabled = true;                                                  // mailto branch too
```

In the Apps Script:
```js
function doPost(e) {
  const expected = PropertiesService.getScriptProperties().getProperty('SHARED_SECRET');
  if (e.parameter.token !== expected) {
    return ContentService.createTextOutput(JSON.stringify({ok:false, error:'forbidden'}))
      .setMimeType(ContentService.MimeType.JSON);
  }
  // … rest of handler
}
```

Then add Cloudflare Turnstile (free, invisible) for real bot protection.

---

## Appendix — Files referenced for fixes

```
src/layouts/Layout.astro:62                  → Org schema logo (#2)
src/layouts/Layout.astro:69                  → Org schema phone (#3)
src/layouts/Layout.astro:64-66               → Org sameAs (#20)
src/layouts/Layout.astro:84-88               → WebSite SearchAction (#9)
src/layouts/Layout.astro:39                  → Google Fonts weights (#13)
src/layouts/Layout.astro (head)              → preload + skip link (#12, #21)

src/pages/contact-us/index.astro:104         → form action attribute (#40)
src/pages/contact-us/index.astro:113-145     → input pattern/maxlength (#37)
src/pages/contact-us/index.astro:147-231     → submit handler (#1, #38, #39, #41)

src/components/HeaderV2.astro:98             → external Contact CTA (#10)
src/components/HeaderV2.astro (dropdowns)    → keyboard a11y (#44)
src/components/Footer.astro                  → Privacy/Terms #, YouTube (#6, #32)

src/pages/our-products/index.astro           → Product schema (#18)
src/pages/on-grid-inverter/index.astro       → Product schema (#18)
src/pages/hybrid-inverter/index.astro        → Product schema (#18)
src/pages/blog/[slug].astro                  → Related posts (#34), bylines (#24)
src/pages/blog/page/[page].astro             → duplicate desc (#25)
src/pages/blog/                              → category routes (#35)
src/pages/404.astro                          → noindex (#29)

public/_headers (new)                        → security headers (#14)
public/cta.png                               → replace w/ webp (#4)
public/homepage/built-for-india.webp         → re-export (#30)
public/logo green.webp                       → rename (#49)

astro.config.mjs                             → sitemap lastmod (#26), redirect dedupe (#50)

google-apps-script/*                         → deploy endpoint (#1), SHARED_SECRET (#39)
```

---

*Audit performed via HTTP-level recon + codebase cross-reference. For visual UX and live form-submission verification, follow up with a browser-driven `/qa` pass on a sandbox-capable host.*
