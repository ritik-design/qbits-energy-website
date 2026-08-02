---
title: "Best Solar Design Software Spain: 2026 Guide"
excerpt: "Spanish surplus credits settle monthly, never roll over, and can never take the energy bill below zero. That caps oversizing in a way annual modelling cannot see. Six tools compared."
description: "Best solar design software Spain 2026. SurgePV vs PV*SOL, Aurora, PVsyst on RD 244/2019, compensación simplificada, the monthly zero floor and the new 5 km collective self-consumption radius."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "11 min"
image: "/blog-images/solar-design-software-spain.svg"
author: "Keyur Rakholiya"
keywords:
  - best solar design software spain
  - solar design software spain
  - spanish solar design software
  - software fotovoltaico espana
  - autoconsumo design software
  - compensacion simplificada software
  - pv design software spain
faqs:
  - q: "What is the single most important rule for sizing a Spanish system?"
    a: "That compensación simplificada settles monthly with no rollover, and the credit can never take the energy component of the bill below zero. Those two constraints together mean surplus generated in a month when the household consumes little is simply lost, and there is no annual reconciliation to recover it. A system sized against annual consumption will therefore overproduce in summer, hit the monthly floor, and throw away energy that an annual model shows as fully compensated."
  - q: "Why does the monthly zero floor matter so much?"
    a: "Because it caps the useful value of surplus at whatever the household spends on energy that month. In a Spanish summer, generation peaks while a household's electricity consumption may be modest, so the credit runs into the ceiling. The excess is not banked and not paid. A design tool that compares annual generation against annual consumption cannot see this happening. It needs to settle month by month, applying the floor each time, which is a specific capability rather than a general simulation feature."
  - q: "What changed for collective self-consumption in 2026?"
    a: "The permitted radius expanded substantially, with sharing now allowed within up to 5 kilometres between the generating installation and the participating consumers, for plants up to 5 MW. That is a meaningful change of scope. It makes shared installations viable across a neighbourhood rather than a single building, and it opens designs where surplus from one site is allocated to consumers who can actually absorb it. For design software the requirement is the ability to model allocation coefficients across multiple consumers, not just a single meter."
  - q: "Does RD 244/2019 still govern Spanish self-consumption?"
    a: "Yes. RD 244/2019 remains the operative framework in 2026, and the core compensación simplificada mechanism has been stable since 2019: monthly bill credits at the hourly spot price, capped at consumption, with no rollover. The stability is useful because it means a well-built Spanish model does not need rewriting every year, unlike several neighbouring markets. The changes have come at the edges, most notably the collective self-consumption radius."
  - q: "At what rate is Spanish surplus actually credited?"
    a: "At the hourly spot price rather than a fixed tariff, which introduces a second modelling requirement. Because the credit tracks wholesale prices hour by hour, and because solar generation across Spain peaks at the same times, midday spot prices are often depressed exactly when a system is exporting most. A design tool that applies a single average export price will overstate the value of surplus. Modelling against an hourly price series is the honest approach."
  - q: "Which software handles Spanish solar design best in 2026?"
    a: "SurgePV, because it settles compensación simplificada monthly with the zero floor applied and runs 8,760-hour simulation against hourly pricing, at $1,299 to $1,899 per user per year. PVsyst remains the bankable reference for large ground-mount and is frequently named by lenders. PV*SOL handles European residential detail well. Aurora is built around US net metering, which has no Spanish counterpart."
  - q: "Do the regional and municipal incentives affect design?"
    a: "They affect the economics rather than the engineering, but they are large enough to change what gets built. IDAE-funded programmes are administered regionally so availability and terms differ by autonomous community, and many municipalities offer an IBI property tax reduction whose size and duration are set locally. Because these vary by location rather than nationally, a design tool that carries them as configurable inputs is more useful than one that hard-codes a national assumption."
featured: false
---

Spanish solar design turns on a rule that most simulation tools cannot represent. Under compensación simplificada, surplus is credited against the monthly bill at the hourly spot price, the credit can never take the energy component of that bill below zero, and nothing rolls over into the following month. Those three constraints operate together, and they mean a system sized against annual consumption will generate summer surplus that is neither banked nor paid. An annual model shows that energy as fully compensated. The customer's June bill shows otherwise. This guide covers what Spanish design software has to do, and which tools do it.

