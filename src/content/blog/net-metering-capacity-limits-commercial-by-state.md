---
title: "Net-Metering Limits for Commercial Rooftops, by State"
seoTitle: "Net Metering Limit for Commercial Rooftops by State"
excerpt: "State-wise net-metering limits for commercial rooftop solar: the kW ceiling, the sanctioned-load link, AC or DC basis and transformer caps, each with its source and date."
description: "Net metering limit for commercial consumers, state by state: kW ceiling, load link, AC or DC basis and transformer caps, with sources and gaps marked."
category: "EPC"
date: 2026-10-30
readTime: "16 min"
image: "/og/blog-net-metering-capacity-limits-commercial-by-state.webp"
author: "Keyur Rakholiya"
keywords:
  - net metering limit for commercial
  - net metering capacity limit by state
  - commercial net metering india
  - rooftop solar sanctioned load limit
  - net metering vs net billing commercial
  - net metering 500 kW 1 MW limit
  - contract demand rooftop solar limit
relatedSlugs:
  - net-meter-approval-timeline
  - discom-approval-solar-inverter-net-metering
  - gross-metering-vs-net-metering
  - how-to-apply-net-metering-india
  - ceig-inspection-solar-plant-inverter-checks
  - solar-inverter-rfq-template-epc
---

There is no national net-metering limit for commercial consumers, so the limit that decides your plant is a state number. It is really four numbers: a kW ceiling, a link to sanctioned load or contract demand, a basis (AC or DC), and a transformer cap. The Centre's rule gives a fallback of 500 kW or the sanctioned load, whichever is lower. It applies only where a state has no regulation of its own, and every state we could read has made one.

From the documents we could open, the commercial net-metering ceiling runs from 500 kW or kWp (Haryana, West Bengal, Telangana, Andhra Pradesh, Punjab, Odisha) to 1,000 kW (Gujarat, Karnataka, Rajasthan) to 5 MW (Maharashtra). Two states put commercial and industrial consumers on a different arrangement altogether. In Tamil Nadu they are on net feed-in. In Uttar Pradesh they were outside net metering when we last found a regulator document. Delhi's regulation sets no kW ceiling at all.

Every row below names its source and was checked on 2026-10-30. Where we could not open a primary document, the state is marked "not verified" instead of filled from a news site. Read the tables with the [approval timeline](/blog/net-meter-approval-timeline/) open, because for a live site the limit is only the first gate.

> **What this is built on**
>
> - The Electricity (Rights of Consumers) Amendment Rules, 2021 (G.S.R. 448(E), dated 28 June 2021), read in the gazette text.
> - Regulations, regulator orders and statements of reasons from 13 states, read as PDFs. Each is named in the first table with its date. Madhya Pradesh and Kerala are marked not verified.
> - **Limits:** several regulators' own sites did not respond from our network. Haryana was read from an archived copy of the HERC PDF, and some states from a copy hosted by a distribution company (DISCOM). States change these rules often. Karnataka replaced its framework in August 2026, and Odisha has a draft out. Treat the tables as a dated reading, then confirm with the DISCOM before you fix the design.

## What does the central rule say about commercial net-metering limits?

The Electricity (Rights of Consumers) Rules, 2020 originally tied net metering to loads up to 10 kW. The 2021 amendment replaced sub-rule (4) of rule 11. Its first line hands the decision to the state. Arrangements for net-metering, gross-metering, net-billing or net feed-in "shall be in accordance with the regulations made by the State Commission, from time to time".

The 500 kW figure sits in the first proviso. Where a state's regulations do not provide for these arrangements, the Commission "may allow net metering to the Prosumer for loads up to five hundred Kilowatt or upto the sanctioned load, whichever is lower and net-billing or net feed-in for other loads". It is a default for states with nothing in place. It is also a limit on a load, not a plant size. Andhra Pradesh's regulator made exactly that point when it refused to switch its cap from kWp to AC kW.

The same amendment defines the three arrangements an EPC will keep running into:

