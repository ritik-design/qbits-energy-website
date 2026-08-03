---
title: "Solarius PV Review 2026: Italian Engineering Suite, Assessed"
excerpt: "An honest Solarius PV review for 2026. What ACCA's photovoltaic suite does well, what it costs, where it stops fitting, and the alternatives worth testing."
description: "Solarius PV review 2026: ACCA software's BIM-native photovoltaic design suite assessed on technical output, electrical sizing, report quality, subscription pricing, and fit for Italian and European design offices."
category: "Solar Software"
date: 2026-08-03
updatedDate: 2026-08-03
readTime: "12 min"
image: "/blog-images/solarius-pv-review.svg"
author: "Keyur Rakholiya"
keywords:
  - solarius pv review
  - acca solarius pv
  - solarius pv pricing
  - solarius pv alternative
  - italian solar design software
  - solarius pv vs pvsyst
faqs:
  - q: "What is Solarius PV and who makes it?"
    a: "Solarius PV is a photovoltaic design application published by ACCA software S.p.A., an Italian company best known for BIM and construction software such as Edificius and the usBIM platform. It handles 3D modelling of the array, shading analysis, energy yield estimation using Meteonorm and PVGIS climate data, cable sizing, single-line diagram generation, and financial analysis in one desktop workflow. It is aimed at engineers and design offices rather than at door-to-door residential sales teams."
  - q: "How much does Solarius PV cost in 2026?"
    a: "At the time of writing we could not find a plain seat price displayed on ACCA's Solarius PV product page. The page advertises a subscription starting from a monthly figure without stating the number, alongside a free one month trial. Third-party software directories quote wildly different numbers, which is a sign that none of them are authoritative. Treat Solarius PV as quote-based and ask ACCA or your local reseller for a written figure covering the modules and seat count you actually need."
  - q: "Is Solarius PV BIM compatible?"
    a: "Yes, and this is one of its clearest strengths. ACCA states that Solarius PV imports and exports IFC, and works with DXF, DWG, Revit, ArchiCAD, AllPlan, and VectorWorks files, with the company holding IFC buildingSMART certification. It also connects to ACCA's own usBIM collaborative environment. If your practice already runs a coordinated BIM model of the building, the array can be designed against that geometry rather than against a traced aerial photo."
  - q: "Does Solarius PV produce a technical report suitable for permitting?"
    a: "ACCA lists a photovoltaic system technical report, a financial report with NPV, IRR, payback and cash flow, automatic single-line diagrams exportable to PDF, DXF and DWG, working drawings, and cost estimates, with report output available in Italian, English, Spanish, French and Portuguese. Whether that package satisfies a specific authority or DSO submission still depends on local requirements, so confirm the exact deliverable list with your reviewing body before you rely on it."
  - q: "Solarius PV or PVsyst, which should an engineering office use?"
    a: "They solve different problems. PVsyst is the reference tool when a lender, investor, or independent engineer names bankable yield simulation in the contract, and no amount of feature parity elsewhere changes that. Solarius PV is stronger on the building-integrated, BIM-linked, document-producing side of a design office's work. Many practices carry both, using Solarius PV for design and deliverables and PVsyst for the yield report the financing requires."
  - q: "Is Solarius PV a good fit for a residential sales team?"
    a: "Generally no, and that is a positioning question rather than a quality question. Solarius PV is built to produce engineering documents, and the reporting is technical by design. A team whose bottleneck is getting a persuasive, branded, savings-focused proposal in front of a homeowner within an hour is better served by a platform built around that motion. Test the customer-facing output specifically before you buy seats for sellers."
  - q: "Does Solarius PV handle the end of Scambio sul Posto in Italy?"
    a: "Scambio sul Posto closed to new systems on 29 May 2025 under ARERA Delibera 78/2025, and new installations now sell exports through Ritiro Dedicato or a market offer. That changes the economics of Italian residential solar because self-consumption is now worth much more than export. Any tool you choose has to model hourly self-consumption against the new export price, so verify with ACCA how the current Solarius PV release handles it rather than assuming it inherited the old netting logic."
  - q: "What is the best Solarius PV alternative?"
    a: "It depends on which part hurts. For teams that want design and client-ready proposals from one record, plus hourly self-consumption and Ritiro Dedicato modelling for the Italian market, SurgePV runs $1,299 to $1,899 per user per year depending on team size. For bankable yield reports, PVsyst remains the named standard. For detailed European residential simulation, PV*SOL sits around EUR 585 to 845 depending on edition."
