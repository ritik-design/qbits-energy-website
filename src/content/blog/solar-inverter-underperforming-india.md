---
title: "Why Is My Solar Inverter Underperforming? 10 Causes India"
excerpt: "Solar inverter underperforming in India? The 10-Cause Underperformance Audit diagnoses partial yield loss (below expected kWh) step by step with self-diagnose guidance."
description: "10 causes of solar inverter underperformance in India: dust, thermal derating, inverter clipping, shading, panel ageing, loose DC connections, wrong string sizing, grid voltage, firmware, and monitoring misconfiguration."
category: "Maintenance"
date: 2026-06-05
updatedDate: 2026-07-08
readTime: "16 min"
image: "/blog-images/solar-inverter-troubleshooting.svg"
author: "Keyur Rakholiya"
keywords:
  - solar inverter underperforming
  - solar inverter underperformance india
  - solar inverter below expected output india
  - solar inverter partial yield loss
  - solar system underperforming india
faqs:
  - q: "What is the difference between an underperforming inverter and a non-functioning inverter?"
    a: "An underperforming inverter is running and producing AC power, but its measured output is below the expected kilowatt-hours based on current solar irradiance and installed panel capacity. A non-functioning inverter produces zero output - it has tripped, faulted, or lost grid connection. The diagnostic approach is entirely different: zero-output scenarios follow fault codes and protection trip logic; underperformance requires a systematic comparison of expected yield versus actual yield across 10 potential causes. This guide addresses underperformance only. Zero-output scenarios are covered in the solar inverter downtime guide."
  - q: "How do I calculate the expected output from my solar system?"
    a: "Expected output in kWh for a given day equals installed capacity in kWp multiplied by peak sun hours for that day multiplied by the system performance ratio. A well-maintained Indian rooftop system achieves a performance ratio of 0.75–0.85 annually. For a 5 kWp system in Delhi with 5.5 peak sun hours: expected output equals 5 × 5.5 × 0.78 = 21.4 kWh. If actual output on a clear day is consistently below 0.72 times kWp times peak sun hours, at least one of the 10 underperformance causes is active."
  - q: "What is the most common cause of solar inverter underperformance in India?"
    a: "Dust and soiling on solar panels is the most common cause, accounting for the majority of underperformance reports in Indian rooftop installations. Dust accumulation in arid zones - Rajasthan, Gujarat, northern plains - reduces panel output by 10–30% within 3–4 weeks without cleaning. This is also the easiest cause to rule out: clean the panels and recheck output the next clear morning. If output recovers by more than 8%, soiling was the primary cause. If output does not recover meaningfully, investigate the remaining nine causes in order."
  - q: "Can a firmware update on the inverter improve output?"
    a: "Yes. Inverter firmware governs MPPT algorithm behaviour, grid protection thresholds, and reactive power settings. Outdated firmware may use a less efficient MPPT search algorithm that misses the true maximum power point under variable irradiance - particularly during morning ramp-up and partially cloudy conditions. Manufacturers release firmware updates that improve MPPT tracking efficiency by 1–3% in variable conditions. For Qbits inverters, firmware updates are delivered over Wi-Fi and can be applied without a service visit using the monitoring application."
  - q: "How does inverter clipping cause underperformance?"
    a: "Inverter clipping occurs when the total panel capacity in kWp DC exceeds the inverter AC rating in kW AC. When irradiance is high enough that panels generate more DC power than the inverter can export, the inverter limits AC output to its rated capacity. The monitoring data shows a flat plateau at the inverter rated output for 2–4 hours on clear days. Clipping losses of 3–8% annually are acceptable in low-irradiance locations, but DC:AC ratios above 1.4–1.5 in high-irradiance states like Rajasthan and Gujarat cause excessive clipping that measurably reduces annual yield."
  - q: "What are loose DC connections and why do they cause underperformance?"
    a: "DC connections between solar panels and the inverter - including MC4 connectors, combiner box terminals, and string fuse holders - can develop micro-resistance over time due to thermal cycling, UV degradation of rubber seals, and vibration. A resistive connection causes voltage drop along the DC string and generates localised heat. The yield loss from a single degraded MC4 connector is typically 1–5% on the affected string. Severe loose connections can overheat and fail. Annual inspection and torque checking of all accessible DC terminals is included in the standard solar inverter maintenance checklist."
  - q: "How does grid voltage fluctuation cause inverter underperformance?"
    a: "When grid voltage at the point of common coupling rises above the inverter export voltage threshold - typically 250–253 V on a 230 V grid - the inverter reduces output to avoid injecting power above the allowed voltage limit. This is a protection response, not a fault. Sustained high grid voltage is common in lightly loaded DISCOM feeders during low-consumption periods (midday on weekdays in states with high solar penetration). Reporting sustained high voltage to the DISCOM, which must maintain supply within plus or minus 6% of 230 V under IS 12360, is the correct resolution."
  - q: "When should I call a technician rather than self-diagnosing?"
    a: "Self-diagnosis using the 10-Cause Underperformance Audit covers causes 1 through 5 and 9 through 10 without any equipment. Call a qualified technician when: the monitoring app shows a string at less than 50% of expected output and panel cleaning did not resolve it; there are burning smells or visible discolouration on the inverter or panels; a DC arc fault or ground fault event has occurred; the inverter logs recurring error codes alongside low output; or the performance ratio has declined more than 1% per year for two or more consecutive years."
  - q: "Does an older inverter underperform compared to a new one?"
    a: "Inverter conversion efficiency is highly stable throughout the service life when the unit is functioning correctly - efficiency does not degrade meaningfully with age in a healthy inverter. The more common age-related underperformance comes from outdated firmware using a less sophisticated MPPT algorithm than current standards, and from accumulated dust on cooling fins that increases thermal derating frequency. A well-maintained inverter under Qbits 12-year full replacement warranty should not show meaningful efficiency decline within its warranty period."
  - q: "Why does my solar inverter underperform in the afternoon even on sunny days?"
    a: "Afternoon underperformance on sunny days is the characteristic signature of thermal derating. Solar inverters are designed to reduce output when internal temperature exceeds the safe operating threshold - typically 40–45 °C ambient. In Indian summers, west-facing inverter installations and sealed enclosures reach these temperatures from noon onwards. The fix is ventilation improvement - clearance around the inverter, exhaust fan in enclosures, shade canopy for direct-sun mounting positions - rather than inverter replacement."
