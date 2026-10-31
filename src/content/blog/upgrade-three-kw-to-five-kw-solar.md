---
title: "Upgrading from 3 kW to 5 kW: Adding Panels and Changing the Inverter"
seoTitle: "Increase Solar Capacity: 3 kW to 5 kW Upgrade"
excerpt: "Going from 3 kW to 5 kW usually needs a new inverter, not just more panels. See the three routes, the voltage check, DISCOM steps and subsidy limits."
description: "Increase solar system capacity from 3 kW to 5 kW: keep the inverter and add panels, swap it, or add a second one. String checks, DISCOM and subsidy limits."
category: "Buying Guide"
date: 2026-10-30
readTime: "17 min"
image: "/og/blog-upgrade-three-kw-to-five-kw-solar.webp"
author: "Keyur Rakholiya"
keywords:
  - increase solar system capacity
  - upgrade 3kw solar to 5kw
  - add solar panels to existing system
  - replace 3kw inverter with 5kw
  - solar capacity enhancement net metering
  - add second solar inverter
relatedSlugs:
  - how-many-solar-panels-for-five-kw-inverter
  - 3kw-vs-5kw-vs-10kw-solar-inverters
  - dc-oversizing-in-solar
  - discom-approval-solar-inverter-net-metering
  - net-meter-approval-timeline
  - add-battery-to-solar-system-later
---

To go from 3 kW to 5 kW of solar, you usually need a bigger inverter as well as more panels. Adding panels to a 3 kW inverter works only up to a point. Above that point, the inverter simply cuts the extra power. There are three routes. You can keep the 3 kW inverter and add a few panels. You can replace it with a 5 kW inverter. Or you can add a second small inverter beside the first one.

Four things you can check today decide the route:

- the voltage and current limits printed on your inverter's datasheet
- the age and make of your existing panels
- your sanctioned load (the load your DISCOM has approved for your connection)
- your DISCOM's rule for adding capacity

Expect a fresh application to the DISCOM. Expect the PM Surya Ghar subsidy rules to treat the extra capacity differently from the first system.

> **What this is built on**
>
> - **Inverter figures** are read from the Qbits datasheets for the QB 1.5/2.0/2.7/3.0/3.3/3.6/4.0KTLS, QB 4.2/4.6/5/5.4/6KTLS and QB 4/5/6 KTLD families, checked on 30 October 2026. They are examples of 3 kW and 5 kW class single-phase units. Nothing here says a Qbits unit can replace any other brand's inverter.
> - **Panel figures** are read from the Vikram Solar Somera 540 W and Waaree BiN-08-580 datasheets (the same copies we used in [our 5 kW panel-count guide](/blog/how-many-solar-panels-for-five-kw-inverter/)).
> - **National rules:** the Electricity (Rights of Consumers) Amendment Rules, 2021 (G.S.R. 448(E), 28 June 2021) in the gazette text, and the Ministry of Power press release of 23 February 2024 on the 2024 amendments. We did not open the 2024 gazette text itself.
> - **Four states, read on 30 October 2026:** Maharashtra, Gujarat, Karnataka and Punjab. Other states may differ.
> - **Subsidy:** the MNRE guidelines PDF for PM Surya Ghar residential subsidy, read on 30 October 2026. It may be revised later. The scheme period printed in it runs to FY 2026-27.
> - **Limit:** we did not read any DISCOM's own enhancement form. Ask your DISCOM, because its current form decides.

## How can you upgrade from 3 kW to 5 kW? Three routes

| Route | What changes | Works when | Main risk |
| --- | --- | --- | --- |
| A. Keep the 3 kW inverter, add panels | Only panels and wiring | The inverter has spare DC input and the new panels match the old ones | AC output stays at 3 kW, so extra panels mostly add morning and evening energy |
| B. Replace with a 5 kW inverter | Inverter, and panels if you add them | You want real 5 kW output and have roof space | Old and new panels on one string; sanctioned load |
| C. Add a second small inverter | A new inverter with only the new panels | Old string is fine and you do not want to touch it | Two devices, and the DISCOM must accept two inverters on one connection |

A 5 kW result needs 5 kW of AC output. Only routes B and C give you that. Route A raises the DC array but not the AC limit.

