# Qbits Energy — Technical SEO Framework

> WordPress + Elementor implementation guide. Pair with the Site Architecture and Content Templates files.

---

# PART A — Meta Tag Framework

## A1. Meta Title & Description Formulas (per page type)

**Limits:** Title ≤60 chars (~580px) · Description ≤155 chars. Truncation = lost CTR.

**Power-word toolkit (use sparingly, max 1 per tag):**
*Free · 2026 · Honest · India · ALMM · Subsidy · ₹78,000 · Save · Guide · Compare · Best · Updated · 12-Year · Bankable · Verified*

| Page type | Title formula | Description formula |
|---|---|---|
| **Product** | `[Brand] [Model] — [kW] [Type] Solar Inverter \| [USP]` | `[kW] [type] inverter with [feature 1], [feature 2], [warranty]. ALMM listed. [CTA verb] now.` |
| **Blog (How-to)** | `How to [verb] [object] in India ([year] Guide)` | `[Promise]. [Stat or proof]. Learn [benefit 1] & [benefit 2]. Updated [month year].` |
| **Location** | `Solar Inverter in [City] — [Local Hook] \| Qbits Energy` | `[Solar potential]. [Local subsidy]. Find Qbits-certified installers in [City]. Free site survey.` |
| **Glossary** | `What is [Term]? — Solar Glossary \| Qbits Energy` | `[Term] explained in plain English + technical detail. Why it matters when buying a solar inverter in India.` |
| **Review** | `[Brand] Solar Inverter Review India ([year]) — Honest Assessment` | `Independent review of [Brand] inverters: pros, cons, price, warranty, who should buy. [year] update.` |
| **Comparison** | `[Brand A] vs [Brand B] Solar Inverter — Specs, Price, Verdict ([year])` | `Side-by-side comparison: efficiency, warranty, price, app. Which one fits your home? Updated [year].` |
| **List (Best)** | `Best [descriptor] Solar Inverter in India [year] — Top [N] Picks` | `[N] honest picks, ranked. Buying guide, comparison table, price. Updated [month year].` |
| **Subsidy** | `Solar Subsidy in [State] [year] — Amount, Eligibility, How to Apply` | `Get up to ₹78,000 PM Surya Ghar subsidy in [State]. Step-by-step process, documents, timeline.` |
| **Calculator** | `Solar [X] Calculator India — Free, [Year]` | `Calculate [X] in 60 seconds. Includes subsidy, panel sizing, payback. Free, no signup.` |

## A2. Ten Example Meta Tags (priority pages, keyword placement marked)

**[K] = primary keyword position**

1. **`/products/hybrid/5-kw-qh5`**
   - Title: `Qbits QH5 [K: 5kW Hybrid Solar Inverter] — AI-Tuned, 12-Yr Warranty` (58)
   - Desc: `5kW hybrid inverter with dual MPPT, lithium-ready, IP65, India-grid-tuned AI. ALMM listed. 12-year warranty. Book a free site survey.` (148)

2. **`/best-solar-inverter-for-home`**
   - Title: `[K: Best Solar Inverter for Home in India] 2026 — Top 10 Picks` (60)
   - Desc: `10 honest picks ranked: Sungrow, Growatt, Luminous, Qbits & more. Buying guide, comparison table. Updated Jan 2026.` (122)

3. **`/compare/qbits-vs-growatt-solar-inverter`**
   - Title: `[K: Qbits vs Growatt Solar Inverter] — Specs, Price, Verdict 2026` (59)
   - Desc: `Side-by-side: efficiency, warranty, India service SLA, app. Which 5kW inverter fits your home? Honest 2026 comparison.` (128)

4. **`/solar-inverter/ahmedabad`**
   - Title: `[K: Solar Inverter in Ahmedabad] — Subsidy, Price, Installation` (59)
   - Desc: `5.5 kWh/m²/day solar potential. PM Surya Ghar + Surya Gujarat subsidy. Find Qbits-certified installers in Ahmedabad.` (122)

