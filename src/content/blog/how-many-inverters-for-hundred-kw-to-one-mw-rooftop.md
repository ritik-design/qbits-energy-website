---
title: "How Many Inverters for a 100 kW, 500 kW or 1 MW Rooftop?"
seoTitle: "Inverter for a 1 MW Solar Plant: How Many Units?"
excerpt: "Unit size sets the count, not the other way round. Three illustrative plants show the inverters, MPPT totals, AC current and what one trip costs."
description: "Inverter for a 1 MW solar plant, worked for 100 kW, 500 kW and 1 MW rooftops: unit count, MPPT totals, AC current, DISCOM voltage and trip losses."
category: "EPC"
date: 2026-10-30
readTime: "18 min"
image: "/og/blog-how-many-inverters-for-hundred-kw-to-one-mw-rooftop.webp"
author: "Keyur Rakholiya"
keywords:
  - inverter for 1 mw solar plant
  - how many inverters for 1 mw solar plant
  - 500 kw solar plant inverter
  - 100 kw rooftop solar inverter
  - number of inverters rooftop solar
  - string inverter count c&i rooftop
  - dc ac ratio inverter count
relatedSlugs:
  - dc-oversizing-in-solar
  - solar-inverter-sizing
  - solar-string-sizing-ocp-india
  - dual-mppt-vs-single-mppt
  - solar-inverter-for-factory
  - discom-approval-solar-inverter-net-metering
  - solar-inverter-rfq-template-epc
---

There is no fixed number of inverters for a 1 MW solar plant. The count is the AC target divided by the unit size you pick. You choose the unit size by testing five things:

- what a single trip costs;
- how many MPPTs (maximum power point tracking inputs) the roof layout needs;
- how the rated units tile into the AC target;
- the AC side: current, panel and what the DISCOM (distribution company) will connect;
- cable and service access.

This post works those tests on three illustrative plants and shows where the answer changes.

Short version, for the three plants below (each at an assumed DC:AC ratio of 1.2, so 120, 600 and 1,200 kWp):

| Plant (AC target) | Option | Inverters | MPPTs in total | Share of plant offline if one unit trips |
| --- | --- | --- | --- | --- |
| 100 kW | One 100 kW unit | 1 | 6 or 8 | 100% |
| 100 kW | Two 50 kW units | 2 | 8 | 50% |
| 500 kW | Five 100 kW units | 5 | 30 to 40 | 20% |
| 500 kW | Four 125 kW units | 4 | 32 to 40 | 25% |
| 500 kW | Two 225 kW and one 50 kW | 3 | 28 | 45% (a 225 kW unit) |
| 1 MW | Ten 100 kW units | 10 | 60 to 80 | 10% |
| 1 MW | Eight 125 kW units | 8 | 64 to 80 | 12.5% |
| 1 MW | Three 320 kW units (960 kW AC) | 3 | 36 to 48 | 33.3% |

Everything in that table is arithmetic on stated assumptions. None of it describes a real plant, and none of it says one row is right for your roof. The sections below show the working so you can change the inputs.

> **What this is built on**
>
> - **Qbits figures** are taken only from the Qbits product catalogue data on this site: unit ratings, MPPT counts and DC voltage windows. Where that data gives a range ("6 or 8 MPPTs by model"), we show the range, because it does not say which rating carries which count. Read the datasheet for the exact model.
> - **Connection rules** come from three documents we opened:
>   - the CEA (Central Electricity Authority) connectivity regulations for distributed generation (2013, amended 2019);
>   - the Gujarat Electricity Regulatory Commission's rooftop net-metering regulations (2016, as consolidated by CBIP);
>   - the Maharashtra Electricity Regulatory Commission's 2023 statement of reasons for its rooftop regulations.
> - **Limits:** the Gujarat text we read is a consolidated copy, and we did not check for later GERC amendments. The central rule on net metering is described through the Maharashtra statement, not the gazette. Details are in the last section.

## How many inverters does a 1 MW solar plant need? The five checks

Work them in this order. Each one either fixes a minimum or rules out an option.

