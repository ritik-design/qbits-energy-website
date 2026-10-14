---
term: Zero Export
title: "Zero Export: Definition, Meaning, How It Works, Benefits & Applications"
description: "Zero export is an inverter control mode that prevents solar power from flowing back to the grid. Guide to working, sensors and Indian C&I applications."
category: Metering and Grid
categorySlug: metering-grid
priority: P1
updatedDate: 2026-10-14
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
- q: "What is zero export in simple words?"
  a: "A control arrangement that keeps a solar system from deliberately sending power into the utility grid. A sensor at the connection point reports the flow, and the inverter or controller reduces output, or charges a battery, when site load is too low to use all the generation."
- q: "Does zero export mean a solar system has no grid connection?"
  a: "No. A grid-connected system can operate with export limited by a compatible control and measurement arrangement. The grid still supplies the site whenever solar is not enough."
- q: "Why would a site use zero export?"
  a: "Typically because the DISCOM does not permit export for that consumer category, because the local network has no headroom for more injection, or because the site is sized only for self-consumption and has no use for a settlement arrangement. Confirm the actual reason with the DISCOM or contract."
- q: "Does enabling zero export remove the need for utility approval?"
  a: "No. Connection, metering and protection requirements still depend on the applicable utility rules. Zero export is a way of meeting a condition, not a way around approval."
- q: "Does zero export waste solar power?"
  a: "When generation exceeds site load and there is no battery to take the surplus, the inverter reduces output and that potential energy is not generated. How much that is depends on how well the plant size matches the daytime load, so size from measured load."
- q: "What sensor is needed for zero export?"
  a: "A current transformer or a compatible energy meter at the grid connection point that the inverter or controller supports. The model, accuracy class, communication method and orientation all come from the inverter or controller documentation."
- q: "Can I verify zero export from a settings screenshot?"
  a: "No. Commissioning should check the sensor placement, phase mapping and observed behaviour when site load changes."
- q: "How fast does the control react?"
  a: "Response time is a property of the specific inverter or controller and its sensor link, and manufacturers state it differently. A short reverse-flow event while a large load switches off is normal for control-based systems. Ask what response and averaging basis the DISCOM accepts."
- q: "Can zero export work with more than one inverter?"
  a: "Yes, usually through a plant controller that reads one grid-point meter and coordinates all inverters. Without that coordination, several inverters reacting to the same signal can overcorrect."
- q: "Is zero export the same as a limited export setting?"
  a: "They use the same mechanism. A zero setting aims for no export, while a limit allows a stated amount up to what the connection approval permits. The approved figure comes from the utility, not from the inverter menu."
- q: "Is zero export the same as anti-islanding?"
  a: "No. Anti-islanding disconnects the inverter when the grid is lost, so it does not energise a dead network. Zero export limits the direction and size of power flow while the grid is present."
- q: "Does zero export need a hybrid inverter?"
  a: "Not necessarily. A suitable on-grid inverter with a supported sensor can reduce output to hold export at the target. A hybrid inverter with a compatible battery adds the option to store surplus instead of reducing output."
- q: "Do zero-export systems qualify for rooftop subsidy?"
  a: "Subsidy conditions are set by the scheme guidelines and the state or DISCOM implementing them, and they change. Check the current PM Surya Ghar guidelines and your DISCOM before choosing an export mode if subsidy matters to the project."
- q: "What happens if the sensor or its communication fails?"
  a: "It depends on the equipment. Some inverters stop exporting by shutting down or limiting output, and others behave differently. The documented fail-safe behaviour should be confirmed and tested at commissioning, not assumed."
- q: "How is a zero-export installation tested?"
  a: "With the grid connected, create a condition where generation would exceed load, for example by reducing load, and observe the meter at the grid point at more than one irradiance level. Record the observations, firmware versions and final settings."
author: Nirav Dhanani
---

## What is zero export?

A **zero-export solar system** uses a measurement and control arrangement to reduce inverter output, charge a supported battery or otherwise manage generation when onsite consumption is too low to absorb it. Its aim is to keep power from being deliberately exported at the grid connection point.

> [!KEYTAKEAWAYS]
> - Zero export is a control arrangement: a sensor at the grid connection point tells the inverter or plant controller to cut output or charge a supported battery when site load is low.
> - It is an operating target, not a connection category. Brief reverse flow can still appear when a large load switches off.
> - Whether export is allowed, and on what terms, is set by the DISCOM and state regulator, not by the inverter setting.
> - A zero-export plant earns nothing from surplus, so size it from the daytime load profile, not the roof area.

