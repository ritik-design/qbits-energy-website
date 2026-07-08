---
title: "How to Size a Battery for a Hybrid Solar Inverter"
excerpt: "Hybrid inverter battery sizing in 5 steps: identify critical loads, set backup hours, calculate kWh using DoD, match charge current, pick voltage. Worked examples for 3BHK Lucknow and 2BHK Mumbai."
description: "Hybrid inverter battery sizing guide for Indian homes: load calculation, DoD, C-rate limits, 48V vs 96V systems, and LFP vs lead-acid comparison."
category: "Buying Guide"
date: 2026-06-05
updatedDate: 2026-07-08
readTime: "19 min"
image: "/blog-images/on-grid-vs-hybrid-solar-inverters-roi.svg"
author: "Keyur Rakholiya"
keywords:
  - hybrid inverter battery sizing
  - battery size for hybrid solar inverter India
  - how to calculate battery bank for solar
  - LFP battery for hybrid inverter India
  - 48V vs 96V battery system solar
faqs:
  - q: "How do I calculate the battery size for a hybrid solar inverter?"
    a: "Use the five-step method: first, list only your critical loads (fans, lights, refrigerator, router) and add up their wattage. Second, decide your backup duration based on your local load-shedding hours. Third, calculate required kWh as (load in kW × backup hours) ÷ depth of discharge - use 0.8 for LFP batteries and 0.5 for lead-acid. Fourth, check your inverter's maximum charge current and confirm the battery bank can absorb it. Fifth, match the battery voltage (48V or 96V) to your inverter's specification. A 3BHK in Lucknow with 2 kW critical load and 8-hour backup needs a 20 kWh LFP bank at 80% DoD."
  - q: "What is depth of discharge and why does it affect battery sizing?"
    a: "Depth of discharge (DoD) is the percentage of a battery's total capacity that can be safely used before recharging. LiFePO4 (LFP) batteries support up to 80–90% DoD without significant cycle-life loss. Flooded lead-acid batteries should be discharged to only 50% to maintain their 500–800 cycle life. If you ignore DoD and treat a 10 kWh battery as fully usable, a lead-acid bank will fail within two to three years. Always divide your required energy by the DoD factor to find the gross battery capacity you need to purchase."
  - q: "Should I use LFP or lead-acid batteries with a hybrid inverter in India?"
    a: "LFP (LiFePO4) is the better long-term choice for most Indian homes in 2026. LFP delivers 3,000–6,000 cycles versus 500–800 for lead-acid. Over a 10-year period, a single LFP bank replaces four to six lead-acid replacements, making the total cost of ownership lower despite the higher upfront price. LFP also tolerates 40–48 °C ambient temperatures without significant capacity loss and does not require equalisation charging. The only scenario where lead-acid remains rational is a tight initial budget with a plan to replace within three years."
  - q: "What is the difference between a 48V and 96V battery system for a hybrid inverter?"
    a: "Battery voltage determines the number of cells in series and the maximum power the bank can deliver at a given current. A 48V system uses 16 LFP cells in series and supports up to 5–7 kW of inverter capacity comfortably. A 96V system uses 32 cells and is suited to 7–15 kW hybrid inverters. Higher voltage reduces the current required for the same power output, which lowers cable losses and heat. If your inverter is rated above 7 kW, confirm whether it requires 96V or 120V battery input before purchasing cells."
  - q: "Can I mix old and new batteries in a hybrid solar system?"
    a: "No. Mixing batteries of different ages, capacities, or chemistries in a series-parallel bank creates imbalances that degrade all cells faster. The stronger cells charge and discharge the weaker ones beyond their limits, causing accelerated failure and potential thermal events. Always expand a battery bank by adding identical new units matched in chemistry, voltage, and capacity. If your existing battery is more than two years old, the safest option is to replace the entire bank when expanding capacity."
  - q: "How do load-shedding hours in India affect battery sizing?"
    a: "Load-shedding duration is the primary driver of battery capacity. States like Uttar Pradesh, Bihar, and Jharkhand report 6–12 hours of daily cuts in peak summer, while Mumbai and Pune experience fewer than 2 hours on average. A home in Lucknow needs a battery bank three to four times larger than the same home in Mumbai to achieve the same level of backup coverage. Always design for your 90th-percentile outage duration - the length of cut that occurs on the worst normal day - not just the average."
  - q: "What happens if the battery bank is too small for the inverter's charge current?"
    a: "If the inverter's maximum charge current exceeds what the battery's BMS allows, the BMS will throttle charging to protect the cells. This is safe but means your battery recharges more slowly than the inverter could support. The risk is when a battery lacks BMS communication with the inverter - in that case, an oversized charge current can damage cells through overheating. Always confirm the inverter's charge current setting matches the battery manufacturer's maximum continuous charge current (C-rate × capacity in Ah)."
  - q: "How many solar panels do I need to recharge a 10 kWh battery in one day?"
    a: "Divide the daily energy needed to recharge the battery by your location's peak sun hours, then add 20–25% for system losses. In Lucknow with 5.5 peak sun hours, a 10 kWh battery needs at least 2 kWp of panels dedicated to recharging: 10 kWh ÷ 5.5 hours ÷ 0.85 efficiency factor ≈ 2.14 kWp. In practice, a 4–5 kWp solar array powering a 3BHK home will have enough surplus generation to recharge a 10–15 kWh battery on most clear days."
