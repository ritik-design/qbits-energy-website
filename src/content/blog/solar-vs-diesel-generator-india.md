---
title: "Solar vs Diesel Generator, Cost and When to Switch"
excerpt: "A 50 kW C&I solar plant delivers power at about ₹4–6/kWh over 25 years; diesel generators cost ₹24–36/kWh on fuel alone at ₹95–104/litre. When C&I buyers should switch, with IRR math."
description: "C&I solar costs about ₹4–6/kWh over 25 years; diesel generators ₹24–36/kWh on fuel alone (Oct 2026). When to switch from diesel to solar, with IRR math."
category: "Comparison"
date: 2026-06-05
updatedDate: 2026-10-14
readTime: "21 min"
image: "/og/blog-solar-vs-diesel-generator-india.webp"
author: "Akash Hirapara"
keywords:
  - solar vs diesel generator
  - solar vs dg set india
  - solar generator replacement india
  - c&i solar inverter india
  - diesel generator replacement solar
faqs:
  - q: "When does solar beat a diesel generator on cost per unit?"
    a: "Solar beats diesel the day it is commissioned. At diesel prices of ₹95–104 per litre (14 October 2026) and a fuel efficiency of 3–4 kWh per litre, a diesel generator produces power at about ₹24–36 per kWh on fuel alone. A 50 kW C&I solar plant at ₹55,000/kWp delivers power at about ₹4–6 per kWh on a levelised basis (9% discount rate, 25 years, calculated in this post). The crossover is not a future event: it exists today for any facility whose DG runs during daylight hours, because every solar kWh that replaces a DG kWh saves roughly ₹20–30."
  - q: "What is the minimum plant load for solar to make financial sense for a factory?"
    a: "A useful threshold is 30 kW of average daytime demand. Below this level, the fixed engineering and installation costs often push the payback period beyond seven years, which weakens the IRR case for most CFOs. Above 50 kW average daytime demand, the worked example in this post gives a payback of about 1.3 to 1.4 years when solar displaces diesel, about 2.1 to 2.3 years when half of it displaces diesel and half displaces grid, and about 5.5 to 6.2 years against grid power alone at ₹7.50/kWh. Pre-tax IRR in those cases is about 70–78%, 43–48% and 15–17% respectively, all assumptions-driven and above most industrial WACC benchmarks."
  - q: "Can a solar inverter run in parallel with a diesel generator?"
    a: "Not by simply wiring them together. A grid-tied inverter expects a stable reference it can export into, and a diesel generator is a small isolated source that can be pushed into reverse power or into running below its minimum loading, both of which damage the set. A working arrangement needs a controller that limits solar output to the load so nothing feeds back into the generator, plus reverse-power protection and a minimum-loading floor for the set. Treat this as a designed installation and confirm that the exact inverter model supports generator or export-limited operation."
  - q: "Does solar work when the grid fails and the DG is off?"
    a: "An on-grid solar inverter shuts down automatically when the grid and the DG are both absent - this is the mandated anti-islanding behaviour under IEC 62116 and CEA regulations. A hybrid solar inverter with battery storage continues to supply loads during a grid outage without the DG. For facilities that need 24-hour uptime without DG fuel costs, the hybrid inverter plus battery bank is the correct architecture, not an on-grid-only system."
  - q: "Are there subsidies available for C&I solar that replace a diesel generator?"
    a: "Commercial and industrial solar installations above 10 kW do not qualify for PM Surya Ghar Muft Bijli Yojana residential subsidies. However, C&I buyers can claim accelerated depreciation of 40 percent (written-down-value basis) in the first year under the Income-tax depreciation rules, which delivers a cash-flow benefit in Year 1; confirm your own tax treatment with your accountant. Some state governments and industrial development corporations also offer capital subsidies or concessional loans. IREDA and SBI Green Bonds offer below-market financing that materially improves the project IRR."
  - q: "How do I handle Total Harmonic Distortion (THD) when replacing a DG with solar?"
    a: "Measure it rather than assume it. Grid-tied inverters are required to keep their own current distortion within the limits of the standard they are certified against, so the inverter is usually not the source of a THD problem. Distortion at a site more often comes from nonlinear loads such as drives and rectifiers, and a weak or generator-backed supply makes the resulting voltage distortion worse because the source impedance is higher. Take measurements at the point of common coupling before and after the change, ask for the current THD figure on the datasheet for the exact model, and treat filtering as a design decision based on the measurement."
  - q: "What is the typical payback period for a 50 kW C&I solar installation replacing a DG?"
    a: "For a 50 kW plant at ₹27.5 lakh (₹55,000/kWp, illustrative; installers quote ₹22–30 lakh), generating 65,700 kWh a year (4.5 peak sun hours, 0.80 performance ratio) that all displaces DG output at 3.5 kWh per litre and ₹101.55 per litre (Tamil Nadu, 14 October 2026), net Year 1 savings are about ₹19.3 lakh and simple payback is about 1.4 years. If only half the solar output displaces diesel and the other half displaces grid power at ₹7.50/kWh, net savings are about ₹12.0 lakh and payback about 2.3 years. Pre-tax IRR over 25 years is about 70% in the first case and 43% in the second, before the Year-1 depreciation shield."
  - q: "What happens to the diesel generator after solar is installed?"
    a: "Most C&I buyers retain the DG set as a backup rather than decommissioning it immediately. A daytime-sized solar plant cuts DG fuel burn during daylight hours, but the set still runs overnight and during cloudy periods. In the worked example a 50 kW plant displaces about 45% of the DG's annual energy (65,700 of 146,000 kWh for a 50 kW set running 8 hours a day), which reduces fuel and maintenance costs and extends the set's service life. Over time, as battery storage costs fall, many facilities phase out the DG entirely and switch to a hybrid solar-plus-battery system for full energy independence."
  - q: "How does the 40 percent accelerated depreciation benefit work for solar in India?"
    a: "Under the Income-tax depreciation rules, solar power plants are classified as renewable energy equipment eligible for 40 percent accelerated depreciation (written-down-value basis) in the first year of commissioning, halved if the plant is used for fewer than 180 days in the year. For a ₹27.5 lakh system, this creates an ₹11 lakh depreciation deduction in Year 1. At a 25 percent corporate tax rate, the tax saving is ₹2.75 lakh in the first year, reducing net CAPEX to ₹24.75 lakh and shortening payback by about two months in the diesel-displacement example (1.4 to 1.3 years) and about seven months in the grid-only case (6.2 to 5.5 years). Confirm your tax position with your accountant."
