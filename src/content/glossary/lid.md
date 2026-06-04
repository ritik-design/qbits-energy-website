---
term: "LID"
title: "LID (Light-Induced Degradation): Definition, Causes & Solar Module Impact"
description: "LID is the initial drop in solar panel output during early operation. Full guide to mechanism, magnitude and modern mitigation."
category: "Performance"
categorySlug: "performance-efficiency"
priority: "P2"
updatedDate: 2026-06-04
keywords:
  - what is lid
  - light induced degradation
  - solar lid
  - boron oxygen defect
  - lid mitigation
shortDefinition: "LID, Light-Induced Degradation, is the initial loss of efficiency in crystalline silicon solar cells during the first 100 hours of exposure to sunlight. Caused primarily by boron-oxygen defect formation in p-type silicon, LID reduces output by 1 to 2.5 percent and is intrinsic to PERC technology."
quickFacts:
  industry: "Solar PV / Cell Physics"
  primaryUse: "Understanding first-year solar panel performance"
  commonUsers: "Manufacturers, EPCs, customers, yield modellers"
  relevantStandards: "IEC 61215, IEC TS 63209"
  relatedTechnologies: "PERC, gallium-doped silicon, n-type silicon"
relatedTerms:
  - { slug: "degradation", term: "Module Degradation" }
  - { slug: "pid", term: "PID" }
  - { slug: "letid", term: "LeTID" }
  - { slug: "perc-cell", term: "PERC Cell" }
  - { slug: "topcon-cell", term: "TOPCon Cell" }
  - { slug: "hjt-cell", term: "HJT Cell" }
  - { slug: "monocrystalline", term: "Monocrystalline" }
  - { slug: "polycrystalline", term: "Polycrystalline" }
  - { slug: "module-efficiency", term: "Module Efficiency" }
  - { slug: "n-type-silicon", term: "N-Type Silicon" }
  - { slug: "performance-warranty", term: "Performance Warranty" }
  - { slug: "wattage", term: "Module Wattage" }
faqs:
  - q: "What is LID in simple words?"
    a: "The drop in solar panel output that happens in the first month of operation. It is a one-time loss, after which annual degradation takes over."
  - q: "What does LID stand for?"
    a: "Light-Induced Degradation."
  - q: "How much is LID?"
    a: "1 to 2.5 percent for mono PERC. Less than 1 percent for TOPCon. Negligible for HJT."
  - q: "How long does LID take?"
    a: "Most of LID happens in the first 100 hours of sun exposure. The defect formation stabilises after that."
  - q: "What causes LID?"
    a: "Boron-oxygen defects form when light excites p-type silicon containing boron and oxygen impurities. Defects trap electrons and reduce voltage."
  - q: "Why does mono have LID more than HJT?"
    a: "Mono PERC uses p-type silicon doped with boron. The boron-oxygen mechanism is intrinsic. HJT uses n-type silicon without boron, eliminating the mechanism."
  - q: "Is LID reversible?"
    a: "Yes, partially through thermal annealing in the dark. In normal operation it does not recover. Modern doping strategies suppress the formation."
  - q: "Does LID affect warranty?"
    a: "Linear performance warranties already account for LID. The first-year retention specification includes LID losses."
  - q: "Is LID same as LeTID?"
    a: "No. LID is initial degradation. LeTID is light plus temperature degradation that happens over longer time. Different mechanisms."
  - q: "Can manufacturers prevent LID?"
    a: "Yes, through gallium doping instead of boron, or by using n-type silicon as in TOPCon and HJT."
  - q: "Is LID worse in tropical climates?"
    a: "LID itself is irradiance-driven, not temperature-driven. Indian sunshine triggers LID quickly. The total loss is the same as in temperate climates."
  - q: "Does LID happen again?"
    a: "No, it is a one-time stabilisation. After the initial 100 hours, modules operate at the stabilised efficiency."
  - q: "Are TOPCon modules LID-free?"
    a: "Effectively yes. TOPCon uses n-type silicon, eliminating the boron-oxygen mechanism."
  - q: "How is LID measured?"
    a: "Module flash test before and after stabilisation. IEC 61215 light-soaking test exposes module to known irradiance for 5 to 60 hours."
  - q: "Does cleaning recover LID losses?"
    a: "No. LID is intrinsic to the silicon. Cleaning removes soiling, not LID."
---

## What is LID

LID, Light-Induced Degradation, is the initial loss of efficiency in crystalline silicon solar cells during the first 100 hours of exposure to sunlight. It is caused primarily by the formation of boron-oxygen complexes in p-type silicon containing both boron dopant and oxygen impurities. The defect traps electrons, reducing open-circuit voltage and short-circuit current, lowering Pmax by 1 to 2.5 percent.

LID was first identified in the 1970s and became a major concern for p-type PERC in the 2010s as module-level efficiencies pushed higher. The mechanism is intrinsic to boron-doped p-type silicon. Switching to gallium doping or to n-type silicon (TOPCon, HJT) eliminates most or all of the mechanism.

For Indian solar, LID is built into all modern warranty curves and yield models. A new module is expected to drop 1 to 2 percent in its first month and then degrade linearly thereafter.

## LID explained simply

When you first turn on a solar panel and leave it in the sun, the output drops by about 1.5 percent in the first month and stabilises. After that, the year-on-year degradation is a slower 0.5 percent or so.

The reason: tiny defects form when light hits silicon containing certain impurities. The defects make a small fraction of the silicon less efficient at converting sunlight. Once all the possible defects have formed, the loss stops.

## Why LID matters

Warranty curves. Manufacturer linear performance warranty includes LID as the first-year drop.

