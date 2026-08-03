---
title: "Virtual Net Metering in India 2026: The Apartment Dweller's Guide"
excerpt: "Virtual net metering in India lets one shared solar plant credit many flats. How it works, which states allow it, and the billing math for RWAs."
description: "Virtual net metering in India explained for apartment dwellers and RWAs: how one shared solar plant splits credits across meters, which states allow it in 2026, Delhi's DERC rules, and a full billing math example."
category: "Guide"
date: 2026-07-23
updatedDate: 2026-07-23
readTime: "16 min"
image: "/blog-images/virtual-net-metering-india.svg"
author: "Akash Hirapara"
keywords:
  - virtual net metering india
  - virtual net metering
  - group net metering india
  - virtual net metering delhi
  - solar for apartment society
  - DERC virtual net metering guidelines
  - shared rooftop solar apartment
faqs:
  - q: "What is virtual net metering in India?"
    a: "Virtual net metering is a billing arrangement where one solar plant, installed on a shared rooftop or common land, exports power to the grid and the DISCOM splits the resulting credits across several individual consumer meters. Each participant gets a pro-rata credit on their own electricity bill based on an agreed sharing formula. Delhi first formalised it through the DERC Group Net Metering and Virtual Net Metering Guidelines, 2019, and states such as Rajasthan and Telangana have followed with their own regulations."
  - q: "Which states in India allow virtual net metering in 2026?"
    a: "As of 2026, Delhi has the most mature virtual net metering framework under the DERC guidelines first issued in 2019 and amended seven times since. Rajasthan allows virtual and group net metering across consumer categories under the third amendment to its distributed renewable energy regulations. Telangana formally introduced group and virtual net metering in its Rooftop Solar PV Grid Interactive Systems Regulation, 2025. Puducherry permits group net metering under the Joint Electricity Regulatory Commission. Several other states have draft rules, so always confirm with your local DISCOM before planning a shared plant."
  - q: "Can tenants benefit from virtual net metering?"
    a: "Yes, tenants can benefit if their individual meter is listed as a participating connection in the sharing agreement filed with the DISCOM. The credit goes to whoever holds the electricity account for that connection. In most apartment societies the tenant's name is on the bill, so the monthly credit reduces their payable amount directly. The practical hurdle is getting the RWA and the flat owner to include tenant-held meters in the agreement, since owners who pay the society's capital cost usually want the credit themselves."
  - q: "How are solar credits divided among flats in virtual net metering?"
    a: "The sharing formula is decided by the participating consumers and recorded in the agreement submitted to the DISCOM. Common formulas are equal shares per flat, shares proportional to carpet area, or shares proportional to capital contribution. Delhi's DERC guidelines let consumers choose the ratio and revise it within defined limits. Once filed, the DISCOM applies the same percentage split every billing cycle, so a flat with a 4% share of a 50 kW plant gets 4% of every unit the plant exports."
  - q: "Is PM Surya Ghar subsidy available for a shared apartment solar plant?"
    a: "Under PM Surya Ghar Muft Bijli Yojana, group housing societies and RWAs can claim central financial assistance of Rs 18,000 per kW for common facilities, capped at 500 kW, according to MNRE guidelines. Individual flat owners applying separately get the residential slab rates instead. The society plant must use ALMM-listed modules and a registered vendor. This is separate from the residential subsidy of Rs 78,000 for a 3 kW home system, so societies should model both routes before applying."
  - q: "What is the difference between group net metering and virtual net metering?"
    a: "Group net metering lets one consumer with multiple connections, for example a university or a factory owner with several meters, offset generation from one solar plant against all their own meters. Virtual net metering extends the same idea to multiple different consumers, such as the flats in an apartment society, sharing credits from one plant. Both were defined in Delhi's DERC 2019 guidelines. The distinction matters because eligibility conditions and the sharing agreement format differ between the two."
  - q: "How much can an apartment society save with virtual net metering?"
    a: "Savings depend on plant size, tariff, and the consumption of participating flats. A hypothetical 50 kW society plant in Delhi generating about 70,000 units a year and credited at an effective tariff of Rs 7 per unit would offset roughly Rs 4.9 lakh of electricity bills annually across participants. After a net cost of about Rs 16 lakh (Rs 25 lakh capital cost minus Rs 9 lakh PM Surya Ghar assistance for common facilities), simple payback works out to roughly 3.3 years. These numbers are illustrative; actual yields and tariffs vary by city and DISCOM."
  - q: "What documents does an RWA need to apply for virtual net metering?"
    a: "A typical application needs the society registration certificate, an RWA resolution authorising the project, the sharing agreement signed by all participating consumers, identity and address proof of the authorised signatory, the latest electricity bills of all participating connections, the site plan and roof ownership or no-objection documents, and the technical specifications of the proposed plant including the inverter model. The DISCOM then runs a feasibility check before approving the connection. Exact lists vary by state and DISCOM."
