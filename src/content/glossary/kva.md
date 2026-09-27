---
term: kVA
title: 'kVA vs kW: Apparent Power and Inverter Sizing'
description: kVA measures apparent AC power; kW measures active power. See single-phase and three-phase formulas, a checked example and what an inverter rating means.
category: Electrical Basics
categorySlug: electrical-basics
priority: P2
updatedDate: 2026-09-23
keywords:
- what is kva
- kva vs kw
- inverter kva rating
- kilovolt ampere
shortDefinition: Kilovolt-ampere (kVA) is a unit of apparent AC power. For sinusoidal single-phase conditions, apparent power in kVA is RMS voltage times RMS current divided by 1,000.
quickFacts:
  industry: AC electrical engineering
  primaryUse: Stating apparent-power ratings of equipment
  commonUsers: Engineers, installers and buyers
  relatedTechnologies: Inverters, transformers and generators
relatedTerms:
- { slug: power-factor, term: Power Factor }
- { slug: active-power, term: Active Power }
- { slug: apparent-power, term: Apparent Power }
- { slug: solar-inverter, term: Solar Inverter }
faqs:
- q: What does kVA mean?
  a: Kilovolt-ampere is a unit of apparent AC power, based on RMS voltage and current.
- q: How do I convert kVA to kW?
  a: Multiply apparent power in kVA by the actual power factor. For example, 5 kVA at 0.8 power factor is 4 kW of active power, if both ratings apply under the same conditions.
- q: Is a 5 kVA inverter always a 5 kW inverter?
  a: No. Check its continuous active-power rating, allowable power factor, output voltage, surge rating and load conditions on the exact model datasheet.
- q: What is the three-phase apparent-power formula?
  a: For balanced three-phase sinusoidal conditions, kVA equals square root of 3 times line-to-line RMS voltage times line current, divided by 1,000.
author: Nirav Dhanani
---

## What is kVA?

**kVA (kilovolt-amperes)** measures **apparent power** in an AC circuit. It combines RMS voltage and current. **kW (kilowatts)** measures active power delivered to loads or the grid. The two are related by the actual [power factor](/glossary/power-factor/) under the same operating conditions.

For a sinusoidal single-phase circuit: **kVA = volts RMS × amperes RMS ÷ 1,000**. For a balanced three-phase circuit: **kVA = √3 × line-to-line volts RMS × line amperes RMS ÷ 1,000**. Use the correct voltage and current convention before applying a formula to a real connection.

## kVA versus kW: a checked example

If an inverter can supply **5 kVA** continuously at a power factor of **0.8**, its active power at that operating point is **5 × 0.8 = 4 kW**. At a power factor of 1.0, **5 kVA** corresponds to **5 kW**, but only if the product's separate continuous kW rating also permits it. These are arithmetic examples, not Qbits model specifications.

| Quantity | Unit | What it helps answer |
| --- | --- | --- |
| Apparent power | kVA | How much voltage-current product the AC equipment carries |
| Active power | kW | How much real power is delivered or consumed |
| Energy | kWh | How much active energy is delivered over time |
| Power factor | Unitless ratio | How active power compares with apparent power |

A 5 kVA label alone does not tell you battery backup duration, motor-start capability, PV input or grid-export approval. Read those specifications separately.

## Using kVA in inverter selection

Check the exact [inverter datasheet](/download-datasheets/) for both **continuous kW and kVA**, permitted power-factor range, phase, output voltage and short-duration overload. A motor can require a higher starting current than its normal-running kW suggests. A site may also have a DISCOM contract-demand rule that uses a different measurement period or unit; inspect the actual tariff and bill.

The [solar inverter sizing guide](/blog/solar-inverter-sizing/) explains the full equipment choice. Avoid the previous page's universal “add 25%” home-sizing rule: the safe margin depends on the specified loads, start-up behavior, product ratings and circuit design. Ask an installer to verify the load schedule rather than choosing solely from a kVA conversion.
