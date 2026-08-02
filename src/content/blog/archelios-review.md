---
title: "Archelios Review 2026: French PV Engineering Suite, Assessed"
excerpt: "An honest Archelios review for 2026. Published pricing from €990 to €1,990 a year, real strengths in NF C 15-712 electrical compliance, and where the suite stops fitting."
description: "Archelios review 2026: Trace Software's archelios PRO and CALC modules, published subscription pricing, genuine strengths in French and European electrical compliance, honest limitations, and alternatives including SurgePV and PVsyst."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "12 min"
image: "/blog-images/archelios-review.svg"
author: "Keyur Rakholiya"
keywords:
  - archelios review
  - archelios pro pricing
  - trace software archelios
  - archelios calc review
  - archelios vs pvsyst
  - french solar design software
faqs:
  - q: "What is Archelios and who makes it?"
    a: "Archelios is a photovoltaic engineering suite from Trace Software International, a French engineering software company. It is sold as modules rather than one product. archelios PRO handles 3D design, production simulation, self-consumption and economic analysis. archelios CALC handles the electrical side, meaning cable sizing, protection device selection, calculation notes and single-line diagrams. Trace Software also lists an O&M module for the monitoring phase. The suite is designed so a project can move from feasibility study through to stamped calculation notes inside one vendor's toolchain."
  - q: "How much does Archelios cost in 2026?"
    a: "Trace Software publishes prices, which is unusual in this category. These are its published list prices at the time of writing and should be confirmed with the vendor. archelios PRO Silver is listed at €990 excluding tax per year for projects up to 100 kWp, PRO Gold at €1,490 for projects up to 1 MWp, and PRO Platinum at €1,990 with no power ceiling. archelios CALC is listed at €1,350 excluding tax per year, with a CALC plus HV variant reported in the €1,500 to €1,590 range. A design office wanting both simulation and electrical calculation is therefore looking at roughly €2,340 to €3,340 per year per user before tax and before any services."
  - q: "Is Archelios compliant with NF C 15-712?"
    a: "The CALC module is built for it. Trace Software states that archelios CALC performs electrical sizing according to IEC or NF standards, with the standard set chosen at purchase, and the product material references the UTE C15-712 and NF C 15-712-1 guides alongside IEC 60364. That is the reference framework for grid-connected photovoltaic installations in France, and it is the single strongest reason a French design office buys this suite rather than a general-purpose simulation tool. Verify the exact normative scope for your project class with the vendor before relying on it for submissions."
  - q: "Is there a free version of Archelios?"
    a: "Yes. Trace Software offers archelios PRO Free, which allows design, calculation and simulation of installations up to 9 kWp on a one-year licence. It includes inverter and module sizing assistance, meteorological data, automatic horizon mask computation, economic analysis and self-consumption simulation with optional battery storage. It is genuinely useful for small residential work, training and evaluation. It is not a route to running a business on, because most commercial and even many larger residential jobs exceed the 9 kWp ceiling."
  - q: "Is Archelios better than PVsyst?"
    a: "They answer different questions. PVsyst is the yield simulation reference that lenders and independent engineers name in contracts, and nothing in the Archelios suite displaces that when a financing agreement specifies PVsyst output. Archelios goes deeper on the electrical installation side, where PVsyst is not positioned around NF C 15-712 style calculation notes and protection selection. Many French engineering practices end up running both, using PVsyst for the bankable yield report and archelios CALC for the installation dossier."
  - q: "Who should buy Archelios?"
    a: "French and European design offices, bureaux d'études, and engineering-led installers whose deliverable is a technical dossier rather than a sales proposal. If your output includes calculation notes, cable schedules, protection coordination and single-line diagrams that have to stand up to a Consuel inspection or an equivalent European review, the CALC module is doing work that most competing platforms do not attempt. The published pricing also makes it easy to budget, which matters for small practices."
  - q: "Who should not buy Archelios?"
    a: "Volume residential sales teams. If your bottleneck is producing a branded, customer-facing proposal quickly and closing in the home, an engineering suite built around calculation notes is not aimed at your problem. The same applies to teams working primarily outside Europe, where the NF and IEC compliance depth that justifies the price is less directly useful. Test the customer-facing output on a real job before committing, because that is where the fit usually breaks."
  - q: "What is the best Archelios alternative for French installers after the S21 reform?"
    a: "SurgePV is the strongest alternative for teams whose problem is post-reform economics rather than normative calculation. It runs $1,299 to $1,899 per user per year with design, 8,760-hour simulation, battery dispatch modelling and branded proposals from one project record. Since the June 2026 S21 reform cut surplus buyback to 1.1 centimes per kWh excluding tax, hourly self-consumption and storage modelling decide whether a French quote is honest. If you also need stamped NF C 15-712 calculation notes, keep a CALC licence alongside it rather than instead of it."
