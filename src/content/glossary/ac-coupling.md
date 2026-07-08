---
term: "AC Coupling"
title: "AC Coupling: Definition, How It Works & Solar Storage Applications"
description: "AC coupling connects battery storage to solar through the AC bus. Full guide to topology, efficiency and retrofit applications."
category: "System Layout"
categorySlug: "system-layout"
priority: "P1"
updatedDate: 2026-07-08
keywords:
  - what is ac coupling
  - ac coupled solar battery
  - ac coupling vs dc coupling
  - ac battery retrofit
  - ac coupled storage
shortDefinition: "AC coupling is a solar-plus-storage architecture where the PV inverter and the battery inverter are separate units connected through the AC bus. It is the standard topology for retrofitting battery storage onto existing solar PV systems."
quickFacts:
  industry: "Solar + Storage Architecture"
  primaryUse: "Battery retrofit on existing PV systems"
  commonUsers: "Retrofit customers, large C&I, utility BESS"
  relevantStandards: "IEC 62109, IEC 61727, CEA Grid Code, IS 17387"
  relatedTechnologies: "PV inverter, battery inverter, AC bus, smart EMS"
relatedTerms:
  - { slug: "dc-coupling", term: "DC Coupling" }
  - { slug: "hybrid-inverter", term: "Hybrid Inverter" }
  - { slug: "on-grid-inverter", term: "On Grid Inverter" }
  - { slug: "off-grid-inverter", term: "Off Grid Inverter" }
  - { slug: "battery-inverter", term: "Battery Inverter" }
  - { slug: "round-trip-efficiency", term: "Round Trip Efficiency" }
  - { slug: "lfp-battery", term: "LFP Battery" }
  - { slug: "bms", term: "BMS" }
  - { slug: "ems", term: "Energy Management System" }
  - { slug: "anti-islanding", term: "Anti-Islanding" }
  - { slug: "self-consumption", term: "Self Consumption" }
  - { slug: "retrofit", term: "Retrofit" }
  - { slug: "micro-inverter", term: "Micro Inverter" }
  - { slug: "bess", term: "BESS" }
faqs:
  - q: "What is AC coupling in simple words?"
    a: "Solar panels and battery each have their own inverter, and they meet on the AC side. A common setup when you add a battery to an existing solar system."
  - q: "AC coupling vs DC coupling, which is better?"
    a: "DC coupling is more efficient and cheaper for new installations. AC coupling is easier for retrofits and offers more sizing flexibility."
  - q: "Can I retrofit a battery to my existing solar?"
    a: "Yes, through AC coupling. A separate battery inverter and battery pack are added downstream of the existing PV inverter."
  - q: "What is the round-trip efficiency of AC coupling?"
    a: "84 to 89 percent solar-to-battery-to-load. About 5 percent lower than DC coupling because of an extra AC-DC conversion."
  - q: "Is AC coupling used in utility BESS?"
    a: "Yes. Most utility BESS plants are AC coupled because battery and PV are sized independently and often built in phases."
  - q: "Does AC coupling work during grid outage?"
    a: "Yes if the battery inverter is grid-forming. Some battery inverters can re-form an AC bus to power loads even when the grid is down."
  - q: "What is grid-forming vs grid-following?"
    a: "Grid-following follows existing voltage and frequency. Grid-forming creates voltage and frequency on its own. AC-coupled backup requires the battery inverter to be grid-forming."
  - q: "Can AC coupling export to the grid?"
    a: "Yes. The PV inverter exports normally. The battery inverter can also export or import based on EMS strategy."
  - q: "What is the typical capex of AC coupling vs DC coupling?"
    a: "AC coupling is 15 to 30 percent more expensive per kWh due to two inverters and the AC-DC conversion overhead."
  - q: "Can AC coupling charge from grid?"
    a: "Yes. The battery inverter can charge the battery from grid or PV through the AC bus."
  - q: "Is AC coupling better for large systems?"
    a: "Often yes. Scaling PV and battery independently is easier with AC coupling for plants above 100 kW."
  - q: "What is frequency-shift battery control?"
    a: "A technique where the battery inverter, when grid-forming, slightly shifts AC frequency to signal the PV inverter to reduce output when the battery is full."
  - q: "Are Tesla Powerwall and Enphase IQ Battery AC coupled?"
    a: "Tesla Powerwall is AC coupled. Enphase IQ Battery is AC coupled by design, integrating with microinverter systems."
  - q: "Can I AC couple multiple battery inverters?"
    a: "Yes, with appropriate EMS coordination. Common in large C&I and utility installations."
  - q: "Does AC coupling require special inverters?"
    a: "Battery inverter must be capable of bidirectional operation and ideally grid-forming for backup. Standard PV inverters work for the PV side."
author: "Nirav Dhanani"
---

## What is AC coupling

