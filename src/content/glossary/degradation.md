---
term: "Module Degradation"
title: "Module Degradation: Definition, Mechanisms & Solar Performance"
description: "Module degradation is the gradual loss of solar panel output over time. Full guide to LID, PID, LeTID and Indian field experience."
category: "Performance"
categorySlug: "performance-efficiency"
priority: "P1"
updatedDate: 2026-07-08
keywords:
  - what is module degradation
  - solar panel degradation
  - lid degradation
  - pid degradation
  - letid degradation
  - solar power loss over time
shortDefinition: "Module degradation is the gradual decline in solar PV module output over its operating life, caused by physical, electrochemical and environmental mechanisms. Modern modules degrade 0.30 to 0.55 percent per year, with first-year LID of 1 to 2 percent."
quickFacts:
  industry: "Solar PV / Performance"
  primaryUse: "Long-term yield prediction and warranty terms"
  commonUsers: "EPCs, customers, financiers, O&M operators"
  relevantStandards: "IEC 61215, IEC 62804 (PID), IEC TS 63209"
  relatedTechnologies: "PERC, TOPCon, HJT, encapsulant, back sheet"
relatedTerms:
  - { slug: "lid", term: "LID" }
  - { slug: "pid", term: "PID" }
  - { slug: "letid", term: "LeTID" }
  - { slug: "monocrystalline", term: "Monocrystalline" }
  - { slug: "perc-cell", term: "PERC Cell" }
  - { slug: "topcon-cell", term: "TOPCon Cell" }
  - { slug: "hjt-cell", term: "HJT Cell" }
  - { slug: "module-efficiency", term: "Module Efficiency" }
  - { slug: "performance-warranty", term: "Performance Warranty" }
  - { slug: "almm-list", term: "ALMM List" }
  - { slug: "hot-spot", term: "Hot Spot" }
  - { slug: "encapsulant", term: "Encapsulant" }
  - { slug: "back-sheet", term: "Back Sheet" }
  - { slug: "junction-box", term: "Junction Box" }
  - { slug: "almm-list", term: "ALMM List" }
  - { slug: "solar-yield", term: "Solar Yield" }
faqs:
  - q: "What is module degradation in simple words?"
    a: "The loss of solar panel output over time. A new panel produces a little less every year, and after 25 years it makes about 84 to 88 percent of what it did originally."
  - q: "How much do solar panels degrade per year?"
    a: "Modern modules degrade 0.30 to 0.55 percent per year. Premium HJT at 0.30 percent, mono PERC at 0.45 to 0.55 percent."
  - q: "What is the first-year degradation?"
    a: "Initial light-induced degradation (LID): 1 to 2 percent in the first 100 hours. After that, linear degradation continues."
  - q: "What is the 25-year retention?"
    a: "84 to 88 percent for mono PERC, 85 to 88 percent for TOPCon, 88 to 92 percent for HJT."
  - q: "What causes degradation?"
    a: "LID, PID, LeTID, encapsulant browning, back sheet ageing, micro-cracks from thermal cycling, glass darkening from UV."
  - q: "What is LID?"
    a: "Light-Induced Degradation, a quick efficiency drop in the first 100 hours of exposure caused by boron-oxygen defect formation in p-type silicon."
  - q: "What is PID?"
    a: "Potential-Induced Degradation, voltage-stress-driven leakage between cells and frame, mitigated by PID-resistant encapsulants."
  - q: "What is LeTID?"
    a: "Light and Elevated Temperature Induced Degradation, a slower degradation mechanism affecting PERC under heat and light."
  - q: "Are warranty terms based on degradation?"
    a: "Yes. Tier-1 manufacturers warrant linear degradation of about 0.55 percent per year and 84 to 87 percent retention at year 25."
  - q: "Does temperature affect degradation?"
    a: "Yes. Hot rooftops accelerate degradation. Indian summer temperatures above 50°C module skin add stress."
  - q: "Can degraded modules be replaced under warranty?"
    a: "Yes, if degradation exceeds warranty curve and the manufacturer agrees on root cause. Document with annual yield reports."
  - q: "Does cleaning affect degradation?"
    a: "Cleaning reverses soiling, which is not degradation. True degradation is permanent silicon and encapsulant ageing."
  - q: "Are bifacial modules more degradation-prone?"
    a: "No. Modern bifacial modules degrade at similar rates as monofacial of the same cell technology."
  - q: "How is degradation measured?"
    a: "Annual IV curve at standardised conditions, compared to commissioning baseline. Difference attributed to ageing."
  - q: "What is the warranty curve?"
    a: "A linear or step function defining the minimum guaranteed output over time. Manufacturers honour replacement if actual output falls below the curve."
