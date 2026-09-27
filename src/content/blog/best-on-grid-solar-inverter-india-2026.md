---
title: "How to Choose an On-Grid Solar Inverter in India"
excerpt: "What makes a good on-grid solar inverter in India: MPPT count, voltage window, DC input current, export rules, and anti-islanding behaviour."
description: "A specification-led guide to choosing an on-grid solar inverter in India, covering anti-islanding, MPPT and voltage windows, DC input current, export limiting, DC/AC ratio, and commissioning documents."
category: "Buying Guide"
date: 2026-09-23
updatedDate: 2026-09-24
readTime: "18 min read"
image: "/images/hybrid.webp"
author: "Qbits Editorial"
keywords:
  - "best on-grid solar inverter India"
  - "grid-tied solar inverter"
  - "on-grid inverter specifications"
  - "solar inverter datasheet"
faqs:
  - q: "What is the best on-grid solar inverter in India?"
    a: "There is no single best model, because an on-grid inverter is only correct relative to a specific array, phase connection, and DISCOM rule set. The defensible answer is a specification test. A good on-grid unit contains the cold-condition string voltage inside its maximum DC rating, keeps the operating voltage inside its MPPT window, accepts the short-circuit current of the panels actually quoted, holds a published weighted efficiency rather than only a peak figure, and is supported by a service network you can reach. Run that test on the exact SKU and phase, not on a brand name."
  - q: "Will an on-grid solar inverter work during a power cut?"
    a: "No. A pure on-grid inverter shuts down within seconds of losing the grid and produces no output until the supply returns and stabilises. This is required behaviour, not a fault, and it exists to protect line workers from an energised island. If you need power during outages you need a hybrid inverter with a battery, or a separate backup path. Homeowners who expect outage cover from a grid-tied system are the single most common source of post-installation disappointment."
  - q: "What are the grid trip limits for an on-grid inverter in India?"
    a: "Regulation 11(6) of the Central Electricity Authority (Technical Standards for Connectivity of the Distributed Generation Resources) Regulations, 2013, as amended in 2019, requires the inverter to trip above 110% or below 80% of nominal voltage with clearing time up to 2 seconds, and at 50.5 Hz and above or 47.5 Hz and below with clearing time up to 0.2 seconds. It must cease to energise within 2 seconds of an unintended island forming and stay stable for 60 seconds before reconnecting. The same regulation allows a distribution licensee to prescribe a narrower range, so always confirm the local DISCOM settings."
  - q: "How many MPPTs does an on-grid inverter need?"
    a: "Count your roof orientations first. A single unshaded plane needs one maximum power point tracker. Two roof faces, or one face with partial shading, needs two independent trackers so that a weak string cannot pull a healthy string down to its own operating point. Verify that the datasheet says the trackers are independent, since some designs share a single tracker across paralleled inputs. Larger commercial units carry three or more trackers precisely because commercial roofs rarely present one clean plane."
  - q: "What DC/AC ratio should I use for an on-grid system in India?"
    a: "Most Indian rooftop designs land between 1.1 and 1.3 DC watts per AC watt. Oversizing raises morning and evening output and improves the capacity utilisation factor, at the cost of clipping a few midday hours in peak months. Push the ratio too high and you clip real energy and run the inverter hot for longer. Check the manufacturer's own stated maximum DC input power for the SKU before you exceed 1.3, because the warranty terms of some models reference it."
  - q: "What is zero export and when does a DISCOM require it?"
    a: "Zero export, sometimes called export limiting, is a configuration where the inverter throttles its output so that no power flows into the grid. It is delivered with a current transformer or smart meter at the point of supply, feeding a setpoint back to the inverter. DISCOMs commonly require it where net metering is unavailable, where the sanctioned load or transformer capacity will not accept export, or for captive commercial connections. Confirm the requirement in writing before you finalise the inverter, because export limiting needs the right accessory and the right firmware."
  - q: "Should I choose a single-phase or three-phase on-grid inverter?"
    a: "The service connection decides, not the system size. A single-phase connection takes a single-phase inverter. A three-phase connection above roughly 5 kW is normally better served by a three-phase inverter, which keeps the injection balanced across all three phases. Feeding a large single-phase inverter onto one leg of a three-phase supply creates voltage unbalance that many DISCOMs restrict. Check the sanctioned load and phase on your current electricity bill before shortlisting anything."
  - q: "Does the 12-year Qbits warranty apply to every model?"
    a: "Qbits publishes an expandable warranty, and its public datasheets do not define the base term, remedy, registration deadline or exclusions, so obtain the current written warranty for the exact quoted model. Ask for them before payment and read the registration deadline. "
