---
title: "String Inverter vs Central Inverter for 1 to 5 MW Plants in India"
seoTitle: "String vs Central Inverter for 1 to 5 MW in India"
excerpt: "String or central inverters at 1 to 5 MW? A worked 2 MW comparison covers cables, transformer, failure impact, derating, O&M access and CEA rules at each voltage."
description: "String vs central inverter for 1 to 5 MW plants in India: a worked 2 MW comparison of cables, transformer, trip loss, derating, O&M and CEA checks."
category: "EPC"
date: 2026-10-30
readTime: "16 min"
image: "/og/blog-string-vs-central-inverter-india.webp"
author: "Keyur Rakholiya"
keywords:
  - string vs central inverter
  - string inverter vs central inverter
  - central inverter for 2 mw solar plant
  - string inverter for mw scale solar
  - 1500v string inverter vs central inverter
  - mw scale solar inverter selection india
  - central inverter vs string inverter cost
relatedSlugs:
  - how-many-inverters-for-hundred-kw-to-one-mw-rooftop
  - solar-inverter-for-factory
  - dc-oversizing-in-solar
  - inverter-procurement-india
  - solar-inverter-summer-derating-india
  - peak-vs-weighted-inverter-efficiency
  - solar-inverter-rfq-template-epc
---

**String vs central inverter, in short:** below about 3 MW, string inverters are usually the safer choice. Above about 3 MW on flat, uniform ground, central inverters start to earn their place. Between those sizes, the roof or the land decides. That is a rule of thumb, not a law. This post shows the working on one illustrative 2 MW plant, then scales the unit counts to 1, 3 and 5 MW. The [1500 V string inverter guide](/blog/fifteen-hundred-volt-string-inverter-eight-hundred-vac/) covers the higher-voltage string design in more detail.

Qbits sells string inverters (its range on this site tops out at 320 kW) and publishes this post, so read the central-inverter side with that in mind. Every central-inverter figure below is the vendor's own datasheet value and is labelled as theirs. We quote no prices, because we have no sourced price for either type.

| Question | String inverters tend to win when | Central inverters tend to win when |
| --- | --- | --- |
| Where is the plant? | Rooftop, or ground with several tilts, slopes or shaded zones | Flat, uniform ground-mount |
| How big is it? | Up to about 3 MW | About 3 MW and above, where one block is not oversized |
| What does one failure cost? | You want it to stay a small share of output | You have a service team and spares on site |
| What access do you have? | Light units a small crew can replace | One walk-in pad is easier to staff than many units across acres |
| What does the grid office ask? | Modest requirements, per-unit data is fine | Plant-level controls and one integration point matter |

## What this post is built on