| Arrangement | How exported solar is valued |
| --- | --- |
| Net metering | Exported units are deducted from imported units (kWh), and the net is billed or carried over at the retail tariff, on one bidirectional meter |
| Net billing or net feed-in | Imports are valued at the retail tariff and exports at a feed-in tariff set by the Commission. The export value is deducted from the import value |
| Gross metering | All generation is accounted separately and valued at a tariff set by the Commission, while all consumption is billed at the retail tariff |

For a factory that uses most of its solar on site, export is small. The difference between net metering and net billing then matters less than the size cap. The [gross metering vs net metering](/blog/gross-metering-vs-net-metering/) guide has the arithmetic for plants that export more.

One more central change helps a commercial project. The 2024 amendment, as summarised in the Ministry of Power's annual report, removes the technical feasibility study for systems up to 10 kW. For systems above 10 kW it cuts the study period from twenty days to fifteen. Approval is deemed if the study is not completed in time. A commercial plant is above 10 kW, so the fifteen-day clock is yours.

## Which four limits must a commercial net-metering plant pass?

A plant is approved only if it clears all of these, and states combine them differently.

1. **The ceiling.** The largest plant allowed under net metering, in kW or kWp, regardless of load.
2. **The load link.** Whether capacity may exceed sanctioned load (usually for low-tension (LT) connections) or contract demand (usually for high-tension (HT) connections). Some states cap at 100% of it. Telangana caps commercial plants at 80% and Punjab at 70%.
3. **The basis.** Whether the cap counts the inverter's AC rating or the DC panel capacity. The difference is the DC/AC ratio. See the guide to DC oversizing if you design above 1.0. On a 100 kW class unit the datasheet can print a maximum output above the rated figure, as the [100 kW inverter comparison](/blog/best-hundred-kw-solar-inverter-ci-rooftops/) shows.
4. **The transformer or feeder cap.** The share of the distribution transformer's rating that all rooftop plants on it may use together. This is often the limit that bites in an industrial estate, and it is first come, first served.

The arrangement matters too. A state can have a 1 MW net-metering ceiling and still allow a larger plant under net billing or gross metering.

## Net metering limit for commercial consumers, state by state: ceilings and load links

This table gives each state's net-metering ceiling for a commercial consumer and how it links to sanctioned load or contract demand. "Not verified" marks a gap, not a rule.