featured: false
---

[Solarius PV](/blog/solarius-pv-alternative/) is one of those products that most people outside its home market have never evaluated, and most people inside it have used for years. It comes from ACCA software, an Italian publisher whose reputation was built on construction and BIM tools rather than on solar, and that origin explains almost everything about how the product behaves. This review looks at what Solarius PV actually is in 2026, what it does better than the platforms it gets compared to, where the fit breaks down, and which alternatives deserve a place on the shortlist before a design office commits. Pricing is the awkward part, and we will deal with it honestly rather than repeat numbers from directories that cannot agree with each other.

> **TL;DR**
> - Solarius PV is ACCA software's photovoltaic design application, built for engineers and design offices rather than for volume residential sales.
> - At the time of writing we could not find a seat price displayed on the product page. It advertises a subscription "starting from" a monthly figure with the number omitted, plus a free one month trial. Treat it as quote-based and confirm with the vendor.
> - Genuine strengths are BIM and CAD depth (IFC certified, Revit, ArchiCAD, AllPlan, VectorWorks), cable sizing to IEC 60364, automatic single-line diagrams, and multilingual technical reports.
> - It is not positioned for a customer-facing sales close, and it is a Windows desktop product rather than a browser platform.
> - Alternatives: SurgePV at $1,299 to $1,899 per user per year for design plus proposals from one record, PVsyst for bankable yield, PV*SOL at roughly EUR 585 to 845 for European residential detail.

**Short version.** Solarius PV is a competent, engineering-first photovoltaic design tool from Italian BIM publisher ACCA software. It is strongest where a design office needs geometry from a real building model, electrical sizing, single-line diagrams, and a formal technical report out of one workflow. It is weakest as a sales instrument, and its pricing is not published, so budget from a written quote rather than from a listing site.

If you are scoping the wider market first, our [Italian solar design software guide](/blog/solar-design-software-italy/) covers how the post-Scambio sul Posto rules changed what a tool has to calculate.

## What Solarius PV Is

Solarius PV designs grid-connected photovoltaic systems on buildings, facades, and ground-mounted sites, and it does the whole chain in one place. You model the site in 3D, or import it from DXF, DWG, IFC, Revit, or ArchiCAD. You lay out the generator with assisted surface recognition. You pull irradiance from Meteonorm or PVGIS. You run shading against nearby obstacles in the 3D model and distant obstacles from panoramic photographs. Then you size cables, generate the single-line diagram, and produce the technical and financial reports.

That list matters less than the shape of it. This is not a design tool with reporting bolted on. It is a document-production workflow with design inside it, which is what an Italian studio tecnico spends its week doing.

ACCA matters here too. The company is a construction software publisher, holds IFC buildingSMART certification, and runs the usBIM collaborative platform. Solarius PV sits in that ecosystem rather than in the solar-sales ecosystem where Aurora, OpenSolar, and their peers live.

## Its Place in Italian and European Engineering Practice

Italy does solar differently from the United States, and the difference is institutional rather than technical. A large share of Italian photovoltaic work passes through a qualified professional who signs the design. That person is registered, carries liability, and produces a defined set of documents: a relazione tecnica, layouts, electrical schematics, and a computo metrico for cost.

Software written for a US installer optimises for removing the site visit and closing the homeowner. Software written for an Italian professional optimises for producing signed, checkable documents against national standards. Solarius PV is unmistakably the second kind, and it is native to the market rather than translated into it.

