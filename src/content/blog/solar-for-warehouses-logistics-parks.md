---
title: "Solar for Warehouses and Logistics Parks: Size, Lease, Payback"
seoTitle: "Solar for Warehouse Roofs: Size, Lease and Payback"
excerpt: "Rooftop solar for a warehouse or logistics park: why contract demand, not roof area, sets the size, who keeps the savings by ownership model, plus a 50,000 sq ft case."
description: "Solar for a warehouse or logistics park: size to contract demand, not roof area. Net-metering caps in four states, roof lease routes and a worked payback."
category: "Guide"
date: 2026-10-30
readTime: "22 min"
image: "/og/blog-solar-for-warehouses-logistics-parks.webp"
author: "Keyur Rakholiya"
keywords:
  - solar for warehouse
  - rooftop solar warehouse india
  - solar for logistics park
  - warehouse roof solar lease
  - solar for fulfilment centre
  - warehouse solar payback
  - group net metering warehouse
  - virtual net metering commercial tenants
relatedSlugs:
  - net-metering-capacity-limits-commercial-by-state
  - zero-cost-solar-resco-opex-india
  - solar-irr-payback-ci-india
  - solar-inverter-for-ev-charging
  - solar-inverter-for-cold-storage-india
  - solar-for-diamond-polishing-units-surat
---

A warehouse is the opposite of a factory for solar. The roof is huge and the load under it is small, so the roof is almost never what limits a plant. What limits it is your contract demand, the state's net-metering rule, and, in a leased building, who owns the roof and who pays the bill. In the worked case below, a 50,000 sq ft roof could carry about 400 kWp. A day-shift warehouse with a 100 kVA contract demand can use about 100 kWp of it. The extra 300 kWp lifts the set-off units by less than half and costs four times as much.

This guide is for owners, lessees and managers of general warehouses, fulfilment centres and logistics parks. Use it before you ask an EPC (engineering, procurement and construction contractor) for a quote. It sets out a sizing method, then reads the rule text of four states (Gujarat, Maharashtra, Karnataka and Telangana) to show how one roof gets four different answers. We name no customer, quote no Qbits price and report no installed result, because we have none.

> **What this is built on, checked 2026-10-30**
>
> - GERC (Net Metering Rooftop Solar PV Grid Interactive Systems) Regulations, 2016, as amended by the Third Amendment (Notification 2 of 2022). Fourth and Fifth Amendments also read.
> - MERC (Grid Interactive Rooftop Renewable Energy Generating Systems) Regulations, 2019, full text. MERC's statements of reasons for the First Amendment (16 November 2023) and Second Amendment (29 August 2024), which record the group and virtual net-metering decisions. The notified amendment text was not opened.
> - KERC Distributed Solar PV Regulations, 2026 (gazetted 24 August 2026), full text.
> - TGERC Rooftop Solar PV Grid Interactive Systems Regulation, 2025 (Telangana Gazette, 15 November 2025), full text.
> - Electricity (Rights of Consumers) Amendment Rules, 2021, G.S.R. 448(E), gazette text.
> - GERC tariff schedule for DGVCL, MGVCL, PGVCL and UGVCL effective 1 April 2026.
> - Yield from the European Commission's PVGIS tool (ERA5 data), at four logistics-belt locations.
> - **Not verified:** other states' rules, FPPAS and electricity duty, current GUVNL bid averages, tax depreciation, and anything after the dates above. Confirm with your DISCOM before you sign.

## How does solar for a warehouse differ from a factory?

A general warehouse differs from a factory because its roof is large and its load is small and patchy, where a factory's load shapes the plant.

- **Roof.** Large, flat or low-pitch, often a pre-engineered steel building (PEB) with sheet cladding, sometimes RCC over offices and dock areas. Few obstructions compared with a production roof.
- **Load.** Lighting, dock levellers, conveyors and sorters, battery charging for forklifts, offices, some EV chargers, and sometimes HVAC. It is lightly loaded relative to its roof.
- **Hours.** A single-shift warehouse is quiet at night and on Sundays. A fulfilment centre or parcel hub may run two shifts or all night, which solar cannot serve.
- **Tenancy.** The person who owns the roof is often not the person who pays the electricity bill. That decides who gets the saving.

