---
title: "Peak vs Weighted Inverter Efficiency: What to Specify in a Tender"
seoTitle: "Peak vs Weighted Inverter Efficiency for Tenders"
excerpt: "A tender-ready method for separating maximum, weighted, MPPT, and overall inverter efficiency, with evidence requirements and acceptance rules."
description: "Learn how to specify peak, weighted, conversion, and MPPT inverter efficiency in a tender without comparing unlike values or accepting family-level claims."
category: "EPC"
date: 2026-09-26
readTime: "12 min"
image: "/og/blog-peak-vs-weighted-inverter-efficiency.webp"
author: "Keyur Rakholiya"
keywords:
  - "peak vs weighted inverter efficiency"
  - "inverter efficiency tender specification"
  - "maximum inverter efficiency"
  - "European efficiency inverter"
  - "MPPT efficiency IEC 62891"
  - "IEC 61683 inverter efficiency"
relatedSlugs:
  - how-to-read-solar-inverter-datasheets
  - inverter-suppliers-india
  - solar-inverter-efficiency
faqs:
  - q: "Should a solar tender specify peak or weighted inverter efficiency?"
    a: "Specify both only when both are relevant, and label each one. Maximum or peak efficiency is the best conversion point reported for the exact model. A weighted value combines performance at several load points under a named method. Never let a bidder answer a weighted-efficiency requirement with a maximum-efficiency figure."
  - q: "Is European efficiency the same as MPPT efficiency?"
    a: "No. European efficiency is a weighted conversion-efficiency metric. MPPT efficiency measures how well the tracker captures the available maximum power from the PV source. They test different functions and need separate tender rows."
  - q: "Can a tender compare maximum efficiency from one inverter with European efficiency from another?"
    a: "No. The labels, test conditions, and calculation methods differ. Compare the same metric under the same named method and compatible conditions. Otherwise mark the comparison as not established and request clarification."
  - q: "Does an IEC standard listed on a datasheet prove the offered model passed the test?"
    a: "Not by itself. A standards list is an index, not necessarily the tender evidence. If the tender requires proof, ask for the exact-model test report, its issuing laboratory, report number, date, standard edition, test conditions, and model scope."
  - q: "What if a bidder publishes only maximum inverter efficiency?"
    a: "Record the maximum value only in the maximum-efficiency row. Mark weighted efficiency, MPPT efficiency, or the efficiency curve as clarification required if those items are mandatory. Do not calculate or infer missing values from the headline figure."
---

An inverter-efficiency clause should not say only "minimum 98 percent efficiency". That wording leaves the bidder free to answer with maximum conversion efficiency, a weighted figure, an MPPT figure, or a value from another model in the same family.

A usable tender names the exact metric, test method, operating conditions, evidence, and pass rule. Maximum conversion efficiency, weighted conversion efficiency, static MPPT efficiency, dynamic MPPT efficiency, and overall efficiency are different quantities. Put them on separate rows.

> **Tender rule in one minute**
>
> - Identify the offered inverter by manufacturer and exact model.
> - Keep maximum and weighted conversion efficiency separate.
> - Name the weighting or test method. "Weighted efficiency" alone is incomplete.
> - Treat conversion efficiency and MPPT efficiency as different tests.
> - Require the DC voltage, load points, and other test conditions needed for comparison.
> - Ask for exact-model evidence when the tender requires a test report.
> - Mark missing evidence as clarification or deviation. Never fill the gap from a family brochure.

## The five efficiency terms belong on different tender rows

The word *efficiency* is too broad for a compliance matrix. Start by deciding which quantity the project actually needs.

| Metric | What it answers | Tender use | What it does not establish |
| --- | --- | --- | --- |
| Maximum or peak conversion efficiency | What is the highest reported DC-to-AC conversion point for the exact model? | Initial technical comparison | Performance across the operating range or annual energy |
| Conversion-efficiency curve | How does conversion change with loading and DC voltage? | Engineering comparison at expected operating points | MPPT tracking performance or site availability |
| Weighted conversion efficiency | What single value results when defined load-point efficiencies receive defined weights? | Like-for-like bid comparison under one named method | A universal India-specific annual efficiency |
| Static MPPT efficiency | How closely does the tracker use the available maximum power under steady conditions? | Tracker-performance requirement where relevant | Response to changing irradiance |
| Dynamic MPPT efficiency | How well does the tracker respond while the PV source changes? | Projects where changing irradiance is material | DC-to-AC conversion efficiency |

