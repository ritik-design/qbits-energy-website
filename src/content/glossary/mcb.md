---
term: "MCB"
title: "MCB (Miniature Circuit Breaker): Definition, Working & Solar Applications"
description: "MCB is an electrical protection device for overcurrent and short circuit. Full guide to types and solar applications."
category: "Protection"
categorySlug: "protection"
priority: "P1"
updatedDate: 2026-07-08
keywords:
  - what is mcb
  - miniature circuit breaker
  - mcb solar
  - mcb types
  - mcb tripping
shortDefinition: "A Miniature Circuit Breaker (MCB) is an automatic electrical switch that opens to interrupt current flow when an overcurrent or short circuit is detected. It is the standard protection device in residential and commercial electrical installations, used in solar AC distribution panels."
quickFacts:
  industry: "Electrical Protection"
  primaryUse: "Overcurrent and short-circuit protection"
  commonUsers: "Electricians, installers, customers"
  relevantStandards: "IS 60898, IEC 60898, IS 13947, IEC 60947"
  relatedTechnologies: "RCCB, fuse, isolator, distribution board"
relatedTerms:
  - { slug: "rccb", term: "RCCB" }
  - { slug: "fuse", term: "Fuse" }
  - { slug: "spd", term: "SPD" }
  - { slug: "earthing", term: "Earthing" }
  - { slug: "isolator", term: "Isolator" }
  - { slug: "current", term: "Current" }
  - { slug: "voltage", term: "Voltage" }
  - { slug: "ac-cable", term: "AC Cable" }
  - { slug: "distribution-board", term: "Distribution Board" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "junction-box", term: "Junction Box" }
  - { slug: "single-line-diagram", term: "Single Line Diagram" }
  - { slug: "discom", term: "DISCOM" }
faqs:
  - q: "What is an MCB in simple words?"
    a: "An automatic switch that cuts the power if too much current flows. Replaces fuses in modern installations. Resettable after tripping."
  - q: "What does MCB stand for?"
    a: "Miniature Circuit Breaker."
  - q: "How is MCB different from fuse?"
    a: "Both interrupt overcurrent. MCB is reusable (just reset). Fuse is one-time use and must be replaced."
  - q: "What are MCB types?"
    a: "Type B: trips at 3 to 5× rated current (residential). Type C: 5 to 10× (commercial). Type D: 10 to 20× (industrial motors). Higher type for higher inrush loads."
  - q: "What is the typical MCB current rating?"
    a: "6 A, 10 A, 16 A, 20 A, 25 A, 32 A, 40 A, 50 A, 63 A for residential. Higher for commercial."
  - q: "What is MCB breaking capacity?"
    a: "Maximum fault current it can interrupt safely. Typical 6 kA for residential, 10 kA for commercial, 25 kA for industrial."
  - q: "How does MCB work?"
    a: "Thermal element trips slowly on overcurrent. Magnetic element trips quickly on short circuit. Both housed in one device."
  - q: "Where do MCBs go in a solar system?"
    a: "On the AC side. Solar inverter output, sub-distribution boards, and protection of individual circuits in the home."
  - q: "Can MCBs be used on DC?"
    a: "Only DC-rated MCBs. Standard AC MCBs do not work safely on DC due to arc extinguishing differences."
  - q: "Why does my MCB trip frequently?"
    a: "Overcurrent on the circuit, short circuit, or undersized MCB for the actual load. Investigate before resetting more than twice."
  - q: "What size MCB for solar inverter?"
    a: "Match to inverter AC output current with 25 percent headroom. A 5 kW inverter (22 A) needs a 32 A MCB."
  - q: "Is MCB same as MCCB?"
    a: "No. MCB is smaller, residential and small commercial. MCCB is larger, industrial."
  - q: "What is single pole, double pole MCB?"
    a: "Number of poles refers to number of conductors switched. Single pole: phase only. Double pole: phase and neutral. Triple pole: three phases."
  - q: "How long does MCB last?"
    a: "10 to 20 years of normal use. Frequent tripping shortens life."
  - q: "Is MCB BIS-certified?"
    a: "Yes for Indian residential. IS 60898 and IS 8828 are the relevant standards."
