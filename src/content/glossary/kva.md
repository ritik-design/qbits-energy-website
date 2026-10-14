---
term: kVA
title: "kVA (Kilovolt-Ampere): Definition, Calculation & Solar Applications"
description: "kVA is the unit of apparent power in AC circuits. Guide to calculation and solar inverter/transformer applications."
category: Electrical Basics
categorySlug: electrical-basics
priority: P2
updatedDate: 2026-10-14
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
- { slug: solar-inverter, term: Solar Inverter }
faqs:
- q: "What does kVA mean?"
  a: "Kilovolt-ampere is a unit of apparent AC power, based on RMS voltage and current. One kVA is 1,000 volt-amperes."
- q: "What is the formula for kVA?"
  a: "For a single-phase sinusoidal circuit, kVA equals RMS voltage times RMS current divided by 1,000. For a balanced three-phase circuit, kVA equals the square root of 3 times line-to-line RMS voltage times line current, divided by 1,000."
- q: "How do I convert kVA to kW?"
  a: "Multiply apparent power in kVA by the actual power factor. For example, 5 kVA at 0.8 power factor is 4 kW of active power, if both ratings apply under the same conditions."
- q: "How do I convert kW to kVA?"
  a: "Divide the active power in kW by the power factor. A 4 kW load at 0.8 power factor draws 4 ÷ 0.8 = 5 kVA."
- q: "What is the difference between kVA and kW?"
  a: "kVA is apparent power, the product of voltage and current. kW is active power, the part that does useful work. They are equal only at unity power factor, and kW is never larger than kVA."
- q: "Is a 5 kVA inverter always a 5 kW inverter?"
  a: "No. Check its continuous active-power rating, allowable power factor, output voltage, surge rating and load conditions on the exact model datasheet."
- q: "Why are inverters, transformers and generators rated in kVA?"
  a: "Heating in the windings or power electronics depends on the current, and the current depends on apparent power. A kVA rating therefore describes the thermal limit whatever the power factor of the load."
- q: "What is the three-phase apparent-power formula?"
  a: "For balanced three-phase sinusoidal conditions, kVA equals square root of 3 times line-to-line RMS voltage times line current, divided by 1,000."
- q: "How do I find the current from kVA?"
  a: "For single phase, current in amperes is kVA times 1,000 divided by voltage. For three phase, it is kVA times 1,000 divided by (square root of 3 times line-to-line voltage)."
- q: "What is the difference between kVA and kVAR?"
  a: "kVAR is reactive power, the part that moves back and forth between source and load without doing useful work. kVA is the combination of kW and kVAR: kVA squared equals kW squared plus kVAR squared."
- q: "Does the kVA rating include motor starting surge?"
  a: "Not unless the datasheet says so. Continuous rating and short-duration overload or surge rating are separate figures. Motors can draw a much higher current on start, so check the motor's starting current against the inverter's stated overload capability."
- q: "Is sanctioned load or contract demand in kW or kVA?"
  a: "It depends on the tariff category and state. Many commercial and industrial tariffs use kVA for contract demand, and some residential connections use kW. Read your bill and tariff order for the unit."
- q: "What kVA inverter do I need for my home?"
  a: "Start from the list of loads you want to run together and their starting behaviour, not from a rule of thumb. An installer should check the load schedule against the model's continuous and surge ratings."
- q: "Can a grid-tied solar inverter output more kVA than its kW rating?"
  a: "Some models carry an apparent-power limit above the rated active power to allow reactive-power output. The Qbits QB-4.6KTLS datasheet lists 4,600 W rated output and 5.06 kVA maximum output power, for example. The figures differ by model."
- q: "Where is kVA used in solar projects?"
  a: "In inverter and transformer ratings, in generator and UPS sizing, in utility connection capacity and contract demand, and in checking that reactive-power operation stays within the equipment limit."
author: Nirav Dhanani
---

## What is kVA?

**kVA (kilovolt-amperes)** measures **apparent power** in an AC circuit. It combines RMS voltage and current. **kW (kilowatts)** measures active power delivered to loads or the grid. The two are related by the actual [power factor](/glossary/power-factor/) under the same operating conditions.

For a sinusoidal single-phase circuit: **kVA = volts RMS × amperes RMS ÷ 1,000**. For a balanced three-phase circuit: **kVA = √3 × line-to-line volts RMS × line amperes RMS ÷ 1,000**. Use the correct voltage and current convention before applying a formula to a real connection.