5. **`/subsidy/pm-surya-ghar`**
   - Title: `[K: PM Surya Ghar Yojana] 2026 — Subsidy Amount, How to Apply` (56)
   - Desc: `Get up to ₹78,000 rooftop solar subsidy. Eligibility, documents, step-by-step process, timeline. Updated Jan 2026.` (122)

6. **`/glossary/mppt`**
   - Title: `[K: What is MPPT] in Solar Inverter? — Explained Simply` (53)
   - Desc: `MPPT (Maximum Power Point Tracking) explained: how it works, why it matters when buying a solar inverter, single vs dual MPPT.` (134)

7. **`/reviews/sungrow-solar-inverter-review`**
   - Title: `[K: Sungrow Solar Inverter Review] India 2026 — Honest Take` (56)
   - Desc: `Independent Sungrow review: SG5KTL, SH5K, SG110CX. Pros, cons, India price, service SLA, who should buy. Updated 2026.` (124)

8. **`/calculator/payback`**
   - Title: `[K: Solar Payback Calculator India] — Free, 2026` (47)
   - Desc: `Calculate your solar payback in 60 seconds. Includes subsidy, your tariff, your bill. Free, no signup, instant result.` (124)

9. **`/best-5kw-solar-inverter-india`**
   - Title: `[K: Best 5kW Solar Inverter in India] 2026 — Top 7 Compared` (54)
   - Desc: `Sungrow, Growatt, Qbits, Luminous, Solis ranked for 5kW homes. Price, warranty, efficiency, app. Honest 2026 picks.` (122)

10. **`/blog/how-to-choose-solar-inverter-for-home-india`**
    - Title: `[K: How to Choose a Solar Inverter] for Your Home in India (2026)` (60)
    - Desc: `7 criteria that actually matter: MPPT, warranty, ALMM, app, IP rating. Buying guide + subsidy + calculator. Updated 2026.` (128)

## A3. URL Slug Guidelines

- **All lowercase.** No camelCase, no underscores.
- **Hyphens only** to separate words (`5-kw-qh5`, not `5_kw_qh5`).
- **≤5 meaningful words** post-domain — drop stopwords (and, of, the, in).
- **No dates** in evergreen slugs (`/best-solar-inverter-for-home`, not `/best-solar-inverter-for-home-2026`). Year lives in title/H1, not slug — slug survives annual refreshes.
- **No trailing slash inconsistency** — pick one (Qbits standard: no trailing slash).
- **Category hierarchy ≤2 levels** (`/products/hybrid/5-kw-qh5` = 3 segments OK; never go deeper).
- **No file extensions** (`.html`, `.php`) — WordPress permalinks: `/%category%/%postname%/` or custom.
- **No special chars or %20.** ASCII only.
- **Match the H1 intent** — slug ≈ H1's keyword core.
- **Never change a published slug** without a 301. Once indexed, slugs are sacred.
- **Brand prefix avoidance** — don't put `qbits-` in every slug; the domain already does that.
- **Avoid numbers that age** — `best-2026-picks` ages badly; `best-picks` doesn't.

---

# PART B — Schema Markup Library

> All snippets are JSON-LD, ready to paste inside `<script type="application/ld+json">…</script>` (or render via Yoast/Rank Math/SEOPress custom schema). Placeholders in `{{double-braces}}` — replace before publishing.

## B1. Product schema — `/products/hybrid/5-kw-qh5`

