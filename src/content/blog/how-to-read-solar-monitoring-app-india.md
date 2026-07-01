---
title: "How to Read Your Solar Inverter Monitoring App, Full Guide"
excerpt: "How to read your solar inverter monitoring app India: today's generation, grid export, self-consumption ratio, inverter temperature, MPPT voltage, and 6 daily numbers that matter."
category: Guide
date: 2026-06-05
readTime: "16 min"
image: "/blog-images/solar-inverter-monitoring-systems-in-india.svg"
author: "Keyur Rakholiya"
keywords:
  - solar inverter monitoring app india
  - how to read solar monitoring app
  - solar app metrics india
  - solar monitoring dashboard india
  - solar inverter data interpretation india
faqs:
  - q: "How do I read my solar inverter monitoring app in India?"
    a: "Start with Today's Generation (kWh) - compare it to the expected output for your system size and weather. Check Grid Export to see how many units were sent to the grid. Look at Self-Consumption Ratio - aim above 70%. Monitor Current Power (kW) against your system's rated capacity to detect real-time underperformance. Check Inverter Temperature - alert if above 65 °C. Review MPPT Voltage to ensure it falls within the inverter's operating range. These 6 metrics give you a complete daily health check."
  - q: "What is a good daily generation for a 3 kW solar system in India?"
    a: "A 3 kW solar system in most Indian states should generate 12–15 units (kWh) per day on a clear sunny day. On partly cloudy days, expect 6–10 units. In monsoon months, 3–6 units per day is normal due to cloud cover. In Rajasthan, a clear day can produce 16–18 units from a 3 kW system. In Kerala during monsoon, 4–6 units per day is normal. If your app shows consistently below 60% of the expected clear-sky output on multiple clear days, investigate for dust, shading, or inverter issues."
  - q: "What does grid export mean in the solar monitoring app?"
    a: "Grid export (also shown as 'export to grid', 'feed to grid', or 'sold units') is the number of kWh your solar system sent to the DISCOM grid when your panels generated more electricity than your home or business was consuming at that moment. These exported units are credited to your account under the net metering arrangement - you receive a monetary credit typically equal to your import tariff rate (in some states) or a lower feed-in rate. Track grid export monthly to verify it matches the credits shown on your DISCOM bill."
  - q: "What is self-consumption ratio in solar monitoring?"
    a: "Self-consumption ratio is the percentage of your solar generation that was directly used by your own appliances, as opposed to being exported to the grid. A self-consumption ratio of 70% means 70% of your solar power was used on-site (saving you the full grid tariff) and 30% was exported (earning you the typically lower export credit). Higher self-consumption maximises financial returns. You can improve self-consumption by running high-consumption appliances (washing machine, dishwasher, EV charging) during peak solar hours (10 AM–3 PM)."
  - q: "What inverter temperature is normal for solar systems in India?"
    a: "Normal inverter operating temperature during peak generation hours in India is 40–60 °C depending on ambient temperature and load. During Indian summers with ambient temperatures of 40–45 °C, inverter temperatures of 55–62 °C are normal. A sustained temperature above 65 °C is a warning sign - typically indicating blocked ventilation vents, insufficient wall clearance, or a partially failed cooling fan. Most inverters derate output (reduce generation) above 60–65 °C as a self-protection mechanism, which you will see as a midday dip in the current power reading."
  - q: "What should the MPPT voltage reading show in my solar app?"
    a: "MPPT voltage is the DC voltage at which the inverter is tracking the maximum power from your panel strings. This should fall within the inverter's published MPPT voltage range (typically 200–800 V for residential inverters) and should correlate with irradiance - higher irradiance means higher voltage up to the MPPT range ceiling. A persistent MPPT voltage near the lower limit of the range on clear days may indicate a string connection issue, a failed bypass diode, or undersized stringing. A voltage near the upper limit may indicate temperature derating or string over-voltage risk."
  - q: "How do I verify my solar app readings against my DISCOM bill?"
    a: "Each month, compare three numbers: (1) the app's total generation (kWh) - this should match the total generation recorded by the DISCOM's bidirectional meter; (2) the app's grid export (kWh) - this should match the 'export units' line on your DISCOM bill; and (3) your actual bill consumption - should equal total consumption minus solar self-consumption. A consistent 5–10% difference between app and bill may indicate a calibration mismatch between the inverter's internal meter and the DISCOM's meter - raise this with your installer or Qbits support."
  - q: "What are common fault codes in solar inverter apps in India?"
    a: "Common fault codes shown in Indian solar inverter monitoring apps include: Grid over-voltage or under-voltage (the grid supply is outside the inverter's 180–270 V tolerance range), Grid frequency fault (grid frequency is outside 47.5–51.5 Hz), Isolation fault (DC-to-ground insulation resistance has fallen below the safe threshold - typically a wiring issue), MPPT fault (string voltage is outside the MPPT range - check for open-circuit string or module fault), and Over-temperature (inverter exceeded its maximum operating temperature and shut down). Any recurring fault code should be reported to your installer for investigation."