featured: false
---

Archelios is one of the few solar design products that tells you what it costs before you talk to a salesperson. That alone puts Trace Software International, the French engineering software house behind it, in a small minority of this category. But published pricing is not a reason to buy. This review looks at what the archelios suite actually is, how its modules divide the work, what the published subscriptions cost in 2026, where the engineering depth is genuine, where the fit breaks down, and which alternatives a French or European buyer should put next to it before signing. The short answer is that this is a design office tool wearing engineering clothes honestly, and the buying mistake is expecting it to behave like a sales platform.

> **TL;DR**
> - Archelios is a modular PV engineering suite from Trace Software International, split across archelios PRO for design and simulation and archelios CALC for electrical sizing and compliance.
> - Published list pricing at the time of writing: PRO Silver €990, PRO Gold €1,490, PRO Platinum €1,990 excluding tax per year, with power ceilings of 100 kWp, 1 MWp and unlimited respectively.
> - archelios CALC is listed at €1,350 excluding tax per year, with a high-voltage variant reported at €1,500 to €1,590.
> - CALC performs electrical sizing to IEC or NF standards, referencing UTE C15-712, NF C 15-712-1 and IEC 60364, which is the core reason to buy it in France.
> - A free tier, archelios PRO Free, covers projects up to 9 kWp on a one-year licence.
> - Best fit: French and European design offices producing technical dossiers. Worst fit: volume residential sales teams needing fast branded proposals.

**Short version.** Archelios is a French-origin photovoltaic engineering suite built by Trace Software International, sold as modules covering 3D design and simulation (archelios PRO, €990 to €1,990 excluding tax per year) and electrical calculation and compliance (archelios CALC, €1,350). Its distinguishing strength is normative electrical sizing to NF and IEC standards. It is an engineering tool, not a sales platform, and should be judged on that basis.

## What Archelios Actually Is

Archelios is not one application. It is a range, and understanding the division is most of understanding the product.

**archelios PRO** is the design and simulation module. You build the installation in 3D, size inverters and modules, pull meteorological data, compute the horizon mask, run production forecasting, and produce economic indicators. Trace Software lists self-consumption management, battery storage settings, tracker and clipping optimisation, solar pumping sizing, and project comparison among its capabilities, plus SketchUp and Revit plugins and DXF, GeoJSON and KML export.

**archelios CALC** is the electrical module. It performs the electrical dimensioning of the installation, from the modules to the inverter and from the inverter to the network, and in self-consumption from the modules to the electrical panel. Its output is the paperwork an installation dossier is made of: calculation notes, parts lists, cable lists and single-line diagrams. Trace Software also states that calculation notes can be modified during installation inspections, which is a small detail that tells you who the product was designed for.

**archelios O&M** covers the monitoring phase, completing the suite across feasibility, design, execution and operation.

That structure is the product's identity. Most platforms in this category run design and then hand the electrical work to a separate discipline. Archelios treats electrical calculation as a first-class module with its own licence and its own standards library. If you have ever watched a design handoff fall apart because the simulation tool had no opinion about cable cross-sections or protection coordination, you already understand what this suite is selling.

## Archelios Pricing in 2026

Trace Software publishes list prices on its own product pages, so these are verifiable rather than reported. All figures are excluding tax, per year, and reflect the vendor's own listings at the time of writing.

