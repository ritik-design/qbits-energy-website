---
term: "Combiner Box"
title: "Combiner Box: Definition, Components & Solar Applications"
description: "A combiner box parallels multiple solar PV strings safely. Full guide to components and Indian solar applications."
category: "Installation"
categorySlug: "installation"
priority: "P2"
updatedDate: 2026-06-04
keywords:
  - what is combiner box
  - solar combiner box
  - dc combiner
  - string combiner
  - pv combiner box
shortDefinition: "A combiner box, also called string combiner or DC junction box, is an enclosure that parallels multiple solar PV strings, provides per-string fuse protection, surge protection and a single DC isolator for the combined output. Standard in utility-scale solar and large C&I rooftop installations."
quickFacts:
  industry: "Solar Installation"
  primaryUse: "Parallel combination of multiple PV strings"
  commonUsers: "EPCs, installers, utility solar designers"
  relevantStandards: "IEC 61439, IEC 62548, IP65 enclosure rating"
  relatedTechnologies: "DC fuse, SPD, DC isolator, monitoring"
relatedTerms:
  - { slug: "fuse", term: "Fuse" }
  - { slug: "spd", term: "SPD" }
  - { slug: "isolator", term: "Isolator" }
  - { slug: "dc-cable", term: "DC Cable" }
  - { slug: "mc4-connector", term: "MC4 Connector" }
  - { slug: "junction-box", term: "Junction Box" }
  - { slug: "string-sizing", term: "String Sizing" }
  - { slug: "central-inverter", term: "Central Inverter" }
  - { slug: "string-inverter", term: "String Inverter" }
  - { slug: "earthing", term: "Earthing" }
  - { slug: "scada", term: "SCADA" }
  - { slug: "single-line-diagram", term: "Single Line Diagram" }
faqs:
  - q: "What is a combiner box in simple words?"
    a: "A weatherproof box that joins many solar strings together, protects each one with a fuse, and sends a single DC cable to the inverter."
  - q: "When is a combiner box needed?"
    a: "When more than 2 to 3 parallel PV strings feed the same inverter input. Required at central inverter installations."
  - q: "What is inside a combiner box?"
    a: "Per-string DC fuses, DC busbars, DC surge protection (SPD), DC isolator, optional string monitoring."
  - q: "How many strings per combiner box?"
    a: "Typical 8 to 24 strings. Utility plants use combiner boxes with 16 to 32 inputs."
  - q: "What is IP rating?"
    a: "IP65 is standard. IP66 for harsh environments. Indicates water and dust resistance."
  - q: "Do small rooftop systems need combiner boxes?"
    a: "Generally no. Residential PM Surya Ghar systems with 1 to 2 strings connect directly to the inverter."
  - q: "What is the typical voltage rating?"
    a: "1000 V or 1500 V DC. Match to PV array system voltage."
  - q: "What is the typical cost?"
    a: "₹15,000 to ₹50,000 per combiner box, depending on size and feature set."
  - q: "Are combiner boxes BIS-certified?"
    a: "ALMM does not list combiner boxes separately. BIS certification applies to internal components (fuses, isolators)."
  - q: "What is smart combiner box?"
    a: "Includes per-string current sensors and communication for SCADA monitoring."
  - q: "Where is combiner box installed?"
    a: "Outdoors near the PV array. Mounted on a stand or pole with cable conduits to array and inverter."
  - q: "What earthing is needed?"
    a: "Combiner box chassis earthed to system earth bar. SPDs require earth for surge diversion."
  - q: "Can combiner boxes fail?"
    a: "Yes. Loose terminations, water ingress, SPD aging, fuse blowing are common issues."
  - q: "How often should combiner boxes be inspected?"
    a: "Annually thermography and visual. Replace SPDs at end of life."
  - q: "Are combiner boxes used in microinverter systems?"
    a: "No. Microinverter installations combine on AC side, not DC."
author: "Nirav Dhanani"
---

## What is a combiner box

A combiner box, also called DC string combiner or PV junction box, is a weatherproof enclosure that parallels multiple PV strings on the DC side of a solar plant. Each input string passes through a string-level fuse for reverse-current protection, then to a common DC busbar. The output of the busbar feeds the inverter through DC cables and a DC isolator.

Combiner boxes are standard equipment in central-inverter solar plants and large C&I rooftops with multiple parallel strings. They reduce cabling cost by aggregating string conductors into a single DC trunk, provide per-string fuse protection against reverse current and short circuit, include surge protection for the DC side, and offer a single point for DC isolation during maintenance.

Smart combiner boxes add per-string current sensors that report string-level performance to SCADA, enabling early detection of underperforming or failed strings.

## Why combiner boxes matter

Cabling cost. Aggregating strings reduces DC cable runs to the inverter.

