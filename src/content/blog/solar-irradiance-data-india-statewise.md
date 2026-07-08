---
title: "Solar Irradiance Data India, State-Wise Peak Sun Hours"
excerpt: "India solar irradiance data by state: Rajasthan leads with 6.5 kWh/m²/day GHI. Complete state-wise GHI, DHI, DNI, peak sun hours table and the Solar Irradiance Tier Classification for system sizing."
description: "Complete India solar irradiance data by state. State-wise GHI, DHI, DNI, and peak sun hours table sourced from NREL NSRDB and IRENA. Seasonal variation, system sizing implications, and tier classification."
category: Industry
date: 2026-06-05
updatedDate: 2026-07-08
readTime: "20 min"
image: "/blog-images/solar-inverter-sizing.svg"
author: "Keyur Rakholiya"
keywords:
  - india solar irradiance data
  - india peak sun hours state
  - india ghi solar data
  - state wise solar irradiance india
  - solar radiation india map data
faqs:
  - q: "Which Indian state has the highest solar irradiance?"
    a: "Rajasthan has the highest solar irradiance (GHI) in India, averaging approximately 5.7–6.5 kWh/m²/day annually across the state, with the western Thar Desert region reaching the higher end. Gujarat and the Rann of Kutch region follow closely at 5.5–6.0 kWh/m²/day. These states also have the lowest cloud cover and lowest monsoon intensity among India's solar-high regions, resulting in more consistent year-round generation. Rajasthan's high irradiance is the primary reason it hosts the world's largest solar parks and dominates India's utility solar installed capacity."
  - q: "What is GHI and why does it matter for solar system sizing?"
    a: "GHI (Global Horizontal Irradiance) measures the total amount of solar radiation falling on a horizontal surface per unit area per day, expressed as kWh/m²/day or kWh/m²/year. It is the most commonly used metric for solar resource assessment and system sizing because it directly correlates with the energy output of a flat or low-tilt rooftop solar array. Higher GHI means more solar energy available to your panels, shorter payback periods, and better yield per kW of installed capacity. A system in Rajasthan (GHI 6.0) will generate approximately 35–40% more annual energy than an identical system in Kerala (GHI 4.2)."
  - q: "What is the difference between GHI, DNI, and DHI?"
    a: "GHI (Global Horizontal Irradiance) = DNI + DHI. DNI (Direct Normal Irradiance) is the irradiance in the direct beam of solar radiation, measured perpendicular to the sun's rays. High DNI is critical for concentrating solar (CSP) systems that can only use direct light. DHI (Diffuse Horizontal Irradiance) is the scattered radiation arriving from the sky dome after atmospheric scattering, which reaches the panel surface from all angles. For flat-panel photovoltaic systems (the most common type in India), GHI is the primary metric. DNI is most important for Rajasthan and Gujarat where CSP projects are under development."
  - q: "How many peak sun hours does India receive on average?"
    a: "India's national average annual peak sun hours (hours per day of equivalent full-sun irradiance at 1,000 W/m²) is approximately 4.5–5.5 hours per day, varying from 4.0 in northeastern and coastal Kerala to 6.5 in western Rajasthan. Most major cities fall in the 4.5–5.5 range: Delhi at approximately 5.1, Mumbai at 5.0, Chennai at 5.2, Bengaluru at 5.0, and Jaipur at 6.0. These figures are annual averages - seasonal variation is significant, with summer peaks 20–40% above the annual average and winter troughs 20–40% below for North Indian cities."
  - q: "How does monsoon affect solar irradiance in India?"
    a: "India's monsoon season (June–September in most of the country, May–October in Kerala) significantly reduces solar irradiance. During heavy monsoon, cloud cover can reduce GHI to 30–50% of clear-sky values. South India (Kerala, Tamil Nadu) experiences reduced irradiance during the southwest monsoon, while North India sees reduced irradiance in July–August. Rajasthan, in the rain shadow of the Aravalli range, receives a less intense monsoon than the rest of North India, maintaining better irradiance. East India (West Bengal, Odisha) sees moderate monsoon-season generation reductions. This seasonal pattern is factored into annual GHI averages."
  - q: "Does higher solar irradiance mean I need a smaller solar system?"
    a: "Yes, higher GHI means a smaller system size is needed to generate the same annual kWh output. If your annual consumption is 6,000 kWh, a system in Jaipur (GHI 6.0, approximately 1,900 kWh/kWp/year) would need approximately 3.2 kW of installed capacity. The same 6,000 kWh annual consumption in Shimla (GHI 4.0, approximately 1,300 kWh/kWp/year) would require approximately 4.6 kW. This difference in system size affects both the capital cost and the roof area required. High-irradiance locations offer the double benefit of lower capex per kWh and faster payback periods."
  - q: "What is the Solar Irradiance Tier Classification?"
    a: "The Solar Irradiance Tier Classification organises India's states into four tiers based on annual GHI. Tier 1 (Premium, GHI > 5.5 kWh/m²/day): Rajasthan, Gujarat, parts of MP and AP - best solar yield, fastest payback. Tier 2 (Good, GHI 5.0–5.5): Delhi, Haryana, Punjab, Tamil Nadu, Karnataka - excellent solar economics. Tier 3 (Moderate, GHI 4.5–5.0): Maharashtra, Andhra Pradesh coast, UP, Jharkhand - good economics, standard sizing. Tier 4 (Challenging, GHI < 4.5): Kerala, coastal Karnataka, northeastern states, Himachal Pradesh - requires careful sizing, longer payback."
  - q: "Where can I find official solar irradiance data for my city?"
    a: "The most comprehensive official source for India solar irradiance data is the NREL National Solar Radiation Database (NSRDB), which provides hourly irradiance data for all Indian locations from 1998 to present. NREL's PVWATTS calculator uses this data for system yield estimation. The India Meteorological Department (IMD) publishes solar radiation atlases periodically. IRENA's Global Solar Atlas also provides downloadable state and city-level GHI data. For system design, most professional EPC companies use PVGIS (European Commission tool) or [PVsyst software](/blog/pvsyst-alternative/), both of which incorporate NSRDB or equivalent data. Cloud-based platforms built around [solar simulation software](https://surgepv.com/solar-simulation-software/) increasingly bundle this irradiance data directly into the proposal workflow, removing the need to cross-reference a separate database."