---

Your solar monitoring app shows your 5 kW system generating 16 units per day on a clear April morning. Your installer projected 22–24 units for this month. No error codes are displaying. The inverter is running normally. The generation curve looks like a normal bell shape, but you are missing 25–30% of projected output.

This is solar inverter underperformance: partial yield loss without system shutdown. Unlike an offline inverter that demands immediate attention, underperformance hides in the data and silently costs generation units day after day without triggering a single alarm.

> **TL;DR**
> - Underperformance means the inverter is running and producing power, but yield sits below the expected kWh for current irradiance, a different problem from zero-output downtime.
> - The 10-Cause Underperformance Audit orders causes from easiest to hardest to diagnose; causes 1–5 (dust, thermal derating, clipping, shading, ageing panels) resolve roughly 85% of cases without a technician.
> - A healthy Indian rooftop system runs a Performance Ratio of 0.75–0.85; a PR below 0.70 on a 7-day rolling average confirms a real underperformance condition worth investigating.
> - Dust and soiling is the single most common cause, cutting output 10–30% within 3–5 weeks in arid zones like Rajasthan and Gujarat.
> - Qbits AI monitoring surfaces 8 of the 10 causes remotely using performance ratio, per-string MPPT data, grid voltage, and inverter temperature logs.

> **Direct answer.** The 10-Cause Underperformance Audit diagnoses partial yield loss in Indian solar inverters: (1) dust and soiling, (2) thermal derating, (3) inverter clipping, (4) partial shading, (5) ageing panels, (6) loose DC connections, (7) wrong string sizing, (8) grid voltage fluctuation, (9) outdated firmware, (10) monitoring misconfiguration. Work through the causes in order, the first five resolve approximately 85% of underperformance cases without a technician.

