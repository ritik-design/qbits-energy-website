---
title: "Inverter Selection for PM-KUSUM Component A and C Plants"
seoTitle: "PM-KUSUM Inverter Selection for Component A and C"
excerpt: "What PM-KUSUM Component A and C tenders ask of an inverter: scheme status checked on 31 October 2026, DC:AC and CUF, weak-grid tests, SCADA, and a spec checklist."
description: "PM-KUSUM inverter selection for developers and EPCs: scheme dates (checked 31 Oct 2026), DC:AC and CUF, DISCOM tests, SCADA and a tender checklist."
category: "EPC"
date: 2026-10-30
readTime: "25 min"
image: "/og/blog-pm-kusum-inverter-selection.webp"
author: "Keyur Rakholiya"
keywords:
  - pm kusum inverter selection
  - pm kusum component a inverter
  - pm kusum component c inverter
  - kusum solar inverter specification
  - kusum feeder level solarisation inverter
  - 1 mw kusum plant inverter
  - kusum solar pump controller vs inverter
  - decentralised solar plant inverter selection india
relatedSlugs:
  - string-vs-central-inverter-india
  - inverter-modbus-rs-scada-integration-ci-om
  - fifteen-hundred-volt-string-inverter-eight-hundred-vac
  - solar-ac-cable-sizing-inverter-to-acdb
  - solar-inverter-rfq-template-epc
  - ceig-inspection-solar-plant-inverter-checks
  - dc-oversizing-in-solar
---

PM-KUSUM inverter selection for a Component A plant of 500 kW to 2 MW is a tender-compliance decision first and a technology decision second. Below about 3 MW, string inverters are usually the easier fit. The power purchase agreement (PPA) sets your DC:AC ratio, because it defines how capacity and the capacity utilisation factor (CUF) are measured. The inverter must also pass the distribution company's (DISCOM) rural-grid and monitoring asks. Component C splits in two. Feeder-level plants behave like Component A. Pump-level solarisation uses a solar pump controller, and a general grid-tie string inverter is not the standard answer unless the tender says so.

Check the dates before anything else, because they decide whether a new project can proceed at all. Financial closure under Components A and C must be achieved by 30 November 2026. Completion is extended to 31 March 2027 only where the PPA or Notice to Proceed (NTP) was signed or issued on or before 31 December 2025. The source is a pair of office memoranda from the Ministry of New and Renewable Energy (MNRE), dated 28 September 2026 and 28 March 2026, checked on 30 October 2026 and again on 31 October 2026. The next section gives the details and what we could not establish.

Qbits sells string inverters and publishes this post. Qbits models appear only as datasheet examples. Nothing here says any Qbits model is approved, empanelled, listed or accepted under PM-KUSUM or by any state agency. Establish that with the state implementing agency (SIA) and the DISCOM, model by model.

## Which documents this PM-KUSUM guide uses

All scheme documents below were opened on 30 October 2026 from the issuing body's own server, except the PEDA tender, which is a copy hosted on a research site. On 31 October 2026 we re-opened and re-read the three MNRE memoranda, Lok Sabha Unstarred Question 1613, the DHBVN inverter specification, the MSEDCL SCADA and CUF clauses and the PEDA CUF clause. The quoted passages match.

