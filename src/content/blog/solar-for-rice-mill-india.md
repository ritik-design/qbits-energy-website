---
title: "Solar for Rice Mills in India 2026: Load Profile, Cost, and Payback"
excerpt: "Solar for rice mills in India: 25-100 kW connected load, Rs 8-12/unit savings vs grid and DG, sizing with 3-phase inverters, and payback math for 2026."
description: "A practical guide to solar for rice mill owners in India. Covers huller, polisher and destoner load profiles, seasonal operation, DG displacement economics, 3-phase inverter sizing, PM-KUSUM relevance, and full payback math for 2026."
category: "Guide"
date: 2026-07-23
updatedDate: 2026-07-23
readTime: "18 min"
image: "/blog-images/solar-for-rice-mill-india.svg"
author: "Keyur Rakholiya"
keywords:
  - solar for rice mill
  - solar power for rice mill india
  - rice mill solar system cost
  - rice mill electricity load
  - rice mill solar payback
  - 3 phase solar inverter rice mill
faqs:
  - q: "How much electricity does a rice mill consume in India?"
    a: "A modern Indian rice mill consumes roughly 18 to 26 kWh per tonne of paddy processed, with huller and sheller mills at the higher end of that range. A mid-sized mill processing 1.5 tonnes per hour and running 12 hours a day during the season typically uses 250 to 400 units per day. Connected load for most mills sits between 25 kW and 100 kW depending on the number of polishers, graders, and elevators installed."
  - q: "What size solar system does a rice mill need?"
    a: "Most rice mills need a solar system between 40 kW and 120 kWp. The correct size is calculated from annual energy consumption, not peak connected load. A mill using about 1,00,000 units per year needs roughly 65 to 75 kWp at 1,450 units per kWp annual yield. Size to the annual average rather than the busiest milling month, because net metering lets you bank surplus units in low-activity months."
  - q: "Can solar replace a diesel generator in a rice mill?"
    a: "Solar can replace most daytime diesel consumption but cannot fully replace the generator. Grid-tied solar without batteries shuts down during outages, so the DG set is still needed for night milling and grid failures. In practice, mills shift 70 to 80 percent of milling to solar hours and run the DG set only at night and during cuts. This typically cuts diesel spend by 60 to 75 percent, since diesel generation costs Rs 16 to 22 per unit."
  - q: "What is the payback period for solar on a rice mill?"
    a: "A rice mill solar system in India typically pays back in 3 to 4.5 years. A 60 kWp system costing about Rs 27 lakh saves Rs 7 to 9 lakh per year at an industrial tariff of Rs 8 to 10 per unit, and more where it displaces diesel at Rs 16 to 22 per unit. Accelerated depreciation at 40 percent in year one improves the effective payback by another 8 to 12 months for mills that pay income tax."
  - q: "Is PM-KUSUM subsidy available for rice mills?"
    a: "Rice mills are not direct beneficiaries under PM-KUSUM, which targets farmers, pumps, and agricultural feeders under Components A, B, and C. Mills benefit indirectly when their agricultural feeder is solarised, because daytime supply becomes more reliable. For the mill itself, the relevant routes are state net metering for commercial and industrial consumers, accelerated depreciation, MSME solar loans, and group captive or open access arrangements for larger plants."
  - q: "Which inverter is best for a rice mill solar system?"
    a: "A rice mill needs a 3-phase string inverter rated for heavy motor loads and dusty rural conditions. Look for IP66 ingress protection, multiple MPPT inputs, a wide grid voltage tolerance of 180 to 270 V per phase, and a long warranty. The Qbits TLS and HT series cover the 25 kW to 100 kW plus range that matches most rice mills, carry a 12-year full replacement warranty, and are ALMM-listed."
  - q: "Does a rice mill solar system work during power cuts?"
    a: "A standard on-grid rice mill solar system does not work during power cuts because anti-islanding protection shuts the inverter down when the grid fails. Mills with frequent outages have three options: keep the DG set for outage hours, add a small battery-backed hybrid section for control panels and lighting, or explore a hybrid plant with enough battery to carry partial milling load. Most mills choose the first option because batteries for a 50 kW milling load are still expensive."
featured: false
---

