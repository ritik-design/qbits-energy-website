---
title: "MNRE Inverter Data Localization Rules for PM Surya Ghar"
excerpt: "MNRE now requires every inverter OEM under PM Surya Ghar to host monitoring data inside India and file a written confirmation with REC. Here is what an EPC has to check before the window closes."
description: "MNRE's inverter data localization rules under PM Surya Ghar require India-hosted monitoring servers and a written OEM confirmation to REC within 30 days. What EPCs must ask suppliers, and the project risk if a brand does not file."
category: "Policy"
date: 2026-08-22
readTime: "17 min"
image: "/blog-images/solar-inverter-certifications.svg"
author: "Keyur Rakholiya"
keywords:
  - mnre inverter data localization
  - inverter data localization pm surya ghar
  - mnre inverter data storage india servers
  - inverter oem annexure i rec confirmation
  - mnre rooftop solar data security guidelines
faqs:
  - q: "What are the MNRE inverter data localization rules under PM Surya Ghar?"
    a: "The Ministry of New and Renewable Energy requires that application servers, monitoring and control servers, cloud platforms, and the associated real-time data for rooftop solar systems under PM Surya Ghar Muft Bijli Yojana are stored within India's geographical boundaries, in an encrypted and protected environment. The requirement sits on top of earlier secure communication guidelines for inverters, dataloggers, and remote monitoring systems issued from July 2025 onward. Inverter manufacturers supplying into the scheme must confirm in writing that they comply. The confirmation goes to REC with a copy to MNRE."
  - q: "What is the deadline for inverter OEMs to confirm compliance to REC?"
    a: "The memorandum gives inverter manufacturers 30 days from the date of issue to send a written confirmation in the prescribed Annexure-I format to REC, with a copy to MNRE. Trade press has reported the memorandum as dated 17 August 2026, which puts the calculated window in mid September 2026. Treat that date as indicative rather than final. The binding date is the one printed on the memorandum your supplier received, so ask the OEM for the dated copy and confirm the filing date with REC rather than relying on a secondary report."
  - q: "What happens to my project if my inverter brand does not file the confirmation?"
    a: "An OEM that misses the confirmation window is not permitted to install its systems on rooftop solar installations under the scheme. The manufacturer carries the compliance obligation, but the commercial loss lands on the installer holding the open quotation. If a brand drops out, every affected project needs an inverter substitution, and any file already submitted to the DISCOM with that make and model will need the change recorded. Nothing here penalises a system already commissioned, but it does affect what you can quote and install going forward."
  - q: "Does this rule apply to inverters outside PM Surya Ghar?"
    a: "The memorandum is written for rooftop solar systems under PM Surya Ghar Muft Bijli Yojana, so a non-subsidy commercial rooftop or an open-access project is not directly covered by this instrument. In practice the distinction is thinner than it looks. An OEM does not usually run two separate data architectures, one inside India for subsidy projects and one offshore for everything else. Manufacturers that move their monitoring stack into India for the scheme generally move the whole stack. Confirm the scope with the OEM rather than assuming either way."
  - q: "Do I need to install extra monitoring hardware to comply?"
    a: "No new hardware obligation falls on the installer through this memorandum. The requirement is directed at inverter manufacturers and concerns where their servers sit, how their dataloggers communicate, and what they report to the national portal. The practical installer task is verification, not procurement. Confirm the inverter you are quoting comes from an OEM that has filed, and that its datalogger and communication module are the tested variants the OEM has declared, not a substituted third-party dongle."
  - q: "Is continuous live data now required from every rooftop system?"
    a: "Not at this stage. Industry reporting on the scheme's integration work indicates that daily submission of cumulative generation data, together with historical aggregates through a uniform interface, satisfies the current requirement. That is a different obligation from PM KUSUM, where live telemetry at short intervals is the norm. The distinction matters for connectivity planning in weak-signal areas, because a daily upload tolerates intermittent coverage in a way that live streaming does not."
  - q: "What is an M2M SIM and why does it matter for inverter compliance?"
    a: "M2M stands for machine to machine. An M2M SIM is a cellular SIM issued for device connectivity rather than consumer use, with the identity and routing controls that let an operator and a regulator account for which device is transmitting. MNRE's secure communication guidelines have required communication devices including dongles and dataloggers to use M2M SIMs. It matters because it moves inverter connectivity from a household broadband dependency to a managed cellular link, and it raises a cost question about who pays for that connectivity across the life of the system."
  - q: "How does data localization relate to ALMM and BIS requirements for inverters?"
    a: "They are three separate checks and a compliant inverter has to clear all of them. ALMM governs which models and manufacturers are approved for use in government-linked and subsidised projects. BIS certification covers product safety and grid-interaction standards against specified IS and IEC test methods. Data localization governs where the monitoring data goes and how the device communicates. An ALMM-listed, BIS-certified inverter from an OEM that has not filed its data confirmation is still a problem under the scheme, which is why the three checks belong in the same procurement gate."
  - q: "Where can I read the original memorandum?"
    a: "The memorandum and the earlier secure communication guidelines are issued by the Ministry of New and Renewable Energy and circulated to inverter manufacturers and implementing agencies. Ask your inverter supplier for the dated copy they received, since OEMs are the addressees. For the authoritative text and the current filing position, check the MNRE website and confirm directly with REC, which is the receiving agency for the Annexure-I confirmation. Rules under this scheme have changed several times, so verify the current position before acting on any summary, including this one."
