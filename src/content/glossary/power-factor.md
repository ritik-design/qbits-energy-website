---
term: Power Factor
title: "Power Factor: Definition, Calculation & Solar Inverter Applications"
description: "Power factor is the ratio of active to apparent power. Guide to calculation, penalty schedules and inverter reactive support."
category: Power Quality
categorySlug: power-quality
priority: P1
updatedDate: 2026-10-14
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
- { slug: thd, term: THD }
faqs:
- q: "What is power factor in simple words?"
  a: "A ratio between 0 and 1 that shows how much of the apparent AC power is active power doing useful work. At 1.0 all of it is active. Lower values mean more current is needed for the same active power."
- q: "What is the power factor formula?"
  a: "Power factor equals active power in kW divided by apparent power in kVA when measured at the same point and time."
- q: "Is power factor always the cosine of the phase angle?"
  a: "That is the displacement power factor for sinusoidal voltage and current. With waveform distortion, true power factor also reflects harmonics, so the two can differ."
- q: "How are power factor, kW, kVA and kVAR related?"
  a: "kVA squared equals kW squared plus kVAR squared, and power factor equals kW divided by kVA. Given any two of kW, kVA and kVAR you can find the third and the power factor."
- q: "What is lagging and leading power factor?"
  a: "Lagging means current lags voltage, which is typical of inductive loads such as motors. Leading means current leads voltage, which is typical of capacitive behaviour, for example an over-sized capacitor bank. The sign convention should be stated with the value."
- q: "Does low power factor waste electricity?"
  a: "Not directly. The reactive current does no useful work but flows in the wiring, so cables, transformers and generators carry more current and heat more for the same kW, which raises losses and uses up capacity."
- q: "What is a good power factor?"
  a: "Close to 1.0 is best. What counts as acceptable for billing or connection is set by the tariff order, DISCOM or approval for your connection, so check those documents."
- q: "Is there one Indian power-factor penalty threshold?"
  a: "No. Billing thresholds and incentives depend on the current tariff order, DISCOM and consumer category. Check the actual connection's tariff."
- q: "Does power factor matter for a home?"
  a: "Usually much less. Many residential tariffs do not bill on power factor. Commercial and industrial connections with motors and compressors are where it commonly appears on the bill."
- q: "How is power factor measured?"
  a: "A meter or power analyser measures active and apparent or reactive energy or power and computes the ratio. Billing meters often report an average over the billing period, which can differ from the value at any instant."
- q: "What is power factor correction?"
  a: "Adding capacitors, active compensation or reactive-power control from suitable equipment so the current drawn from the supply is closer to in phase with the voltage. The right method depends on the load, harmonics and the tariff."
- q: "Can a solar inverter support reactive power?"
  a: "Some models can, within their published capability and the approved site settings. This does not automatically correct every site's metered power factor or replace a designed compensation system."
- q: "What power factor do Qbits inverters state?"
  a: "The Qbits QB-4.6/5/6KTLS and QB 6 to 17KTLC datasheets list a power factor above 0.99 under rated power, with an adjustable range of 0.8 leading to 0.8 lagging (checked October 2026). Check the datasheet of the exact model."
- q: "How is power factor related to THD?"
  a: "Harmonic currents add to the RMS current without adding active power, so they lower true power factor. For a sinusoidal supply, true power factor equals displacement power factor divided by the square root of (1 plus the square of current THD as a fraction)."
- q: "Can solar replace capacitor banks?"
  a: "Not as a general rule. An inverter's reactive output is limited by its apparent-power rating, is available mainly while it is generating, and may be restricted by the approval. A capacitor bank or other compensation may still be needed at night or for large reactive demand."
author: Nirav Dhanani
---

## What is power factor?

**Power factor (PF) = active power (kW) ÷ apparent power (kVA)** at the same measurement point and time. If a circuit carries 5 kVA and delivers 4 kW of active power, the PF magnitude is **4 ÷ 5 = 0.8**. The direction and sign convention for leading or lagging operation should be stated separately.

At the same active power, a lower PF generally means more current and greater loading of cables, transformers or an inverter. It does not mean that “20% of the electricity is wasted” in the 0.8 example. Reactive power and losses are distinct quantities.

