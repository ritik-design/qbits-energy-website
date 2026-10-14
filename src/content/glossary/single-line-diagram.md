---
term: "Single Line Diagram"
title: "Single Line Diagram (SLD): Definition & Solar Project Applications"
description: "SLD is the simplified one-line electrical drawing. Guide to symbols, content and Indian solar applications."
category: "Installation"
categorySlug: "installation"
priority: "P1"
updatedDate: 2026-10-14
keywords:
  - single line diagram
  - sld diagram
  - sld drawing
  - solar sld
shortDefinition: "A single line diagram (SLD) is a simplified electrical drawing that shows the main components, connections and protection of a power system without drawing every conductor separately."
quickFacts:
  industry: "Solar electrical design"
  primaryUse: "Documenting the main power path and protective devices"
  commonUsers: "Electrical designers, installers, reviewers and DISCOMs"
  relevantStandards: "Use the symbols and drawing requirements accepted by the reviewing authority"
  relatedTechnologies: "PV strings, inverters, protection and metering"
relatedTerms:
  - { slug: "discom", term: "DISCOM" }
  - { slug: "ceig", term: "CEIG" }
  - { slug: "string-sizing", term: "String Sizing" }
  - { slug: "earthing", term: "Earthing" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
faqs:
- q: "What is an SLD in simple words?"
  a: "A simplified electrical drawing that shows what is connected to what, using one line per circuit even when the circuit has several conductors. For solar it traces the path from the modules through the inverter, protection and meter to the grid or load."
- q: "What does a solar SLD show?"
  a: "The PV array and string layout, any combiner box and DC isolator, the inverter with its ratings, the AC isolator and protective devices, the distribution board, the meter, earthing and the grid connection point."
- q: "Why is an SLD needed for a solar project?"
  a: "Reviewers use it to check the design before approval, installers build from it, inspectors compare the installation against it, and it is the reference when someone troubleshoots the plant later."
- q: "Is an SLD the same as a circuit diagram?"
  a: "No. An SLD shows components and the main connections. A circuit or wiring diagram shows every conductor, terminal and connection detail."
- q: "Who prepares the SLD?"
  a: "A competent solar electrical designer or engineer, usually the installer's design team. Whether an engineer's signature or seal is needed depends on the state, the project size and the reviewing authority, so confirm it for your project."
- q: "Which standard governs SLD symbols?"
  a: "IEC 60617 is the international collection of graphical symbols for diagrams, and most design tools carry IEC-style symbol libraries. The authority reviewing your drawing may specify a symbol set or format of its own, so ask before drawing."
- q: "Does PM Surya Ghar require an SLD?"
  a: "Rooftop applications go through the DISCOM, and DISCOM technical feasibility and net-metering procedures commonly ask for a single line diagram. Check the checklist for your DISCOM and the scheme guidelines in force, because formats differ by state."
- q: "What software is used to draw an SLD?"
  a: "General CAD or diagram tools such as AutoCAD and Visio, electrical CAD tools such as EPLAN, and PV design software that exports a diagram with the design. Whatever tool is used, a person should check ratings and protection."
- q: "How detailed should an SLD be?"
  a: "Detailed enough that a reviewer can see the string layout, inverter inputs, protection, earthing, metering and connection point, with ratings labelled on each device. A larger plant needs more sheets and more detail than a home system."
- q: "What is a busbar on an SLD?"
  a: "A node where several circuits meet. It is conventionally drawn as a heavy line, often horizontal, with the incoming and outgoing circuits connected to it."
- q: "Is an SLD the same as a plan layout?"
  a: "No. A plan layout shows physical positions such as module placement on a roof. An SLD shows electrical relationships and does not need to be to scale."
- q: "Does an SLD include cable sizes?"
  a: "It usually labels the main cable sizes and types so the reviewer can check them against the current and voltage drop calculations. The full routing and lengths belong in a cable schedule."
- q: "Can an SLD be hand-drawn?"
  a: "Whether a hand-drawn SLD is acceptable depends entirely on the reviewing authority. Many reviewers expect a clean, legible CAD or PDF drawing, so ask for the accepted format first."
- q: "What are the usual SLD revision stages?"
  a: "A design SLD for review, an approved SLD after the reviewer's comments, and an as-built SLD if the installed system differs from the approved one. Keep the revision number and date on each."
- q: "Should the SLD show monitoring and metering?"
  a: "Yes, where they exist. Show the energy meter and its location, any current transformers used for export limiting or metering, and the communication or monitoring connection, since they are part of the installed system."
---

**A solar single line diagram, or SLD, shows how the principal electrical components connect from the PV array to the inverter, protection devices, loads, meter and grid.** It simplifies a multi-conductor system into an overview, drawing one line for each three-phase or multi-conductor circuit. It does not replace detailed cable schedules, installation drawings or a site-specific safety design.

## Why an SLD matters

An SLD is the shared reference for everyone who touches the project.

- **Approval.** The serving [DISCOM](/glossary/discom/) and, where applicable, an electrical inspectorate such as [CEIG](/glossary/ceig/) review the design from the SLD before work proceeds.
- **Construction.** Installers build from it, so wrong ratings on the drawing become wrong parts on the roof.
- **Commissioning.** Inspectors compare the installed system with the drawing. IEC 62446-1, the standard for documentation and commissioning of grid-connected PV systems, lists a single-line diagram among the minimum system documents handed to the customer.
- **Operation and maintenance.** Technicians use it to trace a fault and to isolate equipment safely.
- **Later audits and insurance,** which refer back to the as-built version.

A well-prepared SLD lets anyone who reads electrical symbols understand the string configuration, [MPPT](/glossary/mppt/) allocation, protection, earthing and grid connection point without walking the site.

## What should the drawing show?

| Part of the system | Details worth checking |
| --- | --- |
| PV array and strings | Module count, string grouping and relevant DC ratings |
| DC combiner (if used) | Number of strings, fuse ratings and DC isolator |
| DC cable | Size and voltage rating |
| Inverter | Exact model, DC inputs, AC output and rated limits |
| AC cable and isolator | Size, rating and location |
| DC and AC protection | Isolation, surge protection, breakers and residual-current devices, with locations and ratings |
| Earthing and bonding | Intended connections and design references |
| Meter and grid point | Approved metering arrangement and connection location |

The required level of detail depends on project size and the reviewer. A domestic rooftop submission and a large commercial plant will not use the same drawing set. Ask the serving DISCOM for its current SLD format and approval checklist; ask the project engineer whether any electrical-inspector or CEIG review applies. Do not assume that a single national capacity threshold determines whether CEIG review or an engineer seal is needed.

## Symbols and conventions

IEC 60617 is the IEC collection of graphical symbols for electrotechnical diagrams. It is maintained as an online database covering conductors, passive components, energy conversion, switchgear and protective devices, and measuring instruments. Most CAD and PV design tools ship IEC-style symbol libraries, but a reviewing authority can still ask for its own format.

A few conventions are worth knowing when you read an SLD:

- A **single line** stands for a whole circuit. Short slashes across the line indicate the number of conductors, for example three for a three-phase circuit.
- A **heavy horizontal line** is a busbar, the node where circuits join.
- Switching and protective devices (isolators, breakers, fuses, surge protectors) each have their own symbol and should also carry a label with the rating.
- The **earth symbol** marks the connection to the earthing system. If the diagram has no earthing, a reviewer will notice.

## SLD and the other drawings

| Drawing | Use |
| --- | --- |
| Single line diagram | High-level electrical architecture and ratings |
| Wiring or circuit diagram | Every conductor, terminal and connection |
| Plan layout | Physical positions of modules and equipment on the roof or land |
| Cable schedule | Every cable with size, length and route |
| Earthing layout | Electrode positions and bonding |
| Lightning-protection drawing | Arrangement of any lightning protection system |

An SLD explains **electrical relationships**. A roof layout explains physical module placement; a wiring diagram gives more conductor-level detail. The [solar inverter wiring guide](/blog/solar-inverter-wiring-diagram/) and the [circuit diagram guide](/blog/solar-inverter-circuit-diagram/) provide visual explanations but should not be used as a substitute for an engineer-approved site drawing.

## An illustrative residential SLD

The list below shows the kind of items a small single-phase rooftop SLD names, in the order the power flows. It is a teaching example, not a design: every rating must come from the project's own calculation and the actual equipment datasheets.

1. PV array: modules in one or more strings, with the module model and the number per string.
2. DC cable from the array to the inverter, with size noted.
3. DC isolator and DC surge protection, if the design includes them.
4. Single-phase string inverter, with its model and rated AC output.
5. AC isolator or breaker, and AC surge protection if specified.
6. Residual-current and overcurrent protection in the distribution board.
7. Bidirectional or net meter at the connection point.
8. Earthing: array frame and inverter chassis bonded to the earth electrodes.

Each item should carry its rating, so the reviewer can check, for example, that the string's open-circuit voltage stays within the inverter's maximum DC input. The [string-sizing calculator](/string-sizing-calculator/) is one way to check that input range.

## Larger plants

A commercial or utility plant is drawn hierarchically: module, string, combiner box, DC trunk cable, inverter, AC low-voltage side, step-up transformer where used, switchgear at the connection voltage, then the export meter and the utility grid. The drawing usually runs to several sheets, with repeated blocks drawn once and referenced. Where the plant has several inverter types or a [central inverter](/glossary/central-inverter/) arrangement, each block gets its own labelled detail.

## How to review an SLD before installation

Confirm that the drawing's inverter and module models match the quotation. The PV string count and input range should agree with the inverter datasheet and the string-sizing calculation. Check that protective devices are identified, not just represented by unlabelled boxes. Record the drawing revision and any design changes. After installation, obtain an as-built version if the constructed connections differ from the approved design.

## Common SLD problems

- Component ratings missing from the labels.
- An outdated SLD that no longer matches what was built.
- A generic template that was never adapted to the real installation.
- Earthing arrangement not shown clearly.
- Protection coordination unclear, with devices unlabelled.
- Symbols used inconsistently, so two readers interpret the drawing differently.

## Best practices

1. Use consistent standard symbols and a legend.
2. Label every component with its rating (kW, A, V, mm² as applicable).
3. Show every isolator, breaker, surge protector and meter, plus the earthing arrangement.
4. Mark main conductor sizes.
5. Keep version control: design, approved, as-built.
6. Keep both a PDF and the editable source file.

## Who prepares it?

A competent solar electrical designer or engineer should prepare and check a project SLD. A software-generated drawing still needs human review of ratings, protection and the actual installation. The [solar SLD software guide](/blog/solar-sld-software/) covers tools that generate drawings. Local sign-off requirements depend on the state, connection size and authority; verify them for your project rather than relying on a national rule-of-thumb.

## Standards and references

| Reference | Role |
| --- | --- |
| IEC 60617 | Graphical symbols for diagrams |
| IEC 62446-1 | Documentation, commissioning tests and inspection for grid-connected PV systems; lists a single-line diagram in the system documentation |
| CEA (Measures relating to Safety and Electric Supply) Regulations, 2023 | Safety and inspection framework for electrical installations in India |
| DISCOM and state CEIG checklists | The drawing format and approval steps that actually apply to your project |

Sources: [IEC 60617 database](https://std.iec.ch/iec60617); [IEC 62446-1:2016, IEC webstore](https://webstore.iec.ch/en/publication/24057). Checked 14 October 2026.

## Common mistakes

- Using non-standard symbols with no legend.
- Leaving ratings off the labels.
- Not updating the SLD after a design change.
- Skipping earthing details.
- Submitting a design SLD when the installation differs from it.
- Not keeping an as-built version.

Check the exact submission and approval rules with the local DISCOM and state authority for each project.
