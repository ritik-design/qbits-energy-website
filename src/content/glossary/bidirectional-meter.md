---
term: "Bidirectional Meter"
title: "Bidirectional Meter: Definition, Meaning, How It Works, Benefits & Applications"
description: "A bidirectional meter records both energy import and export for net-metered solar customers. Complete guide to working, accuracy and Indian installation."
category: "Metering and Grid"
categorySlug: "metering-grid"
priority: "P1"
updatedDate: 2026-10-14
keywords:
  - bidirectional meter
  - bi directional meter
  - bidirectional meter for solar
  - solar net meter
shortDefinition: "A bidirectional meter records electricity imported from the grid and electricity exported to it in separate registers. The bill treatment depends on the approved metering arrangement and local tariff rules."
quickFacts:
  industry: "Rooftop solar metering"
  primaryUse: "Measuring grid import and export"
  commonUsers: "Solar owners, DISCOMs and installers"
  relevantStandards: "Applicable DISCOM metering specification and state electricity rules"
  relatedTechnologies: "Net metering, gross metering, solar inverter"
relatedTerms:
  - { slug: "net-metering", term: "Net Metering" }
  - { slug: "discom", term: "DISCOM" }
  - { slug: "zero-export", term: "Zero Export" }
faqs:
  - q: "What is a bidirectional meter in simple words?"
    a: "An electricity meter that records energy flowing both ways at a connection. It keeps one count for energy imported from the grid and another for energy exported to it."
  - q: "Is a bidirectional meter the same as a net meter?"
    a: "In rooftop solar the terms are often used for the same device. Net metering is the billing arrangement, and the bidirectional meter is the hardware that records import and export. Whether the export is netted against import is decided by the tariff and approval, not by the meter."
  - q: "How does a bidirectional meter know the direction of energy flow?"
    a: "It measures voltage and current many times per cycle, calculates instantaneous power, and uses its sign to decide whether energy is flowing in or out. The energy is then added to the matching import or export register."
  - q: "Does the inverter app show the same number as the meter export register?"
    a: "No. The inverter app shows generation. Solar energy used in the building never passes through the export register. Compare the import and export readings with your own consumption, not with total generation."
  - q: "Who supplies and installs the meter?"
    a: "The serving DISCOM sets the specification and process. Ask who supplies, tests, seals and pays for the meter in your application, and keep the receipt and seal numbers."
  - q: "Can I install my own bidirectional meter?"
    a: "Generally not for billing. The DISCOM specifies, tests and seals the meter it will accept. Ask for its approved list and process before buying anything."
  - q: "Is a bidirectional meter the same as a smart meter?"
    a: "No. A smart meter adds two-way communication, time-of-day registers and often remote functions. A smart meter can also be bidirectional, and many new connections use one. Check what your DISCOM will install."
  - q: "What accuracy class does the meter need?"
    a: "It depends on the connection voltage and the utility's specification. The CEA metering regulations set consumer-meter accuracy at class 1.0 or better up to 650 V, 0.5S or better above 650 V and up to 33 kV, and 0.2S above 33 kV. Your DISCOM states the class for your application."
  - q: "Does a bidirectional meter measure reactive power?"
    a: "Some do. A four-quadrant meter records active and reactive energy in both directions. A basic meter may record active energy only. Large commercial connections usually need the fuller measurement for reactive-energy billing."
  - q: "Why does my meter show no export reading?"
    a: "Common causes are a meter that is not configured to register export, current sensors wired the wrong way round, no real surplus during the period, or a display that shows the export register on a different screen. Raise it with the DISCOM and keep dated photos of the readings."
  - q: "How often is the meter read?"
    a: "It depends on the meter and the utility. Smart meters with communication can send readings automatically, and older meters are read on site. Your bill or the DISCOM's guide states the reading cycle."
  - q: "What happens if the meter fails?"
    a: "The DISCOM tests or replaces it under its own procedure and estimates the billing for the period according to the applicable regulation. Keep the dated readings and the complaint reference."
  - q: "What standards apply to the meter?"
    a: "IS 16444 covers smart direct-connected meters of class 1 and 2, with IS 15959 as the DLMS data-exchange companion. IEC 62052-11 and the IEC 62053 series cover general requirements and accuracy for electricity meters. The DISCOM's specification decides which applies."
  - q: "Does PM Surya Ghar need a bidirectional meter?"
    a: "Rooftop systems under the scheme are commissioned through the DISCOM, which will fit or approve the meter arrangement for the connection, and subsidy release follows commissioning steps under the scheme guidelines. Check the current guidelines and your DISCOM."
  - q: "What should I check when the meter is installed?"
    a: "Note the serial and seal numbers and the starting import and export readings, and ask for them on the commissioning record. Compare the first few bills with inverter monitoring data to catch configuration errors early."
