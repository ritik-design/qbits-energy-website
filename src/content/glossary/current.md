---
term: "Current"
title: "Current: Definition, Units & Solar PV Applications"
description: "Current is the flow of electric charge. Full guide to AC, DC and solar system currents in India."
category: "Electrical Basics"
categorySlug: "electrical-basics"
priority: "P2"
updatedDate: 2026-07-08
keywords:
  - what is current
  - solar current
  - dc current solar
  - ac current india
  - amperes
shortDefinition: "Current is the rate of flow of electric charge through a conductor, measured in amperes (A). It is driven by voltage and limited by resistance. Solar PV strings typically carry 10 to 20 A DC, with inverter output currents ranging from a few amperes to thousands of amperes."
quickFacts:
  industry: "Electrical Engineering / Solar PV"
  primaryUse: "Fundamental electrical quantity"
  commonUsers: "Engineers, installers, customers"
  relevantStandards: "IEC 60364, IS 732, IEEE standards"
  relatedTechnologies: "AC, DC, solar inverter, cabling, protection"
relatedTerms:
  - { slug: "voltage", term: "Voltage" }
  - { slug: "power-factor", term: "Power Factor" }
  - { slug: "kwh", term: "kWh" }
  - { slug: "kva", term: "kVA" }
  - { slug: "short-circuit-current", term: "Short Circuit Current" }
  - { slug: "fuse", term: "Fuse" }
  - { slug: "mcb", term: "MCB" }
  - { slug: "rccb", term: "RCCB" }
  - { slug: "dc-cable", term: "DC Cable" }
  - { slug: "ac-cable", term: "AC Cable" }
  - { slug: "current-transformer", term: "Current Transformer" }
  - { slug: "fault-current", term: "Fault Current" }
  - { slug: "bms", term: "BMS" }
  - { slug: "spd", term: "SPD" }
faqs:
  - q: "What is current in simple words?"
    a: "The flow of electric charge through a wire. Measured in amperes (A). One amp is one coulomb of charge per second."
  - q: "What is the SI unit of current?"
    a: "Ampere, abbreviated A. Named after French physicist André-Marie Ampère."
  - q: "What is the difference between AC and DC current?"
    a: "DC current flows in one direction. AC current alternates direction periodically. Solar panels produce DC; the grid uses AC at 50 Hz in India."
  - q: "What is typical solar PV string current?"
    a: "10 to 18 A DC for modern mono PERC and TOPCon strings, depending on module current rating."
  - q: "What is short-circuit current (Isc)?"
    a: "The current a solar panel produces when its terminals are short-circuited. Typically 11 to 18 A for modern modules. Used for sizing inverter inputs and protection."
  - q: "What is Imp?"
    a: "Current at maximum power point. Slightly lower than Isc, typically 10 to 17 A per module."
  - q: "How is current measured?"
    a: "Ammeter in series with the circuit, or clamp meter measuring magnetic field. Modern multimeters measure DC and AC current."
  - q: "What is fault current?"
    a: "The current that flows during a short circuit, typically many times the rated current. Determines breaker and fuse interrupting rating."
  - q: "What is the relationship between current and cable size?"
    a: "Higher current requires larger cable cross-section to limit voltage drop and heating. Indian wiring code IS 732 specifies size-to-current tables."
  - q: "Can current cause fire?"
    a: "Yes. Overcurrent causes excessive heating in cables and insulation. Fuses and breakers protect against this."
  - q: "Is current the same throughout a series circuit?"
    a: "Yes. In a series circuit (like a solar string), the same current flows through every element."
  - q: "What is parallel current?"
    a: "In parallel circuits, total current is the sum of branch currents. Each branch sees only its own current."
  - q: "What is current rating?"
    a: "The maximum current a component can carry safely under defined conditions. Cable rating, breaker rating, inverter input current rating."
  - q: "What is residual current?"
    a: "Current that returns through an unintended path, often through earth. RCCB detects this and trips."
  - q: "What is the safe current for humans?"
    a: "Below 10 mA causes mild shock. Above 30 mA can cause cardiac arrest. RCCB trip threshold is typically 30 mA for personal protection."
author: "Nirav Dhanani"
---

## What is current

Current is the rate of flow of electric charge through a conductor, measured in amperes (A). One ampere equals one coulomb of charge per second. Current is driven by [voltage](/glossary/voltage/) and limited by the resistance of the circuit, per Ohm's law: I = V / R.

> **TL;DR**
> - Current is the flow of electric charge, measured in amperes (A), and driven by voltage per Ohm's law (I = V / R).
> - Indian solar PV strings typically carry 10 to 18 A DC; three-phase inverter AC output can reach 15 to 250 A per phase.
> - Cable cross-section must match current per IS 732 ampacity tables to avoid overheating and voltage drop.
> - Fuses and breakers must be rated above the maximum expected fault current, and RCCBs trip at around 30 mA to protect against residual current.
> - Combiner box fuses are typically sized 1.25 to 1.5 times a string's short-circuit current (Isc).

In any solar system, current flows through cables, connectors, switches, fuses and ultimately through the load. The current rating of each component must accommodate the maximum expected current under normal operation and short-circuit conditions.

## Why current matters

Cable sizing. Current determines minimum cable cross-section. Higher current requires larger conductors.

Protection. [Fuses](/glossary/fuse/) and breakers are rated by current. Their interrupting capacity must exceed the maximum fault current.

Inverter sizing. Maximum DC input current per [MPPT](/glossary/mppt/) limits string parallel combinations.

Power calculation. P = V × I for DC. P = V × I × cos(φ), where cos(φ) is the [power factor](/glossary/power-factor/), for AC.