---

Solar irradiance (the amount of solar radiation reaching a surface per unit area) is the single most important geographic variable in solar system design. A system in Rajasthan generates 35–45% more electricity per installed kilowatt than an identical system in Kerala, purely because of the difference in annual solar irradiance. Understanding where your state sits in India's irradiance landscape helps you size the right system, set realistic yield expectations, and compare installer quotes intelligently.

> **TL;DR**
> - India's annual GHI ranges from about 3.8 kWh/m²/day in the northeastern hill states to 6.5 kWh/m²/day in western Rajasthan.
> - The Solar Irradiance Tier Classification splits India into 4 tiers, from Tier 1 (Rajasthan, Gujarat, GHI > 5.5) to Tier 4 (Kerala, Northeast, GHI < 4.5).
> - GHI = DNI + DHI; GHI is the primary metric for flat/low-tilt rooftop PV, while DNI matters most for CSP and tracking systems.
> - A buyer in Patna needs roughly 25% more installed capacity than a buyer in Jaipur to generate the same annual kWh.
> - North India (UP, Bihar, Delhi, Punjab) shows the widest seasonal swing, nearly a 2:1 ratio between best and worst months.
> - NREL NSRDB and IRENA's Global Solar Atlas are the reference-standard data sources used for professional PV system design in India.

> **India's annual solar irradiance (GHI) ranges from approximately 3.8 kWh/m²/day in the northeastern hill states to 6.5 kWh/m²/day in western Rajasthan.** The Solar Irradiance Tier Classification divides India's states into four tiers for system sizing and payback estimation purposes. Peak sun hours data from the NREL NSRDB and IRENA Global Solar Atlas is the reference standard for professional PV system design in India.

