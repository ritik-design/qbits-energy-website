---
title: "Gross Metering vs Net Metering, Which Should You Choose?"
excerpt: "Gross vs net metering determines how your solar is billed. Compare both mechanisms, state policies, payback math, and a Decision Tree to pick the right option."
description: "Gross metering pays a fixed FiT on all solar generation. Net metering credits exports against imports. Compare rates, payback, and state rules to pick the right option in India."
category: "Comparison"
date: 2026-06-05
updatedDate: 2026-07-08
readTime: "26 min"
image: "/blog-images/on-grid-vs-hybrid-solar-inverters-roi.svg"
author: "Nirav Dhanani"
keywords:
  - gross vs net metering
  - gross metering vs net metering india
  - net metering vs gross metering solar
  - feed-in tariff vs net metering
  - solar metering policy india 2026
faqs:
  - q: "What is the main difference between gross metering and net metering?"
    a: "Net metering measures only the surplus solar energy you export to the grid and credits it against the units you import, so you pay for the net difference. Gross metering measures every unit your solar system generates - all of it is sold to the DISCOM at a fixed feed-in tariff, and you pay for all your consumption separately at the standard retail tariff. Under net metering, self-consumed solar is implicitly valued at the retail tariff rate because it directly reduces your import bill. Under gross metering, every unit - whether self-consumed or not - is credited at the (usually lower) feed-in tariff."
  - q: "Can I switch from gross metering to net metering after installation?"
    a: "In most states, switching from gross metering to net metering requires a fresh application to the DISCOM, replacement of the export-only meter with a bidirectional meter, and approval under the current SERC net metering regulation. The process typically takes 45–90 days and involves a meter change cost of ₹2,000–₹15,000. States like Tamil Nadu that mandate gross metering for systems above 10 kW do not permit a switch to net metering without downsizing the system. Confirm the switching rules with your state SERC before assuming either direction is freely available."
  - q: "Does my inverter type affect which metering mode I can use?"
    a: "The inverter type itself - on-grid, hybrid, or off-grid - does not determine metering mode; the meter at your service connection does. However, a hybrid inverter with significant battery storage shifts your consumption profile so significantly that gross metering becomes financially unattractive in most scenarios: most generation is self-consumed or stored, so the gross FiT payment is small compared to the retail savings from battery-backed self-consumption. On-grid inverters with no storage export all midday surplus, making the net metering versus gross metering choice more consequential."
  - q: "What if my state offers both gross metering and net metering?"
    a: "States that offer both options - and a few do at different size thresholds - should be evaluated using the ROI calculation in this article. The key variable is the feed-in tariff rate for gross metering versus the retail tariff for net metering credits. If the gross FiT is within 85% of the retail tariff, gross metering may compete closely. If the FiT is below ₹3.50 per unit and your state's retail tariff is above ₹7 per unit, net metering delivers substantially better economics in virtually every scenario. Use the 5 kW worked example in this guide as a template with your state's actual figures."
  - q: "How is the gross metering feed-in tariff calculated?"
    a: "State SERCs set the gross metering feed-in tariff through periodic tariff orders, typically benchmarked to the average power purchase cost (APPC) of the DISCOM plus a small premium for renewable energy. As of 2026, most active gross FiT rates in India range from ₹2.50 to ₹4.50 per unit. Andhra Pradesh historically offered a high gross FiT of ₹3.50 per unit for residential solar under its earlier policy, but rates have been revised downward in subsequent tariff orders. The FiT is announced per financial year and is not automatically indexed to inflation or retail tariff increases."
  - q: "What happens to excess units at year-end under net metering?"
    a: "Year-end treatment varies by state. The majority of states carry net metering credits forward within the financial year (April through March) and settle any remaining credit at year-end at the average pooled power purchase cost - typically ₹3–₹4.50 per unit - rather than at the full retail tariff. Tamil Nadu lapses residual credits entirely at year-end. Karnataka and Maharashtra pay out residual credits in cash at APPC rates. A small number of states allow credits to carry forward into the next financial year. Always check your state SERC's current tariff order for the exact settlement mechanism before sizing your system."
  - q: "Is net metering available for systems above 10 kW in India?"
    a: "Most states allow net metering for residential and commercial systems well above 10 kW, up to the sanctioned load or a stated cap (commonly 500 kW to 1 MW). Tamil Nadu is the notable exception: the TANGEDCO regulation restricts retail-tariff net metering to systems of 10 kW or below, and mandates gross metering with a fixed FiT for residential systems above that threshold. Andhra Pradesh has had historical mandates for gross metering on larger systems. If you are sizing above 10 kW, verify your state SERC's size threshold before assuming net metering is available."
  - q: "Which is better for a residential homeowner - gross metering or net metering?"
    a: "For the vast majority of residential homeowners in India, net metering delivers superior economics. The core reason is that net metering implicitly values self-consumed solar at the full retail tariff (by reducing your import bill), while gross metering pays a feed-in tariff that is typically 40–60% of the retail tariff. A 5 kW residential system with good self-consumption in a retail-tariff net metering state can achieve payback in 4–6 years. The same system under gross metering with a ₹3.50 per unit FiT typically takes 7–10 years. Gross metering makes sense primarily when self-consumption is very low or when a state's feed-in tariff is unusually high."
  - q: "Does CERC 2023 change the net metering framework?"
    a: "The Central Electricity Regulatory Commission (CERC) notified revised regulations in 2023 that reinforced net metering as the preferred mechanism for rooftop solar below 500 kW and introduced net billing as an alternative framework where DISCOMs credit exports at a separate determined rate rather than at retail tariff. Several state SERCs - including those in Karnataka, Maharashtra, and Gujarat - updated their own regulations following the CERC 2023 framework. Net billing is not the same as gross metering: under net billing, self-consumed solar is still valued at retail tariff, but the export credit rate is set by the SERC independently rather than being equal to the retail tariff."