featured: false
---

> **ALMM and inverter compliance:** MNRE's current ALMM page publishes solar PV module and cell lists, not an inverter list. Verify the inverter's exact model documents and applicable scheme or DISCOM requirements separately.

Every factory owner, hospital administrator, and school finance committee in India faces the same cold calculation at the end of each month: the diesel generator bill. At ₹95–104 per litre (14 October 2026) and a fuel efficiency of three to four kilowatt-hours per litre, a diesel generator set produces electricity at ₹24–36 per kWh on fuel alone, a cost that compounds relentlessly across 365 days and is entirely unhedgeable against crude oil prices or rupee depreciation. Solar does not work that way. Once installed, the sun sends no invoices.

This post builds the definitive solar vs diesel generator comparison for Indian commercial and industrial buyers, CFOs, facility heads, and plant managers who need numbers, not marketing language. It walks through the full cost architecture of both technologies, introduces the **DG Displacement IRR Calculator**: a four-variable model for sizing the financial case, and ends with a clear decision framework for when to switch, when to hybridise, and when the DG still has a role to play.

> [!KEYTAKEAWAYS]
> - Diesel power costs about ₹31/kWh all-in (fuel at ₹100/litre, maintenance, depreciation) versus about ₹4.3–5.6/kWh for a 50 kW C&I solar plant on a 25-year levelised basis at a 9% discount rate. The article's own 50 kW example puts DG at ₹31.1/kWh and solar LCOE at ₹5.19/kWh at ₹55,000/kWp.
> - Accelerated depreciation at 40% lets C&I buyers deduct 40% of solar CAPEX in Year 1, worth about ₹2.75 lakh in tax savings on a ₹27.5 lakh system at a 25% tax rate (confirm with your accountant).
> - A hybrid solar-plus-DG set-up is the common transition. In the Tirupur example a 50 kW plant displaces about 45% of the DG's annual energy (65,700 of 146,000 kWh), with payback of about 1.4 years, while the DG covers overnight and overcast loads.
> - For industrial loads, specify THD below 3% at full load, power factor above 0.99 and IEC 62116 anti-islanding, and request the THD report at 25%, 50%, 75% and 100% load.

The economics have never been clearer. What requires careful analysis is the transition architecture, specifically, how to displace the DG without compromising uptime during the changeover, how to handle [harmonics](/glossary/harmonics/) from VFD loads, and how to capture the full depreciation benefit in Year 1. Each of those questions has a specific, numbered answer.

## The True Cost of Running a Diesel Generator in India

Indian C&I buyers often track diesel cost in rupees per litre. The more revealing metric is rupees per kilowatt-hour, because that is the unit that competes directly with the grid tariff and with solar. Once you convert, the DG economics become uncomfortable.

### Fuel cost per kWh

A well-maintained diesel generator set in the 50–500 kW range delivers three to four kWh of usable AC power per litre of diesel consumed, depending on the load factor. At 75 percent load (the recommended operating band for DG longevity), a 50 kW generator consumes approximately 10–12 litres per hour.

