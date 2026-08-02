---
title: "PV*SOL Review 2026: The European Desktop Reference, Honestly Assessed"
excerpt: "An honest PV*SOL review for 2026. What the licence costs, where its component depth and storage modelling genuinely lead the market, and the team size at which desktop licensing starts to hurt."
description: "PV*SOL review 2026: verified Valentin Software pricing, real strengths in component libraries, self-consumption and 3D shading, the single-user licensing limit, and the alternatives worth testing."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "12 min"
image: "/blog-images/pvsol-review.svg"
author: "Keyur Rakholiya"
keywords:
  - pvsol review
  - pv*sol review
  - pvsol pricing
  - is pvsol worth it
  - pvsol pros and cons
  - pvsol vs surgepv
faqs:
  - q: "Is PV*SOL worth the money in 2026?"
    a: "For a solo engineer or a two-person practice doing European residential and small commercial work, yes. At €585 per year for PV*SOL and €845 per year for PV*SOL premium as one-year named-user licences, according to the Valentin Software shop (2026), it is one of the cheapest serious simulation tools per year of use. The component libraries, storage modelling and 3D shading are genuinely strong. The value case weakens as the team grows, because the licence is per named user and only one session can run at a time."
  - q: "How much does PV*SOL actually cost?"
    a: "Valentin Software publishes list prices in its own shop. PV*SOL 2026 is €585 for a one-year named-user licence and €195 for three months. PV*SOL premium 2026 is €845 for a year and €285 for three months, with renewal and extension pricing slightly lower. All figures are quoted plus VAT. Perpetual licences bought before the shift to the named-user model still carry an annual maintenance charge for updates and support. Confirm current pricing with Valentin before you budget against these numbers."
  - q: "What is PV*SOL genuinely best at?"
    a: "Three things. First, component depth, with over 30,000 PV modules, 9,000 inverters and 16,000 battery systems in the database, according to Valentin Software (2026), maintained in large part by the manufacturers themselves. Second, self-consumption and storage modelling, including AC and DC coupling, charging strategies and electric vehicle loads. Third, 3D shading built from actual geometry rather than a shading factor, on systems up to 7,500 mounted modules."
  - q: "What are the main limitations of PV*SOL?"
    a: "Per Valentin's own licence terms, the licence is tied to one named user and is not to be used on two machines at the same time, and projects live as local files rather than as a shared record, so picking a design up mid-sale is harder than it is in a cloud tool. The report generator produces good technical documentation, but it is not positioned as a full sales proposal system with e-signature and financing scenarios. Local tariff and incentive logic outside its core European coverage is generally applied manually. Valentin lists Windows 10 and 11 as the system requirements, with no macOS, Linux or browser build listed as of writing. Confirm current scope with the vendor."
  - q: "Is PV*SOL good for teams of five or more?"
    a: "It can be, but the licensing model works against you. Five people means five named-user licences, and buying more of them does not by itself solve the shared-project problem, because a common cloud record for an estimator, an engineer and a salesperson to work from in the same week is not part of how the product is positioned as of writing. Most teams that size either accept version-control friction or move day-to-day design into a cloud tool and keep one or two PV*SOL licences for deep component work."
  - q: "Does PV*SOL run on a Mac?"
    a: "Not natively, as of writing. Valentin Software lists Windows 10 64-bit and Windows 11 64-bit as the system requirements, with no macOS, Linux or browser build listed. Mac users run it through a virtual machine, Boot Camp on older Intel hardware, or a dedicated Windows workstation. That works, but it adds a machine and a maintenance job to a one-person practice."
  - q: "PV*SOL or PVsyst for bankable yield reports?"
    a: "PVsyst, in most cases, and for contractual rather than technical reasons. Lenders and independent engineers frequently name PVsyst by title in financing documents, so the question stops being which engine is more accurate and becomes which output the agreement accepts. PV*SOL is a credible simulation tool and its results stand up to review, but if a term sheet says PVsyst, you produce a PVsyst report."
  - q: "Can PV*SOL replace a proposal tool?"
    a: "Partially. It exports project reports as PDF or Word in 24 languages with your company branding, which covers the technical document a customer or installer needs. What it is not positioned to run is a sales workflow: financing scenario comparison, e-signature, versioned customer-facing quotes and pipeline handoff. Confirm current scope with Valentin, since the product ships annual releases. Teams selling to homeowners usually pair the PV*SOL report with a separate proposal system or rebuild the commercial half in a spreadsheet."
