---
title: "Solar Inverter Keeps Switching Off, What to Do India"
excerpt: "Solar inverter keeps turning off in India? Find the cause fast, grid voltage range, overtemperature, anti-islanding trips, overload. Step-by-step diagnosis inside."
description: "Fix a solar inverter that keeps switching off: diagnose grid voltage trips, overtemperature shutdowns, anti-islanding, and overload faults."
category: "Maintenance"
date: 2026-06-05
updatedDate: 2026-07-08
readTime: "11 min"
image: "/blog-images/solar-inverter-failure.svg"
author: "Keyur Rakholiya"
keywords:
  - solar inverter keeps turning off
  - solar inverter keeps switching off
  - inverter keeps tripping india
  - solar inverter shutdown reasons
  - why does my solar inverter turn off
faqs:
  - q: "Why does my solar inverter keep turning off every day around the same time?"
    a: "An inverter that trips at a consistent time of day - typically midday in summer - is almost certainly experiencing a temperature-related shutdown. Solar irradiance peaks between 11 AM and 2 PM, which also coincides with peak ambient temperature. If the inverter is mounted in a poorly ventilated location, internal temperature reaches the shutdown threshold at the same time each day. The fix is improving ventilation around the inverter. If the trip time corresponds to peak solar export in your neighbourhood (3 PM–5 PM), the cause may instead be grid over-voltage from simultaneous neighbourhood export."
  - q: "What does anti-islanding mean and why does my inverter trip during a power cut?"
    a: "Anti-islanding is a mandatory safety feature in all grid-connected solar inverters in India, required under IEC 62116 and CERC grid code. When the utility grid supply is interrupted - whether for scheduled load-shedding, a fault, or maintenance - the inverter must disconnect from the grid within 2 seconds to prevent it from energising a dead grid segment that maintenance workers may be on. This is not a malfunction; it is a deliberate and correct safety response. The inverter automatically reconnects once the grid is restored and stable, typically after a 5-minute hold period."
  - q: "My solar inverter trips at night when there is no solar generation - why?"
    a: "On-grid inverters should enter a low-power standby or sleep mode at night, not trip with a fault. A night-time trip on an on-grid inverter usually indicates a grid abnormality (frequency or voltage out of range) or an internal hardware fault. For hybrid inverters, a night-time trip is more common and may relate to battery over-discharge protection or a battery management system fault. Check your monitoring app for the exact fault code at the trip timestamp."
  - q: "How do I know if my solar inverter is overloaded?"
    a: "An overloaded inverter typically shows a fault code (OVL, Overload, E-OL) and may emit a warning beep before shutting down. The monitoring app will show AC power spiking above the inverter's rated capacity immediately before the trip. Common causes of overload include adding high-start-current appliances (air conditioner compressors, water pumps, power tools) that draw significantly more current at startup than during steady-state operation. The inverter's rated AC output is its continuous rating - short-duration spikes up to 110–120% of rated power are usually tolerated, but sustained overload causes a protective shutdown."
  - q: "Can I increase the number of times my solar inverter tries to reconnect after a trip?"
    a: "The reconnect behaviour after a protective trip is governed by the inverter's grid code settings, which in India must comply with CEA and CERC requirements. The standard reconnect sequence is: detect stable grid → wait 5 minutes → attempt reconnection → if grid remains stable, return to normal operation. Some inverters allow the reconnect delay to be adjusted by a licensed commissioning engineer, but shortening it below the regulatory minimum is not permitted. If your inverter is tripping and reconnecting repeatedly throughout the day, the root cause must be resolved rather than the reconnect timer shortened."
  - q: "My inverter trips when the AC is switched on - is this an overload problem?"
    a: "A solar inverter trip immediately on air conditioner startup usually indicates an overload from the AC compressor's inrush current. Air conditioner compressors draw 4–6 times their running current for 2–3 seconds during startup. A 1.5-tonne AC with 1.4 kW running load may draw 7–8 kW at startup. If your solar inverter is on the same circuit without adequate upstream protection, this spike can trigger the inverter's overload protection. The solution is usually to ensure the inverter's AC output is on its own circuit breaker rated appropriately, and not shared with high-start-current loads."
  - q: "What is the correct sequence to restart a solar inverter after it trips?"
    a: "The correct restart sequence for most Indian residential solar inverters is: 1) Wait for any active fault to clear or the grid to stabilise (minimum 5 minutes). 2) If restarting manually, switch off the AC circuit breaker first, then the DC disconnect or isolator. 3) Wait 60 seconds for capacitors to discharge. 4) Switch on the AC circuit breaker first (this allows the inverter to check the grid before the DC source is connected). 5) Switch on the DC disconnect. 6) The inverter will go through its startup sequence - typically 30–90 seconds of grid scanning - before resuming normal operation."