---

When you install a 5 kW rooftop solar system in India, one question determines whether your investment pays back in five years or ten: does your state meter all the electricity your panels generate, or only the surplus you export? That question separates gross metering from net metering, and the answer sits in your state SERC's tariff order, not in the brochure your installer handed you.

> **TL;DR**
> - Net metering credits only exported surplus against imports at the retail tariff; gross metering sells all generation to the DISCOM at a fixed feed-in tariff while you pay full consumption separately.
> - For a typical 5 kW Bengaluru system, net metering pays back in roughly 6.6 years versus roughly 25.5 years under gross metering at a ₹3.50/unit FiT.
> - Tamil Nadu mandates gross metering above 10 kW for residential systems; most other major states (Karnataka, Maharashtra, Gujarat, Kerala) offer retail-tariff net metering with no such cap.
> - CERC's 2023 regulations introduced net billing as a third mechanism, crediting exports at a SERC-set rate that can be lower than retail tariff while still valuing self-consumption at full retail.
> - Gross metering only makes financial sense for low-occupancy commercial premises, states with unusually high feed-in tariffs, or large C&I arrays with battery dispatch strategies.

Most buyers encounter the term "net metering" and assume it is the only option. A significant number of Indian states and system-size brackets, however, operate under gross metering frameworks where the billing mechanics are fundamentally different. Choosing the wrong metering mode (or not knowing which applies to your system) can add years to your payback period.

> **Gross vs net metering in India differs in one critical way: net metering credits your exported solar units against your import bill at the retail tariff, while gross metering sells every unit your system generates to the DISCOM at a fixed feed-in tariff, and you pay your full consumption bill separately.** For most residential homeowners, net metering delivers payback in 4–7 years versus 7–11 years under gross metering at current Indian feed-in tariff rates. The Metering Mode Decision Tree in this guide will confirm which option applies to your state and system size.

Both mechanisms require a [grid-tied inverter](/glossary/on-grid-inverter/) and a connection to the DISCOM's distribution network. The physical hardware is largely identical, what changes is the meter configuration and the financial model behind it. For a definitional overview, the [net metering glossary entry](/glossary/net-metering/) and the [gross metering glossary entry](/glossary/gross-metering/) cover the regulatory and technical definitions in full. This guide focuses on the financial trade-off and the policy landscape that governs your choice in 2026.

## What Is Net Metering and What Is Gross Metering: The Definitional Contrast

Understanding the two mechanisms at a precise level is the necessary starting point before any financial comparison. The difference is not just accounting, it changes the value you receive from every unit your panels generate.

### Net Metering: Only the Surplus Is Measured for Credits

