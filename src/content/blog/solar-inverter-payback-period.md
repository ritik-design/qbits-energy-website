---
title: "Solar Inverter Payback Period, 7 States Compared"
excerpt: "Solar payback is a formula, not a state average. Worked 5 kW examples for Rajasthan, Gujarat, Maharashtra, Karnataka, Tamil Nadu, Delhi and Uttar Pradesh, with the MNRE benchmark cost, the PM Surya Ghar assistance and every calculation shown."
description: "How to calculate solar payback in India with worked 5 kW examples for 7 states: MNRE benchmark cost, PM Surya Ghar assistance, sourced yields, tariff sensitivity and the formulas."
category: "Buying Guide"
date: 2026-06-05
readTime: "14 min"
image: "/og/blog-solar-inverter-payback-period.webp"
author: "Akash Hirapara"
updatedDate: 2026-10-14
keywords:
  - solar inverter payback india
  - solar payback period by state india
  - how to calculate solar payback period
  - pm surya ghar subsidy payback calculation
  - solar roi india 2026
  - solar inverter payback period
faqs:
  - q: "What is the payback period for solar in India?"
    a: "There is no single figure. Payback = net system cost / annual savings, and it moves with the quote, the subsidy, the yield of the roof and above all the tariff you actually offset. In the worked 5 kW examples on this page, with the MNRE benchmark cost and assistance, payback ranges from about 2.2 years to 5.4 years across seven states and tariffs of 4 to 8 rupees per kWh. A quote above the benchmark, low export credit or a lower tariff pushes it out. Calculate it on your own bill and written quote."
  - q: "How do I calculate my own solar payback period?"
    a: "Annual generation = system size (kWp) x specific yield (kWh per kWp per year). Annual savings = units self-consumed x tariff + units exported x export credit. Payback (years) = net cost / annual savings, where net cost = quoted price less the central assistance actually shown in your portal application. Then check how much degradation and any inverter replacement change the answer."
  - q: "Does the PM Surya Ghar subsidy reduce payback?"
    a: "Yes, because it reduces the numerator. For a 5 kW system the central assistance is 78,000 rupees. In the Ahmedabad example at 6 rupees per kWh, payback is 3.1 years with it and 4.6 years without it. The subsidy is paid on installed capacity under MNRE guidelines, not on what you spent, so a quote above the benchmark does not raise it."
  - q: "How much does the electricity tariff change payback?"
    a: "It is the largest lever. The same 5 kW system in the Ahmedabad example, with a net cost of 1,57,000 rupees, pays back in 4.6 years at 4 rupees per kWh, 3.1 years at 6 rupees and 2.3 years at 8 rupees. Use the tariff of the slab your solar units will actually offset, which is usually lower after solar than your bill suggests."
  - q: "Which state has the shortest solar payback?"
    a: "With a common cost and tariff, the state with the highest yield wins. Using the modelled yields in the irradiance guide, Rajasthan (Jodhpur) and Gujarat (Ahmedabad) lead, and Uttar Pradesh (Lucknow) and Delhi trail by a modest margin. In practice local tariff, state top-ups, net metering terms and quotes differ more than yield does, so a state ranking is a starting point, not a decision."
  - q: "How does net metering affect payback?"
    a: "It sets the value of exported units. If every unit is credited at the tariff you pay, export and self-consumption are worth the same. If export is credited lower, savings fall. In the Ahmedabad example, exporting 40 percent of output at 3 rupees against a 6 rupee tariff lengthens payback from 3.1 to 3.8 years. Check your DISCOM's current billing terms."
  - q: "Does the inverter change the payback period?"
    a: "Yes, in three ways: conversion efficiency changes the energy delivered, a replacement during the payback window adds to the cost, and a hybrid inverter with a battery adds to the price without adding bill savings. Each effect is calculated below. Compare quotes on written efficiency curves, warranty remedy terms and the full line-item cost, not on the headline price."
  - q: "Does degradation change the answer?"
    a: "Slightly. At 0.5 percent a year, an NREL review median, the 5 kW Ahmedabad example pays back in 2.65 years instead of 2.64 at 7 rupees per kWh. Degradation matters more for the 25-year total than for the payback year."
relatedSlugs:
  - "solar-capex-vs-opex-business-india"
  - "solar-subsidy-all-states"
  - "solar-irradiance-data-india-statewise"
  - "inverter-tco"