```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Qbits QH5 5kW Hybrid Solar Inverter",
  "image": [
    "https://qbitsenergy.com/images/qh5-front.jpg",
    "https://qbitsenergy.com/images/qh5-angle.jpg"
  ],
  "description": "5kW single-phase AI-tuned hybrid solar inverter with dual MPPT, lithium battery compatibility, IP65 rating, and 12-year warranty. ALMM-listed and tuned for Indian grid conditions.",
  "sku": "QH5",
  "mpn": "QBITS-QH5-5KW",
  "brand": { "@type": "Brand", "name": "Qbits Energy" },
  "manufacturer": { "@type": "Organization", "name": "Qbits Energy", "url": "https://qbitsenergy.com" },
  "offers": {
    "@type": "Offer",
    "url": "https://qbitsenergy.com/products/hybrid/5-kw-qh5",
    "priceCurrency": "INR",
    "price": "65000",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": { "@type": "Organization", "name": "Qbits Energy" }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "142"
  },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Nominal Power", "value": "5 kW" },
    { "@type": "PropertyValue", "name": "MPPT Count", "value": "2" },
    { "@type": "PropertyValue", "name": "Max Efficiency", "value": "97.6%" },
    { "@type": "PropertyValue", "name": "IP Rating", "value": "IP65" },
    { "@type": "PropertyValue", "name": "Warranty", "value": "12 years" }
  ]
}
```

## B2. Review schema — `/reviews/sungrow-solar-inverter-review`

```json
{
  "@context": "https://schema.org/",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "Sungrow Solar Inverter (India range)",
    "brand": { "@type": "Brand", "name": "Sungrow" }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.2",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Person",
    "name": "{{Author Name}}",
    "jobTitle": "Senior Solar Engineer",
    "url": "https://qbitsenergy.com/authors/{{author-slug}}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Qbits Energy",
    "logo": { "@type": "ImageObject", "url": "https://qbitsenergy.com/logo.png" }
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-06-04",
  "reviewBody": "Sungrow inverters are reliable Tier-1 hardware with strong utility-scale heritage. In India, the trade-off is service network depth in Tier-2/3 cities..."
}
```

## B3. FAQPage schema — blog & FAQ hubs

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What size solar inverter do I need for a 3 BHK home in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical 3 BHK with 2 ACs and standard load needs a 3 kW to 5 kW solar system, requiring a 3 kW or 5 kW inverter. Exact sizing depends on your monthly bill — use our sizing calculator."
      }
    },
    {
      "@type": "Question",
      "name": "Is PM Surya Ghar subsidy available on Qbits inverters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Qbits inverters are ALMM-listed, which is the eligibility requirement for the PM Surya Ghar Muft Bijli Yojana subsidy of up to ₹78,000."
      }
    }
  ]
}
```

## B4. HowTo schema — installation / subsidy application guides

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Apply for PM Surya Ghar Subsidy in Gujarat",
  "description": "Step-by-step guide to applying for the PM Surya Ghar rooftop solar subsidy in Gujarat.",
  "totalTime": "PT45D",
  "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": "0" },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Register on PM Surya Ghar portal",
      "text": "Visit pmsuryaghar.gov.in and register with mobile + electricity consumer number.",
      "url": "https://qbitsenergy.com/subsidy/gujarat#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Select DISCOM and empanelled vendor",
      "text": "Choose your Gujarat DISCOM (Torrent/UGVCL/DGVCL/MGVCL/PGVCL) and an empanelled installer."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Feasibility approval",
      "text": "DISCOM conducts site feasibility check (typically 5–10 days)."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Installation",
      "text": "Empanelled installer completes rooftop installation (3–7 days)."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Inspection & net metering",
      "text": "DISCOM inspects, installs net meter, activates feed-in."
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Subsidy disbursal",
      "text": "Subsidy credited to your registered bank account within 30 days of net meter activation."
    }
  ]
}
```

