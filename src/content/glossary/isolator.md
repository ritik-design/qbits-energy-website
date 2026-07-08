---
term: "Isolator"
title: "Isolator: Definition, Types & Solar PV Applications"
description: "An isolator provides safe disconnect during maintenance. Full guide to DC and AC isolators in Indian solar."
category: "Installation"
categorySlug: "installation"
priority: "P2"
updatedDate: 2026-07-08
keywords:
  - what is isolator
  - dc isolator solar
  - ac isolator
  - load break switch
  - solar disconnect
shortDefinition: "An isolator is a manually operated electrical switch that creates a visible disconnect between equipment and its power source for safe maintenance. Solar plants use DC isolators (rated for solar DC) on the PV side and AC isolators on the inverter output, both required by CEA Measures Relating to Safety."
quickFacts:
  industry: "Solar Installation"
  primaryUse: "Maintenance disconnect"
  commonUsers: "Installers, electricians, O&M operators"
  relevantStandards: "IEC 60947-3, IS 13947, IS 17387"
  relatedTechnologies: "MCB, fuse, combiner box"
relatedTerms:
  - { slug: "mcb", term: "MCB" }
  - { slug: "fuse", term: "Fuse" }
  - { slug: "rccb", term: "RCCB" }
  - { slug: "spd", term: "SPD" }
  - { slug: "combiner-box", term: "Combiner Box" }
  - { slug: "junction-box", term: "Junction Box" }
  - { slug: "dc-cable", term: "DC Cable" }
  - { slug: "ac-cable", term: "AC Cable" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "earthing", term: "Earthing" }
  - { slug: "voltage", term: "Voltage" }
  - { slug: "current", term: "Current" }
faqs:
  - q: "What is an isolator in simple words?"
    a: "A safety switch that lets you turn off the power between equipment and source. Used for maintenance work."
  - q: "Is isolator same as breaker?"
    a: "No. Breaker trips on faults. Isolator is manually operated and does not trip automatically."
  - q: "Why does solar need isolators?"
    a: "To safely disconnect the inverter from PV and grid during installation, maintenance and emergency. Required by CEA Safety Measures."
  - q: "DC isolator vs AC isolator?"
    a: "DC isolator: PV-side, rated 1000 to 1500 V DC, special arc-interrupting design. AC isolator: inverter output, standard AC switchgear."
  - q: "Can I use AC isolator for DC?"
    a: "No. AC isolators cannot reliably interrupt DC due to lack of zero crossing."
  - q: "What is the typical DC isolator rating?"
    a: "16 A, 25 A, 32 A continuous. 1000 V or 1500 V DC. 4-pole (2 positive + 2 negative) for bipolar isolation."
  - q: "Where are isolators placed?"
    a: "DC isolator: at inverter DC input or inside combiner box. AC isolator: at inverter AC output and at bidirectional meter."
  - q: "What is load-break vs isolator?"
    a: "Load-break switch can interrupt load current. Isolator should only be operated off-load. Most solar isolators are load-break rated."
  - q: "Are DC isolators reliable?"
    a: "Quality solar DC isolators (Schneider, ABB, Phoenix Contact) are reliable for 10,000+ operations. Cheap unbranded units fail early."
  - q: "What is rotary isolator?"
    a: "Manually rotated handle operates the disconnect. Most solar DC isolators are rotary."
  - q: "Is BIS certification needed?"
    a: "Yes. IS 13947 covers Indian isolator certification."
  - q: "What is the typical cost?"
    a: "Solar DC isolator: ₹500 to ₹3,000 depending on rating and brand. AC isolator: ₹400 to ₹2,500."
  - q: "Should DC isolator have padlock?"
    a: "Yes, with locking provision. Lockout-tagout for maintenance safety."
  - q: "What is the difference between switch and isolator?"
    a: "Switch is for normal operation. Isolator is for safety disconnect with visible isolation."
  - q: "How often should isolators be operated?"
    a: "Operate at least twice a year to verify function. Lubricate contacts as per manufacturer recommendation."
