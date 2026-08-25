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

export interface Step {
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
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

  /** Alternative text for photography, required for screen readers. */
  media: {
    heroAlt: string;
    /** Describes the social sharing preview image. */
    shareAlt: string;
    /** Prefixed to a sector name, e.g. "Project example: sports halls". */
    galleryAltPrefix: string;
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
    /** Accessible name for the header's click-to-call link. */
    callAriaLabel: string;
  };

  /** Where the company works. Also feeds LocalBusiness areaServed. */
  serviceArea: {
    title: string;
    body: string;
  };

  /** Shared breadcrumb strings. */
  breadcrumb: {
    label: string;
    home: string;
  };

  /** Copy for the 404 page. */
  notFound: {
    title: string;
    body: string;
    cta: string;
  };

  faq: {
    title: string;
    subtitle: string;
    items: FaqItem[];
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
    /** "So läuft's ab" - the step-by-step a customer can expect. */
    process: {
      title: string;
      subtitle: string;
      steps: Step[];
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
    /**
     * Deliberately short. Every extra field costs completions, and asking for
     * a phone number without saying why measurably reduces them - hence the
     * explicit `phoneHint` rather than a bare optional field.
     */
    form: {
      name: string;
      email: string;
      phone: string;
      phoneHint: string;
      message: string;
      messagePlaceholder: string;
      consent: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      required: string;
      optional: string;
    };
    /** Heading above the phone/email block, which is the primary path. */
    preferCallTitle: string;
    preferCallBody: string;
    /** Heading above the form, framed as the secondary path. */
    formTitle: string;
    directTitle: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
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