| Check | What it decides | Pushes the count |
| --- | --- | --- |
| Unit tiling | The AC rating you actually get, and so the real DC:AC ratio | Either way: rated units rarely add up to the exact AC target |
| Roof sections and MPPTs | The minimum number of independent MPPT inputs | Up, when the roof is split into many orientations or shaded zones |
| Single-trip loss | The share of generation you accept losing during a fault or maintenance | Up, as you want smaller blocks |
| AC side | Current at the collection voltage, the LT panel or transformer, and the DISCOM connection | Down, as fewer large units mean fewer AC runs and breakers |
| Cable length and service | Where inverters sit and how many places a technician must visit | Depends on the layout |

The AC side and the single-trip loss pull in opposite directions. That tension is the whole decision, and the rest of the post puts numbers on it.

## Assumptions for the three plants

These are labelled illustrative. Change them for your project.

- **DC:AC ratio of 1.2.** A planning value so the maths is easy to follow, not a recommendation. The ratio you can use depends on each model's maximum DC input power and on clipping losses at your site. The [DC/AC ratio guide](/blog/dc-oversizing-in-solar/) covers how to model that. We have not used any Qbits maximum-DC-power figure, because the product catalogue data does not list one, so check it per model before fixing a ratio.
- **Module and string inputs for the 1 MW example.** A 600 Wp module with 50 V open-circuit voltage at standard test conditions. A voltage coefficient of minus 0.27% per degree Celsius. A coldest morning of 5 degrees Celsius. Cold open-circuit voltage is then 50 x (1 + 0.0027 x 20) = 52.7 V.
- **Energy yield of 4.5 kWh per kWp per day**, used only to turn a trip into kilowatt-hours. Use your own site figure.
- **AC bus at 415 V three-phase and unity power factor**, used only to compare currents. The AC output voltage of each Qbits model is not stated here. Read it from the datasheet, because it decides whether a unit can feed an LT bus directly.
- **Equal DC share per inverter**, so a unit's share of the plant offline equals its share of AC capacity.

## Plant 1: 100 kW AC (120 kWp)

One 100 kW unit is the simplest design. It fits the Qbits [70 to 110 kW Pro family](/our-products/QB-70-110KTLC-Pro/). That family lists 70, 75, 80, 90, 100 and 110 kW models with "6 or 8 MPPTs by model" and a 200 to 1000 V MPPT window (1100 V maximum DC). On that one unit, 120 kWp spreads over 6 or 8 MPPTs, which is 15 to 20 kWp per MPPT.

The alternative is two 50 kW units. The 40, 45 and 50 kW Plus family lists 4 MPPTs per unit, so two units give 8 MPPTs and 60 kWp per unit, again 15 kWp per MPPT.

| | One 100 kW | Two 50 kW |
| --- | --- | --- |
| MPPTs in total | 6 or 8 | 8 |
| kWp per MPPT | 15 to 20 | 15 |
| Offline if one unit trips | 100% | 50% |
| Offline during planned maintenance of one unit | 100% | 50% |
| AC current at 415 V, unity power factor | 139 A | 70 A per unit, 139 A combined |
| AC protection points | One | Two, joining at the ACDB |

At 100 kW the fault trade is stark: one unit means a total outage whenever it is down. Two units halve that and give a technician a way to work on one while the other runs. They also cost two sets of AC cable and breakers. A 100 kW plant on a single roof of uniform orientation does not need extra MPPTs. The second unit is a choice about outage cost, not about the roof.

## Plant 2: 500 kW AC (600 kWp)

At 500 kW the unit sizes start to matter, because 500 is not a multiple of every rating. Three options tile it exactly:

- **Five 100 kW units.** 30 to 40 MPPTs, so 15 to 20 kWp per MPPT. A trip takes 20% of the plant offline.
- **Four 125 kW units**, from the 80 to 125 kW family, which lists "8 to 10 MPPTs by model". That is 32 to 40 MPPTs and 15 to 18.75 kWp per MPPT. A trip takes 25% offline.
- **Two 225 kW units plus one 50 kW unit.** The 225 and 320 kW EHV unit lists 12 MPPTs as standard, so two 225 kW units are 24 MPPTs. Add 4 on a 50 kW Plus unit and the total is 28, or about 21 kWp per MPPT. A trip on a 225 kW unit takes 45% offline.

The third option has fewer boxes but two problems. First, the largest block is almost half the plant. Second, it mixes two DC designs. The 225 kW model works across 500 to 1500 V, and the 50 kW Plus family has a maximum DC of 1100 V. The two groups cannot share string lengths, combiners or spares. Mixed fleets are easy to draw and harder to maintain.