Under net metering, your solar system is connected to your existing service connection on the load side of the [bidirectional meter](/glossary/bidirectional-meter/). As your panels generate during the day, power flows first to your household loads, lights, fans, refrigerator, air conditioners. This self-consumed solar never crosses the meter. Only when generation exceeds your instantaneous consumption does surplus flow backward through the meter and onto the distribution feeder.

The bidirectional meter records two registers: total units imported from the grid and total units exported to the grid. At each billing cycle, the DISCOM subtracts exports from imports. You pay only for the net units, hence the name. The credit rate for exported units is typically the retail tariff applicable to your consumption slab.

This design implicitly values every self-consumed solar unit at the retail tariff you would have paid to import it. A household consuming ₹9/unit at peak slab (BESCOM) and self-consuming 200 kWh of solar per month saves ₹1,800, without those units ever touching the billing system.

### Gross Metering: All Generation Is Measured and Sold

Under gross metering, the metering point sits between your solar inverter and your household distribution board. All electricity your system generates flows to the DISCOM's meter first. The DISCOM measures it all, pays you at the notified [feed-in tariff](/glossary/feed-in-tariff/) (FiT) per unit, and you then import electricity for your household loads at the standard retail tariff.

In practical terms: a 5 kW system generating 600 kWh in a month earns 600 × ₹3.50 = ₹2,100 in FiT payments. That same household importing 500 kWh for consumption pays 500 × ₹7 = ₹3,500 at retail tariff. Net position: ₹2,100 income minus ₹3,500 import bill = ₹1,400 out of pocket. Under net metering at the same retail tariff, a 5 kW system with 70% self-consumption would reduce the ₹3,500 bill to roughly ₹700, a ₹2,800 monthly benefit versus ₹1,400.

This is the core arithmetic that explains why gross metering is rarely the preferred option for residential buyers unless the FiT rate is unusually high or self-consumption is structurally very low.

| Dimension | Net Metering | Gross Metering |
| --- | --- | --- |
| **What is metered** | Only surplus export | All solar generation |
| **Credit/payment rate** | Retail tariff (₹5–₹9/unit in active states) | Fixed FiT (₹2.50–₹4.50/unit typically) |
| **Self-consumed solar value** | Implicit retail tariff offset | Paid at FiT rate (usually lower) |
| **Meter type** | Bidirectional (import + export registers) | Export-only generation meter |
| **Best for** | High self-consumption, daytime loads | Low self-consumption, large arrays with low daytime use |
| **Policy risk** | Export credit rate can change in tariff orders | FiT rate may be locked for a period (state-dependent) |
| **PM Surya Ghar eligible?** | Yes (for residential ≤10 kW in most states) | Yes (for systems meeting state criteria) |

## The Indian Policy Landscape: Which States Use Which Metering Model

India does not operate a single national metering standard. The Central Electricity Regulatory Commission (CERC) sets the framework; each state's [SERC](/glossary/serc/) translates it into local rules. The result is a patchwork in which the same 5 kW system would be metered differently in Tamil Nadu versus Karnataka.

> **17 GW.** India's total cumulative rooftop solar capacity as of 2025, with net metering being the dominant billing mechanism across residential installations. *Source - [Bridge to India Rooftop Solar Report](https://bridgetoindia.com/), 2025.*