AC coupling is a solar-plus-storage system architecture in which the PV inverter and the battery inverter are physically separate units, each independently connected to the AC bus. The PV inverter converts DC from panels to AC. The battery inverter converts AC to DC for battery charging and DC to AC for battery discharging. The AC bus is the common meeting point.

> **TL;DR**
> - AC coupling uses two separate inverters joined at the AC bus, instead of sharing one internal DC bus inside a single hybrid inverter.
> - Round-trip efficiency runs 84 to 89 percent, about 5 percent lower than DC coupling because of an extra AC-DC conversion stage.
> - It is the standard choice for retrofitting battery storage onto existing PV systems and for utility-scale BESS where PV and battery are sized independently.
> - Backup power during a grid outage requires the battery inverter to be grid-forming, not just grid-following.
> - AC coupling costs 15 to 30 percent more capex per kWh than DC coupling but is the only option compatible with microinverter-based PV arrays.

This architecture contrasts with [DC coupling](/glossary/dc-coupling/), where PV and battery share a single internal DC bus inside a [hybrid inverter](/glossary/hybrid-inverter/). AC coupling is the standard topology for retrofitting battery storage onto existing PV systems, for utility-scale [BESS](/glossary/bess/) where PV and battery are sized independently, and for installations with [microinverters](/glossary/micro-inverter/) or [DC optimisers](/glossary/dc-optimiser/) on the PV side.

In Indian solar, AC coupling appears in residential battery retrofits (adding Tesla Powerwall, Enphase IQ Battery or local battery inverters to existing PV) and in C&I and utility-scale BESS where battery and PV are independent assets.

## AC coupling explained simply

Picture two separate boxes on the wall. One handles the solar panels and turns DC into AC. The other handles the battery and converts back and forth between AC and DC. The wires between them carry AC. That is AC coupling.

The advantage is flexibility: you can add a battery later without ripping out the PV inverter, and you can scale battery and PV independently. The downside is one extra AC-to-DC conversion, which costs about 5 percent in [round-trip efficiency](/glossary/round-trip-efficiency/).

## Why AC coupling matters

Retrofit. Adding storage to existing PV systems without replacing the PV inverter.

Independent scaling. PV and battery sized for their own optimisation.

Multi-phase deployment. Battery added now, more PV later, more battery still later.

Microinverter compatibility. Microinverter systems can only be AC coupled, since each panel already has its own inverter.

Utility BESS. AC coupling at the plant level allows mixing PV inverter brands and battery inverter brands.

Future-proof. Replacing one component without touching the other.

## How AC coupling works

In a typical residential AC-coupled system:

1. PV array feeds a grid-tie PV inverter.
2. PV inverter exports AC to the AC bus.
3. AC bus connects to home loads, grid and the battery inverter.
4. Battery inverter monitors AC bus voltage and frequency, plus a CT or smart meter measuring net power flow.
5. When PV output exceeds load, battery inverter converts AC to DC and charges battery.
6. When load exceeds PV, battery inverter discharges, converting DC back to AC.
7. When grid is lost, [grid-forming](/glossary/grid-forming-inverter/) battery inverter creates an island AC bus and the PV inverter continues to feed it.

Frequency-shift battery control: when the battery is full and PV is still generating, the battery inverter slightly shifts AC frequency, signalling the PV inverter to reduce output. This avoids overcharging.

## Technical deep dive

### Energy paths

| Path | Conversions | Approximate efficiency |
|---|---|---|
| PV to load (no battery) | DC to AC | 97 to 98% |
| PV to grid (no battery) | DC to AC | 97 to 98% |
| PV to battery to load | DC to AC to DC to AC | 84 to 89% |
| Grid to battery to load | AC to DC to AC | 87 to 91% |

### Compared to DC coupling

| Aspect | AC coupling | DC coupling |
|---|---|---|
| Number of inverters | 2 | 1 (hybrid) |
| Round-trip efficiency | 84 to 89% | 91 to 94% |
| Capex | Higher | Lower |
| Retrofit ease | Easy | Hard |
| Independent scaling | Easy | Limited |
| Microinverter compatible | Yes | No |
| Best fit | Retrofits, utility BESS | New residential |

### Grid-forming requirement for backup

To provide AC backup during grid outage, the battery inverter must be grid-forming. Standard grid-following inverters require external voltage and frequency, which is unavailable during an outage. Grid-forming inverters self-create voltage and frequency.

### Frequency-shift PV throttling

Method used in islanded AC-coupled systems:

1. Battery inverter monitors battery SOC.
2. As SOC approaches 100 percent, battery inverter shifts AC frequency upward, typically from 50 Hz to 51 Hz.
3. PV inverters detect rising frequency and reduce output proportionally.
4. PV output matches load and battery losses.

### Sizing

