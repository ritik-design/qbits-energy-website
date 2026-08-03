---
title: "Solar Shading Analysis Software Saudi Arabia: 2026 Guide"
excerpt: "Exported power is credited at 5 halalas per kWh while commercial imports run to 32. In Saudi Arabia a shadow that hits self-consumption costs six times one that hits surplus, and dust changes the arithmetic again."
description: "Solar shading analysis software Saudi Arabia 2026: net billing at 5 halalas per kWh, soiling of 2 to 5 percent per day, dust storm recovery, and why shading must be modelled against on-site load."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "11 min"
image: "/blog-images/solar-shading-analysis-software-saudi-arabia.svg"
author: "Keyur Rakholiya"
keywords:
  - solar shading analysis software saudi arabia
  - shading analysis saudi arabia
  - saudi solar shading software
  - solar shade analysis ksa
  - pv shading software saudi arabia
  - net billing shading loss saudi
faqs:
  - q: "How does Saudi net billing change what a shading loss costs?"
    a: "It creates one of the widest value gaps in any solar market. Under the Small-Scale Solar PV framework, surplus exported to the grid is credited at around 5 halalas per kWh, while commercial customers face tiered import tariffs running up to roughly 32 halalas per kWh and industrial customers up to around 20. A shaded kilowatt-hour that would have been consumed on site can therefore cost six times one that would have been exported. Any shading tool that reports a single annual percentage is discarding the piece of information that determines the cost."
  - q: "What is the practical design consequence of that gap?"
    a: "Systems get sized to on-site load rather than to available roof, and shading analysis has to be judged against the load profile. If a facility's daytime consumption absorbs everything the array produces, every shaded kilowatt-hour is worth full import tariff and mitigation has a real budget. If the system already exports surplus at midday, shading in those hours costs 5 halalas and mitigation almost never pays. The same obstruction, the same shadow, and a completely different recommendation."
  - q: "How bad is soiling in Saudi Arabia and how does it interact with shading?"
    a: "Severe. Measured studies in the Kingdom report daily efficiency losses in the region of 2 to 5 percent from dust deposition, a single sandstorm has been observed to cut module output by around 20 percent, and a module left uncleaned for six months in Dhahran lost more than half its power. Because both soiling and shading act by constraining the weakest cells in a series string, they interact rather than add. Stacking a flat soiling derate on top of a separately computed shading loss overstates the total and misprices the cleaning schedule."
  - q: "Does dust make shading analysis less important?"
    a: "The opposite, because it makes the interaction matter. Once soiling is removing several percent within days of a clean, the marginal value of recovering a shaded kilowatt-hour depends on how soiled the module already is. It also changes cleaning priorities: a module that spends hours a day in geometric shadow recovers less from a wash than a clear one, so a uniform cleaning schedule over-invests in the shaded parts of the array. You need both losses in one model to schedule maintenance sensibly."
  - q: "What obstructions dominate Saudi rooftop shading?"
    a: "Self-shading, mostly. Commercial and industrial buildings in the Kingdom are typically flat-roofed with perimeter parapets, and arrays sit on tilted frames in rows, so parapet shading and inter-row shading account for most of it. Beyond that, rooftop plant, chillers, water tanks and lift overruns are common and tall. Because these obstructions are known at design stage, good shading analysis in Saudi Arabia removes losses rather than merely reporting them."
  - q: "Does the 5 MW distribution area cap affect shading design?"
    a: "It affects portfolio design more than individual arrays. The aggregate cap per distribution area can constrain multi-site commercial and industrial portfolios, which raises the value of extracting maximum output from each approved connection. When capacity is rationed rather than roof area, accepting shading in order to fit more modules becomes less attractive and optimising the output of each installed kilowatt becomes more so. That is a different optimisation from the area-constrained case, and it needs a tool that can model both."
  - q: "Which software handles Saudi shading analysis best?"
    a: "SurgePV, because it runs 8,760-hour module-level shading with soiling in the same loss chain and prices the loss against net billing and the tiered import tariffs, at $1,299 to $1,899 per user per year. PVsyst remains the reference for utility-scale projects and wherever a lender or a large developer names it. HelioScope is credible for commercial rooftops. Avoid tools that report a single annual shading percentage, because under a six to one value gap that number does not translate into money."
featured: false
---