- **MNRE office memoranda** dated 28 March 2026, 25 May 2026 and 28 September 2026, from the PM-KUSUM portal (pmkusum.mnre.gov.in). Also Lok Sabha Unstarred Question 1613, answered on 29 July 2026.
- **MNRE implementation guidelines:** the comprehensive guidelines dated 17 January 2024, and the 2019 guidelines PDF on the PM-KUSUM portal with its annexed model PPA.
- **MNRE specifications:** the Remote Monitoring System (RMS) specification for Components A and C, dated 15 July 2020 and hosted on the portal. Also the March 2023 solar pump and pump controller specification, and the draft pump controller specification MNRE listed on 12 August 2026 for comments.
- **Three tender documents** from state bodies: MSEDCL's Component A request for selection (RfS) dated 6 December 2022, PEDA Punjab's Component C (feeder level) RfS of August 2024, and DHBVN Haryana's Component C (feeder level) RfS-06/PD&C/2024-25 of July 2025. They are examples, not a survey. State tenders differ, and yours governs.
- **Qbits data:** the public datasheets for the QB-225K-EHV and QB-320K-EHV, and for the QB-70 to 110KTLC-Pro family. These are image-only PDFs that we read by eye. We also used `products.ts` on this site.
- **Grid rules and architecture:** we do not repeat them here. The Central Electricity Authority (CEA) connectivity tables and the string-versus-central comparison are in [string vs central inverter for 1 to 5 MW plants](/blog/string-vs-central-inverter-india/). The 800 Vac output class is in [1500 V string inverters with 800 Vac output](/blog/fifteen-hundred-volt-string-inverter-eight-hundred-vac/).

## Is PM-KUSUM still open for a new project? Checked 31 October 2026

As of 31 October 2026, a new project can proceed only on narrow terms. Financial closure is due by 30 November 2026, and completion is extended to 31 March 2027 only for projects with a PPA or NTP dated on or before 31 December 2025.

| Question | What the primary documents say | Source and date |
| --- | --- | --- |
| Completion deadline | Extended to 31 March 2027, but only for projects where the PPA was signed or the NTP issued on or before 31 December 2025 | MNRE OM, 28 March 2026 |
| Does it apply to all components? | Yes. The Ministry replied in Parliament that the timeline is extended to 31 March 2027 for all components | Lok Sabha USQ 1613, 29 July 2026; MNRE letter, 25 May 2026 |
| Can a project's own commissioning date be moved? | Requests for an extension of a project's scheduled commissioning date are governed by its PPA or NTP, the MNRE sanction validity and the guidelines | MNRE letter, 25 May 2026 |
| Financial closure | Last date for Component A and Component C is 30 November 2026, with documentary evidence from the lender or promoter | MNRE OM, 28 September 2026 |
| Further extension | "No further extension of the timeline for completion of projects under PM-KUSUM shall be granted beyond 31.03.2027" | MNRE OM, 28 September 2026 |
| The successor scheme | The March OM calls PM KUSUM 2.0 "in the proposal stage" and says committed liabilities will be subsumed in it | MNRE OM, 28 March 2026 |
| Later official word on PM KUSUM 2.0 | A Lok Sabha reply says "The Expenditure Finance Committee for PM KUSUM 2.0 was held on 21.04.2026." It does not say 2.0 is approved | Lok Sabha USQ 3911, 12 August 2026 |

Three limits to keep in view.

1. **As of 31 October 2026 we found no MNRE or PIB document approving PM KUSUM 2.0 or publishing its guidelines.** The official statements we found are the Lok Sabha reply above and a PIB release of 10 March 2026, in which the Minister said the Government is "preparing PM-KUSUM 2.0, which will include a dedicated 10 GW Agri-PV component". Newspaper reports quote outlays. We did not use them, because they are not primary sources. Anything you read about 2.0 should be treated as unconfirmed until MNRE publishes it.
2. **Some trade reports quote a 30 September 2026 financial-closure date.** We did not find it in the 28 March 2026 memorandum as we opened it. The 28 September 2026 memorandum sets 30 November 2026, so we use the memoranda.
3. **A project without a PPA or NTP dated on or before 31 December 2025 has no completion date under these extension documents.** Whether a state agency will still award it, and on what terms, is a question for that agency.

Everything below that depends on scheme paragraphs cites the document and the date checked.

## Which PM-KUSUM component are you selecting an inverter for?

PM-KUSUM raises three different inverter questions, one for each plant type in the table.

