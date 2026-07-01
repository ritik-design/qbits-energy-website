---
title: "Solar Inverter for AC Load, Sizing Math and SKU Picks"
excerpt: "A solar inverter for AC load must handle inrush current, not just running watts. Learn the tonnage-to-kW formula, hybrid vs on-grid choice, and right-sized Qbits SKUs."
description: "Size a solar inverter for air conditioner loads in India, tonnage to kW conversion, starting current, hybrid vs on-grid for backup, and Qbits SKU recommendations."
category: Buying Guide
date: 2026-06-05
readTime: "17 min"
image: "/blog-images/solar-inverter-sizing.svg"
author: "Keyur Rakholiya"
keywords:
  - solar inverter for ac
  - solar inverter for air conditioner
  - inverter ac load sizing
  - hybrid inverter for ac backup
  - 1.5 ton ac solar inverter size
faqs:
  - q: "What size solar inverter do I need to run a 1.5-ton AC?"
    a: "A 1.5-ton inverter AC draws roughly 1.2–1.5 kW at steady state but surges to 3–4 kW for 2–3 seconds on start-up. A 3 kW solar inverter with adequate surge capacity can run a single 1.5-ton AC, but a 5 kW unit is the safer choice if you also want ceiling fans, lights, and a refrigerator on the same circuit. Always verify the inverter's peak surge rating, not just its rated output."
  - q: "Can an on-grid solar inverter run an air conditioner during a power cut?"
    a: "No. An on-grid inverter is wired to shut down automatically when the grid fails - this is the anti-islanding protection required by Indian regulations under CEA guidelines. To run an AC during a power cut, you need a hybrid inverter with a battery bank or an off-grid system. Hybrid inverters like the Qbits HS series maintain a separate backup bus that keeps selected loads live even when the DISCOM grid is down."
  - q: "How many solar panels does it take to run a 1.5-ton AC for 8 hours a day?"
    a: "A 1.5-ton inverter AC consumes roughly 9–12 kWh per day at typical Indian summer load. With 5 peak sun hours and 80% system efficiency, you need approximately 2.5–3 kW of solar panels - that is 6 to 8 panels of 400 Wp each. The panels cover daytime consumption; if you want night-time operation, add a battery bank sized to 10–15 kWh usable capacity."
  - q: "What is the difference between inverter AC and non-inverter AC for solar sizing?"
    a: "An inverter AC uses a variable-speed compressor that ramps up and down with demand, drawing 30–50% less power at part load. A non-inverter AC switches its compressor on and off at full power, creating repeated large inrush surges every 10–15 minutes. For solar systems, inverter-technology ACs are strongly preferred because they lower average consumption, reduce battery cycling, and do not stress the inverter with repeated high-current starts."
  - q: "Does a 2-ton AC need a 5 kW or 10 kW solar inverter?"
    a: "A single 2-ton inverter AC needs about 2–2.5 kW running, with a startup surge reaching 5–6 kW. A 5 kW inverter can handle one 2-ton AC plus modest household loads. If you plan to run two 2-ton ACs simultaneously along with other loads totalling 6–8 kW, a 10 kW inverter is the right choice. Size for the aggregate peak load, not just the AC nameplate rating."
  - q: "Can a hybrid solar inverter run AC on battery power at night?"
    a: "Yes, a hybrid inverter can discharge the battery bank to run an AC at night, but the battery size is critical. A 1.5-ton AC running for 8 hours at night needs approximately 10–12 kWh of usable battery capacity - roughly 15 kWh of rated LFP capacity at 80% depth of discharge. Without an adequately sized battery, the inverter will either shut down or switch back to grid power to protect the battery from over-discharge."
  - q: "What is the inrush current of an air conditioner and why does it matter for solar inverters?"
    a: "Inrush current, also called starting current or locked-rotor current, is the surge drawn by an AC compressor motor in the first 2–3 seconds of starting. For a 1.5-ton AC, this surge can reach 20–25 amperes at 230 V, compared to a running current of 6–7 amperes. The solar inverter must supply this peak without tripping. Check the inverter datasheet for its peak surge capacity - expressed as a multiple of rated output - and ensure it exceeds your AC's starting current specification."
  - q: "Is a 3 kW on-grid system enough to offset AC electricity bills without battery backup?"
    a: "A well-oriented 3 kW rooftop system generates 12–15 kWh on a clear summer day in most Indian cities - enough to cover a 1.5-ton AC running 8 hours plus general household load. Under net metering, surplus daytime generation is exported and credited against night-time consumption. This approach cuts 70–90% of AC-driven electricity bills without any battery, with a payback period of 4–6 years at ₹7–8 per unit tariffs."
  - q: "How do I account for power factor when sizing a solar inverter for AC load?"
    a: "Air conditioners are inductive loads with a power factor of 0.8–0.9. An inverter rated in kW delivers real power; when the AC presents a lower power factor, the apparent power demand (in kVA) is higher. For a 1.5 kW running AC with 0.85 power factor, the inverter must supply 1.76 kVA of apparent power. Most modern solar inverters handle this internally - check that the inverter's rated output is specified in kW at 0.8 power factor, which is the industry standard."
  - q: "Which Qbits inverter is best for a home with two 1.5-ton ACs?"
    a: "Two 1.5-ton inverter ACs running simultaneously draw roughly 3 kW, with startup surges reaching 6–8 kW if both start at once. Add 1–2 kW for fans, lights, and a refrigerator and you reach a peak demand of 8–10 kW. The Qbits HS 10 kW hybrid inverter covers this load with headroom, provides battery-backed AC operation during power cuts, and includes AI WhatsApp monitoring to track consumption per phase - a strong fit for a 3–4 BHK home in any Indian city."