## What limits an upgrade from 3 kW to 5 kW?

Six things limit it: the inverter's DC input power, the voltage window, the current limit, the old panels, roof space, and phase with sanctioned load.

**The inverter's DC input power.** The datasheet prints a maximum DC input power. For the QB-3.0KTLS it is 6,000 W against 3,000 W of rated AC output. The datasheet permits the DC side to be larger, but permitted is not the same as sensible. [The DC to AC ratio guide](/blog/dc-oversizing-in-solar/) explains clipping in detail.

**The voltage window.** Panels give more voltage when cold. On the coldest morning, the string must stay under the inverter's maximum DC voltage. On the hottest afternoon, it must stay above the bottom of the MPPT window. MPPT is the part of the inverter that finds the best operating point of the panels.

**The current limit.** Each input has a maximum current. The Qbits 3 kW and 5 kW single-MPPT units print 20 A and one string per MPPT. That one line matters a lot: you cannot add a second parallel string to them.

**The old panels.** Check their wattage, current rating and age. An old panel usually has a lower current than a new one. The datasheet for an old model can be hard to find. Panels also lose some output over the years, and the datasheet for your model gives its own figure.

**Roof space.** The MNRE rooftop FAQ (the MahaDiscom copy dated August 2021) says a 1 kW system generally needs about 10 square metres of shadow-free area. It adds that the real need varies. Two extra kW is therefore about 20 square metres as a first estimate, before checking shade.

**Phase and sanctioned load.** A 3 kW home is usually on a single-phase connection. Whether a 5 kW inverter can stay single phase is set by your state's supply rules, and those change. For example, in November 2025 Gujarat's regulator replaced a fixed connectivity table in its net-metering rules with a pointer to the state Supply Code. Our [5 kW panel-count guide](/blog/how-many-solar-panels-for-five-kw-inverter/) shows two regulator examples, and the [single-phase and three-phase guide](/blog/single-vs-3-phase-inverter/) explains the phase question. Your sanctioned load is on your electricity bill. In several regimes the solar capacity cannot exceed it. A 3 kW sanctioned load may therefore need to go up before 5 kW can be connected.

## What do the Qbits datasheets say about 3 kW and 5 kW inverters?

The table below copies the rows that matter from the Qbits datasheets. We do not state any other figure.

| Datasheet field | QB-2.0KTLS | QB-3.0KTLS | QB-5KTLS | QB-5KTLD |
| --- | --- | --- | --- | --- |
| Rated output power | 2,000 W | 3,000 W | 5,000 W | 5,000 W |
| Max. DC input power | 4,000 W | 6,000 W | 7,500 W | 7,500 W |
| Max. DC input voltage | 550 V | 550 V | 600 V | 550 V |
| MPPT voltage range | 40 to 550 V | 40 to 550 V | 40 to 600 V | 80 to 550 V |
| Number of MPPT | 1 | 1 | 1 | 2 |
| Strings per MPPT | 1 | 1 | 1 | 1 per MPPT |
| Max. DC input current | 20 A | 20 A | 20 A | 20 A per MPPT |

The QB-2.0KTLS and QB-3.0KTLS are on the [QB 1.5 to 4.0KTLS family page](/our-products/QB-1.5-4.0KTLS/). The QB-5KTLS is on the [QB 4.2 to 6KTLS page](/our-products/QB-4.6-6KTLS/), and the QB-5KTLD is on the [QB 4/5/6 KTLD page](/our-products/QB-4-6KTLD/). The datasheets do not print a power limit for each tracker of the dual-MPPT unit, only the 7,500 W total. Ask for that line before you split panels unevenly between the two trackers.

## Can you mix old and new panels on one string?

Avoid it. Panels in a string are wired in series, like bulbs on one wire, so the same current flows through every panel. If one panel can only give 8.8 A and its neighbour could give 12.95 A, the whole string settles near the weaker current. The stronger panel is held back.

Here is an illustration. We assume an old 330 W class panel with a maximum power current of 8.8 A. This is our assumption, not a datasheet value, so use your own panel's label. A new 540 W panel in the same string is rated for 12.95 A. In that string it would run at about 8.8 divided by 12.95, which is 68% of its rated current. It would lose roughly a third of its output. You paid for 540 W and get about 370 W.