| Variant | What it is (guidelines of 17 January 2024, checked 30 October 2026) | Inverter question |
| --- | --- | --- |
| Component A | Ground or stilt-mounted plants of 500 kW to 2 MW, preferably within 5 km of the substation, with a 25-year PPA at a pre-fixed levelised tariff, built by a farmer, group or developer (para 4.1 to 4.6) | String or central at 0.5 to 2 MW, DC:AC under the PPA, 11 kV interface, DISCOM tests |
| Component C, feeder level (FLS) | A solar plant that supplies an agriculture feeder, connected at or near the distribution substation, with no capacity cap in the guidelines (para 6.4.1) | The same questions as Component A, with the tender's own spec (DHBVN and PEDA are examples below) |
| Component C, individual pump (IPS) | The farmer's grid-connected pump is solarised, with PV up to two times the pump kW (para 6.1, 6.3) | A solar pump controller, not a plant inverter. See the Component C section |

Component B, standalone off-grid pumps, is outside this post.

## Component A inverter: string or central at 500 kW to 2 MW

Component A caps a plant at 2 MW, and the guidelines allow smaller plants in specific cases. That puts the whole scheme below the roughly 3 MW point where [the string-versus-central post](/blog/string-vs-central-inverter-india/) says central inverters begin to fit. The reasons carry over. Central blocks come in steps of 1 to 3 MVA. A single block failure is a large share of output. A rural site often has no spares room.

Two Component A-specific points matter more than the architecture.

- **Many small plants, one DISCOM.** A DISCOM buys from plants at many substations. In our reading, a repeatable monitoring and test pack is easier for it to run than a different one per plant. String inverters with RS485, a two-wire serial communication port, give one device type to document per plant.
- **Rural service reach.** A fault on a string unit is a 100 kg replacement. A fault on a central station is a crane and a specialist. Ask who attends within what time at your site, and get it in writing (see the site section).

The 1500 V class helps when the plant is at the top of the range. A 1 MW to 2 MW array on a 1500 V string inverter uses fewer, longer strings and fewer AC cables. The cold-morning open-circuit voltage (Voc) limit is explained in the 1500 V post.

## What DC:AC ratio and CUF work under a Component A tariff PPA?

Under a tariff-based Component A PPA, you are paid per kWh delivered at the delivery point, up to the contracted capacity. Extra DC capacity therefore helps only as far as it fills the inverter's AC limit. How far depends on three definitions that differ by document.

- **Model PPA (2019 guidelines, annexed).** CUF is calculated on the contracted capacity at the delivery point: energy in MWh divided by contracted MW times 8,766. The minimum CUF in the guideline text is 15% a year, with shortfall compensation. The DISCOM need not buy energy beyond the contracted capacity. If the plant's peak exceeds the contracted capacity and disturbs the system at the injection point, the renewable power generator (RPG) must cut the excess and may pay charges (clauses 4.3.1 and 4.3.2).
- **MSEDCL's Component A RfS (December 2022).** CUF on contracted capacity again, and the declared CUF cannot be below 15% a year. Capacity is quoted in MW (AC).
- **PEDA's feeder-level RfS (August 2024).** One clause defines CUF on contracted capacity at the delivery point. The project particulars define annual CUF as energy divided by installed capacity in kWp times 8,760. The same RfS says there is no limit on DC capacity, but AC injection cannot exceed the allocated MW.

Read the clause before you size the array. A plant that clears 15% on a contracted-AC basis can fail the same figure on a kWp basis, and the reverse is also true.

For feeder-level plants, the consolidated 2024 guidelines say that "no restrictions" are to be made on installing DC capacity higher than the contracted AC capacity "to help achieve higher CUF". DHBVN's RfS also tells the contractor to add DC capacity for first-year module degradation, because CUF calculations do not factor it in. For Component A, where a model PPA is used, the 4.3.2 limit above is the practical ceiling.

Three inverter-side consequences follow.

