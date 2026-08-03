---
term: "Virtual Net Metering"
title: "Virtual Net Metering: Definition, Meaning, How It Works, Benefits & Applications"
description: "Virtual net metering shares solar export credits across multiple electricity accounts. Full guide to working, state rules and Indian group housing applications."
category: "Metering and Grid"
categorySlug: "metering-grid"
priority: "P1"
updatedDate: 2026-07-18
keywords:
  - what is virtual net metering
  - vnm india
  - group net metering
  - shared solar
  - community solar india
shortDefinition: "Virtual Net Metering (VNM) is a billing arrangement that distributes solar export credits from one PV plant across multiple electricity accounts of the same customer or group, even when the consumption points are physically separated."
quickFacts:
  industry: "Distributed Solar / Group Billing"
  primaryUse: "Sharing solar credits across multiple meters or accounts"
  commonUsers: "Group housing, multi-site commercial customers, government departments"
  relevantStandards: "State SERC VNM regulations, MNRE rooftop guidelines"
  relatedTechnologies: "Smart meter, bidirectional meter, AMI, MDMS, virtual ledger"
relatedTerms:
  - { slug: "net-metering", term: "Net Metering" }
  - { slug: "gross-metering", term: "Gross Metering" }
  - { slug: "smart-meter", term: "Smart Meter" }
  - { slug: "bidirectional-meter", term: "Bidirectional Meter" }
  - { slug: "discom", term: "DISCOM" }
  - { slug: "resco", term: "RESCO" }
  - { slug: "pm-surya-ghar", term: "PM Surya Ghar" }
faqs:
  - q: "What is virtual net metering in simple words?"
    a: "Solar generated at one location is credited to electricity bills at other locations belonging to the same owner or group. Useful when the roof with solar is not where the consumption happens."
  - q: "VNM vs net metering, what is the difference?"
    a: "Net metering credits one customer at one meter. VNM credits multiple customers or meters from one plant, in proportions defined by an agreement."
  - q: "What is group net metering?"
    a: "Some states use GNM and VNM interchangeably. Strictly, GNM applies when generation and all consumption points are owned by the same person, while VNM allows different owners under an agreement."
  - q: "Which states allow VNM in India?"
    a: "Delhi, Kerala, Karnataka, Maharashtra, Tamil Nadu and Andhra Pradesh have notified VNM or GNM frameworks. Others are in draft or pilot."
  - q: "Can a housing society use VNM?"
    a: "Yes, in states with notified VNM rules. Common-area solar can credit individual flat owners' bills proportionally."
  - q: "How are credits distributed?"
    a: "Per a shareholder-style agreement filed with the DISCOM. Each beneficiary meter receives a fixed percentage of monthly export credits."
  - q: "Is VNM eligible for PM Surya Ghar subsidy?"
    a: "Only for the residential component, and only where the state implementing agency has notified VNM as eligible. Most state implementations are still working through this question."
  - q: "What is the maximum size of a VNM system?"
    a: "Varies by state. Typical limits are aggregate sanctioned load of all beneficiary meters, with category caps like 1 MW for residential aggregations."
  - q: "Are the beneficiary meters within the same DISCOM area?"
    a: "Yes. Most state VNM regulations require all beneficiary meters to be in the same DISCOM area, sometimes the same distribution substation."
  - q: "How are the credits valued?"
    a: "At the applicable retail tariff for each beneficiary, similar to standard net metering. Some states use a pooled rate."
  - q: "Can ownership be transferred?"
    a: "Yes, but the DISCOM agreement and credit distribution table must be updated. Procedures vary by state."
  - q: "Is VNM the same as community solar?"
    a: "Conceptually similar. Community solar typically refers to a larger plant shared by unrelated subscribers, which VNM frameworks in India do not yet fully enable."
  - q: "What is the typical payback for a VNM project?"
    a: "5 to 8 years for residential housing societies, slightly longer than single-meter net metering because of coordination overhead and lower system optimisation."
  - q: "Does VNM need a separate meter at each beneficiary?"
    a: "Each beneficiary uses their existing meter. A separate generation meter at the solar plant tracks export. The DISCOM applies credits per the agreement."
  - q: "Can I move VNM benefit to a new tenant?"
    a: "Only with a formal change in the beneficiary list, filed with the DISCOM."
author: "Nirav Dhanani"
---

## What is virtual net metering

