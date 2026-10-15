---
term: "LCOE"
title: "LCOE (Levelised Cost of Energy): Definition, Calculation & Solar Applications"
description: "LCOE is the lifetime cost of electricity from a solar plant. Full guide to calculation and Indian benchmarks."
category: "Finance"
categorySlug: "finance"
priority: "P0"
updatedDate: 2026-10-14
keywords:
  - what is lcoe
  - levelised cost of energy
  - lcoe calculation
  - solar lcoe india
  - lcoe formula
shortDefinition: "Levelised Cost of Energy (LCOE) is the per-kWh cost of electricity averaged over the entire lifetime of a solar plant, including capex, opex, financing and degradation. IRENA put India's utility-scale solar LCOE at about USD 0.038 per kWh (roughly ₹3.2) for 2024 projects, while an illustrative 50 kW C&I rooftop plant works out to about ₹4.8 per kWh."
quickFacts:
  industry: "Project Finance"
  primaryUse: "Lifetime cost benchmark for solar generation"
  commonUsers: "Developers, financiers, regulators, customers"
  relevantStandards: "CERC methodology, IEA LCOE conventions"
  relatedTechnologies: "Capex modelling, discounted cash flow, yield modelling"
relatedTerms:
  - { slug: "capex", term: "CAPEX" }
  - { slug: "opex", term: "OPEX" }
  - { slug: "irr", term: "IRR" }
  - { slug: "ppa", term: "Power Purchase Agreement" }
  - { slug: "payback-period", term: "Payback Period" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "cuf", term: "CUF" }
  - { slug: "degradation", term: "Module Degradation" }
  - { slug: "feed-in-tariff", term: "Feed In Tariff" }
  - { slug: "discount-rate", term: "Discount Rate" }
  - { slug: "resco", term: "RESCO" }
  - { slug: "wacc", term: "WACC" }
faqs:
  - q: "What is LCOE in simple words?"
    a: "What it costs you per unit of electricity from a solar plant over its whole life, including capex, operating costs, financing and accounting for degradation. The big single number for solar economics."
  - q: "What is the formula for LCOE?"
    a: "LCOE = (sum of discounted costs over life) / (sum of discounted energy over life). Discounted at the project's cost of capital."
  - q: "What is the current Indian solar LCOE?"
    a: "Utility scale: IRENA reports about USD 0.038 per kWh for Indian solar PV projects commissioned in 2024, roughly ₹3.2 per kWh at an assumed ₹84 per USD. Rooftop depends on size and installed cost. In this site's worked example, a 50 kW C&I plant at ₹55,000 per kWp and a 9 percent discount rate has an LCOE of about ₹4.79 per kWh, and ₹4.0 to ₹6.0 when CAPEX, sunshine hours and discount rate are varied (see the LCOE of Solar in India post). A 3 kW home system at ₹55,000 to ₹70,000 per kWp models at about ₹4.8 to ₹5.9 per kWh without subsidy, and about ₹2.9 to ₹4.0 with the ₹78,000 PM Surya Ghar subsidy deducted from upfront cost. The rooftop figures are illustrative, so replace the inputs with your own quote."
  - q: "How is LCOE different from tariff?"
    a: "LCOE is what it costs to produce. Tariff is what the customer pays. PPA tariff for utility solar approaches LCOE plus a margin."
  - q: "Why has Indian solar LCOE fallen?"
    a: "Module and system costs fell sharply, and competitive auctions passed the savings on. The CERC-determined tariff for solar PV in 2010-11 was ₹17.91/kWh, JNNSM Batch 1 bids came in at ₹10.95 to ₹12.76/kWh, and the record-low SECI auction bid in November 2020 was ₹2.00/kWh. IRENA reports a utility-scale solar LCOE for Indian projects commissioned in 2024 of about USD 0.038 per kWh, below its global average of USD 0.043."
  - q: "Does LCOE include subsidy?"
    a: "Convention varies. Pre-subsidy LCOE shows the true cost. Post-subsidy LCOE shows the customer's effective cost. State both when reporting."
  - q: "Why does utility LCOE beat rooftop?"
    a: "Utility plants get scale economies, lower per-watt installation cost, low-cost financing and higher yield. Rooftop scale is small, customer financing is more expensive."
  - q: "Does LCOE include financing cost?"
    a: "Yes. The discount rate in LCOE reflects the weighted average cost of capital (WACC), including debt and equity."
  - q: "Is LCOE the same as PPA tariff?"
    a: "Not exactly. PPA tariff is the negotiated price. LCOE is the underlying cost. PPA tariff is usually slightly above LCOE to give the developer profit margin."
  - q: "Does LCOE account for degradation?"
    a: "Yes. The energy denominator declines year by year due to module degradation, raising LCOE."
  - q: "What is the typical WACC for Indian utility solar?"
    a: "8 to 10 percent. Falling as projects become more bankable."
  - q: "Is LCOE used in tariff orders?"
    a: "Yes. CERC and SERCs model LCOE to set benchmark tariffs."
  - q: "Does LCOE include storage?"
    a: "Pure solar LCOE excludes storage. Solar-plus-storage LCOE adds battery capex and ageing costs."
  - q: "How does CUF affect LCOE?"
    a: "Higher CUF means more energy in the denominator, lowering LCOE. Doubling CUF roughly halves LCOE if costs are unchanged."
  - q: "How is residential LCOE calculated without a PPA?"
    a: "Residential LCOE is computed as system capex plus 25-year O&M, divided by 25-year discounted energy. Compared to retail tariff to compute payback."