---

Planning the battery bank for a hybrid solar inverter is the decision that separates a system that genuinely covers power cuts from one that runs out of power at 2 AM. Most guides approach this backwards, they start with the inverter capacity and work downward. The correct approach starts with your actual loads and your local outage reality, then builds up to a battery specification that the inverter can charge and discharge safely.

> **Direct answer.** Size a hybrid inverter battery in five steps using the BLADE Method: identify critical backup loads (not total home load), set backup hours from local load-shedding data, calculate gross kWh as (load kW × hours) ÷ DoD, verify the battery fits the inverter's charge current limit, and confirm the system voltage (48V or 96V). A 3BHK Lucknow home with 2 kW critical load and 8-hour cuts needs roughly 20 kWh of LFP capacity; a 2BHK Mumbai home with 2-hour cuts needs only 5 kWh.

The five-step framework above (the **BLADE Method** (Backup Load Assessment and Design Engine)) is described in full in the next sections. Each step includes a worked calculation so you can fill in your own numbers as you read. Understanding the method also protects you from the three most common and expensive battery sizing mistakes that Indian homeowners make every year.

> **TL;DR**
> - Size a battery bank from critical backup load, not total home load: a 3BHK typically needs only 1.5–3 kW of backup versus 5–9 kW of total load.
> - Gross battery kWh = (critical load kW × backup hours) ÷ depth of discharge, using 0.80 DoD for LFP or 0.50 DoD for lead-acid.
> - A 3BHK in Lucknow with 8-hour outages needs roughly 15–20 kWh of LFP capacity; a 2BHK in Mumbai with 2-hour outages needs only 2.5–5 kWh.
> - Match the battery to the inverter's charge current so it stays near or below 0.5C, and confirm system voltage (48V for 3–7 kW inverters, 96V for 7–15 kW).
> - LFP costs more upfront than lead-acid but needs one replacement in 10 years versus three to four for lead-acid, making its total cost of ownership lower.

## Why Hybrid Inverter Battery Sizing Starts with Loads, Not Inverter Capacity

The inverter's rated capacity (say, 5 kW or 10 kW) tells you the maximum power it can supply at any instant. It says nothing about how much energy your home needs over eight hours of a power cut. Energy is power multiplied by time, and battery capacity is measured in kilowatt-hours (kWh), not kilowatts.

A 5 kW [hybrid inverter](/hybrid-inverter/) paired with a 5 kWh battery delivers full power for exactly one hour before the battery is empty. Pair the same inverter with a 20 kWh bank and it covers 8 hours at 2.5 kW average load. The inverter rating constrains the instantaneous power ceiling; the battery capacity constrains the duration.

