---
title: "Solar Inverter RFQ Template for EPC Projects"
seoTitle: "Solar Inverter RFQ Template for EPC, With Checklist"
excerpt: "A fill-in solar inverter RFQ for EPC procurement: project inputs, grid clauses, a bidder response sheet, price basis and a copy-ready checklist."
description: "Solar inverter RFQ template for Indian EPC projects: line schedule, site inputs, CEA grid clauses, compliance flow-down, one price basis and a checklist."
category: "EPC"
date: 2026-10-30
readTime: "15 min"
image: "/og/blog-solar-inverter-rfq-template-epc.webp"
author: "Keyur Rakholiya"
keywords:
  - solar inverter rfq
  - solar inverter rfq template
  - inverter request for quotation EPC
  - solar inverter tender specification
  - inverter bid comparison India
  - EPC inverter procurement checklist
relatedSlugs:
  - inverter-procurement-india
  - how-to-read-solar-inverter-datasheets
  - inverter-suppliers-india
  - solar-inverter-regulations-india-2026-bis-iec-compliance
  - inverter-warranty-service-checklist-bulk-buyers
  - solar-inverter-sizing
---

A solar inverter RFQ (request for quotation) works when a bidder can price it without phoning you. It also works when you can lay three replies side by side and see exactly where they differ. That takes two things: project inputs the bidder cannot guess, and a response sheet that asks for **values with a source page**, not the word "complies".

This post is the document itself, written for the EPC (engineering, procurement and construction) team that issues it. Copy the tables, fill the project columns, and send the same revision to every bidder. It sits before the order controls in the [bulk inverter supply checklist](/blog/inverter-procurement-india/) and after the supplier shortlist in the [supplier selection guide](/blog/inverter-suppliers-india/).

> **What you get below**
>
> - Nine RFQ parts you can paste into your own letterhead.
> - A worked string-design input that shows why module data must go to the bidder.
> - The CEA grid clauses an inverter must meet, turned into questions a bidder must answer with numbers.
> - A flow-down table that converts an owner's inverter clause into an RFQ line.
> - A single price basis so quotes compare like with like.
> - A checklist to copy, in three stages: before sending, bidder must return, before award.

## What an inverter RFQ must do

Most inverter RFQs fail in one of three ways.

1. **They ask for a price on a capacity, not a design.** "Quote 4 nos 60 kW" cannot be answered correctly. Maximum DC voltage, current per input and the number of MPPT (maximum power point tracking) inputs depend on the array you have designed. The bidder has not seen it.
2. **They accept "complies" as an answer.** A tick next to "IP65" or "THD below 3%" proves nothing. You cannot audit a tick.
3. **They let each bidder draw its own price boundary.** One quote includes the Wi-Fi dongle and freight, another does not. The cheaper one is then not cheaper.

The template below fixes each of these. Every clause has a "bidder returns" column that asks for a number, a document, or a stated exception.

## Part A: what goes on the cover page and in the bid rules

The cover page of a solar inverter RFQ should carry the fields below. They stop most late arguments.

| Field | Fill in |
| --- | --- |
| RFQ number, revision and issue date | Revision letter changes whenever a table changes |
| Buyer entity and contact | Legal name, GSTIN, one named technical and one commercial contact |
| Project and end owner | Site name, state, DISCOM or captive status |
| Last date for clarification questions | A date before the bid deadline, so answers reach everyone |
| Bid deadline and quote validity | Ask for validity in days from the deadline |
| Language and format | One PDF plus the filled response sheet in editable form |
| Basis of response | Response sheet is binding; covering letters do not override it |
| Deviation rule | Any deviation must be listed in Part I. Unlisted deviations are void |

## Part B: how to write the inverter line schedule

The line schedule has one row per inverter line, using the full model designation. A family name such as "60 kW series" is not a line. If the number of units is still open, compare unit sizes first with the [inverter count guide for 100 kW to 1 MW rooftops](/blog/how-many-inverters-for-hundred-kw-to-one-mw-rooftop/).

| Line | Site | Qty | Phase and AC voltage | Proposed exact model (bidder fills) | Delivery point and date needed |
| --- | --- | --- | --- | --- | --- |
| 1 (illustrative) | Plant 1, rooftop block A | 4 | Three-phase, 415 V | | Site store, week 6 |
| 2 (illustrative) | Plant 1, rooftop block B | 2 | Three-phase, 415 V | | Site store, week 8 |

Leave the model column blank when you want the bidder to propose one against your engineering inputs. Fill it when your design is frozen. In both cases require the bidder to name the datasheet file and its revision or issue date. Our guide to reading solar inverter datasheets shows how to check that the quoted model and the document match.