**Maximum conversion efficiency** is the highest reported conversion value under stated conditions. The corresponding load and DC voltage matter. If those conditions are absent, the decimal is difficult to compare even when two datasheets use the same label.

**Weighted conversion efficiency** is calculated from several conversion-efficiency points using a declared weighting method. A datasheet may call it European efficiency or use another named convention. The method matters because different load points and weights can produce different results from the same inverter.

**MPPT efficiency** belongs to the tracker rather than the power-conversion stage. [IEC 62891:2020](https://webstore.iec.ch/en/publication/28105) covers measurement of static and dynamic Maximum Power Point Tracking efficiency for grid-connected PV inverters. Its IEC abstract also keeps dynamic MPPT efficiency separate and explains that overall efficiency can be calculated from static MPPT efficiency and steady-state conversion efficiency.

**Conversion efficiency** has its own measurement basis. [IEC 61683:1999](https://webstore.iec.ch/en/publication/5720) provides guidance for measuring the efficiency of power conditioners used in stand-alone and utility-interactive PV systems. A tender should cite the standard and edition selected by its technical authority rather than writing "as per latest IEC" and leaving the controlling edition uncertain.

## Why a minimum percentage is not enough

Suppose one bid says "98.4 percent maximum efficiency" and another says "97.8 percent European efficiency". The first number may be higher, but the tender has not established that the first inverter performs better. The values answer different questions.

The same problem appears when bids use the same label without the same conditions:

- one value is reported at a favourable DC input voltage and another at a different voltage;
- one figure covers the exact offered SKU and another says "up to" for a family;
- one bidder provides a datasheet value while another provides a controlled laboratory report;
- one curve shows conversion efficiency and another shows an undefined overall efficiency;
- one offer gives a static MPPT value while another gives dynamic MPPT performance.

In each case, the correct compliance status is not the more attractive number. It is **not comparable** or **clarification required** until the basis is aligned.

## Build the efficiency schedule before issuing the tender

Do not wait for bids to reveal how each supplier describes efficiency. Put the required fields into the tender schedule first.

| Tender field | What the bidder should enter | Acceptance check |
| --- | --- | --- |
| Manufacturer and exact model | Full model designation | Matches quotation, datasheet, BOQ, and report |
| Maximum conversion efficiency | Value and unit | Labelled maximum, exact model, conditions identified |
| Weighted conversion efficiency | Value, named method, and unit | Same method required from every bidder |
| DC test voltage or voltage set | Value or values used | Matches the tender method and submitted evidence |
| Load points | Tested fractions of rated output | Complete for the selected method |
| Static MPPT efficiency | Value and method, if required | Kept separate from conversion efficiency |
| Dynamic MPPT efficiency | Value and method, if required | Reported separately from static MPPT efficiency |
| Efficiency curve | Controlled graph or table | Axes, voltage, temperature, and model are identifiable |
| Evidence | File, report number, page, laboratory, date | Exact offered model is inside the stated scope |
| Deviation | Yes, no, or clarification required | No blank cells treated as compliance |

If the owner wants a minimum threshold, place it in the correct row. For example, a minimum maximum conversion-efficiency requirement does not automatically create a minimum weighted-efficiency requirement. Each needs its own value and comparison operator.

The project engineer should also decide whether an efficiency curve is more useful than another decimal in the headline figure. A curve at the tender's relevant DC voltages and loading range exposes the operating region that a single peak cannot show.

## Use clause wording that survives bid comparison

The following is a drafting pattern, not a universal project specification. The owner's engineer still has to select the applicable standard editions, thresholds, test voltages, and evidence level.

> The bidder shall identify the inverter manufacturer and exact offered model. Maximum conversion efficiency and weighted conversion efficiency shall be declared separately. Each value shall state its measurement or calculation method, applicable standard and edition, DC test voltage or voltage set, load conditions, and exact-model scope. Where required in the technical schedule, static and dynamic MPPT efficiency shall be declared separately using the specified method. Values marked "up to", values for another model, and values without the required conditions shall be recorded as clarification required rather than compliant. The bidder shall provide the datasheet and the exact-model test evidence listed in the document schedule.

This clause does four jobs. It defines the model boundary, prevents metric substitution, makes the conditions visible, and gives the evaluator a defensible status for incomplete evidence.

## Decide what evidence the tender actually requires

A datasheet is useful for product screening. It may not satisfy a contractual requirement for a type-test report, independent test report, or witnessed acceptance test.

Use an evidence ladder:

1. **Exact-model controlled test report:** strongest when the tender requires measured proof. Check report number, date, standard edition, laboratory, conditions, and model scope.
2. **Exact-model manufacturer datasheet:** useful for declared values. Record the document revision or retrieval date.
3. **Family datasheet with a model-specific column:** acceptable only for values clearly assigned to the offered SKU.
4. **Family headline or sales presentation:** discovery material, not model-level compliance evidence.

A standard number printed in a table does not by itself establish the certificate, report, laboratory accreditation, edition, or exact models covered. Ask for the document the tender names. Do not upgrade a standards list into a test result.

The same rule applies to an efficiency curve. Check whether the curve identifies the exact model, DC voltage, temperature or stated test condition, axes, and metric. A small brochure graph may help explain behaviour but may be unsuitable for verifying a two-decimal tender value.

## A current Qbits datasheet shows the distinction clearly

The current [QB 4/5/6 KTLD datasheet](/datasheets/products/QB_Data-Sheet_4.0-6.0-kw_2MPPT_1Phs.pdf), checked on 26 September 2026, has separate columns for QB-4KTLD, QB-5KTLD, and QB-6KTLD. It publishes 98.1 percent as maximum efficiency and 97.5 percent as Euro efficiency for each of those three models. Its efficiency curve is labelled at Vdc = 360 V, and its standards row lists IEC 61683 and EN 50530 among other standards.

That is enough to populate two declared-value rows for those exact SKUs. It is not enough to claim any of the following:

- a numeric static or dynamic MPPT efficiency;
- the same two values for another Qbits model;
- an independent certification of the efficiency values;
- performance at every DC voltage;
- annual site energy or availability; or
- compliance with a tender that requires a separate exact-model test report.

The [QB 4/5/6 KTLD product route](/our-products/QB-4-6KTLD/) and datasheet also show why capacity shorthand is risky. "Qbits 5 kW" is not a controlled model designation. The tender response should say QB-5KTLD if that is the offered unit.

## Score compliance before scoring performance

Efficiency scoring should happen in two passes.

### Pass one: evidence and comparability

For every bid, ask:

1. Is the exact offered model named?
2. Is the efficiency metric named?
3. Is the selected method or standard edition identified?
4. Are the required operating conditions stated?
5. Does the evidence cover the offered model?
6. Can the number be compared with every other compliant bid on the same basis?

An incomplete answer remains a clarification or deviation. It should not receive a performance score simply because the published decimal is high.

### Pass two: technical value

Only compare bids that passed the first screen. Apply the tender's published scoring rule to the same metric under the same basis. Keep any owner-selected minimum as a gate and any above-minimum scoring as a separate calculation.

Do not silently award extra points for a higher maximum figure when weighted efficiency was the scored field. Do not average maximum and weighted values into a homemade index. Do not combine MPPT and conversion values unless the tender names a valid overall-efficiency method and every bidder supplies the required inputs.

## Keep annual-energy claims outside the efficiency row

Weighted efficiency is more representative of varied loading than one peak point, but it is still not an annual-yield guarantee. Site energy also depends on array layout, DC loading, clipping, temperature, shading, curtailment, grid availability, inverter availability, and the actual irradiance distribution.

If annual energy is part of the evaluation, state the simulation inputs, software version, weather file, loss assumptions, availability assumption, and inverter model file separately. The efficiency schedule should remain an equipment-evidence record, not a substitute for the energy model.

This separation helps during contract review. A manufacturer-declared efficiency value, a simulation result, and a guaranteed project output carry different evidence and remedies. Putting them in one row makes responsibility unclear.

## Final tender review checklist

Before issue:

- replace every unqualified use of "efficiency" with the exact metric;
- name the standard or weighting method and controlling edition;
- state whether a datasheet, test report, or both are required;
- define exact-model scope and reject family extrapolation;
- declare the relevant DC voltages, loading points, and other conditions;
- keep static and dynamic MPPT efficiency separate;
- define comply, deviation, and clarification-required statuses;
- publish the comparison and scoring rule; and
- keep annual-energy modelling in its own schedule.

Before submission, use the [Qbits datasheet library](/download-datasheets/) to retrieve the current document for the exact model under consideration. Record its file and retrieval date, then request any test report or condition that the datasheet does not establish.

**Sources checked 26 September 2026:** IEC 61683:1999 and IEC 62891:2020 publication records from the International Electrotechnical Commission; the current Qbits QB 4/5/6 KTLD datasheet; the live Qbits product record; and the existing Qbits datasheet, supplier-selection, procurement, efficiency, and tender content owners.
