---
term: Zero Export
title: 'Zero Export Solar: Meaning, Control and Verification'
description: Understand how zero-export solar limits grid injection, what a CT or meter does, and what to verify during commissioning.
category: Metering and Grid
categorySlug: metering-grid
priority: P1
updatedDate: 2026-09-23
keywords:
- what is zero export
- zero export inverter
- export limit india
- anti reverse power
- solar without net metering
shortDefinition: Zero export is an operating arrangement that controls a solar system so it does not intentionally send surplus power to the utility grid. It requires compatible inverter settings and an approved measurement/control arrangement; it does not make a grid connection unregulated.
quickFacts:
  industry: Distributed Solar / Grid Compliance
  primaryUse: Preventing reverse power flow from PV plant to grid
  commonUsers: C&I customers without net metering, HT consumers, captive plants
  relevantStandards: CEA Grid Code, IEC 62116, state SERC export rules
  relatedTechnologies: Smart meter, current sensor, hybrid inverter, EMS, plant controller
relatedTerms:
- slug: net-metering
  term: Net Metering
- slug: gross-metering
  term: Gross Metering
- slug: on-grid-inverter
  term: On Grid Inverter
- slug: hybrid-inverter
  term: Hybrid Inverter
- slug: smart-meter
  term: Smart Meter
- slug: anti-islanding
  term: Anti-Islanding
- slug: discom
  term: DISCOM
- slug: battery-soc
  term: Battery SOC
- slug: bess
  term: BESS
faqs:
- q: Does zero export mean a solar system has no grid connection?
  a: No. A grid-connected system can operate with export limited by a compatible control and measurement arrangement.
- q: Does enabling zero export remove the need for utility approval?
  a: No. Connection, metering and protection requirements still depend on the applicable utility rules.
- q: Can I verify zero export from a settings screenshot?
  a: No. Commissioning should check the sensor placement, phase mapping and observed behavior when site load changes.
author: Nirav Dhanani
---

## What is zero export?

A **zero-export solar system** uses a measurement and control arrangement to reduce inverter output, charge a supported battery or otherwise manage generation when onsite consumption is too low to absorb it. Its aim is to keep power from being deliberately exported at the grid connection point.

“Zero export” is an operating target, not a promise that every measured moment will be exactly zero. Response speed, sensor placement, loads and the approved control scheme affect measured flow. Check the applicable utility rules and equipment documentation.

## How does export control work?

**Export control measures power flow at an agreed grid-connection point and sends that information to a compatible inverter, plant controller, or energy-management system.** The control changes generation or supported storage behaviour to limit export. Correct operation depends on the approved measurement boundary, sensor installation, phase mapping, communications, settings, and failure response.

| Component | Role | Commissioning check |
| --- | --- | --- |
| Grid connection point | Location where import/export is assessed | Agree on the applicable measurement boundary |
| CT or compatible meter | Measures direction and size of power flow | Confirm position, orientation, phase and communications |
| Controller or inverter setting | Adjusts inverter output or supported storage behavior | Confirm the approved mode, limits and loss-of-signal behavior |
| Loads and optional battery | Consume or store available generation | Check actual operation across representative load changes |

This is a functional map, not a terminal wiring diagram. The [complete-system wiring guide](/blog/solar-inverter-wiring-diagram/) covers the related paths, and the equipment manual governs the actual connections.

## How is zero export different from net metering?

**Net metering records approved import and export under a utility billing arrangement, while zero export controls generation or supported storage to limit intentional injection.** A zero-export setting does not approve a grid connection, replace utility metering or protection, or establish which rule applies. Check the current DISCOM and project documents.

Some projects use zero export because exporting is not permitted or not commercially attractive. Others use it as a temporary operating condition. Confirm the specific DISCOM or contract requirements rather than applying one national rule.

## What should an EPC verify?

**An EPC should verify exact-model compatibility, the approved measurement point, CT or meter type, orientation, phase mapping, communications, settings, response to changing load, and behaviour after signal loss.** Commissioning evidence should identify models, firmware, serial numbers, test conditions, observations, approvals, and the final configuration left in service.

