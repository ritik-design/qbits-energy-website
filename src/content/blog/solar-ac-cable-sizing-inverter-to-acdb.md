---
title: "AC Cable Sizing from Inverter to ACDB, with Worked Examples"
seoTitle: "Solar AC Cable Size Calculation: Inverter to ACDB"
excerpt: "How to size the AC cable from a solar inverter to the ACDB or transformer: current, derating, voltage drop, fault withstand and breaker fit, with three worked examples."
description: "Solar AC cable size calculation for EPC engineers: current, derating, voltage drop and fault withstand, with 25 kW, 100 kW and 320 kW examples."
category: "EPC"
date: 2026-10-30
readTime: "22 min"
image: "/og/blog-solar-ac-cable-sizing-inverter-to-acdb.webp"
author: "Keyur Rakholiya"
keywords:
  - solar ac cable size calculation
  - ac cable size for solar inverter
  - inverter to acdb cable sizing
  - voltage drop solar ac cable
  - aluminium vs copper solar ac cable
  - xlpe armoured cable solar inverter
  - transformer lv side cable solar
relatedSlugs:
  - fifteen-hundred-volt-string-inverter-eight-hundred-vac
  - how-many-inverters-for-hundred-kw-to-one-mw-rooftop
  - solar-inverter-rfq-template-epc
  - ceig-inspection-solar-plant-inverter-checks
  - solar-inverter-summer-derating-india
  - string-vs-central-inverter-india
---

A solar AC cable size calculation for the run from inverter to ACDB (the AC distribution board) comes down to four checks, and the smallest cable that passes all four is the answer. The cable must carry the inverter's maximum output current after derating. It must keep voltage drop inside your limit over the run. It must survive a fault until the breaker clears it. And a breaker rated between the load current and the cable's derated rating must protect it.

At 415 V on a long run, voltage drop usually decides the size. At 800 V, current capacity usually does. The three worked examples below show both.

Qbits sells inverters, not cable, and publishes this post. The datasheet figures are Qbits'. The cable figures come from a cable maker's catalogue, so replace them with the tables of the cable you actually buy.

| Illustrative case | Run | Governing check | Cable that passes (illustrative) |
| --- | --- | --- | --- |
| 25 kW unit, 415 V | 60 m, tray in air | Voltage drop (a 10 mm2 copper cable carries the current but loses 2.4%) | Copper, 4 core, 16 mm2: 1.51% drop |
| 100 kW unit, 415 V | 120 m, buried | Current after grouping, then voltage drop | Copper 4 core 120 mm2 (1.56% drop) or aluminium 4 core 185 mm2 (1.80% drop) |
| 320 kW unit, 800 V | 100 m, tray in air | Current after derating | Aluminium, 4 core, 300 mm2: 0.83% drop |

## What this post is built on

- **Inverter data:** the public Qbits datasheets for the QB-20/23/25/28/30KTLC, the QB-70/75/80/90/100/110KTLC-Pro and the QB-225K-EHV / QB-320K-EHV (PDFs on this site, each carrying a creation date of 25 July 2025 in its metadata, with no revision date printed). We read the printed output current, voltage and power factor fields.
- **Cable data:** the Polycab LT XLPE cable catalogue (file title "FINAL_LT Cable Catalog_V9_ORD 10054", created 18 August 2023): current ratings, DC resistance, short-circuit ratings and temperature rating factors for 650/1100 V XLPE cables to IS 7098 Part 1. For grouping and depth factors we used the KEI Technical Handbook (file dated June 2022), Table 3 and Table 4 of its XLPE rating factors. The two makers print slightly different factors, so we say which one each number came from.
- **Voltage drop limits:** the ANERT (Kerala) technical specification for on-grid solar plants and the MANIREDA (Manipur) rooftop solar guideline, both read from their own PDFs.
- **What we did not read:** the BIS standards IS 1554 and IS 7098 themselves, and IEC 60364-5-52. We know the standards only through the makers' catalogues and the IEC contents page. The section at the end lists every limit of that kind.

