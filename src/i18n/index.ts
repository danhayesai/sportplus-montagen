import { de } from './de';
import { en } from './en';
import { site } from '../config/site';
import { withBase, stripBase } from '../utils/url';
import type { LinkedItem, SiteContent } from './types';

/** Languages the site is published in, mapped to their native display names. */
export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'de';

/** Every language's content, keyed by language code. */
export const content: Record<Language, SiteContent> = { de, en };

/**
 * Page routes with a localised slug per language.
 *
 * Slugs differ between languages on purpose: German visitors get German URLs
 * (`/de/leistungen`) and English visitors get English ones (`/en/services`),
 * which reads better and ranks better than sharing one set of slugs.
 */
export const routes = [
  { key: 'home', de: '', en: '' },
  { key: 'services', de: 'leistungen', en: 'services' },
  { key: 'references', de: 'referenzen', en: 'references' },
  { key: 'about', de: 'ueber-uns', en: 'about' },
  { key: 'contact', de: 'kontakt', en: 'contact' },
  { key: 'imprint', de: 'impressum', en: 'imprint' },
  { key: 'privacy', de: 'datenschutz', en: 'privacy' },
] as const;

export type RouteKey = (typeof routes)[number]['key'];

/** Returns the translated content for a language. */
export function getContent(lang: Language): SiteContent {
  return content[lang];
}

/**
 * The sectors that should actually be shown, in the order configured.
 *
 * Sector copy and photography stay in the project even when a sector is not
 * being offered, so bringing one back is a one-line change in `site.ts`.
 */
export function getActiveSectors(lang: Language): LinkedItem[] {
  const sectors = getContent(lang).references.sectors;
  return site.activeSectors
    .map((id) => sectors.find((sector) => sector.id === id))
    .filter((sector): sector is LinkedItem => sector !== undefined);
}

/**
 * Reads the active language out of a URL.
 * Falls back to the default language when the path carries no known prefix.
 */
export function getLanguageFromUrl(url: URL): Language {
  const [, segment] = stripBase(url.pathname).split('/');
  if (segment && segment in languages) {
    return segment as Language;
  }
  return defaultLanguage;
}

/**
 * Builds a root-relative href for a route in a given language, including the
 * base path when the site is served from a subdirectory.
 * `home` yields `/de` or `/en` rather than a trailing slash.
 */
export function getPath(key: RouteKey, lang: Language): string {
  const route = routes.find((entry) => entry.key === key);
  if (!route) {
    throw new Error(`Unknown route key: ${key}`);
  }
  const slug = route[lang];
  return withBase(slug ? `/${lang}/${slug}` : `/${lang}`);
}

/** Finds which route a pathname belongs to, regardless of its language. */
export function getRouteKeyFromPath(pathname: string): RouteKey | undefined {
  const segments = stripBase(pathname).split('/').filter(Boolean);
  const [langSegment, slugSegment] = segments;

  if (!langSegment || !(langSegment in languages)) {
    return undefined;
  }

  const lang = langSegment as Language;
  const slug = slugSegment ?? '';
  return routes.find((route) => route[lang] === slug)?.key;
}

/**
 * Maps the current path onto its equivalent in another language, so the
 * language switcher keeps the visitor on the same page instead of dumping
 * them back on the home page.
 */
export function getAlternatePath(pathname: string, target: Language): string {
  const key = getRouteKeyFromPath(pathname);
  return key ? getPath(key, target) : getPath('home', target);
}

/** The main navigation, in display order. Legal pages live in the footer only. */
export const primaryNavKeys: RouteKey[] = [
  'home',
  'services',
  'references',
  'about',
  'contact',
];

/** Maps a route key onto its label in the given language. */
export function getNavLabel(key: RouteKey, lang: Language): string {
  const nav = getContent(lang).nav;
  const footer = getContent(lang).footer;

  switch (key) {
    case 'home':
      return nav.home;
    case 'services':
      return nav.services;
    case 'references':
      return nav.references;
    case 'about':
      return nav.about;
    case 'contact':
      return nav.contact;
    case 'imprint':
      return footer.imprint;
    case 'privacy':
      return footer.privacy;
  }
}
