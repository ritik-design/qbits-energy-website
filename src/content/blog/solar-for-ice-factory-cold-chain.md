---
title: "Solar for Ice Factories and Cold Chain in India 2026: Cost and Payback"
excerpt: "Solar for ice factory economics in India: power per tonne of ice, real tariffs, sizing math, and payback in 3 to 4.5 years for cold chain plants."
description: "Solar for ice factory and cold chain plants in India: refrigeration load profiles, kWh per tonne benchmarks, sizing, battery vs grid for night loads, and payback math."
category: "Guide"
date: 2026-07-23
updatedDate: 2026-10-14
readTime: "19 min"
image: "/og/blog-solar-for-ice-factory-cold-chain.webp"
author: "Keyur Rakholiya"
keywords:
  - solar for ice factory
  - solar for cold chain india
  - ice plant power consumption
  - cold storage solar payback india
  - solar for refrigeration plant
faqs:
  - q: "How much electricity does an ice factory use per tonne of ice?"
    a: "An ice factory in India uses roughly 55 to 85 kWh per tonne of ice, depending on ice type and plant efficiency. Tube ice and block ice plants in tropical conditions consume 55 to 70 kWh per tonne, according to FAO benchmarks. Flake ice can reach 70 to 85 kWh per tonne. A measured 10 TPD tube ice plant in the Bhimavaram cluster consumed 73.89 kWh per tonne, according to a SAMEEEKSHA detailed project report. Older compressors and high condensing temperatures push consumption toward the upper end."
  - q: "Is solar viable for an ice factory that runs 24x7?"
    a: "Yes, solar is viable for a 24x7 ice factory because 55 to 65 percent of the daily refrigeration load falls inside solar generation hours. Refrigeration load rises with ambient temperature, so compressors work hardest from 10 AM to 5 PM. That is exactly when solar output peaks. A grid-connected solar plant offsets the expensive daytime block, and the grid or a modest battery bank covers the cheaper night block. Payback on the solar portion typically lands between 3 and 4.5 years at current industrial tariffs."
  - q: "What size solar plant does a 20 TPD ice factory need?"
    a: "A 20 TPD ice factory consuming about 1,400 kWh per day needs roughly 180 to 220 kW of solar to cover its full daytime load. The calculation is simple. Multiply 20 tonnes by 70 kWh per tonne for 1,400 kWh daily. About 55 to 60 percent of that, roughly 800 kWh, falls in the 9 AM to 5 PM solar window. At 4 to 4.5 units per kW per day in most of India, a 200 kW plant produces 800 to 900 units on a clear day. That matches the daytime block."
  - q: "Does an ice factory need batteries with solar?"
    a: "Most ice factories do not need batteries for the solar investment to work. Ice itself is thermal storage. A plant can over-cool the ice bank during solar hours and coast through part of the night with compressors idling. Batteries make sense only where grid outages threaten product quality or where night tariffs are high. Sizing a battery for the full night load of a 200 kW plant costs Rs 40 Lakh or more, which rarely pays back. A smaller battery for control loads and one compressor is the practical middle path."
  - q: "What is the payback period for solar on a cold storage or ice plant?"
    a: "Payback for solar on an ice plant in India runs 3 to 4.5 years for grid-connected rooftop systems. This assumes industrial tariffs of Rs 8 to Rs 9.50 per unit. A 200 kW plant costing about Rs 96 Lakh saves roughly Rs 24 to 25 Lakh per year at Rs 8.50 per unit. Accelerated depreciation of 40 percent in year one improves the effective payback by roughly 5 to 6 months for taxpaying companies (about 3.7 to 3.8 years on the worked example). States with lower tariffs, such as Gujarat at Rs 5 to 5.50 per unit for HT industrial, see payback stretch toward 5 to 6 years."
  - q: "Can solar inverters handle compressor startup surge in an ice plant?"
    a: "Yes, grid-connected solar inverters handle compressor surge easily because the grid absorbs the inrush current, not the inverter. A 100 HP ammonia compressor can draw 2.5 to 3 times its running current at startup. On a grid-tied system, that surge comes from the grid connection. Surge matters only for hybrid or off-grid designs where the inverter must source the inrush. In those cases, soft starters or VFDs cut inrush to 1.2 to 1.5 times running current. The inverter is then sized 25 to 30 percent above total running load."
  - q: "Which refrigerant plants benefit more from solar, ammonia or Freon?"
    a: "Both benefit equally from solar because solar offsets electricity regardless of refrigerant, but the sizing differs. Ammonia plants are larger, typically 50 TPD and above, with big central compressors running near-continuous duty. That gives a flat, predictable load that solar matches well. Freon plants (R22, R404A) are smaller tube ice and cold room units with multiple small compressors cycling on and off, so the load is spikier. For cycling loads, size solar to the average daytime load, not the peak, since the grid covers short peaks."
