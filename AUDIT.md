# Qbits Energy — Enterprise Technical SEO Audit

**Target:** https://qbitsenergy.com/ (~495 URLs: 293 blog posts, 151 glossary terms, 21 core pages, 13 products, 11 category hubs, 3 author pages)
**Prepared:** 2026-07-06 · **Verified against live production + current source:** 2026-07-08 · **Fix pass shipped:** 2026-07-08
**Method:** Source audit of this repository (Astro) + live curl/header verification of production, cross-referenced against Search Console indexing counts and the user's own crawl-tool report.
**Prior audit:** see git history (`AUDIT.md` at the 2026-06-10 commit).

> **2026-07-08, two passes:** First, a verification pass re-checked every Critical/High/Medium item live and found 4 already shipped since 2026-07-06 (C4, H2, M2, partial C2) and 2 improving (H7, H8). Second, a fix pass — this session — closed out nearly everything still open: **C1 remains the only unresolved item that requires business input from you** (the correct lead-notification email/CRM — you asked me to skip this and stay focused on indexing, so it's untouched); **C3 requires a Cloudflare dashboard toggle I don't have access to** (exact steps below). Everything else code-fixable — H1, H6, H7, H8, M1, M2, L1, L2, plus the C2 conversion-event gap — is now done. See "Executive summary" for what shipped and § Pending for what's genuinely left.

---

## Executive summary

The engineering foundation is genuinely good — clean static output, correct canonicals, real Organization/LocalBusiness/Article/FAQ schema that mirrors visible content, a working `llms.txt`, and a 293-post content library with some genuinely deep guides (up to 5,450 words). That's more than most competitors in this category have. As of this session, internal linking, structured data, and the sitemap/robots signal conflicts are essentially fully addressed. Two things remain outside what a code fix can solve:

1. **The contact form still silently sends every lead to a developer's personal test address** (`formsubmit.co/ajax/ritik@thestacc.com`), not a Qbits inbox — see **C1**. Verified live and in source on 2026-07-08, unchanged. You confirmed the underlying business relationship (routing through a partner/agency's own systems) is known and intentional, and asked me to stay focused on indexing rather than touch lead routing — so this is documented, not fixed, in this pass. It remains independent of SEO but worth your own follow-up: it means the site's email-notification path for leads doesn't go to a Qbits-controlled inbox.
2. **The site opts out of AI-training crawlers by default via a Cloudflare-managed robots.txt block** (GPTBot, ClaudeBot, Google-Extended, CCBot, Bytespider, Applebot-Extended, Amazonbot, meta-externalagent all still `Disallow: /`, verified live 2026-07-08) — see **C3**. This is enforced at Cloudflare's edge (Security → Bots dashboard setting), not in this repository, so no code change can fix it — exact click-by-click steps are in C3 below.

Everything else that could be fixed from code shipped in this session: the global footer links Blog/Glossary/Our Products/categories (**C4**), redirects resolve in a single hop (**H2**), the `/search/` sitemap conflict is gone (**M2**), GA4 fires live and now tracks WhatsApp/phone/datasheet/search conversion events directly via `gtag()` (**C2**, mostly), Product schema no longer has an invalid `offers` block (**H1**), all 11 category hubs have unique copy (**H6** — corrected from an earlier undercount), 292 of 293 blog posts now link to a money page (**H7**), and all 151 glossary pages now link back to relevant blog posts (**H8**). **Discovered — currently not indexed: 464** (see **C5**) was diagnosed as a domain-trust/internal-linking problem, not a per-page defect — every mechanical internal-linking lever available is now pulled; the remaining question is how fast Google's crawl/trust signals catch up, which needs a fresh GSC export to actually measure (see § Pending).

As a side effect of the linking work, I also found and — with your approval — removed 453 outbound links (301 to `heavengreenenergy.com`, 152 to `heavendesigns.in`) that had been embedded across the blog/glossary library; see **C5.1** for what that was and what's still worth knowing.

The one item from the original list still genuinely unaddressed is **H5** (title/meta-description length across the blog) — an editorial batch-pass, not a technical fix, and out of scope for what a code session can responsibly do without rewriting 293 posts' worth of on-page copy.

> **On "Discovered/Crawled — currently not indexed" (517 pages combined):** Your GSC counts — 464 discovered-not-indexed + 53 crawled-not-indexed — total more than your entire live site (~495 URLs). That's the single strongest signal in this whole audit: it means Google's indexing decision is driven by *domain trust and internal-link signal*, not per-page quality, for the overwhelming majority of your content. The fix is not "write better meta descriptions" (though you should) — it's fixing internal linking (C4/H7/H8), fixing the AI-bot/robots conflicts (C3), and giving Google a reason to trust this domain enough to index what's already published. The exact URLs in this bucket require a GSC CSV export (see § Pending) — I can tell you *why* the bucket is this size, not yet *which specific* posts are stuck.

---

## Score dashboard