---

Air conditioning consumes more than 40% of the electricity bill in a typical Indian 3-BHK home during summer months, according to the [Bureau of Energy Efficiency Annual Report](https://beeindia.gov.in/en/annual-report) (BEE, 2025). When a homeowner decides to go solar, the first question is almost always: can the solar system actually run my ACs, and if so, how big does the inverter need to be? The short answer involves more than multiplying the tonnage by a conversion factor. Starting current, power factor, daytime-versus-night-time operation, and the on-grid-versus-hybrid choice all shape the final system design. This guide walks through each variable, gives real sizing examples for 1.5-ton and 2-ton units, and maps the right Qbits SKU to each scenario.

> **Direct answer.** A solar inverter for AC load must handle inrush current (the startup surge), not just steady-state running watts. Apply the AC-Load Inrush Matrix: multiply nameplate tonnage by 1.2 to get running kW, then multiply by 3 to get peak surge kW, and select an inverter whose surge rating exceeds that figure. For backup during power cuts, a hybrid inverter is mandatory, an on-grid inverter shuts down by law when the grid fails.

The calculation changes further when you run multiple ACs simultaneously, mix inverter-technology ACs with older non-inverter units, or want night-time battery operation. Each of those scenarios gets its own worked example below.

## Why AC Load Is the Hardest Load for a Solar Inverter

Most home appliances draw a steady current the moment they switch on. Air conditioners do not. An AC compressor is an induction motor, and induction motors draw anywhere from three to seven times their normal running current for two to three seconds at start-up, this is the [inrush current](/glossary/current/) that trips undersized inverters and voids warranties on units not rated for the surge.

A 1.5-ton AC running at full speed draws roughly 6–7 amperes at 230 V (around 1.4–1.6 kW). At start-up, the same compressor can pull 20–25 amperes for two to three seconds, a surge of 4.6–5.75 kW from a device nominally rated at 1.5 kW. An inverter rated for 3 kW continuous output may or may not survive that surge, depending on its peak surge specification.

The situation worsens with non-inverter (fixed-speed) ACs. These restart the compressor at full power every 10–15 minutes whenever the room temperature drifts above the set point. Every restart is a fresh inrush event. An inverter-technology AC, by contrast, ramps the compressor speed up and down continuously, avoiding complete restarts and reducing the average load by 30–50%.

### Why Inrush Current Is the Hidden Spec

Inverter manufacturers publish two power ratings in datasheets: the rated continuous output and the peak surge capacity. The peak surge is typically 150–200% of rated output for 10–30 seconds. A 5 kW inverter with a 150% surge rating can supply 7.5 kW for a brief start-up window, enough to absorb the 4.6 kW compressor surge of a 1.5-ton AC with margin to spare.

The mistake buyers make is comparing only the continuous ratings. When you match a 3 kW inverter to a 1.5-ton AC based on steady-state consumption, you are ignoring the 5 kW surge that fires every time the thermostat clicks on. Over weeks and months, that repeated over-stress shortens IGBT life and can cause nuisance tripping that confuses installers into diagnosing faulty wiring or a "weak grid" rather than an undersized inverter.

### Induction Motor vs Inverter Motor: What Changes

- **Non-inverter (fixed-speed) AC**: compressor runs at full power or stops. Every restart = full locked-rotor current. Suitable for solar only with a generously oversized inverter.
- **Inverter-technology AC**: variable-frequency drive modulates compressor speed. Start-up current is lower (2–4× running rather than 5–7×), and the motor rarely stops completely. Better matched to solar inverters.
- **5-star inverter AC**: highest efficiency class under BEE ratings; uses the best variable-frequency compressor technology. The preference for any solar-plus-AC installation.

## The AC-Load Inrush Matrix: Sizing Your Inverter in Three Steps

Getting the inverter size right requires working through three sequential calculations. The named framework below, the **AC-Load Inrush Matrix**: gives a structured path from AC specifications to inverter SKU.

### The AC-Load Inrush Matrix

1. **Running load (kW)**: Convert tonnage to kilowatts using the relationship 1 ton ≈ 1.2 kW for a 5-star inverter AC (or 1 ton ≈ 1.4 kW for older non-inverter units). Add all ACs running simultaneously plus other household loads (fans: 60–75 W each; LED lighting: 10–20 W per room; refrigerator: 150–200 W; TV: 80–150 W). Sum gives total running load in kW.

2. **Peak surge (kW)**: Multiply the largest single AC's running kW by 3 for inverter-technology ACs, or by 5 for non-inverter ACs. Add this surge to the running load of all other appliances (which are already running when the AC starts). The result is your peak instantaneous demand.

3. **Inverter selection (kW)**: Choose an inverter whose rated continuous output covers the total running load with 20% headroom, AND whose surge (peak) rating covers the peak surge figure from Step 2. The surge rating is the binding constraint for AC loads.

Applied to a typical 3-BHK home with two 1.5-ton inverter ACs:

| Item | Running Load | Surge (AC start) |
| --- | --- | --- |
| AC #1 (1.5 ton, inverter) | 1.5 kW | 4.5 kW |
| AC #2 (1.5 ton, inverter) | 1.5 kW | - (already running) |
| Fans × 4 | 0.3 kW | - |
| Lights + TV | 0.3 kW | - |
| Refrigerator | 0.2 kW | - |
| **Total running** | **3.8 kW** | - |
| **Peak surge** | - | **8.3 kW** |

A 5 kW inverter covers the 3.8 kW running load. A 5 kW inverter with 160% surge (8.0 kW) just barely covers the surge, so the safer choice is a **5 kW inverter with 200% surge (10 kW peak)**, or step up to a 6–8 kW inverter.

## On-Grid vs Hybrid: Which Inverter Type Should Run Your AC?

The inverter topology choice is not just about budget, it determines whether your AC operates during power cuts, which in large parts of North and Central India can run 4–8 hours per day in summer.

> **45%** of Indian households in states like Uttar Pradesh, Bihar, and Jharkhand experienced over 4 hours of daily power cuts in summer 2025. *Source - [Central Electricity Authority Load Generation Balance Report](https://cea.nic.in/lgbr-report/), CEA 2025.*

### On-Grid Inverter for AC Load

An [on-grid inverter](/glossary/on-grid-inverter/) connects directly to the grid and exports surplus solar power. During daylight hours, it can power your ACs entirely from solar, with surplus being credited under [net metering](/glossary/net-metering/). The critical limitation: when the grid fails, the on-grid inverter shuts down within milliseconds under anti-islanding protection, a mandatory safety requirement under the [CEA Technical Standards for Connectivity of Distributed Generation Resources](https://cea.nic.in/) (CEA, 2023).

**When on-grid works for AC:** Your city has reliable grid power (fewer than 1–2 hours of cuts per month), your ACs run primarily during daytime hours (9 AM–6 PM), and your primary goal is reducing electricity bills rather than ensuring uninterrupted operation.

### Hybrid Inverter for AC Load

A [hybrid inverter](/glossary/hybrid-inverter/) manages solar panels, a battery bank, and the grid simultaneously. It maintains a separate backup bus that stays live during grid outages, allowing selected loads (including your ACs) to continue running on battery + solar power. The switchover from grid to battery is typically under 20 milliseconds, far too fast for the AC compressor to notice.

**When hybrid is the right choice:** Power cuts of 2+ hours per day in summer, desire to run ACs at night without grid electricity, future-proof installation that can absorb battery cost reductions over time.

| | On-Grid | Hybrid |
| --- | --- | --- |
| **AC runs during power cut** | ✗ Shuts down | ✓ Continues on battery |
| **AC runs at night** | ✗ Grid only | ✓ Battery discharge |
| **Upfront cost** | ₹2.5–4 L for 5 kW | ₹5–8 L for 5 kW + battery |
| **Payback period** | 4–6 years | 7–10 years (improves as tariffs rise) |
| **PM Surya Ghar subsidy** | ✓ Eligible | ✓ Eligible (inverter portion) |
| **Best for** | Urban metros, good grid | Tier-2/3, frequent cuts |

For most homeowners in states with frequent power cuts, a hybrid system running ACs during outages eliminates the need for a diesel generator, which costs ₹60–120 per hour to run and requires fuel management, servicing, and noise tolerance.

## Tonnage to kW Conversion: The Numbers Every Buyer Needs

The popular shorthand "1 ton = 1 kW" is a significant underestimate. The relationship depends on the AC's efficiency class and whether it uses inverter-compressor technology.

| AC Type | 1 Ton | 1.5 Ton | 2 Ton |
| --- | --- | --- | --- |
| 5-star inverter AC (at full load) | 0.90–1.10 kW | 1.35–1.60 kW | 1.80–2.10 kW |
| 3-star inverter AC | 1.10–1.25 kW | 1.65–1.85 kW | 2.20–2.50 kW |
| Non-inverter (fixed-speed) AC | 1.20–1.40 kW | 1.80–2.00 kW | 2.40–2.80 kW |
| Window AC (non-inverter) | 1.10–1.30 kW | 1.65–1.95 kW | 2.20–2.60 kW |

These are full-load steady-state figures. At partial load (say, 50% compressor speed on a mild day) actual draw drops to 40–60% of these values for inverter-technology units.

**Ambient temperature effect:** Every 5 °C rise above the AC's rated ambient temperature (typically 43 °C for BEE testing in India) increases energy consumption by roughly 8–10%, as documented in the [BEE Star Rating Programme for Air Conditioners](https://beeindia.gov.in/en/programmes/beestar-labelling-programmesstar-ratings/air-conditioner) (BEE, 2025). In Rajasthan or Vidarbha where ambient temperatures routinely cross 48 °C, add 10–15% to the above figures.

**Real daily units consumed:** A 1.5-ton 5-star inverter AC running 8 hours in a sealed, well-insulated room in moderate climate will consume approximately 9–11 kWh per day. In poorly insulated homes or extreme heat, consumption reaches 13–15 kWh per day.

## How Many ACs Can Your Solar Inverter Run Simultaneously?

This is the question installers hear most often from homeowners who want to run every room's AC during peak afternoon heat. The answer depends on the inverter rating, the AC tonnage, and whether ACs are starting simultaneously or staggered.

### Single AC: 1.5-Ton Example

- **Running load:** 1.5 kW (5-star inverter AC)
- **Surge peak:** 4.5 kW (3× running)
- **Minimum inverter:** 3 kW rated, with ≥ 150% surge (4.5 kW peak)
- **Recommended inverter:** 5 kW rated, provides headroom for fans, lights, and refrigerator without risking surge trips

A 5 kW on-grid system with 12–14 panels of 400 Wp covers daytime consumption and exports surplus. Monthly generation of 600–650 kWh offsets the AC plus full household base load in most Indian cities.

### Two ACs: 1.5-Ton + 1.5-Ton (3-BHK Standard)

- **Running load:** 3.0 kW AC + 1.0 kW other loads = 4.0 kW
- **Surge peak (one AC starts while other runs):** 4.5 kW surge + 1.5 kW (running AC) + 1.0 kW (other loads) = 7.0 kW
- **Minimum inverter:** 5 kW rated with ≥ 150% surge (7.5 kW peak)
- **Recommended inverter:** 5–6 kW with 200% surge rating; or 8 kW standard rating

### 2-Ton AC: Larger Rooms and Master Bedrooms

- **Running load:** 2.0–2.2 kW (5-star inverter AC)
- **Surge peak:** 6.0–6.6 kW
- **Minimum inverter:** 5 kW rated with ≥ 130% surge (6.5 kW peak)
- **Recommended inverter:** 6–8 kW, a 5 kW inverter is tight on surge margin

Two 2-ton ACs running simultaneously: running load 4.0–4.4 kW plus other loads 1.5 kW = 5.5–6.0 kW total. Surge (one starting while the other runs) = 6.0–6.6 kW surge + 2.2 kW (running AC) + 1.5 kW = 9.7–10.3 kW peak. This scenario demands a **10 kW inverter** as the minimum.

### Three or More ACs: 4-BHK and Villas

With three or more ACs, the design question is staggered start-up. If the inverter's load management firmware staggers AC start-ups by 30–60 seconds each, the peak surge never stacks. Qbits hybrid inverters include programmable load priority settings that enable this staggered start. Without staggering, three 1.5-ton ACs starting simultaneously can demand 13.5 kW of surge, requiring a 10–15 kW inverter.

> **Insight:** Most HVAC installers do not account for simultaneous start-up surges because they are wiring for grid power, where the grid absorbs any surge without complaint. Solar installers must explicitly check the inverter surge capacity and, where needed, implement start-up sequencing.

## Solar Panel Count for Running AC: Full Worked Examples

Getting the inverter right is half the job. The solar array must generate enough energy to actually power the AC during daylight hours and (in hybrid systems) charge the battery for night-time use.

**Formula:** Panel capacity (kW) = (Daily AC kWh + other load kWh) ÷ (Peak sun hours × system efficiency)

Use **5 peak sun hours** as a conservative estimate for most Indian plains cities (Delhi, Mumbai, Hyderabad, Bengaluru). Use **5.5–6.0** for Gujarat, Rajasthan, and Maharashtra. Use **4.0–4.5** for coastal Tamil Nadu and Kerala. [Peak sun hours](/glossary/peak-sun-hours/) can be verified by city using the [MNRE Solar Radiation Resource Assessment](https://mnre.gov.in/solar-energy/) (MNRE, 2026) database.

**Example A, 1.5-ton AC, on-grid, 8-hour daytime operation:**

| Item | Figure |
| --- | --- |
| AC consumption | 10 kWh/day |
| Other household loads | 4 kWh/day |
| Total daily need | 14 kWh/day |
| Peak sun hours (Delhi) | 5.0 h |
| System efficiency | 80% |
| Required panel capacity | 14 ÷ (5.0 × 0.80) = **3.5 kW** |
| Standard install | 3 kW or 4 kW system (8–10 panels of 400 Wp) |

**Example B, 2 × 1.5-ton ACs, hybrid, 8-hour daytime + 4-hour night battery:**

| Item | Figure |
| --- | --- |
| AC consumption (8 h day) | 20 kWh/day |
| AC consumption (4 h night from battery) | 10 kWh |
| Other household loads | 5 kWh/day |
| Total daily need | 35 kWh/day |
| Required panel capacity | 35 ÷ (5.0 × 0.80) = **8.75 kW** → round to 10 kW |
| Battery required (LFP, 80% DoD) | 10 kWh usable → 12.5 kWh rated = 2 × 6.25 kWh modules |
| Inverter | 8–10 kW hybrid |

This is a realistic system for a 4-BHK home running ACs around the clock in May–June, with the solar array covering all daytime load and the battery handling the night shift.

## Inverter-AC vs Non-Inverter AC Compatibility: Key Differences

Many homes still have 5–10-year-old non-inverter ACs alongside newer inverter models. Understanding how each type behaves on a solar inverter prevents both equipment damage and disappointing performance.

### Non-Inverter (Fixed-Speed) AC on Solar

Fixed-speed compressors start and stop repeatedly. The compressor draws locked-rotor current (5–7× running current) every time it restarts, often every 10–15 minutes. In an 8-hour operating day, that can be 30+ surge events. An inverter handling this load needs a surge rating of at least 5–7× the AC's running current, not just 3×.

**Practical consequence:** A non-inverter 1.5-ton AC that draws 1.8 kW running and surges to 10+ kW at start-up requires a 5 kW inverter with strong surge capacity, the same inverter that could comfortably run two inverter-technology 1.5-ton ACs. The extra cost of the larger inverter typically outweighs the cost of replacing the old AC with a 5-star inverter model.

### Inverter-Technology AC on Solar

Variable-speed compressors use a VFD (Variable Frequency Drive) to ramp up gradually. Starting current is still higher than running current, but rarely exceeds 3× running. Once at operating temperature, the compressor modulates to as low as 30% speed, dramatically reducing draw. Battery discharge extends, solar self-consumption improves, and inverter stress is minimised.

### Compatibility Summary

| AC Type | Surge Factor | Inverter Size (1.5 ton) | Solar Compatibility |
| --- | --- | --- | --- |
| 5-star inverter AC | 2–3× | 3–5 kW | Excellent |
| 3-star inverter AC | 2.5–3.5× | 4–5 kW | Good |
| Non-inverter (3-star) | 5–7× | 5 kW minimum | Fair - frequent surges |
| Window AC (non-inverter) | 5–7× | 5 kW minimum | Fair - add a soft-start |
| Cassette / commercial AC | 3–5× | Consult datasheet | Case-by-case |

A **soft-start capacitor**: a ₹2,000–4,000 add-on, reduces the locked-rotor current of non-inverter ACs by 40–60%. Fitted inside the AC's electrical compartment by an HVAC technician, it brings non-inverter starting behaviour closer to inverter-technology levels and can allow a smaller inverter to handle the same AC.

## Common Sizing Mistakes and How to Avoid Them

Homeowners and even some installers make consistent errors when sizing inverters for AC-heavy homes. Recognising these patterns saves money and prevents repeat service calls.

- **Mistake: Sizing only for running load**: The most frequent error. A homeowner sees "1.5 kW running" on the AC data plate and orders a 2 kW inverter. The inverter trips on first start-up. Always apply the AC-Load Inrush Matrix from Section 2: multiply running load by 3 for startup surge and verify the inverter's peak surge rating.

- **Mistake: Assuming all ACs will not start simultaneously**: In a 3-BHK home, all three rooms turn on ACs at 10 PM when everyone returns from work. If the inverter cannot handle the coincident start-up surge, it will trip and reset, often interpreted as a grid problem or a faulty inverter. Apply the worst-case simultaneous start calculation or implement programmable load staggering.

- **Mistake: Ignoring power factor**: AC is an inductive load. A 1.5 kW running draw at 0.85 power factor demands 1.76 kVA from the inverter. For detailed [power factor](/glossary/power-factor/) treatment, see our guide to [solar inverter specifications decoded](/blog/solar-inverter-specifications-decoded/).

- **Mistake: Choosing on-grid in a power-cut zone**: An on-grid inverter shut down during a 6-hour summer power cut means six hours without AC despite a fully generating rooftop array. Verify your area's grid reliability before choosing inverter topology. The [on-grid vs hybrid decision guide](/blog/on-grid-vs-hybrid-vs-off-grid-decision-guide/) covers the full framework.

- **Mistake: Under-sizing the battery for night-time AC**: A 5 kWh battery will run a 1.5-ton AC for roughly 3 hours at full load. Many buyers expect 6–8 hours and are disappointed. Calculate the battery capacity using the formula: usable kWh = (AC kW × night hours) ÷ 0.85 (inverter round-trip efficiency). Then add 25% margin for ambient temperature losses.

- **Mistake: Not accounting for AC start-up in hybrid systems**: Hybrid inverter battery discharge mode has the same surge limitation as grid-tied mode. The battery + inverter combination must supply the same start-up surge as the grid would. Verify that the hybrid inverter's backup output rating (not just its solar MPPT rating) covers the surge. For a deeper look at hybrid system design, the [on-grid vs hybrid solar inverters ROI guide](/blog/on-grid-vs-hybrid-solar-inverters-roi/) provides payback scenarios for both topologies.

- **Mistake: Ignoring DISCOM export limits**: Some DISCOMs cap per-phase export at a fraction of the sanctioned load. Oversizing the panel array relative to the inverter to compensate for AC consumption can create clipping losses if the inverter's AC output limit prevents feeding surplus energy back. Review the [inverter clipping explained post](/blog/inverter-clipping-explained/) before finalising your design. Also confirm your state's net metering rules at the [net metering India complete guide](/blog/net-metering-india-complete-guide/).

## Where Qbits Fits in an AC-Focused Solar System

Qbits inverters are designed for Indian conditions where grid voltage swings between 180 V and 270 V, rooftop temperatures reach 55–60 °C in May, and many DISCOMs in Tier-2 and Tier-3 cities have not completed smart-grid upgrades. Running high-current inductive loads like air conditioners in these conditions requires an inverter with high surge capacity and India-grid-tuned firmware, not a spec sheet translated from European or Chinese market requirements.

The Qbits HS and HT hybrid series ships with a 200% peak surge rating (2× rated continuous output), which means a 5 kW HS unit can supply 10 kW for the 2–3 second compressor start window. The firmware monitors [harmonics](/glossary/harmonics/) introduced by variable-frequency AC drives and compensates in real time, keeping [total harmonic distortion](/glossary/thd/) below 3%, well within the [IEC 62116 anti-islanding standard](https://www.iec.ch/) (IEC, 2024). The 12-year full replacement warranty and IP66 enclosure mean the unit survives both monsoon exposure and a decade of daily inrush cycles without degrading.

- **[On-Grid Inverters](/on-grid-inverter/)**: TLS and TLD series, 1.5 kW to 50 kW. Right choice for metro homes where grid reliability is high and the goal is bill reduction. ALMM-listed and PM Surya Ghar subsidy-eligible.
- **[Hybrid Inverters](/hybrid-inverter/)**: HS and HT series with battery readiness and 200% surge capacity. Suited to homes with frequent power cuts or overnight AC operation on battery. Supports LFP and lithium-ion battery banks from leading BMS-certified manufacturers.
- **[String Sizing Calculator](/string-sizing-calculator/)**: Confirm panel-string configuration for your roof area and AC load before finalising the quote. Takes 60 seconds and prevents MPPT voltage range mismatches that cause morning yield losses.

[Talk to a Qbits engineer](/contact-us/) about your AC count, roof area, and grid reliability, most site assessments are completed within 24 hours and include a detailed sizing report with panel layout, inverter SKU, and payback projection at your state's current tariff.
