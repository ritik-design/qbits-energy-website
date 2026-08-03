---
term: "Fuse"
title: "Fuse: Definition, Types & Solar PV Applications"
description: "A fuse is an overcurrent protection device that melts under fault current. Full guide to types and solar DC applications."
category: "Protection"
categorySlug: "protection"
priority: "P2"
updatedDate: 2026-07-08
keywords:
  - what is fuse
  - solar fuse
  - dc fuse
  - mc4 fuse
  - gpv fuse
shortDefinition: "A fuse is a one-time electrical protection device with a metal element that melts when current exceeds its rated value, interrupting the circuit. Solar PV systems use specialised gPV fuses on the DC side for string-level protection, typically rated 10 to 30 A at 1000 to 1500 V DC."
quickFacts:
  industry: "Electrical Protection"
  primaryUse: "Overcurrent protection on PV DC strings"
  commonUsers: "EPCs, installers, plant operators"
  relevantStandards: "IEC 60269-6, UL 2579, IS 13703"
  relatedTechnologies: "DC isolator, combiner box, MC4 connector"
relatedTerms:
  - { slug: "mcb", term: "MCB" }
  - { slug: "rccb", term: "RCCB" }
  - { slug: "spd", term: "SPD" }
  - { slug: "isolator", term: "Isolator" }
  - { slug: "combiner-box", term: "Combiner Box" }
  - { slug: "current", term: "Current" }
  - { slug: "voltage", term: "Voltage" }
  - { slug: "mc4-connector", term: "MC4 Connector" }
  - { slug: "string-sizing", term: "String Sizing" }
  - { slug: "short-circuit-current", term: "Short Circuit Current" }
  - { slug: "dc-cable", term: "DC Cable" }
  - { slug: "junction-box", term: "Junction Box" }
  - { slug: "open-circuit-voltage", term: "Open Circuit Voltage" }
faqs:
  - q: "What is a fuse in simple words?"
    a: "A wire link inside a glass or ceramic tube that melts when too much current flows, breaking the circuit. One-shot, must be replaced after each blow."
  - q: "What is the typical solar DC fuse rating?"
    a: "10 to 30 A continuous, 1000 to 1500 V DC rated. Sized at 1.5× module Isc for safety."
  - q: "What is a gPV fuse?"
    a: "A fuse specifically rated for photovoltaic DC applications. Has the correct arc-interrupting capability for solar DC."
  - q: "Can I use AC fuses for DC?"
    a: "No. AC fuses cannot reliably interrupt DC because DC has no zero crossing. Use DC-rated fuses only."
  - q: "Where are fuses used in solar?"
    a: "On DC strings inside combiner boxes. AC side primarily uses MCBs and MCCBs, with fuses for specialty applications."
  - q: "How does a fuse work?"
    a: "Current flows through a calibrated metal element. Excess current heats the element above its melting point; the element evaporates, interrupting the circuit."
  - q: "Fuse vs MCB, which is better?"
    a: "MCB is reusable and more convenient for AC. Fuse is essential for DC where MCB-class breakers are scarce and costlier. Both have their place."
  - q: "Why do solar fuses blow?"
    a: "String fault, reverse current from parallel strings, undersized fuse for actual Isc."
  - q: "What is the breaking capacity of solar fuses?"
    a: "Typically 10 kA at rated DC voltage. Higher for utility applications."
  - q: "Are MC4 connectors and fuses the same?"
    a: "No. MC4 is a connector. Some MC4 connectors include an integrated fuse holder."
  - q: "What is the typical cost of a solar DC fuse?"
    a: "₹150 to ₹500 per fuse for residential and C&I. Higher for utility-grade."
  - q: "Do fuses age?"
    a: "Yes. Repeated thermal cycling weakens the element. Replace at signs of darkened glass or after major fault."
  - q: "Can I replace a blown fuse without diagnosing the fault?"
    a: "No. Identify and fix the underlying issue first. Repeated blowing indicates persistent problem."
  - q: "Is fuse BIS-certified?"
    a: "Indian solar DC fuses follow IS 13703 and IEC 60269-6. BIS certification applies."
  - q: "Are fuses required for every string?"
    a: "For combiner boxes with 3 or more parallel strings, yes. Smaller installations may omit fuses if reverse current is below module reverse current rating."