Diesel retail prices on 14 October 2026 ranged from ₹95.20 per litre in Delhi to ₹104.23 in Hyderabad, with Tamil Nadu at ₹101.55 and Maharashtra at ₹98.48 ([CarDekho diesel price tracker](https://www.cardekho.com/diesel-price)). Prices change daily, so check the current pump price. Using a round ₹100 per litre, the fuel-only cost per kWh works out as follows:

Table: Diesel fuel-only cost per kWh by generator load factor at ₹100 per litre (rounded from the ₹95–104 range of 14 October 2026)

| Load Factor | kWh per Litre | Fuel Cost per kWh (₹100/litre) |
| --- | --- | --- |
| 50% | 2.8 kWh | ₹35.7/kWh |
| 75% (optimal) | 3.5 kWh | ₹28.6/kWh |
| 100% | 4.1 kWh | ₹24.4/kWh |

Most Indian factories run DG sets at 60–75 percent load, placing the real-world fuel cost at roughly ₹29–31 per kWh, before maintenance.

### Maintenance cost per kWh

DG maintenance (oil changes, filter replacements, alternator servicing, AMC contracts) adds ₹0.5–1.5 per kWh depending on the generator's age and service contract quality. Older sets (more than eight years) often carry maintenance costs of ₹2–3 per kWh once major overhauls are factored in.

### Carbon cost and regulatory risk

Each litre of diesel burned releases approximately 2.68 kg of CO₂ (a commonly used combustion emission factor). A factory running a 50 kW DG set at full load for eight hours per day (400 kWh at 3.5 kWh per litre) burns roughly 114 litres, releasing about 306 kg of CO₂ daily, or about 112 tonnes per year. As India's carbon pricing and ESG disclosure frameworks tighten, this liability is moving from reputational to financial. The Business Responsibility and Sustainability Reporting (BRSR) framework now mandates Scope 1 emissions disclosure for top-listed companies, and the pressure cascades to their suppliers.

### The composite DG cost

Table: Composite all-in cost of diesel-generated power per kWh

| Cost Component | ₹ per kWh |
| --- | --- |
| Fuel (₹100/litre, 3.5 kWh/litre) | ₹28.6 |
| Maintenance (mid-range) | ₹1.0 |
| Depreciation of DG capital | ₹1.5 |
| **Total all-in DG cost** | **₹31.1** |

This is the number a solar system must beat. It does, by a factor of roughly six to seven against the LCOE figures below.

```chart
type: hbar
title: Cost per kWh, diesel generator against C&I solar (50 kW system)
unit: "₹/kWh"
source: "Calculated in this article: DG all-in cost from the composite table above (₹100 per litre, rounded from 14 Oct 2026 pump prices, 3.5 kWh per litre); solar LCOE from system cost plus escalating O&M, discounted at 9% over 25 years, for 65,700 kWh in Year 1"
note: "Lower is better. Solar figures use the article's ₹22 lakh, ₹27.5 lakh and ₹30 lakh CAPEX cases. Illustrative; replace with your own quote and diesel price."
data:
  - { label: "Diesel generator, all-in", value: 31.1 }
  - { label: "Solar LCOE, ₹30 lakh CAPEX", value: 5.59 }
  - { label: "Solar LCOE, ₹27.5 lakh CAPEX", value: 5.19 }
  - { label: "Solar LCOE, ₹22 lakh CAPEX", value: 4.31 }
```

> **₹31.1 per kWh.** The all-in cost of diesel-generated power for a 50 kW factory DG running at 75 percent load, including fuel at ₹100 per litre (rounded from the 14 October 2026 pump prices of ₹95.20–104.23), maintenance, and capital depreciation. *Source: calculated in this article; pump prices per [CarDekho](https://www.cardekho.com/diesel-price), 14 October 2026.*

## The True Cost of C&I Solar Power in India

Solar has two cost phases that are radically different: the upfront CAPEX and the ongoing marginal cost of generation. Unlike diesel, the marginal cost of solar generation is effectively zero, sunlight is free.

### CAPEX for a 50 kW C&I installation

MNRE's published benchmark cost applies to residential PM Surya Ghar systems (₹50,000/kW for the first 2 kW and ₹45,000/kW beyond, effective 13 February 2024), not to C&I plants. For 50 kW commercial systems, installers published roughly ₹44,000–60,000 per kWp in 2026 (Kondaas, 27 May 2026: ₹22–28 lakh; Fulminous, 8 July 2026: ₹45–60 per watt), covering modules, inverter, mounting, BOS and installation. Their GST treatment is not always stated, so confirm it on your quotation. For a 50 kW system this post uses three illustrative cases:

- **Low estimate:** ₹22 lakh (₹44,000/kWp, competitive EPC)
- **Mid estimate:** ₹27.5 lakh (₹55,000/kWp, mid-market modules, quality inverter, standard installation)
- **High estimate:** ₹30 lakh (₹60,000/kWp, premium bifacial modules, hybrid inverter, battery-ready wiring)

The [C&I solar inverter](/c-i-solution/) component (for a 50 kW plant) typically accounts for ₹2.5–4 lakh of this total (an assumed range, so ask for the exact figure on your quotation), or roughly 10–15 percent of system CAPEX.

### LCOE: The fair comparison metric

The [Levelised Cost of Energy (LCOE)](/glossary/lcoe/) strips away financing structures and compares total lifetime cost per kWh across technologies. For C&I solar in India:

- **System cost:** ₹27.5 lakh (50 kW, mid case)
- **Annual generation:** 50 kW × 4.5 peak sun hours × 365 days × 0.80 performance ratio = 65,700 kWh in Year 1
- **Degradation over 25 years:** 0.5% per year (standard PERC module), giving about 1.55 million kWh undiscounted
- **O&M cost:** ₹750/kWp/year = ₹37,500 in Year 1 (about ₹0.57/kWh), escalating 3% a year
- **Discount rate:** 9%

> [!FORMULA]
> Solar LCOE = (₹27,50,000 CAPEX + discounted O&M of about ₹4.73 lakh) ÷ discounted generation of about 6.2 lakh kWh = ₹5.19/kWh

The same formula gives ₹4.31/kWh at ₹22 lakh and ₹5.59/kWh at the high CAPEX estimate of ₹30 lakh, against ₹31.1/kWh for diesel. These are discounted figures that include the cost of capital; the [LCOE of solar in India](/blog/lcoe-solar-india/) post sets out the same method and its sensitivity tables for a 50 kW plant at 5.0 peak sun hours.

### O&M cost for solar

Solar O&M is small compared with diesel. The ₹750/kWp/year assumption (₹37,500 for 50 kW, about ₹0.57/kWh in Year 1) covers panel cleaning (important in dusty industrial environments), inverter service and inspection, and insurance and contingency. Compare this with the ₹1–1.5/kWh this post assumes for diesel maintenance alone.

## The DG Displacement IRR Calculator: A 4-Variable Model

This is the proprietary framework that converts the diesel-vs-solar debate from a qualitative conversation into a CFO-ready number.

### The DG Displacement IRR Calculator

The model has four variables:

1. **DG Fuel Cost (Variable A)**: Diesel price per litre × litres consumed per day × 365 days × project life in years. This is the gross liability the solar plant eliminates.

2. **Solar [CAPEX](/glossary/capex/) (Variable B)**: Total installed cost of the solar system, net of any accelerated depreciation tax benefit. For most profitable Indian companies, the 40% first-year accelerated depreciation under the Income-tax rules reduces the effective net CAPEX by 10–12% in Year 1 (40% × a 25–30% tax rate).

3. **O&M Delta (Variable C)**: The difference between DG O&M (₹1–1.5/kWh) and solar O&M (₹0.25–0.40/kWh) over the project life. This is additive savings on top of fuel savings.

4. **Grid Tariff Savings (Variable D)**: Only the solar kWh that do not displace diesel can displace grid power, so Variable D applies to the remainder, never to the same kWh counted in Variable A. The avoided charge is the energy charge, for example ₹7.50/kWh for Tamil Nadu HT industrial consumers in normal hours (TNERC Suo-motu Order No. 6 of 2025, effective 1 July 2025, as listed in a [TECA circular of 7 July 2025](https://tecaonline.in/pdfupload/Files/Cir-25-The%20Tariff%20Revision%20for%20FY%202025-26%20as%20per%20the%20TNERC%20Tariff%20Order.pdf); a 5% electricity tax applies on top) or ₹6.70/kWh for Karnataka HT-2(a) industrial consumers (KERC order of 3 March 2026 as reported by [ThePrint](https://theprint.in/india/kerc-increases-electricity-tariffs-for-commercial-industrial-consumers/2869823/)).

**The formula:**

> [!FORMULA]
> Net NPV = (A + C + D) − B

Where all variables are expressed in present value terms over the project life using the company's [WACC](/glossary/wacc/) as the discount rate.

For most Indian C&I buyers with a WACC of 12–14%, the NPV of solar over 25 years is strongly positive wherever it displaces diesel for most of its output; against grid power alone at ₹7–8/kWh the margin is thinner and depends on your WACC and tariff. CFOs who want to run this model against their own utility bills and DG logbooks rather than the worked example below can use a dedicated [solar financial modelling tool](https://surgepv.com/generation-financial-tool/) to generate a bankable NPV and IRR output.

### Worked Example: A 50 kW Factory in Tamil Nadu

A textile accessories manufacturer in Tirupur runs a 50 kW DG set for eight hours per day to supplement an unreliable grid. This is an illustrative scenario with assumed figures, not a real customer. Here is the DG Displacement IRR Calculator applied to it.

**The key constraint: solar can only displace the kWh it generates.** The DG produces 50 kW × 8 hours × 365 days = 1,46,000 kWh a year. A 50 kW solar plant at 4.5 peak sun hours and 0.80 performance ratio generates 65,700 kWh in Year 1 (about 45% of the DG's annual output), so it cannot remove the whole DG fuel bill. The best case assumes all 65,700 kWh replaces DG output, which needs the DG load to stay above the set's minimum loading while solar is running; check this against a load profile.

**Inputs (all illustrative unless sourced)**

- Diesel: ₹101.55 per litre (Tamil Nadu retail price, 14 October 2026, per [CarDekho](https://www.cardekho.com/diesel-price)); DG output 3.5 kWh per litre
- DG maintenance avoided: ₹1.0 per kWh displaced
- Grid: ₹7.50/kWh HT industrial energy charge, normal hours (TNERC order effective 1 July 2025, per the TECA circular cited above)
- Solar: 50 kW, ₹27.5 lakh all-in (₹55,000/kWp), 65,700 kWh in Year 1, 0.5% annual degradation, O&M ₹37,500 a year escalating 3%, an assumed ₹3 lakh inverter replacement in Year 12
- Diesel and grid prices held flat for 25 years (conservative); discount rate 9%

**Variable A, DG fuel saved (Year 1, best case)**

- Diesel avoided: 65,700 kWh ÷ 3.5 kWh/litre = 18,771 litres
- Fuel saved: 18,771 × ₹101.55 = ₹19.06 lakh

**Variable B, Solar CAPEX**: ₹27.5 lakh (₹24.75 lakh after the Year-1 depreciation shield of 40% × 25% tax)

**Variable C, O&M delta (Year 1)**

- DG maintenance saved: ₹1.0/kWh × 65,700 kWh = ₹0.66 lakh
- Solar O&M cost: ₹0.375 lakh
- Net O&M effect: +₹0.28 lakh

**Variable D, Grid tariff savings**: ₹0 in this best case, because every solar kWh is already counted against the DG.

**The calculation (Year 1 net savings): ₹19.06 lakh + ₹0.66 lakh − ₹0.375 lakh = ₹19.34 lakh**

Table: Tirupur worked example, three DG displacement cases for a 50 kW solar plant (pre-tax, ₹27.5 lakh CAPEX, flat prices)

| Case | Solar kWh displacing DG | Solar kWh displacing grid | Year 1 net savings | Simple payback | IRR (25 yrs) | NPV at 9% |
| --- | --- | --- | --- | --- | --- | --- |
| A: all solar output displaces DG | 65,700 | 0 | ₹19.34 lakh | 1.4 years | 70% | ₹153 lakh |
| B: half displaces DG, half grid | 32,850 | 32,850 | ₹11.95 lakh | 2.3 years | 43% | ₹83 lakh |
| C: no DG, all displaces grid | 0 | 65,700 | ₹4.55 lakh | 6.2 years | 15% | ₹13 lakh |

Payback is the year cumulative cash flow turns positive, with Year-12 inverter replacement included in the IRR and NPV. Counting the Year-1 depreciation shield (net CAPEX ₹24.75 lakh) shortens payback to about 1.3, 2.1 and 5.5 years and lifts IRR to about 78%, 48% and 17%. Allowing 3% diesel and 2% grid tariff escalation adds a few more points of IRR (about 73%, 46% and 17% before the shield).

Case A's payback of about 1.4 years (about 17 months) is the upper bound for a 50 kW plant, because it assumes every solar kWh replaces a DG kWh. Case B, where the DG runs about four hours a day, is closer to what many sites achieve. Case C is the comparison for facilities with no DG: solar still clears a 12–14% WACC, but only just.

This is why diesel-replacement solar is the highest-return solar application in India: it is not just about the solar savings, it is about the cost of the counterfactual. For more context on payback calculations, see our detailed post on [solar inverter payback period in India](/blog/solar-inverter-payback-period/).

## Solar vs Diesel Generator: Master Comparison Table

The table below covers the 10 most important dimensions a CFO or facility manager should evaluate before making this decision. Fuel prices are those of 14 October 2026; other costs are illustrative 2026 ranges.

Table: Solar C&I rooftop compared with a diesel generator on twelve dimensions, October 2026 fuel prices

| Dimension | Solar (C&I Rooftop) | Diesel Generator | Solar Advantage |
| --- | --- | --- | --- |
| **Fuel cost per kWh** | ₹0 (sunlight) | ₹24–36/kWh (₹100/litre) | Solar saves ₹24–36 per kWh displaced |
| **CAPEX (50 kW)** | ₹22–30 lakh | ₹8–15 lakh (DG purchase) | Diesel lower upfront |
| **OPEX per kWh** | ₹0.5–0.6 (Year 1) | ₹25–37 (fuel + maintenance) | Solar wins by roughly 45–65× |
| **Emissions (per kWh)** | ~0 g CO₂ | 750–900 g CO₂ | Solar wins (ESG) |
| **Noise (dB at 1 m)** | 35–45 dB (inverter fan) | 85–105 dB | Solar wins |
| **Grid independence** | High (daytime) | High (any time) | Hybrid = full independence |
| **Subsidy eligibility** | Accelerated depreciation 40% | No subsidy | Solar wins |
| **Scalability** | Add panels/inverters modularly | Replace/parallel DG sets | Solar wins |
| **Maintenance frequency** | Quarterly cleaning + annual check | Weekly/fortnightly AMC | Solar wins |
| **Lifespan** | 25 years (modules) + 12 years (inverter) | 10–15 years (DG set) | Solar wins |
| **CO₂ liability (25 yrs)** | Near zero | About 2,800 tonnes (50 kW × 8 hrs/day) | Solar wins |
| **IRR (25 years)** | About 15–70% in the worked example, depending on DG displacement | Negative (cost centre) | Solar wins |

The only dimension where diesel holds an advantage is upfront CAPEX, and where solar displaces diesel for most of its output that advantage disappears in about 1.4 years in the worked example.

## How Solar Handles Industrial Loads: THD, VFDs, and Grid Quality

One of the most common technical objections from plant engineers is: "Our factory has Variable Frequency Drives (VFDs), CNC machines, and arc welders. Can a solar inverter handle that without degrading power quality?"

The concern is valid. Industrial loads inject [harmonics](/glossary/harmonics/) back into the plant bus, creating [Total Harmonic Distortion (THD)](/glossary/thd/) that can interfere with sensitive electronics. A diesel generator manages this via its alternator's excitation control, but solar inverters manage it through their output filter design and firmware.

### What to specify for industrial environments

- **THD output < 3%** at full load, this is the IEC 61000-3-2 Class A threshold that protects VFD-driven motors and precision equipment. Inverters with THD above 5% at partial load will cause nuisance tripping on VFDs.
- **Power factor > 0.99**: industrial loads with poor power factor reduce the effective kVA delivered by the inverter; a high-power-factor inverter compensates without requiring additional capacitor banks.
- **IEC 62116 anti-islanding**: mandatory for any solar-plus-DG hybrid. The inverter must detect the DG bus and either synchronise or trip safely to prevent alternator damage. See our glossary entry on [anti-islanding protection](/glossary/anti-islanding/) for the full technical explanation.
- **Wide voltage tolerance**: industrial feeders in India can drift well away from nominal voltage depending on DISCOM load. The allowed AC grid range depends on the model and its grid-code setting, so read it from the exact model's datasheet or manual to confirm the inverter keeps generating through normal swings rather than tripping offline.

### The DG synchronisation protocol

When running solar in parallel with a diesel generator (the most common interim architecture), the sequence matters:

<!-- steps -->
1. DG starts and stabilises at rated frequency (50 Hz ± 0.5 Hz) and voltage (415 V three-phase ± 5%).
2. Solar inverter detects the DG bus, locks phase, and begins injecting current.
3. Solar ramps to maximum power point; DG load (and therefore fuel consumption) falls proportionately.
4. At high solar irradiance, the DG reaches minimum stable load (~30% of rated kVA). Below this, the DG must be stopped or it begins to wet-stack.
5. Control relay (automatic transfer switch with solar-aware logic) stops the DG; solar covers full load from panels.

This sequence is standard in EPC practice and does not require custom control hardware when the solar inverter is IEC 62116-certified. For a deeper look at the total cost comparison including maintenance, our [inverter TCO analysis](/blog/inverter-tco/) provides a 10-year cost model across technology options.

## The Hybrid Solar-Plus-DG Configuration: The Middle Ground

Not every factory can switch to 100% solar immediately. Some sites have critical overnight loads. Others have monsoon-season production demands that create multi-day generation gaps. For these buyers, the hybrid solar-plus-DG configuration is the pragmatic transition architecture. For multi-site or MW-scale rollouts, dedicated MW-scale EPC project management support keeps the DG-to-solar transition on schedule across every facility rather than relying on ad-hoc site-by-site coordination.

### How hybrid solar-plus-DG works

The plant operates on solar during daylight hours (typically 7 am to 5 pm, with partial generation from 6 am and 6 pm in summer months). The DG set handles overnight load and fills in during extended overcast periods. How much of the fuel bill disappears depends on solar size against the DG's running hours: in the Tirupur example a 50 kW plant displaces about 45% of the DG's annual energy.

### Pros and cons of hybrid solar-plus-DG

Table: Pros and cons of a hybrid solar-plus-DG set-up against solar with battery and no DG

| | Pros | Cons |
| --- | --- | --- |
| **Hybrid Solar + DG** | ✓ Fuel bill falls from Day 1 (about 45% of DG energy in the Tirupur example) | ✗ DG still required for overnight and cloudy loads |
| | ✓ No battery investment required | ✗ DG maintenance cost continues (at lower hours) |
| | ✓ Uninterrupted power during solar transition | ✗ Control system complexity (ATS + solar-DG synchronisation) |
| | ✓ Lower solar CAPEX (size for daytime load, not 24-hour) | ✗ DG idle time can cause wet-stacking if not managed |
| **Solar + Battery (No DG)** | ✓ Zero fuel cost, zero emissions | ✗ Battery CAPEX adds ₹15–30 lakh for overnight storage |
| | ✓ Silent operation, no noise complaints | ✗ Battery cycle life limits (LFP: 4,000–6,000 cycles) |
| | ✓ Full ESG compliance | ✗ Longer payback than DG displacement alone (the battery CAPEX is not modelled in this post) |

The hybrid solar-plus-DG configuration is the entry point for most C&I buyers, it delivers immediate cash savings without requiring full energy independence. A [hybrid solar inverter](/hybrid-inverter/) with battery-readiness allows the buyer to add storage later, if battery prices continue to fall.

The on-grid-vs-hybrid decision for C&I buyers is explored in full in our post on [on-grid vs hybrid solar inverters ROI](/blog/on-grid-vs-hybrid-solar-inverters-roi/).

## Accelerated Depreciation and Tax Benefits: The Hidden Accelerator

The financial case for C&I solar is stronger than most buyers realise because of India's accelerated depreciation policy, a benefit that is largely absent from diesel generator economics.

Under the Income-tax depreciation rules (Section 32 of the 1961 Act, carried into the Income-tax Act, 2025; confirm the current section and rate with your accountant), solar power plants are classified as renewable energy equipment eligible for **40% accelerated depreciation** in the first year of commissioning, halved if the plant is used for fewer than 180 days in the year. This is computed on the Written Down Value (WDV) method.

For a ₹27.5 lakh system:

> [!EXAMPLE] Year-1 depreciation on a ₹27.5 lakh system
> - **Year 1 depreciation claimed:** ₹11 lakh (40% of ₹27.5 lakh)
> - **Tax saving at 25% corporate rate:** ₹2.75 lakh in Year 1
> - **Effective net CAPEX after tax benefit:** ₹24.75 lakh

This ₹2.75 lakh first-year saving, combined with fuel savings that begin from Day 1, brings cumulative cash flow to breakeven in about 1.3 years in the best-case Tirupur example (Case A), not within the first 12 months; in the grid-only case it takes about 5.5 years.

Our detailed [solar inverter depreciation in India guide](/blog/solar-inverter-depreciation-in-india/) walks through the depreciation computation with financial year examples and the year-by-year WDV schedule for commercial installations.

GST input tax credit is also available on solar equipment for GST-registered businesses, a further cash-flow improvement. GST on complete solar power generating systems has been 5% since 22 September 2025 (it was 12% before), and a composite supply of equipment plus installation works out to about 8.9% on the 70:30 deemed valuation, so the credit available is correspondingly lower than it was. Components sold separately, such as batteries or a standalone inverter, can still attract 18%, so confirm the rate on the quotation. See [GST on solar inverters](/blog/gst-on-solar-inverters-2026/) for the sourced rates.

## When to Choose Solar, When to Keep Diesel: The Decision Matrix

The question is not binary. The right answer depends on four site-specific variables: load profile, grid reliability, DG run-hours, and CAPEX appetite.

### The 4-Factor Site Decision Matrix

1. **DG Run-Hours per Day**: If the DG runs more than four hours per day, solar is unambiguously superior on economics. If it runs fewer than two hours per day (emergency backup only), the financial case for solar remains strong but is driven by grid tariff savings rather than DG displacement. If the DG runs zero hours (pure standby), the case for solar is still strong, but the hybrid-vs-on-grid decision becomes the primary question.

2. **Grid Reliability at the Site**: If grid availability exceeds 20 hours per day, an [on-grid solar inverter](/on-grid-inverter/) is the most economical choice. If grid availability is 12–18 hours per day (common in Tier-2 industrial estates), a hybrid inverter with a small battery bank provides uninterrupted production without a DG. If grid availability is below 10 hours per day, a DG or large battery bank remains necessary for overnight operations.

3. **Load Profile**: Daytime-heavy loads (most factories, schools, commercial buildings with air-conditioning) are the ideal profile for solar. Overnight-heavy loads (cold storage, hospitals, data centres) require a battery or DG component regardless of solar size.

4. **CAPEX vs OPEX Preference**: Companies with strong balance sheets and tax efficiency are better served by CAPEX solar (own the system, capture depreciation). Companies with constrained capital budgets or OPEX preference should evaluate the RESCO/PPA model, where a developer installs and owns the system and the buyer pays a per-kWh tariff, indicatively ₹4.5–6/kWh (get written offers), still far below the DG cost.

Table: Recommended architecture and modelled pre-tax IRR by site profile (50 kW, ₹27.5 lakh, flat prices)

| Site Profile | Recommended Architecture | Expected IRR |
| --- | --- | --- |
| DG > 6 hrs/day, daytime load | Solar (on-grid) + retain DG as standby | About 45–75% (Tirupur Cases A and B, pre-tax) |
| DG 2–6 hrs/day, reliable grid | Solar (on-grid), phase out DG gradually | About 29–43% (25–50% of solar output displacing DG, no depreciation shield) |
| Poor grid, DG < 4 hrs overnight | Hybrid solar + small battery + DG backup | Not modelled here; battery CAPEX needs a site-specific model |
| Overnight-heavy, 24-hr criticality | Hybrid solar + large battery bank + DG | Not modelled here; get a site-specific model |
| Grid-connected, no DG | On-grid solar for tariff savings only | About 15–17% (Tirupur Case C, ₹7.50/kWh, flat tariff) |

## Common Mistakes When Switching from Diesel to Solar

The financial result depends on project inputs and implementation. The following common C&I errors are a review checklist, not claimed Qbits field-frequency data:

- **Undersizing the inverter for future load growth**: A factory installing 50 kW solar today but planning a 30% production expansion in three years should specify a 65–75 kW inverter now. Inverter replacement is expensive and disruptive. Over-specifying the inverter by 20–30% is standard EPC practice for C&I buyers with growth plans. See our [solar inverter sizing guide](/blog/solar-inverter-sizing/) for the detailed methodology.

- **Ignoring shadow analysis at the module level**: Industrial rooftops often have water tanks, HVAC ducts, and chimneys that cast partial shadows. A string inverter without module-level MPPT tracking loses generation disproportionately to shading, a 10% shaded area can reduce output by 40–50% on a poorly configured string. A site-specific [shading analysis](/glossary/shading-analysis/) before array design prevents this, and a proper [commercial solar design](https://surgepv.com/commercial-solar-design/) process models rooftop obstructions before a single panel is ordered.

- **Specifying an inverter not rated for VFD loads**: As discussed in the THD section above, not all inverters are validated for industrial harmonic environments. Always request the THD measurement report at 25%, 50%, 75%, and 100% load before specifying for a factory.

- **Skipping the net-metering application**: Even if the primary motivation is DG displacement, a net-metering connection allows export of surplus daytime generation to the grid, an additional revenue stream that improves the IRR by 2–4 percentage points. Many plant engineers skip this step to avoid DISCOM paperwork, leaving money on the table.

- **Treating solar as a fire-and-forget installation**: Solar panels lose 0.3–0.5% efficiency per year from soiling in dusty industrial environments. A cleaning protocol (monthly in dusty zones, quarterly in clean zones) and annual inverter service are the minimum maintenance requirements. Our [inverter maintenance guide for India](/blog/inverter-maintenance-india/) covers the full O&M schedule.

## Where Qbits Fits in the Solar vs Diesel Decision

C&I buyers replacing diesel generators need an inverter that does more than convert DC to AC. They need one that handles industrial harmonic environments, survives Indian grid volatility, is backed by a local warranty that actually delivers, and provides the fleet-level monitoring data their CFO will demand at the quarterly board meeting.

- **[Hybrid Inverters](/hybrid-inverter/)**: Review the exact model, battery and control documents. Qbits' public datasheets do not state automatic DG synchronisation without additional hardware, so confirm it for the exact model before designing around it.

- **[Download Technical Datasheets](/download-datasheets/)**: Start with the public specifications and request any THD curve, VFD compatibility report or grid evidence required for the exact SKU.

Qbits' public datasheets do not define the warranty base term, remedy, RMA process or response time, so get current written terms for the exact model. A factory should place any required uptime, spares and response obligations in the project contract rather than infer them from brand copy.

If you are evaluating a DG displacement project, [send Qbits the measured load and fuel data](/contact-us/) and ask what analysis can be provided. Confirm the method, assumptions, reviewer, deliverable, timing, and commercial terms. Do not describe a preliminary model as bankable without lender and qualified professional review.

## The Verdict: Solar vs Diesel Generator in India

The numbers point one way, with a caveat on size. Diesel-generated power costs about ₹31 per kWh all-in at ₹100 per litre. Solar-generated power over 25 years costs about ₹4.3–5.6 per kWh for a 50 kW plant at ₹22–30 lakh. The spread is about ₹25–27 per kWh, so where solar displaces diesel it pays back in roughly 1.4 to 2.3 years in the worked example. Against grid power alone, the same plant returns about 15–17% pre-tax, which clears a 12–14% WACC only by a small margin.

The strategic question is not whether to switch. It is how fast to transition and which architecture to choose for the interim period. For most factories running a DG set more than four hours per day, the answer is a rooftop solar system sized for full daytime load, with the DG kept as overnight backup during the first two to three years. As battery costs continue to fall (and they will) the DG is phased out entirely. Factories and process plants that need a turnkey partner for the physical installation, not just the inverter, can start with an industrial solar installation EPC team that handles everything from mounting to commissioning.

The [accelerated depreciation benefit](/blog/solar-inverter-depreciation-in-india/) cuts the effective CAPEX by 10–12% in Year 1. The [C&I solar EPC process](/blog/solar-epc-india/) from survey to commissioning typically takes six to ten weeks. The [payback period](/glossary/payback-period/) for a plant whose output all displaces diesel is about 1.3 to 1.4 years in the worked example.

There is little financial argument for running diesel at ₹24+ per kWh on fuel alone during daylight hours when solar is available at ₹4–6 per kWh. The question is one of implementation timing, architecture and sizing.

The factories, schools, and hospitals that move first stop paying ₹95–104 per litre for daytime power, and whatever diesel costs next year.
