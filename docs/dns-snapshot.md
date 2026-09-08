# DNS snapshot before the cutover

Captured 2026-09-08, while the zone was still served by Wix
(`ns8.wixdns.net`, `ns9.wixdns.net`).

Recorded because the mail records below have nothing to do with the website and
are easy to lose: they are invisible in the Wix site editor, and recreating the
zone elsewhere (or "cleaning up" the old records at cutover) silently breaks
company email rather than producing any visible error.

## Must survive the cutover — email

`info@sportplusmontagen.de` is a Google Workspace mailbox, so these records are
the mailbox, not a leftover of the old site.

| Type | Host | Value | Priority |
| --- | --- | --- | --- |
| MX | `@` | `aspmx.l.google.com` | 10 |
| MX | `@` | `alt1.aspmx.l.google.com` | 20 |
| MX | `@` | `alt2.aspmx.l.google.com` | 30 |
| MX | `@` | `alt3.aspmx.l.google.com` | 40 |
| MX | `@` | `alt4.aspmx.l.google.com` | 50 |
| TXT | `@` | `v=spf1 include:_spf.google.com ~all` | — |
| TXT | `@` | `google-site-verification=3eDGaRosEuETVBneAHsLWRKXmzcVIJUaMgEl_xgneVw` | — |

The `3eDGaRos…` verification token is the Google Workspace domain verification,
not the Search Console one. Removing it puts the Workspace account at risk.

There is no DKIM record (`google._domainkey`) and no DMARC record (`_dmarc`).
Both are worth adding later, independently of this migration: without DKIM,
mail from this domain is more likely to be filtered as spam.

## Replaced at the cutover — website

| Type | Host | Old value (Wix) | New value (GitHub Pages) |
| --- | --- | --- | --- |
| A | `@` | `185.230.63.171`, `185.230.63.107`, `185.230.63.186` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| CNAME | `www` | `cdn3.wixdns.net` | `danhayesai.github.io` |

## Added at the cutover — Search Console

| Type | Host | Value |
| --- | --- | --- |
| TXT | `@` | `google-site-verification=uqnWqjZUR98zawLnyGtpaXMeaiQGukHASgnOG2-Scz8` |

Added alongside the existing TXT records, never in place of them: a host can
carry several TXT records, and all three are needed at once.