“Zero export” is an operating target, not a promise that every measured moment will be exactly zero. Response speed, sensor placement, loads and the approved control scheme affect measured flow. Check the applicable utility rules and equipment documentation.

## How does export control work?

**Export control measures power flow at an agreed grid-connection point and sends that information to a compatible inverter, plant controller, or energy-management system.** The control changes generation or supported storage behaviour to limit export. Correct operation depends on the approved measurement boundary, sensor installation, phase mapping, communications, settings, and failure response.

Table: Zero-export control chain: what each part does and what to check at commissioning

| Component | Role | Commissioning check |
| --- | --- | --- |
| Grid connection point | Location where import/export is assessed | Agree on the applicable measurement boundary |
| CT or compatible meter | Measures direction and size of power flow | Confirm position, orientation, phase and communications |
| Controller or inverter setting | Adjusts inverter output or supported storage behavior | Confirm the approved mode, limits and loss-of-signal behavior |
| Loads and optional battery | Consume or store available generation | Check actual operation across representative load changes |

This is a functional map, not a terminal wiring diagram. The [complete-system wiring guide](/blog/solar-inverter-wiring-diagram/) covers the related paths, and the equipment manual governs the actual connections.

### Multiple inverters

With several inverters, a plant controller usually reads one grid-point meter and coordinates the inverters against it. If each inverter reacts independently to the same meter signal, the group can overcorrect and oscillate, so check whether the equipment supports coordinated control and whether the brands in use can be mixed under one controller.

### Control behaviour

Export control is a feedback loop. A tightly tuned loop reacts faster, and an over-aggressive one hunts around the target when load changes quickly. Manufacturers usually ship tested default settings for their supported sensors. Use those unless the commissioning engineer has a documented reason to change them.

### Zero export and a set export limit

Most equipment lets you set a permitted export value instead of zero. The mechanism is identical, and only the target changes. Use whichever figure the connection approval states, and record the setting on the commissioning sheet.

## How is zero export different from net metering?

**Net metering records approved import and export under a utility billing arrangement, while zero export controls generation or supported storage to limit intentional injection.** A zero-export setting does not approve a grid connection, replace utility metering or protection, or establish which rule applies. Check the current DISCOM and project documents.

Some projects use zero export because exporting is not permitted or not commercially attractive. Others use it as a temporary operating condition. Confirm the specific DISCOM or contract requirements rather than applying one national rule.

## Zero export, net metering and gross metering

Table: Zero export compared with net metering and gross metering

| Feature | Zero export | Net metering | Gross metering |
| --- | --- | --- | --- |
| Export to grid | None intended | Yes, credited under the utility arrangement | Yes, all generation is exported and settled separately |
| What the design depends on | Daytime site load | The tariff and billing rules | The approved tariff and contract |
| Surplus generation | Reduced or stored | Credited | Settled under the agreement |
| Extra equipment | Sensor and controller or compatible inverter | Bidirectional meter | Separate generation metering |

Which arrangement applies is decided by the DISCOM and state regulator, not by the inverter. See [gross versus net metering](/blog/gross-metering-vs-net-metering/) for the billing difference and the [net metering guide](/blog/net-metering-india-complete-guide/) for the approval route.

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

> [!WARNING] A backwards CT does the opposite of what you intend
> Orientation matters as much as position. A current transformer installed backwards reports flow in the wrong direction, which can produce the exact opposite of the intended behaviour. On a three phase connection, phase mapping must also be correct, so that each measured phase corresponds to the phase the controller believes it is reading.

None of this is visible from a settings menu. It is established by inspecting the installation against the approved single line diagram and then observing real behaviour as site load changes.

## Batteries and hybrid systems

A supported hybrid system may send surplus PV energy to a battery before curtailing generation, subject to charging limits and operating mode. Battery presence does not, by itself, guarantee zero export. Confirm model-specific functionality and approved pairing.

Use the [hybrid inverter range](/hybrid-inverter/) and [datasheet library](/download-datasheets/) to identify the intended model. Ask Qbits for the matching installation and export-control documentation through [contact](/contact-us/).

## Response time and why brief export still happens

"Zero export" describes an operating target, not an instantaneous guarantee, and understanding why prevents a false fault report at commissioning.

The control loop has to do three things in sequence: measure flow at the connection point, communicate that reading to the inverter or controller, and act on it by reducing output or diverting energy to a supported battery. Each step takes time.

So when a large load switches off suddenly, generation momentarily exceeds consumption before the loop responds, and a brief reverse flow can be measured. The system then settles back. This is normal behaviour for a control based arrangement rather than evidence of a misconfiguration.