PV inverter and battery inverter sizes can differ. A common residential [battery sizing](https://surgepv.com/hub/energy-storage/battery-sizing/) pattern: 5 kW PV inverter plus 5 kW / 10 kWh battery inverter.

## Real-world applications

Residential battery retrofit on existing PV.

Enphase microinverter systems with AC battery storage.

Tesla Powerwall retrofit installations.

Utility-scale solar plus storage hybrid plants.

C&I plants adding storage in later phases.

Multi-inverter campus solar with central battery.

## Advantages

Easy retrofit on existing PV.

PV and battery sized independently.

Inverter brand flexibility on both sides.

Phased deployment.

Microinverter compatibility.

Service replacement of one inverter without affecting the other.

## Limitations

Lower round-trip efficiency (5 percent gap vs DC coupling).

Higher capex.

More physical equipment, more wall space.

[Two warranties to track](/blog/solar-inverter-warranty/), one for each inverter.

Frequency-shift PV throttling requires inverter compatibility.

## Common problems

Frequency-shift control not working between PV and battery inverter brands.

Battery inverter failing to grid-form during outage.

CT polarity reversed at battery inverter sense input.

EMS strategy fighting between PV inverter export limit and battery inverter charging.

Grid-tied PV inverter tripping due to [anti-islanding protection](/blog/anti-islanding-protection-solar-inverters/) reacting to frequency shifts during islanded operation.

Compatibility issues between PV inverter and battery inverter brands.

## Best practices

Choose grid-forming battery inverter for backup applications.

Validate frequency-shift compatibility between PV and battery inverter brands.

Specify CT placement carefully on battery inverter sense circuit.

Coordinate EMS to avoid charge/discharge oscillation.

Plan for AC bus disconnect arrangement during maintenance.

Document the [single-line diagram](/glossary/single-line-diagram/) showing both inverters.

## Comparison: AC vs DC coupling

| Feature | AC coupling | DC coupling |
|---|---|---|
| Architecture | Two inverters | Hybrid inverter |
| Round-trip efficiency | 84 to 89% | 91 to 94% |
| Capex | Higher | Lower |
| Retrofit | Easy | Difficult |
| Independent sizing | Yes | Limited |
| Microinverter | Compatible | Incompatible |
| Backup | Requires grid-forming | Built-in |

## Indian market context

AC coupling is the standard architecture for retrofitting Indian residential solar with batteries, since most legacy systems use string PV inverters from the on-grid era.

Tesla Powerwall (where available) and Enphase IQ Battery are AC coupled by design.

Major battery inverters in the Indian AC-coupling market include Goodwe Storage, Sungrow Storage, Victron MultiPlus, Schneider Conext and SMA Sunny Island.

C&I and utility AC-coupled installations are growing as battery storage joins existing solar plants.

[PM Surya Ghar](/glossary/pm-surya-ghar/) does not subsidise batteries, but supports AC-coupled retrofits where the original PV system was funded under the scheme.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 62109 | Inverter safety |
| IEC 61727 | Utility interface |
| IS 17387 | Indian grid interconnection |
| CEA Grid Code 2019 | Connectivity rules |
| IEC 62619 | Battery safety |
| UL 1741 SB | Smart inverter standard |

## Common mistakes

Choosing a non-grid-forming battery inverter for backup applications.

Mixing brands without checking frequency-shift compatibility.

Underestimating round-trip efficiency loss in financial modelling.

Skipping CT polarity verification.

Forgetting that two inverters mean two warranties and two [firmware update channels](/blog/solar-inverter-firmware-update-india/).

Not planning AC bus disconnect for maintenance.

## Key takeaways

AC coupling is the right architecture for retrofitting battery storage onto existing PV systems, for microinverter installations and for utility-scale BESS where independent sizing matters. The trade-off against DC coupling is 5 percent round-trip efficiency and higher capex, balanced by flexibility and easier scaling. Grid-forming battery inverters enable backup during grid outages.

## Need AC-coupled storage retrofit?

QBits Energy designs and installs AC-coupled battery retrofits for existing rooftop solar systems across India.

## Sources

- IEC 62109-1, -2, Safety of power converters for use in photovoltaic power systems.
- IEC 61727:2004, Photovoltaic systems: Characteristics of the utility interface.
- IS 17387, Indian Standard for utility-interconnected PV inverters.
- IEC 62619:2017, Safety of secondary lithium cells.
- UL 1741 SB:2021, Inverters, Converters, Controllers and Interconnection System Equipment.
- Manufacturer documentation from Tesla Powerwall, Enphase IQ Battery, Goodwe, Sungrow, Victron and SMA.
- NREL Technical Report TP-7A40-79236, Behind-the-Meter PV-plus-Storage Analysis.
- IEA Energy Storage Outlook 2024.
- BloombergNEF Energy Storage Outlook 2024.
