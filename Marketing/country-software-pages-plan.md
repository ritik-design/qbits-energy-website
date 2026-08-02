# Country-Targeted Solar Software Pages — Build Plan

Created 2026-08-01. Source of truth for the 40-page country programme.

## Decisions locked

| Decision | Choice |
|---|---|
| Existing 5 country design pages | **Upgrade in place.** No `best-...` duplicates. Retitle to own "best solar design software [country]", expand, keep ranking equity. |
| Country set | Balanced / revenue-weighted, filtered to markets that pay USD seat prices |
| Excluded on affordability | Pakistan, Bangladesh, Nigeria, Kenya, Tanzania, Uganda, Zambia (user call: skip small/poor markets) |
| Sequencing | Pilot 4 → review → batch remaining 31 |
| Localization required | Codes + standards, incentives + tariffs, local competitor set. (Local-currency pricing NOT selected.) |
| Slug convention | `solar-design-software-<country>` / `solar-proposal-software-<country>`. No "best" in slug: keeps parallel with the existing family and obeys the short-slug rule. "Best" lives in the title tag, which is what ranks. |

## Real scope

Not 40 new pages. Ground truth from the repo:

- 5 design pages already exist (India, USA, UK, Germany, Australia), 3,600–4,200 words each → **upgrade**
- 15 design pages → **new**
- 20 proposal pages, zero exist → **new**

**Total: 35 new + 5 upgrades.**

## The 20 countries

Ranked by expected software revenue, not traffic. "SurgePV guides" = live pages in SurgePV's `/solar-compliance/` section, which is our differentiator against Aurora and the sister-link target for each page.

| # | Country | GSC impressions | SurgePV compliance guides | Design page | Proposal page |
|---|---|---|---|---|---|
| 1 | USA | 26,731 | 42 | upgrade | new |
| 2 | India | 67,119 | 31 | upgrade | new |
| 3 | UK | 3,897 | 22 | upgrade | new |
| 4 | Australia | 1,310 | 22 | upgrade | new |
| 5 | Canada | 1,398 | 17 | new | new |
| 6 | Germany | 1,907 | de locale | upgrade | new |
| 7 | Philippines | 2,774 | 16 | new | new |
| 8 | South Africa | 879 | 14 | new | new |
| 9 | UAE | 1,253 | 11 | new | new |
| 10 | Netherlands | 886 | — | new | new |
| 11 | Italy | 722 | it locale | new | new |
| 12 | Saudi Arabia | 621 | — | new | new |
| 13 | Malaysia | 565 | 11 | new | new |
| 14 | Spain | 528 | es locale | new | new |
| 15 | Ireland | 493 | 3 | new | new |
| 16 | Singapore | 446 | 9 | new | new |
| 17 | France | 416 | fr locale | new | new |
| 18 | Poland | 305 | pl locale | new | new |
| 19 | New Zealand | — | 3 | new | new |
| 20 | Chile | — | — | new | new |

Dropped from the original balanced list: **Japan** (no compliance coverage, non-English SERP, hard market), **Nigeria** (affordability). Chile added as the LatAm entry with real utility-scale pipeline.

## Per-country localization data (verified, do not fabricate)

Facts must come from the SurgePV compliance section or a named external source. Verified so far:

### USA — `/solar-compliance/usa/`
- Codes: NEC 2023 in ~35 states, NEC 2026 (published 10 Oct 2025) in 7, NEC 2020 in 6. NOTE: SurgePV's own USA compliance page states NEC 2020 for most states, which is stale. Use these figures.
- Incentives: ITC 30% base through 2032. Residential §25D, commercial §48E. Commercial can reach 50% with domestic content (+10%) and energy community (+10%) bonuses. >1 MW AC needs prevailing wage/apprenticeship for full credit
- Interconnection: IEEE 1547-2018, FERC Order 2222
- Net metering: CA NEM 3.0 (~$0.05–0.08/kWh export), NY VDER, NJ NEM Plus + SREC II, AZ ~$0.09/kWh
- Competitors: Aurora Solar (dominant), HelioScope, OpenSolar, Pylon, Solargraf, Scanifly

