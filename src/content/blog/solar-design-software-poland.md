---
title: "Best Solar Design Software Poland: 2026 Guide"
excerpt: "Net billing pays RCEm for exports and charges retail for imports. Polish design is now a self-consumption optimisation, and Mój Prąd is structured to say so. Six tools compared."
description: "Best solar design software Poland 2026. SurgePV vs PV*SOL, Aurora, PVsyst on net billing, RCEm settlement rates, Mój Prąd storage weighting and self-consumption modelling."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "11 min"
image: "/blog-images/solar-design-software-poland.svg"
author: "Keyur Rakholiya"
keywords:
  - best solar design software poland
  - solar design software poland
  - polish solar design software
  - oprogramowanie fotowoltaika
  - net billing design software
  - moj prad software
  - pv design software poland
faqs:
  - q: "What does net billing mean for Polish system sizing?"
    a: "That the array should be sized to the daytime load curve rather than to annual consumption or available roof. Since April 2022 exports settle at the RCEm market reference rate rather than being banked one for one. In May 2026 RCEm was 191.37 PLN per MWh, roughly 0.19 PLN per kWh, against retail import several times higher. Capacity that produces energy the household cannot use at the moment of generation is therefore earning a fraction of what the same energy costs to buy back, and adding more of it has sharply diminishing returns."
  - q: "How volatile is RCEm and how should a design handle that?"
    a: "Considerably volatile. April 2026 settled at 132.92 PLN per MWh, the lowest since the mechanism was introduced, and May 2026 at 191.37, a swing of more than 40 percent in a single month. A design justified on export revenue is therefore standing on a moving floor. The robust approach is to test the design at two or three RCEm assumptions and to prefer configurations whose value comes from displaced retail import, since retail prices are far more stable than the export reference."
  - q: "How much does storage change Polish self-consumption?"
    a: "A great deal. A Polish household without storage typically self-consumes something in the region of 30 to 40 percent of what it generates, rising to roughly 70 to 80 percent with a battery in the 10 kWh class. Because every point of self-consumption converts a low-value export into a full-value avoided import, that shift is the single largest lever available in Polish residential design. It also means storage sizing and array sizing are one problem, not two, and should be simulated together."
  - q: "How is Mój Prąd structured in relation to storage?"
    a: "It is deliberately weighted toward integrated systems rather than panels alone. Support for photovoltaics on its own sits around 7,000 PLN, while a combination including storage, a heat pump and energy management can reach substantially higher, with storage support of up to around 16,000 PLN within that. The policy intent is to raise self-consumption rather than simply add capacity, which aligns with the underlying net billing economics. A design tool that models the combined system can access an incentive structure that a panels-only design cannot."
  - q: "What payback should a Polish customer expect?"
    a: "It depends heavily on configuration, which is precisely the point. Broadly, photovoltaics without storage tends to land in the region of nine to thirteen years, with storage roughly seven to ten, and with subsidy applied closer to five to six. Those ranges move with electricity prices and RCEm, so they should be presented as ranges rather than single figures. The important design insight is that the ordering is consistent: raising self-consumption improves payback even though it adds capital cost."
  - q: "Which software handles Polish solar design best in 2026?"
    a: "SurgePV, because net billing turned Polish design into an hourly self-consumption and storage problem, and it runs 8,760-hour simulation with battery dispatch and net billing pricing at $1,299 to $1,899 per user per year. PVsyst remains the bankable reference for large ground-mount and is frequently named by lenders. PV*SOL is well established in Polish residential work. Aurora is built around US net metering, which Poland moved away from in 2022."
  - q: "Does VAT treatment affect the design decision?"
    a: "It affects the economics modestly rather than the engineering. Residential photovoltaic installations attract a reduced VAT rate of 8 percent, which improves the case relative to standard-rated purchases. It is worth carrying in the model as a configurable input rather than assumed, because the applicable rate depends on the nature of the property and the works, and a commercial installation will not necessarily qualify."