author: "Nirav Dhanani"
---

## What is an isolator

An isolator is a manually operated mechanical switch that creates a visible disconnection between electrical equipment and its power source. Unlike circuit breakers, isolators do not trip automatically on fault conditions; their purpose is safe disconnect for maintenance, inspection or emergency.

> **TL;DR**
> - An isolator is a manual safety switch for visible disconnection, not an automatic overcurrent device like an MCB.
> - Solar plants need both a DC isolator (PV side) and an AC isolator (inverter output), each rated for its own voltage class.
> - Typical DC isolator ratings are 16, 25 or 32 A continuous at 1000 or 1500 V DC, with 2 or 4 poles depending on string configuration.
> - AC isolators cannot safely interrupt DC current because DC lacks a natural zero crossing — the two are never interchangeable.
> - Branded isolators (Schneider, ABB, Phoenix Contact, Siemens) last 10,000+ operations; unbranded units commonly fail within 1 to 2 years.
> - CEA Measures Relating to Safety require isolators at defined points, and DISCOM commissioning checks for their presence before activation.

For solar PV installations, isolators are required on both DC and AC sides. The DC isolator sits at the inverter DC input or inside the [combiner box](/glossary/combiner-box/), rated for the system DC voltage (1000 V or 1500 V) and arc-interrupting capability designed for DC. The AC isolator sits between the inverter AC output and the distribution board or [bidirectional meter](/glossary/bidirectional-meter/), allowing the inverter to be isolated from the grid for servicing.

CEA Measures Relating to Safety and Electric Supply Regulations 2023 mandate isolators at defined points in any grid-connected solar installation. [DISCOM](/glossary/discom/) commissioning verifies presence of both DC and AC isolators.

## Why isolators matter

Maintenance safety. Personnel can work on de-energised equipment.

Emergency disconnect. Manual disconnect during fires or other emergencies.

Lockout-tagout (LOTO). Padlock-able isolators enable formal safety procedures.

Regulatory compliance. CEA Measures Relating to Safety require isolators.

Code compliance. [CEIG](/glossary/ceig/) and DISCOM verify isolator presence.

## Isolator types

| Type | Use |
|---|---|
| DC rotary isolator | Solar DC side |
| AC rotary isolator | AC distribution |
| Switch-disconnector | Combined function isolator and load switch |
| Switch-disconnector-fuse | Includes integrated fuses |
| Off-load isolator | Standard manual disconnect |
| Load-break switch | Can interrupt rated load current |

Most modern solar isolators are load-break switch-disconnectors, allowing operation under load.

## Technical deep dive

### DC isolator specifications

| Parameter | Typical value |
|---|---|
| Voltage rating | 1000 V or 1500 V DC |
| Current rating | 16, 25, 32, 40, 63 A |
| Number of poles | 2 (single string) or 4 (two strings bipolar) |
| Operating temperature | -25°C to +50°C |
| IP rating | IP65 |
| Standards | IEC 60947-3, IS 13947 |
| Cycle life | 10,000+ operations |
| Lockout provision | Yes, padlock capable |

### AC isolator specifications

| Parameter | Typical value |
|---|---|
| Voltage rating | 240 V or 415 V AC |
| Current rating | 25, 40, 63, 100, 125 A |
| Number of poles | 2 (single-phase) or 4 (three-phase) |
| Standards | IEC 60947-3, IS 13947 |

### Placement in solar

| Location | Isolator type |
|---|---|
| Combiner box output | DC isolator |
| Inverter DC input (separate enclosure) | DC isolator |
| Inverter AC output | AC isolator |
| Bidirectional meter | AC isolator |
| Battery (hybrid systems) | DC isolator |

### Lockout-tagout (LOTO)

| Step | Action |
|---|---|
| Notify | Inform affected personnel |
| Shut down | Turn off equipment |
| Isolate | Open isolator |
| Lock | Apply padlock |
| Tag | Attach LOTO tag with worker identification |
| Verify | Test absence of voltage |