If your building has cold rooms, the picture changes because refrigeration is a heavy daytime load. That is a different problem, covered in our [cold storage inverter guide](/blog/solar-inverter-for-cold-storage-india/). This post is for ambient warehouses where the roof outsizes the load.

## How much solar fits a 50,000 sq ft warehouse? A worked case

Everything in this case is **illustrative**: no quote, no Qbits figure, no result from a real site. Every input is shown so you can swap in your own.

### Step 1: roof area to kWp

50,000 sq ft is about 4,645 square metres. Assume a 550 Wp module of 2.28 m by 1.13 m, which is about 2.58 square metres, or 4.7 square metres per kWp of module area. Add row spacing, walkways, edge clearances, roof lights and ventilators, and a usable share of the roof.

| Assumption | Value |
| --- | --- |
| Roof area | 4,645 square metres |
| Usable share after clearances, lights and access | 60%, so about 2,790 square metres |
| Roof area per kWp, flush or low tilt | 5.5 to 8.0 square metres (assumption, 4.7 is module area alone) |
| Plant that fits | About 350 to 510 kWp. We use 400 kWp as the roof-fill case |

These are our assumptions, not a standard. Ask the EPC for a roof drawing showing panel count and kWp on each section. Panel count is kWp divided by module watts, so you can check it yourself.

### Step 2: annual yield

PVGIS gives annual output for a 1 kWp system at a 10 degree tilt, facing south, with 14% system loss, from ERA5 data for 2005 to 2023. We ran four places in the main logistics belts.

| Location (latitude, longitude) | State | PVGIS, kWh per kWp a year |
| --- | --- | --- |
| Sanand (22.99, 72.38) | Gujarat | 1,520 |
| Bhiwandi (19.30, 73.06) | Maharashtra | 1,423 |
| Hoskote, Bengaluru (13.07, 77.80) | Karnataka | 1,517 |
| North Hyderabad (17.54, 78.49) | Telangana | 1,482 |

The spread is about 7%, so yield does not decide the project in these four. The tariff and the cap do. At Sanand, a 5 degree tilt gives 1,481, close to the 10 degree figure. We take 10% off for dust, heat and downtime, which is our assumption and not a measurement, and use the Sanand hourly series for 2015 to 2019. That gives about **1,358 kWh per kWp a year**. Warehouse roofs near highways and loading yards can run dustier than the tool assumes, so log your own output through the first dry season.

### Step 3: the load

We built two stylised loads with an hourly profile. Replace them with your own half-hourly meter data, using the lowest-load week as well as the average.

| | Warehouse A: single-shift ambient | Warehouse B: two-shift fulfilment |
| --- | --- | --- |
| Hours | Monday to Saturday 08:00 to 18:00 at 60 kW, 18:00 to 22:00 at 20 kW | Every day 06:00 to 24:00 at 90 kW |
| Other hours | 8 kW (security lights, CCTV, chargers) | 15 kW |
| Annual consumption | About 2.48 lakh kWh | About 6.24 lakh kWh |
| Assumed contract demand | 100 kVA | 120 kVA |

### Step 4: how much of the plant the load can use

We simulated each plant size against each load, hour by hour. "Instant use" is solar used in the same hour it is made. "Set-off" is what a monthly settlement can absorb inside the 07:00 to 18:00 window, which is how Gujarat settles a low-tension (LT) demand-based consumer (GERC clause 9.2.7). The two differ because monthly set-off ignores the hour. The full captive set-off and banking clauses are read line by line in our [Surat diamond-unit guide](/blog/solar-for-diamond-polishing-units-surat/); this post uses only the rows a warehouse needs.

