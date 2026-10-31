---
title: "1500 V String Inverters with 800 Vac Output: When They Make Sense"
seoTitle: "1500V String Inverter, 800 Vac Output: When It Fits"
excerpt: "What a 1500 V DC, 800 Vac string inverter changes against 1100 V and 400 V units: string length, AC current, transformer winding, the CEA 650 V line and safety."
description: "1500V string inverter with 800 Vac output for Indian utility EPCs: cold-Voc string length, AC current, transformer winding, CEA 650 V rules and limits."
category: "EPC"
date: 2026-10-30
readTime: "18 min"
image: "/og/blog-fifteen-hundred-volt-string-inverter-eight-hundred-vac.webp"
author: "Keyur Rakholiya"
keywords:
  - 1500v string inverter
  - 1500v dc string inverter
  - 800v ac output inverter
  - 800 vac string inverter transformer
  - 1500v vs 1100v solar inverter
  - utility scale string inverter india
  - 1500 v solar bos india
relatedSlugs:
  - string-vs-central-inverter-india
  - how-many-inverters-for-hundred-kw-to-one-mw-rooftop
  - ceig-inspection-solar-plant-inverter-checks
  - inverter-voltage-string-vs-mppt-in-solar-inverters
  - solar-inverter-rfq-template-epc
  - dc-oversizing-in-solar
  - solar-inverter-summer-derating-india
---

A 1500V string inverter (1500 V DC input, 800 Vac output) makes sense on a ground-mount plant that connects at medium voltage. There you already buy a step-up transformer, and the site is large enough for long strings and long AC runs to matter. It does not make sense on a tight rooftop, on a plant that connects at 415 V, or where nobody on the project has worked above 650 V before. The rest of this post shows the working: the DC side, the AC side, the transformer, the Indian 650 V rule and the site safety routine.

Qbits sells string inverters, including a 1500 V / 800 Vac model, and publishes this post, so read it with that interest in mind. We give no prices because we have none to source, and we say where we could not check something.

| What changes | 1100 V DC, 400 V AC string unit | 1500 V DC, 800 Vac string unit |
| --- | --- | --- |
| Modules per string (illustrative, 600 Wp module, 5 degrees Celsius site) | 20 | 28 |
| AC current for the same kVA | baseline | about half |
| Transformer LV winding | 400 V or 415 V, a distribution-type duty | 800 V, to be specified with the vendor |
| AC circuit under the CEA 2023 safety regulations | at or below 650 V | above 650 V |
| Everything in the DC path | rated for 1100 V | must be rated for 1500 V, link by link |

## What this post is built on

- **Qbits data:** the public datasheet for the QB-225K-EHV and QB-320K-EHV (a PDF on this site, file created 25 July 2025 according to its metadata, with no revision date printed), plus the product catalogue data on this site. The AC voltage figures come from the datasheet only: the catalogue data on this site does not list an AC output voltage, and the July 2026 catalogue PDF has no page for the EHV models.
- **Indian rules:** the Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations, 2023, gazetted on 8 June 2023. We read a web-archive copy of the CEA gazette PDF because the live link returned a 404 when we checked.
- **Standards:** IEC webstore scope pages for the standards named below, and the preview text of IEC 62109-1:2010 for its scope clause. We did not read the paid standards in full.
- **Module and string numbers:** illustrative assumptions, stated where used.

The companion post, [string vs central inverter for 1 to 5 MW plants](/blog/string-vs-central-inverter-india/), compares architectures on a 2 MW plant. This one stays inside the string-inverter choice and asks only which voltage class to buy.

## DC side: how much longer can a 1500V string be?

A module's open-circuit voltage (Voc) rises as the cell gets colder, by an amount set by its temperature coefficient. The string must stay under the inverter's maximum DC voltage, and under the module's maximum system voltage, on the coldest morning. The glossary entry for [open-circuit voltage](/glossary/open-circuit-voltage/) has the basics.

Illustrative module: 600 Wp, Voc 50 V at 25 degrees Celsius, Voc coefficient of minus 0.27% per degree Celsius, Vmp 42 V with a coefficient of minus 0.34% per degree, string current about 14 A. These are our assumptions, not a datasheet.

Cold Voc per module is 50 x (1 + 0.0027 x temperature drop). Then divide the voltage limit by it and round down.

