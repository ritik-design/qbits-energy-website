# Portfolio SEO Linking Project — Final Report

Cross-domain + internal contextual linking project across qbitsenergy.com
(blog, glossary, service pages), per the enterprise SEO linking brief. Cross-domain
targets are the sibling solar-portfolio sites: SurgePV, QuickEstimate, Heaven Green
Energy, Heaven Designs (all read-only reference — only this repo, qbitsenergy.com,
was edited; the other 4 have no write access from this project).

Status: **COMPLETE** — last updated 2026-07-18.

## Status summary

| Section | Total | Done |
|---|---|---|
| Blog posts | 293 | 293 (100%) |
| Glossary entries | 151 | 151 (100%) |
| Service pages (prose-editable) | 10 | 8 edited, 2 skipped (no safe insertion point) |
| Final build check / broken-link sweep | 1 | done — 0 errors, 0 broken links |

## Commits (in order)

1. `71c7ed2` — all 293 blog posts: internal links, cross-domain links, TL;DR, updatedDate. Also added the `updatedDate` field to the blog content schema (`src/content.config.ts`) and wired it into the hero date display + `dateModified` schema.org field in `src/pages/blog/[slug].astro`.
2. `0a30477` — 105/151 glossary entries (first batch, session-limited mid-run).
3. `33efe43` — progress tracker added.
4. `09623bc` — remaining 46/151 glossary entries — glossary now 100%.
5. `cd50087` — 8/10 service pages (about-us, become-our-partner, c-i-solution, download-datasheets, hybrid-inverter, on-grid-inverter, our-products, residential-solution). `why-qbits` and `authorized-service-partners` were left untouched — the editing agent found no natural prose sentence to weave a link into without inventing new copy, which was explicitly out of scope.

## Results (self-reported by editing agents, spot-checked)

- **~3,368 internal links** added across blog + glossary (to other blog posts and glossary entries).
- **~1,034 cross-domain links** added, approximate breakdown by destination:
  - Heaven Green Energy (heavengreenenergy.com — EPC/installation/products): ~467
  - SurgePV (surgepv.com — design software/CRM/tools): ~258
  - Heaven Designs (heavendesigns.in — permit design/engineering): ~231
  - QuickEstimate (quickestimate.co — proposals/quotation): ~101
- **429 TL;DR blocks** added (blog posts + glossary entries that were missing one).
- 19 blog posts got a precise 1:1 SurgePV `/compare/` or `/best-solar-software/` page match (verified real URLs from SurgePV's own content collection, not guessed).

## Final validation (last workflow phase)

`npm run build` — 0 errors, 293 blog + 151 glossary frontmatter all validated against their Zod
schemas, 493 pages rendered, Pagefind index built (492 pages / 25,633 words indexed).

Broken-link sweep — extracted all unique `/blog/<slug>/` and `/glossary/<slug>/` links referenced
anywhere in `src/content/blog` and `src/content/glossary` (417 unique targets) and confirmed every
one resolves to a real file. **0 broken internal links.**

Additional fixes made during the verify passes (self-healing, already applied, no action needed):
- Removed ~20 pre-existing dead `relatedTerms` slugs across several glossary files (glossary
  entries created before this project referenced a few slugs that were never real pages —
  the `[slug].astro` template silently filters these so they were never visibly broken, but
  the verify agents cleaned them up where they touched the file anyway).
- Fixed a handful of anchor-text collisions (same phrase pointing at two different URLs) by
  rewording one of the two occurrences.
- On `pwm`, removed one contextually inaccurate link (an "off-grid inverter" link inserted into
  a sentence describing a DC-only pico solar system with no inverter present).

## Pages/sites crawled for cross-domain targets

Read (not edited) directly from each sibling company's own repo to get real, deep, non-homepage
URLs instead of guessing:
- `/home/ritik/surge-website` — 765 blog posts, 399 glossary entries, 146 deep marketing/tool
  pages (`/compare/`, `/best-solar-software/`, `/tools/`, `/hub/*` topic clusters, `/case-studies/`, `/reviews/`)
- `/home/ritik/quickestimate` — 314 blog posts, 16 deep pages (`/features/*`, `/pricing/`, `/demo/`)
- `/home/ritik/heavengreens` — 319 blog posts, 161 glossary entries, 24 deep pages (`/products/*`, `/services/`, install/EPC pages)
- `/home/ritik/heaven-designs-website` — 280 blog posts, 200 glossary entries, 23 deep pages (permit design, structural/civil, project management services)

## Design/behavior notes

- Only this repo (qbitsenergy.com) was edited. The 4 sibling repos above are read-only reference.
- Blog design system: markdown-pure body, FAQs/related-posts auto-render from frontmatter — no
  manual FAQ or "Related Articles" sections were added. TL;DR is a blockquote near the top.
  The pre-existing `.inline-cta` div component was reused sparingly for high-value cross-domain CTAs.
- Glossary: `relatedTerms` frontmatter array auto-renders "Related Terms"; "Related Posts" is
  auto-computed by keyword match at build time — neither was hand-added as a manual section.
- Every batch went through an independent verify pass (different agent, re-reads the file,
  checks every link target against the real slug inventory, fixes anything broken) before
  being committed, and the whole site went through one final `npm run build` + link sweep.

## Known issues encountered (all resolved)

- The original 450-file run hit the Claude account's session usage limit twice mid-run and had
  to be resumed across 3 separate `Workflow` invocations, which is why the work landed in
  multiple pushes rather than one. No content was corrupted by any interruption — failed agents
  never touched their assigned files.
- A prior session's scratchpad (containing the workflow script + reference JSON) was cleaned up
  between sessions; the remainder (46 glossary + 10 service pages) was completed via a smaller,
  freshly-rebuilt script rather than resuming the original run, since the original run ID's
  cache was no longer reachable.

## If further passes are wanted later

Not required — the project is complete. If a future refresh is desired (e.g. after new blog
posts are added, or after the sibling sites publish new pages worth linking to), the same
approach (read sibling repos for real URLs → curate topic buckets → batch-edit with an
edit-then-verify pipeline → build-check) can be re-run; there is no saved script left in this
repo since the workflow tooling lives in a session-scoped scratchpad, but this document has
enough detail to reconstruct it from scratch.
