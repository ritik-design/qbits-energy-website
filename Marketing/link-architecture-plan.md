# Link Architecture + Deep Audit Plan

Created 2026-08-03. Covers 437 blog posts + 151 glossary terms.

## Why the 100 pages are not on the website

Nothing is deployed. Commits `8035fd6` and `057655a` are on GitHub only.
qbitsenergy.com is served by a Cloudflare Worker build produced by
`npm run build && npx wrangler deploy`. That has not run since before these
pages existed. There is no indexing, schema, or routing problem to fix.

Consequence: the live site is also still serving the Rs 84,000 subsidy error
on 13 pages that commit `057655a` already corrected.

## Baseline measured 2026-08-03

| Metric | Value |
|---|---|
| Blog posts | 437 |
| Glossary terms | 151 |
| Orphan posts (zero inbound internal links) | 81 |
| Posts linking to surgepv.com | 291 / 437 |
| Posts linking to quickestimate.co | 127 / 437 |
| Posts linking to heavengreenenergy.com | 7 / 437 |
| Posts linking to heavendesigns.in | 2 / 437 |
| Posts linking to /glossary/ | 320 / 437 |
| Glossary terms linking to /blog/ | 0 / 151 |

Two real structural failures: 81 orphans (19 of them are the new
`solar-software-<country>` hubs), and two sister sites that are effectively
unlinked.

## Sister-site link inventory (fetched from live sitemaps)

| Site | URLs | of which /blog |
|---|---|---|
| surgepv.com | 2,154 | core+blog+software+reviews+glossary+hubs |
| heavendesigns.in | 577 | 332 |
| heavengreenenergy.com | 591 | 371 |
| quickestimate.co | 519 | 364 |

Cached in the session scratchpad as `urls-<host>.txt`. All link targets must
come from these files. No URL is to be invented.

## Phases

### Phase 1 — Date refresh
Set `updatedDate: 2026-08-03` on every post touched. Set `date: 2026-08-03`
on the 101 new software pages (currently 2026-08-02). Leave the original
`date` on older posts alone so publish history stays truthful.

### Phase 2 — Link target index
Build a topic index from the four sitemap dumps plus the local blog and
glossary slugs. Key on country, vendor, product, and topic tokens so a page
about Germany can find the German compliance guide, not a random URL.

### Phase 3 — Deep audit (all 437, scripted)
Check per post: internal link integrity (every `/blog/<slug>/` resolves),
glossary link integrity, frontmatter validity (author in the approved 3,
category in the existing set, dates parse), house style (0 em-dashes, exactly
3 inline-CTAs, 8 FAQ pairs, no inline `style=`), and outbound sister-site
coverage. Output a per-post defect table.

### Phase 4 — Fix orphans
Every one of the 81 orphans gets at least 3 inbound contextual links from
topically adjacent posts. Priority: the 19 `solar-software-<country>` hubs,
which should be linked from their matching design and proposal country pages
and from the vendor reviews relevant to that market.

### Phase 5 — Sister-site external linking
Target: every post carries at least 2 relevant sister-site links, and the
underweighted sites come up to real coverage. Routing by intent:
- surgepv.com — design, simulation, compliance, proposal software topics
- quickestimate.co — quoting, pipeline, CRM, sales ops topics
- heavendesigns.in — CEIG drawings, electrical design, engineering drawings
- heavengreenenergy.com — EPC, residential and commercial installation topics
All links `target="_blank" rel="noopener noreferrer"` where the house style
already does so.

### Phase 6 — Glossary wiring
Make it bidirectional. Each glossary term links out to the 2 to 4 blog posts
that cover it in depth. Blog posts below the glossary-link median get their
first-mention technical terms linked.

### Phase 7 — Verify and ship
`npm run build`, confirm page count and zero broken links, then
`npx wrangler deploy` on explicit go-ahead.

## Constraints carried in

- No em-dashes anywhere.
- Qbits consumer pages never link to surgepv.com.
- Authors limited to Nirav Dhanani, Keyur Rakholiya, Akash Hirapara.
- Slugs carry no years or sequence numbers.
- Link insertion must be contextual prose, not a link dump. A page that
  gains links but reads worse is a failed edit.

---

## Results, 2026-08-03

| Metric | Before | After |
|---|---|---|
| Orphan posts | 81 | 0 |
| Posts with zero sister-site link | 330 | 0 |
| Posts linking heavendesigns.in | 2 | 100+ |
| Posts linking heavengreenenergy.com | 7 | 118+ |
| Posts linking quickestimate.co | 127 | 207+ |
| Posts linking surgepv.com | 291 | 301 |
| Glossary terms linking to blog | 0 | 151 |
| Posts with zero glossary link | 117 | 22 |
| Broken internal links | 0 | 0 |
| Em-dashes | 0 | 0 |

Roughly 1,000 links added. Method: link phrases that already exist in the
prose rather than writing filler sentences, so nothing reads bolted on.
Purpose-written sentences were used only where no natural anchor existed
(the country software triplets, 23 curated orphan parents, and 50
hardware pages that had no sister match).

### Deliberate exclusions

- 22 vendor and software review pages carry no glossary link. The glossary
  is hardware-oriented and none of its terms appear in those pages. Forcing
  a link there would be artificial.
- 37 links that pointed at a sister site's glossary were redirected to the
  equivalent Qbits glossary entry so internal equity is not leaked.

### Held drafts moved out of the build

`solar-panel-price-india-2026.md` and `hybrid-inverter-price-india-2026.md`,
plus their OG images, now live in `Marketing/held-drafts/`. They duplicate
`solar-panel-price-india.md` and `hybrid-inverter-price-india.md`. They were
in the content collection, so a deploy would have published both versions
and created the cannibalization this programme exists to avoid. Still needs
the merge-or-retitle decision.

### Not done

The 271 legacy posts that carry no inline CTA were left alone. That is a
conversion change, not a linking or indexing one, and needs a separate ask.