The [CERC](/glossary/cerc/) 2023 Net Metering Regulations, available from [CERC's official order repository](https://www.cercind.gov.in/), reinforced net metering as the standard mechanism for systems below 500 kW and clarified the distinction between net metering (credits at retail tariff) and net billing (credits at a SERC-determined rate, potentially lower than retail). This is a critical policy shift: several states are migrating from retail-tariff net metering toward net billing, which structurally resembles gross metering in that the export credit rate is decoupled from the retail tariff.

The table below reflects the metering regime applicable to residential rooftop solar systems as of mid-2026. State SERC orders are revised annually; verify your current state tariff order on the [MNRE Rooftop Solar Programme portal](https://mnre.gov.in/) or your SERC's website before finalising system design.

| State | Dominant Metering Model | Export Credit Rate (Residential) | Size Threshold | Year-End Settlement |
| --- | --- | --- | --- | --- |
| **Karnataka** | Net Metering | Retail tariff (₹5.20–₹8.30/unit by slab) | Up to sanctioned load, max 500 kW | Cash out at APPC |
| **Maharashtra** | Net Metering | Retail tariff (₹3.59–₹11.19/unit by slab) | Up to sanctioned load, max 1 MW | Cash out at APPC |
| **Gujarat** | Net Metering | Retail tariff (₹3.85–₹5.15/unit by slab) | Up to contracted demand | Cash out |
| **Kerala** | Net Metering | Retail tariff (₹3.25–₹5.80/unit by slab) | Up to sanctioned load | Credits carry forward |
| **Tamil Nadu** | Net Metering (≤10 kW) / Gross Metering (>10 kW) | ≤10 kW: retail tariff; >10 kW: FiT ~₹3.00/unit | 10 kW threshold | Credits lapse at year-end |
| **Andhra Pradesh** | Gross Metering (historically) | Fixed FiT (~₹3.50/unit historically; subject to revision) | All residential categories | FiT payment per generation |
| **Telangana** | Net Metering | Retail tariff (₹2.90–₹9.95/unit by slab) | Up to sanctioned load | Monthly carry-forward |
| **Rajasthan** | Net Metering (APPC-rate) | APPC rate (~₹3.65/unit) | Up to sanctioned load, max 1 MW | Annual lapse |
| **Haryana** | Net Metering (APPC-rate) | APPC rate (~₹3.85/unit) | Up to sanctioned load, max 500 kW | Cash out |

Reading this table, the strongest net metering states for residential buyers are Karnataka, Maharashtra, Gujarat, and Kerala, all of which credit exports at the full retail tariff. Rajasthan and Haryana offer net metering but at APPC rates, which reduces the export benefit. Tamil Nadu applies a firm 10 kW threshold that pushes larger residential systems into gross metering territory.

## When Gross Metering Makes Financial Sense

Gross metering is often dismissed as inferior, but it is genuinely the better financial option in three specific scenarios. Misidentifying these scenarios leads to system designs that perform poorly against projections.

### Scenario 1: Very Low Daytime Self-Consumption

A system deployed on a commercial premises that is empty from 8 AM to 6 PM (a weekend-only business, a school during summer holidays, or a warehouse with weekend operations) has near-zero self-consumption during the solar window. Under net metering, nearly all generation is exported. The credit is at retail tariff. Under gross metering, all generation is sold at the FiT.

If the FiT is ₹3.50/unit and the retail tariff is ₹5.00/unit, gross metering pays 70% of what net metering would pay, but if self-consumption is only 10%, net metering would anyway credit 90% of generation at retail, and gross metering would pay 100% at FiT. The differential narrows. For systems where daytime occupancy is consistently below 15%, gross and net metering produce comparable financial outcomes within 10–15%.

### Scenario 2: States with Historically High Feed-In Tariffs

Andhra Pradesh set a gross FiT of ₹3.50/unit when the state retail tariff was ₹4.50–₹5.00/unit, a ratio of approximately 70–80%. At that ratio, gross metering is competitive for systems with moderate self-consumption (30–40%). States with high insolation (AP, Telangana, Rajasthan) that set FiTs above ₹3.50/unit can make gross metering viable for large rooftop arrays where the developer wants a guaranteed fixed-rate income stream rather than the variable benefit of retail-tariff crediting.

### Scenario 3: Large C&I Arrays with Battery Dispatch Logic

A commercial rooftop of 50–500 kW with significant battery storage can configure the system to self-consume maximally through peak hours and export precisely during grid stress events when the FiT is highest. For sophisticated operators with load management systems, gross metering on the export channel (with a separate battery circuit) allows precise optimisation. This is more applicable to C&I buyers than to residential homeowners, but it represents a legitimate scenario where gross metering's predictability is commercially useful.

- **Low-occupancy premises**: Warehouses, schools, weekend-use commercial, and industrial plants with shift operations that shut down solar hours.
- **States with FiT-to-retail-tariff ratio above 70%**: Where the FiT premium narrows the gap enough that gross metering's fixed-rate certainty is worth the modest economic cost.
- **Large arrays (50 kW+) with professional operators**: C&I buyers seeking predictable generation-linked revenue streams rather than variable bill credit management.
- **Battery-heavy hybrid systems with export strategies**: Where self-consumption is maximised by the battery and only excess is exported at the gross FiT rate.

## When Net Metering Makes Financial Sense

For the typical residential homeowner in India (with a 3–10 kW system, daytime household load from appliances and a work-from-home member, and a grid-connected on-grid inverter) net metering is the financially superior option in virtually every scenario.

The mechanism's power is in the implicit valuation of self-consumed solar. Every unit you generate and consume in your home is valued at your full retail tariff, the top of whichever slab your consumption falls in. For a household at the ₹9/unit BESCOM slab, self-consumed solar is worth ₹9/unit without any billing credit mechanism at all. Net metering then adds export credits at the same tariff for surplus, so the system's financial performance compounds across both self-consumption savings and export earnings.

- **High self-consumption profile**: Households where cooking, HVAC, water heating, and office equipment operate during solar hours (9 AM to 4 PM) benefit most.
- **Retail-tariff net metering states**: Karnataka, Maharashtra, Gujarat, Kerala, and Telangana all credit exports at retail tariff, delivering the maximum financial benefit per exported unit.
- **Residential systems of 1–10 kW**: The PM Surya Ghar subsidy eligibility reinforces net metering as the preferred residential mechanism, with the subsidy directly linked to DISCOM commissioning under net metering.
- **States with good DISCOM compliance**: Net metering works best where the DISCOM reliably reads the bidirectional meter and credits exports correctly. States with strong SERC consumer protection rules (Karnataka, Gujarat, Maharashtra) have better compliance records.
- **On-grid inverters without battery**: Without a battery, daytime surplus has only one productive outlet: the grid. Net metering monetises that outlet at the highest possible rate.

The comprehensive [net metering India complete guide](/blog/net-metering-india-complete-guide/) covers the full application process, state-specific DISCOM rates, and the 4-Layer Net Metering ROI Stack framework for calculating your true payback.

## The Metering Mode Decision Tree: 3 Questions to Pick the Right Option

This proprietary framework replaces the need to read through five years of SERC orders. Answer three questions in sequence and your optimal metering mode becomes clear.

### The Metering Mode Decision Tree

1. **What is your state's metering rule for your system size?**
   Start here because the regulatory environment is not always a choice. If your state mandates gross metering above a size threshold (Tamil Nadu above 10 kW, or Andhra Pradesh for certain categories), you have no decision to make, the regulation decides. Confirm your state SERC's current tariff order before proceeding. If your state offers net metering at retail tariff for your system size, advance to Question 2.

2. **What percentage of your solar generation do you consume on-site during solar hours?**
   Estimate your daytime consumption (8 AM to 5 PM on weekdays) as a fraction of your expected solar generation. Use your electricity bill's monthly consumption and assume 70% of daily consumption occurs in this window for a typical household. If daytime self-consumption exceeds 40% of generation, net metering will almost certainly outperform gross metering at any FiT below ₹5/unit. If daytime self-consumption is below 15% (office or warehouse with no daytime occupancy), re-evaluate using Question 3.

3. **What is the gross FiT rate as a percentage of your retail tariff?**
   Divide your state's current gross FiT rate by your retail tariff rate (use the rate at which you are billed, not the lowest slab). If the ratio is above 85%, gross metering may be competitive. If the ratio is below 70%, net metering delivers materially better financial returns regardless of self-consumption profile. Below 60% (which covers most of India in 2026) net metering is the dominant choice.

Before applying the tree, it helps to run your own rooftop and monthly bill through a [solar savings calculator](https://heavengreenenergy.com/solar-calculator/) to get a rough generation and consumption baseline. Apply the tree to a worked example: a homeowner in Chennai (TANGEDCO) planning a 12 kW system. Question 1, Tamil Nadu mandates gross metering above 10 kW for residential, so the decision is made. Question 2 and 3 are moot. Now the same homeowner downsizes to 10 kW, Question 1 confirms net metering is available. Question 2: the family is home during solar hours, self-consumption is ~55%. Question 3: TANGEDCO retail tariff is ₹6/unit, gross FiT would be ₹3.00/unit (50% ratio). Answer: net metering at 10 kW is the clear winner.

## 5 kW System ROI: Net Metering vs Gross Metering Payback Calculation

A worked example at realistic Indian rates makes the abstract financial difference concrete. The assumptions below are conservative and state-agnostic; adapt the tariff figures to your actual state.

**System parameters:** 5 kW on-grid solar system, Bengaluru (Karnataka / BESCOM jurisdiction), 5.5 peak sun hours per day.

**Monthly generation:** 5 kW × 5.5 h × 30 days × 0.80 system efficiency = **660 kWh/month**

**Self-consumption assumption:** 65% of generation consumed on-site = 429 kWh self-consumed; 231 kWh exported.

**Retail tariff (BESCOM average for this consumption level):** ₹7.00/unit import.

**Gross FiT (for illustration, at AP-equivalent rate):** ₹3.50/unit.

> **₹4.42 Lakh.** Indicative installed cost of a 5 kW on-grid solar system in India in 2026, before PM Surya Ghar subsidy of ₹78,000 (capped at 3 kW). Net effective outlay after subsidy: approximately ₹3.64 Lakh. *Source - [Mercom India Residential Solar Cost Tracker](https://www.mercomindia.com/), 2026.*

### Net Metering Scenario

| Component | Calculation | Monthly Value |
| --- | --- | --- |
| Self-consumption savings | 429 kWh × ₹7.00/unit | ₹3,003 |
| Export credit | 231 kWh × ₹7.00/unit (retail tariff credit) | ₹1,617 |
| **Total monthly benefit** | | **₹4,620** |
| **Annual benefit** | | **₹55,440** |
| **Net effective system cost** | ₹4,42,000 − ₹78,000 subsidy | **₹3,64,000** |
| **Payback period** | ₹3,64,000 ÷ ₹55,440/year | **~6.6 years** |

### Gross Metering Scenario

| Component | Calculation | Monthly Value |
| --- | --- | --- |
| Gross FiT payment | 660 kWh × ₹3.50/unit | ₹2,310 |
| Import bill (full consumption) | 500 kWh × ₹7.00/unit | −₹3,500 |
| **Net monthly position** | | **−₹1,190 (net cost)** |
| **Monthly benefit vs no solar** | Before solar, bill = ₹3,500; after = ₹3,500 − ₹2,310 FiT = ₹1,190 net benefit | **₹1,190** |
| **Annual benefit** | | **₹14,280** |
| **Net effective system cost** | ₹4,42,000 − ₹78,000 subsidy | **₹3,64,000** |
| **Payback period** | ₹3,64,000 ÷ ₹14,280/year | **~25.5 years** |

At a ₹3.50/unit FiT versus ₹7.00/unit retail tariff, the payback gap is enormous. Even if the gross FiT were raised to ₹5.00/unit, payback under gross metering would be approximately 12 years, still nearly double the net metering result. The worked example illustrates why residential buyers in net metering states should never voluntarily choose gross metering.

The caveat: this calculation assumes BESCOM retail-tariff net metering. In Rajasthan (APPC-rate net metering at ₹3.65/unit), the net metering payback extends to ~12 years, much closer to gross metering in that state. The decision tree in the previous section accounts for this through Question 3 (FiT-to-retail-tariff ratio).

For a deeper analysis of payback across all system sizes and state tariff environments, the [solar inverter payback period guide](/blog/solar-inverter-payback-period-in-india/) covers 1 kW to 50 kW scenarios with state-specific tariff inputs. Installers who need to run this net-versus-gross calculation across many customer tariff slabs rather than one worked example can automate it with a [solar financial modelling tool](https://surgepv.com/generation-financial-tool/) instead of rebuilding the spreadsheet each time. For broader residential solar economics across India, [JMK Research's India Rooftop Solar Annual Report](https://jmkresearch.com/) tracks installation costs, DISCOM performance, and tariff trends by state.

## State-by-State Verdict: Net Metering vs Gross Metering Best Choice

Not every state offers a choice. Where the state mandates one mechanism, the decision is made for you. Where a choice exists, this section gives the recommended option with a brief rationale.

### Karnataka (BESCOM, GESCOM, HESCOM)

**Verdict: Net Metering, strongly preferred.**

Retail-tariff export crediting across all slabs (₹5.20–₹8.30/unit) delivers the highest effective compensation for exports among major Indian DISCOMs. Self-consumption is valued at the same retail rate. Payback periods of 4–6 years are achievable for a well-sized residential system. No state-level size threshold mandates gross metering for residential customers below 500 kW.

### Maharashtra (MSEDCL, Tata Power, BEST, Torrent Pune)

**Verdict: Net Metering, strongly preferred.**

Maharashtra's retail tariff for upper-slab consumers reaches ₹11.19/unit, making solar self-consumption extremely valuable. Export credits at retail tariff and a cash-out settlement at year-end make this the most commercially attractive net metering regime in India for high-consumption households. Systems of 5–10 kW can see payback periods of 3.5–5 years after PM Surya Ghar subsidy.

### Gujarat (Torrent, PGVCL, DGVCL)

**Verdict: Net Metering, preferred.**

Retail-tariff export crediting (₹3.85–₹5.15/unit) is in place. Gujarat also has strong solar irradiance (5.5–6.0 peak sun hours), making systems more productive. Gujarat's state subsidy supplements the central PM Surya Ghar amount for eligible categories. A well-sized system delivers payback in 5–7 years.

### Kerala (KSEB)

**Verdict: Net Metering, preferred.**

KSEB offers retail-tariff crediting and a straightforward application process. Kerala's tariff slab structure means self-consumed solar at peak consumption avoids the highest ₹5.80/unit slabs. Self-consumption is typically high in Kerala households due to year-round occupancy patterns and weather-driven AC loads.

### Tamil Nadu (TANGEDCO)

**Verdict: Net Metering for ≤10 kW; Gross Metering is the only option for >10 kW residential.**

TANGEDCO's hard 10 kW threshold is the most consequential state-level restriction in India. For households below that threshold, net metering at retail tariff is available and preferred. Above 10 kW, the TANGEDCO gross FiT (approximately ₹3.00/unit) applies to all generation. The financial difference is stark, do not upsize beyond 10 kW in Tamil Nadu without explicitly modelling the gross metering economics.

### Andhra Pradesh (APSPDCL, APEPDCL)

**Verdict: Check the current SERC tariff order first.**

AP has had a history of gross metering for residential solar at a historically higher FiT rate. As of 2026, the state has undergone regulatory revisions. The current mechanism and rate must be verified against the APSPDCL/APEPDCL website before committing to any system design. If net metering has been introduced for smaller residential systems, it will be preferable at current tariff levels.

### Rajasthan (JVVNL, AVVNL, JDVVNL)

**Verdict: Net Metering, preferred, but APPC-rate crediting limits the upside.**

APPC-rate export crediting (~₹3.65/unit) reduces the financial advantage of net metering compared to retail-tariff states. However, net metering still outperforms gross metering because APPC crediting still captures the self-consumption savings at full retail tariff. The net metering payback is approximately 10–13 years in Rajasthan, longer than retail-tariff states but still shorter than a gross metering alternative.

## CERC 2023 Regulations and the Shift Toward Net Billing

The [CERC](/glossary/cerc/) 2023 Net Metering and Net Billing Regulations introduced a distinction that will reshape the Indian residential solar landscape over the next three to five years. Understanding this shift matters for anyone planning a system today.

Under the CERC 2023 framework:

- **Net metering** (traditional) credits exports at the retail tariff, the same rate you pay for imports. This is the most consumer-friendly mechanism.
- **Net billing** credits exports at a SERC-determined rate, which may be lower than the retail tariff. This rate is called the "prosumer tariff" in some state orders. Net billing is structurally similar to gross metering in that the export credit rate is decoupled from the retail tariff, but different in that self-consumed solar is still implicitly valued at retail because it reduces your import bill.
- **Gross metering** is not the same as net billing, despite the superficial similarity. Under gross metering, all generation is metered and paid at FiT regardless of self-consumption. Under net billing, only exports are metered for credit at the prosumer tariff; self-consumption is not billed.

The practical implication: states migrating from net metering to net billing will reduce the value of exports while preserving the value of self-consumption. This strengthens the case for systems designed to maximise self-consumption (higher daytime loads, battery storage, demand-response integration) and weakens the case for export-heavy oversized systems.

> According to [Mercom India's policy tracking](https://www.mercomindia.com/), at least six state SERCs initiated consultations on net billing frameworks in 2024–2025, following the CERC 2023 regulations. The direction of travel is toward export credit rates below retail tariff, making system sizing for self-consumption even more important than it is today.

For residential buyers making a system decision in 2026, the implication is clear: size for maximum self-consumption, not maximum export. A 3–5 kW system that offsets 80–90% of your daytime consumption is more resilient to policy shifts than a 10 kW system sized to maximise exports under current retail-tariff net metering rules.

The full comparison of [on-grid vs hybrid vs off-grid system types](/blog/on-grid-vs-hybrid-vs-off-grid-decision-guide/) covers how system architecture choices interact with metering policy, including which inverter type performs best under each metering regime.

## Common Mistakes When Choosing Between Gross and Net Metering

Several recurring errors cost residential buyers thousands of rupees annually, either in foregone credits or in system designs that do not match the applicable metering regime.

- **Assuming net metering is always available**: Tamil Nadu's 10 kW threshold is the most common example, but other states have category-specific rules. Always verify the state SERC regulation for your specific connection type (domestic, commercial, industrial) and system size before finalising the design.

- **Ignoring the export credit rate**: Net metering is not equally valuable in all states. APPC-rate net metering in Rajasthan (₹3.65/unit) is very different from retail-tariff net metering in Karnataka (₹8.30/unit for the highest slab). Buyers who compare states by "net metering availability" without comparing rates miss the most consequential variable.

- **Oversizing for export under a changing policy**: The CERC 2023 shift toward net billing signals that retail-tariff export credits may not persist for the next 10 years. Systems sized for high export ratios (above 50% of generation exported) face policy risk. Sizing for 70–80% self-consumption provides a more durable financial base.

- **Confusing gross metering with net billing**: These are distinct mechanisms. A DISCOM that migrates from retail-tariff net metering to net billing is not imposing gross metering. Self-consumption savings are preserved under net billing; they are not under gross metering. The distinction matters for financial modelling.

- **Not reading the year-end credit treatment**: Tamil Nadu lapses year-end credits. A 10 kW system generating 30% excess annually in Tamil Nadu is giving away electricity at year-end. Size the system to match annual consumption, not to maximise generation.

- **Skipping DISCOM application sequencing**: Whether you are applying for net metering or gross metering, installing before DISCOM approval risks rejection in most states. The [PM Surya Ghar apply online guide](/blog/pm-surya-ghar-apply-online/) walks through the correct sequencing for the national portal application that feeds into DISCOM processing.

The [PM Surya Ghar complete guide](/blog/pm-surya-ghar-yojana-complete-guide/) covers the subsidy programme that applies to both net metering and gross metering residential installations, including documentation, eligibility, and the state-by-state nodal agency contacts.

## Where Qbits Fits in Your Metering Setup

Whether your installation is metered on a net or gross basis, the inverter at the centre of the system determines how reliably it performs, how accurately it reports, and how long it survives on an Indian rooftop. The billing mechanism changes; the operating environment does not.

Qbits on-grid inverters, the TLS and TLD series, from 1.5 kW to 50 kW, are ALMM-listed, BIS IS 16169 certified, and IEC 62116 anti-islanding compliant. They meet every requirement for DISCOM commissioning under both net metering and gross metering frameworks, and they are eligible for PM Surya Ghar subsidy disbursement across all states. IP66 weather protection handles the full range of Indian climate conditions: coastal humidity in Kerala and Tamil Nadu, extreme summer temperatures in Rajasthan and Gujarat, and monsoon-driven moisture in Maharashtra and Karnataka. The 12-year full replacement warranty ensures your metering credits accumulate for well past the payback horizon, with no surprise inverter replacement cost in year 6 or 8.

AI-powered WhatsApp monitoring on every Qbits inverter gives you a live generation report on your phone each day, so you can cross-check your gross generation log against your DISCOM's FiT payment (under gross metering) or your bidirectional meter's export register (under net metering), and catch discrepancies in the first billing cycle rather than a year later.

- **[On-Grid Inverters](/on-grid-inverter/)**: TLS and TLD series, ALMM-listed and PM Surya Ghar eligible, suitable for net metering and gross metering installations from 1.5 kW to 50 kW.
- **[Hybrid Inverters](/hybrid-inverter/)**: HS and HT series for buyers who want battery readiness and backup alongside their grid-tied metering arrangement.
- **[Residential Solar Solution](/residential-solution/)**: a full overview of how Qbits approaches system design, DISCOM coordination, and post-installation monitoring for homeowners.
- **[Why Qbits](/why-qbits/)**: the complete case for 12-year warranty, IP66, AI WhatsApp monitoring, and Made-in-India manufacturing in one place.

[Talk to a Qbits engineer](/contact-us/) about metering mode eligibility in your state and system sizing, most residential site assessments and quotations are returned within 24 hours, with a clear recommendation on whether net metering or gross metering applies to your connection and what payback period to expect at your specific tariff level.