| State | Net-metering ceiling for a commercial consumer | Link to sanctioned load or contract demand | Source and status (checked 2026-10-30) |
| --- | --- | --- | --- |
| Gujarat | 1 kW to 1,000 kW. Gross metering above 10 kW up to 1,000 kW | The 2022 amendment replaced the older 50% of sanctioned load rule. Captive consumers and third-party-sale projects: no capacity restriction up to sanctioned load or contracted demand. No percentage cap is stated for commercial consumers | GERC Net Metering Rooftop Solar PV Regulations 2016, Third Amendment (Notification 2 of 2022, 31 May 2022). Fourth (13 of 2024) and Fifth (2025) amendments read, neither changes the ceiling. Verified. The set-off window and banking charge that follow from it are worked through in [solar for diamond polishing units in Surat](/blog/solar-for-diamond-polishing-units-surat/) |
| Maharashtra | 5 MW or contract demand or sanctioned load, whichever is lower. Other arrangements: limited to contract demand or sanctioned load | Contract demand where approved, otherwise sanctioned load | MERC Statement of Reasons for the First Amendment, 16 Nov 2023, with the 2019 Regulations. The notified amendment text was not opened |
| Rajasthan | 1 MW or sanctioned load or contract demand, whichever is lower, for all categories | Regulation 7.2 of the 2021 regulations: not above 100% of sanctioned load or contract demand | RERC suo-motu order, 7 Feb 2024 (full text). A 2025 amendment on virtual and group net metering is reported and was not opened |
| Tamil Nadu | Commercial and industrial consumers are not on net metering. LT consumers other than domestic: net feed-in. HT: net feed-in for 1 kW to 999 kW. Above 1 MW: parallel operation with reverse power relays | Eligibility is stated as up to sanctioned load | TNERC Order 8 of 2021 (22 Oct 2021) as described in TNERC's press release of 15 Nov 2021 and the TANGEDCO "policies adopted" note. The order itself was not opened. A 2024 draft regulation exists and we found no notified replacement |
| Karnataka | All categories. 1 kW up to the lower of sanctioned load or contract demand, or 1,000 kW. Net billing and gross metering: up to sanctioned load or contract demand | Sanctioned load or contract demand. The net-metering terms stay in force only until cumulative distributed solar in the state reaches 3 GW | KERC Grid Interactive Distributed Solar PV (DSPV) Plants Regulations 2026, Notification KERC/F-34/V-38/2026-27/2395, 19 Aug 2026, gazetted 24 Aug 2026 (full text). Verified |
| Uttar Pradesh | UPERC's Nov 2023 consultation paper says net metering was open only to residential (LMV-1) and agriculture (LMV-5) consumers. Commercial and industrial consumers used gross metering or net billing. Plant size 1 kWp to 2 MWp | Not above 100% of connected or contracted demand | UPERC consultation paper on net metering (Nov 2023) quoting Regulation 5.1 of the 2019 regulations. A later amendment extending net metering to some institutions is reported and was not opened. Partial |
| Telangana | 500 kWp for all categories except temporary supply. Gross metering up to 1 MWp. Existing prosumers above 500 kWp keep net metering | Commercial, industrial and other consumers: up to 80% of sanctioned load or contracted demand. Residential and government: 100% | TGERC Rooftop Solar PV Grid Interactive Systems Regulation 2025 (Regulation 1 of 2025), Telangana Gazette 15 Nov 2025 (full text). Verified |
| Andhra Pradesh | 500 kWp under net metering. Net billing or net feed-in: 1,000 kWp. Gross metering: 5,000 kWp | All capped at contracted load or demand. For net billing, "1,000 kWp or the contracted demand whichever is less" | APERC Statement of Reasons, 22 Feb 2024, on Regulation 4 of 2023 (full text). Regulation 10 of 2025 was not opened |
| Punjab | 500 kWp under net metering | Non-domestic: not above 70% of sanctioned load (kW) or contract demand (kVA converted at 0.9). Net billing and gross metering follow the same load cap | PSERC Grid Interactive Rooftop Solar PV Regulations 2021 (18 Aug 2021), as annexed to a PSPCL petition. A Third Amendment notified in April 2026 is reported and could not be opened, so the 70% factor may have changed |
| Haryana | 500 kW or sanctioned load or contract demand, whichever is lower | Not above connected or sanctioned load (LT) or contract demand (HT). Gross metering up to sanctioned load or contract demand | HERC Regulation HERC/54/2021 (19 July 2021), read from an archived copy. A 500 MW state-wide cumulative cap applies in Regulation 4.4. Later amendments not checked |
| Delhi | No kW or MW ceiling in the regulations | Capacity is subject to interconnection feasibility, service-line capacity and sanctioned load. A plant above sanctioned load is allowed on paying the service-line-cum-development charge differential | DERC Net Metering for Renewable Energy Regulations 2014, regulation 5(3) and (4). Later rooftop amendments not checked |
| West Bengal | 1 kW to 500 kW or contract demand, whichever is lower | Net billing and gross metering up to contract demand. Total installed capacity not above contract demand or sanctioned load | WBSEDCL procedure document issued under the WBERC Grid Interactive Rooftop Solar PV System for Prosumers Regulations 2025 (published 31 July 2025). A DISCOM summary, the regulation text was not opened |
| Odisha | In force: 500 kW or sanctioned load, whichever is lower, within 75% of transformer capacity. The April 2026 draft would limit net metering to domestic, institutional and agricultural consumers and put all categories on net billing | Sanctioned load | OERC order, 5 May 2022. OERC draft regulations notice, 10 Apr 2026, a draft only. Whether it has been notified was not checked |
| Madhya Pradesh | Not verified. The MPERC order of 23 Aug 2024 refers to "the limit of 1 MW fixed for net metering connections". The 2024 regulation text was not opened and a June 2026 amendment is reported by non-primary sources | Not verified | MPERC Petition 17 of 2024 order, read for the quoted line only |
| Kerala | Not verified. We could open only the 2020 original regulation, which has since been amended. The amendments could not be opened | Not verified | KSERC Renewable Energy and Net Metering Regulations 2020, original text only |