author: "Nirav Dhanani"
---

## What is module degradation

Module degradation is the gradual decline in solar PV module electrical output over its operating life, driven by physical, electrochemical and environmental mechanisms. Some degradation is intrinsic to crystalline silicon physics (light-induced defect formation), some is mechanical (micro-cracks from thermal cycling), some is electrochemical (PID under voltage stress), some is material ageing ([encapsulant](/glossary/encapsulant/) yellowing, back sheet embrittlement).

For modern [mono PERC](/glossary/perc-cell/) modules, total degradation is approximately 1 to 2 percent in the first 100 hours ([LID](/glossary/lid/)), then linear 0.45 to 0.55 percent per year, giving 25-year retention of 84 to 87 percent of original nameplate. [TOPCon](/glossary/topcon-cell/) and [HJT](/glossary/hjt-cell/) achieve marginally better numbers.

Degradation determines lifecycle yield, warranty terms and replacement planning. Bankability of solar projects depends on degradation assumptions matching field reality.

> **TL;DR**
> - Module degradation is the gradual, permanent decline in solar panel output over its operating life, driven by LID, PID, LeTID and material ageing.
> - Modern modules lose 1 to 2 percent in the first 100 hours (LID), then degrade linearly at about 0.30 to 0.55 percent per year.
> - 25-year retention ranges from 84 to 87 percent for mono PERC up to 88 to 92 percent for HJT.
> - PID can cause up to 30 percent loss over 5 to 10 years in modules without PID-resistant encapsulant, while LeTID adds 1 to 5 percent under heat and light.
> - Degradation is irreversible and distinct from soiling, which is a reversible, cleanable loss.

## Degradation explained simply

A new solar panel makes its full rated output on day one. The first month it loses about 1.5 percent (LID). After that it loses about half a percent every year. After 25 years it makes about 85 percent of original output. After 30 years, about 82 percent.

These losses come from various physical processes: photons creating defects in silicon, voltage stress driving ion migration, heat ageing the plastic encapsulant, micro-cracks from thermal expansion.

## Why degradation matters

Lifecycle yield. Sum of yearly output depends on the degradation profile, which is why credible [state-level solar yield benchmarks](/blog/solar-yield-india/) build in a degradation curve rather than a flat first-year output assumption.

Financing. Lenders model degradation conservatively, requiring assumptions backed by manufacturer warranty, an input that flows directly into [C&I LCOE calculations](/blog/lcoe-solar-india/).

Warranty enforcement. Tier-1 warranty replaces modules that fall below the warranty curve.

Replacement planning. Knowing when capacity drops below threshold guides replacement schedule.

Technology comparison. Degradation rates differentiate PERC, TOPCon and HJT.

## Degradation mechanisms

### LID (Light-Induced Degradation)

| Aspect | Detail |
|---|---|
| Mechanism | Boron-oxygen defect formation in p-type silicon under illumination |
| Magnitude | 1 to 2% in first 100 hours |
| Affects | All p-type silicon (PERC) |
| Mitigation | Gallium doping, n-type silicon |

### PID (Potential-Induced Degradation)

