---
title: "Best Solar Design Software New Zealand: 2026 Guide"
excerpt: "Since July 2026 the big four retailers must offer time-varying export rates, and the peaks fall after dark. New Zealand solar is now a battery arbitrage problem. Six tools compared."
description: "Best solar design software New Zealand 2026. SurgePV vs PVsyst, Aurora, PV*SOL on time-varying export rates, retailer buyback spreads from 5c to 40c, AS/NZS 4777.2 and battery dispatch."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "11 min"
image: "/blog-images/solar-design-software-new-zealand.svg"
author: "Keyur Rakholiya"
keywords:
  - best solar design software new zealand
  - solar design software nz
  - new zealand solar software
  - solar buy back rate software
  - battery dispatch software nz
  - pv design software new zealand
faqs:
  - q: "What changed for New Zealand solar export in July 2026?"
    a: "Since 1 July 2026 the four largest retailers have been required to offer a plan where the export rate varies through the day. Importantly, the rule sets the shape of the price rather than its level. Retailers can place the peaks and troughs where they choose and there is no floor, so the practical effect differs considerably between providers. For design it means export value is no longer a single number per customer but a profile, and the array and battery have to be optimised against that profile rather than against a flat rate."
  - q: "Why do time-varying export rates change the design so much?"
    a: "Because the peaks generally do not coincide with when a solar array generates. Peak export rates tend to fall in the evening, after generation has collapsed. A system without storage exports at midday into the trough and has nothing left when the price is highest. A system with storage can hold midday generation and release it into the peak. That converts New Zealand residential solar from a generation problem into an arbitrage problem, and it cannot be modelled without hourly dispatch simulation."
  - q: "How wide is the spread between New Zealand retailers?"
    a: "Very wide, and it is the largest single variable in most quotes. Published rates run from around 5 cents per kWh at the low end among the majors to 17 cents flat on plans such as Meridian Solar Plan and Octopus Flexi, with peak rates reaching considerably higher, including around 24 cents on Meridian's winter peak and up to 40 cents on Octopus OctopusPeaker in winter. Since four retailers hold roughly 87 percent of connections, this is not a fringe consideration. The same array can produce quite different returns depending purely on the plan."
  - q: "Does New Zealand have a feed-in tariff?"
    a: "No. There is no government-mandated feed-in tariff. Each retailer sets its own buyback rates and can change them, which is a materially different situation from markets with a regulated export price. For design it means the export assumption in any model is a commercial term subject to change rather than a regulated figure, so a design justified on a specific rate carries a risk that should be tested rather than ignored."
  - q: "What standards govern New Zealand solar installation?"
    a: "AS/NZS 4777.2 for grid-connected inverter requirements and AS/NZS 5033 for the photovoltaic array installation, shared with Australia. A design tool carrying these as a standards library rather than leaving them to the installer reduces the number of installations that need remediation, and the shared trans-Tasman basis means much of the Australian component and compliance work carries across."
  - q: "Which software handles New Zealand solar design best in 2026?"
    a: "SurgePV, because the market's move to time-varying export makes battery dispatch against an hourly price profile the central design task, and it runs 8,760-hour simulation with dispatch optimisation and configurable retailer rate profiles at $1,299 to $1,899 per user per year. PVsyst remains the bankable reference for large commercial and ground-mount. PV*SOL handles residential detail well. Aurora is built around US net metering, which New Zealand does not operate."
  - q: "Is storage now essential for New Zealand residential solar?"
    a: "Not essential, but far easier to justify than before, and the case depends on the plan. On a flat 17 cent buyback with strong daytime consumption, a well-sized array without storage can perform perfectly well. On a time-varying plan with a high evening peak and low midday trough, storage captures a spread that panels alone cannot reach. The honest position is that it is now a calculation whose answer varies by household and by retailer, which is precisely why hourly modelling matters."
featured: false
---

New Zealand quietly became one of the more interesting solar design markets on 1 July 2026. Since that date the four largest retailers, holding roughly 87 percent of connections between them, have been required to offer a plan where the export rate varies through the day. The rule sets the shape of the price, not its level, so retailers place the peaks where they choose and there is no floor. The peaks generally fall in the evening, after solar generation has collapsed. That single fact turns a generation problem into an arbitrage problem, and it means a design tool that cannot dispatch a battery against an hourly price profile cannot size a New Zealand system properly. This guide covers what the market now requires, and which tools deliver it.