## Power factor explained simply

Imagine pulling a boat along a canal from the bank with a rope. Only the part of your pull that points along the canal moves the boat, and the sideways part strains the rope without moving anything. Active power is the along-the-canal pull. Reactive power is the sideways pull. Apparent power is the total pull on the rope. Power factor tells you how much of the total is useful.

An inductive load such as a motor needs current to build its magnetic field, and that current is out of step with the voltage. The supply has to carry it, even though it does no work. That is why a lightly loaded motor can have a poor power factor.

## The power triangle

Active power (P, in kW), reactive power (Q, in kVAR) and apparent power (S, in kVA) form a right-angled triangle:

- **S² = P² + Q²**
- **PF = P ÷ S = cos φ** for sinusoidal waveforms, where φ is the phase angle between voltage and current
- **Q = S × sin φ**

**Checked example.** A load draws 40 kW at a power factor of 0.8. Then S = 40 ÷ 0.8 = **50 kVA**, and Q = √(50² − 40²) = √900 = **30 kVAR**. If compensation brings Q down to 10 kVAR with the same 40 kW, S becomes √(40² + 10²) = about **41.2 kVA** and PF rises to 40 ÷ 41.2 = about **0.97**. The current falls in proportion to S, from 50 to 41.2 units. These are arithmetic examples, not metered site data.

## Leading, lagging and waveform distortion

An inductive load commonly draws lagging reactive power; capacitive behaviour can be leading. Solar inverters that support reactive-power control can operate within a specified capability envelope, but this may constrain simultaneous active-power output. The exact limits and permitted settings come from the model and grid approval.

For ideal sinusoidal waveforms, displacement PF relates to the phase angle as **cos φ**. With harmonics, **true PF** also includes a distortion term. For a sinusoidal voltage and a current with total harmonic distortion THD_I (as a fraction), **true PF = displacement PF ÷ √(1 + THD_I²)**. A current with 10% THD lowers true PF by only about 0.5%, while a heavily distorted current lowers it more. A meter, invoice and inverter datasheet may report different PF definitions or boundaries; compare them carefully. The [THD guide](/glossary/thd/) explains harmonic distortion, while [kVA](/glossary/kva/) explains apparent power.

## Why power factor matters

- **Equipment loading.** More current for the same kW loads transformers, cables and switchgear and can limit how much more load they can carry.
- **Network losses.** Reactive current adds I²R losses in the network.
- **Billing.** Some commercial and industrial tariffs include a power-factor penalty or incentive, or bill on apparent energy (kVAh) rather than active energy (kWh).
- **Grid connection.** Utilities and grid codes may state a reactive-power capability or operating range for larger generators.

## What does it mean for a solar project?

| Situation | Decision to make |
| --- | --- |
| Equipment sizing | Check continuous kW and kVA ratings at the intended PF |
| C&I billing | Read the current DISCOM tariff order and meter boundary |
| Inverter reactive support | Verify product capability and utility-approved settings |
| Low metered PF | Measure the site loads and compensation arrangement before changing controls |

Do not assume a solar inverter can replace capacitor banks, fix an entire plant's bill or operate at a universal PF setpoint.

## Inverter reactive capability: a worked example

An inverter's output current limit is set by its apparent power S. Whatever S it cannot use for active power is available for reactive power:

**Q available = √(S² − P²)**

Take the Qbits QB-6KTLC three-phase model, whose datasheet lists 6,000 W rated output and 6.6 kVA maximum output power, with a power factor above 0.99 under rated power and an adjustable range of 0.8 leading to 0.8 lagging (checked October 2026). If the 6.6 kVA limit is what governs:

| Active power P | Reactive power available | Resulting PF at that point |
| --- | --- | --- |
| 6.0 kW | √(6.6² − 6.0²) = about 2.75 kVAR | 6.0 ÷ 6.6 = about 0.91 |
| 5.28 kW | √(6.6² − 5.28²) = about 3.96 kVAR | 0.80 |

