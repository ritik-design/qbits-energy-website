---
title: 'Solar Irradiance Data in India: How to Compare States'
excerpt: 'State-wise solar irradiance data for India: sourced GHI, peak sun hours and optimum tilt for 36 states and UTs, plus the generation formula.'
description: Sourced annual GHI, daily peak sun hours, optimum tilt and specific yield for a named reference site in every Indian state and union territory, with the formula that turns irradiance into expected units.
category: Industry
date: 2026-06-05
updatedDate: 2026-09-24
readTime: 12 min
image: /blog-images/solar-inverter-sizing.svg
author: Keyur Rakholiya
keywords:
- solar irradiance data india statewise
- india peak sun hours by location
- ghi solar data india
- solar radiation india map
faqs:
- q: What is the solar irradiance in India state by state?
  a: Daily global horizontal irradiance at state capitals and reference cities ranges from about 4.00 kWh/m²/day at Itanagar in Arunachal Pradesh to about 5.53 kWh/m²/day at Jodhpur in Rajasthan, according to the Global Solar Atlas (Solargis data version 2.2.68, queried 24 September 2026). Annual GHI over the same set runs from 1,460 to 2,020 kWh/m². These are point values at named coordinates, not state averages. A single state can vary by 7% or more between two of its own cities, so always re-query your actual site.
- q: Which Indian state has the highest solar irradiance?
  a: On annual GHI, Rajasthan leads among the reference sites, with Jodhpur at 2,020 kWh/m² per year, followed by Gujarat with Ahmedabad at 2,010 kWh/m², according to the Global Solar Atlas (Solargis, queried September 2026). On direct normal irradiance and on specific yield, Ladakh wins instead. Leh records 2,192 kWh/m² of DNI and 1,921 kWh/kWp of modelled specific yield, because its cold air reduces module temperature losses. The answer therefore depends on which metric you ask for.
- q: How many peak sun hours does India get?
  a: Peak sun hours equal daily irradiation in kWh/m²/day, because the reference irradiance in standard test conditions is 1,000 W/m². On a horizontal plane, Indian reference sites deliver roughly 4.0 to 5.5 peak sun hours per day. On a fixed array set at the local optimum tilt, the same sites deliver about 4.4 to 6.3 peak sun hours per day. Use the plane-of-array figure for a tilted rooftop, not the horizontal one.
- q: Is GHI the right number for a rooftop solar array?
  a: No. GHI is measured on a horizontal surface, and almost no rooftop array is horizontal. For a fixed-tilt array you need plane-of-array irradiation, sometimes labelled GTI, which projects the direct beam onto the actual module plane and adds the diffuse and ground-reflected components. Using GHI for a tilted array under-predicts output by roughly 2% in Thiruvananthapuram and about 8% in Delhi, on Global Solar Atlas data. Only use GHI for a first-pass comparison between sites.
- q: How do I convert irradiance into expected units per year?
  a: Multiply the DC array size in kWp by the annual plane-of-array irradiation in kWh/m², then multiply by the performance ratio, then divide by the 1 kW/m² reference irradiance. A 5 kWp array in Ahmedabad at 2,195 kWh/m² plane-of-array and a performance ratio of 0.775 gives about 8,500 kWh per year. Always state which irradiation figure and which performance ratio you used. Skipping the performance ratio overstates output by about 29%.
- q: Why does my solar system generate less than the irradiance data suggests?
  a: Atlas irradiance is the energy arriving at the module plane, not the energy leaving your meter. Soiling, module temperature, shading, mismatch, cabling loss, inverter conversion loss, inverter clipping, downtime and long-term degradation all sit between the two. Soiling alone costs 3% to 5% of annual production globally, according to IEA-PVPS Task 13 Report T13-21 (2022). Rooftop arrays also run hotter than the ground-mounted reference case that most atlas yield models assume.
- q: Does the highest irradiance state give the best solar returns?
  a: Not automatically. Annual GHI varies by only about 38% across all Indian reference sites, while retail tariffs, net metering rules and export compensation vary by state electricity regulatory commission and by DISCOM. The central PM Surya Ghar subsidy is the same nationwide at ₹30,000 per kW for the first 2 kW and ₹18,000 for the third kW, capped at ₹78,000, according to MNRE (scheme approved February 2024). A high tariff in a moderate-irradiance state often beats a low tariff in a high-irradiance one.
