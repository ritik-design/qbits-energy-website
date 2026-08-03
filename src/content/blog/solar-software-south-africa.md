---
title: "Best Solar Software South Africa: The Complete 2026 Stack"
excerpt: "Single-phase residential is capped near 10 kVA and three-phase near 25 kVA. A design tool that does not enforce that at layout stage is building rework."
description: "Best solar software South Africa 2026: the full stack for design, proposals, CRM and compliance. NRS 097-2-1:2024, SANS 10142-1, SSEG approval, CoC issuance and Section 12B deductions."
category: "Solar Software"
date: 2026-08-03
updatedDate: 2026-08-03
readTime: "12 min"
image: "/blog-images/solar-software-south-africa.svg"
author: "Nirav Dhanani"
keywords:
  - solar software south africa
  - best solar software south africa
  - sseg software
  - solar software for sa installers
  - solar business software south africa
  - nrs 097 software
faqs:
  - q: "What software does a South African solar company actually need?"
    a: "Six categories: design and simulation, proposal and quoting, CRM and pipeline, SSEG approval and compliance documentation, project execution, and post-commissioning monitoring. Compliance carries unusual weight here because SSEG approval is mandatory before energising, a DoL-registered contractor must issue the CoC, and ECSA Professional Engineer sign-off applies above 25 kVA under an October 2025 policy update. A tool that ignores capacity limits at design stage creates rework at approval."
  - q: "What capacity limits apply to South African residential systems?"
    a: "Residential single-phase is typically limited to 10 kVA and three-phase to 25 kVA, across Eskom and the major municipalities. Those are design constraints rather than guidelines, and they should be enforced by the tool at layout stage. A design that exceeds them will not simply be queried, it will need reworking, and if it has already been quoted the customer conversation is awkward."
  - q: "Which standards govern South African solar installation?"
    a: "NRS 097-2-1:2024 for low-voltage grid integration, covering protection, anti-islanding, export limits and metering. SANS 10142-1:2020 is the wiring code and SANS 10142-2:2017 covers earthing and bonding. IEC 62619 covers batteries, which matters here because battery attach rates are high. A tool carrying these as a library reduces both rework and inspection queries."
  - q: "When is ECSA Professional Engineer sign-off required?"
    a: "Above 25 kVA, under an October 2025 policy update. That threshold is worth tracking in the design tool because it changes the cost and the programme of a project. A commercial design that drifts from 24 kVA to 26 kVA during value engineering has acquired a professional sign-off requirement, and if nobody noticed, the quoted price and timeline no longer reflect the work."
  - q: "How should Section 12B appear in a commercial proposal?"
    a: "As a first-year capital deduction rather than a rebate. Section 12B gives businesses a 125% first-year capital deduction with no size limit, which is a genuinely strong incentive and frequently understated in proposals. It reduces taxable income rather than reducing the purchase price, so it should appear in a cashflow rather than subtracted from the invoice, and it assumes the business has taxable income to deduct against."
  - q: "Do batteries need special software treatment in South Africa?"
    a: "More than in most markets, because attach rates are high and the driver is often supply reliability rather than pure economics. That means the modelling question is frequently about backup autonomy and critical load coverage rather than arbitrage value alone. A tool that can only evaluate storage on financial return will fail to describe what a South African customer is actually buying."
  - q: "Which solar software should a South African installer start with?"
    a: "Design and proposals in one tool that enforces the kVA limits at design time and carries NRS 097 and SANS references. SurgePV applies the limits at design time at $1,299 to $1,899 per user per year. Add a CRM when pipeline volume justifies it and monitoring when the installed base does."
featured: false
---

South African solar design has hard ceilings, and the most common software failure is not enforcing them early. Residential single-phase is typically limited to 10 kVA and three-phase to 25 kVA across Eskom and the major municipalities. A tool that lets an engineer lay out a system past those limits and only surfaces the problem at approval has not saved anyone time, it has moved the rework to the most expensive point in the process, usually after the customer has seen a number. Above 25 kVA the picture changes again, since ECSA Professional Engineer sign-off now applies. This guide covers what the South African stack has to do.

