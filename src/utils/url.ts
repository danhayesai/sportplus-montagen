/**
 * Base-path helpers.
 *
 * The site normally lives at a domain root, where the base is "/" and these
 * are no-ops. The exception is the GitHub Pages project site, which serves
 * from /<repo>/ - there the deploy workflow sets PAGES_BASE and every
 * hand-written link and public/ asset reference needs that prefix.
 *
 * Astro rewrites the assets it bundles itself (CSS, JS, anything imported),
 * but not strings we write by hand, which is what these cover.
 */

/** Base path with no trailing slash: "" at a domain root, "/repo" otherwise. */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/**
 * Prefixes a root-relative path with the base.
 * `withBase('/images/hero.jpg')` -> `/repo/images/hero.jpg` under a base.
 */
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE}${path}`;
}

/**
 * Strips the base back off a pathname.
 *
 * `Astro.url.pathname` includes the base, but canonical URLs, hreflang
 * alternates and route lookups all reason about the logical path, so they
 * need it removed first.
 */
export function stripBase(pathname: string): string {
  if (BASE && pathname.startsWith(BASE)) {
    return pathname.slice(BASE.length) || '/';
  }
  return pathname;
}