### Canada — `/solar-compliance/canada/`
- Code: CSA C22.1:24 (26th ed), Section 64. Differs from NEC on derate factors and conduit fill
- Certification: CSA / cUL / cETL / cULus required, SCC-accredited. Uncertified imports are illegal to install
- Net metering: BC Hydro 100 kW / 10¢ per kWh (new July 2026); Ontario 500 kW / retail ~$0.14–0.15; Quebec 1 MW (expanded 2026); Alberta 5 MW; Saskatchewan 100 kW / 7.5¢ to March 2029; Manitoba 100 kW / $0.04390
- Incentives: federal Clean Technology ITC 30% refundable (business) to 31 Dec 2033; BC Hydro up to $10,000; Quebec $1,000/kW (from March 2026); Ontario HRSP up to $5,000; PEI $1,000/kW capped $10,000; Manitoba $0.50/DC watt to 10 kW
- Closed: Greener Homes Grant (Mar 2024), Greener Homes Loan (Oct 2025)

### Per-country research
Superseded by the "Research banked" section in the BUILD TRACKER below, which carries verified data for USA, Canada, UK, Australia, Germany, Netherlands, Philippines and South Africa.

## Page template (locked after pilot review)

Per qbits-writer: 3,000–5,000 words, geo-guide format, single ICP = EPC/installer.

1. Opening, no heading, 150–250 words, market-statement style
2. TL;DR blockquote, 5–7 bullets with real numbers
3. **Short version.** 40–80 word extractable answer
4. Inline CTA banner → `surgepv.com/demo`
5. `## What [Country] Installers Actually Need` — codes, certification, interconnection
6. `## [Country] Incentives That Belong In The Proposal` — the commercial hook
7. `## The Ranking` — 6–8 tools, local competitor set
8. `## Comparison Table`
9. Inline CTA banner 2 → `surgepv.com/demo`
10. `## Contrarian / what buyers get wrong in this market`
11. `## Pricing For A 5-Seat Team`
12. `## Who Should Choose What`
13. `## The Bottom Line` — 3 action bullets
14. Inline CTA banner 3 → `surgepv.com/demo`
15. FAQs in frontmatter only, 6–10 entries, `q:`/`a:` keys

CTA banners: 3 per page, `<div class="inline-cta">` matching the existing pattern, all to `https://surgepv.com/demo`.

Sister links per page: the country's `/solar-compliance/<country>/` page plus 1–2 relevant sub-guides. Verified against the live sitemap, never fabricated.

## Hard rules

- No em-dashes or en-dashes. `grep -c '—\|–'` must return 0
- No numbers or years in slugs
- Author rotation across Nirav / Keyur / Akash, no single author dominating
- `category: "Solar Software"`
- Every stat carries a named source and year
- OG images auto-generate via `scripts/generate-og-images.mjs` during `npm run build`. No manual image work
- `npm run build` must pass before any page is reported done

## BUILD TRACKER (updated 2026-08-01)

**26 of 40 complete.** All build-verified: 0 em-dashes, 3 CTAs each to `surgepv.com/demo`, 7 to 8 frontmatter FAQs, no broken internal links, OG images auto-generated, authors rotated across Nirav / Keyur / Akash.

| Country | Design page | Proposal page |
|---|---|---|
| USA | UPGRADED 3,893w | DONE 3,396w |
| India | UPGRADED 3,314w | DONE 3,101w |
| UK | UPGRADED 2,964w | DONE 2,742w |
| Australia | UPGRADED 3,229w | DONE 2,636w |
| Germany | UPGRADED 3,022w | DONE 2,691w |
| Canada | DONE 3,223w | DONE 2,718w |
| Netherlands | DONE 2,679w | DONE 2,467w |
| Philippines | DONE 2,623w | DONE 2,320w |
| South Africa | DONE 2,593w | DONE 2,426w |
| UAE | DONE 2,711w | DONE 2,678w |
| Malaysia | DONE 2,469w | DONE 2,550w |
| Singapore | DONE 2,600w | DONE 2,607w |
| Italy | DONE 2,546w | TODO |
| Ireland | DONE 2,690w | TODO |