This guide covers partial output below expected yield. If your inverter is completely offline (zero generation), see the [solar inverter downtime guide](/blog/solar-inverter-downtime/). For an extended 12-cause analysis including cable voltage drop and MPPT configuration errors, see the [solar inverter low output causes India guide](/blog/solar-inverter-low-output-causes-india/).

## Underperformance vs Downtime: Two Different Problems

The distinction between underperformance and downtime determines the entire diagnostic path. Using the wrong approach wastes time and often misses the actual cause.

| Characteristic | Underperformance | Downtime |
| --- | --- | --- |
| Inverter status | Running, producing output | Not producing - zero output |
| Monitoring app | Shows positive kWh, below expected | Shows zero generation or offline status |
| Fault codes | Usually none | Usually present (grid fault, ground fault, over-temperature) |
| First action | Run the 10-Cause Audit | Check inverter display for fault code |
| Typical resolution | Maintenance or configuration fix | Component replacement or grid fault clearance |

If your inverter shows zero output: stop here and use the [solar inverter downtime guide](/blog/solar-inverter-downtime/) instead.

If your inverter shows positive but below-expected output: the 10-Cause Underperformance Audit below is the correct process.

## How to Benchmark: Calculating Expected vs Actual kWh

Before attributing underperformance to any cause, establish the quantified gap between expected and actual yield. Estimating that "it seems lower than normal" produces unreliable conclusions.

**Performance Ratio (PR) = Actual energy output (kWh) ÷ (Installed capacity (kWp) × Peak sun hours)**

A well-maintained Indian rooftop system achieves PR of 0.75–0.85. A PR below 0.70 on a 7-day rolling average (excluding rainy days) confirms an underperformance condition requiring investigation.

**To calculate expected daily yield:**

Expected (kWh) = Installed kWp × Peak sun hours × 0.78 (baseline PR)

Example for a 5 kWp system in Bengaluru on a clear day: 5 × 5.2 × 0.78 = 20.3 kWh. If the monitoring app shows 14 kWh, the gap is 6.3 kWh, a 31% shortfall that the 10-Cause Audit will resolve.

