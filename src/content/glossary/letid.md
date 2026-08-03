---
term: "LeTID"
title: "LeTID (Light and Elevated Temperature Induced Degradation): Definition & Solar"
description: "LeTID is heat-light degradation in PERC cells. Full guide to mechanism and mitigation."
category: "Performance"
categorySlug: "performance-efficiency"
priority: "P2"
updatedDate: 2026-07-18
keywords:
  - letid
  - light elevated temperature induced degradation
  - perc letid
  - solar module degradation
  - heat degradation solar
shortDefinition: "LeTID (Light and Elevated Temperature Induced Degradation) is a slower degradation mechanism affecting PERC solar cells under combined light exposure and elevated temperatures (60-90°C). Causes 1-5 percent capacity loss over years. Modern PERC manufacturing controls LeTID through process choices."
quickFacts:
  industry: "Solar Module Degradation"
  primaryUse: "Long-term performance prediction"
  commonUsers: "Module manufacturers, performance modellers"
  relevantStandards: "IEC TS 63209, IEC 61215"
  relatedTechnologies: "PERC, hydrogen passivation"
relatedTerms:
  - { slug: "lid", term: "LID" }
  - { slug: "degradation", term: "Module Degradation" }
  - { slug: "perc-cell", term: "PERC Cell" }
  - { slug: "topcon-cell", term: "TOPCon Cell" }
  - { slug: "hjt-cell", term: "HJT Cell" }
  - { slug: "monocrystalline", term: "Monocrystalline" }
  - { slug: "polycrystalline", term: "Polycrystalline" }
  - { slug: "n-type-silicon", term: "N-Type Silicon" }
  - { slug: "p-type-silicon", term: "P-Type Silicon" }
  - { slug: "module-efficiency", term: "Module Efficiency" }
  - { slug: "iec-61215", term: "IEC 61215" }
  - { slug: "performance-warranty", term: "Performance Warranty" }
faqs:
  - q: "What is LeTID in simple words?"
    a: "Slow loss of solar panel output that happens over years when panels run hot and bright. Mostly affects older PERC modules; modern PERC controls it."
  - q: "What does LeTID stand for?"
    a: "Light and Elevated Temperature Induced Degradation."
  - q: "How is LeTID different from LID?"
    a: "LID happens in first 100 hours, mainly affects p-type silicon. LeTID happens over months and years, mainly affects PERC."
  - q: "How much LeTID typically?"
    a: "1-5 percent capacity loss over years. Modern controlled PERC: under 2 percent."
  - q: "What causes LeTID?"
    a: "Hydrogen-related defects activated by combined light and heat exposure. Mechanism still researched."
  - q: "Are TOPCon and HJT affected?"
    a: "Minimal LeTID. n-type silicon and different cell architecture largely eliminate the mechanism."
  - q: "How is LeTID mitigated?"
    a: "Process control in cell manufacturing. Optimised hydrogen passivation, controlled cooling, and dedicated LeTID treatments during cell production."
  - q: "Is LeTID covered in warranty?"
    a: "Linear performance warranty covers total degradation including LeTID. Manufacturers should warrant against excessive LeTID."
  - q: "Where is LeTID worse?"
    a: "Hot Indian conditions (Rajasthan summer, rooftop applications) accelerate LeTID. Modules running at 60-90°C cell temperature stress LeTID."
  - q: "Can LeTID be detected at commissioning?"
    a: "No. Manifests over months and years. IEC TS 63209 extended thermal cycling test captures LeTID susceptibility."
  - q: "Does LeTID affect bifacial differently?"
    a: "Same mechanism. Bifacial modules may run slightly cooler, partially reducing LeTID rate."
  - q: "Are Indian PERC modules LeTID-controlled?"
    a: "Yes. Major Indian manufacturers (Waaree, Vikram, Tata Power Solar) implement LeTID mitigation in production."
  - q: "What is the recovery from LeTID?"
    a: "Partial recovery possible through thermal treatment in the dark. Field recovery is gradual during overcast/cool periods."
  - q: "Is LeTID temporary?"
    a: "Not in normal operating conditions. Stabilises after years of operation."
  - q: "What is the future of LeTID?"
    a: "Industry transition to TOPCon n-type largely eliminates LeTID concerns. Legacy PERC modules with potential LeTID remain in field."