The 5 upgrades also fixed two defects the originals shared: a `## TL;DR` H2 polluting the sidebar TOC (now a blockquote) and a duplicated `## Frequently Asked Questions` body section repeating the frontmatter accordion. Roughly 2,600 words of duplicate content removed.

### Remaining: 14 pages



Italy and Ireland proposal pages need NO new research. Facts banked below.

### Research banked (do not re-research)

- **USA:** NEC 2023 in ~35 states, NEC 2026 published 10 Oct 2025 adopted in 7, NEC 2020 in 6. ITC 30% to 2032, S25D / S48E, +10% domestic content, +10% energy community, prevailing wage above 1 MW AC. IEEE 1547-2018. NEM 3.0 export $0.05 to $0.08 vs ~$0.40 retail. SREC states NJ, MA, IL, MD, PA, OH, DC.
- **Canada:** CSA C22.1:24 Section 64. CSA/cUL/cETL/cULus via SCC. BC 100 kW at 10c from Jul 2026, ON 500 kW at retail ~$0.145, QC 1 MW 24-month reset, AB 5 MW monthly, SK 100 kW at 7.5c to Mar 2029, MB 100 kW at $0.04390. Clean Tech ITC 30% refundable business-only to 31 Dec 2033. BC Hydro to $10k, QC $1,000/kW from Mar 2026, ON HRSP to $5k, PEI $1,000/kW cap $10k, MB $0.50/DC watt to 10 kW. Greener Homes Grant closed Mar 2024, loan closed Oct 2025.
- **UK:** BS 7671 18th Ed Amd 2 Part 7 s712. G98 to 3.68 kW single-phase / 11 kW three-phase, 28-day objection. G99 pre-approval 45 working days. MCS required for SEG. SEG from Jan 2020, per-supplier, must exceed 0p, 5 MW cap, smart meter required. 0% VAT on qualifying GB residential.
- **Australia:** AS/NZS 5033:2021, AS 4777.2:2020, AS/NZS 5139:2019. CEC accreditation required for STC. STC deemed on size + solar zone + years to Dec 2030. DNSPs Ausgrid, Energy Queensland, SA Power Networks, Western Power.
- **Germany:** EEG 2026 7.78 ct/kWh partial, 12.34 ct/kWh full feed-in to 10 kWp, commissioned 1 Feb to 31 Jul 2026. Solarspitzengesetz from 25 Feb 2025 removes EEG payment in negative-price intervals, time added to end of 20-yr term. 60% feed-in cap without smart meter control, required at 7 kWp+. VDE-AR-N 4105:2026-03.
- **Netherlands:** Salderingsregeling ends 1 Jan 2027 (Senate approved Dec 2024). Supplier-set export, expected 5 to 10 c/kWh, non-negative floor. Payback 7-9 yrs moves to 12-17. Terugleverkosten already applied. NEN 1010. Liander, Stedin, Enexis. Grid congestion real.
- **Philippines:** PEC based on NEC 2008, anti-islanding within 2 sec, DC arc fault on long runs. ERC Resolution No. 09 s2013, export at blended generation rate ~PHP 5-6/kWh for Meralco, 50-60% of retail. April 2026 DOE circular raised non-residential cap 100 kW to 1 MW. DU decision in 10 working days, LGU permit + CFEI in 3. RA 9513 makes net metering a statutory right. CoC signed by RME or PEE.
- **South Africa:** NRS 097-2-1:2024, SANS 10142-1:2020, SANS 10142-2:2017, IEC/SANS 62619. NERSA licensing at 1 MW+. Residential single-phase ~10 kVA, three-phase ~25 kVA across Eskom, Cape Town, City Power JHB, Ekurhuleni, eThekwini, Tshwane. SSEG approval mandatory before energizing. DoL-registered contractor issues CoC; ECSA Pr Eng above 25 kVA per Oct 2025 update. Section 12B 125% first-year deduction, no size cap.