All cable lengths, ambient temperatures, grouping factors and plant sizes below are assumptions we chose to show the method. They are not Qbits project results.

## Step 1: Design current from the inverter

Three-phase line current is power divided by (root 3 x voltage x power factor).

| Unit (datasheet) | Rated output | Maximum output | Maximum output current printed | Rated grid voltage printed | Rated current at 415 V, PF 1 (calculated) |
| --- | --- | --- | --- | --- | --- |
| QB-25KTLC | 25 kW | 27.5 kVA | 41 A | 400 V | 34.8 A |
| QB-100KTLC-Pro | 100 kW | 110 kVA | 160 A | 400 V | 139.1 A |
| QB-320K-EHV | 320 kW | 352 kVA | 254 A | 800 V | 230.9 A at 800 V |

Use the printed maximum output current as the design current, not the rated kW figure. The maximum is the number the cable and the breaker will actually meet. Two reasons it is higher than the calculated rated current:

- The datasheet's maximum output is in kVA and above the rated kW (27.5 kVA against 25 kW).
- The datasheet's currents are quoted at 400 V. At 415 V the same kVA draws about 3.6% less current, so using the printed figure is slightly cautious on a 415 V system. The grid voltage range printed is 310 to 480 Vac on the 400 V models and 640 to 920 Vac on the 800 V model, and an inverter at the low end of that range pushes more current for the same power.

The datasheets print a power factor above 0.99, adjustable from 0.8 capacitive to 0.8 inductive. If your DISCOM asks for reactive power, the kVA, and so the current, rises. For the 25 kW unit at 415 V, 0.95 power factor gives 36.6 A against 34.8 A at unity. Work out the current at the kVA your reactive-power requirement gives, and design to the larger of that and the printed maximum.

The [100 kW to 1 MW inverter sizing post](/blog/how-many-inverters-for-hundred-kw-to-one-mw-rooftop/) works the same current at 415 V for plant-level totals. The [1500 V string inverter guide](/blog/fifteen-hundred-volt-string-inverter-eight-hundred-vac/) compares 800 V and 400 V currents and drop for one fixed cable. This post does the sizing method end to end.

## Step 2: Derate the cable

A catalogue rating is for stated conditions. For the Polycab catalogue they are: 90 C conductor temperature, 40 C ambient air, 30 C ground, soil thermal resistivity 1.5 K.m/W and 750 mm burial depth. Its tables hold "for one circuit in a three phase system", and it says grouping factors must be applied for more.

The rating you can use is:

**Iz = tabulated rating x kT (temperature) x kG (grouping) x kD (depth, if buried)**

| Condition | Factor | Source |
| --- | --- | --- |
| Air ambient 45 C (base 40 C) | 0.95 | Polycab LT catalogue |
| Air ambient 50 C | 0.89 (KEI prints 0.90) | Polycab; KEI Technical Handbook |
| Ground 35 C (base 30 C) | 0.96 | Polycab LT catalogue |
| Ground 40 C | 0.91 | Polycab LT catalogue |
| 2 cables laid in ground, touching | 0.79 | KEI Technical Handbook, Table 3 |
| 3 cables, touching | 0.69 | KEI Technical Handbook, Table 3 |
| 4 cables, touching | 0.62 | KEI Technical Handbook, Table 3 |
| 2 cables, 15 cm apart | 0.82 | KEI Technical Handbook, Table 3 |
| Burial 90 cm instead of 75 cm, size 25 to 300 mm2 | 0.98 | KEI Technical Handbook, Table 4 |

Three cautions.