featured: false
---

> **Qbits warranty and service terms:** Qbits public datasheets describe an expandable warranty but do not define a universal duration, remedy, registration deadline, service SLA, or exclusions. Obtain the current written terms for the exact model and sale before relying on a headline claim.

A 20 tonne per day ice factory in coastal Andhra Pradesh spends Rs 12 Lakh to Rs 16 Lakh a year on electricity. Compressors run around the clock, the bill arrives every month, and the owner treats power cost as a fixed tax on making ice. It is not fixed. Solar for ice factory applications is one of the strongest economics cases in Indian C&I solar. The reason is simple: refrigeration load peaks when the sun is out.

Ice plants and cold chain facilities sit in a rare position. They are energy intensive, so every unit saved is real money. Their heaviest load falls between 10 AM and 5 PM, exactly overlapping solar generation hours. And they already own the one thing most factories lack: built-in thermal storage, because ice and chilled brine hold cold the way a battery holds charge. This guide covers the actual numbers: power per tonne, solar costs in 2026, sizing against compressor loads, and the honest battery tradeoffs for night operation.

> [!KEYTAKEAWAYS]
> - Ice plants consume 55 to 85 kWh per tonne of ice depending on type, according to FAO benchmarks and SAMEEEKSHA cluster studies. Electricity is 40 to 62 percent of operating cost in Indian [cold storage](https://www.heavengreenenergy.com/blog/solar-for-cold-storage-roi) and ice plants, the single largest controllable expense.
> - 55 to 65 percent of the daily refrigeration load falls inside solar hours, so a grid-connected plant offsets the most expensive block without batteries.
> - A 200 kW solar plant for a 20 TPD ice factory costs about Rs 96 Lakh. It pays back in about 4.2 years at Rs 8.50 per unit, and [accelerated depreciation](/glossary/accelerated-depreciation/) of 40 percent in year one cuts effective payback to about 3.7 to 3.8 years for taxpaying businesses.
> - Ice itself is thermal storage: over-cooling the brine tank during solar hours replaces most of what a costly battery would do.
> - Batteries only pay where night tariffs are high or outages threaten product. Full night-load storage for a 200 kW plant costs Rs 40 Lakh plus.

**Short version.** Solar for ice factory use works because refrigeration demand peaks with heat and sunlight together. Size solar to the daytime load block, roughly 9 to 11 kW per tonne of daily ice capacity. Connect on-grid and use the ice bank as thermal storage for part of the night. Expect payback in 3 to 4.5 years. Skip the big battery unless outages or night tariffs justify it.

If you are still deciding on inverter topology for the plant, the [on-grid vs hybrid vs off-grid decision guide](/blog/on-grid-vs-hybrid-vs-off-grid-decision-guide/) covers that upstream question. This post stays on the economics. For inverter hardware selection specific to cold storage duty cycles, see the [solar inverter for cold storage](/blog/solar-inverter-for-cold-storage-india/) guide.

## Why Ice Factories Have the Best Solar Economics in C&I

Most factory solar projects fight a mismatch problem. A fabrication shop runs machines in shifts, a rice mill peaks at harvest season, a hotel loads up in the evening. Solar generates from 8 AM to 6 PM, and anything outside that window needs the grid or a battery.

Refrigeration is different. Compressor load is driven by heat ingress and ambient temperature. Both rise through the day and peak in the early afternoon. An ice plant's hardest working hours are 11 AM to 4 PM, which is also peak solar output. This alignment is unusually tight.

Three structural factors make the economics work:

- **High energy intensity.** Electricity is up to 62 percent of operating cost in cold storage, according to Energiaa's cold storage solar analysis. Every unit offset drops straight to the bottom line.
- **Flat to rising daytime load.** Unlike offices that idle at lunch, compressors never stop. A solar plant sized to daytime load finds a buyer for every unit it generates.
- **Thermal storage already exists.** Ice banks, brine tanks, and frozen product hold cooling for hours. The plant can shift load into solar hours at zero equipment cost.

> [!TIP] What most ice plant owners get wrong
> They compare solar cost against their average tariff. They should compare it against their marginal daytime tariff, which is what solar actually replaces, and against diesel for backup hours. Both comparisons favour solar heavily.

The counterintuitive finding here: a 24x7 load is easier to solarize than a 9-to-5 load of the same size. The 24x7 plant has no weekend shutdown, no seasonal idle, and no duck curve problem. Self-consumption ratios of 90 percent plus are normal. Most C&I rooftop projects celebrate 70 percent.

## The Refrigeration Load Profile: What Runs Your Meter

Before sizing anything, understand where the units go. A typical Indian ice factory load breaks down roughly as follows:

Table: Typical load breakdown of an Indian ice factory

| Load | Share of consumption | Behaviour |
| --- | --- | --- |
| Refrigeration compressors (ammonia or Freon) | 70 to 80 percent | 24x7 duty, 60 to 80 percent loading, rises with ambient |
| Condenser pumps and cooling tower fans | 8 to 12 percent | Runs with compressors |
| Brine agitators and ice handling | 5 to 8 percent | Intermittent, daytime-weighted |
| Lighting, office, controls | 3 to 5 percent | Flat |

The compressor is the story. A measured 150 HP refrigeration compressor in the Bhimavaram ice cluster drew 103.7 kW delivering 71.6 tonnes of refrigeration. It ran 24 hours a day, according to the [SAMEEEKSHA detailed project report](https://sameeeksha.org/pdf/dpr/Bhimavaram_ice_making_cluster/New_Refrigiration_compressor_150_HP_Bhimavrm_IMC.pdf).

Fixed-speed compressors draw 2.5 to 3 times running current at startup. On a grid-connected solar plant, the grid absorbs that inrush and the solar inverter never sees it. Surge only becomes a design constraint in hybrid or off-grid configurations, covered later in this post.

Ambient sensitivity matters for sizing. Compressor power rises roughly 1.5 to 2 percent per degree Celsius of condensing temperature increase. A plant pulling 100 kW at 9 AM may pull 115 to 120 kW at 2 PM. That afternoon hump sits directly under the solar peak.

## Ice Plant Power Consumption: kWh per Tonne Benchmarks

Sizing starts from energy per tonne, not from connected load. The benchmarks:

Table: Ice plant energy use, kWh per tonne, temperate vs tropical India

| Ice type | Temperate climate (kWh/tonne) | Tropical climate, India (kWh/tonne) |
| --- | --- | --- |
| Block ice | 40 to 50 | 55 to 70 |
| Tube ice | 40 to 50 | 55 to 70 |
| Flake ice | 50 to 60 | 70 to 85 |

```chart
type: hbar
title: Ice plant energy use in tropical climates such as India, kWh per tonne of ice
unit: "kWh/tonne"
source: "FAO ice plant engineering reference (fao.org, T0713E06), as cited in this article; ranges are for tropical climate, India"
sourceUrl: https://www.fao.org/4/t0713e/T0713E06.htm
note: "Lower is better. Older reciprocating compressors run 10 to 20 percent above these ranges."
data:
  - { label: "Block ice", min: 55, max: 70 }
  - { label: "Tube ice", min: 55, max: 70 }
  - { label: "Flake ice", min: 70, max: 85 }
```

These ranges come from the [FAO ice plant engineering reference](https://www.fao.org/4/t0713e/T0713E06.htm). Indian field data confirms them. The measured specific energy consumption of a 10 TPD tube ice plant in Bhimavaram was 73.89 kWh per tonne, according to the [SAMEEEKSHA cluster DPR](https://sameeeksha.org/pdf/dpr/Bhimavaram_ice_making_cluster/Tube_ice_plant_10_TPD_Bhimavrm_IMC.pdf).

Table: Typical plant sizes and daily consumption (industry-observed, using 65 to 75 kWh/tonne)

| Plant capacity | Daily consumption | Monthly units | Monthly bill at Rs 8.50/unit |
| --- | --- | --- | --- |
| 5 TPD tube ice | 325 to 375 kWh | 10,000 to 11,500 | Rs 85,000 to 98,000 |
| 20 TPD block/tube | 1,300 to 1,500 kWh | 40,000 to 46,000 | Rs 3.4 to 3.9 Lakh |
| 50 TPD block ice | 3,250 to 3,750 kWh | 1.0 to 1.15 Lakh | Rs 8.5 to 9.8 Lakh |
| 2,000 MT cold storage | 4,000 to 5,000 kWh | 1.2 to 1.5 Lakh | Rs 10 to 12.5 Lakh |

A real-world anchor: a 2,000 MT cold storage in Sonipat reported a monthly bill of Rs 12 Lakh. That was at Rs 8.20 per unit on about 1.46 lakh units, according to [Bridgeway Power](https://bridgewaypower.in/blog/open-access-solar-cold-storage-india), 2026. It is consistent with the table.

Two adjustments to apply. First, older reciprocating compressors run 10 to 20 percent above benchmark. A plant built before 2010 should use the top of the range. Second, defrost method matters. Hot-gas defrost on tube and plate ice adds 5 to 10 percent over flake plants that harvest mechanically.

## What Solar Costs for an Ice Factory in 2026

For reference, dated 2026 vendor figures for a 50 kW rooftop plant were Rs 22 to 28 lakh (Kondaas, 27 May 2026) and Rs 45 to 60 per watt (Fulminous, 8 July 2026), which is roughly Rs 45,000 to Rs 60,000 per kW. Larger plants may price lower; get written quotes for your size.

Table: Solar plant cost and sizing by ice factory scale (hypothetical, at Rs 48,000 per kW)

| Plant | Solar size (daytime block) | Estimated capex | Annual generation | Annual saving at Rs 8.50/unit |
| --- | --- | --- | --- | --- |
| 5 TPD ice plant | 50 kW | Rs 24 Lakh | 73,000 units | Rs 6.2 Lakh |
| 20 TPD ice plant | 200 kW | Rs 96 Lakh | 2.9 Lakh units | Rs 24.7 Lakh |
| 50 TPD ice plant | 500 kW | Rs 2.4 Crore | 7.3 Lakh units | Rs 62 Lakh |
| 2,000 MT cold storage | 550 kW | Rs 2.64 Crore | 8.0 Lakh units | Rs 68 Lakh |

Generation assumes 4 units per kW per day, conservative for most of peninsular India. Gujarat, Rajasthan, and Telangana sites deliver 4.3 to 4.7 units per kW per day, improving every number in the table.

The sizing rule of thumb: **9 to 11 kW of solar per tonne of daily ice capacity** covers the daytime load block. A 20 TPD plant lands at 180 to 220 kW. Go larger only if net metering or open access lets you bank surplus against night consumption. Otherwise surplus exports at Rs 2 to 3.50 per unit, which wrecks the marginal economics.

> [!WARNING] Oversizing past the daytime block
> Surplus units exported to the DISCOM earn Rs 2 to 3.50, against Rs 8.50 avoided when the plant uses the unit itself. Size to the daytime block unless net metering or open access banking is secured first.

For plants above 1 MW connected load, open access procurement changes the math entirely. The [open access solar guide](/blog/open-access-solar-india-explained/) covers when buying solar power beats building it.

## Payback Math: Worked Example for a 20 TPD Ice Plant

Here is the full calculation, inputs shown. The plant is hypothetical but every input uses the benchmarks above.

**Inputs:**
- Capacity: 20 TPD tube ice, Gujarat location
- Consumption: 1,400 kWh per day (70 kWh/tonne)
- Daytime share (9 AM to 5 PM): 58 percent, or 812 kWh
- Solar size: 200 kW at 4.1 units per kW per day = 820 units per day average
- Tariff: Rs 8.50 per unit blended industrial rate
- Capex: Rs 96 Lakh (Rs 48,000 per kW)
- O&M: Rs 1.2 Lakh per year

> [!FORMULA]
> Simple payback (years) = Capex ÷ Net annual saving

Table: Payback calculation for a 200 kW solar plant on a 20 TPD ice factory

| Item | Value |
| --- | --- |
| Annual solar generation | 2,99,000 units |
| Self-consumed (95 percent) | 2,84,000 units |
| Annual gross saving | Rs 24.1 Lakh |
| Less O&M and insurance | Rs 1.5 Lakh |
| Net annual saving | Rs 22.6 Lakh |
| Simple payback | 4.2 years |
| Tax saving, 40 percent accelerated depreciation (year one) | Rs 9.6 to 11.5 Lakh |
| Effective payback with depreciation | 3.7 to 3.8 years |

Industrial tariffs vary sharply by state, and this moves payback by a full year either way. Maharashtra HT industrial consumers pay around Rs 8.50 per unit. A revised policy targets Rs 7.38 per unit, according to [Power Peak Digest reporting on the state tariff policy](https://powerpeakdigest.com/), 2025. Gujarat HT industrial energy charges run Rs 5 to 5.50 plus demand charges, landing effective rates near Rs 7 to 7.50. Model your own blended rate from the last 12 months of bills, not the DISCOM headline.

The [solar IRR and payback guide for C&I](/blog/solar-irr-payback-ci-india/) models this math year by year across tariff bands and financing structures. If diesel backup is part of your cost stack, add avoided diesel at Rs 22 to 28 per unit to the saving line. The [solar vs diesel generator comparison](/blog/solar-vs-diesel-generator-india/) has the per-unit breakdown.

## Night Loads: Hybrid + Battery vs Grid

This is the section where most ice plant solar proposals go wrong. The plant runs 24x7, so the salesperson sells a battery for the night block. The math almost never supports it.

Table: Three night-load strategies for a 200 kW solar plant

| Strategy | Added cost | What it covers | Verdict |
| --- | --- | --- | --- |
| Grid for night block | Zero | All night load at night tariff | Default choice, fastest payback |
| Ice bank as thermal storage | Zero to Rs 3 Lakh (controls) | 2 to 4 hours of compressor coasting | Free capacity, use it first |
| Battery, 200 kWh LFP | Rs 44 to 56 Lakh | Roughly 2 hours of full night load | Rarely pays back under 8 years |

A full night block for a 20 TPD plant is about 590 kWh. At Rs 22,000 to 28,000 per kWh installed, that is Rs 1.3 Crore or more. Night tariff is only Rs 7 to 8 per unit. Each kWh of battery capacity can shift at most one kWh a day, so at Rs 7.5 per unit and 330 cycles a year the best case is about Rs 2,500 a year per kWh of capacity, against Rs 22,000 to 28,000 installed. That is a simple payback of roughly 9 to 11 years before round-trip losses, and it ignores that the same solar energy could offset daytime load at a similar tariff. It does not pay back inside its calendar life.

The exception is real. If your plant sits on a low-voltage industrial feeder with 3 to 6 hours of daily outages, melting ice costs you product, not just power. A modest hybrid setup, one compressor plus controls on 50 to 100 kWh of battery, protects product quality for a fraction of full-load storage cost. The [battery sizing for hybrid solar](/blog/battery-sizing-hybrid-solar/) guide walks the sizing method.

The better free tool is the ice bank itself. Run compressors hard from 10 AM to 4 PM. Build ice or chill brine 2 to 3 degrees below the normal setpoint. Then let the bank coast through the evening peak. This shifts 15 to 25 percent of night load into solar hours at zero capex. Any competent controls contractor can program it.

## Compressors, Surge, and Inverter Selection

Grid-connected systems make inverter selection straightforward because the grid stiffens everything. Still, three engineering points decide reliability in refrigeration duty.

First, use a 3-phase string inverter architecture sized to the daytime block, not the connected load. A 20 TPD plant with 400 kW of connected load still only needs 200 kW of solar inverter, because that is what the sun-side covers. The [3-phase solar inverter guide](/blog/3-phase-solar-inverter/) explains why three-phase string inverters suit industrial roofs. The broader [solar inverter for factory](/blog/solar-inverter-for-factory/) post covers industrial selection criteria.

Second, check the inverter's AC grid voltage range. Industrial feeders can swing widely on a bad day. The allowed range depends on the model, the DISCOM's connection conditions and the inverter's grid-code setting, so read it from the exact model's datasheet or manual. A compressor plant adds its own voltage dips every time a big motor starts. An inverter whose grid range suits the site is less likely to trip offline and dump your solar production right when the plant needs it.

Third, surge only matters off-grid. If you do go hybrid for outage protection, fit soft starters or VFDs on the compressors you want on battery. This cuts inrush from 2.5 to 3 times running current down to 1.2 to 1.5 times. A modest inverter can then carry the load. VFD retrofits on old ammonia compressors also cut running consumption 8 to 15 percent, which shrinks the solar plant you need to buy.

## The Tradeoffs: Where Ice Factory Solar Goes Wrong

Honest assessment. Solar for ice factories fails in predictable ways, and all of them are avoidable at the design stage.

**Oversizing past the daytime block.** Surplus units exported to the DISCOM earn Rs 2 to 3.50, against Rs 8.50 avoided. Every kW beyond your daytime self-consumption pays back two to three times slower. Size to the daytime block, or secure net metering or open access banking first.

**Ignoring roof condition and ammonia exposure.** Ice plants have corrosive atmospheres near ammonia condensers and brine areas. Structures and fasteners need hot-dip galvanizing, and inverters need IP65 minimum, IP66 preferred. An IP54 inverter in a coastal ice plant is a five-year replacement cycle waiting to happen.

**Counting subsidy that does not exist.** There is no central capital subsidy for C&I rooftop solar in 2026. PM Surya Ghar covers residential only. The financial levers for an ice plant are accelerated depreciation, net metering or open access banking, and concessional MSME finance. Any proposal showing a central subsidy line for a commercial ice plant is wrong.

**Cheap structures on old asbestos roofs.** Many ice plants sit under aging asbestos or thin-gauge sheets. Solar adds 12 to 15 kg per square metre plus wind uplift loads. Budget roof re-sheeting before signing the solar contract, not after the first monsoon leak.

The nuance worth admitting: for very small plants under 10 TPD in low-tariff states, the case is thinner. At Rs 6.50 blended tariff and 5 TPD scale, payback stretches past 5 years. A VFD retrofit plus thermal storage controls may be the better first investment.

## Financing, Depreciation, and the Real Cash Flow

Most ice plants are MSMEs, and the financing stack matters as much as the engineering.

- **Accelerated depreciation.** Solar plant qualifies for 40 percent written down value depreciation in year one. For a company in the 25 to 30 percent tax bracket, that saves Rs 9.6 to 11.5 Lakh of tax in year one.
- **MSME solar loans.** Specialized green credit lines from SIDBI, SBI, and IREDA-backed schemes finance C&I rooftop at 9 to 11 percent. The [solar loan for business and MSME](/blog/solar-loan-for-business-msme/) guide compares the structures.
- **EMI vs saving alignment.** A Rs 96 Lakh plant financed at 10 percent over 7 years costs about Rs 19.1 Lakh per year in EMI (about Rs 1.59 Lakh a month). Net annual saving is Rs 22.6 Lakh. The plant is cash-flow positive from month one by about Rs 3.5 Lakh per year, before depreciation.

OPEX and RESCO models exist at this scale too. A developer builds the plant on your roof and sells you power at Rs 4.50 to 5.50 per unit. You give up the depreciation and the asset, but pay nothing upfront. For owners with capital tied up in cold chain expansion, that trade is often correct.

Owners evaluating this for the first time should also look at how an actual Gujarat plant performed after commissioning. The Rajkot cold storage case study on this blog tracks real generation against projected savings, which is the sanity check every spreadsheet needs.

Continuous ventilation loads are sized in [solar for poultry farms](/blog/solar-for-poultry-farm-india/).

Seasonal rather than continuous industrial load is worked through in [solar for rice mills](/blog/solar-for-rice-mill-india/).

## Conclusion: The Bottom Line

Solar for ice factory and cold chain plants is not a marginal sustainability project. It is a direct attack on the largest controllable cost in the business, with a load profile that matches solar better than almost any other industry. The benchmarks are clear: 55 to 85 kWh per tonne and 9 to 11 kW of solar per tonne of daily capacity. Payback runs 3 to 4.5 years, and thermal storage comes free with the product you already make. The mistakes are equally clear: oversizing past the daytime block, buying batteries the night tariff cannot repay, and trusting C&I subsidies that do not exist.

Three actions to take this week:

- Pull 12 months of electricity bills, compute your blended per-unit rate, and multiply your daily consumption by 58 percent. That is your daytime block and your solar size target.
- Get your roof and electrical single-line diagram assessed before requesting quotes, so proposals come back sized to your actual load profile.
- [Contact Qbits](/contact-us/) with your bill data and load profile to discuss inverter selection for the plant. Confirm in writing who sizes and installs the system, and what is included, before you sign.
