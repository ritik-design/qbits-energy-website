---
term: "Battery SOC"
title: "Battery SOC (State of Charge): Definition, Measurement & Solar Applications"
description: "Battery SOC is the percentage of remaining charge in a battery. Full guide to measurement, estimation methods and solar storage management."
category: "Batteries"
categorySlug: "batteries"
priority: "P1"
updatedDate: 2026-06-04
keywords:
  - what is battery soc
  - state of charge battery
  - soc estimation
  - battery soc solar
  - coulomb counting
shortDefinition: "State of Charge (SOC) is the percentage of remaining usable energy in a battery relative to its full capacity. 100 percent means fully charged, 0 percent means fully discharged. SOC is the most important real-time battery metric for solar storage operation and protection."
quickFacts:
  industry: "Battery Management / Solar Storage"
  primaryUse: "Real-time battery state indicator"
  commonUsers: "Inverter EMS, BMS, customers, technicians"
  relevantStandards: "IEC 61960, IEEE 1188, manufacturer BMS specifications"
  relatedTechnologies: "BMS, coulomb counting, OCV, Kalman filter"
relatedTerms:
  - { slug: "battery-dod", term: "Battery DOD" }
  - { slug: "bms", term: "BMS" }
  - { slug: "lithium-ion-battery", term: "Lithium Ion Battery" }
  - { slug: "lfp-battery", term: "LFP Battery" }
  - { slug: "lead-acid-battery", term: "Lead Acid Battery" }
  - { slug: "cycle-life", term: "Cycle Life" }
  - { slug: "c-rate", term: "C-Rate" }
  - { slug: "open-circuit-voltage", term: "Open Circuit Voltage" }
  - { slug: "hybrid-inverter", term: "Hybrid Inverter" }
  - { slug: "off-grid-inverter", term: "Off Grid Inverter" }
  - { slug: "soh", term: "State of Health" }
  - { slug: "round-trip-efficiency", term: "Round Trip Efficiency" }
faqs:
  - q: "What is battery SOC in simple words?"
    a: "The percentage of energy left in your battery. Like the fuel gauge in a car: 100 percent full, 0 percent empty."
  - q: "How is SOC measured?"
    a: "Combination of coulomb counting (integrating current over time), open-circuit voltage measurement during rest, and increasingly Kalman filter algorithms in modern BMS."
  - q: "Is SOC same as battery percentage?"
    a: "Yes, the percentage displayed on inverter apps and BMS dashboards is SOC."
  - q: "Why is SOC important?"
    a: "It tells you how much energy is available, when to recharge, and protects the battery from over-discharge. Lithium batteries are damaged below a defined minimum SOC."
  - q: "What is the minimum SOC for LFP?"
    a: "Typically 10 to 20 percent. Below this, the BMS cuts off discharge. Some manufacturers specify 5 percent as the absolute floor."
  - q: "What is the minimum SOC for lead acid?"
    a: "50 percent for daily cycling. Going below shortens cycle life dramatically."
  - q: "Can SOC be calibrated?"
    a: "Yes. A full charge followed by a controlled discharge resets the SOC reference in most BMS implementations."
  - q: "Why does my SOC jump suddenly?"
    a: "BMS recalibration during full charge or after a long rest. Coulomb counting drifts over time and is corrected against voltage-based estimates."
  - q: "Is SOC the same on every cell?"
    a: "Ideally yes. Cell imbalance causes individual cell SOC to differ. BMS balancing functions reduce the spread."
  - q: "Can SOC go above 100 percent?"
    a: "No. 100 percent represents full charge by definition. Some apps display momentarily above 100 percent during charge tapering due to algorithm artefacts."
  - q: "Does temperature affect SOC?"
    a: "Yes. Cold reduces usable capacity. A battery at 0°C may indicate 80 percent SOC but only deliver 60 percent of nominal energy."
  - q: "What is the difference between SOC and SOH?"
    a: "SOC is right now. SOH (State of Health) is long-term degradation, the percentage of original capacity that remains."
  - q: "Why does my inverter app show different SOC than the BMS?"
    a: "Communication lag, different rounding, or the inverter using its own SOC estimator. Trust the BMS as the source of truth."
  - q: "How accurate is SOC estimation?"
    a: "Typical BMS accuracy is 3 to 5 percent. Premium BMS with Kalman filtering achieves 1 to 2 percent."
  - q: "Should I always charge to 100 percent SOC?"
    a: "For LFP yes, since 100 percent is well-tolerated. For NMC, charging to 80 to 90 percent maximises calendar life."
