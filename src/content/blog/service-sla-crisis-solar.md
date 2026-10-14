---
title: "Solar Service SLA Crisis in India, A Founder's View"
excerpt: "India's solar service SLA gap: many warranties state no measurable service time, downtime keeps costing the buyer, and a 5-gate SLA standard is proposed for ticketing, diagnosis, visit, parts and restoration."
description: "A founder's view on India's solar service SLA gap: warranties with no measurable service time, what downtime costs, and a proposed 5-gate SLA standard."
category: "Industry"
date: 2026-06-05
updatedDate: 2026-10-14
readTime: "17 min"
image: "/og/blog-service-sla-crisis-solar.webp"
author: "Nirav Dhanani"
keywords:
  - solar service sla india
  - solar inverter after sales service india
  - solar inverter warranty service india
  - inverter rma turnaround india
  - solar industry service standards india
faqs:
  - q: "What is a service SLA in the context of solar inverters?"
    a: "A service SLA (Service Level Agreement) is a documented commitment from the inverter brand that specifies the maximum time allowed between a fault being reported and a technician arriving on site, a replacement unit being dispatched, or the system being restored to operation. In a properly structured solar service SLA, each milestone - ticket acknowledgement, on-site diagnosis, part dispatch, system restoration - carries a defined time limit with financial consequences if the brand misses it. Without a declared SLA, the buyer has no contractual basis to demand timely resolution and must rely entirely on the brand's goodwill."
  - q: "How long does solar inverter service typically take in India?"
    a: "There is no single industry figure. Response time depends on the brand, the city, whether the fault can be diagnosed remotely, and whether the nearest authorised service partner holds the spare part. Many Indian warranties promise service within a reasonable time without stating a number. Before you buy, ask for written targets for ticket acknowledgement, on-site visit and part or unit replacement, and ask who is responsible if the target is missed."
  - q: "Do Indian solar inverter brands publish their service SLA commitments?"
    a: "We could not find a published, binding service SLA for most residential inverter warranties in India, and we cite no count of brands that publish one. Many warranty documents say service will be provided within a 'reasonable time', a phrase that gives the buyer no measurable target. Enterprise contracts for large C&I projects may state response terms, but a residential buyer or small EPC installer should not assume one exists, so ask for it in writing for the exact model. A brand that cannot state its service route and response targets before the sale may be relying on third-party channel partners for after-sales support."
  - q: "Why does inverter downtime cost more than most buyers realise?"
    a: "The visible cost of inverter downtime is lost generation: days down × daily kWh not generated × tariff. As an assumed example, a 5 kW residential system generating about 22 kWh a day at ₹7 to ₹8 per kWh forgoes roughly ₹155 to ₹175 a day, and a 100 kW commercial system generating 400 to 450 kWh a day at ₹6 to ₹8 forgoes ₹2,400 to ₹3,600 a day. Other costs continue regardless of whether the system is generating: the electricity connection stays active and consumption is billed, and any solar loan EMI remains payable, so the buyer keeps paying for an asset that is not earning. Replacement cost out of warranty is additional, and the supplier must quote it for the exact model."
  - q: "What should EPCs look for in a brand's service infrastructure before committing to a channel?"
    a: "EPCs should evaluate five dimensions before committing to a brand's channel: first, whether the brand has a declared, printed SLA with a remedy for breach; second, the brand's owned service centre count versus third-party service partner count, and the geographic coverage of each; third, the brand's spare-parts position, meaning whether critical boards are held in regional warehouses or must be sourced from a central factory; fourth, the brand's WhatsApp or digital ticket-logging capability, which affects how fast a fault enters the service pipeline; and fifth, whether the brand's warranty remedy is repair or replacement, since replacement is generally faster for the installer and the homeowner."
  - q: "What does MNRE currently require from solar inverter brands on after-sales service?"
    a: "MNRE's ALMM lists cover solar PV modules and cells only, and there is no ALMM list for inverters, so they set no after-sales service standard for inverter brands. Service obligations come from the product warranty and the supplier's contract. For subsidised rooftop projects, also read the vendor conditions of the scheme and the DISCOM, and confirm what maintenance the empanelled vendor is bound to provide."
  - q: "How does a WhatsApp-first fault logging system reduce service resolution time?"
    a: "A WhatsApp-first fault logging system shortens the first stage, getting the fault into the brand's service pipeline. When an installer or homeowner can open a WhatsApp chat, send a fault code and a photograph, and receive a ticket number within minutes, the diagnosis and dispatch process can begin immediately. A traditional process requires the installer to call a helpline during business hours, wait in a queue and describe the fault verbally, which can delay the formal logging of the fault; we quote no number of days because no published figure exists. Monitoring that flags fault conditions automatically can shorten the acknowledgement window further."
  - q: "Is the solar service SLA crisis worse in Tier-2 and Tier-3 cities?"
    a: "It is likely to be harder there, though we cite no coverage figures. Major brands generally have a direct service office or an authorised service partner in large metros, while in smaller cities and rural tehsils the nearest authorised partner may be much farther away, making an on-site visit slower and spare parts harder to get. Ask any brand for the named service partner for your town and the spare-parts location in writing. Brands that do not maintain regional spare-parts stock and a regional service contact in each state leave buyers in smaller towns relying on channel-partner goodwill."
  - q: "What financial penalty model is most effective for enforcing solar service SLAs?"
    a: "One possible model, proposed in this article and not an established Indian or international standard, is a per-day generation credit: for each day beyond the committed restoration window, the brand credits the buyer the generation lost, calculated at the prevailing DISCOM tariff for the system's rated output, with a sensible cap such as 30 days. This gives the brand a financial incentive to resolve within the SLA and gives the buyer a calculable remedy. Whether such a clause can be enforced depends on how the warranty document is worded, so seek legal advice on your own contract and the Consumer Protection Act 2019."
  - q: "What is Qbits doing differently on solar service SLA?"
    a: "Qbits lists authorised service partners on its service-partner page (/authorized-service-partners/) and its public datasheets describe an expandable warranty. They do not publish a service response time or replacement timeline, so none should be assumed. Ask for the written warranty, the service process and any response targets for the exact model and sale before you buy."