featured: false
---

PV*SOL has been the working simulation tool of German and central European PV engineering for long enough that in many offices it is simply what design means. That standing is earned. Valentin Software has spent decades building component databases that manufacturers themselves maintain, a self-consumption model that handles storage and electric vehicles properly, and a 3D shading engine that computes losses from real geometry. This review covers what PV*SOL costs in 2026, what it does better than almost anything else, where it stops fitting, and which alternatives are worth putting on the same project before you renew. The short framing up front: almost every real complaint about PV*SOL is about team size, not about software quality.

> **TL;DR**
> - PV*SOL 2026 is €585 per year and PV*SOL premium 2026 is €845 per year as one-year named-user licences, according to the Valentin Software shop (2026), plus VAT.
> - The component database covers over 30,000 modules, 9,000 inverters and 16,000 battery systems, largely maintained by the manufacturers.
> - Storage, self-consumption and electric vehicle modelling are among the best available at any price.
> - The licence is per named user and cannot run on two machines simultaneously, and projects are local files, so a design lives with one person.
> - Valentin lists Windows 10 and 11 in the system requirements, with no macOS, Linux or browser build listed as of writing.
> - Cloud alternatives include SurgePV at $1,299 to $1,899 per user per year, PVsyst where a lender names it, and HelioScope for commercial engineering.

**Short version.** PV*SOL is an excellent European desktop simulator, priced at €585 to €845 per year depending on edition. It earns that price comfortably for a solo engineer or a two-person practice doing residential and small commercial work. It fits poorly from around three people upward, not because the engineering is weaker, but because a per-named-user desktop licence with local project files makes designs hard to move between an estimator, an engineer and a salesperson.

If you have already decided to move and want the migration detail, our [PV*SOL alternative comparison](/blog/pvsol-alternative/) covers the six realistic replacements tool by tool. This page is the review that should come before that decision.

## What PV*SOL Is And Where It Stands

PV*SOL is a Windows desktop application from Valentin Software in Berlin for designing and simulating photovoltaic systems. You define the site and roof geometry, place modules, select inverters and batteries from the database, apply a load profile, run an hourly simulation, and produce a project report.

Its standing in Europe comes from two things that are hard to buy quickly. The first is the component data. Manufacturers update their own entries, which means the module and inverter parameters in the database are usually the ones the manufacturer stands behind rather than numbers transcribed from a datasheet by a software vendor. The second is that German engineering practice grew up around it. If you submit a PV*SOL yield report to a German bank, an installer or a Netzbetreiber, nobody asks what the tool is.

That familiarity is a genuine commercial asset and it would be dishonest to write it off as habit. Removing an argument from a project review has real value.

## PV*SOL Pricing In 2026

Valentin Software publishes list prices in its own online shop, which makes this one of the easier tools in the market to price honestly. The company moved to a named-user licensing model, and the shop currently lists subscription terms rather than perpetual licences.

| Product | Term | List price (plus VAT) |
| --- | --- | --- |
| PV*SOL 2026 | One-year named-user licence | €585 |
| PV*SOL 2026 | One-year extension | €555.75 |
| PV*SOL 2026 | Three-month named-user licence | €195 |
| PV*SOL premium 2026 | One-year named-user licence | €845 |
| PV*SOL premium 2026 | One-year extension | €802.75 |
| PV*SOL premium 2026 | Three-month named-user licence | €285 |
| Software maintenance, premium | One year | €233.10 |

All figures above are from the Valentin Software shop (2026) and exclude VAT. The maintenance line applies to holders of older perpetual licences who want continued updates and support.