author: "Nirav Dhanani"
---

## What is battery SOC

State of Charge (SOC) is the percentage of remaining usable energy in a battery relative to its rated capacity. 100 percent means fully charged. 0 percent means fully discharged. SOC is the most important real-time operating metric for any battery system, used by the Battery Management System (BMS), inverter, energy management system and the user.

For solar storage, SOC informs every decision: when to charge, when to discharge, when to derate the inverter to protect the battery and when to switch to grid backup. It also gates protection cutoffs that prevent the battery from going below safe minimum.

## SOC explained simply

SOC is the battery's fuel gauge. It tells you what percentage of the tank is still full. The inverter watches it to decide whether to use the battery or the grid. The BMS uses it to decide whether to allow charging or discharging at any given moment.

The challenge is that there is no direct sensor for SOC. The BMS has to estimate it from voltage and current measurements, and the estimation algorithm matters a lot.

## Why SOC matters

Operational decision-making. EMS strategy depends on knowing current SOC.

Battery protection. The BMS cuts off discharge below a minimum SOC, preventing damage.

Backup planning. SOC reading tells the user how much backup energy is available.

Lifecycle optimisation. Operating within a healthy SOC window maximises cycle life.

Diagnostics. SOC trends reveal cell imbalance, capacity fade and BMS issues.

## How SOC is measured

There is no direct SOC sensor. The BMS estimates SOC from indirect measurements using one or more methods.

### Methods

1. Coulomb counting. Integrate current over time. SOC(t) = SOC(0) + ∫I dt / Q_nominal. Most common method. Accurate over short periods but drifts over long periods.

2. Open-circuit voltage (OCV). After a rest period, voltage is a known function of SOC. Used to recalibrate coulomb counting.

3. Kalman filter. Combines coulomb counting and voltage measurements with a battery model. Highest accuracy.

4. Impedance-based. Battery impedance varies with SOC. Specialised applications.

5. Look-up tables. Voltage and temperature mapped to SOC. Crude but cheap.

Modern lithium BMS use coulomb counting plus periodic OCV recalibration, often within a Kalman filter framework.

## Technical deep dive

### SOC formula

SOC(%) = (Remaining capacity / Rated capacity) × 100

### Coulomb counting integration

SOC(t) = SOC(t-1) + (1 / Q_rated) × ∫(I × η_coulomb) dt

Where η_coulomb is the coulombic efficiency, typically 99 to 99.9 percent for LFP and lower for older chemistries.

### OCV curve characteristics

| Chemistry | OCV curve shape | SOC estimation difficulty |
|---|---|---|
| LFP | Very flat 20 to 80 percent | Hard, needs Kalman or long rest |
| NMC | Moderately sloped | Medium |
| Lead acid | Sloped | Easy from specific gravity or OCV |

### SOC operating window

| Chemistry | Recommended operating window |
|---|---|
| LFP | 10 to 100 percent |
| NMC | 20 to 90 percent for best calendar life |
| Lead acid | 50 to 100 percent for cycling |

### Charge stages and SOC

| Stage | SOC range | Description |
|---|---|---|
| Bulk | 0 to 80% | Constant current, voltage rising |
| Absorption | 80 to 95% | Constant voltage, current tapering |
| Float | 95 to 100% | Maintenance |

## Real-world applications

Hybrid inverter charge and discharge control.

Off-grid inverter low-voltage cutoff.

EV range estimation.

Telecom backup remaining-runtime display.

Customer-facing app showing battery percentage.

Demand response participation based on available SOC.

## Advantages of accurate SOC

Maximises usable battery energy.