- **Do not mix makers' tables.** The two catalogues differ in the second decimal (ground at 25 C is 1.04 in Polycab and 1.03 in KEI, air at 50 C is 0.89 and 0.90). Take the rating and the factors from the same catalogue, ideally from the cable you are buying.
- **Tray grouping is the factor to read yourself.** The grouping values above are for cables laid direct in ground. Cables on a tray, in a trench with covers or in conduit have their own reduction factors in the cable maker's table or in IEC 60364-5-52. The examples below use 0.80 for cables touching on a tray, which is a placeholder we chose, not a table value.
- **The inverter's own temperature range is not the cable's ambient.** The datasheets print operating ranges for the inverter. A plant room, a roof beside a mall's cooling towers or a tray in sun has its own air temperature, and you must record it. The [derating guide](/blog/solar-inverter-summer-derating-india/) lists what to ask the inverter vendor for at your design ambient.

**The 1.25 factor.** Many EPC and owner specifications require the cable to carry 1.25 times the inverter's maximum continuous output current. We did not find a clause that requires it in the cable catalogues above or in the Indian rooftop specifications we read. Treat it as specification practice: apply it when your owner's specification says so, and say in your calculation sheet which basis you used. The examples show both.

## Step 3: Voltage drop

Voltage drop in volts is root 3 x I x L x (mV per A per m) divided by 1000, and the percentage is that over the nominal line voltage. The mV per A per m figure comes from the cable maker's table. Polycab prints it only for aluminium four core cable (its figure includes reactance at the larger sizes); for copper we calculated it from the printed DC resistance at 20 C, corrected to 90 C (resistivity coefficient 0.00393 per kelvin), which at unity power factor is resistance only.

**The limit.** The two Indian agency specifications we read both set the same figure for this exact segment:

- ANERT, clause 13.8: the total voltage drop on the cable segments from the solar grid inverter to the building distribution board shall not exceed 2.0%.
- MANIREDA, item (t) of its cable requirements: the same wording and the same 2.0%.

Both are state agency rooftop specifications. For a C&I or utility plant, the limit is whatever your owner's specification says. Tighter figures such as 1% appear in engineering blogs and some owner specifications, but we found no Indian standard clause behind them. IEC 60364-5-52 has a clause 525 and an informative Annex G on voltage drop in consumers' installations; the contents page confirms they exist, but we could not read the percentages, so we do not quote them.

Use the printed maximum current for the drop calculation if your specification measures drop at maximum, and the rated current if it measures at rated. State which. Both are shown for example 1 below.

| mV/A/m used | 16 mm2 | 25 mm2 | 70 mm2 | 95 mm2 | 185 mm2 | 240 mm2 | 300 mm2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Aluminium, Polycab printed | 4.24 | 2.67 | 0.99 | 0.72 | 0.39 | 0.31 | 0.26 |
| Copper, calculated from printed resistance | 2.54 | 1.61 | 0.59 | 0.43 | 0.22 | 0.17 | 0.13 |

The copper row is resistive only, so it understates the drop a little at the larger sizes. Where the plant runs at an inductive or capacitive power factor, add the reactance term. Use your cable maker's own copper table if it prints mV/A/m; the Polycab pages we used do not.

## Step 4: Short-circuit withstand

A cable must not be damaged before the protective device clears a fault. The catalogue gives a one-second rating and the relation Ish = K x A / root t. For XLPE cable with a 90 C start and a 250 C limit, the Polycab table gives these one-second ratings, which imply K as shown:

| Conductor, XLPE | Printed one-second rating at 25 mm2 | Implied K (A per mm2 for 1 s) |
| --- | --- | --- |
| Copper | 3.58 kA | 143 |
| Aluminium | 2.36 kA | 94.5 |

The withstand for a size is (K x A) squared in A2s, and your breaker's let-through energy at the prospective fault level, read from its own datasheet, must be below it. Do not assume the inverter is the fault source: the datasheets list "short circuit protection" and "output over current protection" as features but print no fault current contribution, so ask for it in writing (see the checklist).

## Solar AC cable size calculation: the copy-ready table

Copy this into your calculation sheet, one column per circuit. The example column is the 25 kW case below.