---

Your solar monitoring app shows dozens of numbers, graphs, and alerts every day. Most homeowners glance at "Today's Generation" and assume everything is fine. This guide explains what every key metric means, what "good" looks like for your system in your state, and how to read the app to catch underperformance before it compounds into significant financial losses.

> **Direct answer.** The Solar App Daily Check: 6 Numbers That Matter are, Today's Generation (kWh), Lifetime Generation (kWh), Grid Export (kWh), Self-Consumption Ratio (%), Inverter Temperature (°C), and Current Power (W). Compare today's generation to the expected output for your system size and weather, track self-consumption above 70%, alert at inverter temperature above 65 °C, and verify MPPT voltage is within the inverter's operating range. The full interpretation guide for each metric is below.

After you understand the monitoring app, the natural next step is understanding what to expect across a full year, see [what to expect in Year 1 of solar ownership India](/blog/solar-year-1-ownership-guide-india/) for the month-by-month guide.

## Metric 1: Today's Generation (kWh)

Today's Generation is the total electrical energy your solar panels produced since midnight, displayed in kilowatt-hours (kWh). It is the single most important daily metric.

**What is a good number?**

| System Size | Rajasthan (Clear) | Karnataka (Clear) | Kerala (Monsoon) |
| --- | --- | --- | --- |
| 3 kW | 16–18 kWh | 13–16 kWh | 4–8 kWh |
| 5 kW | 26–30 kWh | 21–26 kWh | 6–12 kWh |
| 10 kW | 52–60 kWh | 43–52 kWh | 12–24 kWh |

**How to interpret it:**
- On a clear sunny day: expect 90–100% of the state benchmark above
- On a partly cloudy day: expect 40–70% of the benchmark
- On a heavily overcast or rainy day: expect 10–30% of the benchmark (diffuse radiation still generates power)

If your app consistently shows Today's Generation at less than 60% of the expected clear-sky figure on multiple clear days in a row, this is underperformance, investigate dust, shading, a string fault, or inverter issue.

**How it relates to your bill:** Multiply Today's Generation by 30 for an approximate monthly total. Compare that to your pre-solar monthly bill consumption to estimate how much of your consumption is being covered by solar.

## Metric 2: Lifetime Generation (kWh) and Money Saved

Lifetime Generation is the cumulative energy produced since the system was commissioned. This number grows every day and is the running total of your solar investment's output.

**How to calculate money saved:** Multiply Lifetime Generation by your effective tariff rate.

Example: Lifetime Generation = 12,500 kWh. Grid tariff = ₹8/unit. Approximate money saved = 12,500 × 8 = ₹1,00,000.

This is an approximation because some of those units were exported at the lower net-metering export rate rather than being self-consumed. For a more precise calculation: `(Self-consumed kWh × Grid tariff) + (Exported kWh × Export credit rate)`.