---

> **ALMM and inverter compliance:** MNRE's current ALMM page publishes solar PV module and cell lists, not an inverter list. Verify the inverter's exact model documents and applicable scheme or DISCOM requirements separately.

A payback number in a brochure is only as good as its inputs. This guide shows the formula, the inputs and where each one comes from, then works the same 5 kW rooftop through seven states so you can see which input moves the answer. Nothing here is a quotation or a promise of savings: it is arithmetic you can repeat on your own bill.

> [!KEYTAKEAWAYS]
> - Payback (years) = net system cost / annual savings. Net cost is your written quote less the central assistance shown in your portal application.
> - The tariff you offset moves payback more than state, brand or panel choice. In the examples, 4 to 8 rupees per kWh turns 4.6 years into 2.3.
> - Yields come from a named dataset (Global Solar Atlas, as used in our irradiance guide). Costs use MNRE's benchmark, not market prices.
> - Export credit, a quote above the benchmark and an inverter replacement can add years. They are calculated below.
> - Payback is not a guarantee. Use these as a method, then rerun them with your quote and your bill.

## The formula and its four inputs

> [!FORMULA]
> Payback (years) = Net system cost / Annual savings

- **Net system cost** = quoted price (including GST) less central assistance less any state top-up that appears in your portal application.
- **Annual generation (kWh)** = system size (kWp) x specific yield (kWh per kWp per year).
- **Annual savings (₹)** = generation x [self-consumed share x tariff + exported share x export credit].
- **Year-n generation** falls by the degradation rate each year: generation in year n = generation in year 1 x (1 - d)^(n-1).

The **specific yield** already includes typical system losses, so do not multiply by a performance ratio again. If you use plane-of-array peak sun hours instead, annual generation = kWp x sun hours x 365 x PR.

## Inputs used on this page, with sources

Table: Inputs used on this page, with the value, source and date for each