| Module | Published price (excl. tax / year) | Scope |
| --- | --- | --- |
| archelios PRO Free | €0, one-year licence | Projects up to 9 kWp |
| archelios PRO Silver | €990 | Projects up to 100 kWp |
| archelios PRO Gold | €1,490 | Projects up to 1 MWp |
| archelios PRO Platinum | €1,990 | Unlimited power |
| archelios CALC | €1,350 | Electrical sizing, IEC or NF standard set |
| archelios CALC + HV | €1,500 to €1,590 (reported) | Adds high-voltage scope |
| SurgePV Individual | $1,899 / user / yr | Design and proposals, one licence |
| SurgePV 3-User Team | $1,499 / user / yr | Same, up to 3 seats |
| SurgePV 5-User Team | $1,299 / user / yr | Same, up to 5 seats |

Two things follow from that table. First, the power-banded tiering on PRO is unusual and mostly sensible. A practice that only ever touches residential and small commercial pays €990 rather than subsidising features for utility-scale work it will never do. Second, the real cost of the suite is not the PRO line. A design office that wants both simulation and normative electrical calculation buys PRO plus CALC, which lands between roughly €2,340 and €3,340 per year per user before tax and before service tiers. Budget against that number, not against the €990 headline.

The CALC subscription page notes that the standard set, IEC or NF, is chosen at purchase. Confirm which set your work requires before ordering, because that choice is not a toggle you flip casually mid-contract.

<div class="inline-cta">
<h3>Price the whole workflow, not one module</h3>
<p>Bring a real French project. A SurgePV engineer runs it end to end, from address to hourly self-consumption model to a branded proposal, so you can see what sits inside one licence and what you would still buy separately.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## What Archelios Genuinely Does Well

Credit where it belongs. These are real strengths, and some of them are not available elsewhere at any price.

**Normative electrical calculation.** This is the headline. Trace Software states that archelios CALC sizes the electrical installation according to IEC or NF standards, and the product material references the UTE C15-712 and NF C 15-712-1 guides alongside IEC 60364. NF C 15-712-1 is the reference standard for photovoltaic installations connected to the public network in France, and a Consuel attestation of conformity is required before a connection is commissioned. A tool that carries that framework as a standards library, rather than leaving it to the engineer's memory and a spreadsheet, removes a category of rework that has nothing to do with how good your array layout was.

**Cable and protection sizing as a real deliverable.** Calculation notes, cable lists, parts lists and single-line diagrams come out of the tool. That is the installation dossier. Most competing platforms produce a beautiful production estimate and then leave you to build the electrical documentation somewhere else. Archelios does not, and for a bureau d'études that difference is worth more than another decimal place on the yield figure.

**Credible engineering orientation.** The suite reads as though it was built by engineers for engineers. Power-banded licensing, a database of equipment manufacturers, real-time calculation, the ability to amend calculation notes during an inspection, BIM integration through SketchUp and Revit plugins. None of that is aimed at closing a homeowner. All of it is aimed at getting a dossier through review.

**Transparent, modest pricing.** €990 to €1,990 per year for the design module is genuinely low for this depth of capability, and the fact that it is published means you can budget without a discovery call. In a category where the standard answer to a pricing question is a calendar link, that is a real courtesy.

**A free tier that is not a demo.** archelios PRO Free covers projects up to 9 kWp on a one-year licence with meteorological data, horizon mask computation, economic analysis and self-consumption simulation with optional battery storage. For a training environment, an installer doing small residential work, or an honest evaluation, that is usable rather than crippled.

## Where Archelios Falls Short

**The customer-facing side is not the product's strength.** This is the limitation that decides the buy for most installers. Archelios is oriented toward technical output, and the deliverables Trace Software names are calculation notes, schematics and lists. That is the correct emphasis for a design office. It is the wrong emphasis for a team whose conversion depends on putting a branded, legible, savings-first document in front of a homeowner within an hour of the site visit. If your commercial motion runs on proposals rather than dossiers, evaluate that specific output early, because it is where the mismatch shows.

**Breadth outside its core European focus.** The suite's compliance depth is expressed through NF and IEC standard sets, which covers France well and Europe broadly. That is a deliberate and defensible scope. But the value you are paying for is concentrated in that geography. A team working primarily in the United States under NEC, or in a market with its own subsidy arithmetic, gets the simulation but not the compliance advantage that justifies the licence. Buying a compliance-oriented tool for a jurisdiction it does not target is paying for the wrong half of the product.

