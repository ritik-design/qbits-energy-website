---
title: "Solar Inverter for Hospital, Continuity and THD"
excerpt: "A solar inverter for hospital use must deliver zero-transfer-time switching, <3% THD, and NABH-compatible backup for ICU, OT, and life-safety loads. Here is how to specify one."
description: "Specify a solar inverter for hospital use: hybrid topology, THD limits, NABH and NBC 2016 compliance, dual-source switching, and 50–200 kW sizing."
category: "Buying Guide"
date: 2026-06-05
updatedDate: 2026-10-14
readTime: "18 min"
image: "/og/blog-solar-inverter-for-hospital.webp"
author: "Keyur Rakholiya"
keywords:
  - solar inverter for hospital
  - hospital solar system India
  - hybrid inverter for healthcare facility
  - THD medical equipment solar
  - NABH solar compliance India
faqs:
  - q: "Can a hospital run entirely on solar power in India?"
    a: "A hospital can offset only part of its energy consumption with rooftop solar, typically about 10–20% of annual use because a 24-hour hospital's load is large relative to its roof area, and it cannot rely on solar alone. Critical loads - operating theatres, ICUs, ventilators, and imaging equipment - require uninterruptible power with zero-transfer-time switching and THD below 3%. Solar combined with a hybrid inverter and battery bank covers non-critical loads such as HVAC, lighting, and general outlets, while a dedicated online double-conversion UPS continues to protect life-safety circuits."
  - q: "What THD level is safe for medical equipment in a hospital solar installation?"
    a: "Medical-grade equipment - including anaesthesia machines, ventilators, infusion pumps, and diagnostic imaging systems - is sensitive to power quality disturbances. IEC 60601-1 recommends that medical electrical equipment operate within supply-voltage THD of 3% or less. A high-quality hybrid solar inverter with an active filter stage typically delivers 2–3% THD. Confirm the inverter's THD specification at full load in the datasheet before procurement, since many budget inverters advertise low THD only at partial load."
  - q: "Does a hospital solar installation need to comply with NABH standards?"
    a: "NABH accreditation standards require that hospitals maintain continuous power to critical areas without interruption. Specifically, the Facility Management and Safety module mandates documented backup power plans, tested transfer-switch response times, and periodic maintenance logs for all electrical systems. A hospital solar system must therefore include automatic source changeover, sufficient battery reserve for the mandated minimum (typically 2–4 hours for essential services), and documented commissioning records that an NABH auditor can verify."
  - q: "What size solar system does a 100-bed hospital in India typically need?"
    a: "A 100-bed private hospital in India typically consumes 80,000–120,000 kWh per month, driven by central air-conditioning, medical equipment, lighting, and kitchen loads. A rooftop solar system of 100–150 kW, which is what the roof of such a hospital can usually take, would generate about 125,000–187,500 kWh a year at 1,250 kWh/kWp, offsetting roughly 9–20% of annual consumption; offsetting 40–50% would need several times that capacity and roof area. Non-critical loads - corridors, parking, administration blocks, and water heating - are the primary solar candidates. Critical clinical loads retain UPS and DG backup. Exact sizing requires a detailed energy audit and a 12-month consumption profile from the DISCOM billing data."
  - q: "Can a hospital qualify for accelerated depreciation on its solar inverter?"
    a: "Yes. Solar energy systems qualify for accelerated depreciation of 40% (written-down-value basis) under the Income-tax depreciation rules, subject to the asset being used for the hospital's business and to the first-year rate being halved if it is used for fewer than 180 days in the year. Whether a hospital can claim it depends on its tax status (a charitable trust, for example, is treated differently from a company), so confirm treatment with your accountant. In the illustrative 120 kW Pune model later in this post, a grid-offset-only calculation gives a payback of about 5.8 years, adding diesel savings brings it to about 4.2 years, and counting the Year-1 depreciation shield at a 30% tax rate brings it to about 3.7 years (all pre-tax, flat tariffs)."
  - q: "What is the transfer time for a hybrid inverter during a grid outage, and why does it matter for hospitals?"
    a: "A standard hybrid solar inverter achieves a transfer time of 10–20 milliseconds when grid power fails, switching seamlessly to battery. This is fast enough for computers and general appliances but may cause momentary disruption to sensitive medical equipment. Online double-conversion UPS systems operate at zero transfer time because the load is always on the inverter output - the grid charges the battery but is never directly in the power path. For ICU and OT loads, an online UPS is mandatory; hybrid inverters are appropriate for non-critical hospital zones."
  - q: "How does a hospital solar system interact with a diesel generator (DG)?"
    a: "Most hospital solar systems in India operate in a three-source configuration: grid, solar with battery, and DG. During normal grid availability, solar handles the daytime base load and exports surplus through [net metering](/glossary/net-metering/). When the grid fails, the hybrid inverter switches to battery, while the DG auto-starts after a preset delay (typically 30–60 seconds). A well-designed automatic mains failure (AMF) panel ensures the DG does not back-feed solar generation and the inverter does not run in anti-islanding shutdown mode during DG operation. Solar cuts DG fuel burn during daytime outages because it carries part of the load; in the illustrative model later in this post that is about 8,000 litres a year, and the saving depends on how many DG hours fall in daylight."
  - q: "Is net metering available for hospitals in India?"
    a: "Yes. Hospitals registered as commercial consumers are eligible for net metering under each state's SERC regulations, subject to the sanctioned load and distribution company (DISCOM) approval. Most states permit commercial net metering up to the sanctioned load capacity. Export tariffs vary from ₹2 to ₹4 per kWh depending on the state, and the annual settlement typically offsets the hospital's electricity bill directly. Hospitals with 24-hour operation and relatively flat consumption profiles tend to see better net metering economics than facilities with pronounced daytime demand peaks."
  - q: "What certifications should a hospital administrator verify before purchasing a solar inverter?"
    a: "Ask for the exact model's BIS registration under the applicable PV inverter safety standard (IS 16221), the test reports or certificates for the grid-connection and EMC requirements your DISCOM applies, and the datasheet IP rating. MNRE publishes ALMM lists for modules and cells only, so there is no ALMM check for the inverter itself, though the modules do need to be ALMM-listed. For a hospital, also have your electrical consultant confirm that the declared THD, transfer behaviour and protection settings suit your critical-load requirements."
  - q: "How does solar affect a hospital's carbon reporting and ESG commitments?"
    a: "A 100 kW solar installation in India displacing grid power at an emission factor of 0.71 kg CO2/kWh ([CEA grid emission factor for the national grid](https://cea.nic.in/)) and generating about 125,000 kWh a year (1,250 kWh/kWp) avoids approximately 89 tonnes of CO2 per year (125,000 kWh × 0.71 kg). Over a 25-year life with 0.5% annual degradation, this amounts to about 2,100 tonnes of avoided emissions. Use the current version of the CEA CO2 baseline database for the emission factor in a formal report. For hospitals pursuing NABH-Green or pursuing corporate ESG targets, documented solar generation data - exportable from the monitoring system - provides the audit trail needed for sustainability reports and third-party carbon assessments."