---

Your solar inverter starts up in the morning, generates power for a few hours, then switches off. Half an hour later it restarts automatically, generates for an hour, then trips again. By evening you have lost hours of potential generation to repeated cycling, and you are not sure whether this is a serious fault or a normal protective response.

> **TL;DR**
> - Four causes explain almost every repeated trip: grid voltage outside the 180-270 V range (most common), over-temperature shutdown, anti-islanding trips during power cuts, and overload from high-inrush loads.
> - A trip that auto-restarts after roughly 5 minutes is usually a correct protective response to the grid, not a hardware fault.
> - Anti-islanding trips during DISCOM power cuts are mandatory and correct under IEC 62116; they are not a malfunction.
> - Cleaning dust-blocked cooling vents resolves 40-50% of over-temperature shutdown cases.
> - The monitoring app's event log, cross-referenced with voltage, temperature, and power readings at the trip timestamp, pinpoints the cause in about 3 minutes.
> - More than 10 trips per day, or a trip that does not auto-restart, warrants a call to your installer.

This is one of the most anxiety-inducing solar system behaviours for Indian homeowners, and one of the most misdiagnosed. The good news is that a solar inverter that keeps switching off is almost always reacting correctly to an external condition. Understanding which condition is causing the trip tells you exactly what to fix.

> **Direct answer.** A solar inverter that keeps switching off in India has four primary causes: grid voltage outside the 180–270 V operating range (most common), over-temperature shutdown from inadequate ventilation, anti-islanding trips during utility power cuts, and overload from high-inrush loads. Each cause has a distinct signature in the monitoring app and a specific fix.

If your inverter is switching off and not restarting at all (not cycling but remaining off) that is a different scenario covered in the [solar inverter downtime guide](/blog/solar-inverter-downtime/). For error codes shown during the shutdown, cross-reference the [solar inverter error codes guide](/blog/solar-inverter-error-codes-guide/).

## Understanding the Difference Between a Trip, a Shutdown, and a Fault

Before diagnosing, clarify what the inverter is actually doing:

| Behaviour | What It Means | What to Check First |
| --- | --- | --- |
| Trips off, then auto-restarts after 5 min | Grid-protective response - inverter reconnect hold time | AC voltage at fault time in monitoring app |
| Trips off when a specific appliance is switched on | Overload trip | Monitoring app AC power spike |
| Trips off at the same time each day (summer) | Over-temperature shutdown | Inverter temperature log |
| Trips off during every DISCOM power cut | Anti-islanding - normal and mandatory | No action needed; confirm with app log |
| Trips off and stays off | [Hardware fault](/blog/solar-inverter-failure/) or persistent grid issue | Contact installer |

## Cause 1: Grid Voltage Out of Range (Most Common in India)

The single most common cause of repeated solar inverter trips in India is grid [voltage](/glossary/voltage/) that falls outside the inverter's permitted operating range: 180 V at the lower end and 270 V (or 253 V for stricter IEC compliance) at the upper end.

### Under-Voltage Trips (Below 180 V)

Grid under-voltage occurs when the local distribution transformer is overloaded, a common condition in Tier-2 and Tier-3 towns during afternoon peak demand hours. The voltage sags below 180 V and the inverter's under-voltage protection disconnects the AC output. As load drops in the evening, voltage recovers and the inverter reconnects.