What matters for approval is what the applicable utility rules actually require: whether they specify a permitted response time, a tolerance, or a measurement averaging period. A rule expressed as an average over an interval is satisfied by behaviour that a momentary instantaneous reading would appear to breach.

> [!TIP] Agree the acceptance basis first
> Confirm which basis your DISCOM applies before agreeing acceptance criteria, and record the observed response during commissioning so there is evidence if the question arises later.

## Common problems

Table: Common zero-export problems and what to do first

| Problem | What to do first |
| --- | --- |
| Unexpected export | First check the measurement boundary, sensor orientation, phase mapping and active control mode. Record timestamps and measurements before changing settings. |
| Unnecessary curtailment | Verify whether the controller reads the site's loads correctly and whether the configured export threshold matches the agreed arrangement. |
| Lost sensor signal | Follow the equipment's documented fail-safe behavior. Do not force an unsupported operating mode to keep generation online. |

## Why a project chooses zero export

Zero export is rarely a preference. It is usually a response to a constraint.

Where a DISCOM does not permit export for a consumer category, or where the local distribution transformer has no remaining headroom for additional solar, export control may be the condition on which a connection is approved at all. Some commercial arrangements also make export commercially unattractive, so a plant sized for self consumption avoids the administrative burden of a settlement arrangement it will barely use.

The design consequence is significant. A zero export plant earns nothing from surplus generation, so its value depends entirely on what the site consumes during generating hours. Sizing follows the daytime load profile rather than the roof area or the annual consumption total.

That makes load measurement more important here than in a net metered design, where surplus is at least credited. Oversizing a zero export plant produces curtailment, not credit.

For broader billing distinctions, see [gross versus net metering](/blog/gross-metering-vs-net-metering/).

For commercial and industrial sites, the [factory inverter guide](/blog/solar-inverter-for-factory/) and the [C&I solutions](/c-i-solution/) page cover how export limits fit into a larger plant, and the exact model's datasheet should state whether it supports export limiting.

## Advantages and limitations

**Advantages.** It can allow solar where export is not permitted or not wanted. It pushes the design toward self-consumption, which matters under time-of-use tariffs and where surplus earns nothing. It keeps injection off a feeder that cannot take it, and it can be combined with a battery that absorbs surplus.

**Limitations.** Surplus generation earns nothing and may be curtailed. The system is only as good as the sensor, its placement and its communications link. Brief reverse flow can appear during sudden load drops. A battery adds capital cost if surplus is to be stored. Savings depend on the site's load during generating hours, so do not assume a payback figure from another site.

## Best practices

1. Specify the sensor type, response behaviour and fail-safe behaviour in the purchase order.
2. Mark the sensor location and phase mapping on the [single line diagram](/glossary/single-line-diagram/).
3. Test at commissioning with generation exceeding load, and keep the record.
4. Review a day or more of logged meter data after commissioning to confirm that no reverse flow is occurring.
5. Use a plant controller where there are several inverters.
6. Check sensor condition and communications at routine maintenance.
7. Consider storage if a measured load profile shows that a large share of daytime generation would otherwise be curtailed.

## Indian context

Export rules for rooftop and captive solar are set by the state regulator and the DISCOM, and they change. Central connectivity rules (CEA) set technical requirements such as protection and power quality for connecting distributed generation, while the commercial rules on export, credit and capacity limits sit with the state commission and the utility. Where export is not permitted for a consumer category, an approved export-control arrangement is often the condition for connection. Check the current DISCOM circular or regulation for your category rather than relying on a general statement.

Related standards sit in the background. IEC 62116 is the anti-islanding test procedure for grid-connected PV inverters, and BIS has adopted it as IS 16169. It is related but distinct from export limiting. Smart meters used as grid-point sensors follow the Indian smart-meter standard series, IS 16444.

## Common mistakes

- Reversed current-transformer orientation, so import is read as export.
- Sensor placed upstream or downstream of the wrong part of the site load.
- No response or fail-safe behaviour written into the purchase order.
- Treating brief reverse flow as a fault when the DISCOM criterion is an averaged value, or the opposite, ignoring a DISCOM that does log it.
- No commissioning test of the limit.
- Mixing inverter brands under one meter signal without a coordinating controller.
- Sizing the plant from the roof or the annual bill instead of the daytime load.

## Key takeaways

Zero export is a control arrangement, not a connection category. It works only if the sensor sits at the right point, reads in the right direction on the right phase, and the inverter or controller reacts as documented. Size the plant from measured daytime load, test at commissioning, and keep the evidence.

Public datasheets do not provide a complete export control manual for every model. Request the model specific installation and control documentation, and have the configuration verified by a qualified electrical reviewer at commissioning.
