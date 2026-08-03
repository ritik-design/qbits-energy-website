---
term: "Zero Export"
title: "Zero Export: Definition, Meaning, How It Works, Benefits & Applications"
description: "Zero export is an inverter control mode that prevents solar power from flowing back to the grid. Full guide to working, sensors and Indian C&I applications."
category: "Metering and Grid"
categorySlug: "metering-grid"
priority: "P1"
updatedDate: 2026-07-18
keywords:
  - what is zero export
  - zero export inverter
  - export limit india
  - anti reverse power
  - solar without net metering
shortDefinition: "Zero export, also called anti-reverse power, is a solar inverter control mode that monitors site consumption and dynamically caps inverter output so that no power flows back to the utility grid. Used where net metering is unavailable or where DISCOM rules prohibit export."
quickFacts:
  industry: "Distributed Solar / Grid Compliance"
  primaryUse: "Preventing reverse power flow from PV plant to grid"
  commonUsers: "C&I customers without net metering, HT consumers, captive plants"
  relevantStandards: "CEA Grid Code, IEC 62116, state SERC export rules"
  relatedTechnologies: "Smart meter, current sensor, hybrid inverter, EMS, plant controller"
relatedTerms:
  - { slug: "net-metering", term: "Net Metering" }
  - { slug: "gross-metering", term: "Gross Metering" }
  - { slug: "on-grid-inverter", term: "On Grid Inverter" }
  - { slug: "hybrid-inverter", term: "Hybrid Inverter" }
  - { slug: "smart-meter", term: "Smart Meter" }
  - { slug: "anti-islanding", term: "Anti-Islanding" }
  - { slug: "discom", term: "DISCOM" }
  - { slug: "battery-soc", term: "Battery SOC" }
  - { slug: "bess", term: "BESS" }
faqs:
  - q: "What is zero export in simple words?"
    a: "A control feature that keeps solar power from flowing back to the utility grid. The inverter watches the meter and throttles down whenever site consumption would otherwise be exceeded."
  - q: "Why would I use zero export?"
    a: "Where net metering is not available, where the DISCOM does not permit export above a sanctioned cap, or for industrial customers under HT contracts that ban back-feed."
  - q: "Does zero export waste solar power?"
    a: "Yes, when generation exceeds load, the inverter throttles. That energy is lost unless a battery is available to absorb it."
  - q: "How fast does zero export react?"
    a: "Modern systems clamp within 100 to 500 milliseconds of detecting export. Without fast response, the meter records brief reverse flow."
  - q: "What sensor is needed for zero export?"
    a: "A current transformer or smart meter at the grid connection point, feeding readings to the inverter via Modbus or RS485 every 100 to 500 ms."
  - q: "Can zero export work with multiple inverters?"
    a: "Yes, through a plant controller that aggregates inverter outputs and balances them against the meter reading."
  - q: "Is zero export same as anti-islanding?"
    a: "No. Anti-islanding disconnects on grid loss. Zero export limits power flow direction while the grid is connected."
  - q: "Do I lose all surplus solar with zero export?"
    a: "Only the surplus during low-load periods. With battery storage, the surplus can be stored instead of curtailed."
  - q: "Can zero export be partial?"
    a: "Yes. A configurable export limit allows, for example, 10 percent of inverter capacity to be exported while clamping anything above that."
  - q: "What is the cost of adding zero export to a system?"
    a: "Smart meter or CT plus controller: ₹15,000 to ₹40,000 for residential, ₹40,000 to ₹1.5 lakh for C&I."
  - q: "Is zero export required in India?"
    a: "Required by some DISCOMs for systems above the sanctioned export cap, and for HT customers in some states."
  - q: "Does zero export need a hybrid inverter?"
    a: "No, on grid inverters can implement zero export with a current sensor feed. Hybrid inverters add the option to store surplus rather than curtail."
  - q: "What is the typical loss from zero export curtailment?"
    a: "5 to 25 percent of generation, depending on how often generation exceeds load. Daytime-heavy load sites lose less, evening-heavy load sites lose more."
  - q: "How is zero export tested?"
    a: "Commission test: increase PV output above load with grid connected, verify meter shows no reverse flow. Repeat at multiple irradiance levels."
  - q: "Can zero export fail?"
    a: "Yes, if the sensor disconnects or the inverter loses communication with the EMS. Modern systems shut the inverter down as a safe fallback."
author: "Nirav Dhanani"
---

## What is zero export

