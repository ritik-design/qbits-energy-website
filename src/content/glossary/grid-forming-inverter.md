---
term: "Grid-Forming Inverter"
title: "Grid-Forming Inverter: Definition, Working & Applications"
description: "Grid-forming inverters create voltage and frequency. Full guide to working and emerging Indian applications."
category: "Grid Compliance"
categorySlug: "grid-compliance"
priority: "P2"
updatedDate: 2026-07-08
keywords:
  - grid forming inverter
  - grid forming vs grid following
  - virtual synchronous machine
  - black start solar
  - microgrid inverter
shortDefinition: "A grid-forming inverter (GFM) is an inverter that establishes voltage and frequency on its own, rather than following an existing grid signal. Used in microgrids, islanded BESS, hybrid solar with backup, and emerging utility-scale projects providing inertia and black-start capability."
quickFacts:
  industry: "Power Electronics / Grid Services"
  primaryUse: "Voltage and frequency formation in islanded or weak grids"
  commonUsers: "Microgrid operators, hybrid solar with backup, future utility BESS"
  relevantStandards: "IEEE 2800 (emerging), AEMO requirements (Australia)"
  relatedTechnologies: "Virtual synchronous machine, droop control, BESS"
relatedTerms:
  - { slug: "smart-inverter", term: "Smart Inverter" }
  - { slug: "hybrid-inverter", term: "Hybrid Inverter" }
  - { slug: "off-grid-inverter", term: "Off Grid Inverter" }
  - { slug: "anti-islanding", term: "Anti-Islanding" }
  - { slug: "fault-ride-through", term: "Fault Ride Through" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "ac-coupling", term: "AC Coupling" }
  - { slug: "ems", term: "Energy Management System" }
  - { slug: "bess", term: "BESS" }
  - { slug: "lithium-ion-battery", term: "Lithium Ion Battery" }
  - { slug: "reactive-power", term: "Reactive Power" }
  - { slug: "frequency-response", term: "Frequency Response" }
  - { slug: "on-grid-inverter", term: "On Grid Inverter" }
faqs:
  - q: "What is a grid-forming inverter in simple words?"
    a: "An inverter that makes its own voltage and frequency, like a generator. Used when there's no grid (microgrid) or when supporting weak grids."
  - q: "Grid-forming vs grid-following?"
    a: "Grid-following: matches existing grid voltage and frequency. Grid-forming: creates its own voltage and frequency. Most solar inverters are grid-following; grid-forming is specialised."
  - q: "Where are grid-forming inverters used?"
    a: "Off-grid microgrids, islanded BESS, hybrid solar backup, emerging utility-scale providing inertia."
  - q: "Are hybrid inverters grid-forming?"
    a: "In backup mode yes, when forming the islanded AC bus for home loads. In grid-tied mode they are grid-following."
  - q: "Is grid-forming required in India?"
    a: "Not currently. Required for hybrid backup operation, not for grid-tied. Future utility BESS may need it."
  - q: "What is virtual synchronous machine?"
    a: "Control technique that makes a grid-forming inverter behave like a synchronous generator, providing inertia and damping."
  - q: "Do grid-forming inverters provide inertia?"
    a: "Yes, through control. Useful as renewable penetration rises and traditional synchronous generators decrease."
  - q: "What is black start?"
    a: "Restoring grid from complete blackout. Requires grid-forming capability since there is no grid to follow."
  - q: "Are grid-forming inverters more expensive?"
    a: "Typically yes, due to more complex control and larger overcurrent rating. Premium of 20-50 percent over equivalent grid-following."
  - q: "Are utility BESS grid-forming?"
    a: "Emerging. Australia requires grid-forming for some BESS. India is following the trend."
  - q: "Can a grid-forming inverter operate in parallel with grid?"
    a: "Yes with appropriate synchronisation. The control mode is different but parallel operation is possible."
  - q: "What is droop control?"
    a: "Simple grid-forming method where output frequency droops with load. Multiple grid-forming sources share load through droop characteristics."
  - q: "Is grid-forming the future of solar?"
    a: "For high-penetration grids: increasingly yes. Inverter-based resources need to provide grid services traditionally from synchronous machines."
  - q: "What is IEEE 2800?"
    a: "Emerging US standard for inverter-based resources including grid-forming capability requirements."
  - q: "Do off-grid inverters grid-form?"
    a: "Yes by definition. They create the entire AC bus for the off-grid system."
author: "Nirav Dhanani"
---

## What is a grid-forming inverter

A grid-forming inverter (GFM) is an inverter that establishes voltage and frequency on its own, providing a stable AC bus that other devices can synchronise to. This contrasts with the dominant grid-following (GFL) inverter that requires an existing grid voltage and frequency to operate.

> **TL;DR**
> - A grid-forming inverter creates its own voltage and frequency reference, unlike a standard grid-following inverter that synchronises to an existing grid signal.
> - GFM capability is required for islanded operation: microgrids, off-grid systems and hybrid inverters running in backup mode.
> - Grid-forming inverters can provide black start, synthetic inertia and frequency support, services traditionally supplied by synchronous generators.
> - India has no specific grid-forming mandate yet, but Australia's AEMO already requires it for some BESS projects, and IEEE 2800 is an emerging US standard.
> - Grid-forming inverters typically cost 20 to 50 percent more than equivalent grid-following inverters due to more complex control and larger overcurrent rating.