[Saudi](/blog/solar-software-saudi-arabia/) solar [shading analysis](https://www.surgepv.com/best-solar-software/shading-analysis) is governed by a number that has nothing to do with geometry. Under the Kingdom's Small-Scale Solar PV framework, surplus exported to the grid is credited at roughly 5 halalas per kWh, while commercial import tariffs run in tiers up to around 32 halalas and industrial up to around 20. That is a gap of up to six to one between what a self-consumed kilowatt-hour is worth and what an exported one is worth. A shading report that gives you one annual percentage has told you the quantity of the loss and withheld its price. This guide covers what shading analysis has to do differently in [Saudi Arabia](https://www.surgepv.com/best-solar-software/saudi-arabia), and which tools do it.

> **TL;DR**
> - Exports settle near 5 halalas per kWh against commercial imports up to roughly 32, so the hour a shadow falls can change its cost sixfold.
> - Systems are sized to on-site load rather than available roof, which means shading must be assessed against a consumption profile.
> - Measured Saudi soiling losses run around 2 to 5 percent per day, with a single sandstorm observed to cut output about 20 percent.
> - [Soiling](/glossary/soiling/) and shading interact electrically, so stacking separate derates overstates the loss and misprices cleaning.
> - Most Saudi rooftop shading is self-inflicted parapet and inter-row geometry, which means it can be designed out.
> - [SurgePV](https://surgepv.com/) runs 8,760-hour module-level shading with soiling in the loss chain at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** Solar [shading analysis software](https://heavendesigns.in/blog/solar-shading-analysis-software/) for Saudi projects has to run 8,760 hourly steps at module level, carry soiling in the same electrical model rather than as a flat annual derate, and price each lost kilowatt-hour against the correct side of a very wide net billing spread. In a market where a shaded kilowatt-hour can be worth 5 halalas or 32, the tariff model is not an optional extra bolted onto the shading engine. It is the part that makes the shading number mean anything.

The general methodology is covered in our [solar shading analysis software](/blog/solar-shading-analysis-software/) guide, and the simulation approach in our [PV yield simulation software](/blog/pv-yield-simulation-software/) guide. This page covers what changes in the Kingdom. For the wider platform comparison see [best solar design software Saudi Arabia](/blog/solar-design-software-saudi-arabia/).

<div class="inline-cta">
<h3>Price a real Saudi roof against net billing</h3>
<p>A SurgePV engineer takes one of your sites, runs 8,760-hour module-level shading, and splits the loss into exported kilowatt-hours at 5 halalas and self-consumed kilowatt-hours at your actual tariff tier.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Six To One Gap And What It Does To Design

The Small-Scale Solar PV framework covers grid-connected systems from 1 kW to 2 MW and settles exports through net billing rather than net metering. The consequence for design is that surplus generation is close to worthless relative to displaced consumption.

| What the shadow destroys | Roughly what it is worth | Does mitigation pay? |
| --- | --- | --- |
| A kilowatt-hour that would have been exported | About 5 halalas | Almost never |
| A kilowatt-hour displacing industrial import | Up to about 20 halalas | Sometimes |
| A kilowatt-hour displacing commercial import at the top tier | Up to about 32 halalas | Frequently |

This reshapes the whole design brief. In markets with generous export compensation, the objective is maximum annual generation and the roof is filled. In Saudi Arabia the objective is maximum displaced consumption, so systems are sized to the daytime load curve and generation beyond it earns very little.

Shading analysis inherits that logic. The question is not how many kilowatt-hours the shadow destroys but how many *billable* kilowatt-hours it destroys, and those are only the ones that would have been consumed on site. On a system deliberately sized below peak daytime load, essentially every shaded kilowatt-hour is expensive. On a system that overshoots at midday, the midday shadow is nearly free.

> **The question to ask before quoting a mitigation.** Not "how much energy does this obstruction cost?" but "in the hours this obstruction shades, is the facility importing or exporting?" If it is exporting, the shadow costs 5 halalas per unit and the tree stays.

## Soiling At Saudi Rates

Measured work in the Kingdom puts daily dust-driven efficiency loss in the region of 2 to 5 percent, a single sandstorm has been recorded reducing module power output around 20 percent, and a module in Dhahran left uncleaned for six months lost more than half its output. Studies in Madinah found losses near 28 percent over sixty days of accumulation.

Those are not numbers a flat annual derate represents well, for two reasons.

The first is shape. Soiling accumulates between cleans and resets when the array is washed, so the loss is a sawtooth, not a constant. A flat annual figure gets the total roughly right and the timing entirely wrong, which matters because the peaks may coincide with the facility's highest-tariff consumption.

The second is interaction with shading. Modules in a string are wired in series, so current is limited by the weakest cells. Soiling weakens cells unevenly and geometric shading weakens a different set. When both apply, the constraint is whichever combination is worst, not the arithmetic sum of two independent percentages. Stacking the derates typically overstates the total loss.

## Why Cleaning Schedules Need The Shading Map

The practical payoff from modelling the two together is maintenance spend, which in the Kingdom is a substantial line item.

Cleaning recovers soiling loss. But on a module that spends several hours a day in parapet or inter-row shadow, part of that recovery is unavailable, because during those hours the module is constrained by shading regardless of how clean it is. The return on washing that module is therefore lower than on a clear one.

A uniform roof-wide cleaning schedule ignores this and over-invests in the shaded portions of the array. A schedule informed by the shading map cleans the unshaded rows more often and the parapet-adjacent rows less, and delivers more recovered energy for the same spend. Getting there requires shading resolved at module level and soiling in the same model, which is a fairly short list of tools.

There is a second operational trigger worth building into the schedule. After a sandstorm, the sensible response is immediate cleaning rather than waiting for the next scheduled visit, because the step change in soiling is large enough to dwarf the routine accumulation curve.

<div class="inline-cta">
<h3>Build a cleaning schedule from the shading map</h3>
<p>SurgePV carries dust and geometric shading through the same 8,760-hour module-level loss chain, so you can see which rows actually repay a wash and which are shading-limited anyway.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Self-Shading Is The Main Event

Saudi commercial and industrial buildings are typically flat-roofed with perimeter parapets, and arrays are mounted on tilted frames in rows. So the dominant shading sources are the parapet and the array's own preceding row, with rooftop plant, chillers, water tanks and lift overruns behind them.

That is good news, because these obstructions are known before anything is installed. Two design levers follow.

**Parapet setback should vary by edge.** The usual practice applies one setback figure around the entire perimeter, sized for the worst case. But the eastern, western and northern parapets shade the array at different times of day and for different durations, with different amounts of energy and different tariff value behind those hours. Modelling each edge separately usually returns usable roof area.

**Row spacing is an economic optimisation.** The solstice-avoidance rule produces wide rows and fewer modules. The better method simulates several candidate spacings across all 8,760 hours and prices the result against the tariff and the load curve.

Here the Saudi capacity position changes the answer relative to a purely area-constrained market. Where the 5 MW aggregate cap per distribution area is the binding constraint on a multi-site portfolio, the scarce resource is approved capacity rather than roof, and squeezing extra modules onto a roof at the cost of shading them is less attractive. Where roof area binds instead, tighter spacing usually wins. A competent tool should let you optimise for either, because Saudi developers face both cases.

## Worked Example: The Same Array Against Two Load Profiles

An illustrative calculation showing why the load profile decides the recommendation, not a specific customer project. Both sites have a 300 kWp rooftop array with an identical 8% annual shading loss of roughly 42 MWh, arising mostly from parapet and inter-row geometry.

| | Site A, daytime load exceeds generation | Site B, generation exceeds midday load |
| --- | --- | --- |
| Shaded kWh that were self-consumed | roughly 42 MWh | roughly 15 MWh |
| Shaded kWh that were export | negligible | roughly 27 MWh |
| Value at commercial tariff near 32 halalas | about 13,400 SAR | about 4,800 SAR |
| Value of export loss at 5 halalas | negligible | about 1,350 SAR |
| Total annual cost of shading | about 13,400 SAR | about 6,150 SAR |
| Reasonable mitigation budget | Real | Marginal |

Same array, same shading percentage, and more than double the cost on one site. The shading report was identical for both. The information that decided the recommendation was the load curve, which is why shading analysis that lives apart from consumption modelling cannot answer the question a Saudi client is actually asking.

## Who Should Choose What

- **Choose SurgePV** if you want 8,760-hour module-level shading with soiling in the same loss chain and net billing pricing on both sides of the loss.
- **Choose PVsyst** for utility-scale projects and wherever a lender or a large developer names it.
- **Choose HelioScope** for commercial rooftop engineering where the customer-facing document is produced elsewhere.
- **Avoid annual-percentage shading reports and flat soiling derates.** In the Kingdom, both of those shortcuts hide the numbers that decide the project.

<div class="inline-cta">
<h3>Shading analysis that speaks net billing and dust</h3>
<p>8,760-hour module-level shading, soiling in the electrical model, tiered tariff and 5 halala export pricing, per-edge parapet optimisation and white-label proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/saudi-arabia" target="_blank" rel="noopener noreferrer">Saudi Arabia compliance library</a></p>
</div>

## The Bottom Line

In Saudi Arabia the tariff decides what a shadow costs, and dust decides how you maintain around it.

- **Split the loss by destination.** Exports settle near 5 halalas and self-consumption displaces up to 32, so only one of them justifies mitigation.
- **Model soiling and shading together.** Stacked derates overstate the loss and send the cleaning crew to the wrong rows.
- **Design the self-shading out.** Parapet setbacks and row spacing are decisions, not constraints, and they are worth more attention than any tree.
- **Run a real roof before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring a Saudi address, or reach the Qbits team [here](/contact-us/) for inverter and optimiser specification against the finished design.