- **Central-inverter data** comes from two datasheets we opened: the Sungrow SG3125HV-MV-30 (version 13, copyright 2022, read in a copy hosted by a reseller, because the vendor's page redirected) and the SMA MV Power Station 2660-S2 to 3060-S2 datasheet from SMA's own file server. Both are turnkey stations that put the inverter and the MV transformer in one 20-foot unit.
- **String-inverter data** comes from the public Qbits datasheets for the 225 and 320 kW EHV models and for the 80 to 125 kW TLC family. The model-level facts (1500 V, 12 MPPTs, IP66) also match the product catalogue data on this site. The 800 Vac output comes from the EHV datasheet only: the catalogue data on this site does not list it, and the July 2026 catalogue PDF has no page for the EHV models.
- **Grid rules** are from two CEA texts we read in full or in the relevant parts: the connectivity regulations for distributed generation (2013, amended 2019) and the connectivity-to-the-grid regulations (2007, amended 2013), both as consolidated copies hosted by CBIP.
- **Limits** are listed in the last section. In short: we did not check state grid codes, later CEA amendments or newer drafts, and the plant numbers are arithmetic on stated assumptions, not a real project.

## The illustrative 2 MW plant

These assumptions are ours. Change them for your project.

- **AC target:** 2,000 kW at the point of connection. Ground-mount, flat site.
- **Modules:** 600 Wp, 50 V open-circuit voltage, coefficient of minus 0.27% per degree Celsius, coldest morning 5 degrees Celsius, so cold open-circuit voltage is 52.7 V (the same inputs as in the [rooftop inverter-count post](/blog/how-many-inverters-for-hundred-kw-to-one-mw-rooftop/)).
- **Strings:** 28 modules (16.8 kWp, 1,475.6 V cold) for a 1500 V design, 20 modules (12 kWp, 1,054 V cold) for a 1100 V design. Array of about 2,604 kWp in both cases, so 155 strings at 1500 V or 217 strings at 1100 V.
- **Yield:** 4.5 kWh per kWp per day, used only to convert outages into kilowatt-hours.
- **Layout distances:** average string run of 30 to 35 m to the nearest inverter or combiner, 150 m from each DC combiner to a central inverter, 80 to 100 m from each string inverter to the AC collection point. These drive the cable totals and will differ on your layout.

Three designs, all compared at the same boundary (the inverter terminals):

| | Option A: 125 kW string units | Option B: 225 kW string units | Option C: one central inverter station |
| --- | --- | --- | --- |
| Units | 16 (2,000 kW) | 9 (2,025 kW) | 1 |
| DC design | 1100 V, 217 strings | 1500 V, 155 strings | 1500 V, 155 strings through about 10 combiner boxes of 16 inputs |
| MPPTs in total | 160 | 108 | 2 (Sungrow datasheet) |
| Output voltage | 400 V rated (datasheet) | 800 V rated (datasheet) | 0.6 kV to the integrated transformer (Sungrow datasheet) |
| Unit weight | 85 kg on the datasheet, 92 kg on the July 2026 catalogue page (confirm) | 96 kg | 15 t (Sungrow), under 18 t (SMA) |

Option B uses the [225 and 320 kW EHV string inverter](/our-products/QB-225-320K-EHV/): per its datasheet, 12 MPPTs with two strings each, a 500 to 1500 V MPPT window, and a maximum DC input power of 337.5 kW on the 225 kW model. That is a DC:AC ratio of up to 1.5, so the array above (about 289 kWp per unit) sits inside it. How far to push the ratio on your site is a clipping question; the [DC oversizing guide](/blog/dc-oversizing-in-solar/) covers it.

The central block is the awkward fit at 2 MW. The smallest central ratings in the two datasheets are about 2.4 to 3.1 MVA, depending on ambient temperature. That block is larger than the 2 MW export, so you either pay for AC capacity you cannot export or build a larger array to use it. Central inverters come in steps of 1 to 3 MVA, which is why they fit more naturally as plants grow.

## How many units at 1, 2, 3 and 5 MW

Unit counts are simple division. Block size decides how coarse the plant is.

| AC target | 125 kW string units | 320 kW string units (EHV) | Central station of about 3 MVA class |
| --- | --- | --- | --- |
| 1 MW | 8 | 3 (960 kW) | 1, larger than the plant |
| 2 MW | 16 | 6 (1,920 kW) | 1, larger than the plant |
| 3 MW | 24 | 9 (2,880 kW) | 1 |
| 5 MW | 40 | 16 (5,120 kW) | 2 |
| Largest single block as a share of the plant, 1 / 2 / 3 / 5 MW | 12.5% / 6.25% / 4.2% / 2.5% | 33.3% / 16.7% / 11.1% / 6.25% | 100% / 100% / 100% / 50% |

Where the AC target must be exact (a sanctioned capacity or contract), the tiling matters: three 320 kW units are 960 kW, not 1,000. The [rooftop inverter-count post](/blog/how-many-inverters-for-hundred-kw-to-one-mw-rooftop/) works the tiling arithmetic in detail, so this post does not repeat it.

## DC and AC cable runs

String and central designs move the copper around rather than removing it.

| Conductor-metres (illustrative) | A: 16 x 125 kW | B: 9 x 225 kW | C: central |
| --- | --- | --- | --- |
| String cable to inverter or combiner | 13,020 m (217 strings x 2 x 30 m) | 10,850 m (155 x 2 x 35 m) | 10,850 m (155 x 2 x 35 m) |
| DC trunk from combiners to the inverter | none | none | 3,000 m (10 x 2 x 150 m) of heavier DC cable, up to about 217 A each at an assumed 14 A per string |
| AC from inverters to the collection point | 3,840 m (16 x 3 x 80 m), up to 199.3 A each at 400 V | 2,700 m (9 x 3 x 100 m), up to 178.7 A each at 800 V | inside the station, then MV cable out |
| Total current at the collection voltage | sum of maximum currents 3,189 A at 400 V | sum 1,608 A at 800 V | about 105 A at 11 kV for 2 MW at unity power factor |

Do not add the rows into one number. String cable is light gauge. The DC trunk and AC runs are heavy gauge and cost more per metre. We have not priced either. The [AC cable sizing method](/blog/solar-ac-cable-sizing-inverter-to-acdb/) shows how to size the AC runs.

Three things stand out in the cable table:

- **1500 V on both B and C cuts strings by 29% against option A** (155 against 217). That is the benefit of the higher voltage class, not of central or string architecture.
- **Option A concentrates the problem on the AC side.** A 400 V collection bus carrying about 3,000 A is a large LT panel. Moving the aggregation to 800 V, as option B does, halves the current for the same power.
- **Central trades AC runs for a heavy DC trunk.** Fewer, larger cables, but cut or damage one and a whole combiner block is out.

## Transformer and MV arrangement

Every 1 to 5 MW plant that connects at 11 kV or 33 kV needs a step-up transformer. What differs is the LV winding voltage.

- **Option A (400 V units):** an LV panel with all 16 incomers, then a transformer from 400 V or 415 V to the connection voltage. LV is a common distribution-transformer arrangement.
- **Option B (800 V units):** an 800 V collection panel, then a transformer with an 800 V LV winding. That is a specified duty, not a catalogue distribution item, so settle the winding voltage with the transformer vendor before ordering inverters. Use the datasheet's 640 to 920 Vac grid range when you write the transformer's voltage tolerance.
- **Option C (central station):** the datasheets above put the transformer in the station. Sungrow lists a 0.6 kV to 20 to 35 kV transformer, rated 3,125 kVA with a Dy11 vector group and ONAN cooling. SMA lists 10 to 35 kV nominal and Dy11 as standard. This is the central design's real convenience: one integrated, type-tested unit with MV switchgear (SMA lists arc-fault classification for the MV room under IEC 62271-202) rather than a transformer you source and match.

For plants in the 1 to 5 MW range, that integration is the strongest argument for central inverters, and it counts for more if your EPC has not bought MV equipment before.

## Failure impact and what a trip costs

Capacity offline is share of AC rating. Energy lost is that share times the plant's daily energy times the days down, with plant energy at 2,604 kWp x 4.5 = 11,718 kWh a day.

| One unit down for three days | Share offline | Energy lost (illustrative) |
| --- | --- | --- |
| A: one 125 kW unit of 16 | 6.25% | about 2,200 kWh |
| B: one 225 kW unit of 9 | 11.1% | about 3,900 kWh |
| C: the central inverter | 100% | about 35,200 kWh |

Three points temper the table:

- **A central inverter is not always all-or-nothing.** Sungrow's datasheet advertises a modular design for easy maintenance, which is its claim. Neither datasheet says how much output remains with one power module out, so ask for that in writing.
- **A string inverter fault is a swap. A central fault depends on the part.** A 96 kg string unit can be replaced from a spare with a hoist. A power module in a central station needs the vendor's engineer and a stocked module.
- **Shared parts fail together in both designs.** The transformer, MV switchgear, metering point and plant communications take every inverter behind them offline, as the rooftop post also notes.

The spare itself differs. For strings, the spare is a whole inverter, here about 1 in 9 of the inverter capacity at option B. For central, it is a list of modules and boards. Ask each vendor for the recommended spares list and quote, because Qbits itself quotes per model and quantity.

## Efficiency, derating and cooling

Datasheet efficiency tells you less than it seems to. These are each vendor's own figures, measured at their own conditions:

| Model (vendor's datasheet) | Max efficiency | Euro efficiency | Notes |
| --- | --- | --- | --- |
| Qbits QB-225K-EHV | 99.02% | 98.51% | Curve plotted at 1080 V DC |
| Qbits QB-125KTLC | 98.9% | 98.2% | Other 80 to 110 kW models are 98.6 to 98.7% max, 98.1% Euro |
| Sungrow SG3125HV-MV-30 | 99.0% | 98.7% | Inverter efficiency, transformer separate |
| SMA MVPS 2660-S2 to 3060-S2 | 98.7% | 98.6% | Measured without the internal power supply |

The spread among the 1500 V products is a fraction of a point. At this plant, 0.1 percentage point of weighted efficiency is about 4,300 kWh a year (2,604 kWp x 4.5 kWh x 365 days x 0.001), so a 0.2 point gap is about 8,600 kWh. That is real money, but smaller than the three-day central-inverter outage in the failure-impact table. Euro efficiency is a weighted figure that uses a European irradiance profile, so it is not the same as the peak figure.

Derating matters more than the peak figure on an Indian summer afternoon:

- **Sungrow's datasheet:** 3,125 kVA at 50 degrees Celsius and 3,437 kVA at 45 degrees, with derating above 50 degrees, according to the sheet.
- **SMA's datasheet:** 2,667 kVA up to 35 degrees Celsius and 2,400 kVA at 40 degrees for the SC 2660 UP, which is 10% lower; its optional 50 degree configuration is a separate choice.
- **Qbits EHV datasheet:** an operating range up to 60 degrees Celsius is listed, but the sheet we read prints no derating curve, so it does not say at what temperature output starts to fall. Ask for one for your site's design temperature, and read the [summer derating guide](/blog/solar-inverter-summer-derating-india/) for what to request.

Compare kW at your design ambient temperature, not the nameplate.

Cooling and enclosure differ in kind. The Qbits EHV datasheet lists IP66 and intelligent forced-air cooling. Sungrow lists IP65 for the inverter and IP54 for other parts, with temperature-controlled forced air. SMA lists IP23D for the control rooms, IP54 for the inverter electronics, and 6,500 cubic metres per hour of fresh-air consumption. IP5x means dust-protected and IP6x dust-tight under IEC 60529, so the dusty sites in western India deserve a question about filter cleaning schedules for any fresh-air-cooled station.

## O&M access: rooftop against ground-mount

- **Rooftop:** a 15 to 18 tonne station is not an option on most roofs, so string units are the default at any size. A hoist and a few technicians are enough for a 96 kg unit.
- **Ground-mount with string units:** units sit at the array, so a technician walks to many points, and replacement is light work. The units live outdoors at IP66.
- **Ground-mount with central:** one pad, one cabin, a crane for major work, and a smaller number of places to staff. If you already have a site team and a stocked spares room, this is easier to run. If you do not, one inverter fault becomes a long call-out, so write the restoration clock and spares duty into the [O&M contract](/blog/ci-solar-om-contract-inverter-scope/) before choosing.

## Communication and SCADA

Sungrow's datasheet lists RS485 and Ethernet as standard, with optical fibre optional. The Qbits EHV datasheet lists Wi-Fi, with RS485 or GPRS optional; it does not list Ethernet or name a protocol, so ask for the register map if your SCADA needs one. SMA's datasheet offers a monitoring package as an option.

The count is the difference. A central design has one or two inverter endpoints and one place to put the plant controller. Nine or sixteen string inverters are nine or sixteen endpoints, and reactive-power set-points, ramp limits and curtailment need a plant-level controller sending them to all units. The datasheets we read do not describe a plant controller for either type.

## What CEA and the DISCOM require at this size

Which CEA text applies depends on the voltage at the point of connection, which the DISCOM sets.

| | Below 33 kV (for example 11 kV) | 33 kV and above |
| --- | --- | --- |
| CEA text | Distributed generation connectivity regulations, 2013, amended 2019 | Connectivity to the grid regulations, 2007, amended 2013 |
| Harmonics, DC injection | Harmonic current within IEEE 519; DC injection not above 0.5% of full rated output; flicker within IEC 61000 (regulation 11) | Same three limits (Schedule, Part II-B) |
| Voltage and frequency trips | Over/under voltage trips at 110% and 80% within 2 s; over/under frequency trips at 50.5 and 47.5 Hz within 0.2 s; reconnect only after 60 s of stable voltage and frequency; island detection within 2 s | Not tabulated the same way; frequency range 47.5 to 52 Hz, rated output across 49.5 to 50.5 Hz within plus or minus 5% voltage |
| Reactive power | No capability figure in the text we read | Capable of keeping power factor within 0.95 on either side of unity |
| Ride-through | No curve in the text we read | The curve in the text is for wind stations at 66 kV and above |
| Communication | Facilities as the licensee stipulates (regulation 4(4)); power quality meters at 11 kV and above (11A(7)) | Voice and data facilities as the Load Despatch Centre prescribes (regulation 6(3)) |
| Measurement | Harmonics, DC injection and flicker measured before commissioning and once a year (regulation 8(2)) | At least once a year, dates in the connection agreement |

Four things follow for this decision.

1. **Neither text prefers string or central.** Both speak about the generating station's behaviour at the interconnection point, not about inverter architecture.
2. **The 2013 amendment defines a solar generating unit as each inverter with its modules.** With 16 units that is 16 generating units on paper. Ask the DISCOM what type-test reports it wants per inverter model, because that is a paperwork multiplier for string designs and a single set for central.
3. **Power factor and ramp control are plant-level tests.** The Qbits datasheets list an adjustable power factor of 0.8 on either side of unity, and the Sungrow datasheet lists L/HVRT, reactive power control and ramp-rate control as features, which are its claims. The Qbits sheets we read do not list ride-through or ramp-rate control. Whether either type passes depends on the plant controller and the licensee's own test, so get the requirement in writing at the start.
4. **State grid codes may add requirements.** Regulation 5 of the 2007 text refers to the Grid Code and the State Grid Code as well. We have not read any state's code.

The datasheets also list grid standards such as IEC 61727, EN 50549-1 and VDE-4105, as printed. None of these is an Indian code, so treat that line as test evidence, not as acceptance by your DISCOM. For the approval steps, the [procurement guide](/blog/inverter-procurement-india/) lists the documents to request from any inverter vendor.

## String vs central inverter: which to pick by plant type

- **Rooftop at any size:** string. Weight, access and layout decide it before cost does.
- **Ground-mount below about 3 MW:** string, at 1500 V if the site and modules allow. The block-size problem above makes central hard to fit, and a single failure costs far more.
- **Ground-mount at 3 to 5 MW, flat, uniform, one orientation:** central deserves a real quote beside the string option, particularly if your team will operate it and wants the integrated MV station.
- **Uneven or shaded ground:** string, because each MPPT sees a smaller area. A 225 kW unit with 12 MPPTs gives 12 independent inputs where a central inverter offers one or two. The [shed-by-shed MPPT allocation method](/blog/mppt-allocation-multiple-factory-sheds/) shows how to spend those inputs.
- **Phased build:** string, because you add units in steps instead of buying a block you will not fill for a year.

If you want a unit count and AC layout tested against your own site, voltage level and AC target, [send the project details to Qbits](/contact-us/). Quotes are per model and quantity.

## What this post could not check

- **Central-inverter datasheets are two examples.** They are one Sungrow and one SMA station, a 2022 sheet read through a reseller's copy and an SMA sheet with the suffix "en-20". Other vendors and newer versions differ. Treat the numbers as a pattern, not a market survey.
- **Prices.** We have no sourced price for either type, so no cost-per-MW claim is made. Ask for itemised quotes that include cables, transformer, switchgear and spares for both designs.
- **CEA texts.** We read consolidated copies on CBIP, not the gazette versions, and did not check whether a later CEA regulation has replaced either text. We did not read state grid codes or DISCOM supply codes.
- **Qbits derating, protocol and ride-through detail.** The datasheets do not state them, so we have not claimed them.
- **Plant numbers.** Strings, runs, yield and layout distances are illustrative.
- **Low-temperature limit.** The lower end of the Qbits EHV operating range is not quoted here: the product record on this site gives no lower limit, and Qbits sheets for other models print a different lower limit from the EHV sheet. Check the current datasheet for your exact model before you quote one.

## Next step

Settle the voltage at the point of connection and the AC target first. Then price a string design and, if the plant is 3 MW or more on flat ground, a central design on the same boundary, with cables, transformer and spares in both. When you have those, [send the project details to Qbits](/contact-us/) for a quote per model and quantity, or ask for the exact datasheet figures for the models on your shortlist.