Two things follow from this table. First, PV*SOL is inexpensive for what it is. Against Aurora Solar, which third-party trackers report at roughly $1,908 to $3,108 per user per year, or HelioScope in a broadly similar range, €845 for the premium edition is not the expensive option. Anyone arguing that PV*SOL costs too much has not compared it to the market. Our [solar design software pricing comparison](/blog/solar-design-software-pricing/) puts the whole field side by side.

Second, the cost scales linearly and cleanly with headcount. Five engineers on PV*SOL premium is roughly €4,225 a year, which is still modest. The problem at five people is not the invoice.

<div class="inline-cta">
<h3>Price the workflow, not just the licence</h3>
<p>Bring a project you already built in PV*SOL. A SurgePV engineer rebuilds it live, from site to branded proposal, so you compare finished output rather than feature lists.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## What PV*SOL Genuinely Does Well

**Component libraries with real depth.** Valentin Software lists over 30,000 PV modules, 9,000 inverters and 16,000 battery systems, plus optimisers and electric vehicles, with manufacturers maintaining their own data. In practice this means the part you specified is in the list, with parameters the manufacturer will defend. Anyone who has hand-entered an inverter into a competing tool at 7pm knows what that is worth.

**Self-consumption and storage modelling.** This is the strongest single argument for PV*SOL in 2026. You can define AC-coupled or DC-coupled battery configurations, choose a charging strategy, and simulate the result against an hourly load profile. Electric vehicles can be added as loads with daily mileage and standing time. Since European residential economics now turn on self-consumption rather than feed-in, a tool that models the battery properly is modelling the money properly.

**3D shading from actual geometry.** PV*SOL premium builds the surrounding scene in 3D and computes shading from real objects rather than applying a horizon factor. Valentin states support for up to 7,500 mounted or 10,000 roof-parallel modules. That is credible shading, and it holds up when a reviewer asks where the loss came from.

**European residential and small commercial detail.** The product was built for the systems it is used on. Roof-parallel mounting, mixed orientations, small multi-string arrays, and the specific arithmetic of a household consuming most of what it generates are treated as the main case, not as a simplification of a utility-scale model.

**Documentation output in 24 languages.** Project reports export to PDF or Word with company branding, in 24 report languages. For a technical document handed to an installer or a grid operator, that is enough.

**Engineer trust.** In our experience practitioners in the German-speaking market treat PV*SOL output as credible without argument, which is the accumulated result of decades of use rather than any single benchmark we can point you to.

## Where PV*SOL Stops Fitting

Every criticism below is a property of the product's design, not a defect.

**One named user, one session.** The licence is tied to a named user and, per Valentin's own terms, can be installed on any number of devices as long as it is not used on more than one at the same time. That is a reasonable and even generous rule for an individual. It is still a rule that says one person designs at a time.

**Projects live as local files, not as a shared record.** This is the part that actually bites, and it is separate from the licence count. A PV*SOL project is a file on a machine. Two colleagues working the same job pass a file back and forth and hope the newer one wins. A shared cloud record that an estimator opens on Tuesday, an engineer revises on Wednesday, and a salesperson presents on Thursday is not part of how the desktop product is positioned as of writing.

**Proposal capability is partial.** The report generator is good at what it is: a technical project report. It is not positioned as a sales system, so financing scenario comparison, e-signature, versioned customer-facing quotes and pipeline handoff are jobs teams generally do elsewhere. Confirm current scope with Valentin before assuming either way.

**Tariff and incentive logic outside its core coverage is manual.** PV*SOL handles the European context it was built for. Take it to a market with a different structure, an Indian PM Surya Ghar subsidy, a US ITC and net metering rule, an Australian state feed-in tariff, and you are applying that logic yourself, usually in a spreadsheet next to the simulation.

**Windows only, as listed.** Valentin lists Windows 10 and 11, 64-bit, as the requirement, with no macOS, Linux or browser build listed at the time of writing. A Mac-based practice needs a virtual machine or a second computer.

**It scales in cost cleanly but in workflow badly.** Adding a sixth licence is cheap. Adding a sixth person to a workflow where designs cannot move is not.