featured: false
---

Roughly two out of every three Indians who will live in cities by 2035 will live in an apartment, not an independent house. That single fact explains why rooftop solar in India has a strange blind spot. Every subsidy ad shows a bungalow with panels on a sloped roof. Yet the fastest growing housing stock in the country is the high-rise flat. No single family owns the terrace, and no single meter maps to one roof.

Virtual [net metering](https://quickestimate.co/blog/what-is-net-metering) is the regulatory fix for this mismatch. It lets one solar plant, installed on a society's common terrace, feed the grid and split the bill credits across dozens of individual flat meters. The society builds one shared plant, and the [DISCOM](/glossary/discom/) does the arithmetic of dividing the benefit. No resident needs a personal roof or a personal inverter.

The idea is not new. Delhi formalised it in 2019. But 2025 and 2026 have brought a wave of updates. Rajasthan opened virtual [net metering](https://quickestimate.co/blog/bescom-net-metering-guide) across consumer categories, and Telangana wrote it into a fresh rooftop regulation. Delhi's seventh amendment in January 2026 extended it to every consumer in the capital, including single-point supply connections. Independent houses have long claimed Rs 78,000 subsidies while society terraces sat empty. For Resident Welfare Associations (RWAs) and apartment owners, this is the moment the door finally opens.

This guide covers what virtual net metering actually is and how it differs from group net metering. It then looks at which states allow it in 2026 and the full billing math for a typical society. Finally, it covers the honest tradeoffs an RWA should weigh before signing a sharing agreement.

> **TL;DR**
> - Virtual net metering lets one shared solar plant credit multiple individual meters; Delhi pioneered the rules through DERC guidelines in 2019.
> - Delhi's seventh amendment, notified in January 2026, extends virtual net metering to all consumers in the capital, including single-point supply connections, according to DERC.
> - Rajasthan and Telangana formally allow virtual and group net metering as of their 2025 regulations; Puducherry permits group net metering.
> - A hypothetical 50 kW society plant generating about 70,000 units a year can offset roughly Rs 4.9 lakh of bills annually at Rs 7 per unit.
> - [PM Surya Ghar](/glossary/pm-surya-ghar/) offers Rs 18,000 per kW for group housing common facilities, capped at 500 kW, according to [MNRE](/glossary/mnre/).
> - The credit split is a formula your society chooses and files with the DISCOM: equal, by area, or by capital share.
> - Payback for a shared society plant typically lands between 3 and 5 years, comparable to an individual rooftop system.

**Short version.** Virtual net metering in India is a billing mechanism where one solar plant on a shared rooftop exports power to the grid. The DISCOM then distributes the resulting credits across the individual electricity meters of participating flats, in proportion to a pre-agreed formula. Delhi allows it under DERC guidelines first issued in 2019 and expanded in January 2026. Rajasthan and Telangana added it in 2025. It is the main legal route for apartment residents to benefit from rooftop solar without owning the roof.

If you are an RWA committee member weighing a terrace plant, start with our guide to [solar for apartment complexes and RWAs in India](/blog/solar-for-apartment-complex-rwa-india/). Then come back here for the metering mechanics. For societies still on plain net metering for common loads only, the [net metering complete guide](/blog/net-metering-india-complete-guide/) explains the baseline this post builds on.

## What Virtual Net Metering Actually Is

Virtual net metering is a credit-sharing arrangement, not a wiring arrangement. The solar plant connects to the grid at one point with one bidirectional meter. The energy it exports is measured once. The DISCOM then credits that exported energy, in kWh, to the individual bills of participating consumers according to percentages recorded in a sharing agreement.

The word virtual is the key. No solar power physically flows into any flat. The plant exports everything to the grid. The benefit arrives as a monetary or unit credit on each participant's monthly bill, exactly as if their own meter had run backwards.

This is different from a regular net metered system, where one plant maps to one meter. The [gross metering vs net metering](/blog/gross-metering-vs-net-metering/) comparison covers how the two basic settlement modes work. Virtual net metering sits on top of net metering logic but multiplies the number of beneficiary meters.

Three parties make it work. The first is the plant owner, usually the RWA or a special purpose group of residents. The second is the DISCOM, which installs the generation meter and applies the credit split each billing cycle. The third is the state electricity regulatory commission, whose rules decide whether the arrangement is legal at all.

## How It Differs From Group Net Metering

Group net metering and virtual net metering are siblings, and regulators such as Delhi's DERC define them together in one document. The distinction is about who owns the participating meters.

**Group net metering (GNM)** is for one consumer with many connections. A university with meters for its hostels, offices, and auditorium can put one plant on the largest roof and offset the combined bill. All participating connections belong to the same legal entity.

**Virtual net metering (VNM)** is for many consumers sharing one plant. Thirty flat owners in one society, each with their own DISCOM account, can share credits from the society terrace plant. The participating connections belong to different legal entities.

For an apartment society, VNM is the relevant mechanism. GNM matters when the RWA itself wants to offset common loads such as lifts, corridor lights, water pumps, and the clubhouse against one plant. Many societies will use both: one GNM arrangement for common area meters, and one VNM agreement for residents who opt in.

The paperwork differs too. GNM needs a list of the consumer's own connections. VNM needs a signed sharing agreement between distinct consumers, which is where most of the legal care goes.

## Delhi: Where the Rules Were Written First

Delhi is the reference implementation for virtual net metering in India. The Delhi Electricity Regulatory Commission (DERC) issued its Group Net Metering and Virtual Net Metering for Renewable Energy Guidelines in 2019. It was the first such framework in the country. Every state regulation since has borrowed its vocabulary.

Under the DERC framework, any consumer or group of consumers can set up a renewable energy plant and share the credits. The plant can sit on the roof of one participant or on common society space. The sharing ratio is chosen by the participants, filed with the DISCOM, and applied each billing cycle.

The framework has been amended repeatedly. A 2025 amendment simplified how time-of-day and non time-of-day consumers are treated in credit settlement. Then, on 20 January 2026, DERC notified the seventh amendment. It opened virtual net metering to all consumers in the national capital territory, including those on single-point supply connections, according to DERC (2026). That last change matters for large gated communities that receive bulk supply at one point and bill residents internally.

The same amendment clarified waivers on service line cum development charges for plants on 11 kV and lower voltage networks. The waivers are subject to cumulative capacity caps, according to DERC (2026). In plain terms, societies below the caps avoid some of the network upgrade costs that used to inflate project budgets.

Delhi also offers a generation-based incentive of Rs 2 per unit on solar generation under its solar policy framework. The Delhi Solar Policy 2023 added community solar models where residents buy shares of a collectively owned plant, according to the Delhi government (2024). Combined with the [Delhi solar subsidy stack for 2026](/blog/solar-subsidy-delhi-2026/), the capital has the strongest economics in the country for a shared society plant.

## Which States Allow Virtual Net Metering in 2026

The honest answer is: a minority of states, but the list is growing. Here is where the major frameworks stand as of mid-2026.

| State / UT | Mechanism | Status in 2026 | Key detail |
| --- | --- | --- | --- |
| Delhi | GNM and VNM | Active since 2019, expanded Jan 2026 | All consumers eligible, including single-point supply, per DERC seventh amendment |
| Rajasthan | GNM and VNM | Active, third amendment 2025 | Open across consumer categories, charge waivers codified, per RERC |
| Telangana | GNM and VNM | Active under 2025 rooftop regulation | Four metering models defined, including VNM, per TERC |
| Puducherry | GNM | Active under JERC | One consumer with multiple connections can share credits |
| Madhya Pradesh | VNM | Early adopter since 2016 | Used first for government building clusters |
| Kerala | Net billing and metering | 2025 regulations notified | VNM provisions under the new framework; confirm with KSEB |
| Other states | Varies | Mostly draft or silent | Check with the state DISCOM before planning |

Rajasthan's third amendment to its distributed renewable energy regulations opened virtual and group net metering across consumer categories. It also codified waivers on wheeling, banking, and cross-subsidy charges, according to Mercom India (2025). That makes Rajasthan arguably the most generous state for a shared plant after Delhi.

Telangana's Rooftop Solar PV Grid Interactive Systems Regulation, 2025 formally introduced four metering models. These are net metering, group net metering, gross metering, and virtual net metering, according to the Telangana Electricity Regulatory Commission (2025). Housing societies in Hyderabad can now file VNM agreements directly.

If your state is not on this list, do not assume shared solar is impossible. Some DISCOMs approve group arrangements case by case, and several regulators have draft rules in consultation. The [solar subsidy guide for all states](/blog/solar-subsidy-all-states/) tracks which frameworks are live, and your DISCOM's renewable energy cell can confirm the position in writing.

## How an RWA Can Set Up a Shared Plant: Step by Step

The process is longer than an individual rooftop application because it involves a collective decision and a sharing agreement. Budget three to six months from first committee meeting to commissioning.

1. **Pass an RWA resolution.** The society's general body must approve the project, the budget, and the sharing principle. Most DISCOMs ask for the resolution copy. Get the vote recorded properly; it prevents disputes later.

2. **Survey the terrace.** A 50 kW plant needs roughly 3,000 to 4,000 square feet of shadow-free roof. Structural load capacity must be verified, especially on buildings older than 15 years. Keep a one-metre walkway clear for maintenance.

3. **Decide the sharing formula.** Equal split, split by carpet area, or split by capital contribution. Document it in a written sharing agreement signed by every participating account holder. This document goes to the DISCOM and governs every future bill.

4. **Choose CAPEX or RESCO.** In CAPEX, the society funds the plant and owns it. In RESCO, a developer funds it and sells power to the society at a discounted tariff for 15 to 25 years. RESCO removes the upfront cost but roughly halves the lifetime saving.

5. **Apply to the DISCOM.** Submit the feasibility application with the resolution, sharing agreement, participating account numbers, and technical specs. The process mirrors a standard net metering application, with the sharing agreement added on top. [How to apply for net metering in India](/blog/how-to-apply-net-metering-india/) covers the baseline process step by step.

6. **Install and commission.** Use a vendor registered on the PM Surya Ghar portal and ALMM-listed equipment. After inspection, the DISCOM installs the bidirectional generation meter and activates the credit split.

A real society that walked this path is documented in our [Noida apartment RWA case study](/blog/case-study-noida-apartment-rwa/). A 40-flat society there structured a shared terrace plant and divided credits across participating meters. The paperwork lessons in that story apply directly here.

## Billing Math: A Worked Example for a 30-Flat Society

Numbers make this concrete. The example below is hypothetical and labelled as such; actual tariffs, yields, and costs vary by city. Assume a 30-flat society in Delhi installing a 50 kW plant on its terrace in 2026.

**Inputs.** Plant size 50 kW. Annual generation about 1,400 units per kW, so 70,000 units per year. Effective tariff for participating flats: Rs 7 per unit. Capital cost about Rs 50,000 per kW, so Rs 25 lakh. PM Surya Ghar assistance for group housing common facilities: Rs 18,000 per kW, so Rs 9 lakh, according to MNRE (2024). Net cost to society: Rs 16 lakh.

**Sharing formula.** The society chooses a split by flat size: twenty 2BHK flats at 3% each, ten 3BHK flats at 4% each, totalling 100%.

| Line item | 2BHK flat (3% share) | 3BHK flat (4% share) | Society total |
| --- | --- | --- | --- |
| Annual units credited | 2,100 | 2,800 | 70,000 |
| Monthly units credited | 175 | 233 | 5,833 |
| Value at Rs 7 per unit per month | Rs 1,225 | Rs 1,633 | Rs 40,833 |
| Annual bill offset | Rs 14,700 | Rs 19,600 | Rs 4.9 lakh |
| Capital share (net of subsidy) | Rs 48,000 | Rs 64,000 | Rs 16 lakh |
| Simple payback | About 3.3 years | About 3.3 years | About 3.3 years |

The table shows why VNM is compelling. Each flat sees a four-figure monthly bill reduction without owning any equipment. The society plant earns back its net cost in roughly three and a quarter years. It then delivers 20-plus years of near-free credits, less panel degradation of about 0.5% per year.

Two practical notes. First, credits offset energy charges; fixed charges and demand charges on the bill stay payable. Second, if a flat's monthly credit exceeds its consumption, most frameworks carry the surplus forward to the next billing cycle rather than paying cash. Oversizing the plant therefore wastes money. Size the plant to roughly 80% to 90% of the society's combined annual consumption.

The [PM Surya Ghar eligibility guide](/blog/pm-surya-ghar-eligibility/) explains how group housing claims differ from individual residential claims. It is worth reading before the society finalises its application route.

## The Tradeoffs: What RWAs Should Weigh Honestly

Virtual net metering is good policy, but it is not free of friction. We advise societies to go in with eyes open on five points.

**Governance is the hardest part.** The sharing agreement outlives committee tenures. Flats get sold, tenants change, and the DISCOM keeps applying the filed percentages until someone files a revision. Build a revision clause into the agreement from day one, and define what happens to a seller's share on resale.

**Credit disputes fall on the society, not the DISCOM.** The DISCOM applies the filed formula mechanically. If residents disagree about fairness, that is an internal society matter. Societies with weak governance should start with common-load GNM only, prove the process for a year, then extend to VNM.

**RESCO contracts need legal review.** A 25-year RESCO agreement on a shared terrace involves escalation clauses, buyout terms, and roof rights. Societies have signed contracts where the effective tariff discount shrank to under 10% by year ten because of escalation terms nobody read. Get a lawyer to review before signature.

**Oversizing destroys value.** Credits carried forward are worth less than credits used immediately, and some frameworks settle annual surpluses at a low pooled rate. A plant sized to the society's real consumption beats a maximised terrace every time.

**Regulatory change cuts both ways.** Delhi has amended its guidelines seven times, mostly in the consumer's favour. But banking provisions, charge waivers, and settlement rates can tighten. A shared plant's economics should still work if the worst reasonable policy shift occurs.

> **What most RWAs get wrong.** The committee spends months negotiating the sharing formula and almost no time on the revision clause. The formula matters for year one. The revision clause matters for years five through twenty-five, when ownership patterns have changed and the original agreement no longer fits.

## Who Should Use Virtual Net Metering, and Who Should Not

**A strong fit:** a registered RWA or apartment association with 20 or more flats and a shadow-free terrace of 2,500 square feet or more. Combined monthly consumption should exceed 4,000 units, and the general body must be willing to sign a collective agreement. Delhi, Rajasthan, and Telangana residents have the clearest legal path in 2026.

**Also a fit:** societies that only want to offset common loads. That is group net metering, simpler to govern, and often the right first step. Tenants and residents of rented flats can participate in VNM if the agreement lists their meters. Individuals who cannot wait for their society to act have alternatives. See our guides on [solar for rented homes and tenants](/blog/solar-for-rented-homes-tenants-india/) and [balcony solar in India](/blog/balcony-solar-india/).

**A weak fit:** unregistered associations where no legal entity can sign the sharing agreement. The same goes for buildings with heavy terrace shading from taller neighbours, and societies where the general body is split on the project. A VNM agreement signed under internal pressure tends to unravel within two years, and unwinding a shared plant is far harder than not building one.

One exception is worth noting. Even in states without formal VNM rules, a society can install a plant on GNM for common loads and reduce the maintenance bill for every resident. That indirect benefit requires no sharing agreement at all.

## The Bottom Line

Virtual net metering converts the apartment terrace from dead space into a shared asset. Delhi wrote the rulebook in 2019, Rajasthan and Telangana followed in 2025, and the regulatory direction across India clearly favours collective solar. For the majority of urban Indians who will never own an individual roof, this is the mechanism that makes rooftop solar theirs too.

The economics hold up. A well-governed society plant pays back in 3 to 5 years and then credits residents' bills for two decades. The catch is governance, not engineering: the sharing agreement, the revision clause, and the RESCO fine print decide whether the project still works in year ten.

Three things to do this month:

- Put a one-page solar feasibility note on the next RWA general body agenda, with terrace area, combined consumption, and the state rules from this guide attached.
- Ask your DISCOM's renewable energy cell, in writing, whether virtual or group net metering is active for your connection category and what the application requires.
- If you want a vetted installer who has commissioned shared society plants and understands VNM paperwork, [talk to our team](/contact-us/). We will point you in the right direction.
