---
title: "Solar for Plastic and Injection Moulding Units: A Payback Guide"
seoTitle: "Solar for Plastic Industry: Power Factor, Payback"
excerpt: "Rooftop solar for a plastic processing unit: why power factor, Sunday exports and roof fire rules matter more than the daytime match, with a worked 150 kWp case."
description: "Solar for the plastic industry: how power factor, Sunday exports and roof fire rules change payback, with four states' rules and a worked 150 kWp case."
category: "Guide"
date: 2026-10-30
readTime: "27 min"
image: "/og/blog-solar-for-plastic-injection-moulding-units.webp"
author: "Keyur Rakholiya"
keywords:
  - solar for plastic industry
  - solar for injection moulding unit
  - rooftop solar plastic processing
  - solar power factor penalty factory
  - solar payback plastic unit
  - group captive solar plastic
  - solar fire safety plastic factory roof
relatedSlugs:
  - net-metering-capacity-limits-commercial-by-state
  - solar-for-warehouses-logistics-parks
  - group-captive-solar-msme
  - solar-dg-synchronisation-on-grid-inverter
  - mppt-allocation-multiple-factory-sheds
---

Solar for the plastic industry looks like a good fit on paper. Machines run by day, the load is steady and the roof is usually a large sheet shed. Four less obvious things decide whether the plant pays:

- what a unit of solar is worth on your tariff
- what the inverters do to your power factor at the meter
- what your state does with the units you do not use on a Sunday
- what your fire adviser says about a shed full of granules and packaging

In the worked case below, a 150 kWp plant on a single-shift unit uses about 89% of its output on site and sends the rest to the grid on Sundays. On Gujarat's HT (high-tension) tariff and net-metering rules, payback runs from about 9 to 32 years, depending on one banking charge and one cost assumption. The range is the point: read your own bill before you read anyone's brochure.

This guide is for owners and plant heads of injection moulding, extrusion, blow moulding, film and pipe units. Read it before you ask an EPC (engineering, procurement and construction contractor) for a quote. It sets out a sizing method, then reads four states' rules (Gujarat, Maharashtra, Haryana and Delhi) to show how one roof gets different answers. No customer is named, no Qbits price is quoted and no installed result is reported, because Qbits has none to report.

Plastics units are also found in Tamil Nadu, Uttar Pradesh and elsewhere. We did not read those states' final rules, so we leave them out. Our [state-wise net-metering limits guide](/blog/net-metering-capacity-limits-commercial-by-state/) gives the ceilings for more states.