---

> **ALMM and inverter compliance:** MNRE's current ALMM page publishes solar PV module and cell lists, not an inverter list. Verify the inverter's exact model documents and applicable scheme or DISCOM requirements separately.

Hospital administrators approaching a solar investment for the first time often frame the question the same way they would for a factory or a school: how many kilowatts, what is the payback, can the rooftop accommodate the panels? Those are reasonable starting points, but they miss the defining constraint of healthcare facilities, the fact that a power interruption in an operating theatre or an ICU is not merely an inconvenience. It is a clinical hazard.

A solar inverter for hospital use is, therefore, an entirely different specification exercise compared to a commercial rooftop installation. The technology stack must address zero-transfer-time switching for life-safety loads, power quality limits that protect sensitive medical electronics, regulatory compliance with national building codes and accreditation standards, and a multi-source architecture that keeps solar, grid, battery, and diesel generation working in coordination without creating islanding or back-feed hazards.

This guide works through each of those requirements in the sequence a procurement committee would address them, from load classification through inverter topology selection, THD compliance, NABH requirements, DG displacement economics, and finally the sizing logic for a typical 50–200 kW Indian hospital system.

> [!KEYTAKEAWAYS]
> - A hospital needs three inverter tiers: online double-conversion UPS for Tier 1 life-safety loads (zero transfer time), hybrid inverters for Tier 2 essential clinical loads (10–20 ms transfer), and standard hybrid or on-grid inverters for Tier 3 non-critical loads.
> - Medical equipment requires THD below 3% at full load, verified with a third-party power quality analyser during commissioning, not just a datasheet claim measured at partial load.
> - NBC 2016 and NABH Facility Management and Safety standards both require documented, tested automatic changeover and updated single-line diagrams as part of the audit file.
> - A 100-bed hospital using about 90,000 kWh a month is usually roof-limited to 100–150 kW of solar, which offsets roughly 9–20% of its annual consumption rather than half; in the worked model below, DG fuel savings are about 40% of gross annual savings.
> - In the illustrative 120 kW Pune model, payback is about 4.1–4.4 years and pre-tax IRR about 22–24% with DG fuel savings included, against roughly 5.7–6.1 years and 15.5–17% on grid savings alone. These depend on the assumed DG hours, tariff and diesel price, so replace them with your own.

