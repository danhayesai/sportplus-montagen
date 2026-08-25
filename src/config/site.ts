/**
 * Company and site-wide constants.
 *
 * These values are language neutral, so they live outside the i18n files and
 * are referenced from the footer, the contact page, the imprint and the
 * structured data. Change a detail here and it updates everywhere.
 */

export const site = {
  /** Legal company name, as registered. */
  legalName: 'SportPlus Montagen GmbH',
  /** Short name used in navigation and headings. */
  shortName: 'SportPlus Montagen',
  /** Canonical production URL, without a trailing slash. */
  url: 'https://www.sportplusmontagen.de',

  contact: {
    email: 'info@sportplusmontagen.de',
    phone: '0152 26763393',
    /** E.164 format, used for tel: links and structured data. */
    phoneHref: '+4915226763393',
  },

  address: {
    street: 'Möslstrasse 11e',
    postalCode: '83024',
    city: 'Rosenheim',
    country: 'Deutschland',
    countryCode: 'DE',
  },

  legal: {
    managingDirector: 'Tomas Kenda',
    /** Responsible for content under § 18 (2) MStV. */
    contentResponsible: 'Tomas Kenda',
    vatId: 'DE332276997',
    // Required for a GmbH under § 5 TMG. Setting both makes the imprint's
    // "Registereintrag" section render.
    registryCourt: 'Amtsgericht Traunstein',
    registrationNumber: 'HRB 28989',
  },

  /**
   * Endpoint for the contact form.
   *
   * The site is fully static, so form delivery runs through a third-party
   * endpoint. Paste the form ID from your provider (for example Web3Forms or
   * Formspree) here. While this is empty, the form falls back to a mailto link
   * so no enquiry is ever silently lost.
   */
  contactFormEndpoint: '',

  /**
   * Sectors currently offered, in display order.
   *
   * Anything left out here is hidden everywhere on the site — the home page
   * cards, the references galleries and the sitemap — while its text and
   * photography stay in the project untouched. Add an id back to this list to
   * bring the section straight back.
   *
   * 'timber-houses' is deliberately omitted: the company is not taking on
   * timber construction at the moment.
   */
  activeSectors: ['sports-halls', 'hotels'] as const,

  /**
   * Regions the company takes work in, used for local-search structured data
   * and mirrored in prose by the "Wo wir montieren" section.
   *
   * TODO: confirm this list. It is inferred from the Rosenheim base, not from
   * a statement Daniel has made - narrow or widen it as appropriate.
   */
  areaServed: ['Rosenheim', 'Oberbayern', 'Bayern', 'Deutschland'],

  /** Business hours used for structured data, in 24h format. */
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
} as const;

/** Single-line postal address, used in the footer and structured data. */
export function getFormattedAddress(): string {
  const { street, postalCode, city } = site.address;
  return `${street}, ${postalCode} ${city}`;
}