---

> **Qbits warranty and service terms:** Qbits public datasheets describe an expandable warranty but do not define a universal duration, remedy, registration deadline, service SLA, or exclusions. Obtain the current written terms for the exact model and sale before relying on a headline claim.

> **ALMM and inverter compliance:** MNRE's current ALMM page publishes solar PV module and cell lists, not an inverter list. Verify the inverter's exact model documents and applicable scheme or DISCOM requirements separately.

**An illustrative scenario (not a real case).** Imagine an EPC installer in a Tier-2 city who sold a 10 kW on-grid system to a homeowner in early January. By mid-February the inverter stops generating. The brand's helpline gives him a ticket. Three weeks pass. A technician comes from another city, looks at the inverter, and says a control board needs replacement. Another two weeks pass. The board arrives and the installer fits it. Total downtime in this scenario: forty-one days.

During those forty-one days, the homeowner's electricity bill arrives from the [DISCOM](/glossary/discom/), full consumption charges, because the solar system was offline. The home loan EMI on the solar installation was also due. The installer lost two referrals from neighbours who had been watching the situation. And the brand? Their warranty document said service would be provided within a *reasonable time*.

The scenario is invented to show the shape of the problem, not to report a specific event. We believe the solar service SLA gap is one of the more serious structural problems in the industry, and one that is worth discussing before it becomes a consumer-trust problem for the whole market.

> [!KEYTAKEAWAYS]
> - The fault-to-fix pipeline for a residential inverter has nine stages and no mandated time limit at any of them, so the total can run to weeks; this post quotes no average because no citable one exists.
> - Downtime costs more than lost generation: DISCOM billing and loan EMI continue, net metering credit erodes and the installer's reputation takes the hit.
> - The post proposes a 5-Gate Solar Service SLA Standard: acknowledgement in 2 business hours, remote diagnosis in 24 business hours, on-site visit within three days of diagnosis, part dispatch in 48 hours and restoration in 7 calendar days.
> - Before committing to a brand, EPCs should ask for a written SLA with a penalty clause, proof of regional service, replacement versus repair terms, digital fault logging and a TCO that includes service.
> - Qbits' public material does not state technician coverage, replacement remedy or service response targets, so obtain them in writing for the exact model.

