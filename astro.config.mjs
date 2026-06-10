// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://qbitsenergy.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Higher priority for top-of-funnel landing pages
        if (item.url.match(/qbitsenergy\.com\/?$/)) item.priority = 1.0;
        else if (item.url.match(/\/(our-products|on-grid-inverter|hybrid-inverter|contact-us)\/?$/)) item.priority = 0.9;
        else if (item.url.match(/\/(residential-solution|c-i-solution|why-qbits|about-us|authorized-service-partners)\/?$/)) item.priority = 0.8;
        else if (item.url.includes('/blog/page/')) item.priority = 0.5;
        else if (item.url.includes('/blog/')) item.priority = 0.7;
        return item;
      },
    }),
  ],

  // 301 redirects: old WordPress date-based URLs → new /blog/slug/ paths
  redirects: {
    // Same slug, date prefix removed
    '/2026/04/04/inverter-overheating': '/blog/inverter-overheating',
    '/2026/04/04/ip65-vs-ip66-solar-inverters-weather-protection-guide': '/blog/ip65-vs-ip66-solar-inverters-weather-protection-guide',
    '/2026/04/04/solar-inverter-specifications-decoded': '/blog/solar-inverter-specifications-decoded',
    '/2026/04/04/solar-inverter-depreciation-tax-benefits-guide': '/blog/solar-inverter-depreciation-tax-benefits-guide',
    '/2026/04/04/solar-inverter-commissioning': '/blog/solar-inverter-commissioning',
    '/2026/04/04/solar-inverter-certifications': '/blog/solar-inverter-certifications',
    '/2026/04/04/inverter-distributors-india': '/blog/inverter-distributors-india',
    '/2026/04/03/inverter-suppliers-india': '/blog/inverter-suppliers-india',
    '/2026/03/26/solar-inverter-failure': '/blog/solar-inverter-failure',
    '/2026/03/25/ai-powered-vs-traditional-inverter-technology-in-india': '/blog/ai-powered-vs-traditional-inverter-technology-in-india',
    '/2026/03/24/solar-inverter-pricing-strategies-for-epcs': '/blog/solar-inverter-pricing-strategies-for-epcs',
    '/2026/03/22/inverter-maintenance-india': '/blog/inverter-maintenance-india',
    '/2026/03/22/solar-inverter-regulations-india-2026-bis-iec-compliance': '/blog/solar-inverter-regulations-india-2026-bis-iec-compliance',
    '/2026/03/22/solar-inverter-quality': '/blog/solar-inverter-quality',
    '/2026/03/20/indian-vs-international-solar-inverters': '/blog/indian-vs-international-solar-inverters',
    '/2026/03/20/solar-inverter-sizing': '/blog/solar-inverter-sizing',
    '/2026/03/18/solar-inverter-lifespan': '/blog/solar-inverter-lifespan',
    '/2026/03/17/solar-inverter-monitoring-systems-in-india': '/blog/solar-inverter-monitoring-systems-in-india',
    '/2026/03/16/solar-inverter-selection': '/blog/solar-inverter-selection',
    '/2026/03/15/solar-inverter-manufacturers-in-india': '/blog/solar-inverter-manufacturers-in-india',
    '/2026/03/13/solar-inverter-troubleshooting': '/blog/solar-inverter-troubleshooting',
    '/2026/03/09/solar-inverter-efficiency': '/blog/solar-inverter-efficiency',

    // Slug changed
    '/2026/03/04/complete-guide-to-solar-inverters-in-india': '/blog/how-solar-power-system-works-india',
    '/2026/03/12/on-grid-vs-hybrid-solar-inverters-in-india': '/blog/on-grid-vs-hybrid',
    '/2026/03/11/solar-inverter-roi-calculator': '/blog/solar-inverter-payback-period-in-india',
    '/2026/03/10/solar-inverter-installation-in-india': '/blog/solar-inverter-commissioning-in-india',
    '/2026/03/09/hybrid-solar-inverters-in-india': '/blog/best-hybrid-solar-inverter-india-2026',
    '/2026/03/08/solar-inverter-warranty-explained': '/blog/solar-inverter-warranty',
    '/2026/03/07/top-solar-inverter-brands-in-india': '/blog/top-10-solar-inverter-brands-india-2026',
    '/2026/03/05/solar-inverter-cost-breakdown': '/blog/solar-inverter-price-guide',
    '/2026/02/20/is-your-solar-inverter-india-ready-or-just-india-visiting': '/blog/india-grid-tuned-inverters',
    '/2026/02/21/what-does-a-solar-inverter-actually-do-inside': '/blog/how-does-a-solar-inverter-work',
    '/2026/02/06/best-solar-inverter-in-india': '/blog/best-solar-inverter-india-2026',
    '/2026/01/31/solar-inverter-protection-features-india': '/blog/essential-vs-advanced-solar-inverter-features',
    '/2026/01/31/why-safety-features-in-a-solar-inverter-matter-more-than-price': '/blog/essential-vs-advanced-solar-inverter-features',
    '/2026/01/19/which-one-is-best-on-grid-off-grid-or-hybrid-inverter': '/blog/on-grid-vs-hybrid-vs-off-grid-decision-guide',
    '/2026/01/16/what-you-should-keep-in-mind-while-purchasing-an-on-grid-solar-inverter': '/blog/how-to-choose-solar-inverter-for-home-india',
    '/2026/01/07/indias-top-10-solar-inverter-brands-global-giants-vs-indigenous-innovators-2026-edition': '/blog/top-10-solar-inverter-brands-india-2026',
    '/2025/11/17/why-qbits-inverter-are-built-for-india': '/blog/india-grid-tuned-inverters',
    '/2025/12/29/qbits-powering-the-future-of-solar-with-innovation-and-reliability': '/blog/best-solar-inverter-india-2026',
    '/2025/12/31/the-solar-inverter-you-choose-today-decides-the-performance-you-get-for-the-next-20-years': '/blog/solar-inverter-lifespan',
  }
});