| Plant | Solar made a year | A: instant use / set-off | B: instant use / set-off |
| --- | --- | --- | --- |
| 100 kWp | 1.36 lakh kWh | 89% / 99% | 100% / 99% |
| 120 kWp | 1.63 lakh kWh | 84% / 98% | 100% / 99% |
| 200 kWp | 2.72 lakh kWh | 61% / 70% | 90% / 99% |
| 400 kWp (roof-fill) | 5.43 lakh kWh | 34% / 36% | 55% / 65% |

Read the 400 kWp row for Warehouse A. Four times the plant produces four times the energy, yet set-off units rise only from 1.34 lakh to 1.95 lakh kWh a year. The rest is exported. Whether an exported unit is worth anything depends on the state, as the next section shows. A plant of 100 to 120 kWp fits Warehouse A, and 120 to 200 kWp fits Warehouse B, which has the longer daytime load.

### Step 5: what a solar unit is worth

We use the one tariff schedule we read in full, the GERC schedule effective 1 April 2026. It has no warehouse category that we could find, and its Rate LTMD (low-tension maximum demand) applies to "premises not covered in any other tariff categories" with load above 40 kW. Check which rate your bill shows. Other states have different schedules, which we did not read.

| LTMD item | Figure |
| --- | --- |
| Demand charge, up to contract demand | Rs 90 per kW a month for the first 40 kW, Rs 130 for the next 20, Rs 195 above 60 kW |
| Billing demand | Highest of 85% of contract demand, actual maximum demand, or 6 kW |
| Energy charge | 460 paise per unit |
| Peak addition, 07:00 to 11:00 and 18:00 to 22:00 | 45 paise per unit |
| Discount, 11:00 to 17:00 | 60 paise per unit, with a time-of-day (ToD) or smart meter |
| Reactive energy | 10 paise per kVARh |

PVGIS puts about 22% of annual output between 07:00 and 11:00, 73% between 11:00 and 17:00, and 5% in the other hours. These shares depend on how the timestamps are read, so treat them as good to a few points. That weights a solar unit at about Rs 4.26, not the Rs 4.60 headline. Gujarat then charges Rs 1.50 per unit of solar consumed for demand-based consumers (clause 9.2.11), so a solar unit nets about **Rs 2.76**. The lower Rs 1.10 charge in the same clause is for a class of units a warehouse is not.

**Solar does not cut the fixed charge.** Billing demand is at least 85% of contract demand, so the demand charge stays whatever the roof does. A cloud crossing the array can also set the maximum demand, so we count no demand saving.

### Step 6: payback

Payback is installed cost divided by the yearly saving. The saving is set-off units times net saving per unit, less a running cost of 1% of installed cost a year. The costs per kWp below are round numbers chosen to span a range, not a Qbits price or a market quote. Our [100 kW plant cost post](/blog/hundred-kw-solar-plant-cost-factories-india/) lists the dated cost benchmarks behind figures like these and explains why we found no sourced 2026 market range.

For a plant that is fully used (Warehouse A at 100 kWp or B at 120 kWp, both near 99% set-off), the payback per kWp is the same:

| Installed cost per kWp | Net Rs 2.76 per unit (Gujarat LTMD after banking) | Net Rs 4.26 (same, with no banking charge) | Net Rs 6.00 (stand-in only) |
| --- | --- | --- | --- |
| Rs 35,000 | 10.4 years | 6.5 years | 4.5 years |
| Rs 45,000 | 13.8 years | 8.5 years | 5.9 years |
| Rs 55,000 | 17.4 years | 10.6 years | 7.3 years |

The Rs 4.26 column matters because some states do not charge banking on net-metered rooftop plants. Telangana's regulation exempts a rooftop plant under net metering from banking, wheeling, cross-subsidy and additional surcharge (clause 4.14). The Rs 6.00 column is not a tariff we read for any state. It stands for a state with a higher energy rate, or a bill that adds per-unit lines such as FPPAS and duty on top of the energy charge. Read the payback off the row that matches your bill, line by line. Our [C&I payback and IRR guide](/blog/solar-irr-payback-ci-india/) shows the method.

