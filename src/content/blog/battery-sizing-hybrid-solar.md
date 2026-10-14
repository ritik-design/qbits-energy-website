---
title: "How to Size a Battery for a Hybrid Solar Inverter"
excerpt: Size a hybrid battery from measured loads, backup hours, usable capacity and losses. Check a worked example, power limits and battery compatibility.
description: "Hybrid inverter battery sizing guide for Indian homes: load calculation, DoD, C-rate limits, 48V vs 96V systems, and LFP vs lead-acid comparison."
category: Buying Guide
date: 2026-06-05
updatedDate: 2026-10-14
readTime: 18 min
image: "/og/blog-battery-sizing-hybrid-solar.webp"
author: Keyur Rakholiya
keywords:
- hybrid inverter battery sizing
- battery size for hybrid solar inverter India
- how to calculate battery bank for solar
- LFP battery for hybrid inverter India
- 48V vs 96V battery system solar
faqs:
- q: How do I calculate the battery size for a hybrid solar inverter?
  a: "Use five steps. List only the loads you want during an outage and add their watts. Choose the backup hours from your own outage log. Multiply watts by hours to get load energy in kWh. Divide that by the depth of discharge and by a conversion-efficiency allowance to get nominal battery kWh, then divide the watt-hours by the battery voltage to get Ah. Finally check that the battery and the inverter can carry the charge and discharge current. For a 0.88 kW load for 8 hours plus two short extras, the worked example below lands at about 11.3 kWh nominal."
- q: What is depth of discharge and why does it affect battery sizing?
  a: Depth of discharge (DoD) is the share of nameplate capacity you draw before recharging. Makers publish cycle life at a stated DoD, and cycle life falls as the discharge gets deeper. Planning ranges are roughly 80 to 95 percent for lithium iron phosphate, with the exact figure printed on the battery datasheet, and about 50 percent for lead-acid when you want a long life. Dividing your load energy by the DoD gives the nameplate capacity you must buy, so ignoring it leaves a bank that is too small.
- q: Should I use LFP or lead-acid batteries with a hybrid inverter?
  a: Decide from the datasheets, not from the chemistry name. Compare the cycle rating at your planned DoD, the cost per kWh delivered over that cycle life, the temperature limits, the maintenance burden and whether the inverter is approved for the battery. Lithium iron phosphate usually allows a deeper daily discharge and needs no watering, while tubular lead-acid costs less per nameplate kWh. Daily cycling is 3,650 cycles in ten years, so check that figure against each rating.
- q: What is the difference between a 48 V and a 96 V battery system?
  a: Voltage sets the current for a given power. At 5 kW and 90 percent efficiency a 48 V bank carries about 116 A and a 96 V bank about 58 A, so the higher voltage allows thinner cable and less heat. You do not choose it freely, because the inverter datasheet fixes the battery voltage window. The Qbits QBH families on this site are 48 V rated, so a 96 V bank does not fit them.
- q: Can I mix old and new batteries in a hybrid solar system?
  a: Generally no. Modules of different age, capacity or chemistry age at different rates, and the weakest one limits charge and discharge for the whole bank. Battery makers publish their own rules for adding modules, including model, age gap and firmware. Get those rules before the first purchase, and expect that an old bank may need replacing rather than extending.
- q: How do outage hours affect battery sizing?
  a: Backup hours are the biggest driver of battery size because energy scales with time. National averages hide local reality. The Ministry of Power reported average supply of about 22.6 hours a day in rural areas and 23.4 hours in urban areas for 2025, which says little about your feeder. Log your own outages for a few weeks, design for the longest normal cut rather than the average, and treat any generic city figure as an assumption.
- q: What happens if the inverter's charge current is higher than the battery allows?
  a: The battery can be charged faster than its maker recommends. With a working communication link the BMS can request a lower limit. Without one you must set the inverter's charge current limit yourself, using the battery datasheet. For example, one published 48 V module recommends 80 A and allows 100 A continuous, so a 120 A inverter limit needs a lower setting or more modules.
