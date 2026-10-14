---
title: 'Solar Inverter Price Guide: Compare 3 kW, 5 kW and 10 kW Quotes'
excerpt: "Solar inverter price in India by capacity band and topology, plus the specs, taxes and missing line items that actually set what you pay."
description: "What sets a solar inverter price in India: capacity band, phase, topology, MPPT count, DC input headroom, enclosure rating, warranty term, GST, and the parts that are not in the box."
category: Buying Guide
date: 2026-06-05
updatedDate: 2026-09-24
readTime: 13 min
image: "/og/blog-solar-inverter-price-guide.webp"
author: Akash Hirapara
keywords:
- solar inverter price india
- 3kw vs 5kw solar inverter price
- 5kw solar inverter price india
- solar inverter price list india
- on grid vs hybrid inverter price
- what decides solar inverter price
faqs:
- q: "What actually decides a solar inverter's price in India?"
  a: "Capacity sets the floor, but six other specifications move the number more: single phase versus three phase, on-grid versus hybrid topology, the number of MPPT trackers, the maximum DC input current each tracker accepts, the enclosure protection rating, and the warranty term. Each one changes the parts inside the enclosure, so each one has a real cost. Two inverters with the same kW badge can differ widely once those six lines differ. Compare the datasheet rows, not the headline capacity."
- q: "Why does a 3 kVA inverter sometimes cost more than a 5 kVA one?"
  a: "Because Indian solar retail discounts by SKU, not by capacity. On 24 September 2026 the Luminous Solar Hybrid TX 3 kVA listed at ₹73,800 against an MRP of ₹82,000, roughly 10% off. The TX 5 kVA listed at ₹63,899 against an MRP of ₹1,10,000, roughly 42% off. The MRP ladder rises with capacity as expected, but the listed prices invert it. Always re-check the seller page on the day you compare, because discount depth changes."
- q: "Is a bigger inverter always more expensive per kW?"
  a: "No. Price per kW generally falls as capacity rises, because the enclosure, control board, display, firmware and certification cost about the same at 3 kW as at 15 kW. Those fixed costs spread across more watts. The saving stops being free once the unit needs three-phase output, forced cooling or extra MPPT trackers. At that point the parts count rises with the rating."
- q: "Does a more expensive inverter get me a larger PM Surya Ghar subsidy?"
  a: "No. The MNRE operational guidelines state that central financial assistance is provided irrespective of inverter size and is computed on rated DC module capacity. Published slabs are ₹30,000 at 1 kW, ₹60,000 at 2 kW, and ₹78,000 at 3 kW and above, per PIB (2024). Spending more on the inverter earns no extra rupee of assistance. Slabs change and DISCOM practice varies by state, so verify the current amount before you budget."
- q: "What GST rate applies to a solar inverter?"
  a: "Classification decides it, not the word solar. Notification 9/2025-Integrated Tax (Rate), dated 17 September 2025 and effective 22 September 2025, places renewable energy devices at 5% under Schedule I entry 437 and static converters of heading 8504 at 18% under Schedule II entry 477. Which entry your invoice uses depends on the exact product and the nature of the supply. Ask for the HSN code and the rate on every line, since Notification 78/2020-Central Tax requires HSN digits on invoices."
- q: "Is the WiFi monitoring dongle included in an inverter price?"
  a: "Sometimes, and sellers rarely say so on the listing. The communication stick, its mount and any data plan can all be priced as accessories. Ask whether monitoring hardware ships in the carton, whether the app is free, and what happens to data access if a subscription lapses. Get the answer written on the quote, because this line commonly appears later as an add-on."
- q: "Do solar inverters need to be on the ALMM list for PM Surya Ghar?"
  a: "No, and this is a widely repeated error. MNRE publishes no ALMM list for inverters. ALMM List-I covers solar modules and List-II covers solar cells, with List-II in force from 1 June 2026. Any seller telling you an inverter must be ALMM-listed to qualify is wrong, so ask them to cite the order."