**Signs this is the cause:**
- Trips occur consistently in the afternoon (2 PM–6 PM), peak grid demand period
- Monitoring app shows AC voltage dropping to 165–178 V before the trip
- Neighbours on the same transformer also report appliance issues

**Resolution:** Document the voltage readings from your monitoring app (with timestamps) and submit a formal complaint to your DISCOM. Repeated low-voltage complaints from multiple customers on the same feeder typically trigger a transformer replacement or tap adjustment. This is a grid infrastructure issue, not an inverter defect.

### Over-Voltage Trips (Above 253 V)

Grid over-voltage is the opposite problem, and has become increasingly common in solar-dense localities as residential export feeds back into the local distribution network. When many homes export simultaneously (typically 10 AM–2 PM), the local transformer voltage rises above the safe limit.

**Signs this is the cause:**
- Trips occur during peak solar hours (10 AM–2 PM)
- Monitoring app shows AC voltage at 250–260 V before the trip
- The problem is worse on sunny days than cloudy ones

**Resolution:** Report to your DISCOM with the voltage log. Ask your installer whether your inverter supports volt-watt response mode, a function that reduces export power when voltage rises above a threshold, preventing the trip while still generating some power.

> **253 V.** The upper grid voltage limit defined in [IEC 62116](https://www.iec.ch/){target="_blank" rel="noopener"} for grid-connected solar inverters in the Indian 230 V nominal system. Inverters must disconnect within 2 seconds of detecting voltage above this threshold, this is a regulatory requirement, not an inverter design choice. The [Ministry of New and Renewable Energy (MNRE)](https://mnre.gov.in/){target="_blank" rel="noopener"} PM Surya Ghar technical guidelines reiterate this grid voltage operating window for all grid-tied residential inverters approved under the programme.

According to [Mercom India's India Solar Market Leaderboard Q1 2025](https://www.mercomindia.com/){target="_blank" rel="noopener"}, grid voltage fluctuation is among the top three service complaints from residential solar owners in Tier-2 and Tier-3 Indian cities, confirming this is a systemic infrastructure issue rather than a product defect.

## Cause 2: Over-Temperature Shutdown

Solar inverters in India face thermal conditions that are among the most demanding in the world for rooftop installations. An inverter that trips consistently during peak afternoon hours (and then restarts once temperatures drop) is almost certainly experiencing thermal shutdown.

### The Over-Temperature Diagnosis Framework

1. **Check the monitoring app temperature log:** Most modern inverters report their internal temperature continuously. Plot the temperature curve against the trip times. If temperature rises above 65–70 °C at the trip time, thermal derating and eventual shutdown is the cause. The [inverter overheating guide](/blog/inverter-overheating/) covers the full diagnostic and prevention framework for this fault type.

2. **Check the installation environment:** Walk to the inverter during the hottest part of the day (around 2 PM in summer). Is the ambient air temperature around the inverter significantly higher than the surrounding area? Metal sheds, enclosed meter rooms without ventilation, and south-facing walls with no shade can create micro-climates 15–25 °C hotter than open air.

3. **Check cooling vents:** Dust-blocked cooling vents are the most common inverter maintenance issue in India. The intake vents (usually on the bottom or rear of the unit) pull in ambient air; if these are clogged with dust, spider webs, or insulation material, airflow drops and temperature rises.

**Fixes for thermal shutdown:**

- **Clean cooling vents:** Use a dry brush or low-pressure compressed air to clear intake and exhaust vents. This alone resolves thermal shutdown in 40–50% of cases.
- **Improve airflow:** Ensure 30 cm minimum clearance above, below, and on both sides of the inverter. Do not mount inverters inside enclosed cabinets without adequate vent apertures.
- **Relocate the inverter:** If the current location is inherently hot (metal shed, southwest-facing wall), relocate to a north-facing wall or a shaded interior location. This requires a qualified electrician.
- **Add a ventilated shade structure:** A small shade canopy above the inverter (while maintaining clearance) can reduce ambient temperature at the unit by 5–10 °C.

## Cause 3: Anti-Islanding Trips During Power Cuts

If your inverter trips every time the DISCOM cuts power (and restarts reliably once power returns) you are experiencing [anti-islanding](/glossary/anti-islanding/) protection functioning correctly. This is not a fault.

[IEC 62116](https://www.iec.ch/){target="_blank" rel="noopener"} and the [Central Electricity Regulatory Commission](https://cerc.gov.in/){target="_blank" rel="noopener"} grid code require all grid-connected inverters in India to disconnect within 2 seconds of detecting a grid outage. The reason is safety: solar panels continue generating DC even during a grid outage, and if the inverter were to continue feeding AC into the grid, it could electrocute a lineman working on what they believe to be a de-energised distribution line.

**How to confirm anti-islanding is the cause:**
- The trips correlate exactly with DISCOM power cuts in your area
- The monitoring app shows the AC voltage and frequency dropping to zero immediately before the trip
- The inverter restarts automatically within 5–10 minutes of grid restoration

**What to do if power cuts are frequent:** Frequent anti-islanding trips due to load-shedding mean frequent yield losses from grid-connected solar. The long-term solution is a hybrid inverter with battery backup, which can continue powering your home loads during a power cut by separating the home circuit from the grid. The [on-grid vs hybrid comparison guide](/blog/on-grid-vs-hybrid/) explains the decision framework.

## Cause 4: Overload Shutdown

An overload trip occurs when the AC loads connected to the inverter's output exceed the inverter's rated AC power capacity. This is more relevant for off-grid and hybrid inverters where the inverter directly feeds loads, but can also occur in on-grid systems where the inverter is undersized relative to peak home consumption.

**Common overload triggers in Indian homes:**

| Appliance | Start-Up Current Draw | Continuous Draw | Overload Risk |
| --- | --- | --- | --- |
| 1.5-tonne AC (non-inverter type) | 7–9 kW peak | 1.4 kW | High |
| Submersible water pump (1 HP) | 3–4 kW peak | 0.75 kW | Medium |
| Grinder/mixer (750W) | 2–3 kW peak | 0.75 kW | Medium |
| Refrigerator (300W) | 0.6–0.9 kW peak | 0.15 kW | Low |
| EV charger (7.4 kW) | 7.4 kW constant | 7.4 kW | Very High |

**For on-grid inverters:** The inverter primarily feeds power to the grid and is protected separately from household loads. Overload in an on-grid context usually means the total generation plus grid import is not meeting household demand, but this should not cause a trip. If you are getting overload codes on an on-grid inverter, suspect a wiring issue or a meter configuration problem.

**For hybrid/off-grid inverters:** The inverter directly feeds loads during grid outages. Connecting loads that exceed the inverter's rated output during a grid cut triggers an overload protection shutdown.

**Fix:** Shed high-start-current loads during critical periods, or upgrade to a higher-rated inverter. For hybrid systems, configure the inverter's load priority settings to drop non-essential loads (water heaters, second-line ACs) before the inverter reaches its overload threshold.

## How to Use Your Monitoring App to Diagnose a Trip

The most powerful diagnostic tool for repeated inverter shutdowns is your monitoring app's event log and historical parameter data. Every protective trip leaves a data fingerprint in the inverter's memory that points directly to the cause.

**The 3-minute monitoring app diagnosis method:**

1. **Open the event log:** Filter by "Faults" or "Alarms." Find the exact timestamp of the trip. Note the fault code, this is the inverter's first-hand record of what parameter was out of range.

2. **Check AC voltage at the trip time:** Navigate to the historical voltage data and find the voltage reading in the 30 seconds before the fault code. Under 180 V means under-voltage trip. Over 250 V means over-voltage trip. Normal voltage (210–240 V) eliminates grid voltage as the cause.

3. **Check inverter temperature at the trip time:** Find the internal temperature reading at the same timestamp. Above 70 °C confirms an over-temperature trip. Below 60 °C eliminates thermal cause.

4. **Check AC power at the trip time:** Find the AC power output reading. A spike above the inverter's rated power immediately before the trip confirms an overload event.

5. **Cross-reference trip time with DISCOM outage:** If the trip time matches a known power cut in your area (you can check WhatsApp neighbourhood groups for outage reports), anti-islanding is the likely cause.

This five-step check eliminates guesswork and gives you, or your installer, an immediate diagnosis without a site visit. For a deeper guide to reading monitoring data, see the [solar inverter app monitoring guide](/blog/solar-inverter-app-monitoring/). If the fault analysis reveals low solar output even on days without trips, the [solar inverter low output causes India guide](/blog/solar-inverter-low-output-causes-india/) provides the complete diagnostic sequence.

## When to Call a Technician vs Self-Diagnose

Not every inverter shutdown requires a site visit. Understanding the boundary between what a homeowner can handle and what requires a licensed solar electrician saves time and avoids unnecessary call-out charges.

**Homeowner-safe actions:**
- Cleaning dusty cooling vents with a soft brush or low-pressure air
- Checking the router or monitoring app for trip timestamps and fault codes
- Documenting grid voltage readings from the monitoring app to submit to the DISCOM
- Switching the inverter off and on in the correct sequence after an anti-islanding trip
- Confirming that an AC trip corresponds exactly with a DISCOM power cut (anti-islanding, normal)

**Call your installer (non-urgent, within a week):**
- More than 10 trips per day from any cause
- Over-temperature despite clean vents and adequate clearance (unit may need relocation)
- Overload trips that require load management planning or inverter configuration changes
- The inverter does not restart automatically after a grid-voltage trip (potential hold-time misconfiguration)

If you no longer have an active installer relationship, find a local solar installer who can carry out the site inspection.

**Call immediately, do not wait:**
- Trips accompanied by an unfamiliar fault code not in the error code table
- Any shutdown accompanied by unusual smells, sounds, or visible component damage
- Trips on a warranty-covered unit where the installer is unresponsive
- Trips that started after a lightning event or a particularly severe power surge

For any of these urgent scenarios, the [72-hour action plan for a failed solar inverter](/blog/solar-inverter-failure-action/) walks through the diagnosis, escalation, and warranty-claim sequence step by step.

The [Central Electricity Authority (CEA)](https://cea.nic.in/){target="_blank" rel="noopener"} Technical Standards for Connectivity of Distributed Generation Resources require that any protective trip outside defined grid parameters be investigated and documented by a competent person, this is a compliance obligation, not a suggestion. For Qbits inverters, the AI WhatsApp monitoring system logs every trip event and its associated parameter readings, allowing our service team to diagnose the root cause remotely from the event log without a site visit in most cases. [Talk to a Qbits engineer](/contact-us/) if your current inverter's service response has been inadequate. Homeowners dealing with grid voltage issues can also review the [solar inverter low output causes guide](/blog/solar-inverter-low-output-causes-india/) to understand how voltage fluctuations reduce generation even on non-trip days.

## Where Qbits Fits

Homeowners in India's most challenging grid environments (Tier-2 towns with wide voltage swings, North India's power-cut zones, and coastal areas with high-humidity thermal challenges) find that Qbits' India-grid-tuned firmware handles the 180–270 V operating range with minimal protective trips, while the IP66 enclosure keeps thermal performance stable even in high-humidity monsoon conditions.

- **[On-Grid Inverters](/on-grid-inverter/)**: TLS and TLD series with wide 180–270 V grid tolerance and AI-monitored trip logging.
- **[Hybrid Inverters](/hybrid-inverter/)**: HS and HT series that continue powering home loads during grid trips, eliminating anti-islanding yield losses.
- **[Authorized Service Partners](/authorized-service-partners/)**: if repeated trips require a site inspection, our network covers 280+ cities with a 72-hour response commitment.