1. Confirm the exact inverter or controller model supports the required mode and sensor.
2. Identify the correct grid-connection measurement point on the approved single-line diagram.
3. Check CT/meter orientation, phase mapping and communications per the equipment instructions.
4. Test the response to a fall in site load and record grid import/export observations.
5. Confirm documented behavior if the sensor or communications fail.
6. Save settings, firmware, serial numbers and commissioning records.

A screenshot of an enabled menu option does not prove that the meter is in the right place or that the system behaves correctly.

## The measurement boundary decides everything

Almost every export control failure traces back to the sensor rather than the inverter.

The current transformer or meter has to sit at the agreed grid connection point, so that it sees the net flow between the site and the utility. Placed downstream of part of the site load, it measures only a portion of consumption, and the controller acts on an incomplete picture. The system then either exports when it believes it is not, or curtails generation that the site could have used.

Orientation matters as much as position. A current transformer installed backwards reports flow in the wrong direction, which can produce the exact opposite of the intended behaviour. On a three phase connection, phase mapping must also be correct, so that each measured phase corresponds to the phase the controller believes it is reading.

None of this is visible from a settings menu. It is established by inspecting the installation against the approved single line diagram and then observing real behaviour as site load changes.

## Batteries and hybrid systems

A supported hybrid system may send surplus PV energy to a battery before curtailing generation, subject to charging limits and operating mode. Battery presence does not, by itself, guarantee zero export. Confirm model-specific functionality and approved pairing.

Use the [hybrid inverter range](/hybrid-inverter/) and [datasheet library](/download-datasheets/) to identify the intended model. Ask Qbits for the matching installation and export-control documentation through [contact](/contact-us/).

## Response time and why brief export still happens

"Zero export" describes an operating target, not an instantaneous guarantee, and understanding why prevents a false fault report at commissioning.

The control loop has to do three things in sequence: measure flow at the connection point, communicate that reading to the inverter or controller, and act on it by reducing output or diverting energy to a supported battery. Each step takes time.

So when a large load switches off suddenly, generation momentarily exceeds consumption before the loop responds, and a brief reverse flow can be measured. The system then settles back. This is normal behaviour for a control based arrangement rather than evidence of a misconfiguration.

What matters for approval is what the applicable utility rules actually require: whether they specify a permitted response time, a tolerance, or a measurement averaging period. A rule expressed as an average over an interval is satisfied by behaviour that a momentary instantaneous reading would appear to breach.

Confirm which basis your DISCOM applies before agreeing acceptance criteria, and record the observed response during commissioning so there is evidence if the question arises later.

## Common problems

**Unexpected export:** first check the measurement boundary, sensor orientation, phase mapping and active control mode. Record timestamps and measurements before changing settings.

**Unnecessary curtailment:** verify whether the controller reads the site's loads correctly and whether the configured export threshold matches the agreed arrangement.

**Lost sensor signal:** follow the equipment's documented fail-safe behavior. Do not force an unsupported operating mode to keep generation online.

## Why a project chooses zero export

Zero export is rarely a preference. It is usually a response to a constraint.

Where a DISCOM does not permit export for a consumer category, or where the local distribution transformer has no remaining headroom for additional solar, export control may be the condition on which a connection is approved at all. Some commercial arrangements also make export commercially unattractive, so a plant sized for self consumption avoids the administrative burden of a settlement arrangement it will barely use.

The design consequence is significant. A zero export plant earns nothing from surplus generation, so its value depends entirely on what the site consumes during generating hours. Sizing follows the daytime load profile rather than the roof area or the annual consumption total.

That makes load measurement more important here than in a net metered design, where surplus is at least credited. Oversizing a zero export plant produces curtailment, not credit.

For broader billing distinctions, see [gross versus net metering](/blog/gross-metering-vs-net-metering/).

Public datasheets do not provide a complete export control manual for every model. Request the model specific installation and control documentation, and have the configuration verified by a qualified electrical reviewer at commissioning.