- **UAE:** Four regimes. DEWA Shams Dubai 1 MW/plot, credited at consumer's own slab (residential 29-44 fils, commercial ~44 fils), indefinite rollover, contractor categories A <=50 kW / B 50-150 kW / C >150 kW, NOC via Hab Reeh, DEWA approved equipment list. ADDC/AADC Abu Dhabi 5 MW/premises, kWh offset only no cash, indefinite accumulation, tariffs UAE national 6.7-7.5 fils / expat 26.8-30.5 fils / commercial ~AED 0.20, Abu Dhabi Electricity Wiring Regulations 2020, RSB approval, consultant AND contractor on approved lists. EtihadWE (Ajman, UAQ, RAK, Fujairah) launched 17 Sep 2024, 20 MW aggregate cap 2024 first-come, calendar-year credits that EXPIRE. SEWA Sharjah no published programme as of early 2026. All: ECAS certification, IEC 61215/61730 panels, 62109-1/-2 + 62116 inverters, 61727 grid interface, 60255 relays. Solar zero-rated for VAT all seven emirates. Federal Decree-Law 17/2022; Climate Law Decree-Law 11/2024 effective May 2025, Scope 2 reporting, fines AED 50k-2m.
- **Malaysia:** NEM 3.0 quota-based via SEDA, net bill = imported kWh x tariff - exported kWh x tariff (1:1 offset). Domestic cap 12 kWp; non-domestic cap 75% of Maximum Demand. No SEDA quota approval means no TNB bi-directional meter and no legal export. Apply at nem.seda.gov.my with TNB account, capacity, address, NRIC/company reg, SEDA contractor ID. Inverter auto-disconnect within 2 sec of TNB supply loss, MS IEC 62109. PE-stamped SLD from Board of Engineers Malaysia registered engineer mandatory. Contractor needs Electrical Contractor Licence + Wireman licence (Energy Commission) + SEDA Registered Solar PV Contractor. Sarawak = Sarawak Energy Berhad, separate portal/caps. Sabah and Labuan = SESB separate scheme. C&I routes: NEM 3.0, SELCO (self-consumption no export), LSS (>1 MW competitive tender, TNB PPA). GITA 100% ITA over 3 yrs (MIDA approval). GITE 70% income tax exemption 10 yrs. Timeline 4-6 months application to first billing.
- **Singapore:** Below 1 MWac no EMA Generation Licence; at/above 1 MWac full licence via ELISE portal (elise.ema.gov.sg), est. 3-6 months. Licensed Electrical Worker must submit Electrical Installation application at ALL sizes. Two export schemes: SCT ~S$0.20/kWh fixed, SP Services direct, no stated cap; ECIS at variable USEP 10-20 c/kWh, EMC Market Participant registration, 10 MWac/installation cap. SP Services administers both, separate monthly settlement. Standards: SS 638 wiring, IEC 62109-1/2 inverters, IEEE 1547 or IEC 62116 anti-islanding, IEC 61215/61646 module performance, IEC 61730 safety. JTC mandatory deployment obligations on some industrial premises.