author: "Akash Hirapara"
---

## What is LCOE

> [!KEYTAKEAWAYS]
> - LCOE is the per-kWh cost of electricity from a plant over its full life, with [CAPEX](/glossary/capex/), [OPEX](/glossary/opex/), financing and degradation all discounted to present value.
> - Indian solar costs have fallen sharply: the 2010-11 CERC benchmark tariff was ₹17.91/kWh, and IRENA puts India's utility-scale LCOE for 2024 projects at about USD 0.038/kWh (roughly ₹3.2). An illustrative 50 kW C&I rooftop plant models at about ₹4.8/kWh (₹4.0-6.0 across sensitivities).
> - The discount rate used is the project's [WACC](/glossary/wacc/), typically 8 to 10 percent for Indian utility solar.
> - LCOE is the underlying cost basis for [PPA](/glossary/ppa/) tariff discovery, distinct from the negotiated tariff itself, which sits slightly above LCOE.
> - Higher [CUF](/glossary/cuf/) and lower [module degradation](/glossary/degradation/) both push LCOE down, since more lifetime energy sits in the denominator.

Levelised Cost of Energy (LCOE) is the per-kWh cost of electricity from a generation plant, averaged over its entire operating life, with all costs and all energy discounted to present value. It is the standard metric for comparing the cost of different generation technologies and the basis for PPA tariff setting, regulatory benchmarking and investment decisions.

LCOE accounts for [CAPEX](/glossary/capex/), fixed and variable [OPEX](/glossary/opex/), financing cost, fuel cost (zero for solar), expected lifetime energy generation and [degradation](/glossary/degradation/). It produces a single number expressed in ₹/kWh that captures the full lifecycle cost of generation.

For Indian solar, the 2010-11 CERC benchmark tariff was ₹17.91 per kWh, and IRENA's *Renewable Power Generation Costs in 2024* puts the LCOE of Indian utility-scale solar PV commissioned in 2024 at about USD 0.038 per kWh, roughly ₹3.2 at an assumed ₹84 per USD. Rooftop LCOE is higher because of scale. In the illustrative worked example, a 50 kW C&I rooftop plant at ₹55,000 per kWp has an LCOE of about ₹4.79 per kWh (₹4.0 to ₹6.0 across the sensitivity ranges), and a 3 kW home system models at about ₹4.8 to ₹5.9 per kWh without subsidy. See [LCOE of Solar in India: ₹4.8/kWh for a 50 kW C&I Plant](/blog/lcoe-solar-india/) for the full capex-to-LCOE calculation, with its inputs and sensitivity tables, on a commercial rooftop.

## LCOE explained simply

If you build a solar plant and run it for 25 years, the LCOE is the price per unit of electricity you would need to charge to cover all your costs (construction, financing, operating, degradation) and just break even. Below that price you lose money. Above that price you profit.

The big advantage of LCOE is it boils 25 years of solar economics into one number you can compare against other generation sources or against retail electricity tariffs.

