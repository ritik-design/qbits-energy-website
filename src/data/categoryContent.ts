export interface CategoryFaq {
  q: string;
  a: string;
}

export interface CategoryContent {
  intro: string;
  faqs: CategoryFaq[];
}

// Keyed by category slug (same slugify rule used in blog/category/[category].astro).
export const CATEGORY_CONTENT: Record<string, CategoryContent> = {
  'solar-software': {
    intro:
      "Solar Software covers the design and proposal tools EPCs, installers, and dealers use to size, model, and sell solar PV systems before a panel goes on a roof. This category tracks the design-software market closely: AI-powered 3D roof modeling from satellite imagery, shading simulation, single-line diagram and BOQ generation, financial modeling for ROI and payback, and the proposal tools that turn a site survey into a signed contract. You'll find head-to-head comparisons of major platforms, honest alternative guides for teams outgrowing a legacy tool, and pricing breakdowns to help you budget a software stack. Whether you're a residential installer choosing your first design tool or a C&I EPC evaluating utility-scale platforms, these guides focus on what actually ships a bankable proposal fastest. Every inverter Qbits builds is designed to pair cleanly with the string sizing and MPPT data these tools produce.",
    faqs: [
      {
        q: 'What is solar design software used for?',
        a: "Solar design software models a project site (roof geometry, shading, string layout) and produces what an EPC needs to quote and build a system: a bill of quantities, single-line diagram, yield estimate, and customer-facing proposal.",
      },
      {
        q: 'Which solar design software is best for Indian EPCs?',
        a: "It depends on your project mix. High-volume residential installers benefit most from fast AI 3D modeling and instant proposals; C&I and utility EPCs need deeper shading and financial-modeling depth. Our comparison guides in this category benchmark the major platforms on both.",
      },
      {
        q: 'Does my design software choice affect inverter selection?',
        a: "Yes, indirectly. Accurate string sizing and shading data from your design tool directly informs which inverter model and MPPT configuration fits a given roof. Qbits' string sizing calculator is built to consume that same site data.",
      },
    ],
  },
  'buying-guide': {
    intro:
      "Buying Guide articles help homeowners, businesses, and installers make a confident solar inverter purchase decision in the Indian market. This category covers what to check before buying: on-grid vs hybrid vs off-grid selection, sizing a system to your load and roof, evaluating BIS/IEC certification and warranty terms, reading datasheets, and comparing capacity brackets from 1 kW residential systems up to large commercial installations. Each guide is written to answer the questions a buyer actually has at decision time — total cost of ownership, which safety features matter versus which are marketing, and how to spot a reliable dealer or distributor. If you're evaluating your first solar inverter purchase or upgrading an aging system, start here before comparing specific products.",
    faqs: [
      {
        q: 'What should I check before buying a solar inverter in India?',
        a: "Confirm BIS/IEC certification, warranty length and what it covers, MPPT count and voltage range against your panel configuration, and whether the inverter is correctly sized for your sanctioned load and roof capacity.",
      },
      {
        q: 'On-grid, hybrid, or off-grid — which should I buy?',
        a: "On-grid suits homes with reliable grid supply and net metering; hybrid adds battery backup for outage-prone areas; off-grid is for sites with no grid connection at all. Our decision guides in this category walk through the trade-offs in detail.",
      },
      {
        q: 'How do I size a solar inverter to my home?',
        a: "Sizing depends on your sanctioned electrical load, available roof area, and daily consumption pattern. Use our String Sizing Calculator alongside the guides in this category for a project-specific number.",
      },
    ],
  },
  comparison: {
    intro:
      "Comparison articles put solar inverters, design software, and installation approaches head-to-head so you don't have to test every option yourself. This category includes brand-vs-brand inverter comparisons, on-grid vs hybrid vs off-grid decision guides, and design-software platform comparisons. Every comparison here is built on the same criteria: real specifications, real pricing where publicly available, and the trade-offs that matter for an Indian installation — grid conditions, climate, certification, and total cost of ownership over the system's lifetime, not just sticker price. Use these guides to shortlist before you request a quote.",
    faqs: [
      {
        q: 'How reliable are the inverter brand comparisons on this site?',
        a: "Comparisons are built from published datasheets, certification records, and pricing where publicly available. Where a spec isn't public, we say so rather than guess.",
      },
      {
        q: 'Is a more expensive inverter always better?',
        a: "Not necessarily. Price often tracks capacity and feature set (hybrid battery support, monitoring, MPPT count) rather than raw quality. Match the comparison to your actual load and budget, not the top-of-range model.",
      },
    ],
  },
  policy: {
    intro:
      "Policy articles track the regulatory and incentive landscape shaping solar economics in India — state-by-state subsidy processes under PM Surya Ghar (BESCOM, MEDA, KSEB, TPDDL, and more), net metering rules, and BIS/IEC compliance requirements. Solar subsidy and net-metering rules vary materially by state and DISCOM, and getting the paperwork wrong can delay commissioning or void a subsidy claim entirely. These guides translate official circulars and state processes into practical steps: what documents you need, what the current subsidy amount is, and how to avoid the most common rejection reasons. Written for homeowners navigating a subsidy application for the first time, and for installers who need to stay current across multiple states.",
    faqs: [
      {
        q: 'What is PM Surya Ghar and who qualifies?',
        a: "PM Surya Ghar is the central government's rooftop solar subsidy scheme for residential consumers. Eligibility and subsidy amounts depend on system capacity and state-level implementation — see our state-specific policy guides for current figures.",
      },
      {
        q: 'Does the solar subsidy process differ by state?',
        a: "Yes, significantly. Each state's DISCOM (BESCOM, MEDA, KSEB, TPDDL, and others) runs its own application and disbursement process on top of the central scheme. Our guides cover the major states individually.",
      },
      {
        q: 'Do solar inverters need BIS certification in India?',
        a: "Yes. BIS certification, alongside relevant IEC standards, is required for grid-connected inverters sold in India and is typically a precondition for subsidy disbursement and DISCOM approval.",
      },
    ],
  },
  guide: {
    intro:
      "Guide articles are practical, process-level walkthroughs for solar buyers and installers — how much electricity solar generates state-wise, EPC procurement and sourcing, on-grid vs hybrid vs off-grid decisions, reading your monitoring app, maximising output in Indian climate, and the tax and depreciation benefits available to commercial buyers. This is the category for readers who already understand the basics and need a complete, step-by-step answer to a specific real-world question, whether that's a CAPEX vs OPEX decision for a C&I buyer or how long solar batteries actually last under Indian heat and cycling conditions.",
    faqs: [
      {
        q: 'How is Guide different from Buying Guide?',
        a: "Buying Guide focuses specifically on purchase decisions. Guide covers the broader set of practical, process-level questions that come up before, during, and after a solar installation.",
      },
      {
        q: 'Are these guides India-specific?',
        a: "Yes — every guide is written for Indian grid conditions, climate, and regulatory context (state-wise generation data, IST-specific commissioning steps, Indian tax rules) rather than generic global content.",
      },
    ],
  },
  technology: {
    intro:
      "Technology articles go deep on the engineering inside a solar inverter — MPPT algorithms and dual vs single MPPT trade-offs, DC oversizing and clipping behaviour, anti-islanding protection, battery management systems in hybrid inverters, grid-tuned firmware for Indian conditions, and how AI is changing real-time inverter performance and monitoring. This category is written for EPCs specifying a system, engineering-minded readers, and technically inclined homeowners who want to understand the mechanism behind a spec sheet, not just the headline number. Where our Guide content explains the process, Technology explains why the engineering choice matters.",
    faqs: [
      {
        q: 'What is MPPT and why does it matter?',
        a: "Maximum Power Point Tracking continuously adjusts the inverter's electrical operating point to extract the most power available from your solar panels as sunlight and temperature change through the day. More effective MPPT means more real-world energy yield.",
      },
      {
        q: 'What is DC oversizing and is it safe?',
        a: "DC oversizing means installing more panel capacity than the inverter's rated AC output, which is a common and generally safe design choice within manufacturer limits — it improves total yield despite some clipping losses. See our dedicated DC oversizing guide for the ROI math.",
      },
      {
        q: 'Why do generic international inverters sometimes underperform in India?',
        a: "Grid conditions (voltage fluctuation, frequency variance, grounding practices) differ from the markets many international inverters are tuned for. Grid-tuned firmware built for Indian conditions typically handles these variances more reliably.",
      },
    ],
  },
  maintenance: {
    intro:
      "Maintenance articles cover keeping a solar inverter running reliably for its full lifespan: troubleshooting error codes and ground faults, monsoon and pre-monsoon inspection checklists, overheating and noise causes and fixes, warranty claim steps, and a realistic look at when to repair versus replace an aging inverter. Indian climate — heat, humidity, dust, and monsoon moisture — puts real stress on inverter hardware that buying guides rarely address. This category is written for installers doing scheduled maintenance visits and for homeowners who want to catch a problem before it becomes a costly failure or a warranty dispute.",
    faqs: [
      {
        q: 'How often should a solar inverter be serviced?',
        a: "Most manufacturers recommend at least an annual inspection, with additional pre- and post-monsoon checks in most Indian climates. Monitoring-app alerts can catch issues between scheduled visits.",
      },
      {
        q: 'Why does my solar inverter keep overheating or switching off?',
        a: "Common causes include poor ventilation or enclosure placement, ambient temperatures exceeding the inverter's rated range, and dust blocking heat sinks. See our dedicated overheating and troubleshooting guides in this category for a step-by-step diagnosis.",
      },
      {
        q: 'What is the typical lifespan of a solar inverter in India?',
        a: "Quality inverters typically last 10 to 15 years, with some premium models rated for 20+ years, though real-world lifespan depends heavily on climate exposure and maintenance discipline — see our 7-year health check guide before deciding whether to replace one.",
      },
    ],
  },
  industry: {
    intro:
      "Industry articles track the data and trends shaping India's solar sector: market size and brand share reports, rooftop solar capacity by state, peak sun hour and yield benchmarks, warranty-length trends, electricity tariff movements, and founder perspectives on where the industry is heading. This category is written for dealers, distributors, investors, and installers who need market context and hard numbers behind a purchase or partnership decision, drawing on Qbits' own research alongside official state-wise data.",
    faqs: [
      {
        q: 'Where do the market statistics in this category come from?',
        a: "A mix of official state and central data (rooftop capacity, irradiance), industry benchmarking, and original Qbits research reports, each cited within the relevant article.",
      },
      {
        q: 'How is India\'s rooftop solar market trending?',
        a: "Growth is being driven by falling system costs, expanding subsidy schemes like PM Surya Ghar, and rising electricity tariffs improving payback economics. Our annual index reports in this category track the year-over-year numbers by state.",
      },
    ],
  },
  'case-study': {
    intro:
      "Case Study articles document real solar installations across residential, commercial, and industrial sites in India — a Lucknow 3BHK hybrid system, a Chennai IT park, a Coimbatore school, a Rajkot cold storage facility, a Tirupur textile mill, and more. Each case study is grounded in one real project: the sizing rationale, the configuration chosen, the measured outcome, and what the EPC or facility owner learned along the way. Useful for EPCs benchmarking a proposal against a comparable real deployment, and for facility owners evaluating whether a similar system fits their site.",
    faqs: [
      {
        q: 'Are these case studies based on real installations?',
        a: "Yes, each one describes a specific project, its sizing rationale, and its real-world outcome rather than a hypothetical scenario.",
      },
      {
        q: 'Do case studies include performance and payback data?',
        a: "Where available, yes — yield figures, payback timelines, and any issues encountered during commissioning or operation are included.",
      },
    ],
  },
  educational: {
    intro:
      "Educational articles are written in Hindi for homeowners and first-time buyers across India who prefer regional-language content — covering what a solar inverter actually is, how to reduce your electricity bill with solar, how to get panels installed at your home, and hybrid inverter options for UP and Bihar households. This category exists specifically to make solar accessible to readers more comfortable in Hindi than English, without simplifying the underlying guidance.",
    faqs: [
      {
        q: 'Are Educational articles only available in Hindi?',
        a: "Yes, this category is specifically Hindi-language content for readers who prefer it. Equivalent detailed guidance in English is available across our Guide and Buying Guide categories.",
      },
      {
        q: 'Is there a glossary if I need a quick definition instead?',
        a: "Yes — our Glossary covers 150+ solar and inverter terms with concise English definitions, separate from the longer Educational articles in this category.",
      },
    ],
  },
  technical: {
    intro:
      "Technical articles cover hands-on, field-level troubleshooting content, including regional-language guidance for technicians and homeowners encountering solar inverter faults in the field. This category is aimed at readers who need immediate, practical fault-resolution steps rather than a conceptual overview.",
    faqs: [
      {
        q: 'Who is the Technical category written for?',
        a: "Technicians, installers, and homeowners who need immediate, practical fault-resolution guidance, including in regional languages.",
      },
      {
        q: 'How does this differ from the Technology category?',
        a: "Technology explains how inverter mechanisms and specifications work conceptually. Technical content works through specific field faults and fixes.",
      },
    ],
  },
};
