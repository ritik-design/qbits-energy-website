---
term: "LCOE"
title: "LCOE (Levelised Cost of Energy): Definition, Calculation & Solar Applications"
description: "LCOE is the lifetime cost of electricity from a solar plant. Full guide to calculation and Indian benchmarks."
category: "Finance"
categorySlug: "finance"
priority: "P0"
updatedDate: 2026-06-04
keywords:
  - what is lcoe
  - levelised cost of energy
  - lcoe calculation
  - solar lcoe india
  - lcoe formula
shortDefinition: "Levelised Cost of Energy (LCOE) is the per-kWh cost of electricity averaged over the entire lifetime of a solar plant, including capex, opex, financing and degradation. Indian utility solar LCOE landed at ₹2.5 to ₹3.5 per kWh in 2026, with rooftop at ₹3.5 to ₹5.5."
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
    a: "Utility ₹2.5 to ₹3.5 per kWh. C&I rooftop ₹3.0 to ₹4.5. Residential rooftop with subsidy ₹2.0 to ₹3.5. Without subsidy ₹4.0 to ₹6.0."
  - q: "How is LCOE different from tariff?"
    a: "LCOE is what it costs to produce. Tariff is what the customer pays. PPA tariff for utility solar approaches LCOE plus a margin."
  - q: "Why has Indian solar LCOE fallen?"
    a: "Module prices dropped from USD 1.5 per W in 2010 to USD 0.10 per W in 2025. Indian tariffs followed, from ₹17.91/kWh in 2010 to under ₹2.50/kWh in 2024."
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

Levelised Cost of Energy (LCOE) is the per-kWh cost of electricity from a generation plant, averaged over its entire operating life, with all costs and all energy discounted to present value. It is the standard metric for comparing the cost of different generation technologies and the basis for PPA tariff setting, regulatory benchmarking and investment decisions.

LCOE accounts for capex, fixed and variable O&M, financing cost, fuel cost (zero for solar), expected lifetime energy generation and degradation. It produces a single number expressed in ₹/kWh that captures the full lifecycle cost of generation.

For Indian solar, LCOE has fallen from above ₹17 per kWh in 2010 to ₹2.5 to ₹3.5 per kWh for utility plants in 2026. C&I rooftop LCOE lands at ₹3.0 to ₹4.5 per kWh, residential at ₹2.0 to ₹6.0 per kWh depending on subsidy.

## LCOE explained simply

If you build a solar plant and run it for 25 years, the LCOE is the price per unit of electricity you would need to charge to cover all your costs (construction, financing, operating, degradation) and just break even. Below that price you lose money. Above that price you profit.

The big advantage of LCOE is it boils 25 years of solar economics into one number you can compare against other generation sources or against retail electricity tariffs.

## Why LCOE matters

PPA tariff setting. SECI bids and CERC tariff orders use LCOE as the underlying methodology.

Investment decision. Developers compare projected LCOE against expected PPA prices.

Customer economics. Residential and C&I solar customers compare LCOE to their retail tariff.

Technology comparison. Solar vs coal vs gas vs wind on like-for-like cost basis.

Regulatory benchmarking. State SERCs use LCOE to validate proposed FIT levels.

Lifecycle visibility. Captures the 25-year asset behaviour, not just upfront cost.

## How LCOE is calculated

LCOE = Σ (Costs_t / (1+r)^t) / Σ (Energy_t / (1+r)^t)

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

### Indian utility solar LCOE breakdown (2026 approximation)

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

| Parameter | Typical value |
|---|---|
| Capex (₹ Cr/MW) | 3.5 to 4.5 |
| Annual O&M (₹ Lakh/MW) | 5 to 8 |
| Year 1 yield (kWh/kWp) | 1,650 to 1,800 |
| Degradation (%/year) | 0.50 to 0.55 |
| Plant life (years) | 25 |
| WACC (%) | 8 to 10 |

### Sensitivity

| Input change | LCOE impact (₹/kWh) |
|---|---|
| Capex +10% | +0.25 to 0.35 |
| O&M +20% | +0.05 to 0.07 |
| Yield -10% | +0.27 to 0.35 |
| WACC +1% | +0.15 to 0.25 |
| Degradation +0.1%/year | +0.04 to 0.06 |

### Solar vs alternatives (Indian LCOE 2026, approximate)

| Technology | LCOE ₹/kWh |
|---|---|
| Utility solar | 2.5 to 3.5 |
| Utility wind | 3.0 to 4.0 |
| Coal new build | 4.5 to 5.5 |
| Gas combined cycle | 5.0 to 6.5 |
| Nuclear | 6.0 to 7.5 |
| Solar plus 4 hour battery | 5.0 to 7.0 |
| Diesel genset (for comparison) | 18 to 25 |

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

| Project type | LCOE ₹/kWh |
|---|---|
| Utility solar | 2.5 to 3.5 |
| C&I rooftop | 3.0 to 4.5 |
| Residential rooftop with PM Surya Ghar subsidy | 2.0 to 3.5 |
| Residential rooftop without subsidy | 4.0 to 6.0 |
| Off-grid solar with battery | 8.0 to 14.0 |
| Floating solar | 3.0 to 4.0 |

## Indian market context

Indian utility solar tariffs discovered through SECI tenders fell from ₹17.91/kWh in 2010 to ₹1.99/kWh in 2020, rising slightly to ₹2.55/kWh in 2024 due to module price recovery.

CERC Tariff Regulations 2024 use LCOE methodology for benchmark tariff setting.

State SERCs publish LCOE-based feed-in tariffs for distributed solar.

RTC (Round-The-Clock) solar plus storage projects under SECI tenders use composite LCOE.

PM Surya Ghar subsidised LCOE for residential is competitive with retail tariffs in most states.

## Standards and certifications

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

Comparing solar LCOE to coal LCOE without storage adjustment.

Using nominal vs real LCOE inconsistently.

## Key takeaways

LCOE is the lifetime cost of electricity from a solar plant, expressed in ₹ per kWh. Indian utility solar LCOE has collapsed from above ₹17 in 2010 to ₹2.5 to ₹3.5 in 2026. C&I rooftop runs ₹3.0 to ₹4.5. Residential with subsidy as low as ₹2.0 to ₹3.5. Capex, yield, WACC and degradation are the key drivers. LCOE is the foundation of PPA tariff discovery and customer economics.

## Need bankable LCOE modelling for your solar project?

QBits Energy provides LCOE analysis for utility, C&I and residential solar projects with site-specific assumptions and sensitivity scenarios.

## Sources

- CERC Tariff Regulations 2024.
- IEA Projected Costs of Generating Electricity 2024.
- IRENA Renewable Power Generation Costs in 2024.
- NREL Annual Technology Baseline 2024.
- BloombergNEF New Energy Outlook 2024.
- SECI Tender Documents and Discovered Tariffs.
- MNRE Annual Reports.
- Forum of Regulators publications on renewable tariff methodology.
- IEA PVPS Trends in Photovoltaic Applications 2024.