> **TL;DR**
> - VNM credits solar export from one plant to multiple electricity accounts, in shares set by an agreement filed with the DISCOM.
> - It solves the roof-load mismatch: sites with good roofs but little load can share generation with sites that have load but no roof.
> - Notified frameworks exist in Delhi, Kerala, Karnataka, Maharashtra, Tamil Nadu and Andhra Pradesh; others are still draft or pilot.
> - Housing societies use it most often, splitting common-area solar generation across individual flat meters.
> - Beneficiary meters must generally sit within the same DISCOM area, and allocation agreements need periodic updates.
> - PM Surya Ghar's subsidy structure is built around single residential connections, so VNM fit is limited and state-dependent.

Virtual net metering is a billing arrangement under which the energy exported by a single solar PV plant is credited to multiple electricity accounts, in proportions defined by an agreement filed with the [DISCOM](/glossary/discom/). The beneficiary accounts can belong to the same owner or to a group of related owners. Physical location of the consumption points need not coincide with the plant location, although both are typically within the same DISCOM area.

The arrangement solves a real problem in Indian solar adoption: many sites have roof space without significant load, and many sites have load without usable roof space. VNM separates the two, letting a clinic build solar on a school's roof, or a housing society share rooftop generation across hundreds of flats.

Notified frameworks exist in Delhi, Kerala, Karnataka, Maharashtra, Tamil Nadu and Andhra Pradesh. Other states have draft regulations or pilot programmes. For the single-meter case these frameworks build on, see [Net Metering in India, Complete 2026 Guide](/blog/net-metering-india-complete-guide/).

## Virtual net metering explained simply

Imagine a building with a great roof but very little electricity demand, and a neighbouring building with high demand but no usable roof. With VNM, you put solar on the good roof and credit the savings to the high-demand building's meter. The wires do not need to connect, the credit simply moves on paper.

This is especially useful for housing societies. The society installs a single rooftop solar plant for the common area. Instead of crediting only the common bill, VNM splits the export across all flat meters in agreed proportions.

## Why VNM matters

Unlocks underused rooftops. Roofs without local load become viable solar sites.

Suits group housing. Indian apartment societies struggle to navigate net metering because of multi-meter complexity. VNM provides the framework.

Reduces capex per beneficiary. Pooled plants are cheaper per kW than many small plants.

Improves DISCOM coordination. One application, one meter, one settlement instead of many.

Enables institutional aggregation. Schools, colleges and government departments with multiple buildings can pool roof investments.

## How VNM works

1. The host site installs a solar PV plant under a VNM agreement.
2. Beneficiaries are listed with allocation percentages.
3. A generation meter at the plant records export.
4. The DISCOM applies credits monthly to each beneficiary's bill per the allocation.
5. Each beneficiary pays only the net after credit.

## Technical deep dive

### Allocation logic

| Beneficiary | Allocation % | Monthly credit on 8,000 kWh export |
|---|---|---|
| Flat A | 12 | 960 kWh |
| Flat B | 8 | 640 kWh |
| Common area | 35 | 2,800 kWh |
| Flat C | 6 | 480 kWh |
| ... | ... | ... |

Allocations can be by load share, ownership share, or any other formula in the agreement.

### State variations

| State | Framework | Notes |
|---|---|---|
| Delhi | GNM since 2014 | Allows shared roof with multiple residences |
| Kerala | VNM | Eligible for residential housing |
| Karnataka | GNM and VNM | Includes government departments |
| Maharashtra | GNM | Allows multi-site under same owner |
| Tamil Nadu | Pilot stage | Limited rollout |
| Andhra Pradesh | Limited GNM | C&I focus |

### Settlement

Credits are usually applied at the retail tariff of each beneficiary, capped at consumption. Surplus credits carry forward inside the financial year. Year-end residuals are lapsed in most states.

## Real-world applications