- q: What tilt angle should I use for solar panels in India?
  a: The old rule of tilt equal to latitude holds well up to roughly 25 degrees north, then overshoots. Global Solar Atlas optimum tilt is 11 degrees at Thiruvananthapuram (latitude 8.5), 22 degrees at Mumbai (latitude 19.1), and 26 degrees at New Delhi (latitude 28.6). Haze and monsoon cloud reduce the value of steep winter-biased tilt in the northern plains. Ladakh is the exception, where clear dry air pushes the optimum to 35 degrees.
seoTitle: 'India Solar Irradiance Data by State: GHI, Peak Sun Hours, Tilt'
relatedSlugs:
- india-solar-statistics-2026-data
- solar-yield-india
- solar-inverter-sizing
- east-west-roof-solar-design
---

Most pages that promise state-wise solar irradiance data for India publish a table with no dataset, no version, and no coordinates. That table cannot be checked, so it cannot be used in a quote or a bank submission. This guide takes the opposite approach. Every number below comes from one named dataset, queried at one named location, on one named date.

The dataset is the [Global Solar Atlas](https://globalsolaratlas.info/), operated by the World Bank Group and ESMAP using Solargis data. We queried a reference site in all 28 states and all 8 union territories on 24 September 2026. The response carried Solargis model version 2.2.68, last updated 1 April 2026, with a satellite record running through 2025.

You will get four things here. First, the difference between GHI, DNI, DHI and plane-of-array irradiation, and which one a fixed-tilt rooftop actually needs. Second, a complete sourced table with annual GHI, daily peak sun hours, optimum tilt, and modelled specific yield. Third, the formula that turns irradiance into expected units, with a worked example. Fourth, the reasons your meter will read lower, and why the sunniest state is rarely the best place to buy.

> **TL;DR**
> - Daily GHI at Indian reference sites runs from 4.00 kWh/m²/day (Itanagar) to 5.53 kWh/m²/day (Jodhpur), a spread of only 38%, according to the Global Solar Atlas (Solargis v2.2.68, queried 24 September 2026).
> - Rajasthan leads on GHI, but Ladakh leads on specific yield at 1,921 kWh/kWp, because cold air cuts temperature losses.
> - Peak sun hours are numerically the same as daily irradiation in kWh/m²/day, because standard test conditions use 1,000 W/m².
> - A fixed-tilt array needs plane-of-array irradiation, not GHI. Using GHI under-predicts by about 8% in Delhi and 14% in Leh.
> - The atlas's own ratio of specific yield to plane-of-array irradiation runs 0.775 to 0.836 across our 36 sites, which is a defensible performance ratio band.
> - In Punjab, Delhi and Ladakh the worst solar month is January, not a monsoon month.
> - The central PM Surya Ghar subsidy is flat nationwide, so tariff and net metering rules move payback more than irradiance does.

**Short version.** Indian solar irradiance ranges from about 1,460 to 2,020 kWh/m² per year, or 4.0 to 5.5 kWh/m²/day, depending on location, per Global Solar Atlas data queried in September 2026. Rajasthan and Gujarat sit at the top, and the north-eastern hill states at the bottom. For a tilted rooftop, use plane-of-array irradiation rather than GHI, then apply a performance ratio near 0.78.

## GHI, DNI, DHI and POA: which one your roof needs

Four measures get used interchangeably online. They are not interchangeable. Picking the wrong one is the single most common error on irradiance pages.

| Measure | Surface it applies to | Use it for |
| --- | --- | --- |
| [GHI](/glossary/ghi/) | Horizontal plane | Comparing sites, screening markets |
| DNI | Plane normal to the sun's beam | Concentrating solar, some tracker studies |
| DHI | Horizontal plane, sky-scattered light only | Explaining cloud, haze and monsoon behaviour |
| [Plane-of-array](/glossary/plane-of-array/) (GTI) | The actual module plane | Fixed-tilt PV yield, rooftop quotes |

For a fixed-tilt rooftop array, the answer is plane-of-array irradiation. Your modules are not horizontal, so GHI is the wrong plane. Plane-of-array irradiation projects the direct beam onto the tilted surface, then adds the diffuse component the tilted plane can see, plus ground-reflected light.

A second frequent error is writing GHI = DNI + DHI. The beam term has to be projected first. The correct relation is GHI = DNI × cos(solar zenith angle) + DHI, subject to the measurement convention. Also keep units straight. Irradiance is a power flux in W/m². Irradiation is energy, in kWh/m² per day, month or year.

## Peak sun hours: the same number in a different coat

**Peak sun hours** are not the hours of daylight, and not the hours when the sun is above some brightness threshold. They are the number of hours at exactly 1,000 W/m² that would deliver the same total energy as the real day.

Standard test conditions define 1,000 W/m² as the reference irradiance. So the arithmetic collapses. Divide daily irradiation of 5.5 kWh/m² by 1 kW/m² and you get 5.5 [peak sun hours](/glossary/peak-sun-hours/). The number is identical; only the unit changes.

That equivalence is why peak sun hours are useful for mental arithmetic and useless as a separate data source. If a page gives you peak sun hours without saying which plane they sit on, it has told you nothing new. Horizontal peak sun hours and plane-of-array peak sun hours differ by up to 14% in India, as the table below shows.

## State-wise solar irradiance data for India

All rows come from the Global Solar Atlas (World Bank and ESMAP, Solargis model v2.2.68, layers updated 1 April 2026, satellite record through 2025), queried at the named city on 24 September 2026. Daily GHI equals annual GHI divided by 365.25. Peak sun hours are given at the local optimum tilt, facing south. Specific yield is the atlas's modelled PVOUT for crystalline silicon.

| State / UT | Reference site | Annual GHI (kWh/m²) | Daily GHI (kWh/m²/day) | Peak sun hours at optimum tilt | Optimum tilt (°) | Specific yield (kWh/kWp/yr) |
| --- | --- | --- | --- | --- | --- | --- |
| Rajasthan | Jodhpur | 2,020 | 5.53 | 6.16 | 29 | 1,746 |
| Gujarat | Ahmedabad | 2,010 | 5.50 | 6.01 | 26 | 1,701 |
| Puducherry | Puducherry | 2,006 | 5.49 | 5.61 | 13 | 1,607 |
| Lakshadweep | Kavaratti | 1,974 | 5.40 | 5.53 | 13 | 1,603 |
| Kerala | Thiruvananthapuram | 1,970 | 5.39 | 5.48 | 11 | 1,587 |
| Ladakh | Leh | 1,966 | 5.38 | 6.29 | 35 | 1,921 |
| Tamil Nadu | Chennai | 1,949 | 5.34 | 5.47 | 14 | 1,565 |
| Dadra and Nagar Haveli and Daman and Diu | Daman | 1,945 | 5.33 | 5.70 | 22 | 1,631 |
| Telangana | Hyderabad | 1,929 | 5.28 | 5.57 | 21 | 1,589 |
| Karnataka | Bengaluru | 1,928 | 5.28 | 5.46 | 17 | 1,578 |
| Goa | Panaji | 1,925 | 5.27 | 5.53 | 20 | 1,589 |
| Maharashtra | Mumbai | 1,910 | 5.23 | 5.56 | 22 | 1,593 |
| Madhya Pradesh | Bhopal | 1,886 | 5.16 | 5.60 | 25 | 1,598 |
| Chhattisgarh | Raipur | 1,863 | 5.10 | 5.47 | 24 | 1,561 |
| Andhra Pradesh | Vijayawada | 1,859 | 5.09 | 5.31 | 18 | 1,510 |
| Jharkhand | Ranchi | 1,837 | 5.03 | 5.44 | 25 | 1,570 |
| Andaman and Nicobar Islands | Port Blair | 1,836 | 5.03 | 5.16 | 15 | 1,491 |
| Odisha | Bhubaneswar | 1,778 | 4.87 | 5.15 | 22 | 1,477 |
| Jammu and Kashmir | Srinagar | 1,773 | 4.86 | 5.45 | 30 | 1,621 |
| Haryana | Hisar | 1,764 | 4.83 | 5.29 | 27 | 1,516 |
| Mizoram | Aizawl | 1,758 | 4.81 | 5.28 | 27 | 1,531 |
| Himachal Pradesh | Shimla | 1,753 | 4.80 | 5.48 | 32 | 1,640 |
| Uttarakhand | Dehradun | 1,750 | 4.79 | 5.39 | 31 | 1,564 |
| Uttar Pradesh | Lucknow | 1,732 | 4.74 | 5.09 | 24 | 1,461 |
| Chandigarh | Chandigarh | 1,719 | 4.71 | 5.19 | 28 | 1,498 |
| Bihar | Patna | 1,715 | 4.70 | 4.99 | 23 | 1,438 |
| Delhi | New Delhi | 1,714 | 4.69 | 5.10 | 26 | 1,466 |
| Manipur | Imphal | 1,711 | 4.68 | 5.17 | 28 | 1,524 |
| Punjab | Ludhiana | 1,695 | 4.64 | 5.09 | 27 | 1,468 |
| West Bengal | Kolkata | 1,682 | 4.60 | 4.87 | 22 | 1,408 |
| Tripura | Agartala | 1,673 | 4.58 | 4.90 | 24 | 1,425 |
| Assam | Guwahati | 1,629 | 4.46 | 4.84 | 26 | 1,407 |
| Meghalaya | Shillong | 1,598 | 4.38 | 4.75 | 27 | 1,417 |
| Sikkim | Gangtok | 1,547 | 4.24 | 4.63 | 28 | 1,380 |
| Nagaland | Kohima | 1,523 | 4.17 | 4.58 | 29 | 1,381 |
| Arunachal Pradesh | Itanagar | 1,460 | 4.00 | 4.40 | 29 | 1,282 |

Read the last two columns together. Leh ranks sixth on GHI but first on specific yield, ahead of Jodhpur. Shimla ranks twenty-second on GHI but eleventh on specific yield. Cold air is worth more than raw sunlight in a PV model.

## Why this is a table of cities, not a table of states

A state average needs a stated averaging method: population weighting, land-area weighting, or a sampling grid. Almost no published Indian irradiance table declares one. That makes the numbers unverifiable.

Point values at named coordinates are reproducible. Anyone can open the atlas, enter the same coordinates, and get the same figure from the same dataset version. That is the whole reason this table names the city in a second column.

Within-state spread is real and worth respecting. In Rajasthan, Jaipur reads 1,882 kWh/m² per year while Jodhpur reads 2,020, a gap of 7.3%. In Maharashtra, Mumbai reads 1,910 and Nagpur 1,876. The Global Solar Atlas publishes its solar resource layers at 9 arcsecond resolution, roughly 250 m, so there is no reason to accept a state-level proxy for a specific roof.

## Turning irradiance into expected generation

The governing equation is short. Annual AC energy equals array DC rating, times annual plane-of-array irradiation, times the [performance ratio](/glossary/pr/), divided by the 1 kW/m² reference irradiance.

**E (kWh/yr) = P_dc (kWp) × H_poa (kWh/m²/yr) × PR ÷ G_ref (1 kW/m²)**

**Worked example.** A 5 kWp rooftop array in Ahmedabad, fixed at 26 degrees, facing south.

1. Array rating: 5 kWp.
2. Plane-of-array irradiation at 26 degrees: 2,195 kWh/m² per year (Global Solar Atlas, Solargis v2.2.68, queried 24 September 2026).
3. Performance ratio: 0.775, taken from the same dataset's own ratio of specific yield to plane-of-array irradiation at this site.
4. Reference irradiance: 1 kW/m².
5. Result: 5 × 2,195 × 0.775 ÷ 1 = 8,506 kWh per year.

Cross-check that against the atlas's published specific yield for Ahmedabad, 1,701 kWh/kWp. Multiplied by 5 kWp, that gives 8,505 kWh per year. The two agree, which is what a sound method should do.

Now the two ways this goes wrong. Substitute GHI, 2,010 kWh/m², and you get 7,789 kWh, 8.4% low. Drop the performance ratio entirely and you get 10,975 kWh, 29% high. Both errors appear in real quotes.

## Why your meter reads less than the atlas

Atlas irradiation describes energy arriving at the module plane. Your meter records energy leaving the inverter. Nine loss mechanisms sit in between, and a credible estimate names each one.

| Loss mechanism | Reference magnitude | Source |
| --- | --- | --- |
| Soiling | 3% to 5% of annual production globally | IEA-PVPS Task 13, Report T13-21 (2022) |
| Module temperature | 0.35 to 0.47 % of rated power per °C above 25 °C | NREL PVWatts Version 5 Manual, Dobos (2014) |
| Shading | 3% default for a preliminary model | NREL PVWatts Version 5 Manual (2014) |
| Module mismatch | 2% | NREL PVWatts Version 5 Manual (2014) |
| DC and AC cabling | 2% wiring, 0.5% connections | NREL PVWatts Version 5 Manual (2014) |
| Light-induced degradation | 1.5% | NREL PVWatts Version 5 Manual (2014) |
| Nameplate tolerance | 1% | NREL PVWatts Version 5 Manual (2014) |
| Availability and downtime | 3% | NREL PVWatts Version 5 Manual (2014) |
| Long-term degradation | median 0.5% to 0.6% per year for crystalline silicon | Jordan, Kurtz, VanSant and Newmiller, NREL (2016) |

Those PVWatts defaults combine multiplicatively, not additively, to 14.08% total system loss. Inverter conversion loss and inverter clipping sit on top of that, and clipping depends on your DC to AC ratio rather than on the weather.

For a defensible [performance ratio](/glossary/pr/) band, use the atlas against itself. Across all 36 reference sites, the ratio of modelled specific yield to plane-of-array irradiation runs from 0.775 at Ahmedabad to 0.836 at Leh. Annual air temperature at those two sites is 27.0 °C and minus 0.2 °C respectively. Treat 0.78 to 0.84 as the modelled band, then shade it down for a rooftop, because the atlas models a ventilated free-standing array and a roof runs hotter. Our note on [summer derating in Indian conditions](/blog/solar-inverter-summer-derating-india/) covers that gap.

## Seasonal variation, and why the monsoon is not the whole story

Most pages reduce Indian seasonality to "the monsoon cuts output". That is only true for part of the country. The worst month varies by region, and in the north it is not a monsoon month at all.

| Reference site | Best month (kWh/m²/day) | Worst month (kWh/m²/day) | Worst as % of best |
| --- | --- | --- | --- |
| Ludhiana | May, 6.48 | January, 2.68 | 41% |
| Leh | June, 7.21 | January, 2.96 | 41% |
| New Delhi | April, 6.29 | January, 3.02 | 48% |
| Mumbai | April, 7.02 | July, 3.52 | 50% |
| Jodhpur | May, 7.06 | December, 4.09 | 58% |
| Bengaluru | March, 6.85 | July, 4.05 | 59% |
| Kolkata | April, 6.11 | December, 3.66 | 60% |
| Guwahati | April, 5.18 | January, 3.51 | 68% |
| Thiruvananthapuram | March, 6.47 | November, 4.46 | 69% |

Monthly GHI from the same Global Solar Atlas query, divided by calendar days.

Three regional patterns fall out. In Punjab, Delhi and Ladakh, January is the floor, driven by fog, haze and a low solar altitude. On the west coast and in Karnataka, July is the floor, which is the classic monsoon signature. In Kerala the floor is November, because the north-east monsoon extends the cloudy season past the south-west one.

For context on timing, the India Meteorological Department's revised normals put south-west monsoon onset over Kerala at 1 June, full country coverage by 8 July, withdrawal from north-west India beginning around 17 September, and complete withdrawal by 15 October. Load matching and any battery decision should follow the local monthly curve, not the annual mean.

## Tilt and azimuth: what a flat or east-west roof costs

The old rule says set [tilt](/glossary/tilt-angle/) equal to latitude. Atlas optimum tilt shows that rule works in the south and overshoots in the north.

Thiruvananthapuram sits at latitude 8.5 degrees and its optimum tilt is 11. Mumbai is at 19.1 with an optimum of 22. Bhopal is at 23.3 with an optimum of 25. Then the relationship flattens. New Delhi is at latitude 28.6 with an optimum of 26, and Srinagar is at 34.1 with an optimum of 30. Monsoon cloud and dry-season haze reduce the payoff from a steep winter-biased tilt in the northern plains.

Ladakh breaks the pattern the other way. Leh's optimum is 35 degrees, above its 34.2 degree latitude, because dry clear air keeps direct beam high through the cold months.

A horizontal array gives up the whole tilt gain. Comparing annual GHI against plane-of-array irradiation at optimum tilt, a flat mount costs about 1.5% at Thiruvananthapuram, 2.5% at Chennai, 8.0% at New Delhi, 8.4% at Ahmedabad, and 14.5% at Leh. The penalty rises with latitude, so a flat terrace in Kerala is nearly free and a flat roof in Ladakh is expensive.

An east-west split roof is a different problem, not a worse one. It flattens the daily curve into two lower, wider peaks, which can suit a daytime load profile. It does need separate maximum power point tracking inputs per orientation. We work through that layout in the [east-west roof design guide](/blog/east-west-roof-solar-design/).

## The sunniest state is rarely the best place to buy

This is where irradiance tables mislead buyers. The whole of India fits inside a 38% band on annual GHI, from Itanagar at 1,460 kWh/m² to Jodhpur at 2,020. Exclude the north-eastern hill states and the band narrows to about 20%.

Now compare that with the commercial variables. Retail tariffs are set state by state through each state electricity regulatory commission's tariff order, and slabs differ sharply between a Mumbai residential consumer and a Punjab agricultural one. Net metering, gross metering and export compensation rules also vary by state and by DISCOM, as our [net metering guide](/blog/net-metering-india-complete-guide/) sets out.

The central subsidy, meanwhile, is flat. PM Surya Ghar pays ₹30,000 per kW for the first 2 kW and ₹18,000 for the third kW, capped at ₹78,000, according to MNRE for the scheme approved in February 2024. It does not pay more in Assam to compensate for weaker sunlight, and it does not pay less in Rajasthan.

So the ranking that matters is tariff times exported units, under your DISCOM's rules, minus your installed cost. A 20% irradiance deficit is easily outweighed by a higher tariff slab or a friendlier export rule. Rules change, so verify the current position with your DISCOM before you commit.

## Using irradiance data when you size the system and the inverter

Irradiance sets energy, not electrical limits. That distinction decides which tool you reach for.

1. Size the array from consumption. Work out target annual units, divide by the site's specific yield in kWh/kWp, and you have the DC size in kWp.
2. Constrain it by roof area, shade and your sanctioned DISCOM load. Any one of these can cap the array below the energy-derived size.
3. Choose the DC to AC ratio. Higher irradiance sites and steeper tilts push more hours near the inverter ceiling, which is where clipping enters the economics.
4. Verify the string electrically. String length is governed by module open-circuit voltage at the coldest expected temperature and by current at the hottest, not by an irradiance map.
5. Recheck against the monthly curve. A design that clears the annual test can still clip badly in the peak month.

Step 4 is the one people skip. The [Qbits string sizing calculator](/string-sizing-calculator/) screens module and inverter voltage and current windows using module temperature assumptions. It does not read an irradiance map and it does not forecast annual kWh, so pair it with the yield method above rather than expecting one tool to do both. Our [on-grid inverter range](/on-grid-inverter/) lists the voltage windows those checks need, and the [solar yield guide](/blog/solar-yield-india/) documents the energy side.

## The Bottom Line

Solar irradiance data for India is only as good as its provenance. A number without a dataset, a version, a plane and a coordinate belongs in marketing copy, not in a design file. The table above is reproducible because it names all four.

The physics also rewards precision more than geography. Choosing plane-of-array over GHI is worth up to 14%. Applying an honest performance ratio is worth 29%. Moving to a sunnier state is worth 20%.

- Re-query your own coordinates on the Global Solar Atlas and record the dataset version and the date, then use plane-of-array irradiation at your planned tilt.
- Estimate generation with the full formula, state your performance ratio, and cross-check the result against the atlas's specific yield for the same point.
- Bring your site coordinates, planned tilt and module datasheet to the [Qbits technical team](/contact-us/) and we will help you match the string and inverter windows to that design.
