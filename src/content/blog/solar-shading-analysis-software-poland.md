---
title: "Solar Shading Analysis Software Poland: 2026 Guide"
excerpt: "Under net billing an exported kilowatt-hour is worth a fraction of an imported one, so in Poland the question is not how much shading costs but which hours it hits. That changes the tool you need."
description: "Solar shading analysis software Poland 2026: net billing and RCEm pricing, 52 degrees north winter sun, self-consumption weighted shading loss, and why the hour of a shadow matters more than its size."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "10 min"
image: "/blog-images/solar-shading-analysis-software-poland.svg"
author: "Keyur Rakholiya"
keywords:
  - solar shading analysis software poland
  - shading analysis poland
  - polish solar shading software
  - solar shade analysis poland
  - pv shading software poland
  - net billing shading loss poland
faqs:
  - q: "Why does Polish net billing change how shading should be analysed?"
    a: "Because it separates the value of a kilowatt-hour from its quantity. Since April 2022 Polish prosumers export at the market reference rate rather than banking units one for one. In May 2026 the RCEm settlement rate was 191.37 PLN per MWh, roughly 0.19 PLN per kWh, while retail import sits far higher. A shaded kilowatt-hour that would have been exported therefore costs a fraction of a shaded kilowatt-hour that would have been consumed on site. A shading tool that reports only a total annual percentage cannot distinguish the two, so it cannot tell you what the shading actually costs."
  - q: "What is the RCEm rate and why does it move so much?"
    a: "RCEm is the monthly market reference price used to settle prosumer exports under net billing. It tracks wholesale conditions and moves considerably. April 2026 settled at 132.92 PLN per MWh, the lowest since the mechanism was introduced, and May 2026 at 191.37 PLN per MWh. For shading analysis the volatility matters because it means the financial cost of an exported kilowatt-hour is not a fixed number you can hard-code. A tool should let you test the shading economics against a range rather than a single assumed rate."
  - q: "How much does self-consumption change the picture?"
    a: "Enormously. A Polish household without storage typically self-consumes something in the region of 30 to 40 percent of what it generates, rising to roughly 70 to 80 percent with a battery in the 10 kWh class. Every point of self-consumption converts a low-value exported kilowatt-hour into a high-value avoided import. That means shading which lands on self-consumed hours is several times more expensive than shading which lands on exported surplus, and it means storage and shading decisions are entangled rather than independent."
  - q: "Does Poland's latitude make winter shading a serious problem?"
    a: "The geometry is severe and the energy behind it is small. Poland sits between roughly 49 and 55 degrees north, so midwinter solar noon altitude is very low and shadows run several times their summer length. But December and January generation is a small fraction of the annual total, so a large winter shading percentage attaches to few kilowatt-hours. The honest treatment is to report monthly losses so the customer is not surprised, while making the investment case on the spring and summer months where the energy actually is."
  - q: "What obstructions dominate Polish residential shading?"
    a: "Chimney stacks first, because Polish housing commonly has them and they are often central on the roof. After that, roof-mounted plant and antennas, neighbouring buildings on tighter urban plots, and mature trees on suburban and rural sites. On agricultural and industrial buildings the more common issue is self-shading between rows on flat or shallow roofs, which is an economic spacing problem rather than an obstruction problem."
  - q: "Which software handles Polish shading analysis best?"
    a: "SurgePV, because it runs 8,760-hour module-level shading and prices the result against net billing rather than against a flat tariff, at $1,299 to $1,899 per user per year. PVsyst remains the reference for larger commercial and utility work and where a lender names it. HelioScope is credible for commercial rooftops. The tools to avoid are those that report a single annual shading percentage, because under net billing that number does not translate into money."
  - q: "Do optimisers or microinverters pay on shaded Polish roofs?"
    a: "It depends on which hours the shading hits, which is exactly the point. Recovering exported kilowatt-hours at roughly 0.19 PLN each rarely justifies module-level power electronics on its own. Recovering self-consumed kilowatt-hours displacing retail import is a much stronger case, and stronger again where a battery is pushing self-consumption up. So the same hardware can pay on one Polish roof and not on the next, and the difference is the load profile, not the shadow."
featured: false
---