Between the first two, 125 kW units cut the box count to four but raise the blast radius from 20% to 25%. If the AC panel has four incomer slots rather than five and the cable runs are long, that is worth weighing.

| | 5 x 100 kW | 4 x 125 kW | 2 x 225 kW + 1 x 50 kW |
| --- | --- | --- | --- |
| MPPTs in total | 30 to 40 | 32 to 40 | 28 |
| Average kWp per MPPT | 15 to 20 | 15 to 18.75 | 21.4 |
| Offline if one unit trips | 20% | 25% | 45% (225 kW) or 10% (50 kW) |
| AC current of each unit at 415 V | 139 A | 174 A | 313 A, 70 A |
| Two DC designs to stock | No | No | Yes |

## Plant 3: 1 MW AC (1,200 kWp)

The first thing to settle is what "1 MW" means. If it is 1 MW of AC, then at a ratio of 1.2 the array is 1,200 kWp. If it is 1 MWp of DC, the AC side is about 833 kW at 1.2. Eight 100 kW units (800 kW AC) would then give a ratio of 1.25. Fix this in writing before comparing quotes, because the two readings differ by a fifth in inverter capacity.

For 1 MW AC (1,200 kWp):

- **Ten 100 kW units.** 60 to 80 MPPTs, 15 to 20 kWp per MPPT. A trip takes 10% offline.
- **Eight 125 kW units.** 64 to 80 MPPTs, 15 to 18.75 kWp per MPPT. A trip takes 12.5% offline.
- **Three 320 kW units.** The [225 and 320 kW EHV unit](/our-products/QB-225-320K-EHV/) lists 12 MPPTs as standard, with 14 or 16 optional on the 320 kW model. Three units give 36 MPPTs, or 42 or 48 with the optional counts. A trip takes 33.3% offline.

The three-unit option shows the tiling problem. Three 320 kW units are 960 kW, not 1,000 kW. Against the 1,200 kWp array that is a DC:AC ratio of 1.25, not 1.2. The ratio is a result of unit size, not a free input. It is also 40 kW short of the AC target, which matters if a DISCOM sanction or a contract is written to 1,000 kW. With the ten-unit option the AC target is exact.

The EHV unit's DC window also changes the string design. Its window is 500 to 1500 V, against a maximum DC of 1100 V on the 100 kW family. With the cold voltage assumed above (52.7 V per module):

| | 1100 V maximum DC | 1500 V maximum DC |
| --- | --- | --- |
| Most modules per string | 20 (1,054 V cold) | 28 (1,475.6 V cold) |
| One more module | 21 gives 1,106.7 V, over the limit | 29 gives 1,528.3 V, over the limit |
| kWp per string at 600 Wp | 12 | 16.8 |
| Strings for 1,200 kWp (2,000 modules) | 100 | about 72 |

About 28% fewer string cables and fuses to run is real, and it is a reason to look at the higher-voltage class at this size. Remember the lower end too: the hot-weather string voltage must stay above the MPPT window's lower bound, which is higher on the EHV unit. The [string sizing worksheet](/blog/solar-string-sizing-ocp-india/) shows the cold and hot checks. For the wider choice between many string units and a few large ones, read the [string versus central inverter guide](/blog/string-vs-central-inverter-india/).

## What a single trip costs

Capacity offline is the easy number. The energy lost depends on how long the unit is down. For a unit with a given share of the plant, lost energy is approximately:

**lost kWh = share offline x plant kWp x daily yield x days down**

At the assumed 4.5 kWh per kWp per day, and a three-day outage waiting for a replacement:

| Plant | Option | Daily plant energy | One unit down for 3 days |
| --- | --- | --- | --- |
| 100 kW | One 100 kW | 540 kWh | 1,620 kWh |
| 100 kW | Two 50 kW | 540 kWh | 810 kWh |
| 500 kW | Five 100 kW | 2,700 kWh | 1,620 kWh |
| 500 kW | Two 225 kW + 50 kW (a 225 kW fails) | 2,700 kWh | 3,645 kWh |
| 1 MW | Ten 100 kW | 5,400 kWh | 1,620 kWh |
| 1 MW | Three 320 kW | 5,400 kWh | 5,400 kWh |

