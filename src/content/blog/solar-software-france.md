---
title: "Best Solar Software France: The Complete 2026 Stack"
excerpt: "The prime is gone and surplus sells at 1.1 centimes. French software bought before June 2026 is now modelling two revenue lines that no longer exist."
description: "Best solar software France 2026: the full stack for design, proposals, CRM and compliance. The S21 reform, the abolished prime à l'autoconsommation, 1.1 c/kWh surplus, NF C 15-712 and Consuel."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "12 min"
image: "/blog-images/solar-software-france.svg"
author: "Nirav Dhanani"
keywords:
  - solar software france
  - best solar software france
  - logiciel photovoltaique
  - autoconsommation software
  - solar business software france
  - s21 solar software
faqs:
  - q: "What changed for French solar software on 5 June 2026?"
    a: "Two revenue lines disappeared. The prime à l'autoconsommation was abolished for new installations under the revised S21 arrêté, and the surplus buyback rate was cut to 1.1 centimes per kWh excluding tax for new applications. Connection requests validated by Enedis before that date keep the previous tariffs and bonus for twenty years. Any tool still applying a prime or a meaningful buyback rate is modelling a scheme new customers cannot enter."
  - q: "How does a 1.1 centime buyback change system design?"
    a: "It makes surplus generation nearly worthless and moves the entire value case into self-consumption. Against a retail price many times higher, exported energy earns roughly a twentieth of what the household pays to import. Filling the roof, which was reasonable under the old tariff, now builds capacity producing energy nobody will meaningfully pay for. Correct sizing tracks the daytime load curve, which requires hourly modelling rather than annual totals."
  - q: "Does the reform make storage worth modelling?"
    a: "It makes storage the central design question. Every kilowatt-hour a battery shifts from midday surplus into evening consumption converts something worth 1.1 centimes into something worth the full retail import price. That is a far stronger case than existed under the old regime, when a battery competed against a decent export tariff. A design tool that cannot dispatch a battery against an hourly load profile cannot size a French system correctly now."
  - q: "Why do customers quote better numbers than your proposals show?"
    a: "Because installations whose connection request was validated by Enedis before 5 June 2026 retain the previous arrangements for twenty years. That creates a large installed base with genuinely excellent economics that are no longer available. A neighbour's payback figure or an article from last year can be entirely accurate and entirely inapplicable, and that objection will arrive in nearly every French sales conversation for years."
  - q: "Which standards must French solar software reference?"
    a: "NF C 15-712-1 for photovoltaic installations connected to the public network, alongside NF C 15-100 for the general low-voltage installation, with a Consuel attestation of conformity required before commissioning. Carrying these as a library rather than relying on the installer reduces submissions that come back with queries."
  - q: "Is French residential solar still worth installing?"
    a: "For the right load profile, yes, but the case is narrower and honest quoting matters more. A household consuming heavily during daylight, or one adding storage, still displaces expensive retail import and the numbers work. A household empty all day that exports most of its generation now earns 1.1 centimes for that energy, and a well-built model will show the project struggling. Telling that customer the truth is better business than selling a system that will disappoint."
  - q: "Which solar software should a French installer start with?"
    a: "Design and proposals in one tool with hourly self-consumption analysis and battery dispatch, because the reform moved everything there. SurgePV covers both at $1,299 to $1,899 per user per year. Before buying anything, verify it does not still apply the prime, because a great many templates and platforms do."
featured: false
---

Every French solar proposal written before 5 June 2026 contained two revenue lines that no longer exist. The prime à l'autoconsommation was abolished for new installations under the revised S21 arrêté, and surplus buyback for new applications fell to 1.1 centimes per kWh excluding tax. Against a retail price many times higher, exported energy became close to worthless in the space of a single day. Quotes issued the week before were correct. Templates that were accurate in May now promise an upfront bonus the customer will not receive and export revenue roughly twenty times larger than what arrives. This guide covers what the French stack has to do now.