> [!KEYTAKEAWAYS]
> - kVA is apparent power, the voltage-current product the equipment has to carry. kW is the active part that does useful work, and power factor links the two.
> - Convert with the power factor stated: a 5 kVA inverter at a power factor of 0.8 delivers 5 × 0.8 = 4 kW.
> - A kVA label alone does not tell you battery backup duration, motor-start capability, PV input or grid-export approval.
> - Commercial and industrial DISCOM tariffs commonly use kVA for contract or maximum demand, while a household connection is often stated in kW.
> - Quote the kW and kVA figures from the datasheet of the exact model, never from another model.

## Why apparent power exists

In a DC circuit, power is voltage times current. In an AC circuit, voltage and current alternate, and they can be out of step. The product of their RMS values (kVA) is the total the equipment has to carry. Only the in-phase part does useful work (kW). The remainder, called [reactive power](/glossary/reactive-power/) (kVAR), moves back and forth between the source and the load. The three are linked by:

> [!FORMULA]
> kVA² = kW² + kVAR², and power factor = kW ÷ kVA

**kVA² = kW² + kVAR²**, and **power factor = kW ÷ kVA**.

Because conductors, windings and power electronics heat according to the current, equipment is rated in kVA: the rating says how much current it can carry at a given voltage, whatever mix of kW and kVAR that current represents.

## kVA versus kW: a checked example

> [!EXAMPLE] 5 kVA at two power factors
> If an inverter can supply **5 kVA** continuously at a power factor of **0.8**, its active power at that operating point is **5 × 0.8 = 4 kW**. At a power factor of 1.0, **5 kVA** corresponds to **5 kW**, but only if the product's separate continuous kW rating also permits it. These are arithmetic examples, not Qbits model specifications.

Table: Active power (kW) delivered by a 5 kVA supply at different power factors

| Power factor | kW delivered by 5 kVA |
| --- | --- |
| 1.00 | 5.0 |
| 0.95 | 4.75 |
| 0.90 | 4.5 |
| 0.80 | 4.0 |
| 0.70 | 3.5 |

```chart
type: bar
title: Active power delivered by a 5 kVA supply at different power factors
unit: "kW"
source: "Calculated in this entry as 5 kVA multiplied by power factor, using the values in the table above"
note: "A lower power factor leaves less of the apparent power available as useful kW."
data:
  - { label: "PF 1.00", value: 5.0 }
  - { label: "PF 0.95", value: 4.75 }
  - { label: "PF 0.90", value: 4.5 }
  - { label: "PF 0.80", value: 4.0 }
  - { label: "PF 0.70", value: 3.5 }
```

Table: The five electrical quantities and what each one answers

| Quantity | Unit | What it helps answer |
| --- | --- | --- |
| Apparent power | kVA | How much voltage-current product the AC equipment carries |
| Active power | kW | How much real power is delivered or consumed |
| Reactive power | kVAR | How much power oscillates without doing work |
| Energy | kWh | How much active energy is delivered over time |
| Power factor | Unitless ratio | How active power compares with apparent power |

A 5 kVA label alone does not tell you battery backup duration, motor-start capability, PV input or grid-export approval. Read those specifications separately.

## Worked current examples

- **Single phase:** 230 V × 21.7 A ÷ 1,000 = about **5.0 kVA**.
- **Three phase:** √3 × 415 V × 27.8 A ÷ 1,000 = about **20.0 kVA**.
- **Current from kVA, single phase:** 5 kVA at 230 V draws 5,000 ÷ 230 = about **21.7 A**.
- **Current from kVA, three phase:** 20 kVA at 415 V draws 20,000 ÷ (√3 × 415) = about **27.8 A** per phase.

Check the voltage convention. Single-phase equipment uses the phase-to-neutral voltage, and three-phase formulas use the line-to-line voltage.

## A datasheet example: kW and kVA on one model

Qbits datasheets list both a rated output power in watts and a maximum output power in kVA. For the QB-4.6/5/6KTLS single-phase family, the published technical data (checked October 2026) show 4,600 W with 5.06 kVA, 5,000 W with 5.5 kVA, and 6,000 W with 6.6 kVA. The QB 6 to 17KTLC three-phase datasheet shows 6,000 W with 6.6 kVA for the 6KTLC. In each case the kVA figure is 1.1 times the rated watts, which corresponds to a ratio of about 0.91 between kW and kVA at maximum apparent power.

Two cautions follow from the arithmetic, and both are worth confirming with the manufacturer rather than assuming:

- The kVA figure is the apparent-power limit. If the inverter is asked to supply reactive power, the active power it can deliver at the same time is limited by that kVA figure. For example, 6.6 kVA at a power factor of 0.8 allows at most 6.6 × 0.8 = 5.28 kW.
- The kVA rating of one model is not a rule for another. Quote the figures from the datasheet of the exact model.