Safety. Shock injury severity depends on current through the body.

Heating. I²R losses cause cables and connectors to heat up. Excessive current causes fires.

## Indian solar current ranges

| Application | Typical current |
|---|---|
| Residential PV string | 11 to 14 A DC |
| Utility PV string | 14 to 18 A DC |
| Single-phase inverter AC output | 5 to 50 A AC |
| Three-phase inverter AC output | 15 to 250 A AC per phase |
| Battery charge / discharge | 10 to 200 A DC |
| Transformer LT side | 100 to 2000 A AC |

Battery current draw depends heavily on capacity and discharge rate; getting this sizing right for hybrid systems is covered in SurgePV's [battery and energy storage sizing](https://surgepv.com/hub/energy-storage/battery-sizing/) guidance. The choice between single-phase and three-phase inverter architecture also determines how AC output current is split across phases, as explained in our [single-phase vs 3-phase solar inverter guide](/blog/single-vs-3-phase-inverter/).

## Technical deep dive

### Solar module current

Isc and Imp depend on cell technology and module size:

| Module wattage | Approximate Isc | Approximate Imp |
|---|---|---|
| 400 W mono | 13.5 A | 12.8 A |
| 540 W half-cut bifacial | 14.5 A | 13.7 A |
| 600 W TOPCon | 16.2 A | 15.4 A |

### Current in series and parallel

| Configuration | Current behaviour |
|---|---|
| Series (string) | Same current through all modules |
| Parallel (combiner box) | Currents add at the parallel point |

### Cable ampacity (IS 732)

| Cable size (mm²) | Approximate ampacity in conduit, 30°C |
|---|---|
| 1.5 | 15 to 18 A |
| 2.5 | 21 to 25 A |
| 4 | 28 to 33 A |
| 6 | 36 to 42 A |
| 10 | 50 to 60 A |
| 16 | 65 to 80 A |
| 25 | 89 to 105 A |
| 35 | 110 to 130 A |

Derate for temperature, grouping and installation method.

### Fault current

Short-circuit fault currents in solar systems:
- DC fault from PV: limited to Isc (no amplification)
- AC fault from grid: typically 5 to 25 kA depending on grid impedance
- Battery fault: very high, several kA, limited by the [BMS](/glossary/bms/)

## Real-world applications

[DC cable](/glossary/dc-cable/) sizing in solar arrays.

[AC cable](/glossary/ac-cable/) sizing from inverter to AC panel.

Fuse selection for DCDB combiner boxes.

Breaker selection at distribution boards.

Current transformer specification for metering.

Inverter MPPT current limit selection.

## Common current problems

DC cable undersized, leading to voltage drop and heating.

Inverter MPPT current limit exceeded by parallel strings.

Fuse rating wrong for available fault current.

[RCCB](/glossary/rccb/) nuisance tripping due to capacitive earth currents in long DC cables.

Connector heating due to loose terminations.

## Best practices

Size cables for normal operation plus derate for installation.

Verify fuse and breaker ratings against expected fault current.

Use Class II [SPDs](/glossary/spd/) on DC and AC sides.

Specify combiner box fuse ratings 1.25 to 1.5 × Isc per string, as detailed in our [solar string sizing and overcurrent protection guide](/blog/solar-string-sizing-ocp-india/).

Annual thermography to catch heating issues.

Match MPPT current limit to total string parallel current.

## Indian market context

CEA Grid Code specifies fault current envelopes for grid connection.

IS 732 (Wiring Code) sets cable ampacity tables. These ratings need to be reflected accurately on stamped electrical and CEIG drawings before a project is cleared for connection.

IS 14772 and IS 60898 cover residential breakers.

IS 13947 covers industrial breakers.

[ALMM-listed](/glossary/almm-list/) inverters specify maximum DC input current per MPPT.

## Standards and certifications

| Standard | Scope |
|---|---|
| IS 732 | Wiring code, ampacity |
| IEC 60364 | Electrical installations |
| IS 14772 | Residential breakers |
| IS 13947 | Industrial breakers |
| IEC 60269 | Low-voltage fuses |
| CEA Grid Code | Fault current at PCC |

## Key takeaways

Current is the rate of flow of electric charge, measured in amperes. Indian solar PV strings carry 10 to 18 A DC. Inverter AC output currents range from a few amperes to thousands depending on capacity. Cable sizing, fuse selection, breaker specification and connection torque all depend on accurate current ratings. Overcurrent causes heating, voltage drop and fire risk.

## Need current-aware solar design?

QBits Energy designs solar systems with proper current ratings for cables, protection and inverters across Indian utility, C&I and residential applications.

## Further reading

For how Current plays out in real projects, these guides go deeper:

- [THD in Solar Inverters, Why It Matters](/blog/thd-solar-inverter/)
- [How to Size a Battery for a Hybrid Solar Inverter](/blog/battery-sizing-hybrid-solar/)
- [Transformerless vs Transformer Solar Inverters](/blog/transformerless-vs-transformer-inverter/)
- [PM Surya Ghar 2.0: What the Proposed Battery Storage Update Means for You](/blog/pm-surya-ghar-battery-storage-update/)

## Sources

- IS 732, Indian Code of Practice for Electrical Wiring.
- IEC 60364 series, Electrical installations of buildings.
- IS 14772, IS 60898, residential breaker standards.
- IS 13947, IEC 60947, industrial breaker standards.
- IEC 60269, Low-voltage fuses.
- CEA Technical Standards 2019.
- IS 17387, Inverter grid interconnection.
- Manufacturer datasheets for major solar modules and inverters.
- IEEE Standard Dictionary of Electrical and Electronics Terms.