## B5. LocalBusiness schema — location pages

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://qbitsenergy.com/solar-inverter/ahmedabad#business",
  "name": "Qbits Energy — Ahmedabad Service Center",
  "image": "https://qbitsenergy.com/images/ahmedabad-center.jpg",
  "url": "https://qbitsenergy.com/solar-inverter/ahmedabad",
  "telephone": "+91-{{phone}}",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{street}}",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "{{pin}}",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "23.0225", "longitude": "72.5714" },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:30", "closes": "18:30"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "City", "name": "Gandhinagar" }
  ],
  "sameAs": [
    "https://www.facebook.com/qbitsenergy",
    "https://www.instagram.com/qbitsenergy",
    "https://www.linkedin.com/company/qbitsenergy"
  ]
}
```

## B6. BreadcrumbList — every page

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://qbitsenergy.com/" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://qbitsenergy.com/products" },
    { "@type": "ListItem", "position": 3, "name": "Hybrid", "item": "https://qbitsenergy.com/products/hybrid" },
    { "@type": "ListItem", "position": 4, "name": "QH5 5kW", "item": "https://qbitsenergy.com/products/hybrid/5-kw-qh5" }
  ]
}
```

## B7. Article schema — educational blogs

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Choose the Right Solar Inverter for Your Home in India (2026 Guide)",
  "description": "A 2026 buyer's guide to picking the right solar inverter for an Indian home: MPPT, warranty, ALMM, subsidy, sizing.",
  "image": "https://qbitsenergy.com/images/blog/choose-inverter-hero.jpg",
  "author": {
    "@type": "Person",
    "name": "{{Author}}",
    "url": "https://qbitsenergy.com/authors/{{slug}}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Qbits Energy",
    "logo": { "@type": "ImageObject", "url": "https://qbitsenergy.com/logo.png" }
  },
  "datePublished": "2026-01-10",
  "dateModified": "2026-06-04",
  "mainEntityOfPage": "https://qbitsenergy.com/blog/how-to-choose-solar-inverter-for-home-india",
  "articleSection": "Buying Guides",
  "wordCount": 3000
}
```

## B8. DefinedTerm schema — glossary

```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "name": "MPPT (Maximum Power Point Tracking)",
  "description": "An electronic technique inside solar inverters that continuously adjusts panel operating voltage and current to extract maximum possible power under varying sunlight, temperature, and shading.",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "Qbits Energy Solar Glossary",
    "url": "https://qbitsenergy.com/glossary"
  },
  "url": "https://qbitsenergy.com/glossary/mppt",
  "termCode": "MPPT"
}
```

---

# PART C — Internal Linking Architecture

## C1. Hub-and-Spoke: 10 Pillar Pages

| # | Pillar URL | Supporting page types that link in |
|---|---|---|
| 1 | `/solar-inverter` (master pillar) | All product pages, all city pages, all comparisons, all best-lists, blog cornerstones |
| 2 | `/products/hybrid` | All hybrid SKU pages, "Hybrid vs On-Grid" comparison, "Best Hybrid Inverter India" list, use-case pages mentioning batteries |
| 3 | `/products/on-grid` | All on-grid SKUs, "On-grid vs Off-grid" comparison, PM Surya Ghar subsidy hub, residential use-case pages |
| 4 | `/products/off-grid` | All off-grid SKUs, rural use-case pages, water-pump page, KUSUM scheme page |
| 5 | `/subsidy/pm-surya-ghar` | All state subsidy pages, all home use-case pages, on-grid product pages, calculator pages |
| 6 | `/best-solar-inverter-india` | All best-list variants, all review pages, all comparison pages |
| 7 | `/calculator/system-sizing` | All product pages, all how-to blogs, all use-case pages, all state subsidy pages |
| 8 | `/installer` (installer hub) | All product pages, all city pages, all DISCOM paperwork pages, training pages |
| 9 | `/glossary` (glossary index) | Every page with a technical term (auto-link rule) |
| 10 | `/solar-for-home` | All residential city pages, residential best-lists, sizing calculator, subsidy hub |

## C2. Linking Rules

- **Min 3, max 8 in-body links per 1000 words.** More = link-juice dilution and reader noise.
- **Anchor text:** descriptive, varied, keyword-relevant — never "click here." Use natural phrases ("how MPPT works," not "MPPT").
- **No exact-match repetition** — same anchor → same URL more than twice on a page = spam signal.
- **First mention of any glossary term auto-links** to its glossary page (one rule across the site).
- **Reciprocal linking required** between every product page and at least one comparison page + one best-list page.
- **Pillars are hubs, not spokes** — pillars receive links but link out *only* to their direct cluster (avoid pillar-to-pillar link soup).
- **Cannibalization prevention:**
  - Best-lists DO NOT link to individual reviews of the same brand mentioned (canibalizes "best" intent). Instead, link to the *comparison* page.
  - State subsidy pages DO NOT link to other state subsidy pages (only to the central scheme hub and to their own state's city pages).
  - Product pages of adjacent wattages link to each other ONLY via a "Compare neighbors" widget, not in-body — prevents wattage-keyword cannibalization.
- **Footer links** = sitewide site-architecture links (home, top categories, calculators, contact). Don't stuff footer with keyword-rich anchors.
- **Breadcrumbs are internal links** — they count and they help. Use them on every non-homepage URL.
- **Orphan check monthly** — every page must have ≥3 inbound internal links.

## C3. "Solar Inverter" Topic Cluster — 20 Spokes → `/solar-inverter`

| # | Spoke URL | Anchor text to use when linking up to pillar |
|---|---|---|
| 1 | `/products/hybrid/5-kw-qh5` | "browse all solar inverters" |
| 2 | `/products/on-grid/3-kw-q3s` | "Qbits solar inverter range" |
| 3 | `/best-solar-inverter-india` | "all solar inverter models" |
| 4 | `/best-hybrid-solar-inverter-india` | "complete solar inverter lineup" |
| 5 | `/best-on-grid-solar-inverter-india` | "see every solar inverter we make" |
| 6 | `/compare/qbits-vs-growatt-solar-inverter` | "Qbits solar inverter range" |
| 7 | `/compare/qbits-vs-sungrow-solar-inverter` | "explore all solar inverters" |
| 8 | `/reviews/growatt-solar-inverter-review` | "see Qbits solar inverter alternatives" |
| 9 | `/reviews/sungrow-solar-inverter-review` | "Qbits solar inverter range" |
| 10 | `/glossary/mppt` | "solar inverter products" |
| 11 | `/glossary/anti-islanding` | "Qbits solar inverter range" |
| 12 | `/solar-inverter/ahmedabad` | "all solar inverter models" |
| 13 | `/solar-inverter/gujarat` | "browse solar inverter range" |
| 14 | `/subsidy/pm-surya-ghar` | "ALMM-listed solar inverters from Qbits" |
| 15 | `/calculator/system-sizing` | "explore solar inverter sizes" |
| 16 | `/solar-for-home` | "browse home solar inverter range" |
| 17 | `/solar-for-factory` | "see industrial solar inverters" |
| 18 | `/blog/how-to-choose-solar-inverter-for-home-india` | "browse our solar inverter lineup" |
| 19 | `/blog/on-grid-vs-hybrid-explained` | "see all solar inverter types" |
| 20 | `/installer` | "Qbits solar inverter products" |

**Anchor diversity rule:** the 20 anchors above use 8+ unique phrasings. Never repeat the same anchor more than 3 times across the cluster.

---

# PART D — Core Web Vitals & Technical Checklist

## D1. WordPress + Elementor Technical Audit Checklist

### Performance baseline targets
- **LCP** <2.5s (target <2.0s)
- **INP** <200ms
- **CLS** <0.1
- **TTFB** <600ms
- Total page weight <1.5 MB on mobile

### Hosting & infrastructure
- [ ] Move off shared hosting (HostGator/Bluehost) — use **Cloudways / Kinsta / Rocket.net** (PHP 8.2+, MariaDB 10.6+, NVMe)
- [ ] India edge: Mumbai/Bangalore datacenter or CDN PoP
- [ ] HTTP/3 + Brotli compression enabled
- [ ] Object cache: Redis or Memcached enabled

### CDN
- [ ] **Cloudflare (free tier minimum)** in front of WordPress
- [ ] Auto Minify CSS/JS/HTML at edge
- [ ] Polish + WebP conversion enabled
- [ ] APO (Automatic Platform Optimization) for WordPress — ₹1,600/month, worth it

### Caching
- [ ] Page cache: **WP Rocket** (paid) or **LiteSpeed Cache** (free if LS server) or **W3 Total Cache**
- [ ] Browser cache headers: 1 year on static assets
- [ ] DB cleanup monthly (post revisions, transients, spam comments)
- [ ] Disable WP Heartbeat on front-end or throttle to 60s

### Images
- [ ] Convert all to **WebP** (AVIF where supported); fallback JPEG
- [ ] **Lazy load** below-the-fold images (native `loading="lazy"`, NOT JS lazy load that delays LCP)
- [ ] **Explicit width + height** attributes on every `<img>` (CLS killer)
- [ ] Responsive `srcset` for hero + product images
- [ ] Max upload size 200KB for editorial, 400KB for hero
- [ ] **Hero/LCP image: never lazy load** + preload via `<link rel="preload" as="image">`
- [ ] Tools: ShortPixel / Imagify / Squoosh in build pipeline

### Elementor-specific
- [ ] Switch to **Elementor Pro Flex Container** (not legacy sections) — 60% less DOM bloat
- [ ] Disable unused widgets in Elementor settings
- [ ] **Avoid Elementor for global header/footer if possible** — use a coded child theme or Bricks/GeneratePress for sitewide elements; Elementor for individual landing pages only
- [ ] Custom Fonts: self-host (do NOT use Google Fonts CDN — privacy + speed)
- [ ] Improved Asset Loading: ON
- [ ] Optimized DOM Output: ON
- [ ] Inline Font Icons: ON

### Mobile optimization
- [ ] Mobile-first responsive design (>70% Indian solar traffic = mobile)
- [ ] Tap targets ≥44×44 px
- [ ] WhatsApp sticky button never overlaps CTAs
- [ ] No hover-only interactions
- [ ] Test on **real low-end Android** (Moto E / Redmi Go), not just Chrome DevTools

### JavaScript
- [ ] Defer non-critical JS
- [ ] Remove jQuery if theme allows (saves ~85KB)
- [ ] Critical CSS inlined; rest async
- [ ] Audit Elementor plugins quarterly — every unused plugin = 50–150 KB

### Security & freshness
- [ ] HTTPS sitewide, HSTS enabled
- [ ] WordPress + Elementor + plugins auto-updated
- [ ] Daily backup (UpdraftPlus or host-native)
- [ ] WAF (Cloudflare or Wordfence)
- [ ] Disable XML-RPC if not needed

## D2. robots.txt — recommended

```
User-agent: *
Allow: /

