---
title: "Best Solar Software Ireland: The Complete 2026 Stack"
excerpt: "Two Irish numbers resist averaging: a grant that tapers by kWp band and an export rate that varies twofold by supplier. Most tools average both."
description: "Best solar software Ireland 2026: the full stack for design, proposals, CRM and compliance. SEAI grant bands, Clean Export Guarantee rates, NC6 and NC7, EN 50549 and planning exemptions."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "12 min"
image: "/blog-images/solar-software-ireland.svg"
author: "Nirav Dhanani"
keywords:
  - solar software ireland
  - best solar software ireland
  - seai grant software
  - solar software for irish installers
  - solar business software ireland
  - clean export guarantee software
faqs:
  - q: "What software does an Irish solar company actually need?"
    a: "Six categories: design and simulation, proposal and quoting, CRM and pipeline, ESB Networks connection and compliance, project execution, and post-commissioning monitoring. Ireland is distinctive in that two financial inputs resist averaging, the SEAI grant which tapers by kilowatt band and the Clean Export Guarantee which varies by supplier, and most tools handle both as constants."
  - q: "How does the SEAI grant taper?"
    a: "It pays 700 euros per kWp for the first 2 kWp and 200 euros per kWp for the next 2, capped at 1,800 euros from 4 kWp. So 1 kWp draws 700, 2 kWp draws 1,400, 3 kWp draws 1,600 and 4 kWp or more draws the maximum. Support per kilowatt collapses above 2 kWp and stops entirely above 4, which means a tool treating the grant as a percentage of system cost will misrepresent larger systems and misjudge where the marginal kilowatt stops being subsidised."
  - q: "Why does the Clean Export Guarantee vary so much?"
    a: "Because suppliers set their own rates rather than following a regulated tariff. Standard rates run roughly 15.2 to 32.0 cents per kWh, with Pinergy at 25.0 cents in the standard range. That is more than a two to one spread on the value of every exported unit, so two identical systems produce materially different returns depending purely on which supplier the household uses. A national average is wrong for almost every customer."
  - q: "What is the difference between NC6 and NC7?"
    a: "NC6 is a notification covering single-phase below 6 kW at 25A or three-phase below 11 kW at 16A per phase, filed at least 20 working days before installation. NC7 is a mini-generation application for single-phase 6 to 50 kW or three-phase 11 to 50 kW, and being an application rather than a notification, approval is not automatic. Crossing that threshold changes the programme and the risk, so it belongs in the design tool rather than being discovered at submission."
  - q: "Does Irish rooftop solar need planning permission?"
    a: "Usually not. S.I. 493/2022 exempts rooftop installations within limits including 15 cm maximum projection on pitched roofs and 50 cm on flat, with ground-mount exempt to 25 square metres, 2 metres height and 2 metres from boundaries. Protected Structures and buildings in Architectural Conservation Areas require full permission, which changes both cost and timeline materially and should be checked rather than assumed."
  - q: "Should software account for Ireland's high diffuse fraction?"
    a: "Yes, and most does not. A large share of Irish annual irradiance arrives as diffuse light rather than direct beam. Shading tools that trace a geometric shadow and write off everything inside it systematically overstate Irish losses, which kills viable projects and makes your yield estimates look pessimistic against a competitor using a better engine. A split direct and diffuse sky model produces lower and more accurate figures."
  - q: "Which solar software should an Irish installer start with?"
    a: "Design and proposals in one tool that models the banded SEAI grant and supplier-specific export rates, and that separates direct from diffuse irradiance. SurgePV covers all three at $1,299 to $1,899 per user per year. Add a CRM when pipeline volume justifies it."
featured: false
---

Irish solar economics contain two numbers that should never be averaged, and most software averages both. The SEAI grant tapers by kilowatt band rather than scaling with system size, so support per kilowatt collapses above 2 kWp and stops at 4. The Clean Export Guarantee is set by individual suppliers across a standard range of roughly 15.2 to 32.0 cents per kWh, so the value of every exported unit varies by more than two to one depending on who the household buys electricity from. A tool holding a flat grant percentage and a national export rate produces a quote that is wrong for nearly every Irish customer, in an unpredictable direction. This guide covers what the Irish stack has to do.

