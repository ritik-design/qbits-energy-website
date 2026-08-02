---
title: "Best Solar Software Poland: The Complete 2026 Stack"
excerpt: "RCEm moved 40 percent in one month. Polish software that treats the export rate as a constant is building quotes on a number that will not hold."
description: "Best solar software Poland 2026: the full stack for design, proposals, CRM and compliance. Net billing, RCEm volatility, Mój Prąd storage weighting, self-consumption modelling and 8% VAT."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "12 min"
image: "/blog-images/solar-software-poland.svg"
author: "Nirav Dhanani"
keywords:
  - solar software poland
  - best solar software poland
  - oprogramowanie fotowoltaika
  - net billing software poland
  - moj prad software
  - solar business software poland
faqs:
  - q: "What software does a Polish solar company actually need?"
    a: "Six categories: design and simulation, proposal and quoting, CRM and pipeline, grid connection and compliance, project execution, and post-commissioning monitoring. Poland is distinctive in that the design and proposal core has to price two different kinds of kilowatt-hour, because net billing values exported and self-consumed energy very differently. A tool producing a single annual generation figure cannot express the value case."
  - q: "How does net billing change what software must do?"
    a: "It separates the value of a kilowatt-hour from its quantity. Since 1 April 2022 exports settle at the RCEm market reference rate rather than being banked one for one. In May 2026 RCEm was 191.37 PLN per MWh, roughly 0.19 PLN per kWh, while retail import costs several times that. A tool has to split generation into exported and self-consumed energy and price each correctly, which most platforms built around net metering cannot do."
  - q: "How volatile is RCEm and how should software handle it?"
    a: "Very. April 2026 settled at 132.92 PLN per MWh, the lowest since the mechanism was introduced, and May 2026 at 191.37, a swing of more than 40 percent in a single month. A tool that holds one export rate as a fixed input produces quotes that are wrong within weeks. The right approach is sensitivity testing across a range, and preferring configurations whose ranking does not change between a low and a high assumption."
  - q: "How much does storage change Polish self-consumption?"
    a: "A great deal. A Polish household without storage typically self-consumes roughly 30 to 40 percent of what it generates, rising to about 70 to 80 percent with a battery in the 10 kWh class. Because every point of self-consumption converts a low-value export into a full-value avoided import, that shift is the largest lever in Polish residential design, and it means array sizing and storage sizing are one problem rather than two."
  - q: "How is Mój Prąd structured and why does it affect software?"
    a: "It is weighted toward integrated systems, with around 7,000 PLN for photovoltaics alone and substantially more for a combination including storage, a heat pump and energy management, with storage support of up to around 16,000 PLN within that. Because the support depends on what is installed, it is an output of the design conversation rather than a fixed discount, so software should model support by configuration rather than applying one figure."
  - q: "What payback figures are honest in a Polish quote?"
    a: "Ranges rather than points. Broadly, photovoltaics without storage tends to land around nine to thirteen years, with storage roughly seven to ten, and with subsidy applied closer to five to six. Those bands move with electricity prices and RCEm. A tool that outputs a single precise figure is implying a certainty the mechanism does not support, and it is easy for a customer to disprove later."
  - q: "Which solar software should a Polish installer start with?"
    a: "Design and proposals in one tool that splits export from self-consumption, prices each against net billing, and dispatches a battery hourly. SurgePV covers all three at $1,299 to $1,899 per user per year. Verify it does not still assume the pre-2022 net metering mechanism, because some platforms do."
featured: false
---

Polish solar software has to price two different kinds of kilowatt-hour. Since net billing replaced net metering on 1 April 2022, exports settle at the RCEm market reference rate while imports are bought at retail, and the gap between those numbers is the entire design problem. In May 2026 RCEm was 191.37 PLN per MWh, roughly 0.19 PLN per kWh. The month before it was 132.92, the lowest since the mechanism began. So the export side of the equation is both low and volatile, while the self-consumption side is high and stable. A tool that reports one annual generation figure cannot express any of that. This guide covers what the Polish stack has to do.