| Dimension | Strength | Limitation |
| --- | --- | --- |
| Component libraries | 30,000+ modules, 9,000+ inverters, 16,000+ batteries, manufacturer-maintained | Depth exceeds what a residential-only practice will use |
| Storage and self-consumption | AC and DC coupling, charging strategies, EV loads | Requires a realistic load profile to be worth anything |
| Shading | True 3D geometry, large arrays supported | Modelling effort per project is real |
| Documentation | Branded reports, PDF and Word, 24 languages | Technical report, not a sales proposal system |
| Licensing | Inexpensive per user, generous device policy | One named user, one concurrent session |
| Collaboration | Fine for one person | Local project files, no shared cloud record |
| Platform | Stable, mature Windows application | No macOS, Linux or browser build listed as of writing |
| Market coverage | Deep on core European practice | Tariffs and incentives elsewhere applied manually |

Capability entries reflect publicly available Valentin Software information at the time of writing. PV*SOL ships an annual release, so confirm current scope with the vendor.

> **What most buyers get wrong.** They evaluate PV*SOL against competitors on simulation accuracy, which it passes, and never test the handover. Before renewing, run one real job through the actual sequence your business uses, from first estimate to signed quote, and count how many times the file has to be emailed to somebody.

## Illustrative Example: The Design That Was On The Wrong Machine

A labelled, hypothetical scenario rather than a specific customer, built from the pattern we see repeatedly in European teams of four to six people.

A three-person practice quotes a 24 kWp commercial rooftop with a battery. The engineer builds it in PV*SOL premium on Tuesday, exports the report, and leaves for a site visit on Wednesday and Thursday. On Wednesday the customer asks two questions: what happens if we halve the battery, and what does the payback look like at the higher tariff.

Both are ten-minute changes for the person who built the model. Nobody else can make them. The salesperson has the exported PDF and the file path on a machine they cannot use. So the answer goes out on Friday, after the engineer is back, and the customer has spent two days with a competitor's revised numbers in front of them and none from you.

Nothing here is a fault in the simulation. The model was right the whole time. The cost was that it could only be edited by one person, in one place, and the sale ran on a different clock than the engineering did.

At one or two people that scenario barely occurs, because the person who builds the model is the person answering the phone. At five it happens most weeks.

<div class="inline-cta">
<h3>A design any colleague can open</h3>
<p>SurgePV keeps the design, the hourly shading and the customer proposal in one cloud record, so a revision does not wait for one machine to be free.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Solo Engineer Versus Team Of Five

The same tool, the same quality, two different verdicts. This is an illustrative comparison of workflow shape, not a vendor quote.

| | Solo engineer | Team of five |
| --- | --- | --- |
| Annual licence cost, PV*SOL premium | €845 | ~€4,225 |
| Designs produced per week | A handful | Several per day |
| Does a design move between people? | Rarely | Constantly, during the sale |
| Who answers a customer revision? | The person who built it | Whoever is free, which is the problem |
| Value of component depth | High, and personally used | High, used by one or two specialists |
| Value of a shared project record | Low | Decisive |
| Proposal workload | Manageable by hand | The bottleneck |
| Honest verdict | Buy it, it is very good value | Cloud core, PV*SOL kept for deep component work |

## Who Should Buy PV*SOL

- A solo engineer or consultant doing European residential and small commercial design, where €845 a year buys more capability than anything near that price.
- A two-person practice where both people design and neither needs to edit the other's project mid-sale.
- Any engineer whose work turns on storage and self-consumption modelling.
- A German or central European business whose customers and grid operators already expect PV*SOL output.
- A specialist inside a larger team who needs component-level depth beyond what the cloud tools they use currently carry.

## Who Should Not Buy PV*SOL As Their Only Tool

- **Teams of three or more where designs move between an estimator, an engineer and a salesperson.** This is the main case. The tool is fine; the workflow is not.
- **Anyone whose bottleneck is proposals rather than simulation.** You would be buying engineering depth to solve a document problem.
- **Businesses selling outside PV*SOL's core European coverage.** The tariff and incentive work lands back on you.
- **Mac and Linux practices** unwilling to keep a Windows machine for one application.
- **Anyone contractually required to submit PVsyst output.** That is a naming question, not a quality one.