- **Italy:** Scambio sul Posto closed to systems commissioned from 29 May 2025 under ARERA resolution 78/2025/R/efr. Ritiro Dedicato is the new reference: GSE buyback ~8-14 ct/kWh up to 1 MWp, guaranteed 20 years. 50% Restructuring Bonus deduction remains for primary residences, max eligible spend EUR 96,000 per property unit, spread across tax years not upfront. CEI 0-21 governs LV grid connection, CEI 0-16 MV/HV. Wide latitude range means Sicily and Lombardy need location-specific weather data. SurgePV sister posts: /blog/italy-feed-in-tariffs-rooftop-solar and /blog/solar-panel-roi-italy.
- **Ireland:** ESB Networks NC6 = notification, single-phase <6 kW (25A) or three-phase <11 kW (16A/phase), form filed >=20 working days before installation. NC7 = mini-generation application, single-phase 6-50 kW or three-phase 11-50 kW. SEAI grant tapers: EUR 700/kWp first 2 kWp, EUR 200/kWp next 2, so 1 kWp=700, 2=1,400, 3=1,600, 4+=1,800 max. Clean Export Guarantee standard range 15.2-32.0 c/kWh by supplier (Pinergy 25.0 c at the high end of standard). First EUR 400 annual export income tax-exempt through end 2028. Planning exempt under S.I. 493/2022: rooftop projection max 15cm pitched / 50cm flat; ground-mount to 25 sq m, 2m height, 2m from boundaries. Protected Structures and Architectural Conservation Areas need full permission. EN 50549 grid protection, Part L (2022), RECI-registered contractors, CRU regulates export.

### Still needs research

SurgePV compliance pages exist for New Zealand (3 guides) at `https://www.surgepv.com/solar-compliance/new-zealand/`. Note AS/NZS standards are joint Australia/NZ documents so the Australia research partly transfers; what differs is that NZ has no STC equivalent and buyback rates are set per retailer.

No SurgePV coverage, fully external research required: **Spain** (autoconsumo, RD 244/2019, compensacion simplificada, IBI/ICIO municipal rebates), **France** (prime a l'autoconsommation, obligation d'achat, Enedis, NF C 15-100 / C15-712), **Poland** (Moj Prad, net billing since April 2022, RCEm pricing), **Saudi Arabia** (SASO, Saudi Building Code, SEC net metering regulation, Vision 2030 targets), **Chile** (Ley 21.118 Netbilling, SEC certification, PMGD regime).

Verify anything load-bearing externally regardless of source. The SurgePV USA compliance page was found stale on NEC adoption.

## Pilot 4 (first batch, now superseded by the tracker above)

Covers all three work types so the template is validated once:

1. `solar-proposal-software-usa.md` — NEW, template for 20 proposal pages
2. `solar-proposal-software-india.md` — NEW, second proposal reference
3. `solar-design-software-canada.md` — NEW, template for 15 new design pages
4. `solar-design-software-usa.md` — UPGRADE, template for the 5 rewrites

## Shading Analysis Batch — COMPLETE (2026-08-02)

Scope per user decision: 6 differentiated countries + global expansion (not 20 — see doorway-page rationale).

| Page | Words | Angle |
| --- | --- | --- |
| solar-shading-analysis-software (global) | 2,929 | Expanded from 1,927. Bypass-diode granularity, direct/diffuse, shading vs soiling, vendor-validation checklist |
| -canada | 2,469 | Sub-20° December sun, snow compounding, provincial export spread |
| -ireland | 2,607 | High diffuse fraction — geometric models OVERSTATE loss; CEG vs retail asymmetry |
| -poland | 2,613 | Net billing RCEm 0.19 PLN vs retail; self-consumption 35% vs 75% flips the recommendation |
| -singapore | 2,382 | Inter-building shading from off-property towers; equatorial paths; high diffuse |
| -uae | 2,562 | Per-edge parapet setback, economic row spacing, soiling×shading interaction, diode heat |
| -saudi-arabia | 2,742 | 5 halala export vs 32 halala commercial import (6:1); 2–5%/day soiling; cleaning schedule from shading map |

All pass QA: 0 em-dashes, 3 CTAs, 7 FAQs, 0 inline styles, no duplicate FAQ body sections, no broken links. Build green, 7 OG images generated.

Note: Poland and Saudi Arabia have NO country design page yet, so those two shading pages link only to global guides. Add the cross-links when the design pages land.

## COUNTRY PROGRAMME COMPLETE — 40/40 (2026-08-02)

All 20 countries have both a design and a proposal page. Final 14 written this session.

