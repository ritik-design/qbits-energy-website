---
title: "Which Inverter Capacities Sell? Stock Planning for New Dealers"
seoTitle: "Solar Inverter Stock Planning for New Dealers"
excerpt: "No official sales split by inverter size exists. Use sourced PM Surya Ghar data, a reorder formula and a six-month cash plan to choose which capacities to stock."
description: "Solar inverter stock planning for new dealers in India: what PM Surya Ghar demand data, reorder point and safety stock maths, ABC/XYZ ranking, a six-month plan."
category: "Business"
date: 2026-10-30
readTime: "21 min"
image: "/og/blog-solar-inverter-stock-planning-new-dealers.webp"
author: "Akash Hirapara"
keywords:
  - solar inverter stock planning
  - solar inverter inventory for dealers
  - which solar inverter capacity sells most
  - solar dealer stock planning
  - inverter reorder point
  - safety stock solar dealer
relatedSlugs:
  - working-capital-solar-dealers
  - solar-distributor-credit-territory-terms
  - 3kw-vs-5kw-vs-10kw-solar-inverters
  - how-solar-installers-get-customers
  - net-metering-capacity-limits-commercial-by-state
---

**No public source splits Indian inverter sales by capacity, so solar inverter stock planning cannot start from a "stock 5 kW first" ranking.** What you can source is the shape of demand: the government publishes installation counts by state and says most PM Surya Ghar systems (the central rooftop solar subsidy scheme for homes) are above 3 kWp. What you cannot source, you measure from your own enquiry log and turn into a reorder rule that fits your cash.

This guide covers both. It shows what the official numbers support and what they do not. It then gives the stock arithmetic a new dealer needs: months of cover, reorder point, safety stock, ABC/XYZ ranking, a minimum range and a worked six-month plan under a stated cash limit. It names no brand's terms, and it does not say which Qbits models sell, how many anyone sells, or what Qbits offers dealers.

All sourced figures are as of **30 October 2026**, and the Lok Sabha figures and the scheme end date were checked again on **31 October 2026**. Every rupee figure in the plan is **assumed for illustration**, not market data and not any supplier's price.

> **Short version**
> - There is no official sales split by inverter size. The Press Information Bureau (PIB) and Parliament replies give installation counts by state, and a Lok Sabha reply splits systems into up to 2 kWp, 2 to 3 kWp and above 3 kWp.
> - The subsidy is paid on the module (DC) capacity, in slabs that stop at 3 kWp. It is not tied to the inverter size, so do not read subsidy slabs as inverter classes.
> - Start with about seven classes: three single-phase (3, 5, 6 kW) and four three-phase (10, 15, 25, 50 kW). Stock the fast, steady ones. Order the rest against a customer's deposit.
> - Cash limit decides stock more than interest does. Plan the limit first, then spread it by class.
> - Treat 31 March 2027, the scheme's current end date, as a demand cliff until an official extension is published.

## What does official data say about demand by inverter size?

Primary documents support every figure in the rows below. The average size per installation is our own arithmetic.