1. **Cap the AC output at the contracted value.** Several datasheets print a maximum output power above the rated power. The Qbits QB-100KTLC-Pro sheet prints 100 kW rated and 110 kW maximum output power, and the QB-320K-EHV prints 320 kW rated and 352 kVA maximum output. If the plant can inject above contract, the PPA's excess-generation clause applies. Ask how the active power limit is set and held at the rated value: on the inverter, in the app, or from a plant controller.
2. **The nameplate is read at a temperature.** DHBVN's RfS defines the rated AC capacity of the power conditioning unit (PCU, the inverter) as its output at 50 degrees Celsius. A unit that derates at 45 degrees clips more on summer afternoons. Neither Qbits datasheet prints a derating curve, only an operating range up to 60 C, so ask for the curve at your design ambient. The [summer derating guide](/blog/solar-inverter-summer-derating-india/) lists what to request, and the [DC oversizing guide](/blog/dc-oversizing-in-solar/) covers the clipping side.
3. **Do the maths on the paid boundary.** Revenue is energy at the delivery point. Include transformer and cable losses in the energy you compare, not only the inverter's DC-to-AC figure.

## Worked example: an illustrative 1 MW Component A plant

These assumptions are ours and illustrative, not a project, and not an energy simulation. Replace them with your site's PVsyst or equivalent result.

- **Contracted capacity:** 1,000 kW AC at an 11 kV delivery point, held at 1,000 kW by an active power limit.
- **Inverter efficiency:** a flat 98.5%.
- **Array output:** on a clear day the array peaks at 0.85 kW per kWp, after temperature, soiling, mismatch and DC losses, over a half-sine day of 11 hours.
- **Day mix:** 40% clear days, 35% partly cloudy days at 65% of the clear-day peak, and 25% overcast or monsoon days at 30%. This gives about 1,526 kWh per kWp a year before clipping.
- **CUF** is shown on the contracted 1,000 kW, using 8,766 hours.

| DC:AC | Array (kWp) | Energy delivered (MWh a year) | Energy clipped | CUF on 1,000 kW | Added vs 1.0 (MWh) |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 1,000 | 1,503 | 0.0% | 17.1% | 0 |
| 1.2 | 1,200 | 1,804 | 0.0% | 20.6% | 300 |
| 1.3 | 1,300 | 1,930 | 1.3% | 22.0% | 427 |
| 1.4 | 1,400 | 2,041 | 3.0% | 23.3% | 537 |
| 1.5 | 1,500 | 2,143 | 5.0% | 24.4% | 639 |

Each extra 100 kWp gains less than the one before. In this model, the steps from 1.2 to 1.3, 1.3 to 1.4 and 1.4 to 1.5 add about 1,263, 1,107 and 1,019 kWh per added kWp a year. At an illustrative tariff of Rs 3.50 per kWh (a placeholder, not a state tariff; your Letter of Award (LoA) tariff replaces it), that is about Rs 4,420, Rs 3,875 and Rs 3,567 per added kWp a year. For a simple payback, divide your own installed cost per added kWp (modules, structure, DC cable, land share) by those figures. Then add first-year degradation.

Two things this table shows that a rule of thumb hides. At a ratio of 1.0 the plant sits at 17.1% CUF, only about two points above the 15% minimum. A bad year or a month of curtailment can then trigger shortfall compensation. And at the paid boundary, the first 20% of oversizing is nearly free of clipping. The useful ratio for your site depends on how often your array peaks above the inverter limit.

Unit counts for the same 1 MW boundary, from the datasheets:

| | Design A: 100 kW string units | Design B: 320 kW string units |
| --- | --- | --- |
| Units | 10 x [QB-100KTLC-Pro](/our-products/QB-70-110KTLC-Pro/) | 3 x [QB-320K-EHV](/our-products/QB-225-320K-EHV/) |
| Rated AC | 1,000 kW | 960 kW (4% below the 1 MW contract, so the plant would be contracted at 0.96 MW or add another unit) |
| Max output power | 110 kW each, 1,100 kW in total | 352 kVA each, 1,056 kVA in total |
| AC voltage and current | 400 Vac, 160 A each on the datasheet (sum 1,600 A); the July 2026 catalogue prints 158.8 A for the QB-100KTLC | 800 Vac, 254 A each (sum 762 A) |
| Max DC input power | 150 kW each (ratio up to 1.5) | 480 kW each (ratio up to 1.5) |
| At a ratio of 1.3 | 130 kWp per unit | about 416 kWp per unit (1,248 kWp in total) |
| Weight | 92 kg | 116 kg |