Per-string protection. Fuses prevent reverse current from healthy strings into a faulted one.

Surge protection. SPDs at the array end protect against lightning surges.

Maintenance isolation. Single DC isolator allows safe disconnect.

String-level monitoring. Smart combiners identify underperforming strings.

## Combiner box components

| Component | Function |
|---|---|
| Per-string DC fuse | Reverse current and overcurrent protection |
| String terminal blocks or MC4 inputs | Connection point for PV strings |
| Common DC busbar | Parallel combination point |
| DC SPD (Type 2) | Surge diversion to earth |
| DC isolator | Maintenance disconnect |
| Cable glands | Sealed cable entries |
| Optional: string current sensors | Per-string monitoring |
| Optional: communication module | SCADA interface |
| Earth bar | Bonding point |

## Technical deep dive

### Combiner box sizing (typical utility example)

A 100 kW string inverter with 12 MPPT inputs may have 24 strings (2 per MPPT). Two 12-input combiner boxes serve this inverter, each combining 12 strings.

Per-string fuse: 1.5 × Isc_module
Typical for 14 A Isc module: 20 A or 25 A standard fuses.

### IP rating

| Rating | Use |
|---|---|
| IP54 | Light outdoor with cover |
| IP65 | Standard outdoor |
| IP66 | Harsh outdoor, washdown |
| IP67/68 | Submersible (rare for solar) |

### Voltage class

| Class | Standard |
|---|---|
| 1000 V DC | Older utility, residential |
| 1500 V DC | Modern utility solar |

### Smart combiner features

| Feature | Benefit |
|---|---|
| Per-string current monitoring | Identifies failed strings within hours |
| Voltage monitoring | Detects ground faults |
| Temperature monitoring | Internal condition |
| Insulation resistance | Pre-fault detection |
| Communication (Modbus, SunSpec) | SCADA integration |

## Real-world applications

Utility solar plants with central or large string inverters.

C&I rooftop solar with multiple strings.

Carports with multiple string groups.

Hybrid wind-solar plants.

Floating solar with combiner platforms.

## Common combiner box problems

Loose terminations causing heating and fire risk.

Water ingress through inadequate cable glands.

SPD end-of-life not noticed.

Fuse blowing repeatedly indicating persistent fault.

Communication dropout in smart combiner boxes.

Lizard or insect ingress short-circuiting busbars.

## Best practices

Specify IP65 or better enclosure.

Use UV-stabilised enclosure material.

Install in shaded, ventilated location.

Apply correct torque on all terminations.

Annual thermography during O&M.

Replace SPDs when indicators show end of life.

Monitor smart combiner string data weekly.

Document combiner box layout on the SLD.

## Comparison: combiner box sizes

| Size | Inputs | Use |
|---|---|---|
| Small | 4 to 8 | Small C&I, multiple inverters |
| Medium | 12 to 16 | Mid-size utility |
| Large | 20 to 32 | Central inverter blocks |

## Indian market context

Major Indian combiner box manufacturers: Tata Power Solar, Aerovironment, Phoenix Contact, Schneider Electric, Sterling and Wilson, BCH, Chint India.

Smart combiner adoption is increasing as utility plants demand string-level monitoring.

Utility plants under SECI tenders specify IP65 IP66 combiner boxes as standard.

CEIG drawing approval verifies combiner box specifications.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 61439 | LV switchgear assemblies |
| IEC 62548 | PV array design requirements |
| IEC 60529 | IP rating |
| IS 17387 | Inverter grid interconnection |
| MNRE technical specifications | Combiner box requirements |

## Common mistakes

Skipping per-string fuses for cost.

Inadequate SPD class.

Loose terminations not torqued to spec.

Wrong IP rating for environment.

Mixed fuse ratings within one combiner box.

Smart combiner not integrated with SCADA.

## Key takeaways

Combiner boxes parallel multiple PV strings on the DC side with per-string fuse protection, common busbar, SPD and DC isolator. Standard in central inverter and large C&I plants. Per-string fuses size at 1.5 × Isc. IP65 or better enclosure with proper cable glands and earthing ensures 25-year service. Smart combiners enable string-level monitoring through SCADA.

## Need combiner box solutions for your solar plant?

QBits Energy supplies IEC 62548-compliant combiner boxes including smart variants for utility and large C&I solar plants across India.

## Sources

- IEC 61439, LV switchgear and controlgear assemblies.
- IEC 62548, PV array design requirements.
- IEC 60529, IP ratings.
- IS 17387, Inverter grid interconnection.
- MNRE Technical Specifications for Solar PV Plants.
- Manufacturer documentation from Phoenix Contact, Schneider, BCH, Chint India.
- IEEE Standard Dictionary of Electrical and Electronics Terms.
- CEIG drawing requirements.
- IEA PVPS Task 13 Report on PV Performance.
