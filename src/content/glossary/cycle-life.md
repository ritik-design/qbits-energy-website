---
term: "Cycle Life"
title: "Cycle Life: Definition, Factors & Battery Storage Applications"
description: "Cycle life is the number of charge-discharge cycles a battery delivers before significant capacity loss. Full guide for solar storage."
category: "Batteries"
categorySlug: "batteries"
priority: "P1"
updatedDate: 2026-07-18
keywords:
  - what is cycle life
  - battery cycle life
  - lfp cycle life
  - cycle life vs calendar life
  - battery longevity
shortDefinition: "Cycle life is the number of charge-discharge cycles a battery can deliver before capacity drops to a defined threshold, typically 80 percent of original. It depends strongly on chemistry, depth of discharge, temperature and charge rate."
quickFacts:
  industry: "Battery Storage Engineering"
  primaryUse: "Lifecycle planning and warranty terms"
  commonUsers: "EPCs, customers, manufacturers, financiers"
  relevantStandards: "IEC 61960, IEC 62620, IS 16893"
  relatedTechnologies: "LFP, NMC, lead acid, BMS"
relatedTerms:
  - { slug: "battery-dod", term: "Battery DOD" }
  - { slug: "battery-soc", term: "Battery SOC" }
  - { slug: "soh", term: "State of Health" }
  - { slug: "lfp-battery", term: "LFP Battery" }
  - { slug: "lead-acid-battery", term: "Lead Acid Battery" }
  - { slug: "lithium-ion-battery", term: "Lithium Ion Battery" }
  - { slug: "calendar-life", term: "Calendar Life" }
  - { slug: "c-rate", term: "C-Rate" }
  - { slug: "bms", term: "BMS" }
  - { slug: "round-trip-efficiency", term: "Round Trip Efficiency" }
faqs:
  - q: "What is cycle life in simple words?"
    a: "How many times you can fully charge and discharge a battery before it loses too much capacity to be useful. LFP typically lasts 4,000 to 8,000 cycles."
  - q: "What ends a cycle life?"
    a: "Capacity fade. When capacity drops to 80 percent (some standards use 70 percent) of original, the battery is considered at end of useful life."
  - q: "Is cycle life the same as warranty cycle count?"
    a: "Often related but not identical. Manufacturers warrant a cycle count under specific conditions (DOD, temperature, C-rate). Actual cycle life can be longer or shorter depending on use."
  - q: "Does temperature affect cycle life?"
    a: "Yes. Operating at 40 to 50 degrees Celsius can halve cycle life compared to 25 degrees."
  - q: "What is the cycle life of LFP?"
    a: "4,000 to 8,000 cycles at 80 percent DOD for quality cells. Some premium LFP cells warrant 10,000 cycles."
  - q: "What is cycle life of NMC?"
    a: "2,000 to 4,000 cycles at 80 percent DOD. EV duty cycles tend to be tougher than stationary."
  - q: "What is cycle life of lead acid?"
    a: "500 to 1,500 cycles at 50 percent DOD for tubular flooded. Higher DOD reduces cycle life significantly."
  - q: "Can I extend cycle life?"
    a: "Yes, through shallower DOD, lower C-rate, moderate temperature, and avoiding chronic low SOC operation."
  - q: "What is calendar life vs cycle life?"
    a: "Cycle life is the cycle count. Calendar life is years of life regardless of cycling. Both apply, whichever ends first ends battery service."
  - q: "How is cycle life measured?"
    a: "Standardised tests cycle the battery at defined DOD, temperature and rate until capacity reaches the threshold. Per IEC 61960 and similar standards."
  - q: "Does C-rate affect cycle life?"
    a: "Yes. Higher C-rate (faster charge/discharge) typically reduces cycle life."
  - q: "Can cycle life be predicted from BMS data?"
    a: "Yes, through cumulative energy throughput, rainflow counting and degradation modelling."
  - q: "What is end of life?"
    a: "Defined when SOH drops to a threshold, typically 80 percent of original capacity. The battery is still functional but underperforming."
  - q: "Should I replace battery at end of life?"
    a: "Depends. If 80 percent capacity still meets your needs, you can continue using it. Most users replace when capacity becomes inadequate for daily needs."
  - q: "Can old batteries be repurposed?"
    a: "Yes. Second-life applications for retired LFP and NMC packs include stationary storage and grid services. Indian second-life market is emerging."
author: "Nirav Dhanani"
---

## What is cycle life

Cycle life is the number of full charge-discharge cycles a battery can deliver before its usable capacity drops below a defined threshold, typically 80 percent of original rated capacity. Some standards use 70 percent as the threshold. Cycle life is the primary durability metric for batteries used in cycling applications like solar storage and EVs.