author: "Nirav Dhanani"
---

## What is a fuse

A fuse is a one-shot overcurrent protection device consisting of a calibrated metal element enclosed in an insulating body. When [current](/glossary/current/) through the element exceeds the rated value for a defined time, the element heats above its melting point, vaporises, and interrupts the circuit. After operation, the fuse must be replaced.

> **TL;DR**
> - A fuse is a one-time overcurrent device: a calibrated metal element that melts and permanently opens the circuit when current exceeds its rating.
> - Solar DC strings use gPV fuses rated 1000 to 1500 V DC with 10 kA breaking capacity, purpose-built for DC arc extinction.
> - Fuses are sized at roughly 1.5 times module Isc, then rounded up to the nearest standard rating.
> - AC fuses must never be used on DC circuits because they cannot reliably extinguish a DC arc, which has no zero crossing.
> - Combiner boxes with three or more parallel strings need fuse protection against reverse current; smaller residential systems with one or two strings often skip it.
> - A fuse is reusable-in-name-only: after it blows, replace it, but only after diagnosing and fixing the fault that caused it.

For solar applications, specialised photovoltaic DC fuses (designated gPV) are used. These are rated for the unique conditions of solar DC: high voltage (1000 V or 1500 V DC), bidirectional fault current possible, and arc-interrupting capability designed for DC without zero crossing.

Indian solar installations use DC fuses primarily in [combiner boxes](/glossary/combiner-box/) for string-level protection, sized at typically 1.5 times module Isc. AC-side fuses are used in specialty applications; most AC protection uses [MCBs](/glossary/mcb/) and MCCBs. Our [string sizing and overcurrent protection guide](/blog/solar-string-sizing-ocp-india/) covers how fuse sizing fits into the broader string design.

## Why fuses matter

DC string protection. Combiner boxes protect each parallel string against reverse current and fault current.

DC equipment cost. DC-rated breakers are scarce and expensive. Fuses are cost-effective.

Predictable behaviour. Fuse interrupting characteristics are well-documented.

Standard sizes. Industry-standard form factors simplify replacement.

Safety. Without fuse protection, a faulted string can absorb reverse current from healthy strings, overheating cables.

## How a fuse works

1. Current flows through the calibrated fuse element.
2. The element has a defined I²t (energy) characteristic for melting.
3. Continuous current below rated value causes no significant heating.
4. Continuous current above rated value heats the element above its melting point.
5. The element melts and vaporises within the fuse body.
6. Arc that forms between the broken ends is extinguished by the fuse's arc-quenching material (often silica sand for HRC fuses).
7. Circuit is permanently open.

For DC fuses, arc extinction is more challenging because DC has no zero crossing. gPV fuses use sand-filled bodies and specialised contact designs to extinguish the arc.

## Technical deep dive

### Fuse classifications

| Class | Behaviour |
|---|---|
| gG | General-purpose, low let-through |
| gM | Motor protection |
| aM | Motor backup, no overload protection |
| gPV | Photovoltaic, designed for DC |
| FF | Very fast acting |

### gPV fuse ratings (typical)

| Parameter | Value |
|---|---|
| Voltage rating | 1000 V DC or 1500 V DC |
| Current rating | 4, 6, 10, 12, 15, 20, 25, 30, 40 A |
| Breaking capacity | 10 kA at rated voltage |
| Standards | IEC 60269-6, UL 2579 |

### Fuse selection for solar strings

Rated current I_fuse = 1.5 × Isc_module