---

Most guides to the best on-grid solar inverter in India rank brands. That is the wrong unit of analysis. One brand ships single-phase and three-phase units, 1.5 kW and 320 kW units, one-tracker and twelve-tracker units. The badge tells you nothing about whether the box in your quotation suits your roof. The specification does.

So this guide skips the leaderboard. It explains what grid-tied operation is electrically, why an on-grid inverter cannot keep your lights on during a power cut, and which datasheet lines separate a sound unit from a marginal one. You get the voltage and current checks, a worked sizing calculation you can repeat with your own panel numbers, the export rules that change the answer, and the handover documents worth refusing to sign without. Residential and small commercial both, because the same physics governs a 5 kW house and a 50 kW factory shed.

> **TL;DR**
> - An on-grid inverter has no backup function. It disconnects within seconds of a grid failure and stays off until supply returns and holds steady for 60 seconds.
> - That behaviour is mandated. CEA Regulation 11(6) sets voltage trip above 110% or below 80% of nominal, and frequency trip at 50.5 Hz and above or 47.5 Hz and below. A DISCOM may prescribe a narrower range.
> - Independent maximum power point trackers matter more than tracker count. Two orientations need two trackers that track separately.
> - Modern Indian panels reach 18.85 A short-circuit current, against a 20 A maximum DC input current on some single-phase inverters. Check that pairing on the datasheet.
> - Peak efficiency is a marketing number. Weighted efficiency across the load range, plus the thermal derating curve, predicts real yield.
> - Export rules decide the unit. Net metering, gross metering, and a zero-export mandate each demand different accessories and firmware.
> - Most Indian rooftops sit between 1.1 and 1.3 DC watts per AC watt. Above that you clip energy you paid for.

**Short version.** A good on-grid solar inverter in India contains your coldest-morning string voltage inside its maximum DC rating, keeps operating voltage inside its tracker window, and accepts the short-circuit current of the panels quoted. It also tracks each roof orientation independently, publishes weighted efficiency and a derating curve, satisfies your DISCOM's export rule, and has a reachable service network. Pick the SKU that passes all seven, not the brand with the best advertisement.

## What an on-grid inverter does, and why it goes dark in a power cut

An [on-grid inverter](/glossary/on-grid-inverter/) converts the DC output of a solar array into AC that is synchronised to the utility supply. It has no energy storage and no independent voltage reference. It measures the grid waveform and pushes current onto it slightly ahead of the grid voltage. Remove the grid and the inverter has nothing to synchronise to, so it stops.

Say that plainly and early, because it is the number one homeowner surprise. A grid-tied system does not back up your house. During a power cut your panels produce nothing usable and your fans stay off, even at noon in May.

This is not a defect, and not a cheap-inverter problem. Every compliant on-grid inverter sold in India behaves this way at every price point. If you need power during outages you need a hybrid unit with a battery, and the tradeoffs are in the [on-grid versus hybrid comparison](/blog/on-grid-vs-hybrid/). What you gain instead is simplicity: fewer components, nothing to replace at year eight, and the highest conversion efficiency of the three topologies.

## Anti-islanding, and what the Indian regulation actually says

The shutdown has a name. **Anti-islanding** is the protective function that detects loss of the utility supply and stops the inverter from energising a dead section of network. Without it, a line worker isolating a feeder for repair could still find that feeder live from a rooftop array. The mechanism is explained in detail in the guide to [anti-islanding protection in solar inverters](/blog/anti-islanding-protection-solar-inverters/).

The thresholds are not vendor preference. Regulation 11(6) of the Central Electricity Authority (Technical Standards for Connectivity of the Distributed Generation Resources) Regulations, 2013, notification 12/X/STD(CONN)/GM/CEA dated 30.09.2013, as amended on 06.02.2019, sets them out.