The second misunderstanding is total home load versus critical load. During a power cut, most homeowners do not need every appliance running. The air conditioner (1.5–2 kW), electric geyser (2 kW), washing machine (0.5 kW), and induction cooktop (1.5–2 kW) together account for 5–7 kW of non-critical load. Running all of them from batteries for 8 hours would require a 56–60 kWh bank, impractical and unnecessarily expensive. Critical loads (fans, LED lights, refrigerator, router, a few phone chargers) typically total 1.5–3 kW and make backup genuinely affordable.

- **Total home load**: everything running at peak: 5–9 kW for a 3BHK. Used to size the solar array and inverter kW rating.
- **Critical backup load**: what must run during a power cut: 1.5–3 kW for a 3BHK. Used to size the battery bank in kWh.
- **Backup duration**: how many hours per day the grid is unavailable in your district. The single biggest driver of battery cost.

This distinction is the foundation of the BLADE Method. The guide to [choosing a solar inverter for your home](/blog/how-to-choose-solar-inverter-for-home-india/) covers the inverter-sizing side, and the [5-step hybrid inverter selection guide](/blog/how-to-choose-hybrid-solar-inverter/) walks through matching the inverter itself to your roof and backup needs; this post focuses exclusively on the battery bank. For EPCs modelling storage capacity across multiple client sites, [SurgePV's battery and energy storage sizing tools](https://surgepv.com/hub/energy-storage/battery-sizing/) automate a version of the same load-and-duration calculation used here.

## Step 1: Identify Critical Backup Loads (Not Total Home Load)

Walk through your home and list every appliance you genuinely need running during a power cut. Be honest: the air conditioner is a comfort; the refrigerator, fan, and lights are necessities. The following table shows typical loads for a 3BHK and a 2BHK Indian home.

| Appliance | Typical Power | 3BHK Count | 3BHK Watts | 2BHK Count | 2BHK Watts |
| --- | --- | --- | --- | --- | --- |
| Ceiling fan | 70 W | 4 | 280 W | 2 | 140 W |
| LED lights (12 W each) | 12 W | 10 | 120 W | 6 | 72 W |
| Refrigerator (single door) | 150 W | 1 | 150 W | 1 | 150 W |
| Wi-Fi router | 15 W | 1 | 15 W | 1 | 15 W |
| Phone chargers | 20 W each | 4 | 80 W | 2 | 40 W |
| Television | 80 W | 1 | 80 W | 1 | 80 W |
| **Critical load total** | | | **725 W** | | **497 W** |

These figures assume no air conditioning and no water pump during the cut. Add a 1 HP water pump (750 W, running 30 minutes per day) if your building relies on motor-fed water during cuts. A typical 3BHK critical load lands at 700–900 W continuous; a 2BHK at 400–600 W. Round up to the nearest 0.25 kW for margin.

For the purposes of the worked examples in this guide, use 2 kW for the 3BHK Lucknow home (includes some intermittent higher loads) and 0.75 kW for the 2BHK Mumbai home.

## Step 2: Set Backup Duration from Local Load-Shedding Data

Your battery must hold enough energy to cover the longest typical power cut in your district, not just the average cut, but the 90th-percentile outage that happens on the worst normal summer day. Using average data will leave you short of power on the days you need it most.

> **6–12 hours.** The range of daily load-shedding reported in rural Uttar Pradesh during peak summer months (April–June). Urban UP districts average 4–6 hours, while the national average is below 2 hours in well-served metros. *Source - [Central Electricity Authority, Annual Report on Power Sector Statistics](https://cea.nic.in/), 2026.*

State-level benchmarks to use when designing battery backup:

- **Lucknow (urban UP)**: 6–8 hours of daily cuts in April–June. Design for 8 hours.
- **Rural UP / Bihar / Jharkhand**: 10–14 hours on the worst days. Design for 12 hours minimum.
- **Mumbai (MSEDCL areas)**: under 2 hours even in summer. Design for 2–3 hours.
- **Bengaluru / Chennai (BESCOM / TNEB urban)**: under 1 hour; battery may be optional.
- **Rural Maharashtra (MSEDCL)**: 6–10 hours. Design for 8 hours.

The [solar inverter for power-cut backup guide](/blog/solar-inverter-power-cut-backup/) covers state-level load-shedding data in more detail. For the worked examples here, use 8 hours for Lucknow and 2 hours for Mumbai.

## The BLADE Method: Five Steps to a Correctly Sized Battery Bank

The BLADE Method (Backup Load Assessment and Design Engine) is Qbits Energy's proprietary battery sizing framework, built from the field data of thousands of residential hybrid installations across India. It resolves the five most common sizing errors in a single structured pass.

### Step 1: Backup Load (W)

List critical appliances and sum their wattage. Add 15% margin for startup surges and measurement error. Convert to kW.

*Lucknow example:* Base critical load = 1.75 kW → with 15% margin = **2.0 kW**
*Mumbai example:* Base critical load = 0.65 kW → with 15% margin = **0.75 kW**

### Step 2: Local Duration (hours)

Use the 90th-percentile outage duration from local DISCOM data, power-cut tracking apps (Electricity Department apps for your state), or neighbour experience across the last two summers.

*Lucknow:* **8 hours** | *Mumbai:* **2 hours**

### Step 3: Actual kWh Required

Multiply load by duration to get the usable energy needed:

*Lucknow:* 2.0 kW × 8 h = **16 kWh usable**
*Mumbai:* 0.75 kW × 2 h = **1.5 kWh usable**

### Step 4: Gross kWh (÷ DoD)

[Depth of discharge](/glossary/battery-dod/) (DoD) is the percentage of battery capacity you can safely use. LFP (LiFePO4) batteries support 80% DoD over 3,000–6,000 cycles. Lead-acid batteries should be limited to 50% DoD to stay above 500 cycles.

Gross kWh = Usable kWh ÷ DoD

*Lucknow (LFP at 0.80 DoD):* 16 ÷ 0.80 = **20 kWh battery bank**
*Lucknow (lead-acid at 0.50 DoD):* 16 ÷ 0.50 = **32 kWh battery bank**
*Mumbai (LFP at 0.80 DoD):* 1.5 ÷ 0.80 = **1.875 kWh → round up to 2.4 kWh** (nearest standard unit)

### Step 5: Engineering Fit (charge current and voltage)

Cross-check that the selected battery bank is compatible with the inverter's charge current and system voltage. This step is described in full in the next two sections.

The BLADE Method is faster to run than it looks. A homeowner with a clear load list and local outage data can complete all five steps in under 15 minutes and arrive at a commercially viable battery specification.

## Step 4: Match Battery to Inverter Charge and Discharge Current

Battery safety and longevity depend on staying within the manufacturer's maximum charge and discharge [C-rate](/glossary/c-rate/). A C-rate of 1C means a full charge or discharge in one hour; 0.5C means two hours; 0.25C means four hours.

Most residential LFP batteries are rated for 0.5C continuous charge and 1C continuous discharge. This means a 10 kWh LFP bank should not receive more than 5 kW of charging power continuously, and can deliver up to 10 kW of discharge power (though the inverter's rated output is usually the binding constraint).

Check your hybrid inverter's specification sheet for two numbers:

1. **Maximum charge current**: typically expressed in amperes (A) at the battery voltage. A 5 kW hybrid inverter at 48V might list a 100 A maximum charge current. At 48V, 100 A = 4.8 kW of charging power.
2. **Maximum discharge current**: usually equals the inverter's rated output power divided by the nominal battery voltage.

| Inverter size | Typical 48V charge current | Max battery charge rate | Minimum battery size at 0.5C |
| --- | --- | --- | --- |
| 3 kW | 60 A | 2.88 kW | 5.76 kWh |
| 5 kW | 100 A | 4.80 kW | 9.60 kWh |
| 7.5 kW | 150 A | 7.20 kW | 14.40 kWh |
| 10 kW (96V) | 100 A | 9.60 kW | 19.20 kWh |

If your calculated battery bank is smaller than the minimum at 0.5C, the inverter will charge the bank at a rate above what the battery prefers. The [BMS](/glossary/bms/) will throttle the current automatically, but you lose recharge speed. If the bank is much larger than necessary, the solar array may not fully recharge it in a single day, the next section on panel sizing addresses this.

The practical fix is straightforward: if your backup calculation yields a small bank (say, 5 kWh) but your 5 kW inverter pushes 100 A at 48V, configure the inverter's charge current limit in the settings menu to 50 A (2.4 kW) to keep the bank within 0.5C. Every quality hybrid inverter sold in India includes this parameter.

## Step 5: Choosing Between a 48V and 96V Battery System

Battery system voltage is determined by the hybrid inverter model you purchase, not by user preference. The inverter datasheet specifies the battery voltage range it accepts, typically 40–58V for a 48V system or 80–115V for a 96V system. Your battery bank must fall within that range at all states of charge.

### 48V Systems

A 48V architecture uses 16 LFP cells in series (3.2 V nominal each = 51.2 V). This is the standard for hybrid inverters rated at 3–7 kW. The advantages are a wider selection of compatible battery modules, lower cell count, and easier installation. The limitation is current: at 48V, a 5 kW load draws approximately 104 A, which requires substantial cable cross-sections for runs over 3 metres.

### 96V Systems

A 96V (or 100.8V) architecture uses 32 LFP cells in series. It is used with hybrid inverters rated 7–15 kW. Higher voltage halves the current for the same power, which reduces cable losses and allows thinner cable runs, important when the battery is located in a different room from the inverter. The downside is a higher minimum battery module cost (more cells per string) and fewer off-the-shelf compatible battery brands.

### Making the Decision

| | 48V System | 96V System |
| --- | --- | --- |
| **Inverter range** | 3–7 kW | 7–15 kW |
| **LFP cells in series** | 16 cells | 32 cells |
| **Current at 5 kW** | ~104 A | ~52 A |
| **Cable requirement** | Heavier for long runs | Lighter, easier to route |
| **Battery module availability** | Wide - most Indian market | Narrower - fewer brands |
| **Best for** | 2–4 BHK homes | Large homes, villas, small commercial |

For the Lucknow 3BHK with a 5 kW hybrid inverter and 20 kWh LFP bank: select two 10 kWh LFP modules in parallel at 48V. For the Mumbai 2BHK with a 3 kW inverter and 2.4 kWh bank: a single 2.56 kWh LFP module at 48V is sufficient.

More detail on the decision between on-grid and hybrid architectures is covered in the [on-grid vs hybrid inverter comparison](/blog/on-grid-vs-hybrid/), which also addresses the financial breakeven point.

## LFP vs Lead-Acid: The Battery Chemistry Decision

The choice between [LFP batteries](/glossary/lfp-battery/) and [lead-acid batteries](/glossary/lead-acid-battery/) is arguably more consequential than battery sizing itself, because chemistry determines DoD, cycle life, temperature tolerance, and maintenance burden.

### LFP (LiFePO4) Batteries

LFP batteries deliver 3,000–6,000 charge cycles at 80% DoD when kept between 10 °C and 45 °C. In practical Indian terms, a battery cycled once per day lasts 8–16 years. LFP cells do not require water top-up, equalisation charging, or ventilation for hydrogen off-gassing. They also have a flat discharge curve - [battery state of charge](/glossary/battery-soc/) stays between 51V and 53V for most of the discharge cycle on a 48V system, which means the inverter output voltage is stable throughout the backup period.

The upfront cost of LFP in India has fallen sharply: 10 kWh of LFP storage costs approximately ₹60,000–₹90,000 in 2026, down from ₹1.2 lakh two years ago. According to [IRENA's battery storage cost report](https://www.irena.org/Publications/2023/Aug/Renewable-power-generation-costs-in-2022), utility-scale LFP costs have dropped 89% since 2010, and the residential segment has followed with a 12–18 month lag.

### Lead-Acid Batteries (VRLA / Flooded)

Lead-acid batteries (whether flooded tubular or VRLA (valve-regulated) sealed) are the incumbent technology in Indian UPS and solar backup systems. They cost roughly ₹8,000–₹12,000 per 100 Ah at 12V (1.2 kWh), making a 10 kWh bank cost approximately ₹67,000–₹1,00,000 at first purchase. However, their 500–800 cycle life at 50% DoD means replacement every 2–4 years in daily cycling applications.

A 10-year total cost comparison for a 10 kWh bank cycled daily:

| | LFP | Flooded Lead-Acid |
| --- | --- | --- |
| **Initial cost** | ₹75,000 | ₹80,000 |
| **Cycle life at design DoD** | 4,000 cycles | 600 cycles |
| **Replacement frequency** | Once in 10 years | 3–4 times |
| **Total battery cost (10 yr)** | ₹75,000 | ₹2,40,000–₹3,20,000 |
| **Maintenance** | None | Quarterly water top-up (flooded) |
| **Temperature tolerance** | 10–45 °C | 20–35 °C ideal |
| **BMS communication** | CAN / RS485 with inverter | Voltage-based only |

The 10-year maths strongly favours LFP except in one scenario: a tight initial budget where the homeowner plans to replace the system within three years. In that case, lead-acid at 50% DoD bridges the gap at lower upfront cost.

The [best hybrid solar inverter guide](/blog/best-hybrid-solar-inverter-india-2026/) provides a comparison of which brands recommend which battery chemistries and why.

## Common Mistakes in Hybrid Inverter Battery Sizing

Even technically-inclined homeowners fall into predictable traps when sizing a battery bank for the first time. The following four mistakes account for the majority of calls to Qbits service partners in the first year after installation.

### Sizing for Total Home Load Instead of Critical Load

The most expensive error. A homeowner reads that their home uses 20 kWh per day and buys a 25 kWh battery bank. During a power cut, they run air conditioners, geysers, and induction cooktops, and drain the battery in three hours. The battery bank should be sized for the load that actually runs during the cut: fans, lights, refrigerator, and router. Review Step 1 of the BLADE Method before signing any purchase order.

### Ignoring Inverter Charge Current Limits

A homeowner buys a small 5 kWh LFP battery for a 7.5 kW inverter. The inverter charges at 150 A at 48V (7.2 kW), which is a 1.44C rate for a 5 kWh bank. The BMS throttles the current, but if the BMS and inverter are not communicating properly (common with cheaper Chinese LFP modules sold without RS485 support), the battery charges above its rated C-rate on every sunny afternoon, degrading cells within 18 months. Always size the bank so the inverter's maximum charge current does not exceed 0.5C.

### Mismatching Battery Voltage to Inverter Input Range

A homeowner buys four 24V lead-acid batteries for a hybrid inverter that specifies a 40–58V battery input range. Four batteries wired in series deliver 96V, far above the inverter's limit. Two in series deliver 48V, which is within range, but that is only 50% of the originally planned capacity. Inverter voltage specifications are non-negotiable. Verify before purchasing a single cell.

### Choosing Lead-Acid Because It Is Familiar

Many Indian households have used lead-acid UPS batteries for decades and assume the same technology is appropriate for solar backup. The key difference is cycling frequency. A UPS battery may cycle once per week during irregular power cuts. A solar backup battery cycles once per day. At 365 cycles per year, a 600-cycle lead-acid battery reaches end of life in 18 months to two years. LFP at the same cycling rate lasts 8–12 years. The [MPPT vs PWM comparison](/blog/mppt-vs-pwm/) explains a similar principle for charge controllers: familiar technology is not always the right technology for a given duty cycle.

The [on-grid vs hybrid vs off-grid decision guide](/blog/on-grid-vs-hybrid-vs-off-grid-decision-guide/) also walks through the infrastructure decisions that sit upstream of battery sizing, including when battery storage makes financial sense at all.

## Worked Example 1: 3BHK in Lucknow (8-Hour Load-Shedding)

**Home profile:** Three-bedroom home in Lucknow, UP. Grid outages averaging 6–8 hours per day in April–June. Household has two adults and two children, working from home during cuts.

**BLADE Method applied:**

1. **Backup Load:** Fans (4 × 70 W = 280 W) + LED lights (8 × 12 W = 96 W) + refrigerator (150 W) + router (15 W) + laptop charger (65 W) + phone chargers (4 × 20 W = 80 W) + television (80 W) = 766 W base. Add 15% margin: 880 W ≈ **0.9 kW**. One water pump runs 30 min/day (750 W) adding 0.375 kWh. Round critical load to **1.0 kW continuous plus 0.375 kWh pump energy**.

2. **Local Duration:** 90th-percentile outage in Lucknow urban district = **8 hours**.

3. **Usable kWh:** (1.0 kW × 8 h) + 0.375 kWh pump = **8.375 kWh usable**. With a 1.5 kW air cooler running during the peak 4 hours of the day (not AC, a 180 W air cooler, not 1,500 W), add 0.72 kWh: **9.1 kWh usable rounded to 10 kWh for margin.**

4. **Gross kWh (LFP, 80% DoD):** 10 ÷ 0.80 = **12.5 kWh → select a 15.36 kWh bank** (two standard 7.68 kWh LFP modules in parallel) for additional headroom and longer cycle life.

5. **Engineering fit:** Hybrid inverter selected is a 5 kW 48V unit. Maximum charge current = 100 A = 4.8 kW. Charging rate on 15.36 kWh bank: 4.8 kW ÷ 15.36 kWh = **0.31C**: well within the 0.5C limit. System voltage: **48V** (two 7.68 kWh, 48V modules in parallel).

**Result:** 5 kW hybrid inverter + 15.36 kWh LFP bank at 48V. Cost estimate: inverter ₹85,000 + battery ₹1,10,000 = approximately **₹1,95,000 total**, excluding installation and panels.

## Worked Example 2: 2BHK in Mumbai (2-Hour Load-Shedding)

**Home profile:** Two-bedroom flat in Mumbai (MSEDCL suburban zone). Grid reliable with occasional 1–2 hour outages during monsoon faults or planned maintenance.

**BLADE Method applied:**

1. **Backup Load:** Fans (2 × 70 W = 140 W) + LED lights (5 × 12 W = 60 W) + refrigerator (150 W) + router (15 W) + phone chargers (2 × 20 W = 40 W) = 405 W. Add 15% margin: **470 W ≈ 0.5 kW**.

2. **Local Duration:** 90th-percentile outage in Mumbai suburban = **2 hours**.

3. **Usable kWh:** 0.5 kW × 2 h = **1.0 kWh usable**. Adding a television (80 W) and a laptop: 1.2 kWh usable with comfort margin.

4. **Gross kWh (LFP, 80% DoD):** 1.2 ÷ 0.80 = **1.5 kWh → select a 2.56 kWh LFP module** (the smallest standard residential module) to avoid ordering a fractional custom pack.

5. **Engineering fit:** A 3 kW 48V hybrid inverter with 60 A maximum charge current = 2.88 kW charging. On 2.56 kWh bank: 2.88 ÷ 2.56 = **1.12C**: too high. Configure the inverter's charge current limit to 25 A (1.2 kW), giving 0.47C. Alternatively, select a 5.12 kWh module to bring the natural charge rate below 0.5C without configuration.

**Result:** 3 kW hybrid inverter + 5.12 kWh LFP bank at 48V (recommended over the minimum 2.56 kWh to avoid charge current management). Cost estimate: inverter ₹55,000 + battery ₹40,000 = approximately **₹95,000 total**.

> **₹40,000.** The approximate cost of a 5 kWh LFP battery module from a BIS-compliant Indian manufacturer in mid-2026, down from ₹65,000 two years ago. *Source - [JMK Research, India Battery Storage Market Report](https://jmkresearch.com/), Q1 2026.*

The Mumbai example highlights an important principle: in low-outage cities, the battery bank may be undersized relative to the inverter's charging capacity, requiring a deliberate current limit in the inverter settings. This is not a defect, it is standard practice for grid-reliable areas where a small battery is a convenience purchase rather than a survival requirement.

## How Many Solar Panels Are Needed to Recharge the Battery?

Battery sizing does not exist in isolation. The solar array must be large enough to power the home's daytime load **and** fully recharge the battery before the next outage begins. In high-outage states, this means recharging overnight is not an option, the entire recharge must come from solar during daylight hours.

The recharge energy formula:

**Solar kWp required for recharge = (Battery kWh ÷ DoD × 1.0) ÷ ([Peak Sun Hours](/glossary/peak-sun-hours/) × 0.80)**

The 0.80 factor accounts for panel degradation, cable losses, MPPT efficiency, and the battery's [round-trip efficiency](/glossary/round-trip-efficiency/) during charge and discharge. Peak sun hours for major Indian cities:

| City | Peak Sun Hours (annual average) | Peak Summer |
| --- | --- | --- |
| Lucknow | 5.2 h | 5.8 h |
| Jaipur | 5.8 h | 6.4 h |
| Mumbai | 4.8 h | 5.5 h |
| Bengaluru | 5.1 h | 5.5 h |
| Chennai | 5.5 h | 6.0 h |

*Source - [NREL Global Solar Atlas](https://globalsolaratlas.info/) and [IEA Photovoltaic Power Systems Programme](https://iea-pvps.org/).*

For the Lucknow 3BHK with a 15.36 kWh bank at 80% DoD, meaning 12.3 kWh usable is drawn each day:

- Solar kWp for recharge = 12.3 ÷ (5.2 × 0.80) = **2.96 kWp dedicated to recharge**
- The home's daytime load of approximately 3 kWh needs another 0.72 kWp
- Total array: approximately **3.7 kWp minimum → round up to 5 kWp** for margin and future load growth

A 5 kWp array on a 5 kW hybrid inverter is a standard residential sizing. The [DC oversizing guide](/blog/dc-oversizing-in-solar/) explains why installing 6–6.5 kWp on a 5 kW inverter is often beneficial in UP's cloud-prone monsoon months.

## Where Qbits Fits

Homeowners who have run the BLADE Method and arrived at a battery specification need a hybrid inverter that supports the battery voltage range, communicates with BMS over RS485 or CAN, and is covered by a warranty long enough to see the battery through its full cycle life. Qbits HS and HT series hybrid inverters are built for exactly this scenario, ALMM-listed for PM Surya Ghar subsidy eligibility, India-grid-tuned to handle 180–270V input fluctuations, and backed by a 12-year full replacement warranty that outlasts the battery bank itself.

- **[Hybrid Inverters](/hybrid-inverter/)**: HS and HT series from 3 kW to 50 kW, supporting 48V and 96V battery systems with RS485 BMS communication and configurable charge current limits.
- **[On-Grid Inverters](/on-grid-inverter/)**: TLS and TLD series for homes in grid-reliable cities where battery backup is not a priority.
- **[String Sizing Calculator](/string-sizing-calculator/)**: confirm panel string compatibility with your chosen hybrid inverter model before finalising the design.
- **[Authorised Service Partners](/authorized-service-partners/)**: pincode-searchable network that handles BMS configuration, battery commissioning, and the 12-year warranty RMA process.

Once the battery size is confirmed and the inverter model is selected, the final step is commissioning, configuring the charge current, DoD limit, and time-of-use settings in the inverter's control panel. This is typically handled by your turnkey installer as part of residential solar EPC scope rather than something a homeowner configures alone. [Talk to a Qbits engineer](/contact-us/) about your specific load profile and local outage data; most sizing consultations are completed within 24 hours and come with a written recommendation you can share with your installer.
