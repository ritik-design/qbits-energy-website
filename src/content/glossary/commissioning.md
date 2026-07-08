---
term: "Commissioning"
title: "Solar Commissioning: Definition, Process & Indian Compliance"
description: "Commissioning is the formal handover of a solar plant after testing. Full guide to process, tests and Indian DISCOM requirements."
category: "Installation"
categorySlug: "installation"
priority: "P1"
updatedDate: 2026-07-08
keywords:
  - what is solar commissioning
  - solar plant commissioning
  - net metering commissioning
  - cod solar
  - commissioning test
shortDefinition: "Commissioning is the formal process of testing, validating and handing over a completed solar plant to the owner or operator. It includes electrical testing, performance verification, DISCOM grid synchronisation, CEIG approval and documentation handover. Marks the Commercial Operation Date (COD) for PPA purposes."
quickFacts:
  industry: "Solar Installation"
  primaryUse: "Final handover and testing"
  commonUsers: "EPCs, customers, DISCOMs, CEIG"
  relevantStandards: "IEC 62446, IEC 61724, MNRE guidelines, CEA Grid Code"
  relatedTechnologies: "All solar PV equipment"
relatedTerms:
  - { slug: "site-survey", term: "Site Survey" }
  - { slug: "single-line-diagram", term: "Single Line Diagram" }
  - { slug: "discom", term: "DISCOM" }
  - { slug: "ceig", term: "CEIG" }
  - { slug: "anti-islanding", term: "Anti-Islanding" }
  - { slug: "earthing", term: "Earthing" }
  - { slug: "net-metering", term: "Net Metering" }
  - { slug: "pm-surya-ghar", term: "PM Surya Ghar" }
  - { slug: "pr", term: "Performance Ratio" }
  - { slug: "bidirectional-meter", term: "Bidirectional Meter" }
  - { slug: "ppa", term: "Power Purchase Agreement" }
  - { slug: "almm-list", term: "ALMM List" }
faqs:
  - q: "What is commissioning in simple words?"
    a: "The official 'switch on' of a solar plant after all testing and approvals. Includes inspector visits, performance tests, DISCOM activation and paperwork handover."
  - q: "What happens during commissioning?"
    a: "Insulation tests, polarity checks, earthing resistance test, anti-islanding test, grid synchronisation, performance ratio verification, DISCOM meter installation."
  - q: "How long does commissioning take?"
    a: "Residential PM Surya Ghar: 1 to 5 days at site after installation. Utility plants: 2 to 8 weeks for full commissioning."
  - q: "What is COD?"
    a: "Commercial Operation Date. The date the plant is officially declared operational under the PPA. Tariff revenue begins from COD."
  - q: "Who certifies commissioning?"
    a: "DISCOM technical team for net metering. CEIG for safety. Independent engineer for utility plants under PPA."
  - q: "What is the commissioning report?"
    a: "Comprehensive document with as-built drawings, test results, equipment serial numbers, photographs, performance baseline and warranty handover."
  - q: "Does PM Surya Ghar require commissioning?"
    a: "Yes. Subsidy disbursement is gated on DISCOM commissioning confirmation."
  - q: "What is the difference between commissioning and energisation?"
    a: "Energisation is turning the plant on. Commissioning is the broader testing and documentation process leading up to and including energisation."
  - q: "What is performance ratio test?"
    a: "Test comparing actual generation against expected at the irradiance, temperature and conditions observed. Pass threshold is PPA-defined."
  - q: "What is provisional commissioning?"
    a: "Acceptance for grid connection before all paperwork is complete. Used by some DISCOMs for fast-track activation."
  - q: "What tests are required?"
    a: "Insulation, continuity, polarity, earthing, anti-islanding, RCD function, AC voltage and frequency, generation power, communication."
  - q: "Does CEIG approval happen at commissioning?"
    a: "CEIG drawing approval is before construction. CEIG energisation approval is at commissioning."
  - q: "What is the typical residential commissioning sequence?"
    a: "Installation complete → installer self-test → DISCOM site visit → bidirectional meter installation → DISCOM commissioning report → subsidy disbursement."
  - q: "Are commissioning records important?"
    a: "Yes. They are referenced for warranty claims, performance disputes, insurance and resale value over the 25-year project life."
  - q: "What is annual recommissioning?"
    a: "Some O&M contracts include annual revalidation of commissioning baseline."