The loss is small only when the panels are almost identical. The new 580 W panel in the worked example below is rated 13.18 A against 12.95 A for the old 540 W panel. A mix of those two would lose less than 2% of the new panel's output. That is a mild case, and it still wastes some of the new panel. Other problems with mixing are less visible: different voltages shift where the MPPT works, and a shaded old panel pulls down new ones.

So the clean rule is: old panels on one input, new panels on another input or another inverter. Route B with a dual-MPPT inverter and route C both follow it. Route A and a single-MPPT 5 kW inverter do not, unless the new panels are the same model as the old ones.

## Worked example: 6 panels on a 3 kW inverter

This is illustrative. It is not a quote and not a measurement of any roof.

**Assumptions**

- The existing system is a QB-3.0KTLS with 6 panels of 540 W (3.24 kWp) in one string. The panel figures are Vikram Somera 540 W: Voc 49.5 V, Vmp 41.7 V, Isc 13.64 A, Imp 12.95 A. Voc is the open-circuit voltage, Vmp the voltage at maximum power, Isc the short-circuit current and Imp the current at maximum power.
- New panels for routes B and C are Waaree BiN-08-580: Voc 52.5 V, Vmp 44.01 V, Isc 13.93 A.
- We use a voltage temperature coefficient of minus 0.26% per degree, which is printed on the Waaree sheets. We did not read this figure on the Vikram sheet, so for the 540 W panel it is an assumption.
- Coldest morning cell temperature 5 degrees C, so voltage is 5.2% above the 25 degree figure. Hottest afternoon cell temperature 65 degrees C, so voltage is 10.4% below. Both are illustrative.
- Illustrative heat loss of 12% on power at the hot cell temperature, the same assumption used in our 5 kW guide.

**Per panel, after the temperature corrections**

| Panel | Cold Voc | Hot Vmp |
| --- | --- | --- |
| 540 W (old) | 49.5 x 1.052 = 52.07 V | 41.7 x 0.896 = 37.36 V |
| 580 W (new) | 52.5 x 1.052 = 55.23 V | 44.01 x 0.896 = 39.43 V |

**Route A: keep the QB-3.0KTLS, add panels to the same string**

The 3 kW unit takes one string, so all panels go in series and must be the same model as the old ones.

| Panels in string | Array | Cold Voc (limit 550 V) | Hot Vmp (above 40 V) | DC to AC ratio | After 12% heat loss | Clipped at peak |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 3.24 kWp | 312 V | 224 V | 1.08 | 2.85 kW | none |
| 8 | 4.32 kWp | 417 V | 299 V | 1.44 | 3.80 kW | about 0.8 kW |
| 10 | 5.40 kWp | 521 V | 374 V | 1.80 | 4.75 kW | about 1.75 kW |

An 11th panel would push cold voltage to about 573 V, over the 550 V limit. Ten panels stay under it but leave only about 5% margin, and a colder site could break it. Current is 13.64 A at most, under the 20 A limit.

So the datasheet allows 10 panels, and the electrics pass on paper. But the AC output is still capped at 3,000 W (3,300 VA maximum). The extra panels help early and late in the day, not at noon. This is why route A does not give you a 5 kW system.

**Route B: replace with a 5 kW inverter**

*B1: QB-5KTLS, single string.* Ten 540 W panels in series (the 6 old plus 4 identical new ones). Cold Voc is 521 V against the 600 V limit. Hot Vmp is 374 V against the 40 V floor. Current is 13.64 A against 20 A. The array is 5.40 kWp, a DC to AC ratio of 1.08. This passes only if the 4 new panels match the old ones, because old and new share one string.

*B2: QB-5KTLD, two inputs.* Keep the 6 old panels on input 1 and put 4 new 580 W panels on input 2.

| Input | Panels | Cold Voc (limit 550 V) | Hot Vmp (above 80 V) | Short-circuit current (limit 20 A) |
| --- | --- | --- | --- | --- |
| 1 | 6 x 540 W | 312 V | 224 V | 13.64 A |
| 2 | 4 x 580 W | 221 V | 158 V | 13.93 A |