> **TL;DR**
> - SEAI grant tapers: 700 euros per kWp for the first 2 kWp, 200 per kWp for the next 2, capped at 1,800 from 4 kWp.
> - Clean Export Guarantee standard rates run roughly 15.2 to 32.0 cents per kWh by supplier, with Pinergy at 25.0 cents.
> - The first 400 euros of annual export income is tax-exempt through the end of 2028.
> - NC6 is a notification below 6 kW single-phase or 11 kW three-phase, filed 20 working days ahead. NC7 is an application to 50 kW.
> - Planning is exempt under S.I. 493/2022 within limits, but Protected Structures and ACAs need full permission.
> - A high diffuse fraction means geometric shading models overstate Irish losses and kill viable projects.
> - [SurgePV](https://surgepv.com/) at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** The best solar software for an Irish business in 2026 is a stack whose core models the grant band rather than a percentage, holds supplier-specific export rates, and separates direct from diffuse irradiance. Those three properties do more for quote accuracy than any amount of additional design capability.

This page covers the category as a whole. For the tool-by-tool comparisons see our [best solar design software Ireland](/blog/solar-design-software-ireland/) and [best solar proposal software Ireland](/blog/solar-proposal-software-ireland/) guides, and the climate-specific treatment in [solar shading analysis software Ireland](/blog/solar-shading-analysis-software-ireland/).

<div class="inline-cta">
<h3>Quote with the real grant band and export rate</h3>
<p>A SurgePV engineer takes one of your addresses, applies the correct SEAI band and the customer's actual supplier rate, and produces the branded proposal in 20 minutes.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Six Categories, And The Two Averaged Numbers

| Category | What it does | Irish complication |
| --- | --- | --- |
| Design and simulation | Layout, diffuse-corrected shading, yield | Diffuse fraction breaks geometric shading models |
| Proposal and quoting | Grant band, supplier export rate, payback | Two inputs that must not be averaged |
| Connection and compliance | NC6 or NC7, EN 50549, RECI, planning status | Threshold at 6 kW single-phase changes the pathway |
| CRM and pipeline | Leads, follow-up, conversion | Should record the customer's electricity supplier |
| Project execution | Scheduling, install, commissioning | NC7 approval is not automatic |
| Monitoring | Performance, service, warranty | Standalone |

> **The CRM point is not incidental.** Because the export rate depends on the household's supplier, that field belongs in your qualification data rather than being asked at proposal stage. A team that records it as standard can model accurately from the first conversation and can spot customers whose best available action is switching supplier.

## What Is Genuinely Ireland-Specific

**The banded grant.** The marginal grant on the third kilowatt is 200 euros against a full kilowatt of cost, and above 4 kWp it is nothing. That does not make larger systems wrong, it means the argument changes at 4 kWp and the proposal should show where. A percentage framing flatters small systems and understates how much of a larger one the customer funds themselves.

**Supplier-set export rates.** A two to one spread is the largest unmodelled variable in most Irish quotes. It also creates an unusual advisory opportunity: for a household on a low rate, switching supplier can be worth more than any hardware upgrade on the table, and saying so builds the credibility you need for the parts of the document that do sell something.

**The 400 euro exemption.** The first 400 euros of annual export income is tax-exempt through the end of 2028. Above that, export income is taxable, which slightly reduces the after-tax value of the marginal exported unit on larger systems. Combined with the grant ceiling, Irish residential economics have two separate points where the marginal kilowatt gets less attractive.

**NC6 versus NC7.** A notification you control versus an application you do not. A proposal promising a timeline has implicitly promised a connection pathway, and above the NC6 thresholds that promise is not yours to make.

**High diffuse fraction.** Geometric shading models overstate Irish losses. Overstating loss is not the safe conservative choice people assume, it kills viable projects and makes your numbers look pessimistic next to a competitor with a better engine.

## Where Irish Teams Overbuy And Underbuy

**Underbought: split direct and diffuse sky modelling.** The technically distinctive Irish requirement, and the one that most affects whether marginal projects get sold.

**Underbought: supplier rate data in qualification.** A one-line CRM field that determines a headline number.

**Underbought: grant band logic.** Most templates carry a percentage.

**Underbought: NC6 and NC7 threshold awareness in the design tool.** Crossing 6 kW single-phase changes the risk profile of the promised timeline.

**Overbought: US-first platforms.** No grant band logic, no CEG concept, and geometric shading models that overstate losses in exactly this climate.

<div class="inline-cta">
<h3>A sky model built for a cloudy climate</h3>
<p>SurgePV separates direct and diffuse irradiance across 8,760 hours, so Irish shading losses are accurate rather than inflated by a geometric shadow trace.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Platforms Irish Businesses Should Evaluate

### 1. SurgePV, the integrated core
Design and proposals from one record, with banded SEAI grant modelling, supplier-specific Clean Export Guarantee rates, the 400 euro exemption in the cashflow, NC6 and NC7 threshold awareness, split direct and diffuse sky modelling and 8,760-hour module-level shading. [White-label proposals](https://surgepv.com/solar-proposals) with e-signature. $1,299 to $1,899 per user per year.

### 2. OpenSolar
Free with a UK and Ireland footprint and a presentable customer document. No grant band logic and geometric shading treatment. See our [OpenSolar alternative](/blog/opensolar-alternative/) comparison.

### 3. PVsyst
The bankable simulation reference, frequently named by lenders and larger commercial clients. No proposal layer and no Irish incentive logic. See our [PVsyst alternative](/blog/pvsyst-alternative/) review.

### 4. PV*SOL
Strong European residential modelling with good component libraries. Desktop-based, Irish specifics applied manually. Our [PV*SOL alternative](/blog/pvsol-alternative/) guide covers the trade-offs.

### 5. HelioScope
Capable browser-based engineering for commercial rooftops. No proposal layer. Our [HelioScope alternative](/blog/helioscope-alternative/) guide covers the trade-offs.

### 6. Aurora Solar
Strong residential design built around US net metering, which Ireland does not operate. See our [Aurora Solar alternative](/blog/aurora-solar-alternative/) comparison.

## Ireland Solar Software Stack Comparison

| Capability | SurgePV | OpenSolar | PVsyst | PV*SOL | Aurora |
| --- | --- | --- | --- | --- | --- |
| Design and simulation | Yes | Partial | Yes | Yes | Yes |
| Proposal from design record | Yes | Yes | No | Partial | Yes |
| Banded SEAI grant | Yes | No | Manual | Manual | No |
| Supplier-specific CEG rates | Yes | Partial | Manual | Manual | No |
| 400 euro exemption modelled | Yes | No | No | No | No |
| NC6 and NC7 thresholds | Yes | No | No | No | No |
| Split direct and diffuse sky | Yes | No | Yes | Yes | Partial |
| Hourly module-level shading | Yes | Partial | Yes | Yes | Yes |

## Worked Example: 5 kWp, Two Suppliers

An illustrative calculation, not a specific customer project. Inputs: 5 kWp array, roughly 4,500 kWh annual generation, 35% self-consumption, 2,925 kWh exported, SEAI grant at the 1,800 euro maximum, identical hardware in both columns.

| Line | Supplier at 15.2 c | Supplier at 25.0 c |
| --- | --- | --- |
| Exported | 2,925 kWh | 2,925 kWh |
| Gross export income | about EUR 445 | about EUR 731 |
| Tax-exempt portion | EUR 400 | EUR 400 |
| Annual export value, broadly | about EUR 430 | about EUR 620 |
| Difference over 20 years | baseline | roughly EUR 3,800 more |

Same roof, same array, same grant, and a difference over the system life comparable to a meaningful fraction of the installation cost. Nothing in the design changed. The only variable was which supplier the household happened to be with.

For a customer on the low end, the highest-value item in the entire proposal is advice that has nothing to do with what you are selling. Giving it anyway is the right call, and it is also how you become the supplier they trust when they compare your quote against a cheaper one.

## Who Should Choose What

- **Choose SurgePV** if you need banded grant modelling, supplier-specific export rates and a split sky model in one tool.
- **Start with OpenSolar** if you are doing a handful of simple residential jobs a month and want to spend nothing while building volume.
- **Choose PVsyst** where a lender names it on commercial work, paired with separate quoting.
- **Record the customer's electricity supplier at qualification.** It is one field and it determines a headline number.
- **Avoid geometric-only shading engines.** In Ireland they overstate losses and cost you viable projects.

After signing, pipeline and follow-up sit in a CRM. [QuickEstimate](https://quickestimate.co/) takes the handoff from SurgePV by API.

<div class="inline-cta">
<h3>Two numbers that should never be averaged</h3>
<p>Banded SEAI grant, supplier-specific Clean Export Guarantee rates, the 400 euro exemption, NC6 and NC7 thresholds, split direct and diffuse modelling and proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/ireland" target="_blank" rel="noopener noreferrer">Ireland compliance library</a></p>
</div>

## The Bottom Line

Irish quoting fails on two averaged inputs and one wrong sky model.

- **Model the grant band, not a percentage.** Support per kilowatt collapses above 2 kWp and stops at 4, and the customer should see where.
- **Hold supplier-specific export rates.** A two to one spread is the largest unmodelled variable in most Irish quotes.
- **Split direct from diffuse.** Geometric shading engines overstate Irish losses and lose you projects that were viable.
- **Run a real project before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring an Irish address, or reach the Qbits team [here](/contact-us/) for EN 50549 compliant inverter specification.