- q: How many solar panels do I need to recharge the battery in a day?
  a: Divide the battery energy you drew by the daily peak sun hours and by a performance allowance of about 0.80. In the Lucknow example the battery gives up 9.05 kWh of DC energy a day, and at 5.09 peak sun hours that needs 9.05 ÷ (5.09 × 0.80) = 2.22 kWp for the battery alone, plus the array share that runs daytime loads. Monsoon weeks, shading and orientation change this, so use the monthly figures for the site.
relatedSlugs:
- best-solar-battery-brands-india-2026
- inverter-battery-connection-diagram
- 5kw-hybrid-inverter-price-india
---

> **Quick answers**
>
> - Battery capacity is energy in kWh. Inverter rating is power in kW. Size for both, separately.
> - Start from a measured load list and your own outage log, never from bedroom count or a city average.
> - Nominal kWh = load energy ÷ (depth of discharge × conversion efficiency). Ah = Wh ÷ battery voltage.
> - Depth of discharge differs by chemistry and by product. Read it from the datasheet of the battery you quote.
> - Check the charge and discharge current against both the inverter and the battery, not only the kWh.
> - Recharge time between outages is part of the design, not an afterthought.

**Short version.** Size a hybrid solar battery from the energy needed during the outage, then check separately whether the battery and the inverter can deliver the required power, surge and charge current. The starting formula is **nominal battery kWh = load energy ÷ (usable fraction × conversion efficiency)**. Use measured loads and the stated limits of the equipment you are quoting. The two worked examples further down show every step, including a recheck of the arithmetic.

## Why battery sizing starts with loads, not inverter capacity

The inverter rating (5 kW, 10 kW) is the most power it can supply at one instant. It says nothing about how much energy your home needs over a long cut. Energy is power multiplied by time, and battery capacity is measured in kilowatt-hours, not kilowatts.

A 5 kW [hybrid inverter](/hybrid-inverter/) running at full output from a 5 kWh battery would be flat in about an hour, and less once usable capacity and losses are counted. Pair the same inverter with 15 kWh and a 1.5 kW load can run for many hours. The inverter sets the power ceiling. The battery sets the duration.

Most sizing mistakes come from answering only half the question.

**Energy** decides how long backup lasts. It is the load in watts multiplied by the hours you want it to run, and it is what the kWh figure addresses.

**Power** decides whether backup works at all. It is the draw when everything you backed up runs together, plus the surge when a motor starts. A battery holding plenty of energy can still be unable to deliver that rate. A design that passes energy and fails power runs your lights for hours and trips when the refrigerator compressor starts. Both checks have to pass.

The second misunderstanding is total home load versus critical load.

- **Total home load** is everything running at peak. It sizes the solar array and the inverter.
- **Critical backup load** is what must run during a cut: fans, lights, refrigerator, router, chargers. It sizes the battery in kWh.
- **Backup duration** is how many hours the grid is unavailable at your address. It is the biggest single driver of battery cost.

Air conditioners, geysers, induction cooktops and washing machines each draw hundreds of watts to a couple of kilowatts. Putting them on a battery for a long outage multiplies the bank several times over, so most backup designs leave them off the backed-up circuits on purpose. If you do need one, decide it explicitly, because it changes both the kWh and the surge requirement.

## List only the loads you intend to back up

Walk through the home and list every appliance you genuinely need during a cut. Record watts and quantity from the nameplate or a plug-in meter. For cycling appliances such as refrigerators, measured energy over a representative day is more useful than nameplate power. Motors also have starting requirements that an energy total cannot show.

The table uses assumed round-number wattages for illustration. They are not measured data for any particular appliance, so replace them with your own readings.

| Appliance | Assumed power each | 3BHK count | 3BHK watts | 2BHK count | 2BHK watts |
| --- | --- | --- | --- | --- | --- |
| Ceiling fan | 70 W | 4 | 280 W | 2 | 140 W |
| LED light | 12 W | 8 | 96 W | 6 | 72 W |
| Refrigerator | 150 W | 1 | 150 W | 1 | 150 W |
| Wi-Fi router | 15 W | 1 | 15 W | 1 | 15 W |
| Laptop charger | 65 W | 1 | 65 W | 0 | 0 W |
| Phone chargers | 20 W | 4 | 80 W | 2 | 40 W |
| Television | 80 W | 1 | 80 W | 1 | 80 W |
| **Critical load total** | | | **766 W** | | **497 W** |

