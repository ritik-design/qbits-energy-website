---
title: "Case Study, 200 kW Solar at a Chennai IT Park"
excerpt: "How a Chennai IT park installed 200 kW of rooftop solar to cut power costs, meet ESG targets, and navigate TANGEDCO's net metering process for HT commercial connections."
description: "How a Chennai IT park sized a 200 kW rooftop solar system: load profile analysis, TANGEDCO HT net metering, power quality, and a 20-year financial model."
category: "Case Study"
date: 2026-06-05
updatedDate: 2026-07-08
readTime: "14 min"
image: "/blog-images/solar-epc-india.svg"
author: "Nirav Dhanani"
keywords:
  - commercial solar installation chennai
  - it park solar india
  - tangedco net metering ht connection
  - 200kw rooftop solar india
  - commercial solar esg reporting
faqs:
  - q: "What makes a solar installation for an IT park different from a standard commercial rooftop?"
    a: "IT parks have three characteristics that require specific design attention. First, they operate 24/7 - servers, cooling, and security systems run through the night - so a solar system must be sized against the daytime fraction of consumption only, not total consumption. Second, they have stringent power quality requirements: IT equipment (servers, UPS, switches) is sensitive to voltage transients, harmonics, and frequency instability. Third, they typically have very high connected loads on HT connections (above 100 kW demand), which means a different grid interconnection process - HT net metering - compared to standard LT residential net metering. Each of these factors changes how the system is designed and commissioned."
  - q: "How does TANGEDCO's HT net metering process differ from residential net metering?"
    a: "For HT commercial connections in Tamil Nadu, TANGEDCO requires a separate protection relay panel (REF or distance relay) that isolates the rooftop solar from the grid during a utility fault. The utility must inspect and approve this protection panel before energising the solar system. For HT consumers, the net metering settlement is done on a monthly basis with a banking facility - excess units exported in a month can be banked and offset against future consumption bills for up to one financial year. The approval timeline for HT net metering in Tamil Nadu is typically 45–90 days from application submission, longer than the 30–60 day residential LT timeline."
  - q: "What is the self-consumption ratio for a 24/7 IT facility, and how does it affect solar economics?"
    a: "A 24/7 IT facility typically achieves 65–75% self-consumption of solar generation, compared to 40–55% for a typical daytime commercial building. The higher self-consumption occurs because the facility's servers and HVAC continue running through the afternoon peak solar generation window. Higher self-consumption is economically favourable because each unit consumed directly replaces a grid unit at ₹8–10/unit (TANGEDCO HT tariff), whereas exported units receive a lower feed-in tariff credit. In our illustrative Chennai IT park example, the 200 kW system with 75% self-consumption delivers a significantly better financial return than the same system at a business that operates only daytime hours."
  - q: "How is rooftop solar integrated with an IT park's existing UPS and diesel generator?"
    a: "Integration with the existing electrical infrastructure requires careful engineering. The rooftop solar should feed directly into the LT bus before the UPS - so the UPS 'sees' a lower net load from the grid. The solar inverter must be configured to maintain output stability within the voltage and frequency tolerance that the UPS expects (typically ±5% voltage, ±0.5 Hz frequency). If the IT park has a diesel generator for backup, the solar inverter must be programmed to reduce output or shut down when the generator is feeding the bus - on-grid solar inverters do not operate in parallel with generators without a transfer switch and synchronisation logic."
  - q: "How does rooftop solar contribute to ESG reporting for an Indian IT company?"
    a: "Solar generation data can be included in Scope 2 greenhouse gas emission reduction calculations under the GHG Protocol Corporate Standard, which most multinational IT companies follow for ESG reporting. The inverter monitoring system generates generation logs - in kWh units - that can be converted to CO2 equivalent using the Central Electricity Authority's national grid emission factor (currently 0.716 kg CO2/kWh for 2023–24). For an IT park generating 2.8 lakh kWh annually, this represents approximately 200 tonnes CO2 equivalent reduction per year, which is reportable in BRSR (Business Responsibility and Sustainability Reporting) filings required by SEBI for listed companies."
  - q: "What is the typical payback period for a 200 kW commercial solar system in Chennai?"
    a: "For a 200 kW system installed at an HT commercial connection in Chennai with TANGEDCO tariff rates (approximately ₹8.5–9.5/unit for HT consumers), the financial model typically shows a simple payback period of 4.5–5.5 years with CAPEX financing, or 4.0–4.8 years when accelerated depreciation (40% in Year 1 under Income Tax Act) is applied. The 25-year IRR typically falls in the 22–28% range depending on the exact tariff category, the proportion of self-consumption vs export, and the system's specific shading and generation profile. These figures apply to installations with a capacity utilisation factor of approximately 18–20%, which is typical for Chennai's solar irradiation zone."