A rice mill is one of the best solar candidates in Indian agro-industry, and one of the least written about. The load is heavy, daytime-weighted, and almost entirely motor-driven. The mill building usually has a large, unshaded asbestos or RCC roof. The owner pays Rs 8 to 12 per unit on an industrial tariff. Diesel adds another Rs 16 to 22 per unit when the grid fails mid-season. Modern rice mills consume 18 to 26 kWh per tonne of paddy processed, according to research in the Journal of Food Science and Technology, 2012.

This guide is written for mill owners and their engineers deciding on solar in 2026. It covers the load profile of hullers, polishers, and destoners. It explains how seasonal operation changes sizing, and what diesel displacement is worth in rupees. It also covers 3-phase inverter selection for dusty rural sites, plus the full payback math. We also cover where [PM-KUSUM](/glossary/kusum/) fits and where it does not. That is the most common misunderstanding we hear from mill owners.

> **TL;DR**
> - Rice mills typically run 25 to 100 kW of connected load and consume 18 to 26 kWh per tonne of paddy.
> - A mid-sized mill (1.5 tonnes per hour, seasonal) typically needs a 60 to 75 kWp solar system costing Rs 27 to 34 lakh.
> - Solar displaces grid power at Rs 8 to 12 per unit and diesel at Rs 16 to 22 per unit.
> - Annual savings of Rs 7 to 10 lakh are realistic for a 60 kWp plant.
> - Payback runs 3 to 4.5 years before tax benefits, and 2.5 to 3.5 years after accelerated depreciation.
> - Size the plant to annual consumption, not the peak month; net metering banks surplus units off-season.
> - PM-KUSUM does not subsidise rice mills directly; mills use industrial net metering, MSME loans, and depreciation.
> - Use IP66-rated 3-phase string inverters, because rice dust and weak rural grids kill unprotected electronics.

**Short version.** Solar for rice mills works because milling is a daytime, motor-heavy load on an expensive industrial tariff. Most mills need 40 to 120 kWp, sized from annual units consumed rather than connected load. A 60 kWp system costs around Rs 27 lakh, saves Rs 7 to 9 lakh a year, and pays back in 3 to 4.5 years. Keep the DG set for nights and outages; solar replaces its daytime diesel burn.

The economics overlap heavily with other C&I loads we have covered. For the broader factory context, the [solar inverter for factory guide](/blog/solar-inverter-for-factory/) covers C&I sizing fundamentals. This post goes deeper into what makes a rice mill different: seasonality, dust, weak feeders, and diesel.

## The Rice Mill Load Profile: What Actually Draws Power

A rice mill is a collection of induction motors running in sequence. Knowing which machine draws what is the first step to sizing solar correctly. It tells you the load is steady, predictable, and well matched to solar hours.

Here is the typical breakdown for a modern 1.5 to 2 tonnes per hour mill:

**Table 1: Typical machine-level loads in a mid-sized rice mill**

| Machine | Typical motor rating | Share of daily energy |
| --- | --- | --- |
| Pre-cleaner and destoner | 3 to 7.5 kW | 8 to 12 percent |
| Rubber roll sheller or huller | 7.5 to 15 kW | 18 to 25 percent |
| Paddy separator | 2 to 5 kW | 5 to 8 percent |
| Polishers (2 to 4 units) | 11 to 22 kW each | 30 to 40 percent |
| Graders and sorters | 3 to 7.5 kW | 8 to 12 percent |
| Elevators and conveyors | 1.5 to 3 kW each | 10 to 15 percent |
| Lighting, fans, office | 2 to 5 kW | 3 to 5 percent |

The polisher section is the biggest single consumer. Measured studies of rice processing plants found the polisher drawing the largest share of energy, according to the Journal of Food Science and Technology, 2010. Polishers run continuously during milling hours. That gives you a flat, high daytime demand curve, which is ideal for solar.

Three characteristics define the rice mill load:

1. **Motor-heavy, high starting current.** Dozens of induction motors start across the day. In a grid-tied design, the grid or DG handles inrush, not the inverter. The inverter only needs to match steady-state consumption.
2. **Daytime-weighted.** Most mills run 10 to 14 hours daily. Progressive owners shift milling toward solar hours once the plant is installed. At 18 to 26 kWh per tonne, a mill doing 18 tonnes a day burns 320 to 470 units.
3. **Poor power factor without correction.** Induction motors pull a lagging power factor, often 0.8 to 0.85 uncorrected. Check your APFC panel before sizing. A corrected 0.95 plus power factor reduces the kVA you need.

