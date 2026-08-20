# SportPlus Montagen

Bilingual (German / English) marketing website for **SportPlus Montagen GmbH**,
an installation company in Rosenheim specialising in impact protection walls and
sports flooring.

Built with [Astro](https://astro.build) as a fully static site: no runtime, no
database, no client-side framework. The only JavaScript shipped to the browser
is a few dozen lines for the mobile menu, the theme toggle and the contact form.

---

## Quick start

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:4321>.

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload   |
| `npm run build`   | Build the production site into `dist/`         |
| `npm run preview` | Serve the built site locally to check it       |
| `npm run check`   | Type-check all Astro components and TypeScript |

**Requirements:** Node.js 20 or newer.

---

## Project conventions

**The codebase is English.** File names, folders, variables, functions,
comments and commit messages are all in English. German appears only inside
translation values, never in code. This keeps the project readable for any
developer while the site itself stays fully bilingual.

---

## Structure

```
src/
├── components/          Reusable UI components
│   └── pages/           One component per page, shared by both languages
├── config/
│   └── site.ts          Company details, contact info, form endpoint
├── i18n/
│   ├── types.ts         Content interface both languages must satisfy
│   ├── de.ts            German content
│   ├── en.ts            English content
│   └── index.ts         Routing helpers and language utilities
├── layouts/
│   └── BaseLayout.astro Head, SEO, structured data, page shell
├── pages/               URL routes (thin wrappers around page components)
│   ├── de/              German routes
│   └── en/              English routes
└── styles/
    └── global.css       Design tokens and shared styles
```

### How the two languages work

Each page exists once as a component in `src/components/pages/` and takes a
`lang` prop. The files in `src/pages/de/` and `src/pages/en/` are five-line
wrappers that render it in the right language. Add a section once and both
languages get it.

URLs use localised slugs, mapped in `src/i18n/index.ts`:

| Page       | German               | English            |
| ---------- | -------------------- | ------------------ |
| Home       | `/de`                | `/en`              |
| Services   | `/de/leistungen`     | `/en/services`     |
| References | `/de/referenzen`     | `/en/references`   |
| About      | `/de/ueber-uns`      | `/en/about`        |
| Contact    | `/de/kontakt`        | `/en/contact`      |
| Imprint    | `/de/impressum`      | `/en/imprint`      |
| Privacy    | `/de/datenschutz`    | `/en/privacy`      |

The language switcher maps the current page onto its counterpart, so switching
from `/de/leistungen` lands on `/en/services` rather than the home page.

`/` itself redirects: browsers preferring English go to `/en`, everyone else to
`/de`.

### Editing content

All visible text lives in `src/i18n/de.ts` and `src/i18n/en.ts`. Both must
satisfy the `SiteContent` interface in `types.ts`, so forgetting a translation
is a build error rather than a blank space on the live site.

Company details (address, phone, VAT ID) live in `src/config/site.ts` and feed
the footer, contact page, imprint and structured data at once.

---

## Outstanding tasks

- [ ] **Add photography.** See `public/images/README.md` for the file names and
      sizes. Placeholders currently reserve the exact aspect ratios, so adding
      real images will not shift the layout.
- [ ] **Add the commercial register details.** A GmbH must state its registry
      court and HRB number under § 5 TMG. Fill in `registryCourt` and
      `registrationNumber` in `src/config/site.ts` and the imprint section
      appears automatically.
- [ ] **Connect the contact form.** Set `contactFormEndpoint` in
      `src/config/site.ts` to a form provider endpoint such as
      [Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io).
      Until then the form falls back to opening the visitor's mail client, so
      no enquiry is lost.
- [ ] **Have the privacy policy reviewed.** It describes what the site actually
      does today (no cookies, no analytics, no tracking), but it is a starting
      point rather than legal advice.

---

## Deployment

A GitHub Actions workflow in `.github/workflows/deploy.yml` builds and publishes
the site to GitHub Pages on every push to `main`.

Before the first run, enable it in the repository under
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

This publishes to the repository's `github.io` address. The live domain is
unaffected until its DNS records are deliberately pointed at GitHub Pages.

The build output in `dist/` is plain static files, so any static host works
equally well — Netlify, Cloudflare Pages, Vercel, or ordinary web hosting.

---

## Accessibility and performance notes

- Semantic landmarks throughout, with a skip link to the main content.
- Full keyboard navigation; visible focus rings on every interactive element.
- Colour pairings meet WCAG AA contrast in both light and dark themes.
- Respects `prefers-reduced-motion` and `prefers-color-scheme`.
- No cookies, no analytics, no tracking scripts — so no consent banner needed.
- Fluid typography scales without a horizontal scrollbar down to 320px.
