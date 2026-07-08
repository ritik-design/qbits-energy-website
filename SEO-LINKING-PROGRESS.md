# Portfolio SEO Linking Project — Progress Tracker

Cross-domain + internal contextual linking project across qbitsenergy.com
(blog, glossary, service pages), per the enterprise SEO linking brief. Cross-domain
targets are the sibling solar-portfolio sites: SurgePV, QuickEstimate, Heaven Green
Energy, Heaven Designs (all read-only reference — only this repo is edited).

Last updated: 2026-07-08

## Status summary

| Section | Total | Done | Remaining |
|---|---|---|---|
| Blog posts | 293 | 293 (100%) | 0 |
| Glossary entries | 151 | 105 (70%) | 46 |
| Service pages | 10 | 0 | 10 |
| Final build check / broken-link sweep | 1 | 0 | 1 |

## Done and pushed

- **Blog (293/293)** — commit `71c7ed2` "Add cross-domain and internal contextual linking across all blog posts". Every post has TL;DR (where missing), internal links to other blog/glossary pages, cross-domain links to SurgePV/QuickEstimate/Heaven Green Energy/Heaven Designs, and a bumped `updatedDate`. Also added the `updatedDate` field to the blog content schema (`src/content.config.ts`) and wired it into the hero date display + `dateModified` schema.org field in `src/pages/blog/[slug].astro`.
- **Glossary (105/151)** — commit `0a30477` "Add cross-domain and internal contextual linking to glossary entries (partial)". Same treatment (TL;DR, internal + cross-domain links, updatedDate bump, occasional new `relatedTerms` entries).

## Remaining glossary entries (46) — not yet touched

```
bidirectional-meter, c-rate, calendar-life, can-bus, cell-balancing, cycle-life,
deep-discharge, green-hydrogen, gross-metering, ibc-cell, iec-61730, iec-62109,
iec-62619, irradiation, lcoe, letid, lid, module-efficiency, monocrystalline,
n-type-silicon, net-metering, noct, npv, open-circuit-voltage, p-type-silicon,
peak-sun-hours, perovskite, plane-of-array, pm-surya-ghar, polycrystalline,
power-factor, pwm, reactive-power, rpo, smart-inverter, smart-meter, soh,
string-sizing, tandem-cell, thd, thermal-runaway, topcon-cell, ups,
viability-gap-funding, virtual-net-metering, zero-export
```

## Not started

- **10 service pages** (Astro/JSX, not markdown — treat carefully, prose-only edits):
  `src/pages/about-us/index.astro`, `c-i-solution/index.astro`, `hybrid-inverter/index.astro`,
  `on-grid-inverter/index.astro`, `residential-solution/index.astro`, `why-qbits/index.astro`,
  `authorized-service-partners/index.astro`, `become-our-partner/index.astro`,
  `download-datasheets/index.astro`, `our-products/index.astro`
- **Final build check + broken-link sweep** across the whole site (last phase of the workflow script).
- **Step 14 implementation report** (link counts, cross-domain breakdown by destination, anchor
  distribution) — write once everything above is done.

## How to resume

Everything needed to continue is in this scratchpad directory (session-specific, may need
regenerating if a new session's scratchpad path differs — see "If scratchpad is gone" below):

```
/tmp/claude-1002/-home-ritik-qbits-energy-website/42544cdc-f2c5-4dc1-b851-f5902c1182dc/scratchpad/
├── scripts/workflow-seo-linking.mjs   ← the Workflow script (self-contained, all data inlined)
├── blog-min.json                      ← {s: slug, t: title, c: category} for every blog post
├── glossary-min.json                  ← {s: slug, t: term, c: category} for every glossary entry
├── link-buckets.json                  ← curated cross-domain topic -> URL map + 19 precise
│                                          qbits-slug -> surgepv-URL overrides
├── deep-pages.json / inventory-full.json / slug-matches.json  ← raw research data behind link-buckets.json
```

To resume the exact same run (cached — already-done glossary entries and any future blog/service
work will replay instantly from cache, only new/incomplete work re-runs live):

```
Workflow({
  scriptPath: "/tmp/claude-1002/-home-ritik-qbits-energy-website/42544cdc-f2c5-4dc1-b851-f5902c1182dc/scratchpad/scripts/workflow-seo-linking.mjs",
  resumeFromRunId: "wf_e678dec9-b5f"
})
```

If that scratchpad path no longer exists (new session), re-run `scripts/workflow-seo-linking.mjs`
fresh (no `resumeFromRunId`) — it will re-edit already-linked blog/glossary files too (the agents
are instructed to recognize and skip already-well-linked content, but a fresh run is not
cache-accelerated). Cheaper option: edit the script's batch lists to only include the 46 remaining
glossary slugs + 10 service pages, then run fresh.

## Known issue encountered

The workflow hit the Claude account's session usage limit twice mid-run (resets ~8:20am
Asia/Kolkata) and had to be resumed. This is why the work landed in two separate pushes
(blog, then partial glossary) rather than one. If it happens again, just wait for the reset
and resume with the command above — no content was corrupted by the interruption (failed
agents never touched their assigned files; each batch's edit was independently build-checked
and grep-verified for broken links before this file was written).

## Design/behavior notes for whoever continues this

- Only this repo (qbitsenergy.com) gets edited. `/home/ritik/heaven-designs-website`,
  `/home/ritik/heavengreens`, `/home/ritik/quickestimate`, `/home/ritik/surge-website` are
  read-only reference for finding real cross-domain link targets.
- Blog design system: markdown-pure body, FAQs/related-posts auto-render from frontmatter —
  never add manual FAQ or "Related Articles" sections. TL;DR is a blockquote near the top.
  `.inline-cta` div component exists for one high-value cross-domain CTA per post (sparingly).
- Glossary: `relatedTerms` frontmatter array auto-renders "Related Terms"; "Related Posts"
  auto-computed by keyword match — do not hand-add either as a manual section.
- Every edited file got a build-check + grep-based broken-link check before being committed.