> **Direct answer.** A solar inverter for hospital must deliver a hybrid topology for non-critical loads, online double-conversion UPS for life-safety circuits, THD below 3% for medical equipment compatibility, and automatic source changeover compliant with NBC 2016 and NABH facility management standards. The Hospital Power Continuity Framework (classifying loads into three tiers, matching inverter topology to each tier, and sizing battery reserve accordingly) is the correct specification sequence. A 100-bed hospital's roof typically supports 100–150 kW of solar, which offsets roughly 9–20% of its annual energy consumption.

The first concept to establish is load classification, because the same solar inverter cannot serve every outlet in a hospital with equal safety. The Hospital Power Continuity Framework, described in the next section, provides the systematic approach.

## Why On-Grid Solar Alone Is Unsafe for a Hospital

An on-grid solar inverter (the standard choice for factories, offices, and homes) is designed to feed power into the grid and to the local load simultaneously. When the grid fails, it shuts down automatically through its anti-islanding protection. This is a safety requirement under [IEC 62116](https://www.iec.ch/) and the [Central Electricity Authority (CEA) Grid Code](https://cea.nic.in/): an inverter must not continue generating power into a de-energised grid segment, because line workers on the distribution network could be electrocuted by back-fed current.

For a hospital, that mandatory shutdown is catastrophic on two levels.

First, the shutdown itself removes solar power from the facility at exactly the moment grid failure occurs. The hospital is suddenly running on only its diesel generators or, in the period before the DG auto-starts (typically 30–60 seconds), on nothing at all. Second, an on-grid inverter has no battery and therefore no capacity to bridge the gap between grid failure and DG pickup.

> [!CAUTION] Never disable anti-islanding
> The [anti-islanding](/glossary/anti-islanding/) protection embedded in every grid-tied inverter is not a design flaw, it is a mandatory safety feature. The solution for hospitals is not to disable it but to adopt a topology that is inherently safe during outages: the hybrid inverter with battery storage for non-critical loads, and an online UPS for clinical loads.

Table: Inverter types compared on outage behaviour, backup, THD and hospital suitability

| Inverter Type | Grid Outage Behaviour | Battery Backup | THD at Full Load | Suitable for Hospital Critical Loads? |
| --- | --- | --- | --- | --- |
| On-grid (string) | Shuts down immediately | None | 2–4% | ✗ No - zero backup |
| Hybrid (HF transformer) | Switches to battery, 10–20 ms | Yes | 2–4% | Partial - non-critical only |
| Online double-conversion UPS | Zero transfer time | Yes | <2% | ✓ Yes - OT, ICU, life-safety |
| Off-grid inverter | Isolated from grid | Yes | 3–5% | ✗ No - cannot net-meter |

The table above summarises why the correct hospital solar architecture is not a single product category but a layered system: hybrid inverters for the non-critical wing of the building, online UPS for the clinical floors, and a co-ordinated AMF panel managing all sources.

## The Hospital Power Continuity Framework

Specifying a solar system for a hospital begins with load classification, not inverter selection. Inverter topology follows from the load tier; battery sizing follows from the tier's reserve requirement. The Hospital Power Continuity Framework defines three tiers.

### The 3-Tier Hospital Load Classification

1. **Tier 1, Life-Safety Loads**: Operating theatres, ICUs, cardiac catheterisation labs, ventilators, anaesthesia machines, patient monitoring systems, and emergency lighting. These loads require zero-transfer-time power continuity. Acceptable topology: online double-conversion UPS fed from a combination of grid, battery, and a solar DC bus via a charger. Solar reduces the charging current drawn from the grid but is never the sole source.

2. **Tier 2, Essential Clinical Loads**: Radiology and imaging rooms (X-ray, CT, MRI), laboratory analysers, pharmacy refrigerators, nurse call systems, and fire alarm panels. These tolerate 10–20 ms transfer time (the range a quality hybrid solar inverter can achieve) but not the 30–60 second DG auto-start delay. Acceptable topology: hybrid inverter with sufficient battery to bridge the DG pickup, plus DG as the downstream backup.

3. **Tier 3, Non-Critical Loads**: Administration blocks, corridors, parking areas, guest lifts, water heating systems, general HVAC zones, and cafeteria equipment. These tolerate brief outages and represent the primary solar opportunity. Acceptable topology: hybrid solar inverter, on-grid if backup is not required, or a multi-mode inverter that prioritises solar self-consumption.

Applying this framework before issuing a Request for Proposal transforms the specification document from a generic "solar rooftop system" into a technically precise scope that an EPC contractor can price accurately and that an NABH auditor can verify against the facility's power management plan.

## THD and Power Quality: The Medical Equipment Constraint

[Total Harmonic Distortion (THD)](/glossary/thd/) is the ratio of the combined power of all harmonic frequency components to the power of the fundamental frequency (50 Hz in India). High THD in a power supply causes heating in motor windings, erratic sensor readings, data corruption in microprocessor-controlled equipment, and interference with sensitive analogue signals, all of which are directly relevant to medical electronics.

The IEC 60601-1 standard for medical electrical equipment specifies that devices must function correctly when supplied from a source with THD up to 10%. However, this is a survivability limit, not a performance limit. Equipment manufacturers typically design for a supply THD below 5%, and many critical-care devices (particularly those with precision analogue front-ends) are specified for THD below 3%.

> **3%.** The THD ceiling that most medical equipment manufacturers specify for reliable operation of critical-care devices, including ventilators, anaesthesia machines, and infusion pumps. *Source - [IEC 60601-1 Medical Electrical Equipment Standard](https://www.iec.ch/), 2025.*

> [!IMPORTANT] Ask for THD at 100% load
> A mid-range hybrid solar inverter with an active filter stage delivers approximately 2–3% THD at full load. Budget inverters (particularly those without an active filter) often advertise 3% THD at 50% load but drift to 5–8% at full load. Hospital procurement should require a datasheet guarantee of THD less than or equal to 3% at 100% rated load, verified with a third-party power quality analyser as part of the commissioning report.

The [harmonics](/glossary/harmonics/) produced by the switching components inside an inverter are not the only source of power quality disturbance in a hospital. Variable-frequency drives (VFDs) on HVAC systems, MRI machines, and large CT scanners all inject harmonics back into the common bus. The solar inverter's THD spec therefore must be evaluated in the context of the overall harmonic environment, not as an isolated datasheet figure.

## NABH and NBC 2016 Compliance Requirements

The National Accreditation Board for Hospitals and Healthcare Providers (NABH) and the National Building Code of India 2016 (NBC 2016) together define the compliance environment for hospital power systems.

### NBC 2016 Electrical Requirements

The [National Building Code 2016](https://bis.gov.in/), Volume 2, Part 8 (Building Services), Section 2 (Electrical and Allied Installations) mandates that hospitals classified as Group A Buildings (defined as buildings used for medical or para-medical purposes) provide:

- A standby power source capable of restoring supply to essential services within 30 seconds of mains failure.
- Automatic changeover to the standby source with no manual intervention required.
- Separate electrical circuits for general loads and essential loads, with each circuit independently protected.
- Earthing and equipotential bonding in all clinical areas, with resistance to earth below 0.1 ohms to protect patients from micro-shock.

A hybrid solar inverter with AMF integration satisfies the 30-second standby requirement, in fact, a 10–20 ms hybrid transfer time exceeds this requirement for Tier 2 loads. However, the AMF panel must be documented and tested to demonstrate compliance, not merely assumed.

### NABH Facility Management and Safety Standards

The [NABH Facility Management and Safety](https://nabh.co/) module, applicable to all NABH-accredited hospitals, requires documented evidence of:

- A facility power management plan that identifies all critical loads and their backup power sources.
- Periodic testing of transfer switches and backup systems (typically quarterly), with test records maintained for audit.
- An equipment inventory that lists the kVA rating and backup duration for each critical load.
- Staff training records demonstrating that facility engineers understand the power system architecture.

A hospital that installs solar without updating its FMS documentation is installing the technology correctly but creating a compliance gap. The commercial and institutional EPC contractor and the hospital's facility management team must co-author an updated single-line diagram (SLD) (see [single-line diagram](/glossary/single-line-diagram/)) that reflects the post-solar architecture, and this SLD must become part of the NABH audit file.

### AERB Considerations for Imaging Facilities

Hospitals with nuclear medicine departments or radiation oncology units are additionally regulated by the Atomic Energy Regulatory Board (AERB). AERB safety codes require that radiation-generating equipment operates from a stable, monitored power source. Any solar installation that could introduce voltage transients or THD spikes to an imaging room's supply must be isolated through an isolation transformer or a separate UPS circuit. This is a standard precaution in international practice and aligns with NBC 2016's equipotential bonding requirements.

## Dual-Source Architecture: Solar, Grid, and DG Working Together

The most common architecture for a 50–200 kW Indian hospital solar installation is a three-source system: grid as the primary source, solar with battery as the continuous offset layer, and DG as the emergency backup. Orchestrating these three sources without creating safety hazards or compliance violations requires careful engineering of the AMF panel and the inverter's source-priority settings.

Table: Three-source hospital architecture: role, priority and DG coordination of each source

| Source | Role | Priority | DG Coordination |
| --- | --- | --- | --- |
| Grid | Primary supply, net metering export | 1 | AMF open DG breaker |
| Solar + Battery | Continuous offset, outage bridge | 2 | Anti-islanding active; DG sync required |
| Diesel Generator | Emergency backup, long outages | 3 | AMF closes DG breaker after 30–60 s |

The critical engineering challenge in a hospital is ensuring that the solar inverter does not shut down due to anti-islanding when the DG comes online. Standard hybrid inverters detect voltage and frequency anomalies during the DG startup transient and may interpret them as a grid event, triggering an anti-islanding shutdown. The solution is a DG-ready hybrid inverter, one that supports generator mode operation, either through a dedicated frequency-shift detection algorithm or through a separate contact signal from the AMF panel that instructs the inverter to hold online during the DG transition.

Generator mode with a configurable AMF contact input lets a hybrid inverter stay online during DG startup without producing a back-feed hazard. This is a specification point that hospital procurement teams must verify for the exact model with any inverter vendor, including Qbits, and not assume as a standard feature.

The [IRR](/glossary/irr/) of a hospital solar project improves significantly when DG displacement is included in the financial model alongside grid tariff savings and net metering income. For the illustrative Pune hospital in the financial model below, solar output during daytime DG running hours saves about 8,000 litres of diesel a year, worth roughly ₹7.9 lakh at ₹98.48 per litre, a figure that does not appear in a simple grid-offset payback calculation.

## Sizing a Solar Inverter System for a Hospital

Hospital energy consumption is higher per square metre than almost any commercial building category, driven by round-the-clock HVAC, medical equipment standby loads, and 24-hour lighting in clinical areas. A structured sizing approach avoids both the risk of undersizing (inadequate offset, poor IRR) and oversizing (excess capital, low utilisation, DISCOM rejection of the net metering application).

### The 5-Step Hospital Solar Sizing Process

<!-- steps -->
1. **Energy audit**: Pull 12 months of [DISCOM](/glossary/discom/) billing data. Calculate average monthly consumption in kWh. Identify the minimum night load (which cannot be served by solar) and the daytime peak (which solar targets directly). Typical 100-bed hospitals: 80,000–120,000 kWh/month total, with 40,000–60,000 kWh daytime consumption.

2. **Load classification**: Apply the 3-Tier Hospital Load Classification above. Identify the kW rating of Tier 3 (solar-eligible) loads. This is the maximum inverter capacity that will see consistent solar utilisation.

3. **Rooftop area assessment**: Measure the usable shadow-free area, considering HVAC units, water tanks, and setback requirements. At 6–7 Wp per square foot (65–75 Wp per square metre) for standard bifacial modules at 20° tilt, a 150 kW system requires approximately 2,000–2,300 square metres of usable roof area (150,000 W ÷ 65–75 Wp/m²).

4. **Inverter capacity selection**: Size the inverter(s) at about 91–95% of the DC array capacity (DC:AC ratio of 1.05–1.1). For a 150 kW array, two 75 kW or three 50 kW hybrid inverters provide the redundancy that a hospital's continuous-operation requirement demands. Single-inverter configurations are inappropriate for healthcare facilities.

5. **Battery sizing**: Size the battery bank to bridge the DG auto-start delay for Tier 2 loads, plus a minimum 30-minute reserve for Tier 2 loads during extended outages; the 30-minute reserve also covers the 30–60 second DG pickup. A 50 kW Tier 2 load bank with a 30-minute reserve needs approximately 28 kWh of usable battery capacity (50 kW × 0.5 h ÷ 0.90 inverter efficiency).

Table: Hospital scale versus typical consumption, recommended solar capacity and expected offset (calculated at 1,250 kWh/kWp/year, lowest capacity against lowest consumption and highest against highest)

| Hospital Scale | Beds | Typical Monthly Consumption | Recommended Solar Capacity | Expected Offset |
| --- | --- | --- | --- | --- |
| Small clinic / day hospital | 20–40 | 15,000–30,000 kWh | 30–50 kW | 17–21% |
| Medium hospital | 50–100 | 40,000–80,000 kWh | 75–125 kW | 16–20% |
| Large hospital | 150–300 | 100,000–200,000 kWh | 150–250 kW | 13–16% |
| Teaching / tertiary hospital | 300–600 | 250,000–500,000 kWh | 300–500 kW | 10–13% |

The offset percentages are modest because rooftop capacity is limited by roof area while a hospital's round-the-clock load is not. Larger hospitals also carry a higher share of night loads (ICU, emergency, CSSD) and continuous standby draws that cannot be served by solar without a disproportionately large battery system.

## Common Specification Mistakes in Hospital Solar Projects

Hospital solar projects fail (or create compliance exposure) most often because of specification errors made before the EPC tender is issued, not because of poor installation workmanship. The following mistakes appear repeatedly across hospital procurement reviews.

**Mistake 1: Specifying an on-grid inverter to reduce cost.** The upfront saving of ₹2–4 Lakh on a 100 kW installation disappears against the cost of a single NABH non-conformance finding or a grid outage that forces an OT rescheduling. [Hybrid inverters](/glossary/hybrid-inverter/) are the correct baseline topology for any healthcare facility with backup power requirements.

**Mistake 2: Not verifying THD at full load.** Datasheet THD figures are routinely measured at 50% or 75% load, where harmonic performance is better. A hospital should require the THD certificate from the manufacturer at 100% rated load, and should commission an independent [power factor](/glossary/power-factor/) and THD measurement during the [commissioning](/glossary/commissioning/) test, with the results recorded in the NABH FMS file.

> [!WARNING] Keep solar off the critical load bus
> **Mistake 3: Installing solar on the critical load bus.** Some EPC contractors, attempting to maximise solar utilisation, propose connecting the inverter output to the critical load distribution board. This creates a scenario where an inverter failure (however rare) directly affects Tier 1 life-safety loads. Solar inverters belong on the non-critical bus only. The critical bus must retain its dedicated UPS and DG feed without solar in the circuit.

**Mistake 4: Omitting DG coordination from the scope.** A solar inverter that anti-islands during DG startup leaves Tier 2 loads unpowered for the DG startup transient (30–90 seconds). This is not a theoretical risk, it is the most common failure mode reported during commissioning of hospital solar installations in India. Specify a DG-compatible inverter and commission the AMF coordination with the DG running.

For a broader discussion of how to evaluate vendor reliability before committing to a project of this scale, the [solar inverter reliability guide](/blog/how-to-evaluate-solar-inverter-reliability/) provides a scoring methodology applicable to hospital procurement decisions, and the [solar inverter manufacturers in India evaluation guide](/blog/solar-inverter-manufacturers-in-india/) covers the certification and warranty-infrastructure checks a procurement committee should run before shortlisting vendors.

## Financial Model: DG Displacement and IRR for a 100 kW Hospital Solar Installation

The financial case for a hospital solar system is stronger than a standard commercial rooftop project when the full cost stack is included. Most financial models presented by EPC contractors show only grid tariff savings. The [complete financial model](https://surgepv.com/generation-financial-tool/) must include DG displacement savings, [accelerated depreciation](/glossary/accelerated-depreciation/) benefit, and the avoided cost of battery replacement for the standalone UPS bank.

Assume a 100-bed private hospital in Pune, Maharashtra. Every input below is an illustrative assumption, not a measured result or a quotation:

- Monthly grid consumption: 90,000 kWh (1,080,000 kWh/year)
- Avoided grid tariff: ₹9.5 per kWh, an assumed all-in commercial rate; replace it with the energy-charge rate on your own bill
- Diesel: ₹98.48 per litre (Maharashtra retail price on 14 October 2026, per [CarDekho](https://www.cardekho.com/diesel-price)); DG output taken as 3.5 kWh per litre
- DG: 200 kVA, running 1,800 hours a year, of which 700 hours fall in daylight with the solar plant online
- Solar: 120 kW, generating 150,000 kWh a year (1,250 kWh/kWp, an assumed yield below the 1,423 kWh/kWp that 5.0 peak sun hours and a 0.78 performance ratio would give); 150,000 kWh is about 14% of the hospital's annual consumption
- Solar output carried by the DG circuit during those 700 hours: an assumed average of 40 kW, so 28,000 kWh displaces DG output (8,000 litres) and the other 122,000 kWh displaces grid supply
- All 150,000 kWh is consumed on site (daytime consumption of 40,000+ kWh a month far exceeds the plant's 12,500 kWh a month), so there is no export credit
- O&M: ₹750/kWp/year (₹90,000)

Table: Annual savings in the illustrative 100-bed Pune hospital model

| Savings Category | Annual Value |
| --- | --- |
| Grid tariff savings (122,000 kWh × ₹9.5) | ₹11,59,000 |
| DG fuel savings (8,000 L × ₹98.48) | ₹7,87,840 |
| **Gross annual savings** | **₹19,46,840** |
| Less O&M (120 kW × ₹750) | −₹90,000 |
| **Net annual savings (Year 1)** | **₹18,56,840** |

Against a [capital cost](/blog/solar-inverter-installation-cost/) of approximately ₹75–80 lakh for the 120 kW system (including civil, electrical, and AMF integration; an assumed figure, so get quotes), the simple [payback](/blog/solar-inverter-payback-period/) is ₹77.5 lakh ÷ ₹18.57 lakh ≈ 4.2 years (4.1–4.4 years across ₹75–80 lakh), with a pre-tax IRR of about 22–24% over 25 years allowing for 0.5% annual degradation and 3% O&M escalation at flat tariff and diesel prices. Applying 40% accelerated depreciation in Year 1 for a 30% tax-bracket entity (40% × 30% × ₹75–80 lakh = ₹9.0–9.6 lakh) reduces the net cost to about ₹66–70 lakh and shortens payback to about 3.6–3.8 years with an IRR of about 26–27%. Confirm tax treatment with your accountant.

```chart
type: bar
title: Simple payback for the illustrative 120 kW Pune hospital system (₹77.5 lakh CAPEX)
unit: "years"
decimals: 1
source: "Calculated in this article from the model inputs above: CAPEX divided by Year-1 net savings (grid-only savings ₹13.35 lakh; with DG savings ₹18.57 lakh; with the Year-1 depreciation shield, net CAPEX ₹68.2 lakh)."
note: "Pre-tax, flat tariff and diesel price. Lower is better. Inputs are assumptions, not measured results."
data:
  - { label: "Grid savings only", value: 5.8 }
  - { label: "Grid + DG fuel savings", value: 4.2 }
  - { label: "Grid + DG + depreciation", value: 3.7 }
```

Grid-only payback in the chart is ₹77.5 lakh ÷ ₹13.35 lakh = 5.8 years (5.7–6.1 across ₹75–80 lakh). The DG fuel component, about 40% of gross annual savings (₹7.88 lakh of ₹19.47 lakh), is frequently omitted from EPC proposals, which is why a grid-only model understates this hospital's return. It is also the most assumption-dependent line: it rises and falls with the number of daylight DG hours, the solar output at those hours and the diesel price. Hospital administrators should insist on a three-source financial model, with the DG-hour assumption stated, before comparing competing quotations.

For a foundational understanding of how to compare on-grid versus hybrid financial returns, the [on-grid vs hybrid solar inverters ROI](/blog/on-grid-vs-hybrid-solar-inverters-roi/) analysis provides the framework. The [solar vs diesel generator India](/blog/solar-vs-diesel-generator-india/) post covers the DG displacement maths in greater detail for facilities that run DG as a primary backup.

## Inverter Topology Comparison for Hospital Applications

Not all hybrid inverters are equivalent in the context of healthcare facilities. The topology (particularly the switching architecture and the presence of an isolation transformer) determines both the THD performance and the safety behaviour during source transitions.

### High-Frequency Transformerless Hybrid

This topology dominates the Indian market in the 5–50 kW range. It offers high efficiency (97–98%), compact form factor, and cost-effectiveness. THD is typically 2–4% at full load with an active filter. Transfer time is 10–20 ms. This topology is appropriate for Tier 2 and Tier 3 hospital loads. It is not appropriate for Tier 1 loads or for clinical environments that require galvanic isolation from the solar DC bus.

### Low-Frequency Transformer-Based Hybrid

The transformer-based topology provides inherent galvanic isolation between the DC and AC sides, which is valued in clinical environments where equipotential bonding requirements are strict. THD is typically 2–3%. Transfer time is 10–20 ms. The transformer adds weight and cost but provides a more reliable foundation for medical-grade power quality. This topology is preferred for Tier 2 loads in large hospitals and for installations where the AERB or hospital biomedical engineering team has specified isolation.

### Online Double-Conversion UPS (Solar-Integrated)

For Tier 1 loads, the correct product category is an online double-conversion UPS with a solar DC charging input. The load is always on the UPS output, neither grid nor solar ever directly energises the clinical load. The UPS rectifier draws from grid (or DG) to charge the battery; a solar charge controller adds solar DC to the battery bus, reducing rectifier current. Transfer time is genuinely zero. THD on the output is typically below 2%. This product category is specified by biomedical engineers and facility managers jointly, not by the solar EPC contractor acting alone.

The [solar inverter vs UPS](/blog/solar-inverter-vs-ups/) comparison covers the architectural differences in greater detail, and is a recommended reading for facility managers who need to explain the topology selection to their biomedical engineering committee.

## Where Qbits Fits in a Hospital Solar System

Hospital power systems are safety-critical. Qbits' public datasheets do not list AI, WhatsApp, energy-balance reporting or SCADA-replacement capability as features of every model. The responsible hospital engineer must define monitoring, alarms, redundancy, isolation, transfer and power-quality requirements, then verify the exact equipment and integration design.

- **[Hybrid Inverters](/hybrid-inverter/)**: Review current QBH model documents and confirm the exact battery, firmware, PV, backup-output, transfer, communication, warranty and project requirements in writing.
- **[C&I Solar Solutions](/c-i-solution/)**: Ask which engineering or project services are available and obtain the responsible party, deliverables and exclusions in writing.
- **[Download Datasheets](/download-datasheets/)**: Start with public model specifications, then request any THD evidence, efficiency curve or interface drawing required for the exact design.