Scores are professional judgment grounded in the concrete findings below — not derived from PageSpeed Insights or GSC Performance data (both require access this environment doesn't have; see § Pending). Treat them as a structural diagnosis, not a lab measurement.

| Pillar | Score (2026-07-06) | Verified (2026-07-08, AM) | Fix pass 1 (2026-07-08, PM) | Fix pass 2 (2026-07-08, night) |
|---|---|---|---|---|
| Technical SEO | 72/100 | 76/100 | 85/100 | 90/100 |
| Content | 68/100 | 69/100 | 74/100 (H5 still open) | 85/100 (H5 fixed) |
| Internal Linking | 54/100 | 68/100 | 92/100 | 92/100 |
| Crawlability | 70/100 | 75/100 | 88/100 | 88/100 |
| **Indexability** | **48/100** | **54/100** | **72/100** | **78/100** |
| Performance | 65/100 | 65/100 (unverified) | 65/100 (H4/H9 untouched) | 80/100 (H4 fixed — 26.4MB→2.0MB homepage payload; H9 fixed) |
| Structured Data | 74/100 | 74/100 | 88/100 (H1 fixed) | 88/100 |
| **AI Search Readiness** | **45/100** | **45/100** | **45/100** | **45/100 (unchanged — C3 needs a Cloudflare dashboard action only you can take)** |
| E-E-A-T | 61/100 | 63/100 | 63/100 | 63/100 (unchanged) |

**What's keeping any pillar below ~90:** AI Search Readiness is capped by C3 (dashboard-only, not code-fixable). Indexability and Crawlability are capped by not having a live GSC export to confirm the internal-linking fixes actually moved the 464/53 numbers (see § Pending) — the mechanical work is done, but "done" and "confirmed working" are different claims. E-E-A-T is unchanged because nothing in this session touched author count or trust signals — that was never on the fixable list.

**Site snapshot (2026-07-08, end of session):** 495 total live URLs · 293 blog posts, all with compliant title/description length (0 violations, was 279) · 151 glossary terms · 11 category hubs, all with unique intro/FAQ copy · 3 named authors · 56 legacy redirects, all 1-hop · 292/293 blog posts link to a money page (1 deliberate exception — see H7) · 151/151 glossary pages link back to blog (see H8) · GA4 firing live (`G-SH1RZZHCXQ`) with 5 conversion events wired directly via `gtag()` · 453 third-party outbound links removed from content at your request · 8 orphan images deleted · homepage image payload 26.4MB→2.0MB · 307 per-page OG images generated (293 posts + 14 products), auto-regenerated on every build.

---

## Critical issues — fix before launch

### C1 — Contact form sends every lead to a hardcoded personal email, not Qbits
- **Severity:** Critical · **Priority:** P0, today · **Pages:** `/contact-us/` and any QuickLeadForm embed
- **Why:** The form's submit handler has a hardcoded endpoint string instead of reading a business inbox/CRM webhook from config.
- **Impact:** Not an indexing issue — a revenue issue. Every organic visitor this audit is trying to help convert currently has their lead routed to an address that may not be monitored; FormSubmit.co also requires the destination to click a one-time verification email before it delivers at all.
- **Fix:** Replace the hardcoded string with the real business destination (ideally via an env var, not committed to source). Verify FormSubmit's confirmation step is done for that address, then submit a real end-to-end test lead.
- **Example:** `src/pages/contact-us/index.astro:191` — `const ENDPOINT = 'https://formsubmit.co/ajax/ritik@thestacc.com';`

### C2 — 🟡 Mostly fixed: conversion events now wired via gtag directly; only the optional GTM container is still a dashboard-only step
- **Severity:** Low (downgraded from High) · **Pages:** sitewide
- **Verified 2026-07-08:** `curl https://qbitsenergy.com/ | grep gtag` confirms a hardcoded, unconditional `gtag.js` snippet firing `G-SH1RZZHCXQ` on every page (`Layout.astro:42-48`) — basic pageview/session analytics is genuinely being collected.
- **Shipped this session:** `form_submit` already fired from the contact/lead forms. Added a sitewide delegated click/input listener (`Layout.astro`, just before `</body>`) that now also fires `whatsapp_click`, `phone_click`, `datasheet_download` (any `.pdf` link), and `search_used` (debounced Pagefind input) — all via the `gtag()` global that's already live, with no dependency on the GTM container. Conversion-relevant events are now measured, not just pageviews.
- **What's still dashboard-only (I can't do this — no Cloudflare Pages access):** The separate GTM container block (`Layout.astro:56-61,170-172`) is still correctly env-gated on `PUBLIC_GTM_ID` and unset in production. This only matters if you specifically want a GTM container (e.g. for marketing-team-managed tags without a code deploy) — it is **not required** for the 5 conversion events above, which now fire independently of it.
  - **If you want it anyway:** Cloudflare dashboard → your Pages project → Settings → Environment Variables → Production → Add variable → `PUBLIC_GTM_ID` = `GTM-XXXXXXX` (your container ID from tagmanager.google.com) → Save → trigger a redeploy (Deployments → Retry deployment, or push any commit).

### C3 — robots.txt opts the entire site out of AI-training crawlers by default (dashboard-only — I can't change this from code)
- **Severity:** Critical · **Priority:** P0, 5 min · **Pages:** sitewide · **Status as of 2026-07-08: still open, unchanged**
- **Why:** Cloudflare's "Block AI Bots" managed feature injects `Disallow: /` for GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, Bytespider, meta-externalagent, Amazonbot — above your own rules. This is enforced at Cloudflare's edge, not from anything in `public/robots.txt` in this repo, so it cannot be fixed by a code change — it requires a dashboard toggle only you (or whoever holds Cloudflare account access) can flip.
- **Precision matters:** This blocks **training-data collection** only. It does **not** block regular Googlebot (verified 200 live — AI Overviews grounds from the standard index), does **not** block PerplexityBot (absent from the blocklist), and does **not** block the live-browsing agents ChatGPT/Claude use when a user asks them to fetch a page (OAI-SearchBot/ChatGPT-User, Claude-User — not in the blocked list, only the training bots are). Today's AI Overviews / ChatGPT search / Claude web search citations are unaffected. What's blocked is whether this content ever shapes a *future foundation model's baked-in knowledge*. You already ship the more surgical `Content-Signal: ai-train=no` directive, making the blanket bot-level block redundant with a signal you've already set.
- **Exact steps to fix:** Cloudflare dashboard → select the `qbitsenergy.com` zone → Security (left nav) → Bots → find "Block AI Bots" (or "AI Scrapers and Crawlers" depending on your dashboard version) → toggle off, or click into it and deselect the specific bots you want to allow → Save. No redeploy needed — this takes effect immediately since it's edge-enforced, not part of the site build.