## Alternatives Worth Comparing

**SurgePV, for teams that need one shared record.** Cloud-based design, 8,760-hour module-level shading, financial modelling and white-label proposals in one licence at $1,299 to $1,899 per user per year depending on team size. It is more expensive per seat than PV*SOL and that comparison should be made plainly. What it buys is a project any colleague can open and a proposal generated from the same record as the design, which is exactly the gap that opens up at three or more people.

**PVsyst, when a lender names it.** The bankability reference on commercial and utility work. If the financing agreement specifies PVsyst output, no other tool substitutes, regardless of engine quality. See our [PVsyst alternative review](/blog/pvsyst-alternative/) for when substitution is and is not possible.

**HelioScope, for commercial and industrial engineering.** Browser-based, strong on large rooftop and ground-mount layouts and yield reporting, and not positioned as a proposal tool, so most teams pair it with separate quoting. Confirm current scope with the vendor. Our [HelioScope alternative guide](/blog/helioscope-alternative/) covers the trade-offs, and the [HelioScope pricing breakdown](/blog/helioscope-pricing/) has current numbers.

**Aurora Solar, for US residential.** Deep on NEC, US tariffs and the kitchen-table sales presentation, and in our view a poor structural fit for European work. Our [Aurora Solar review](/blog/aurora-solar-review/) assesses it on the same terms as this page.

For the wider European context, the [best solar design software Germany](/blog/solar-design-software-germany/) guide and the [German software stack overview](/blog/solar-software-germany/) cover VDE-AR-N 4105, EEG 2023 tariff handling and Mieterstrom.

## Verdict

PV*SOL is very good software and it is not expensive. At €585 to €845 a year, with component libraries the manufacturers maintain, storage and self-consumption modelling that few tools match, and 3D shading built from real geometry, it remains the reference for European PV engineering for reasons that hold up under scrutiny. A solo engineer who buys it will not regret it.

The honest limitation is a licensing and file model designed for an individual, in a business that has grown past one. One named user, one session, and a project that lives as a file on a machine are all perfectly coherent choices for the customer PV*SOL was built for. They become a bottleneck at around three people, and the bottleneck shows up in quoting speed rather than in anything a feature table would flag.

The arrangement many European teams settle on is worth naming as a sensible destination rather than a compromise: keep one or two PV*SOL licences for deep component work, storage studies and anything that needs the database, and run day-to-day design and customer proposals in the cloud, where several people can touch the same job. That gets you the engineering depth without paying for it in programme time.

Three things to do next:

- Count the handovers on one real project, from first estimate to signed quote, and see how many wait on a single machine.
- Price both models properly, including the spreadsheet time spent on tariffs and proposals rather than only the licence.
- Run the same job in a cloud tool and in PV*SOL before you renew, then decide with output in front of you. If you also need inverter specification against the finished design, the Qbits team can be reached [here](/contact-us/).

<div class="inline-cta">
<h3>Test the handover, not the simulation</h3>
<p>Twenty minutes, one real project, rebuilt live and handed between people the way your sale actually runs. If PV*SOL still wins on your workflow, keep it.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a></p>
</div>

## About This Comparison

Pricing, features and product positioning described here were checked in August 2026 using publicly available vendor information. Vendors change pricing, packaging and capabilities without notice, and several do not publish prices at all. Treat every figure as a starting point for your own enquiry rather than a quotation, and confirm current terms directly with each vendor before making a purchasing decision.

All product names, logos and trademarks are the property of their respective owners. Reference to them here is for identification and comparison only and does not imply any affiliation with, sponsorship by, or endorsement from those companies. SurgePV is a Qbits Energy product, so treat this as a vendor comparison written by an interested party and weigh it alongside independent sources and your own trial of the tools.

Where we could not verify a claim from a primary source we have said so in the text rather than repeating it. If you believe anything here is inaccurate or out of date, contact us and we will review and correct it.