| Step | Formula | Example 1 (25 kW, 60 m) |
| --- | --- | --- |
| 1. Design current Ib | Datasheet maximum output current, or P / (root 3 x V x PF) | 41 A |
| 2. Margin (if specified) | Ib x 1.25 | 51.25 A |
| 3. Combined factor k | kT x kG x kD | 0.95 x 0.80 x 1.0 = 0.76 |
| 4. Required tabulated rating | Step 2 / Step 3 | 67.4 A |
| 5. Trial size from the maker's table | Rating at or above step 4 | Copper 4 core, 16 mm2 (89 A in air) |
| 6. Derated capacity Iz | Table rating x k | 67.6 A |
| 7. Voltage drop | root 3 x I x L x mV/A/m / 1000 | 6.25 V |
| 8. Drop as % and check | Step 7 / V x 100, against your limit | 1.51% against 2.0%: pass |
| 9. Fault withstand | (K x A) squared against breaker let-through | (143 x 16) squared = 5.2 million A2s |
| 10. Breaker rating In | Ib or step 2 at or below In at or below Iz | 51.25 A at or below 63 A at or below 67.6 A |
| 11. Loss at rated current | 3 x I squared x R x L | about 0.32 kW at 34.8 A |

If a step fails, go up one size and repeat from step 5.

Want a second pair of eyes on a single line diagram with your inverter count, run lengths and ambient? [Send the project details to Qbits](/contact-us/) and ask for the datasheet figures for the models you are considering. Quotes are per model and quantity.

## Worked example 1: 25 kW unit, 415 V, 60 m, tray in air (illustrative)

Assumptions: Qbits QB-25KTLC datasheet values, copper XLPE armoured four core cable, 45 C air on the tray, two circuits touching on the tray (placeholder factor 0.80), limit 2.0%, 1.25 margin applied.

| Size (Cu, 4 core) | Table rating in air | Derated (x 0.76) | Meets 51.25 A? | Drop at 41 A | Pass? |
| --- | --- | --- | --- | --- | --- |
| 10 mm2 | 70 A | 53.2 A | Yes | 9.94 V, 2.40% | No, drop |
| 16 mm2 | 89 A | 67.6 A | Yes | 6.25 V, 1.51% | Yes |
| 25 mm2 | 119 A | 90.4 A | Yes | 3.95 V, 0.95% | Yes, larger than needed |

The 10 mm2 cable carries the current but fails the drop limit, even at the rated 34.8 A (2.03%). So voltage drop picks 16 mm2.

- **Fault check:** (143 x 16) squared is about 5.2 million A2s. Suppose the ACDB has a prospective fault of 10 kA and the breaker clears in 0.1 s. Unlimited, that is 10 million A2s, which a 16 mm2 copper cable cannot take. Either the breaker's let-through energy at 10 kA is below 5.2 million A2s (read it from the datasheet), or you go to 25 mm2, which can take about 12.8 million A2s.
- **Breaker:** a 63 A breaker sits between 51.25 A and 67.6 A. Without the 1.25 margin you could use 50 A. The datasheet prints no recommended breaker or cable size, so read it from the user manual or ask Qbits.
- **Terminal:** the datasheet prints no AC terminal range. Read the terminal range from the datasheet or manual before ordering the lugs, and check that 16 mm2 four core armoured cable fits the gland plate.

## Worked example 2: 100 kW unit, 415 V, 120 m, buried (illustrative)

Assumptions: QB-100KTLC-Pro datasheet values (160 A printed), 35 C ground, burial at the 750 mm base depth, two such circuits laid touching in the same trench (factor 0.79), 1.25 margin, limit 2.0%. Combined factor 0.96 x 0.79 = 0.758. Required table rating 200 / 0.758 = 263.7 A.

| Size, 4 core XLPE armoured | Table rating, buried | Derated | Meets 200 A? | Drop at 160 A over 120 m | Pass? |
| --- | --- | --- | --- | --- | --- |
| Cu 95 mm2 | 254 A | 192.6 A | No | 8.18 V, 1.97% | No, current |
| Cu 120 mm2 | 287 A | 217.7 A | Yes | 6.49 V, 1.56% | Yes |
| Al 150 mm2 | 249 A | 188.8 A | No | 9.22 V, 2.22% | No, current and drop |
| Al 185 mm2 | 282 A | 213.9 A | Yes | 7.49 V, 1.80% | Yes |
| Al 240 mm2 | 327 A | 248.0 A | Yes | 5.95 V, 1.43% | Yes, with margin on a tighter limit |

