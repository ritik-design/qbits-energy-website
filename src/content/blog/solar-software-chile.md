---
title: "Best Solar Software Chile: The Complete 2026 Stack"
excerpt: "Chile runs 4,000 kilometres from the Atacama to Patagonia. A national weather file is not an approximation here, it is a mistake in almost every location."
description: "Best solar software Chile 2026: the full stack for design, proposals, CRM and compliance. Ley 21.118 net billing, the pure energy price, non-expiring credits, the 300 kW PMGD threshold."
category: "Solar Software"
date: 2026-08-03
updatedDate: 2026-08-03
readTime: "12 min"
image: "/blog-images/solar-software-chile.svg"
author: "Nirav Dhanani"
keywords:
  - solar software chile
  - best solar software chile
  - software solar chile
  - ley 21118 software
  - pmgd software
  - solar business software chile
faqs:
  - q: "What software does a Chilean solar company actually need?"
    a: "Six categories: design and simulation, proposal and quoting, CRM and pipeline, distributor approval and compliance, project execution, and post-commissioning monitoring. Chile is distinctive in that site-specific weather data is a hard requirement rather than a refinement, because the country spans roughly 4,000 kilometres from some of the highest solar resource on earth to sub-Antarctic conditions."
  - q: "How does Ley 21.118 value exported energy?"
    a: "At the pure energy price, meaning the energy component alone without transport, distribution or the other tariff components that make up a retail bill. Because those components are a substantial share of what a customer pays, an exported kilowatt-hour credits well below the cost of an imported one. Self-consumption is therefore worth more than export, and sizing should track the daytime load curve."
  - q: "Do Chilean credits expire?"
    a: "No, and this materially changes the advice relative to other net billing markets. Accumulated monetary credits do not expire while the customer maintains their contract with the distributor, so summer surplus carries forward and is applied automatically in later months. That means the penalty for modest oversizing is that surplus earns the lower rate rather than being destroyed, which is much gentler than in a monthly-reset market like Spain."
  - q: "What is the 300 kW threshold?"
    a: "Regulated clients can inject surplus under Ley 21.118 with systems up to 300 kW. Above that the PMGD regime for small distributed generation applies, operating as a sales scheme rather than a bill credit, with a different approval pathway. It is a genuine regime boundary, so a design that grows past 300 kW during value engineering has changed scheme and the attached financial model no longer describes it."
  - q: "How much does location within Chile change the design?"
    a: "More than in any other market in this series. Irradiance, temperature, soiling rate and the seasonal shape of generation all differ enormously between the northern desert and the far south. A national assumption overstates the south, understates the north, and gets the monthly profile wrong in both. Since the monthly profile drives the credit accumulation story, getting it wrong undermines the strongest part of a Chilean proposal."
  - q: "What is different about designing in the Atacama?"
    a: "Several things. Altitude means ambient temperature can be moderate while irradiance is extreme, which is favourable for output and which a low-altitude desert assumption will get wrong pessimistically. Ultraviolet exposure is elevated, which is a materials and degradation consideration. And soiling is significant and should be modelled as a time-varying loss with an explicit cleaning regime, with water availability making cleaning method a real constraint."
  - q: "Which solar software should a Chilean installer start with?"
    a: "Design and proposals in one tool with site-specific weather across the full latitude range, pure energy credit pricing, and the ability to carry a credit balance across months. SurgePV covers all three at $1,299 to $1,899 per user per year. For anything near 300 kW, the tool should also be able to model both regimes."
featured: false
---