Now the roof-fill case. A 400 kWp plant on Warehouse A absorbs only 36% of its output. At Rs 45,000 per kWp the payback is 50 years at a net Rs 2.76, 28 years at Rs 4.26 and 18 years at Rs 6.00, counting nothing for the exported units.

If we assume the surplus earns Rs 2.00 a unit, an assumption we could not tie to a source, the Rs 2.76 case falls to about 17 years. For Warehouse B the same 400 kWp absorbs 65%, and the payback at Rs 45,000 is 23, 14 and 9 years across the three columns. The roof did not change. The load under it did.

## Which rule caps the size of a warehouse solar plant?

A warehouse plant is capped by a number on your electricity connection, and the roof only matters once that cap is known. Our [state-wise net-metering limits guide](/blog/net-metering-capacity-limits-commercial-by-state/) has the full table for 13 states and the AC or DC basis. For this example, take Warehouse A with 100 kVA contract demand.

| State | What the rule says | Plant cap for a 100 kVA contract |
| --- | --- | --- |
| Gujarat | Net metering from 1 to 1,000 kW. No capacity restriction up to sanctioned load or contracted demand for captive consumers and third-party-sale projects (Third Amendment, 2022) | Up to 100 |
| Maharashtra | 5 MW or contract demand or sanctioned load, whichever is lower (MERC statement of reasons, 2023). Cumulative net-metered capacity on a transformer or feeder not above 70% of its rating, unless the licensee allows more after a study (regulation 5.2, 2019) | Up to 100 kW AC, subject to the 70% transformer limit |
| Karnataka | 1 kW up to the lower of sanctioned load or contract demand, or 1,000 kW (KERC regulations, 2026) | Up to 100 |
| Telangana | Net metering up to 500 kWp. For industrial, commercial and other consumers, at most 80% of sanctioned load or contracted demand (clause 4.9) | 80 kWp |

So the 100 kVA warehouse can build about 80 to 100 kW in these four states whatever its roof holds. To go above that you can apply to raise the contract demand, as MERC says a consumer may. That raises the demand charge too, because billing demand is at least 85% of the new contract demand. For Warehouse A the extra capacity absorbs little, so raising demand to fit a bigger plant makes the economics worse. For Warehouse B, where the load is larger, a bigger contract demand can be justified by the load itself.

**Export is worth different amounts in each state.** What the plant does not use in the settlement window is paid for differently.

| State | What happens to surplus | Source |
| --- | --- | --- |
| Gujarat | LT demand-based consumers set off monthly in the 07:00 to 18:00 window. Surplus is bought at 75% of a GUVNL bid average. We did not find the current figure | GERC clauses 9.2.7, 9.2.9 |
| Maharashtra | Surplus is carried forward month to month. The unadjusted balance at year end is bought at the Generic Tariff approved for the year. The Commission may add Grid Support Charges by category | MERC 2019 regulations 11.4 and 11.5 |
| Karnataka | Excess in a billing cycle is bought at the PPA tariff and settled monthly. The consumer keeps paying fixed and demand charges whatever the excess | KERC 2026, clauses 5.1.4 and 5.1.7 |
| Telangana | Excess in a billing period is settled at the lowest solar PPA rate the DISCOMs signed in the preceding financial year | TGERC 2025, clause 8.1.3 |

In all four, the unit you use is worth the retail rate and the unit you export is worth much less. That is the case for sizing near your daytime load.

## Who owns the roof, and who gets the savings?

Roof ownership decides who keeps the saving, a question a factory rarely faces and the one that most often holds up warehouse projects.

**What the central rules say.** The Electricity (Rights of Consumers) Amendment Rules, 2021 (G.S.R. 448(E), 28 June 2021), in the gazette text we read, define net-metering, gross-metering and net-billing or net feed-in. They leave the arrangements to "regulations made by the State Commission". We found no definition of group or virtual net-metering in that text. We could not open the gazette text of the 2024 amendment. The 2024 changes in the Ministry of Power's annual report concern feasibility-study and commissioning timelines. So the exact answer to "who qualifies for group or virtual net metering" is a state question, and here it is for four states.