author: "Nirav Dhanani"
---

## What is an MCB

A Miniature Circuit Breaker (MCB) is an electromechanical protection device that interrupts [current](/glossary/current/) flow in a circuit when an overcurrent or short-circuit condition is detected. It combines thermal-magnetic tripping with manual switching, providing both protection and isolation in a compact wall-mounted module.

> **TL;DR**
> - An MCB is a resettable AC overcurrent breaker: a thermal element trips on sustained overload, a magnetic element trips instantly on short circuit.
> - It replaced rewireable fuses in Indian homes and businesses from the 1990s and is standard on solar AC circuits.
> - MCB Type (B, C or D) must match the load's inrush profile; a 5 kW solar inverter (about 22 A) typically needs a 32 A MCB with 25 percent headroom.
> - MCBs protect the AC side only. DC-side solar strings use DC-rated fuses or isolators because of different arc-extinguishing needs.
> - Breaking capacity must exceed the expected short-circuit current at the installation point: 6 kA for residential, 10 kA for commercial, 25 kA or more for industrial.
> - Indian MCBs are BIS-certified under IS 60898, and DISCOM commissioning checks MCB selection at the AC interconnection.

MCBs replaced traditional rewireable fuses in Indian residential and commercial installations from the 1990s. They offer multiple advantages: resettable operation (no fuse element to replace), faster response to faults, integrated isolation and visual indication of state.

For solar installations, MCBs protect the AC side: at the [solar inverter](/glossary/solar-inverter/) output, in sub-distribution boards, and in individual home circuits. DC protection uses DC-rated [fuses](/glossary/fuse/) or DC-specific [isolators](/glossary/isolator/) because of differences in arc extinguishing.

## Why MCBs matter

Safety. Interrupts overcurrent before cables overheat or insulation fails.

Reusability. Reset after tripping; no replacement needed.

Fault diagnosis. Trip indicates a real circuit problem.

Standardisation. Standard sizes and ratings simplify electrical design.

Regulatory compliance. CEA Measures Relating to Safety require overcurrent protection on every circuit.

## How MCB works

Two trip mechanisms operate in parallel:

1. Thermal element. A bimetallic strip heats up under sustained overcurrent and trips after a defined delay. Typical 1 to 60 second response.
2. Magnetic element. A solenoid trips instantly on short-circuit current above the magnetic threshold.

When either trips, the contact mechanism breaks the circuit and toggles the handle to OFF. The user resets by toggling back to ON after fixing the underlying issue.

## Technical deep dive

### MCB types

| Type | Magnetic trip threshold | Use case |
|---|---|---|
| Type B | 3 to 5 × In | Residential, resistive loads |
| Type C | 5 to 10 × In | Commercial, fluorescent lighting, small motors |
| Type D | 10 to 20 × In | Industrial, motor circuits |
| Type K | 8 to 12 × In | Highly inductive loads |
| Type Z | 2 to 3 × In | Sensitive electronics |

### Current ratings

| Standard ratings (A) | Use |
|---|---|
| 6, 10, 16 | Lighting circuits |
| 20, 25 | Plug points, geyser |
| 32 | Small AC, water pump |
| 40, 50 | Larger AC, multi-room circuits |
| 63 | Main switch |

### Breaking capacity (Icn)

| Application | Typical Icn |
|---|---|
| Residential | 6 kA |
| Commercial | 10 kA |
| Industrial | 25 to 50 kA |

Breaking capacity must exceed expected short-circuit current at the installation point.

### Number of poles

| Configuration | Switches |
|---|---|
| Single Pole (SP) | Phase only |
| Single Pole + Neutral (SPN) | Phase + protected neutral |
| Double Pole (DP) | Phase + neutral (full breaking) |
| Triple Pole (TP) | Three phases |
| Triple Pole + Neutral (TPN) | Three phases + neutral |

## Real-world applications

AC output of solar inverter to distribution board.

Sub-distribution boards in homes and commercial buildings.

Individual circuit protection (lights, plugs, appliances).

Submain disconnects.