Check the sums: 280 + 96 + 150 + 15 + 65 + 80 + 80 = 766 W for the 3BHK, and 140 + 72 + 150 + 15 + 40 + 80 = 497 W for the 2BHK. A 1 HP-class water pump, if the building depends on it during cuts, is a separate motor load with its own starting surge. The examples below add it as an extra with a stated run time.

## Choose backup duration from your own records

Record how long outages last at your property and which loads must run through them. National averages are poor guides to your feeder. The Ministry of Power reported through the [Press Information Bureau](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2105394&reg=3&lang=2) that average supply reached 22.6 hours a day in rural areas and 23.4 hours in urban areas in 2025. An average of that kind hides short daily cuts, long storm outages and feeders that are far worse than the mean.

Design for the longest normal outage you have actually logged, not the average. Separate a single long outage from repeated shorter outages with little time to recharge. A battery that covers one cut may not be ready for the next if the charging window is short.

For the worked examples later in this guide the outage lengths are **assumptions**: 8 hours for a 3BHK and 2 hours for a 2BHK. They are not statements about any city.

### Sensitivity: the same 500 W load at different runtimes

| Backup duration | Load energy | Nominal energy at 80% usable and 90% efficiency |
| --- | --- | --- |
| 2 hours | 1 kWh | 1.39 kWh |
| 4 hours | 2 kWh | 2.78 kWh |
| 8 hours | 4 kWh | 5.56 kWh |

Each row is 0.5 kW × hours ÷ (0.80 × 0.90). The table changes duration only. It does not prove the battery can deliver the load's power or start a motor.

## The five-step sizing method

Run these five steps in order, using the load list and outage log from the two sections above. Each step has a formula, and each worked example below uses them unchanged.

### Step 1: Backup load

Sum the critical loads in watts. Add a margin for measurement error and extra devices. This guide uses 15 percent. Convert to kW.

### Step 2: Duration

Take the longest normal outage from your log, in hours.

### Step 3: Load energy

**Load energy (kWh) = Σ (load W × hours) ÷ 1,000.** Add any extra loads with their own run times, such as a pump for half an hour.

### Step 4: From load energy to nominal capacity

[Depth of discharge](/glossary/battery-dod/) (DoD) is the share of nameplate capacity you draw before recharging. The conversion efficiency allowance covers losses between the battery and the load.

**Nominal battery energy (kWh) = load energy ÷ (DoD × efficiency)**

**Capacity (Ah) = nominal energy (Wh) ÷ battery nominal voltage (V)**

This guide uses an efficiency allowance of 0.90 as a deliberately conservative planning figure. It is not a datasheet value. The QBH datasheets print a 97.6 percent (3 to 6 kW) or 98 percent (7 to 8 kW and three-phase) maximum efficiency, but that is a peak figure at a favourable operating point, and losses also arise in wiring, the BMS and standby draw.

### Step 5: Engineering fit

Check the current the battery and the inverter must carry, the battery voltage window, the supported chemistry and communication, and whether the array can recharge the bank before the next outage. The sections below cover each of these.

### Why the usable fraction is not 100 percent

Discharging a battery fully shortens its cycle life, so makers specify a depth of discharge and rate cycle life at that depth. Typical planning figures by chemistry:

| Chemistry | Typical planning DoD | What the sources say |
| --- | --- | --- |
| Lithium iron phosphate (LFP) | about 80 to 95% depending on product and inverter | The Pylontech US5000 manual lists 4,800 Wh nominal, 4,560 Wh usable and 95% depth of discharge, available with inverters that fully follow Pylontech's protocol. Many installers plan on 80% to keep margin. |
| Tubular lead-acid | about 50% when you want long life | Wikipedia's deep-cycle article puts a depth of around 50% as the best balance of life against cost. Luminous prints up to 1,500 cycles at 80% DoD for its 150 Ah LPTT12150H tubular battery. |