| Parameter | Requirement under CEA Regulation 11(6) |
| --- | --- |
| Voltage trip | Above 110% or below 80% of nominal, clearing time up to 2 s |
| Frequency trip | At 50.5 Hz and above, or 47.5 Hz and below, clearing time up to 0.2 s |
| Unintended island | Cease to energise within 2 s of island formation |
| Reconnection | 60 s of stable supply required before reconnecting |
| DC injection | No more than 0.5% of full rated output current |

One carve-out matters commercially. The regulation itself permits a distribution licensee to prescribe a narrower range. So a DISCOM can legitimately demand tighter settings than the national floor, and an inverter that cannot be configured to those settings will not clear inspection. Ask the DISCOM for its own technical standard in writing before you buy, not after.

The practical consequence for buyers: an adjustable grid window is worth more than a fixed one, because Indian distribution voltage wanders. The Qbits QB 4.2/4.6/5/5.4/6KTLS single-phase models are listed with a 90 to 290 Vac adjustable grid range, the kind of configurable band that survives a weak feeder without nuisance tripping. Verify the equivalent figure for whatever SKU you are quoted.

## The specifications that separate a good on-grid inverter

Nine lines carry almost all the decision weight. Everything else on a datasheet is secondary.

1. **Maximum DC input voltage.** Must exceed your coldest-morning string open-circuit voltage with margin. Exceed it and you can damage the input stage.
2. **MPPT voltage window.** The operating voltage of every string, on the hottest afternoon and the coldest morning, must sit inside this band.
3. **MPPT count, and whether the trackers are independent.** One per orientation, minimum.
4. **Maximum DC input current per tracker.** Must accept the short-circuit current of the panels quoted, not the panels the brochure assumed.
5. **Weighted efficiency, not only peak.** Peak occurs at one load point you will rarely sit at.
6. **Thermal derating behaviour.** At what ambient does output start falling, and by how much.
7. **Ingress protection rating.** IP66 for anything exposed to driven rain or dust.
8. **Grid voltage and frequency tolerance, adjustable.** See the DISCOM carve-out above.
9. **Reactive power and power factor control.** Not optional on many commercial connections.

Two of these are habitually skipped in Indian quotations. Nobody checks maximum DC input current against the actual panel, and nobody asks for the derating curve. Both cost real energy.

## MPPT count, voltage window, and DC input current

A **maximum power point tracker** continuously adjusts the operating voltage of a string to extract the most power available at that instant. If two strings facing different directions share one tracker, the tracker can only pick one operating point, and the weaker string drags the stronger one off its own optimum. The tradeoffs are worked through in the comparison of [dual MPPT against single MPPT designs](/blog/dual-mppt-vs-single-mppt/).

Read the wording carefully. "Two MPPT inputs" and "two independent MPPTs" are different claims. Qbits lists the QB 4/5/6 KTLD single-phase unit as carrying 2 independent MPPTs at 20 A input per MPPT. The three-phase QB-10KTLC is listed with 2 MPPTs, a 180 to 1000 V tracking window, and an 1100 V maximum DC rating. Larger units scale the tracker count because commercial roofs are rarely one clean plane: the QB 30/33/36/40KTLC-Pro carries 3 trackers, and the QB 80 to 125KTLC range carries 8 to 10 by model.

Now the current problem, which is new and under-discussed. Indian panel short-circuit currents have climbed sharply with G12 format cells. Published datasheet values include 18.85 A on the Adani ASB-M12-132-650, 18.31 A on the Waaree BiN-03-700, and 18.23 A on the Vikram VSMDH.66.680.05. Against a 20 A maximum DC input current, an 18.85 A panel leaves roughly 1.15 A of headroom.

That is thin. Irradiance above 1,000 W/m2, reflected light off a pale roof, and cold clear conditions all push short-circuit current past the nameplate figure, so a design that fits on paper can clamp in practice. Do the check explicitly: read maximum DC input current per tracker off the inverter datasheet, read short-circuit current off the panel datasheet, and confirm the inverter figure is larger with margin. The Qbits 20 A figure is published for the TLS and TLD single-phase series; do not assume it carries across to three-phase SKUs.

## Efficiency: peak, weighted, and what heat does to both