A mill with 60 kW connected load typically runs at 40 to 50 kW during steady milling. Load factor, not connected load, drives the solar sizing math.

## Seasonal Operation: The Sizing Mistake Most Mills Make

Rice milling in India is seasonal. The kharif paddy arrival runs roughly October to March in most states. Mills in single-crop belts run hard for 5 to 7 months and idle or run partial shifts otherwise. This creates the most common sizing error we see: sizing the plant to the peak season month.

Here is why that fails. A mill sized for 100 percent of peak-season consumption oversizes the plant by 30 to 50 percent against annual consumption. In the off-season, that surplus has nowhere to go. Net metering banks units, but most states settle banked units annually at Rs 2 to 3.5 per unit. You end up selling cheap what you sized to consume dear.

The correct approach:

1. Pull 24 months of electricity bills. Sum the annual units, not the peak month.
2. Add diesel generation units from metered DG records. If unmetered, estimate from diesel purchase at roughly 3.2 to 3.8 units per litre.
3. Size the plant to cover 80 to 100 percent of annual grid units. Use your site's specific yield, typically 1,400 to 1,550 units per kWp per year in most rice belts.

Worked example, hypothetical but typical. A mill in Telangana uses 95,000 grid units a year. At 1,450 units per kWp, a 65 kWp plant generates about 94,000 units a year. In peak months it covers 70 to 80 percent of consumption. In off-season months it banks surplus. Annually, the bill offsets close to fully. The [net metering complete guide](/blog/net-metering-india-complete-guide/) explains banking and settlement state by state.

The exception is mills with year-round parboiling or bran oil operations attached. If your load is genuinely flat across 12 months, size directly to the average month.

## DG Displacement: Where the Real Money Is

Grid power on an industrial tariff costs Rs 7.5 to 12 per unit depending on state and connection type. Industrial LT tariffs run around Rs 6.5 to 7.5 per unit on demand-based billing. HT 11 kV connections carry energy charges near Rs 7.5 per unit plus demand charges, according to the MP tariff order for FY 2025-26. Diesel generation costs far more.

Assume diesel at Rs 92 to 98 per litre and 3.2 to 3.6 units per litre from a maintained 62.5 to 125 kVA set. Add oil, filters, and maintenance. Your DG cost lands at Rs 16 to 22 per unit. That is the number solar displaces during outage hours, and it changes the payback math completely.

**Table 2: Cost per unit by source for a rice mill (2026)**

| Source | Cost per unit | Notes |
| --- | --- | --- |
| Grid, LT industrial | Rs 7 to 9 | Plus fixed demand charges |
| Grid, HT 11 kV | Rs 7.5 to 10 | Energy plus demand and duty |
| Diesel generator | Rs 16 to 22 | Fuel plus maintenance at 3.4 units per litre |
| Solar, amortised | Rs 2 to 3 | 25-year life, Rs 27 lakh per 60 kWp |

Say 25 percent of your annual consumption currently comes from diesel. Shifting those hours to solar saves Rs 13 to 19 per unit on that quarter. A mill burning 20,000 DG units a year saves Rs 3 to 4 lakh annually from diesel displacement alone.

The practical playbook is simple. Mill hardest between 10 am and 4 pm. Run cleaning and grading in the morning. Keep night shifts on grid or DG only when contracts demand it. The [solar vs diesel generator comparison](/blog/solar-vs-diesel-generator-india/) runs this math across more scenarios.

> **What most mill owners get wrong.** They compare solar cost per unit against the grid tariff and see a 4-year payback. They should compare it against the blended grid-plus-diesel cost. For most rural mills, the blended figure is Rs 10 to 13 per unit. The real payback is a year shorter than the grid-only math suggests.

## Sizing the System: Panels, Roof, and 3-Phase Inverters

Sizing a rice mill plant has three steps: energy sizing, roof check, and inverter selection. Get all three right and the plant runs for decades. Get the inverter wrong and you inherit a service problem in a dusty, hot, weak-grid environment.

**Step 1: Energy sizing.** Annual units divided by specific yield. For 1,00,000 units at 1,450 units per kWp, that is about 69 kWp. Round to a standard configuration, say 70 kWp, using 550 Wp panels. That is about 128 panels.

