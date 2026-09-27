---
term: MPPT
title: 'MPPT in Solar: Meaning, Voltage Range and Tracker Count'
description: Learn what maximum power point tracking does, why voltage and current limits matter, and when two independent MPPT inputs help a solar array.
category: MPPT and Strings
categorySlug: mppt-strings
priority: P0
updatedDate: 2026-09-23
keywords:
- what is mppt
- mppt full form
- mppt working
- mppt vs pwm
- mppt charge controller
- mppt inverter
- solar mppt algorithm
shortDefinition: MPPT means maximum power point tracking. It adjusts the electrical operating point of a solar array to seek the voltage and current combination that produces the most available power under the present conditions.
quickFacts:
  industry: Solar Power Electronics
  primaryUse: Maximising power harvest from a PV array under varying conditions
  commonUsers: Inverter designers, installers, EPC engineers, charge controller users
  relevantStandards: EN 50530, IEC 61683, IEC 62109
  relatedTechnologies: Perturb and observe, incremental conductance, IGBT, boost converter, PWM
relatedTerms:
- slug: solar-inverter
  term: Solar Inverter
- slug: pwm
  term: PWM
- slug: string-inverter
  term: String Inverter
- slug: micro-inverter
  term: Micro Inverter
- slug: charge-controller
  term: Charge Controller
- slug: i-v-curve
  term: I-V Curve
- slug: open-circuit-voltage
  term: Open Circuit Voltage
- slug: short-circuit-current
  term: Short Circuit Current
- slug: irradiance
  term: Irradiance
- slug: shading-loss
  term: Shading Loss
- slug: dc-optimiser
  term: DC Optimiser
- slug: string-sizing
  term: String Sizing
- slug: temperature-coefficient
  term: Temperature Coefficient
faqs:
- q: What does MPPT stand for?
  a: Maximum power point tracking. It adjusts the PV operating point to seek the highest available power for the present conditions.
- q: Does two MPPTs always generate more than one?
  a: No. Independent trackers are useful where strings differ in orientation or conditions, but actual benefit depends on the array and model.
- q: Is start-up voltage the same as MPPT range?
  a: No. Start-up voltage is a starting threshold; the MPPT range describes the tracking operating window.
author: Keyur Rakholiya
---

## What is MPPT?

**Maximum power point tracking (MPPT)** is the control process that seeks the PV array's highest available power at a given moment. Power equals voltage multiplied by current. Sunlight, cell temperature and shading change the available operating point, so the controller adjusts as conditions change.

MPPT does not create energy or guarantee a fixed percentage gain. The benefit compared with another controller depends on array voltage, battery voltage, shading, operating conditions and the equipment being compared.

## Quick facts

| Term | Meaning |
| --- | --- |
| Maximum power point | The voltage-current combination producing the highest available power under the present conditions |
| MPPT voltage range | The operating-voltage window in which the inverter's tracker can work as specified |
| Start-up voltage | The voltage needed for the inverter to start; it is not the full operating window |
| Maximum DC voltage | An equipment limit that must not be exceeded, including during cold conditions |
| Number of MPPTs | Number of independently controlled array inputs, not necessarily the number of connectors |

## Why does a solar inverter use MPPT?

A fixed operating voltage will not always coincide with the array's maximum power point. MPPT adjusts the inverter's PV input operating point as irradiance and temperature change. The result still depends on conversion losses, clipping, module condition and array design.

For a hybrid or off-grid arrangement, MPPT may be part of the inverter or a separate charge controller. PWM is a different control method, commonly discussed for some battery-charging applications; it is not evidence that every MPPT design has the same gain.

## One MPPT versus two independent MPPTs

A second independent tracker can help when separately designed strings have different orientations or irradiance profiles. It does not automatically increase yield on a uniform roof. Confirm that the model really has two independent trackers and check each tracker's current and voltage limits.

The [Qbits QB-4/5/6KTLD datasheet](/datasheets/products/QB_Data-Sheet_4.0-6.0-kw_2MPPT_1Phs.pdf) identifies **two MPPTs**, a maximum input current of **20 A per tracker**, an **80–550 V MPPT range**, **50 V start-up** and **550 V maximum DC input**. These are different specifications. A 50 V start does not mean that a proposed string will track correctly at 50 V under every operating condition.

Use the [single versus dual MPPT guide](/blog/dual-mppt-vs-single-mppt/) for layout decisions. For a first voltage check, use the [string-sizing calculator](/string-sizing-calculator/) and then confirm the exact panel and inverter datasheets.

## How shading affects the maximum point

Partial shade can change the shape of the array's power-voltage curve and may create more than one local peak. Some controllers use broader searches to locate a better operating point. How much energy is affected depends on shade timing, string design and hardware; a universal loss percentage would be misleading.

Separating strings by orientation or shading profile may help when supported by the model and a qualified design. Do not parallel mismatched strings or move wires between MPPT inputs using a generic diagram.

## MPPT versus inverter efficiency

MPPT performance describes tracking. The inverter's DC-to-AC conversion efficiency is another measure. A high quoted maximum efficiency is measured under stated conditions, not a guarantee of annual delivered energy.

For a real purchase, compare PV voltage/current windows, the number of independent trackers and the proposed string layout. The [datasheet reading guide](/blog/how-to-read-solar-inverter-datasheets/) explains those fields. [Contact Qbits](/contact-us/) with the array and model details for a specific compatibility enquiry.
