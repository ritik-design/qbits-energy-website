---
title: "Best Solar Software Australia: The Complete 2026 Stack"
excerpt: "Falling export prices turned Australian solar into a self-consumption business. Any stack that still optimises for annual kWh is measuring the wrong thing."
description: "Best solar software Australia 2026: the full stack for design, proposals, CRM, STC claims and monitoring. AS/NZS 4777.2, SRES, state feed-in tariffs and battery modelling."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "12 min"
image: "/blog-images/solar-software-australia.svg"
author: "Nirav Dhanani"
keywords:
  - solar software australia
  - best solar software australia
  - solar software for australian installers
  - stc calculation software
  - solar business software australia
  - solar cec software
faqs:
  - q: "What software does an Australian solar company actually need?"
    a: "Six categories: design and simulation, proposal and quoting, CRM and pipeline, STC and rebate processing, project execution, and post-commissioning monitoring. Australia is distinctive in that STC calculation and claim handling is a real workstream rather than a line in a spreadsheet, because it materially reduces the customer's price and the value depends on system size, location and deeming period. A small installer can run on three well-chosen tools."
  - q: "Why does self-consumption matter more than annual output in Australia now?"
    a: "Because export prices have fallen while retail prices have not. When feed-in tariffs were generous, a system that generated a lot of energy made a lot of money regardless of when. Now that exported energy earns a fraction of what imported energy costs, the return depends on how much of the generation the household consumes at the moment it is produced. That makes annual kWh a misleading headline and forces battery modelling into jobs where it would previously have been an upsell."
  - q: "How should STCs be handled in software?"
    a: "As a calculated value derived from system size, location zone and deeming period, not a flat discount. Under the SRES the number of certificates depends on all three, and the value is then subject to the market price. A tool that hard-codes a rebate figure will misquote systems in different zones or of different sizes, and a proposal that presents STCs as a fixed discount without showing the calculation invites a question you would rather answer in writing."
  - q: "What standards does Australian solar software need to carry?"
    a: "AS/NZS 4777.2 for grid-connected inverter requirements and AS/NZS 5033 for the photovoltaic array installation. Clean Energy Council accreditation and approved product lists also shape what can be specified on an accredited installation. A tool that leaves these to the installer's memory rather than carrying them as a library produces designs that need rework at approval."
  - q: "Do state feed-in tariffs need to be modelled separately?"
    a: "Yes, because they differ and because the differences change the recommendation. Feed-in rates vary by state and by retailer, and in several markets they have fallen far enough that exported energy is close to incidental. Since the value case now rests on self-consumption, the applicable export rate determines how much a battery is worth and whether load shifting is worth recommending. A national average obscures exactly the variable that decides the design."
  - q: "How much should an Australian solar business spend on software?"
    a: "SurgePV starts at USD 1,899 per user per year, which lands near AU$2,900 with no per-project fees, covering design and proposals with 8,760-hour shading and bankable yield. The comparison worth making is against per-project pricing models, which look cheap at low volume and become the largest line in the software budget as soon as the business grows."
  - q: "Which solar software should an Australian installer start with?"
    a: "Design and proposals in one tool with battery modelling built in, because self-consumption is now the number that decides the sale. SurgePV covers AS/NZS 4777.2 and AS/NZS 5033, SRES STC calculation, state feed-in logic and 8,760-hour shading with Clara AI on every plan. Add a CRM when pipeline volume justifies it and monitoring when the installed base does."
featured: false
---

Australian solar software has to answer a question that did not matter a decade ago. When feed-in tariffs were generous, a system that generated plenty of energy earned plenty of money and the timing barely mattered, so annual kilowatt-hours was a reasonable headline. Export prices have fallen since, retail prices have not, and the return now depends on how much of the generation the household uses at the moment it is produced. That single shift makes self-consumption the design metric, forces battery modelling into ordinary residential jobs, and renders a large part of the traditional Australian sales pitch obsolete. This guide covers what the stack has to do now.