> **The solar service SLA problem in plain terms.** Many Indian solar inverter warranties state no measurable service SLA, only that service will be provided in a "reasonable time". Smaller cities and rural areas often have thinner service coverage than metros. Every day of downtime costs the buyer lost generation, while the DISCOM connection stays billed and any loan EMI stays payable on a non-generating asset. The industry would benefit from declared SLAs with a remedy for breach, public disclosure of service coverage, and minimum service standards, before the installed base grows much larger.

## The Scale of the Problem: What the Numbers Actually Show

MNRE capacity data for 30 September 2026, as reported by [Saur Energy](https://www.saurenergy.com/solar-energy-news/india-adds-2456-gw-renewable-energy-capacity-in-h1-fy-2026-27-12637483) on 8 October 2026, puts grid-connected rooftop solar at 33.41 GW out of 171.05 GW of cumulative solar capacity. No public source gives the number of residential inverters in service or an India-wide fault rate, and the [solar inverter failure](/blog/solar-inverter-failure/) guide notes that no audited India-wide inverter failure rate is published. So the scale of the service need cannot be stated as a figure here; the point is directional. Even a small annual fault rate across a base this large means a large number of service events, and heat stress, voltage spikes and moisture ingress are commonly cited causes.

Now set that against the service infrastructure that exists to handle these events. [MNRE](/glossary/mnre/) has no published database of authorised solar inverter service centres by geography, and we know of no independent tracker of service centre density per district. The [solar inverter market in India](/blog/solar-inverter-market-india/) includes many brands, and the buyer often cannot tell from a datasheet who will answer a service call in their town.

The mismatch between how many service events a large installed base can generate and how little public information exists about who will handle them is the problem this article is about.

## Why Resolution Can Take Weeks: The Fault-to-Fix Pipeline

To understand how service resolution can drag on, it helps to trace the steps from the moment a fault occurs to the moment the system is restored. The stages below are a generic pipeline, and this guide quotes no stage durations because no citable source publishes them.

The typical service pipeline for a residential solar inverter in India looks like this:

<!-- steps -->
1. **Fault occurs**: the inverter trips or shows an error code. The homeowner may not notice immediately, particularly if there is no monitoring.
2. **Fault reported**: the homeowner calls the installer or the brand helpline. If the brand does not have active monitoring, this step depends entirely on the homeowner.
3. **Ticket logged**: the brand's helpline logs a ticket. If it is outside business hours or a weekend, the ticket enters the queue the next business day.
4. **Remote diagnosis**: the brand's service team attempts a remote diagnosis via phone or the monitoring app. If the inverter is offline, remote diagnosis is impossible. If it requires firmware logs, the installer must physically visit the site.
5. **Service visit authorised**: the brand approves a physical technician visit. In metro cities a visit may be quicker; in smaller cities the nearest authorised technician may cover a wide area and schedule visits on a route basis.
6. **Diagnosis on site**: the technician visits, identifies the fault, and reports back. If a part is needed, a requisition is raised.
7. **Part sourced**: if the brand does not hold regional inventory, parts are sourced from a central factory warehouse. Dispatch plus courier adds time, and parts that are imported can add customs clearance on top.
8. **Second visit or RMA**: the technician returns with the part, or a replacement unit is dispatched. This adds further days.
9. **System restoration**: the system is back online.

Each stage adds waiting time, and with no mandated time limit at any stage the total can run to weeks. That is the structural outcome of a pipeline with no declared limits.

The problem is not that individual technicians are lazy. The problem is that the pipeline has no declared SLA, no financial penalty for delay, and no accountability mechanism between stage 3 and stage 9.

## What Downtime Actually Costs: The Hidden Bill No One Mentions

The industry's standard framing of downtime focuses on lost generation, and that is real. As an assumed example, a 5 kW residential system in a good-irradiance location generates 20–25 kWh per day during peak months. At an assumed blended DISCOM tariff of ₹7–8 per kWh, that is ₹140–₹200 per day in savings foregone (20 × 7 and 25 × 8).

That is the visible cost. Other costs continue at the same time, though most are payments the buyer owes anyway rather than extra costs of the outage.

- **Continued DISCOM billing**: the electricity connection to the property remains active regardless of whether the solar system is generating, so the homeowner receives a bill for the consumption the system would have covered. That bill is the same money as the forgone savings above, so it must not be added to them a second time.
- **Loan EMI continues**: if the system was financed, the EMI is payable whether the system generates or not (for example, ₹2,50,000 at 9% over 7 years is about ₹4,023 a month, calculated here). The EMI is not an extra cost of the outage, but it means the buyer is paying for an asset that is not earning.
- **Installer reputational damage**: every referral the installer loses during the downtime period is a compounding cost that does not appear on any balance sheet, one that feeds directly into the [unit economics of an Indian solar installer](/blog/unit-economics-indian-solar-installer/).
- **Net metering credit erosion**: systems with active net metering connections cannot export units during downtime, eroding the net metering credit balance that homeowners depend on to offset night-time consumption. In states with monthly settlement cycles, a full month of downtime can eliminate the credit buffer for that billing cycle entirely.

As a worked example (assumed inputs): a 6-week (42-day) outage on a 5 kW residential system generating about 22 kWh a day at ₹7.5 per kWh forgoes 42 × 22 × 7.5 = about ₹6,930 in savings. The EMI and the connection charges continue as above, and any replacement cost out of warranty is additional.

For commercial installations, the numbers scale sharply. The [solar inverter failure](/blog/solar-inverter-failure/) guide works a 100 kW commercial system at 400 to 450 kWh a day and ₹6 to ₹8 per kWh, which is ₹2,400 to ₹3,600 per day in generation lost. A 4-week outage costs ₹67,200 to ₹1,00,800 in lost generation on those assumptions, without counting the cost of a replacement inverter.

## Why This Is Structural: The Assembler Problem

Before we talk about solutions, it is worth being honest about why the service crisis exists. The answer is structural, and it starts with who actually manufactures solar inverters in India.

The Indian solar inverter market has three tiers of brands:

Table: The three tiers of inverter brands in India, by manufacturing, service set-up and declared SLA

| Tier | Who | Service set-up | Declared SLA |
| --- | --- | --- | --- |
| Tier 1 | Large global brands such as Sungrow, Fronius and SMA | Own manufacturing; service offices in major Indian cities; check regional spare-parts hubs and field engineers for your pincode | May be stated in enterprise contracts; ask |
| Tier 2 | Established Indian brands that manufacture or assemble with significant local value-add | National dealer network with some service capability; spare parts may depend on dealer inventory | May be absent or in "reasonable time" language; ask |
| Tier 3 | Assemblers competing on price | May have no owned service | May be none; ask before you buy |

### Tier 1: Owned Manufacturing with Owned Service

This tier includes global brands like Sungrow, Fronius, and SMA, which own their manufacturing and list service offices or partners in India. Whether a given brand has a declared SLA, regional spare-parts hubs and factory-trained field engineers for your town is something to verify in writing; we cite no source for the extent of their India networks.

### Tier 2: Indian OEMs with Partial Service Infrastructure

This tier includes established Indian brands that manufacture (or assemble with significant local value-add) and have a national dealer network with some service capability. Service SLAs are rarely declared in writing. Resolution times can vary by region and by the strength of the dealer network. Warranty documents often use "reasonable time" language. Spare-parts availability depends on whether the dealer carries inventory, so ask.

### Tier 3: Assemblers with No Owned Service

These assembler brands compete primarily on price. The lower price can look attractive to a homeowner or a margin-pressured EPC, but the service gap may only become apparent when the first major fault occurs and there is nobody to call, so check the service route before buying.

## The 5-Gate Solar Service SLA Standard

We believe the industry needs a clear, auditable framework for what a legitimate solar service SLA looks like. This article proposes one, the **5-Gate Solar Service SLA Standard**. It is a proposal, not an existing standard.

Table: The 5-Gate Solar Service SLA Standard at a glance, with the time limit set for each gate

| Gate | What must happen | Time limit |
| --- | --- | --- |
| 1. Ticket acknowledgement | Ticket formally acknowledged, with a ticket number issued | Within 2 business hours of submission |
| 2. Remote diagnosis | Remote diagnosis completed; if impossible, technician dispatched to site | 24 business hours from acknowledgement; 48 business hours for dispatch |
| 3. On-site technician visit | Factory-trained or authorised technician on site | Within three days of remote diagnosis confirming a physical fault |
| 4. Replacement or part dispatch | Replacement unit or required part dispatched from the brand's warehouse | Within 48 hours of diagnosis confirmation |
| 5. System restoration | Full rated generation restored, or per-day generation credit issued | Within 7 calendar days of original ticket |

### Gate 1: Ticket Acknowledgement

A service ticket must be formally acknowledged within 2 business hours of submission, with a ticket number issued to the buyer or installer. This gate is achievable immediately for any brand with a functioning customer service operation. Failure at Gate 1 indicates a brand has no service infrastructure at all.

### Gate 2: Remote Diagnosis Completion

A remote diagnosis (covering fault code review, monitoring data analysis, and an initial resolution determination) must be completed within 24 business hours of ticket acknowledgement. If remote diagnosis is impossible because the inverter is offline or unmonitored, the brand must dispatch a technician to site within 48 business hours. Brands without monitoring integration cannot meet this gate consistently.

### Gate 3: On-Site Technician Visit

A factory-trained or authorised technician must be on site within 72 hours of remote diagnosis confirming a physical fault. In smaller cities, this requires the brand to maintain authorised service partners reachable from every district, not just state capitals. This gate separates brands with genuine service density from brands that handle everything out of a single metropolitan hub.

### Gate 4: Replacement or Part Dispatch

A replacement unit or the confirmed required part must be dispatched from the brand's warehouse within 48 hours of fault diagnosis confirmation. This gate requires regional inventory, not a central warehouse model. Brands that source all parts from a single factory location cannot meet Gate 4 in Tier-2/3 markets within the required window.

### Gate 5: System Restoration

The system must be restored to full rated generation within 7 calendar days of original ticket submission, or the brand must issue a per-day generation credit calculated at the prevailing DISCOM tariff rate for the system's rated output. The credit is not a penalty, it is a fair compensation mechanism that makes the buyer whole for the generation loss caused by the delay.

A brand that meets all 5 gates is operating a structured after-sales service model; a brand that fails any gate consistently is not. These are proposed targets, and whether a brand can meet them depends on its own service infrastructure.

## What the Industry Should Do: Three Specific Reforms

Policy conversations in the Indian solar industry tend to focus on installation quality, ALMM compliance, and subsidy disbursement. After-sales service rarely makes the agenda. That needs to change.

### Reform 1: MNRE Minimum Service Standards

[MNRE](/glossary/mnre/) should mandate minimum after-sales service standards as a condition of ALMM listing. Specifically: brands must declare a written SLA covering ticket acknowledgement, on-site response, and system restoration times. The SLA must be made available to buyers and registered with MNRE. Brands that fail to meet their declared SLA in more than 5% of service events in any quarter should face ALMM listing suspension until corrective action is demonstrated.

This is not a radical requirement. The Bureau of Energy Efficiency already mandates performance standards for appliances. The [BIS certification](/glossary/bis-certification/) regime mandates product quality. Service quality is the logical third pillar.

### Reform 2: Service Network Density Disclosure

MNRE should require brands to publicly disclose the number and location of their authorised service centres by state and district, distinguishing between owned centres and third-party partner centres, and specifying the spare-parts inventory held at each. This data should be searchable by buyers before purchase, not buried in a warranty document printed in 8-point font.

A buyer in Indore or Coimbatore deserves to know, before purchasing, how many days it will take for a technician to reach them. That information should be publicly available, not inferrable only from experience after a fault occurs.

### Reform 3: Financial Penalty Provisions in Warranty Documents

Warranty documents issued by solar inverter brands should be required to include a financial penalty provision for SLA breach, calculated as a per-day generation credit at the DISCOM tariff rate. We found no published Indian standard for such a clause, and we cite no foreign framework for it. Whether it is enforceable depends on how the warranty document is worded, so take legal advice on your own contract and the Consumer Protection Act 2019. The barrier is mainly commercial: brands rarely commit to accountability in writing.

> [!TIP] Ask for the penalty clause now
> EPCs should begin requiring this provision in their supplier contracts now, before it becomes mandatory. A brand that refuses to include a penalty clause in a written SLA is signalling that it does not expect to meet the SLA it is verbally promising.

## The Homeowner's Perspective: Why Trust Is at Stake

In the illustrative scenario at the top, the installer did everything right: he sold a quality system, installed it correctly, documented the fault and escalated through the proper channels, and still could not get a response from the brand for three weeks.

When that homeowner talks to her neighbours, she may not say the inverter brand failed. She may say solar failed. That is the trust problem the industry risks creating.

India has set a target of 500 GW renewable energy capacity by 2030, anchored significantly by rooftop solar under PM Surya Ghar, as documented in [MNRE's National Solar Mission framework](https://mnre.gov.in/). The [PM Surya Ghar scheme](/blog/pm-surya-ghar-yojana-complete-guide/) aims to place solar systems on 1 crore (10 million) homes. Over a 25-year life, many of those systems will need at least one service visit. If the industry has not built the service infrastructure to handle those events within a reasonable time window, many homeowners may discourage their networks from adopting solar.

The growth of the Indian solar market depends on homeowner trust. Homeowner trust depends on after-sales service. After-sales service depends on declared SLAs, owned infrastructure, and financial accountability. The chain is direct and it is fragile.

## Where the EPC Installer Fits: Choosing a Brand That Backs You

For EPC installers reading this, the after-sales service SLA is not just a homeowner problem, it is your problem. When an inverter fails and the brand does not respond, the homeowner calls you. Your reputation is the first one damaged. Your relationship is the first one strained.

Before committing your next project to any brand, apply this checklist:

> [!CHECKLIST] EPC checklist before committing to a brand
> - **Declared SLA in writing**: not a verbal promise from the sales rep, not a marketing brochure claim. A written, signed document with specific time commitments and a penalty clause.
> - **Proof of regional service infrastructure**: the brand should be able to show you the authorised service centres covering your primary project geography, and confirm the spare-parts inventory held at the nearest regional warehouse.
> - **Replacement vs repair warranty**: a [replacement warranty](/blog/solar-inverter-warranty/) means a new unit is dispatched; a repair warranty means the same ageing unit returns after a repair cycle. Replacement is the model that best protects your installation timeline and the homeowner's generation continuity.
> - **WhatsApp or digital fault logging**: brands without digital fault logging will have a reporting lag before the fault enters the service pipeline. In a 72-hour SLA model, that lag is unacceptable.
> - **Total cost of ownership analysis**: the [inverter total cost of ownership](/blog/inverter-tco/) calculation must include estimated service costs over the warranty period, not just the purchase price. A brand that is cheaper at purchase but slow to resolve faults can be more expensive over the system life once downtime is counted; run the arithmetic with your own tariff and daily generation.

## The Verdict: What Has to Change and When

Table: Service SLA issues, the current state as the post describes it and what is needed

| Issue | Current State | What Is Needed |
| --- | --- | --- |
| Declared SLA | Not required by MNRE; few warranties state a measurable one | MNRE to mandate as ALMM listing condition |
| Resolution time | No published industry figure | Proposed target of 7 days or less with a Gate 5 credit |
| Tier-2/3 service density | No MNRE disclosure requirement | Public service centre map mandatory with listing |
| Spare-parts inventory model | Varies by brand | Regional warehouse model with state-level inventory |
| Warranty language | "Reasonable time" standard | Per-day generation credit provision mandatory |
| Buyer recourse | Consumer Protection Act 2019 (slow; expensive) | Fast-track MNRE grievance portal for service breaches |

The reforms in this table are not contingent on new legislation. Most can be implemented through MNRE administrative orders under the existing regulatory framework. The will, not the mechanism, is what is missing.

## Where Qbits Fits in This Picture

Qbits publishes this article, so its discussion of Qbits service must be treated as first-party material and checked against current controlling terms.

Qbits' public material does not state its call-centre capacity, technician coverage, logistics set-up, replacement remedy or service response targets, so none of these should be assumed. Ask for them in writing, as dated service terms for the exact model, and use the [authorised service-partner page](/authorized-service-partners/) to see who covers your area.

The [warranty verification guide](/blog/12-year-solar-inverter-warranty/) explains how to check the term, remedy, exclusions, owner costs and claim route. Repair and replacement policies have different tradeoffs, but neither alone guarantees good service.

When comparing brands, request the written service target, local responsible party, escalation path, parts process and warranty remedy. Then confirm how each obligation is measured and what exceptions apply.

The solar industry in India has a window, perhaps 24–36 months before the PM Surya Ghar scale creates a service crisis visible enough to reach newspaper front pages. That window should be used to build infrastructure and mandate standards. The conversation starts now.