**Step 2: Roof and structure check.** You need roughly 55 to 65 square feet per kW, so 70 kWp takes about 4,000 square feet. Mill roofs are often asbestos sheets. Check the sheet age and purlin condition. Brittle asbestos may need partial replacement or a shed-top structure. Many mills use the grain storage shed roof, often the strongest structure on site.

**Step 3: Inverter selection.** Rice mills are 3-phase loads, full stop. The [3-phase solar inverter guide](/blog/3-phase-solar-inverter/) covers why single-phase units are irrelevant at this scale. For a 70 kWp plant, use one 60 to 75 kW string inverter, or two 30 to 36 kW units for redundancy. We prefer two units on mills. If one trips, the other keeps generating. Mill dust makes the "when it fails" question a matter of time, not if.

Inverter specifications that matter for a rice mill specifically:

- **IP66 ingress protection.** Rice husk dust is fine, abrasive, and conductive when damp. It coats everything. IP65 is the floor; IP66 is what survives a decade next to a huller.
- **Wide grid voltage tolerance.** Rural feeders in milling belts swing hard when every mill on the feeder starts up in October. Firmware tuned for 180 to 270 V per phase rides through sags that trip import-tuned units.
- **Multiple MPPTs.** Mill roofs often mix orientations across sheds. Four to six MPPTs let you split strings by shed and tilt without mismatch losses.
- **Remote monitoring that reaches the owner.** WhatsApp alerts beat a web portal for an owner on the mill floor, not at a desk.

The Qbits TLS and HT 3-phase series cover 25 kW to 100 kW plus. They carry IP66 ratings, 98 percent peak efficiency, and ALMM listing. The 12-year full replacement warranty comes with RMA service targeted under 72 hours. For mills above 100 kW, multiple HT-series units stack cleanly. The [solar inverter for water pump post](/blog/solar-inverter-for-water-pump/) covers motor-load engineering if your mill also runs borewells.

## Cost and Payback Math for a Typical Mill

C&I rooftop solar in India costs Rs 38,000 to 48,000 per kWp installed in 2026. Utility-scale benchmarks run Rs 4 to 5 crore per MW, according to industry cost analysis from Alpex Solar, 2026. Rooftop C&I prices a bit higher per kW. For a 65 kWp mill plant, budget Rs 27 to 31 lakh all-in.

Here is the full payback model. This is a labelled hypothetical for a mid-sized Telangana mill, using conservative inputs:

**Table 3: Payback model for a hypothetical 65 kWp rice mill plant (2026)**

| Item | Value |
| --- | --- |
| System size | 65 kWp |
| Installed cost at Rs 43,000 per kWp | Rs 27.95 lakh |
| Annual generation at 1,450 units per kWp | 94,250 units |
| Share displacing grid at Rs 8.50 per unit | 75 percent |
| Share displacing diesel at Rs 18 per unit | 25 percent |
| Annual savings, grid portion | Rs 6.01 lakh |
| Annual savings, diesel portion | Rs 4.24 lakh |
| Total annual savings | Rs 10.25 lakh |
| Simple payback | 2.7 years |
| Payback after 40 percent year-one depreciation | About 2.2 years |

Even with zero diesel displacement and a Rs 7.5 per unit grid tariff, payback stays under 4 years. The [solar IRR and payback guide for C&I](/blog/solar-irr-payback-ci-india/) models sensitivity across tariff bands. Our [Tirupur textile mill case study](/blog/case-study-tirupur-textile/) shows the same math on a real seasonal C&I load.

Financing changes the cash picture, not the fundamentals. MSME solar loans at 9 to 11 percent over 5 to 7 years usually make the plant cash-flow positive from year one. Annual savings exceed the EMI at these tariffs. The [solar loan for business and MSME guide](/blog/solar-loan-for-business-msme/) covers lender options and documentation.

## PM-KUSUM and Subsidies: What Actually Applies to Mills

This section matters because scheme names get thrown around loosely. PM-KUSUM does not subsidise rice mills. Its three components target farmers and agricultural feeders. Component A funds 500 kW to 2 MW decentralised plants on farmer or panchayat land. DISCOMs get procurement incentives of Rs 6.6 lakh per MW, according to Bright Fields Energy, 2025. Revised guidelines widened Component A to 4 MW, according to SolSetu, December 2025.

What does apply to a mill:

