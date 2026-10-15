---
title: "How Much Electricity Does Solar Generate in India?"
excerpt: "How much solar energy is generated in India varies by state. Rajasthan yields about 1,650–1,850 kWh/kW/year and Kerala about 1,140–1,370 kWh/kW/year at a performance ratio of 0.78. Use this state-wise guide to calculate your system's output."
description: "Solar generation in India by state: Rajasthan about 1,650–1,850 kWh/kW/year, Kerala 1,140–1,370 (PR 0.78). Use the formula to estimate your output."
category: Guide
date: 2026-06-05
updatedDate: 2026-10-14
readTime: "16 min"
image: "/og/blog-how-much-electricity-solar-generates-india.webp"
author: "Keyur Rakholiya"
keywords:
  - how much solar energy generated india
  - solar generation by state india
  - solar yield india kWh per kW
  - solar electricity output india
  - solar units per day india
faqs:
  - q: "How many units does a 1 kW solar panel generate per day in India?"
    a: "A 1 kW solar system generates roughly 3 to 5 units (kWh) per day on average across Indian states. The precise figure varies by location: Rajasthan delivers about 4.5–5.1 units/day, Karnataka and Tamil Nadu about 3.9–4.3 units/day, and Kerala and the north-east roughly 3.0–3.8 units/day due to monsoon cloud cover (state figures from this guide's table at a performance ratio of 0.78). Annual generation per kW ranges from about 1,140 kWh in Kerala to about 1,850 kWh in Rajasthan."
  - q: "How many units does a 3 kW solar system generate per month?"
    a: "A 3 kW solar system generates approximately 270–460 units per month depending on the state (state figures at a performance ratio of 0.78). In Rajasthan: 410–460 units/month. In Karnataka: 355–390 units/month. In Kerala: 285–345 units/month. Annual generation for a 3 kW system is roughly 4,200–5,000 kWh in mid-range states. Actual output also depends on panel orientation, tilt angle, soiling, and shading from nearby objects."
  - q: "What is peak sun hours and how does it affect solar generation?"
    a: "Peak sun hours (PSH) is the number of hours per day during which solar irradiance equals 1,000 W per square metre - the standard test condition for panel ratings. It is not total daylight hours. Rajasthan has about 5.8–6.5 PSH; Karnataka about 5.0–5.5 PSH; Kerala about 4.0–4.8 PSH (the GHI ranges used in this guide). To estimate daily generation: multiply system kW by PSH. A 3 kW system in Bangalore with 5.2 PSH generates approximately 15.6 units per day under ideal conditions."
  - q: "How does monsoon affect solar generation in India?"
    a: "Monsoon cloud cover reduces solar generation to 15–40% of clear-sky capacity on heavily overcast days. In Rajasthan and Gujarat, the monsoon lasts 2–3 months and has limited impact on annual yield. In Kerala, the monsoon lasts June–September (4 months) and reduces annual generation significantly - a 3 kW system may generate only about 250–350 units a month during the monsoon months. Proper annual yield modelling should account for actual monthly irradiance data, not just clear-sky calculations."
  - q: "Does panel orientation affect how much electricity solar generates?"
    a: "Panel orientation significantly affects generation. South-facing panels at the optimal tilt angle (latitude ± 5°) deliver peak annual yield. East-facing panels lose approximately 15–20% compared to south-facing. West-facing panels lose approximately 12–18%. North-facing panels lose 30–50% and are generally not viable except in very high irradiance locations. Dual-MPPT inverters allow east and west strings to be optimised independently, recovering some of the yield lost from sub-optimal orientation."
  - q: "What is performance ratio (PR) in a solar system?"
    a: "Performance ratio (PR) is the ratio of actual system output to the theoretical output if the system operated at standard test conditions (STC) 100% of the time. A PR of 75–85% is considered good for Indian residential installations. Losses that reduce PR include inverter conversion losses (1–3%), cable resistive losses (1–2%), soiling and shading (5–15%), and temperature derating (5–10% in hot Indian climates). Higher-quality inverters with better MPPT algorithms and lower internal losses contribute to a higher PR."
  - q: "How do I calculate how many units my solar system will generate?"
    a: "To estimate annual generation: System kW × Annual Peak Sun Hours (from state data) × Performance Ratio. Example: 5 kW system in Pune, GHI 5.5 kWh/m²/day = 5.5 × 365 = about 2,008 annual peak sun hours, PR 0.80 = 5 × 2,008 × 0.80 = about 8,030 kWh per year (669 units/month). Your installer should provide a simulation report from PVSyst or similar software using actual irradiance data for your pincode - not just a rule-of-thumb multiplier."
  - q: "How much electricity does a 5 kW solar system generate in India?"
    a: "A 5 kW solar system generates approximately 5,400–9,250 units per year depending on the state (state figures at a performance ratio of 0.78). In Rajasthan: 8,250–9,250 units/year. In Karnataka: 7,100–7,850 units/year. In Delhi: 6,850–7,400 units/year. In Kerala: 5,700–6,850 units/year. Monthly averages vary significantly - peak summer months in Rajasthan can produce about 850–930 units/month from a 5 kW system, while monsoon months in Kerala may produce only about 420–580 units."