**Annual generation verification:** At the end of each year, compare your Lifetime Generation increment (this year's total) against the installer's initial generation estimate. If actual annual generation is consistently below the estimate by more than 10%, raise the issue formally with the installer, this may indicate underperformance covered by the performance guarantee.

According to [IRENA's Renewable Energy Statistics 2025](https://www.irena.org/Publications/2025/Mar/Renewable-Energy-Statistics-2025), India's rooftop solar systems deliver median annual yields of 1,200–1,600 kWh per kW depending on location, consistent with the state-specific data in [how much electricity does solar generate in India](/blog/how-much-electricity-solar-generates-india/).

## Metric 3: Grid Export (kWh)

Grid Export is the total energy your solar system sent to the DISCOM grid during the day. This happens when your panels produce more power than your home is consuming at that moment, typically midday when the sun is brightest and air conditioners have not yet started their peak afternoon cycle.

**Why it matters:**
- Exported units should appear as credits on your monthly DISCOM bill
- If the app shows significant export but your bill shows no export credit, there may be a net meter registration or calibration issue
- Very high export (above 50% of daily generation) indicates an opportunity to shift loads to solar hours, running the washing machine, water heater, or EV charger between 10 AM and 3 PM rather than in the evening

**Cross-checking with your bill:** Every month, note the app's total export figure. Your DISCOM bill's "units exported" line should match within 5%. A persistent difference suggests either the inverter's internal meter or the DISCOM's net meter has calibration drift. Net metering meters in India must comply with [CEA Metering Regulations](https://cea.nic.in/), if there is a persistent discrepancy, you can request the DISCOM to perform a meter accuracy test. See [how to apply for net metering in India](/blog/how-to-apply-net-metering-india/) for details on the process.

## Metric 4: Self-Consumption Ratio (%)

Self-consumption ratio is the percentage of your solar generation consumed directly by your own appliances: `Self-consumption % = (Generated kWh − Exported kWh) ÷ Generated kWh × 100`.

**Target:** Above 70%. Below 50% is a missed opportunity.

**Why it matters financially:** Self-consumed units save you the full grid tariff (e.g., ₹9/unit). Exported units earn the typically lower net-metering credit (e.g., ₹4.5/unit in Karnataka). A 1,000 kWh/month system with 80% self-consumption earns ₹7,200 from solar (800 × ₹9 + 200 × ₹4.5). The same system with 50% self-consumption earns ₹6,750 (500 × ₹9 + 500 × ₹4.5) - ₹450 less per month from the same generation.

**How to improve self-consumption:** Schedule high-consumption appliances (washing machine, dishwasher, pressure pump, EV charging) to run between 10 AM and 3 PM. In hybrid systems, programme the battery to absorb surplus generation rather than exporting it.

## Metric 5: Inverter Temperature (°C)

Inverter temperature is the internal operating temperature of the inverter, typically measured at the heatsink. Modern residential inverters generate 1–3% of their rated power as heat during AC conversion, this heat must be dissipated through the heatsink and cooling fins.

**Normal operating range:** 35–60 °C during peak generation hours on a hot Indian summer day.

**Warning threshold:** Above 65 °C sustained. Above 70 °C indicates a fault (blocked vents, ambient overheating, cooling fan failure).

**What to check if temperature is high:**
- Is the inverter mounted with at least 20 cm clearance on all sides?
- Is the inverter exposed to direct afternoon sunlight (it should be in shade)?
- Are the cooling fins blocked by dust or a wasp nest (common in India)?
- Is the cooling fan (if the inverter has one) running? Listen for the fan noise at peak afternoon hours.

According to [IEC 62109-1 safety standards for solar inverters](https://www.iec.ch/), inverters must operate safely within their rated temperature range and implement thermal protection mechanisms, meaning the automatic derating or shutdown at high temperatures is a design feature, not a malfunction.

**Temperature derating:** Most inverters automatically reduce output at high temperature to protect internal components. This shows up in the app as the Current Power reading falling below the expected value during 12–3 PM on a hot day, a characteristic afternoon dip that is more pronounced on summer days above 45 °C ambient. See [inverter overheating](/blog/inverter-overheating/) for the full diagnosis guide.

## Metric 6: MPPT Voltage (V) and Current Power (W)

These two metrics work together to tell you whether the inverter is operating at the optimal point on the panel's power curve.

**MPPT Voltage:** Should fall within the inverter's published MPPT range (typically 200–800 V for residential systems). On a clear morning as irradiance builds, MPPT voltage rises and stabilises in the mid-to-upper MPPT range. Persistent low MPPT voltage on clear days suggests a string fault (one or more panels are not contributing their full voltage) or a loose DC connection.

**Current Power (W):** Compare this to `System kW × Current Irradiance fraction`. If the sun is at 80% of peak irradiance (partly cloudy) and your 5 kW system shows 2 kW current power (40% of capacity), there may be a problem beyond cloud cover. On a fully clear midday, a 5 kW system should show 4.3–4.8 kW (accounting for temperature derating). Consistently below 80% of expected clear-sky output is the trigger for the diagnostic checks in [why is my solar inverter underperforming](/blog/solar-inverter-underperforming-india/).

## The Solar App Daily Check: 6 Numbers That Matter

Consolidating the six metrics into a daily 2-minute review routine.

### The Solar App Daily Check: 6 Numbers That Matter

1. **Today's Generation (kWh)**: Compare to clear-sky benchmark for your system and state. Below 60% on a clear day = investigate.

2. **Lifetime Generation (kWh)**: Update your running savings calculation: Lifetime kWh × ₹[tariff] = money saved. Compare annual increment to installer's estimate.

3. **Grid Export (kWh)**: Verify monthly total matches your DISCOM bill's export credit line. High export = opportunity to shift loads to daytime.

4. **Self-Consumption Ratio (%)**: Target above 70%. Below 50% is a financial opportunity, shift loads to solar hours.

5. **Inverter Temperature (°C)**: Alert above 65 °C. Check ventilation, shade, and cooling fan if threshold is exceeded.

6. **Current Power (W) vs Expected**: On a clear day, Current Power should be 80–95% of system nameplate kW at peak irradiance. Below 70% on clear days = investigate string faults or MPPT issues.

## Qbits WhatsApp Monitoring: What You Get

Standard solar monitoring apps require you to open the app and interpret data. Qbits' AI-powered WhatsApp monitoring system flips this model, it pushes alerts to you, so you only need to investigate when something is actually wrong.

**Daily report (sent at 8 PM):** Yesterday's generation (kWh), weekly and monthly totals, and a simple "System Normal" or "Check Required" flag. The flag triggers when generation drops more than 20% below the weather-adjusted expected output.

**Fault alerts (immediate):** MPPT fault, grid voltage fault, isolation fault, and over-temperature alerts are pushed as WhatsApp messages within 5 minutes of the event. You forward the message to the [authorised service partner](/authorized-service-partners/) who resolves within the 72-hour RMA SLA.

**Monthly summary (sent on 1st of each month):** Total generation, estimated savings, comparison to the same month last year (from Year 2 onwards), and a maintenance reminder if the cleaning interval is due.

- **[Hybrid Inverters](/hybrid-inverter/)**: HS and HT series with integrated battery monitoring in the same WhatsApp dashboard.
- **[Solar Inverter App Monitoring](/blog/solar-inverter-app-monitoring/)**: Comparison of monitoring platforms across major brands available in India.
- **[Authorized Service Partners](/authorized-service-partners/)**: Pincode-searchable service network that acts on WhatsApp alerts within 72 hours.

The [MNRE's Guidelines for Rooftop Solar Systems](https://mnre.gov.in/) require that all grid-connected inverters provide monitoring and data logging capabilities, making the monitoring app a regulatory requirement, not just a convenience feature. [Mercom India's Solar Monitoring Report 2025](https://www.mercomindia.com/) notes that Indian homeowners who actively use monitoring apps detect underperformance issues 3x faster than those who rely only on monthly DISCOM bills.

If your current monitoring app is unclear or you are seeing numbers that do not make sense, [talk to a Qbits engineer](/contact-us/), most monitoring interpretation questions are resolved in a single WhatsApp message exchange.