# Block WordPress internals
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /xmlrpc.php
Disallow: /?s=
Disallow: /search/
Disallow: /*?replytocom=
Disallow: /*?fbclid=
Disallow: /*?gclid=
Disallow: /*?utm_

# Allow CSS/JS for rendering
Allow: /wp-admin/admin-ajax.php
Allow: /*.css$
Allow: /*.js$

# Sitemaps
Sitemap: https://qbitsenergy.com/sitemap_index.xml
Sitemap: https://qbitsenergy.com/sitemap-products.xml
Sitemap: https://qbitsenergy.com/sitemap-locations.xml
Sitemap: https://qbitsenergy.com/sitemap-blog.xml
Sitemap: https://qbitsenergy.com/sitemap-reviews.xml
Sitemap: https://qbitsenergy.com/sitemap-glossary.xml
```

## D3. XML Sitemap structure (1000-page site)

**Use a sitemap index** with 6 child sitemaps (Google limit: 50k URLs per file, 50MB uncompressed — well under for 1000 pages, but splitting by type aids crawl prioritization):

```
sitemap_index.xml
├── sitemap-products.xml          (60 URLs)
├── sitemap-locations.xml         (178 URLs)
├── sitemap-blog.xml              (180 URLs)
├── sitemap-reviews.xml           (80 URLs)
├── sitemap-best-comparison.xml   (120 URLs: 60 best + 60 compare)
├── sitemap-glossary.xml          (150 URLs)
└── sitemap-pages.xml             (remaining 232 URLs: subsidy, calculators, error codes, installer, use-cases, trust, core)
```

**Sitemap rules:**
- `<lastmod>` reflects real content changes (not auto-touched daily — confuses Google)
- `<changefreq>` and `<priority>` largely ignored by Google; can skip
- Only include indexable, canonical, 200-OK URLs
- Exclude: tag archives (`/tag/`), author archives (`/author/`), date archives, paginated `/page/2`, search results, parameterized URLs
- Use **Rank Math** or **Yoast SEO** to auto-generate; manually exclude irrelevant post types
- Submit each child sitemap individually in Google Search Console (faster crawl signals)

## D4. Top 10 Technical SEO Mistakes Indian Solar Brand Sites Make

1. **Hero images uncompressed (3–8 MB)** — kills LCP on 4G. *Fix:* Compress to <200 KB WebP, preload hero, explicit dimensions.
2. **Elementor's nested sections create 4,000+ DOM nodes per page.** *Fix:* Migrate to Flex Containers; audit page with Lighthouse DOM size warnings.
3. **Google Fonts loaded from Google CDN** — render-blocking + privacy/GDPR concerns. *Fix:* Self-host fonts; preload critical font with `font-display: swap`.
4. **No schema markup anywhere** — leaves Google guessing. *Fix:* Implement Product, FAQ, Review, LocalBusiness, BreadcrumbList per Part B.
5. **Multiple H1s per page** (Elementor template + post title both render H1). *Fix:* One H1 per page — disable theme's auto-H1 or convert Elementor's heading widget.
6. **Duplicate /category/category-name/ URLs alongside canonical product URLs** — creates cannibalization. *Fix:* `noindex` category archive pages or set canonical to primary URL.
7. **/page-2/ and pagination indexed** — splits crawl budget. *Fix:* `noindex,follow` paginated archives via Rank Math.
8. **No 301 redirects when SKU codes change** — every product rename loses backlinks. *Fix:* Permanent 301 redirect map maintained in `.htaccess` or Redirection plugin.
9. **Customer-uploaded testimonial photos rotated/non-EXIF-stripped** — exposes user location/metadata + slows page. *Fix:* Strip EXIF and resize on upload (Imagify auto-handles).
10. **Mobile WhatsApp/CTA button covers content** — kills mobile CLS + UX. *Fix:* Use bottom-bar pattern with explicit safe-area-inset padding; never absolute-positioned floaters on small screens.

