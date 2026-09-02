import type { SiteContent } from './types';

/** German content. German is the default language of the site. */
export const de: SiteContent = {
  meta: {
    localeTag: 'de-DE',
    tagline: 'Montage im Innenausbau für Hotels und Sporthallen.',
    description:
      'SportPlus Montagen GmbH aus Rosenheim ist Ihr Montagepartner für Hoteleinrichtungen, Innenausbauelemente und Prallschutzwände in Sporthallen – bundesweit im Einsatz.',
    skipToContent: 'Zum Inhalt springen',
  },

  media: {
    heroAlt:
      'Sporthalle während der Montage: Wandverkleidung, Sportboden und Einbauelemente',
    shareAlt: 'Logo von SportPlus Montagen',
    galleryAltPrefix: 'Projektbeispiel:',
  },

  nav: {
    // "Startseite" rather than "Start": search engines treat bare "Start" as a
    // non-descriptive link text, and it reads more naturally in German anyway.
    home: 'Startseite',
    services: 'Leistungen',
    references: 'Referenzen',
    about: 'Über uns',
    contact: 'Kontakt',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    languageLabel: 'Sprache wählen',
    callAriaLabel: 'Rufen Sie uns an',
    callHours: 'Mo–Fr 7–17 Uhr',
  },

  serviceArea: {
    title: 'Wo wir montieren',
    body:
      'Unser Sitz ist in Rosenheim, unser Einsatzgebiet ist ganz Deutschland. Fragen Sie Ihr Projekt einfach an – wir stimmen Ablauf und Anfahrt mit Ihnen ab.',
  },

  breadcrumb: {
    label: 'Sie sind hier',
    home: 'Startseite',
  },

  notFound: {
    title: 'Seite nicht gefunden',
    body:
      'Diese Seite gibt es nicht (mehr). Vielleicht hat sich die Adresse geändert oder ein Link ist veraltet. Über die Navigation oben finden Sie alles Weitere – oder rufen Sie uns einfach an.',
    cta: 'Zur Startseite',
  },

  faq: {
    title: 'Häufige Fragen',
    subtitle: 'Was Auftraggeber uns vor einem Projekt am häufigsten fragen.',
    items: [
      {
        question: 'Welche Arbeiten übernehmen Sie im Hotelbereich?',
        answer:
          'Wir montieren Hoteleinrichtungen und Innenausbauelemente – zum Beispiel Möbel, Küchen, Türen, Badmöbel, Regale und weitere Einbauelemente.',
      },
      {
        question: 'Übernehmen Sie auch Demontage und Entsorgung?',
        answer:
          'Ja, beides gehört zum Leistungsumfang. Wir bauen die alten Elemente sorgfältig zurück und entsorgen sie fachgerecht. Sie brauchen dafür keinen zweiten Betrieb zu beauftragen.',
      },
      {
        question: 'Was kostet eine Prallschutzwand?',
        answer:
          'Seriös lässt sich das erst nach dem Aufmaß sagen, weil Wandfläche, System und Sonderanfertigungen den Preis bestimmen. Deshalb messen wir vor Ort auf, bevor wir Ihnen ein Angebot machen.',
      },
      {
        question: 'Arbeiten Sie auch für private Bauherren?',
        answer:
          'Ja. Wir arbeiten sowohl für Unternehmen als auch für private Bauherren. Der Ablauf ist derselbe: Aufmaß, Angebot, Montage, Abnahme.',
      },
    ],
  },

  home: {
    hero: {
      eyebrow: 'Innenausbau & Montage | Bundesweit',
      title: 'Montage für Hotels und Sporthallen',
      subtitle:
        'Wir montieren Hoteleinrichtungen und Innenausbauelemente sowie Prallschutzwände für Sporthallen. Präzise ausgeführt, sauber organisiert und bundesweit für unsere Auftraggeber im Einsatz.',
      ctaPrimary: 'Projekt anfragen',
      ctaSecondary: 'Leistungen ansehen',
    },
    stats: [
      { value: 'Hotelmontage', label: 'Möbel, Küchen, Türen & Einbauten' },
      { value: 'Prallschutz', label: 'Montage für Sporthallen' },
      { value: 'Bundesweit', label: 'Von Rosenheim aus im Einsatz' },
    ],
    intro: {
      title: 'Montage, die zum Projekt passt',
      body: [
        'SportPlus Montagen ist ein Montagebetrieb für den Innenausbau. Unser Schwerpunkt liegt auf der Montage von Hoteleinrichtungen und auf Prallschutzwänden für Sporthallen.',
        'Wir montieren überwiegend bauseits bereitgestellte Materialien. Auf Wunsch kalkulieren wir auch die Materialbeschaffung mit – die fachgerechte Montage bleibt dabei unser Kern.',
      ],
    },
    servicesTeaser: {
      title: 'Was wir für Sie übernehmen',
      subtitle:
        'Vom einzelnen Einbauelement bis zur kompletten Einrichtung: Wir übernehmen die Montage strukturiert, sauber und mit einem festen Ansprechpartner.',
      cta: 'Alle Leistungen',
    },
    sectorsTeaser: {
      title: 'Unsere Schwerpunkte',
      subtitle: 'Hotelmontage und Prallschutzwände: zwei Bereiche, in denen Präzision zählt.',
      cta: 'Referenzen ansehen',
    },
    process: {
      title: 'So läuft ein Projekt bei uns ab',
      subtitle:
        'Fünf Schritte, bei denen Sie jederzeit wissen, woran Sie sind.',
      steps: [
        {
          title: 'Anfrage',
          body:
            'Sie schildern uns kurz das Projekt – Hotelbereich oder Sporthalle, Umfang, Material und Wunschtermin. Ein Anruf genügt.',
        },
        {
          title: 'Aufmaß vor Ort',
          body:
            'Bei Bedarf stimmen wir Maße, Anschlüsse und besondere Einbausituationen vor Ort mit Ihnen ab.',
        },
        {
          title: 'Angebot',
          body:
            'Sie bekommen ein schriftliches Angebot mit nachvollziehbaren Positionen. Materialbeschaffung berücksichtigen wir auf Wunsch.',
        },
        {
          title: 'Montage',
          body:
            'Wir montieren die vereinbarten Leistungen sauber, präzise und abgestimmt auf Ihr Projekt.',
        },
        {
          title: 'Abnahme',
          body:
            'Die Abnahme erfolgt in der Regel direkt im Anschluss an die Montage. Einen separaten Termin richten wir auf Wunsch gerne ein.',
        },
      ],
    },
    ctaBand: {
      title: 'Sie haben ein Projekt in Planung?',
      body:
        'Schicken Sie uns die Eckdaten – Hotelbereich oder Sporthalle, die zu montierenden Elemente und den Wunschtermin. Wir schauen es uns an und melden uns bei Ihnen.',
      cta: 'Jetzt anfragen',
    },
  },

  services: {
    title: 'Leistungen',
    subtitle: 'Hotelmontage, Prallschutzwände und ergänzende Montageleistungen.',
    lead:
      'Unser Schwerpunkt ist die Montage: Hoteleinrichtungen und Innenausbauelemente auf der einen, Prallschutzwände für Sporthallen auf der anderen Seite. Ergänzende Leistungen stimmen wir projektbezogen mit Ihnen ab.',
    items: [
      {
        id: 'installation',
        title: 'Hotelmontage & Innenausbau',
        body:
          'Wir montieren Hoteleinrichtungen und Innenausbauelemente nach Ihren Vorgaben – präzise eingepasst, sauber befestigt und abgestimmt auf den jeweiligen Raum:',
        bullets: [
          'Hotelmöbel und Zimmerausstattungen',
          'Küchen und Küchenzeilen',
          'Türen, Badmöbel und Regalsysteme',
          'Einbauelemente und individuelle Ausbauten',
        ],
        note:
          'In der Regel montieren wir bauseits gelieferte Materialien. Auf Wunsch erstellen wir auch ein Angebot inklusive Material.',
      },
      {
        id: 'dismantling',
        title: 'Prallschutzwände für Sporthallen',
        body:
          'Prallschutzwände sind unser zweiter Schwerpunkt. Wir montieren die gängigen Systeme für Schul-, Vereins- und Mehrzweckhallen präzise und fachgerecht.',
        bullets: [
          'Prallschutzwände mit Holz- oder Metallrahmen',
          'Schaum-, Sperrholz- und Textilsysteme',
          'Auf Wunsch ergänzende Sporthallen-Elemente',
          'Montage nach Aufmaß und Vorgabe',
        ],
      },
      {
        id: 'surveying',
        title: 'Demontage & Zusatzleistungen',
        body:
          'Neben unseren Schwerpunkten übernehmen wir nach Absprache auch Demontage, Aufmaß und weitere Montagearbeiten. Was sinnvoll ist, klären wir direkt anhand Ihres Projekts.',
        bullets: [
          'Demontage bestehender Elemente',
          'Aufmaß und Abstimmung vor Ort',
          'Weitere Einbauelemente nach Vorgabe',
        ],
      },
      {
        id: 'handover',
        title: 'Abnahme & Übergabe',
        body:
          'Nach der Montage stimmen wir die Übergabe mit Ihnen ab. Separate Abnahmetermine sind selbstverständlich möglich.',
        note: 'Bei Fragen zur Ausführung sprechen Sie uns jederzeit direkt an.',
      },
    ],
  },

  references: {
    title: 'Referenzen',
    subtitle: 'Hotelmontage und Prallschutzwände: unsere beiden Schwerpunkte.',
    lead:
      'Ein Auszug aus unserer Montagearbeit im Hotelbereich und in Sporthallen.',
    sectors: [
      {
        id: 'sports-halls',
        title: 'Sporthallen',
        body:
          'Montage von Prallschutzwänden für Schul-, Vereins- und Mehrzweckhallen. Wir arbeiten präzise, sauber und abgestimmt auf das jeweilige System.',
      },
      {
        id: 'hotels',
        title: 'Hotels',
        body:
          'Montage von Hoteleinrichtungen und Innenausbauelementen – von Möbeln und Küchen über Türen und Badmöbel bis zu Regalen und weiteren Einbauten.',
      },
      {
        id: 'timber-houses',
        title: 'Holzhäuser',
        body:
          'Holzbau für Wohn- und Nichtwohngebäude sowie energetische Sanierung – mit natürlichen, ökologischen Materialien.',
      },
    ],
    galleryNote:
      'Weitere Projektbilder zeigen wir Ihnen gerne auf Anfrage – auch zu einem bestimmten System oder einer Halle in Ihrer Nähe.',
  },

  about: {
    title: 'Über uns',
    subtitle: 'Ein Betrieb, vier Grundsätze.',
    lead: [
      'SportPlus Montagen ist ein Montagebetrieb aus Rosenheim. Wir realisieren Montageleistungen im Innenausbau – mit Schwerpunkt auf Hoteleinrichtungen und Prallschutzwänden für Sporthallen.',
      'Wir arbeiten bundesweit und überwiegend mit bauseits bereitgestellten Materialien. Was bei jedem Projekt gleich bleibt: ein fester Ansprechpartner, sorgfältige Montage und eine sauber organisierte Baustelle.',
    ],
    pillars: [
      {
        id: 'quality',
        title: 'Qualität',
        body:
          'Qualität zeigt sich in der Ausführung: passgenaue Elemente, saubere Übergänge und eine Montage, die zum Raum und zum System passt.',
      },
      {
        id: 'reliability',
        title: 'Zuverlässigkeit',
        body:
          'Ein fester Ansprechpartner begleitet Ihr Projekt von der ersten Abstimmung bis zur Übergabe.',
      },
      {
        id: 'detail',
        title: 'Aufmerksamkeit zum Detail',
        body:
          'Kanten, Fugen, Anschlüsse und Übergänge entscheiden über das Gesamtbild. Deshalb achten wir auf die Details, die eine Montage dauerhaft sauber wirken lassen.',
      },
      {
        id: 'punctuality',
        title: 'Termintreue',
        body:
          'Wir planen verbindlich und stimmen Termine transparent mit Ihnen ab. So wissen alle Beteiligten, wann welcher Arbeitsschritt ansteht.',
      },
    ],
    closing: {
      title: 'Überzeugen Sie sich selbst',
      body:
        'Rufen Sie uns an oder schreiben Sie uns kurz, was ansteht. Wir klären gemeinsam, ob und wie wir Ihr Projekt unterstützen können.',
      cta: 'Kontakt aufnehmen',
    },
  },

  contact: {
    title: 'Kontakt',
    subtitle: 'Wir freuen uns auf Ihre Anfrage.',
    lead:
      'Beschreiben Sie kurz Ihr Projekt: Hotelbereich oder Sporthalle, welche Elemente montiert werden sollen, ungefähre Menge oder Fläche und Ihr Wunschtermin.',
    preferCallTitle: 'Am schnellsten geht es per Telefon',
    preferCallBody:
      'Ein kurzer Anruf klärt die meisten Fragen sofort – gerade wenn es um Termine oder Machbarkeit geht. Wenn es Ihnen lieber ist oder es später am Abend wird, schreiben Sie uns einfach über das Formular.',
    formTitle: 'Oder schreiben Sie uns',
    form: {
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      phoneHint: 'Nur falls Sie einen Rückruf möchten.',
      optional: 'optional',
      message: 'Ihre Nachricht',
      messagePlaceholder:
        'Um welches Projekt geht es? Art des Gebäudes, ungefähre Fläche, gewünschtes System, Wunschtermin …',
      consent:
        'Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage einverstanden.',
      submit: 'Anfrage senden',
      sending: 'Wird gesendet …',
      success:
        'Vielen Dank für Ihre Nachricht – wir haben Ihre Anfrage erhalten und melden uns bei Ihnen.',
      error:
        'Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.',
      required: 'Pflichtfeld',
    },
    directTitle: 'Direkter Draht',
    phoneLabel: 'Telefon',
    emailLabel: 'E-Mail',
    addressLabel: 'Anschrift',
    hours: 'Montag bis Freitag, 7:00 – 17:00 Uhr',

    responseNote: 'Wenn es eilig ist, rufen Sie uns am besten direkt an.',
  },

  footer: {
    about:
      'Prallschutzwände für Sporthallen sowie Hotelmontage und Innenausbau. Aus Rosenheim, bundesweit im Einsatz.',
    quickLinksTitle: 'Navigation',
    contactTitle: 'Kontakt',
    legalTitle: 'Rechtliches',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    rights: 'Alle Rechte vorbehalten.',
  },

  legal: {
    imprintTitle: 'Impressum',
    privacyTitle: 'Datenschutzerklärung',
  },
};