## Does the cap count AC or DC, and what are the transformer caps, by state?

This table shows whether each state's cap counts AC or DC capacity, and the share of transformer or feeder capacity that rooftop plants may use.

| State | Basis the cap counts | Transformer or feeder limit |
| --- | --- | --- |
| Gujarat | Not stated in the amendments read | The technical feasibility report must show whether total rooftop capacity on the transformer is within its rating. For HT consumers above 6 kW up to 1,000 kW, state DISCOMs recover system strengthening charges per kVA. At other licensees the consumer bears the upgrade cost |
| Maharashtra | AC. MERC said capacity is "reckoned based on its output capacity in AC" | 70% of rated capacity per transformer or feeder, which the licensee may exceed after a load study (regulation 5.2 of 2019). A 5% variation in rated capacity is allowed |
| Rajasthan | Not stated in the order | 50% of distribution transformer capacity. Not applicable where an HT consumer owns the transformer, in which case regulation 7.2 governs. Read from the regulation copy, which carries no notification date |
| Tamil Nadu | Not stated in the sources opened | Not stated in the sources opened |
| Karnataka | For plants up to 10 kW the AC inverter must not exceed sanctioned load, with up to 10% DC tolerance. Above 10 kW the text does not say | Plants under 150 kW: total on the existing transformer not above 80% of rating. Larger plants: per the Distribution Code and supply regulations (regulation 8) |
| Uttar Pradesh | The regulation speaks in kWp | Not in the paper read |
| Telangana | The 500 kWp ceiling is in kWp. The unit of the 80% limit is not stated | LT: 50% of transformer rating. HT: 50% of the 11 kV or 33 kV feeder's permitted maximum load, or 50% of the substation or power transformer capacity |
| Andhra Pradesh | DC, expressly. The regulator rejected a request to count AC inverter kW and defined capacity "in DC terms" | 80% of transformer rating and 100% of feeder capacity, under net and gross metering |
| Punjab | AC for the load-linked cap ("rated inverter capacity on AC side"). The 500 limit is written in kWp | 80% of the transformer or feeder rating |
| Haryana | "Rated capacity", unit not defined in the passage read. 5% variation allowed | 50% of the distribution transformer and 30% of the power transformer, or a revised limit set by HERC |
| Delhi | Minimum is one kWp. No other basis stated | The licensee must allow at least the limits the Commission specifies. No figure in the regulation |
| West Bengal | Not clear in the document read | Cumulative capacity not above 100% of feeder or transformer capacity. Plants with sanctioned load or contract demand above 170 kW (200 kVA) connect at 11 kV or above |
| Odisha | Not stated | 75% of transformer capacity |

All rows above were checked on 2026-10-30. A cell that says "not stated" means the document we read does not say, not that the state has no rule.

## Worked example: the same commercial plant in five states

This is illustrative. It is not advice for a live project, and it uses the readings in the tables above.

Take a plant of 450 kWp DC with three 125 kW inverters, so 375 kW AC and a DC/AC ratio of 1.2. The question is the smallest contract demand each state's rule would accept.

| State | What the rule counts | Minimum contract demand for this plant |
| --- | --- | --- |
| Maharashtra | AC output, 375 kW, against contract demand (the regulation compares kW with kVA directly) | 375 kVA |
| Karnataka | Not above sanctioned load or contract demand. The unit is explicit only in the 10 kW clause | 375 if counted on AC, 450 if counted on DC |
| Andhra Pradesh | DC, 450 kWp, against contracted demand. The plant sits 50 kWp below the 500 kWp net-metering ceiling | 450 |
| Telangana | 450 kWp at 80% of sanctioned load or contracted demand. The unit of the 80% is not stated | 450 / 0.8 = 562.5 |
| Punjab | AC, 375 kW, against 70% of (contract demand in kVA x 0.9) | 375 / (0.7 x 0.9) = 595 kVA |