> **TL;DR**
> - Since 1 July 2026 the big four retailers must offer a time-varying export plan; the rule sets shape, not level, and there is no floor.
> - Peak export rates generally fall in the evening, when a solar array is producing nothing.
> - Published buyback rates span roughly 5 cents at the low end among majors to 17 cents flat, with peaks reaching around 24 cents and up to 40 cents on some winter peak plans.
> - There is no government-mandated feed-in tariff, so every rate is a commercial term that can change.
> - Storage moves from optional to central on time-varying plans, because it reaches a peak the array cannot.
> - AS/NZS 4777.2 and AS/NZS 5033 apply, shared with Australia.
> - [SurgePV](https://surgepv.com/) at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** The best solar design software for New Zealand installers in 2026 is SurgePV, because time-varying export made battery dispatch against an hourly price profile the central design task and SurgePV simulates it directly. PVsyst is the bankable reference for large commercial and ground-mount. PV*SOL is credible for residential detail. Aurora assumes US net metering, which New Zealand does not operate.

For the quoting side see our [best solar proposal software New Zealand](/blog/solar-proposal-software-new-zealand/) guide, and the global [best solar design software](/blog/best-solar-design-software/) ranking for the category without the local lens.

<div class="inline-cta">
<h3>Dispatch a battery against a real NZ export profile</h3>
<p>A SurgePV engineer takes one of your addresses and the customer's retailer plan, runs 8,760-hour dispatch simulation, and shows what storage captures that panels alone cannot reach.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Peaks Fall When The Array Is Asleep

This is the central New Zealand design fact and it is worth stating without hedging. On time-varying export plans, the highest rates are generally paid in the evening. Solar arrays generate nothing in the evening.

| Time of day | Typical export value on a time-varying plan | What an array without storage does |
| --- | --- | --- |
| Midday | Trough, potentially very low | Exports heavily into the worst price |
| Late afternoon | Rising | Output falling |
| Evening peak | Highest rate of the day | Producing nothing |
| Overnight | Low | Producing nothing |

> **What most New Zealand sizing gets wrong.** It applies the customer's headline buyback rate to total annual export. On a flat plan that is roughly correct. On a time-varying plan it can be badly wrong, because the array exports overwhelmingly into the hours when the rate is at its lowest, and the headline figure is usually the peak.

The design response is storage, and the reasoning is unusually clean. A battery charged from midday surplus and discharged into the evening peak is not merely shifting consumption, it is buying energy at the trough rate and selling it at the peak rate, with the array supplying the energy for free. On a plan with a wide spread that is a genuinely attractive arbitrage.

It also means two households on the same street with identical arrays can have quite different optimal configurations depending on which plan they are on. That is unusual, and it makes the retailer question part of the design process rather than an afterthought.

## The Retailer Spread Is The Largest Variable In The Model

New Zealand has no government-mandated feed-in tariff. Every rate is a commercial term set by the retailer and changeable.

Published rates span a wide range. Among the majors the low end sits around 5 cents per kWh, flat plans such as Meridian Solar Plan and Octopus Flexi reach 17 cents, and peak rates go considerably higher, including around 24 cents on Meridian's winter peak and up to 40 cents on Octopus OctopusPeaker in winter.

Two design consequences follow.

**The plan is a design input, not a footnote.** A spread this wide changes the optimal array size, the storage case, and whether the project makes sense at all. Any tool that treats the export rate as a single configurable number, rather than an hourly profile per retailer, is losing most of the available accuracy.

**Rate risk should be tested, not ignored.** Because there is no regulated floor, a design justified by a high peak rate is exposed if the retailer revises it. Testing the design against a lower rate assumption, and preferring configurations whose ranking does not change, is the same robustness discipline that applies in other unregulated export markets. Value that comes from displacing the household's own consumption is insulated from this entirely, which is a point in favour of self-consumption over export arbitrage where the two compete.

## Self-Consumption Still Beats Arbitrage, Usually

It is worth keeping the hierarchy straight, because the excitement around time-varying rates can obscure it.

A kilowatt-hour the household consumes directly avoids the retail import price, which is generally higher than any export rate on offer. A kilowatt-hour stored and exported into the evening peak earns the peak export rate. On most plans the first is still worth more than the second.

So the design ordering is: maximise direct self-consumption first, then use storage to cover the household's own evening demand, and only then consider exporting stored energy into the peak. A battery that discharges into the house during the evening is doing the highest-value thing available. Exporting into the peak is what it should do with whatever is left.

The exception is plans with unusually high peak export rates, where peak export can approach or exceed the import price. There the ordering can genuinely flip for part of the evening, and only an hourly model comparing both against the actual load will find the crossover. This is the kind of optimisation that is trivial to state and impossible to do by hand.

<div class="inline-cta">
<h3>Compare the same house on three retailer plans</h3>
<p>SurgePV models each retailer's export profile separately, so you can show a customer how much their choice of plan is worth before they commit to hardware.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Rest Of The New Zealand Requirement Set

**AS/NZS 4777.2** governs grid-connected inverter requirements and **AS/NZS 5033** the array installation, both shared with Australia. The trans-Tasman basis means much of the Australian component library and compliance work carries across, which is convenient for installers operating in both markets.

**Winter peaks matter more than in most markets.** Several of the highest export rates are winter-specific, and New Zealand winter generation is materially lower than summer. A design optimised on annual averages will misjudge the value of a winter peak plan, because the hours when the rate is highest are also the hours when there is least energy to sell.

**Regional variation.** New Zealand spans a considerable latitude range and its climate varies sharply between regions and between the islands. Site weather data rather than a national assumption.

## The Six Platforms New Zealand Installers Should Evaluate

### 1. SurgePV, the all-in-one pick
Hourly export price profiles configurable per retailer plan, battery dispatch optimisation against both load and export price, 8,760-hour simulation, AS/NZS standards library shared with Australian work, AI 3D roof modelling from satellite imagery, and [white-label proposals](https://surgepv.com/solar-proposals) with e-signature generated from the same design record. $1,299 to $1,899 per user per year.

### 2. PVsyst
The bankable reference for large commercial and ground-mount projects, frequently named by lenders. Strong simulation, no proposal layer, retailer plan logic applied manually. See our [PVsyst alternative](/blog/pvsyst-alternative/) review.

### 3. PV*SOL
Capable residential and small commercial modelling with good component libraries and solid self-consumption tooling. Desktop-based. Our [PV*SOL alternative](/blog/pvsol-alternative/) guide covers the trade-offs.

### 4. OpenSolar
Free, quick, and widely used in trans-Tasman residential work. Weaker on the hourly dispatch against time-varying export prices that now decides the New Zealand answer. See our [OpenSolar alternative](/blog/opensolar-alternative/) comparison.

### 5. Aurora Solar
Strong residential design built around US net metering, which New Zealand does not operate. See our [Aurora Solar alternative](/blog/aurora-solar-alternative/) comparison.

### 6. Spreadsheets plus a yield tool
Still common in smaller practices, and the most likely place a single flat buyback rate is standing in for an hourly profile.

## New Zealand Solar Design Software Comparison

| Tool | Hourly export price profiles | Battery dispatch vs load and price | Retailer plan configuration | AS/NZS standards library | Proposal from design record | Pricing (per user / yr) |
| --- | --- | --- | --- | --- | --- | --- |
| **SurgePV** | Yes | Yes | Yes | Yes | Yes | $1,299 to $1,899 |
| PVsyst | Manual | Partial | Manual | Manual | No | ~EUR 500 |
| PV*SOL | Partial | Yes | Manual | Partial | Partial | ~EUR 1,000+ |
| OpenSolar | No | Partial | No | Partial | Yes | Free |
| Aurora Solar | No | Yes | No | No | Yes | $1,908 to $3,108+ |
| Spreadsheet | Manual | Manual | Manual | Manual | No | Effectively free |

## Worked Example: 6 kW Array, Flat Plan Versus Time-Varying With Storage

An illustrative calculation showing where the value moves, not a specific customer project. Inputs: 6 kW array, household with modest daytime and strong evening consumption, three configurations compared.

| | A: flat 17c plan, no storage | B: time-varying plan, no storage | C: time-varying plan with storage |
| --- | --- | --- | --- |
| Midday surplus | Exported at 17c | Exported into the trough | Stored |
| Evening household demand | Imported at retail | Imported at retail | Served from battery |
| Evening export | None | None | Residual into the peak |
| Export value captured | Moderate and predictable | Poor | Strong |
| Best feature | Simplicity | None | Captures the spread |
| Suits | Households that cannot add storage | Nobody, on this load profile | This household |

Column B is the trap the July 2026 change created. A household moved onto a time-varying plan without storage is worse off than on a decent flat plan, because all its export lands in the trough and it buys its evening energy at retail. The headline peak rate on that plan is real and entirely out of reach.

Column C is what the plan is designed to reward. The battery serves the evening load first, avoiding retail import, and exports what remains into the peak. Whether the hardware cost justifies it depends on the size of the spread and the household's evening demand, which is a calculation rather than a rule.

The practical advice for installers is that recommending a time-varying plan and recommending storage are the same recommendation. Splitting them leaves customers in column B.

## Who Should Choose What

- **Choose SurgePV** if you need hourly export profiles, battery dispatch and retailer plan comparison in one tool.
- **Choose PVsyst** where a lender names it on commercial or ground-mount work, paired with separate quoting.
- **Choose PV*SOL** if your team is desktop-based and does detailed residential modelling.
- **Avoid flat-rate export assumptions.** Since July 2026 they misrepresent the majority of the market.

<div class="inline-cta">
<h3>Model the plan and the battery as one decision</h3>
<p>Hourly export price profiles per retailer, battery dispatch against load and price, AS/NZS standards library and white-label proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/new-zealand" target="_blank" rel="noopener noreferrer">New Zealand compliance library</a></p>
</div>

## The Bottom Line

New Zealand solar design changed character in July 2026 and most quoting has not followed.

- **Treat the retailer plan as a design input.** Rates span 5 cents to 40 cents depending on plan and hour, and that decides the optimal configuration.
- **Recommend the plan and the battery together.** A time-varying plan without storage leaves the customer exporting into the trough and importing at the peak.
- **Keep self-consumption first.** Direct use still beats peak export on most plans, and it is insulated from rate changes.
- **Run a real project before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring a New Zealand address, or reach the Qbits team [here](/contact-us/) for AS/NZS 4777.2 compliant inverter and battery specification.