So running at a 0.8 power factor can reduce the active power the inverter may deliver at that moment, compared with its rating at unity power factor. Confirm the exact derating behaviour with the manufacturer. The same arithmetic applies to any model, but the figures belong to that model's datasheet.

## Power factor correction methods

| Method | Strength | Limitation |
| --- | --- | --- |
| Fixed capacitor bank | Simple and low cost | Cannot follow a varying load, so risks over-compensation |
| Automatic switched capacitor bank | Follows the load in steps | Switching transients and mechanical wear |
| Active compensation | Fast and flexible | Higher cost |
| Synchronous machine | Robust and controllable | Mechanical and larger |
| Inverter reactive-power control | Uses equipment already on site while it is generating | Bounded by kVA rating, only available during generation and subject to approval |

Capacitor banks can interact with harmonics from inverters and drives. A resonance between the bank and the network can amplify a harmonic and overheat the capacitors, which is one reason to measure before adding or changing compensation. The [THD in solar inverters guide](/blog/thd-solar-inverter/) covers distortion at the output.

## Solar and power factor in practice

- **Daytime only.** Inverter reactive support is available while the inverter is generating, so a site that is billed on whole-day or evening power factor may still need other compensation.
- **Approval.** Utilities set the allowed operating mode, so a power-factor or voltage-control setting should follow the connection approval and not a generic setpoint.
- **Interaction with export limits.** Reactive output, active output and any [zero-export](/glossary/zero-export/) control all share the same current limit.
- **Measurement point.** The PF the utility bills is measured at its meter, which may be some distance from the inverter, so what the inverter reports and what the meter reports can differ.

The [reactive power guide](/blog/reactive-power-solar-inverters-india/) discusses the topic in more depth for commercial sites.

## Common problems

- A power-factor penalty continues after installing solar because the inverter was never configured for reactive output.
- A capacitor bank over-compensates and produces leading PF at low load.
- Resonance between capacitors and harmonics.
- Large swings through the day that a fixed bank cannot follow.
- Comparing a displacement PF on a datasheet with a true PF on a bill.
- A PF measured at the inverter used to explain a PF measured at the meter.

## Best practices

1. Read the tariff order for the PF threshold, penalty method and billing basis.
2. Measure the load's PF over a representative period before choosing a remedy.
3. Check harmonics before adding capacitors.
4. Set inverter reactive controls only within the model's capability and the approved mode.
5. Review the PF on the bills after any change.
6. Have a qualified engineer review a persistent penalty.

## Indian context

State commissions set power-factor thresholds, incentives and penalties in tariff orders, so the same load can be treated differently in two states. Many tariffs apply to commercial and industrial categories, and some residential categories are not billed on PF at all. Grid-connection requirements for distributed generation are set in the CEA connectivity regulations and in state rules and approvals. Those regulations address matters such as harmonic injection and DC injection, and any reactive-power operating range for your plant should come from the connection approval or the applicable grid code, not a generic figure. Check the current text for your connection.

For Qbits models, obtain the current [product datasheet](/download-datasheets/) and site requirements before setting reactive controls. The [on-grid inverter range](/on-grid-inverter/) page lists the models, and the [C&I solutions](/c-i-solution/) page covers commercial projects. See also the [reactive power](/glossary/reactive-power/) entry.

## Standards and references

| Reference | Scope |
| --- | --- |
| State commission tariff orders | Power-factor thresholds, penalties and incentives |
| CEA connectivity regulations for distributed generation | Technical conditions for connecting distributed generation, including harmonics and DC injection |
| IEC 80000-6 | Quantities and units, including apparent power and power factor |
| Manufacturer datasheets | PF range and apparent-power limits for each inverter model |

## Common mistakes

- Using kW instead of kVA to size equipment at a low PF.
- Assuming an inverter can supply reactive power at full active output.
- Treating one tariff's threshold as a national rule.
- Adding capacitors without measuring harmonics.
- Reading displacement PF and true PF as the same number.

## Key takeaways

Power factor is kW divided by kVA. A low value means more current for the same work, which loads equipment and can raise charges. A solar inverter may help within its kVA limit and the approved settings, but it is not a universal substitute for compensation. Check the tariff, measure the site, and use the datasheet of the exact model.