Peak sun hours for each location and month can be retrieved from the [MNRE solar resource atlas](https://mnre.gov.in/){target="_blank" rel="noopener"} or from the monitoring application's irradiance sensor if the system has one fitted.

> **60%.** The proportion of Indian rooftop solar systems above five years old found to have at least one undiagnosed yield loss cause, identifiable through monitoring data analysis. *Source - [Mercom India, India Solar Rooftop O&M Market Report](https://www.mercomindia.com/){target="_blank" rel="noopener"}, 2025.*

## Causes 1–5: Diagnose Without Any Equipment

The first five causes account for approximately 85% of underperformance cases in Indian installations. None require a technician or test equipment, monitoring app data and a visual inspection are sufficient.

### Cause 1: Dust and Soiling

**Yield loss:** 10–30% without cleaning for 3–5 weeks in arid zones; 5–15% in coastal and urban areas.

**Self-diagnosis:** Wipe a damp white cloth across the panel surface. A visible grey or brown streak confirms active soiling. Also check for bird droppings, a single dropping on a standard 60-cell panel activates a bypass diode and reduces that panel's contribution by approximately 30%.

**Fix:** Clean panels before 9:00 AM with clean water and a soft microfibre cloth. Recheck output on the following clear day. If output recovers by more than 8%, soiling was the primary cause. For high-dust zones (Rajasthan, Gujarat, northern agricultural belt), clean every 3–4 weeks during the dry season. See the [solar output maximisation guide](/blog/maximize-solar-output-indian-climate/) for the full zone-matched cleaning schedule.

[NREL soiling research on Indian rooftop installations](https://www.nrel.gov/docs/fy16osti/65498.pdf){target="_blank" rel="noopener"} documents that Indian sites lose 15–30% of irradiance annually from dust accumulation, among the highest soiling rates globally for a grid-connected solar market of this scale.

### Cause 2: Thermal Derating

**Yield loss:** 5–20% on peak summer afternoons (April–June in most of India).

**Self-diagnosis:** Check whether the underperformance is time-specific. Normal morning output (8:00 AM–11:00 AM) followed by progressive decline after noon despite full sun is the characteristic signature of thermal derating. Confirm by checking the inverter ambient temperature log. Readings above 42 °C during output reduction periods confirm this cause.

**Fix:** Improve ventilation around the inverter. Ensure the unit is not mounted on a west-facing wall in direct afternoon sun, with at least 20 cm clearance above the ventilation slots. Clean cooling fins with a soft brush annually. For inverters in sealed enclosures, add an exhaust fan with a 38 °C thermostat. See the [solar inverter summer derating India guide](/blog/solar-inverter-summer-derating-india/) for placement rules and enclosure ventilation design.

### Cause 3: Inverter Clipping

**Yield loss:** 3–15% annually, depending on DC:AC ratio and local irradiance levels.

**Self-diagnosis:** Review monitoring data for a flat plateau in AC output on clear midday periods. If the AC power line on the monitoring graph is flat at exactly the inverter rated AC capacity for 2–4 hours while irradiance continues to rise, clipping is confirmed. Calculate the DC:AC ratio: total panel kWp divided by inverter AC kW rating. A ratio above 1.4 in high-irradiance states causes material clipping.

**Fix:** There is no low-cost post-installation remedy. If the DC:AC ratio is above 1.5 and clipping losses are significant, the options are accepting the annual clipping loss as part of the system economics or adding string capacity on an additional MPPT input. See the [inverter clipping explained guide](/blog/inverter-clipping-explained/) for India-appropriate DC:AC ratio calculations.

### Cause 4: Partial Shading

**Yield loss:** 5–50% depending on the fraction of the array shaded and whether bypass diodes are active.

**Self-diagnosis:** Walk the roof during peak sun hours (10:00 AM–1:00 PM) and observe shadows on any panel. Check for tree branch growth since installation, new water tank or antenna additions, neighbouring building construction, or bird nests at the array edge. Compare per-string MPPT data in the monitoring application, a string consistently at 60–70% of the other string's output suggests shading on the weaker string.

**Fix:** Remove or reposition movable obstructions. For permanent obstructions such as adjacent buildings, consult a [verified local installer](https://heavengreenenergy.com/solar-near-me/) about redesigning string groupings to isolate shaded panels on a separate MPPT input.

### Cause 5: Ageing Panels and Gradual Degradation

**Yield loss:** 0.3–0.8% per year standard; 1–3% per year for panels with confirmed PID, LID, or delamination.

**Self-diagnosis:** Compare current output against the same period in Year 1 at matching irradiance conditions. A decline greater than 0.5% multiplied by the system age in years suggests above-average degradation. For a 7-year-old system: expected maximum decline is 3.5%; a measured 7% decline warrants further investigation.

**Fix:** Degradation within the warranted annual rate (typically 0.5%/year) is normal and expected. Degradation above the warranted rate justifies a warranty claim with the panel manufacturer. Severe or localised degradation is detectable with an infrared thermal scan during peak irradiance hours. [IEA data on Indian solar PV field performance](https://www.iea.org/countries/india){target="_blank" rel="noopener"} shows average degradation of 0.4–0.7% per year for polycrystalline panels and 0.3–0.5% for monocrystalline PERC under Indian field conditions.

## The 10-Cause Underperformance Audit: Named Framework

The 10-Cause Underperformance Audit is the structured sequence that distinguishes the probable cause of yield shortfall. The first five causes require no equipment; causes 6–10 use monitoring data, a multimeter, or remote app checks.

### The 10-Cause Underperformance Audit

1. **Dust and Soiling**: Clean panels, recheck the next clear day. If output recovers 8% or more, this was the primary cause. Continue to Cause 2 for any residual gap.
2. **Thermal Derating**: Time-specific afternoon loss. Confirm with inverter temperature log (above 42 °C ambient). Fix ventilation or mounting position.
3. **Inverter Clipping**: Flat output plateau at rated AC capacity. Confirm with DC:AC ratio calculation. Accept or redesign.
4. **Partial Shading**: Visual walkround at 10:00 AM–1:00 PM. Confirm with per-string monitoring imbalance. Remove obstruction or redesign string groupings.
5. **Ageing Panels**: Year-on-year generation decline above warranted degradation rate. Confirm with infrared thermal scan or I-V curve tracing.
6. **Loose DC Connections**: Inspect accessible MC4 connectors and combiner box terminals. Look for discolouration or heat marks. Torque-check accessible terminals.
7. **Wrong String Sizing**: Verify actual string configuration against the inverter MPPT voltage window using the monitoring data MPPT voltage readout.
8. **Grid Voltage Fluctuation**: Log grid voltage over 7 days using monitoring app. Sustained readings above 250 V during shortfall periods confirm this cause.
9. **Firmware Outdated**: Check inverter firmware version against the manufacturer current release. Apply available updates via the monitoring app.
10. **Monitoring Misconfiguration**: Verify installed capacity, panel orientation, and system configuration data entered in the monitoring application.

Work through the list in order. Each confirmed and resolved cause reduces the measured shortfall; residual gap after one cause is resolved suggests multiple concurrent causes, common in systems above five years old. Most Indian systems with a 20%+ underperformance gap have two or three causes active simultaneously.

## Causes 6–8: Require Inspection or Monitoring Data Review

These three causes require physical inspection of DC components or review of 7-day monitoring logs. They are less frequent than causes 1–5 but meaningful when present.

### Cause 6: Loose DC Connections

**Yield loss:** 1–5% per affected string; can escalate to arc fault risk if severe.

**Background:** DC connections between panels and the inverter (MC4 connectors, combiner box terminals, and string fuse holders) develop micro-resistance over time from thermal cycling (daily temperature swings from 10 °C to 55 °C on rooftops), UV degradation of rubber seals, and vibration from wind loading. A resistive connection dissipates power as heat rather than delivering it to the inverter.

**Self-diagnosis:** Inspect all accessible [MC4 connectors](/glossary/mc4-connector/) visually. Signs of degradation: discolouration of the plastic body (yellowing or brown), heat marks on the locking ring, or difficulty in the mating action. Combiner box terminals, part of the array's [balance of system](https://heavengreenenergy.com/products/balance-of-system/), may show similar discolouration.

**Fix:** Connections showing discolouration must be replaced, do not attempt to re-crimp or remate a connection that has overheated. For in-warranty systems, contact the installer. Include DC connection inspection in the [annual inverter maintenance schedule](/blog/inverter-maintenance-india/).

**Safety note:** DC string voltages in Indian residential systems range from 300 V to 600 V. Do not disconnect DC strings without appropriate PPE and training. If uncertain, call a technician.

### Cause 7: Wrong String Sizing

**Yield loss:** 5–30% if the string voltage operates outside the inverter MPPT window.

**Self-diagnosis:** In the monitoring application, check the MPPT operating voltage. Compare it against the inverter datasheet MPPT voltage range. The MPPT voltage should operate near the string's expected Vmpp (the sum of panel Vmpp values in the string). If the monitoring shows MPPT voltage consistently at the lower or upper boundary of the MPPT range rather than near the midpoint, the string is operating outside its optimal window.

| String Sizing Scenario | Monitoring Symptom | Yield Impact |
| --- | --- | --- |
| Too few panels in string | MPPT voltage at lower boundary of range | 5–15% yield loss; poor cold-temperature performance |
| Too many panels in string | MPPT voltage at upper limit or startup problems | 10–30% yield loss; system may not start in peak summer |
| Mixed panel models in one string | MPPT voltage unstable, hunting | 5–20% yield loss depending on mismatch |

**Fix:** String re-sizing is a design change requiring panel reconfiguration. Use the [string sizing calculator](/string-sizing-calculator/) to verify optimal string voltage. The [string sizing](/glossary/string-sizing/) glossary entry explains the MPPT voltage window calculation method, and a properly reviewed [rooftop detailed engineering design](https://heavendesigns.in/solar-rooftop-detailed-engineering-design/) prevents this error from reaching installation in the first place.

### Cause 8: Grid Voltage Fluctuation

**Yield loss:** 3–10% during sustained high-voltage periods.

**Self-diagnosis:** Review the inverter grid voltage log over a 7-day period in the monitoring application. Readings above 250 V on a nominal 230 V grid during hours of underperformance confirm this cause. High grid voltage is most common at midday on weekdays in states with high solar penetration (Rajasthan, Gujarat, Tamil Nadu, Andhra Pradesh), when industrial loads are lower and solar generation across the DISCOM feeder is high.

**Fix:** Report sustained high grid voltage to the DISCOM consumer grievance cell, with the monitoring data log as evidence. DISCOMs are required under IS 12360 and state Electricity Supply Codes to maintain voltage within ±6% of 230 V (216–244 V). The DISCOM may adjust the local transformer tap setting to resolve sustained high voltage on the feeder. [CEA supply standards for electricity distribution in India](https://cea.nic.in/){target="_blank" rel="noopener"} outline the voltage quality obligations that DISCOMs must fulfil.

## Causes 9–10: Software and Configuration Causes

Two underperformance causes require no hardware inspection, they are software and configuration issues diagnosable and resolvable remotely.

### Cause 9: Outdated Inverter Firmware

**Yield loss:** 1–4% in variable irradiance conditions, cloudy sky, morning ramp-up, afternoon partial cloud.

**Background:** Inverter MPPT algorithms evolve through firmware releases. Older firmware may use a perturbation-and-observe algorithm; newer firmware uses incremental conductance or AI-assisted MPPT tracking that finds the true maximum power point faster under rapidly changing irradiance. In Indian conditions, variable irradiance from cloud cover during the monsoon shoulder months of May and September, and morning haze in industrial belts, means MPPT tracking efficiency matters more than in consistently clear desert climates.

In addition to MPPT improvement, firmware updates adjust grid protection thresholds and over-voltage response parameters that directly affect how the inverter responds to grid voltage fluctuation (Cause 8).

**Self-diagnosis:** Check the inverter current firmware version on the monitoring app or inverter screen. Contact the manufacturer or visit their website to confirm whether a newer version is available.

**Fix:** For Qbits inverters, firmware updates are delivered over Wi-Fi directly to the inverter via the monitoring application, no technician visit required. [BIS certification requirements for grid-connected inverters in India](https://bis.gov.in/){target="_blank" rel="noopener"} specify that manufacturers must provide firmware updates for known efficiency improvements throughout the product supported life.

### Cause 10: Monitoring Misconfiguration: False Low Readings

**Apparent yield loss:** Any amount, the monitoring system is reporting a shortfall that does not reflect actual generation.

**Common misconfigurations in Indian residential systems:**

- **Installed capacity entered incorrectly:** If the monitoring app records system capacity as 4 kWp but actual capacity is 5 kWp, the expected yield calculation shows a 25% shortfall that is entirely a data error.
- **Panel orientation entered incorrectly:** If the app calculates expected yield for a south-facing orientation but panels are east-facing, morning expected yield appears unmet even when the system performs correctly for its actual orientation.
- **Energy meter CT ratio miscalibrated:** External energy meters with incorrectly configured CT clamp ratios produce systematically incorrect generation readings.
- **WiFi connectivity gaps:** If the monitoring dongle loses connection for hours or days, those generation periods go unrecorded. The inverter LCD internal counter is the reference, compare it against the app.

**Self-diagnosis:** Log into the monitoring application settings and verify: installed capacity in kWp matches actual panel count and rated power; panel tilt angle and azimuth match actual installation; generation figures draw from the inverter internal measurement.

**Fix:** Correct configuration data in the monitoring application. If using an external energy meter with CT clamps, have the meter recalibrated using a reference load measurement.

## Self-Diagnose vs Call a Technician: Decision Matrix

The 10-Cause Audit is designed so causes 1–5 and 9–10 are diagnosable by the homeowner. Causes 6, 7, and 8 may require specialist involvement.

| Cause | Self-Diagnose | Technician Needed | Urgency |
| --- | --- | --- | --- |
| 1. Dust/soiling | Yes | No | Low - routine |
| 2. Thermal derating | Yes | For significant fixes | Low–Medium |
| 3. Inverter clipping | Yes | For redesign | Low |
| 4. Partial shading | Yes | For string redesign | Medium |
| 5. Panel degradation | Comparison only | IR scan and I-V curve | Medium |
| 6. Loose DC connections | Visual inspection | Yes, for replacement | High - safety risk |
| 7. Wrong string sizing | Monitoring data | Yes, for reconfiguration | Medium |
| 8. Grid voltage | Monitoring data | No (DISCOM report) | Low |
| 9. Firmware outdated | Yes | No (remote update) | Low |
| 10. Monitoring misconfiguration | Yes | No | Low |

**Call a technician immediately when:**
- A string output in the monitoring app drops below 40% of expected without any identifiable cause
- There is a smell of burning, visible discolouration, or physical damage on the inverter or wiring
- A DC arc fault or ground fault event appears in the inverter event log
- The performance ratio has declined more than 1.5% year-on-year for two consecutive years

[NREL solar PV operations and maintenance guidance](https://www.nrel.gov/grid/distributed-generation.html){target="_blank" rel="noopener"} recommends annual performance ratio audits as the minimum standard for systems above 5 kWp. [IRENA's solar O&M report](https://www.irena.org/publications/2022/Oct/Renewable-Power-Generation-Costs-in-2021){target="_blank" rel="noopener"} found that monitoring-equipped systems resolve yield loss causes 60% faster than systems diagnosed only at annual site visits.

## How Multiple Causes Stack: Multi-Cause Underperformance in Practice

A 25% yield shortfall is rarely explained by a single cause. In Indian conditions, three or four causes often act simultaneously, particularly in systems above five years old.

**Common multi-cause patterns:**

- **Summer afternoon shortfall:** Cause 2 (thermal derating) and Cause 3 (clipping) both reduce output from noon to 3:00 PM, each contributing 5–10% independently. Combined, they produce a 15–20% afternoon gap that appears dramatic but has two straightforward root causes.
- **Year-round gradual shortfall:** Cause 1 (under-cleaned for the dust environment), Cause 5 (panel degradation, year 8 system), and Cause 9 (firmware not updated in 3 years) all reducing output incrementally.
- **Sudden new shortfall:** Cause 4 (new tree growth creating morning shade on one string) combined with Cause 6 (an MC4 connector degraded during the last maintenance visit).

The audit's sequential structure ensures each resolved cause reduces the measured gap, making residual causes progressively more visible in monitoring data. A common approach is to address cause 1 first (panel cleaning), measure the remaining gap, then continue down the list until the performance ratio returns above 0.75.

## Where Qbits Fits

Qbits AI monitoring makes causes 1 through 5 and 8 through 10 visible without a site visit. The monitoring application tracks performance ratio against irradiance-adjusted expected yield, logs per-string MPPT data, records grid voltage, and monitors inverter ambient temperature, providing the diagnostic data to work through eight of the ten audit causes remotely.

For causes requiring physical inspection (DC connections (Cause 6), string reconfiguration (Cause 7), and infrared panel scanning (Cause 5)) Qbits authorised service partners carry the measurement equipment to diagnose these causes during a single visit.

- **[On-Grid Inverters](/on-grid-inverter/)**: TLS and TLD series with per-string MPPT monitoring, AI WhatsApp underperformance alerts, and 12-year full replacement warranty. Confirmed inverter-related efficiency loss is covered under warranty.
- **[Solar Inverter App Monitoring](/blog/solar-inverter-app-monitoring/)**: Configure the AI monitoring system to send WhatsApp alerts when performance ratio drops below threshold, automating detection for causes 1–4 and 8.
- **[Maximise Solar Output India](/blog/maximize-solar-output-indian-climate/)**: The proactive companion to this diagnostic guide: six levers to prevent underperformance before it develops.
- **[Solar Inverter Summer Derating India](/blog/solar-inverter-summer-derating-india/)**: Detailed treatment of Cause 2, with inverter placement rules and enclosure ventilation design.
- **[Authorised Service Partners](/authorized-service-partners/)**: Pincode-searchable network for on-site diagnosis, with the less-than-72-hour RMA SLA for inverter component replacement.

If your performance ratio is below 0.70 and the first five self-diagnosis steps have not identified the cause, [talk to a Qbits engineer](/contact-us/), the technical support team reviews monitoring data remotely and identifies the most probable cause before dispatching a service visit.