Both rows are planning ranges, not rules. The figure that counts is the one on the datasheet of the battery you are quoting, at the temperature and discharge rate you will use. The [LFP battery](/glossary/lfp-battery/) glossary page explains the underlying chemistry.

## Match the battery to inverter charge and discharge current

Every battery has a maximum charge and discharge current. The inverter has its own. The system has to stay inside the lower of the two, and the battery's rating decides which one that is. C-rate expresses current relative to capacity: a 100 Ah battery charged at 50 A is at 0.5C.

The Qbits datasheets publish the maximum charge and discharge current of each QBH model at a 48 V rated battery voltage. Multiplying by 48 V gives the power the battery port can pass, and doubling the current in Ah gives the bank size at which that current is 0.5C.

| QBH model | Max charge/discharge current | Battery port power at 48 V | Bank at 0.5C of that current |
| --- | --- | --- | --- |
| QBH-3KS48P | 75 A | 3.60 kW | 7.2 kWh |
| QBH-3K6S48P | 90 A | 4.32 kW | 8.64 kWh |
| QBH-4KS48P | 100 A | 4.80 kW | 9.6 kWh |
| QBH-4K6S48P | 110 A | 5.28 kW | 10.56 kWh |
| QBH-5KS48P and QBH-6KS48P | 120 A | 5.76 kW | 11.52 kWh |
| QBH-7KS48P | 175 A | 8.40 kW | 16.8 kWh |
| QBH-7K6S48P and QBH-8KS48P | 190 A | 9.12 kW | 18.24 kWh |
| QBH-5KS48P3 (three-phase) | 120 A | 5.76 kW | 11.52 kWh |
| QBH-6KS48P3 | 125 A | 6.00 kW | 12.0 kWh |
| QBH-7KS48P3 | 150 A | 7.20 kW | 14.4 kWh |
| QBH-8KS48P3 | 190 A | 9.12 kW | 18.24 kWh |
| QBH-10KS48P3 | 210 A | 10.08 kW | 20.16 kWh |
| QBH-12KS48P3 | 250 A | 12.00 kW | 24.0 kWh |

Source: the Qbits datasheets for the [3 to 6 kW](/datasheets/products/Qbits-Hybride-Inverter-Catalogue-1.pdf), [7 to 8 kW](/datasheets/products/Qbits-Hybride-Inverter-Catalogue-2.pdf) and [three-phase](/datasheets/products/Qbits-Hybride-Inverter-Catalogue-3.pdf) QBH families, as printed in October 2026. The last column is arithmetic (2 × amps × 48 V), not a Qbits recommendation. These are inverter limits. They do not authorise that current through any battery you attach.

### A worked current check with a published battery

Take the Pylontech US5000 as an illustration of how a battery's own limits enter the check. Its [operation manual](https://pylonwebs3.s3.amazonaws.com/upload/2024/09/25/RESS-Installation%20Manual-US5000%20US5000-B%205PMPA08-00219_V1.0_20240925124144A058.pdf) (September 2024) lists a nominal 48 V, 4,800 Wh and a recommended charge and discharge current of 80 A, with 100 A maximum continuous. Those currents apply for a cell temperature of 10 to 40 °C and are derated outside that range.

- One module against a 75 A inverter limit (the QBH-3KS48P): 75 A is below the 80 A recommended figure, so no extra limit is needed from the current point of view.
- One module against a 120 A inverter limit (for example the QBH-5KS48P): 120 A exceeds even the 100 A maximum continuous, so you would either set a lower charge limit in the inverter or fit two modules side by side, which carry 160 A recommended and 200 A maximum together.

This is arithmetic on published figures. It is not a statement that any Qbits inverter is approved for this battery. For Qbits models, the datasheets say only that the battery type is lithium or lead-acid, so confirm the compatibility list with Qbits for your battery before purchase.

If a battery communicates with the inverter, its BMS can request lower limits. Without communication the inverter does not know the battery's limits, so you have to set the charge current in the inverter menu from the battery datasheet. Check that the exact inverter model has that setting and write the value you set into the commissioning record. The [battery connection guide](/blog/inverter-battery-connection-diagram/) explains the data link.

## Choosing between a 48 V and a 96 V battery system