This reference is designed for EPC installers, C&I buyers, and informed homeowners who need accurate irradiance data rather than rule-of-thumb estimates. The [string sizing calculator](/string-sizing-calculator/) can apply these irradiance values directly to system design, and the [solar yield in India guide](/blog/solar-yield-india/) provides application context for how irradiance translates into annual kWh output by state.

## Understanding Irradiance Metrics: GHI, DHI, and DNI

Before reading the state-wise data, it is important to understand what the three key irradiance metrics measure and which ones matter most for standard residential and C&I photovoltaic systems.

**[GHI (Global Horizontal Irradiance)](/glossary/ghi/)** is the total solar radiation received on a horizontal surface per unit area. It is the sum of: (a) the direct beam component projected onto the horizontal plane, and (b) the diffuse component from sky scatter. GHI is the primary metric for flat-rooftop and low-tilt (0–20°) PV system design. When an installer quotes "5.5 peak sun hours" for your city, they are typically referring to the GHI-derived peak sun hour equivalent.

**[DNI (Direct Normal Irradiance)](/glossary/dni/)** is the irradiance in the direct solar beam, measured on a surface always perpendicular to the sun. It is the relevant metric for concentrating solar power (CSP) systems and solar thermal. For standard flat-panel residential rooftop PV, DNI is less directly relevant, though it contributes to GHI. Rajasthan has India's highest DNI and is therefore the focus of both utility PV and CSP development.

**[DHI (Diffuse Horizontal Irradiance)](/glossary/dhi/)** is the scattered radiation from the sky dome, what you receive on a cloudy day when no direct beam is visible. DHI is the sole source of irradiance during overcast conditions and contributes to output even during partially cloudy periods. For cloudy regions (Kerala, Northeast India), DHI as a proportion of GHI is higher than in clear desert climates.

| Metric | What It Measures | Most Relevant For |
| --- | --- | --- |
| GHI | Total horizontal radiation | Flat/low-tilt rooftop PV |
| DNI | Direct beam (perpendicular) | CSP, tracking systems, high-efficiency PV |
| DHI | Diffuse sky radiation | Cloudy climate PV performance |
| [Peak Sun Hours](/glossary/peak-sun-hours/) | GHI / 1000 W/m² (hours equivalent) | System sizing calculations |