## Part C: which project inputs must the bidder have?

The project inputs are the part most RFQs skip, and they carry the most information. A bidder who has to assume these values will assume the cheapest ones.

| Input | Why it changes the offer |
| --- | --- |
| Module model, Voc, Vmp, Isc, and temperature coefficients | Sets maximum string length and the current each MPPT input must carry |
| Lowest and highest expected ambient temperature at site | Cold raises string Voc, heat lowers Vmp and triggers inverter derating |
| Strings per MPPT and number of strings in parallel | Decides how many MPPT inputs the model needs |
| Design DC to AC ratio | Decides clipping and whether a smaller or larger unit fits |
| Site altitude | Some inverters derate with altitude; ask for the stated limit |
| Grid: nominal voltage, frequency, and any known voltage swing | Checks the inverter's AC window against the real feeder |
| Export condition | Full export, net metering, or zero export, with the limiting device named |
| Mounting and layout | Outdoor, shaded or open, wall or ground; clear distance to the AC distribution board |
| Monitoring need | Logger, protocol, platform access, and who owns the account |

### Worked example: why the module data goes to the bidder

This is **illustrative**, to show the arithmetic the bidder must be able to run. The values are assumptions, not a recommended design.

Assume a module with open-circuit voltage of 50 V at 25 °C and a Voc temperature coefficient of minus 0.27 percent per °C. Assume the lowest expected cell temperature at site is 5 °C, and an inverter class with 1100 V maximum DC input.

- Cold Voc per module: 50 V x (1 + 0.0027 x 20) = 52.7 V.
- 20 modules in series: 20 x 52.7 V = 1054 V, which is under 1100 V.
- 21 modules in series: 21 x 52.7 V = 1106.7 V, which is over 1100 V.

So the longest legal string in this example is 20 modules. The [1500 V string inverter guide](/blog/fifteen-hundred-volt-string-inverter-eight-hundred-vac/) works the same module at 1500 V.

If the RFQ leaves out the module Voc and the site minimum temperature, a bidder can quote a unit that is fine on paper and fails the first cold morning. Maximum DC voltage is a different limit from the MPPT window. Your designer should run the other string checks before the RFQ goes out.

For reference on what published inputs look like, Qbits datasheets list MPPT count, the MPPT voltage window and maximum DC voltage per family. For example, the [6 to 17 kW three-phase TLC family](/our-products/QB-6-17KTLC/) is listed with 180 to 1000 V MPPT and 1100 V maximum DC. Your RFQ should ask every bidder to give those same three numbers for the model it proposes.

## Part D: grid and protection clauses

For distributed generation connecting below 33 kV, the Central Electricity Authority's technical standards set clear inverter-side limits. Turn each one into a question the bidder answers with a number.