Almost every Indian inverter datasheet prints a maximum efficiency. That is the best number the unit can reach, at one input voltage and one load fraction, on a bench. Qbits publishes it per family, from 98% on the smallest single-phase TLS models to 98.8% on the QB 20 to 30KTLC and 99.02% on the QB 225/320K-EHV utility units. All are stated as maximums, which is exactly what they are.

**Weighted efficiency** is the more useful number. It averages measured efficiency across a spread of load fractions, weighted to reflect how much time a real inverter spends at each. Between two units with the same peak figure, the one with the better weighted figure produces more annual energy, because rooftop arrays spend most daylight hours well below rated output.

Then subtract heat. Every inverter derates above a threshold ambient temperature, cutting output to protect its power stage. In Indian summer conditions that threshold is reached routinely, and the derating curve, not the peak figure, decides your May and June generation. Ask for the curve. An installer who cannot produce it has not read the manual either.

Enclosure rating belongs in the same conversation, because an inverter that runs hot and wet fails early. Qbits lists IP66 protection on every on-grid series. IP66 means dust-tight and protected against powerful water jets, which is the right specification for a wall-mounted unit on an exposed terrace.

## Export behaviour: net metering, gross metering, and zero export

An on-grid inverter's commercial value depends entirely on what happens to the energy your building does not consume at that instant. Three regimes exist, and they are not interchangeable.

Under **net metering**, a bidirectional meter counts import and export separately and you are billed on the net. Surplus generation offsets later consumption, so oversizing has value. The application process, state by state, is set out in the [net metering guide for India](/blog/net-metering-india-complete-guide/).

Under **gross metering**, all generation is exported and paid at a fixed tariff while all consumption is billed at the retail tariff. The arithmetic is completely different, and self-consumption stops mattering.

Under **[zero export](/glossary/zero-export/)**, the inverter must throttle so that nothing flows into the grid. A current transformer or smart meter at the point of supply feeds a setpoint back to the inverter, which curtails output in real time. DISCOMs commonly impose this where net metering is closed to new connections, where the distribution transformer cannot absorb reverse flow, or on captive commercial connections.

Zero export is where inverter selection quietly fails. Export limiting needs a supported accessory, the right firmware, and a communication path from meter to inverter. Confirm three things in writing before you commit: that the DISCOM requires it, that your SKU supports it, and that the accessory sits in the quotation rather than arriving as an extra bill.

The [zero-export inverter evidence review](/blog/best-zero-export-solar-inverters/) compares current model documentation and keeps export-control capability separate from local permission to operate.

Commercial connections add a layer. Many state connectivity codes and DISCOM technical standards require an adjustable power factor, and sometimes reactive power support, above a size threshold that varies by state. A unit with no power factor control will not clear those conditions. The background is in the explainer on [reactive power in Indian solar inverters](/blog/reactive-power-solar-inverters-india/).

## Sizing and DC/AC ratio: a worked example

This is arithmetic, not field data. Repeat it with your own panel and inverter datasheets.

Take a 10 kW three-phase on-grid design using the Qbits QB-10KTLC, which lists 2 MPPTs, a 180 to 1000 V tracking window, and 1100 V maximum DC. Panels are Adani ASB-M10-144-580, published at 580 Wp, open-circuit voltage 52.50 V, maximum power voltage 43.98 V, short-circuit current 13.95 A, and a temperature coefficient of open-circuit voltage of -0.24% per degree C.

**Step 1: coldest-morning open-circuit voltage.** Assume a 5 degree C minimum design temperature.

Voc at 5 C = 52.50 x (1 + (-0.0024 x (5 - 25))) = 52.50 x 1.048 = **55.02 V per module**

**Step 2: maximum modules per string.** Divide the inverter's maximum DC voltage by that figure.

1100 / 55.02 = 19.99, so **19 modules maximum**

Nineteen modules give 19 x 55.02 = 1,045 V at open circuit, inside the 1100 V limit. That voltage only occurs with no current flowing, which is why it is tested against the maximum DC rating and not against the tracking window.

**Step 3: hot-afternoon operating voltage.** Using the open-circuit coefficient as an approximation, at a 60 degree C cell temperature:

Vmp at 60 C = 43.98 x (1 - (0.0024 x 35)) = 43.98 x 0.916 = **40.28 V per module**

