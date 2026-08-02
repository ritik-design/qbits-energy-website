---
title: "Best Solar Design Software Chile: 2026 Guide"
excerpt: "Chile runs from the Atacama to Patagonia, and net billing pays only the pure energy price. One national assumption cannot design across 4,000 kilometres. Six tools compared."
description: "Best solar design software Chile 2026. SurgePV vs PVsyst, Aurora, PV*SOL on Ley 21.118 net billing, the pure energy price, the 300 kW threshold to PMGD and extreme latitude range."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "11 min"
image: "/blog-images/solar-design-software-chile.svg"
author: "Keyur Rakholiya"
keywords:
  - best solar design software chile
  - solar design software chile
  - software diseno solar chile
  - ley 21118 net billing software
  - pmgd design software
  - pv design software chile
faqs:
  - q: "How does Ley 21.118 value exported energy?"
    a: "At the pure energy price, meaning the energy component alone without transport, distribution or the other tariff components that make up a retail bill. Because those other components are a substantial share of what a customer pays, an exported kilowatt-hour is worth considerably less than an imported one costs. The design consequence is the familiar one for net billing markets: self-consumption is worth more than export, and sizing should follow the daytime load curve rather than the available roof."
  - q: "Do Chilean credits expire?"
    a: "No, and this is an important difference from several other net billing markets. Accumulated monetary credits from injection do not expire while the customer maintains their contract with the distributor, so a surplus generated in summer carries forward and is applied automatically in following months. That makes modest oversizing far less punishing in Chile than in markets with monthly reset, though it does not change the fact that the credit itself is valued below retail."
  - q: "What is the 300 kW threshold and why does it matter?"
    a: "Regulated clients can inject surplus under Ley 21.118 with systems up to 300 kW. Above that, the PMGD regime for small distributed generation applies instead, with different rules and a sales-oriented framework rather than a bill credit. That threshold is a genuine design boundary rather than a formality, because crossing it changes the commercial mechanism, the approval pathway and the way the project is financed. A design that drifts over 300 kW without that being a deliberate decision has changed regime by accident."
  - q: "How much does location within Chile change the design?"
    a: "More than in almost any other country. Chile spans roughly 4,000 kilometres from the northern desert to the far south, taking in some of the highest solar resource on earth in the Atacama and sub-Antarctic conditions in Patagonia. Irradiance, temperature, soiling rate and the seasonal shape of generation all differ enormously along that range. A single national yield assumption is not a simplification here, it is an error, and site-specific weather data is mandatory rather than preferable."
  - q: "Does the Atacama's high irradiance need special design treatment?"
    a: "Yes, in several ways. Very high irradiance combined with altitude means elevated ultraviolet exposure and module temperatures that behave differently from a low-altitude desert, since ambient temperature at altitude can be moderate while irradiance is extreme. Soiling is also significant in the northern desert and should be modelled as a time-varying loss with a cleaning regime rather than a flat derate. Designing an Atacama project with assumptions carried from central Chile will misstate both yield and degradation expectations."
  - q: "Which software handles Chilean solar design best in 2026?"
    a: "SurgePV, because Chile requires site-specific weather across an extreme latitude range, hourly self-consumption against a below-retail credit, and awareness of the 300 kW regime boundary, at $1,299 to $1,899 per user per year. PVsyst remains the bankable reference for PMGD and utility-scale projects and is frequently named by lenders. PV*SOL is credible for residential detail. Aurora is built around US net metering, which Chile does not operate."
  - q: "Is storage worth modelling in Chile given that credits roll over?"
    a: "It is worth modelling, but the case is weaker than in markets with expiring credits, and being honest about that matters. Because credits accumulate indefinitely, surplus is not lost the way it is under a monthly reset, so the battery is capturing the gap between the pure energy price and the full retail price rather than rescuing energy that would otherwise be discarded. That is a real spread and sometimes justifies storage, but it is a smaller prize than in Spain or France and should not be presented otherwise."
featured: false
---

Chile is the hardest country in this series to design for, and the reason is geography. The country runs roughly 4,000 kilometres from the Atacama, which carries some of the highest solar resource measured anywhere, to Patagonia and sub-Antarctic conditions in the far south. Irradiance, temperature, soiling rate and the seasonal shape of generation all change dramatically along that range. Layered on top is Ley 21.118, which credits exported energy at the pure energy price, stripped of the transport and distribution components that make up much of a retail bill. This guide covers what Chilean design software has to handle, and which tools do it.