| Coldest cell temperature | Cold Voc per module | Max modules at 1100 V (string Voc) | Max modules at 1500 V (string Voc) |
| --- | --- | --- | --- |
| 5 degrees Celsius (a Gujarat-type site) | 52.7 V | 20 (1,054 V) | 28 (1,475.6 V) |
| Minus 20 degrees Celsius (a hill or high-altitude site) | 56.1 V | 19 (1,065.4 V) | 26 (1,458.0 V) |

What the table shows:

- **String length grows by about 40%** at the warm site (28 against 20) and about 37% at the cold one (26 against 19). The same array then needs about 29% fewer strings at the warm site. That is the saving in string cable, string terminations and inverter inputs.
- **The margin at 28 modules is thin.** 1,475.6 V leaves 24.4 V, or 1.6%, below 1500 V. Whether you accept that depends on the margin rule in your design basis, for irradiance overshoot and Voc tolerance. Dropping to 27 modules gives 1,422.9 V, a 5.1% margin, at the cost of the shorter string. We have not applied a margin rule from a standard here.
- **The cold-site string is shorter at every voltage,** so the benefit narrows but does not disappear.

What the EHV datasheet gives for fitting strings:

| EHV datasheet item (printed) | Value |
| --- | --- |
| Maximum DC input voltage | 1500 V |
| MPPT voltage range | 500 to 1500 V |
| Starting voltage | 550 V |
| Recommended MPPT operating voltage | 1080 V |
| MPPT inputs, strings per MPPT | 12 on the 225 kW model, 2 strings per MPPT |
| Maximum DC input current | 40A*12 printed on the 225 kW model: 40 A on each of 12 MPPTs, the same pattern as 30A*8 on the 8-MPPT model on the Qbits catalogue page for 80 to 125 kW |
| Maximum DC input power | 337.5 kW on the 225 kW model |

Now check the illustrative string against that table. At a hot cell temperature of 65 degrees Celsius, Vmp falls to about 36.3 V per module, so a 28-module string works at about 1,016 V. That is inside the 500 to 1500 V window and above the 550 V start. Two strings of 14 A on one MPPT draw 28 A, under the 40 A input.

A 28-module string is 16.8 kWp, so 20 strings reach 336 kWp, just inside the 337.5 kW DC power limit. The power limit, not the 24 string inputs, therefore caps the array on a 225 kW unit. How far to push the DC to AC ratio is a clipping question, covered in the [DC oversizing guide](/blog/dc-oversizing-in-solar/). The [inverter voltage guide](/blog/inverter-voltage-string-vs-mppt-in-solar-inverters/) covers string voltage against MPPT range.

## AC side: the current halves

For the same power, line current is power divided by (root 3 x voltage). Double the voltage and the current halves. The datasheets show it:

| Datasheet (Qbits) | Rated grid voltage | Maximum output | Maximum output current | Amps per kVA |
| --- | --- | --- | --- | --- |
| QB-225K-EHV | 800 V | 247.5 kVA | 178.7 A | 0.72 |
| QB-125KTLC (400 V family, for comparison) | 400 V | 137.5 kVA | 199.3 A | 1.45 |

The EHV sheet lists a grid voltage range of 640 to 920 Vac, which is minus 20% to plus 15% of 800 V. The 400 V sheet lists 310 to 480 Vac.

What this means for cable, as a worked example. Take the 247.5 kVA output of one EHV unit, a 100 m run in copper, and a 185 mm2 conductor per phase. Illustrative values: copper resistivity 0.0220 ohm mm2 per metre at 90 degrees Celsius (from the 20 degree value of 0.017241 and a coefficient of 0.00393 per kelvin), unity power factor, reactance ignored.

| Same 247.5 kVA, same cable | At 800 V | At 400 V |
| --- | --- | --- |
| Line current | 178.7 A (datasheet) | about 357 A (calculated) |
| Voltage drop over 100 m | 3.7 V | 7.4 V |
| Voltage drop as a share of nominal | 0.46% | 1.84% |

Current halves, so the volts lost halve. Because the supply voltage also doubled, the percentage drop falls to a quarter. Turned around, holding the same percentage drop at 400 V needs about four times the conductor cross-section (740 mm2 in place of 185 mm2). If the cable is chosen on current-carrying capacity instead of drop, the saving is nearer one half. So the copper at 800 V is between half and a quarter of the 400 V requirement, depending on which limit governs.

We have not priced it. Cable sizing for your site must use the cable maker's own current ratings and installation factors, as the [AC cable sizing method](/blog/solar-ac-cable-sizing-inverter-to-acdb/) sets out.

## Transformer: one winding, half the LV current, half the fault level