Read the pattern, not the exact figures. Going from ten units to three on the 1 MW plant makes one failure cost more than three times as much. Whether that matters depends on the repair time you can get. A site with a spare unit on the shelf can restore a failed block in hours. A site waiting for a replacement across the country cannot.

Three points temper the table:

- **More inverters do not protect the shared parts.** A fault in the main ACDB, the LT incomer, the transformer or the metering point takes out every inverter behind it. Redundancy only counts for what is duplicated.
- **A spare is a purchase decision with a break-even.** Compare the cost of a spare unit with the lost kWh it would save, multiplied by your tariff. We have not put a price on it here, because Qbits quotes per model and quantity.
- **The formula is a simplification.** It assumes equal DC share per unit and that every day is an average day. A trip in peak season costs more than one in the monsoon.

## The AC side: current, panel and connection voltage

AC line current at 415 V and unity power factor is power divided by 1.732 x 415:

| Plant or unit | AC current |
| --- | --- |
| 100 kW unit | 139 A |
| 125 kW unit | 174 A |
| 225 kW unit | 313 A |
| 320 kW unit | 445 A |
| 500 kW plant | 696 A |
| 1 MW plant | 1,391 A |

At 1,391 A, collecting the whole 1 MW on one LT bus means a very large main breaker and several parallel cables per phase. That is the reason designers move the aggregation point up to a transformer at this size. The transformer is rated in kVA. Size it for the AC nameplate plus any reactive power the DISCOM asks the plant to supply, not for kW alone.

Whether a given unit can feed an LT bus directly depends on its AC output voltage. That figure is not in the catalogue data used here, so read it in the datasheet for each model before drawing the single line diagram.

### What the DISCOM will connect

The part most designers get wrong is assuming one national table decides the connection voltage. It does not. Here is what the three documents we opened say.

| Source | What it says | Status |
| --- | --- | --- |
| CEA connectivity regulations for distributed generation, 2013, amended 2019 (regulation 3, 4(6), 11A(7), 11(9)) | Apply to connections below 33 kV. They do not tabulate voltage against plant size. The licensee carries out an interconnection study to fix the point of interconnection and "the maximum net capacity of the distributed generation resource at a particular location". A user connecting at 11 kV or above must install power quality meters. The licensee may require a manually operated isolating switch above a capacity level it decides | Read in a CBIP consolidated copy. The cea.nic.in page was not used |
| GERC rooftop net-metering regulations, 2016, with amendments (regulation 8(2) and (3)) | Connection level by the consumer's connected load: up to 6 kW at 240 V single phase; above 6 kW up to 100 kW/kVA at 415 V three phase; above 100 kW/kVA at HT. HT consumers may install a rooftop plant at LT or HT and connect it to their own LT or HT system | Consolidated copy that lists one amendment (first amendment, 6 October 2017). Later amendments not checked |
| GERC regulation 6.2, same copy | Plant capacity between 1 kW and 1 MW. For non-residential consumers, up to 50% of the sanctioned load or contract demand | Same |
| MERC statement of reasons, 2023 (section 2) | For eligible capacity, the generating system "shall be reckoned based on its output capacity in AC". The 2021 central amendment, notified on 28 June 2021, sets a net-metering limit of 500 kW or sanctioned load, whichever is lower, "only in cases where the Commission's Regulations do not provide for net-metering or net-billing". The Forum of Regulators model text it cites takes the interconnection voltage from the state supply code, with the rooftop plant's capacity in place of the contract demand | A regulator's own account. We did not read the central gazette |

Four consequences for the three plants:

1. **The voltage follows the host consumer's connection and the state code, not the inverter count.** Choose the number of inverters after the DISCOM gives you the voltage and point of interconnection.
2. **The capacity basis differs by state.** Maharashtra says AC output. The Gujarat text we read says "capacity" without saying AC or DC. Ask in writing, because it decides whether your 1.2 ratio plant is a 500 kW or a 600 kW application.
3. **The sanctioned-load cap can decide the plant size before any inverter is chosen.** As we read the Gujarat copy, a 500 kW plant at a non-residential site needs a sanctioned load or contract demand of at least 1,000 kW or kVA. A 1 MW plant needs 2,000. That is arithmetic on the 50% rule in that copy and it may have changed.
4. **The 1 MW figure is a state limit, not a physical one.** The Gujarat copy and the Maharashtra statement both discuss a 1 MW ceiling for net metering. Above it the plant falls under a different arrangement.

