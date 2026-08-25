// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Astro configuration.
 *
 * The site is fully static and bilingual. German is the default language and
 * every page is served under an explicit locale prefix (`/de/`, `/en/`) so that
 * both language versions are independently indexable by search engines.
 *
 * PAGES_BASE handles the one place the site is not served from a domain root:
 * a GitHub Pages project site lives at /<repo>/. The deploy workflow sets it;
 * local builds and the eventual custom domain leave it unset and serve from /.
 */
const base = process.env.PAGES_BASE || undefined;

// Canonical URLs, hreflang and the sitemap all hang off `site`, so it has to
// describe wherever the build is actually being served from. Keeping it in step
// with `base` means a staging deploy is internally consistent instead of
// pointing every canonical at a domain that is not live yet.
const site = process.env.PAGES_SITE || 'https://www.sportplusmontagen.de';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
        },
      },
    }),
  ],
});