---

The most fundamental question any Indian homeowner asks before investing in solar is also the most practical: how many electricity units will my system actually produce? Not in an advertisement, not on a datasheet, but on your specific rooftop in your specific state. This guide answers that question with state-by-state data, real worked examples, and a named framework for calculating your own system's expected output.

> [!KEYTAKEAWAYS]
> - At a performance ratio of 0.78, annual specific yield ranges from about 1,140 kWh/kW in Kerala to 1,850 kWh/kW in Rajasthan, calculated from each state's irradiance range with the formula below.
> - A 3 kW system generates roughly 3,420-4,110 units/year in Kerala versus 4,950-5,550 units/year in Rajasthan.
> - Formula: Annual Yield (kWh/kW) = GHI (kWh/m²/day) x 365 x Performance Ratio (0.75-0.82).
> - Monsoon cloud cover can cut generation to 15-40% of clear-sky output on heavily overcast days.
> - Soiling, shading, panel degradation, and high ambient temperature all pull real output below datasheet estimates.

Understanding generation expectations before you buy prevents the most common source of post-installation disappointment: a system sized to the wrong state benchmark. For the basics of how a solar system works, see [how does a solar power system work](/blog/how-solar-power-system-works-india/).

## Why Solar Generation Varies So Much Across India

India stretches from latitude 8° N (Kanyakumari, Tamil Nadu) to 37° N (Ladakh), and from sea-level coastal humidity to high-altitude desert. The solar resource across this geography varies more than most homeowners realise.

Three factors drive state-to-state variation in solar electricity generation:

- **[Global Horizontal Irradiance (GHI)](/glossary/ghi/)**: total solar energy reaching a horizontal surface per square metre per day, measured in kWh/m²/day. This is the primary driver of panel output.
- **Cloud cover and monsoon intensity**: cloud cover reduces irradiance from beam (direct) to diffuse radiation, cutting output to 15–40% of clear-sky values on heavily overcast days.
- **Temperature**: higher ambient temperatures reduce panel output. Silicon panels lose approximately 0.4–0.5% output per °C above 25 °C (the standard test condition temperature). Rajasthan's summer rooftops reach 65–70 °C panel temperature, reducing output by 16–20% compared to datasheet ratings.

The net result of these three factors is the **annual specific yield**: units generated per kW of installed capacity per year. This number is the single most useful metric for comparing solar potential across Indian states.

