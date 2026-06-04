---
term: "kVA"
title: "kVA (Kilovolt-Ampere): Definition, Calculation & Solar Applications"
description: "kVA is the unit of apparent power in AC circuits. Full guide to calculation and solar inverter/transformer applications."
category: "Electrical Basics"
categorySlug: "electrical-basics"
priority: "P2"
updatedDate: 2026-06-04
keywords:
  - what is kva
  - kilovolt ampere
  - kva vs kw
  - kva rating
  - inverter kva
shortDefinition: "Kilovolt-ampere (kVA) is the unit of apparent power in an AC circuit, equal to the product of RMS voltage and RMS current divided by 1,000. Solar inverters, transformers and UPS are rated in kVA because their thermal capacity depends on apparent power, not just active power."
quickFacts:
  industry: "Electrical Engineering / Solar PV"
  primaryUse: "Apparent power rating for AC equipment"
  commonUsers: "Engineers, installers, customers"
  relevantStandards: "IEC 80000-1, IEEE standards"
  relatedTechnologies: "Transformer, inverter, UPS, generator"
relatedTerms:
  - { slug: "kwh", term: "kWh" }
  - { slug: "power-factor", term: "Power Factor" }
  - { slug: "voltage", term: "Voltage" }
  - { slug: "current", term: "Current" }
  - { slug: "reactive-power", term: "Reactive Power" }
  - { slug: "active-power", term: "Active Power" }
  - { slug: "apparent-power", term: "Apparent Power" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "off-grid-inverter", term: "Off Grid Inverter" }
  - { slug: "hybrid-inverter", term: "Hybrid Inverter" }
  - { slug: "transformer", term: "Transformer" }
  - { slug: "sanctioned-load", term: "Sanctioned Load" }
faqs:
  - q: "What is kVA in simple words?"
    a: "A rating that combines voltage and current in AC circuits. kVA tells you how much the equipment can handle in terms of total power flow, including reactive."
  - q: "What is the formula for kVA?"
    a: "kVA = (V × I) / 1000 for single-phase AC. kVA = (√3 × V × I) / 1000 for three-phase."
  - q: "kVA vs kW, what is the difference?"
    a: "kVA is apparent power. kW is active power. kW = kVA × power factor."
  - q: "Why are inverters rated in kVA?"
    a: "Their thermal capacity depends on apparent power, which includes reactive support. A 5 kVA inverter at 0.8 PF delivers 4 kW active."
  - q: "What kVA inverter do I need for my home?"
    a: "Sum your peak simultaneous load including surge. Typical Indian home with fridge, lights, fans and 1 ton AC needs 3 to 5 kVA. Add 25% headroom."
  - q: "Is sanctioned load in kW or kVA?"
    a: "Indian DISCOM sanctioned load is typically in kVA for C&I and kW for residential."
  - q: "What is kVA in transformers?"
    a: "Transformer rating in kVA. A 1 MVA transformer can handle 1,000 kVA of apparent power at rated voltage and current."
  - q: "kVA vs kVAR?"
    a: "kVA is apparent (total). kVAR is reactive (the non-working part)."
  - q: "How is kVA measured?"
    a: "From voltage and current measurements. Power quality analysers compute kVA directly."
  - q: "What is the typical inverter kVA range?"
    a: "Residential: 1 to 10 kVA. C&I: 10 to 100 kVA. Utility string: 100 to 350 kVA. Central: 500 kVA to 5 MVA."
  - q: "Can I run a 4 kW load on a 4 kVA inverter?"
    a: "Only at unity power factor. Most inductive loads have PF below 1, so a 4 kVA inverter delivers less than 4 kW active to inductive loads."
  - q: "What is kVA peak rating?"
    a: "Short-duration capability typically 1.5 to 2x continuous. Used for motor starting surges."
  - q: "Does kVA include surge?"
    a: "Continuous kVA does not include surge. Peak kVA is separately specified."
  - q: "Why is generator rated in kVA?"
    a: "Same as transformers and inverters. Apparent power capacity reflects thermal limit."
  - q: "What is the relationship between kVA and Amperes?"
    a: "I (single-phase) = kVA × 1000 / V. I (three-phase) = kVA × 1000 / (√3 × V)."
---

## What is kVA

Kilovolt-ampere (kVA) is the unit of apparent power in an AC circuit, equal to the RMS product of voltage and current divided by 1,000. It represents the total power flowing through the circuit, including both the active (real) component and the reactive (oscillating) component.