> **What this is built on, checked 2026-10-30**
>
> - GERC (Net Metering Rooftop Solar PV Grid Interactive Systems) Regulations, 2016, as amended by the Third Amendment (Notification 2 of 2022) and read with the Fourth (13 of 2024) and Fifth (3 November 2025) Amendments.
> - GERC tariff schedule for DGVCL, MGVCL, PGVCL and UGVCL effective 1 April 2026, Rate HTP-1 (read from an archive copy, because the regulator's site failed a certificate check from our machine and we did not bypass it).
> - MERC (Grid Interactive Rooftop Renewable Energy Generating Systems) Regulations, 2019, full text, and MERC's statement of reasons for the First Amendment (16 November 2023). The notified amendment text was not opened.
> - HERC Regulation HERC/54/2021 (19 July 2021), from an archive copy of the regulator's PDF. Later amendments were not checked.
> - DERC (Net Metering for Renewable Energy) Regulations, 2014, and the Fifth Amendment to its Group and Virtual Net Metering Guidelines (15 March 2024). Later amendments to the 2014 regulations were not checked.
> - Electricity (Amendment) Rules, 2026, G.S.R. 186(E), 13 March 2026, substituted Rule 3, from the gazette text. Electricity (Promoting Renewable Energy through Green Energy Open Access) Rules, 2022, G.S.R. 418(E), 6 June 2022, gazette text.
> - CEA (Technical Standards for Connectivity of the Distributed Generation Resources) Regulations, 2013, with the First Amendment of 2019.
> - MNRE's draft Quality Control Manual for Grid Connected Rooftop Solar PV Plant, circulated for comments on 25 February 2023. Its final status is unknown to us.
> - An energy-use guide for injection moulding plants, produced in the UK by Applied Market Information with Tangram Technology and published by ExxonMobil. It is undated and not about Indian plants, so we use it for proportions only.
> - Yield from the European Commission's PVGIS tool (ERA5 data) for Vapi, Gujarat.
> - **Not verified:** other states' rules, FPPAS (fuel and power purchase price adjustment) and electricity duty, GST, tax depreciation, current GUVNL bid averages, any Indian fire or insurance rule for rooftop plants, and anything after the dates above. Confirm with your DISCOM (electricity distribution company) before you sign.

## Is solar for the plastic industry a good match for the load?

A plastic unit is billed in kWh, but its load curve is what shapes a solar design. The table below comes from a published energy map of an injection moulding plant. The guide is undated and from outside India, so read the numbers as proportions of a typical plant, not as your plant.

| End use in a typical injection moulding plant | Share of plant energy |
| --- | --- |
| Polymer processing (machines, including barrel heating) | 66% |
| Chillers | 11% |
| Compressed air | 10% |
| Lighting | 5% |
| Water pumps | 5% |
| Heating | 2% |
| Offices | 1% |

The same guide makes four points that matter for solar.

- **Machine loads are mostly idle-state energy.** On a standard hydraulic machine, the guide says base load can be 75% or more of the total. Base load is the energy used while the machine idles during cooling phases. In the guide's example of a 38.6 second cycle, it is 64%. The injection peak is short. Across 20 machines running out of step, the plant draws something close to a flat line.
- **Barrel heating is 10% to 25% of a machine's energy input**, and heater bands are resistive, so they add kW with no reactive demand.
- **Chilled and cooling water use 11% to 16% of total energy**, and compressed air, chillers and dryers together are put at 30% to 35%. Those are motor loads that run as long as production runs, and often a while after.
- **The guide puts the power factor of most plastics processors at around 0.95.** That is its figure, not an Indian measurement. A unit with an undersized capacitor bank will be lower.

Newer machine drives change the picture. The guide describes variable-speed and servo drives on hydraulic pumps, and hybrid and all-electric machines, as ways to cut base load, with overall savings of up to 60% for all-electric machines. Those are the guide's claims, not ours. The consequence for a solar buyer is simple. If you are replacing machines, your daytime draw will fall, so size the plant against the load you will have, not the load you have today.

**Why the daytime match works, and where it stops.** A single-shift unit running Monday to Saturday uses solar as it is made. A unit on two shifts or 24 by 7 does too, but solar covers a smaller share of its energy. In every pattern, Sundays and festival shutdowns are when output has no load to serve. We simulate three patterns below.

## How does solar affect power factor and demand in a plastic unit?

Solar does not cut a plastic unit's demand charges, and it can pull the power factor at the meter down. Plastics buyers are often surprised by both.

**Solar does not cut your contract demand or your billing demand.** In the GERC schedule, billing demand is the highest of actual maximum demand, 85% of contract demand, or 100 kVA. Maximum demand is the average over a 30 or 15 minute period, or 3 minutes if you have opted for parallel operation with the grid. A shed running 20 machines in cycle sits above 85% of its contract demand much of the time. A cloud, or a solar trip while presses are at peak, can set a maximum demand in the same window.

So we count no demand-charge saving in the worked case. Ask any EPC to justify one with half-hourly data.

**Solar changes your power factor at the meter.** An inverter at unity power factor supplies kW and no kVAr. Your motors still draw their kVAr from the grid, so the meter sees fewer kW and the same kVAr, and the ratio drops. A simple example, using the 0.95 figure above:

- A 200 kW load at 0.95 power factor draws about 66 kVAr and 210 kVA from the grid.
- A 100 kW solar output at unity power factor takes 100 kW off the grid. The grid still supplies about 66 kVAr, so the apparent power falls from 210 kVA to about 120 kVA, and the power factor at the meter falls from 0.95 to about 0.84.
- Real power fell by 50%, apparent power by about 43%. That is why the kVA demand saving is smaller than the kW saving.

The GERC schedule charges for the drop. Rate HTP-1 adds 1% of the month's energy charges for each 1% (or part) that the average power factor falls below 90%, down to 85%, and 2% for each 1% below 85%. It gives a 0.5% rebate for each 1% above 95%. The average is for the month, so night and Sunday hours dilute a daytime dip. We simulated one year at Vapi with a constant load power factor of 0.95, which is our assumption, and the single-shift pattern, the one that suffers most:

| Plant (kWp) | Solar share of the unit's annual energy | Average monthly power factor at the meter after solar | Worst month | Slab penalty in the worst month | Penalty over the year, on our energy charges |
| --- | --- | --- | --- | --- | --- |
| 100 | 17% | 0.93 | 0.92 | 0% | Rs 0 |
| 150 | 24% | 0.92 | 0.90 | 1% | Rs 300 |
| 200 | 32% | 0.90 | 0.87 | 4% | Rs 21,000 |
| 300 | 48% | 0.84 | 0.75 | 27% | Rs 1,36,000 |

At 150 kWp the penalty is negligible. At 300 kWp, on a 200 kW load, it is about Rs 1.4 lakh a year, nearly a fifth of the saving after banking. The drift depends on how much of the load solar covers, so a plant sized well below your daytime load stays out of the slab.

It also depends on two things we assumed: a flat 0.95 load power factor, and that the DISCOM computes the average from imported kWh and kVArh. Lightly loaded hydraulic motors run at a worse power factor than rated, and a real unit swings with the cycle. Three levers close the gap, in the order we would ask about them.

1. **The capacitor bank.** An automatic power factor correction panel with its sensing at the main incomer sees the net import and adds capacitor steps. Check that the sensing point is after the solar connection and that you have enough steps for the daytime reactive demand.
2. **The inverter's reactive mode.** Many inverters can run at a set power factor or supply reactive power within their kVA rating. Ask which modes the exact model offers and whether your DISCOM allows them. The Qbits family listings on this site carry no power factor range, so read the datasheet for the exact model.
3. **Sizing.** Keep the plant a fraction of the daytime load.

Haryana's net-metering regulation and Delhi's both address one related point. If you are billed on kVAh, Haryana computes net kVAh as net kWh divided by the power factor you maintain (regulation 11.2), and Delhi assumes unity power factor for exported units (regulation 9(6)). The point for a plastics buyer is to ask your DISCOM how your bill converts exports in kVAh, and not only in kWh.

## Do drives, harmonics and voltage dips cause trouble for a solar plant?

A moulding floor with drives needs two checks on any solar plant: the harmonic current it injects, and how it behaves in a grid dip.

**Harmonics.** Servo and variable-speed drives are non-linear loads, and a solar inverter injects harmonic current of its own. The Central Electricity Authority's (CEA) connectivity regulations for distributed generation below 33 kV say that harmonic current injected by the generating station shall not exceed the IEEE 519 limits (regulation 11(1)). That limit applies to what the plant injects, measured where the DISCOM supplies you.

We give no number, because the compliance figure belongs to the exact inverter model and to your network. Ask for the inverter's current distortion figure on the datasheet at full and at light load, and for a test report. If you run many drives, ask the EPC to measure voltage distortion at your supply point before and after commissioning. We do not point to our older THD post here, because we could not source its limits to a primary text.

**Voltage dips and ride-through.** The same regulation requires an inverter-based plant to trip on over-voltage above 110% or under-voltage below 80%, with a clearing time of up to two seconds. It must also trip on frequency at or above 50.5 Hz or below 47.5 Hz within 0.2 seconds. The plant may not reconnect until voltage and frequency have stayed within limits for at least sixty seconds, and it must stop energising within two seconds of an unintended island. The licensee may prescribe narrower limits. For a plastics floor this has four consequences.

1. **Solar does not help you ride through a dip.** The inverter follows the grid, and it disconnects when the grid does. A contactor drop-out or a controller reset on the shop floor is a supply issue, not a solar one. Solar neither causes nor cures it.
2. **After any trip, the plant draws full grid power for at least a minute.** If a trip lands at your production peak, it can set a high recorded maximum demand. That matters only if your maximum demand is near your contract demand.
3. **Do not widen the trip settings to stop nuisance trips.** They belong to the approved grid profile. If trips are frequent, take the inverter event log to your DISCOM and your EPC.
4. **A grid outage still stops the plant.** An on-grid inverter does not run your presses, and a melt left standing in a barrel is a process problem, not a solar one. If a DG (diesel generator) set carries the unit through outages, ask for the design before you sign. On-grid inverters and a DG set need a deliberate arrangement, which our [DG synchronisation guide](/blog/solar-dg-synchronisation-on-grid-inverter/) explains.

## What do four states' net-metering rules mean for a plastic unit's plant?

A plastic unit's plant is capped by a number on its connection, and the settlement rule decides what an unused unit is worth. The table covers the four states we read. The ceilings for 13 states, and whether each counts AC or DC, are in our [net-metering limits guide](/blog/net-metering-capacity-limits-commercial-by-state/). Our [warehouse guide](/blog/solar-for-warehouses-logistics-parks/) reads a different set of four states for a lightly loaded building.

| State | Plant ceiling | What happens to units you do not use | Charges on the solar unit |
| --- | --- | --- | --- |
| Gujarat (GERC, 2022 amendment) | Captive: no capacity restriction, subject to the rooftop limit in clause 6.2 and to the consumer's sanctioned load or contract demand. Net metering 1 to 1,000 kW | HT consumer: set-off only against consumption between 07:00 and 18:00 on the same day. The surplus is bought at Rs 2.25 a unit for MSME manufacturing enterprises for 5 years, then at 75% of a GUVNL bid average, and others at 75% of that average (clauses 9.2.6, 9.2.9) | Banking charge Rs 1.50 a unit on solar consumed by demand-based consumers, Rs 1.10 for MSME manufacturing units (clause 9.2.11) |
| Maharashtra (MERC, 2019, with 2023 decision) | 5 MW or contract demand or sanctioned load, whichever is lower (statement of reasons, 2023). Cumulative rooftop capacity on a transformer not above 70% of its rating unless a study allows more (regulation 5.2) | Excess is carried forward month to month. The unadjusted balance at year end is bought at the Generic Tariff approved for that year. A time-of-day (ToD) consumer's consumption in a time block is first met by injection in that block, and any excess is treated as off-peak (regulation 11.4) | The Commission may levy Grid Support Charges by category in the retail tariff order (regulation 11.5). We did not read the current order |
| Haryana (HERC, 2021) | Net metering up to 500 kW or sanctioned load or contract demand, whichever is lower, with 5% variation. Cumulative rooftop capacity not above 50% of a distribution transformer or 30% of a power transformer (regulations 5.2, 5.3) | Generation counted is capped at 90% of the year's consumption. Credits carry forward within the financial year and the unadjusted balance lapses at year end with no payment (regulation 11.1) | A rooftop system, self-owned or third-party owned, is exempt on injected energy from wheeling, cross-subsidy, transmission and distribution, banking charges and additional surcharge, but statutory duties apply (regulation 12) |
| Delhi (DERC, 2014) | Subject to interconnection feasibility, service line capacity and sanctioned load. A system above sanctioned load needs a service line charge for the difference (regulation 5(3), 5(4)) | Surplus carries forward in the settlement period. Unadjusted credits at year end are paid at rates notified by the Commission (regulation 9(7)) | Exempt from wheeling, banking, cross-subsidy and other charges for 5 years unless extended (regulation 10) |

Three things stand out for a plastics unit.

1. **Same-day set-off decides Gujarat.** A single-shift HT unit that is shut on Sunday sends its Sunday output to the grid at the surplus rate. A 24 by 7 unit sends almost nothing. Maharashtra and Haryana carry credits from month to month. A Sunday's output can then be set off against later weekdays' consumption, subject to Haryana's 90% cap and any Maharashtra Grid Support Charge.
2. **The banking charge is the biggest swing.** Gujarat's Rs 1.10 to Rs 1.50 on every consumed unit comes straight off the saving. Haryana and Delhi exempt a rooftop plant under net metering from banking, and Maharashtra leaves a charge to its tariff order. We did not read those states' tariff schedules, so we cannot say what a solar unit is worth there.
3. **Whether you count as MSME manufacturing can change a charge.** Gujarat lets micro, small and medium enterprises (MSMEs) in manufacturing pay a lower banking charge and earn a fixed surplus rate for 5 years. The regulation we read does not say how that status is decided, so ask your DISCOM in writing which charge your Udyam registration and activity code attract. Our [Surat diamond-unit guide](/blog/solar-for-diamond-polishing-units-surat/) reads the full Gujarat captive set-off and banking clauses line by line.

Treat the Delhi row with caution. We read the 2014 regulations and a 2024 amendment to the group and virtual net-metering guidelines, but no later amendment of the 2014 text. It is a starting question for the DISCOM, not current law.

## A worked case: 150 kWp on a single-shift unit

**Illustrative case.** The numbers below are a model, not a quote, not a Qbits figure and not a result from any site. Replace each input with your own.

| Input | Value | Why |
| --- | --- | --- |
| Location | Vapi, Gujarat (20.37 N, 72.91 E) | A South Gujarat industrial location for the yield. We took it to be in DGVCL's area from a secondary source. The GERC schedule is one annexure for four companies, so this does not change the tariff used |
| Supply | HT, Rate HTP-1, 300 kVA contract demand, billing demand up to 500 kVA | HTP-1 applies from 100 kVA. The contract demand is an assumption |
| Plant | 150 kWp, below the 300 kVA contract demand | About 1,000 square metres of usable roof at 6.5 square metres per kWp (both assumptions) |
| Yield | PVGIS 1,476 kWh per kWp a year at a 10 degree tilt, facing south, 14% system loss, ERA5 2005 to 2023. We take 10% off for dust, heat and downtime, which is an assumption, and run the 2015 to 2019 hourly series. That gives about 1,329 kWh per kWp, so about 1.99 lakh kWh a year | Monsoon is a real dip: PVGIS monthly output runs from 157 kWh per kWp in March to 75 in July |
| Load | 200 kW during production, with the base shown below, held at 0.95 power factor | Stylised, to be replaced by your half-hourly data |

We built three stylised load patterns, each for one year.

| Pattern | Hours | Other hours | Annual consumption |
| --- | --- | --- | --- |
| Single shift | Monday to Saturday 08:00 to 18:00 at 200 kW | 20 kW at night, 15 kW on Sunday | About 7.3 lakh kWh |
| Two shift | Monday to Saturday 06:00 to 22:00 at 200 kW | 25 kW at night, 15 kW on Sunday | About 10.8 lakh kWh |
| Continuous | Every hour at 200 kW | None | About 17.5 lakh kWh |

**How much of the plant the load uses.** Under Gujarat's HT rule we set off each day's solar generation made between 07:00 and 18:00 against that day's consumption in the same window.

| Pattern | Solar made a year | Used on site (same-day set-off) | Exported | Solar share of the unit's annual energy |
| --- | --- | --- | --- | --- |
| Single shift | 1.99 lakh kWh | 89% | About 21,000 kWh, mostly Sundays | 24% |
| Two shift | 1.99 lakh kWh | 89% | About 21,000 kWh, mostly Sundays | 16% |
| Continuous | 1.99 lakh kWh | 99% | About 2,000 kWh | 11% |

The shift pattern changes the solar share and the Sunday loss, not the economics of each unit used. A plant that is a small share of a large load uses nearly everything it makes, in every pattern. If your load is lower than this, the used share falls and the payback below gets worse.

**What a solar unit is worth.** On Rate HTP-1 with billing demand up to 500 kVA, the energy charge is 400 paise a unit, plus 45 paise from 07:00 to 11:00 and from 18:00 to 22:00, and minus 60 paise from 11:00 to 17:00. About 22% of Vapi's solar output falls in the first window and 73% in the discounted one. Treat these shares as good to a few points, since they depend on how the timestamps are read. The weighted value of a solar unit comes to about **Rs 3.65**, not the 4.00 headline, and the [Morbi ceramic-unit guide](/blog/solar-for-ceramic-units-morbi/) reads the same Rate HTP-1 for a PGVCL unit.

We left out the 1% rebate for supply at 11 kV, which would trim it by a few paise, and we left out FPPAS and duty.

**Payback.** Payback is installed cost divided by the yearly saving: units used times net saving per unit, less a running cost of 1.5% of installed cost a year, which assumes frequent washing. The costs per kWp below are round numbers picked to span a range. They are not a Qbits price or a market quote. We count nothing for exported units, demand charges, tax depreciation or degradation.

| Installed cost per kWp | Banking Rs 1.50, net Rs 2.15 a unit | Banking Rs 1.10, net Rs 2.55 | No banking charge, net Rs 3.65 |
| --- | --- | --- | --- |
| Rs 35,000 (Rs 52.5 lakh for 150 kWp) | 17.3 years | 14.0 years | 9.2 years |
| Rs 45,000 (Rs 67.5 lakh) | 24.0 years | 19.1 years | 12.3 years |
| Rs 55,000 (Rs 82.5 lakh) | 31.8 years | 25.0 years | 15.7 years |

The third column is not any state's real figure. It applies Gujarat's tariff values with no banking charge, to show what a state that exempts rooftop plants from banking could look like. Haryana's regulation does that, but we did not read Haryana's tariff. For a continuous unit the same three columns read 15.2, 12.4 and 8.2 years at Rs 35,000, because more of the plant is used.

Crediting the Sunday export at the Rs 2.25 MSME surplus rate moves the single-shift Rs 35,000 case at banking Rs 1.10 from 14.0 to 12.4 years. That rate holds for the first 5 years only.

On the tariff and regulation text alone, a Gujarat HT plastics unit does not get a short payback. The answer moves with the banking charge your DISCOM applies, the lines your bill adds to the energy charge and the installed cost of your roof. So ask any EPC to rebuild this sum from your last twelve bills, line by line, including FPPAS and electricity duty. Our [C&I payback and IRR guide](/blog/solar-irr-payback-ci-india/) shows the method with other tariffs.

With your half-hourly data and a roof drawing in hand, take the sizing question to the [Qbits C&I solutions page](/c-i-solution/).

## How do roof type, dust and plastic fumes affect the array?

Roof type, orientation, dust and heat each change the design of a plastics-site plant.

**Roof type and load.** Most plastics sheds have a colour-coated or galvanised sheet roof on purlins, or a pre-engineered steel building. Offices and dispatch bays are often RCC (reinforced cement concrete). Older sheds may have cement sheet, some of which contains asbestos, so ask your safety adviser before any drilling or clamping. A sheet roof and a slab each need a different fixing.

Ask for the dead load of the proposed structure in kg per square metre, the clamp type for your sheet profile and the wind uplift. A qualified structural engineer should sign off the check against purlin spacing, sheet gauge and corrosion. If the roof has under ten years of life left, re-sheet it first. Ask whether your roof or building supplier must approve a clamp or penetration to keep the roof warranty.

**Orientation.** A plastics site with several sheds facing different ways needs several MPPT (maximum power point tracking) inputs. Our [guide on allocating MPPTs across factory sheds](/blog/mppt-allocation-multiple-factory-sheds/) covers the method.

**Dust and fumes.** Granulators and regrind handling make fine plastic dust, and hot processes can put fume and condensed deposits in the air near vents. We found no published measurement of how these soil modules, so we give no loss percentage.

What a named study shows is that the kind of dust matters as well as the amount. John, Warade, Tamizhmani and Kottantharayil (IEEE Journal of Photovoltaics, volume 6, 2016) deposited dust collected at six Indian sites onto a silicon cell at one density in a lab. Mumbai dust cost 17.1% and Jodhpur dust 9.8%. We read the abstract only, and it concerns mineral dust from other places, so it says nothing about plastics. It is a reason not to borrow a "typical" figure.

The 10% we took off the yield for dust, heat and downtime together is our assumption. Log your array output through your first dry season and compare an array near the extraction vents with one far from them. Set the cleaning interval from your own data.

**Heat.** Heat rising from a processing hall warms a sheet roof, and module output falls as cell temperature rises, at the coefficient on the module datasheet. We have no measured figure for plastics sheds. Ask the EPC how it treated roof heat and whether it left an air gap under the modules.

## What fire safety checks does a plastics roof need?

A plastics unit holds a high fire load, with granules, regrind, finished goods and packaging under or beside the roof. We found no Indian rule or standard that we could open and apply to a rooftop plant on a plastics building. Most of this section is therefore questions for your fire adviser and insurer.

What we could read is the draft Quality Control Manual for grid-connected rooftop solar from MNRE, the Ministry of New and Renewable Energy. It was circulated for comments in February 2023, and we do not know whether it was finalised. Its fire safety section says:

- Fire in a PV system results mainly from poor installation, wrong design, underrated cables, loose connections, poor operation and maintenance, faulty equipment, absent isolators and damaged DC cables.
- The roof should have convenient access, pathways and an emergency exit, and the layout should allow smoke ventilation.
- No exposed DC cables should hang or lie on the roof. DC cables should be protected from physical damage, run apart from AC routes and be marked. Cable trays should have lids and be bridged where they cross pathways.
- Load-breaking DC isolators should separate the array and the inverter. They need independent manual operation, must not be sensitive to polarity, must be rated to interrupt full load and prospective fault current, and must sit in an accessible place.
- Signs should mark every point of isolation, following IEC 62548, so that responders know how to isolate the system.
- A string fuse is sized on peak-irradiance current. At lower irradiance a short circuit may not blow it and can go unnoticed.

**Rapid shutdown.** The draft text we read does not mention it, and we found no Indian rule requiring it. That does not make it a bad idea. Ask your fire adviser and your insurer whether either wants it, and ask the EPC what it would add to the design.

The questions below are our own practice, not a rule we read. Put them to your adviser:

- Does the fire clearance for your building say anything about rooftop equipment, and does the insurer need a notice before work starts?
- Where do the DC cable runs pass relative to roof lights, smoke vents, extraction ducts and hot-process exhaust? Which insulation rating has the EPC used near hot surfaces?
- Where will the isolators and inverters sit, and can the fire brigade reach and isolate them without crossing the array?
- Can a granule or packaging stack be kept clear of the array's cable trays?

Send your fire adviser and insurer the single line diagram before approval, not after.

## Choosing an inverter for a plastics roof

A processing site has a few roof planes, a rating that is a fraction of contract demand, and a motor-heavy supply. Pick the inverter after you have settled the roof layout and the reactive power question above.

- **A 40 to 50 kW class plant** on a small shed fits the Qbits [QB 40/45/50KTLC-Plus](/our-products/QB-40-50KTLC-Plus/). It is listed with 4 MPPT inputs, a 200 to 1000 V MPPT range, 98.6 to 98.7% maximum efficiency by model and an IP66 enclosure.
- **A 70 to 110 kW class plant**, such as our 150 kWp case split across two or three inverters, fits the [QB 70/75/80/90/100/110KTLC-Pro](/our-products/QB-70-110KTLC-Pro/). It is listed with 6 or 8 MPPT inputs by model, the same 200 to 1000 V MPPT range, 98.6 to 98.7% efficiency by model and IP66.

Communication is listed as Wi-Fi with optional RS485 or GPRS. These are selection examples from the listings, not a statement that any inverter suits your unit. The exact model's datasheet is the source for AC output, power factor range, distortion, protection settings and temperature behaviour. Quotes are per model and quantity.

## When is group captive or open access a better route than rooftop?

If your roof carries only part of the load, an off-site plant can supply the rest, but only where the rules allow it for your connection.

**Open access.** The Green Energy Open Access Rules, 2022 (G.S.R. 418(E), 6 June 2022) define an eligible entity as a consumer with contracted demand or sanctioned load of 100 kW or more, with no load limit for captive consumers. The nodal agency must approve applications within fifteen days, failing which approval is deemed. The rules list transmission, wheeling and cross-subsidy charges. We did not read any state's open access regulations, so we give no wheeling or cross-subsidy figure for a plant in Gujarat, Maharashtra, Haryana or Delhi. Ask any developer for the order each charge comes from. Our [group captive guide](/blog/group-captive-solar-msme/) maps the structure.

**The captive test changed this year.** The Electricity (Amendment) Rules, 2026 (G.S.R. 186(E), 13 March 2026) substituted Rule 3. It keeps two thresholds: captive users must hold at least 26% of the ownership and consume at least 51% of the electricity generated in the financial year. The state nodal agency verifies both.

For an association of persons, which includes a special purpose vehicle, an individual user's consumption is admissible only up to 100% of its proportionate share of ownership. A user holding 26% or more is exempt from that proportionality test. Rule 3(4) and the two proportionality sub-rules came into force on 1 April 2026.

If the plant fails the test, all its energy is treated as supply by a generating company, with cross-subsidy surcharge and additional surcharge. For an association of persons, consumption above a user's proportionate share is charged the same way, on the excess only.

We read our group captive guide against that text. It states a 10% variation in proportionate consumption, which belongs to the rule before March 2026, and its landed-cost and payback figures are indicative and not sourced to an order. Do not carry them into your decision. A group captive share also ties you to an equity commitment and an annual consumption test, so rooftop stays the faster route for the part of your load your roof can carry.

## How long does DISCOM approval take for a Gujarat HT plant?

The clock below comes from the Fourth Amendment to the GERC rooftop regulations (13 of 2024). The days are the regulation's targets, not a promise for your file, and other states have their own steps.

| Step | Authority | Time in the regulation |
| --- | --- | --- |
| Registration and certificate | GEDA or the designated agency | 5 days from a complete application |
| Approval of single line, earthing and wiring diagrams | Chief Electrical Inspector | 10 days |
| Technical feasibility report | Distribution company, then the field office | 3 days to request, 10 days for the field report |
| Connectivity agreement | You and the distribution company | Within 15 days of consent, or 30 days if system strengthening is needed |
| Project completion | You | 6 months from the letter |
| Commissioning certificate | GEDA | 3 days after intimation |

The feasibility report names the 11 kV feeder and transformer capacity. For HT consumers installing above 6 kW up to 1,000 kW, state-owned DISCOMs recover system strengthening charges per kVA, and we did not look up the current figure. Plants above 10 kW need the inverter's anti-islanding and a second protection such as a no-volt relay. The Chief Electrical Inspector approves the installation.

## What to bring to an EPC

1. Twelve months of HT bills, showing the demand, energy, ToD, FPPAS, power factor and duty lines.
2. Half-hourly load data for a normal week and the lowest-load week of the year, from the HT meter or a logger.
3. Contract demand, sanctioned load, supply voltage, tariff category and Udyam registration.
4. Your capacitor bank's step sizes, sensing point and control setting.
5. A roof drawing with sheet type, purlin spacing, roof age, roof lights, vents, extraction ducts and access marked, and your fire clearance papers.
6. A written proposal that states the cap it designed to and the banking charge. It should also show the value of a solar unit by time band, the surplus assumption, the dust allowance, the power factor plan and the fire design.

## What this post could not check

- Other states' rules and tariffs. The worked tariff is Gujarat's Rate HTP-1. Maharashtra, Haryana and Delhi tariffs were not read, and Tamil Nadu, Uttar Pradesh and other plastics states were not read at all.
- Haryana and Delhi amendments after the texts we read, and the notified text of MERC's 2023 amendment.
- Gujarat's current surplus rate (75% of a GUVNL bid average), FPPAS, electricity duty and GST, and how MSME status is decided for the banking charge.
- How a DISCOM computes monthly power factor when a plant exports.
- Any Indian fire, rapid shutdown or insurance rule for rooftop plants. We read only a draft MNRE manual.
- The final status of that draft manual.
- Soiling from plastic dust and fume. The 10% allowance is an assumption.
- The load profiles and the 0.95 power factor. They are stylised, and your meter data should replace them.
- The energy-use proportions come from an undated guide written for another market.

## How should a plastics unit decide?

For a plastics unit, the daytime match is the easy part. Size the plant against your own half-hourly load. Then test three things before you sign:

- what a solar unit is worth on your tariff after the banking or grid charge
- what your meter's power factor does when the inverters run
- what your state does with the Sunday output

Settle the fire design with your fire adviser and insurer before approval, not after.

Qbits sells grid-tied string inverters, quoted per model and quantity. Bring a sizing question for your unit to the [C&I solutions page](/c-i-solution/), and a question about your own contract or bill to [our contact page](/contact-us/).
