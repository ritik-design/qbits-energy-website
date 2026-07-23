---
title: "East-West Roof Solar Design in India 2026: When It Beats South-Facing"
excerpt: "East-west solar design splits panels across two roof slopes for a flatter generation curve. Yield loss is 5 to 15 percent; see when it beats south-facing."
description: "East-west solar design vs south-facing in India: generation curve differences, 5 to 15 percent yield loss math by pitch, dual-MPPT requirements, inverter sizing, and when east-west wins for homes with evening loads."
category: "Technical"
date: 2026-07-23
updatedDate: 2026-07-23
readTime: "17 min"
image: "/blog-images/east-west-roof-solar-design.svg"
author: "Keyur Rakholiya"
keywords:
  - east west solar design
  - east west solar panels india
  - east west vs south facing solar
  - solar panel orientation india
  - east west rooftop solar layout
  - solar azimuth design india
faqs:
  - q: "What is an east-west solar design?"
    a: "An east-west solar design splits the panel array into two groups, one facing roughly east and one facing roughly west, instead of pointing all panels south. The east group generates most of its power in the morning and the west group peaks in the afternoon. The combined output curve is flatter through midday and wider across the day. This layout is common on gabled roofs, sheds, and flat roofs using back-to-back low-tilt structures, and it suits homes that use more electricity in the morning and evening than at noon."
  - q: "How much generation do I lose with east-west panels compared to south-facing?"
    a: "The annual energy loss depends mainly on tilt angle. At a low tilt of 5 to 10 degrees, an east-west array in India typically loses 4 to 8 percent of annual yield versus an ideal south-facing array. At 20 to 30 degrees tilt, the loss grows to 10 to 15 percent. Yield losses for non-south orientations at optimised inclination typically lie between 5 and 10 percent, according to Fraunhofer ISE (2021). Because many Indian flat-roof systems use low tilts, the real-world penalty is often at the lower end."
  - q: "When does east-west solar beat south-facing in India?"
    a: "East-west beats south-facing in four situations: when your roof physically has no south-facing surface, when your household consumes most electricity in the morning and evening, when you want to fit more panels on a flat roof by packing rows closer together, and when you want to reduce inverter clipping on an oversized DC array. A west-heavy split also helps homes running air conditioning from 3 pm onward, because west-facing panels keep producing strongly until about 5 pm in most Indian cities."
  - q: "Do I need a dual-MPPT inverter for an east-west solar layout?"
    a: "Yes, a dual-MPPT inverter is effectively mandatory for east-west layouts. Each orientation must be wired as a separate string on its own MPPT input so the inverter can track the different peak-power voltages of the east and west groups independently. Connecting both orientations in parallel on a single MPPT forces a compromise operating point and typically wastes 8 to 15 percent of potential generation. Nearly all modern 3 kW to 10 kW residential string inverters, including the Qbits TLS and HS series, ship with two MPPTs as standard."
  - q: "Can east-west solar reduce inverter clipping losses?"
    a: "Yes. Because the east and west groups never peak at the same time, the combined DC peak of an east-west array is roughly 70 to 80 percent of the nameplate sum, versus about 90 to 95 percent for a south-facing array at the same tilt. This means you can connect more panel capacity to the same inverter before clipping starts, or run a smaller inverter on the same array. Installers routinely use a 1.25 to 1.4 DC-to-AC ratio on east-west systems versus 1.1 to 1.2 on south-facing systems with minimal clipping loss."
  - q: "Is east-west solar eligible for PM Surya Ghar subsidy?"
    a: "Yes. The PM Surya Ghar Muft Bijli Yojana subsidy does not depend on panel orientation. Any grid-connected residential rooftop system installed by an empanelled vendor with ALMM-listed modules and inverter qualifies, whether the panels face south, east, west, or a split. What matters for the subsidy is the installed capacity in kW, the ALMM listing, and DISCOM verification after commissioning. An east-west system on a gabled roof receives exactly the same subsidy per kW as a south-facing system."
  - q: "Which roof types in India are best suited to east-west solar?"
    a: "Gabled or two-slope roofs with ridges running north-south are the natural fit, because both slopes can carry panels at the roof's existing pitch. This covers many Mangalore-tile and metal-sheet roofs in Kerala, coastal Karnataka, Goa, Maharashtra's Konkan belt, and the North-East. Flat RCC roofs also work well with back-to-back east-west structures at 5 to 10 degrees tilt, which fit roughly 20 to 30 percent more capacity per square metre than south-facing rows because inter-row shading gaps shrink dramatically at low tilts."