> **5–6 kWh/m²/day.** Average solar irradiance across most of India, one of the highest levels in the world for a major developing economy. *Source - [NREL India Solar Resource Data](https://data.nlr.gov/submissions/43), 2024.*

## The State-by-State Solar Yield Table

The table below shows annual specific yield for each major Indian state, The GHI ranges are this guide's approximate state-level figures (check your pincode with NREL's PVWatts or an installer's simulation), and every yield figure is calculated from them with the formula below at PR 0.78, south-facing, optimal tilt.

Table: Annual specific yield and 3 kW and 5 kW system generation by state, calculated as GHI × 365 × 0.78 (rounded to the nearest 10 kWh/kW)

| State / Region | GHI (kWh/m²/day) | Annual Specific Yield (kWh/kW/yr) | 3 kW System Annual Generation | 5 kW System Annual Generation |
| --- | --- | --- | --- | --- |
| Rajasthan | 5.8–6.5 | 1,650–1,850 | 4,950–5,550 units | 8,250–9,250 units |
| Gujarat | 5.5–6.0 | 1,570–1,710 | 4,710–5,130 units | 7,850–8,550 units |
| Madhya Pradesh | 5.3–5.8 | 1,510–1,650 | 4,530–4,950 units | 7,550–8,250 units |
| Maharashtra | 5.3–5.7 | 1,510–1,620 | 4,530–4,860 units | 7,550–8,100 units |
| Karnataka | 5.0–5.5 | 1,420–1,570 | 4,260–4,710 units | 7,100–7,850 units |
| Tamil Nadu | 5.0–5.5 | 1,420–1,570 | 4,260–4,710 units | 7,100–7,850 units |
| Telangana/AP | 5.0–5.4 | 1,420–1,540 | 4,260–4,620 units | 7,100–7,700 units |
| Delhi / Haryana | 4.8–5.2 | 1,370–1,480 | 4,110–4,440 units | 6,850–7,400 units |
| UP / Bihar | 4.8–5.0 | 1,370–1,420 | 4,110–4,260 units | 6,850–7,100 units |
| West Bengal | 4.5–5.0 | 1,280–1,420 | 3,840–4,260 units | 6,400–7,100 units |
| Odisha | 4.5–5.0 | 1,280–1,420 | 3,840–4,260 units | 6,400–7,100 units |
| Kerala | 4.0–4.8 | 1,140–1,370 | 3,420–4,110 units | 5,700–6,850 units |
| Assam / NE | 3.8–4.5 | 1,080–1,280 | 3,240–3,840 units | 5,400–6,400 units |
| Himachal Pradesh | 4.5–5.5 | 1,280–1,570 | 3,840–4,710 units | 6,400–7,850 units |
| Punjab | 4.8–5.2 | 1,370–1,480 | 4,110–4,440 units | 6,850–7,400 units |

*GHI ranges: approximate state-level values used in this guide, see [NREL India Solar Resource Data](https://data.nlr.gov/submissions/43) for the underlying resource maps. Yields calculated as GHI × 365 × 0.78.*

```chart
type: hbar
title: Annual specific yield by state (kWh per kW per year), selected states
unit: "kWh/kW/yr"
source: "Calculated in this article as GHI x 365 x 0.78 from the state GHI ranges in the table above (approximate state-level values; resource maps at NREL India Solar Resource Data)"
sourceUrl: https://data.nlr.gov/submissions/43
note: "Bars show the range given in the table. Selected states only; see the table for all fifteen."
data:
  - { label: "Rajasthan", min: 1650, max: 1850 }
  - { label: "Gujarat", min: 1570, max: 1710 }
  - { label: "Maharashtra", min: 1510, max: 1620 }
  - { label: "Karnataka", min: 1420, max: 1570 }
  - { label: "Delhi / Haryana", min: 1370, max: 1480 }
  - { label: "West Bengal", min: 1280, max: 1420 }
  - { label: "Kerala", min: 1140, max: 1370 }
  - { label: "Assam / NE", min: 1080, max: 1280 }
```

## The State-by-State Solar Yield Calculator

This four-step framework lets you compute your expected annual generation from any system size in any Indian state.

> [!FORMULA] Annual specific yield
> Annual Yield (kWh/kW) = GHI (kWh/m²/day) × 365 × Performance Ratio (0.75 to 0.82)

### The State-by-State Solar Yield Calculator

<!-- steps -->
1. **Look up your state's GHI**: Use the table above, or look up your location in the [Global Solar Atlas](https://globalsolaratlas.info/) (World Bank Group, Solargis). For precision, use your pincode-level irradiance from NREL's PVWatts tool.

2. **Calculate your annual specific yield**: Apply a [performance ratio (PR)](/glossary/pr/) of 0.75–0.82 depending on system quality. Formula: `Annual Yield (kWh/kW) = GHI (kWh/m²/day) × 365 × PR`. For Bangalore with GHI of 5.2 and PR 0.80: `5.2 × 365 × 0.80 = 1,518 kWh/kW/yr`.

3. **Multiply by system size**: For a 5 kW system in Bangalore: `5 × 1,518 = 7,590 kWh per year` (approximately 633 units/month average).

4. **Adjust for orientation and shading**: South-facing = 100%. West-facing = subtract 12–18%. East-facing = subtract 15–20%. Partial shading = subtract 10–30% depending on severity. Final adjusted yield is your realistic annual generation estimate.

This framework produces a conservative, real-world estimate. Many installers quote the higher end of the range without accounting for PR losses, temperature derating, and shading, comparing your calculated estimate to their quote is useful quality control.

## Monthly Variation: Why Summer and Monsoon Matter

Annual averages conceal the dramatic month-to-month variation in solar generation across Indian states. Understanding this variation helps you budget for your electricity bill correctly and set realistic expectations.

**3 kW system in Rajasthan, monthly generation (approximate):**

Table: Approximate monthly generation of a 3 kW system in Rajasthan

| Month | Generation (units) | Notes |
| --- | --- | --- |
| January | 380–420 | Low sun angle, clear skies |
| February | 420–460 | Improving angle |
| March | 470–510 | Peak generation season |
| April | 500–540 | High irradiance, warm panels |
| May | 510–560 | Peak irradiance, some temperature derating |
| June | 420–480 | Monsoon onset, intermittent cloud |
| July | 320–380 | Full monsoon, significant cloud |
| August | 330–390 | Monsoon continues |
| September | 400–450 | Clearing up |
| October | 450–490 | Good generation, lower angles |
| November | 400–440 | Winter approaching |
| December | 360–400 | Shortest days |
| **Annual total** | **4,960–5,520** | **Average: 413–460/month** |

In Kerala, the June–September monsoon months can produce as few as 250–350 units per month from a 3 kW system, roughly half the annual average. This seasonal variation affects net metering credit accumulation and bill management strategies.

> **171.05 GW.** India's cumulative installed solar capacity on 30 September 2026, of which 33.41 GW was grid-connected rooftop solar. *Source - MNRE capacity data as reported by [Saur Energy](https://www.saurenergy.com/solar-energy-news/india-adds-2456-gw-renewable-energy-capacity-in-h1-fy-2026-27-12637483), 8 October 2026.*

## Real Worked Examples: 3 kW, 5 kW, and 10 kW Systems

**Example 1: 3 kW system in Jaipur, Rajasthan**
- Annual specific yield: 1,750 kWh/kW/yr (middle of the Rajasthan range in the table)
- Annual generation: 3 × 1,750 = 5,250 units
- Monthly average: 438 units
- At an assumed ₹7.5/unit tariff: ₹39,375/year savings
- Self-consumption (70%, assumed): 3,675 units directly used
- Export (30%): 1,575 units at [net metering](/glossary/net-metering/) credit

**Example 2: 5 kW system in Bengaluru, Karnataka**
- Annual specific yield: 1,500 kWh/kW/yr (middle of the Karnataka range in the table)
- Annual generation: 5 × 1,500 = 7,500 units
- Monthly average: 625 units
- At an assumed ₹8/unit tariff: ₹60,000/year savings
- Self-consumption (65%, assumed): 4,875 units directly used
- Export (35%): 2,625 units at net metering credit

**Example 3: 10 kW system in Pune, Maharashtra**
- Annual specific yield: 1,560 kWh/kW/yr (middle of the Maharashtra range in the table)
- Annual generation: 10 × 1,560 = 15,600 units
- Monthly average: 1,300 units
- At an assumed ₹9/unit tariff: ₹1,40,400/year savings
- Self-consumption (60%, assumed): 9,360 units directly used
- Export (40%): 6,240 units at net metering credit

The self-consumption ratio matters because exported units typically earn a lower return than directly consumed units in most net metering structures. Maximising self-consumption through load scheduling (running high-consumption appliances during the day) improves overall financial return.

## What Reduces Solar Generation Below Expectations

Several factors can reduce actual generation below the theoretical estimates shown above. Understanding them helps you evaluate installer quotes critically.

- **[Soiling](/glossary/soiling/) and dust**: Dust accumulation on panel surfaces reduces generation by 5–20% in dusty regions (Rajasthan, UP, Delhi). Monthly cleaning in the dry season restores output. For tips on maximising output, see [how to maximise solar output in Indian climate](/blog/maximize-solar-output-indian-climate/).
- **Shading**: A shadow covering just 10% of one panel can reduce that entire string's output by 25–40% due to series connection physics. A thorough [shade analysis](https://surgepv.com/shadow-analysis/) at the site survey stage is non-negotiable.
- **Panel [degradation](/glossary/degradation/)**: Quality panels degrade at 0.5–0.7% per year. At Year 10, output is approximately 95% of original; at Year 25, approximately 80–85%.
- **Inverter clipping**: If your inverter is undersized relative to the panel array, it limits output at peak irradiance hours, the inverter effectively clips the peak. See [inverter clipping explained](/blog/inverter-clipping-explained/) for the diagnosis and fix.
- **High ambient temperature**: Panel output drops 0.4–0.5% per °C above 25 °C. On a 45 °C ambient day in Rajasthan, panel temperatures reach 60–70 °C, reducing nameplate output by 14–18%.

## How to Use This Data When Evaluating Installer Quotes

Every reputable solar installer should provide a **Detailed Project Report (DPR)** or [simulation software](https://surgepv.com/solar-simulation-software/) output that shows:

> [!CHECKLIST] A good simulation or DPR output shows
> - Monthly generation estimates for all 12 months
> - Annual generation total
> - Performance ratio assumed
> - Irradiance source (NREL, NASA, or state-specific data)
> - Shading analysis if any obstruction exists

> [!TIP] Spot a lazy installer estimate
> If an installer quotes only the annual total without monthly breakdown, or uses a round-number multiplier like "1 kW = 5 units/day" for Kerala without qualification, that is a warning sign. Kerala's calculated output in this guide is closer to 3.1–3.8 units/kW/day, well below a simplified national average.

The [string sizing calculator](/string-sizing-calculator/) helps you verify whether the quoted panel and inverter combination is correctly matched for your state's irradiance profile.

## Where Qbits Fits in Maximising Your State's Solar Yield

- **[On-Grid Inverters](/on-grid-inverter/)**: Review the current product families and exact-model documents against the project design and utility requirements.
- **[Hybrid Inverters](/hybrid-inverter/)**: Review current QBH model documents and confirm the exact battery, firmware, PV, backup-output, transfer, communication, warranty and project requirements in writing.
- **[Authorised Service Partners](/authorized-service-partners/)**: Search the current directory, then confirm partner status, location coverage, service scope, response process and fees in writing.

[Contact Qbits](/contact-us/) with the exact model, site inputs and documents relevant to the request. Confirm the responsible party, deliverable, fees and response time after submission.