A 9 module string then operates at 9 x 40.28 = 362 V, comfortably above the 180 V bottom of the tracking window. A 10 module string sits at 403 V. Both clear.

**Step 4: DC/AC ratio.** Split 19 modules across the two independent trackers as 9 and 10.

19 x 580 Wp = 11,020 Wp = 11.02 kWp on a 10 kW inverter
DC/AC ratio = 11.02 / 10 = **1.10**

That lands at the conservative end of the normal Indian band of 1.1 to 1.3 DC watts per AC watt. Oversizing lifts morning and evening output and raises the capacity utilisation factor, at the cost of clipping a handful of midday hours in peak months. Push past 1.3 and you start discarding energy you paid for, while running the inverter at full load for longer in the hottest hours. Check the manufacturer's stated maximum DC input power for the SKU before you go there.

Run your own version on the [string sizing calculator](/string-sizing-calculator/), which already holds the Adani, Waaree, and Vikram families used above. One caution: the calculator checks electrical fit. A qualified designer still signs the final layout.

## Single-phase or three-phase

Your service connection decides this, not your system size. A single-phase connection takes a single-phase inverter. A three-phase connection above roughly 5 kW is normally better served by a three-phase unit, which spreads the injection evenly across all three legs instead of loading one. Read the phase and sanctioned load off your current electricity bill before you shortlist anything.

| Situation | Normal choice | Why |
| --- | --- | --- |
| Single-phase connection, up to about 6 kW | Single-phase inverter | Matches the supply; no unbalance question arises |
| Three-phase connection, 5 kW and above | Three-phase inverter | Injection is balanced across all three legs |
| Three-phase connection, small array | Verify with the DISCOM | Some licensees restrict single-phase injection on a three-phase service |
| Load growth expected | Size the phase for the future connection | Changing phase later means reapplying, not just swapping a box |

The unbalance point is the one people miss. A large single-phase inverter feeding one leg of a three-phase supply creates voltage unbalance across the phases, and many DISCOMs cap how much single-phase injection they will accept. Qbits splits its on-grid range along this line: single-phase TLS and TLD families for the smaller end, three-phase TLC from 5 kW up to the 225 and 320 kW EHV units. The decision is unpacked further in the [single-phase versus three-phase inverter guide](/blog/single-vs-3-phase-inverter/).

## A comparison framework, not a leaderboard

Per-model numbers in a blog post go stale within a product cycle, and most published comparison tables invent figures nobody can trace. So this table lists what each brand actually publishes, and what you still have to verify yourself. Everything in the left columns comes from the manufacturer's own catalogue or datasheet.

| Brand | Publicly documented | Verify on the datasheet |
| --- | --- | --- |
| Qbits | On-grid TLS, TLD, and TLC families; IP66 across every series; maximum efficiency 98% to 99.02% by model; 90 to 290 Vac adjustable grid range on the 4.2 to 6 kW TLS models; BIS certificate R-41306401 printed on the catalogue | Maximum DC input current per tracker on three-phase SKUs; written warranty terms for the quoted model; export limiting accessory support |
| Havells | 10-year standard warranty on every Enviro GTi grid-tie datasheet; 97.5% to 98.9% efficiency; mostly IP65; BIS R-41165239; added to MNRE ALMM List-I on 6 July 2026 for its Surat module line, 1,221 MW, valid to 5 July 2030 | Whether the IP65 rating suits your mounting position; per-model tracking window |
| Polycab | Solar Catalogue 2025 lists grid-tie 2 to 125 kW as Make in India; 7-year printed warranty, 5 years on the 350 kW UT series; single-phase IP65 and three-phase IP66 from 5 kW up | The catalogue and the company web store show different warranty filters, so get the term for your SKU in writing |
| Any other brand | Whatever the current catalogue states | All nine specifications listed earlier, for the exact SKU and phase |

Use this alongside the [brand-level ranking of Indian inverter makers](/blog/top-10-solar-inverter-brands-india-2026/), which compares companies rather than specifications, and the [general homeowner selection guide](/blog/best-solar-inverter-for-home-india/). For a capacity-specific shortlist, the [5 kW guide](/blog/best-5kw-solar-inverter-india-2026/) goes deeper on that size than a cross-capacity article can, and its siblings cover 3 kW and 10 kW.