> **TL;DR**
> - The prime à l'autoconsommation was abolished for new installations from 5 June 2026 under the revised S21 arrêté.
> - Surplus buyback for new applications is 1.1 centimes per kWh excluding tax, roughly a twentieth of retail import.
> - Connections validated by Enedis before that date keep old tariffs and bonus for twenty years, creating two populations of systems.
> - Design now optimises self-consumption rather than generation, which needs hourly load modelling.
> - Storage moved from upsell to central design question, converting 1.1 centime energy into retail-value energy.
> - NF C 15-712-1 and NF C 15-100 apply, with a Consuel attestation required before commissioning.
> - [SurgePV](https://surgepv.com/) at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** The best solar software for a French business in 2026 is whichever tool has been updated for the post-S21 rules and can dispatch a battery against an hourly load profile. The first is a correctness test and the second is a capability test, and a surprising number of platforms fail both.

This page covers the category as a whole. For the tool-by-tool comparisons see our [best solar design software France](/blog/solar-design-software-france/) and [best solar proposal software France](/blog/solar-proposal-software-france/) guides.

<div class="inline-cta">
<h3>Size a French job for self-consumption</h3>
<p>A SurgePV engineer takes one of your addresses, runs 8,760-hour simulation against the household load with battery dispatch, and produces the French-language proposal from the same record.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Six Categories, And Where The Damage Is

| Category | What it does | Effect of the June 2026 reform |
| --- | --- | --- |
| Design and simulation | Layout, hourly self-consumption, battery dispatch | Sizing logic inverted |
| Proposal and quoting | Two deleted revenue lines, honest export figure | Needs rebuilding for nearly every team |
| CRM and pipeline | Leads, follow-up, conversion | Unaffected |
| Compliance | NF C 15-712-1, NF C 15-100, Consuel | Unaffected |
| Project execution | Enedis connection, commissioning | Connection date now has 20-year consequences |
| Monitoring | Performance, service, warranty | Unaffected |

> **The narrow shape of the problem.** Four of six categories are untouched. The disruption is concentrated in design and proposals, which makes the remedy focused: verify your core tool models the post-reform rates, and confirm it can simulate storage hourly. Everything else in your stack is fine.

## What Is Genuinely France-Specific Right Now

**Two populations of systems.** Pre-5-June connections keep old rates for twenty years. This is not a transitional detail, it is a permanent feature of the French market for the next two decades, and it means every sales conversation includes a comparison against economics that were real and are unavailable. Address it in the proposal rather than leaving it to the salesperson.

**Sizing inverted.** Under the old regime the bonus scaled with size and surplus had a buyer, so both pushed toward capacity. Now nothing does. Capacity beyond the daytime load curve earns roughly a twentieth of what the household pays to import.

**Storage as core economics.** A battery now captures nearly the entire retail spread on everything it shifts. Whether it pays still depends on cost and the household's evening demand, but the arithmetic starts from a far better place than a year ago.

**The honest small export line.** At 1.1 centimes, a residential system exporting several thousand kilowatt-hours earns a few tens of euros. Showing that plainly makes the argument for self-consumption better than any assertion could.

**NF C 15-712-1, NF C 15-100 and Consuel.** Installation standards and the attestation of conformity required before commissioning.

**Latitude range.** France spans enough latitude that Lille and Marseille differ in the self-consumption balance, not just in total yield. Site weather rather than a national assumption.

## Where French Teams Overbuy And Underbuy

**Underbought: hourly self-consumption modelling.** The defining requirement now, and French quoting never needed it under the old tariff.

**Underbought: battery dispatch simulation.** The natural answer to the reform, and unsellable on assertion alone.

**Underbought: updated tariff data.** Not a purchase so much as a maintenance failure. The single highest-return action available to most French installers is auditing their template for a prime that no longer exists.

**Overbought: nothing significant.** As in the Netherlands and Italy, the French problem is correctness rather than overspend.

<div class="inline-cta">
<h3>Model the battery as part of the design</h3>
<p>SurgePV dispatches storage against the hourly load and generation profile, so a French customer sees exactly how much 1.1 centime energy becomes retail-value energy.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Platforms French Businesses Should Evaluate

### 1. SurgePV, the integrated core
Design and proposals from one record, with post-reform tariff logic, hourly self-consumption analysis, battery dispatch modelling, NF C 15-712 and NF C 15-100 references, Consuel-aware documentation, site-specific weather and 8,760-hour module-level shading. [White-label proposals](https://surgepv.com/solar-proposals) with e-signature in 9 languages including French. $1,299 to $1,899 per user per year.

### 2. PV*SOL
Strong European residential and small commercial modelling with capable self-consumption and storage tooling, which positions it reasonably for the new regime. Desktop-based. Our [PV*SOL alternative](/blog/pvsol-alternative/) guide covers the trade-offs.

### 3. PVsyst
The bankable simulation reference, frequently named by lenders on commercial and ground-mount work. No proposal layer and no French incentive logic. See our [PVsyst alternative](/blog/pvsyst-alternative/) review.

### 4. OpenSolar
Free, fast, and produces a decent customer document. Weaker on the hourly dispatch the reform made essential. See our [OpenSolar alternative](/blog/opensolar-alternative/) comparison.

### 5. Aurora Solar
Strong residential design built around US net metering, which France has never operated and is now further from than ever. See our [Aurora Solar alternative](/blog/aurora-solar-alternative/) comparison.

### 6. Spreadsheets plus a yield tool
Common in smaller French practices, and the single most likely place an abolished prime is still being subtracted from a customer's total.

## France Solar Software Stack Comparison

| Capability | SurgePV | PV*SOL | PVsyst | OpenSolar | Aurora |
| --- | --- | --- | --- | --- | --- |
| Design and simulation | Yes | Yes | Yes | Partial | Yes |
| Proposal from design record | Yes | Partial | No | Yes | Yes |
| Post-reform tariff logic | Yes | Manual | Manual | No | No |
| Hourly self-consumption | Yes | Yes | Yes | Partial | Yes |
| Battery dispatch modelling | Yes | Yes | Partial | Partial | Yes |
| NF C 15-712 references | Yes | Partial | Manual | No | No |
| Site-specific weather | Yes | Yes | Yes | Partial | Partial |
| French-language proposals | Yes | Partial | No | Partial | No |

## Worked Example: 6 kWp Near Lyon, Three Ways To Quote It

An illustrative comparison, not a specific customer project. Household consuming 4,000 kWh a year, roof supporting 6 kWp, roughly 7,200 kWh generation, 35% self-consumption without storage rising to about 70% with a battery.

| | A: old template | B: current rates | C: current rates plus storage |
| --- | --- | --- | --- |
| Self-consumed | 2,520 kWh | 2,520 kWh | about 5,040 kWh |
| Exported | 4,680 kWh | 4,680 kWh | about 2,160 kWh |
| Export revenue shown | Overstated | about EUR 51 | about EUR 24 |
| Upfront bonus shown | Prime applied | None | None |
| Is the quote accurate? | No | Yes | Yes |

Column A is what a stale template produces and it is simply wrong. Column B is honest and will look worse to a customer comparing quotes, which is the commercial problem the reform created for careful installers.

Column C is the answer to that problem. Doubling self-consumption roughly doubles the only benefit that still exists. Whether the battery cost justifies it depends on the household's evening demand and hardware pricing, which is a calculation to run rather than a claim to make. But an installer who can only offer columns A and B is choosing between dishonesty and a weak quote.

## Who Should Choose What

- **Choose SurgePV** if you need post-reform tariff logic, hourly self-consumption and battery dispatch in one tool.
- **Choose PV*SOL** if you are desktop-based, work mainly residential, and value its component depth.
- **Choose PVsyst** where a lender names it on commercial or ground-mount work, paired with separate quoting.
- **Audit your template for the prime before buying anything.** It is free, it takes an hour, and it is probably necessary.

After signing, pipeline and follow-up sit in a CRM. [QuickEstimate](https://quickestimate.co/) takes the handoff from SurgePV by API.

<div class="inline-cta">
<h3>Built for the rules that took effect in June</h3>
<p>Post-reform tariff modelling, hourly self-consumption, battery dispatch, NF C 15-712 references, Consuel-aware documentation and French-language proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/france" target="_blank" rel="noopener noreferrer">France compliance library</a></p>
</div>

## The Bottom Line

France did not trim its solar incentives in June 2026. It removed them, and most tooling has not caught up.

- **Verify your tool has been updated.** A platform still applying the prime or the old buyback is confidently wrong.
- **Stop sizing to the roof.** Surplus earns 1.1 centimes, so capacity beyond the daytime load is close to free energy for the grid.
- **Put storage in the main comparison.** It captures nearly the full retail spread and it is the answer to a weakened export case.
- **Run a real project before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring a French address, or reach the Qbits team [here](/contact-us/) for inverter and battery specification.
