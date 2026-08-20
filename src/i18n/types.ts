/**
 * Shape of the translatable site content.
 *
 * Both language files must satisfy this interface, so a missing translation is
 * a compile-time error rather than a blank space on the live site.
 */

export interface LinkedItem {
  /** Stable identifier, used for anchors and image file names. */
  id: string;
  title: string;
  body: string;
  bullets?: string[];
  note?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteContent {
  meta: {
    /** BCP-47 tag used for the <html lang> attribute and Open Graph. */
    localeTag: string;
    tagline: string;
    /** Default meta description, overridable per page. */
    description: string;
    skipToContent: string;
  };

  nav: {
    home: string;
    services: string;
    references: string;
    about: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
  };

  home: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    stats: Stat[];
    intro: {
      title: string;
      body: string[];
    };
    servicesTeaser: {
      title: string;
      subtitle: string;
      cta: string;
    };
    sectorsTeaser: {
      title: string;
      subtitle: string;
      cta: string;
    };
    ctaBand: {
      title: string;
      body: string;
      cta: string;
    };
  };

  services: {
    title: string;
    subtitle: string;
    lead: string;
    items: LinkedItem[];
  };

  references: {
    title: string;
    subtitle: string;
    lead: string;
    sectors: LinkedItem[];
    galleryNote: string;
  };

  about: {
    title: string;
    subtitle: string;
    lead: string[];
    pillars: LinkedItem[];
    closing: {
      title: string;
      body: string;
      cta: string;
    };
  };

  contact: {
    title: string;
    subtitle: string;
    lead: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      messagePlaceholder: string;
      consent: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      required: string;
    };
    directTitle: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    hoursLabel: string;
    hours: string;
    responseNote: string;
  };

  footer: {
    about: string;
    quickLinksTitle: string;
    contactTitle: string;
    legalTitle: string;
    imprint: string;
    privacy: string;
    rights: string;
  };

  legal: {
    imprintTitle: string;
    privacyTitle: string;
  };
}
