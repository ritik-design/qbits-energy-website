---
term: Power Factor
title: 'Power Factor: kW, kVA and Solar Inverter Reactive Power'
description: Power factor is active power divided by apparent power. Learn the formula, a checked example, leading and lagging operation, and why site rules matter.
category: Power Quality
categorySlug: power-quality
priority: P1
updatedDate: 2026-09-23
keywords:
- what is power factor
- power factor formula
- solar inverter power factor
- kva vs kw
shortDefinition: Power factor is the ratio of active power to apparent power at a stated point and operating condition. It indicates how much of the apparent AC power is active power.
quickFacts:
  industry: AC power quality
  primaryUse: Comparing active and apparent power
  commonUsers: Engineers, utilities, EPCs and C&I customers
  relatedTechnologies: Reactive-power control, inverters and meters
relatedTerms:
- { slug: kva, term: kVA }
- { slug: reactive-power, term: Reactive Power }
- { slug: apparent-power, term: Apparent Power }
- { slug: thd, term: THD }
faqs:
- q: What is the power factor formula?
  a: Power factor equals active power in kW divided by apparent power in kVA when measured at the same point and time.
- q: Is power factor always cosine of the phase angle?
  a: That is the displacement power factor for sinusoidal voltage and current. With waveform distortion, true power factor also reflects harmonics, so the two can differ.
- q: Can a solar inverter support reactive power?
  a: Some models can, within their published capability and the approved site settings. This does not automatically correct every site's metered power factor or replace a designed compensation system.
- q: Is there one Indian power-factor penalty threshold?
  a: No. Billing thresholds and incentives depend on the current tariff order, DISCOM and consumer category. Check the actual connection's tariff.
author: Nirav Dhanani
---

## What is power factor?

**Power factor (PF) = active power (kW) ÷ apparent power (kVA)** at the same measurement point and time. If a circuit carries 5 kVA and delivers 4 kW of active power, the PF magnitude is **4 ÷ 5 = 0.8**. The direction and sign convention for leading or lagging operation should be stated separately.

At the same active power, a lower PF generally means more current and greater loading of cables, transformers or an inverter. It does not mean that “20% of the electricity is wasted” in the 0.8 example. Reactive power and losses are distinct quantities.

## Leading, lagging and waveform distortion

An inductive load commonly draws lagging reactive power; capacitive behavior can be leading. Solar inverters that support reactive-power control can operate within a specified capability envelope, but this may constrain simultaneous active-power output. The exact limits and permitted settings come from the model and grid approval.

For ideal sinusoidal waveforms, displacement PF relates to the phase angle as **cos φ**. With harmonics, **true PF** can differ from cos φ. A meter, invoice and inverter datasheet may report different PF definitions or boundaries; compare them carefully. The [THD guide](/glossary/thd/) explains harmonic distortion, while [kVA](/glossary/kva/) explains apparent power.

## What does it mean for a solar project?

| Situation | Decision to make |
| --- | --- |
| Equipment sizing | Check continuous kW and kVA ratings at the intended PF |
| C&I billing | Read the current DISCOM tariff order and meter boundary |
| Inverter reactive support | Verify product capability and utility-approved settings |
| Low metered PF | Measure the site loads and compensation arrangement before changing controls |

Do not assume a solar inverter can replace capacitor banks, fix an entire plant's bill or operate at a universal PF setpoint. The old page gave one penalty schedule and grid-code threshold for all Indian customers without the connection-specific tariff. Those claims have been removed.

For Qbits models, obtain the current [product datasheet](/download-datasheets/) and site requirements before setting reactive controls. Have a qualified engineer review any power-quality or penalty problem.