The 800 Vac design roughly halves the LV current and cable copper, which matters because this plant has its own dedicated 11 kV line and transformer. The [800 Vac post](/blog/fifteen-hundred-volt-string-inverter-eight-hundred-vac/) covers the transformer winding and the CEA 650 V line. The transformer rating is for your designer to fix. The sums of the maximum outputs above (1,100 kVA and 1,056 kVA) are the starting inputs, not a recommendation.

To test either design against your own substation, LoA capacity and site temperature, [send the project details to Qbits](/contact-us/) for a quote per model and quantity.

## Which evacuation voltage and transformer interface does the plant need?

The guidelines put the connection at the substation. The 2019 text says plants up to 2 MW may connect at the 11 kV side. The developer lays a dedicated 11 kV line and builds the bay and switchgear, and the DISCOM helps with right of way. The 17 January 2024 text says the developer lays a dedicated 11 or 33 kV line to the substation. The model PPA defines the delivery point as the 11 kV or higher side of the 33/11 kV substation, with metering there (checked 30 October 2026).

What that means for the inverter:

- **The line is yours.** Voltage rise along the dedicated line and transformer tap range are part of your design, not the DISCOM's.
- **Pick the LV voltage first.** 400 Vac inverters need more LV copper than 800 Vac ones, and the transformer winding must match. The 800 Vac post works through the trade-off. Check that the 800 Vac option, if you consider it, is acceptable to the DISCOM's transformer and protection practice.
- **A common line is possible.** If more than one bidder is awarded at the same substation, the guidelines let them share a line with the DISCOM's approval. Each plant should still keep its own limit at its own meter.

## What rural weak grids and DISCOM tests ask of the inverter

Rural 11 kV feeders can see voltage rise at noon when plants inject, frequent supply interruptions, and slow restoration (general engineering experience, not a scheme finding). The scheme's own documents shape what the inverter must do.

- **Must-run status.** The DISCOM is to give solar plants under the scheme must-run status. It is also to keep the feeders on during sunshine hours (guidelines of 17 January 2024, para 4.12.2, checked 30 October 2026).
- **Backdown is paid, a trip may not be.** The 2019 model PPA pays minimum generation compensation only for backdown evidenced by the competent authority. It pays nothing where the backdown is for grid security or equipment safety (clause 4.9.2). Whether your PPA treats an inverter trip on a high-voltage reading as grid unavailability or as your loss is a legal reading of your PPA. Plan on the second.
- **Commissioning is a physical inspection.** The guidelines have a DISCOM committee inspecting within three days of the call and certifying commissioning. The tests it applies come from the state's PPA and grid code, which we did not obtain.

A tender spec is the best evidence of what a DISCOM asks. DHBVN's RfS for a Haryana feeder-level plant asks the inverter for the items in the first column below. The two right-hand columns show what the Qbits datasheets print against each row.

| DHBVN RfS-06/PD&C/2024-25 asks (checked 30 and 31 October 2026) | QB-225/320K-EHV datasheet | QB-70 to 110KTLC-Pro datasheet |
| --- | --- | --- |
| European efficiency of at least 98% | 98.51% and 98.52% | 98.1% to 98.2% by model |
| IP65 | IP66 | IP66 |
| Maximum input voltage 1500 V | 1500 V maximum DC | 1100 V maximum DC, so it does not meet this row as printed |
| Operating frequency 47.5 to 52 Hz | Grid frequency range printed as 45 to 55 Hz | Same, 45 to 55 Hz |
| Power factor control 0.9 lag to 0.9 lead | Adjustable 0.8 lead to 0.8 lag | Adjustable 0.8 lead to 0.8 lag |
| THD under 3% at full load | Under 3% | Under 2% |
| Rated AC capacity at 50 degrees Celsius | Operating range up to 60 C; no derating curve printed | Same |
| Active power limit with adjustable ramp rate | Not printed | Not printed |
| Reactive power from a set-point | Power factor range printed; set-point control not printed | Same |
| Low and high voltage ride-through per CEA | Not printed | Not printed |
| Dedicated communication interface to SCADA (supervisory control and data acquisition) | Wi-Fi; RS485 or GPRS optional | Same |
| Registration with the Bureau of Indian Standards (BIS) under the quality control order | Ask for the certificate for the exact model | Ask for the certificate for the exact model |