---

**A bidirectional meter measures electricity moving both ways across a grid connection.** It records import when a building draws power from the grid and export when eligible rooftop solar sends surplus power out. The import and export registers are readings, not an automatic promise that every exported unit receives the same credit as an imported unit.

> [!KEYTAKEAWAYS]
> - A bidirectional meter keeps two counts, import from the grid and export to it. The DISCOM's approved arrangement turns those readings into a bill.
> - Inverter-app generation is not the export register, because solar used inside the building never crosses the meter.
> - Accuracy class, supplier and approved make depend on the DISCOM's specification and the connection voltage; check the current CEA metering regulations.
> - At installation, record register readings, seal numbers and serial numbers, then compare the first bills with monitoring data.

## Bidirectional meter explained simply

A conventional meter counts one way. A bidirectional meter keeps two counts: what you take from the grid and what you send back. On a sunny day the rooftop system may first supply the building's own load, and only the surplus crosses the meter outward. The DISCOM then applies the approved billing arrangement to the two readings. See the [net versus gross metering guide](/blog/gross-metering-vs-net-metering/) for how the same meter can be used under different settlement rules.

## How to read it

The display or utility bill may show separate import and export energy totals in kWh. Record the register label and date when comparing readings. If the labels are unclear, ask the DISCOM for its meter-reading guide; display codes and billing formats differ between meter models and utilities.

Table: The two registers on a bidirectional meter and the billing question each answers

| Register | What it measures | Billing question |
| --- | --- | --- |
| Import | Energy received from the grid | Which tariff and fixed charges apply? |
| Export | Energy sent to the grid | How is export credited under the approved arrangement? |

> [!IMPORTANT] Generation is not export
> Your inverter app usually reports solar generation, which is **not** the same as export. Solar energy used immediately in the building may never pass through the export register.

## How the meter works

1. The meter measures voltage and current at the service connection through internal sensors, or through external current transformers on larger connections.
2. A processor samples voltage and current many times per cycle and multiplies them to get instantaneous active power.
3. The sign of the power gives the direction: one sign for import, the other for export.
4. Energy in each direction is accumulated into its own register at each interval.
5. Interval data may be stored in the meter and, in a smart meter, sent to the utility's system over a communication link.

## Accuracy class

Accuracy class describes the permitted measurement error under defined conditions. The CEA metering regulations specify, for consumer meters, class 1.0 or better up to 650 V, 0.5S or better above 650 V and up to 33 kV, and 0.2S above 33 kV. The class that applies to your connection is stated in your DISCOM's specification, and the regulations are amended periodically, so check the current text.

Table: Meter accuracy classes and where each is typically used

| Class | Permitted error (indicative) | Typical use |
| --- | --- | --- |
| 0.2S | Tightest | High-voltage and large industrial connections |
| 0.5S | Tighter | Larger low-voltage commercial or industrial connections |
| 1.0 | Standard for small consumers | Residential and small commercial single-phase and three-phase connections |

## Active and reactive measurement

A **four-quadrant** meter records active and reactive energy in both directions. The usual convention is: Q1 active import with reactive import (an inductive load), Q2 active export with reactive import, Q3 active export with reactive export, Q4 active import with reactive export. Quadrant labelling varies between manufacturers, so rely on the meter's own manual. A household net-metered connection mostly needs active energy only. A larger commercial connection may need reactive energy for billing, which links to [power factor](/glossary/power-factor/) and the [reactive power](/glossary/reactive-power/) entry.

## Communication

Smart meters send data to the utility through a communication link such as RF mesh, power-line carrier or cellular, depending on location. Indian smart meters use the DLMS/COSEM data model, which IS 15959 adapts as a companion specification. The [smart meter](/glossary/smart-meter/) entry covers what a smart meter adds, such as time-of-day registers and two-way communication.

## Who selects and installs the meter?

The serving DISCOM sets its metering specification and connection process. Ask it who supplies, tests, seals and pays for the meter in your application. Do not buy one based only on a generic online price list. Meter price, accuracy class and replacement terms depend on the utility specification and the device supplied.

> [!TIP] Surprising bill? Compare before blaming the meter
> If the new bill shows surprising import or export, compare dated meter readings, inverter generation and the tariff/metering approval before assuming a faulty meter. A registered installer or the DISCOM can check the wiring and register interpretation. The [net-metering application guide](/blog/how-to-apply-net-metering-india/) covers the connection journey, and the [net meter approval timeline guide](/blog/net-meter-approval-timeline/) covers the waiting steps.