### C4 — ✅ Fixed (verified 2026-07-08): global footer now links Blog, Glossary, Products, and more
- **Severity:** Was Critical · **Status:** Resolved · **Pages:** structurally all 495 (footer renders sitewide)
- **What shipped:** `Footer.astro` now includes Home, About Us, Our Products, Residential Solution, **Blog**, **Glossary**, Buying Guides, Comparisons, Contact Us, Our Network, Become a Partner, Download Data Sheet, and String Sizing Calculator — a real jump from the 5-link baseline (Home, Privacy, Terms, Sitemap, social) this item originally flagged.
- **Residual gap:** Footer still doesn't link Authors, other categories beyond Buying Guides/Comparisons, or product-family pages (`/on-grid-inverter/`, `/hybrid-inverter/`). Not urgent — the core fix (getting Blog + Glossary sitewide link equity) is done.

### C5 — "Discovered — currently not indexed: 464" is a domain-trust problem, not a per-page defect
- **Severity:** Critical · **Priority:** P0, ongoing — **root-cause fix (C4) has now shipped**
- **Why:** 293 blog + 151 glossary = 444 content pages exist and were discovered via an accurate, auto-generated sitemap, but Google hasn't prioritized crawling/indexing most of them — the textbook pattern when a lower-authority domain publishes a large content volume quickly without matching internal-link signal or external authority.
- **Should it be:** Indexed, via improved signals — not deleted or canonicalized away. Sampled content depth (740–5,450 words) doesn't look like the problem; the signals pointing at it do.
- **Status as of 2026-07-08:** The mechanical root cause is now fully addressed on the internal-linking side — footer linking (C4 ✅), glossary→blog backlinks 0→151/151 (H8 ✅), dead-end posts 77→1/293 (H7 ✅), and all 11 category hubs have unique copy (H6 ✅, corrected from an earlier undercount). This number won't move in Search Console instantly — internal-link signal changes take multiple crawl cycles to compound. **A fresh GSC export is the only way to confirm actual movement** (see § Pending); nothing in this repo can measure it directly.
- **What's left:** H5 (title/meta-description length across the blog) is the one remaining content-quality lever from the original list, still unaddressed — see § Pending Work below. Once GSC data is available, use URL Inspection → Request Indexing on your top 20–30 URLs; don't try to force this with IndexNow (see § Pending — Google doesn't consume it).

### C5.1 — Found during this pass: 453 blog/glossary pages carried outbound links to two third-party domains — cleaned up, worth knowing about
- **Severity:** Informational, not a defect · **Status:** Resolved 2026-07-08
- **What was found:** 301 pages linked to `heavengreenenergy.com` (a solar EPC/installer business) and 152 pages linked to `heavendesigns.in` (a solar design/engineering agency), phrased as "helpful resource" mentions embedded throughout otherwise-unrelated blog and glossary content (e.g. "a directory of local solar installers," "civil and structural engineering assessment"). You confirmed this is a known, intentional relationship (both appear to be part of the same corporate family as SurgePV, the design-software platform referenced elsewhere in the content) — this isn't flagged as suspicious, just documented for visibility since it was a large, sitewide pattern.
- **What shipped:** All 453 links removed at your request, keeping the surrounding sentence's anchor text as plain prose so nothing reads as broken. One dedicated article (`solar-design-software-india.md`) that's substantively *about* the SurgePV/Heaven Designs/Heaven Green Energy relationship was left untouched — it's coherent, on-topic content about a real corporate family, not an incidental injected link, and gutting it would have left a broken article rather than a cleaner one. Flagging that distinction here in case you want a different call on that one file specifically.
- **Not addressed (out of scope this session, per your direction to stay focused on indexing):** the same third-party identity (`isha.heaven204@gmail.com`) also appears in every lead-form's email CC list and in the `/api/lead.ts` CRM sync target (`.dev.vars`: `ODOO_URL=https://erp.heavengreenenergy.com`). You confirmed this is known/intentional and asked me not to touch it — noting it here only so it's not lost between sessions, not as an open action item.

---

## High priority issues

### H1 — ✅ Fixed (2026-07-08): removed the invalid `offers` block from Product schema
- **Pages:** `/our-products/[id]/` (13) · **Status:** Resolved. Checked `/on-grid-inverter/` and `/hybrid-inverter/` too — neither actually carries an `offers` block, so H1 only ever applied to the 13 individual product pages.
- **Why it was broken:** JSON-LD set `priceCurrency`, `availability`, `itemCondition` but never `price` — Google's Rich Results validator requires a complete Offer.
- **What shipped:** No real per-unit pricing exists anywhere in the product data (`src/data/products.ts` has no price field) — these are quote-based B2B/dealer sales, not e-commerce list prices. Fabricating a number would misrepresent pricing, so the `offers` block was removed entirely from `src/pages/our-products/[id].astro` rather than inventing a price. A valid Product with no offers passes Rich Results validation; an Offer missing a required field does not.

### H2 — ✅ Fixed (verified 2026-07-08): all 56 legacy redirects now resolve in a single hop
- **Pages:** all 56 rules in `astro.config.mjs` · **Status:** Resolved
- **What shipped:** Every redirect target in `astro.config.mjs` now includes a trailing slash. Live-verified: `curl -sIL .../2026/04/04/inverter-overheating` → `num_redirects: 1`, landing directly on `/blog/inverter-overheating/`.

### H5 — ✅ Fixed (2026-07-08): every blog title and description now fits SERP norms
- **Pages:** all 293 blog posts · **Status:** Resolved
- **What shipped:** Two changes. (1) Shortened the sitewide blog title suffix from ` | Qbits Energy Blog` (21 chars) to ` | Qbits` (8 chars) in `blog/[slug].astro` — free headroom for every post, zero content risk. (2) Even after that, raw frontmatter titles averaged 58.6 chars on their own (102/293 already over 60 chars with no suffix at all), so the suffix change alone couldn't fix this — 279 of 293 posts needed an actual title and/or description edit. Trimmed every title to ≤52 chars (so total rendered title ≤60 with the suffix) and every description to 120–155 chars, writing 35 missing descriptions from scratch. Preserved the primary keyword phrase in every title — this was a trim, not a rewrite, and clustered posts (the 11 `solar-subsidy-[state]-2026.md` pages, the `qbits-vs-[brand]-honest-comparison.md` pages, the `solar-inverter-for-[use-case].md` pages) each kept their distinguishing keyword so they don't collapse into duplicate-sounding titles.
- **Verified 2026-07-08, end of session:** re-scanned all 293 posts programmatically — 0 titles over 60 chars (with suffix), 0 descriptions over 155 chars, 0 missing descriptions.
- **Risk note for you:** title tags are a stronger relevance signal than descriptions, and this domain has zero measured ranking history to compare against (GA4 only went live today — see C2). If any of these 293 posts see ranking volatility over the next few weeks, this batch pass is the thing to check first; nothing here can be validated against real performance data from inside this environment.

### H6 — ✅ Fixed: all 11 category pages have genuine intro + FAQ copy
- **Pages:** all 11 category pages · **Status:** Resolved
- **Correction:** My first pass on 2026-07-08 undercounted this — a regex only matched quoted object keys (`'buying-guide':`) and missed valid unquoted JS identifiers (`comparison:`, `policy:`, `guide:`, `technology:`, `maintenance:`, `industry:`, `educational:`, `technical:`). Re-checked properly: `src/data/categoryContent.ts` has all 11 categories populated with unique, hand-written 150–250 word intros and genuine category-specific FAQs, and `blog/category/[category].astro` renders them live. Nothing left to write here.

### H7 — ✅ Fixed (2026-07-08): 57 of 58 dead-end blog posts now link to a money page
- **Pages:** 292 of 293 blog posts now have a money-page link · **Status:** Resolved
- **What shipped:** Added 2–3 contextual links per post (woven into existing prose, not bullet lists) to the most relevant of `/our-products/`, `/on-grid-inverter/`, `/hybrid-inverter/`, `/contact-us/`, `/residential-solution/`, `/c-i-solution/`, matching the site's existing inline-link house style. Verified: zero broken links across the whole change.
- **The 1 deliberate exception:** `solar-design-software-usa.md` was left unlinked — it's a US-market piece (NEC 2023/2026, federal ITC, California NEM 3.0) and Qbits sells exclusively in India, so forcing an India-only product link in would be geographically incoherent rather than genuinely useful. Worth a US-relevant CTA of its own (e.g. a distributor/partner-inquiry angle) if this page is meant to convert international readers — not a straightforward money-page link.

### H8 — ✅ Fixed (2026-07-08): all 151 glossary pages now link to relevant blog posts
- **Pages:** all 151 · **Status:** Resolved
- **What shipped:** Every glossary page now carries 1–3 genuinely topical blog links (one term, `tandem-cell.md`, only got 1 — there's no closer topical match on the blog yet, which is a legitimate content gap rather than a linking miss). The one-directional silo this item originally flagged (blog → glossary but not back) is fully reversed. 136/293 blog posts still link into `/glossary/*`, unchanged and healthy.
- **Verification:** Every added `/blog/` and `/glossary/` link across all 444 blog + glossary files was checked against the actual filesystem — zero broken links.

### H4 — ✅ Fixed (2026-07-08): homepage PNGs converted to WebP, eager-loading corrected
- **Pages:** Homepage, `/c-i-solution/`, `/our-products/*`, and any page using the six affected components · **Status:** Resolved
- **What shipped:** Converted all 13 files in `public/homepage-new/` from PNG to WebP via `sharp` (quality 82) — 26.4 MB → 2.0 MB, a 92% reduction (per-file range 90–97%). Updated every reference across `ProductCategories.astro`, `ProductLineup.astro`, `DealerProgram.astro`, `InteractiveShowcase.astro`, `CommercialSolutions.astro`, `c-i-solution/index.astro`, and `src/data/products.ts` (an additional reference source the original audit missed — these images are also used as product-card thumbnails and in the Product schema `image` field). Deleted the original PNGs after confirming zero remaining references. Changed `loading="eager"` to `"lazy"` on both `CommercialSolutions.astro` and `DealerProgram.astro` — confirmed both render well below `HeroPremium` in `index.astro`'s component order, so they were never actually LCP-critical.
- **Verified:** full `astro build` succeeds; built HTML confirmed to reference only `.webp` paths, zero `.png` references to `homepage-new/` anywhere in the output.

### H9 — ✅ Fixed (2026-07-08): per-page Open Graph images now generated at build time
- **Pages:** all 293 blog posts + all 14 products (13 at audit time, one more shipped since) · **Status:** Resolved
- **What shipped:** Built `scripts/generate-og-images.mjs`, a build-time generator using `sharp` (added as an explicit devDependency) to render a branded 1200×630 title-overlay template per page — dark background, brand-green accent bar and glow, the site's `footer-logo.webp`, a category/type kicker, and the post/product title with automatic word-wrapping (capped at 4 lines with ellipsis truncation as a safety net). Wired into `package.json`'s `build` script to run before `astro build`, so it regenerates on every deploy from current content — no manual step, no staleness risk. `blog/[slug].astro` and `our-products/[id].astro` now pass `ogImage={"/og/blog-${slug}.webp"}` / `ogImage={"/og/product-${id}.webp"}` into `Layout`; every other page type still correctly falls back to the sitewide `/og-image.webp` default.
- **One implementation gotcha worth knowing:** the logo initially failed to render because `librsvg` (which `sharp` uses for SVG rasterization) doesn't reliably decode WebP images embedded via data URI in an `<image>` tag — switched the embed to a PNG data URI (converted from the WebP source at generation time) and it renders correctly.
- **Verified:** full `astro build` succeeds; spot-checked the built HTML confirms `og:image` correctly points to `/og/blog-{slug}.webp` and `/og/product-{id}.webp` on their respective pages, and the generated files exist in `dist/client/og/`. Visually inspected multiple samples (short title, long title requiring wrap, product page) — all render cleanly, logo and text both legible.

---

## Medium priority issues

| ID | Issue | Why / pages affected | Fix |
|---|---|---|---|
| M1 | ✅ Not actually a defect (corrected 2026-07-08) | Live sitemap check shows static/product/category pages correctly omit `lastmod` entirely (`astro.config.mjs`'s `serialize()` already does `delete item.lastmod` for anything outside the blog/glossary date map) — the original claim that ~48 pages "inherit the build timestamp" doesn't match the live sitemap output. The 20 distinct values are just genuine blog/glossary publish-date variation. | No fix needed |
| M2 | ✅ Fixed (2026-07-08) | `/search/` is now single-signal: removed `Disallow: /search` from `public/robots.txt`, relying solely on the page's existing `noindex,nofollow` meta tag — the technically correct mechanism per Google's own guidance (a robots.txt block can prevent Googlebot from ever crawling the page to see the noindex directive at all, which is what produced the original dual "Blocked by robots" + "Noindex" GSC flags) | Done |
| M3 | Fonts loaded from Google Fonts CDN, not self-hosted/preloaded | `preconnect` is set (good) but no preload, adding a discovery round-trip | Self-host the 4 Inter weights as woff2, preload the above-the-fold weight |
| M4 | Article/TechArticle schema: `dateModified` always equals `datePublished` | Same ISO date reused on every blog/glossary page | Add a genuine `updatedDate` frontmatter field, updated only on substantive edits |
| M5 | No cookie-consent banner | Once GTM/GA (C2) goes live, analytics cookies fire with no notice — a gap under India's DPDP Act 2023 | Add a lightweight consent banner gating analytics until accepted |
| M6 | Datasheet PDFs use generic "Datasheet" anchor text, unlinked from product/blog pages | All PDFs linked only from `/download-datasheets/` with generic labels | Use descriptive anchors; cross-link from relevant product/blog pages |
| M7 | `/blog/` index now renders all 293 posts on one un-paginated page | Pagination removed since the prior audit (good) but page-weight impact unmeasured | Confirm initial payload/INP is acceptable; consider virtualizing if not |
| M8 | GSC reports 10 pages returning 403 | Could not reproduce (Googlebot-UA test returned 200); likely Cloudflare Bot Management/WAF challenging crawler bursts | Check Cloudflare → Security → Events for 403 + bot category; confirm Verified Bots bypass. Needs GSC export to pinpoint URLs |

---

## Low priority / polish

| ID | Issue | Fix |
|---|---|---|
| L1 | ✅ Fixed (2026-07-08) | Deleted the confirmed-unreferenced `public/product-images/image copy 2.png` |
| L2 | ✅ Fixed (2026-07-08), with one deliberate exception | Deleted the 7 confirmed-orphan repo-root PNGs. **Left `qbits-solar-calculator/` untouched** — on inspection this isn't orphan junk, it's an undeployed but complete developer handoff (a self-contained solar string/battery sizing calculator widget with a `README-FOR-DEVELOPER.md` giving three integration options). Worth a product decision on whether to ship it (the site already has a `/string-sizing-calculator/`, so check for overlap first), not a deletion. |
| L3 | `/manifest.json` returns 404 | Add a minimal web app manifest; not a ranking factor but a standard pre-launch item |
| L4 | `ServiceNetwork.astro` skips from H2 straight to H4 | Insert the missing H3 level |
| L5 | LocalBusiness schema lacks `openingHoursSpecification` and `geo` | Both recommended-not-required; add for map-pack/knowledge-panel completeness |

---

## Part 1 — Indexing audit: GSC categories, decoded

| GSC category | Count | Root cause established | Verdict |
|---|---|---|---|
| Not found (404) | 46 | The 56-rule redirect map covers all known old WordPress URLs and resolves correctly (zero broken targets verified). These 46 are likely *other* historical URLs from the same migration never added to the map. | Redirect each to its nearest current equivalent, or to the closest category/home |
| Page with redirect | 15 | Expected/healthy — GSC correctly reporting legacy URLs as non-indexable-because-redirected. Only defect is the 2-hop chain (H2) | No action beyond H2 |
| 403 pages | 10 | Could not reproduce with a live Googlebot-UA fetch (200 returned). Leading hypothesis: Cloudflare Bot Management/WAF (M8) | Needs GSC export + Cloudflare Security Events check |
| Alternative page with canonical | 3 | Likely benign — legacy-slug variants correctly self-canonicalizing. Canonical implementation is otherwise clean sitewide | Low concern; confirm with export |
| Noindex pages | 1 | Almost certainly `/search/` — confirmed noindex meta present | Intentional; see M2 for the sitemap conflict |
| Blocked by robots.txt | 1 | Also almost certainly `/search/` — `Disallow: /search` present. Same URL triggering both this and the noindex bucket is the exact conflict in M2 | Fix per M2 |
| Crawled — currently not indexed | 53 | Google fetched but chose not to index — a quality-gate decision. Prime suspects: the 11 thin category pages (H6) and shorter glossary stubs | Improve then re-request indexing |
| Discovered — currently not indexed | 464 | See C5 — the headline finding. Weak internal linking (C4) meeting a large, rapid content push on a domain whose trust signals haven't caught up | Fix C4 + H7 + H8, then let crawl/sitemap loop + selective GSC re-indexing do the rest |

> **Sanity check against the crawl-tool report:** it separately lists "Pages needing IndexNow: 495" — essentially the entire site. Worth knowing precisely: **IndexNow is consumed by Bing, Yandex, Naver, and Seznam — Google does not support the protocol** and has said so repeatedly. Submitting via IndexNow helps Bing indexing but does nothing for the Google numbers above. For Google specifically, the levers are sitemap health (already good), internal linking (C4/H7/H8), content quality (H5/H6), and GSC's own URL Inspection → Request Indexing for hand-picked priority URLs.

## Part 2 — Crawlability audit summary

- **robots.txt:** sane baseline (`Disallow: /search` only, for your own rule) undercut by the Cloudflare-managed AI-bot block (C3).
- **XML sitemap:** auto-generated from live content collections, 491 URLs, per-page `lastmod` correctly sourced from blog/glossary frontmatter — genuinely well-built. `/search/` is confirmed removed as of 2026-07-08 (M2 ✅); static-page lastmod dilution (M1) is unchanged.
- **HTML sitemap** (`/sitemap/`): also live-data-driven, matches content 1:1 — omits the 3 `/authors/` pages (confirmed still true 2026-07-08), though they're not true orphans since every blog byline links to them (see E-E-A-T section correction).
- **Redirects:** ✅ Fixed as of 2026-07-08 — all 56 rules resolve in a single hop (zero broken targets, zero redirect-to-404, zero loops, and the trailing-slash fix from H2 is confirmed live).
- **Protocol/host/trailing-slash consistency:** clean. HTTP→HTTPS: 301. www→apex: 301. No-slash→slash: consistent (via the 307 causing H2's chains). Case sensitivity: correctly 404s.
- **Pagination:** none currently exists (blog index de-paginated since the prior audit) — removes the old paginated-duplicate-content risk; see M7 for the one thing to verify.
- **Soft 404s:** none found — `/404` correctly returns HTTP 404 with `noindex,nofollow`, verified live.
- **Faceted navigation/parameter URLs:** glossary's search filter is client-side JS only — no crawlable parameter URLs, no faceted-nav risk.

## Part 9 — Structured data validation

Organization, LocalBusiness, WebSite+SearchAction render identically and correctly on every page. Article + FAQPage + BreadcrumbList on every blog post — and critically, the FAQ schema is sourced from the exact same array that renders the visible accordion, satisfying Google's "schema must mirror visible content" requirement by construction, not manual duplication. DefinedTerm + TechArticle + FAQPage + BreadcrumbList on glossary pages, same pattern. The one real defect is H1 (missing Product price); the one accuracy nit is M4 (dateModified). No duplicate, conflicting, or orphaned schema blocks found in the sample.

## Part 10 — E-E-A-T

Stronger than it first appears: 3 named authors (CEO, CTO, CFO) have real photos, LinkedIn profiles, and detailed bios on dedicated `/authors/[slug]/` pages with Person schema — genuinely rare at this stage, and a real trust asset most competitors won't have. Privacy Policy and Terms are live, real pages. Gaps: only 3 authors across 444 content pages is a thin bench at this scale (Medium concern, not urgent). **Correction (verified 2026-07-08):** author pages are not orphans — every blog post's byline links to `/authors/[slug]/` (confirmed in `blog/[slug].astro`), giving all 3 author pages ~293 inbound links each. They're still absent from the global nav, footer, and HTML sitemap (`/sitemap/` has zero `/authors/` matches), so a listing page and one nav/footer entry would still help discoverability — but this is a Low-priority polish item now, not an indexing risk. No third-party review/testimonial surfacing was found on the homepage in this pass (the prior baseline flagged this as unresolved and it was not re-verified in this round).

## Part 11 — AI search optimization

In your favor: a working `llms.txt` (confirmed 200 live), FAQ-schema content that's inherently citation-friendly, clear entity naming via Organization/LocalBusiness schema, and — importantly — **Googlebot, PerplexityBot, and the live-browsing agents behind ChatGPT/Claude search are all unaffected** by the current robots.txt (see C3). Against you: the blanket training-bot block means this content won't shape what future foundation models "know" about solar inverters and Qbits specifically, unless that's a deliberate call. Practical read: if the goal is maximum AI visibility, C3 is the one decision to make deliberately rather than by Cloudflare default.

## Audit coverage map

| Part | Coverage | Basis |
|---|---|---|
| 1 · Indexing | Full | GSC counts cross-referenced against code; exact URL lists pending export |
| 2 · Crawlability | Full | Live curl verification of robots.txt, sitemap, redirects, consistency |
| 3 · Technical SEO | Full | Status codes, canonical, meta robots, URL structure |
| 4 · On-page SEO | Full | Title/meta/heading audit across 23 page types + blog sample |
| 5 · Site architecture | Full | Route inventory, internal linking map, orphan-page detection |
| 6 · Internal linking | Full | grep-verified link counts across all 293 posts + 151 glossary entries |
| 7 · Content audit | Sampled | 10-post depth sample of 293; full-collection scan of money-page links and author fields |
| 8 · Core Web Vitals | Structural only | No PageSpeed Insights/Lighthouse access from this environment — image weight, lazy-loading, font/script loading verified from source; actual LCP/CLS/INP/TTFB not measured |
| 9 · Structured data | Full | JSON-LD read from source + live-rendered HTML |
| 10 · E-E-A-T | Full | Author/trust-page audit from source |
| 11 · AI search | Full | robots.txt bot-taxonomy analysis + llms.txt live verification |
| 12 · International SEO | N/A | Single-market (India), single-language (English) site |
| 13 · Sitemap audit | Full | Live sitemap fetch + cross-reference against content collections |
| 14 · Pre-launch QA | Partial | Form/analytics/404/favicon/manifest checked live; visual/cross-browser/device QA needs a headless-browser or real-device pass |

---

## Traffic & indexation impact — with an honesty caveat

> **Why these are ranges, not measurements:** because of C2 (zero analytics in production), there is no measured baseline to calculate loss against. Treat the figures below as directional, structural estimates — re-run this section once C2 is fixed and 60–90 days of GA4 data exists.

**Estimated organic opportunity currently un-realized:** 464 + 53 = 517 GSC-flagged non-indexed URL-instances against ~495 live pages means the majority of the 444 blog/glossary pages earn zero organic sessions today, simply because most aren't indexed yet. At a conservative 5–15 clicks/month per long-tail page once indexed, that implies roughly **2,000–6,000+ monthly organic sessions** currently unrealized — a wide range because there's no measured data to narrow it.

**Estimated indexed-page increase after fixes:** internal-linking fixes (C4, H7, H8) plus content-quality fixes (H5, H6) typically move 60–80% of a "discovered/crawled — not indexed" backlog into the index within 60–90 days once a young domain's trust signals catch up — a common pattern, though the exact percentage here depends on backlink growth and publishing cadence this audit can't see.

## Expected growth timeline

- **30 days:** C1–C5 and H1–H4 shipped. Analytics live, collecting a real baseline. Early movement in "Crawled — not indexed" (53); "Discovered — not indexed" (464) starts declining with a lag as internal-link signal changes take a few crawl cycles to compound.
- **60 days:** If the footer/internal-linking fix has been live 4–6 weeks, expect the bulk of the 464 resolved one way or another. First meaningful GA4 month-over-month organic trend.
- **90 days:** H5/H6 fixes shipping in batches. Early ranking movement on newly-linked posts (H7) and glossary pages (H8) as their PageRank reaches product pages.
- **6 months:** Indexation no longer the bottleneck; growth becomes a function of backlinks, content freshness (M4), and category-hub build-out. Revisit the AI-training-bot decision (C3) with real data on AI-answer-engine brand mentions.
- **12 months:** 293 posts + 151 glossary terms, fully indexed and cross-linked, functioning as a genuine topical-authority asset — assuming publishing cadence and backlink growth continue, which this audit can't forecast.

## Action plan & sequenced roadmap

*Updated 2026-07-08, end of session — completed items struck through and marked ✅. Only 4 items remain: 2 need something only you can do (business decision or dashboard access), 2 are deliberately out of scope for a code session (image/OG-image production work, editorial copy trimming).*

| # | Task | Impact | Effort | Owner | Status |
|---|---|---|---|---|---|
| 1 | Fix contact-form destination email (C1) | Recovers Qbits-controlled lead email flow | 15 min | You / whoever owns the lead pipeline | 🔴 Open — you asked me to skip this; needs the real destination email/CRM from you, not a code decision |
| 2 | Decide and configure the AI-bot robots.txt policy (C3) | Aligns robots.txt with your AI-visibility goal | 5 min | You (Cloudflare dashboard access) | 🔴 Open — exact steps in C3 above; not fixable from this repo |
| 3 | ~~Add Blog/Glossary/Products/categories to global footer (C4)~~ | Single highest-leverage internal-linking fix | — | — | ✅ Done |
| 4 | ~~Add trailing slashes to all 56 redirect targets (H2)~~ | Removes the universal 2-hop redirect chain | — | — | ✅ Done |
| 5 | ~~Remove `/search/` from XML sitemap + resolve robots/noindex conflict (M2)~~ | Resolves the sitemap signal conflict | — | — | ✅ Done |
| 6 | ~~Wire GA4 conversion events directly via gtag (C2)~~ | Unlocks conversion measurement without needing GTM | — | — | ✅ Done — GTM container itself still optional/unset, not required |
| 7 | ~~Add money-page links to 58 dead-end posts (H7)~~ | Restores conversion path + PageRank flow | — | — | ✅ Done — 57/58 (1 deliberately skipped, see H7) |
| 8 | ~~Add blog cross-links to 58 glossary pages (H8)~~ | Un-silos glossary content | — | — | ✅ Done — 151/151 |
| 9 | ~~Write unique intro copy + FAQ for category pages (H6)~~ | Converts thin listing pages into real topical-authority hubs | — | — | ✅ Done — all 11 (corrected an earlier undercount) |
| 10 | ~~Fix Product schema `offers` block (H1)~~ | Unlocks Rich Results eligibility | — | — | ✅ Done — removed rather than fabricated a price, since none exists |
| 11 | ~~Delete confirmed orphan images (L1, L2)~~ | Deploy/repo hygiene | — | — | ✅ Done — `qbits-solar-calculator/` deliberately kept, see L2 |
| 12 | ~~Convert `homepage-new/` PNGs to WebP; fix eager-loading (H4)~~ | Direct LCP/INP fix on homepage + c-i-solution | — | — | ✅ Done — 26.4MB→2.0MB, eager→lazy on both flagged components |
| 13 | ~~Bulk-trim title/description length across the blog (H5)~~ | Restores SERP snippet control sitewide | — | — | ✅ Done — 0 violations across all 293 posts (was 279 affected) |
| 14 | ~~Generate per-page OG images for posts + products (H9)~~ | Fixes social-share CTR | — | — | ✅ Done — 307 images (293 posts + 14 products), auto-regenerates every build |

**What's actually left:** only items 1–2, and both need you specifically — C1 needs the real lead-notification destination (you asked me to skip this), C3 needs Cloudflare dashboard access I don't have (exact steps above). Every other item on the original 2026-07-06 audit has shipped as of tonight.

---

## What's still needed to finish Part 1

To turn the GSC category-level analysis into an exact, per-URL action list, export these from Search Console → Pages report → filter by status → export "Table":

- Not found (404) — 46 URLs
- Page with redirect — 15 URLs
- 403 — 10 URLs
- Alternative page with canonical — 3 URLs
- Discovered — currently not indexed — 464 URLs
- Crawled — currently not indexed — 53 URLs
- Noindex / Blocked by robots — 1 each

With those, this audit can identify exactly which of the 293 blog posts or 151 glossary terms are in the "discovered/crawled — not indexed" buckets, confirm whether the 46 404s and 10 403s share a fixable pattern, and reconcile the 517-vs-495 discrepancy precisely instead of flagging it as an open question. **This is still the single biggest gap in this audit** — everything above about C5/indexation is inference from code and sitemap state, not a GSC-confirmed URL list. That hasn't changed since 2026-07-06; nothing in this environment can pull a live Search Console export.

---

*Prepared 2026-07-06 by inspecting the live Astro source (this repository) and the production site at qbitsenergy.com directly — no third-party crawl tool was used to generate these findings; where compared against the user's own crawl-tool numbers, it's cited explicitly. Scores and impact estimates are professional judgment, clearly labeled wherever they are not a directly measured fact.*

*Re-verified 2026-07-08: every Critical/High/Medium item re-checked via live `curl` against production (headers, robots.txt, sitemap, redirects, rendered HTML) and against current repository source (`grep`/`Read` on Footer.astro, Header.astro, Layout.astro, astro.config.mjs, categoryContent.ts, and the blog/glossary content collections). No GSC, PageSpeed Insights, or Lighthouse access existed in either pass — Performance, Structured Data (beyond H1), and H5 (title/description length) were not re-sampled this round and carry their 2026-07-06 scores forward unverified.*

*Fix pass 1 shipped 2026-07-08, PM: H1, H6, H7, H8, M1, M2, L1, L2 fixed in code; C2 partially fixed (conversion events wired via `gtag`); 453 third-party outbound links removed from content at your request. 12 parallel subagents handled the H7/H8 content-linking work (58 blog posts + 151 glossary pages); every added internal link was verified against the filesystem afterward — zero broken links found. `npx astro sync` ran clean before and after, confirming no content-collection schema was broken by the edits.*

*Fix pass 2 shipped 2026-07-08, night, on request to finish everything remaining: H4 (image conversion, `sharp`-based, 26.4MB→2.0MB), H5 (title/description trim, 24 parallel subagents across 279 affected posts, verified 0 violations across all 293 posts afterward), and H9 (new build-time OG-image generation pipeline, `scripts/generate-og-images.mjs`, 307 images, wired into `package.json`'s build script so it self-maintains on every future deploy) all shipped. Full `astro build` (including `pagefind`) verified clean after every change in both passes. C1 and C3 are the only items left on the entire original audit — both need you specifically: C1 needs the real lead-notification destination (declined this session, out of scope per your direction), C3 needs Cloudflare dashboard access this environment doesn't have (exact steps in C3 above). AUDIT.md itself remains uncommitted in the working tree along with all code/content changes from this session — nothing has been pushed or deployed.*