| Aspect | Detail |
|---|---|
| Mechanism | Sodium ion migration from glass through encapsulant under high voltage stress |
| Magnitude | Up to 30% in extreme cases over 5 to 10 years |
| Affects | Modules under high system voltage |
| Mitigation | PID-resistant encapsulant (POE), glass priming, system grounding |

### LeTID (Light and Elevated Temperature Induced Degradation)

| Aspect | Detail |
|---|---|
| Mechanism | Hydrogen-related defect under combined light and heat |
| Magnitude | 1 to 5% over years |
| Affects | PERC, especially first generations |
| Mitigation | Process control, n-type silicon (TOPCon, HJT) |

### Encapsulant degradation

| Aspect | Detail |
|---|---|
| Mechanism | EVA yellowing under UV |
| Magnitude | Few percent over decades |
| Mitigation | UV-stabilised encapsulant, POE alternatives |

### Mechanical degradation

| Aspect | Detail |
|---|---|
| Mechanism | Cell micro-cracks from thermal cycling, hail, handling |
| Magnitude | Variable, can be significant in poor-quality modules |
| Mitigation | Robust manufacturing, careful handling |

### [Back sheet](/glossary/back-sheet/) degradation

| Aspect | Detail |
|---|---|
| Mechanism | Polymer back sheet cracking under UV and humidity |
| Magnitude | Cosmetic to electrical risk |
| Mitigation | Glass-glass bifacial construction, higher quality polymers |

## Technical deep dive

### Total degradation timeline

| Stage | Loss | Cumulative loss |
|---|---|---|
| LID (first 100 hours) | 1 to 2% | 1 to 2% |
| Year 1 to 5 | 0.5 to 0.7%/yr | 3.5 to 5.5% |
| Year 5 to 15 | 0.4 to 0.5%/yr | 7.5 to 10.5% |
| Year 15 to 25 | 0.4 to 0.5%/yr | 11.5 to 15.5% |
| Year 25 to 30 | 0.4 to 0.5%/yr | 13.5 to 18% |

### Cell technology comparison

| Technology | First year (incl. LID) | Year 2 onward | 25-year retention |
|---|---|---|---|
| Mono PERC | 2 to 2.5% | 0.45 to 0.55%/yr | 84 to 87% |
| Mono TOPCon | 1 to 1.5% | 0.40 to 0.50%/yr | 85 to 88% |
| Mono HJT | 0.5 to 1% | 0.30 to 0.40%/yr | 88 to 92% |
| Polycrystalline | 2 to 2.5% | 0.60 to 0.80%/yr | 80 to 83% |

### Warranty curves

Linear performance warranty:
P(year) = (P_nameplate × (1 − initial_loss)) × (1 − annual_loss × (year − 1))

For Pmax_year_25 ≥ 84 percent:
- initial_loss = 2 percent (covers LID)
- annual_loss × 24 ≤ 14 percent
- annual_loss ≤ 0.583 percent

Tier-1 manufacturers typically warrant 0.45 to 0.55 percent annual against 0.55 percent allowable.

## Real-world applications

Lifecycle [solar yield](/glossary/solar-yield/) modelling.

Performance warranty enforcement.

Replacement timing decisions.

Module technology comparison.

Site-specific degradation under Indian climate.

## Advantages of low-degradation modules

Higher lifecycle yield.

Better LCOE.

Longer warranty terms.

Reduced replacement risk.

## Limitations

Degradation is irreversible. Cannot be "fixed" through cleaning or maintenance.

Manufacturer claims vary; field validation takes years.

Warranty enforcement requires documentation discipline.

## Common problems

Field diagnosis follows the same decision tree as general [solar inverter low-output troubleshooting](/blog/solar-inverter-low-output-causes-india/): rule out soiling and shading with a monitoring check before concluding that true panel degradation is responsible.

PID in legacy modules without PID-resistant materials. 10 to 30 percent loss over 5 years.

Back sheet cracking in tropical climates.

Encapsulant browning visible after 10 to 15 years.