---

An EPC running rooftop volume under PM Surya Ghar usually has one inverter brand written into every open quotation. That brand is a line in the bill of quantities. It is also a make and model on the [DISCOM](/glossary/discom/) net-metering application, and a serial number on the subsidy claim. The Ministry of New and Renewable Energy has now issued an office memorandum that can remove some of those brands from the scheme inside 30 days. The memorandum is addressed to inverter manufacturers. The commercial loss, if a manufacturer does not respond, lands on the installer holding the quotation.

> **Direct answer.** MNRE requires that all application servers, monitoring and control servers, cloud platforms, and the real-time data associated with rooftop solar systems under [PM Surya Ghar Muft Bijli Yojana](/glossary/pm-surya-ghar/) reside within India, in an encrypted and protected environment. Every inverter OEM must send a written confirmation in the prescribed Annexure-I format to REC, copied to MNRE, within 30 days of issue. An OEM that misses that window is not permitted to install its systems on rooftop solar installations under the scheme. OEMs must also fold datalogger warranty into the inverter warranty and push daily generation data to the national portal through a uniform interface.

**Short version for an EPC:**

- The obligation is the manufacturer's. The project risk is yours.
- Data residency means servers, cloud, and real-time data inside India's geographical boundaries.
- Written confirmation goes to REC with a copy to MNRE, in the Annexure-I format, within 30 days of issue.
- Trade press reports the memorandum as dated 17 August 2026. Verify the operative date with your supplier before you rely on it.
- Datalogger warranty must sit inside the inverter warranty, so the dongle stops being a separate 1-year part.
- Daily cumulative generation data to the national portal, not live telemetry at PM KUSUM intervals.
- This is a third compliance check alongside [ALMM listing](/glossary/almm-list/) and [BIS certification](/glossary/bis-certification/), not a replacement for either.

This guide is written for the EPC contractor or PM Surya Ghar registered vendor running rooftop volume across one or more DISCOM territories. It does not summarise the scheme back to you. It covers which of your open projects carry risk, what to ask your inverter supplier this week, and what happens to a net-metering file if the inverter make has to change after submission.

## What the Memorandum Actually Requires

Strip out the preamble and there are four operative requirements. Each one lands on a different part of the OEM's business, which is why some manufacturers will file inside the window and some will not.

**Data residency.** Application servers, monitoring and control servers, cloud platforms, and the associated real-time data for rooftop systems under the scheme must be stored within India's geographical boundaries, in an encrypted, secure and protected environment. For an OEM running monitoring out of an offshore cloud region, this is not a settings change. It is a migration of the monitoring stack into Indian data centres, with the account structure and IT re-architecture that implies.

**Written confirmation.** Every inverter manufacturer must send a written confirmation to REC, copied to MNRE, in the prescribed Annexure-I format, within 30 days of the memorandum's issue. The confirmation covers adherence to the earlier secure communication guidelines as well as the data residency position.

**Datalogger warranty inside the inverter warranty.** The datalogger can no longer carry a shorter separate term than the inverter it reports on. This is a quieter change than data residency, but it has a real service-cost consequence for the OEM, and it removes a common gap that installers have been absorbing on call-backs.

**Daily generation data to the national portal.** OEMs must push daily cumulative generation data through a uniform interface so the scheme has a vendor-neutral view across the installed base.

The enforcement wording is the part worth reading twice. An OEM that does not file inside the window is not allowed to install its systems on rooftop solar installations under the scheme. That is a supply-side exclusion. It does not fine anyone and it does not invalidate a commissioned system. It removes the brand from what you are allowed to quote and install under PM Surya Ghar.

## The Compliance Chain Behind This One Memorandum

This memorandum did not arrive on its own. It closes a sequence that has been building since mid 2025, and reading it without the chain makes it look more sudden than it is.