Total array 3.24 + 2.32 = 5.56 kWp, below the 7,500 W maximum DC power, DC to AC ratio 1.11. Old and new panels are never in the same string. Remember that no per-tracker power limit is printed.

**Route C: keep the QB-3.0KTLS untouched and add a QB-2.0KTLS**

Put the 4 new 580 W panels on the 2 kW unit. Cold Voc is 221 V against 550 V, hot Vmp is 158 V above the 40 V floor, and current is 13.93 A against 20 A. The array is 2.32 kWp against 4,000 W maximum DC. Total AC output is 3 + 2 = 5 kW and total DC 5.56 kWp. The old string is not touched.

To see which Qbits inverter families are listed for homes, go to the [residential solar page](/residential-solution/). Pricing for every model is by quote only.

## Do you need DISCOM approval to add solar capacity?

Yes, expect to. Adding capacity is a change to an approved system, so do not assume your first net-metering approval covers it.

**What the national rules say.** The Rights of Consumers Rules 2020, as amended on 28 June 2021, leave the net-metering arrangement to each State Commission's regulations. If a State's regulations do not provide for net metering, the Commission may allow it for loads up to 500 kW or up to the sanctioned load, whichever is lower.

The Ministry of Power's press release of 23 February 2024 says the 2024 amendments exempt systems up to 10 kW from the technical feasibility study. For larger systems the study period is 15 days, with deemed approval if it is not completed in time. It also says the DISCOM bears the cost of system strengthening needed for rooftop solar up to 5 kW.

We do not know whether a DISCOM applies the 10 kW exemption to the new total or only to the addition. Ask. For a 3 kW to 5 kW upgrade both are under 10 kW, so the question may not matter. Get the answer in writing anyway.

**What four states say.** These are not national rules. Each row is from the regulation text we read on 30 October 2026.

| State | What the text we read says about adding capacity | Source |
| --- | --- | --- |
| Maharashtra | An eligible consumer may install or enhance capacity within the same premises, provided the total stays within the capacity limits. Applications up to 10 kW are deemed accepted without a feasibility study, and any commensurate load enhancement is carried out by the DISCOM. | MERC Regulations 2019, reg. 6.5. MERC Statement of Reasons for the Second Amendment, 29 August 2024 |
| Gujarat | For a project commissioned under an earlier net-metering regulation, any addition of solar capacity is treated as a different arrangement, and a fresh agreement is signed for the additional capacity. Applications up to 10 kW are deemed accepted without a feasibility study. | GERC Third Amendment, Notification 2 of 2022, 31 May 2022. Fourth Amendment, Notification 13 of 2024, 4 September 2024 |
| Karnataka | Several units or one unit with combined capacity within the sanctioned load limit are allowed. For added capacity the consumer cancels the existing PPA and signs a new one for the total capacity, at 90% of the existing PPA tariff or the prevailing tariff, whichever is lower. | KERC DSPV Regulations 2026, reg. 15.3 and table proviso (notification 19 August 2026) |
| Punjab | The regulations apply to applications received after notification for enhancing the capacity of an already installed system. For domestic consumers the rooftop capacity, counted as inverter rating on the AC side, cannot exceed the sanctioned load. | PSERC Rooftop Solar PV Regulations 2021, regs. 3.3 and 4.2 |

Three points follow from this table.

- **Expect a fresh application.** None of the four treats added capacity as invisible. The form differs by state.
- **Check which number counts.** Punjab counts the inverter's AC rating for homes. PM Surya Ghar counts module DC capacity. Your 5 kW inverter with 5.56 kWp of panels is both "5 kW" and "5.56 kWp". Ask which one your DISCOM uses.
- **The sanctioned load may have to rise.** In Maharashtra and Gujarat, the text we read puts the load increase on the DISCOM for applications up to 10 kW. Ask whether any charge applies.

For route C, the Maharashtra and Karnataka texts we read recognise more than one unit in a premises when the total stays within the limit. Your DISCOM decides whether it accepts a second inverter on your existing meter, and how it records two inverters on one agreement. Read [how to verify your inverter model with your DISCOM](/blog/discom-approval-solar-inverter-net-metering/) before you pay for either inverter, and read [solar for a house with two electricity connections](/blog/solar-for-house-with-two-electricity-connections/) if a second inverter would sit on a separate supply.