Chile is the hardest country in this series to build a [software stack](https://quickestimate.co/blog/solar-installer-software-stack) for, and the reason is geography rather than regulation. The country runs roughly 4,000 kilometres from the Atacama, carrying some of the highest solar resource measured anywhere, to Patagonia and sub-Antarctic conditions. Irradiance, temperature, [soiling](/glossary/soiling/) rate and seasonal shape all change dramatically along that range, which means a national weather file is not a simplification but an error in almost every location. Layered on top is Ley 21.118, which credits exports at the pure energy price yet lets credits accumulate indefinitely, a combination no other market in this series shares. This guide covers what the Chilean stack has to do.

> **TL;DR**
> - Ley 21.118 credits surplus at the pure energy price, without transport or distribution, so export is worth well below retail.
> - Credits do not expire while the customer maintains their contract, so surplus carries forward rather than being lost monthly.
> - That combination makes modest oversizing far less punishing than in monthly-reset markets.
> - Regulated clients can inject up to 300 kW; above that the PMGD regime applies with a different mechanism.
> - Chile spans roughly 4,000 kilometres, so site-specific weather data is mandatory rather than preferable.
> - Atacama projects need time-varying soiling and altitude-aware temperature and UV treatment.
> - [SurgePV](https://surgepv.com/) at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** The best solar software for a Chilean business in 2026 is a stack whose core uses site-specific weather across the full latitude range, prices surplus at the pure energy rate, and carries a credit balance across months rather than settling each independently. For work near 300 kW it should model both regimes.

This page covers the category as a whole. For the tool-by-tool comparisons see our [best solar design software Chile](/blog/solar-design-software-chile/) and [best solar proposal software Chile](/blog/solar-proposal-software-chile/) guides.

<div class="inline-cta">
<h3>Design a Chilean site with real site weather</h3>
<p>A SurgePV engineer takes one of your addresses, runs 8,760-hour simulation on site-specific data, and shows the credit balance building and drawing down across twelve months.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Six Categories, And The Geography Problem

| Category | What it does | Chilean requirement |
| --- | --- | --- |
| Design and simulation | Layout, yield, soiling, site weather | Site-specific weather is mandatory |
| Proposal and quoting | Pure energy pricing, twelve-month credit balance | Must carry balance across months |
| Compliance | Distributor approval, 300 kW regime boundary | Both regimes should be modellable |
| CRM and pipeline | Leads, follow-up, conversion | API connection is sufficient |
| Project execution | Scheduling, install, commissioning | Regional logistics vary hugely |
| Monitoring | Performance, service, soiling detection | Feeds cleaning in the north |

> **The requirement most tools fail.** Not the tariff logic, the weather. A platform that defaults to a country-level dataset is unsuitable for Chilean work regardless of how good its other capabilities are, because a design in Antofagasta and one in Puerto Montt have almost nothing in common except the hardware.

## What Is Genuinely Chile-Specific

**One country, several solar markets.** The northern desert needs soiling management and altitude-aware thermal modelling. Central Chile is conventional. The south has low resource, high cloud and a wide seasonal swing. The far south is sub-Antarctic. No single assumption serves any two of them.

**The pure energy price.** Export credits the energy component alone, excluding transport and distribution, so it sits well below retail. Standard net billing logic follows: self-consumption is worth more, and sizing tracks the load curve.

**Credits that do not expire.** This is the feature that changes the advice, and it is worth being precise about. In Spain, surplus above the monthly cap is destroyed and oversizing is punished severely. In Chile it is not destroyed, merely valued at the lower rate and banked while the contract is maintained. So the honest position is: size to the load curve because that maximises value, but do not treat modest oversizing as the disaster it would be elsewhere. A customer expecting to add an electric vehicle or grow a business load can reasonably build in headroom.

**The 300 kW regime boundary.** Above it, PMGD applies as a sales scheme rather than a bill credit, with a different approval pathway and typically a different financing structure. A design that drifts across during value engineering has changed scheme.

**Atacama specifics.** Altitude means moderate ambient temperature with extreme irradiance, which a low-altitude desert assumption gets wrong pessimistically. Elevated UV is a degradation consideration. Soiling needs time-varying treatment with an explicit cleaning regime, and water availability makes cleaning method a genuine design constraint rather than an operational detail.

## Where Chilean Teams Overbuy And Underbuy

**Underbought: site-specific weather.** The defining gap, and it produces errors in opposite directions at the two ends of the country.

**Underbought: credit balance carried across months.** The strongest part of a Chilean proposal, and most tools settle monthly in isolation or annually in aggregate, neither of which shows the seasonal banking.

**Underbought: time-varying soiling for northern projects.** A flat derate misses the sawtooth and makes cleaning frequency unoptimisable.

**Overbought: storage, if sold with Spanish or French urgency.** Worth stating plainly because it is a real temptation. Chilean storage captures the gap between the pure energy price and retail, which is a genuine spread. It does not rescue energy that would otherwise be destroyed, because Chilean credits do not expire. Presenting it with the urgency appropriate to an expiring-credit market would be overselling.

**Overbought: seats for viewers.** Universal.

<div class="inline-cta">
<h3>Carry the credit balance across twelve months</h3>
<p>SurgePV models accumulated credits rather than settling each month in isolation, so summer surplus visibly banks and draws down through winter.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Platforms Chilean Businesses Should Evaluate

### 1. SurgePV, the integrated core
Design and proposals from one record, with site-specific weather across the full latitude range, pure energy credit pricing, credit balance carried across months, 300 kW threshold awareness with PMGD comparison, time-varying soiling and 8,760-hour module-level shading. [White-label proposals](https://surgepv.com/solar-proposals) with e-signature in 9 languages including Spanish. $1,299 to $1,899 per user per year.

### 2. PVsyst
The bankable reference for PMGD and utility-scale projects, frequently named by lenders and offtakers on Chilean work, with good site weather handling. No proposal layer and no Chilean credit logic. See our [PVsyst alternative](/blog/pvsyst-alternative/) review.

### 3. PV*SOL
Capable residential and small commercial modelling with good component libraries and site weather support. Desktop-based, Chilean mechanism applied manually. Our [PV*SOL alternative](/blog/pvsol-alternative/) guide covers the trade-offs.

### 4. HelioScope
Solid browser-based engineering for commercial rooftops. No proposal layer and no Chilean tariff modelling. Our [HelioScope alternative](/blog/helioscope-alternative/) guide covers the trade-offs.

### 5. Aurora Solar
Strong residential design built around US net metering, which Chile does not operate. See our [Aurora Solar alternative](/blog/aurora-solar-alternative/) comparison.

### 6. Spreadsheets plus PVsyst
Common on larger Chilean projects. Defensible engineering, and the usual home of a national weather file applied to a site 2,000 kilometres away.

## Chile Solar Software Stack Comparison

| Capability | SurgePV | PVsyst | PV*SOL | HelioScope | Aurora |
| --- | --- | --- | --- | --- | --- |
| Design and simulation | Yes | Yes | Yes | Yes | Yes |
| Site-specific weather | Yes | Yes | Yes | Partial | Partial |
| Proposal from design record | Yes | No | Partial | No | Yes |
| Pure energy credit pricing | Yes | Manual | Manual | No | No |
| Credit balance across months | Yes | Manual | Manual | No | No |
| 300 kW and PMGD comparison | Yes | Manual | No | No | No |
| Time-varying soiling | Yes | Partial | Partial | No | No |
| Spanish-language proposals | Yes | No | Partial | No | No |

## Worked Example: The Same Array In Antofagasta And Puerto Montt

An illustrative comparison, not a specific customer project. Identical 10 kWp commercial rooftop array, identical hardware, two locations roughly 3,000 kilometres apart.

| | Antofagasta, northern desert | Puerto Montt, south |
| --- | --- | --- |
| Solar resource | Among the highest measured anywhere | Considerably lower |
| Seasonal variation | Modest | Pronounced |
| Soiling | Significant, cleaning regime required | Low, rain-assisted |
| Winter contribution | Substantial | Small |
| Credit accumulation pattern | Steady through the year | Builds in summer, drawn down in winter |
| Design priority | Soiling and thermal behaviour | Winter expectations and seasonal banking |

Two columns describing the same equipment with almost nothing else in common. A national average would overstate the southern case, understate the northern one, and model neither soiling profile correctly.

The credit accumulation row is where Chile's indefinite rollover earns its keep, and it is also the row most likely to be missing from a proposal. The southern system builds a balance through summer and draws it down through winter, and that seasonal banking is a genuine benefit a monthly-reset market would deny it. Showing it requires carrying the balance across months rather than settling each independently, which is a specific and uncommon capability.

## Who Should Choose What

- **Choose SurgePV** if you need site-specific weather, pure energy credit pricing and credit balance modelling in one tool.
- **Choose PVsyst** for PMGD and utility-scale work, and wherever a lender or offtaker names it.
- **Choose PV*SOL** if you are desktop-based and work mainly residential.
- **Reject any tool defaulting to a national weather file.** In a country 4,000 kilometres long it is wrong nearly everywhere.
- **Do not oversell storage.** Chilean credits do not expire, so the battery captures a spread rather than rescuing lost energy.

After signing, pipeline and follow-up sit in a CRM. [QuickEstimate](https://quickestimate.co/) takes the handoff from SurgePV by API.

<div class="inline-cta">
<h3>One tool from the Atacama to Patagonia</h3>
<p>Site-specific weather across the full latitude range, pure energy credit pricing with accumulation, PMGD comparison, time-varying soiling and Spanish-language proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/chile" target="_blank" rel="noopener noreferrer">Chile compliance library</a></p>
</div>

## The Bottom Line

Chile is a geography problem wrapped around an unusually forgiving tariff.

- **Use site weather, always.** Four thousand kilometres of latitude makes a national dataset wrong nearly everywhere.
- **Show the credit balance across twelve months.** Non-expiring accumulation is the scheme's best feature and most quotes never display it.
- **Size to the load curve, but relax about modest oversizing.** The credit is below retail, though it banks rather than expiring.
- **Run a real project before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring a Chilean address, or reach the Qbits team [here](/contact-us/) for inverter specification against the finished design.