That extends across southern and central Europe more than most Anglophone buyers realise. ACCA's report output ships in Italian, English, Spanish, French, and Portuguese, which maps onto where the company sells. A Spanish or Portuguese engineering practice with a BIM workflow is inside the target profile, not at the edge of it.

## Pricing: What Is Actually Published

We are going to be blunt here, because this is where most reviews of Solarius PV go wrong.

At the time of writing, ACCA's own product page presents a subscription offer worded as "starting from" a monthly figure, without displaying the figure, alongside a free one month trial. That is the authoritative source, and we could not read a number off it. Check the page yourself before relying on this.

Third-party directories fill the vacuum with numbers that contradict each other by an order of magnitude, some clearly scraped from historical listings. Repeating any of them would be inventing a price with extra steps.

| What we can verify | Status |
| --- | --- |
| Published seat price on ACCA's product page | Not displayed |
| Subscription model | Advertised, monthly, "starting from" |
| Free trial | One month, offered by ACCA |
| Consistent third-party price data | No, sources disagree sharply |
| SurgePV | $1,299 to $1,899 per user per year by team size |
| PV*SOL | Roughly EUR 585 to 845 depending on edition |

So the honest instruction is procedural. Ask ACCA or your regional reseller for a written quote naming the modules, the seat count, the contract length, and whether upgrades are included. Compare that number, not a directory's guess, against the alternatives further down. Our [solar design software pricing comparison](/blog/solar-design-software-pricing/) sets out where the tools that do publish sit.

<div class="inline-cta">
<h3>Compare on output, not on a price you cannot verify</h3>
<p>Bring a real Italian project. A SurgePV engineer rebuilds it live, from geometry through hourly self-consumption to a client-ready proposal, so you judge the deliverable.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## What Solarius PV Does Genuinely Well

**BIM and CAD depth that is real rather than marketing.** Most solar platforms accept a DWG import and call it CAD support. ACCA holds IFC buildingSMART certification and lists interoperability with Revit, ArchiCAD, AllPlan, and VectorWorks, plus its own Edificius and the usBIM environment. For a practice where the architect already produced a coordinated model, designing the array against that model instead of against traced imagery removes a whole class of geometry errors. This is the single clearest advantage the product has.

**Electrical sizing treated as engineering, not as an afterthought.** ACCA documents a cable sizing wizard with voltage drop calculation to IEC 60364, and automatic generation of the single-line diagram exportable to PDF, DXF, and DWG. A design office that currently draws its schematics separately in a CAD package is doing work the tool would absorb. That is hours per project, every project.

**Technical report output built for the deliverable.** The reporting set is the point of the product. ACCA lists a photovoltaic technical report, a financial report carrying NPV, IRR, payback and cash flow, working drawings with elevations and sections, cost estimates, and export to RTF, PDF, DXF, DWG, and XLS, in five languages. Tools that treat the report as a PDF export of the design screen do not compete with this.

**Live design diagnostics.** ACCA describes operational diagnostics that flag design errors as you work rather than at the end. In practice, catching a string voltage or configuration problem while the array is still being drawn is worth more than a validation pass you run before submitting.

**Photo-montage and visual impact.** For heritage-sensitive Italian sites, where visual impact is a planning question rather than an aesthetic one, a rendered montage of the array on the actual building is a substantive deliverable.

## Where It Falls Short

These are limitations we hold with confidence. Where we are unsure, we say so rather than assert.

**Not positioned for a customer-facing sales close.** Solarius PV's output is engineering output. The financial report speaks in NPV and IRR, which is the correct language for a commercial client's finance function and the wrong language for a homeowner at a kitchen table. Sales-oriented platforms invest heavily in a branded, savings-first, scenario-comparing presentation designed to be signed on the spot. That is a different product category, and buying Solarius PV to fill it means either building the client document by hand or carrying a second tool.

**Desktop orientation.** Solarius PV is a Windows desktop application. That suits a studio where designers work at fixed machines with a shared server, and it suits firms with policies against cloud storage of project data. It suits a distributed team less well. Browser platforms give you a link to a live project, versioning that does not depend on filenames, and a surveyor able to open the model from a phone on site. Weigh this against how your team actually works before treating it as a flaw.