> **TL;DR**
> - Net billing has applied since 1 April 2022, with exports settled at RCEm rather than banked.
> - RCEm was 191.37 PLN/MWh in May 2026 and 132.92 in April, a swing of more than 40 percent in one month.
> - Retail import costs several times the export rate, so self-consumption holds nearly all the value.
> - Self-consumption runs roughly 30 to 40 percent without storage and 70 to 80 percent with a 10 kWh class battery.
> - Mój Prąd is weighted toward integrated systems: around 7,000 PLN for panels alone, substantially more with storage, a heat pump and energy management.
> - Residential installations attract a reduced 8 percent VAT rate.
> - [SurgePV](https://surgepv.com/) prices both sides of the spread at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** The best solar software for a Polish business in 2026 is a stack whose core splits generation into exported and self-consumed energy, prices each correctly, dispatches a battery hourly, and can test the result across an RCEm range. Build the customer document around avoided import, because that is the half of the value that does not move.

This page covers the category as a whole. For the tool-by-tool comparisons see our [best solar design software Poland](/blog/solar-design-software-poland/) and [best solar proposal software Poland](/blog/solar-proposal-software-poland/) guides, and the shading treatment in [solar shading analysis software Poland](/blog/solar-shading-analysis-software-poland/).

<div class="inline-cta">
<h3>Split the spread on a real Polish job</h3>
<p>A SurgePV engineer takes one of your addresses, prices exported energy at RCEm and self-consumed energy at retail, and produces the branded proposal from the same record.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Six Categories, And The Two-Price Problem

| Category | What it does | Polish requirement |
| --- | --- | --- |
| Design and simulation | Layout, hourly self-consumption, battery dispatch | Must split export from self-consumption |
| Proposal and quoting | Two-price model, configuration options, payback range | Built around avoided import, not export |
| CRM and pipeline | Leads, follow-up, conversion | API connection is sufficient |
| Compliance | Grid connection, installation standards | Standard |
| Project execution | Scheduling, install, meter change | Standard |
| Monitoring | Performance, service, warranty | Standalone |

> **What most Polish stacks are still doing.** Producing an annual generation figure and attaching an export revenue line at whatever RCEm happened to be that month. Both numbers look precise and one of them is close to meaningless. The fix is structural rather than cosmetic: the tool has to know which hours the household consumes and which it exports.

## What Is Genuinely Poland-Specific

**The two-price structure.** Under the old net metering arrangement the grid behaved like a bank and the hour of generation barely mattered. Net billing removed that equivalence, and with it the validity of comparing annual generation to annual consumption.

**RCEm volatility as a design risk.** A 40 percent swing in one month means any configuration justified on export revenue is standing on a moving floor. Configurations justified on displaced retail import are not, because retail prices move slowly by comparison. The practical rule is to test at a low and a high assumption and prefer designs whose ranking is stable, which in most Polish residential cases means higher self-consumption. The robust design and the profitable design converge.

**Storage as the primary lever.** Moving self-consumption from roughly 35 percent to roughly 75 percent doubles the share of generation earning full retail value without adding a single module. Under net billing that is frequently worth more than adding capacity, which reverses the instinct most installers built under net metering.

**Mój Prąd as a configuration output.** Support depends on what is installed, so the proposal structure that follows is a comparison of two or three configurations each showing its own support level and payback range, rather than a single quote with a discount applied.

**Reduced 8 percent VAT** on residential installations, worth showing as a visible line.

**Winter output is small,** which reinforces the self-consumption argument since winter generation almost entirely lands inside the load.

## Where Polish Teams Overbuy And Underbuy

**Underbought: split export and self-consumption pricing.** The defining gap, and the reason so many Polish quotes describe the wrong value case.

**Underbought: battery dispatch simulation.** Required to make the argument that matters most.

**Underbought: sensitivity testing.** A single-figure payback derived from one month's RCEm will be wrong within a quarter.

**Overbought: array capacity.** The consequence of annual-totals thinking. Beyond the daytime load curve, each additional kilowatt earns roughly a fifth of what the first one does.

**Overbought: seats for viewers.** Universal.

<div class="inline-cta">
<h3>Test the design at two RCEm assumptions</h3>
<p>SurgePV prices exported and self-consumed energy separately across 8,760 hours, so you can see which configurations hold up when the export reference moves 40 percent in a month.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Platforms Polish Businesses Should Evaluate

### 1. SurgePV, the integrated core
Design and proposals from one record, with split export and self-consumption pricing against RCEm and retail, battery dispatch modelling, RCEm sensitivity testing, Mój Prąd support by configuration and 8,760-hour module-level shading. [White-label proposals](https://surgepv.com/solar-proposals) with e-signature in 9 languages. $1,299 to $1,899 per user per year.

### 2. PV*SOL
Strong European residential modelling with capable self-consumption and storage tooling, and well established in Polish practice. Desktop-based, net billing applied manually. Our [PV*SOL alternative](/blog/pvsol-alternative/) guide covers the trade-offs.

### 3. PVsyst
The bankable simulation reference, frequently named by lenders on commercial and ground-mount work. No proposal layer and no net billing logic. See our [PVsyst alternative](/blog/pvsyst-alternative/) review.

### 4. OpenSolar
Free and quick with a presentable customer document. No net billing logic and limited dispatch modelling. See our [OpenSolar alternative](/blog/opensolar-alternative/) comparison.

### 5. Aurora Solar
Strong residential design built around US net metering, which is the mechanism Poland left in 2022. See our [Aurora Solar alternative](/blog/aurora-solar-alternative/) comparison.

### 6. Spreadsheets plus a yield tool
Common, and the most likely place a single hard-coded export rate is doing the work of a range.

## Poland Solar Software Stack Comparison

| Capability | SurgePV | PV*SOL | PVsyst | OpenSolar | Aurora |
| --- | --- | --- | --- | --- | --- |
| Design and simulation | Yes | Yes | Yes | Partial | Yes |
| Proposal from design record | Yes | Partial | No | Yes | Yes |
| Split export and self-consumption pricing | Yes | Partial | Manual | No | No |
| Battery dispatch modelling | Yes | Yes | Partial | Partial | Yes |
| RCEm sensitivity testing | Yes | Manual | Manual | No | No |
| Mój Prąd by configuration | Yes | Manual | No | No | No |
| Multi-option comparison | Yes | Partial | Manual | Partial | Yes |
| Hourly module-level shading | Yes | Yes | Yes | Partial | Yes |

## Worked Example: 8 kWp Near Kraków, With And Without Storage

An illustrative calculation, not a specific customer project. Inputs: 8 kWp array, roughly 8,000 kWh annual generation, household consumption 5,000 kWh, RCEm assumed at 0.19 PLN per kWh.

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

The second column generates no more energy than the first. It moves 3,200 kWh a year from the 0.19 PLN column into the retail column, and that transfer is worth several times the export revenue it gives up.

Note what happens to the export line: it falls, and that is the design working correctly. An installer optimising for export revenue would prefer the first column, which is precisely the wrong objective under net billing. A tool that reports export revenue prominently and self-consumption faintly will nudge your team toward the worse design without anyone noticing.

## Who Should Choose What

- **Choose SurgePV** if you need split net billing pricing, battery dispatch and configuration-linked subsidy modelling in one tool.
- **Choose PV*SOL** if you are desktop-based and value its component depth, accepting manual net billing handling.
- **Choose PVsyst** where a lender names it on commercial or ground-mount work, paired with separate quoting.
- **Verify your tool is not still assuming net metering.** Poland left that mechanism in 2022 and the sizing logic changed with it.
- **Quote payback as a range.** Single figures derived from one month's RCEm do not survive a quarter.

After signing, pipeline and follow-up sit in a CRM. [QuickEstimate](https://quickestimate.co/) takes the handoff from SurgePV by API.

<div class="inline-cta">
<h3>Software that speaks net billing</h3>
<p>Split export and self-consumption pricing, RCEm sensitivity, battery dispatch, Mój Prąd support by configuration, 8 percent VAT and white-label proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/poland" target="_blank" rel="noopener noreferrer">Poland compliance library</a></p>
</div>

## The Bottom Line

Polish software has to price two kinds of kilowatt-hour, and most prices one.

- **Split export from self-consumption.** They differ by a factor of several, and an annual generation figure hides the distinction entirely.
- **Lead with avoided import.** It is the stable half of the value and the half you can still defend in a year.
- **Simulate storage with the array.** Raising self-consumption is usually worth more than adding modules.
- **Run a real project before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring a Polish address, or reach the Qbits team [here](/contact-us/) for inverter and battery specification.