Apparent power S = √(P² + Q²), where P is active power (kW) and Q is reactive power (kVAR). The relationship is:

kW = kVA × cos(φ) = kVA × power factor

Solar inverters, transformers, UPS and generators are rated in kVA rather than kW because their thermal capacity (heating in windings and components) depends on total current flow, which is determined by apparent power. A 5 kVA inverter operating at PF 0.8 delivers only 4 kW of active power but carries the full 5 kVA of current.

## Why kVA matters

Equipment rating. The right way to size inverters, transformers and generators.

Surge capability. Motor start currents and inductive loads draw apparent power, not just active.

DISCOM contract demand. Indian C&I contract demand is in kVA.

Reactive support. Inverter reactive capability is bounded by kVA rating.

Transformer sizing. Apparent power determines transformer capacity needed.

## How kVA is calculated

Single-phase: kVA = (V × I) / 1000
Three-phase: kVA = (√3 × V × I) / 1000

Examples:
- Single-phase 230 V × 21.7 A = 5.0 kVA
- Three-phase 415 V × 27.8 A = 20.0 kVA

## Technical deep dive

### kVA to kW conversion

| Power factor | kW per kVA |
|---|---|
| 1.00 | 1.00 |
| 0.95 | 0.95 |
| 0.90 | 0.90 |
| 0.85 | 0.85 |
| 0.80 | 0.80 |
| 0.70 | 0.70 |

### Indian inverter kVA range

| Inverter type | Typical kVA range |
|---|---|
| Residential single-phase | 1 to 10 |
| Residential three-phase | 5 to 15 |
| C&I single-phase | 5 to 15 |
| C&I three-phase | 10 to 100 |
| Utility string | 100 to 350 |
| Central inverter | 500 to 5,000 |

### Surge capability

| Load type | Surge factor |
|---|---|
| Resistive (heater, light) | 1 |
| Modern LED, computer | 1.5 to 2 |
| Fan, fluorescent | 2 to 3 |
| Refrigerator compressor | 3 to 5 |
| AC compressor | 4 to 6 |
| Water pump | 5 to 7 |
| Direct-on-line motor | 6 to 8 |

Inverter sizing must accommodate surge from inductive loads.

### Transformer rating

A transformer's nameplate kVA rating defines its thermal capacity. Operating at 100 percent kVA continuously is the design limit. Short-term overloads of 110 to 150 percent for less than an hour are typically allowed per IS 2026.

## Real-world applications

Solar inverter selection.

Home backup inverter sizing.

Transformer specification for solar plants.

UPS sizing.

DISCOM sanctioned load (contract demand).

Generator sizing.

PPA capacity definition.

## Common kVA problems

Inverter rated in kVA but customer assumes equivalent kW capacity at low PF loads.

Sanctioned demand penalty for C&I customers exceeding contract kVA.

Transformer thermal overload due to reactive flow at low PF.

Off-grid inverter trip on motor start because surge exceeds kVA rating.

## Best practices

Size inverter kVA to actual peak load, not nominal load.

Account for surge of inductive loads.

Specify continuous and peak kVA in purchase orders.

Match transformer kVA to plant DC capacity plus 10 to 20 percent.

Document PF assumption when converting kVA to kW for marketing.

## Indian market context

DISCOMs sanction C&I demand in kVA. Demand exceedance attracts surcharge.

Inverter nameplate in kVA is standard practice for off-grid and hybrid inverters.

CEA Grid Code references kVA for connection capacity.

PM Surya Ghar residential systems are typically sized in kW (active output), with kVA being a secondary specification.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 80000-1 | SI units |
| IS 17387 | Inverter grid interconnection |
| IS 2026 | Transformer ratings |
| CEA Grid Code | Connection capacity |

## Key takeaways

kVA is the apparent power rating used for AC equipment whose thermal capacity depends on total current. Solar inverters, transformers, generators and UPS are kVA-rated. The relationship kW = kVA × PF is fundamental. Sizing inverters for surge loads, sanctioned demand and reactive support all use kVA.

## Need help with kVA sizing?

QBits Energy provides kVA-based sizing for solar inverters, transformers and hybrid backup systems across India.

## Sources

- IEC 80000-1, SI Units.
- IS 17387, Indian Standard for utility-interconnected PV inverters.
- IS 2026, Power transformers.
- CEA Technical Standards 2019.
- IEEE Standard Dictionary of Electrical and Electronics Terms.
- Manufacturer datasheets from major solar inverter brands.
- IEC 60076 series, Power transformers.
- State SERC tariff orders for kVA-based contract demand.