- q: "How do I compare two inverter quotes fairly?"
  a: "Restate both at the same scope first, then convert each to rupees per watt of rated AC output rather than per kVA badge. Match topology, phase, MPPT count and maximum DC input current per tracker against your module short-circuit current. Normalise the warranty terms to a common period and price the gap years yourself. Finally, extract the GST line per item and ask for the nearest authorised service point by name and road distance."
seoTitle: 'Solar Inverter Prices in India: What Sets the Number'
relatedSlugs:
- solar-inverter-ka-rate
- hybrid-inverter-price-india
- gst-on-solar-inverters-2026
- dual-mppt-vs-single-mppt
---

A solar inverter price in India is three different numbers wearing one label. There is the printed MRP, the price a retailer lists today, and the figure that lands on your installed invoice. The gap between them is not small. On 24 September 2026, Luminous listed its Solar Hybrid TX 5 kVA at ₹63,899 against an MRP of ₹1,10,000. The same range's 3 kVA unit listed higher, at ₹73,800, purely because it carried a shallower discount.

So a price table is the least useful thing a price guide can hand you. It dates within weeks. It also tells you nothing about why two 5 kW inverters get quoted far apart.

This guide works the other way round. It explains what changes inside the box as you move up the capacity bands, what each topology adds to the bill of materials, and which six datasheet rows genuinely move a quote. Then it covers the parts that are not in the box, how GST classification changes the invoice, why the PM Surya Ghar grant ignores your inverter entirely, and a worked 10-year ownership calculation that shows why the cheapest unit on a comparison sheet is usually the dearest one to own.

> **TL;DR**
> - Luminous listed prices on 24 September 2026: TX 3 kVA at ₹73,800, TX 4 kVA at ₹58,998, TX 5 kVA at ₹63,899. Listed price does not track capacity.
> - MRP per kVA falls with size on that same range, from about ₹27,333 at 3 kVA to ₹22,000 at 5 kVA, but listed price per kVA falls much faster because discount depth varies by SKU.
> - Six specifications move an inverter's price: phase, topology, MPPT count, maximum DC input current per MPPT, enclosure protection rating, and warranty term.
> - Modern G12 modules draw over 18 A of short-circuit current. The Waaree BiN-03-700 datasheet gives 18.31 A Isc, so an inverter offering 13 A per tracker cannot take that string at full current.
> - GST follows classification, not the word solar: 5% under Schedule I entry 437 or 18% under Schedule II entry 477 for heading 8504 static converters, per Notification 9/2025-Integrated Tax (Rate).
> - PM Surya Ghar assistance is computed on rated DC module capacity irrespective of inverter size, so a pricier inverter earns no extra assistance.
> - In the worked example below, an inverter that saves ₹16,000 at purchase costs ₹16,760 more across 10 years.

**Short version.** Solar inverter prices in India rise with capacity but not in proportion, because the enclosure, control board and firmware cost much the same at 3 kW as at 10 kW. Phase, topology, MPPT count, DC input current headroom, enclosure rating and warranty term shift a quote more than capacity does. Listed prices swing widely because discount depth varies by SKU, so compare dated written quotes for exact models.

## What you are actually buying inside the box

An inverter looks like one product and prices like six. The money sits in the power semiconductors, the magnetics, the DC link capacitors, the enclosure and its thermal design, the control and communication boards, and the reserve a maker holds against warranty claims. Change any one of those and the price moves, even when the kW badge stays the same.

Here is where a typical string inverter's cost actually lives, and what makes each block dearer.

| Cost block | What it does | What makes it cost more |
| --- | --- | --- |
| Power switches | Convert DC to AC | Higher current rating, better switching devices, tighter thermal margin. Qbits describes its switching stage as German IGBT Technology |
| Magnetics | Boost inductors, filter chokes | More MPPT trackers means more inductors; higher DC current means heavier copper |
| DC link capacitors | Smooth the DC bus | Longer rated life at high ambient temperature, which matters on Indian terraces |
| Enclosure and cooling | Keep water, dust and heat out | Higher protection rating, potting, forced cooling, corrosion-resistant finish |
| Control and comms | MPPT algorithm, grid protection, monitoring | Certification testing, grid-support firmware, bundled communication hardware |
| Warranty reserve | Funds replacements | Longer term and wider claim coverage both raise the reserve |