**Breadth outside core European markets.** ACCA's language coverage and reseller footprint point squarely at Italy, Iberia, France, and the Portuguese-speaking markets. If your pipeline includes India under PM Surya Ghar, Australia under AS/NZS with state feed-in tariffs, or the United States under NEC, do not assume comparable native depth. Confirm each market you sell into rather than inferring from the European performance.

**Compliance depth needs a direct answer, not an assumption.** Italian grid connection runs through CEI 0-21 for low voltage and CEI 0-16 for medium voltage, and the interface protection requirements under those rules are the part a reviewing DSO scrutinises. ACCA publicly documents IEC 60364 cable sizing. We did not find published detail on exactly which CEI checks the current release automates, so ask ACCA to demonstrate that on your own project during the trial. Assuming it and discovering otherwise after purchase is the expensive version of this question.

| Dimension | Strength | Limitation |
| --- | --- | --- |
| BIM and CAD | IFC certified, Revit, ArchiCAD, AllPlan, VectorWorks | Value depends on you already running BIM |
| Electrical design | Cable sizing to IEC 60364, automatic single-line diagram | CEI-specific automation needs vendor confirmation |
| Reporting | Technical, financial, drawings, five languages | Technical register, not a sales document |
| Deployment | Windows desktop, data stays local | Weaker for distributed or field teams |
| Market fit | Strong in Italy and southern Europe | Verify depth outside those markets |
| Pricing | Subscription with a free month trial | No published seat price to compare against |

> **What most buyers get wrong.** They evaluate Solarius PV against Aurora or OpenSolar and conclude it is behind on sales features. It is not behind. It was never in that race. The correct comparison set is PVsyst, PV*SOL, and the engineering half of platforms like SurgePV, and against that set it argues its case very differently.

## Who Should Buy It

- **Italian design offices and studi tecnici** producing signed documentation as the core deliverable. This is the home profile and the product was shaped for it.
- **European engineering practices already running BIM.** If Revit or ArchiCAD models already exist for the buildings you are putting arrays on, the IFC path is worth real money in avoided rework.
- **Engineering-led installers** whose competitive advantage is documentation quality on tender-driven commercial work rather than speed of residential closing.
- **Firms with data-residency constraints** that rule out cloud platforms. A desktop product with local project files is an answer to a compliance question, not only a preference.
- **Practices already inside the ACCA ecosystem.** If you run Edificius or usBIM, the integration and the commercial relationship both count.

## Who Should Not Buy It

- **Volume residential sales teams.** If your metric is proposals per day and close rate, you need a tool built around the customer conversation. Solarius PV is built around the drawing and the report.
- **Distributed teams that live in a browser.** Desktop licensing and local files add friction that a cloud-native platform does not have.
- **Teams whose bottleneck is the proposal, not the design.** Buying an engineering suite to fix a document-speed problem is a lot of capability aimed at the wrong constraint.
- **Anyone contractually required to submit PVsyst output.** No competing tool substitutes for a named contractual requirement.
- **Buyers whose pipeline is mostly outside Europe.** Verify first, and if the market depth is not there, this is not the tool.

<div class="inline-cta">
<h3>One record for design and the client document</h3>
<p>SurgePV keeps layout, 8,760-hour shading, self-consumption modelling, and the branded proposal on the same project, so the engineering work and the client-facing output never drift apart.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Alternatives Worth Comparing

**SurgePV, for design and proposals from one record.** SurgePV runs $1,299 to $1,899 per user per year depending on team size, covering layout, 8,760-hour module-level shading, financial modelling, and white-label proposals in a single licence. The Italian argument for it is specific rather than generic. Scambio sul Posto closed to new systems on 29 May 2025 under ARERA Delibera 78/2025, and new installations now monetise exports through Ritiro Dedicato or a market offer instead of netting against consumption. That single change moved the value of an Italian residential system from an annual energy balance to an hourly one, because a kilowatt-hour self-consumed is now worth far more than a kilowatt-hour exported. SurgePV models hourly self-consumption and Ritiro Dedicato directly, and the proposal reflects it without a spreadsheet in the middle. What you give up compared to Solarius PV is the deep BIM interoperability and the ACCA document ecosystem, which for a BIM-led practice may be the deciding factor in the other direction. Our [Italian solar software overview](/blog/solar-software-italy/) works through the post-SSP arithmetic in more detail.

