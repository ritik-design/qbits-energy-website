---
term: "RCCB"
title: "RCCB (Residual Current Circuit Breaker): Definition, Working & Solar Applications"
description: "RCCB protects against earth leakage and electric shock. Full guide to working and solar applications."
category: "Protection"
categorySlug: "protection"
priority: "P1"
updatedDate: 2026-06-04
keywords:
  - what is rccb
  - residual current circuit breaker
  - rccb solar
  - earth leakage breaker
  - rccb tripping
shortDefinition: "A Residual Current Circuit Breaker (RCCB), also called Residual Current Device (RCD) or Earth Leakage Circuit Breaker (ELCB), detects imbalance between line and neutral currents and trips to prevent electric shock. Standard sensitivity is 30 mA for personal protection."
quickFacts:
  industry: "Electrical Protection"
  primaryUse: "Earth leakage and shock protection"
  commonUsers: "Electricians, installers, customers"
  relevantStandards: "IS 12640, IEC 61008, IEC 61009"
  relatedTechnologies: "MCB, RCBO, earthing, distribution board"
relatedTerms:
  - { slug: "mcb", term: "MCB" }
  - { slug: "fuse", term: "Fuse" }
  - { slug: "spd", term: "SPD" }
  - { slug: "earthing", term: "Earthing" }
  - { slug: "isolator", term: "Isolator" }
  - { slug: "current", term: "Current" }
  - { slug: "voltage", term: "Voltage" }
  - { slug: "ac-cable", term: "AC Cable" }
  - { slug: "distribution-board", term: "Distribution Board" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "residual-current", term: "Residual Current" }
  - { slug: "leakage-current", term: "Leakage Current" }
faqs:
  - q: "What is RCCB in simple words?"
    a: "A safety switch that trips when electricity leaks to earth, usually because someone is being shocked or there is faulty insulation. Saves lives."
  - q: "What does RCCB stand for?"
    a: "Residual Current Circuit Breaker."
  - q: "How does RCCB work?"
    a: "It compares current going out through phase to current returning through neutral. Any difference means electricity is leaking somewhere (typically through a person or to earth). If the difference exceeds the sensitivity threshold, it trips."
  - q: "What is the typical sensitivity?"
    a: "30 mA for personal shock protection. 100 mA or 300 mA for equipment protection only."
  - q: "Is RCCB same as ELCB?"
    a: "Functionally yes. ELCB (Earth Leakage Circuit Breaker) is the older term. RCCB is the modern preferred term."
  - q: "Does RCCB protect against overcurrent?"
    a: "No. RCCB only detects earth leakage. Use it with MCB (or use RCBO which combines both functions)."
  - q: "What is RCBO?"
    a: "Residual Current Breaker with Overcurrent. Combines MCB and RCCB in one device."
  - q: "Where is RCCB installed?"
    a: "At distribution boards, typically at the main incomer, protecting all downstream circuits."
  - q: "Is RCCB required for solar?"
    a: "Yes. CEA Measures Relating to Safety require RCCB protection on AC circuits. Some hybrid inverter installations may also include DC-side leakage detection."
  - q: "Why does my RCCB trip?"
    a: "Earth leakage on a circuit, faulty appliance, damp wiring, or excessive accumulated leakage from many appliances. Type A and Type B RCCBs detect different leakage current waveforms."
  - q: "What is Type A vs Type B RCCB?"
    a: "Type A detects AC and pulsating DC leakage. Type B additionally detects smooth DC leakage. Solar inverter installations often need Type B for transformerless inverters."
  - q: "Can RCCB save my life?"
    a: "Yes. 30 mA RCCB trips within 30 ms, before current causes fatal cardiac fibrillation. This is the primary reason RCCBs are mandatory."
  - q: "How often should I test RCCB?"
    a: "Monthly using the TEST button. Annually with calibrated leakage tester during preventive maintenance."
  - q: "What is the difference between residential and industrial RCCB?"
    a: "Current rating and breaking capacity. Residential 25 to 63 A at 6 kA Icn. Industrial up to 125 A at 10 to 25 kA Icn."
  - q: "Are RCCBs BIS-certified?"
    a: "Yes. IS 12640-1 covers AC RCCBs. Manufacturer must hold BIS license."
author: "Nirav Dhanani"
---

## What is an RCCB

A Residual Current Circuit Breaker (RCCB), also called Residual Current Device (RCD) in international usage and Earth Leakage Circuit Breaker (ELCB) in older Indian terminology, is an electrical safety device that detects imbalance between the current flowing out through the phase conductor and the current returning through the neutral conductor. Any imbalance indicates residual current leakage to earth, often because of insulation failure or because a person is in contact with a live conductor. The RCCB trips within milliseconds, removing the shock hazard.

The standard sensitivity for personal shock protection is 30 mA. At this level the device trips before electrical current through a human body reaches the threshold of cardiac fibrillation. 100 mA and 300 mA RCCBs exist for equipment protection only.

For solar installations, RCCB is mandatory on the AC side under Indian CEA safety regulations. Hybrid and off-grid systems may include DC-side leakage detection through inverter-integrated functions.

## Why RCCB matters

Life safety. The primary reason for mandatory installation. Saves users from fatal electric shock.

Fire prevention. Earth leakage current dissipating into damp insulation can cause fires. RCCB trips before this.