| Fact | Figure | Source and date |
| --- | --- | --- |
| Systems installed under PM Surya Ghar | 26,19,879 as on 19 March 2026 | [PIB release, 24 March 2026](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2244670&reg=3&lang=2), a Rajya Sabha reply with a state-wise annexure |
| Capacity added | 9,566.89 MW as on 20 March 2026 | [PIB release, 25 March 2026](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2245159&reg=3&lang=2) |
| Average size per installation | About 3.65 kW | Our arithmetic: 9,566.89 MW divided by 26,19,879 systems. The two dates differ by a day and the release does not say whether capacity is DC. |
| Systems installed | 40,07,355 as of 24 July 2026 | [Lok Sabha Starred Question 152, answered 29 July 2026](https://sansad.in/getFile/lsapps/loksabhaquestions/annex/188/AS152_u4SoLD.pdf), opened on 31 October 2026. A later reply, [Unstarred Question 1698](https://sansad.in/getFile/lsapps/loksabhaquestions/annex/188/AU1698_2rIKl9.pdf) of the same day, gives 40,45,298 as on 27 July 2026. |
| Systems above 3 kWp | 35,97,361, which is about 90% of the 40,07,355 (89.8%). The same table lists 68,857 up to 2 kWp and 3,41,066 above 2 and up to 3 kWp | Starred Question 152, capacity-wise table. The table adds up to 40,07,284, 71 fewer than the headline figure. The 90% is our division. |
| Daily pace | 5,038 a day in October 2025 and nearly 16,328 a day in July 2026 | [PIB release, 4 August 2026](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2294208&reg=48&lang=2) |
| Registered vendors | 34,219, of whom 29,469 are active | Same PIB release |

Three things follow for a stock plan.

**Most subsidised homes are 3 kWp or more.** About nine in ten systems are above 3 kWp, so a dealer who stocks mostly small inverters is stocking for the minority. But the numbers do not say how many are 3.5, 4, 5 or 10 kWp. The Lok Sabha reply gives three capacity buckets, and we found no published split inside the "above 3 kWp" group.

**DC kWp is not inverter kW.** The scheme counts module capacity. An installer can pair a 3.6 kWp array with a 3 kW inverter, or with a 4 kW one, depending on the design. Our guide to [3, 5 and 10 kW inverter choices](/blog/3kw-vs-5kw-vs-10kw-solar-inverters/) shows why the array, not the round number, picks the inverter. So an average near 3.65 kW of modules does not mean "stock 3.65 kW inverters". It means the 3 kW to 5 kW single-phase classes are where your installers' homes will probably cluster, and your own log has to settle where.

**The subsidy average points the same way.** The PIB annexure gives Rs 17,967.53 crore of central assistance released for 22,88,593 paid installations, which is about Rs 78,500 each. The general-category cap is Rs 78,000. An average that close to the cap is consistent with most paid systems sitting at 3 kWp or above. This is our inference from two official numbers, not a published split.

## The subsidy slabs, and why they are not inverter classes

The guidelines of the Ministry of New and Renewable Energy (MNRE) for the residential scheme (the PDF uploaded in July 2025, read on 30 October 2026 and again on 31 October 2026; the press reports a second amendment dated 31 August 2026, which we could not open, so later amendments are not checked) set the central assistance on the module capacity.

| Residential segment | General category | Special category states and UTs |
| --- | --- | --- |
| First 2 kWp | Rs 30,000 per kWp | Rs 33,000 per kWp |
| Third kWp | Rs 18,000 per kWp | Rs 19,800 per kWp |
| Beyond 3 kWp | No additional assistance | No additional assistance |
| Highest total | Rs 78,000 (3 kWp) | Rs 85,800 (3 kWp) |

Two clauses of the scheme guidelines matter to a dealer.

**Clause k of the guidelines says the assistance is "irrespective of the size of the inverter installed".** If the inverter rating is higher or lower than the module capacity, assistance follows the rated DC capacity of the modules. The inverter must still meet the scheme's technical specification. So a 3 kWp buyer is not forced into a 3 kW inverter, and a 5 kWp buyer gets the same Rs 78,000 as a 3 kWp buyer. The subsidy creates a break at 3 kWp in the buyer's payback, not a break in inverter size.

**The scheme period is the biggest planning fact.** The guidelines say the implementation period runs to 31 March 2027. We searched for an official extension notice on 30 and 31 October 2026 and found none. A Lok Sabha reply of 12 August 2026 ([Starred Question 352](https://sansad.in/getFile/lsapps/loksabhaquestions/annex/188/AS352_Kiqj4B.pdf)) still gives 31 March 2027 as "the end of the scheme", and MNRE's monthly Policy & Regulatory Updates for September 2026 lists no extension. Press and installer blogs report that an extension is under consideration, but we could not confirm it from MNRE or PIB. Plan as if the end date holds, and check pmsuryaghar.gov.in before each large order.

This is also a residential scheme. It does not fund a 25 kW or 50 kW factory rooftop. Do not read the residential figures above as a forecast for three-phase commercial demand.

## Which states buy most? Read recent shares, not the cumulative table

The PIB annexure of 24 March 2026 lists installations by state and by period. Cumulative installations to 19 March 2026, from our sums of its rows:

| State | Installations | Share of 26,19,879 |
| --- | --- | --- |
| Gujarat | 5,94,899 | 22.7% |
| Maharashtra | 4,90,489 | 18.7% |
| Uttar Pradesh | 4,20,823 | 16.1% |
| Kerala | 2,09,641 | 8.0% |
| Rajasthan | 1,59,566 | 6.1% |
| Andhra Pradesh | 1,14,302 | 4.4% |
| Madhya Pradesh | 1,04,458 | 4.0% |
| Assam | 1,02,187 | 3.9% |

The top three states hold about 57% and the top five about 72%. But the cumulative column hides how fast shares move. Gujarat had 41.7% of 2024 installations (13 February to 31 December), 18.1% of 2025 and 14.9% of 1 January to 19 March 2026. Uttar Pradesh went from 10.2% to 17.8% to 17.7%. Odisha went from 1,395 installations in 2024 to 26,218 in 2025.

The lesson is practical. A state that led last year may not lead next quarter, and the rules each distribution company (DISCOM) applies differ. Use these tables to see which states are active, then size your stock from enquiries in your own district.

## The phase gate decides single-phase stock

Whether a home takes a single-phase or three-phase inverter depends on its connection, and states differ.

- **Odisha:** the OERC Supply Code, as quoted in OERC Case No. 16/2019, sets single-phase 230 V supply for a contract demand not exceeding 5 kW or 5.55 kVA. We read it as quoted in that order; later amendments may exist.
- **Gujarat:** the Fifth Amendment to the net-metering regulations, notified on 3 November 2025, substituted regulation 8(2) so that the connection level follows the supply voltage level in the GERC Supply Code. It no longer states a kW limit in that clause, so check the current Supply Code for the figure.
- **Centre:** the 2024 amendment to the Electricity (Rights of Consumers) Rules removed the technical feasibility study for rooftop systems up to 10 kW and made the DISCOM bear distribution strengthening up to 5 kW ([PIB, 23 February 2024](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2008289)). Systems above 10 kW still face a feasibility study, with the timeline cut from twenty days to fifteen.

For you, that means a single-phase 6 kW unit sells only where local rules allow single-phase service at that load. In a state with a lower limit, the same home buys a three-phase 5 or 6 kW unit instead. Our guide on [single-phase versus three-phase inverters](/blog/single-vs-3-phase-inverter/) explains the choice from the buyer's side. For your stock, ask three installers in your district what phase their last ten homes had, and set the single-phase 6 kW line from that.

## The capacity classes, and what a family range can and cannot tell you

A dealer's catalogue is a set of classes, each with a different buyer, phase and sales pattern. The right column shows the power range and phase of Qbits families from Qbits' published product data, only as examples of which family covers which class. It is not a statement of what sells.

| Class | Phase | Typical buyer | Qbits family range, as an example only |
| --- | --- | --- | --- |
| 3 kW | Single | Small home, often a subsidy job | On-grid 1.5 to 4 kW |
| 5 kW | Single | Larger home | On-grid 4.2 to 6 kW and 4 to 6 kW (two families) |
| 6 kW | Single, where the DISCOM allows | Larger home, small shop | On-grid 4.2 to 6 kW |
| 10 kW | Three | Big home, shop, small business | On-grid 5 to 17 kW |
| 15 kW | Three | Shop, school, small unit | On-grid 5 to 17 kW |
| 25 kW | Three | Small factory | On-grid 20 to 30 kW |
| 50 kW | Three | Factory, institution | On-grid 40 to 50 kW, 50 to 60 kW |
| 100 kW and above | Three | Large commercial roof | On-grid 70 to 110 kW and 80 to 125 kW; 225 to 320 kW |
| Hybrid | Single and three | Homes needing backup | Hybrid 3 to 8 kW single, 5 to 12 kW three |

Each Qbits family covers several models, and each model has its own datasheet. See the Qbits inverter families and datasheets, and check the exact model for MPPT count, voltage window and approvals before you promise anything to an installer.

We found no sourced national split between on-grid and hybrid. The scheme guidelines allow battery storage as an add-on, but assistance still follows module capacity. Treat hybrid as an order-on-enquiry line until your own log shows repeat demand.

## Read your own demand before you read anyone else's

Your enquiry log is the only demand data that is about your district. Keep it from the first week, one row per enquiry.

| Field | Why you need it |
| --- | --- |
| Date and source | Shows seasonality and which channel feeds which class |
| Capacity asked, in kW DC and AC | Your class demand |
| Phase and sanctioned load | Whether single-phase or three-phase stock is needed |
| Subsidy job or not | Separates scheme demand, which can end, from private demand |
| Quote sent, date | Conversion needs a denominator |
| Won or lost, and reason | Tells you whether you lost on price, approval delay or stock-out |
| Days from order to DISCOM sanction | Sets how soon after an order stock is needed |

Convert the log into a monthly unit demand per class with this chain:

`monthly units = enquiries x share quoted x quote-to-order rate`

Illustration: 30 enquiries a month for 5 kW, 60% reach a quote, 22% of quotes become orders. That gives 30 x 0.6 x 0.22 = about 4 units a month. Those rates are assumed. Yours will differ, and they will differ by class, so compute them per class.

Record lost reasons carefully. "Stock-out" is the one reason that is yours to fix. Our guide to [how installers get customers](/blog/how-solar-installers-get-customers/) shows how to track orders by channel, and the same table feeds this one. Use at least 8 to 12 weeks of rows before you trust a rate, and say so to yourself in writing when the sample is small.

## Solar inverter stock planning: reorder point and safety stock in four lines

For each class, with demand `D` in units per month, lead time `L` in months and a service factor `z`:

1. **Months of cover** = units in stock divided by `D`.
2. **Safety stock** = `z` x (standard deviation of monthly demand) x square root of `L`.
3. **Reorder point** = `D` x `L` + safety stock. Reorder when stock falls to this.
4. **Order-up-to level** = reorder point + one month's demand, if you reorder monthly.

A `z` of 1.28 gives about a 90% chance of not stocking out during the lead time, using a normal approximation. It is a common planning choice, not a rule.

Worked example for 5 kW single-phase, with every input assumed: `D` = 4 units a month, standard deviation 1.4 units, `L` = 0.5 month (about two weeks, an assumed supplier replenishment time, not any brand's), `z` = 1.28.

- Safety stock = 1.28 x 1.4 x 0.71 = about 1.27 units.
- Reorder point = 4 x 0.5 + 1.27 = 3.27, which rounds up to 4 units.
- Order-up-to level = 4 + 4 = 8 units, which is 2.0 months of cover at its peak.

With units this small, treat the formula as a way to compare classes, not as precision. A dealer selling one 25 kW unit every three months has no statistics worth using, and the right rule is not to stock it.

**The cost of holding is smaller than it looks.** At an assumed 12% a year cost of funds, one Rs 28,000 5 kW unit costs about Rs 280 a month to hold. The bigger risks are cash you cannot spare and models that change. Our [working capital guide](/blog/working-capital-solar-dealers/) covers the rest of the cash cycle, including customer credit.

## How do you rank each stock-keeping unit (SKU) by value and steadiness?

**ABC** ranks classes by the cash they turn over. **XYZ** ranks them by how steady their demand is. Together they decide which stock policy each class gets.

Illustrative inputs, all assumed: a dealer expects the monthly demand and landed unit costs below. The coefficient of variation (CV) is standard deviation divided by mean. X means CV under 0.5, Y means 0.5 to 1.0, Z means above 1.0. For ABC, A is the classes up to 80% of cumulative value, B takes the next 10%, and C is the rest.

| Class | Units a month | Assumed unit cost | Monthly value | Cumulative share | CV | ABC and XYZ |
| --- | --- | --- | --- | --- | --- | --- |
| 5 kW single | 4 | Rs 28,000 | Rs 1,12,000 | 28.6% | 0.35 | A, X |
| 10 kW three | 1.5 | Rs 52,000 | Rs 78,000 | 48.5% | 0.6 | A, Y |
| 3 kW single | 3 | Rs 18,000 | Rs 54,000 | 62.2% | 0.3 | A, X |
| 50 kW three | 0.2 | Rs 2,10,000 | Rs 42,000 | 73.0% | 2.0 | A, Z |
| 15 kW three | 0.5 | Rs 75,000 | Rs 37,500 | 82.5% | 1.0 | B, Y |
| 25 kW three | 0.3 | Rs 1,15,000 | Rs 34,500 | 91.3% | 1.5 | C, Z |
| 6 kW single | 1 | Rs 34,000 | Rs 34,000 | 100% | 0.8 | C, Y |

Total monthly value is Rs 3,92,000. Apply this policy grid:

| | X (steady) | Y (variable) | Z (lumpy) |
| --- | --- | --- | --- |
| **A (high value)** | Stock to the formula, review weekly | Stock to the formula with a cap | Order against a signed order and deposit |
| **B** | Stock to the formula | Hold a small buffer of one or two units | Order against an order |
| **C** | Stock one demo or buffer unit | Hold the minimum, review every month | Do not stock |

Look at what the grid does to the 50 kW line. It carries 10.7% of value but sells one unit every five months, so it is an A by value and a Z by steadiness. The rule is advance order, not shelf stock. Position it that way from day one.

## The minimum viable range

Seven classes are enough to start: single-phase 3, 5 and 6 kW, and three-phase 10, 15, 25 and 50 kW. Skip these until your log gives a reason:

- **Hybrid.** Hold a demo unit if you quote backups, and order the rest against a deposit.
- **Every in-between rating.** A 4 kW or 8 kW unit is a different SKU with its own cost. Quote from the classes above, and only add an in-between rating after three or more repeat enquiries.
- **100 kW and above.** Treat it as a project order, never as shelf stock. Our guide to [net-metering limits for commercial consumers](/blog/net-metering-capacity-limits-commercial-by-state/) shows why the state sets the ceiling before the inverter does.

If you plan to resell Qbits inverters, the [partner application](/become-our-partner/) is the next step. You give your business details and a review starts. No commercial terms are set there, and none are stated in this article, so base your stock budget on any written proposal you receive and the arithmetic here.

## Advance order or stock for 50 kW to 100 kW units?

The 2024 Rights of Consumers amendment, as reported by PIB, means a rooftop system above 10 kW goes through a feasibility study that can take up to fifteen days, after which approval is deemed granted if the DISCOM misses the deadline. That gap between a signed order and a sanctioned connection is when an advance order has time to arrive. Use this test for every large unit.

| Question | If yes | If no |
| --- | --- | --- |
| Is there a signed order with a deposit? | Order from the supplier | Do not order |
| Does the supplier's written lead time fit before the customer's site date? | Order against the order | Ask for a later date, or pass |
| Does the deposit plus your free headroom cover the cost? | Place the order | Wait, or require a larger deposit |
| Is the customer's DISCOM approval and net-metering route confirmed? | Place the order | Hold until it is |

Stock a large unit on spec only if you have named buyers for it within a quarter. One 50 kW unit at the assumed Rs 2,10,000 is more cash than eleven 3 kW units.

## What you can and cannot say about seasonality

A common rule says summer is the peak, monsoon is the trough and March is the rush. **We found no dated national monthly series of residential inverter sales that tests it.** The official data we could open show something different from a weather season. The pace under PM Surya Ghar tripled in nine months, and July 2026, a monsoon month, was the highest monthly figure so far at 5.06 lakh households benefited, according to the PIB release of 4 August 2026. Scheme timing, DISCOM approval speed and subsidy payment drove those numbers, not the weather.

So track these drivers, in this order:

1. **The scheme end date and any official extension.** Check pmsuryaghar.gov.in before each large order.
2. **Your DISCOM's approval backlog.** An order you cannot connect is stock you cannot invoice.
3. **Your own monthly counts, from the log.** After a full year you will have a seasonal pattern of your own, and until then you have none.

Weather still affects installation and service work. See our guides on [inverter summer derating](/blog/solar-inverter-summer-derating-india/) and [monsoon preparation](/blog/monsoon-solar-prep/) for the effect on installed systems, which is a different question from what sells. We do not claim an effect of weather on order volume.

## A six-month plan with a Rs 10 lakh stock limit

Take a new dealer who can hold at most **Rs 10,00,000 of inverter stock at cost** at any time. Receivables and other costs sit outside this limit. The period is November 2026 to April 2027, which crosses the scheme end date. Every number below is assumed, including a rush in February and March and a fall in April.

**Starting stock** uses the order-up-to levels from the formula, rounded to whole units:

| Class | Reorder at | Hold up to | Cost per unit | Stock cost at the top level |
| --- | --- | --- | --- | --- |
| 3 kW single | 3 | 6 | Rs 18,000 | Rs 1,08,000 |
| 5 kW single | 4 | 8 | Rs 28,000 | Rs 2,24,000 |
| 6 kW single | 2 | 3 | Rs 34,000 | Rs 1,02,000 |
| 10 kW three | 2 | 4 | Rs 52,000 | Rs 2,08,000 |
| 15 kW three | 1 | 2 | Rs 75,000 | Rs 1,50,000 |
| 25 kW three | none | none | Rs 1,15,000 | Order against a deposit |
| 50 kW three | none | none | Rs 2,10,000 | Order against a deposit |
| **Total** | | | | **Rs 7,92,000** |

That leaves Rs 2,08,000 of headroom. At 12% a year, holding Rs 7,92,000 costs about Rs 7,920 a month.

**Month by month.** The base sales at cost for the five stocked classes are Rs 3,15,500 a month (the sum of their monthly values in the table above). The demand multiplier is assumed.

| Month | Assumed demand against base | Stocked-class sales at cost | Stock level after replenishment | Headroom under Rs 10 lakh |
| --- | --- | --- | --- | --- |
| November 2026 | 1.0 | Rs 3,15,500 | Rs 7,92,000 | Rs 2,08,000 |
| December 2026 | 1.0 | Rs 3,15,500 | Rs 7,92,000 | Rs 2,08,000 |
| January 2027 | 1.0 | Rs 3,15,500 | Rs 7,92,000 | Rs 2,08,000 |
| February 2027 | 1.2 | Rs 3,78,600 | Rs 9,18,000 | Rs 82,000 |
| March 2027 | 1.4 | Rs 4,41,700 | Rs 9,41,000 | Rs 59,000 |
| April 2027 | 0.6 | Rs 1,89,300 | Rs 5,11,000 | Rs 4,89,000 |

How the February to April levels are set:

- **February** scales the levels by 1.2: 7 x 3 kW, 10 x 5 kW, 3 x 6 kW, 5 x 10 kW and 2 x 15 kW, which costs Rs 9,18,000.
- **March** scales by 1.4 but the limit binds. A full scale-up would cost about Rs 11,08,800 before rounding up to whole units. So the plan holds 8 x 3 kW, 11 x 5 kW, 3 x 6 kW, 6 x 10 kW and only 1 x 15 kW, which costs Rs 9,41,000. The two stocked lines that rank lowest by value, 6 kW and 15 kW, give way first.
- **April** is cut to 0.6 of base. Levels fall to 4 x 3 kW, 5 x 5 kW, 2 x 6 kW, 3 x 10 kW and 1 x 15 kW, which costs Rs 5,11,000.

**If the rush comes,** March sales of Rs 4,41,700 take stock down to Rs 4,99,300 before replenishment. Only about Rs 11,700 is then needed to reach the April level, and the extra stock bought for the rush has sold.

**If the rush does not come,** March sells only the base Rs 3,15,500. Stock left is Rs 9,41,000 minus Rs 3,15,500, or Rs 6,25,500, against an April target of Rs 5,11,000. The excess is Rs 1,14,500, which is 11.5% of the limit. That is the real cost of planning for a rush that fails to appear. It is a limit-sized lesson, not a catastrophe, because the plan scaled only the steady lines.

**The 25 kW and 50 kW lines** are ordered only against a signed order and deposit. Suppose the supplier, assumed here, wants payment before dispatch and the customer pays a 30% deposit. Then a 50 kW order leaves Rs 1,47,000 of your cash out, which is 70% of Rs 2,10,000. That fits the Rs 2,08,000 headroom in winter, but not the Rs 59,000 headroom in March. To place that order in March you would need either a deposit of about 72% (Rs 1,51,000), or stock to sell down first.

The point of the plan is the order of decisions: set the limit, size the steady lines, then let the lumpy lines wait for a deposit.

## Exit rules for slow movers

Write the exit rule before you buy, because deciding later is slower and more expensive. A unit becomes a slow mover when any one of these holds:

- Stock exceeds **3 months of cover** at the trailing 90-day run-rate.
- It has not sold in **90 days**.
- The supplier announces a model change or a superseded approval for it.
- It was bought for a deadline, and the deadline has passed.

Then, in order:

1. Stop reordering that line.
2. Offer it first to installers who already buy from you.
3. Price it to recover its cost plus the carrying cost, not to chase the original margin.
4. Ask the supplier in writing whether returns or exchanges are accepted for that model. Do not assume they are.
5. Record the loss, and cut the class's top level for the next cycle.

Our guide on [distributor credit and territory terms](/blog/solar-distributor-credit-territory-terms/) lists the scenarios, such as a model change, that you should settle in writing before the first stock order.

## Before your first purchase order

1. **Write the cash limit** for inverter stock at cost, apart from receivables and costs.
2. **Open the enquiry log** and record 8 to 12 weeks before committing to more than a demo set.
3. **Pick the seven classes**, then drop any class your installers do not ask for.
4. **Compute each reorder point and top level,** and check the total against the limit.
5. **Mark the lumpy classes** (25 kW and above) as order-against-deposit.
6. **Check phase rules** with your DISCOM for the single-phase 6 kW line.
7. **Write the exit rule** and the review date for every class.
8. **Check the scheme end date** at pmsuryaghar.gov.in before the order.

## Where to go next

Decide the limit and the classes first, then the supplier. If Qbits is on your shortlist of inverter brands, send the [Qbits partner application](/become-our-partner/) with your business details. Applying opens a review and this guide lists no terms, so keep your budget tied to a written proposal and the method above.
