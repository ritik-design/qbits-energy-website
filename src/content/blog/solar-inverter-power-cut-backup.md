---
title: "Do Solar Panels Work During a Power Cut?"
excerpt: "Understand why ordinary grid-tied solar stops during an outage, what a hybrid backup system needs, which loads can run, and what to verify before buying."
description: "Learn what happens to solar during a power cut, why grid-tied inverters stop, and what batteries, backup outputs, circuits, and tests are required."
category: "Buying Guide"
date: 2026-03-22
updatedDate: 2026-09-23
readTime: "8 min"
image: "/blog-images/solar-inverter-selection.svg"
author: "Keyur Rakholiya"
keywords:
  - what happens to solar during power cut
  - do solar panels work during power cut
  - solar inverter power cut backup
  - solar battery backup home
  - anti islanding solar inverter
faqs:
  - q: "Do solar panels work during a power cut?"
    a: "Panels may still receive sunlight, but an ordinary grid-connected inverter is designed to stop energising the grid connection after utility loss. Supplying home loads during an outage requires a supported backup architecture, isolation, protection, defined circuits, compatible storage where required, correct configuration, and commissioned grid-loss behaviour."
  - q: "Why does an on-grid solar inverter shut down in a power cut?"
    a: "A utility-interactive inverter uses islanding-prevention measures so the installation does not continue energising the utility connection after grid loss. This protects the intended grid-interface condition. Do not bypass anti-islanding or change grid settings to keep solar running; use an approved backup design instead."
  - q: "Does every hybrid inverter provide backup without a battery?"
    a: "No universal rule can be inferred from the word hybrid. Backup output, battery-free operation, transfer behaviour, power limits, supported loads, solar availability, phase arrangement, and grid-forming capability are model-specific. Require the exact manual, approved system diagram, compatibility evidence, and a witnessed grid-loss and restoration test."
  - q: "How long will a solar battery run my home?"
    a: "Runtime depends on the selected loads and their time profile, starting demand, usable battery energy, charge state, permitted operating window, inverter limits, conversion losses, temperature, degradation basis, solar available during the outage, and reserve setting. Calculate from documented inputs instead of using battery nameplate energy alone."
  - q: "Can a normal on-grid solar system be upgraded for backup later?"
    a: "Possible paths may include replacing the inverter, adding a compatible AC-coupled storage system, or redesigning selected circuits, but feasibility is project-specific. Check the existing inverter, array, switchboard, phase, protection, meter, approvals, space, warranty, and current equipment documentation before choosing a retrofit."
---

During a utility power cut, an ordinary grid-connected solar inverter stops energising the grid connection even if sunlight remains. Home backup needs an approved architecture that can isolate from the grid, establish a supported local supply, manage solar and compatible storage where required, protect defined circuits, and pass witnessed grid-loss and restoration tests.

That is the direct answer to **what happens to solar during a power cut**. Panels receiving sunlight and appliances receiving usable backup are different conditions. The inverter, controls, protection, battery, wiring, circuit selection, settings, and operating state determine the outcome.

## Why does ordinary grid-tied solar stop during a power cut?

**A utility-interactive inverter uses islanding-prevention measures to stop energising the utility connection after grid loss.** This is why panels and an on-grid inverter do not automatically keep a house powered during an outage. Do not bypass anti-islanding, alter grid profiles, or create an unapproved local connection to force continued operation.

IEC 62116 describes a test procedure for islanding-prevention measures used with utility-interconnected PV inverters. The [anti-islanding guide](/blog/anti-islanding-protection-solar-inverters/) explains the site meaning without treating a standard title as a project design.

An on-grid system can resume only through its approved reconnection behaviour after the utility supply returns and the required conditions are satisfied. Exact timing and criteria are model and grid-profile specific, so do not use a universal delay.

## What does a solar backup system need?

**A solar backup system needs a supported inverter operating mode, grid isolation or changeover arrangement, defined backup circuits, compatible energy source, protection, earthing, control logic, installation documents, settings, and commissioning evidence.** Depending on the design, it may also need a battery, dedicated backup output, external controller, transfer equipment, or separate distribution board.

Functional path:

| Part | Question to answer |
| --- | --- |
| Grid interface | How is the backup section prevented from energising the utility connection? |
| Local source | Which inverter mode establishes the supply during grid loss? |
| Energy | Is solar, battery, or another source available and permitted in that mode? |
| Backup circuits | Which loads are connected, and which remain off? |
| Power quality | What voltage, frequency, waveform and transfer behaviour does the exact model document? |
| Protection | Which isolation, overcurrent, residual-current, earthing and switching design applies? |
| Control | What happens at low charge, overload, fault, communication loss and grid restoration? |
| Evidence | Which operating scenarios are witnessed and recorded at commissioning? |

The [on-grid, hybrid and off-grid guide](/blog/on-grid-vs-hybrid-vs-off-grid-decision-guide/) compares architectures. It does not replace the exact-model diagram and qualified electrical design.

If outages are frequent, use the [frequent-power-cut inverter shortlist](/blog/best-solar-inverter-frequent-power-cuts/) to compare documented backup output and transfer behaviour for specific models after the system architecture is clear.

## Does every hybrid inverter provide the same backup?