Source: Central Electricity Authority (Technical Standards for Connectivity of the Distributed Generation Resources) Regulations, 2013, first amendment dated 6 February 2019. We read the consolidated text published by CBIP, [linked here](https://www.cbip.org/cearegulations/CEA%20DATA/Connectivity/Connectivity%20Regulation/Con%20Coneectivity%20Regulations%202013.pdf), on 30 October 2026. Confirm there is no newer amendment, and read your own state regulator's and DISCOM's rules, which can set a narrower range.

| Clause topic | What the regulation says | RFQ line: bidder returns |
| --- | --- | --- |
| DC injection | Must not exceed 0.5% of full rated output at the interconnection point | Measured or declared DC injection value, with the test report reference |
| Harmonics | Current injection within IEEE 519 limits; the 2019 amendment refers to IEEE 519-2014 for limits at the point of common coupling | Total current distortion at rated power, with the test condition |
| Voltage trip | Over and under voltage trip at above 110% and below 80%, clearing within up to 2 seconds; the licensee may prescribe a narrower range | Default trip settings, adjustable range, and whether the DISCOM range can be set |
| Frequency trip | Trip at 50.5 Hz and below 47.5 Hz, clearing within up to 0.2 seconds; the licensee may prescribe a narrower range | Default settings and adjustable range |
| Reconnection | No reconnection until voltage and frequency are within limits and stable for at least 60 seconds | Default reconnection delay |
| Islanding | Must cease to energise within 2 seconds of an unintended island | Islanding detection time and the test standard used |
| Synchronisation | An inverter need not carry a separate synchronising device if one is built in | Statement that synchronisation is built in |
| Measurement | Harmonic current, DC injection and flicker are measured with calibrated meters before commissioning and once a year | Whether the inverter or logger records the data needed, and in what format |

Two notes for the RFQ cover text. First, ask the bidder to confirm that protection settings are field-adjustable and password-controlled. The DISCOM (distribution company) commissioning inspector may ask for a narrower window than the default.

Second, keep the CEIG (Chief Electrical Inspector to Government) or electrical inspector requirement as its own line item. It is a separate approval, not part of the product evidence. The [inverter-side checks an inspector can make](/blog/ceig-inspection-solar-plant-inverter-checks/) are set by the state's notification as well as the central safety regulations.

## Part E: evidence and compliance, as a flow-down

Your inverter RFQ inherits clauses from the owner's tender, and on a [PM-KUSUM plant](/blog/pm-kusum-inverter-selection/) that tender is a state RfS or PPA. The owner's text is often old, and a bidder cannot comply with a sentence they cannot measure. Do the translation yourself, once, and put it in the RFQ.

Here is a real case. An owner's RFQ for a rooftop EPC and two years of O&M at Indian Synthetic Rubber Private Limited, Panipat, lists inverter particulars in a table. It is dated August 2021 and [published on eqmagpro.com](https://www.eqmagpro.com/wp-content/uploads/2021/09/Notice-Inviting-Tender-RFQ_compressed.pdf). The right column shows how an EPC can turn each owner clause into something a bidder can answer.

| Owner clause (ISRPL RFQ, 2021) | Problem if copied unchanged | RFQ line for your bidders |
| --- | --- | --- |
| Efficiency above 97% without built-in galvanic isolation | Does not say peak, weighted or at which load point | Efficiency at the stated measure and the test standard; attach the efficiency curve |
| IP65 for outdoor use | Ingress rating is model-specific | Exact IP rating for the quoted model, from the datasheet |
| Ambient temperature considered: -20 to 50 degrees C | Operating range and derating are different things | Operating range and the output derating curve above the stated temperature |
| THD below 3% | Missing the load condition | THD at rated power, per the grid clause in Part D |
| Power factor 0.8 lag to 0.8 lead | Needs a statement about reactive power at full active power | Power factor range and whether it holds at rated active power |
| Anti-islanding per IEEE 1547, UL 1741 or IEC 62116 | Lists alternatives | The one standard the model was tested to, plus the report reference |
| Comply with IEC 61683 and IEC 62109 | Predates the 2025 product order | The BIS evidence route for the quoted model; see below |

That table is not a criticism of the owner. It shows the usual state of things: an owner writes a reasonable intent and the EPC must convert it into answerable questions.

### The BIS line

India's Solar Systems, Devices and Components Goods Order, 2025 applies to inverters used in solar PV applications. BIS (Bureau of Indian Standards) guidance names IS 16221 (Part 2) with IEC 62109-2 for safety. For utility-interconnected inverters it also names IS 16169 with IEC 62116 for islanding prevention, and IS 17980 with IEC 62891 for MPPT efficiency.

For inverters above 200 kW, trade reports in July 2026 describe an MNRE extension of a conditional self-certification route. It runs to 31 December 2026 or further orders, whichever is earlier. We could not open the gazette text, so read it yourself on [MNRE's quality control documents page](https://mnre.gov.in/en/lab-policy-standard-quality-control-documents/) before you issue the RFQ.

Do not rewrite the legal position in your RFQ. Ask one question per line:

- Which BIS route applies to this exact model (licence, or the conditional route above 200 kW)?
- Licence number, holder, standards covered and validity, or the IEC certificate and laboratory report references for the above-200 kW route.
- The same model string on the nameplate, datasheet, certificate and quote.

The [BIS registration check](https://www.crsbis.in/BIS/) is public. Our [inverter regulations guide](/blog/solar-inverter-regulations-india-2026-bis-iec-compliance/) explains how BIS, ALMM (Approved List of Models and Manufacturers) and tender evidence differ. Read it so your RFQ does not ask for an ALMM inverter certificate that does not exist.

## Send the RFQ to Qbits

Qbits sells inverters and publishes this guide, so apply the same sheet to a Qbits quote. When you [request a project quotation from Qbits](/contact-us/), attach your filled Part B and Part C. Say which owner clauses Part E has to meet. A complete sheet lets the technical team match a model against your string design rather than start with questions. Quotes are per model and quantity.

## Part F: commercial response sheet

Ask for this table, not a single total. Every bidder fills every row. A blank row means "not included", and the bidder must say so.

| Row | Bidder states |
| --- | --- |
| Seller legal name, GSTIN, quote number, date, validity | As on the quotation |
| Brand and exact model per line | Matches Part B |
| Unit price and quantity | Per line |
| GST rate and amount | Per line |
| Freight to the delivery point | Included or excluded; amount if excluded |
| Transit insurance | Included or excluded; amount if excluded |
| Unloading at site | Included or excluded |
| Accessories | Connectors, meters, sensors, mounting items, each by line |
| Communication | Logger or dongle, SIM or router, platform access, any recurring charge |
| Commissioning support | Included, on call, or excluded; days and conditions |
| Payment milestones | Event and percentage, in order |
| Dispatch time | Days from a stated start event |

Then compare on one basis:

`evaluated amount = equipment + GST + freight + insurance + required accessories + required communication scope + other accepted supply items`

Fill excluded items in as separate rows, never into the bidder's own column.

## Part G: documents, warranty and service

Ask for these with the bid, not after award:

- Current datasheet and installation manual for the exact model.
- BIS or IEC evidence from Part E, with the model matched to the document.
- Protection settings guide and communication protocol sheet.
- Warranty and service schedule for the exact model, in writing.

A datasheet mention of an expandable warranty does not tell you the base term, remedy, registration deadline or exclusions. Ask the bidder to attach the written terms for the quoted model. Do not copy a term from a brochure, an older quote or a phone call. The [bulk-buyer warranty and service checklist](/blog/inverter-warranty-service-checklist-bulk-buyers/) lists what those terms should state.

## Part H: delivery, inspection and substitution

| Item | Rule to put in the RFQ |
| --- | --- |
| Delivery | Dispatch notice with serial numbers and packing list |
| Inspection | Buyer's right to inspect on receipt, with a stated window |
| Rejection | Quarantine, notice, correction or return, cost owner |
| Substitution | No change of model, accessory or firmware without written approval from your technical owner |
| Split delivery | Lot sequence and per-lot documents |

Silence on substitution means "not approved". Say that in the RFQ.

## Part I: clarification and deviation log

Add an empty table to the response sheet with four columns: RFQ clause, bidder's deviation or assumption, price effect, and your decision. Bidders who list assumptions here are telling you the true shape of the offer. Bidders who leave it blank and then add conditions to the covering letter have not answered the RFQ.

## How to evaluate the replies

Use two passes.

1. **Pass or fail gates.** Exact model named and matched to a datasheet; BIS route stated; Part D values returned; Part C inputs acknowledged. A reply that fails a gate is not priced.
2. **Price on the evaluated amount.** Only bids that pass go to the price table, compared on the formula in Part F.

Keep any weighted score for what you can actually evidence, such as service route and documents. Do not give marks for adjectives.

## The checklist to copy

**Before you send**

- [ ] RFQ number, revision and clarification deadline set (Part A)
- [ ] Line schedule uses full model names or blank model cells with engineering inputs (Part B)
- [ ] Module Voc, Vmp, Isc, temperature coefficients and site temperature range attached (Part C)
- [ ] Strings per MPPT, design DC to AC ratio and export condition stated (Part C)
- [ ] Grid voltage, frequency and the DISCOM or regulator's own limits stated (Part D)
- [ ] Owner clauses rewritten as measurable questions (Part E)
- [ ] CEIG or inspector requirement listed as a separate line (Part D)
- [ ] Commercial sheet attached, with freight, insurance, accessories and communication as separate rows (Part F)
- [ ] Substitution rule and deviation log included (Parts H and I)

**What the bidder must return**

- [ ] Exact model per line and the datasheet file with its date
- [ ] Maximum DC voltage, MPPT window and MPPT count for that model
- [ ] Efficiency at a named measure, with the curve
- [ ] DC injection, current distortion and trip settings, each as a value
- [ ] Islanding detection time and test standard
- [ ] BIS route with licence or certificate references
- [ ] Filled commercial sheet with no blank rows
- [ ] Written warranty and service terms for the quoted model
- [ ] Deviation log, even if it says "none"

**Before award**

- [ ] Every priced bid passed the gates in "How to evaluate the replies"
- [ ] Model string matches across quote, datasheet and certificate
- [ ] Evaluated amount calculated the same way for every bidder
- [ ] Open clarifications closed in writing
- [ ] Final order file carries the accepted schedules, as the procurement checklist describes

## Where this template stops

It does not set your price, and it does not replace legal and tax review of the final order. Grid rules differ by state and DISCOM, so the CEA regulation is a floor to check against, not the whole approval. The Part D and Part E rows are a starting point; your tender or scheme may add its own.

## Next step

If your RFQ is ready, [send it to Qbits for a project quotation](/contact-us/) with Part B and Part C filled. If you are still choosing models, the [Qbits datasheet library](/download-datasheets/) shows the published MPPT, voltage and efficiency figures per family. Use them to fill the bidder-return columns for a comparison.