Prevents damage from over-discharge.

Supports informed user decisions.

Enables predictive runtime estimation.

Supports time-of-day arbitrage strategies.

## Limitations of SOC estimation

No direct sensor. All methods are indirect estimates.

Drift in coulomb counting requires periodic recalibration.

Voltage-based methods unreliable during high current flow.

LFP flat voltage curve makes voltage-based SOC noisy in mid-range.

Temperature dependence adds complexity.

## Common problems

SOC jumping suddenly. BMS recalibration event during full charge or after long rest.

Battery showing 30 percent SOC but inverter shuts down. Cell-level imbalance. One cell at minimum voltage drags down the whole pack.

App SOC differs from BMS SOC. Communication lag or different rounding. Trust the BMS.

SOC drift. Coulomb counting accumulates error. Periodic full charge resets reference.

SOC shows 100 percent but battery delivers only 70 percent of rated runtime. SOH degradation has reduced usable capacity. SOC and SOH are different metrics.

## Best practices

Choose a BMS with Kalman filter SOC estimation for serious applications.

Schedule periodic full charges to recalibrate.

Monitor SOC trends through inverter logs.

Use SOC alongside SOH for true battery health visibility.

Set EMS strategies that respect manufacturer's recommended SOC window.

Avoid running consistently at low SOC.

Audit BMS readings against actual delivered energy quarterly.

## Comparison: SOC estimation methods

| Method | Accuracy | Complexity | Use case |
|---|---|---|---|
| Coulomb counting alone | 5 to 10% | Low | Basic BMS |
| OCV alone | 10 to 20% during operation | Low | Lead acid resting |
| Coulomb + OCV recalibration | 3 to 5% | Medium | Standard modern BMS |
| Kalman filter | 1 to 2% | High | Premium BMS, EVs |
| Impedance-based | 2 to 4% | High | Specialised |

## Indian market context

ALMM-listed inverters and IS 16893 batteries used in subsidised Indian solar systems typically include BMS with coulomb counting plus OCV recalibration.

Hybrid inverter EMS strategies (self-consumption, time-of-use, backup-only) all use SOC as the primary decision input.

Customer-facing apps from Sungrow, Solis, Goodwe, Tata Power Solar and others display SOC as the battery percentage.

Off-grid systems serving rural homes use SOC-based low-voltage cutoff to prevent battery damage.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 61960 | Performance of lithium cells |
| IS 16893 | Stationary battery storage |
| IEEE 1188 | VRLA maintenance |
| Manufacturer BMS specifications | SOC algorithm and accuracy |

## Common mistakes

Trusting voltage-only SOC estimates during high-current operation.

Ignoring SOC drift over weeks of partial cycling.

Mixing SOC and SOH metrics.

Operating consistently at low SOC.

Skipping periodic full charges for LFP recalibration.

Not auditing app SOC against actual delivered energy.

## Key takeaways

SOC is the most important real-time battery metric. Modern BMS estimate SOC through coulomb counting plus OCV recalibration, often within a Kalman filter. Accuracy of 1 to 5 percent is achievable with proper hardware. SOC informs every inverter and EMS decision and protects the battery from damage. SOC is not the same as SOH, which measures long-term degradation.

## Need help with battery performance monitoring?

QBits Energy provides BMS-integrated storage solutions with accurate SOC reporting for residential, C&I and utility-scale solar projects in India.

## Sources

- IEC 61960:2017, Performance requirements for secondary lithium cells.
- IS 16893, Indian Standard for stationary battery storage.
- IEEE 1188, VRLA maintenance.
- Plett G. L., Extended Kalman Filtering for Battery Management Systems, Journal of Power Sources, 2004.
- Pop V., Bergveld H. J., Notten P., State-of-Charge Indication in Portable Applications, Springer.
- Manufacturer BMS specifications from Pylon Tech, BYD, Goodwe, Sungrow, Solis.
- NREL Technical Report TP-5400-71341, Battery State Estimation.
- BloombergNEF Battery Storage Outlook 2024.
- IEA Energy Storage Outlook 2024.
