---
term: "Single Line Diagram"
title: "Single Line Diagram (SLD): Definition & Solar Project Applications"
description: "SLD is the simplified one-line electrical drawing. Full guide to symbols, content and Indian solar applications."
category: "Installation"
categorySlug: "installation"
priority: "P1"
updatedDate: 2026-07-08
keywords:
  - what is single line diagram
  - sld solar
  - one line diagram
  - solar electrical drawing
  - sld for net metering
shortDefinition: "A Single Line Diagram (SLD), also called one-line diagram, is a simplified electrical drawing that shows all components and electrical connections of a power system using single lines for multi-conductor cables. It is the primary technical document for solar plant design, DISCOM approval and CEIG drawing review."
quickFacts:
  industry: "Solar Plant Design"
  primaryUse: "Electrical system documentation"
  commonUsers: "Designers, EPCs, DISCOMs, CEIG"
  relevantStandards: "IEC 60617, IS 12032, MNRE drawing guidelines"
  relatedTechnologies: "CAD, BIM, electrical design"
relatedTerms:
  - { slug: "discom", term: "DISCOM" }
  - { slug: "ceig", term: "CEIG" }
  - { slug: "commissioning", term: "Commissioning" }
  - { slug: "string-sizing", term: "String Sizing" }
  - { slug: "mounting-structure", term: "Mounting Structure" }
  - { slug: "combiner-box", term: "Combiner Box" }
  - { slug: "junction-box", term: "Junction Box" }
  - { slug: "spd", term: "SPD" }
  - { slug: "mcb", term: "MCB" }
  - { slug: "rccb", term: "RCCB" }
  - { slug: "earthing", term: "Earthing" }
  - { slug: "isolator", term: "Isolator" }
  - { slug: "mppt", term: "MPPT" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
faqs:
  - q: "What is an SLD in simple words?"
    a: "A simplified electrical drawing that shows what's connected to what, using one line per circuit. Essential for solar approval and installation."
  - q: "What does SLD show?"
    a: "PV array, combiner box, DC isolator, inverter, AC isolator, distribution board, meter, earthing, protection devices, and grid connection."
  - q: "Why is SLD needed for solar?"
    a: "DISCOM net metering approval, CEIG drawing approval, commissioning verification and future O&M reference."
  - q: "Is SLD same as circuit diagram?"
    a: "No. SLD shows components and major connections. Circuit diagrams show all conductors and wiring details."
  - q: "Who prepares the SLD?"
    a: "Solar EPC or design engineer. Must be sealed by a licensed electrical engineer for CEIG submission."
  - q: "What standards govern SLD symbols?"
    a: "IEC 60617 international. IS 12032 Indian variant. Most CAD tools have IEC symbol libraries."
  - q: "Does PM Surya Ghar require SLD?"
    a: "Yes, as part of DISCOM application. Installers submit standard format SLD."
  - q: "What software is used for SLD?"
    a: "AutoCAD, Visio, Lucidchart, EPLAN, SmartDraw, or specialised PV tools like Helioscope and Aurora."
  - q: "How detailed should SLD be?"
    a: "Sufficient to show DC string layout, MPPT configuration, AC connection, protection, earthing and meter. Specific component ratings labelled."
  - q: "What is busbar in SLD?"
    a: "Represents a node where multiple connections meet, drawn as a heavy horizontal line."
  - q: "Is SLD same as plan layout?"
    a: "No. Plan layout shows physical positions. SLD shows electrical relationships."
  - q: "Does SLD include cable sizes?"
    a: "Yes, key cable sizes are labelled for verification."
  - q: "Can SLD be hand-drawn?"
    a: "Acceptable for very small residential applications but most DISCOMs require CAD format."
  - q: "What is the typical SLD revision history?"
    a: "Design SLD → DISCOM-approved SLD → as-built SLD after construction."
  - q: "Should SLD include monitoring?"
    a: "Yes if applicable: SCADA, CT/PT, smart meter connection, cloud monitoring router."
author: "Nirav Dhanani"
---

## What is a Single Line Diagram

A Single Line Diagram (SLD), also called one-line diagram, is a simplified electrical schematic that represents a power system using a single line for each three-phase or multi-conductor cable. Standard symbols denote components: PV array, [inverter](/glossary/solar-inverter/), transformer, [isolators](/glossary/isolator/), meters and [earthing](/glossary/earthing/).

> **TL;DR**
> - An SLD is a simplified one-line electrical drawing showing every component and connection in a solar plant, using standard IEC 60617 symbols.
> - It is the primary document for DISCOM net metering approval, CEIG drawing approval, commissioning verification and future O&M reference.
> - SLDs go through three revisions: design SLD, DISCOM-approved SLD, and as-built SLD after construction.
> - A typical 3 kW residential SLD covers roughly 10 to 15 components; a 100 MW utility plant needs multiple sheets of modular block diagrams.
> - CEIG drawing approval is mandatory in most states above a roughly 10 kW threshold, and the submitted SLD must carry a licensed electrical engineer's seal.
> - Design tools such as AutoCAD, EPLAN, PVcase, Aurora and Helioscope can generate SLD outputs directly alongside the electrical design.

For solar projects, the SLD is the primary technical document for [DISCOM](/glossary/discom/) net metering approval, [CEIG](/glossary/ceig/) drawing approval, [commissioning](/glossary/commissioning/) verification and operational reference. It captures the electrical architecture without the complexity of full multi-line wiring diagrams.

A well-prepared SLD enables anyone familiar with electrical symbols to understand the plant's structure: string configuration, [MPPT](/glossary/mppt/) allocation, protection coordination, earthing arrangement and grid connection point.

## Why SLDs matter

DISCOM approval. Net metering applications require SLD submission.

CEIG approval. Drawing approval before installation is based on SLD.

Construction reference. Installers work from SLD during execution.

Commissioning verification. Inspectors compare installation against SLD.

O&M reference. Operations and maintenance personnel consult SLD for troubleshooting.

Compliance audit. Future audits reference the original SLD.

## SLD content for solar

| Component | Information shown |
|---|---|
| PV array | String layout, modules per string, total kWp |
| [DC combiner](/glossary/combiner-box/) | Number of strings, fuse ratings, DC isolator |
| DC cable | Size, length, voltage rating |
| Inverter | Make, model, AC and DC ratings, MPPT configuration |
| AC cable | Size, length, voltage rating |
| AC isolator | Rating, location |
| Protection | MCB, RCCB, SPD with ratings |
| Energy meter | Bidirectional smart meter, location |
| Distribution board | Existing connection point |
| Earthing | Earth pits, electrodes, conductor sizes |
| Grid connection | Point of common coupling, transformer if applicable |

## Technical deep dive

### Standard IEC 60617 symbols

| Symbol | Meaning |
|---|---|
| ⊕ (circle with cross) | PV cell |
| Rectangle with diagonals | PV module |
| Sine wave in box | Inverter |
| Two parallel lines | Capacitor |
| Resistor zig-zag | Resistor |
| Single line through circle | Single-phase line |
| Three slashes on single line | Three-phase line |
| Earth symbol | Earthing |
| Circle with X | Light/fixture |
| Square with diagonal | Switch |

### SLD vs other drawings

| Drawing type | Use |
|---|---|
| Single Line Diagram (SLD) | High-level electrical architecture |
| Schematic diagram | Detailed wiring including all conductors |
| Plan layout drawing | Physical positions on roof or land |
| Cable schedule | All cables with sizes, lengths, routes |
| Earthing layout | Earth electrode positions and bonding |
| Lightning protection diagram | LPS arrangement |

### Residential PM Surya Ghar SLD

For a typical 3 kW system:
- PV array: 6 × 540 W mono PERC modules in 1 string
- DC cable: 4 mm² PV cable
- DC isolator: 25 A, 1000 V DC
- SPD DC: Type 2, 1000 V DC, 20 kA
- Inverter: 3.3 kW single-phase string inverter
- AC isolator: 25 A
- SPD AC: Type 2, 275 V AC, 20 kA
- MCB: 16 A, 6 kA breaking
- RCCB: 25 A, 30 mA Type A
- Bidirectional meter: 230 V single-phase
- Earth pits: 2 (array frame, inverter chassis)

### Utility-scale SLD

Hierarchical structure:
- Module → String → Combiner box → DC trunk → Inverter or central converter → AC LT side → Step-up transformer → 33 kV / 66 kV / 132 kV switchyard → PPA meter → Utility grid

## Real-world applications

PM Surya Ghar DISCOM application.

C&I rooftop tender documentation.

Utility solar EPC contract drawings, the same design output covered in our [solar SLD software guide](/blog/solar-sld-software/) for auto-generating single line diagrams.

CEIG drawing approval submission.

DISCOM technical feasibility study.

Insurance documentation.

Plant handover.

## Common SLD problems

Missing component ratings on labels.

Outdated SLD not matching as-built.

Generic templates not customised for actual installation.

Earthing arrangement not clearly shown.

Protection coordination unclear.

Wrong symbol usage.

## Best practices

Use IEC 60617 standard symbols.

Label every component with rating (kW, A, V, mm²).

Show all isolators, breakers, SPDs and meters.

Mark conductor sizes and lengths.

Include earthing arrangement.

Get sealed by a licensed electrical engineer, typically prepared alongside electrical drawings and CEIG documentation.

Maintain version control: design → approved → as-built.

Keep both PDF and editable CAD versions.

## Comparison: SLD complexity by project size

| Project | Typical SLD complexity |
|---|---|
| 3 kW residential | Single page, 10 to 15 components |
| 100 kW C&I | 2 to 3 pages, 30 to 50 components |
| 1 MW utility-string | 5 to 8 pages, plant blocks |
| 100 MW utility | Multiple sheets, modular block diagrams |

## Indian market context

PM Surya Ghar portal accepts standardised SLD formats from empanelled vendors.

CEIG drawing approval is mandatory for installations above state thresholds (typically 10 kW).

State DISCOMs publish SLD format requirements in net metering procedures.

Major Indian EPCs use AutoCAD and EPLAN for SLD preparation.

PVcase, Aurora and [Helioscope](https://surgepv.com/compare/helioscope-vs-surgepv/) generate SLD outputs alongside design, one of several capabilities compared across [solar design software platforms](https://surgepv.com/compare/best-solar-design-software/).

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 60617 | Electrical symbols |
| IS 12032 | Indian electrical symbol standard |
| MNRE Drawing Guidelines | Solar plant drawings |
| CEA Measures Relating to Safety 2023 | Documentation requirements |
| State CEIG drawing checklist | Per-state requirements |

## Common mistakes

Using non-standard symbols.

Missing component ratings on labels.

Not updating SLD after design changes.

Skipping earthing details.

Submitting design SLD without engineer seal.

Not maintaining as-built SLD.

## Key takeaways

SLD is the essential electrical drawing for solar plant design, approval and operation. It uses single lines to represent multi-conductor connections with standard IEC 60617 symbols. PM Surya Ghar DISCOM approval, CEIG drawing approval and commissioning verification all reference the SLD. Quality of SLD directly affects approval timelines and operational reference value.

## Need professional SLD preparation for your solar project?

QBits Energy prepares engineer-sealed SLDs for residential, C&I and utility solar projects compliant with Indian DISCOM and CEIG requirements.

## Sources

- IEC 60617 series, Graphical symbols for diagrams.
- IS 12032, Indian Standard for graphical symbols.
- MNRE Drawing Guidelines for Solar PV Plants.
- CEA Measures Relating to Safety and Electric Supply Regulations 2023.
- State CEIG drawing requirements.
- PM Surya Ghar Muft Bijli Yojana operational guidelines.
- IEEE Standard Dictionary of Electrical and Electronics Terms.
- AutoCAD and EPLAN documentation.
- IEC 62446-1, PV plant commissioning tests.