| Arrangement | Definition and who qualifies |
| --- | --- |
| **Group net metering** (Karnataka) | Surplus is adjusted across more than one service connection "of the same consumer with same name and same consumer category". All consumer categories may use it. Minimum plant 5 kW, maximum the combined sanctioned load or contract demand. At least 20% of generation must be used at the connection where the plant sits, or those units lapse (clauses 4.4, 5.4.8) |
| **Group net metering** (Maharashtra) | More than one connection "of the same consumer either at the same or different premise" in the same licensee's area. Participating connections must belong to the same entity (MERC statement of reasons, 2023) |
| **Group net metering** (Telangana) | Defined, but applies only to LT-I (Domestic) and HT-VI (Townships and Residential Colonies) (definition n, clause 4.3). Not open to a warehouse |
| **Virtual net metering** (Karnataka) | Only domestic consumers including apartments, group housing societies, charitable institutions, government and municipal bodies and schools. Participants must be in the same category (clause 4.5). A commercial warehouse tenant is not on that list |
| **Virtual net metering** (Maharashtra) | Introduced in the 2024 amendment for residential consumers in a multi-storey building or housing society only. MERC said other categories should use net metering, group net metering or green open access (statement of reasons, 2024) |
| **Virtual net metering** (Telangana) | Open to consumers of all categories except temporary supply, for plants under 100 kWp. Participating consumers must be of the same category as the parent consumer, in the same licensee's area (clauses 4.5, definition aj) |

For a multi-tenant logistics park, that table says that virtual net metering for commercial tenants exists in Telangana only, and only under 100 kWp. The Gujarat amendments we read contain no virtual net-metering provision, and we did not read the other states.

**Roof lease and RESCO.** These are the routes that fit a landlord or a tenant with no capital to spare, and the four states treat them differently.

- **Gujarat.** A consumer who "possess on rental basis" the premises, including the roof, is eligible (clause 6.1(ii), amended 2022). The plant must consume all its output in the same premises, or Regulation 9 governs. A developer who installs on the roof and sells power to the consumer is making a third-party sale. Clauses 9.3.1 to 9.3.8 govern it, with a lease agreement and a power sale agreement. Clause 12.3.1 says cross-subsidy and additional surcharge apply to projects set up for third-party sale. Whether that clause bites a rooftop plant under clause 9.3 is something to put to the DISCOM in writing, as clause 9.3 lists no such charge.
- **Maharashtra.** An eligible consumer's system may be owned or operated by the consumer, the licensee or "a third party leasing such System to the Consumer" (2019 regulations, 2.1(j)).
- **Karnataka.** The consumer may own the plant or contract a RESCO. The RESCO signs a direct agreement with the consumer. There is no tripartite agreement with the licensee, and the licensee may not disconnect the consumer over a dispute with the RESCO (clause 3.2).
- **Telangana.** A rooftop system "whether self-owned or leased by a Third-Party Owner" under net metering is exempt from banking, wheeling, cross-subsidy and additional surcharge (clause 4.14). Third-party sale outside the parent and participating consumers is not allowed (clause 4.13).

The contract structure of a RESCO (renewable energy service company) or OPEX deal is set out in our [RESCO and OPEX guide](/blog/zero-cost-solar-resco-opex-india/). For a warehouse the pointed question is the lease. A 25-year power purchase agreement (PPA) on a roof with a 9-year building lease is a trap for both sides.

### Decision table: which route fits

