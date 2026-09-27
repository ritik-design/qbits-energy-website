---
term: Total Harmonic Distortion (THD)
title: 'THD: Total Harmonic Distortion in Solar Inverters'
description: THD measures harmonic distortion relative to the fundamental waveform. See the formula, a checked example, THD versus TDD and what an inverter datasheet claim means.
category: Power Quality
categorySlug: power-quality
priority: P1
updatedDate: 2026-09-23
keywords:
- what is thd
- total harmonic distortion
- thd formula
- thd solar inverter
- thd vs tdd
shortDefinition: Total Harmonic Distortion (THD) is the RMS magnitude of the harmonic components of a voltage or current waveform divided by the RMS magnitude of its fundamental component, usually expressed as a percentage.
quickFacts:
  industry: Power quality and solar inverter specifications
  primaryUse: Describing waveform distortion under stated test conditions
  commonUsers: Engineers, EPCs and equipment buyers
  relevantStandards: Check applicable IEC 61000 measurement methods and local grid requirements
  relatedTechnologies: Inverter output filters, power-quality analysers and harmonics
relatedTerms:
- { slug: harmonics, term: Harmonics }
- { slug: power-factor, term: Power Factor }
- { slug: tdd, term: Total Demand Distortion }
- { slug: solar-inverter, term: Solar Inverter }
faqs:
- q: What is THD in simple terms?
  a: It describes how much of a voltage or current waveform is made of harmonics rather than its fundamental frequency. Lower is generally preferable when the same measurement conditions are used.
- q: What is the THD formula?
  a: THD equals the square root of the sum of squared RMS harmonic components, divided by the fundamental RMS component, multiplied by 100 percent.
- q: Is THD the same as TDD?
  a: No. THD uses the fundamental component as its denominator; current TDD uses a defined maximum-demand reference. They should not be compared as interchangeable percentages.
- q: Does a datasheet THD figure apply at every load?
  a: Not necessarily. Check whether it is current or voltage THD and the load, power factor, measurement bandwidth and test conditions stated by the manufacturer.
author: Keyur Rakholiya
---

## What is THD?

**Total Harmonic Distortion (THD)** compares the combined RMS magnitude of harmonics with the RMS magnitude of the fundamental component in an electrical waveform. It can describe **voltage** or **current**. A solar-inverter datasheet commonly gives an AC-output **current THD** figure, but the load and test conditions matter.

A lower THD figure can indicate a cleaner waveform under the same measurement method. It is not a complete statement about grid compliance, equipment safety or performance at every output level.

## Formula and checked example

For harmonic components numbered 2 through *n*:

**THD (%) = 100 × √(H₂² + H₃² + … + Hₙ²) ÷ H₁**

Here each H is the RMS magnitude of that frequency component, and H₁ is the fundamental. For an illustrative current waveform with a 100 A fundamental, a 3 A third harmonic and a 4 A fifth harmonic, the combined harmonic RMS is **√(3² + 4²) = 5 A**. THD for only those stated components is **5 ÷ 100 × 100 = 5%**. This is an arithmetic example, not a measured Qbits product value or a pass/fail limit.

A real analyser may include more harmonic orders and apply a specific aggregation method. Its reported value can therefore differ from a simplified hand calculation.

## Voltage THD, current THD and TDD

| Measure | Numerator | Denominator | Common use |
| --- | --- | --- | --- |
| Voltage THD | Voltage harmonics | Fundamental voltage | Describes voltage waveform distortion at a measurement point |
| Current THD | Current harmonics | Fundamental current at that operating point | Describes current distortion under the stated load |
| Current TDD | Current harmonics | Defined maximum demand load current | Helps assess harmonic impact against a demand reference |

A claim such as “THD <3%” is incomplete without identifying **what** was measured and **when**. At light load, the fundamental current is smaller, so current THD can change even when the harmonic current changes little. Ask for the test condition before comparing two inverter brochures.

## Reading an inverter specification

Check whether the figure covers rated output only, a range of loads, a stated power factor and a defined grid voltage. Also check the standard or procedure used for the measurement. A grid-connection decision should use the actual applicable utility and product documentation, not a single THD number copied from an article.

The [Qbits datasheet library](/download-datasheets/) is the starting point for a specific inverter model. For an engineering review, request the current model revision and its test report. If a site has a harmonic complaint, have a qualified person measure at the relevant point of connection; do not assume the inverter is the sole source when loads, transformers and other equipment share the network.

THD is distinct from [power factor](/glossary/power-factor/), [performance ratio](/glossary/pr/) and the safety scope of [IEC 62109](/glossary/iec-62109/). This entry does not state universal Indian limits or ALMM inverter claims, because no current matching source supports them as a blanket rule.
