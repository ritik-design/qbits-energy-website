# Qbits Lead Capture — Google Apps Script

Receives contact-form submissions from the website, appends each lead to the
**Leads** tab of the spreadsheet, and emails `ritik@thestacc.com` and
`keyur@heavendesigns.in`.

**Spreadsheet:** https://docs.google.com/spreadsheets/d/1yEKswp6NqE4zHq0LPdJx_AIdVBL8ktEEezB2P5ZiiTo/edit

## Setup (one time)

1. Go to https://script.google.com → **New project**.
2. Replace the default `Code.gs` content with [`Code.gs`](./Code.gs) from this folder.
3. Rename the project (e.g. `Qbits Leads`) and **Save**.
4. Click **Deploy** → **New deployment**.
   - Type: **Web app**
   - Description: `Qbits lead capture v1`
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**. Approve the OAuth scopes (Sheets + Gmail).
6. Copy the **Web app URL** (ends in `/exec`).

## Wire the website

The website reads two env vars (set in **Cloudflare Pages → Settings → Environment Variables**, or in a local `.env.local`):

```
PUBLIC_GAS_ENDPOINT=https://script.google.com/macros/s/AKfycb…/exec
PUBLIC_FORM_TOKEN=any-random-string-here    # optional; see "Token check" below
```

Then redeploy. Both the contact form and the homepage quick-lead form will route through the live endpoint. When `PUBLIC_GAS_ENDPOINT` is unset, both forms fall back to opening the user's mail client (mailto) — never silently drops a lead.

`.env.example` at the repo root documents every supported var.

## Token check (recommended)

To stop randos POSTing directly to the `/exec` URL:

1. In the Apps Script editor: **Project Settings → Script Properties → Add row**
   - Key: `FORM_TOKEN`
   - Value: any random string (e.g. `paste -d '' a 32-char string here`)
2. Set `PUBLIC_FORM_TOKEN` in Cloudflare Pages env vars to the same value.
3. Redeploy the Apps Script (Deploy → Manage deployments → New version).
4. Redeploy the website.

Now requests without the matching token return `{"ok":false,"error":"forbidden"}` and don't write to the sheet.

It's not a real secret (it ships in the page source) but it eliminates 99% of opportunistic abuse. For real bot protection, layer Cloudflare Turnstile on top.

## Updating the script later

If you change `Code.gs`, you must **Deploy → Manage deployments → Edit (pencil)
→ Version: New version → Deploy**. Editing the code without redeploying does
**not** update the live web app.

## Sheet columns

| Timestamp | Name | Email | Phone | City | System Size | Subject | Message | Source | Page | User Agent |
|-----------|------|-------|-------|------|-------------|---------|---------|--------|------|------------|

The headers are created automatically on the first submission if the `Leads`
tab is empty. The `Source` column distinguishes between forms:
- `contact-form` — the long form on `/contact-us/`
- `home-quick-lead` — the short form on the homepage

## Changing notification recipients

Edit the `NOTIFY_EMAILS` array at the top of `Code.gs` and redeploy.

## Testing

After deploying, visit the `/exec` URL in a browser — you should see
`{"ok":true,"service":"qbits-leads",...}`. Then submit the live form on
`/contact-us` and confirm the row + email arrive.