> *Source - [NREL National Solar Radiation Database (NSRDB) India Dataset](https://nsrdb.nrel.gov/), 2024; [IRENA Global Solar Atlas](https://www.irena.org/solar), 2024.*

## State-Wise Solar Irradiance Data Table

The following data is based on annual averages derived from the NREL NSRDB dataset and cross-referenced with [IRENA's Global Solar Atlas](https://globalatlas.irena.org/). All figures represent approximate annual averages; within-state variation is significant (coastal vs inland, plains vs hills).

| State | Annual GHI (kWh/m²/day) | Peak Sun Hours (hr/day) | Summer GHI | Winter GHI | Tier |
| --- | --- | --- | --- | --- | --- |
| Rajasthan | 5.7–6.5 | 5.7–6.5 | 6.5–7.5 | 4.2–5.0 | 1 |
| Gujarat | 5.5–6.0 | 5.5–6.0 | 6.2–7.0 | 4.5–5.2 | 1 |
| Jammu (plains) | 5.0–5.8 | 5.0–5.8 | 6.0–7.0 | 3.0–4.0 | 1–2 |
| Madhya Pradesh | 5.0–5.5 | 5.0–5.5 | 6.0–6.8 | 4.0–4.8 | 1–2 |
| Andhra Pradesh | 5.0–5.5 | 5.0–5.5 | 5.8–6.5 | 4.2–5.0 | 2 |
| Telangana | 5.0–5.5 | 5.0–5.5 | 5.8–6.5 | 4.3–5.0 | 2 |
| Tamil Nadu | 5.0–5.5 | 5.0–5.5 | 6.0–7.0 | 4.2–4.8 | 2 |
| Karnataka | 4.8–5.5 | 4.8–5.5 | 5.5–6.5 | 4.0–4.8 | 2 |
| Delhi NCR | 4.8–5.3 | 4.8–5.3 | 6.0–7.0 | 3.0–3.8 | 2 |
| Haryana | 4.8–5.3 | 4.8–5.3 | 6.0–7.0 | 3.0–3.8 | 2 |
| Punjab | 4.7–5.2 | 4.7–5.2 | 6.0–6.8 | 2.8–3.5 | 2 |
| Uttar Pradesh | 4.6–5.2 | 4.6–5.2 | 5.8–6.8 | 2.8–3.5 | 2–3 |
| Maharashtra | 4.5–5.5 | 4.5–5.5 | 5.5–6.5 | 4.0–5.0 | 2–3 |
| Bihar | 4.5–5.0 | 4.5–5.0 | 5.5–6.5 | 2.8–3.5 | 3 |
| Odisha | 4.5–5.0 | 4.5–5.0 | 5.5–6.3 | 3.8–4.5 | 3 |
| Jharkhand | 4.4–4.9 | 4.4–4.9 | 5.5–6.3 | 3.5–4.2 | 3 |
| West Bengal | 4.3–4.8 | 4.3–4.8 | 5.3–6.0 | 3.5–4.2 | 3 |
| Assam | 4.0–4.5 | 4.0–4.5 | 4.5–5.5 | 3.2–4.0 | 4 |
| Kerala | 3.8–4.5 | 3.8–4.5 | 4.5–6.0 | 4.5–5.5 | 4 |
| Himachal Pradesh | 4.0–5.0 | 4.0–5.0 | 5.5–7.0 | 2.0–3.5 | 3–4 |
| Uttarakhand | 4.2–5.2 | 4.2–5.2 | 5.5–7.0 | 2.5–3.8 | 3–4 |
| Goa | 4.3–4.8 | 4.3–4.8 | 5.0–5.8 | 4.5–5.5 | 3 |

*Note: Within-state variation is significant. Coastal zones receive less direct irradiance than inland zones at the same latitude. Hill districts receive less irradiance due to cloud formation. Use city-specific NREL NSRDB data for system design.*

## The Solar Irradiance Tier Classification

The four-tier classification organises India's geography into decision-relevant groups for system sizing, payback estimation, and investment decisions.

### The Solar Irradiance Tier Classification

1. **Tier 1, Premium Solar Zone (GHI > 5.5 kWh/m²/day):** Rajasthan, Gujarat, western MP, parts of Andhra Pradesh and Jammu plains. Systems in this tier generate approximately 1,800–2,100 kWh per kWp per year. Payback periods for residential systems: 4–6 years at ₹7/unit tariff. Highest return on solar investment in India. Utility solar economic advantage over grid is strongest here.

2. **Tier 2, Good Solar Zone (GHI 5.0–5.5 kWh/m²/day):** Delhi, Haryana, Punjab, Karnataka, Tamil Nadu, Telangana, central Maharashtra. Systems generate approximately 1,600–1,850 kWh per kWp per year. Payback periods: 5–7 years. Excellent investment case, these are India's most densely populated urban markets, and solar economics are clear.

3. **Tier 3, Moderate Solar Zone (GHI 4.5–5.0 kWh/m²/day):** UP, Bihar, Odisha, Jharkhand, West Bengal, coastal Maharashtra, Goa. Systems generate approximately 1,400–1,650 kWh per kWp per year. Payback periods: 6–8 years. Solar is economic but requires careful sizing; do not oversize expecting summer yields to compensate for monsoon and winter losses.

4. **Tier 4, Challenging Solar Zone (GHI < 4.5 kWh/m²/day):** Kerala, Assam, most northeastern states, hill districts of Himachal and Uttarakhand. Systems generate approximately 1,200–1,450 kWh per kWp per year. Payback periods: 8–12 years at standard tariffs. Solar remains economic in most of these zones given India's generally rising electricity tariffs but requires larger systems for the same output and careful PVGIS modelling.

> **6.5 kWh/m²/day.** Peak annual average GHI in western Rajasthan (Barmer, Jaisalmer districts), among the highest in Asia and comparable with the best solar resources in the American Southwest. *Source - [NREL NSRDB India Dataset](https://nsrdb.nrel.gov/), 2024.*

## Seasonal Variation in Solar Irradiance by Region

The annual average GHI figures above mask significant seasonal variation that affects system design and financial planning.

| Region | Summer Peak (Apr–Jun) | Monsoon (Jul–Sep) | Winter (Dec–Jan) | Seasonal Swing |
| --- | --- | --- | --- | --- |
| Rajasthan/Gujarat | 6.5–7.5 | 4.5–5.5 | 4.2–5.0 | Moderate |
| Delhi/Haryana | 6.5–7.0 | 4.0–5.0 | 3.0–3.8 | High |
| Tamil Nadu/Andhra | 6.0–7.0 | 3.5–4.5 (SW mon.) | 4.5–5.5 (NE mon. less severe) | Moderate |
| Kerala | 5.0–6.0 | 2.5–4.0 | 4.5–5.5 | High during monsoon |
| Bihar/UP | 5.8–6.8 | 4.0–5.0 | 2.8–3.5 (+fog) | Very High |
| Karnataka (interior) | 5.5–6.5 | 3.5–4.5 | 4.2–5.0 | Moderate |

The highest seasonal swing is observed in North India (UP, Bihar, Delhi, Punjab), where the combination of peak summer irradiance and deep winter (fog-affected) generation creates a ratio of nearly 2:1 between best and worst months. This seasonality has direct implications for system sizing, net metering credit banking strategy, and battery sizing for hybrid systems.

Note that Tamil Nadu experiences a different monsoon pattern: the southwest monsoon (July–September) reduces irradiance on the west coast and Karnataka, while Tamil Nadu receives its primary rainfall from the northeast monsoon (October–December). This means Tamil Nadu's worst irradiance months are October–December rather than July–September, an important consideration for installers quoting monthly generation figures.

## How Irradiance Affects System Sizing in Practice

For buyers comparing quotes from different installers, irradiance data provides an objective benchmark for whether a proposed system size is adequate.

**System sizing calculation (simplified):**
- Annual consumption (kWh) ÷ Annual yield factor (kWh/kWp/year) = Required system size (kWp)
- For Delhi (Tier 2): 6,000 kWh ÷ 1,750 kWh/kWp = 3.43 kWp → round up to 3.5 kW system
- For Jaipur (Tier 1): 6,000 kWh ÷ 1,900 kWh/kWp = 3.16 kWp → 3.2 kW system adequate
- For Patna (Tier 3): 6,000 kWh ÷ 1,550 kWh/kWp = 3.87 kWp → 4 kW system needed

This simple comparison shows that a buyer in Patna needs approximately 25% more installed capacity than a buyer in Jaipur to generate the same annual kWh. If an installer in Patna quotes the same system size as one in Jaipur for the same consumption, the Patna buyer will be systematically disappointed in their bill savings.

The [string sizing calculator](/string-sizing-calculator/) incorporates location-specific irradiance data to help validate system sizing proposals. Cross-referencing your installer's proposed system size against your city's peak sun hours is a 60-second check that reveals whether the system is sized for your actual consumption or for a more favourable location's irradiance numbers. A general-purpose [solar savings calculator](https://heavengreenenergy.com/solar-calculator/) can provide a similar sanity check on the bill-savings side of the same proposal.

## Best and Most Challenging States for Solar Investment

Based on the irradiance tier classification and additional economic factors (tariff levels, payback periods):

**Best states for solar ROI:**

| State | GHI (kWh/m²/day) | Typical Retail Tariff | Annual Yield (kWh/kWp) | Payback (5 kW, after subsidy) |
| --- | --- | --- | --- | --- |
| Rajasthan | 6.0 | ₹7–₹9 | 1,950 | 4–5 years |
| Gujarat | 5.8 | ₹6–₹8 | 1,850 | 4–5 years |
| Tamil Nadu (C&I) | 5.3 | ₹10–₹14 | 1,700 | 3–4 years |
| Karnataka (C&I) | 5.1 | ₹9–₹13 | 1,650 | 4–5 years |
| Delhi (residential) | 5.1 | ₹8–₹10 | 1,650 | 4–5 years |

**Most challenging states for solar (longer payback):**

| State | GHI (kWh/m²/day) | Annual Yield (kWh/kWp) | Challenge Factor |
| --- | --- | --- | --- |
| Kerala | 4.2 | 1,300 | Low GHI + low tariff (₹4–₹6) |
| Himachal Pradesh (hills) | 3.8–4.2 | 1,200–1,350 | Low GHI, snow shading |
| Assam/Northeast | 4.0 | 1,250 | Low GHI, monsoon severity |

*Source - [IRENA Global Solar Atlas](https://www.irena.org/solar), 2024; [IEA India Solar Resource Assessment 2024](https://www.iea.org/).*

## Common Mistakes in Using Irradiance Data

Professional EPC firms and sophisticated homeowners avoid these common errors when using irradiance data for system design.

- **Using national average when city-specific data is available**: "India averages 5.5 peak sun hours" is irrelevant if you are in Shillong (3.8) or Barmer (6.5). Always use city-specific NSRDB data.

- **Using summer-only irradiance in annual sizing**: some installer quotes reference peak summer irradiance to make the system seem more productive. Annual average GHI, not seasonal peak, is the correct basis for annual yield and payback calculations. See [how to read solar inverter datasheets](/blog/how-to-read-solar-inverter-datasheets/) for guidance on verifying the irradiance assumptions in a performance estimate.

- **Not accounting for system losses**: the raw GHI figure must be adjusted downward by system performance ratio (PR) (typically 75–85% for well-installed Indian residential systems) to arrive at actual kWh delivered. A 5 kW system in Delhi at GHI 5.1 does not generate 5 × 5.1 × 365 = 9,308 kWh/year; at PR 0.80, it generates approximately 7,446 kWh/year.

- **Comparing quotes across different cities without irradiance correction**: a neighbouring state quote with a larger system but different irradiance may not translate to better yield at your location.

## Where Qbits Fits

India's solar irradiance diversity means that inverter specifications must adapt to the local environment. A rooftop in Rajasthan needs an inverter that can handle 7.5 peak sun hours at 45 °C ambient without [thermal derating](/blog/solar-inverter-summer-derating-india/), while a rooftop in Kerala needs an inverter that performs efficiently at low irradiance, capturing diffuse light on cloudy monsoon days. Qbits inverters are designed specifically for Indian conditions across both extremes: the IP66 thermal design handles desert heat, and the high MPPT tracking accuracy captures diffuse irradiance effectively in lower-irradiance zones.

- **[On-Grid Inverters](/on-grid-inverter/)**: TLS and TLD series with wide MPPT voltage ranges suited for high-irradiance string configurations in Rajasthan/Gujarat and lower-irradiance configurations in Tier 3/4 zones.
- **[String Sizing Calculator](/string-sizing-calculator/)**: enter your city's GHI data to verify string voltage stays within safe limits across summer and winter temperature extremes.
- **[Download Datasheets](/download-datasheets/)**: verify the inverter's low-irradiance startup threshold, important for foggy North India winters and Kerala monsoon conditions.
- **[Contact Qbits](/contact-us/)**: for EPC firms designing systems in challenging irradiance zones (Tier 3/4), our engineering team can provide location-specific system design support. For zones where a formal irradiance and shadow study is warranted before quoting, a [site survey and land feasibility assessment](https://heavendesigns.in/site-survey-land-feasibility-services/) is worth commissioning up front.

The state-wise irradiance data in this reference is updated with the most current NREL NSRDB dataset. For site-specific modelling with hourly irradiance profiles, the [NREL PVWATTS calculator](https://pvwatts.nrel.gov/) provides free, precise yield estimates for any Indian address.
