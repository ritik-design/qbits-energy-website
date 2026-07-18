---
term: "Power Factor"
title: "Power Factor: Definition, Calculation & Solar Inverter Applications"
description: "Power factor is the ratio of active to apparent power. Full guide to calculation, penalty schedules and inverter reactive support."
category: "Power Quality"
categorySlug: "power-quality"
priority: "P1"
updatedDate: 2026-07-18
keywords:
  - what is power factor
  - power factor calculation
  - power factor penalty
  - solar inverter power factor
  - pf correction
shortDefinition: "Power factor (PF) is the ratio of active power (kW) to apparent power (kVA) in an AC circuit. It represents how effectively electrical power is being used. Indian DISCOMs penalise C&I customers with PF below 0.85 to 0.95 depending on category."
quickFacts:
  industry: "Power Quality / Electrical Engineering"
  primaryUse: "Measure of AC power efficiency"
  commonUsers: "Customers, utilities, inverter designers"
  relevantStandards: "IEEE 1547, CEA Grid Code, IS 17387"
  relatedTechnologies: "Reactive power, smart inverter, capacitor bank"
relatedTerms:
  - { slug: "reactive-power", term: "Reactive Power" }
  - { slug: "voltage", term: "Voltage" }
  - { slug: "current", term: "Current" }
  - { slug: "kwh", term: "kWh" }
  - { slug: "kva", term: "kVA" }
  - { slug: "harmonics", term: "Harmonics" }
  - { slug: "thd", term: "THD" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "smart-inverter", term: "Smart Inverter" }
  - { slug: "fault-ride-through", term: "Fault Ride Through" }
  - { slug: "active-power", term: "Active Power" }
  - { slug: "apparent-power", term: "Apparent Power" }
faqs:
  - q: "What is power factor in simple words?"
    a: "A grade between 0 and 1 showing how effectively your equipment uses electricity. 1.0 is perfect. Lower values mean some of the power is just sloshing around without doing work."
  - q: "What is the formula for power factor?"
    a: "PF = Active power (kW) / Apparent power (kVA) = cos(φ), where φ is the phase angle between voltage and current."
  - q: "What is good power factor?"
    a: "Indian DISCOMs typically require 0.85 to 0.95 for C&I customers. Above 0.95 is excellent."
  - q: "What is power factor penalty?"
    a: "A surcharge applied by DISCOMs on customers with poor power factor. Typically 1 to 3 percent of energy bill per 0.01 below threshold."
  - q: "Lagging vs leading power factor?"
    a: "Lagging PF (inductive loads like motors) is the typical industrial case. Leading PF (capacitive) is rare and occurs with over-compensation."
  - q: "Can solar inverters fix power factor?"
    a: "Yes. Modern smart inverters can inject or absorb reactive power to maintain unity power factor at the site."
  - q: "How is power factor measured?"
    a: "By energy meter that records both active and reactive energy. PF is computed at the meter."
  - q: "Does PF affect electricity bill?"
    a: "Yes. C&I customers face PF penalties. Maintaining good PF reduces total bill."
  - q: "Is power factor important for residential customers?"
    a: "Less so. Most state SERCs do not penalise residential PF. C&I categories are heavily impacted."
  - q: "What is power factor correction?"
    a: "Adding capacitor banks or using smart inverter reactive support to bring PF closer to 1.0."
  - q: "Does poor PF damage equipment?"
    a: "Indirectly. Higher current at the same active power causes more heating in cables and transformers."
  - q: "What is the typical PF of solar inverter?"
    a: "Unity (1.0) by default. Configurable to ±0.8 leading or lagging for grid support."
  - q: "Does PF affect renewable energy projects?"
    a: "Yes. Grid code requires solar plants above 1 MW to operate at PF between 0.95 leading and 0.95 lagging."
  - q: "How is reactive power related to PF?"
    a: "PF = cos(arctan(Q/P)). Lower PF means more reactive Q relative to active P."
  - q: "Can solar replace capacitor banks?"
    a: "Yes. Solar inverter reactive capability can replace fixed and automatic capacitor banks for C&I sites."
author: "Nirav Dhanani"
---

## What is power factor

Power factor (PF) is the ratio of active power (the power that does useful work) to apparent power (the total power flowing) in an AC circuit. It is a dimensionless number between -1 and 1, often expressed as a fraction or percentage. PF equals cos(φ), where φ is the phase angle between voltage and current in the AC circuit.

A PF of 1.0 (unity) means all the power flowing is being used productively. A PF of 0.7 means only 70 percent of the apparent power is doing work; the rest is [reactive power](/glossary/reactive-power/) oscillating between source and load.

> **TL;DR**
> - Power factor is the ratio of active power (kW) to apparent power (kVA) in an AC circuit, equal to cos(φ) between voltage and current.
> - Indian DISCOMs penalise C&I customers with PF below thresholds ranging from 0.85 to 0.95, at roughly 1 percent of the bill per 0.01 shortfall.
> - Motors and other inductive loads are the usual cause of poor PF, dragging typical industrial PF down to 0.85-0.90 or lower when lightly loaded.
> - Modern smart solar inverters can inject or absorb reactive power to correct site PF, often replacing traditional capacitor banks.
> - CEA Grid Code 2019 requires generators above 10 kW to operate within 0.95 leading and 0.95 lagging PF.
> - Poor PF does not directly waste energy but increases current for the same active power, raising I²R losses and heating in cables and transformers.

For Indian C&I customers, DISCOMs penalise poor PF. Maintaining PF above 0.95 saves money and reduces grid losses. Modern solar inverters can actively support PF by injecting or absorbing reactive power.

## Why power factor matters

Customer cost. Indian DISCOMs charge PF penalty on C&I customers below 0.85 to 0.95 threshold.