Every plant connecting at 11 kV or 33 kV needs a step-up transformer. With 400 V units the low-voltage (LV) winding is 400 V or 415 V. With 800 V units it is 800 V, and the transformer must be specified for it. Settle the winding voltage with the transformer vendor before you fix the inverter model, and use the datasheet's 640 to 920 Vac window as the tolerance. That a transformer with an 800 V winding is a specified duty rather than a catalogue item is our engineering judgement, not a vendor statement, so test it with your own transformer supplier.

Why it matters, with an illustrative 2.5 MVA transformer at 6% impedance fed from a strong grid (an assumption):

| 2.5 MVA transformer | 400 V LV winding | 800 V LV winding |
| --- | --- | --- |
| Rated LV current | about 3,608 A | about 1,804 A |
| Prospective LV fault current (rated current divided by 0.06) | about 60 kA | about 30 kA |
| Phase-to-earth voltage on the LV side | about 231 V | about 462 V |

Three practical consequences, all for your switchgear and transformer vendors to confirm:

- **Fewer LV winding splits.** A 3,600 A LV bus is why 400 V plants often split inverters across more than one transformer or a double-winding transformer. At 800 V one winding can carry roughly twice as many inverters for the same current.
- **A lower LV fault level,** which eases the breaking-capacity and busbar rating of the LV panel.
- **A higher voltage rating on everything touching that panel.** Each inverter's AC breaker must show a rated operational voltage that covers 800 V on its nameplate. A breaker rated 690 V cannot be used here, and the same goes for AC isolators, busbar insulation, the SPD on the AC side and the transformer LV terminations.

## The 650 V line in the Indian safety regulations

You may have heard that voltages above 650 V count as "extra high voltage" in India. We did not find that wording in the primary text. The 2023 CEA safety regulations, which suppress the 2010 set, do not define classes such as "extra high voltage" or "high voltage". They work with a single line: Chapter V is titled "Safety provisions for electrical installations and apparatus of voltage not exceeding 650 V", and Chapter VI "Safety provisions for electrical installations and apparatus of voltage exceeding 650 V". The only voltage class the regulations define by name is "high voltage direct current", at 100 kV and above.

A 400 V AC circuit sits in Chapter V. An 800 Vac circuit sits in Chapter VI. On a plain reading, regulations 46 to 48 then apply to the apparatus on that circuit. Among their requirements:

- **Regulation 46(2):** live parts within reach must be protected to prevent danger, and where a transformer is used, a point of the lower-voltage circuit must be earthed or otherwise protected against becoming charged by contact with the higher-voltage circuit.
- **Regulation 47(1):** isolators and their breakers must be interlocked, isolators and earthing switches must be interlocked, and doors giving access to live parts must be interlocked so they cannot open until the parts are dead, discharged and earthed.
- **Regulation 47(2):** overcurrent protection and earth fault or leakage protection that automatically disconnects the supply.
- **Regulation 48:** no new apparatus, cable or supply line above 650 V is commissioned unless it has had site tests as per the relevant standards, with test, trip and maintenance records kept.
- **Regulation 45(4)** lists regulations 46 to 53 among those an installation needing inspection must comply with before supply starts.

Two cautions apply. First, the text does not say separately how the 650 V line applies to the DC array. A 1100 V DC array is already above 650 V, so the DC side is not newly caught by moving to 1500 V. What the 800 Vac output changes is the AC collection side.

Second, whether the Electrical Inspector inspects the plant at all depends on the voltage and capacity thresholds each state notifies. The [CEIG inspection post](/blog/ceig-inspection-solar-plant-inverter-checks/) covers that. We are not giving a legal reading. Ask your Electrical Inspector and your DISCOM which regulations they will apply to the 800 V panel, and put the answer in writing before you order.

Regulation 121 (safety requirements for solar installations) applies at both voltages. It asks, among other things, for readily accessible disconnection at combiner boxes, a surge protective device with arc extinguishing capability on every combiner box, earth fault protection and insulation monitoring for arrays and inverters, cables in trenches, and fencing of at least 1.8 m on ground-mount plants. The EHV datasheet lists insulation resistance monitoring, residual current detection, surge protection and an integrated DC switch. That is a list of features, not a statement that your installation meets regulation 121.

## Site safety routine at 1500 V and 800 V

