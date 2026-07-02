/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

interface Env {
  SESSION: KVNamespace;
  ODOO_URL: string;
  ODOO_DB: string;
  ODOO_USERNAME: string;
  ODOO_PASSWORD: string;
}

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
