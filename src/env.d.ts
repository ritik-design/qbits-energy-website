/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

interface Env {
  SESSION: KVNamespace;
  ODOO_URL: string;
  ODOO_DB: string;
  ODOO_USERNAME: string;
  ODOO_PASSWORD: string;
  RESEND_API_KEY: string;
  // Shared leads Google Sheet (src/lib/leads-sheet.js). Secrets via `wrangler secret put`;
  // LEADS_SHEET_ID is not secret and is set in wrangler.jsonc "vars". Unset = sheet copy skipped.
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  GOOGLE_REFRESH_TOKEN?: string;
  LEADS_SHEET_ID?: string;
}

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