Inverter input protection in hybrid systems.

## Common MCB problems

Frequent nuisance tripping. Usually undersized for actual load or wrong type for inrush.

Failure to trip on overcurrent (rare). Aged thermal element.

Welding of contacts after a heavy fault. Replace breaker.

Hot terminal indicating loose connection. Tighten or replace.

Wrong type selected (Type B on inductive load) tripping during motor start.

## Best practices

Size MCB to circuit load plus 25 percent headroom.

Match type to load profile (B for resistive, C for mixed, D for motors).

Specify breaking capacity above expected short-circuit current.

Use TP+N for three-phase to break all conductors.

Annual visual inspection.

Thermography check during [preventive maintenance](/blog/inverter-maintenance-india/).

Replace after major fault event.

## Comparison: MCB vs MCCB vs Fuse

| Feature | MCB | MCCB | Fuse |
|---|---|---|---|
| Current range | 6 to 125 A | 16 to 1600 A | 2 to 1250 A |
| Resettable | Yes | Yes | No |
| Breaking capacity | 6 to 25 kA | 25 to 200 kA | High |
| Use case | Residential, small commercial | Industrial | Specialised, DC |

## Indian market context

Major Indian MCB brands include Havells, Legrand, Schneider Electric (Easy9, Acti9), Siemens, ABB and L&T.

PM Surya Ghar residential systems use MCBs on the AC side at the bidirectional meter and the inverter output.

ALMM does not list MCBs separately. BIS certification under IS 60898 applies.

[DISCOM](/glossary/discom/) [commissioning](/blog/solar-inverter-commissioning-in-india/) verifies MCB selection at the AC interconnection. MCB and [RCCB](/glossary/rccb/) ratings are typically shown on the electrical interconnection drawings prepared for CEIG and DISCOM approval.

## Standards and certifications

| Standard | Scope |
|---|---|
| IS 60898 | Indian MCB standard for AC |
| IS 8828 | Earlier Indian MCB standard, still referenced |
| IEC 60898 | International MCB standard |
| IS 13947 | Indian MCCB standard |
| IEC 60947 | International MCCB standard |
| CEA Measures Relating to Safety 2023 | Overcurrent protection requirement |

## Common mistakes

Using Type B MCB on AC compressor circuit, causing nuisance trips on motor start.

Undersizing MCB for the actual load.

Sharing MCB between solar inverter and other loads.

Forgetting double-pole breaker for solar AC output.

Skipping MCB on grid-tie inverter AC output.

Using AC MCB on DC circuits.

## Key takeaways

MCB is the standard overcurrent and short-circuit protection device for residential and small commercial AC circuits. Type and current rating must match the load profile. Solar AC interconnection uses MCB or RCBO at the inverter output. Indian MCB compliance requires IS 60898 certification. Annual inspection and proper sizing prevent nuisance tripping and failures.

## Need MCB-protected solar AC distribution?

QBits Energy designs and installs solar AC distribution with appropriately rated MCBs, RCCBs and SPDs for residential, C&I and utility applications across India.

## Further reading

For how MCB plays out in real projects, these guides go deeper:

- [Solar Inverter Wiring Diagram for Indian Homes 2026: Panels to Meter Board](/blog/solar-inverter-wiring-diagram/)
- [Solar String Sizing & Overcurrent Protection](/blog/solar-string-sizing-ocp-india/)
- [How Does a Solar Inverter Work? 2026 Guide](/blog/how-does-a-solar-inverter-work/)
- [2kW Solar System Price in India 2026: Cost Breakdown](/blog/2kw-solar-system-price-india/)

## Sources

- IS 60898-1, -2, Indian Standard for circuit breakers.
- IS 8828, Earlier Indian MCB standard.
- IEC 60898 series, International MCB standard.
- IS 13947, Indian MCCB standard.
- IEC 60947 series, Low-voltage switchgear.
- CEA Measures Relating to Safety and Electric Supply Regulations 2023.
- IS 732, Indian wiring code.
- Manufacturer technical documentation from Havells, Legrand, Schneider, Siemens, ABB.
- IS 17387, Inverter grid interconnection.
