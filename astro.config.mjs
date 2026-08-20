// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Astro configuration.
 *
 * The site is fully static and bilingual. German is the default language and
 * every page is served under an explicit locale prefix (`/de/`, `/en/`) so that
 * both language versions are independently indexable by search engines.
 */
export default defineConfig({
  site: 'https://www.sportplusmontagen.de',
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