The datasheets also state a power-factor range for the same models, which the [power factor](/glossary/power-factor/) entry explains.

## Using kVA in inverter selection

Check the exact [inverter datasheet](/download-datasheets/), starting from the [on-grid inverter range](/on-grid-inverter/), for both **continuous kW and kVA**, permitted power-factor range, phase, output voltage and short-duration overload. A motor can require a higher starting current than its normal-running kW suggests. A site may also have a DISCOM contract-demand rule that uses a different measurement period or unit; inspect the actual tariff and bill.

The [solar inverter sizing guide](/blog/solar-inverter-sizing/) explains the full equipment choice. The [single versus three-phase guide](/blog/single-vs-3-phase-inverter/) explains how the choice between phases changes the arrangement. Avoid a universal "add 25%" home-sizing rule: the safe margin depends on the specified loads, start-up behaviour, product ratings and circuit design. Ask an installer to verify the load schedule rather than choosing solely from a kVA conversion.

## Surge and motor starting

Loads with motors or compressors draw a higher current when they start than when they run. How much higher depends on the specific motor and its starter, so the motor's nameplate or datasheet (locked-rotor current) is the right source, not a generic multiplier. Compare that starting current with the overload or surge capability stated for the inverter, and with how long that capability is available. Continuous kVA does not include surge unless the datasheet says so.

## kVA in transformers, generators and UPS

A transformer's nameplate kVA rating states how much apparent power it can carry at rated voltage within its thermal limits. Power transformers are covered by IS 2026 in India and the IEC 60076 series internationally. A generator and a UPS are rated the same way. When reactive current rises, the current rises with it, so a poor power factor can use up kVA capacity even when kW is modest. The presence or absence of a transformer stage inside an inverter changes its design, as the [transformerless versus transformer-based inverter comparison](/blog/transformerless-vs-transformer-inverter/) explains.

## kVA in utility tariffs

Many commercial and industrial tariffs bill or limit a maximum demand in kVA, and a connection's sanctioned capacity may be stated in kVA or kW depending on the state and category. Exceeding the contract figure can attract a charge under the tariff order. Read the unit and the measurement interval in your own tariff and bill before sizing, and see the [DISCOM](/glossary/discom/) entry for who to ask.

## Common kVA problems

> [!WARNING] 5 kVA does not mean 5 kW of load
> A customer who assumes a 5 kVA inverter will run 5 kW of load at a lower power factor will be short: at 0.8 the ceiling is 4 kW. A quotation that converts kVA to kW without stating the power factor assumed hides the same gap.

- A customer assumes a 5 kVA inverter will run 5 kW of load at a lower power factor.
- An off-grid or backup inverter trips when a motor starts because the starting current exceeds its overload capability.
- A site exceeds contract demand because kVA, not kW, is what the utility measures.
- A transformer or inverter runs hot because reactive current is using capacity.
- A quotation converts kVA to kW without stating the power factor assumed.

## Best practices

1. Size from the actual load schedule, including starting behaviour, not nominal wattage.
2. Specify continuous and short-duration ratings in the purchase order.
3. State the power factor whenever you convert between kW and kVA.
4. Check the tariff and bill for the unit and interval used for demand.
5. Verify the specification on the exact model's datasheet.

## Where it applies in India

DISCOM tariffs for commercial and industrial consumers commonly use kVA for contract or maximum demand, while a household connection is often stated in kW, depending on the state. Rooftop solar under residential schemes is typically described in kW of installed capacity, with kVA as a secondary inverter specification. Check the tariff order of your state commission for the unit that applies.

## Standards and references

Table: References behind kVA ratings and demand charges

| Reference | Scope |
| --- | --- |
| IEC 80000-6 | Quantities and units for electromagnetism, including apparent power and its unit, the volt-ampere |
| IS 2026 and IEC 60076 series | Power transformer requirements, including ratings |
| State tariff orders | The unit and interval for contract and maximum demand |
| Manufacturer datasheets | The kW, kVA, power-factor and overload ratings for each model |

## Common mistakes

- Treating kVA and kW as interchangeable.
- Dividing or multiplying by an assumed power factor without saying so.
- Applying one model's kVA figure to another model.
- Ignoring starting current when sizing for motors.
- Mixing phase and line voltages in a three-phase calculation.

## Key takeaways

kVA is the apparent power the equipment has to carry. kW is the part that does work. Power factor links them, and the datasheet of the exact model is where the usable numbers live. Size from the load schedule, check the tariff unit, and state your power factor assumption whenever you convert.