> **TL;DR**
> - An Australian solar business runs six software categories, with STC calculation and claim handling a genuine workstream.
> - Falling export prices mean self-consumption, not annual output, is the design metric.
> - That forces battery modelling into jobs where it used to be an optional upsell.
> - STCs depend on system size, location zone and deeming period, so a flat rebate figure will misquote.
> - AS/NZS 4777.2 and AS/NZS 5033 belong in the tool, alongside CEC approved product lists.
> - State feed-in rates differ enough that a national average hides the variable deciding the design.
> - [SurgePV](https://surgepv.com/) starts at USD 1,899 per user per year, near AU$2,900, with no per-project fees. [Book a free demo](https://surgepv.com/demo).

**Short version.** The best solar software for an Australian business in 2026 is a stack whose core can model self-consumption and batteries hourly, because that is where the return now comes from. Buy design and proposals together, insist on STC calculation rather than a hard-coded rebate, and be wary of per-project pricing that punishes growth.

This page covers the category as a whole. For the tool-by-tool comparisons see our [best solar design software Australia](/blog/solar-design-software-australia/) and [best solar proposal software Australia](/blog/solar-proposal-software-australia/) guides.

<div class="inline-cta">
<h3>Model self-consumption on a real Australian job</h3>
<p>A SurgePV engineer takes one of your addresses, runs 8,760-hour simulation with battery dispatch against the household load, and produces the branded proposal from the same record.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Six Categories, And Which Ones Have To Talk

| Category | What it does | How tightly it must integrate |
| --- | --- | --- |
| Design and simulation | Layout, shading, yield, self-consumption, battery dispatch | Core. Everything downstream derives from it |
| Proposal and quoting | Customer document, STCs, feed-in modelling, e-signature | Must share the design record |
| STC and rebate processing | Certificate calculation and claim handling | Should derive from the design, not a retyped size |
| CRM and pipeline | Leads, follow-up, conversion | API connection is sufficient |
| Project execution | Scheduling, install, CEC-accredited sign-off | Should receive the design |
| Monitoring | Performance, service, warranty | Standalone, connects to the installed base |

> **What changed, and what most stacks have not caught up with.** The design row used to mean layout and yield. It now has to mean self-consumption and battery dispatch, because those determine the financial outcome. A tool that produces an excellent annual generation figure and cannot say what proportion the household will actually use is answering a question that stopped mattering.

## What Is Genuinely Australia-Specific

**STCs under the SRES.** Certificate volume depends on system size, location zone and deeming period, and the value then depends on the market price. That is a calculation, not a constant. A tool hard-coding a rebate will misquote systems in different zones and of different sizes, and since STCs materially reduce the customer's price, the error is directly visible.

**AS/NZS 4777.2 and AS/NZS 5033.** Inverter grid connection requirements and array installation respectively. These are shared with New Zealand, which is convenient for anyone operating on both sides of the Tasman.

**Clean Energy Council accreditation and approved product lists.** These shape what can legitimately be specified on an accredited installation, and specifying off-list equipment creates a problem rather than a query.

**State feed-in tariffs that have fallen a long way.** The important consequence is not the rate itself but what it does to the design brief. Where export earns very little, the array should be sized closer to daytime load and the battery conversation becomes economic rather than aspirational. Our [best solar design software Australia](/blog/solar-design-software-australia/) guide covers the state-by-state picture.

## Where Australian Teams Overbuy And Underbuy

**Overbought: per-project pricing.** This deserves particular attention in Australia because several platforms use it. It looks inexpensive when you are doing a few jobs a month and becomes the largest software line in the business at volume, which is precisely when you can least afford a variable cost tied to activity.

**Overbought: all-in-one suites bought early.** A small residential installer needs accurate designs, honest self-consumption modelling and credible proposals.

**Overbought: seats for viewers.** Sales staff need finished documents rather than licences.

**Underbought: battery and self-consumption modelling.** The reliable gap. Many Australian stacks still produce an annual generation figure and a feed-in revenue line, which is the analysis that was correct when tariffs were generous. Without hourly dispatch modelling you cannot show a customer why storage pays, which means you either do not sell it or you sell it on assertion.

**Underbought: hourly shading at module level.** Annual averages mislead on obstructed roofs. Our [solar shading analysis software](/blog/solar-shading-analysis-software/) guide covers why.

<div class="inline-cta">
<h3>No per-project fees, whatever your volume</h3>
<p>SurgePV is USD 1,899 per user per year, near AU$2,900, with 8,760-hour shading, bankable yield and Clara AI included on every plan and no charge per job.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Platforms Australian Businesses Should Evaluate

### 1. SurgePV, the integrated core
Design and proposals from one record, with AS/NZS 4777.2 and AS/NZS 5033 coverage, SRES STC calculation, state feed-in logic, hourly self-consumption and battery dispatch, 8,760-hour module-level shading, bankable yield and Clara AI on every plan. [White-label proposals](https://surgepv.com/solar-proposals) with e-signature. USD 1,899 per user per year, near AU$2,900, no per-project fees.

### 2. OpenSolar
Free, widely used across Australia, and quick for residential layout with a presentable document. Lighter on bankable yield reporting and hourly dispatch depth. See our [OpenSolar alternative](/blog/opensolar-alternative/) comparison.

### 3. PVsyst
The bankable simulation reference, frequently named by lenders on commercial and utility work. No proposal layer and no Australian incentive logic. See our [PVsyst alternative](/blog/pvsyst-alternative/) review.

### 4. HelioScope
Capable browser-based engineering for commercial and industrial rooftops. No proposal layer. Our [HelioScope alternative](/blog/helioscope-alternative/) guide covers the trade-offs.

### 5. Aurora Solar
Strong residential design built around US net metering and US incentives, neither of which has an Australian counterpart. See our [Aurora Solar alternative](/blog/aurora-solar-alternative/) comparison.

### 6. Spreadsheets plus a yield tool
Common in smaller practices, and the usual home of an STC figure that was correct two zones ago.

## Australia Solar Software Stack Comparison

| Capability | SurgePV | OpenSolar | PVsyst | HelioScope | Aurora |
| --- | --- | --- | --- | --- | --- |
| Design and simulation | Yes | Partial | Yes | Yes | Yes |
| Proposal from design record | Yes | Yes | No | No | Yes |
| SRES STC calculation | Yes | Partial | No | No | No |
| AS/NZS 4777.2 and 5033 | Yes | Partial | Manual | Partial | No |
| Hourly self-consumption | Yes | Partial | Yes | Partial | Yes |
| Battery dispatch modelling | Yes | Partial | Partial | No | Yes |
| Hourly module-level shading | Yes | Partial | Yes | Yes | Yes |
| Per-project fees | None | None | None | None | None |

## Worked Example: Why The Old Pitch Stopped Working

An illustrative comparison, not a specific customer project. A 6.6 kW residential system, household with modest daytime consumption, on a state feed-in rate that has fallen substantially.

| | The pitch that used to work | The pitch that works now |
| --- | --- | --- |
| Headline | Annual generation in kWh | Share of generation self-consumed |
| Export treated as | Meaningful revenue | Low-value residual |
| Battery positioned as | Optional extra | Priced option in the main comparison |
| Sizing logic | Fill the roof | Track the daytime load curve |
| What the customer checks | The generation figure | Their actual bill |
| Does the second-year bill match? | Frequently not | Yes |

The left column is not dishonest. It was correct under generous feed-in tariffs and a lot of Australian sales material still carries it. The problem is that the customer now validates the claim against a bill that did not fall as much as the generation figure implied it would.

The right column is harder to produce, because it requires hourly modelling of generation against household load, and it requires being able to show what a battery changes. That is precisely why the software choice matters more in Australia now than it did five years ago. The analysis the market needs is no longer something a spreadsheet can do.

## Who Should Choose What

- **Choose SurgePV** if you need hourly self-consumption, battery dispatch and STC calculation from one license with no per-project fees.
- **Start with OpenSolar** if you are doing a handful of straightforward residential jobs a month and want to spend nothing while building volume.
- **Choose PVsyst** where a lender names it on commercial or utility work, paired with separate quoting.
- **Choose HelioScope** if your team is engineering-only on commercial rooftops.
- **Scrutinise per-project pricing.** It is cheapest exactly when you are smallest and most expensive exactly when you succeed.

After signing, pipeline and follow-up sit in a CRM. [QuickEstimate](https://quickestimate.co/) takes the handoff from SurgePV by API.

<div class="inline-cta">
<h3>Built for a self-consumption market</h3>
<p>AS/NZS coverage, SRES STC calculation, state feed-in logic, hourly self-consumption and battery dispatch, 8,760-hour shading and white-label proposals with no per-project fees.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/australia" target="_blank" rel="noopener noreferrer">Australia compliance library</a></p>
</div>

## The Bottom Line

Australian solar became a self-consumption business and a lot of software is still measuring generation.

- **Make self-consumption the headline.** Export earns a fraction of retail, so annual kWh no longer predicts the customer's saving.
- **Model batteries in the main comparison.** They are how self-consumption rises, and asserting the benefit without simulating it does not close jobs.
- **Calculate STCs rather than hard-coding them.** Zone, size and deeming period all move the number.
- **Run a real project before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring an Australian address, or reach the Qbits team [here](/contact-us/) for AS/NZS 4777.2 compliant inverter and battery specification.