Grid-forming inverters are essential for islanded operation where no grid exists (microgrids, off-grid systems, hybrid backup) and increasingly valued at utility scale where high renewable penetration requires inverters to provide grid-stabilising services traditionally supplied by synchronous generators.

For Indian solar, grid-forming capability appears in [hybrid inverters](/glossary/hybrid-inverter/) operating in backup mode (creating an islanded AC bus during grid outages), off-grid inverters and emerging utility-scale [BESS](/glossary/bess/) providing fast frequency response and inertia. The capability is becoming a competitive advantage as renewable penetration rises.

## Why grid-forming inverters matter

Islanded operation. Microgrids, off-grid systems and hybrid backup require grid-forming.

Black start. Restoring grid from blackout requires grid-forming sources.

Grid inertia. Synthetic inertia from grid-forming inverters supports frequency stability.

High-renewable grids. As synchronous generators decline, grid-forming inverters fill the gap.

Future regulatory alignment. Likely required as grid codes evolve.

## How grid-forming works

A grid-forming inverter does not need an external voltage reference. Instead:

1. Internal voltage and frequency setpoints define the output.
2. Control loop produces voltage with defined magnitude and frequency.
3. Output current responds to load variations.
4. Droop characteristics share load with other sources.
5. Virtual synchronous machine algorithms emulate inertia.

In contrast, grid-following inverters use the grid voltage as reference and produce current synchronised to it.

## Technical deep dive

### Grid-forming vs grid-following

| Aspect | Grid-following | Grid-forming |
|---|---|---|
| Voltage reference | External (grid) | Internal |
| Operating mode | Current source | Voltage source |
| Operates without grid | No | Yes |
| Black start | No | Yes |
| Inertia | None | Synthetic |
| Cost | Lower | Higher |
| Use case | Grid-connected solar | Microgrid, BESS, hybrid backup |

### Control techniques

| Technique | Description |
|---|---|
| Droop control | Frequency droops with active power, voltage with reactive |
| Virtual synchronous machine | Emulates synchronous generator dynamics |
| Direct power control | Controls power injection at PCC |
| Voltage source mode | Direct voltage and frequency output |

### Grid services

| Service | Grid-forming capability |
|---|---|
| Voltage support | Yes |
| Frequency support | Yes (including inertia) |
| Black start | Yes |
| Spinning reserve | Yes |
| Microgrid formation | Yes |
| Islanding | Yes |
| Grid restoration | Yes |

## Real-world applications

Off-grid solar microgrids.

Hybrid solar backup output.

Utility-scale BESS providing grid services.

Remote island grids.

Future grid restoration following blackouts.

Naval and military isolated grids.

## Advantages

Enables islanded operation.

Provides grid services traditionally from synchronous machines.

Supports high renewable penetration.

Allows black start.

Future-ready for evolving grid codes.

## Limitations

Higher cost and complexity.

Larger overcurrent rating needed.

Coordination challenges in multi-inverter setups.

Limited Indian regulatory framework.

Pre-commercial for utility-scale in most markets.

## Common grid-forming problems

Coordination issues between multiple grid-forming sources.

Limited fault current contribution.

Stability during large load changes.

Software complexity.

## Best practices

Use grid-forming for islanded and backup operation only.

Coordinate droop characteristics across multiple sources.

Validate stability through simulation before deployment.

Document grid-forming mode separately from grid-following.

## Comparison: applications

| Application | GFL/GFM |
|---|---|
| Standard solar grid-tied | GFL |
| Hybrid inverter (backup) | GFM |
| Off-grid inverter | GFM |
| Microgrid master | GFM |
| Future utility BESS | GFM |
| Future hybrid solar+storage | Mixed |

## Indian market context

Grid-forming present in hybrid inverter backup mode and off-grid inverters.

No specific regulatory requirement yet.

Utility-scale BESS adoption growing, with grid-forming as differentiator.

Major hybrid inverter brands (Sungrow, Solis, Goodwe, Solax, Deye, Victron) offer grid-forming backup.

Emerging requirements expected as renewable penetration rises.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEEE 2800 (emerging) | US inverter-based resource requirements |
| AEMO requirements | Australian grid-forming standard |
| EirGrid SOP | Irish grid-forming requirements |
| IEC TR 63342 | Standards landscape document |

## Key takeaways

Grid-forming inverters establish voltage and frequency independently, enabling islanded operation and providing grid services traditionally from synchronous generators. Required for off-grid, hybrid backup and microgrid operation. Utility-scale grid-forming for BESS is emerging globally and increasingly important as renewable penetration rises. Indian regulatory framework is following international standards.

## Need grid-forming inverter solutions?

QBits Energy supplies hybrid and off-grid inverters with grid-forming capability for backup applications, microgrids and emerging utility BESS across India.

## Sources

- IEEE 2800 (under development), Inverter-Based Resources Requirements.
- AEMO Grid Forming Inverter Guidelines, Australia.
- EirGrid System Operator requirements.
- IEC TR 63342, Grid-forming inverters landscape.
- NREL Grid-Forming Inverter Studies.
- Sandia National Laboratories GFM Reports.
- Manufacturer documentation from Tesla, Sungrow, Wartsila.
- IEA PVPS Task 14 publications.
- ESIG Reports on inverter-based resources.