**No. The word hybrid does not establish battery-free backup, output power, transfer time, phase support, grid-forming behaviour, compatible batteries, overload capability, black start, solar operation during an outage, or supported circuits.** Compare those fields in the exact manual and approved configuration, then test the operating scenarios the household requires.

Ask the installer to show:

- the exact inverter and battery model combination;
- normal grid-connected power path;
- grid-loss detection and isolation path;
- backup output or backed-up distribution board;
- maximum continuous and starting capability in the relevant mode;
- battery voltage, current, communication and firmware compatibility;
- supported operation when solar, battery or communications are unavailable; and
- reconnection and restoration sequence after the grid returns.

If a model advertises an emergency or backup output, confirm which loads, phases, conditions and limits apply. A feature name is not a household runtime or whole-home promise.

## Which home loads can be supported during an outage?

**Supportable loads depend on the backup output, simultaneous demand, starting behaviour, circuit design, available battery or solar energy, operating limits, and the duration required.** Create a critical-load schedule and a separate excluded-load list. Do not assume every circuit behind the main switchboard transfers to backup.

| Load field | Record |
| --- | --- |
| Circuit or appliance | Exact item and supply phase |
| Running input | Nameplate, manufacturer document or measured value |
| Starting behaviour | Starting current, surge or operating profile where relevant |
| Simultaneous use | Which loads must operate together? |
| Required duration | Minimum and preferred outage duration |
| Priority | Essential, optional or excluded |
| Control | Manual shedding, automatic priority or fixed connection |

Motors, compressors, pumps and power-electronic equipment require more than a running-watt addition. Use the exact appliance data and qualified design. Sensitive or safety-critical loads may require a separate UPS or certified architecture reviewed for that application.

## How should backup runtime be estimated?

**Estimate runtime from a time-based backup-load profile and usable energy at the actual operating limits.** Account for state of charge at outage start, permitted battery window, inverter and wiring losses, battery power limits, temperature, degradation basis, reserve, solar contribution uncertainty, and any load shedding without presenting nameplate energy as delivered runtime.

Planning relationship:

`initial backup energy requirement = average supported load × required hours`

That is only the start. The battery and inverter documents determine what portion is usable and at what power. Solar during an outage can be variable and may be curtailed by the system's operating limits, so do not use peak array power as guaranteed support.

Use the [battery-sizing guide](/blog/battery-sizing-hybrid-solar/) for the full input record and keep any example explicitly illustrative.

## Can an existing solar system be upgraded for backup?

**An upgrade may require an inverter replacement, an approved AC-coupled storage path, new protection and switching, a backup distribution board, compatible communications, changed metering or approvals, and recommissioning.** Inspect the existing array, inverter, switchboard, phase, space, wiring, protection, warranty, records, and authority conditions before selecting a retrofit.

Possible paths are not interchangeable:

| Path | Key checks |
| --- | --- |
| Replace on-grid inverter with hybrid | Array compatibility, battery pairing, switchboard, approval, warranty and recommissioning |
| Add AC-coupled storage | Compatible grid-forming and control behaviour, measurement, protection and interaction with existing PV |
| Add separate backup system | Circuit separation, charging source, changeover and operating responsibilities |
| Redesign selected loads only | Critical-load board, starting demand, shedding and owner expectations |

The [add-a-battery-later guide](/blog/add-battery-to-solar-system-later/) owns the staged retrofit decision. Obtain a current single-line diagram before asking a supplier to price an upgrade.

## What should be tested at commissioning?

**Commissioning should verify the as-built design in normal operation, grid loss, backup operation, load changes, low-energy or limit conditions where safely testable, faults, shutdown, grid restoration, monitoring, alarms, and customer controls.** Record exact models, serial numbers, firmware, settings, test conditions, measurements, observations, responsible people, and unresolved items.

Do not accept a demonstration with one light as proof that the specified circuits, starting loads, runtime logic, phase arrangement, protection and restoration sequence are correct. The [inverter commissioning guide](/blog/solar-inverter-commissioning-in-india/) supplies a broader evidence checklist.

## What is the backup-needs questionnaire?

**Before requesting a quote, document the grid connection, outage pattern, critical circuits, simultaneous and starting loads, required duration, phase, current solar system, roof and array, battery preference, installation environment, budget boundary, authority route, and acceptance tests.** Ask the installer to answer each item with an exact model, document, design, or stated gap.

1. Which circuits must operate, and which can remain off?
2. Which loads may start or run together?
3. How long must each priority group operate?
4. Is backup required at night, in poor weather, or only during daytime?
5. Is there an existing solar array, inverter, battery, generator or UPS?
6. Which single or three-phase arrangement applies?
7. What happens if battery, solar, meter or communication is unavailable?
8. Which approvals and metering changes may be required?
9. Which warranties and service route apply to the integrated system?
10. Which witnessed tests and handover records will prove the outcome?

Use the [residential solution route](/residential-solution/) to request a project-specific option. Exact backup diagrams and Qbits battery-pairing documents were not supplied for every model, so product, battery, solar-design and qualified electrical review is mandatory.

**Sources checked 23 September 2026:** the official IEC 62116 publication page, current Qbits anti-islanding, architecture, battery-sizing and commissioning guides, and current public datasheets. No universal battery-free backup, runtime, transfer, power, price or compatibility claim is made.