> **TL;DR**
> - Residential single-phase is typically capped near 10 kVA and three-phase near 25 kVA across Eskom and the major municipalities.
> - Above 25 kVA, ECSA Professional Engineer sign-off applies under an October 2025 policy update.
> - NRS 097-2-1:2024 governs LV grid integration including protection, anti-islanding, export limits and metering.
> - SANS 10142-1:2020 is the wiring code, SANS 10142-2:2017 covers earthing and bonding, [IEC 62619](/glossary/iec-62619/) covers batteries.
> - SSEG approval is mandatory before energising and a DoL-registered contractor issues the CoC.
> - Section 12B gives businesses a 125% first-year capital deduction with no size limit.
> - [SurgePV](https://surgepv.com/) applies the limits at design time at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** The best solar software for a South African business in 2026 is a stack whose core enforces capacity limits at layout stage, carries NRS 097 and SANS references, and can model batteries on backup autonomy rather than purely on financial return. Compliance is not a downstream formality here, it is a design constraint.

This page covers the category as a whole. For the tool-by-tool comparisons see our [best solar design software South Africa](/blog/solar-design-software-south-africa/) and [best solar proposal software South Africa](/blog/solar-proposal-software-south-africa/) guides.

<div class="inline-cta">
<h3>Design inside the kVA limits from the start</h3>
<p>A SurgePV engineer takes one of your addresses, applies the single-phase and three-phase limits and NRS 097 requirements at layout stage, and produces the branded proposal from the same record.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Six Categories, And Where Compliance Sits

| Category | What it does | How tightly it must integrate |
| --- | --- | --- |
| Design and simulation | Layout within kVA limits, NRS 097 compliance, yield | Core, and it must enforce the limits |
| Proposal and quoting | Customer document, Section 12B, backup coverage | Must share the design record |
| SSEG and compliance | Approval submission, CoC, ECSA sign-off above 25 kVA | Should derive from the design |
| CRM and pipeline | Leads, follow-up, conversion | API connection is sufficient |
| Project execution | Scheduling, install, inspection, energisation | Should receive the design |
| Monitoring | Performance, service, warranty | Standalone, connects to the installed base |

> **The design constraint most tools treat as paperwork.** Capacity limits and the 25 kVA sign-off threshold are properties of the design, not of the approval process. A tool that surfaces them only when you export a compliance pack has let an engineer waste time and, worse, may have let a salesperson quote a system that cannot be built as drawn.

## What Is Genuinely South Africa-Specific

**The kVA ceilings, enforced at layout.** Covered above. The specific thing to test when evaluating software is whether the limit is a warning at design time or a discovery at submission.

**The 25 kVA ECSA threshold.** Under the October 2025 policy update, crossing it brings a Professional Engineer sign-off requirement with real cost and programme implications. A commercial project that grows from 24 to 26 kVA during negotiation has changed shape, and the tool should make that visible rather than leaving it to be noticed.

**NRS 097-2-1:2024 and the SANS family.** Grid integration, wiring, earthing and bonding respectively, plus IEC 62619 for batteries. Battery coverage matters more here than in most markets given attach rates.

**Batteries bought for reliability, not arbitrage.** This is the modelling point most international tools miss entirely. A South African customer frequently wants to know how long the house runs on backup and which circuits stay live, not what the payback on the battery is. A tool that can only evaluate storage financially cannot describe what is actually being purchased, and the proposal ends up answering the wrong question.

**Section 12B.** A 125% first-year capital deduction with no size limit is a strong incentive that is frequently understated. It reduces taxable income rather than the purchase price, so it belongs in a cashflow.

## Where South African Teams Overbuy And Underbuy

**Underbought: limit enforcement at design time.** The clearest gap, and the one that generates the most avoidable rework.

**Underbought: backup and critical load modelling.** Given why South Africans buy batteries, this is a strange thing to be missing and it is missing from most stacks.

**Underbought: Section 12B cashflow modelling on commercial work.** The deduction is generous enough that presenting it properly changes commercial decisions.

**Overbought: international platforms with no NRS or SANS awareness.** Capable design tools that leave every local requirement to the engineer.

**Overbought: seats for viewers.** Universal.

<div class="inline-cta">
<h3>Model backup autonomy, not just payback</h3>
<p>SurgePV sizes storage against critical loads and backup duration alongside financial return, so a South African proposal answers the question the customer is actually asking.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Platforms South African Businesses Should Evaluate

### 1. SurgePV, the integrated core
Design and proposals from one record, with single-phase and three-phase kVA limits applied at design time, NRS 097-2-1:2024 and SANS 10142 references, IEC 62619 battery handling, backup and critical load modelling, Section 12B cashflow and 8,760-hour module-level shading. [White-label proposals](https://surgepv.com/solar-proposals) with e-signature. $1,299 to $1,899 per user per year.

### 2. PVsyst
The bankable simulation reference, frequently named by lenders on commercial and ground-mount work. No proposal layer and no South African regulatory logic. See our [PVsyst alternative](/blog/pvsyst-alternative/) review.

### 3. HelioScope
Capable browser-based engineering for commercial rooftops. No proposal layer and no NRS or SANS libraries. Our [HelioScope alternative](/blog/helioscope-alternative/) guide covers the trade-offs.

### 4. Aurora Solar
Strong residential design built around US net metering and US incentives, neither of which applies here, and with no concept of the kVA ceilings. See our [Aurora Solar alternative](/blog/aurora-solar-alternative/) comparison.

### 5. OpenSolar
Free and quick for residential layout with a presentable document. No local compliance libraries or limit enforcement. See our [OpenSolar alternative](/blog/opensolar-alternative/) comparison.

### 6. Spreadsheets plus a yield tool
Common, and the usual place a 25 kVA threshold gets crossed without anyone noticing.

## South Africa Solar Software Stack Comparison

| Capability | SurgePV | PVsyst | HelioScope | Aurora | OpenSolar |
| --- | --- | --- | --- | --- | --- |
| Design and simulation | Yes | Yes | Yes | Yes | Partial |
| Proposal from design record | Yes | No | No | Yes | Yes |
| kVA limits enforced at design | Yes | No | No | No | No |
| NRS 097 and SANS references | Yes | Manual | No | No | No |
| 25 kVA ECSA threshold flagged | Yes | No | No | No | No |
| Backup and critical load modelling | Yes | Partial | No | Partial | Partial |
| Section 12B cashflow | Yes | Manual | No | No | No |
| Hourly module-level shading | Yes | Yes | Yes | Yes | Partial |

## Worked Example: What Happens At 26 kVA

An illustrative comparison, not a specific customer project. A commercial design initially scoped at 24 kVA that grows during negotiation as the client adds load.

| | Design at 24 kVA | Design at 26 kVA |
| --- | --- | --- |
| ECSA Professional Engineer sign-off | Not required | Required |
| Additional professional cost | None | Real |
| Programme impact | None | Adds time to approval |
| Was it in the original quote? | n/a | Usually not |
| Who absorbs the difference? | n/a | Whoever failed to flag it |

The jump between the columns is small in engineering terms and significant commercially. A tool that flags the threshold as the design crosses it turns this into a conversation with the client about scope and price. A tool that does not turns it into a discovery after the quote is signed.

The same logic applies to the residential ceilings, and more often. An engineer laying out a single-phase system with a generous roof will exceed 10 kVA without much effort, and if the tool is silent, the first objection comes from the utility rather than from the software.

## Who Should Choose What

- **Choose SurgePV** if you want kVA limits enforced at design time, NRS 097 and SANS references, and backup modelling in one tool.
- **Choose PVsyst** where a lender names it on commercial or ground-mount work, paired with separate quoting.
- **Choose HelioScope** if your team is engineering-only on commercial rooftops.
- **Test any international platform on the kVA ceilings** before buying it for South African work.
- **Model batteries on backup coverage.** It is what the customer is buying, whatever the payback says.

After signing, pipeline and follow-up sit in a CRM. [QuickEstimate](https://quickestimate.co/) takes the handoff from SurgePV by API.

<div class="inline-cta">
<h3>Compliance as a design constraint, not paperwork</h3>
<p>kVA limits at layout, NRS 097 and SANS references, the 25 kVA ECSA threshold flagged, backup autonomy modelling, Section 12B cashflow and white-label proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/south-africa" target="_blank" rel="noopener noreferrer">South Africa compliance library</a></p>
</div>

## The Bottom Line

South African compliance belongs at design stage, because that is where it is cheap.

- **Enforce the kVA ceilings in the tool.** A limit discovered at submission has already cost engineering time and possibly a quoted price.
- **Flag the 25 kVA threshold.** Crossing it adds professional sign-off, cost and programme, and it happens during ordinary scope growth.
- **Model batteries on backup, not just payback.** Reliability is why they are bought and financial modelling alone misses the point.
- **Run a real project before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring a South African address, or reach the Qbits team [here](/contact-us/) for IEC 62619 compliant battery and inverter specification.