Group housing societies. Common-area roof shared across flats, typically installed through a [residential solar EPC partner](https://heavengreenenergy.com/residential-solar/).

Government departments. One agency installs on its main building, credits multiple sub-offices.

Schools and colleges with multiple buildings.

Industrial townships where some buildings have roof, others have load.

Religious institutions and trust-owned property portfolios.

[PM Surya Ghar](/glossary/pm-surya-ghar/) adjacent projects where residential aggregation is the route.

## Advantages

Unlocks otherwise unused roof.

Reduces per-unit cost through pooled investment.

Lowers DISCOM application overhead.

Suits Indian apartment culture better than individual net metering.

Supports collective decision making and shared ownership.

## Limitations

Coordination complexity. Multiple owners must agree on allocations and on plant capex sharing.

Regulatory inconsistency across states.

Limited PM Surya Ghar fit. Subsidy mechanism is built around single residential connections.

Beneficiary changes require DISCOM agreement updates.

Disputes over allocation percentages can sour society relationships.

## Common problems

DISCOM rejects the agreement due to format issues. Use the prescribed template from the SERC regulation; see [How to Apply for Net Metering in India, State by State (2026)](/blog/how-to-apply-net-metering-india/) for the standard 6-step process and common rejection reasons.

Beneficiary list goes stale as flat owners change. Schedule annual updates.

Allocation percentages do not sum to 100. Audit before filing.

One beneficiary opts out mid-year. Re-allocation requires DISCOM amendment.

Credits applied at wrong tariff. Audit first three bills carefully.

Generation meter installed inside an individual flat by mistake. Causes major rework.

## Best practices

Draft the allocation agreement before installing the plant.

Use the state's prescribed VNM template.

Schedule annual beneficiary review and amendment.

Maintain a digital ledger of allocations and history.

Audit credits monthly for the first six months.

Plan for tenant turnover in housing societies.

Negotiate plant ownership and end-of-life arrangements in the original agreement.

## Comparison: VNM vs net vs gross

| Feature | VNM | Net metering | [Gross metering](/glossary/gross-metering/) |
|---|---|---|---|
| Beneficiaries | Multiple | Single | Single |
| Generation location | Anywhere in DISCOM | At consumption point | At consumption point |
| Credit value | Retail per beneficiary | Retail | FIT |
| Best use | Group housing, multi-site | Single owner | Pure export |
| Indian availability | 6+ states | All states | Select states for C&I |

## Indian market context

Delhi's GNM regulations from 2014 were the first major Indian VNM-like framework. Karnataka and Kerala notified VNM in 2017 and 2019. Maharashtra and Tamil Nadu followed with their own variants.

MNRE rooftop solar programme has progressively recognised group housing and aggregation. PM Surya Ghar guidelines acknowledge GNM but implementation through state nodal agencies is uneven.

DISCOM administrative capacity for VNM is the binding constraint. States with stronger AMI, [smart meter](/glossary/smart-meter/) and MDMS infrastructure handle VNM cleanly. States with manual billing struggle.

## Standards and certifications

| Standard | Scope |
|---|---|
| Electricity Act 2003 | Statutory basis |
| State SERC VNM/GNM regulations | Per-state framework |
| CEA Smart Meter Regulations 2023 | Smart-meter requirements |
| MNRE Rooftop Solar Programme guidelines | Application framework |

## Common mistakes

Designing the plant before checking VNM regulations in the state.

Skipping the beneficiary agreement formalities.

Ignoring tenant turnover in housing societies.

Assuming uniform rules across states.

Using a single net meter instead of a separate generation meter where the regulation requires it.

Forgetting annual amendments.

Failing to update the agreement when ownership changes.

## Key takeaways

Virtual net metering lets one solar plant share credits across multiple electricity accounts, solving the roof-load mismatch common in Indian buildings. State frameworks vary, with Delhi, Kerala, Karnataka, Maharashtra and Tamil Nadu having the most mature regulations. Coordination, allocation agreements and DISCOM administrative capacity decide whether a VNM project actually delivers.

## Want VNM for your housing society or institution?

QBits Energy designs and coordinates VNM projects for group housing, schools and multi-site commercial customers across applicable Indian states.

## Further reading

For how Virtual Net Metering plays out in real projects, these guides go deeper:

- [Virtual Net Metering in India 2026: The Apartment Dweller's Guide](/blog/virtual-net-metering-india/)
- [Solar for Apartment Complex (RWA) India](/blog/solar-for-apartment-complex-rwa-india/)
- [Net Metering in India, Complete 2026 Guide](/blog/net-metering-india-complete-guide/)
- [Best Solar Design Software Philippines: 2026 Guide](/blog/solar-design-software-philippines/)

## Sources

- Electricity Act 2003, Government of India.
- Delhi Group Net Metering Regulations 2014, DERC.
- Kerala Virtual Net Metering Regulations, KSERC.
- Karnataka Net Metering and Group Net Metering Regulations, KERC.
- Maharashtra Group Net Metering Regulations, MERC.
- MNRE Grid-Connected Rooftop Solar Programme guidelines.
- PM Surya Ghar Muft Bijli Yojana scheme guidelines.
- IEA PVPS Task 17 publications on community solar models.
- Forum of Regulators reports on distributed solar billing.