Two conclusions follow. First, a 5 kW inverter with two trackers and a 20 A per tracker rating genuinely costs more to build than a single-tracker 13 A unit of the same output. Second, the warranty reserve is a real cost, so a much cheaper unit with a much shorter term is not a bargain. It is a different product.

## How price moves across the capacity bands

Price per kW generally falls as capacity rises. The reason is structural: enclosure, control board, display, firmware and type-testing cost roughly the same at 3 kW as at 15 kW, so those fixed costs spread across more watts. The fall stops being free once the design has to add a phase, add trackers or add forced cooling. Then parts count climbs with the rating.

| Band | Usual connection | What changes inside | What moves the price beyond capacity |
| --- | --- | --- | --- |
| 1 to 3 kW | Single phase | Often one MPPT, natural convection cooling, modest DC current | Low SKU volumes at 1 kW keep the price per kW high |
| 3 to 6 kW | Single phase, sometimes three | One or two MPPTs, larger DC input current, bigger heatsink | India's most contested band, so discount depth swings hardest here |
| 6 to 15 kW | Three phase common above 10 kW | Two MPPTs, forced cooling, higher DC switch rating | The phase change itself, plus export-limit and relay hardware |
| 15 to 50 kW | Three phase, low tension | Two to four MPPTs, string fusing, heavier DC isolator | Commercial protection spec, surge class, monitoring gateway |
| Above 50 kW | Three phase, larger interface | Four or more MPPTs, higher DC bus voltage | Lowest price per kW, but balance-of-system scales up with it |

For system-level costs at the small end, the [1 kW system price guide](/blog/1kw-solar-system-price-india/) and the [3 kW system price guide](/blog/3kw-solar-system-price-india/) carry the installed picture for those sizes. This page stays on the inverter itself.

One trap sits in the badge. A unit sold as 5 kVA is rated in apparent power, and its rated AC watts can be lower. The Luminous TX 5 kVA product page describes a 5 kW rated output, so that one lines up, but many do not. Read the rated AC watts row, and see the [kVA definition](/glossary/kva/) if the distinction is new.

## Topology and phase move the price more than capacity does

Topology decides how many conversion stages sit in the box. An on-grid inverter runs one job: turn array DC into grid-synchronous AC. A hybrid adds a bidirectional battery converter, battery communication, a transfer relay and a separate backup output. An off-grid unit has to form the voltage itself. Each step adds hardware, so each step adds price at the same kW.

| Topology | Extra hardware inside | What the extra money buys |
| --- | --- | --- |
| On-grid | None beyond the DC to AC stage | Export to the grid, subject to net metering approval |
| Hybrid | Bidirectional battery stage, BMS communication, transfer relay, backup output | Battery charge and discharge, plus designated backup circuits |
| Off-grid | Grid-forming control, larger charge stage, generator input | Operation with no grid reference at all |

Hybrid cost drivers, and the battery economics that dominate them, are covered in depth in the [hybrid inverter price guide](/blog/hybrid-inverter-price-india/). Two points belong here instead.

Phase is the bigger price step most buyers miss. Moving from single phase to three phase changes the output bridge, the filter, the metering and the protection coordination. It is not a firmware option. If your sanctioned connection is single phase, a three-phase inverter is wasted money, and if it is three phase, a single-phase unit will not serve balanced loads. The [single versus three phase comparison](/blog/single-vs-3-phase-inverter/) sets out which connection suits which load profile.