Cycle life depends on chemistry, depth of discharge per cycle, temperature, charge and discharge rate, and storage conditions between cycles. The relationship is non-linear and chemistry-specific. The same battery may deliver 4,000 cycles at 80 percent [DOD](/glossary/battery-dod/) and 6,000 cycles at 50 percent DOD, which is why cycle life is the deciding factor in the [LiFePO4 vs NMC comparison](/blog/lifepo4-vs-nmc-solar-battery-india/) for Indian solar storage.

> **TL;DR**
> - Cycle life is the number of full charge-discharge cycles a battery delivers before capacity drops to a defined threshold, typically 80 percent of original capacity.
> - LFP delivers roughly 4,000 to 8,000 cycles at 80 percent DOD, NMC 2,000 to 4,000, and lead-acid 500 to 1,500.
> - Cycle life is strongly DOD-dependent and non-linear: shallower discharges, such as 50 percent DOD, extend cycle count well beyond the 80 percent DOD rating.
> - Total battery ageing combines cycle ageing and calendar ageing; whichever exhausts first ends useful life.
> - Indian residential LFP storage warranties typically guarantee 4,500 to 6,000 cycles at 80 percent DOD over 10 years.
> - Comparing batteries on lifecycle cost (₹/kWh-cycle) at the intended DOD is more meaningful than comparing headline cycle counts alone.

For solar storage, cycle life translates to lifecycle cost. A battery rated for 6,000 cycles at 80 percent DOD over 15 years performs roughly one cycle per day for the full life of the system, matching the typical solar storage duty cycle.

## Cycle life explained simply

Imagine a rechargeable battery as a pair of shoes. Every time you charge and discharge, you walk in them once. The shoes wear out after enough wear. Battery cycle life is how many cycles before the wear shows. Some batteries are like sneakers ([LFP](/glossary/lfp-battery/), thousands of cycles). Some are like dress shoes ([lead acid](/glossary/lead-acid-battery/), hundreds of cycles).

## Why cycle life matters