| Situation | Route that usually fits | What to check first |
| --- | --- | --- |
| **Owner-occupied**, one connection, you pay the bill | Own capex on your own meter, sized to daytime load | Contract demand, state cap, roof condition |
| **Owner-occupied, no capital** | RESCO or OPEX on a roof lease | Gujarat third-party clauses, Karnataka direct agreement, Telangana exemptions |
| **Leased to one tenant**, tenant pays the bill | Tenant installs if it holds the premises on rental basis (Gujarat clause 6.1(ii)), or landlord funds and sells to the tenant | Lease term against payback, who owns the plant at lease end, roof warranty |
| **Multi-tenant park, each tenant has its own meter** | Each tenant on its own roof section under net metering. Virtual net metering only where the state allows it for commercial consumers, which among these four is Telangana under 100 kWp | Roof allocation, distribution transformer (DT) headroom, who pays for roof repairs |
| **Operator with several warehouses in one state** | Group net metering where the state allows it for your category (Karnataka, Maharashtra), otherwise net metering at the best roof | Same name and same category on all connections, the 20% own-use rule in Karnataka |
| **Landlord with one HT connection, tenants sub-metered** | A plant on the landlord's meter, with a written method for passing the saving to tenants | We did not read any state's rules on resale of electricity by a landlord, so ask the DISCOM |

## Which roof, fire and cable checks does a warehouse plant need?

The checks below come from design practice, not from a state rule we read, so treat them as questions for your structural engineer, fire adviser and insurer.

- **Roof type and load.** A PEB roof, an RCC slab and an older cement-sheet roof each need a different fixing. Ask for the dead load of the structure in kg per square metre, the clamp type for your sheet profile and the wind uplift. Have a qualified structural engineer sign the check against purlin spacing, sheet gauge and corrosion. Ask whether the roofing supplier or contractor must approve a penetration or clamp to keep the roof warranty.
- **Age and waterproofing.** If the roof has under ten years of life left, you will re-sheet it under live panels. Do the roof first, or choose a structure that allows lift-and-replace sections.
- **Lightning and earthing.** Ask for the earthing layout and how the array ties to the building's lightning protection. A tall steel shed with a wide metal roof is a lightning target.
- **Fire.** Run DC cable in sheathed or conduit routes with no loose loops, keep it clear of roof lights and smoke vents, and mark isolation points. A warehouse full of racking and packaging is a high fire-load building, so give your fire adviser and insurer the single line diagram before approval, not after. Ask whether either needs a notice, and ask what your fire NOC says about rooftop equipment. Telangana's regulation requires insuring a plant above 56 kWp and a certificate from the Chief Electrical Inspector to Government, CEIG (clause 4.19).
- **Cable routing and inverter location.** String inverters can hang on the roof edge, in shade with airflow, or sit in a plant room. Long DC runs to a ground-level room cost copper and voltage drop, and long AC runs cost the same. Put the inverters near the roof access with a safe route for service staff. Keep inverters away from dock exhaust and diesel fumes.

## How do the grid connection and time-of-day tariffs affect a warehouse plant?

**LT or HT.** Gujarat's amended connectivity table puts an eligible consumer with connected load above 100 kW or kVA on an 11 kV three-phase connection (Regulation 8(2), row iv). Its tariff schedule offers HT rates from a contract demand of 100 kVA.

In Maharashtra, an HT consumer may connect the plant on the LT bus bar of its transformer, with the net meter on the HT side (regulation 6.4). In Telangana, a plant above 56 kWp can connect to an 11 or 33 kV feeder (clause 4.20). Which applies to you is a question for the DISCOM, and the HT (high-tension) rate has a different demand charge.

**Time of day.** Karnataka, Maharashtra and Telangana (for HT) all set consumption in a time block against generation in the same block first. Any excess is then treated as off-peak. For a ToD consumer, solar in the discounted 11:00 to 17:00 window offsets cheap hours, which is why the weighted value was Rs 4.26 and not Rs 4.60.

**Approval clock.** For plants above 10 kW, the 2024 amendment cut the technical feasibility study period from twenty days to fifteen, as the Ministry of Power's annual report summarises it. Approval is deemed if the study is not done in time. The Chief Electrical Inspector's approval is separate, and the inverter checks it involves are in our [CEIG inspection guide](/blog/ceig-inspection-solar-plant-inverter-checks/).

## Do night shifts, batteries or EV chargers change the plan?

**Night work.** Solar makes nothing at night, so a two-shift or all-night operation gets a smaller share of its energy from solar. Warehouse B above still uses all of a 120 kWp plant, but the plant covers only about a quarter of its annual energy.