- **Touch voltage:** 462 V phase to earth on the 800 V side against 231 V on the 400 V side. The array's open-circuit voltage at the cold morning above is 1,475.6 V across the string. Treat the whole plant as above 650 V when you write the permit-to-work.
- **PPE and tools:** regulation 21(2) requires personal protective equipment, tools and devices suited to the working voltage and protection from injury due to arc flash, all conforming to relevant standards. IEC 60900:2018, the standard for insulated hand tools, covers use up to 1,000 V AC and 1,500 V DC. A 1500 V DC array has almost no headroom under that limit, so buy meters, probes and tools marked for 1500 V DC, not 1000 V.
- **Arc flash:** an 800 V bus is not automatically worse or better than a 400 V bus. The incident energy depends on the available fault current (30 kA against 60 kA in the example above) and the clearing time of the upstream protection. Ask the switchgear vendor for an arc flash study at each voltage, with the protection settings you will use. IEC's catalogue summary of Amendment 1 (2025) to IEC 62548-1 notes a new annex covering anti-PID equipment and arc flash. We did not read it.
- **Isolation:** the datasheet lists an integrated DC switch but prints no voltage or utilisation category for it, so ask for that rating at 1500 V DC. On the AC side, use the interlocked isolator and breaker arrangement from regulation 47(1) and lock out the DC side as well, because the array stays live whenever there is light.
- **Insulation monitoring:** IEC's summary of IEC 62548-1:2023 says its clause on safety was revised to cover shock protection, including array insulation monitoring and earth fault detection. Keep the inverter's monitoring enabled and commission-test it, because a first earth fault on a high-voltage array is the one you want to catch before the second.

## Every link in the DC path needs the 1500 V rating

One 1000 V part in a 1500 V string is the weak link. The standards below are the ones whose IEC pages we opened and whose scope we confirmed.

| Part | What to ask for | Scope we confirmed |
| --- | --- | --- |
| Module | Maximum system voltage of 1500 V printed on the module datasheet; Voc and temperature coefficient for your cold-Voc calculation | Not confirmed: IEC 61730-1:2023 webstore page prints no voltage figure |
| DC cable | Rated for 1.5 kV DC, with the standard on the drum | IEC 62930:2017: rated DC voltage up to and including 1.5 kV |
| Connectors | Rated 1500 V DC and the current of your string | IEC 62852:2014: up to 1,500 V d.c., up to 125 A per contact |
| String fuses, if used | gPV fuse-links with a 1500 V DC rating | IEC 60269-6:2010: nominal voltages up to 1,500 V d.c. |
| Combiner boxes and external DC isolators, if used | 1500 V DC rating of the box, the isolator and the SPD | Check each datasheet |
| Inverter | Safety standard and certificate for the exact model | IEC 62109-1:2010 clause 1.1.1 covers equipment up to 1,500 V d.c. at the PV source circuit and up to 1,000 V a.c. |
| AC breaker, isolator, busbar | Rated operational voltage of 800 V or more | Check each nameplate |
| Transformer | 800 V LV winding and a tolerance that covers 640 to 920 V | Specify with the vendor |

**Availability in India:** we did not find a current, sourced survey of 1500 V module, cable, connector, fuse or combiner supply in India, so we make no claim either way. The IEC documents show the ratings exist as standards. Whether a given Indian supplier stocks them, with test reports, at your lead time is a procurement question. Put 1500 V DC on every line of the bill of materials and ask for the datasheet page that proves it.

## What the QB 225/320K-EHV datasheet says, and what it leaves open

For a utility EPC choosing a 1500V string inverter, the [QB 225/320K-EHV](/our-products/QB-225-320K-EHV/) covers the 225 kW and 320 kW ratings. Its catalogue data and datasheet give:

- **DC:** 1500 V maximum, 500 to 1500 V MPPT window, 12 MPPTs as standard (14 or 16 optional on the 320 kW model).
- **AC:** 800 V rated, 640 to 920 Vac, 178.7 A on the 225 kW model and 254 A on the 320 kW model.
- **Efficiency:** up to 99.02% maximum, with a Euro efficiency of 98.51% on the 225 kW and 98.52% on the 320 kW model.
- **Enclosure and weight:** IP66, 96 kg (225 kW) and 116 kg (320 kW).
- **Communication:** Wi-Fi, with RS485 or GPRS optional.
- **Temperature:** an operating range up to 60 degrees Celsius. The sheet prints no derating curve. The product record on this site gives no lower limit, and Qbits sheets for other models print a different lower limit from the EHV sheet, so quote only the upper limit and ask for the curve at your design ambient. The [derating guide](/blog/solar-inverter-summer-derating-india/) lists what to request.
- **Standards:** the datasheet lists IEC 62109 under safety standards, along with others. It does not say which part, and it does not carry a certificate. Ask for the certificates for the exact model, as you would for any inverter.