featured: false
---

Polish solar design stopped being about generation in April 2022. Net billing replaced net metering, exports now settle at the RCEm market reference rate rather than being banked one for one, and that rate sits far below what a prosumer pays to import. In May 2026 RCEm was 191.37 PLN per MWh, roughly 0.19 PLN per kWh, and the month before it was 132.92, the lowest since the mechanism began. Against retail import several times higher, capacity that generates energy the household cannot use at that moment earns very little. The design question became how much of the generation lands inside the load curve, and that is an hourly question. This guide covers what Polish design software has to do, and which tools do it.

> **TL;DR**
> - Net billing has applied since 1 April 2022, with exports settled at RCEm rather than banked.
> - RCEm was 191.37 PLN/MWh in May 2026 and 132.92 in April, the lowest since introduction, so export value is volatile.
> - Retail import costs several times the export rate, so self-consumption is where nearly all the value sits.
> - Self-consumption runs roughly 30 to 40 percent without storage and 70 to 80 percent with a 10 kWh class battery.
> - Mój Prąd is weighted toward integrated systems, around 7,000 PLN for photovoltaics alone and substantially more with storage, a heat pump and energy management.
> - Residential installations attract a reduced 8 percent VAT rate.
> - [SurgePV](https://surgepv.com/) at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** The best solar design software for Polish installers in 2026 is SurgePV, because net billing turned design into an hourly self-consumption and storage optimisation and SurgePV simulates both together against net billing prices. PVsyst is the bankable reference for large ground-mount. PV*SOL is well established in Polish residential work. Aurora assumes US net metering, which Poland moved away from four years ago.

For the quoting side see our [best solar proposal software Poland](/blog/solar-proposal-software-poland/) guide, the shading-specific treatment in [solar shading analysis software Poland](/blog/solar-shading-analysis-software-poland/), and the global [best solar design software](/blog/best-solar-design-software/) ranking.

<div class="inline-cta">
<h3>Size a Polish system against the load curve</h3>
<p>A SurgePV engineer takes one of your addresses, runs 8,760-hour simulation with the battery dispatched against the household profile, and shows the split between exported and self-consumed generation.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Net Billing Made Sizing An Hourly Problem

Under the old net metering arrangement the grid behaved like a bank. Energy exported at midday came back later at a fixed discount, so the timing of generation barely mattered and comparing annual generation against annual consumption was a defensible way to size a system.

Net billing removed that equivalence. Exports are sold at RCEm and imports are bought at retail, and the gap between the two is the entire design problem.

| | Net metering, before April 2022 | Net billing, now |
| --- | --- | --- |
| Export treatment | Banked, returned at a discount | Sold at RCEm |
| Value of an exported kWh | Close to retail | Roughly 0.19 PLN in May 2026 |
| Does the hour of generation matter? | Barely | Decisively |
| Correct sizing basis | Annual consumption | Daytime load curve |
| Role of storage | Marginal | Central |

> **What most Polish sizing still gets wrong.** It fills the roof and compares annual totals. Under net billing that produces a system whose surplus is sold at a fraction of what the same household pays to buy energy back four hours later, and no annual comparison will reveal the loss because the annual totals still balance.

The design consequence is uncomfortable for anyone selling by the kilowatt. Beyond the point where generation meets daytime load, each additional kilowatt earns roughly a fifth of what it would if the household could use it. That does not make additional capacity worthless, but it does mean the marginal kilowatt has to be justified against a much lower value than the first one.

## Self-Consumption Is The Lever, And Storage Is How You Pull It

A Polish household without storage typically self-consumes in the region of 30 to 40 percent of generation. With a battery in the 10 kWh class, that rises to roughly 70 to 80 percent.

That is not an incremental improvement. Doubling the self-consumed share roughly doubles the portion of generation earning full retail value instead of RCEm, and it does so without adding a single module.

The arithmetic is worth stating plainly to customers because it inverts an intuition many hold. Adding panels increases generation but most of the increase is exported at low value. Adding storage increases nothing but converts existing generation from low value to high value. Under net billing the second move is frequently worth more than the first, which is the opposite of what was true under net metering.

The design requirement that follows is specific: the tool must dispatch a battery against an hourly load profile and an hourly generation profile simultaneously. Sizing storage from a rule of thumb, or from daily average consumption, will systematically misjudge it, because what matters is the shape of the overlap between generation and demand rather than either total.

## Mój Prąd Is Structured To Push The Same Direction

The incentive framework reinforces the economics rather than cutting across them. Support for photovoltaics alone sits around 7,000 PLN, while a combined installation including storage, a heat pump and energy management can reach substantially higher, with storage support of up to around 16,000 PLN within that total.

The policy intent is transparent: raise self-consumption rather than simply add capacity. For a designer this creates a straightforward opportunity. A panels-only design accesses the smaller figure. An integrated design accesses the larger one and also delivers the better underlying economics, so the subsidy and the physics point the same way.

Broadly, and with wide variation by profile, photovoltaics without storage tends to land somewhere in the region of nine to thirteen years for payback, with storage roughly seven to ten, and with subsidy applied closer to five to six. Those figures move with electricity prices and RCEm and should be presented as ranges. The consistent finding is the ordering: configurations that raise self-consumption improve payback despite costing more.

## RCEm Volatility And Robust Design

RCEm moved from 132.92 PLN per MWh in April 2026 to 191.37 in May. A swing of that size in the value of exported energy is not a rounding error, and it has a direct design implication.

Any configuration whose case rests on export revenue is exposed to that volatility. Any configuration whose case rests on displaced retail import is not, because retail prices move slowly and predictably by comparison.

The practical rule is to test each candidate design at a low and a high RCEm assumption and to prefer the one whose ranking does not change between them. In most Polish residential cases that preference lands on higher self-consumption, which is a useful convergence: the robust design and the profitable design are the same design.

<div class="inline-cta">
<h3>Test the design at two RCEm assumptions</h3>
<p>SurgePV prices exported and self-consumed energy separately across 8,760 hours, so you can see which configurations hold up when the export reference moves 40 percent in a month.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Rest Of The Polish Requirement Set

**Reduced VAT** at 8 percent applies to residential photovoltaic installations, which improves the case relative to standard-rated purchases. Carry it as a configurable input, since commercial work will not necessarily qualify.

**Latitude and winter output.** Poland runs from roughly 49 to 55 degrees north, so winter generation is a small fraction of summer. This reinforces the self-consumption argument, because winter output almost entirely lands inside the load and is fully valuable, while summer surplus is where the low-value export accumulates.

**Shading treatment.** Because value now depends on which hours are affected rather than on total loss, shading analysis has to be priced against the net billing spread. Our [solar shading analysis software Poland](/blog/solar-shading-analysis-software-poland/) guide covers this in detail.

## The Six Platforms Polish Installers Should Evaluate

### 1. SurgePV, the all-in-one pick
8,760-hour simulation with hourly self-consumption analysis, battery dispatch modelling, net billing and RCEm pricing on both sides of the ledger, AI 3D roof modelling from satellite imagery, and [white-label proposals](https://surgepv.com/solar-proposals) with e-signature in 9 languages, generated from the same design record. $1,299 to $1,899 per user per year.

### 2. PVsyst
The bankable reference for large ground-mount and commercial work, frequently named by lenders. Strong simulation, no proposal layer, net billing logic applied manually. See our [PVsyst alternative](/blog/pvsyst-alternative/) review.

### 3. PV*SOL
Well established in Polish residential and small commercial practice, with good component libraries and capable self-consumption tooling. Desktop-based. Our [PV*SOL alternative](/blog/pvsol-alternative/) guide covers the trade-offs.

### 4. OpenSolar
Free and quick for residential layout and a fast customer document. Weaker on the hourly storage dispatch that now decides Polish sizing. See our [OpenSolar alternative](/blog/opensolar-alternative/) comparison.

### 5. Aurora Solar
Strong residential design built around US net metering, which Poland moved away from in 2022. See our [Aurora Solar alternative](/blog/aurora-solar-alternative/) comparison.

### 6. Spreadsheets plus a generic yield tool
Still common, and the most likely place a pre-2022 net metering assumption is quietly still in use.

## Poland Solar Design Software Comparison

| Tool | Hourly self-consumption | Battery dispatch modelling | Net billing and RCEm pricing | Mój Prąd configuration | Proposal from design record | Pricing (per user / yr) |
| --- | --- | --- | --- | --- | --- | --- |
| **SurgePV** | Yes | Yes | Yes | Yes | Yes | $1,299 to $1,899 |
| PVsyst | Yes | Partial | Manual | Manual | No | ~EUR 500 |
| PV*SOL | Yes | Yes | Manual | Manual | Partial | ~EUR 585 to 845 |
| OpenSolar | Partial | Partial | No | No | Yes | Free |
| Aurora Solar | Yes | Yes | No | No | Yes | $1,908 to $3,108+ |
| Spreadsheet | Manual | Manual | Manual | Manual | No | Effectively free |

## Worked Example: 8 kWp Near Kraków, With And Without Storage

An illustrative calculation showing where the value moves, not a specific customer project. Inputs: 8 kWp array, roughly 8,000 kWh annual generation, household consumption 5,000 kWh, RCEm assumed at 0.19 PLN per kWh.

| | Panels only | Panels plus 10 kWh storage |
| --- | --- | --- |
| Generation | 8,000 kWh | 8,000 kWh |
| Self-consumption share | about 35% | about 75% |
| Self-consumed | 2,800 kWh | 6,000 kWh |
| Exported | 5,200 kWh | 2,000 kWh |
| Export revenue at 0.19 PLN | about 990 PLN | about 380 PLN |
| Avoided import | 2,800 kWh at retail | 6,000 kWh at retail |
| Mój Prąd support | around 7,000 PLN | substantially higher with heat pump and EMS |
| Typical payback range | roughly 9 to 13 years | roughly 7 to 10 years, or 5 to 6 with subsidy |

The second column generates no more energy than the first. It simply moves 3,200 kWh a year from the 0.19 PLN column into the retail column, and that transfer is worth more than the export revenue it gives up several times over.

Note also what happens to the export line. It falls, and that is the design working correctly. An installer optimising for export revenue would prefer the first column, which is exactly the wrong objective under net billing.

## Who Should Choose What

- **Choose SurgePV** if you need hourly self-consumption, battery dispatch and net billing pricing in one tool.
- **Choose PVsyst** where a lender or offtaker names it on large ground-mount, paired with separate quoting.
- **Choose PV*SOL** if your team is desktop-based and does detailed residential modelling.
- **Avoid annual-totals sizing and any tool assuming net metering.** Poland left that mechanism in 2022 and the sizing logic changed with it.

<div class="inline-cta">
<h3>Design for net billing, not for the mechanism Poland left</h3>
<p>8,760-hour self-consumption simulation, battery dispatch, RCEm and retail pricing on both sides, Mój Prąd configuration and white-label proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/poland" target="_blank" rel="noopener noreferrer">Poland compliance library</a></p>
</div>

## The Bottom Line

Polish design is a self-consumption optimisation wearing the clothes of a generation problem.

- **Size to the daytime load curve.** Capacity beyond it earns RCEm, which is a fraction of what the household pays to import.
- **Simulate storage with the array, not after it.** Doubling self-consumption is usually worth more than adding modules.
- **Test at two RCEm assumptions.** A design justified on export revenue is exposed to a reference price that moved 40 percent in a month.
- **Run a real project before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring a Polish address, or reach the Qbits team [here](/contact-us/) for inverter and battery specification against the finished design.