Yield modelling. P50 yield models apply LID derate in year 1.

Technology comparison. PERC has LID; TOPCon has less; HJT has effectively none.

Cell technology selection. LID is one factor pushing the industry toward n-type cells.

Financial bankability. Lenders model LID conservatively.

## How LID works

Mechanism in p-type PERC:

1. Silicon contains boron (dopant) and small amounts of oxygen (impurity from Czochralski growth).
2. Sunlight excites electrons in the silicon.
3. Excited electrons combine with boron-oxygen pairs to form a recombination-active defect.
4. The defect traps subsequent electrons, reducing minority carrier lifetime.
5. Reduced lifetime lowers Voc and Isc, hence Pmax.
6. After 100 hours, all available B-O pairs have formed defects. Degradation stops.

The defect is reversible by thermal annealing in the dark, but in field conditions modules stay illuminated, so reversal is not practical.

## Technical deep dive

### Magnitude by cell technology

| Technology | LID loss | Time to stabilise |
|---|---|---|
| Standard p-type mono | 2 to 3% | 50 to 100 hours |
| Mono PERC | 1 to 2.5% | 50 to 100 hours |
| Mono PERC (gallium-doped) | 0.5 to 1% | 50 to 100 hours |
| Mono TOPCon | <0.5% | 50 hours |
| Mono HJT | <0.3% | 50 hours |
| Polycrystalline | 1 to 2% | 50 to 100 hours |

### Boron-oxygen defect

The B-O complex involves substitutional boron, interstitial oxygen, and an additional silicon site. Light excitation drives the complex into a metastable state with high recombination activity.

### IEC 61215 light-soaking test

The standard module qualification test includes a light-soaking step to stabilise modules before final efficiency measurement. Typical exposure: 5 to 60 hours at 1000 W/m².

### Stabilised vs nameplate output

Some manufacturers quote nameplate Pmax including LID effect; others quote pre-LID. Customers should specify "stabilised Pmax" in purchase orders.

## Real-world applications

First-year yield modelling for solar plants.

Performance warranty enforcement.

Module technology selection.

PPA negotiation around year-one generation.

Indian PR (Performance Ratio) measurement during commissioning year.

## Advantages of low-LID modules

Higher first-year yield.

Closer match between nameplate and field output.

Simpler warranty enforcement.

Better PR in commissioning year.

## Limitations

LID is intrinsic to p-type silicon. Cannot be eliminated for PERC without doping changes.

Annual degradation continues after LID. Total lifecycle loss is sum of LID + annual.

n-type alternatives (TOPCon, HJT) cost more.

## Common problems

Customer perception of underperformance in first year, often attributable to LID.

Yield model not including LID, leading to apparent first-year shortfall.

Performance warranty dispute over what "100 percent" baseline means.

Confusion between LID and soiling (LID is permanent, soiling is recoverable).

## Best practices

Specify "stabilised Pmax" in purchase orders.

Apply LID derate in first-year yield models.

Educate customers on expected first-year performance.

Reference IEC 61215 light-soak test in module specifications.

Choose gallium-doped PERC or n-type TOPCon for low-LID applications.

## Comparison: LID across silicon types

| Silicon type | LID risk |
|---|---|
| p-type Cz boron-doped | High (1.5 to 2.5%) |
| p-type Cz gallium-doped | Low (0.5 to 1%) |
| n-type Cz | Negligible |
| Multicrystalline p-type | Medium (1 to 2%) |

## Indian market context

Indian ALMM-listed modules typically include LID in their performance warranty curves.

Major Indian manufacturers have transitioned to gallium-doped PERC and increasingly to n-type TOPCon, reducing field LID.

Yield models used in SECI and CPSU tender bids include LID derate in year 1.

Commissioning-year PR measurements should account for LID.

PM Surya Ghar performance expectations are typically computed on stabilised output, not nameplate.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 61215 | Module qualification including light-soak test |
| IEC TS 63209 | Extended thermal cycling |
| IS 14286 | Indian Standard for crystalline modules |
| IEC TS 61853-4 | Performance under operating conditions |

## Common mistakes

Quoting nameplate Pmax without specifying LID status.

First-year yield model omits LID, causing apparent underperformance.

Customer dispute over first-year output without LID baseline.

Mixing LID-affected and LID-free modules in yield averages.

Confusing LID with LeTID.

## Key takeaways

LID is the initial efficiency loss in the first 100 hours of solar exposure for p-type silicon modules. Mainstream PERC loses 1 to 2.5 percent; gallium-doped PERC less; TOPCon and HJT effectively eliminate LID. Modern warranty curves and yield models include LID. The Indian industry is migrating toward n-type cell technologies that minimise LID and provide higher stabilised efficiency.

## Need yield modelling that accounts for LID?

QBits Energy provides yield modelling and PPA-grade performance projections that correctly account for LID, LeTID and long-term degradation for Indian solar projects.

## Sources

- Schmidt J., Aberle A. G., Hezel R., Investigation of carrier lifetime instabilities in Cz-grown silicon, Proceedings of IEEE PVSC, 1997.
- IEC 61215, Module qualification and type approval.
- IEC TS 63209, Extended-stress testing of PV modules.
- IEC TS 61853-4, Performance testing under operating conditions.
- IS 14286, Indian Standard for crystalline silicon PV modules.
- ITRPV Roadmap, latest edition, VDMA.
- NREL Technical Report TP-5J00-78211, PV Module Degradation Rates.
- Glunz S. W., et al., Light-induced degradation in crystalline silicon solar cells, Progress in Photovoltaics, various.
- IEA PVPS Task 13 Report on PV performance and reliability.