For the approval sequence itself, see [how a DISCOM decides on inverter acceptance](/blog/discom-approval-solar-inverter-net-metering/). For the inspector's side, the [CEIG inspection checklist](/blog/ceig-inspection-solar-plant-inverter-checks/) shows why drawings and thresholds are state-specific.

If you want to test an inverter count against your own roof sections, AC target and state, [send the project details to Qbits](/contact-us/). Quotes are per model and quantity.

## Roof sections set a floor on MPPTs, not the count

An MPPT should serve strings that see the same sun: one orientation, one tilt, one shading pattern. The number of independent roof sections therefore sets the minimum number of MPPT inputs. It does not set the number of inverters, because one inverter carries several MPPTs.

Test it on Plant 2. Suppose the 600 kWp is spread over six sections: three sheds with different tilts, a flat block, and two shaded strips. That needs at least six MPPTs, and every option above has 28 or more. The roof is not the constraint, so the AC and trip tests decide the count.

The roof becomes the constraint in the opposite case: many small sections. Twelve sections of 10 kWp each on a 120 kWp plant need twelve independent MPPTs. A single 100 kW unit offers 6 or 8. You either mix sections on a tracker and accept the mismatch, or move to more, smaller units. The per-MPPT current limit (not in the catalogue summary we use) is in each datasheet.

## Cable length and service access

Two cable runs trade against each other:

- **DC home runs from strings to the inverter** are many cables of small cross-section. Their total length is roughly the number of strings times the average run. Loss is current squared times resistance, so long runs cost generation as well as copper. Placing each inverter near the centre of its array shortens them.
- **AC cable from inverter to ACDB** is few cables of large cross-section, carrying 139 A for a 100 kW unit at 415 V. Several distributed inverters mean several AC runs to the collection point.

Distributed units cut total DC cable and add AC cable. A few large units concentrated in one room do the opposite. On a large roof the DC runs can be long, as on the warehouse roof in [solar for warehouses and logistics parks](/blog/solar-for-warehouses-logistics-parks/). Whether copper falls overall depends on the layout, so draw both before choosing.

Service access matters as much as cable length. Ten units spread over three roofs mean a technician visits three places, but a trip costs 10%. Three units in one electrical room are easy to reach and a single failure costs a third. Neither is wrong. Match it to how fast you can get a technician and a replacement.

## How to choose, in order

1. **Fix the AC target and what it means** (AC or DC) and ask the DISCOM for the connection voltage, point of interconnection and capacity basis.
2. **List the roof sections.** The count of independent sections is the MPPT floor.
3. **Pick candidate unit sizes that tile** into the AC target with a ratio you can defend. Then check the ratio against each model's maximum DC input power.
4. **Compute the trip loss** for the largest unit in each option, with your own yield and repair time.
5. **Check the AC current and the collection point** (LT bus or transformer) for each option.
6. **Draw the DC and AC cable runs** and the service route.
7. **Document the choice** in the design basis, so the RFQ and the DISCOM drawings match. The [RFQ template](/blog/solar-inverter-rfq-template-epc/) has a line for the inverter schedule.

For a general view of inverter sizing, see [how to size a solar inverter](/blog/solar-inverter-sizing/).

## What this post could not check

- **The latest GERC rules.** We read a consolidated copy that lists only the first amendment of 6 October 2017. Later amendments or a changed 50% cap would change the Gujarat points.
- **The central net-metering rule's gazette text.** We rely on MERC's description of the 28 June 2021 amendment, not the gazette.
- **State rules outside Gujarat and Maharashtra.** Other states set their own supply codes and net-metering limits, and we did not read them.
- **Qbits model details.** The catalogue data we use gives power ranges, MPPT counts and DC windows by family. It does not say which rating carries 6 or 8 MPPTs, the AC output voltage, per-MPPT current or maximum DC input power. Check the exact model's datasheet for each.
- **Real yields, repair times and prices.** All figures are illustrative.

## Next step

Settle the AC target, the capacity basis and the connection voltage first. Then use the checks above to compare two or three unit sizes. Once you have the capacity, voltage level and roof sections, [send the project details to Qbits](/contact-us/) for a quote per model and quantity. Or start from the [datasheet library](/download-datasheets/) to confirm MPPT counts and DC windows for the models you are comparing.
