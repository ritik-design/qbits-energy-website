---
title: "Best Solar Software Italy: The Complete 2026 Stack"
excerpt: "Scambio sul Posto closed in May 2025 and most Italian quoting software still models it. That is not a feature gap, it is a wrong answer."
description: "Best solar software Italy 2026: the full stack for design, proposals, CRM and compliance. Ritiro Dedicato, the end of Scambio sul Posto, the 50% detrazione and CEI 0-21."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "12 min"
image: "/blog-images/solar-software-italy.svg"
author: "Nirav Dhanani"
keywords:
  - solar software italy
  - best solar software italy
  - software fotovoltaico
  - ritiro dedicato software
  - solar business software italy
  - software solare italia
faqs:
  - q: "What changed for Italian solar software in 2025?"
    a: "Scambio sul Posto closed to systems put into operation from 29 May 2025 under ARERA resolution 78/2025/R/efr. Ritiro Dedicato became the reference mechanism, with GSE buyback at roughly 8 to 14 cents per kWh up to 1 MWp, guaranteed for 20 years. Any tool still modelling annual netting is not slightly out of date, it is describing a scheme new customers cannot join."
  - q: "How does Ritiro Dedicato change system sizing?"
    a: "It moves the value into self-consumption. Under Scambio sul Posto, exported energy came back at close to retail value, so a generously sized array was largely harmless and filling the roof was defensible. Under Ritiro Dedicato surplus sells at 8 to 14 cents against a retail price several times higher, so capacity beyond the daytime load curve earns a fraction of what the household pays to import. Correct sizing now tracks consumption, and storage becomes considerably easier to justify."
  - q: "How should the 50% Restructuring Bonus be modelled?"
    a: "As a multi-year tax deduction, never as a discount on the purchase price. It covers 50% of eligible spend for primary residences with a maximum eligible amount of 96,000 euros per property unit, claimed against income tax across tax years. A tool that subtracts it from the invoice total shows a price the customer will not pay on the day, and it silently assumes they have enough tax liability to absorb the deduction, which for some households is not true."
  - q: "Why does location within Italy matter so much for software?"
    a: "Because Italy spans a wide latitude range and the irradiance difference between Sicily and Lombardy is large enough to change the investment case on identical hardware. A tool defaulting to a national weather assumption will overstate returns in the north and understate them in the south. Site-specific weather data is a requirement here rather than a refinement."
  - q: "Which standards must Italian solar software reference?"
    a: "CEI 0-21 for low-voltage grid connection and CEI 0-16 for medium and high voltage. Carrying these as a library rather than relying on the engineer's memory reduces submissions that come back with queries, and for a commercial buyer an explicit compliance section distinguishes a considered proposal from a price on a page."
  - q: "Does storage now need dedicated software support in Italy?"
    a: "Yes, because it moved from an optional extra to a core part of the economics. Every kilowatt-hour a battery shifts from 8 to 14 cent surplus into avoided retail import captures most of the retail price. Making that case requires simulating dispatch against an hourly load profile rather than attaching a price list, and a tool without hourly dispatch cannot show the customer why the battery pays."
  - q: "Which solar software should an Italian installer start with?"
    a: "Design and proposals in one tool that models Ritiro Dedicato, handles the deduction as a multi-year cashflow, and uses site-specific weather. SurgePV covers all three at $1,299 to $1,899 per user per year. The specific thing to verify before buying anything is whether the tool still assumes Scambio sul Posto, because a surprising number do."
featured: false
---

Italian solar software has a correctness problem rather than a capability problem. Scambio sul Posto closed to systems put into operation from 29 May 2025 under ARERA resolution 78/2025/R/efr, and Ritiro Dedicato replaced it with GSE buyback at roughly 8 to 14 cents per kWh, guaranteed for 20 years up to 1 MWp. That is not a rate adjustment. Annual netting behaved like a bank and Ritiro Dedicato is a wholesale-linked sale, so the value of exported energy fell by a factor of several and the correct system size changed with it. A great many Italian templates, spreadsheets and imported platforms still model the old scheme. This guide covers what the Italian stack has to do now.