Polish solar shading analysis is a pricing problem more than a geometry problem. Since net billing replaced net metering in April 2022, exported kilowatt-hours are settled at the market reference rate rather than banked one for one, and that rate sits far below what a prosumer pays to import. In May 2026 the RCEm settlement rate was 191.37 PLN per MWh, roughly 0.19 PLN per kWh, against retail import several times higher. So two obstructions that produce identical annual shading percentages can differ by a factor of four or five in what they cost, depending entirely on which hours their shadows fall. This guide covers what shading analysis has to do differently in Poland, and which tools do it.

> **TL;DR**
> - Under net billing, exported kilowatt-hours settle near 0.19 PLN while imported ones cost several times that, so the hour a shadow falls decides its cost.
> - RCEm moves month to month, from 132.92 PLN per MWh in April 2026 to 191.37 in May, so the shading economics need a range rather than a fixed rate.
> - Self-consumption is roughly 30 to 40 percent without storage and 70 to 80 percent with a battery, which changes what shading destroys.
> - At 49 to 55 degrees north the winter geometry is severe but the energy behind it is small, so report monthly and invest on the summer months.
> - Module-level power electronics pay where shading hits self-consumed hours and usually do not where it hits export surplus.
> - [SurgePV](https://surgepv.com/) runs 8,760-hour module-level shading priced against net billing at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** Solar shading analysis software for Polish projects has to run 8,760 hourly steps at module level and then price each lost kilowatt-hour against the correct side of the net billing spread. An annual shading percentage is not an answer in Poland, because the same percentage can represent very different amounts of money.

The general methodology is covered in our [solar shading analysis software](/blog/solar-shading-analysis-software/) guide, and the underlying simulation approach in our [PV yield simulation software](/blog/pv-yield-simulation-software/) guide. This page covers what changes under Polish net billing. For the wider platform comparison see [best solar design software Poland](/blog/solar-design-software-poland/).

<div class="inline-cta">
<h3>See what shading actually costs under net billing</h3>
<p>A SurgePV engineer takes one of your Polish addresses, runs 8,760-hour module-level shading, and splits the loss into exported kilowatt-hours priced at RCEm and self-consumed kilowatt-hours priced at retail.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Net Billing Turns Shading Into An Hourly Question

Under the old net metering rules the grid acted as a bank. A kilowatt-hour exported at noon came back at a fixed discount later, so the hour it was generated barely mattered and a total annual shading figure was a reasonable proxy for cost.

Net billing removed that. Exports now settle at RCEm and imports are bought at retail. The gap between those two numbers is the whole design problem.

| What the shadow destroys | Roughly what it is worth | Design implication |
| --- | --- | --- |
| A kilowatt-hour that would have been exported | RCEm, near 0.19 PLN in May 2026 | Low cost, mitigation rarely pays |
| A kilowatt-hour that would have been self-consumed | Full retail import price | High cost, mitigation often pays |
| A kilowatt-hour that would have charged a battery | Close to retail, deferred | High cost, and it also shrinks evening cover |

The third row is the one most tools miss entirely. On a system with storage, midday shading does not simply reduce cheap exports. It reduces the charge available for the evening peak, which converts a low-value loss into a high-value one. Any tool that does not simulate the battery alongside the shading will price this wrongly.

> **Why the annual percentage misleads in Poland.** Consider two houses with a 7% annual shading loss each. On the first, the shadow falls between eleven and two on a household that is empty during the day, so almost all of it was export. On the second, the shadow falls from three in the afternoon onward on a household with a heat pump. The first loses perhaps a few hundred zloty a year. The second loses several times that. The shading reports are identical.

## RCEm Volatility And What To Tell A Customer

RCEm is not a stable number. April 2026 settled at 132.92 PLN per MWh, the lowest since the mechanism began, and May 2026 came in at 191.37. A 44 percent month-on-month swing in the value of exported energy is not a rounding error.

For shading analysis this has a specific consequence. Any mitigation recommendation justified purely on recovered export revenue is standing on a moving floor. If trimming a tree pays back over eight years at 0.19 PLN per kWh, it does not pay back at 0.13.

The defensible approach is to run the shading economics at two or three RCEm assumptions and present the range. It also pushes the recommendation in a consistent direction: mitigation justified by recovered self-consumption is robust, because retail import prices are far more stable than the export reference. Where you can make the case on self-consumption, make it there.

## Self-Consumption Is The Lever

A Polish household without storage typically self-consumes in the region of 30 to 40 percent of generation. Add a battery in the 10 kWh class and that rises to roughly 70 to 80 percent. Mój Prąd has been weighted to encourage exactly this, with support for photovoltaics alone well below what is available when storage, a heat pump and energy management are combined.

That reshapes the shading conversation. At 35 percent self-consumption, most of what a midday shadow destroys was going to be sold at RCEm. At 75 percent, most of it was going to displace retail import. The same roof, the same tree, and a materially different answer on whether to cut the tree down.

The practical consequence is ordering. Model the storage decision and the shading mitigation together, not in sequence, because each changes the answer to the other. A tool that handles shading in one module and storage sizing in another, with no shared hourly timeline, cannot do this.

## Latitude: Severe Geometry, Small Energy

Poland runs from roughly 49 degrees north at the southern border to about 55 in the north. Midwinter solar noon altitude is low and shadows are correspondingly long.

| Solar altitude | Shadow length from a 2 m chimney |
| --- | --- |
| 60 degrees, Polish summer noon | 1.2 m |
| 40 degrees | 2.4 m |
| 25 degrees | 4.3 m |
| 16 degrees, Polish midwinter noon | 7.0 m |
| 10 degrees | 11.3 m |

The temptation is to design around the bottom of that table. Resist it. December and January carry a small share of Polish annual generation, so a 25 percent December shading loss is a large percentage of a small number. Report it monthly so nobody is surprised by a flat winter bill, but do not spend money mitigating it.

Where the winter geometry does deserve real attention is ground-mount and flat-roof inter-row spacing, because there the shadow is cast by your own array and the spacing decision is permanent. Simulate several spacings across all 8,760 hours and price the output at both sides of the net billing spread. Accepting some winter inter-row shading is very often correct.

<div class="inline-cta">
<h3>Model shading, storage and spacing on one timeline</h3>
<p>SurgePV simulates the shaded array, the battery and the load profile together across 8,760 hours, so the shading answer and the storage answer stop contradicting each other.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Worked Example: The Same Shadow On Two Polish Houses

An illustrative calculation showing why the annual percentage is not the answer, not a specific customer project. Both houses have a 6 kW array, roughly 6,000 kWh annual generation, and an identical 7% annual shading loss of about 420 kWh. RCEm assumed at 0.19 PLN per kWh.

| | House A, empty daytime, no battery | House B, heat pump and 10 kWh battery |
| --- | --- | --- |
| Self-consumption share | 35% | 75% |
| Shaded kWh that were export | roughly 340 | roughly 105 |
| Shaded kWh that were self-consumed | roughly 80 | roughly 315 |
| Value of export loss at 0.19 PLN | about 65 PLN | about 20 PLN |
| Value of self-consumption loss at retail | substantial | several times larger |
| Does tree removal pay? | Unlikely | Plausibly yes |

Same roof, same tree, same shading report, opposite recommendations. The number that decided it never appeared in the shading analysis at all, which is precisely the argument for doing shading inside a tool that also carries the load profile and the tariff.

## Who Should Choose What

- **Choose SurgePV** if you want 8,760-hour module-level shading priced against net billing, with storage and load on the same timeline.
- **Choose PVsyst** for larger commercial and utility projects, and wherever a lender names it.
- **Choose HelioScope** for commercial rooftop engineering where the customer-facing document is produced elsewhere.
- **Avoid annual-percentage shading reports.** Under net billing they do not convert into money, and money is the decision.

<div class="inline-cta">
<h3>Shading analysis that speaks net billing</h3>
<p>8,760-hour module-level shading, RCEm and retail pricing on both sides of the loss, storage modelling in the same run and white-label proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/poland" target="_blank" rel="noopener noreferrer">Poland compliance library</a></p>
</div>

## The Bottom Line

In Poland the shadow's timing matters more than its size.

- **Split the loss by destination.** Exported kilowatt-hours settle near 0.19 PLN, self-consumed ones displace retail, and mitigation only pays on the second kind.
- **Test against an RCEm range.** A recommendation built on one month's reference price is built on sand.
- **Decide shading and storage together.** Raising self-consumption changes what a shadow costs, so the two calculations are one calculation.
- **Run a real roof before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring a Polish address, or reach the Qbits team [here](/contact-us/) for inverter and optimiser specification against the finished design.