---

[Data to be confirmed by Qbits ops team before publish, all generation numbers, tariff figures, project timeline details, and financial outcomes in this [case study](/blog/case-study-coimbatore-school/) are illustrative, based on system specifications and TANGEDCO tariff orders current as of June 2026. Do not publish without verification from the client and the Qbits commercial team.]

An IT park generating revenue around the clock cannot afford power disruptions. But in Chennai (where TANGEDCO HT tariff rates have crossed ₹9/unit for high-demand commercial consumers) the electricity bill line item was large enough to attract board-level attention.

This [case study](/blog/case-study-punjab-dairy/) documents the engineering, approval, and financial journey of a 200 kW rooftop solar system installed at a Chennai IT park: how the system was designed for a 24/7 load profile, how the TANGEDCO HT [net metering](/glossary/net-metering/) process was navigated, how power quality risk was managed, and what the numbers look like at month 18 of operation.

> **Direct answer.** A 200 kW solar installation at a 24/7 IT park in Chennai requires three design decisions that differ from standard commercial solar: daytime-only sizing (not total consumption), HT [net metering](https://www.heavengreenenergy.com/blog/net-metering-in-india) with protection relay panel, and power quality management to protect sensitive IT equipment. With TANGEDCO HT tariffs at ₹8.5–9.5/unit and Chennai's solar irradiation, this size system typically delivers a payback period of 4.5–5.5 years and a 25-year IRR of 22–28%.

> **TL;DR**
> - A 200 kW system was deliberately sized below the IT park's 380–420 kW daytime load floor to maximise self-consumption rather than fill the available 4,200 m² of roof.
> - Four 50 kW three-phase inverters gave roof-section independence, redundancy, and per-section monitoring instead of one 200 kW central unit.
> - TANGEDCO HT [net metering](https://www.heavengreenenergy.com/blog/solar-net-metering) required a dedicated protection relay panel and took roughly 85–110 days from DPR submission to energisation.
> - Selected inverters held output THD below 3%, protecting sensitive server, UPS, and networking loads without adding a battery system.
> - Simple payback was 4.9 years unassisted, dropping to 4.2 years with 40% accelerated depreciation; 25-year IRR ranged 22.8–26.4%.
> - Monitoring data feeds directly into BRSR Scope 2 reporting, cutting roughly three person-days of manual ESG data collection per quarter.

## The Facility and the Energy Problem

The facility is an IT services park in the OMR (Old Mahabalipuram Road) corridor (Chennai's primary IT zone) with approximately 1,500 employees across multiple floors. The building runs 24 hours, seven days a week: server rooms, HVAC chillers, workstations during business hours, and security and server cooling through the night.

**Monthly electricity profile at project start (illustrative):**

| Parameter | Value |
| --- | --- |
| Connected load (sanctioned) | 850 kVA (HT connection, TANGEDCO) |
| Average monthly consumption | 1.85 lakh kWh |
| Monthly TANGEDCO HT bill | ₹17–19 lakh |
| Tariff category | HT-II (a) - HT Industrial/Commercial |
| Fixed demand charge | ₹350/kVA/month |
| Energy charge | ₹8.60/unit (slab above 500 units/kVA) |
| [Power factor](/glossary/power-factor/) penalty trigger | < 0.85 PF |

The facility management team had already implemented energy efficiency measures: LED lighting throughout, BMS-controlled HVAC scheduling, and variable frequency drives on chiller pumps. The remaining large, controllable cost was grid power, and the rooftop offered approximately 6,000 m² of usable space.

According to [TNERC's tariff order for HT commercial consumers](https://www.tnerc.com/), TANGEDCO's commercial and industrial electricity tariff has increased at approximately 5–7% compound annual growth rate over the past five years, making solar not just a present-period economics decision but a strategic hedge against future tariff escalation. At 5% annual tariff escalation, an IT park currently paying ₹2 crore/year in electricity will pay ₹3.3 crore/year a decade from now. A solar installation today locks in approximately 30–40% of that consumption at near-zero marginal cost.

## Why 200 kW: the Sizing Decision

The temptation in commercial solar sizing is to fill every available roof space. For a 24/7 IT facility, this approach is wrong: it leads to high export during off-peak solar hours that receives a low feed-in credit rather than replacing high-tariff grid consumption.

The correct sizing logic for a 24/7 facility:

1. **Identify the daytime load floor:** What is the minimum load the facility draws during peak solar hours (10 AM–4 PM)? For this IT park, servers and HVAC ensure a minimum demand of 380–420 kW during daytime, even without workstation load.

2. **Size the solar system below the daytime floor:** A solar system generating more than the minimum daytime demand will export excess units. While exported units receive a banking credit under TANGEDCO HT net metering, the credit rate is lower than the tariff displacement rate. Staying below the daytime load floor maximises self-consumption.

3. **Apply roof shading and space analysis:** After removing HVAC equipment areas, skylights, and shaded zones, 4,200 m² of usable roof was identified, enough for 350+ kW of panels. But the sizing analysis pointed to 200 kW as the self-consumption optimised figure.

**Why 200 kW specifically:**

- Peak solar output of 200 kW system: approximately 180 kWp at system level after cable and inverter losses
- Daytime facility minimum load: 380–420 kW
- Headroom: 200–240 kW, the facility will always absorb the entire solar output without export during business hours
- Banking of any excess (cloudy days, weekends) handled through TANGEDCO HT net metering

## Equipment Selection and System Design

This stage followed a structured [commercial solar design](https://surgepv.com/commercial-solar-design/) process to translate the sizing decision into a bankable equipment list.

**Inverter configuration:**
The 200 kW system uses four 50 kW three-phase on-grid inverters in a distributed string inverter architecture. This was chosen over a single 200 kW central inverter for three reasons:

1. **Roof section independence:** The four roof sections have slightly different orientations and shading profiles. Four independent MPPT sections maximise yield from each section without compromising the others. For a full list of commissioning and post-installation checks relevant to commercial systems, see the [solar annual maintenance checklist](/blog/solar-annual-maintenance-checklist-india/).
2. **Redundancy:** If one inverter requires service, 75% of the system continues operating. For a revenue-generating IT park, total system downtime is a real cost.
3. **Monitoring granularity:** Each inverter has independent monitoring, generation data per section is visible in the monitoring dashboard, enabling fast identification of any underperforming section.

**Panel specification:**
400 Wp bifacial monocrystalline panels, [ALMM-listed](/glossary/almm-list/) (important for commercial systems applying for any future government scheme or banking benefit). Total array: 500 panels at 400 Wp = 200 kWp installed.

**Cabling and protection:**
- DC string cables: 4 mm² DC-rated cable (UV-resistant, double-insulated)
- AC feeder cables from inverters to main LT panel: 70 mm² armoured cable
- [Surge protection devices](/glossary/spd/) (SPD) at DC and AC stages rated for the Chennai coastal zone (Class II SPD minimum)
- String monitoring dongles for each inverter for remote diagnostics

**Earthing system:**
Separate GI earth electrode array for the PV system, bonded to the facility's existing [earthing](/glossary/earthing/) system per IS 3043. For coastal Chennai, earthing resistance target was below 2Ω - achieved with deep-driven copper-clad rods and chemical earthing compound. The rooftop mounting layout itself was verified against local wind-load requirements as part of the project's structural engineering sign-off.

## TANGEDCO HT Net Metering: The Approval Process

This was the most complex and time-consuming element of the project. For HT connections, TANGEDCO requires a dedicated protection relay panel that provides the following protection functions before net metering approval:

- Over/under voltage protection (27/59 relay)
- Over/under frequency protection (81 relay)
- Reverse power relay (32 relay)
- Earth fault protection (64 relay)
- [Anti-islanding](/glossary/anti-islanding/) protection per IEC 62116

The protection relay panel must be inspected and approved by the TANGEDCO chief engineer before the system can be energised and connected to the net metering arrangement. [IEC 62116, Test Procedures for Anti-Islanding Protection](https://www.iec.ch/homepage) is the international standard that governs inverter anti-islanding testing, ensuring that grid-connected solar systems disconnect within 2 seconds of utility grid loss.

**Approval timeline (illustrative):**

| Stage | Activity | Duration |
| --- | --- | --- |
| Stage 1 | DPR submission to TANGEDCO | Day 1 |
| Stage 2 | TANGEDCO technical scrutiny | 15–25 days |
| Stage 3 | Protection relay panel drawing approval | 10–20 days |
| Stage 4 | Physical installation and internal commissioning | 30 days (parallel with approvals) |
| Stage 5 | TANGEDCO site inspection | 7–15 days after application |
| Stage 6 | Meter change ([bidirectional meter](/glossary/bidirectional-meter/) installation) | 10–20 days |
| Stage 7 | System energisation and monitoring start | Day ~85–100 |

**Total approval-to-energisation timeline: approximately 85–110 days** from DPR submission for an HT connection in Tamil Nadu. This is significantly longer than LT residential net metering (30–60 days) and should be factored into project planning and any promised ROI dates.

**Key learning:** The protection relay panel drawings must be submitted in TANGEDCO's specific format and signed by a licensed electrical consultant registered with the Tamil Nadu Electrical Licensing Board. Incorrect drawing format was the single most common cause of re-submission delays in this project.

## Power Quality Management for IT Equipment

IT parks have power quality requirements that standard commercial solar deployments do not face. Server equipment, network switches, and UPS systems are sensitive to. See the [solar inverter downtime guide](/blog/solar-inverter-downtime/) for how inverter power quality affects critical commercial operations and total cost of ownership calculations:

- Voltage transients (spikes above 110% of nominal)
- Harmonic distortion ([THD](/glossary/thd/) should be below 5% for sensitive equipment)
- Frequency deviations (IT UPS typically expects ±0.5 Hz)

**How the solar system addressed power quality:**

The selected 50 kW inverters include internal IGBT-based filtering that maintains output THD below 3% across the entire operating range, well within the 5% limit specified in [IEEE 519-2022 (Harmonic Control in Electric Power Systems)](https://www.ieee.org/). For guidance on evaluating inverter THD specifications during procurement, see [how to read solar inverter datasheets](/blog/how-to-read-solar-inverter-datasheets/). The inverters are configured for voltage-following operation (not voltage-forming) so they cannot create voltage instability in the LT bus.

The facility's existing UPS infrastructure (double-conversion type, feeding server rooms directly) provides an additional layer of isolation, server equipment never sees the raw LT bus directly. The solar inverters feed into the LT bus before the UPS input, so the UPS absorbs any minor power quality variation.

**What the facility did NOT do (and why):**
The original scope included a battery system alongside the solar panels, on the assumption that batteries would improve power quality and backup duration. For the full CAPEX vs RESCO framework used for commercial decisions, the [solar CAPEX vs OPEX guide](/blog/solar-capex-vs-opex-business-india/) provides the decision matrix including battery storage scenarios. After analysis, this was not recommended: the existing double-conversion UPS already provides clean power and battery backup for the server rooms. Adding a solar-side battery would cost ₹35–50 lakh with no power quality benefit (the UPS already provides this) and minimal financial benefit (the 24/7 load means self-consumption is already high without storage).

## Generation Performance: Month 1–18 Data (Illustrative)

**Annual generation estimate at design stage:**
- Installed capacity: 200 kWp
- Chennai solar irradiation: approximately 1,750–1,900 kWh/m²/year (one of India's strongest zones)
- System efficiency: 77% (after cable losses, inverter efficiency, soiling losses, temperature derating)
- Estimated annual generation: 2.65–2.85 lakh kWh/year

**Observed generation, month 18 cumulative (illustrative, to be verified):**
- Cumulative generation: approximately 3.90 lakh kWh across 18 months
- Monthly average: approximately 21,700 kWh (consistent with design estimate of 22,000 kWh/month)
- Peak month: March (longest clear-sky days before monsoon), 26,800 kWh
- Lowest month: November (northeast monsoon, cloud cover), 14,200 kWh
- Self-consumption rate: 76% (facility absorbed 76% of generation directly; 24% exported to TANGEDCO under banking arrangement)

**Generation by season (illustrative):**

| Season | Months | Monthly Average kWh | Notes |
| --- | --- | --- | --- |
| Summer (pre-monsoon) | February–May | 25,000–27,000 | Peak irradiation, highest yields |
| Southwest monsoon | June–September | 16,000–19,000 | Significant cloud cover |
| Post-monsoon | October–November | 13,000–16,000 | Northeast monsoon cloud |
| Winter (dry) | December–January | 20,000–23,000 | Clear skies, good yields |

## Financial Analysis: 20-Year Model

**Capital expenditure (illustrative):**

| Component | Cost |
| --- | --- |
| Solar panels (500 × 400 Wp, bifacial ALMM) | ₹48,00,000 |
| Inverters (4 × 50 kW) | ₹18,00,000 |
| Mounting structure (rooftop ballasted) | ₹12,00,000 |
| DC and AC cables, conduits | ₹8,00,000 |
| Protection relay panel (HT net metering) | ₹4,50,000 |
| Earthing and surge protection | ₹2,00,000 |
| TANGEDCO fees and DPR costs | ₹1,50,000 |
| Installation and commissioning | ₹7,00,000 |
| **Total [CAPEX](/glossary/capex/)** | **₹1,01,00,000 (₹1.01 crore)** |

**Cost per Wp installed:** ₹50.5/Wp, within the ₹45–58/Wp range typical for quality HT commercial installations in 2025–26.

**Annual savings at Year 1 (illustrative):**

| Item | Value |
| --- | --- |
| Self-consumption savings (76% × 2,75,000 kWh × ₹8.60/unit) | ₹17,96,600 |
| Banking credit (24% × 2,75,000 kWh × ₹4.20/unit credit) | ₹2,77,200 |
| **Total Year 1 savings** | **₹20,73,800** |

**Key financial metrics:**

| Metric | Without Acc. Depreciation | With 40% Acc. Depreciation |
| --- | --- | --- |
| Simple [payback period](/glossary/payback-period/) | 4.9 years | 4.2 years |
| [NPV](/glossary/npv/) at 12% discount rate (25 years) | ₹2.8 crore | ₹3.1 crore |
| [IRR](/glossary/irr/) (25-year) | 22.8% | 26.4% |
| Year 25 cumulative savings | ₹6.2 crore | ₹6.5 crore |

[Accelerated depreciation](/glossary/accelerated-depreciation/) applies at 40% in Year 1 under Schedule II of the Income Tax Act for renewable energy equipment. At a 30% corporate tax bracket, this provides a tax shield of approximately ₹12.1 lakh in Year 1, reducing the effective payback period by approximately 9 months. A [solar financial model](https://surgepv.com/generation-financial-tool/) built with the facility's own tariff slabs and escalation assumptions is the fastest way to stress-test these figures before signing an EPC contract.

## ESG and Sustainability Reporting Integration

For the IT company operating this park, the solar installation is a reportable item in two frameworks that feed into its broader [ESG](/glossary/esg/) strategy:

**BRSR (Business Responsibility and Sustainability Reporting):**
[SEBI requires listed companies to report on BRSR metrics](https://www.sebi.gov.in/) including Scope 2 greenhouse gas emissions. Solar generation directly reduces Scope 2 emissions. Using the [CEA national grid emission factor of 0.716 kg CO2/kWh (2023–24)](https://cea.nic.in/cdm-co2-baseline-database/):
- Annual generation: 2.75 lakh kWh
- CO2 reduction: 2,75,000 × 0.716 = 196.9 tonnes CO2e/year
- 25-year total: approximately 4,900 tonnes CO2e (adjusting for grid emission factor decline as the grid decarbonises)

**Client sustainability reporting:**
Several multinational IT clients of this park require annual sustainability data from their facility providers as part of their own Scope 3 reporting. The inverter monitoring system provides exportable monthly generation logs in kWh format that can be shared directly with client sustainability teams.

The facility management team uses the monitoring data (available through the inverter manufacturer's cloud portal) to auto-populate their ESG dashboard monthly. This removes the manual data collection process that previously required three person-days per quarter.

## Key Learnings for EPC Teams and Facility Managers

**1. Size for self-consumption, not roof capacity.** A 24/7 facility should target a system size that stays below its minimum daytime load. Oversizing creates export that receives a lower credit rate.

**2. Budget 90–110 days for HT net metering in Tamil Nadu.** The protection relay panel requirement adds 3–4 weeks to the standard LT approval process. Project timelines should account for this, and construction can proceed in parallel.

**3. Inverter THD specification matters for IT loads.** Specify inverters with output THD below 3%. This is not a standard procurement requirement but is essential for facilities with UPS-fed server loads.

**4. Do not add batteries for power quality.** If the facility already has double-conversion UPS, adding a battery system to the solar installation does not improve power quality. The UPS already provides this. Battery additions for commercial IT parks are justified only for grid-outage resilience, not power quality.

**5. Get drawings TANGEDCO-ready before submission.** Engage a Tamil Nadu Electrical Licensing Board-registered electrical consultant for DPR and protection relay panel drawings. TANGEDCO rejections for format issues are the most common delay cause in HT approvals.

## Where Qbits Fits

Qbits' TLD three-phase on-grid inverters were selected for this installation based on three criteria that matter specifically for commercial HT applications: output THD below 3% (protecting IT load quality), active continuous isolation monitoring for ground fault detection, and cloud monitoring with API-accessible generation data for ESG reporting integration.

- **[On-Grid Inverters, TLD Three-Phase Series](/on-grid-inverter/)**: three-phase commercial inverters from 10 kW to 60 kW per unit, with THD < 3% and IP66 coastal protection.
- **[C&I Solutions](/c-i-solution/)**: Qbits' full commercial and industrial solar range including large string inverter configurations.
- **[3-Phase Solar Inverter Guide](/blog/3-phase-solar-inverter/)**: technical guide to three-phase solar requirements for commercial and industrial installations.
- **[Solar IRR and Payback Guide for C&I](/blog/solar-irr-payback-ci-india/)**: the full 20-year financial model framework for commercial solar decisions.
- **[How to Evaluate Solar EPC Bids](/blog/how-to-evaluate-solar-epc-bids/)**: 15-criteria checklist for commercial procurement teams.

For IT parks, hospitals, educational institutions, or other 24/7 commercial facilities considering rooftop solar, [talk to a Qbits engineer](/contact-us/), our commercial team can develop a site-specific generation estimate, HT net metering strategy, and financial model within 5 working days. Facilities that also need a turnkey installation partner beyond equipment supply can evaluate commercial solar installation services for end-to-end EPC delivery.