Battery longevity. The primary reason customers compare batteries, as explored in [how long solar batteries actually last in India's heat](/blog/how-long-solar-batteries-last-india/).

Lifecycle cost. ₹/kWh-cycle is the right way to compare battery economics.

Solar storage payback. A 10-year cycle life supports the financial model for solar plus storage.

Warranty terms. Manufacturers warrant cycle counts at specific conditions.

Replacement planning. Predicting when to budget for replacement.

## How cycle life is measured

Standardised tests apply repeated charge-discharge cycles at defined conditions:

1. Charge at standard rate to full SOC.
2. Discharge at standard rate to specified DOD.
3. Pause for thermal equilibrium.
4. Repeat.
5. Periodically measure capacity at a reference rate.
6. Cycle count when capacity reaches threshold.

Industry-standard conditions per IEC 61960 and IEC 62620:
- Temperature: 25 ± 5 degrees Celsius
- C-rate: typically 0.5C or 1C
- DOD: 80 to 100 percent

Manufacturer warranties may use different conditions, so cycle counts in datasheets and warranties can differ.

## Technical deep dive

### Chemistry-specific cycle life

| Chemistry | Cycles at 80% DOD (typical) |
|---|---|
| LFP | 4,000 to 8,000 |
| NMC | 2,000 to 4,000 |
| NCA | 1,500 to 3,000 |
| LCO | 500 to 1,000 |
| LTO | 10,000 to 20,000 |
| Tubular lead acid | 350 to 550 |
| AGM lead acid | 250 to 500 |

### DOD vs cycle life

The relationship is non-linear. Approximate empirical fits for LFP:

Cycles ≈ 6,000 × (0.5 / DOD)^0.5

This gives:
- 100% DOD: 4,250 cycles
- 80% DOD: 4,750 cycles
- 50% DOD: 6,000 cycles
- 30% DOD: 7,800 cycles
- 10% DOD: 13,500 cycles

### Calendar life

[Calendar life](/glossary/calendar-life/) is the chronological life regardless of cycling. LFP calendar life is 10 to 15 years. NMC is 8 to 12 years. Both age while sitting unused.

### Combined ageing

Total ageing = cycle ageing + calendar ageing.

Whichever exhausts first dictates end of life. For a battery cycled once daily, cycle and calendar life are usually balanced. For batteries used rarely, calendar life dominates.

### Capacity fade curve

Capacity does not drop linearly, and the decline is tracked as falling [State of Health](/glossary/soh/). Typical LFP curve:
- 0 to 70 percent of cycle life: roughly linear 0.5 to 1 percent loss per year.
- 70 to 100 percent of cycle life: accelerating to 2 to 3 percent loss per year.

## Real-world applications

[Solar storage payback modelling](https://surgepv.com/generation-financial-tool/).

EV residual value estimation, including [second-life battery](/glossary/second-life-battery/) repurposing of retired packs for stationary storage.

Telecom backup replacement planning.

Hybrid inverter battery sizing.

Grid storage operating contracts.

## Advantages of high cycle life chemistries

Lower lifecycle cost.

Longer warranty terms.

Lower replacement frequency.

Better fit for daily cycling solar storage.

Reduced material throughput and environmental impact.

## Limitations of cycle life metric

Single number hides DOD, temperature and rate dependence.

Real-world cycle distribution differs from standardised tests.

Calendar ageing not captured.

Variability across manufacturers within the same chemistry.

End-of-life threshold (70 vs 80 percent) affects the headline number.

## Common problems

Cycle life shorter than expected. Usually traceable to higher DOD, higher temperature, or higher [C-rate](/glossary/c-rate/) than assumed.

Calendar ageing dominating cycle life in shallow-cycling applications.

Cycle counter miscounting partial cycles inside the [BMS](/glossary/bms/). Rainflow counting is the correct method.

Different cycle life cited at different DOD assumptions causing customer confusion.

## Best practices

Compare batteries on ₹/kWh-cycle at intended DOD, not on nominal capacity alone.

Operate at recommended DOD and temperature.

Use rainflow counting for partial cycle accumulation.

Plan replacement budget around expected cycle and calendar life, starting from a proper [hybrid inverter battery sizing](/blog/battery-sizing-hybrid-solar/) exercise that accounts for DOD and C-rate limits.

Get cycle warranty terms in writing.

## Comparison: cycle life metrics across applications

| Application | Daily cycles | Required cycle life for 10 years |
|---|---|---|
| Solar storage | 1 | 3,650 |
| EV (commute) | 0.3 to 0.7 | 1,100 to 2,500 |
| Telecom backup | 0.05 to 0.2 | 200 to 750 |
| Frequency regulation | 5 to 20 | 18,000 to 73,000 |
| Peak shaving | 1 to 2 | 3,650 to 7,300 |

## Indian market context

Indian residential LFP storage warranties typically guarantee 4,500 to 6,000 cycles at 80 percent DOD with 10-year coverage.

Telecom operators planning 15 to 20 year tower lifespans select LFP for cycle life security.

Utility-scale storage RFPs increasingly specify minimum cycle life as 6,000 cycles for solar firming applications.

IS 16893 standard references cycle life testing methodology aligned with IEC 61960.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 61960 | Performance of secondary lithium cells |
| IEC 62620 | Performance of lithium cells for industrial applications |
| IS 16893 | Indian stationary battery storage |
| IEC 60896 | Stationary lead acid |
| IEEE 1187 | Lead acid sizing |
| Manufacturer warranty terms | Cycle count under specified conditions |

## Common mistakes

Comparing cycle life across chemistries without normalising for DOD.

Ignoring calendar ageing in shallow-cycling sizing.

Trusting brochure cycle count without reading the DOD and temperature footnotes.

Allowing operation outside warranted conditions.

Not counting partial cycles correctly.

Skipping rainflow counting in long-term cycle life accounting.

## Key takeaways

Cycle life is the number of charge-discharge cycles a battery delivers before capacity drops to a defined threshold. LFP at 4,000 to 8,000 cycles, NMC at 2,000 to 4,000, lead acid at 500 to 1,500. Cycle life depends on DOD, temperature and C-rate. Comparison across batteries should normalise these conditions. Lifecycle cost is the right metric, not headline cycle count.

## Need help with battery selection for cycle life?

QBits Energy compares battery options on lifecycle cost at intended DOD for solar storage applications across India.

## Further reading

For how Cycle Life plays out in real projects, these guides go deeper:

- [LiFePO4 vs NMC Battery for Solar in India](/blog/lifepo4-vs-nmc-solar-battery-india/)
- [How Long Do Solar Batteries Last in India?](/blog/how-long-solar-batteries-last-india/)
- [How to Size a Battery for a Hybrid Solar Inverter](/blog/battery-sizing-hybrid-solar/)
- [Lithium vs Lead-Acid Solar Battery for Indian Homes](/blog/lithium-vs-lead-acid-solar-battery/)

## Sources

- IEC 61960:2017, Performance requirements for secondary lithium cells.
- IEC 62620, Performance of lithium cells for industrial applications.
- IS 16893, Indian Standard for stationary battery storage.
- IEC 60896, Stationary lead acid batteries.
- Manufacturer warranty documents from leading LFP and NMC suppliers.
- Plett G. L., Battery Management Systems, Volume I and II, Artech House.
- NREL Technical Report TP-7A40-83933, 2024 Battery Storage Cost Projections.
- BloombergNEF Battery Storage Outlook 2024.
- IEA Energy Storage Outlook 2024.