The datasheet columns say only what the printed sheets say. They are not test reports, and a printed range is not a statement about full-power operation across that range. The rows marked not printed are not a statement that the feature is absent. They are the items to get in writing before you bid.

The AC voltage window also matters at the extremes. The EHV sheet prints 640 to 920 Vac around 800 V, and the Pro sheet prints 310 to 480 Vac around 400 V. Check the trip settings your DISCOM wants against those windows. The CEA table for under-33 kV connections, including 110% and 80% voltage trips, is in the [string-versus-central post](/blog/string-vs-central-inverter-india/).

On the quality control order, MNRE's PM-KUSUM Division wrote on 30 May 2025 asking for strict compliance with the registration order. It noted that the order applies to solar inverters up to 100 kW from 1 January 2024. DHBVN's RfS asks for registration without a size line. Confirm with the agency which units your tender expects to be registered. This post makes no claim about any Qbits registration. The Chief Electrical Inspector to Government (CEIG) side of commissioning is in the [CEIG inspection post](/blog/ceig-inspection-solar-plant-inverter-checks/).

## What monitoring, RMS and SCADA requirements apply?

Component A and C plants report to a state data platform. The MNRE Remote Monitoring System specification for Components A and C (dated 15 July 2020, hosted on the portal, checked 30 October 2026) asks for:

- RS485 Modbus RTU between the monitoring unit and the inverter or string combiner box, "to ensure interoperability irrespective of make";
- cellular connectivity upstream (GSM, GPRS, 2G to 4G), with MQTT data in JSON format, TLS-secured;
- local storage of at least one year of data if the network drops;
- two energy meters, a bi-directional grid meter and a generation meter, read over DLMS on RS232;
- inverter fault, status and asset data: ratings, serial number, model, and the communication module's IMEI.

Tenders add to this. MSEDCL's Component A RfS requires SCADA data to its control room for 0.5 to 2 MW plants, and an ABT (availability based tariff) energy meter with telecommunication. It also says it shall be possible to control inverter active and reactive power. DHBVN requires a dedicated inverter interface for SCADA and data to the state load despatch centre. PEDA requires integration of the plant's monitoring data with the KUSUM portal for 25 years.

Against the two datasheets: Wi-Fi is standard, and RS485 or GPRS is optional. Neither sheet prints the protocol or a register map. So order the RS485 option. Ask for the Modbus register document, and ask whether a plant controller can write active power limit, reactive power and ramp settings over RS485. The datasheets do not state it. The register-map questions are set out in the [Modbus RS485 and SCADA integration guide](/blog/inverter-modbus-rs-scada-integration-ci-om/).

## Site conditions: heat, dust, spares, handling, theft