**PVsyst, when the contract names it.** PVsyst remains the reference for bankable yield simulation, and where a lender, investor, or independent engineer specifies it, the comparison is over before it starts. It is not a document-production tool and it is not a sales tool, so it sits alongside whatever else you run rather than replacing it. Our [PVsyst review](/blog/pvsyst-review/) covers what it does and does not justify.

**PV*SOL, for European residential detail.** Valentin Software's PV*SOL is priced around EUR 585 to 845 depending on edition, and it is strong on detailed simulation of European residential and small commercial systems, including battery and self-consumption behaviour. It is the closest direct competitor to Solarius PV on the simulation side, with a weaker CAD and BIM story and a stronger simulation-detail story. The [PV*SOL review](/blog/pvsol-review/) goes through the editions.

The tradeoff across all four is real and there is no universal winner. Solarius PV wins on BIM-linked documentation. PVsyst wins on contractual acceptance. PV*SOL wins on simulation depth per euro. SurgePV wins on getting from design to a client-ready, market-correct proposal without a second tool. The exception worth naming is the practice that does both engineering and direct residential sales, which usually ends up carrying two licences whatever it buys first.

## Verdict

Solarius PV is a good product that knows exactly who it is for, and being clear about that is more useful than a score. It is a BIM-native, document-producing photovoltaic design suite for engineering practices, most at home in Italy and the wider southern European market, from a publisher with a serious construction-software pedigree. The IFC interoperability, the IEC 60364 cable sizing, the automatic single-line diagrams, and the multilingual technical report package are real advantages that most solar-sales platforms cannot match and are not trying to.

The reservations are equally clear. It is not positioned for a customer-facing sales close, the desktop model suits some teams and frustrates others, market depth outside its European core needs checking rather than assuming, and the absence of a published price means you cannot benchmark it without picking up the phone. None of those are defects. They are the shape of a product built for professionals who sign drawings.

If you are that buyer, take the free month, run two real projects through it end to end, and specifically test the CEI-related output and the client-facing document against what your reviewing authority and your customers actually accept. If you are a sales-led installer, the honest answer is that a different category of tool will serve you better, and cheaper.

Three things to do next:

- Get a written quote from ACCA naming your modules, seats, and contract term, because no directory price is reliable.
- Run one real project through the free trial and test the CEI submission output and the client document, not the demo file.
- Decide whether hourly self-consumption and Ritiro Dedicato modelling has to live inside the design tool, because after 29 May 2025 that is where Italian project economics are actually decided.

<div class="inline-cta">
<h3>Test the post-Scambio sul Posto maths on your own job</h3>
<p>Twenty minutes, one real Italian project, hourly self-consumption and Ritiro Dedicato modelled end to end. If your current tool handles it better, keep it.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a></p>
</div>

## About This Comparison

Pricing, features and product positioning described here were checked in August 2026 using publicly available vendor information. Vendors change pricing, packaging and capabilities without notice, and several do not publish prices at all. Treat every figure as a starting point for your own enquiry rather than a quotation, and confirm current terms directly with each vendor before making a purchasing decision.

All product names, logos and trademarks are the property of their respective owners. Reference to them here is for identification and comparison only and does not imply any affiliation with, sponsorship by, or endorsement from those companies. SurgePV is a Qbits Energy product, so treat this as a vendor comparison written by an interested party and weigh it alongside independent sources and your own trial of the tools.

Where we could not verify a claim from a primary source we have said so in the text rather than repeating it. If you believe anything here is inaccurate or out of date, contact us and we will review and correct it.