> **TL;DR**
> - RD 244/2019 remains the operative framework, with compensación simplificada unchanged in its core mechanism since 2019.
> - Surplus is credited monthly at the hourly spot price, capped so the energy component of the bill cannot go below zero.
> - There is no rollover between months, so summer surplus beyond the monthly cap is lost outright.
> - Sizing must therefore be checked month by month, not against annual consumption.
> - Collective self-consumption now permits sharing within a 5 km radius for plants up to 5 MW, a substantial 2026 expansion.
> - Crediting at hourly spot means midday export is valued when solar-driven prices are lowest, so average pricing overstates it.
> - [SurgePV](https://surgepv.com/) at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** The best solar design software for Spanish installers in 2026 is SurgePV, because it settles compensación simplificada monthly with the zero floor applied and prices surplus against hourly rather than average rates. PVsyst is the bankable reference for large ground-mount. PV*SOL is credible for European residential detail. Aurora assumes US net metering, which Spain does not operate.

For the quoting side see our [best solar proposal software Spain](/blog/solar-proposal-software-spain/) guide, and the global [best solar design software](/blog/best-solar-design-software/) ranking for the category without the local lens.

<div class="inline-cta">
<h3>Check a Spanish design month by month</h3>
<p>A SurgePV engineer takes one of your addresses, settles compensación simplificada month by month with the zero floor applied, and shows you which months are throwing surplus away.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Monthly Floor Is The Whole Design Constraint

Three rules define compensación simplificada, and each one on its own would be manageable. Together they produce behaviour that annual modelling cannot reproduce.

| Rule | Consequence for design |
| --- | --- |
| Settlement is monthly | Each month stands alone, so seasonal balancing does not happen |
| Credit cannot take the energy bill below zero | Surplus value is capped at that month's energy spend |
| No rollover to future months | Anything above the cap is lost, not banked |

Consider what this does to a typical Spanish household. Generation peaks in June and July. Electricity consumption in many Spanish homes does not peak with it, and even where air conditioning lifts summer demand the load and the generation do not track hour for hour. So the summer months are exactly when surplus is largest and exactly when the monthly cap is most likely to bind.

> **What most Spanish sizing gets wrong.** It compares annual generation to annual consumption and concludes that a system "covers" the household. In practice the winter months underproduce and import, the summer months overproduce and hit the floor, and the annual figures conceal both. The customer sees a system that was supposed to eliminate their bill still charging them in January while wasting energy in July.

The correct method is straightforward once the constraint is understood. Simulate hourly, aggregate to monthly, apply the cap in each month separately, and look for the months where surplus exceeds what the credit can absorb. Those months tell you the array is oversized for this load profile, regardless of what the annual total says.

## Hourly Spot Pricing Cuts The Value Of Midday Export

The second Spanish subtlety is what surplus is worth when it does get credited. The rate is the hourly spot price, not a fixed export tariff.

That matters because Spain has a great deal of solar on the system, and solar generation is correlated across the country. When your customer's array is exporting hardest, so is everyone else's, and midday spot prices reflect that. The hours in which a residential system produces most surplus are frequently among the lowest-priced hours of the day.

A design tool that applies an average annual electricity price to exported units will therefore overstate the value of surplus, sometimes considerably. The honest approach models against an hourly price series, which also strengthens the case for load shifting and storage: moving consumption into the midday window, or storing surplus for the evening peak, captures a spread that average pricing renders invisible.

## Collective Self-Consumption At 5 Kilometres

The significant 2026 change is the expansion of the permitted radius for collective self-consumption, now allowing sharing within up to 5 kilometres between the generating installation and participating consumers, for plants up to 5 MW.

This is a genuine change of scope rather than a technical adjustment. Previously collective schemes were effectively constrained to a building or an immediate cluster. At 5 kilometres the design question becomes which consumers to attach to a generating site, and that changes the economics in a specific way.

The monthly floor problem described above is fundamentally a mismatch between when energy is generated and who can absorb it. Collective self-consumption addresses that directly. Surplus from a site with modest consumption can be allocated to participants who consume more, so it lands under someone's cap instead of being lost.

Designing for this requires the ability to model allocation coefficients across multiple consumers with different load profiles, and to test alternative allocations. That is a materially different capability from single-meter simulation, and it is worth checking for explicitly when evaluating a platform, because most tools built for residential export markets do not have it.

<div class="inline-cta">
<h3>Model allocation across a collective scheme</h3>
<p>SurgePV lets you attach multiple consumers with different load profiles to one generating site and test allocation coefficients, so surplus lands where someone can actually absorb it.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Rest Of The Spanish Requirement Set

**Regional and municipal incentives vary by location.** IDAE-funded programmes are administered by the autonomous communities, so terms and availability differ. Many municipalities offer an IBI property tax reduction, with size and duration set locally. Because these are local rather than national, a tool that carries them as configurable inputs beats one that hard-codes an assumption.

**Systems up to 100 kW** fall within the simplified compensation arrangement, which covers most residential and a good deal of small commercial work.

**Latitude and climate range.** Spain spans a wide range of irradiance conditions, and the difference between the north coast and Andalusia is large enough to shift both yield and the monthly surplus pattern. Use site weather data.

## The Six Platforms Spanish Installers Should Evaluate

### 1. SurgePV, the all-in-one pick
Monthly settlement of compensación simplificada with the zero floor applied, hourly spot price modelling, collective self-consumption allocation, 8,760-hour simulation, AI 3D roof modelling from satellite imagery, and [white-label proposals](https://surgepv.com/solar-proposals) with e-signature in 9 languages including Spanish, generated from the same design record. $1,299 to $1,899 per user per year.

### 2. PVsyst
The bankable reference for large ground-mount and commercial projects, frequently named by lenders. Strong simulation, no proposal layer, and Spanish settlement logic has to be applied manually. See our [PVsyst alternative](/blog/pvsyst-alternative/) review.

### 3. PV*SOL
Well established in European residential and small commercial work, with good component libraries and solid self-consumption tooling. Desktop-based. Our [PV*SOL alternative](/blog/pvsol-alternative/) guide covers the trade-offs.

### 4. OpenSolar
Free and quick for residential layout and a fast customer document. Weaker on monthly settlement logic and collective schemes. See our [OpenSolar alternative](/blog/opensolar-alternative/) comparison.

### 5. Aurora Solar
Strong residential design built around US net metering, which Spain does not operate in any form. See our [Aurora Solar alternative](/blog/aurora-solar-alternative/) comparison.

### 6. Spreadsheets plus a generic yield tool
Common in smaller Spanish practices. Flexible, and the usual home of an annual-totals sizing calculation that never sees the monthly floor.

## Spain Solar Design Software Comparison

| Tool | Monthly settlement with zero floor | Hourly spot price modelling | Collective self-consumption allocation | Regional incentive configuration | Spanish proposals | Pricing (per user / yr) |
| --- | --- | --- | --- | --- | --- | --- |
| **SurgePV** | Yes | Yes | Yes | Yes | Yes | $1,299 to $1,899 |
| PVsyst | Manual | Partial | No | Manual | No | ~EUR 500 |
| PV*SOL | Partial | Partial | Partial | Manual | Partial | ~EUR 585 to 845 |
| OpenSolar | No | No | No | No | Yes | Free |
| Aurora Solar | No | No | No | No | No | $1,908 to $3,108+ |
| Spreadsheet | Manual | Manual | Manual | Manual | Manual | Effectively free |

## Worked Example: 5 kWp Near Valencia, Annual Versus Monthly Settlement

An illustrative calculation showing what the monthly floor removes, not a specific customer project. Inputs: 5 kWp array, roughly 8,000 kWh annual generation, household consumption 4,500 kWh, self-consumption around 35%.

| | Annual model | Monthly settlement with floor |
| --- | --- | --- |
| Generation | 8,000 kWh | 8,000 kWh |
| Self-consumed | 2,800 kWh | 2,800 kWh |
| Surplus exported | 5,200 kWh | 5,200 kWh |
| Surplus that earns credit | 5,200 kWh assumed | Substantially less |
| Months where the cap binds | Not visible | Peak summer months |
| Apparent conclusion | System comfortably covers usage | Array is oversized for this load |

The annual model and the monthly model see identical generation and identical consumption. They disagree entirely on what the system is worth, because one of them applies the rule that actually governs the bill.

The design responses are worth ranking. Shifting load into the midday window costs nothing and directly converts capped surplus into self-consumption. Reducing the array saves capital and loses very little value, since the energy removed was the energy hitting the floor. Adding storage moves surplus into evening consumption, capturing full retail instead of a capped credit. And where a collective scheme is available within the 5 km radius, allocating surplus to a consumer who can absorb it may beat all three.

None of those options is visible from an annual calculation. All four fall out of a monthly one.

## Who Should Choose What

- **Choose SurgePV** if you need monthly settlement with the zero floor, hourly pricing and collective allocation in one tool.
- **Choose PVsyst** where a lender or offtaker names it on large ground-mount, paired with separate quoting.
- **Choose PV*SOL** if your team is desktop-based and does detailed European residential modelling.
- **Avoid annual-totals sizing.** In Spain it systematically oversizes systems and hides the months where the surplus is being discarded.

<div class="inline-cta">
<h3>Design against the rule that governs the bill</h3>
<p>Monthly compensación simplificada settlement with the zero floor, hourly spot pricing, collective self-consumption allocation and Spanish-language proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/spain" target="_blank" rel="noopener noreferrer">Spain compliance library</a></p>
</div>

## The Bottom Line

Spanish sizing is a monthly problem that most tools solve annually.

- **Settle month by month with the floor applied.** Surplus above that month's energy spend is lost, and no annual figure will show you that.
- **Price surplus at hourly spot, not an average.** Midday export is credited when solar-driven prices are at their lowest.
- **Consider a collective scheme.** At the new 5 km radius, allocating surplus to a consumer who can absorb it can beat resizing the array.
- **Run a real project before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring a Spanish address, or reach the Qbits team [here](/contact-us/) for inverter and battery specification against the finished design.