The datasheet does not state the DC switch rating, ride-through, ramp-rate control or a plant-controller interface. Ask for them in writing.

## Where a 1500V string inverter with 800 Vac output does not fit

- **Small rooftops.** A 28-module string is a long run of panels that must share orientation and shading. Most roofs break up into rows that are not multiples of 28, so you end up with partial strings that cost the 1500 V benefit.
- **Connection at 415 V.** If your DISCOM's connection voltage for the capacity is 415 V, an 800 V output needs a step-down transformer to 415 V, which adds a transformer, its losses and its protection to a plant that would otherwise need none. The connection voltage for a given capacity is set by your DISCOM and state, so check it first.
- **No team ready to work above 650 V.** Chapter VI duties, permit-to-work, interlock procedures and 1500 V tools are extra work and cost for a team doing it the first time.
- **Very small plants.** The transformer, switchgear and procedure overhead of an 800 V design is spread over few kilowatts, and the plant may connect at a lower voltage anyway.
- **Very cold sites.** String length shrinks as the cold-Voc table above shows (26 modules at minus 20 degrees Celsius). The 1500 V benefit narrows. It does not vanish.
- **A transformer vendor who cannot supply an 800 V winding** on your delivery schedule. That is a procurement answer, not an engineering one, but it will decide the project.

## When does a 1500V string inverter make sense?

| Choose 1500 V DC / 800 Vac when | Stay at 1100 V DC / 400 V when |
| --- | --- |
| Ground-mount, flat site, long strings fit | Rooftop or broken, shaded layouts |
| MV connection at 11 or 33 kV, so a step-up transformer is already in the plan | 415 V connection, no step-up transformer planned |
| LV panel current or fault level is a design problem at 400 V | The LV panel at 400 V is small and routine |
| The EPC has handled Chapter VI duties and 1500 V work before | First plant above 650 V for the team |
| You can get 1500 V on every DC line item with datasheets | A DC-path part is only available at 1000 V |
| You want fewer inverters and fewer AC termination points | You want smaller blocks and a lower cost per outage |

If the left column describes your plant, the [QB 225/320K-EHV product page](/our-products/QB-225-320K-EHV/) lists the datasheet figures to check against your own string and transformer numbers.

## Eight questions to put in the RFQ

Add these to the inverter and BoS enquiry. The [inverter RFQ template](/blog/solar-inverter-rfq-template-epc/) shows the format that asks for values with a source page.

1. Maximum DC voltage and the cold-Voc string length you assume for the site's lowest temperature.
2. Maximum modules per MPPT input and the DC power limit per unit.
3. Rated AC voltage, tolerance and maximum current per unit, from the datasheet.
4. Transformer LV winding voltage and tap range the inverter vendor assumes.
5. Rated operational voltage and breaking capacity of every AC breaker and isolator.
6. DC isolator rating at 1500 V DC and the standard it is tested to.
7. Certificate for the exact inverter model, and the standard part it covers.
8. Arc flash study scope for the AC panel at 800 V, and the tools and PPE rating required for DC and AC work.

## What this post could not check

- **Indian supply of 1500 V parts.** No current sourced survey was found, so no availability claim is made.
- **CEA text.** We read a web-archive copy of the 2023 gazette PDF, not the live page. We did not check for later amendments or state notifications of the "notified voltage". Our reading of regulations 46 to 48 as applying to an 800 Vac inverter circuit is a plain reading, not legal advice or an inspector's ruling.
- **Standards.** The IEC pages show scope lines only. We read IEC 62109-1's scope in a preview of the IEC text, and nothing else in full. A second edition of IEC 62109-1 is in preparation per the IEC catalogue.
- **Qbits data.** The datasheet has no revision date. The lower temperature limit is not quoted here, and the DC switch rating, ride-through and derating are not stated.
- **Numbers.** Module data, string current, cable length, transformer impedance and copper resistivity are illustrative assumptions. No Qbits project result is implied.

## Next step

Decide the connection voltage and the transformer winding first, then fix the string length from your own module's cold Voc. If the plant is ground-mount and connects at medium voltage, price a 1500 V / 800 Vac design beside a 1100 V / 400 V one, with cable, LV panel, transformer, tools and PPE in both. Start from the [QB 225/320K-EHV page](/our-products/QB-225-320K-EHV/) to read the model data, or [send the project details to Qbits](/contact-us/) for a quote per model and quantity.