author: "Keyur Rakholiya"
---

## What is solar commissioning

Solar commissioning is the formal process of testing, validating, and handing over a newly installed solar PV plant to its operator or owner. It is the bridge between construction completion and revenue-generating operation. Commissioning includes electrical safety testing, performance verification, regulatory approvals ([DISCOM](/glossary/discom/), [CEIG](/glossary/ceig/)), bidirectional meter installation, documentation transfer and the formal declaration of Commercial Operation Date (COD). Our [step-by-step EPC guide to solar inverter commissioning in India](/blog/solar-inverter-commissioning-in-india/) walks through the same sequence in more field detail.

> **TL;DR**
> - Commissioning is the formal testing, validation and handover of a completed solar plant, ending in the Commercial Operation Date (COD).
> - It covers electrical safety testing, grid synchronisation, DISCOM meter installation, CEIG energisation approval and documentation handover.
> - Residential PM Surya Ghar commissioning takes 1 to 5 days; utility plants take 2 to 8 weeks under full IEC 62446 procedures.
> - The anti-islanding test requires the inverter to disconnect within 2 seconds of a grid outage and stay off through a 60 to 300 second reconnection delay.
> - Minimum insulation resistance is 1 MΩ for the DC string and inverter chassis, and 0.5 MΩ for AC cable, tested with a 500 V DC megger.
> - PM Surya Ghar subsidy disbursement is gated on DISCOM commissioning confirmation, so incomplete commissioning paperwork directly delays payout.

For Indian solar, commissioning quality affects three things directly: subsidy disbursement under PM Surya Ghar, PPA revenue recognition for utility plants, and the baseline against which long-term performance is measured. Disciplined commissioning produces documented evidence that the plant meets design specifications and complies with all applicable standards.

## Why commissioning matters

Regulatory compliance. CEIG energisation approval and DISCOM commissioning are both mandatory.

Subsidy disbursement. [PM Surya Ghar](/glossary/pm-surya-ghar/) requires verified commissioning data.

PPA revenue. COD triggers tariff billing for utility plants under the [power purchase agreement](/glossary/ppa/).

Warranty baseline. Manufacturer warranties activate at commissioning date.

Performance baseline. Year-over-year performance is benchmarked against commissioning PR.

Insurance. Insurers require commissioning report for plant policy issuance.

## Commissioning process

1. Pre-commissioning visual inspection.
2. Mechanical verification (mounting torque, structure stability).
3. Electrical testing (insulation, continuity, polarity, earthing).
4. Functional testing (inverter start-up, communication, monitoring).
5. Grid synchronisation testing ([anti-islanding](/glossary/anti-islanding/), voltage and frequency response).
6. DISCOM meter installation ([bidirectional smart meter](/glossary/bidirectional-meter/)).
7. CEIG energisation approval.
8. Performance verification (PR check at rated conditions).
9. Documentation handover (as-built drawings, test certificates, manuals).
10. COD declaration.

## Technical deep dive

### Pre-commissioning checklist

| Category | Tests |
|---|---|
| PV array | Module serial number log, IV curve sample, string Voc, string Isc |
| DC system | Insulation resistance > 1 MΩ, polarity correct, fuse rating verified |
| Inverter | Firmware version, MPPT input parameters, communication |
| AC system | Phase rotation, voltage in range, frequency lock |
| Earthing | Resistance < 5 Ω, continuity verified |
| Protection | RCCB function, MCB rating, SPD indicators |
| Documentation | [SLD](/glossary/single-line-diagram/), manuals, warranties |

### Anti-islanding test

DISCOM-witnessed test: with inverter generating, open main grid disconnect, verify inverter disconnects within 2 seconds and remains off until grid is restored and stable for the reconnection delay (typically 60 to 300 seconds).

### Insulation resistance test

| Component | Minimum acceptable IR |
|---|---|
| DC string | > 1 MΩ |
| AC cable | > 0.5 MΩ |
| Inverter chassis | > 1 MΩ |

Tested with 500 V DC megger between conductors and earth.

### Performance ratio test

PR_actual = Generated kWh / (Capacity × Irradiation / G_STC)