> **TL;DR**
> - Zero export throttles inverter output so no power flows back to the grid, matching generation to site consumption in real time.
> - It is the standard fallback for Indian C&I and HT customers where net metering is unavailable or capped.
> - A CT or smart meter feeds the inverter every 100 to 500 ms; response time requirements tighten from residential to utility scale.
> - Curtailment typically wastes 5 to 25 percent of potential generation unless battery storage absorbs the surplus.
> - Payback is usually 6 to 9 years, longer than the 4 to 6 years typical of net-metered systems.
> - Correct CT placement and polarity, plus a commissioning test, are the most common points of failure.

Zero export is a solar inverter control mode that prevents any net power flow from the PV plant back into the utility grid. The inverter continuously monitors current at the grid connection point and modulates its own output so that site consumption equals or exceeds PV generation at every instant. Surplus solar is either curtailed in real time or stored in a battery.

The mode is widely used where net metering is not available, where the [DISCOM](/glossary/discom/) does not allow export, or where the customer wants to comply with sanctioned demand limits. In Indian C&I solar, zero export is the standard fallback when full net metering or gross metering is not on offer; see [Net Metering in India, Complete 2026 Guide](/blog/net-metering-india-complete-guide/) for when net metering itself is actually available.

## Zero export explained simply

Picture a tap and a basin. Solar power is water from the tap, site consumption is the size of the basin. If the tap is bigger than the basin, water overflows. Zero export is a smart valve on the tap that turns it down whenever the basin is about to overflow.

The cost is the water you would have used if you had a bigger basin. With a battery, the overflow goes into a storage tank instead of down the drain.

## Why zero export matters

DISCOM compliance. Many Indian DISCOMs cap export at sanctioned load or zero for HT and large customers.

C&I market access. Where net metering is unavailable above a threshold, zero export lets the customer still install solar without losing the DISCOM connection.

Self-consumption focus. Forces the system to match production to consumption, which is what time-of-use tariffs and demand charges actually reward.

Grid stability. In areas where local distribution cannot absorb reverse flow, zero export protects the feeder.

Lower DISCOM negotiation overhead. Zero export systems are often approved faster than full-export net metering.

## How zero export works

1. A CT or [smart meter](/glossary/smart-meter/) at the grid connection point measures direction and magnitude of current.
2. The reading is fed to the inverter or plant controller through Modbus or RS485.
3. The controller compares site consumption to PV generation every 100 to 500 ms.
4. When generation exceeds consumption, the controller commands the inverter to reduce output.
5. With battery in the system, surplus is diverted to charging instead of curtailment.
6. The control loop runs continuously to track changing load.

## Technical deep dive

### Sensor placement

The CT must be at the point of common coupling with the grid, downstream of all internal loads. Errors here cause incorrect baseline and either over-curtailment or unintended export.

### Response time

| Application | Required response time |
|---|---|
| Residential | 1 to 2 seconds |
| C&I | 200 to 500 ms |
| HT | 100 to 200 ms |
| Utility | 100 ms or better |

### Control loop

A typical zero-export controller uses PI control. Faster response improves compliance but risks oscillation. Inverter manufacturers ship pre-tuned profiles for standard sensors.

### Multi-inverter coordination

With multiple inverters, a plant controller orchestrates curtailment. Without a plant controller, each inverter sees the same meter signal and may over-correct, causing chattering.

## Real-world applications

