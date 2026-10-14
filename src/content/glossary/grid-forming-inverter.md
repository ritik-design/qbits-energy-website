---
term: Grid-Forming Inverter
title: 'Grid-Forming Inverter: Definition, Working & Applications'
description: 'Grid-forming vs grid-following inverters: voltage control, islanded operation, grid services and the evidence to request before specifying a model.'
category: Grid Compliance
categorySlug: grid-compliance
priority: P2
updatedDate: '2026-10-01'
keywords:
- grid forming inverter
- grid forming vs grid following
- virtual synchronous machine
- black start solar
- microgrid inverter
shortDefinition: A grid-forming inverter controls an internal voltage reference and can support voltage and frequency formation. A grid-following inverter instead synchronises its current output to an existing voltage reference. Islanded operation, black start and other grid services depend on the complete equipment and control design.
quickFacts:
  industry: Power Electronics / Grid Services
  primaryUse: Voltage and frequency formation in islanded or weak grids
  commonUsers: Microgrid designers, power-system engineers and storage project developers
  relevantStandards: 'IEEE 2800-2022: US transmission-connected inverter-based resources; project-specific grid requirements'
  relatedTechnologies: Virtual synchronous machine, droop control, BESS
relatedTerms:
- slug: smart-inverter
  term: Smart Inverter
- slug: hybrid-inverter
  term: Hybrid Inverter
- slug: off-grid-inverter
  term: Off Grid Inverter
- slug: anti-islanding
  term: Anti-Islanding
- slug: fault-ride-through
  term: Fault Ride Through
- slug: solar-inverter
  term: Solar Inverter
- slug: ac-coupling
  term: AC Coupling
- slug: bess
  term: BESS
- slug: lithium-ion-battery
  term: Lithium Ion Battery
- slug: reactive-power
  term: Reactive Power
- slug: on-grid-inverter
  term: On Grid Inverter
faqs:
- q: What is a grid-forming inverter in simple words?
  a: It controls its own voltage reference rather than relying entirely on another source to establish the AC waveform. Its permitted operating modes and loads still depend on the complete design.
- q: Are all hybrid inverters grid-forming?
  a: A hybrid product label does not establish utility-scale grid-forming performance. A backup output may form an islanded AC supply, but confirm the exact operating modes, protection, current limits and test evidence with the manufacturer.
- q: Does grid-forming capability guarantee black start?
  a: No. Black start also needs an available energy source, a controlled energisation sequence, protection coordination and verified equipment capability. Request the specified test and operating limits.
- q: What is IEEE 2800?
  a: IEEE 2800-2022 is a published US standard for interconnection and interoperability of inverter-based resources connecting to transmission power systems. It is not an automatic Indian approval or proof that a particular inverter has grid-forming capability.
- q: Does Qbits publish a grid-forming capability certificate?
  a: The public inverter family information used for this guide does not establish such a certificate. Request exact-model documents and project-specific engineering confirmation; do not infer the capability from a hybrid or backup label.
author: Nirav Dhanani
---

## What is a grid-forming inverter?

A grid-forming inverter controls an internal voltage reference. A grid-following inverter synchronises its current output to an existing voltage reference. The difference is a control function, not simply a label for whether a product contains a battery connection.

The [grid-forming research roadmap](https://research-hub.nlr.gov/en/publications/research-roadmap-on-grid-forming-inverters/) examines how both control types can operate in future power systems. For a project shortlist, request the manufacturer's operating-mode description and test evidence for the exact model.

## Grid-forming vs grid-following

| Decision | Grid-following | Grid-forming |
| --- | --- | --- |
| Reference | Synchronises to an existing voltage reference | Controls an internal voltage reference |
| Islanded operation | Needs another source to establish the AC supply | May establish the supply when the complete system is designed for it |
| Grid connection | Must meet the applicable interconnection requirements | Must also meet those requirements; the control label is not an approval |
| Black start | Not established by the label | Also not established by the label; verify equipment and system capability |
| Project evidence | Controls, protection, operating limits and test results | Those documents plus the specified grid-forming functions and tests |

Do not infer black start, inertia response, overload duration or parallel operation from this table. The manufacturer and project designer must establish each required function separately.

## What hybrid backup does and does not establish

A [hybrid inverter](/glossary/hybrid-inverter/) may supply selected loads while disconnected from the utility. That does not by itself establish every service expected from a transmission-connected grid-forming resource.

Confirm the backup wiring arrangement, supported loads, battery availability, transfer behaviour, fault response and permitted control mode. Use the [hybrid selection guide](/blog/how-to-choose-hybrid-solar-inverter/) to prepare those questions. Do not assume all models within a brand use the same controls.

## Evidence to request before specifying a model

| Requirement | Evidence to request |
| --- | --- |
| Operating modes | Description of grid-connected and islanded operation, including transitions |
| Voltage and frequency control | Stated setpoints, tolerances and control functions |
| Energy source | Battery or DC-source operating limits and availability assumptions |
| Load energisation | Permitted sequence, inrush limits and test conditions |
| Fault response | Current limits, protection coordination and recovery behaviour |
| Parallel operation | Supported number of units, communications and approved control arrangement |
| Grid services | Test report for the exact requested function, with conditions and limitations |
| Approval | The connection authority's current requirements and accepted project documents |

A sales description is not a test report. Record the exact model, firmware where relevant, document revision and the party responsible for confirming project suitability.

## Standards and Indian project requirements

[IEEE 2800-2022](https://standards.ieee.org/ieee/7003/10453/) is a published standard for inverter-based resources connected to US transmission systems. The older description of it as an emerging or unfinished standard was incorrect.

For an Indian project, check the current tender, connection agreement, regulator and utility requirements that apply to that project. An overseas standard citation does not establish Indian approval. The [BIS standard-information portal](https://www.bis.gov.in/know-your-standard/?lang=en) can help locate the applicable Indian standard and supporting information; it does not replace exact-model approval evidence.

## Applying this to a Qbits enquiry

Qbits publishes [on-grid](/on-grid-inverter/) and [hybrid](/hybrid-inverter/) inverter families. Those category names do not establish a utility-scale grid-forming service, black-start test result or project approval.

Start with the [public datasheet library](/download-datasheets/). If the proposed project needs a specific control function, send the exact requirement and request model-specific confirmation through the [technical-document enquiry](/contact-us/?subject=Technical+Documents&from=%2Fglossary%2Fgrid-forming-inverter%2F#lead-form).

## Sources

- [Research Roadmap on Grid-Forming Inverters](https://research-hub.nlr.gov/en/publications/research-roadmap-on-grid-forming-inverters/), laboratory research publication.
- [IEEE 2800-2022](https://standards.ieee.org/ieee/7003/10453/), official standard scope.
- [BIS Know Your Standard](https://www.bis.gov.in/know-your-standard/?lang=en), official standard-information route.