Acceptable threshold typically 78 to 82 percent for utility plants at commissioning. Site-specific in residential.

### Residential commissioning timeline

| Day | Activity |
|---|---|
| Day 0 | Installation complete |
| Day 1-2 | Installer self-test, photo documentation |
| Day 3-7 | DISCOM site visit scheduled |
| Day 8-15 | Bidirectional meter delivery and installation |
| Day 15-25 | DISCOM commissioning report uploaded to portal |
| Day 25-45 | PM Surya Ghar subsidy disbursement |

## Real-world applications

PM Surya Ghar residential subsidy activation, the same DISCOM sequence covered in our [guide to applying for net metering in India](/blog/how-to-apply-net-metering-india/).

C&I rooftop commissioning for billing reconciliation on [commercial solar installations](https://heavengreenenergy.com/commercial-solar/).

Utility-scale PPA COD declaration, the kind of milestone tracked in [MW-scale EPC project management](https://heavendesigns.in/mw-scale-project-management-consultancy/).

Off-grid commissioning for warranty handover.

Hybrid plant commissioning with backup mode validation.

## Common commissioning problems

DISCOM bidirectional meter delivery delay.

Anti-islanding test failure due to firmware issue.

Earthing resistance above 5 Ω after monsoon dry-out.

Performance ratio below threshold due to soiling or shading.

CEIG drawing approval mismatch with as-built.

Missing documentation delaying subsidy.

## Best practices

Use IEC 62446 as the commissioning standard reference.

Pre-test all systems before DISCOM visit.

Photograph all key components with serial numbers visible.

Maintain a commissioning logbook.

Schedule with DISCOM and CEIG in advance.

Witness all tests by customer representative.

Deliver complete documentation package on handover.

Maintain digital copies for future reference.

## Comparison: commissioning scope

| Project type | Tests | Duration |
|---|---|---|
| Residential rooftop | Standard tests | 1 to 5 days |
| C&I rooftop | Standard plus PR test | 3 to 10 days |
| Utility solar | Full IEC 62446 with independent engineer | 2 to 8 weeks |
| Off-grid | Battery integration, backup mode | 2 to 5 days |
| Hybrid | Self-consumption, backup test | 3 to 7 days |

## Indian market context

PM Surya Ghar portal tracks commissioning status across DISCOMs.

[ALMM-listed](/glossary/almm-list/) equipment is verified at commissioning.

CEIG approval is mandatory for installations above state-specific thresholds.

State DISCOMs maintain commissioning protocols, with variation across states.

Utility solar under SECI tenders uses independent engineer for commissioning certification.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 62446-1 | PV plant commissioning tests |
| IEC 61724 | Performance monitoring |
| MNRE Commissioning Guidelines | Indian PV plant procedures |
| CEA Measures Relating to Safety 2023 | Safety requirements |
| State CEIG protocols | Energisation approval |
| State SERC net metering regulations | Billing activation |

## Common mistakes

Energising before CEIG approval.

Skipping insulation resistance test on monsoon-damp installations.

Inadequate photographic documentation.

Missing meter seal numbers in records.

No performance ratio baseline at commissioning.

Incomplete handover documentation.

Skipping anti-islanding witness test.

## Key takeaways

Commissioning is the formal validation and handover of a completed solar plant. It includes electrical testing, grid synchronisation, DISCOM coordination, CEIG approval and documentation transfer. Indian residential commissioning takes 1 to 5 days; utility plants take 2 to 8 weeks. IEC 62446 is the standard reference. Quality of commissioning affects subsidy disbursement, PPA revenue, warranty enforcement and long-term performance benchmarking.

## Need disciplined solar plant commissioning?

QBits Energy provides IEC 62446-compliant commissioning services for residential, C&I and utility solar plants across India, with complete documentation and DISCOM coordination.

## Sources

- IEC 62446-1, PV plant commissioning tests.
- IEC 61724 series, Performance monitoring.
- MNRE Commissioning Guidelines for Solar PV Plants.
- CEA Measures Relating to Safety and Electric Supply Regulations 2023.
- State CEIG procedures.
- State SERC net metering regulations.
- PM Surya Ghar Muft Bijli Yojana operational guidelines.
- SECI Standard Operating Procedures for Commissioning.
- IEA PVPS Task 13 Report on PV Plant Commissioning.