Grid-support capability is the quieter one. Any inverter connecting to an Indian distribution network has to meet the CEA (Technical Standards for Connectivity of the Distributed Generation Resources) Regulations, 2013, as amended in 2019. Regulation 11(6) requires tripping above 110% or below 80% of nominal voltage with clearing up to 2 seconds, tripping at 50.5 Hz and above or 47.5 Hz and below with clearing up to 0.2 seconds, ceasing to energise within 2 seconds of unintended island formation, and 60 seconds of stability before reconnection. DC injection is limited to 0.5% of full rated output current. The regulation also lets a DISCOM prescribe a narrower range, so local settings can differ. Anti-islanding is tested to IS 16169:2019, the Indian adoption of IEC 62116:2014. That testing, and the firmware behind it, is part of what you pay for.

## Why MRP and listed price diverge so widely

Indian solar retail discounts by SKU and by stock position, not by a consistent rule. So the MRP ladder tells you what the maker thinks the range is worth, while the listed price tells you what one seller wants to move this week. Reading the second as a market rate is the single most common costing error buyers make.

The Luminous Solar Hybrid TX range, captured on 24 September 2026, shows the effect cleanly.

| Model | Listed price | MRP | Discount off MRP | Listed per kVA | MRP per kVA |
| --- | --- | --- | --- | --- | --- |
| [Solar Hybrid TX 3 kVA](https://www.luminousindia.com/solar-inverters/solar-hybrid-tx-3kva) | ₹73,800 | ₹82,000 | about 10% | ₹24,600 | ₹27,333 |
| [Solar Hybrid TX 4 kVA](https://www.luminousindia.com/solar-inverters/solar-hybrid-tx-4kva) | ₹58,998 | ₹98,000 | about 40% | ₹14,750 | ₹24,500 |
| [Solar Hybrid TX 5 kVA](https://www.luminousindia.com/solar-inverters/solar-hybrid-tx-5kva) | ₹63,899 | ₹1,10,000 | about 42% | ₹12,780 | ₹22,000 |

Look at the two right-hand columns. MRP per kVA declines gently with size, which is what engineering economics predicts. Listed price per kVA collapses, from ₹24,600 to ₹12,780, and the absolute listed price is not even monotonic: the 4 kVA unit is the cheapest of the three. A buyer who priced a 3 kVA system off the 5 kVA listing would be out by more than ₹10,000, in the wrong direction.

Kits behave the same way. The [Waaree Radiance-Lite 5 kW hybrid kit](https://shop.waaree.com/waaree-radiance-lite-5-kw-hybrid-solar-kit-complete-rooftop-solar-solution-with-2-battery-battery-5-12-kwh/) listed at ₹4,12,999 against an MRP of ₹6,88,304.40 inclusive of taxes on the same date, again about 40% off. That kit includes modules, batteries, DCDB, ACDB and earthing, so it is not comparable to a bare inverter listing at all.

All five figures above are single-seller listings captured on 24 September 2026. Re-check the live pages on the day you compare, because discount depth on Indian solar listings changes without notice. Qbits itself sells quote-based through its dealer network, so there is no public price to set against these. The [Qbits quotation guide](/blog/why-inverter-manufacturers-quote-prices/) explains which model, scope, tax, delivery, and document fields an EPC should put in the request.

## The six datasheet rows that genuinely move a quote

Once capacity and topology are fixed, these six rows explain almost all remaining price difference between two inverters. Work through them before you accept that one quote is expensive.

1. **MPPT count.** Every maximum power point tracker is a separate DC input stage with its own inductor, current sensor, switch pole and tracking loop. Two trackers cost more than one, and they earn it on split or shaded roofs. The [dual versus single MPPT comparison](/blog/dual-mppt-vs-single-mppt/) sets out when the extra tracker pays back.
2. **Maximum DC input current per MPPT.** This is the row most buyers skip, and it dates an inverter fastest. Today's G12 modules run high current: the Waaree BiN-03-700 datasheet gives 18.31 A short-circuit current, the Adani ASB-M12-132-650 gives 18.85 A, and the Vikram VSMDH.66.680.05 gives 18.23 A. Older M10 modules sat far lower, with the Adani ASB-M10-144-580 at 13.95 A. An inverter offering 13 A per tracker cannot accept a modern string at full current, so headroom in the inductor, sensor and DC switch is worth paying for. Check your own string against the [string sizing calculator](/string-sizing-calculator/) before you sign.
3. **Enclosure protection rating.** IP66 adds gaskets, glands and potting over IP65, and it matters on an exposed wall. The Polycab Solar Catalogue 2025 lists single-phase units at IP65 and three-phase units from 5 kW upward at IP66. Havells Enviro GTi datasheets are mostly IP65. Qbits lists IP66 across every series in its published product data, including the hybrid range.
4. **Grid-support capability.** Reactive power control, power factor setting and export limiting need extra sensing and firmware, and they are often what a DISCOM asks for on larger connections. A unit with none of that is cheaper and may simply not be approvable at your size.
5. **Monitoring hardware.** Whether the communication stick is in the carton or sold as an accessory is a genuine price line. Qbits publishes monitoring apps on both stores, listed as io.aotai.qbit on Google Play and id 6745775491 on the App Store, but always confirm in writing whether the dongle ships with the unit.
6. **Warranty term and terms.** Term length is a priced reserve, and the wording matters as much as the number. Havells publishes a 10-year standard warranty on every Enviro GTi datasheet. The Polycab Solar Catalogue 2025 prints 7 years, with 5 years on the 350 kW UT series, while its own web store shows 5 and 8 year filters, which is a documentation question worth asking the brand directly. Qbits publishes an expandable warranty, and its public datasheets do not define the base term, remedy, registration deadline or exclusions, so obtain the current written warranty for the exact quoted model.
## What is not in the box, and where quotes actually differ

Two quotes for the same inverter model can differ by tens of thousands of rupees without either seller being dishonest. The difference sits in what each one included around the inverter. This is where a price comparison usually goes wrong.

Here is the standard list of items that live outside the carton.

| Item | Why it is needed | Who commonly leaves it out |
| --- | --- | --- |
| WiFi or GPRS dongle | Remote monitoring and fault alerts | Online listings, very often |
| DCDB with fuses and DC surge protection | Isolates and protects the array side | Inverter-only quotes |
| ACDB with MCB and AC surge protection | Protects the grid side and the switchgear | Inverter-only quotes |
| Earthing and equipotential bonding | Safety compliance under IS 3043:2018 | Low-cost installers |
| DC and AC cabling to the right size | Voltage drop and derating under IS 732:2019 | Quotes that say cabling as one line |
| Mounting structure and hardware | Holds the array and the inverter enclosure | Kit sellers who assume a flat roof |
| Labour, commissioning and testing | Sets parameters, verifies protection | Quotes priced as supply only |
| Net metering application and DISCOM fees | Legal export and meter change | Almost everyone, until asked |

Two of those deserve a note. Surge protection and earthing are the items most often cut to win a price, and they are the items that decide whether a claim survives. The net metering paperwork is the item most often assumed away, and its cost is mostly your time.

For the arithmetic that converts a mixed-scope quote into a comparable figure, the [solar inverter rate guide](/blog/solar-inverter-ka-rate/) walks through the four scope definitions and the rupees-per-watt method. Do that conversion before you compare anything on this page.

## GST is set by classification, not by the word solar

Do not apply one flat rate to every solar invoice. Notification 9/2025-Integrated Tax (Rate), dated 17 September 2025 and effective 22 September 2025, carries two relevant entries. Schedule I entry 437 covers renewable energy devices at 5%. Schedule II entry 477 covers static converters of heading 8504 at 18%. Which entry applies depends on the exact product and the nature of the supply, so the same box can appear at different rates on differently structured invoices.

That single fact can move a 5 kW inverter invoice by several thousand rupees. So ask for the rate per line, not one rate for the quote. Notification 78/2020-Central Tax, dated 15 October 2020, requires HSN digits on invoices, which gives you a clean way to ask: request the HSN code and rate against every item.

One more thing about tax and subsidy together. Section 15(2)(e) of the CGST Act excludes government subsidies from the value of supply, so PM Surya Ghar assistance does not reduce the GST charged on your invoice. The [GST and HSN explainer](/blog/gst-on-solar-inverters-2026/) works through the classification detail and separates modules, inverters, batteries and installation labour.

## PM Surya Ghar pays on modules, not on your inverter

This is the most useful subsidy fact for anyone comparing inverter quotes. The MNRE operational guidelines for the residential component state that central financial assistance is provided irrespective of inverter size and is computed on rated DC module capacity. Buying a more expensive inverter earns you nothing extra from the scheme.

Published slabs are ₹30,000 at 1 kW, ₹60,000 at 2 kW, and ₹78,000 at 3 kW and above, per PIB (2024), with special-category rates of ₹33,000 and ₹19,800. The formula behind them is 60% of benchmark cost up to 2 kW plus 40% of the additional cost for the 2 to 3 kW slice, capped at 3 kW. Dividing the published slabs by the published formula gives a benchmark of about ₹50,000 per kW for the first 2 kW and about ₹45,000 per kW for the third. That division is our arithmetic on the published formula, not a quoted MNRE figure, and it is useful only as a sanity check on a quote.

The guidelines also set a 15-day clock after DISCOM approval, a 30-day clock for grievances, and a 5-year comprehensive maintenance contract owed by registered vendors from commissioning. MNRE reported 26.21 lakh rooftop systems and 9.56 GW installed, benefiting 32.4 lakh households, as at 20 March 2026. The same March 2026 update waived the technical feasibility requirement, introduced auto load enhancement up to 10 kW, folded the net metering agreement into the National Portal application, and added collateral-free loans at repo rate plus 50 basis points, which was 5.75% per annum at that date and floats with the repo. A grievance call centre runs on 15555 in 12 languages.

Slabs and state practice change, so confirm the [current subsidy amount](/blog/pm-surya-ghar-subsidy-amount/) before you build it into a budget. Rules vary by state and by DISCOM, and no subsidy outcome is certain for any given applicant.

While on the scheme, correct one claim you will hear from sellers. There is no ALMM list for inverters. MNRE publishes List-I for solar modules and List-II for solar cells, with List-II in force from 1 June 2026. Qbits states that it is ALMM Phase III listed, and that is a brand statement, not a scheme requirement for inverters.

## Worked example: the 10-year cost of owning the cheaper inverter

The purchase price is one line in a 10-year cost. Warranty term, replacement cost and days offline are the other three, and they are the ones a comparison sheet never shows. Here is the arithmetic with every input visible, so you can substitute your own figures.

**Assumed inputs, not market data.** Two 5 kW single-phase on-grid inverters. Inverter A is quoted ₹42,000 with a 5-year warranty. Inverter B is quoted ₹58,000 with a 10-year warranty. Generation assumed at 4 kWh per kW per day, a common design assumption; use your own PVsyst or portal estimate instead. Tariff assumed at ₹8 per kWh; substitute your slab. Annual maintenance assumed at ₹3,000 from year 6. Inverter A assumed to need one out-of-warranty replacement in year 6 at 70% of its original price, and to be offline 28 days in total; Inverter B assumed offline 7 days.

Downtime loss uses one formula: rated kW multiplied by daily yield per kW, multiplied by days offline, multiplied by tariff. For Inverter A, that is 5 multiplied by 4 multiplied by 28 multiplied by 8, which equals ₹4,480. For Inverter B, 5 multiplied by 4 multiplied by 7 multiplied by 8 equals ₹1,120.

| Cost line | Inverter A | Inverter B |
| --- | --- | --- |
| Purchase price | ₹42,000 | ₹58,000 |
| Warranty term | 5 years | 10 years |
| Replacement in year 6 | ₹29,400 | nil |
| Maintenance, years 6 to 10 | ₹15,000 | ₹15,000 |
| Downtime loss | ₹4,480 | ₹1,120 |
| **10-year total** | **₹90,880** | **₹74,120** |

Inverter A saves ₹16,000 on day one and costs ₹16,760 more over 10 years. The swing does not come from the sticker. It comes from one out-of-warranty replacement and 21 extra days of a dead roof. Change the inputs and the conclusion can flip, which is exactly the point: run your own numbers rather than trusting either sticker. Ongoing service cost deserves its own line too, and the [inverter AMC cost guide](/blog/solar-inverter-amc-cost-india/) covers what a maintenance contract should include.

## Why the cheapest unit on the sheet usually costs the most

This is not brand loyalty. It is arithmetic about days, not parts. When an inverter stops, your loss is the generation you do not make while it is stopped, and that clock runs from the moment of failure until a working unit is energised again. The part itself is often the smallest number in the sequence.

Count the steps that clock has to pass through.

1. You notice the fault, which happens fast with monitoring and slowly without it.
2. Someone raises a claim and the brand approves or rejects it.
3. An approved claim triggers a dispatch, from wherever the nearest stock sits.
4. A technician who is authorised for that brand visits and swaps the unit.
5. The replacement is commissioned and its protection settings re-verified.

A low price usually means one or more of those steps is weaker. Shorter warranty means step 2 can end in a rejection. Thin service coverage means steps 3 and 4 take a week rather than a day. No bundled monitoring means step 1 can take a month, because nobody watches a meter daily. That is why service footprint and claim wording belong in a price comparison rather than in a separate conversation.

Ask the brand two concrete questions. Where is the nearest authorised service point, by name and road distance? What is the committed action once a claim is approved? Qbits, for example, and publishes 2100+ authorised service partners across 33 states and UTs. Whatever the brand, get the answer in writing, then treat a distant service point as a real cost in the comparison above.

Credit where it is due: several Indian brands publish long warranty terms openly. Havells prints 10 years on its Enviro GTi datasheets. Polycab prints 7 years in its 2025 catalogue. A published term you can read beats a verbal promise from any seller.

## How to normalise two quotes before you compare them

Do these nine steps in order. Most price disputes disappear by step 5, because the two quotes turn out to describe different products.

1. Force both quotes to the same scope: inverter only, inverter plus protection, or supplied and installed.
2. Convert each to rupees per watt of rated AC output, using rated watts from the datasheet rather than the kVA badge.
3. Confirm both match your sanctioned connection phase, and reject any that does not.
4. Confirm both match your topology need, on-grid or hybrid, with the backup circuits named.
5. Compare MPPT count, and compare maximum DC input current per tracker against your module's short-circuit current.
6. Compare enclosure protection rating against where the unit will actually be mounted.
7. Normalise the warranty to a common period, and price the uncovered years yourself at replacement cost.
8. Pull the GST line out per item with its HSN code, so tax is not hiding a price difference.
9. Add a downtime figure for each, using the nearest authorised service point distance as your input.

Then get these six things written on the quote, dated and signed. Verbal answers are not comparable, and they are not enforceable.

- Exact model number of the inverter, and of any battery, with quantities.
- Rated AC output in watts, maximum DC input current per MPPT, and enclosure protection rating.
- Whether the monitoring dongle is included, and whether app access carries any charge.
- Warranty term in years, what the term covers, and what voids it.
- The named nearest authorised service point, and the committed action after claim approval.
- Every line's GST rate and HSN code, plus a clear statement of what is excluded.

## The Bottom Line

Capacity sets the floor on a solar inverter price. Phase, topology, tracker count, DC current headroom, enclosure rating and warranty term set everything above it. Listed prices in Indian solar retail move with discount depth rather than with engineering, which is why the Luminous 3 kVA listed above its 5 kVA sibling on 24 September 2026. And the parts outside the carton, protection, earthing, cabling, labour and paperwork, are where two quotes for the identical model end up far apart.

Three things to do next:

- Write down your sanctioned phase, your module's short-circuit current and your backup requirement, then reject any quote whose datasheet does not match all three.
- Run the 10-year calculation above with your own tariff, your own yield estimate and the real road distance to each brand's nearest service point.
- Compare the [on-grid inverter range](/on-grid-inverter/) against your string layout, then [request a model-specific written quote](/contact-us/) with scope, warranty terms and every GST line itemised.