- **Ambient temperature.** Use the nameplate-at-50-degrees question above. Both sheets print an operating range up to 60 C. The EHV sheet's lower limit differs from other Qbits documents, so quote only the upper figure.
- **Dust and enclosure.** Both sheets print IP66 and intelligent forced-air cooling. A fan-cooled unit in a dusty rural site still needs a filter and cleaning schedule. DHBVN's RfS asks for the unit to be "tropicalized", with exhaust fans and ducting suited to extreme site conditions. It also asks for string inverters in the open to sit under a canopy or below the modules. Its maintenance schedule includes dust filters and temperature control equipment at buildings housing the PCU.
- **Spares and service reach.** DHBVN asks bidders for a spares list with mean time between failures (MTBF) and mean time to restore (MTTR), and for mandatory spares at the project site. Ask the inverter vendor for the nearest stocked spare and the service partner's distance to your site. Ask for the arrival time in writing.
- **Transport and handling.** The sheets print 92 kg (QB-100KTLC-Pro), 96 kg (QB-225K-EHV) and 116 kg (QB-320K-EHV). A unit of 92 to 116 kg is a crew-and-hoist job, not a one-person lift. On a site with a soft or uneven track, plan the lift path and vehicle access.
- **Theft.** The guidelines do not set an anti-theft standard for Component A plants. The model PPA requires the developer to carry an Industrial All Risk policy, and the IPS section requires a five-year AMC with insurance cover including theft. That is the scheme's position. Practical measures such as fencing, lighting, a serial-number register and a monitoring alert on a communication loss are our suggestions, not scheme rules.

## Component C inverter: feeder-level plants and pump controllers

**Feeder-level solarisation.** The 2024 guidelines allow a plant of any size for a feeder, connected at the substation at 11 kV or higher. Component A-style selection and PPA terms apply (para 6.4.1 and 6.4.5). The inverter logic is the Component A logic above, with the tender's own spec. The 2024 text also says components must follow applicable BIS and MNRE specifications and MNRE quality control guidelines. It says the balance of system should be indigenous, with the vendor declaring imported components. Ask the vendor for written domestic-content declarations if your tender requires them. This post makes no claim about any Qbits model on that point.

**Individual pump solarisation (IPS).** This is where a plant inverter is the wrong default. The guidelines describe two modes:

1. the pump runs on solar and the grid, with net metering; or
2. the pump runs on solar only, with the motor-pump set replaced by an AC or DC solar pumping system "as per MNRE specification for standalone solar pump". When the pump is not running, the solar power can be fed to the grid "through suitable grid-tied inverter".

In the solar-only mode the pump runs from a solar pump controller. A grid-tied inverter serves only the export portion, and only if the state tender asks for one. In the net-metering mode the guidelines leave the equipment architecture to the state tender.

The MNRE pump specification of March 2023 defines the controller as the unit that converts the array's DC into DC or AC for the motor, with maximum power point tracking (MPPT), protection and remote monitoring. It says the controller power capacity should be at least equal to the solar panel capacity, not the pump capacity. It asks for IP65 with the monitoring unit, an isolator between panels and controller, and cellular monitoring with geo-tagging. The portal's RMS specification asks for RS485 Modbus RTU between the monitoring unit and the pump controller.

On 12 August 2026 MNRE invited comments on a draft specification for solar pump controllers that includes grid-feeding and grid-interactive modes. A draft is not in force, and we did not use its numbers.

For a developer or EPC bidding on pump-level work, the practical rule is:

- read the SIA's tender for the controller or drive named, and do not substitute a string inverter;
- if the tender names a separate grid-tied inverter for the export portion, treat it as its own line with its own approvals;
- treat Qbits string inverters as relevant to Component A and to feeder-level plants, not to IPS pump drives.

## PM-KUSUM inverter selection checklist for tender specs

Use this as the list to take to the SIA or DISCOM and the inverter vendor. Items marked "ask" are not printed on the Qbits datasheets we read.