**Learning curve.** Modular engineering software with normative calculation is not something a new hire is productive in on day two. The split between PRO and CALC also means the workflow has a handoff inside it, through an export from one module to the other. That is a coherent design, but it is another thing to learn, and it is a real cost for a small practice with one senior engineer and high turnover below them.

**Two licences for one workflow.** Simulation and electrical calculation are separate purchases. That is honest, because a team needing only one should not pay for both. It also means the practical cost of the suite is roughly double the advertised design price, and that surprises buyers who anchored on €990.

| Dimension | Archelios strength | Archelios limitation |
| --- | --- | --- |
| Electrical compliance | NF and IEC standard sets, NF C 15-712 references | Value concentrated in Europe |
| Deliverables | Calculation notes, cable lists, single-line diagrams | Customer-facing proposal is not the focus |
| Pricing | Published, modest, power-banded | Full workflow needs two subscriptions |
| Simulation | 3D design, meteorological data, horizon mask, self-consumption | Not the lender-named bankability reference |
| Onboarding | Free tier up to 9 kWp for evaluation | Modular workflow takes time to learn |
| Buyer fit | Design offices, engineering-led installers | Volume residential sales teams |

> **What most buyers get wrong.** They compare Archelios to Aurora or OpenSolar on proposal quality and conclude it lost. That comparison is a category error. Archelios competes with the spreadsheet and the manual calculation note your senior engineer currently maintains, and against that incumbent it wins comfortably. Judge it on the dossier, not the pitch deck.

## The S21 Problem Every French Tool Now Has

There is a change in the French market that reshapes the evaluation, and it has nothing to do with electrical standards.

On 5 June 2026 the revised S21 tariff arrêté abolished the prime à l'autoconsommation for new installations and cut the surplus buyback rate to 1.1 centimes per kWh excluding tax. Against a regulated retail import price many times higher, exported energy is now worth close to nothing. Our [French solar design software guide](/blog/solar-design-software-france/) covers the full consequences, but the design implication is one line: sizing to the roof is finished, and sizing to the daytime load curve replaces it.

That moves the decisive question in a French quote from "is the electrical design compliant" to "how much of this generation does the household actually consume, and what does a battery convert." Both questions matter. Compliance is not optional and never was. But compliance was always required, whereas the self-consumption arithmetic changed by an order of magnitude in a single arrêté, and it now decides whether the project is worth doing at all.

So the honest framing for a French buyer in 2026 is that Archelios answers the compliance question well and the post-reform economics question is a separate evaluation. archelios PRO does include self-consumption simulation and battery storage settings, and PRO Free explicitly offers self-consumption projects with optional storage. What you should test on a real job is the resolution and the tariff logic: whether the model runs against an hourly load profile and post-reform French rates, or against annual totals. That test takes an afternoon and it is the most useful afternoon in the whole evaluation.

<div class="inline-cta">
<h3>Test the 1.1 centime question on a real household</h3>
<p>SurgePV simulates 8,760 hours of generation against the load curve and dispatches a battery through it, so you can show a French customer exactly how much near-worthless surplus the storage converts into retail-value energy.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Who Should Buy Archelios

Buy it if most of these describe you.

- You are a French or European bureau d'études, design office, or engineering-led installer.
- Your billable deliverable includes calculation notes, cable schedules and single-line diagrams, not only a customer proposal.
- Your work has to satisfy NF C 15-712-1, NF C 15-100 and Consuel review, or the IEC equivalents elsewhere in Europe.
- You currently maintain electrical calculations in a spreadsheet and want that liability inside a maintained standards library.
- You want published pricing you can put in a budget without a sales call.

At that profile, roughly €2,340 to €3,340 a year for PRO plus CALC is a small line against the rework and review cycles it removes. Arguing against Archelios for this buyer would be a sales pitch rather than a review.

## Who Should Not Buy Archelios