## Where it is used

- Net-metered rooftop solar at homes and small commercial buildings.
- Gross-metered arrangements where all generation is measured and settled separately.
- [Virtual net metering](/glossary/virtual-net-metering/), where one generating site is allocated across several consumers.
- Captive plants and commercial sites with grid backup, where both export and import are measured.

## Common problems

- **Export not registered.** The meter is not set up to record export, so surplus energy is lost to billing. Audit the first bills.
- **Wrong register read.** Import and export labels are confused, or generation from the inverter app is compared with the export register.
- **Current sensors reversed** on a CT-operated connection, which inverts the direction and corrupts both readings. Check it at commissioning.
- **Communication gaps,** where the meter reads correctly but the utility has not received recent data. Ask the DISCOM about its fallback billing rule.
- **Seal or tamper alarms** after cleaning or pest control, which usually need a utility visit.

## Best practices

1. Confirm the meter make and model are on the DISCOM's approved list before purchase, where the DISCOM expects you to supply it.
2. Witness the installation and note register readings, seal numbers and serial numbers on the commissioning record.
3. Compare the first few bills with inverter monitoring data to confirm the export register is working.
4. Keep a copy of the [single line diagram](/glossary/single-line-diagram/) showing meter location and sensor placement.
5. Ask in writing how import and export will be settled before you rely on any credit calculation.

## Unidirectional, bidirectional and four-quadrant meters

Table: Unidirectional, bidirectional and four-quadrant meters compared

| Feature | Unidirectional | Bidirectional (active) | Four-quadrant bidirectional |
| --- | --- | --- | --- |
| Active import | Yes | Yes | Yes |
| Active export | No | Yes | Yes |
| Reactive energy | Not measured | Limited or none | Measured in both directions |
| Typical use | Ordinary consumption | Residential net metering | Larger commercial and high-voltage connections |

## Indian context

The Central Electricity Authority's metering regulations (Installation and Operation of Meters, 2006, as amended) set the framework for consumer meters, including accuracy classes and smart-meter requirements. The most recent amendments make smart meters the norm in areas with communication coverage, so what your DISCOM installs depends on the date and area. IS 16444 (Part 1) sets requirements for direct-connected smart meters of class 1 and 2, and IS 16444 (Part 2) covers transformer-operated smart meters of classes 0.2S, 0.5S and 1.0S. The Smart Meters (Quality Control) Order, 2023 requires BIS certification for such meters. The Revamped Distribution Sector Scheme supports smart prepaid metering. See the [DISCOM](/glossary/discom/) entry for who to approach and the [PM Surya Ghar](/glossary/pm-surya-ghar/) entry for how the scheme interacts with commissioning. Sources: [CEA metering regulations (consolidated)](https://www.cbip.org/cearegulations/CEA%20DATA/MeteringRegulations/Jan2020/Metering%20Consolidated%20Regulations.pdf) and [CEA metering regulations page](https://cea.nic.in/regulations-category/metering-regulations/?lang=en), checked 14 October 2026.

For on-grid inverters, the metering arrangement affects settings such as export limit. See the [Qbits on-grid range](/on-grid-inverter/) and the [zero export](/glossary/zero-export/) entry.

## Standards and references

Table: Standards and regulations behind bidirectional and smart meters in India

| Standard | Scope |
| --- | --- |
| IS 16444 (Part 1 and Part 2) | Smart meters, direct-connected (class 1 and 2) and transformer-operated (0.2S, 0.5S, 1.0S) |
| IS 15959 | DLMS/COSEM companion specification for data exchange |
| IEC 62052-11 | General requirements for AC electricity metering equipment |
| IEC 62053 series | Particular requirements and accuracy classes for static meters |
| CEA metering regulations | Accuracy classes and smart-meter requirements for consumer meters in India |

## Common mistakes

- Assuming generation in the inverter app is the export register.
- Accepting a meter that is not configured to record export.
- Not recording the seal and serial numbers at installation.
- Buying a meter that is not on the DISCOM's approved list.
- Not checking the first bills against monitoring data.
- Treating the meter reading as a credit promise before the settlement terms are confirmed.

## Key takeaways

A bidirectional meter records import and export separately, and the DISCOM's approved arrangement turns those readings into a bill. Check the register labels, the class and the configuration at installation, keep the commissioning record, and audit the first bills. Check the current local metering and billing order before using a price or export credit in a purchase calculation.