Here the current check, after grouping, rules out copper 95 mm2 (192.6 A is below 200 A) and aluminium 150 mm2, and the drop check then separates what is left. Copper 120 mm2 passes with 1.56%, aluminium 185 mm2 passes with 1.80%, both against 2.0%. If your specification asks for 1.5%, take copper 150 mm2 (1.27%) or aluminium 240 mm2.

- **Breaker:** with the margin, 200 A sits against Iz 213.9 A (aluminium 185 mm2) or 217.7 A (copper 120 mm2). Without it, 160 A.
- **Fault:** (94.5 x 185) squared is about 306 million A2s, so aluminium 185 mm2 takes 17.5 kA for one second, in line with the Polycab table. A 10 kA fault for 0.1 s is far inside it.
- **Terminal reality:** a 185 mm2 conductor may not fit the inverter's terminals. A practical alternative for the aluminium option is two parallel 95 mm2 cables per phase into a termination box. Parallel cables in the same trench are a group of four, factor 0.62, so the derated capacity is 197 A x 2 x 0.96 x 0.62 = 234.5 A, above 200 A. The drop is 1.67%. This only works if both cables are the same size, material and length, and the box splits current equally.

## Worked example 3: 320 kW unit at 800 V, 100 m, tray in air (illustrative)

Assumptions: QB-320K-EHV datasheet values (800 V rated, 352 kVA maximum, 254 A printed), 45 C air on the tray, three circuits touching (placeholder 0.80), combined factor 0.95 x 0.80 = 0.76, 1.25 margin, so 317.5 A to carry and a required table rating of 417.8 A. The datasheet's inverter operating range is "up to 60 C", which says nothing about the cable's air temperature.

| Size, 4 core Al XLPE | Table rating in air | Derated | Meets 317.5 A? | Meets 254 A (no margin)? | Drop at 254 A | Pass? |
| --- | --- | --- | --- | --- | --- | --- |
| 185 mm2 | 329 A | 250.0 A | No | No | 9.91 V, 1.24% | No, current |
| 240 mm2 | 392 A | 297.9 A | No | Yes | 7.87 V, 0.98% | Only without margin |
| 300 mm2 | 452 A | 343.5 A | Yes | Yes | 6.60 V, 0.83% | Yes |
| 400 mm2 | 526 A | 399.8 A | Yes | Yes | 5.33 V, 0.67% | Yes, larger than needed |

Current governs here. The drop is below 1.3% at every size that carries the current, because the same volts lost is a smaller share of 800 V. The [1500 V string inverter guide](/blog/fifteen-hundred-volt-string-inverter-eight-hundred-vac/) shows the same effect for one fixed cable.

- **Voltage rating:** the Polycab catalogue lists these cables for rated voltage up to and including 1100 V (650/1100 V). At 800 V line voltage the phase to earth voltage is 462 V, and at the top of the datasheet's range, 920 Vac, it is 531 V. Both are under 650 V. Ask the cable supplier to confirm the type test voltage and put it in the RFQ.
- **Breaker:** with the margin, In must be at least 317.5 A and at most 343.5 A, so a 320 A device if your breaker maker offers it at 800 V. Check the breaker's rated operational voltage covers 800 V, as the 800 Vac post explains.
- **Fault:** the Polycab one-second rating for 300 mm2 aluminium XLPE is 28.35 kA. If the illustrative 30 kA fault from the 2.5 MVA transformer example in the 800 Vac post reached this cable, the allowed time is (28.35 / 30) squared, about 0.89 s. The breaker must clear sooner than that.
- **Above 650 V:** the plant-side duties for an 800 V circuit are in the [800 Vac post](/blog/fifteen-hundred-volt-string-inverter-eight-hundred-vac/). The unit itself is on the [QB 225/320K-EHV page](/our-products/QB-225-320K-EHV/).