Battery voltage comes from the inverter you buy, not from preference. The datasheet states the battery voltage window the inverter accepts, and the whole bank must stay inside it from empty to full.

### What changes with voltage

Current for a given power halves when voltage doubles. At 5,000 W and 90 percent efficiency:

- 48 V: 5,000 ÷ (48 × 0.90) = 115.7 A
- 96 V: 5,000 ÷ (96 × 0.90) = 57.9 A

Lower current means thinner cable, less heat and less voltage drop, which matters when the battery sits some distance from the inverter. The cost is that higher-voltage stacks need more cells in series and are offered by fewer makers. The cable arithmetic is worked in the [battery connection guide](/blog/inverter-battery-connection-diagram/).

### Cell count

A lithium iron phosphate cell is nominally 3.2 V. Sixteen in series give 51.2 V, which is why many "48 V" LFP products are labelled 51.2 V. Other makers use a different cell count and label their product 48 V, such as the Pylontech module quoted above. The label is a family name and not a compatibility statement.

### Which applies to Qbits models

The QBH single-phase and three-phase hybrid datasheets all print 48 V as the rated battery voltage, with maximum charging voltage of 60 V or less (configurable). Some other hybrid families are built around high-voltage battery stacks instead, so always read the inverter datasheet before choosing cells. Do not stack lower-voltage batteries to hit a number: four 24 V units in series make 96 V, outside a 48 V inverter's window, while two in series make 48 V and use half of what you bought.

## LFP versus lead-acid: the battery chemistry decision

Chemistry decides depth of discharge, cycle life, temperature tolerance and maintenance, so it matters as much as the kWh figure.

### What the published figures say

| | LFP example | Tubular lead-acid example |
| --- | --- | --- |
| Product | Pylontech US5000 (manual, Sep 2024) | Luminous LPTT12150H (product page, Oct 2026) |
| Nominal | 48 V, 4,800 Wh | 12 V, 150 Ah at C10 (1.8 kWh) |
| Printed depth of discharge | 95% | cycle life stated at 80% |
| Printed cycle life | more than 8,000 cycles at 25 °C in the 2024 manual (the 2026 datasheet prints more than 6,000), under conditions to be confirmed with the maker | up to 1,500 cycles at 80% DoD |
| Temperature note | charge 0 to 50 °C, discharge minus 10 to 50 °C | not stated on the page |
| Watering | none stated in the manual | tubular lead-acid needs periodic top-up, at the maker's interval |

Battery University's lead-acid article lists deep-cycle lead-acid at about 400 to 500 cycles at 50% depth and 1,000 or more at 30%, against 150 to 200 at 100%. That is a generic table and not an Indian tubular datasheet, so the two sets of numbers differ. The lesson is the same: cycle count depends heavily on depth, and both figures must be taken from the product you buy.

### Cost per kWh delivered, and a ten-year check

A fair cost comparison needs three inputs per product: price, usable energy per cycle and cycles at that depth.

**Cost per kWh delivered = price ÷ (nominal kWh × DoD × rated cycles)**

Prices below were shown on the manufacturers' pages on 14 October 2026 and will change. Cycle figures are each maker's own, and the Loom Solar page gives only a general range.