| When | Instrument | What it established |
| --- | --- | --- |
| July 2025 | MNRE draft security guidelines for rooftop inverters and communication devices | Direct communication of installed inverters with MNRE-designated national servers; vendor-neutral, open protocol architecture; M2M SIMs for communication devices |
| September 2025 | Integration testing begins | OEMs start connecting devices to a centralised national software platform over M2M SIM links |
| December 2025 | Follow-up compliance requirements | Extends the secure communication framework issued earlier in the year |
| March 2026 | Testing guidelines for inverter RMS and dataloggers | Uniform testing framework so inverters and monitoring devices can connect to the centralised national portal; interim testing platform opened for OEMs and EPCs |
| August 2026 | Data localization memorandum with Annexure-I confirmation | Servers, cloud, and real-time data inside India; 30-day written confirmation to REC; datalogger warranty folded into inverter warranty; daily generation data via uniform interface |

The pattern is straightforward. MNRE spent a year building the technical framework, opened a testing platform so manufacturers could prove conformance, and has now attached a filing deadline with an exclusion behind it. A manufacturer that engaged with the testing platform in the spring has a short administrative task in front of it. A manufacturer that did not has a migration project and 30 days.

## Why MNRE Is Forcing Data Residency Now

The scale argument comes first. PM Surya Ghar targets 10 million rooftop systems totalling roughly 30 GW, according to [pv magazine](https://www.pv-magazine.com/2025/08/11/india-mandates-rooftop-monitoring-and-inverter-integration-for-30-gw-of-solar/), 2025. Ten million grid-connected devices that accept remote commands is a different security object from ten million appliances.

The stated concern is control, not privacy. MNRE has noted that inverter communication modules transmitting data outside India create a risk of unauthorised control, and that a large installed base communicating with third-party OEM servers could in principle be used to manipulate inverter operation. Coordinated manipulation across a distributed fleet is a grid-stability question, which is why the ministry has framed this as energy sovereignty rather than data protection.

The trigger was external. Reporting through 2025 covered the discovery in the United States of communication components in imported inverters that did not appear in the product literature. Whatever one makes of that specific episode, it changed how regulators everywhere look at a device that sits behind a meter, holds a cellular link, and can be told to change its output.

There is a domestic-industry dimension too. Charusmita, director at Statcon Energiaa, argued in [pv magazine](https://www.pv-magazine.com/2025/08/11/india-mandates-rooftop-monitoring-and-inverter-integration-for-30-gw-of-solar/), 2025 that servers, remote monitoring, and firmware should all be hosted in India for national security reasons, and pressed for the requirement to reach systems already installed. The retrospective question is still open. This memorandum is written forward, not backward.

## The Architecture Your Supplier Has to Already Run

Four things have to be true of an inverter brand for it to survive this cleanly. It is worth knowing what they are, because "we are compliant" from a sales contact is not an answer you can put on a project file.

**Indian-hosted monitoring.** The servers that receive, store, and serve the inverter data sit in India. This includes the backend behind the OEM's consumer app, not just an export endpoint built for the regulator.

**M2M connectivity on the communication device.** Dongles and dataloggers use M2M SIMs rather than depending on the customer's home Wi-Fi. This is the single biggest practical change for residential installs, where a [Wi-Fi dropout](/blog/solar-inverter-wifi-not-connecting-fix/) has always been the most common monitoring complaint on the service line.

**A tested RMS and datalogger.** The remote monitoring system and datalogger have been through the testing framework MNRE set out in March 2026 and can connect to the centralised platform. Untested hardware that happens to work is not the same as conformant hardware.

**A uniform reporting interface.** Daily cumulative generation reaches the national portal in the prescribed format, without the EPC or the homeowner doing anything.

Note what is not on that list. Nothing here asks the installer to buy or fit additional equipment. If a supplier tells you that compliance requires a chargeable hardware upgrade on your open projects, ask them to show you where the memorandum says so.

## The Myth: This Is a Live Telemetry Mandate Like PM KUSUM

The most common misreading in the market is that every rooftop system now has to stream live data. It does not, and getting this wrong leads to bad connectivity decisions on site.

Industry reporting on the scheme's integration work indicates that daily submission of generation data plus historical aggregates satisfies the current requirement. PM KUSUM is the comparison people reach for, and it is the wrong one. Agricultural pump projects under that scheme have generally required live data at short intervals over a persistent connection, because the operational question there is whether the pump is running right now.

The rooftop question is different. The scheme wants to know what the installed base generated, at national scale, on a daily basis. A daily upload tolerates a few hours of poor cellular coverage. A live stream does not.

This matters for EPCs working in weak-signal areas. Saurabh Marda, co-founder of Freyr Energy, raised connectivity coverage in weak-signal areas as one of the open issues when the draft guidelines were published, reported by [pv magazine](https://www.pv-magazine.com/2025/08/11/india-mandates-rooftop-monitoring-and-inverter-integration-for-30-gw-of-solar/), 2025. A daily-batch requirement is a far more forgiving design for those sites than a streaming one, and it is worth knowing before you quote a signal booster nobody needs.

## Where the Risk Actually Sits for an EPC

The regulatory obligation is the manufacturer's. Every commercial consequence is yours. That asymmetry is the whole reason this memorandum belongs on your desk and not just your supplier's.

**Open quotations.** A quotation naming an inverter brand that later fails to file is a quotation you cannot honour under the scheme. If you have quoted on thin margin, a forced substitution to a different brand can move the BOQ cost without any ability to reprice a signed order.

**Submitted DISCOM files.** A net-metering application carries a specific make and model. If the inverter changes after submission, the change has to be recorded, and the practical cost is time inside a queue you have already waited in. The [net metering approval timeline](/blog/net-meter-approval-timeline/) is slow enough without a mid-file equipment change.

**Subsidy claims in progress.** Serial numbers on a claim tie to a specific unit from a specific manufacturer. Anything that disturbs the equipment identity on a claim in progress is worth avoiding, particularly given the portal's automatic flagging of repeated serial numbers.

**Stock on the shelf.** Inventory of a brand that does not file is not scrap, because non-scheme work still exists. It is capital sitting in the wrong product for your dominant channel.

**Customer trust.** The homeowner does not distinguish between a regulator excluding a brand and their installer choosing badly. As an [empanelled vendor under PM Surya Ghar](/blog/empanelled-vendor-pm-surya-ghar/), you carry the relationship and the explanation.

## Six Questions to Send Your Inverter Supplier This Week

Send these in writing and keep the reply. A verbal assurance from a regional sales manager is not something you can put in front of a DISCOM or a customer.

1. **Have you filed the Annexure-I confirmation with REC, and on what date?** Ask for the filing date and a copy of what was sent. "We are compliant" and "we have filed" are different statements.
2. **Where are your monitoring servers physically hosted?** The answer should be a location inside India, not a cloud provider brand name. A global provider with an Indian region is fine; a global provider with an unnamed region is not an answer.
3. **Which datalogger and communication module variants have been through the MNRE testing framework?** Get part numbers. If you have been fitting a third-party dongle to save cost, this is where that decision surfaces.
4. **Does the datalogger now carry the same warranty term as the inverter?** The memorandum requires it. Ask them to confirm it in the current warranty document, not just in an email.
5. **Who pays for M2M connectivity across the system's life, and for how long is it included?** This is the question the memorandum does not answer. Get the OEM's position in writing before it becomes a customer conversation in year three.
6. **What is your position for systems already installed?** Retrospective application has been argued for publicly but is not settled. Knowing your supplier's plan is better than discovering it from a customer.

If a supplier cannot answer questions one and two within a few days, treat that as information. An OEM that engaged with the testing platform earlier in the year will have both answers ready.

## The Cost Question the Memorandum Does Not Answer

Moving connectivity from household Wi-Fi to an M2M SIM introduces a recurring cost that did not exist before, and nothing in the framework says who carries it.

The most concrete figure in public discussion came from Saurabh Marda of Freyr Energy, who raised the question of who absorbs an M2M SIM data cost he put at ₹18,000 per system across a 10-year horizon, reported by [pv magazine](https://www.pv-magazine.com/2025/08/11/india-mandates-rooftop-monitoring-and-inverter-integration-for-30-gw-of-solar/), 2025. He also warned that smaller installers and price-sensitive segments risk being disproportionately affected. Treat that number as one practitioner's estimate rather than a settled industry figure, because the answer depends entirely on tariff and data volume.

There are only three places that cost can land. The OEM absorbs it and prices it into the unit. The EPC absorbs it and prices it into the system. Or the customer is asked for a recurring payment years after an installation that was sold as maintenance-light.

The third option is the one that damages the category. A homeowner who bought a rooftop system on a bill-savings argument does not expect a connectivity invoice in year four, and the installer who sold the system is the person who receives that phone call. Get your supplier's position on this now, and if the cost lands with you, put it in the proposal rather than discovering it later.

## What Changes in Your Project Documentation Set

Three documents in a standard project file are affected, and the fix in each case is a checking step rather than a new form.

**The bill of quantities.** The inverter line now carries an implicit compliance assertion beyond ALMM and BIS. Your internal BOQ approval should check the OEM's filing status alongside the [ALMM listing](/blog/almm-list-phase-iii-guide/) and the [BIS and IEC certification](/blog/solar-inverter-regulations-india-2026-bis-iec-compliance/) you already verify.

**The net-metering application.** Nothing on the form changes. What changes is the cost of getting the inverter make wrong on it, because a substitution mid-queue is expensive in time. Lock the inverter selection before submitting rather than after, a discipline worth applying to the whole [net metering application process](/blog/how-to-apply-net-metering-india/).

**The customer handover pack.** The datalogger warranty term has changed and should be stated correctly. If your handover documents describe a separate shorter term for the communication device, they are now out of date.

One addition is worth making. Keep a compliance evidence folder per OEM you carry, holding the filing confirmation, the tested part numbers, and the warranty document. When a DISCOM engineer or a customer asks a pointed question, the difference between a two-minute answer and a two-week answer is whether that folder exists.

## What Most EPCs Will Get Wrong Here

The predictable mistake is not ignoring the memorandum. It is overreacting to it.

The instinct on reading an exclusion clause is to switch brands immediately. That is usually the wrong move inside a 30-day window, because the filing position of most manufacturers is not yet visible, and switching to a brand that also has not filed achieves nothing except a new set of unfamiliar failure modes and a service network you have not tested. Speculative switching converts a paperwork risk into an operational one.

The second mistake is treating this as purely a Chinese-import story and assuming an Indian-badged brand is automatically clear. The requirement is about where the servers sit and whether the OEM filed, not where the enclosure was assembled. Plenty of Indian-badged products have run monitoring out of an offshore backend, sometimes the original manufacturer's. Ask the question of every supplier, including the domestic ones, including your primary.

The third mistake is quieter and more expensive. It is assuming your existing datalogger inventory stays compliant. If you have been fitting a cheaper third-party dongle in place of the OEM's tested module, that substitution now breaks the chain the OEM certified, and it also sits outside the warranty consolidation the memorandum requires. Check what your crews are actually installing, not what the specification says they install.

## Where Qbits Sits on This

Two things can be stated from published Qbits material, and they are worth being precise about because this is exactly the kind of topic where vague assurance is useless to an installer.

Qbits publishes Indian server hosting for monitoring data as a stated product position. The site describes "100% data sovereignty" with all monitoring data on Indian servers, and lists Indian server storage against overseas cloud storage as a differentiator on the [why Qbits](/why-qbits/) page. Monitoring itself runs through the Qbits Smart App and the [AI-powered WhatsApp alert](/blog/whatsapp-solar-monitoring/) channel, which is described across the [monitoring systems](/blog/solar-inverter-monitoring-systems-in-india/) and [inverter app](/blog/solar-inverter-app-monitoring/) coverage on this site.

On warranty, the Qbits term is a 12-year full unit replacement warranty on models up to 30 kW, with an 8-year warranty above 30 kW. The memorandum's requirement to fold datalogger warranty into inverter warranty is a smaller step for a manufacturer already writing a full replacement term than for one writing a limited-parts term with a separately warranted dongle.

What this article does not do is assert a filing date on Qbits' behalf, because that is a document rather than a marketing claim and it belongs in your evidence folder rather than in a blog post. If you are carrying Qbits on open quotations and need the current filing position for a project file, ask for it directly and [talk to a Qbits engineer](/contact-us/) rather than taking it from here. EPCs looking at the [on-grid inverter range](/on-grid-inverter/) for scheme work can pull the per-model specifications from the [datasheet library](/download-datasheets/), and installers who want to carry the brand can apply through [become a Qbits channel partner](/become-our-partner/).

## Conclusion

An office memorandum addressed to manufacturers has become an EPC scheduling problem, because the penalty is supply-side exclusion and the exposure is on whoever holds the open quotation. The work in front of you is verification, not procurement.

- Send the six questions to every inverter supplier you carry this week, and keep the written replies on file.
- Do not switch brands speculatively inside the window. Wait for filing positions to become visible, then decide.
- Lock inverter selection before net-metering submission on every new project until the market position is clear.
- Check what your installation crews are actually fitting as a datalogger, not what the specification says.
- Verify the operative dates and the current filing position with REC and MNRE directly. Rules under this scheme have changed repeatedly, and no summary, including this one, is a substitute for the source document.

If you are sizing a scheme project and want the specification detail before you commit an inverter to a BOQ, the [string sizing calculator](/string-sizing-calculator/) and the per-model datasheets will get you most of the way, and a [spec walkthrough from a Qbits engineer](/contact-us/) will cover the rest.