| Country | Angle discovered during research |
| --- | --- |
| Italy (proposal) | Scambio sul Posto closed 29 May 2025; Ritiro Dedicato 8-14 ct; 50% bonus is multi-year cashflow, not a discount |
| Ireland (proposal) | SEAI grant TAPERS by kWp band (700/700/200/200, cap 1,800); CEG spread 15.2-32.0 c by supplier |
| **France (both)** | **S21 reform 5 June 2026: prime abolished, surplus cut to 1.1 c/kWh. Pre-June Enedis connections keep old rates 20 yrs** |
| Spain (both) | Monthly settlement + zero floor + no rollover = summer surplus LOST; 2026 collective radius now 5 km / 5 MW |
| Poland (both) | RCEm volatility (132.92 Apr -> 191.37 May 2026); self-consumption 35% -> 75% with battery flips the recommendation |
| Saudi (both) | 5 halala export vs 32 halala commercial import (6:1); soiling 2-5%/day; 5 MW cap per distribution area |
| New Zealand (both) | From 1 Jul 2026 big four must offer time-varying export; peaks fall AFTER DARK; rates 5c-40c, no FiT, no floor |
| Chile (both) | Pure energy price (below retail) BUT credits never expire; 300 kW -> PMGD regime change; 4,000 km latitude span |

QA on all 14: 0 em-dashes, 3 CTAs, 5 demo links, 7 FAQs, 0 inline styles, no duplicate FAQ sections, no H2 TL;DR. Build green, 571 pages indexed, all OG images generated. Zero broken internal links site-wide.

### Research caveats to revisit
- France 1.1 c/kWh and the 5 June 2026 date are from secondary French sources; worth confirming against the arrete text before any paid promotion.
- Poland banked data contained two conflicting export figures (RCEm ~0.19 PLN vs a 0.35-0.45 PLN range). Pages consistently use RCEm 0.19; verify which applies to which customer class.
- Saudi tariff tiers (20 halalas industrial / 32 commercial) and the 5 halala export rate are from secondary sources, not the SEC tariff book.

### Still outstanding
- Poland and Saudi Arabia now HAVE design pages, so the cross-links from their shading pages can be added.
- Nothing is deployed. Publish with: npm run build && npx wrangler deploy

## SOLAR SOFTWARE HUB PAGES — COMPLETE 20/20 (2026-08-02)

Third page type for the head term "solar software" + country. Positioned as category HUBS, not duplicates of the design/proposal pages.

### Anti-cannibalisation design
Each of the three page types answers a different question:
- `solar-design-software-<country>` — which tool do I design with?
- `solar-proposal-software-<country>` — which tool do I quote with?
- `solar-software-<country>` — what does my whole stack need? (six categories, what to buy, what to defer, where teams overspend)

Hubs link DOWN to design + proposal + shading siblings. Shared structure: six-category table → what's country-specific → overbuy/underbuy → platforms → comparison → worked example → bottom line. Author: Nirav Dhanani (CEO) on all 20, since these are business/stack-level rather than technical or financial.

### GSC context for this keyword
"solar software" 121 impr @ pos 33.4 · "solar software tools" 105 @ 24.3 · "best solar software" 21 @ 18.0 · "solar software design" 7 @ 33.9. Total 254 impressions, ZERO country-qualified queries.

IMPORTANT distinction from the shading decision: position 33 means impressions are SUPPRESSED BY RANK, not by absent demand. This is unlike shading, where we ranked 8.3 and still only saw 123 impressions (genuinely low volume). "Solar software" is a real head term the site is barely visible for. That's why 20 pages was the right call here and was not for shading.

QA on all 20: 0 em-dashes, 3 CTAs, 5 demo links, 7 FAQs, 0 inline styles, no duplicate FAQ sections, no H2 TL;DR. Build green, 591 pages indexed, 20 OG images generated, zero broken links site-wide.

### Running totals
- Country design: 20/20
- Country proposal: 20/20
- Country software hubs: 20/20
- Shading: 7/7 (global + 6 countries)
- GSC reoptimisation: 31 existing posts
- Blog total: 390 posts

### Still outstanding
Nothing is deployed. Publish with: npm run build && npx wrangler deploy
