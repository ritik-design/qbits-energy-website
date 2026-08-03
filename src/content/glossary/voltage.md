---
term: "Voltage"
title: "Voltage: Definition, Units & Solar PV Applications"
description: "Voltage is the electrical potential difference. Full guide to AC, DC and solar system voltages in India."
category: "Electrical Basics"
categorySlug: "electrical-basics"
priority: "P2"
updatedDate: 2026-07-08
keywords:
  - what is voltage
  - voltage solar
  - dc voltage solar
  - ac voltage india
  - voltage explained
shortDefinition: "Voltage is the electrical potential difference between two points in a circuit, measured in volts (V). It drives the flow of current. Indian solar systems use DC voltages from 12 V to 1500 V and AC voltages of 230 V single-phase, 415 V three-phase, and higher for transmission."
quickFacts:
  industry: "Electrical Engineering / Solar PV"
  primaryUse: "Fundamental electrical quantity"
  commonUsers: "Engineers, installers, customers"
  relevantStandards: "IEC 60038, IS 12360, IEEE standards"
  relatedTechnologies: "AC, DC, solar inverter, batteries"
relatedTerms:
  - { slug: "current", term: "Current" }
  - { slug: "power-factor", term: "Power Factor" }
  - { slug: "kwh", term: "kWh" }
  - { slug: "kva", term: "kVA" }
  - { slug: "open-circuit-voltage", term: "Open Circuit Voltage" }
  - { slug: "short-circuit-current", term: "Short Circuit Current" }
  - { slug: "mppt", term: "MPPT" }
  - { slug: "string-sizing", term: "String Sizing" }
  - { slug: "high-tension", term: "HT" }
  - { slug: "low-tension", term: "LT" }
  - { slug: "ac-coupling", term: "AC Coupling" }
  - { slug: "dc-coupling", term: "DC Coupling" }
faqs:
  - q: "What is voltage in simple words?"
    a: "The electrical pressure that pushes current through a wire. Higher voltage means more push."
  - q: "What is the SI unit of voltage?"
    a: "Volt, abbreviated V. Named after Italian physicist Alessandro Volta."
  - q: "What is the difference between AC and DC voltage?"
    a: "DC voltage is constant in direction. AC voltage reverses direction periodically. Solar panels produce DC; the grid uses AC."
  - q: "What is the Indian grid voltage?"
    a: "230 V single-phase, 415 V three-phase at LT. 11 kV, 33 kV, 66 kV, 132 kV, 220 kV, 400 kV at transmission levels."
  - q: "What is solar PV string voltage?"
    a: "300 to 600 V DC for residential. 600 to 1500 V DC for utility solar."
  - q: "What is the difference between voltage and current?"
    a: "Voltage is the push. Current is the flow. Voltage causes current to move through a conductor under a load."
  - q: "Is voltage same as EMF?"
    a: "Closely related. EMF is the source voltage. Terminal voltage is what appears across load terminals, slightly lower due to internal resistance."
  - q: "What is open-circuit voltage in solar?"
    a: "The voltage of a solar panel with no current flowing. Typically 40 to 50 V for modern cells."
  - q: "What is Vmp?"
    a: "Voltage at maximum power point. Typically 32 to 40 V per module."
  - q: "What is the safe voltage for humans?"
    a: "Below 50 V AC and 120 V DC is generally considered safe under normal conditions. Solar DC strings of 600+ V are lethal."
  - q: "Does voltage cause shock?"
    a: "Voltage drives current through the body. The combination of voltage and resistance determines the current that causes shock injury."
  - q: "Why does the grid use high voltage?"
    a: "Higher voltage allows lower current for the same power, reducing I²R losses in transmission lines."
  - q: "How is voltage measured?"
    a: "Voltmeter across two points in a circuit. Modern multimeters measure DC and AC voltage with various ranges."
  - q: "What is voltage drop?"
    a: "Loss of voltage along a conductor due to resistance. Critical for solar DC cabling: target less than 2 percent for short runs, less than 3 percent for long runs."
  - q: "What is BIS standard voltage for India?"
    a: "IS 12360 specifies preferred voltages: 230 V, 415 V, 6.6 kV, 11 kV, 33 kV, 66 kV, 132 kV, 220 kV, 400 kV."
author: "Nirav Dhanani"
---

## What is voltage

Voltage is the electrical potential difference between two points in a circuit. It is the driving force that moves electric charge through a conductor under a load. The SI unit is the volt (V), defined as one joule of energy per coulomb of charge moved.

> **TL;DR**
> - Voltage is electrical potential difference, measured in volts (V), and it drives current through a circuit per Ohm's law (V = I × R).
> - Indian solar DC strings run 300 to 600 V for residential systems and 600 to 1500 V for utility-scale systems.
> - Grid-side AC voltage is 230 V single-phase or 415 V three-phase at the LT level, rising to 400 kV at transmission.
> - String voltage must stay within the inverter's MPPT window across temperature swings; cold mornings can push Voc up by roughly 5 percent.
> - CEA's grid code allows steady-state voltage variation of +5% to -10%, with tighter limits for short-term fluctuation.

In any circuit, voltage and current are related through Ohm's law (V = I × R), and power is the product of voltage and current (P = V × I).

For Indian solar, voltage matters at multiple levels:
- DC string voltage: 300 to 600 V residential, 600 to 1500 V utility
- Inverter AC output: 230 V single-phase or 415 V three-phase
- Grid connection: 415 V (LT) up to 400 kV (transmission)
- Battery DC voltage: 12 V, 24 V, 48 V, 96 V or higher, integrated with the inverter via [AC coupling](/glossary/ac-coupling/) or [DC coupling](/glossary/dc-coupling/)