**Batteries.** A battery is not needed for a warehouse to benefit. It adds cost and a second approval question, and the four states we read settle exports by credit or purchase, not by storage. A battery makes sense mainly for outage backup on a critical load. If a DG set is part of your power plan, ask for the DG synchronisation design before you sign, because on-grid inverters and a DG need a deliberate arrangement.

**EV chargers.** Fleet charging adds a daytime load that solar fits well. Our [EV charging inverter guide](/blog/solar-inverter-for-ev-charging/) covers how charger load and solar sit on one supply. The Gujarat schedule has a separate LT EV charging category with a Rs 25 per installation fixed charge and 410 paise per unit. It applies to consumers who use electricity exclusively for charging, and the schedule says other consumers can charge under their regular category. Check which one your charger connection would be.

## Choosing an inverter for a warehouse roof

A warehouse roof is often several planes (a main shed, an annexe, a dock canopy), so the question is how many MPPT inputs you need and where the inverter hangs.

- **A 100 kW class plant** on Warehouse A fits one three-phase string inverter. The Qbits [QB 70/75/80/90/100/110KTLC-Pro](/our-products/QB-70-110KTLC-Pro/) series lists 6 or 8 MPPT (maximum power point tracking) inputs by model, an MPPT range of 200 to 1000 V and an IP66 enclosure. Its listed efficiency is 98.6 to 98.7% by model. Read the datasheet for the exact model's AC output and temperature behaviour. Whether a state cap counts AC or DC is in our net-metering guide.
- **A park-scale plant** of 1 MW or more across several buildings is a different design. For that, the Qbits [QB 225/320K-EHV](/our-products/QB-225-320K-EHV/) is a three-phase unit rated 225 to 320 kW. It has 12 MPPT inputs as standard, a 500 to 1500 V MPPT range and IP66 protection, and its listed maximum efficiency is 99.02%. The datasheet gives an operating range up to 60 degrees Celsius and prints no derating curve, so ask for one at your design ambient.

Qbits quotes are per model and quantity. To have a plant sized against your meter data and roof drawing, start on the [Qbits C&I solutions page](/c-i-solution/).

## What to bring to an EPC

1. Your last twelve bills, with the demand, energy, ToD, fuel and power purchase price adjustment (FPPAS), power factor and duty lines readable.
2. Half-hourly load data for a normal week and the lowest-load week of the year.
3. Contract demand, sanctioned load, supply voltage and tariff category.
4. A roof drawing with sheet type, purlin spacing, roof age, roof lights, vents and access marked.
5. Your lease: term, who owns the roof, who pays for repairs, and any clause on rooftop equipment.
6. A written proposal that states the cap it designed to and the banking or grid charge. It should also give the value of a solar unit by time band, the dust allowance and its assumption for surplus.

## What this post could not check

- Other states' rules and tariffs. The worked tariff is Gujarat's LTMD. Maharashtra, Karnataka and Telangana tariffs were not read, and the Rs 6.00 column is a stand-in.
- Gujarat's current surplus rate (75% of a GUVNL bid average), FPPAS, electricity duty and GST.
- The notified text of MERC's 2023 and 2024 amendments, and any later amendment to the Karnataka and Telangana texts.
- The gazette text of the 2024 Rights of Consumers amendment.
- Any state's rule on a landlord reselling electricity to sub-metered tenants.
- Roof, fire, lightning and insurance standards. No IS or NBC clause was opened.
- Soiling on warehouse roofs. The 10% allowance is an assumption.
- The load profiles. They are stylised, and your meter data should replace them.

## How should a warehouse owner decide?

For most warehouses, size the plant to the daytime load and the contract demand, not to the roof. Then work out who owns the roof and who gets the saving, because that is what decides between your own capex, a roof lease and a RESCO. Read your state's rule on what is not used in the settlement window, since that is where the economics of a larger plant fall apart.

Qbits sells grid-tied string inverters, quoted per model and quantity. Take a warehouse sizing question to the [C&I solutions page](/c-i-solution/), and a question about your own contract or bill to [our contact page](/contact-us/).