## Real-world applications

PV array isolation at the combiner box, one of the [balance of system components](https://heavengreenenergy.com/products/balance-of-system/) sourced alongside the inverter.

Inverter DC input isolation, a step covered in our [solar inverter integration EPC setup guide](/blog/solar-inverter-integration-in-india/).

Inverter AC output isolation.

Bidirectional meter line side isolation.

Hybrid battery DC isolation, sized alongside the battery in our [hybrid solar inverter battery sizing guide](/blog/battery-sizing-hybrid-solar/).

Emergency disconnect at building entry.

## Common isolator problems

Contact welding after operating under fault.

Mechanical wear from frequent operation.

Loose terminations causing heating.

Water ingress in inadequately sealed isolators.

Lockout hardware missing or damaged.

Unbranded isolators failing in 1 to 2 years.

## Best practices

Use TUV-certified DC isolators for solar DC applications.

Choose branded products (Schneider, ABB, Phoenix Contact, Siemens, Havells, L&T) for long life.

Specify IP65 or better for outdoor installation.

Include lockout provision.

Document isolator ratings on the [single line diagram](/glossary/single-line-diagram/).

Operate at least twice yearly to verify function.

Thermography during O&M.

## Comparison: isolator vs related devices

| Device | Function | Manual or automatic |
|---|---|---|
| Isolator | Safe disconnect, visible isolation | Manual |
| Load-break switch | Disconnect under load | Manual |
| MCB | Overcurrent protection plus disconnect | Automatic + manual |
| Contactor | Remote-controlled disconnect | Remote |
| Fuse | One-time overcurrent | Automatic |

## Indian market context

Major Indian DC isolator brands: Schneider Electric, ABB, Phoenix Contact, Siemens, Havells, L&T, Camsco, Polytron — many of the same brands compared in our [guide to inverter suppliers and distributors in India](/blog/inverter-suppliers-india/).

ALMM does not list isolators. BIS certification under IS 13947 applies.

DISCOM commissioning verifies isolator presence and rating.

CEIG drawing approval requires isolators marked at correct locations on the SLD, part of the [electrical drawing package](https://heavendesigns.in/electrical-ceig-drawings/) an EPC submits.

PM Surya Ghar residential installations include both DC and AC isolators.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 60947-3 | Switches, disconnectors, switch-disconnectors |
| IS 13947 | Indian LV switchgear |
| IS 17387 | Inverter grid interconnection |
| CEA Measures Relating to Safety 2023 | Indian safety requirements |

## Common mistakes

Using AC isolator on DC circuit.

Inadequate voltage rating for system DC voltage.

Skipping lockout provision.

Unbranded isolator failing early.

Wrong pole count for array configuration.

Operating isolator under fault condition (welding contacts).

## Key takeaways

Isolators are manual safety disconnects required on both DC and AC sides of solar PV installations. Indian compliance requires IEC 60947-3 or IS 13947 certified devices, with appropriate voltage and current ratings, IP65 enclosure for outdoor use, and lockout provision for LOTO. Quality branded isolators last 10,000+ operations; unbranded units fail early. CEIG and DISCOM commissioning verify isolator presence at required locations.

## Need safety-compliant isolators for your solar?

QBits Energy supplies and installs IS 13947 and IEC 60947-3 certified DC and AC isolators for residential, C&I and utility solar installations across India.

## Sources

- IEC 60947-3, Switches, disconnectors, switch-disconnectors and fuse combination units.
- IS 13947, Indian LV switchgear.
- IS 17387, Inverter grid interconnection.
- CEA Measures Relating to Safety and Electric Supply Regulations 2023.
- Manufacturer documentation from Schneider Electric, ABB, Phoenix Contact, Siemens.
- IS 60898, Circuit breakers (for comparison).
- IEC 62548, PV array design.
- IEEE Standard Dictionary of Electrical and Electronics Terms.
- IEC 60529, IP ratings.