Equipment loading. Lower PF means higher current for the same active power, loading transformers and cables.

Distribution losses. Reactive power flow causes I²R losses on the network.

Grid code compliance. Generators above 1 MW must operate within 0.95 leading and 0.95 lagging, alongside [fault ride through](/glossary/fault-ride-through/) requirements during grid disturbances.

Solar inverter capability. [Smart inverters](/glossary/smart-inverter/) can provide PF correction as a grid service; see [Reactive Power Support from Solar Inverters, India Grid Compliance](/blog/reactive-power-solar-inverters-india/) for the CEA Grid Code 2020 requirements above 100 kW.

## How power factor is calculated

PF = P / S = kW / [kVA](/glossary/kva/) = cos(φ)

Where:
- P = active power (kW)
- S = apparent power (kVA)
- φ = phase angle between [voltage](/glossary/voltage/) and [current](/glossary/current/)

Q = S × sin(φ) = reactive power (kVAR)
S² = P² + Q²

## Technical deep dive

### Typical PF for common loads

| Load | Typical PF |
|---|---|
| Resistive heater | 1.00 |
| Incandescent bulb | 1.00 |
| Modern LED with driver | 0.90 to 0.95 |
| Induction motor (loaded) | 0.85 to 0.90 |
| Induction motor (lightly loaded) | 0.50 to 0.70 |
| Fluorescent lamp without PFC | 0.55 |
| VFD with PFC front end | 0.95 to 0.99 |
| Welding machine | 0.50 to 0.70 |

### Indian PF penalty (example)

| State / DISCOM | Penalty threshold | Penalty rate |
|---|---|---|
| Maharashtra MSEDCL | 0.95 | 1% per 0.01 below |
| Karnataka BESCOM | 0.90 | 1 to 2% per 0.01 below |
| Delhi BSES | 0.85 | 0.5 to 1% per 0.01 below |
| Tamil Nadu TANGEDCO | 0.85 | 1% per 0.01 below |

State and DISCOM vary materially. Always consult the current tariff order.

### PF correction methods

| Method | Pros | Cons |
|---|---|---|
| Fixed capacitor bank | Cheap | No dynamic adjustment |
| Automatic switched capacitor bank | Adjustable | Mechanical wear, switching transients |
| Active filter | Fast, dynamic | Expensive |
| Synchronous condenser | Robust | Mechanical |
| Smart solar inverter | Already on site | Limited reactive capability when generating |

Fixed and switched capacitor banks used for PF correction are also vulnerable to harmonic overheating from inverter-side distortion; see [THD in Solar Inverters, Why It Matters for Sensitive Loads](/blog/thd-solar-inverter/) for why they fail early in distorted supply environments.

### Solar inverter PF capability

| Active power output | Maximum reactive (kVAR/kW) |
|---|---|
| 100% | ±33% |
| 80% | ±60% |
| 50% | ±87% |
| 0% | ±100% |

## Real-world applications

C&I customers using solar inverter reactive support to eliminate PF penalty.

Utility plants providing reactive support per dispatch instructions.

Hybrid wind-solar plants coordinating PF at point of common coupling.

VFD installations with PF correction.

Data centres maintaining unity PF for critical loads.

## Common PF problems

PF penalty continuing despite inverter installation. Inverter not configured for reactive injection.

Capacitor bank over-compensating, producing leading PF.

Resonance between capacitor bank and inverter [harmonics](/glossary/harmonics/).

PF varying widely through the day, hard to manage with fixed capacitors.

VFD harmonic distortion lowering PF measurement accuracy.

## Best practices

Audit DISCOM PF penalty quarterly.

Configure solar inverter PF setpoint based on site reactive demand.

Use volt-var mode where DISCOM allows.

Replace fixed capacitor banks with inverter-based reactive support where feasible.

Annual PF audit during preventive maintenance.

## Indian market context

CEA Grid Code 2019 requires generators above 10 kW to operate at PF between 0.95 leading and 0.95 lagging, a requirement typically documented in the project's [electrical drawings and CEIG submission](https://heavendesigns.in/electrical-ceig-drawings/).

Major Indian DISCOMs (MSEDCL, BESCOM, TNERC, BSES) include PF penalty schedules in tariff orders.

ALMM-listed inverters from Sungrow, Solis, Goodwe, Growatt, Solax and others ship with configurable PF.

Industrial customers increasingly use solar inverters as dynamic reactive sources, eliminating capacitor banks.

## Standards and certifications

| Standard | Scope |
|---|---|
| CEA Grid Code 2019 | Indian connectivity requirements |
| IEEE 1547-2018 | US smart inverter functions |
| IS 17387 | Indian grid interconnection |
| UL 1741 SA | US smart inverter |
| State SERC tariff orders | PF penalty schedules |

## Key takeaways

Power factor measures the efficiency of AC power usage, equal to cos(φ) where φ is the phase angle between voltage and current. Unity PF is ideal. Indian DISCOMs penalise C&I customers below 0.85 to 0.95 threshold. Solar inverters can actively support PF through reactive power injection or absorption, often eliminating the need for traditional capacitor banks.

## Need help with PF correction?

QBits Energy configures smart solar inverter reactive functions to eliminate PF penalties for C&I customers across India.

## Sources

- CEA Technical Standards for Connectivity to the Grid 2019.
- IEEE 1547-2018, Distributed Energy Resources Interconnection.
- IS 17387, Indian inverter grid interconnection.
- UL 1741 SA, US smart inverter standard.
- State SERC tariff orders for MSEDCL, BESCOM, TANGEDCO, BSES.
- Mohan N., Power Electronics, Wiley.
- IEEE Industry Applications Society publications.
- Manufacturer documentation for smart inverter reactive capability.
- IEA PVPS Task 14 publications on PV grid integration.