[Hot spot](/glossary/hot-spot/) induced local degradation.

Snail trail cosmetic marks (often benign).

[Junction box](/glossary/junction-box/) bypass diode failure.

## Best practices

Specify PID test certification.

Use modules with linear performance warranty of 0.55 percent or better.

Document module electrical parameters at commissioning.

Schedule annual IV curve audits during O&M.

Photograph module condition every 3 years.

Maintain warranty correspondence files.

Track yield against warranty curve.

## Comparison: degradation drivers

| Driver | Effect | Mitigation |
|---|---|---|
| LID | First 100 hours | n-type silicon |
| PID | Multi-year drift | POE encapsulant, grounding |
| LeTID | Gradual under heat | Process control |
| UV | Encapsulant ageing | Stable encapsulant |
| Thermal cycling | Micro-cracks | Quality manufacturing |
| Soiling | Apparent loss (reversible) | Cleaning |

## Indian market context

[ALMM-listed](/glossary/almm-list/) Indian modules, available through authorized solar equipment suppliers, typically warrant linear degradation of 0.45 to 0.55 percent per year with 84 to 87 percent retention at year 25.

PID test certification under IEC 62804 is increasingly demanded by Indian project developers.

[LeTID](/glossary/letid/) has affected some PERC installations from the late 2010s. Modern PERC processes control LeTID.

Climate variation across India (cold Himalayas to hot Rajasthan to humid coast) creates region-specific degradation profiles.

[PM Surya Ghar](/glossary/pm-surya-ghar/) requires modules with linear performance warranty.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 61215 | Module qualification |
| IEC 61730 | Module safety |
| IEC 62804 | PID test |
| IEC TS 63209 | Extended thermal cycling |
| IS 14286 | Indian Standard for crystalline modules |
| MNRE ALMM | Listing for subsidies |

## Common mistakes

Ignoring LID in first-year yield modelling. Causes "underperformance" panic.

Choosing modules without PID test certification.

Not auditing module IV curves periodically.

Failing to document degradation correspondence for warranty.

Assuming uniform degradation across years (real curves are slightly non-linear).

Skipping initial commissioning baseline measurement.

## Key takeaways

Module degradation is the gradual decline in solar output over time. Modern modules degrade 0.30 to 0.55 percent per year after a 1 to 2 percent initial LID. 25-year retention is 84 to 92 percent depending on cell technology. PID, LeTID and encapsulant ageing are the main controllable mechanisms. Tier-1 ALMM-listed modules with linear performance warranty are the safe choice for Indian solar projects.

## Need help with module reliability for solar?

QBits Energy supplies ALMM-listed modules with documented PID, LeTID and degradation profiles, and supports lifecycle yield modelling for Indian solar projects.

## Further reading

For how Module Degradation plays out in real projects, these guides go deeper:

- [How Does a Solar Power System Work in India?](/blog/how-solar-power-system-works-india/)
- [How Shadow on One Solar Panel Kills Your Generation (And How to Fix It)](/blog/solar-panel-shadow-effect-generation/)
- [Solar Inverter Low Output, 12 Causes and Fixes India](/blog/solar-inverter-low-output-causes-india/)
- [Best Solar System Under ₹1 Lakh in India 2026](/blog/best-solar-system-under-1-lakh/)

## Sources

- IEC 61215, Module qualification and type approval.
- IEC 61730, Module safety.
- IEC 62804, PID test method.
- IEC TS 63209, Extended thermal cycling.
- IS 14286, Indian Standard for crystalline silicon PV modules.
- MNRE Approved List of Models and Manufacturers (ALMM).
- NREL Technical Report TP-5J00-78211, PV Module Degradation Rates.
- ITRPV Roadmap, latest edition, VDMA.
- IEA PVPS Task 13 Report on PV performance and reliability.
- Jordan D. C., Kurtz S. R., Photovoltaic Degradation Rates: An Analytical Review, Progress in Photovoltaics, 2013.