featured: false
---

Most Indian solar advice starts and ends with one rule: face your panels south. That rule is correct as far as it goes. A true-south array at a tilt near your latitude captures the most annual energy per panel. The problem is that thousands of Indian homes simply do not have a usable south-facing roof. Gabled tile roofs in Kerala and the Konkan, two-slope metal sheds in industrial estates, and terraces chopped up by water tanks are common. All of them often leave south as the worst option, or no option at all.

East-west solar design is the practical answer. You split the array into two groups, one facing east and one facing west. In exchange for a small annual energy penalty, you get a generation curve that matches how Indian families actually use electricity. Done properly, the penalty is far smaller than most people fear. In some cases the east-west system delivers more usable value per rupee than a compromised south-facing one.

> **TL;DR**
> - East-west arrays in India lose only 4 to 8 percent of annual yield at low tilts (5 to 10 degrees). At steep tilts (20 to 30 degrees), the loss is 10 to 15 percent versus ideal south-facing.
> - Non-south orientations at optimised tilt typically lose just 5 to 10 percent of yield, according to Fraunhofer ISE (2021).
> - The combined output curve peaks at roughly 70 to 80 percent of nameplate capacity. You can therefore oversize DC by 1.25 to 1.4 times on the same inverter with minimal clipping.
> - A dual-MPPT inverter is mandatory: wiring both orientations into one MPPT wastes 8 to 15 percent of generation.
> - East-west suits homes with heavy morning and evening consumption and gabled roofs with no south slope. On flat roofs, tighter row spacing fits 20 to 30 percent more capacity.
> - West-heavy splits shift generation toward the 3 pm to 5 pm window, which directly offsets pre-evening air-conditioning load.

**Short version.** East-west solar design splits panels across east and west orientations instead of south. It produces a flatter midday peak and stronger morning and evening output. Annual energy loss versus south-facing is 5 to 15 percent depending on tilt. The layout still wins when your roof lacks a south slope, when consumption peaks outside midday hours, or when tighter packing fits more capacity. Always use a dual-MPPT inverter with each orientation on its own string.

This guide covers the generation math, the roof situations where east-west wins, the inverter requirements, and the exact numbers you should check before signing a quote. If you are still learning how orientation and tilt affect output in general, the [solar yield in India](/blog/solar-yield-india/) explainer is a good starting point.

## What East-West Solar Design Actually Means

East-west solar design is an array layout where half the panels face roughly east and half face roughly west. The two groups are wired as independent strings. The [azimuth](/glossary/azimuth/) of the east group sits near 90 degrees and the west group near 270 degrees. Anything within about 45 degrees of those values behaves similarly.

This is different from simply having a few panels off-south because of a roof obstruction. East-west is a deliberate design choice. The two groups are sized to be roughly equal, mounted at the same [tilt angle](/glossary/tilt-angle/), and connected to separate MPPT inputs on the inverter.

You see this layout most often in three places:

- **Gabled residential roofs** where the ridge runs north to south, giving one east slope and one west slope.
- **Flat RCC terraces** using back-to-back low-tilt structures, a common commercial and industrial approach now appearing in homes.
- **Industrial sheds** with north-light or two-slope metal roofing where south-facing mounting would need expensive tilt frames.