### Bonus (commonly missed by Indian solar sites):
- Site search results pages indexable (`?s=...`) — fix: block in robots.txt + noindex
- hreflang missing for `/hi/` Hindi mirror — fix when launching Phase 2 Hindi content
- Soft 404s on out-of-stock SKUs — fix: keep page, mark `availability: OutOfStock`, suggest alternatives
- Missing `X-Robots-Tag` for PDF datasheets — Google indexes the PDFs and they outrank product pages; fix with `X-Robots-Tag: noindex` for PDFs OR link to them with `rel="nofollow"`
- Pingdom/GTmetrix tests run from US servers, not India — fix: test from Bangalore via WebPageTest

---

# IMPLEMENTATION PRIORITY (First 30 Days)

1. **Week 1:** Move hosting to Cloudways Mumbai + Cloudflare; baseline Lighthouse on 20 key pages
2. **Week 2:** Image audit + WebP conversion + lazy-load fix; install Rank Math; configure XML sitemap
3. **Week 3:** Deploy schema markup for top 50 pages (10 products, 20 locations, 10 best-lists, 10 reviews)
4. **Week 4:** Internal linking audit; fix orphans; implement breadcrumb HTML + schema sitewide; set up Search Console + Bing Webmaster Tools

**Re-measure Core Web Vitals on day 30.** Target: 80%+ pages "Good" on mobile.