## Why LCOE matters

PPA tariff setting. SECI bids and [CERC](/glossary/cerc/) tariff orders use LCOE as the underlying methodology.

Investment decision. Developers compare projected LCOE against expected [Power Purchase Agreement](/glossary/ppa/) prices, work [SurgePV's solar financial modelling tools](https://surgepv.com/generation-financial-tool/) are built to run at the proposal stage.

Customer economics. Residential and C&I solar customers compare LCOE to their retail tariff, a comparison [QuickEstimate's pricing and cost estimation tool](https://quickestimate.co/pricing/) is built to surface during the quotation stage. For the return-side counterpart to this comparison, see [Solar IRR and Payback for C&I in India, Real Math](/blog/solar-irr-payback-ci-india/).

Technology comparison. Solar against other sources on a like-for-like cost basis, using sourced figures for each.

Regulatory benchmarking. State SERCs use LCOE to validate proposed FIT levels.

Lifecycle visibility. Captures the 25-year asset behaviour, not just upfront cost.

## How LCOE is calculated

> [!FORMULA]
> LCOE = Σ (Costs_t / (1+r)^t) / Σ (Energy_t / (1+r)^t)

Where:
- Costs_t = total costs in year t (capex, O&M, financing)
- Energy_t = energy generated in year t (declining with degradation)
- r = discount rate (typically WACC)
- t = year (0 to 25 for solar)

Inputs needed:
- Total capex (upfront)
- Annual O&M (₹/kWp/year)
- Initial year-1 energy generation (kWh)
- Annual degradation rate
- Discount rate (WACC)
- Plant life (25 years standard for solar)

## Technical deep dive

### Indian utility solar LCOE breakdown (illustrative model)

The breakdown below is an illustrative model built on the inputs in the next table. It is not a published benchmark. For a sourced figure, IRENA's 2024 edition reports about USD 0.038 per kWh (roughly ₹3.2 at an assumed ₹84 per USD) for Indian utility-scale solar PV, and its installed cost of about USD 525 per kW is the lowest of any country it tracked that year.

Table: Indian utility solar LCOE breakdown by cost component (illustrative model, not a published benchmark)

| Component | Contribution to ₹/kWh |
|---|---|
| Module capex | 0.80 to 1.00 |
| BOS capex | 0.50 to 0.70 |
| Installation labour | 0.10 to 0.15 |
| Financing cost | 0.60 to 0.90 |
| O&M | 0.20 to 0.30 |
| Land + civil | 0.10 to 0.20 |
| Insurance and overheads | 0.10 to 0.15 |
| Total LCOE | 2.40 to 3.40 |

### LCOE inputs for Indian utility solar

Table: Assumed LCOE inputs for the illustrative Indian utility solar model

| Parameter | Typical value |
|---|---|
| Capex (₹ Cr/MW) | 3.5 to 4.5 |
| Annual O&M (₹ Lakh/MW) | 5 to 8 |
| Year 1 [yield](/glossary/solar-yield/) (kWh/kWp) | 1,650 to 1,800 |
| Degradation (%/year) | 0.50 to 0.55 |
| Plant life (years) | 25 |
| [WACC](/glossary/wacc/) (%) | 8 to 10 |

### Sensitivity

Table: Sensitivity of utility solar LCOE to changes in key inputs

| Input change | LCOE impact (₹/kWh) |
|---|---|
| Capex +10% | +0.25 to 0.35 |
| O&M +20% | +0.05 to 0.07 |
| Yield -10% | +0.27 to 0.35 |
| WACC +1% | +0.15 to 0.25 |
| Degradation +0.1%/year | +0.04 to 0.06 |

### Solar compared with other sources

Table: Utility solar LCOE next to diesel generation cost per kWh

| Source | Cost ₹/kWh |
|---|---|
| Utility solar (no storage) | IRENA 2024: about 3.2; 2.5 to 3.5 in this page's illustrative model |
| Diesel genset (fuel only, for comparison) | About 24 to 30 (diesel at ₹95 to ₹104 per litre on 14 October 2026, 3.5 to 4.0 kWh per litre; [CarDekho](https://www.cardekho.com/diesel-price)) |

Wind, coal, gas, nuclear and solar-plus-storage LCOE rows were removed from this page because no dated primary source for Indian figures could be reached. Use CEA, CERC tariff orders or IRENA's country data for those comparisons.

> [!IMPORTANT] Compare like with like
> The 2.5 to 3.5 ₹/kWh illustrative utility solar range (IRENA's 2024 India figure is about ₹3.2) is for a plant without storage. Comparing bare solar LCOE with a firm, dispatchable source such as coal or gas, without a storage or firming adjustment, flatters solar. The diesel figure covers fuel only, so it understates the true genset cost.

## Real-world applications

SECI utility solar PPA tariff discovery.

Project finance modelling.

State SERC tariff orders.

Customer-facing solar economics.

Wind-solar hybrid project structuring.

Solar-plus-storage tariff design.

## Advantages

Single number, easy to communicate.

Lifecycle visibility.

Standard methodology globally.

Direct comparison across technologies.

Bankable input for project finance.

## Limitations

Sensitive to assumptions (WACC, yield, life).

Pre vs post-tax variations.

Subsidy treatment varies.

Storage and grid services add complexity.

Does not capture grid-service value.

## Common problems

WACC assumed too aggressively, understating LCOE.

Yield projections too optimistic.

Degradation underestimated.

O&M cost escalation ignored.

End-of-life replacement cost not included.

Land cost variable across regions, hard to standardise.

## Best practices

Use validated WACC (8 to 10 percent for Indian utility solar).

Apply P50 yield with realistic degradation.

Document assumptions transparently.

Sensitivity-test the LCOE outcome.

Compare pre-subsidy and post-subsidy LCOE separately.

Update LCOE as capex and tariff trajectories shift.

## Comparison: LCOE by project type (Indian, 2026)

The utility row is IRENA's 2024 figure plus the illustrative model range. The C&I and residential rows are calculated with the same method as the [LCOE of Solar in India](/blog/lcoe-solar-india/) post: ₹750 per kWp per year O&M escalating 3 percent, 0.5 percent annual degradation, 9 percent discount rate, 25 years and 1,423 kWh per kWp in Year 1 (5.0 peak sun hours, 0.78 performance ratio). C&I is a 50 kW plant at ₹55,000 per kWp for the baseline, with ₹45,000 to ₹65,000 per kWp, 4.0 to 6.0 peak sun hours and 7 to 12 percent discount rates in the sensitivity runs. Residential is a 3 kW system at ₹55,000 to ₹70,000 per kWp, with the ₹78,000 subsidy deducted from upfront cost in the subsidised row. These are illustrative models, not quotations.

Table: LCOE by solar project type in India, 2026 (illustrative models except the IRENA utility figure)

| Project type | LCOE ₹/kWh |
|---|---|
| Utility solar | 2.5 to 3.5 (IRENA 2024: about 3.2) |
| C&I rooftop (50 kW) | about 4.8 baseline, 4.0 to 6.0 across sensitivities |
| Residential rooftop (3 kW) with [PM Surya Ghar](/glossary/pm-surya-ghar/) subsidy | 2.9 to 4.0 |
| Residential rooftop (3 kW) without subsidy | 4.8 to 5.9 |

## Indian market context

Indian utility solar tariffs fell steeply through auctions. The CERC-determined tariff for solar PV in 2010-11 was ₹17.91/kWh without accelerated depreciation, and JNNSM Batch 1 reverse-auction bids that year ran ₹10.95 to ₹12.76/kWh with a weighted average of about ₹12.12/kWh ([World Bank/ESMAP review of JNNSM Phase I](https://documents1.worldbank.org/curated/en/164861468049776027/pdf/832660REPLACEM0X0ESM0ESMAP00PUBLIC0.pdf)). On 23 November 2020 SECI's 1,070 MW Rajasthan Tranche-III auction set a record-low bid of ₹2.00/kWh ([Mercom India](https://www.mercomindia.com/india-record-lowest-solar-tariff)). In October 2025 SECI concluded a 2,000 MW solar plus 1,000 MW/4,000 MWh storage auction at ₹2.86/kWh ([pv magazine](https://www.pv-magazine.com/2025/10/16/indias-solar-plus-storage-tender-sets-record-low-inr-2-86-tariff/)); that price includes storage and is not comparable with a bare solar tariff. Tariff is a discovered price and is not the same as LCOE.

```chart
type: bar
title: Indian utility solar tariffs, 2010 benchmark, 2010 auction average and 2020 record low
unit: "₹/kWh"
source: "2010-11 CERC benchmark and JNNSM Batch 1 weighted average bid (World Bank/ESMAP review of JNNSM Phase I); November 2020 record-low bid in SECI 1,070 MW Rajasthan Tranche-III auction (Mercom India, 23 Nov 2020)"
note: "Three points only, not a continuous series. Tariff is a benchmark or auction price, not LCOE."
data:
  - { label: "2010 CERC benchmark", value: 17.91 }
  - { label: "2010 Batch 1 average bid", value: 12.12 }
  - { label: "2020 record-low bid", value: 2.00 }
```

CERC Tariff Regulations 2024 use LCOE methodology for benchmark tariff setting.

State SERCs publish LCOE-based feed-in tariffs for distributed solar.

RTC (Round-The-Clock) solar plus storage projects under SECI tenders use composite LCOE.

Subsidised residential LCOE can be compared with your state's retail tariff slab; the result depends on installed cost, yield and slab, so run it with your own quote.

## Standards and certifications

Table: Methodologies and references behind LCOE

| Standard | Scope |
|---|---|
| CERC Tariff Regulations | Indian LCOE methodology |
| IEA LCOE conventions | International standard |
| NREL LCOE Calculator | Reference model |
| IRENA LCOE methodology | Global benchmark |

## Common mistakes

Underestimating WACC, producing optimistic LCOE.

Ignoring degradation, overstating lifetime energy.

Skipping insurance, overheads, contingency in capex.

Treating subsidy as cost reduction rather than transfer.

Comparing solar LCOE to a firm source such as coal without a storage or firming adjustment.

Using nominal vs real LCOE inconsistently.

## Key takeaways

LCOE is the lifetime cost of electricity from a solar plant, expressed in ₹ per kWh. Indian solar costs have fallen sharply: IRENA puts India's utility-scale solar LCOE for 2024 projects at about USD 0.038 per kWh, roughly ₹3.2. In this site's illustrative models a 50 kW C&I rooftop plant lands at about ₹4.8 per kWh (₹4.0 to ₹6.0 across sensitivities), and a 3 kW home system at about ₹4.8 to ₹5.9 without subsidy and ₹2.9 to ₹4.0 with the PM Surya Ghar subsidy. Capex, yield, WACC and degradation are the key drivers. LCOE is the foundation of PPA tariff discovery and customer economics.

## Further reading

For how LCOE plays out in real projects, these guides go deeper:

- [LCOE of Solar in India: ₹4.8/kWh for a 50 kW C&I Plant](/blog/lcoe-solar-india/)
- [Solar Inverter Payback Period: ROI Guide 2026](/blog/solar-inverter-payback-period/)
- [Solar Inverter Installation Cost, Real Numbers](/blog/solar-inverter-installation-cost/)

## Sources

- CERC Tariff Regulations 2024.
- IEA Projected Costs of Generating Electricity 2024.
- [IRENA Renewable Power Generation Costs in 2024](https://www.irena.org/Digital-Report/Renewable-Power-Generation-Costs-in-2024) (India utility-scale solar PV LCOE about USD 0.038/kWh; installed cost about USD 525/kW; reported also by [TaiyangNews](https://taiyangnews.info/business/irena-renewable-power-generation-costs-in-2024-report)). Rupee conversion at an assumed ₹84 per USD is this site's own.
- NREL Annual Technology Baseline 2024.
- BloombergNEF New Energy Outlook 2024.
- SECI Tender Documents and Discovered Tariffs, including [SECI 1,070 MW Rajasthan Tranche-III result, 23 Nov 2020 (Mercom India)](https://www.mercomindia.com/india-record-lowest-solar-tariff) and [SECI 2 GW solar plus storage auction, Oct 2025 (pv magazine)](https://www.pv-magazine.com/2025/10/16/indias-solar-plus-storage-tender-sets-record-low-inr-2-86-tariff/).
- MNRE Annual Reports.
- Forum of Regulators publications on renewable tariff methodology.
- IEA PVPS Trends in Photovoltaic Applications 2024.