| Product | Price shown | Nominal | DoD used | Cycles used | Cost per kWh delivered |
| --- | --- | --- | --- | --- | --- |
| [Luminous LPTT12150H](https://www.luminousindia.com/solar-batteries/solar-battery-lptt-12150h) | ₹17,999 incl. taxes | 1.8 kWh | 80% (as printed) | 1,500 | ₹17,999 ÷ (1.8 × 0.80 × 1,500) = ₹8.33 |
| [Loom Solar CAML 5.12 kWh Wall Mount](https://www.loomsolar.com/collections/lithium-battery) | ₹1,15,000 | 5.12 kWh | 80% (assumed) | 1,500 to 2,000 (page's general lithium range) | ₹18.72 at 1,500 cycles, ₹14.04 at 2,000 |

On these inputs the tubular battery is cheaper per kWh delivered, which shows why a ten-year check matters more than the label. Daily cycling is 365 × 10 = 3,650 cycles. A product rated 1,500 cycles needs 3,650 ÷ 1,500 = 2.43 banks over ten years if it reaches its rating, while a product rated 6,000 or more would not need replacing on cycle count. Efficiency losses, replacement labour, watering and the capacity fade before end of life are not in the table. Use it as a method and swap in your quoted numbers.

## Common mistakes in hybrid battery sizing

### Sizing for total home load instead of critical load

The most expensive error. A household that uses 20 kWh a day buys a bank to match, then runs the air conditioner, geyser and induction cooktop in a cut and drains it in a few hours. Size the bank for the load that runs during the outage, and review the load list before signing a purchase order.

### Ignoring the charge current limit

A small bank on a large inverter can be charged faster than its maker intends. A 120 A inverter limit on one 100 Ah module is 1.2C, above that module's published 100 A maximum continuous. Where the link to the BMS is missing or the settings are not applied, nothing stops it.

### Mismatching battery voltage to the inverter window

Voltage is a hard limit. Check the datasheet range before buying a single cell, and do not rearrange series strings to make a different battery fit.

### Choosing lead-acid because it is familiar

A UPS battery may cycle a few times a month. A solar backup battery can cycle every day. At 365 cycles a year, a 1,500-cycle rating is about 4.1 years if it is cycled at the depth that rating assumes (1,500 ÷ 365). Familiar is not the same as suited to a daily duty cycle.

For the surrounding decision on whether storage makes sense at all, read the [on-grid vs hybrid guide](/blog/on-grid-vs-hybrid/).

## Worked example 1: 3BHK, 8-hour outage (assumed)

**Home profile.** Three-bedroom home. The 8-hour outage is an assumption for the calculation, not a figure for any city.

1. **Backup load.** Base critical load from the table: 766 W. Add 15 percent: 766 × 1.15 = 880.9 W, or 0.881 kW. The pump (750 W for half an hour) and a 180 W air cooler (for 4 hours) are treated as extras.
2. **Duration.** 8 hours.
3. **Load energy.** Continuous load: 0.881 kW × 8 h = 7.047 kWh. Pump: 0.75 kW × 0.5 h = 0.375 kWh. Cooler: 0.18 kW × 4 h = 0.72 kWh. Total: 7.047 + 0.375 + 0.72 = **8.142 kWh**.
4. **Nominal capacity, LFP at 80 percent DoD and 0.90 efficiency.** 8.142 ÷ (0.80 × 0.90) = 8.142 ÷ 0.72 = **11.31 kWh**. In amp-hours at 51.2 V: 11,309 Wh ÷ 51.2 V = **220.9 Ah**.
5. **Pick a bank.** Three 5.12 kWh, 100 Ah, 51.2 V modules give 15.36 kWh and 300 Ah. Two modules would give 10.24 kWh, and 10.24 × 0.80 × 0.90 = 7.37 kWh deliverable, which is less than the 8.142 kWh needed. Three modules deliver 15.36 × 0.80 × 0.90 = 11.06 kWh, a margin of 11.06 ÷ 8.142 = 1.36 times.
6. **Engineering fit.** Using a 5 kW-class inverter with a 120 A battery limit (for example the QBH-5KS48P): 120 A on a 300 Ah bank is 0.40C, and the battery datasheet still has to confirm that this current is allowed. Peak simultaneous load is 766 + 750 + 180 = 1,696 W, plus margin, well inside a 5 kW backup rating. Battery current at that load is 1,696 ÷ (51.2 × 0.90) = 36.8 A.
7. **Recharge.** The battery gives up 8.142 ÷ 0.90 = 9.05 kWh of DC energy. At 5.09 peak sun hours and an assumed 0.80 performance allowance, that needs 9.05 ÷ (5.09 × 0.80) = 2.22 kWp of array for the battery alone. If daytime household loads add 3 kWh (an assumption), that needs a further 3 ÷ (5.09 × 0.80) = 0.74 kWp, so about 2.96 kWp in total before roof, shading and monsoon effects.

**Result.** A 15.36 kWh LFP bank at 48 V class with a 5 kW-class hybrid inverter, and an array of at least 3 kWp, subject to the datasheets and a site check. Check each figure against your own load log.

## Worked example 2: 2BHK, 2-hour outage (assumed)

1. **Backup load.** 497 W base. With 15 percent margin: 497 × 1.15 = 571.55 W, or 0.572 kW.
2. **Duration.** 2 hours (an assumption).
3. **Load energy.** 0.572 kW × 2 h = **1.143 kWh**.
4. **Nominal capacity, LFP at 80 percent and 0.90.** 1.143 ÷ 0.72 = **1.59 kWh**, or 1,588 Wh ÷ 51.2 V = 31.0 Ah.
5. **Pick a bank.** A bank this small is smaller than most 48 V-class modules. A 4.8 kWh module such as the Pylontech US5000 delivers 4.8 × 0.80 × 0.90 = 3.46 kWh, enough for about 3.46 ÷ 0.572 = 6.0 hours at this load. Extra headroom is a by-product of module size, not a design goal.
6. **Engineering fit.** A 3 kW-class inverter such as the QBH-3KS48P has a 75 A limit. On a 100 Ah module that is 0.75C, below that module's recommended 80 A. Without a published compatibility confirmation for the specific pairing, treat it as an arithmetic illustration only.
7. **Recharge.** DC energy drawn: 1.143 ÷ 0.90 = 1.27 kWh. At 5.56 peak sun hours (Mumbai, as in the table below) and 0.80 performance: 1.27 ÷ (5.56 × 0.80) = 0.29 kWp. Recharge is not the constraint here.

**Result.** The kWh need is small. The real decisions are module size, charge current and compatibility.

Every figure in both examples follows from the stated formulas, so you can repeat the arithmetic with your own load list and outage hours.

## How many solar panels are needed to recharge the battery?

The array has to run daytime loads and refill the battery before the next outage. In high-outage areas this cannot rely on overnight grid charging.

**Array for the battery (kWp) = DC energy drawn from the battery (kWh) ÷ (peak sun hours × performance allowance)**

The 0.80 allowance covers module temperature, wiring, MPPT conversion and battery charging losses, and is an assumption to replace with your installer's figure. Peak sun hours at optimum tilt for reference cities, from the Global Solar Atlas as compiled in our [irradiance guide](/blog/solar-irradiance-data-india-statewise/) (queried 24 September 2026):

| City | Peak sun hours at optimum tilt (annual average) |
| --- | --- |
| Lucknow | 5.09 |
| Patna | 4.99 |
| New Delhi | 5.10 |
| Mumbai | 5.56 |
| Bengaluru | 5.46 |
| Chennai | 5.47 |
| Ahmedabad | 6.01 |

These are annual averages. Monsoon months give less, so check monthly values for the weeks when outages are most likely. The [string sizing calculator](/string-sizing-calculator/) checks PV string voltage and current against the selected inverter.

## Compare cost using complete quotes

Request the battery, inverter, protection, enclosure, communications equipment, installation and warranty terms as separate items. Compare **usable energy and delivered power**, not only price per amp-hour or per box.

The [battery comparison guide](/blog/best-solar-battery-brands-india-2026/) explains warranty and chemistry checks. The [5 kW hybrid price guide](/blog/5kw-hybrid-inverter-price-india/) provides a dated inverter example and the quote scope.

## Where Qbits hybrids fit

The Qbits QBH families are 48 V-class hybrid inverters, with battery current of 75 to 120 A for the [3 to 6 kW models](/our-products/QBH-3-6KS48P/), 175 to 190 A for the [7 to 8 kW models](/our-products/QBH-7-8KS48P/) and 120 to 250 A for the [5 to 12 kW three-phase models](/our-products/QBH-5-12KS48P3/), depending on the exact model. Check the exact model datasheet for supported battery types and confirm your battery against the compatibility list with Qbits before you buy; the [datasheet downloads](/download-datasheets/) hold the current files.

## Your handover worksheet

Keep the load list, target runtime, usable-fraction assumption, loss allowance, chosen model numbers, configured current limits and warranty documents. Ask the installer to demonstrate the agreed backup circuits and document the commissioning results.