C&I rooftop solar where net metering cap is exceeded, commonly installed via a [commercial solar EPC](https://heavengreenenergy.com/commercial-solar/).

HT customers in states that prohibit export, frequently under an [industrial solar installation](https://heavengreenenergy.com/industrial-solar/) contract.

Captive plants supplying a fixed share of internal load.

Hybrid systems where the priority is self-consumption and battery charging.

Diesel hybrid sites where reverse flow to a genset is unsafe.

## Advantages

Enables solar installation where net metering is unavailable, using either an [on grid inverter](/glossary/on-grid-inverter/) with a sensor feed or a [hybrid inverter](/glossary/hybrid-inverter/) with battery absorption.

Forces self-consumption optimisation, often improving economics under time-of-use tariffs.

Avoids DISCOM disputes about excess export.

Compatible with hybrid storage for surplus absorption.

Compliant with sanctioned load limits.

## Limitations

Curtailment loss. 5 to 25 percent of potential generation is wasted unless storage is added.

Longer payback than net metering. Typical 6 to 9 years against 4 to 6 for net-metered systems.

Requires accurate sensor and reliable communication.

Response latency causes brief reverse flow events.

Battery storage adds capex if surplus absorption is desired.

## Common problems

CT polarity reversed. The controller reads import as export and shuts down the inverter.

Communication dropout between meter and inverter. Some inverters fail safe to zero output, others fail to full output. Test both modes.

Loop oscillation when load is highly variable. Reduce control gain.

Over-curtailment when sensor is upstream of an internal load. Place the sensor at the grid connection point.

Brief reverse flow during sudden load drops. Acceptable in most DISCOM rules but logged in some.

Sensor drift over time. Annual calibration check.

## Best practices

Choose a smart meter or class 0.5 CT for the grid-side sensor.

Specify response time in the inverter purchase order.

Test zero export at commissioning with PV output exceeding load.

Run a 24-hour monitoring trace to verify no reverse flow.

Add [battery storage](/glossary/bess/) if surplus generation exceeds 15 percent of total generation.

Use a plant controller for sites with three or more inverters.

Annual calibration of CTs.

Document the sensor location and wiring on the single-line diagram.

## Comparison: zero export vs net vs gross

| Feature | Zero export | Net metering | Gross metering |
|---|---|---|---|
| Export to grid | None | Yes, credited | Yes, paid at FIT |
| Best fit | No net metering available | Stable residential, C&I | Large C&I in select states |
| Curtailment | Yes, on surplus | No | No |
| Capex add-on | Sensor and controller | Bidirectional meter | Two unidirectional meters |

## Indian market context

CEA Grid Code allows DISCOMs to impose export limits. Many state SERCs have notified zero export rules for systems above sanctioned demand or for HT category. For a side-by-side look at how these rules compare against the export-friendly alternatives, see [Gross Metering vs Net Metering, Which Should You Choose?](/blog/gross-metering-vs-net-metering/).

Major inverter brands like Sungrow, Solis, Goodwe, Growatt, Solax and Deye ship zero export support with compatible meters.

For large industrial customers, zero export is often the only practical structure given gross metering caps and DISCOM resistance.

PM Surya Ghar is built around net metering. Zero export systems do not qualify for subsidy in most state implementations.

## Standards and certifications

| Standard | Scope |
|---|---|
| CEA Grid Code 2019 | Connectivity requirements |
| IEC 62116 | [Anti-islanding](/glossary/anti-islanding/) (related but distinct) |
| State SERC export rules | Per-state limits |
| IS 16444 | Smart meter Standard |
| Inverter manufacturer compatibility lists | Sensor pairing |

## Common mistakes

Wrong CT polarity, leading to constant zero output.

Sensor placed upstream of an internal load, causing over-curtailment.

No response-time specification in the purchase order.

Ignoring brief reverse flow events that DISCOMs log.

Skipping commissioning test of zero export limit.

No fallback configuration when sensor disconnects.

Mixing inverter brands without plant controller, causing oscillation.

## Key takeaways

Zero export is the inverter control mode for installations that cannot or do not export to the grid. It enables solar deployment where net metering is unavailable, while accepting curtailment of surplus generation. Sensor placement, response time and commissioning testing are the design pillars. Battery storage converts curtailment into stored energy when economics justify it.

## Need zero export configured correctly?

QBits Energy supplies zero export ready inverter and meter packages for C&I customers in DISCOM areas that restrict net metering across India.

## Further reading

For how Zero Export plays out in real projects, these guides go deeper:

- [Solar Inverter Payback Period: ROI Guide 2026](/blog/solar-inverter-payback-period-in-india/)
- [On-Grid vs Hybrid Solar Inverters: ROI Guide](/blog/on-grid-vs-hybrid-solar-inverters-roi/)
- [Solar Inverter for Power-Cut Backup, UP, Bihar, MH](/blog/solar-inverter-power-cut-backup/)
- [50 kW Solar at a Bangalore Multi-Specialty Hospital](/blog/case-study-bangalore-hospital/)

## Sources

- CEA Technical Standards for Connectivity to the Grid (Amendment) Regulations 2019.
- IEC 62116:2014, Anti-islanding test procedures for grid-tied PV inverters.
- IS 16444, Indian Standard for AC static smart meters.
- State SERC notifications on export limits and HT customer solar rules.
- Manufacturer technical documentation for zero export accessories from Sungrow, Solis, Goodwe, Growatt, Solax and Deye.
- NREL Technical Report TP-7A40-78195, Distributed Energy Resources and Grid Codes.
- IEEE PES publications on inverter export limit control.
- MNRE Grid-Connected Rooftop Solar Programme guidelines.
- Forum of Regulators reports on distributed solar rules.