- **Net metering or net billing for C&I consumers.** Available in nearly every state, typically up to 1 MW or your sanctioned load. This is the primary mechanism.
- **Accelerated depreciation.** Mills taxed as businesses can claim 40 percent depreciation in year one. At a 25 to 30 percent tax rate, that is worth 10 to 12 percent of project cost.
- **MSME credit.** Priority-sector and green-energy loan products from SBI, SIDBI, and IREDA-linked lenders.
- **PM-KUSUM, indirectly.** If your mill sits on an agricultural feeder solarised under Component C, daytime supply improves. That cuts DG hours. Over 10 GW has been installed under PM-KUSUM nationally, according to Lamberton Power, January 2026. It is a supply-side benefit, not a subsidy to you.
- **Group captive or open access**, for mills above roughly 300 to 500 kW of load where roof space runs out. The [open access solar explainer](/blog/open-access-solar-india-explained/) covers charges and eligibility. The [KUSUM Yojana guide](/blog/kusum-yojana-agricultural-solar-subsidy/) details the scheme itself for farmers in your supply chain.

One nuance worth admitting. A few states have piloted solar for small rural agro-processing clusters. If your mill is in a designated cluster, ask your state nodal agency directly. Do not count it in the payback model.

## Tradeoffs and Honest Limitations

Solar for a rice mill is strong economics, not free money. Four tradeoffs deserve a straight answer before you sign an EPC quote.

**Seasonality cuts both ways.** Sizing to annual consumption means peak-season coverage of only 70 to 80 percent. You will still buy peak-season grid power, and sanctioned demand charges do not disappear. Some states also cap net-metered capacity at sanctioned load. That can constrain large mills with modest contract demand.

**Asbestos roofs are a real cost.** If your milling shed roof is 15-plus-year-old asbestos, budget for partial re-sheeting or a ground-mount structure. That adds Rs 2 to 4 lakh on a 65 kWp project. Nobody includes it in the first quote.

**Solar does not run your mill at night.** Without batteries, the DG set stays. Batteries for a 40 to 50 kW milling load add Rs 25 to 40 lakh and stretch payback past 8 years. That is why we recommend grid-tied plus DG for almost every mill today. Battery prices keep falling; revisit in 3 to 4 years.

**Dust is a maintenance commitment.** Panels near a huller need cleaning every 10 to 15 days in season, not monthly. Skip it and generation drops 15 to 25 percent. Assign it to a mill hand with a water line and soft brush. Track output in the monitoring app. Our [Rajkot cold storage case study](/blog/case-study-rajkot-cold-storage/) shows how a dusty C&I site held its yield with a fixed cleaning schedule.

The contrarian point: if your mill runs fewer than 1,000 hours a year, solar is marginal. Below that utilisation, annual units are too low for fixed project costs to pay back inside 6 years. Run your own numbers before believing any EPC's brochure.

Chhote grain-processing units ke liye alag hisab lagta hai. Dekhein [atta chakki ke liye solar](/blog/atta-chakki-ke-liye-solar/).

Livestock sheds run a very different load curve, sized in [solar for poultry farms](/blog/solar-for-poultry-farm-india/).

Elsewhere in the Heaven Group network, see [industrial solar installation](https://www.heavengreenenergy.com/blog/industrial-solar-installation) and [a 100 kW price benchmark](https://quickestimate.co/blog/hundred-kw-solar-price).

## Conclusion: The Bottom Line

Rice mills are close to an ideal C&I solar load. The demand is daytime-heavy and motor-driven, on expensive industrial tariffs, often topped up with diesel at twice the grid price. Size from annual consumption. Use rugged IP66 3-phase inverters that tolerate dust and weak rural feeders. Keep the DG set for nights. Treat PM-KUSUM as an indirect benefit, not a subsidy. Done this way, a 60 to 75 kWp plant pays back in 3 to 4.5 years. It then generates at Rs 2 to 3 per unit for two decades.

Three actions to take this month:

- Pull 24 months of electricity bills and diesel purchase records. Compute annual grid units and DG units. That two-number total drives every sizing decision.
- Get your roof structurally assessed, especially if it is asbestos. Confirm your sanctioned load against your state's net-metering cap before accepting any EPC proposal.
- [Talk to our C&I team](/contact-us/) for a mill-specific load assessment and a quote on the Qbits TLS and HT series.