| Item | What to settle | Source of the ask |
| --- | --- | --- |
| Scheme status | PPA or NTP date on or before 31 December 2025; financial closure by 30 November 2026; completion by 31 March 2027 | MNRE OMs 28 March, 25 May, 28 September 2026 |
| Contracted capacity | AC at the delivery point, and the CUF denominator in your RfS and PPA | Model PPA; MSEDCL; PEDA |
| Minimum CUF and shortfall | The stated minimum and the compensation formula | Model PPA clause 4.3.1; MSEDCL |
| Active power limit | A fixed cap at the contracted value, with ramp setting (ask) | PPA 4.3.2; DHBVN 4.7.1 |
| Rated AC at design temperature | Output at 50 degrees Celsius or your site design figure (ask for curve) | DHBVN 4.3.1 |
| Evacuation voltage | 11 kV or 33 kV, dedicated line length, transformer winding | Guidelines para 4.8 |
| LV voltage | 400 Vac or 800 Vac, with cable and transformer consequences | 800 Vac post |
| Voltage and frequency windows | Trip thresholds and reconnect time agreed in writing | CEA text; state grid code |
| Reactive power | Power factor range and set-point control (ask) | DHBVN 4.7.2 |
| Ride-through | Low and high voltage ride-through where the tender asks (ask) | DHBVN 4.7.3 |
| Communication | RS485 option, Modbus register map, SCADA and RMS interface (ask) | MNRE RMS spec; MSEDCL 5.3; DHBVN 4.4.8 |
| Meters | ABT or bi-directional meter, generation meter, DLMS | MNRE RMS spec; MSEDCL 5.1 |
| Standards and registration | BIS registration where the tender and order require it; type test reports from accredited labs | DHBVN 4.1 and 4.9.1; MNRE OM 30 May 2025 |
| Enclosure and cooling | IP rating, fan and filter maintenance, canopy or shed | DHBVN 4.4.6 and 4.4.10 |
| Spares and service | Spares list with MTBF and MTTR, site stock, service partner distance | DHBVN spares clauses |
| Domestic content | Declaration where the tender requires it | Guidelines paras 6.3.3 and 6.4.6 |
| Theft and insurance | Industrial All Risk policy; theft cover for IPS | Model PPA Article 8; guidelines para 6.3.6 |
| Pump-level work | The named pump controller, not a string inverter | Guidelines para 6.3.1; MNRE 2023 spec |

For the quotation side of this list, the [RFQ template for EPC projects](/blog/solar-inverter-rfq-template-epc/) turns the items into a request to send to a vendor.

## What this post could not check

- **PM KUSUM 2.0.** We found no MNRE or PIB approval or guidelines as of 31 October 2026, so this post states nothing about its outlay, guidelines or start date. The only official statements we found are the 10 March 2026 PIB release and the 12 August 2026 Lok Sabha reply quoted above.
- **Your state's Component A PPA and RfS.** We opened one Component A RfS (MSEDCL, 2022) and two feeder-level RfSs. We did not open current Component A documents for Rajasthan, Madhya Pradesh, Haryana, Telangana or Himachal Pradesh. These states carry most of the installed Component A capacity in the Lok Sabha annexure of 29 July 2026. The 2019 model PPA clauses quoted here are the template; your state's PPA may differ.
- **State grid codes and DISCOM supply codes.** Not obtained. The CEA tables are in the earlier post, and the DISCOM names the text that applies.
- **Qbits capabilities that the datasheets do not print.** Derating curve, ride-through, active power limit and ramp control, set-point reactive power, Modbus register map, and certificates for each exact model. We state none of them. We also read the July 2026 Qbits catalogue on 31 October 2026. It prints no derating curve, ride-through, active power limit or Modbus register map in the on-grid model tables, and it has no page for the QB-225K-EHV or QB-320K-EHV.
- **The illustrative plant.** The yield, day mix, tariff and DC:AC table are arithmetic on stated assumptions. They are not an energy simulation and not a Qbits result.
- **Draft and consultant-prepared documents.** The pump controller specification is a draft listed on 12 August 2026. According to its own disclaimer, the RMS specification was prepared by a consultant. It is hosted on the portal and dated 15 July 2020, so check whether a newer version applies.

## Next steps for your PM-KUSUM inverter shortlist

Settle the scheme dates and the PPA's capacity and CUF definitions first. Then fix the evacuation voltage and the LV class. Shortlist string inverters that print the windows your tender asks for, and take the "ask" rows to each vendor in writing. To have a unit count and an AC layout tested against your own substation, LoA capacity and site temperature, [send the project details to Qbits](/contact-us/). Quotes are per model and quantity. To read the exact figures for the models in your shortlist, start from the [datasheet library](/download-datasheets/).