Example: 16 A Isc module → 24 A fuse, round to nearest standard (25 A). Use [SurgePV's string sizing calculator](https://surgepv.com/tools/string-sizing-calculator/) to cross-check fuse and [string sizing](/glossary/string-sizing/) together for a given module and inverter combination.

Voltage rating must equal or exceed maximum string [Voc](/glossary/open-circuit-voltage/) at cold temperatures.

Reverse current rating must accommodate reverse current from N-1 parallel strings, where N is the total number of parallel strings in the combiner box.

### Form factors

| Form | Use |
|---|---|
| Cylindrical 10×38 mm | Standard solar DC fuse |
| Cylindrical 14×51 mm | Higher current solar DC |
| Cylindrical 22×58 mm | Utility-scale |
| Blade NH | Higher current utility |

## Real-world applications

Combiner box string protection in utility plants.

Inverter input fuses for parallel string protection.

DC [isolator](/glossary/isolator/) integrated fuses.

Specialty AC fuse applications.

Battery DC main fuse for protection against short circuit.

## Common fuse problems

Repeated blowing indicating persistent fault.

Wrong size (too small) blowing on normal Isc, especially high temperature events.

Wrong voltage rating leading to arc not extinguishing.

AC fuse used on DC, catastrophic failure.

Connector heating where fuse is loose.

## Best practices

Use only gPV-rated fuses for solar DC.

Size fuse at 1.5 × Isc with rounding to standard.

Verify voltage rating against cold-temperature Voc.

Use sealed fuse holders rated for environment.

Document fuse ratings on the single-line diagram.

Replace blown fuses only after fault diagnosis.

Maintain spares on site.

## Comparison: fuse vs breaker

| Feature | Fuse | MCB / MCCB |
|---|---|---|
| Reusable | No | Yes |
| Speed | Very fast | Fast |
| Cost | Lower | Higher |
| DC-rated availability | Wide | Limited and costly |
| Selectivity | Easy | Possible with care |
| Use in solar DC | Primary | Limited |
| Use in solar AC | Specialty | Primary |

## Indian market context

Major Indian solar DC fuse brands include Mersen, Eaton Bussmann, Schurter, Phoenix Contact, OBO, Schneider, ABB.

Indian utility-scale solar plants almost universally use gPV fuses in combiner boxes.

Residential rooftop systems with 1 or 2 strings often omit fuses since reverse current is below module reverse current rating.

C&I rooftop systems with 3 or more parallel strings typically include fuse protection.

BIS certification under IS 13703 for low voltage fuses. Installers sourcing pre-wired DCDB and ACDB enclosures with integrated fuse protection can skip building combiner assemblies from scratch on site.

## Standards and certifications

| Standard | Scope |
|---|---|
| IS 13703 | Indian LV fuses |
| IEC 60269 series | International LV fuses |
| IEC 60269-6 | Solar PV fuses |
| UL 2579 | US solar PV fuses |
| IEC 60364-4-43 | Protection against overcurrent |

## Common mistakes

Using AC fuse on DC circuit.

Undersizing fuse, causing nuisance blowing.

Oversizing fuse, defeating protection purpose.

Wrong voltage rating allowing arc to persist.

Repeated replacement without diagnosing fault.

Skipping fuse on combiner box to save cost.

Using fuses without proper holder, leading to overheating.

## Key takeaways

Fuses are essential overcurrent protection devices for solar DC strings. Specialised gPV fuses handle the unique requirements of solar DC: high voltage, bidirectional fault current and DC arc extinction. Combiner boxes with 3 or more parallel strings require fuse protection. Sizing at 1.5 × Isc with proper voltage rating, sealed fuse holders and root-cause diagnosis on every blowing event are the disciplines that keep solar plants safe.

## Need properly designed DC protection?

QBits Energy designs and supplies solar DC combiner boxes with gPV fuse protection, DC isolators and SPDs for utility and C&I applications across India.

## Further reading

For how Fuse plays out in real projects, these guides go deeper:

- [Solar String Sizing & Overcurrent Protection](/blog/solar-string-sizing-ocp-india/)
- [Inverter Battery Connection Diagram and Sizing Guide for Hybrid Solar](/blog/inverter-battery-connection-diagram/)
- [Solar Shading Analysis Software Ireland: 2026 Guide](/blog/solar-shading-analysis-software-ireland/)
- [Solar Shading Analysis Software Singapore: 2026](/blog/solar-shading-analysis-software-singapore/)

## Sources

- IS 13703, Indian Standard for low-voltage fuses.
- IEC 60269 series, including IEC 60269-6 for PV fuses.
- UL 2579, US standard for low voltage fuses for PV systems.
- IEC 60364-4-43, Protection against overcurrent.
- IS 17387, Inverter grid interconnection.
- Manufacturer documentation from Mersen, Eaton Bussmann, Schurter, Phoenix Contact, OBO, Schneider.
- IEC 62548, PV array design requirements.
- IEEE Standard Dictionary of Electrical and Electronics Terms.
