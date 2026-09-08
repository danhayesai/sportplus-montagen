/**
 * Redirects from the old Wix site's URLs to their equivalents here.
 *
 * The domain is not moving, so every link, bookmark and search result pointing
 * at the old site keeps arriving after the cutover - at addresses that no
 * longer exist. Each entry below is rendered as a stub page by
 * `src/pages/[...legacy].astro`.
 *
 * GitHub Pages serves static files only, so these cannot be real 301s. A stub
 * carrying a canonical link, a zero-delay meta refresh and a scripted
 * replacement is the closest a static host gets: search engines read the
 * canonical, and visitors are moved before they notice the page.
 *
 * `/` and `/en` are deliberately absent. Both already exist here - `/` as the
 * language splitter, `/en` as the English home page - so they need no stub.
 *
 * The full inventory this was derived from is in docs/legacy-url-map.md.
 */
/**
 * Types live in JSDoc rather than TypeScript because astro.config.mjs imports
 * this file too, and a .mjs config is parsed as plain JavaScript.
 *
 * @typedef {object} LegacyRedirect
 * @property {string} from Path on the old site, with no trailing slash.
 * @property {string} to Path on this site.
 * @property {'de' | 'en'} lang Language of the destination, for the stub's own markup.
 */

/** @type {LegacyRedirect[]} */
export const legacyRedirects = [
  // German pages. The old site served German from the root; here it lives
  // under /de/, so every one of these moved.
  { from: '/leistungen', to: '/de/leistungen', lang: 'de' },
  { from: '/referenzen', to: '/de/referenzen', lang: 'de' },
  { from: '/ueber-uns', to: '/de/ueber-uns', lang: 'de' },
  { from: '/kontakt', to: '/de/kontakt', lang: 'de' },
  { from: '/impressum', to: '/de/impressum', lang: 'de' },
  { from: '/datenschutz', to: '/de/datenschutz', lang: 'de' },

  // The old per-sector pages are now sections of one references page.
  { from: '/sporthallen', to: '/de/referenzen', lang: 'de' },
  { from: '/hotels', to: '/de/referenzen', lang: 'de' },

  // Timber construction is no longer offered, so there is no matching page.
  // Services is the closest honest destination: it says what we do instead,
  // which serves the visitor better than a 404 or a bounce to the home page.
  { from: '/holzhäuser', to: '/de/leistungen', lang: 'de' },

  // English pages. The old site reused the German slugs under /en/.
  { from: '/en/leistungen', to: '/en/services', lang: 'en' },
  { from: '/en/referenzen', to: '/en/references', lang: 'en' },
  { from: '/en/ueber-uns', to: '/en/about', lang: 'en' },
  { from: '/en/kontakt', to: '/en/contact', lang: 'en' },
  { from: '/en/impressum', to: '/en/imprint', lang: 'en' },
  { from: '/en/datenschutz', to: '/en/privacy', lang: 'en' },
  { from: '/en/sporthallen', to: '/en/references', lang: 'en' },
  { from: '/en/hotels', to: '/en/references', lang: 'en' },
  { from: '/en/holzhäuser', to: '/en/services', lang: 'en' },
];