We did not find a standard rule on whether the meter changes. Ask whether your existing bidirectional meter stays, and who tests the upgraded system before it is live.

## What happens to your PM Surya Ghar subsidy if you upgrade?

This part is from the MNRE guidelines PDF for PM Surya Ghar residential subsidy, read on 30 October 2026, and from nothing else. State subsidies were not checked.

- **Subsidy follows the panels, not the inverter.** The guidelines work it out on the rated DC capacity of the modules, not the inverter size.
- **There is a ceiling.** The residential table lists no additional subsidy beyond 3 kWp. As printed, the rate is Rs 30,000 per kWp for the first 2 kWp and Rs 18,000 for the third kWp.
- **Pre-existing systems.** A rooftop system that already received central subsidy and was later enlarged can get more only for the balance up to 3 kW overall. A 3 kW system that already took subsidy has no balance left. Going to 5 kW therefore adds no central subsidy on that rule.
- **Once only.** The text says a rooftop installation is eligible for the subsidy only once after installation.
- **Panels must meet the domestic content requirement (DCR).** The guideline says use of non-DCR modules in any form in the installation makes it ineligible. If you claimed or plan to claim subsidy, ask on the portal whether your new panels need to be DCR before you buy them.
- **Process.** The consumer applies on the national portal and picks a registered vendor.

The PDF printed the scheme period as running until FY 2026-27. We could find nothing in it about a 3 kW system that never took subsidy and is now being enlarged to 5 kW. We do not state an answer. Ask the DISCOM or the national portal, and get it in writing before you order. We state no subsidy amount for your case.

## Warranty and service: ask before you change anything

We make no claim about any warranty. This section is about process.

- Ask your original installer in writing whether adding panels, a second inverter or a replacement changes their terms and any maintenance contract.
- Ask the inverter brand whether adding more panels than the datasheet's rated figure affects its terms.
- Ask who answers for the whole system after the change. A system with two inverters from two sources has two service paths.
- Keep the old datasheets, invoices and the DISCOM approval. You will need them when someone asks which parts were original.

For service questions on a system you already own, use the [authorized service partners directory](/authorized-service-partners/).

## What drives the cost of an upgrade?

We quote no price here. These are the things that move it:

- A new inverter versus extra panels. Route A has the smallest equipment bill and the smallest gain.
- Panels. The count, the wattage you pick and whether the old ones are kept or replaced.
- Mounting structure and extra roof area, including any shade fix.
- Cabling, the AC breaker, protection and earthing for the new part.
- Application, meter or load charges that your DISCOM sets.
- Labour for removing, moving and re-wiring existing panels.
- A second inverter means a second device to buy, mount and monitor.

Capacity alone does not set a price. See our [3 kW, 5 kW and 10 kW comparison](/blog/3kw-vs-5kw-vs-10kw-solar-inverters/) for the fit decision.

## Questions to ask your installer

1. Which route are you proposing, and why not the other two?
2. Show me the string calculation for the new layout: cold voltage, hot voltage and current against the inverter limits.
3. Will old and new panels share any string? If so, what is the loss?
4. What is the DC to AC ratio, and how much clipping do you expect at peak?
5. Do we need a new application? Which form, and who submits it?
6. Does my sanctioned load need to rise, and what does that cost?
7. Does my meter stay as it is, and who tests the system after the change?
8. Does the change affect any existing subsidy claim? Please show the portal answer.
9. Who handles service after the change, and what is in writing?
10. Which panels, exactly, are being added, and do they meet any subsidy conditions?

## Your next step

Gather four things. First, your electricity bill, which shows sanctioned load and phase. Second, the model and rating of your inverter. Third, the label of one existing panel. Fourth, a rough roof measurement. With these an installer can tell you in one call which of the three routes fits.

To see which Qbits inverter families are listed for homes, visit the [residential solar page](/residential-solution/). Once the upgrade is done, the [authorized service partners directory](/authorized-service-partners/) lists service contacts. Confirm a partner's status with Qbits before you rely on it.