One note on ALMM, because it is misreported constantly. MNRE publishes ALMM List-I for modules and List-II for cells. There is no MNRE approved list for inverters. Any claim that your inverter must appear on an ALMM list for PM Surya Ghar is wrong. Qbits states it is ALMM Phase III listed; treat that as the company's own statement and ask for the current certificate covering the exact model your project, tender, or utility requires.

## Commissioning: the documents to demand at handover

Commissioning is where a good specification becomes a working asset, and where most Indian residential handovers are thinnest. The full procedure is set out in the guide to [solar inverter commissioning in India](/blog/solar-inverter-commissioning-in-india/). At minimum, refuse to sign off without these.

1. **Single line diagram** of the as-built system, showing string configuration, protection devices, and earthing.
2. **String test records:** measured open-circuit voltage and short-circuit current per string, with the ambient temperature at the time of test.
3. **Insulation resistance and earth continuity readings**, referenced to IS 732:2019 and IS 3043:2018 (Bureau of Indian Standards).
4. **Inverter configuration record:** firmware version, grid code setting applied, and the export limit setpoint if one is configured.
5. **The written warranty document** for the exact inverter model and this sale, including the registration deadline.
6. **Monitoring account in your own name**, with the login handed over, not retained by the installer.
7. **Serial numbers** of the inverter and every panel, photographed and recorded.
8. **Service route in writing:** the entity that handles a claim, the ticket channel, and what is chargeable.

On the last two points, Qbits publishes an expandable warranty, and its public datasheets do not define the base term, remedy, registration deadline or exclusions, so obtain the current written warranty for the exact quoted model. Get them before payment.

## Why the cheapest on-grid inverter usually costs more over ten years

Here is the contrarian part, and it is not an argument about brand loyalty. Two inverters with identical datasheets can produce very different ten-year outcomes, and the difference is service, not silicon.

Consider the failure sequence. An inverter stops. Nobody notices for days, because nobody checks the app. The installer has changed phone numbers. The claim goes to a distributor who no longer stocks that series. A replacement is sourced from another city. Meanwhile the array generates nothing.

Every one of those steps is a downtime multiplier, and downtime is the only cost that scales with time. A unit that is cheaper at purchase but takes three weeks to replace, twice in ten years, has surrendered roughly six weeks of generation. On a 10 kW system in a decent Indian location, that lost output is a material number, and it arrives on top of whatever the replacement itself cost.

So price the following, not just the box:

- **Reachability.** Is there a service partner in your district, or one phone number for the whole state?
- **Stated turnaround.** A documented dispatch commitment beats an informal promise. - **Spares depth.** Will this series still be supported in year seven, or is it already being discontinued?
- **Monitoring that reaches you.** An alert you never see is not monitoring. Confirm push notifications and that the account is in your name.
- **Who actually holds the warranty.** Manufacturer, importer, or installer. The three behave very differently when the installer closes.

None of this means the most expensive unit wins. It means the comparison should be total cost over the design life, including expected downtime, rather than the line item on the quotation.

Credit where it is due: several established Indian brands now publish longer printed warranty terms than they did five years ago, and documentation quality across the category has improved. Read the terms, compare them honestly, and let the paperwork decide.

## The Bottom Line

There is no best on-grid solar inverter in India, because the question is underspecified until you name the array, the phase, and the DISCOM rule. What exists is a test that any candidate either passes or fails: voltage containment, current headroom, independent tracking per orientation, weighted efficiency and a derating curve, the right ingress rating, an adjustable grid window, the correct export configuration, and a service path you can actually reach.

Run that test yourself. It takes two datasheets and twenty minutes, and it is the only part of the purchase nobody else will do for you.

- Pull your electricity bill and write down the phase and sanctioned load, then pull the panel datasheet and note open-circuit voltage, short-circuit current, and the temperature coefficient. Those five numbers drive every other decision.
- Ask your DISCOM in writing whether net metering is open, whether export limiting is required, and whether it prescribes a narrower grid window than the CEA floor. Get the answer before you approve a quotation.
- Shortlist by specification, not badge. Browse the [on-grid inverter range](/on-grid-inverter/) for SKUs whose window and current rating fit your array, then [send the Qbits team](/contact-us/) your panel model, quantity, and phase for a specification-matched recommendation.