In Germany, where rooftop solar on gabled homes is the norm, east-west layouts are mainstream. Fully 22 percent of newly installed PV systems were oriented west, east, or east-west by 2019, per [Fraunhofer ISE](https://www.energie.fraunhofer.de/en/press-media/press-release/press-realeases-2021/PI-210519-fraunhofer-ise-installed-pv-capacity-grows.html) (2021). India's gabled-roof housing stock in coastal and high-rainfall states presents the same geometry. Yet the design conversation here still defaults to south.

## How the Generation Curve Differs from South-Facing

The core of east-west design is not annual energy. It is the shape of the daily generation curve.

A south-facing array in India produces a classic bell curve. Output rises from sunrise, peaks between 11:30 am and 1 pm when the sun crosses the local meridian, and falls symmetrically toward sunset. On a clear March day, a 5 kWp south array at 20 degrees tilt in Ahmedabad might hit 4.4 kW at solar noon.

An east-west array of the same capacity produces a different shape:

- The east group ramps up early, peaking around 8:30 to 9:30 am.
- The west group ramps up late, peaking around 3 to 4 pm.
- The combined curve shows two shoulders with a broad, flatter midday top instead of a sharp noon spike.
- Total instantaneous peak is only 70 to 80 percent of nameplate, because the two groups never peak together.

For that same 5 kWp system split east-west, midday combined output might top out near 3.6 to 3.9 kW. But the system is still making 2.5 kW or more at 4:30 pm, when the south array has tapered well below that.

You can model both curves for your exact pin code using [NREL's PVWatts calculator](https://pvwatts.nrel.gov/). Run the azimuth at 90, 180, and 270 degrees and average the east and west outputs. The [solar irradiance data for India, statewise](/blog/solar-irradiance-data-india-statewise/) post has the baseline radiation numbers you need as inputs.

Season also reshapes the comparison. In winter, when the sun tracks lower in the southern sky, a south-facing array gains its biggest advantage and east-west output dips further. In summer, the sun rises north of east and sets north of west. East-west arrays then close most of the gap, and their morning and evening shoulders grow wider. Monsoon months compress everything toward diffuse light, where orientation matters least of all.

## Worked Example: 5 kWp in Kochi (Hypothetical)

Here is a labelled hypothetical to make the numbers concrete. Assume a 5 kWp system on a gabled tile roof in Kochi. Roof pitch is 18 degrees, tariff is ₹7.50 per unit, and the family consumes 60 percent of its electricity after 4 pm.

| Metric | South-facing (ideal, on flat terrace) | East-west (on existing slopes) |
| --- | --- | --- |
| Installed capacity possible | 3.5 kWp (terrace space limit) | 5 kWp (both roof slopes) |
| Relative yield per kWp | 100 percent | ~92 percent at 18 degree tilt |
| Effective annual generation | ~5,100 units | ~6,700 units |
| Generation after 3 pm share | ~28 percent | ~40 percent |
| Structure cost | Higher (tilt frames on terrace) | Lower (flush mount on slopes) |

The south-facing option wins on paper per panel, yet delivers about 1,600 fewer units per year because the roof simply cannot host the full system. At ₹7.50 per unit, that is roughly ₹12,000 of annual savings left on the table. This is the comparison that matters, and it is the one generic orientation advice ignores.

## The Yield Loss Math: 5 to 15 Percent, Depending on Pitch

This is the question every homeowner asks first, and the honest answer is a range, not a single number.

The annual energy penalty of an east-west layout versus an ideal south-facing array depends overwhelmingly on tilt. The steeper the tilt, the larger the penalty, because steep tilts maximise the angular difference between the panel plane and the sun's midday position.

| Tilt angle | East-west annual yield vs south (India, approx.) | Typical use |
| --- | --- | --- |
| 5 degrees | 96 to 98 percent | Flat-roof back-to-back structures |
| 10 degrees | 93 to 96 percent | Low-pitch sheds, flat roofs |
| 15 degrees | 90 to 94 percent | Moderate-pitch gabled roofs |
| 20 degrees | 88 to 92 percent | Common tile-roof pitch |
| 30 degrees | 83 to 88 percent | Steep roofs, Himalayan foothill homes |

These figures are consistent with published simulation work. Yield losses for non-south orientations at optimised inclination typically lie between 5 and 10 percent. The source is [Fraunhofer ISE's LCOE study](https://www.ise.fraunhofer.de/content/dam/ise/en/documents/publications/studies/EN2021_Fraunhofer-ISE_LCOE_Renewable_Energy_Technologies.pdf) (2021). A controlled Dutch field comparison tested both layouts side by side. The south system produced about 7 percent more annual energy per Wp at moderate tilt, per [Autarco](https://www.autarco.com/en/updates/kwh-face-off-east-west-vs-south) (2018). That gap narrows further at Indian latitudes.

Three factors shrink the penalty further in India:

1. **Low latitudes.** Most of India sits between 8 and 28 degrees north. The sun passes nearly overhead for much of the year, so orientation matters less than in Europe. Optimal tilt angles roughly track latitude worldwide, according to [Jacobson and Jadhav, Stanford University](https://web.stanford.edu/group/efmh/jacobson/Articles/I/TiltAngles.pdf) (2018).
2. **Low structural tilts.** Indian flat-roof systems commonly use 10 to 15 degree structures to save cost and wind load. That is exactly the range where east-west losses are smallest.
3. **High diffuse fraction.** Hazy and monsoon months raise the share of diffuse radiation, which hits all orientations more evenly than direct beam.

> **What most homeowners get wrong:** they compare east-west yield against a theoretical south system their roof cannot actually host. A 5 kWp east-west system at 92 percent relative yield beats a 3.5 kWp south system at 100 percent. Simple math: 4.6 effective kWp is still more than 3.5.

## When East-West Beats South-Facing

East-west is not a compromise in every case. In four common Indian situations, it is the better design outright.

One honest caveat before the list. Suppose your roof offers a clean, unshaded south slope, or a flat terrace with room for south-facing rows at a sensible tilt. In that case, take the south-facing design. East-west earns its place by solving constraints, not by beating an unobstructed south array on raw annual energy. The cases below are where those constraints are real.

**1. Your roof has no south slope.** Gabled roofs with a north-south ridge give you east and west surfaces and nothing else. Building south-facing tilt frames on a sloped tile roof adds structural cost, wind risk, and leak points. Using the existing slopes is cheaper, cleaner, and often the only option the roof structure allows. On a difficult roof, a [solar shading analysis software](/blog/solar-shading-analysis-software/) study will quantify what each orientation delivers before you commit.

**2. Your consumption peaks morning and evening.** The classic Indian residential load profile has a morning peak from 6:30 to 9 am (geysers, kitchen, water pumps). It then has a large evening peak from 6 to 11 pm (lights, fans, cooking, TVs, AC). A south array exports heavily at noon when nobody is home and generates little after 4 pm. An east-west array self-consumes more of what it makes. Under net metering this matters less. But in states moving toward lower export tariffs or gross metering, timing changes value. Self-consumed units are worth ₹7 to ₹9 while exported units may earn only ₹2 to ₹3.

**3. You want maximum capacity on a flat roof.** South-facing rows need inter-row gaps to avoid self-shading, especially at higher tilts. East-west back-to-back structures at 5 to 10 degrees tilt share the same shadow line and pack tightly. The result is typically 20 to 30 percent more installed kWp per square metre of terrace. For a small commercial roof where total energy matters more than per-panel yield, this wins the math outright.

**4. You want to oversize DC without clipping.** This one deserves its own section, below.

## Dual-MPPT: The Non-Negotiable Inverter Requirement

An east-west layout fails without one specific piece of hardware: an inverter with two independent [MPPT](/glossary/mppt/) trackers.

Here is why. East-facing and west-facing strings produce different voltages and currents at any given moment, because they see different irradiance. A single MPPT forces all connected panels onto one shared operating point, which is a compromise that suits neither string. The measured penalty for paralleling mismatched orientations on one tracker is 8 to 15 percent of lost generation, on top of the orientation loss itself.

The fix is simple and standard:

- Wire all east-facing panels as one string (or parallel strings) into MPPT input 1.
- Wire all west-facing panels into MPPT input 2.
- Keep string voltages matched within each orientation: same panel count, same model, similar shading conditions.

The [dual-MPPT vs single-MPPT](/blog/dual-mppt-vs-single-mppt/) comparison covers the electrical details, including what happens to string voltage windows when one side is shaded. Nearly every modern residential string inverter from 3 kW upward ships with two MPPTs, including the Qbits TLS and HS series. So this requirement rarely adds cost. What it does rule out is very old or very cheap single-MPPT units.

One design caution: check the per-MPPT current rating. If your west side needs two parallel strings to balance capacity, confirm the input can take the combined current. An undersized MPPT input wastes the layout's advantage.

## Inverter Sizing and Clipping Implications

East-west design changes the inverter sizing math in your favour, and this is one of its least understood benefits.

Because the two panel groups peak at different times, the combined DC peak is roughly 70 to 80 percent of the summed nameplate. A 6 kWp east-west array might never push more than 4.5 to 4.8 kW of DC power at any instant. That means:

- A 5 kW inverter can comfortably carry 6 to 7 kWp of east-west panels.
- The DC-to-AC ratio can run 1.25 to 1.4, versus the 1.1 to 1.2 typical for south-facing systems, with negligible [clipping loss](/blog/inverter-clipping-explained/).
- The inverter spends more hours per day near its efficient operating zone instead of idling at low load in the morning and evening.

The economics are attractive. [DC oversizing](/blog/dc-oversizing-in-solar/) lets you extract more daily energy from the same inverter, which is the single most expensive component to upsize. On an east-west system, adding two extra panels costs perhaps ₹20,000 to ₹26,000. That lifts annual generation by 8 to 10 percent. A south-facing system at the same ratio would start clipping away the noon peak.

There is one exception worth stating plainly. Suppose your net metering agreement caps export at the inverter's AC rating, and your state pays a poor export tariff. Then aggressive oversizing helps only if you can use the extra morning and evening energy yourself. Run your own load profile against the simulated curve before assuming the extra panels pay back.

## Self-Consumption, Net Metering, and the Evening Load Argument

The financial case for east-west in India rests increasingly on tariff structure, not just physics.

Under classic net metering with 1:1 unit credit, orientation barely matters financially: a unit generated at noon offsets a unit consumed at 8 pm. But the regulatory direction in several states is shifting. Some DISCOMs are revising export compensation downward, introducing time-of-day tariffs for larger consumers, or tightening net metering caps as rooftop penetration grows.

In that environment, timing is money:

- A west-heavy split (say 60 percent west, 40 percent east) shifts meaningful generation into the 2 to 5 pm window, directly serving afternoon AC load.
- Morning-heavy households (geysers, pumps, EV charging before work) benefit from the east shoulder starting useful output by 7:30 am.
- Any future battery addition charges more evenly across the day from a flatter curve, reducing the midday surplus spike that small hybrid inverters cannot absorb.

For context on how much total energy a given system size produces across Indian conditions, see [how much electricity solar generates in India](/blog/how-much-electricity-solar-generates-india/). The [maximising solar output in the Indian climate](/blog/maximize-solar-output-indian-climate/) guide then covers the operational factors, soiling, temperature, cleaning cycles, that apply whatever orientation you choose.

## How to Decide: A Five-Question Fit Test

Run these five questions before accepting any layout proposal.

1. **Does your roof have an unobstructed south-facing surface large enough for your target capacity?** If yes, south-facing near latitude tilt remains the yield champion. If no, east-west is likely your best real option, not a fallback.
2. **What is the available tilt?** Under 15 degrees, the east-west penalty is small (under 8 percent) and the layout case is strong. Above 25 degrees, think harder and get a simulation.
3. **When do you use electricity?** Pull six months of bills and note whether consumption is spread through the day or concentrated mornings and evenings. Evening-heavy homes recover more value from east-west, especially under time-of-day or reduced-export tariffs.
4. **Is the quoted inverter dual-MPPT with adequate per-input current?** This is a pass or fail gate. Ask for the datasheet and check both MPPT inputs, not just the MPPT count in the brochure.
5. **Has the installer simulated both options?** A competent installer runs a PVsyst or equivalent simulation for south and east-west variants on your actual roof geometry. You should see both annual kWh figures. If the quote assumes south on a roof that does not support it, the comparison is fictional.

Ask for the simulated specific yield in kWh per kWp per year for each variant, and the monthly generation split. The right layout shows itself in those two numbers.

## Conclusion: The Bottom Line

South-facing is the best orientation only when your roof can actually deliver it. Many Indian homes have gabled roofs, shaded south slopes, or evening-heavy consumption. For them, east-west solar design trades a 5 to 15 percent theoretical yield penalty for more usable energy. It also delivers more capacity per square metre and friendlier inverter economics. With a dual-MPPT inverter and a modest DC oversize, the real-world gap shrinks to a number most homeowners will never notice on their bills.

- **Map your roof and your load first.** Note usable slopes, pitch, and shading, then compare them with six months of bills.
- **Demand a two-variant simulation.** Any serious quote should compare south and east-west layouts on your roof. Insist on specific yield in kWh per kWp, and confirm a dual-MPPT inverter sized for a 1.25 to 1.4 DC-to-AC ratio.
- **Get a layout reviewed before you sign.** Share your roof details and latest bill with a Qbits engineer through [the contact page](/contact-us/). We will tell you plainly whether east-west or south-facing earns more for your home.