Now give the same factory a 400 kVA contract demand. It passes Maharashtra and, on an AC reading, Karnataka. It fails Andhra Pradesh at 450 kWp against 400. In Telangana its plant is capped at 320, and in Punjab at 252 kW AC (400 x 0.9 x 0.7). One roof, three answers, and none of them is a mistake by the DISCOM.

For this sort of plant the inverter choice is straightforward once the cap is known. A site capped at 252 kW AC needs a different unit count from one capped at 375 kW, and AC ratings move in steps. Qbits' [QB 80/90/100/110/125KTLC family](/our-products/QB-80-125KTLC/) lists a 125 kW model among the on-grid options. The datasheet for the exact model states its rated AC output. To fix an inverter schedule against one of these caps, start from the [Qbits C&I solutions page](/c-i-solution/). Quotes are per model and quantity.

## How the net-metering limit changes the inverter design

- **Check what the cap counts before you size DC.** In an AC-basis state a DC/AC ratio above 1.0 is a design choice. In Andhra Pradesh it uses up the cap. Ask in writing.
- **HT and LT are read differently.** Many states link LT plants to sanctioned load and HT plants to contract demand. A kVA contract demand compared with a kW plant size needs the state's own conversion, and only Punjab states one (0.9).
- **A transformer cap can beat the ceiling.** A 1 MW ceiling does not help if the transformer headroom is gone. Rajasthan exempts HT consumers who own their transformer from the 50% cap, which is worth checking if you do.
- **Time can be a limit too.** Karnataka's net-metering terms run until cumulative capacity reaches 3 GW. Haryana has a 500 MW state-wide cap. Applications that come after the cap may fall under a different arrangement.
- **Net metering may not be on offer at all.** In Tamil Nadu and, on the paper we read, Uttar Pradesh, a commercial plant is on net feed-in or net billing. The value of exported units then comes from a feed-in tariff, not the retail tariff.
- **Zero export is a separate route.** If the arrangement or the cap makes export unattractive, the [zero-export inverter guide](/blog/best-zero-export-solar-inverters/) covers how export limiting works. The DISCOM still has to accept the design.

## What to ask the DISCOM in writing before you fix the design

1. Which regulation and which amendment apply to an application filed today?
2. Does the cap count the inverter's AC rating or the DC panel capacity?
3. Is my limit sanctioned load or contract demand, and how are kVA and kW compared?
4. What is the transformer headroom on my feeder, and does an owned HT transformer change it?
5. Is my category on net metering, net billing or gross metering?
6. Does a later capacity addition count against the same cap?
7. For a plant above 10 kW, when does the fifteen-day feasibility clock start?

Keep the reply. The [DISCOM approval guide](/blog/discom-approval-solar-inverter-net-metering/) covers how to verify that your inverter model is accepted. The [CEIG inspection guide](/blog/ceig-inspection-solar-plant-inverter-checks/) covers the inspection by the Chief Electrical Inspector to Government (CEIG), which is a separate approval.

## What this post could not check

- Madhya Pradesh and Kerala current text. Neither is in the tables with numbers.
- Notified text of Maharashtra's 2023 and 2024 amendments. We read MERC's statements of reasons, which record the decision.
- Punjab's April 2026 Third Amendment, Rajasthan's 2025 amendment, Andhra Pradesh Regulation 10 of 2025, and any Haryana or Delhi amendment after the texts we read.
- Uttar Pradesh amendments after November 2023. Our Hindi [Uttar Pradesh solar business guide](/blog/uttar-pradesh-mein-solar-business-avsar/) summarises the second and third amendments.
- Tamil Nadu's order text, and whether a final regulation has replaced the 2024 draft.
- Whether Odisha's April 2026 draft has been notified.
- Every state's regulation as it stands on the day you read this. Rules here have changed several times in two years.
- Open access and captive arrangements, group and virtual net metering, and tariffs. They sit outside a plain commercial rooftop net-metering limit.

## Next step: fix the state, voltage level and contract demand

Fix the state, the voltage level and the contract demand first, then read the cap against them. When you know the AC capacity you need, see the [Qbits C&I solutions page](/c-i-solution/). To get a quote per model and quantity, [send the project details](/contact-us/) with the state and contract demand.