- **Volume residential sales teams.** If your constraint is producing fast, branded, customer-legible proposals at scale, you are buying engineering depth to solve a document problem.
- **Teams working mainly outside Europe.** The NF and IEC compliance libraries are the reason the price makes sense. Outside that scope you pay for them and use the simulation only.
- **Anyone who needs a lender-named bankability report.** If a financing agreement specifies PVsyst by name, no other tool substitutes for it, whatever its technical merits.
- **Small teams with high turnover.** The modular workflow and normative depth reward a stable, trained engineer. They punish a rotating cast.
- **Anyone whose main 2026 problem is post-reform French economics.** Test the hourly self-consumption and battery modelling specifically before assuming compliance depth covers it.

## Alternatives Worth Comparing

**SurgePV, for the post-reform commercial workflow.** SurgePV runs $1,299 to $1,899 per user per year depending on team size, with design, 8,760-hour module-level shading and simulation, battery dispatch modelling, financial modelling and white-label proposals produced from one project record rather than assembled across tools. The specific reason it matters in France is the S21 reform: with surplus at 1.1 centimes, hourly self-consumption and storage dispatch decide whether a quote is honest, and generating the customer document from the same record removes the transcription step where most quoting errors are born. What it does not do is replace a stamped NF C 15-712 calculation note. For a design office, the sane configuration is SurgePV for the commercial and simulation workflow alongside CALC for the dossier, not one instead of the other. For the quoting side specifically, see our [French solar proposal software](/blog/solar-proposal-software-france/) guide.

**PVsyst, when a lender names it.** PVsyst remains the bankable yield reference, and some financing agreements specify its output by contract. In that situation the question is not which tool is better but which one the contract accepts. Our [PVsyst review](/blog/pvsyst-review/) covers where it earns that status and where it costs you time.

For the wider view, the [solar design software pricing comparison](/blog/solar-design-software-pricing/) puts annual cost across platforms side by side, and the [best solar design software](/blog/best-solar-design-software/) ranking covers the category without the French lens.

## Verdict

Archelios is a good, honestly built engineering suite that knows exactly who it serves. Trace Software has done something rare: it picked the unglamorous half of solar design, the electrical calculation and the normative dossier, and treated it as a product worth its own licence and its own standards library. For a French or European design office, that is a real advantage and the published price is fair for it.

The limitation is not a flaw so much as a boundary. This is a technical tool producing technical deliverables. It is not built to win a kitchen-table close, its compliance value is concentrated in the geography it targets, and the full workflow costs roughly twice the advertised design price once CALC is added. None of that is fixable by negotiation, because it is what the product is.

Our recommendation for French buyers in 2026 is therefore split rather than singular. If your deliverable is the dossier, Archelios is a straightforward buy and CALC is the reason. If your problem is the post-S21 commercial conversation, where surplus is worth 1.1 centimes and the whole quote turns on hourly self-consumption and battery dispatch, evaluate SurgePV against it on a real project and see which side of the work is actually your bottleneck. Many practices will conclude they have two problems and need one tool for each.

Three things to do next:

- Run archelios PRO Free on a real sub-9 kWp job to test the interface and the self-consumption model before paying for anything.
- Confirm whether you need the NF or IEC standard set on CALC, because that is chosen at purchase.
- Rebuild one recent French quote in a competing tool and compare the customer-facing output, not the feature list.

<div class="inline-cta">
<h3>Run the comparison on your own project</h3>
<p>Twenty minutes, one real French job, side by side against your current workflow. If Archelios wins on your projects, keep it. If it does not, you will know precisely which part it lost.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a></p>
</div>

## About This Comparison

Pricing, features and product positioning described here were checked in August 2026 using publicly available vendor information. Vendors change pricing, packaging and capabilities without notice, and several do not publish prices at all. Treat every figure as a starting point for your own enquiry rather than a quotation, and confirm current terms directly with each vendor before making a purchasing decision.

All product names, logos and trademarks are the property of their respective owners. Reference to them here is for identification and comparison only and does not imply any affiliation with, sponsorship by, or endorsement from those companies. SurgePV is a Qbits Energy product, so treat this as a vendor comparison written by an interested party and weigh it alongside independent sources and your own trial of the tools.

Where we could not verify a claim from a primary source we have said so in the text rather than repeating it. If you believe anything here is inaccurate or out of date, contact us and we will review and correct it.