author: "Nirav Dhanani"
---

## What is LeTID

> **TL;DR**
> - LeTID is a slow degradation mechanism in [PERC cells](/glossary/perc-cell/) caused by combined light and heat exposure (60-90°C), unlike [LID](/glossary/lid/), which resolves within the first 100 hours.
> - Total impact is 1-5 percent [module degradation](/glossary/degradation/) over months to years, plateauing after 2-5 years.
> - Modern LeTID-controlled PERC limits loss to under 1 percent; [TOPCon](/glossary/topcon-cell/) and [HJT](/glossary/hjt-cell/) n-type cells largely eliminate the mechanism.
> - Indian heat accelerates LeTID, since cell temperatures of 60-80°C are common on rooftops during summer noon.
> - Mitigation is a manufacturing choice: controlled hydrogen passivation, optimised firing profiles, or switching to n-type silicon.

LeTID (Light and Elevated Temperature Induced Degradation) is a degradation mechanism affecting [PERC](/glossary/perc-cell/) (Passivated Emitter and Rear Contact) solar cells under combined exposure to light and elevated temperatures (typically 60-90°C). Unlike [LID](/glossary/lid/) (Light-Induced Degradation), which occurs within the first 100 hours of light exposure, LeTID develops slowly over months and years, eventually causing 1-5 percent loss of module capacity.

The mechanism involves hydrogen-related defects formed during cell manufacturing that become recombination-active under heat and light. The exact atomic-level mechanism is still researched, but is associated with hydrogen passivation processes used in PERC cell production.

For Indian solar, LeTID is a particular concern because Indian summer conditions (cell temperatures of 60-80°C during noon) accelerate the mechanism; [Solar Performance in Indian Winters, What to Expect](/blog/solar-performance-indian-winters-guide/) covers the same PERC temperature coefficient from the opposite seasonal angle. Modern Indian PERC manufacturers implement LeTID mitigation through controlled hydrogen passivation, optimised cooling profiles and dedicated regeneration treatments. TOPCon n-type cells largely eliminate LeTID due to different material composition.

## Why LeTID matters

Long-term yield. LeTID can reduce 25-year energy yield by several percent, one of several degradation mechanisms that a realistic generation estimate needs to account for; see [Solar Yield in India, kWh-per-kW Benchmarks by State](/blog/solar-yield-india/) for how module degradation is factored into yield projections.

Warranty enforcement. Excessive LeTID may trigger warranty claims.

Indian climate sensitivity. Hot conditions accelerate LeTID.

Cell technology choice. [N-type silicon](/glossary/n-type-silicon/) cells avoid the mechanism.

Manufacturing differentiation. LeTID control distinguishes quality manufacturers.

## How LeTID works

1. PERC cell manufacturing introduces hydrogen for passivation of rear surface.
2. Under combined light and heat exposure, hydrogen-related defects activate.
3. Defects act as recombination centres, reducing minority carrier lifetime.
4. Reduced lifetime lowers voltage and current, reducing module power.
5. Degradation proceeds over months and years until plateau.
6. Partial recovery possible through thermal regeneration in dark.

## Technical deep dive

### LeTID timeline

| Stage | Duration | Behaviour |
|---|---|---|
| Initial | Days to weeks | Slow onset |
| Active degradation | Months to years | Linear loss |
| Plateau | After 2-5 years | Stabilised |
| Recovery (partial) | During cool/dark periods | Slight return |

### Magnitude by mitigation level