| Input | Value | Source and date |
| --- | --- | --- |
| Benchmark cost | ₹50,000 per kW for the first 2 kW, ₹45,000 for each additional kW | MNRE PM Surya Ghar guidelines, clause 5(g), effective 13 February 2024 |
| Central assistance | ₹30,000 per kW for the first 2 kW, ₹18,000 for the third kW, nothing above 3 kW, so ₹78,000 maximum | MNRE guidelines, clause 5(h), see [MNRE notice](https://mnre.gov.in/en/notice/amendment-in-guidelines-for-implementation-of-pm-surya-ghar-muft-bijli-yojana-for-the-component-of-cfa-to-residential-consumers/) |
| Scheme period | Until 31 March 2027; no official extension found as of 14 October 2026 | MNRE guidelines |
| Specific yield | Modelled kWh per kWp per year for a named reference city in each state | Global Solar Atlas (Solargis), queried 24 September 2026, in our [irradiance guide](/blog/solar-irradiance-data-india-statewise/) |
| Degradation | 0.5% a year | Median in Jordan and Kurtz, NREL, ["Photovoltaic Degradation Rates: An Analytical Review"](https://docs.nlr.gov/docs/fy12osti/51664.pdf) |
| Tariff | ₹4, ₹6 and ₹8 per kWh as sensitivity values | Not tariff orders. Take the real figure from your own bill and your state commission's current order |

GST on specified solar devices is 5 percent since 22 September 2025, so a current quote should not carry 12 percent on those items; check the line-by-line treatment in the [GST guide](/blog/gst-on-solar-inverters-2026/). Central assistance is paid on installed capacity, so a quote above or below the benchmark does not change it. The [state-wise subsidy guide](/blog/solar-subsidy-all-states/) lists the state schemes we could verify; the [Gujarat guide](/blog/surya-gujarat-scheme-guide/) explains why no state top-up is included in the Gujarat example here.

## Worked example: 5 kW in seven states

**Net cost (same for every state).** Benchmark = 2 x ₹50,000 + 3 x ₹45,000 = ₹1,00,000 + ₹1,35,000 = ₹2,35,000. Central assistance = 2 x ₹30,000 + 1 x ₹18,000 = ₹78,000. Net cost = ₹2,35,000 - ₹78,000 = **₹1,57,000**. No state top-up is assumed.

**Generation** = 5 kWp x specific yield. **Payback** = ₹1,57,000 / (generation x tariff), assuming every unit offsets the stated tariff.

Table: Payback for a 5 kW system in seven states at tariffs of ₹4, ₹6 and ₹8 per kWh

| State | Reference city | Yield (kWh/kWp/yr) | Annual kWh (5 kW) | Payback at ₹4 (years) | At ₹6 | At ₹8 |
| --- | --- | --- | --- | --- | --- | --- |
| Rajasthan | Jodhpur | 1,746 | 8,730 | 4.5 | 3.0 | 2.2 |
| Gujarat | Ahmedabad | 1,701 | 8,505 | 4.6 | 3.1 | 2.3 |
| Maharashtra | Mumbai | 1,593 | 7,965 | 4.9 | 3.3 | 2.5 |
| Karnataka | Bengaluru | 1,578 | 7,890 | 5.0 | 3.3 | 2.5 |
| Tamil Nadu | Chennai | 1,565 | 7,825 | 5.0 | 3.3 | 2.5 |
| Delhi | New Delhi | 1,466 | 7,330 | 5.4 | 3.6 | 2.7 |
| Uttar Pradesh | Lucknow | 1,461 | 7,305 | 5.4 | 3.6 | 2.7 |

Reading the table. Rajasthan at ₹8: 1,57,000 / (8,730 x 8) = 1,57,000 / 69,840 = 2.2 years. Uttar Pradesh at ₹4: 1,57,000 / (7,305 x 4) = 1,57,000 / 29,220 = 5.4 years. Within one tariff column the spread across states is under a year, while moving from ₹4 to ₹8 in a single state roughly halves payback. That is why the tariff you offset deserves more attention than the state ranking.

```chart
type: bar
title: Payback for a 5 kW system at ₹4, ₹6 and ₹8 per kWh, by state (years)
unit: "years"
decimals: 1
source: "Calculated in this article: net cost ₹1,57,000 (MNRE PM Surya Ghar benchmark less central assistance) divided by annual savings, using Global Solar Atlas (Solargis) yields queried 24 September 2026"
note: "Tariffs are sensitivity values, not tariff orders. Lower is better. Reference city per state is in the table above."
series:
  - name: "At ₹4 per kWh"
    data:
      - { label: "Rajasthan", value: 4.5 }
      - { label: "Gujarat", value: 4.6 }
      - { label: "Maharashtra", value: 4.9 }
      - { label: "Karnataka", value: 5.0 }
      - { label: "Tamil Nadu", value: 5.0 }
      - { label: "Delhi", value: 5.4 }
      - { label: "Uttar Pradesh", value: 5.4 }
  - name: "At ₹6 per kWh"
    data:
      - { label: "Rajasthan", value: 3.0 }
      - { label: "Gujarat", value: 3.1 }
      - { label: "Maharashtra", value: 3.3 }
      - { label: "Karnataka", value: 3.3 }
      - { label: "Tamil Nadu", value: 3.3 }
      - { label: "Delhi", value: 3.6 }
      - { label: "Uttar Pradesh", value: 3.6 }
  - name: "At ₹8 per kWh"
    data:
      - { label: "Rajasthan", value: 2.2 }
      - { label: "Gujarat", value: 2.3 }
      - { label: "Maharashtra", value: 2.5 }
      - { label: "Karnataka", value: 2.5 }
      - { label: "Tamil Nadu", value: 2.5 }
      - { label: "Delhi", value: 2.7 }
      - { label: "Uttar Pradesh", value: 2.7 }
```

These are best-case figures: they assume a quote at the benchmark, every unit credited at the full tariff and no failures. The next section removes those assumptions one at a time.

## What stretches the number: Ahmedabad at ₹6

Annual generation is 5 x 1,701 = 8,505 kWh, and annual savings at ₹6 are 8,505 x 6 = ₹51,030.

Table: Ahmedabad 5 kW payback at ₹6 per kWh under five cost and export scenarios

| Scenario | Calculation | Payback |
| --- | --- | --- |
| Base case, benchmark cost, full credit | 1,57,000 / 51,030 | 3.1 years |
| Quote ₹50,000 above the benchmark | 2,07,000 / 51,030 | 4.1 years |
| 40% exported and credited at ₹3 | Savings = 8,505 x (0.6 x 6 + 0.4 x 3) = 8,505 x 4.8 = ₹40,824; 1,57,000 / 40,824 | 3.8 years |
| Both of the above | 2,07,000 / 40,824 | 5.1 years |
| No subsidy, benchmark cost | 2,35,000 / 51,030 | 4.6 years |

> [!TIP] Ask for export terms first
> The assistance is worth about 1.5 years in this example. A quote above the benchmark and a low export credit together add two years. Ask for the export billing terms before you accept a payback figure.

```chart
type: hbar
title: Ahmedabad 5 kW payback at ₹6 per kWh under five scenarios (years)
unit: "years"
decimals: 1
source: "Calculated in this article from the MNRE PM Surya Ghar benchmark cost and assistance, and the Global Solar Atlas (Solargis) Ahmedabad yield queried 24 September 2026, as shown in the table above"
note: "Lower is better. The export scenario assumes 40% of units credited at ₹3 per kWh, an assumed value."
data:
  - { label: "Base case, benchmark cost, full credit", value: 3.1 }
  - { label: "40% exported at ₹3", value: 3.8 }
  - { label: "Quote ₹50,000 above benchmark", value: 4.1 }
  - { label: "No subsidy, benchmark cost", value: 4.6 }
  - { label: "Both quote above benchmark and low export credit", value: 5.1 }
```

## Size changes the picture: 3 kW and 10 kW

Central assistance is capped at ₹78,000, so it covers a shrinking share of the cost as the system grows. Ahmedabad yield 1,701 kWh per kWp and a ₹6 tariff, benchmark cost and no state top-up:

Table: Payback for 3 kW, 5 kW and 10 kW systems in Ahmedabad at ₹6 per kWh

| System | Benchmark cost | Net cost after ₹78,000 | Annual kWh | Annual savings at ₹6 | Payback |
| --- | --- | --- | --- | --- | --- |
| 3 kW | 2 x 50,000 + 1 x 45,000 = ₹1,45,000 | ₹67,000 | 5,103 | ₹30,618 | 2.2 years |
| 5 kW | ₹2,35,000 | ₹1,57,000 | 8,505 | ₹51,030 | 3.1 years |
| 10 kW | 2 x 50,000 + 8 x 45,000 = ₹4,60,000 | ₹3,82,000 | 17,010 | ₹1,02,060 | 3.7 years |

The assistance is 53.8 percent of the benchmark at 3 kW (78,000 / 1,45,000) and 17.0 percent at 10 kW (78,000 / 4,60,000), which is why bigger roofs show longer payback even with the same tariff. Size the system to your consumption first, because units generated beyond what you can use or export at a good credit earn less.

## Which tariff does solar actually offset?

> [!EXAMPLE] Offset tariff on an assumed two-slab bill
> Solar displaces your most expensive units first, so the offset tariff is a weighted figure. An assumed example: a home uses 500 units a month on two slabs, 200 units at ₹4 and the rest at ₹7, so the bill is 200 x 4 + 300 x 7 = ₹2,900 a month. A 3 kW system in Ahmedabad generates 5,103 / 12 = 425 kWh a month. Those 425 units remove the 300 units at ₹7 and 125 of the 200 at ₹4: 300 x 7 + 125 x 4 = ₹2,600 a month, or ₹31,200 a year. The average offset tariff is 2,600 / 425 = ₹6.12 per kWh, and payback is 67,000 / 31,200 = 2.1 years. The slab values are assumptions and fixed charges are ignored; use your own bill and your DISCOM's current slabs.

## A worksheet for your own roof

<!-- steps -->
1. Write down the quoted price including GST, and the central assistance shown in your portal application. Net cost = price - assistance - any confirmed state top-up.
2. Take the specific yield for your city from the [irradiance guide](/blog/solar-irradiance-data-india-statewise/) or from your installer's simulation, and note the source. Annual kWh = kWp x yield.
3. Work out the offset tariff from your bill, as in the slab example, and the export credit from your DISCOM's current terms.
4. Split generation into self-consumed and exported units. Annual savings = self-consumed x tariff + exported x credit.
5. Payback = net cost / annual savings. Then add any inverter replacement you would pay for, and recompute.
6. If the answer depends heavily on one input, test that input at a worse value before you sign.

## Degradation and the 25-year view

Summing generation over 25 years at 0.5 percent a year gives 23.56 times the year-one output (the sum of 0.995^k for k from 0 to 24). For the Ahmedabad example at a flat ₹6, 25-year savings are 51,030 x 23.56 = ₹12.02 lakh against a net cost of ₹1.57 lakh, about 7.7 times. At 7 rupees, payback including degradation is 2.65 years against 2.64 without it, so degradation barely moves the payback year.

> [!IMPORTANT] The 25-year figure is an upper bound
> Treat the 25-year figure as an upper bound. It assumes a constant tariff, no inverter replacement, no cleaning or maintenance cost and full credit for every unit. For a comparison with a fixed deposit, see [solar vs FD](/blog/solar-investment-vs-fd-india/).

## Net metering and export credit

If a share s of output is self-consumed at tariff T and the rest is exported at credit E: **savings = generation x [s x T + (1 - s) x E]**. If E equals T, the split does not matter. If E is lower, a roof that sits empty in the daytime pays back more slowly than one with a daytime load. Rules differ by DISCOM and by year; the [net metering guide](/blog/net-metering-india-complete-guide/) and your DISCOM's current order are the references.

## How the inverter changes payback

**Efficiency.** Delivered energy scales with conversion efficiency, so a higher-efficiency inverter delivers more of the same DC. Illustration for a 50 kW plant at the Ahmedabad yield: generation is 50 x 1,701 = 85,050 kWh, taken here as the output with a 95 percent efficient inverter. With a 98 percent inverter the same DC gives 85,050 x 98 / 95 = 87,736 kWh, a gain of about 2,686 kWh (2,685.8 before rounding). At ₹8 per kWh that is about ₹21,486 a year. If the 98 percent model costs ₹1,00,000 more (an assumed price gap), the premium recovers in 1,00,000 / 21,486 = 4.7 years from efficiency alone. Use weighted efficiency or the efficiency curve from each datasheet rather than peak figures, and read the [efficiency guide](/blog/solar-inverter-efficiency/).

**Replacement.** If an inverter fails inside the payback window and the owner pays, effective payback extends by cost / annual savings. A ₹50,000 replacement (assumed) against ₹51,030 of annual savings adds 0.98 years. Warranty terms, remedy and exclusions therefore belong in the payback model; read the [warranty guide](/blog/solar-inverter-warranty/) and the [total cost of ownership guide](/blog/inverter-tco/).

**Hybrid and battery.** A hybrid inverter and battery add to the price. If they add ₹1,00,000 (assumed) and no extra bill savings, payback extends by 1,00,000 / 51,030 = 2.0 years. A battery earns its place through outage cover or time-of-day tariffs, which are separate values to quantify, not payback. See the [on-grid vs hybrid ROI guide](/blog/on-grid-vs-hybrid-solar-inverters-roi/).

## Common mistakes that inflate the answer

- **Using the highest slab.** Solar offsets your most expensive units first, but after solar the same house may fall into a lower slab. Recompute the tariff on the units that remain.
- **Counting subsidy you may not receive.** Use the amount shown in your portal application, not the sales estimate. A state top-up counts only if a current order exists.
- **Ignoring the export rule.** Confirm what exported units are credited at.
- **Forgetting financing.** Interest on a solar loan raises the cost of the system; compare the net-of-interest payback. The [financing guide](/blog/inverter-financing-options-in-india/) covers options.
- **Quoting a future tariff.** Use the current verified tariff as the base case. Any rise is a bonus, not an input.
- **Skipping the quote check.** The [quotation checklist](/blog/solar-quotation-checklist/) lists what a quote must itemise.

## Where Qbits fits

Qbits makes inverters, not panels or installations, and pricing is quote-based through dealers, so there is no Qbits price in these calculations. What Qbits documents is per model: the [on-grid inverter](/on-grid-inverter/) and [hybrid inverter](/hybrid-inverter/) pages and the [datasheet library](/download-datasheets/) give ratings, MPPT arrangement and communication options. Qbits' datasheets describe an expandable warranty but do not define a universal term or remedy, so request the current written terms for your model before putting a replacement assumption in your model. The [string sizing calculator](/string-sizing-calculator/) helps check that the array and inverter match before the installer quotes. For commercial roofs, the [CAPEX vs OPEX guide](/blog/solar-capex-vs-opex-business-india/) applies the same arithmetic with tax, financing and escalation.
