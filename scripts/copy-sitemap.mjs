import { copyFileSync, existsSync } from 'node:fs';

/**
 * Serves the sitemap at /sitemap.xml as well as /sitemap-index.xml.
 *
 * @astrojs/sitemap names its index sitemap-index.xml and offers no way to
 * change that. But /sitemap.xml is where nearly everything looks by default -
 * and it is the address the old Wix site advertised in its robots.txt, so
 * Google keeps re-fetching it and logging a 404 in Search Console.
 *
 * A copy rather than a redirect: crawlers fetch sitemaps as XML and do not
 * follow HTML meta refreshes, which are the only redirect a static host has.
 *
 * Runs after `astro build`, since the source file only exists once the
 * integration has written it.
 */
const source = 'dist/sitemap-index.xml';
const target = 'dist/sitemap.xml';

if (!existsSync(source)) {
  throw new Error(`${source} not found - did the sitemap integration run?`);
}

copyFileSync(source, target);
console.log(`sitemap: copied ${source} -> ${target}`);
