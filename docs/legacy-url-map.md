# Legacy URL map (Wix site → new site)

Captured from the live Wix site on 2026-09-08, before the DNS cutover. Once DNS
moves, the old site is unreachable and this list cannot be rebuilt, so it is
recorded here rather than left to memory.

Full HTML of all 20 pages is archived outside the repo at
`C:\Users\danie\projects\sportplus-montagen-legacy-archive\raw\`.

## Old URL inventory

The old site served German at the root and English under `/en/`, reusing the
German slugs for both languages.

| Old URL | New URL | Note |
| --- | --- | --- |
| `/` | `/de/` | |
| `/leistungen` | `/de/leistungen` | |
| `/referenzen` | `/de/referenzen` | |
| `/sporthallen` | `/de/referenzen` | Section merged into references |
| `/hotels` | `/de/referenzen` | Section merged into references |
| `/holzhäuser` | `/de/leistungen` | Sector hidden; no equivalent page |
| `/ueber-uns` | `/de/ueber-uns` | |
| `/kontakt` | `/de/kontakt` | |
| `/impressum` | `/de/impressum` | |
| `/datenschutz` | `/de/datenschutz` | |
| `/en` | `/en/` | |
| `/en/leistungen` | `/en/services` | |
| `/en/referenzen` | `/en/references` | |
| `/en/sporthallen` | `/en/references` | Section merged into references |
| `/en/hotels` | `/en/references` | Section merged into references |
| `/en/holzhäuser` | `/en/services` | Sector hidden; no equivalent page |
| `/en/ueber-uns` | `/en/about` | |
| `/en/kontakt` | `/en/contact` | |
| `/en/impressum` | `/en/imprint` | |
| `/en/datenschutz` | `/en/privacy` | |

`/holzhäuser` is also reachable percent-encoded as `/holzh%C3%A4user`; any
redirect needs to cover both spellings.

## SEO baseline of the old site

Recorded so the effect of the rebuild can be judged later. The old site had:

- No meta description on any of the 20 pages.
- Titles of the form `SECTION | Sport Plus Montagen` — no service terms, no
  location, no differentiation between the German and English versions.
- No structured data of any kind.
- A broken sitemap: `/sitemap.xml` 302s to `/en/sitemap.xml`, which 404s, and
  `robots.txt` advertised both.
- Correct canonical and hreflang tags (generated automatically by Wix).

The practical consequence is that there is very little ranking equity at risk in
the migration: the old pages were not competing on anything but the brand name.