| Mitigation | Approximate LeTID |
|---|---|
| Uncontrolled PERC | 3-7% |
| Standard PERC | 1-3% |
| LeTID-controlled PERC | <1% |
| Modern best PERC | <0.5% |
| [TOPCon](/glossary/topcon-cell/)/[HJT](/glossary/hjt-cell/) n-type | Negligible |

### Test methods

| Method | Description |
|---|---|
| IEC TS 63209 | Extended stress testing for LeTID |
| Carrier injection at elevated temp | Accelerated test |
| Field monitoring | Real-world validation |

### Comparison with LID

| Aspect | LID | LeTID |
|---|---|---|
| Onset | First 100 hours | Months to years |
| Magnitude | 1-2.5% | 1-5% |
| Mechanism | Boron-oxygen | Hydrogen-related |
| Affected | p-type silicon | PERC specifically |
| Mitigation | Gallium doping or n-type | Process control |

## Mitigation strategies

1. Controlled hydrogen passivation during cell manufacturing.
2. Optimised firing temperature profile.
3. Carrier injection regeneration treatment.
4. Process audits at cell fabrication.
5. Choice of [n-type silicon](/glossary/n-type-silicon/) (eliminates mechanism).

## Real-world applications

Long-term yield modelling.

Performance warranty enforcement.

Cell technology selection.

Indian climate-specific module specification, the kind of judgment call [Heaven Green Energy's residential installation](https://heavengreenenergy.com/residential-solar/) teams make when comparing PERC and TOPCon options for a hot-climate rooftop.

## Common LeTID problems

Yield underperformance in second to fifth year.

Confusion with normal aging.

Difficulty distinguishing from soiling losses.

Warranty disputes.

## Best practices

Specify LeTID-tested modules per IEC TS 63209.

Choose n-type TOPCon for highest LeTID resistance.

Monitor yield curves for first 5 years.

Use Tier-1 manufacturers with documented LeTID control.

## Indian market context

Major Indian PERC manufacturers implement LeTID mitigation.

Transition to TOPCon n-type largely eliminates LeTID concerns.

ALMM-listed PERC modules generally control LeTID.

PM Surya Ghar warranty implicitly covers LeTID through linear performance.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC TS 63209 | Extended stress testing |
| IEC 61215 | Standard module qualification |
| IS 14286 | Indian module standard |
| Manufacturer LeTID test certificates | Process verification |

## Key takeaways

LeTID is slow degradation in PERC cells caused by combined light and heat exposure, manifesting over months and years. Total impact 1-5 percent depending on cell manufacturing quality. Modern controlled PERC limits LeTID to under 1 percent. TOPCon n-type cells largely eliminate the mechanism. Indian climate conditions accelerate LeTID. Specifying LeTID-tested modules and Tier-1 manufacturers is the practical mitigation for ongoing PERC installations.

## Need LeTID-controlled solar modules?

QBits Energy supplies ALMM-listed modules with documented LeTID control, plus TOPCon and HJT alternatives that largely eliminate the mechanism.

## Further reading

For how LeTID plays out in real projects, these guides go deeper:

- [How Long Do Solar Batteries Last in India?](/blog/how-long-solar-batteries-last-india/)
- [Solar Shading Analysis Software 2026: Guide](/blog/solar-shading-analysis-software/)
- [Solar Inverter Derating in Indian Summer, Explained](/blog/solar-inverter-summer-derating-india/)
- [Solar Inverter Failure: 20 Questions Answered](/blog/solar-inverter-failure/)

## Sources

- IEC TS 63209, Extended stress testing of PV modules.
- IEC 61215, Module qualification.
- IS 14286, Indian module standard.
- ITRPV Roadmap on LeTID.
- Kersten F., Engelhart P., Ploigt H.-C., et al., A new mc-Si degradation effect, IEEE PVSC.
- Eberle R., et al., Modelling of LeTID, Energy Procedia.
- Manufacturer LeTID test reports.
- IEA PVPS Task 13 Report on PV degradation.
- NREL PV degradation studies.