Regulatory compliance. CEA Measures Relating to Safety and Electric Supply Regulations 2023 require RCCB on all final circuits.

DISCOM commissioning. RCCB protection is verified at commissioning.

Insurance. Insurers may require RCCB-protected installations for solar plant coverage.

## How RCCB works

The RCCB uses a current transformer (CT) that encloses both the phase and neutral conductors. Under normal operation, the magnetic fields from phase and neutral cancel exactly because the same current flows in opposite directions.

If a person touches a live conductor and current leaks to earth through their body, the current returning through neutral is less than what went out through phase. The CT detects the imbalance and triggers a relay.

The trip threshold is set by the sensitivity rating. At 30 mA threshold, leakage above 30 mA trips within 30 ms.

## Technical deep dive

### Sensitivity classes

| Sensitivity | Use |
|---|---|
| 10 mA | Healthcare, sensitive applications |
| 30 mA | Personal shock protection (residential, commercial) |
| 100 mA | Equipment protection |
| 300 mA | Fire protection only |
| 500 mA | Selective coordination |

### Types

| Type | Detects | Use case |
|---|---|---|
| AC | Pure AC residual | Residential basic |
| A | AC and pulsating DC | Most appliances |
| F | A class plus high frequency | Single-phase VFD |
| B | All including smooth DC | Transformerless solar inverter, three-phase VFD |
| B+ | B plus higher frequencies | EV charging |

Solar inverters with transformerless topology produce smooth DC leakage on fault. Type B is required for these.

### Trip times

| Residual current | Maximum trip time (30 mA RCCB) |
|---|---|
| 30 mA | 300 ms |
| 60 mA | 150 ms |
| 150 mA | 40 ms |
| 250 mA | 40 ms (immediate) |

### Number of poles

| Configuration | Use |
|---|---|
| 2 pole (1P + N) | Single-phase residential |
| 4 pole (3P + N) | Three-phase commercial |

## Real-world applications

Residential AC distribution at main incomer.

Commercial sub-distribution.

Solar inverter AC output protection.

Hybrid inverter backup output.

EV charger protection.

Healthcare equipment circuits.

## Common RCCB problems

Nuisance tripping. Cumulative leakage from many appliances. Split circuits onto multiple RCCBs.

Failure to trip on test. Replace immediately.

Mechanical wear from frequent operation. Replace at end of life.

Wrong type (AC instead of A or B) failing to detect actual leakage.

RCCB unable to differentiate genuine fault from inverter DC leakage. Type B required for solar.

## Best practices

Use 30 mA RCCB on all final circuits.

Choose Type A for residential, Type B for solar inverter circuits.

Split high-leakage circuits to avoid nuisance tripping.

Test RCCB monthly using the TEST button.

Annual professional testing.

Document RCCB serial numbers and test results.

Replace after 10 to 15 years or after major fault event.

## Comparison: RCCB vs MCB vs RCBO

| Feature | RCCB | MCB | RCBO |
|---|---|---|---|
| Earth leakage | Yes | No | Yes |
| Overcurrent | No | Yes | Yes |
| Short circuit | No | Yes | Yes |
| Use | Shock protection | Overcurrent protection | Combined |
| Size | 2 modules | 1 module | 2 modules |

## Indian market context

Major Indian RCCB brands include Havells, Legrand, Schneider Electric, Siemens, ABB and L&T.

PM Surya Ghar residential installations include RCCB at the AC distribution.

DISCOM commissioning verifies RCCB protection.

Type B RCCB demand has grown with transformerless solar inverter adoption.

State-level building codes increasingly mandate RCCB on all residential circuits.

## Standards and certifications

| Standard | Scope |
|---|---|
| IS 12640-1 | Indian RCCB without integral overcurrent protection |
| IS 12640-2 | Indian RCCB with integral overcurrent protection (RCBO) |
| IEC 61008-1 | International RCCB without overcurrent |
| IEC 61009-1 | International RCBO |
| CEA Measures Relating to Safety 2023 | Indian safety requirements |

## Common mistakes

Using AC type RCCB on circuits with transformerless solar inverters.

Single RCCB for too many circuits, causing cumulative leakage trips.

Not testing monthly.

Installing 100 mA RCCB where 30 mA is required.

Skipping RCCB on inverter AC output.

Wrong number of poles for the supply configuration.

## Key takeaways

RCCB is the life-safety device that detects earth leakage and trips before electric shock becomes fatal. 30 mA sensitivity is standard for personal protection. Type A for general residential, Type B for solar inverter installations. Monthly self-test and annual professional test are mandatory practices. CEA safety regulations require RCCB on all final AC circuits including solar.

## Need life-safe solar AC distribution?

QBits Energy installs CEA-compliant solar AC distribution with appropriately rated RCCBs, RCBOs and MCBs for residential, C&I and utility solar applications.

## Sources

- IS 12640-1, -2, Indian Standard for residual current circuit breakers.
- IEC 61008-1, IEC 61009-1, International RCD standards.
- CEA Measures Relating to Safety and Electric Supply Regulations 2023.
- IS 17387, Inverter grid interconnection.
- IS 732, Indian wiring code.
- Manufacturer technical documentation from Havells, Legrand, Schneider, Siemens, ABB.
- IEC 60364-4-41, Protection for safety: Protection against electric shock.
- IEEE Standard Dictionary of Electrical and Electronics Terms.