> **TL;DR**
> - Scambio sul Posto is closed to systems put into operation from 29 May 2025, under ARERA resolution 78/2025/R/efr.
> - Ritiro Dedicato is the reference: GSE buyback at roughly 8 to 14 cents per kWh up to 1 MWp, guaranteed 20 years.
> - Export now pays well below retail, so hourly self-consumption decides the return and sizing follows the load curve.
> - Storage moved from optional extra to core economics, because it converts low-value surplus into avoided retail import.
> - The 50% Restructuring Bonus applies to primary residences up to 96,000 euros eligible spend, claimed across tax years, not as a discount.
> - CEI 0-21 governs LV grid connection, CEI 0-16 covers MV and HV.
> - [SurgePV](https://surgepv.com/) runs 8,760-hour simulation with battery dispatch at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** The best solar software for an Italian business in 2026 is whichever tool models Ritiro Dedicato rather than Scambio sul Posto, treats the deduction as a multi-year cashflow, and uses site weather instead of a national average. Those three properties matter more than any feature comparison, because a tool failing any of them produces confident wrong numbers.

This page covers the category as a whole. For the tool-by-tool comparisons see our [best solar design software Italy](/blog/solar-design-software-italy/) and [best solar proposal software Italy](/blog/solar-proposal-software-italy/) guides.

<div class="inline-cta">
<h3>Quote an Italian job on the current mechanism</h3>
<p>A SurgePV engineer takes one of your addresses, models Ritiro Dedicato against the household load with site-specific weather, and produces the Italian-language proposal from the same record.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Six Categories, And What The Mechanism Change Did

| Category | What it does | Effect of the 2025 change |
| --- | --- | --- |
| Design and simulation | Layout, shading, hourly self-consumption | Must now optimise self-consumption, not generation |
| Proposal and quoting | Ritiro Dedicato, deduction cashflow, payback | Needs rebuilding for most teams |
| CRM and pipeline | Leads, follow-up, conversion | Unaffected |
| Compliance | CEI 0-21 and CEI 0-16 | Unaffected |
| Project execution | Connection, commissioning, GSE registration | Mechanism registration differs |
| Monitoring | Performance, service, warranty | Unaffected |

> **Where the disruption is concentrated.** Four of six categories were untouched by the largest change in the Italian market in a decade. The damage is entirely in design and proposals, and specifically in whether the tool knows which scheme applies. That makes the remedy narrow: you are not rebuilding a stack, you are replacing or reconfiguring one capability.

## What Is Genuinely Italy-Specific

**The mechanism itself, and its date.** Systems put into operation from 29 May 2025 fall under Ritiro Dedicato. The awkward part for installers is that quotes issued shortly before that date were correct, so this is a sharp break rather than a gradual drift, and templates that were accurate in April became wrong in June.

**Sizing follows the load curve now.** Under the old scheme, filling the roof was defensible. Under the new one, capacity beyond daytime consumption earns 8 to 14 cents against a retail price several times higher. The design brief inverted.

**Storage as core economics.** Directly downstream of the above. A battery captures most of the retail price on every kilowatt-hour it shifts, which is a far stronger case than existed under Scambio sul Posto. Making it requires hourly dispatch modelling.

**The deduction as cashflow.** 50% of eligible spend for primary residences, capped at 96,000 euros per property unit, claimed against income tax across tax years. Presenting it as a discount misrepresents both the timing and the customer's ability to claim it.

**Latitude range.** Sicily and Lombardy are different solar markets. Site weather is mandatory.

**CEI 0-21 and CEI 0-16.** LV and MV/HV grid connection respectively.

## Where Italian Teams Overbuy And Underbuy

**Underbought: hourly self-consumption modelling.** The defining gap, because Italian quoting never needed it under annual netting.

**Underbought: battery dispatch simulation.** The natural response to the change, and unsellable without the ability to show what it shifts.

**Underbought: site-specific weather.** Widely treated as a refinement in a country where it is a requirement.

**Underbought: honest deduction cashflow.** Most templates still subtract it from the total.

**Overbought: nothing significant.** Like the Netherlands, the Italian problem is not overspend. It is that the core tool may be modelling a closed scheme.

<div class="inline-cta">
<h3>Show the deduction as the customer receives it</h3>
<p>SurgePV builds the year-by-year cashflow with the Restructuring Bonus claimed across tax years, so the figure in the proposal matches the figure on the invoice.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Platforms Italian Businesses Should Evaluate

### 1. SurgePV, the integrated core
Design and proposals from one record, with Ritiro Dedicato modelling, multi-year deduction cashflow, hourly self-consumption and battery dispatch, CEI standards library, site-specific weather and 8,760-hour module-level shading. [White-label proposals](https://surgepv.com/solar-proposals) with e-signature in 9 languages including Italian. $1,299 to $1,899 per user per year.

### 2. PV*SOL
Strong European residential and small commercial modelling with capable self-consumption tooling, which positions it reasonably for the new mechanism. Desktop-based. Our [PV*SOL alternative](/blog/pvsol-alternative/) guide covers the trade-offs.

### 3. PVsyst
The bankable simulation reference, frequently named by lenders on commercial and ground-mount work. No proposal layer and no Italian mechanism logic. See our [PVsyst alternative](/blog/pvsyst-alternative/) review.

### 4. HelioScope
Capable browser-based engineering for commercial rooftops. No proposal layer and no incentive modelling. Our [HelioScope alternative](/blog/helioscope-alternative/) guide covers the trade-offs.

### 5. Aurora Solar
Strong residential design built around US net metering. With Scambio sul Posto closed, the mismatch with Italian conditions is now total rather than partial. See our [Aurora Solar alternative](/blog/aurora-solar-alternative/) comparison.

### 6. Spreadsheets plus a simulation tool
The default in many Italian practices, and the most likely place a closed scheme survives untouched.

## Italy Solar Software Stack Comparison

| Capability | SurgePV | PV*SOL | PVsyst | HelioScope | Aurora |
| --- | --- | --- | --- | --- | --- |
| Design and simulation | Yes | Yes | Yes | Yes | Yes |
| Proposal from design record | Yes | Partial | No | No | Yes |
| Ritiro Dedicato modelled | Yes | Manual | Manual | No | No |
| Multi-year deduction cashflow | Yes | Partial | No | No | No |
| Hourly self-consumption | Yes | Yes | Yes | Partial | Yes |
| Battery dispatch modelling | Yes | Yes | Partial | No | Yes |
| CEI 0-21 and 0-16 references | Yes | Partial | Manual | No | No |
| Site-specific weather | Yes | Yes | Yes | Partial | Partial |

## Worked Example: 6 kWp In Central Italy, Old Logic Versus New

An illustrative calculation, not a specific customer project. Inputs: 6 kWp array, roughly 7,800 kWh annual generation, household consumption 4,200 kWh, self-consumption 35% without storage, Ritiro Dedicato at 11 cents per kWh.

| Line | Quoted on Scambio sul Posto logic | Actual under Ritiro Dedicato |
| --- | --- | --- |
| Self-consumed | 2,730 kWh | 2,730 kWh |
| Exported | 5,070 kWh | 5,070 kWh |
| Value per exported kWh | Near retail | 11 cents |
| Annual export revenue | Substantially overstated | about EUR 558 |
| Correct recommendation | Fill the roof | Size to load, or add storage |

The two columns describe identical hardware on an identical roof. The difference is entirely in what the exported energy is assumed to be worth, and it is enough to change both the payback and the recommendation.

The second insight is where the remaining upside sits. Raising self-consumption from 35% toward 70% with storage is now worth more than adding capacity, which reverses the advice that was correct three years ago. A tool that cannot simulate that shift can only offer the customer a smaller system, which is a weaker conversation than offering them a better one.

## Who Should Choose What

- **Choose SurgePV** if you need Ritiro Dedicato modelling, honest deduction cashflow and battery dispatch in one tool.
- **Choose PV*SOL** if you are desktop-based, work mainly residential, and value its component depth.
- **Choose PVsyst** where a lender names it on commercial or ground-mount work, paired with separate quoting.
- **Audit your template for Scambio sul Posto assumptions** before anything else. It is free and it is probably necessary.

After signing, pipeline and follow-up sit in a CRM. [QuickEstimate](https://quickestimate.co/) takes the handoff from SurgePV by API.

<div class="inline-cta">
<h3>Built for the rules that apply now</h3>
<p>Ritiro Dedicato buyback, Restructuring Bonus cashflow, hourly self-consumption and storage modelling, CEI-aware design, site weather and Italian-language proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/italy" target="_blank" rel="noopener noreferrer">Italy compliance library</a></p>
</div>

## The Bottom Line

Italy changed mechanism in May 2025 and much of the market's software has not.

- **Verify your tool models Ritiro Dedicato.** A platform still assuming Scambio sul Posto produces wrong numbers with full confidence.
- **Size to the load curve.** Export at 8 to 14 cents means capacity beyond daytime consumption barely earns.
- **Put storage in the main comparison.** It captures most of the retail price on everything it shifts.
- **Run a real project before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring an Italian address, or reach the Qbits team [here](/contact-us/) for CEI-compliant inverter and battery specification.