## Why voltage matters

DC string sizing. The inverter's MPPT window and absolute maximum DC input define allowable string voltages.

Cable selection. Higher voltage allows smaller conductors for the same power.

Safety. DC above 50 V and AC above 50 V are shock hazards. Solar DC strings of 600+ V require proper isolation and protection.

Standards compliance. Indian grid code specifies voltage envelopes for connection.

Inverter selection. Single-phase vs three-phase choice depends on service voltage; see [Single-Phase vs 3-Phase Solar Inverter, Which Fits Your Home or Business?](/blog/single-vs-3-phase-inverter/) for how to identify your connection type and DISCOM capacity limits.

## Indian voltage levels

| Level | Nominal voltage |
|---|---|
| LT single-phase | 230 V |
| LT three-phase | 415 V |
| HT primary distribution | 11 kV, 33 kV |
| Subtransmission | 66 kV, 132 kV |
| Transmission | 220 kV, 400 kV |
| HVDC | 800 kV |

## Technical deep dive

### AC vs DC

| Property | AC | DC |
|---|---|---|
| Direction | Alternating | Constant |
| Indian grid | Yes, 50 Hz | No |
| Solar panel | No | Yes |
| Battery | No | Yes |
| Conversion | Inverter (DC to AC), rectifier (AC to DC) | n/a |

### Solar string voltage example

A 14-module string with each module Voc 41 V, Vmp 34 V:
- String Voc = 14 × 41 = 574 V
- String Vmp = 14 × 34 = 476 V

At cold winter mornings, Voc temperature derate adds ~5 percent:
- Cold Voc = 574 × 1.05 = 603 V

Must stay below inverter maximum DC input (e.g., 600 V residential, 1500 V utility). See [Inverter Voltage: String Voltage vs MPPT Voltage in Solar Inverters India 2026](/blog/inverter-voltage-string-vs-mppt-in-solar-inverters/) for cold-zone Voc spike calculations and a full string-design worked example.

### Voltage drop in DC cables

V_drop = 2 × I × R × L

For 1 percent target on a 100 m DC string at 10 A:
R_max per metre = V_drop / (2 × I × L) = (V_op × 0.01) / (2 × 10 × 100) ≈ 0.000025 Ω/m

This drives cable cross-section selection.

### CEA voltage envelope

| Parameter | Indian CEA limits |
|---|---|
| Voltage variation | +5% to -10% steady |
| Voltage fluctuation | ±5% short-term |
| Sag tolerance | 0.15 pu for 150 ms (with FRT) |
| Swell tolerance | 1.2 pu for 100 ms |

## Real-world applications

[Solar DC string design](https://heavendesigns.in/solar-rooftop-detailed-engineering-design/).

Inverter selection and sizing.

Cable sizing for voltage drop.

Battery bank voltage selection.

Grid connection at appropriate voltage class.

Transformer specification.

## Common voltage problems

String voltage exceeds inverter max DC input on cold mornings, catastrophic failure.

Voltage drop in long DC cables reducing yield.

Grid voltage outside CEA envelope causing inverter trips.

Battery low-voltage cutoff triggered by excessive load.

AC voltage imbalance in three-phase systems causing inverter alarms.

## Best practices

Size strings within MPPT window at all expected temperatures.

Design DC cables for less than 2 percent drop at full current.

Use class 0.5S meters for utility billing voltage measurement.

Specify voltage tolerance in inverter purchase orders.

Earth all metallic frames for shock safety.

## Indian market context

Indian residential service voltage is 230 V single-phase or 415 V three-phase.

CEA Grid Code specifies voltage envelopes for distribution and transmission.

IS 12360 sets preferred voltage levels for Indian electrical systems.

State DISCOM tariffs increasingly include voltage-based slabs for HT and EHT customers.

## Standards and certifications

| Standard | Scope |
|---|---|
| IS 12360 | Preferred voltage levels |
| IEC 60038 | Standard voltages |
| CEA Grid Code | Voltage envelopes |
| IS 17387 | Inverter grid interconnection |

## Key takeaways

Voltage is the electrical potential that drives current flow. Indian solar systems span 12 V battery up to 1500 V DC strings and 415 V AC three-phase. String voltage must stay within inverter MPPT window across temperatures. Voltage drop in cables must be controlled. Indian grid voltage envelopes set by CEA define acceptable operation.

## Need voltage-aware solar design?

QBits Energy designs solar systems with proper voltage matching, cable sizing and grid connection across Indian utility, C&I and residential applications.

## Further reading

For how Voltage plays out in real projects, these guides go deeper:

- [Solar String Sizing Software: Complete 2026 Guide](/blog/solar-string-sizing-software/)
- [Solar String Sizing & Overcurrent Protection](/blog/solar-string-sizing-ocp-india/)
- [India-Grid-Tuned Solar Inverters, Explained](/blog/india-grid-tuned-inverters/)
- [String Voltage vs MPPT Voltage: Inverter Guide](/blog/inverter-voltage-string-vs-mppt-in-solar-inverters/)

## Sources

- IS 12360, Voltage bands for electrical installations.
- IEC 60038, Standard voltages.
- CEA Technical Standards for Connectivity to the Grid 2019.
- IS 17387, Inverter grid interconnection.
- IEEE Standard Dictionary of Electrical and Electronics Terms.
- NREL Solar Cell Physics.
- ITRPV Roadmap.
- IEA Renewables 2024.