## Aluminium or copper

| | Copper | Aluminium |
| --- | --- | --- |
| DC resistance at 20 C, 4 core, 185 mm2 (Polycab) | 0.0991 ohm/km | 0.164 ohm/km |
| Table rating, buried, 185 mm2 | 362 A | 282 A |
| Table rating in air, 185 mm2 | 422 A | 329 A |
| Short-circuit constant K | 143 | 94.5 |

For the same area, aluminium carries about 78% of copper's current in ground (282 / 362) and its resistance is about 1.65 times higher, so you move up one or two sizes. ANERT clause 13.5 allows XLPE aluminium cable on the AC side above 25 kWp, with a minimum area of 10 mm2, and calls for copper below that. Many owners restrict aluminium in other ways, so read yours. Practice points, not standard clauses: use lugs rated for aluminium, tighten as the lug maker says, and plan for the heavier gland plate and larger bending radius.

The [AC cable glossary entry](/glossary/ac-cable/) lists the Indian cable standards by type, and the PVC and XLPE standards named in the Polycab catalogue are IS 1554 Part 1 and IS 7098 Part 1.

## Parallel runs, neutral and earth

- **Parallel runs:** use cables of the same size, material and length, and terminate them on a common busbar or termination box, not one lug stack. Count each cable in the grouping factor. When the largest single-run size is hard to handle, parallel is how designers keep to 185 mm2 or 240 mm2.
- **Neutral:** whether a given inverter needs a neutral is a datasheet or manual question, and the datasheets we read do not state it. If it does not, a three core cable plus an earth conductor can replace the four core. Polycab lists 3.5 core cable for a reduced neutral. We do not size the neutral here.
- **Earth:** size the earth conductor from your earthing design. The earthing design also sets the armour bonding.

## Transformer LV side and the cable bus

Where several inverters feed one transformer winding, the LV current is the sum of their maximum output currents, not the sum of the kW. The datasheet gives the ceiling, which your transformer's LV rated current must cover.

| Plant (illustrative) | Sum of printed maximum output current | Transformer LV rated current for comparison |
| --- | --- | --- |
| Five 100 kW units at 400 V rating | 800 A (about 765 A at 415 V) | 630 kVA at 415 V: 876 A |
| Ten 100 kW units | 1,600 A | 1,250 kVA at 415 V: 1,739 A |
| Six 320 kW units at 800 V | 1,524 A | 2,000 kVA at 800 V: 1,443 A, so not enough for the full 352 kVA each; 2,500 kVA at 800 V: 1,804 A |

The last row is why the transformer is sized in kVA from the units' maximum outputs and the reactive power requirement, not from the 1.92 MW AC capacity. A transformer that is short against the sum of maximum currents will not overload in practice if the plant never runs all units at their ceiling together, but that is a decision to take with the transformer vendor. The [string versus central inverter post](/blog/string-vs-central-inverter-india/) covers the layout choices that set how many units share a winding.

At 800 to 1,500 A on a common route, one cable per phase is not an option. Rather than counting five or more parallel multicore cables in a hot tray, most designers move to busway or single-core cables in a managed layout. The cable maker's rating tables for single-core cable and the busway maker's tables, with your fault level, are the next step. We have not sized that case here.

## Losses over the length

Cable loss is 3 x I squared x R x L. The same figures show the cost of going one size down.

| Example 2, per 100 kW unit at 139.1 A rated current | R at 90 C, 120 m | Loss | Share of 100 kW |
| --- | --- | --- | --- |
| Copper 120 mm2 | 0.0234 ohm per phase | 1.36 kW | 1.36% |
| Aluminium 185 mm2 | 0.0252 ohm per phase | 1.47 kW | 1.47% |
| Aluminium 240 mm2 | 0.0192 ohm per phase | 1.12 kW | 1.12% |
| Two parallel Al 95 mm2 | 0.0246 ohm per phase | 1.43 kW | 1.43% |