> **TL;DR**
> - Ley 21.118 credits surplus at the pure energy price, without transport or distribution components, so export is worth well below retail.
> - Credits do not expire while the customer maintains their contract, so surplus carries forward rather than being lost monthly.
> - Regulated clients can inject with systems up to 300 kW; above that the PMGD regime applies with different rules.
> - Chile spans roughly 4,000 kilometres, so site-specific weather data is mandatory rather than preferable.
> - Atacama projects need soiling modelled as a time-varying loss and altitude-aware temperature and UV treatment.
> - Storage captures the gap between the pure energy price and retail, a real but smaller prize than in expiring-credit markets.
> - [SurgePV](https://surgepv.com/) at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** The best solar design software for Chilean installers in 2026 is SurgePV, because it runs site-specific 8,760-hour simulation across an extreme latitude range, prices self-consumption against a below-retail credit, and keeps the 300 kW regime boundary visible. PVsyst is the bankable reference for PMGD and utility-scale work. PV*SOL is credible for residential detail. Aurora assumes US net metering, which Chile does not operate.

For the quoting side see our [best solar proposal software Chile](/blog/solar-proposal-software-chile/) guide, and the global [best solar design software](/blog/best-solar-design-software/) ranking for the category without the local lens.

<div class="inline-cta">
<h3>Design a Chilean site with real site weather</h3>
<p>A SurgePV engineer takes one of your addresses, runs 8,760-hour simulation on site-specific data rather than a national average, and prices the output against the pure energy credit.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## One Country, Several Solar Markets

Most country design guides can reasonably talk about national conditions. Chile cannot.

| Region | Conditions | Dominant design concern |
| --- | --- | --- |
| Northern desert | Exceptional irradiance, high altitude, heavy dust | Soiling, UV and temperature at altitude |
| Central | Moderate to strong resource, Mediterranean climate | Conventional residential and commercial optimisation |
| South | Lower resource, higher cloud, wide seasonal swing | Winter output and seasonal credit accumulation |
| Far south | Sub-Antarctic, very low winter sun | Steep seasonality, marginal winter contribution |

> **What a national assumption does here.** It overstates yield in the south and understates it in the north, and it gets the seasonal shape wrong in both. Because the credit accumulates rather than expiring, the seasonal shape matters less financially in Chile than in a monthly-reset market, but it still determines what the customer experiences month to month and whether their expectations were set correctly.

The practical requirement is unglamorous and non-negotiable: site-specific weather data on every project. Any tool that defaults to a country-level dataset is unsuitable for Chilean work regardless of how good its other capabilities are.

## The Pure Energy Price Is Below Retail

Under Ley 21.118, injected surplus is valued at the price of pure energy, which excludes transport, distribution and other components of the retail tariff. Since those components are a substantial share of what a customer pays, the credit per exported kilowatt-hour sits well below the cost of an imported one.

The familiar net billing logic follows: a kilowatt-hour consumed at the moment of generation is worth more than one exported and credited later. Sizing should therefore follow the daytime load curve, and raising self-consumption is worth real money.

But Chile has a feature that softens this considerably, and it is worth understanding precisely because it changes the advice relative to other markets in this series.

**Credits do not expire.** Accumulated monetary credits from injection remain available while the customer maintains their contract with the distributor, and summer surplus carries forward automatically into later months.

That matters a great deal. In Spain, surplus above the monthly cap is destroyed outright, so oversizing is directly punished. In Chile it is not destroyed, merely valued at the lower rate and banked. The penalty for a somewhat oversized Chilean system is that its surplus earns the pure energy price instead of displacing retail, which is a real cost but a much gentler one than losing the energy entirely.

The honest design position is therefore: size to the load curve because that maximises value, but do not treat modest oversizing as the disaster it would be in a monthly-reset market. A customer with a seasonal consumption pattern, or one expecting to add an electric vehicle, can reasonably build in headroom.

## The 300 kW Boundary Is A Regime Change

Regulated clients can inject under Ley 21.118 with systems up to 300 kW. Above that threshold the PMGD framework for small distributed generation applies, operating as a sales scheme rather than a bill credit.

This is a genuine boundary rather than a paperwork step. Crossing it changes the commercial mechanism, the approval pathway and typically the financing structure. A commercial design that drifts from 280 kW to 310 kW during value engineering has changed regime, and if nobody noticed, the financial model attached to it is now describing the wrong scheme.

Two practical implications for tool selection. The design software should make installed capacity prominent and ideally flag the threshold, and it should be able to model both mechanisms so that a project near the boundary can be evaluated either way. Being able to show a client the 295 kW case under Ley 21.118 against the 400 kW case under PMGD is a genuinely useful piece of analysis and one most platforms cannot produce.

<div class="inline-cta">
<h3>Compare a project either side of 300 kW</h3>
<p>SurgePV models the Ley 21.118 credit case and the larger PMGD case on the same site, so the regime boundary becomes a decision rather than something discovered during approval.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Designing In The Atacama

Northern Chilean projects are not simply central Chilean projects with more sun.

**Altitude changes the temperature picture.** High irradiance normally implies high module temperature and the associated derating, but at altitude ambient temperature can be moderate while irradiance is extreme. That combination is favourable for output and it is one a model using low-altitude desert assumptions will get wrong in the pessimistic direction.

**Ultraviolet exposure is elevated,** which is a materials and degradation consideration rather than a yield one, and it belongs in expectations about long-term performance rather than in the first-year figure.

**Soiling is significant** and should be modelled as a time-varying loss with an explicit cleaning regime. A flat annual derate misses the sawtooth between cleans and makes cleaning frequency impossible to optimise. Water availability in the desert also makes cleaning method a real constraint, which is worth surfacing at design stage rather than at handover.

**Ground-mount inter-row spacing** is an economic optimisation rather than a solstice rule, and in the north where land is often available the trade differs from a constrained urban rooftop.

## The Six Platforms Chilean Installers Should Evaluate

### 1. SurgePV, the all-in-one pick
Site-specific weather across the full latitude range, hourly self-consumption against the pure energy credit, credit accumulation modelling, 300 kW threshold awareness with PMGD comparison, time-varying soiling, and [white-label proposals](https://surgepv.com/solar-proposals) with e-signature in 9 languages including Spanish, generated from the same design record. $1,299 to $1,899 per user per year.

### 2. PVsyst
The bankable reference for PMGD and utility-scale projects, frequently named by lenders and offtakers on Chilean work. Strong simulation with configurable soiling, no proposal layer. See our [PVsyst alternative](/blog/pvsyst-alternative/) review.

### 3. PV*SOL
Capable residential and small commercial modelling with good component libraries. Desktop-based, and Chilean mechanism logic applied manually. Our [PV*SOL alternative](/blog/pvsol-alternative/) guide covers the trade-offs.

### 4. HelioScope
Solid browser-based engineering for commercial rooftops. No proposal layer and no Chilean tariff modelling. Our [HelioScope alternative](/blog/helioscope-alternative/) guide covers the trade-offs.

### 5. Aurora Solar
Strong residential design built around US net metering, which Chile does not operate. See our [Aurora Solar alternative](/blog/aurora-solar-alternative/) comparison.

### 6. Spreadsheets plus PVsyst
Common on larger Chilean projects. Defensible engineering, and the usual home of a national weather assumption applied to a site 2,000 kilometres away.

## Chile Solar Design Software Comparison

| Tool | Site-specific weather | Pure energy credit modelling | Credit accumulation | 300 kW threshold and PMGD comparison | Time-varying soiling | Pricing (per user / yr) |
| --- | --- | --- | --- | --- | --- | --- |
| **SurgePV** | Yes | Yes | Yes | Yes | Yes | $1,299 to $1,899 |
| PVsyst | Yes | Manual | Manual | Manual | Partial | ~EUR 500 |
| PV*SOL | Yes | Manual | Manual | No | Partial | ~EUR 1,000+ |
| HelioScope | Partial | No | No | No | No | $1,188 to $3,600+ |
| Aurora Solar | Partial | No | No | No | No | $1,908 to $3,108+ |
| Spreadsheet + PVsyst | Manual | Manual | Manual | Manual | Manual | Effectively free |

## Worked Example: The Same Array In Antofagasta And Puerto Montt

An illustrative calculation showing why national assumptions fail, not a specific customer project. Inputs: identical 10 kWp commercial rooftop array, identical hardware, two locations roughly 3,000 kilometres apart.

| | Antofagasta, northern desert | Puerto Montt, south |
| --- | --- | --- |
| Solar resource | Among the highest measured anywhere | Considerably lower |
| Seasonal variation | Modest | Pronounced |
| Soiling | Significant, cleaning regime required | Low, rain-assisted |
| Winter contribution | Substantial | Small |
| Credit accumulation pattern | Steady through the year | Builds in summer, drawn down in winter |
| Design priority | Soiling management and thermal behaviour | Winter expectations and seasonal banking |

The two columns describe the same equipment and almost nothing else in common. A design tool applying a national average would overstate the southern case and understate the northern one, and would model neither soiling profile correctly.

The credit accumulation row is worth dwelling on, because it is where Chile's indefinite rollover earns its keep. The southern system builds a credit balance through summer and draws it down through winter, and that seasonal banking is a genuine benefit that a monthly-reset market would deny it. Modelling it requires carrying the credit balance across months rather than settling each one independently, which is a specific capability and not a common one.

## Who Should Choose What

- **Choose SurgePV** if you need site-specific weather, pure energy credit modelling and 300 kW threshold awareness in one tool.
- **Choose PVsyst** for PMGD and utility-scale work, and wherever a lender or offtaker names it.
- **Choose PV*SOL** if your team is desktop-based and works mainly on residential.
- **Avoid national weather assumptions.** In a country 4,000 kilometres long they are not an approximation, they are a mistake.

<div class="inline-cta">
<h3>One tool from the Atacama to Patagonia</h3>
<p>Site-specific weather across the full latitude range, pure energy credit modelling with accumulation, PMGD comparison, time-varying soiling and Spanish-language proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/chile" target="_blank" rel="noopener noreferrer">Chile compliance library</a></p>
</div>

## The Bottom Line

Chile is a geography problem wrapped around a tariff problem.

- **Use site weather, always.** Four thousand kilometres of latitude means a national dataset is wrong nearly everywhere.
- **Size to the load curve, but relax about modest oversizing.** The credit is below retail, though it accumulates rather than expiring.
- **Watch the 300 kW line.** Crossing it changes regime, and it should be a decision rather than an accident.
- **Run a real project before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring a Chilean address, or reach the Qbits team [here](/contact-us/) for inverter specification against the finished design.