At rated current the loss share is close to the voltage drop share. For energy, loss follows the square of current, so an inverter spending most hours below rating loses less than the table shows. At an assumed 1,600 full-load-equivalent hours a year (a figure we chose), the loss energy is no more than 1.47 kW x 1,600 h = 2,344 kWh for aluminium 185 mm2, and no more than 1,787 kWh for 240 mm2, a difference of up to about 557 kWh a year. Multiply by your tariff and by the cable price difference to see whether the larger size pays back. We have no cable prices to quote.

## What to specify in the RFQ

To the inverter vendor:

- Maximum continuous AC output current at each rated voltage, from the datasheet page.
- AC terminal type and range (area, material, lug type), gland plate size and cable entry. The datasheets we read do not print this.
- Recommended upstream breaker rating and cable size from the user manual, with the manual page.
- Whether a neutral is required, and the earth conductor size.
- Maximum fault current contribution of the inverter and its duration. The datasheets we read do not print it.
- Power factor and reactive power range, so cable current is sized at the kVA you will run.
- Operating temperature range with the derating curve for your design ambient, not the nameplate range.

To the cable supplier:

- Conductor material, area, number of cores, voltage grade (650/1100 V) and standard (IS 7098 Part 1 for XLPE).
- Armour and sheath type for the laying method, with the flame retardance grade your specification requires.
- The maker's current rating table with its base conditions, plus the grouping, temperature and depth factors for your laying method, all from the same catalogue edition.
- One-second short-circuit rating and the K value.
- Voltage drop table in mV/A/m, copper or aluminium as quoted.

Your calculation sheet should show Ib, margin basis, every factor with its source, drop against limit, fault withstand against breaker let-through, and In between Ib and Iz. The [inverter RFQ template](/blog/solar-inverter-rfq-template-epc/) shows the same "value plus source page" format for the inverter itself, and the [CEIG inspection post](/blog/ceig-inspection-solar-plant-inverter-checks/) covers what an inspector may look at on the inverter side.

## What this post could not check

- **BIS standards:** IS 1554 Part 1, IS 7098 Part 1 and IS 3961 Part 6 are known to us only through the Polycab catalogue's references. We did not open them.
- **IEC 60364-5-52:** only the contents page of a sample was readable. We did not read the Annex G voltage drop table or the tray and bunching factors, so the 0.80 tray factor in the examples is a placeholder.
- **The 1.25 factor:** we found no clause for it in the sources above. It appears here as specification practice.
- **Voltage drop limit:** the 2.0% figure is from two state agency rooftop specifications. We did not find a central standard or a CEA clause for the AC segment, and your owner's value governs.
- **Copper mV/A/m and resistance:** calculated from printed resistance, resistive only. We took copper resistance from the Polycab unarmoured four core copper table. The armoured four core copper table in the same catalogue prints resistance values that are those of aluminium, against the same copper current ratings, so confirm the copper resistance with your cable maker.
- **Cable prices and availability:** none given. Cable sizes above 240 mm2 aluminium four core, and single-core ratings, were not checked.
- **Qbits data:** the datasheets print no AC terminal range, recommended breaker, neutral requirement or fault current contribution. The 800 V model's temperature is stated only as "up to 60 C". No Qbits project result is implied by any figure here.

## Next step

Pick the design current from the datasheet, fix your ambient, grouping and voltage drop basis in writing, and run the eleven steps for each circuit. For the three cases above, the sizes that passed were copper 16 mm2, copper 120 mm2 or aluminium 185 mm2, and aluminium 300 mm2, and different checks decided each. Send the inverter count, run lengths, laying method and ambient to Qbits through [the project contact page](/contact-us/) for the matching datasheet values and a quote per model and quantity, and keep the datasheets for your shortlisted models beside your calculation sheet.
