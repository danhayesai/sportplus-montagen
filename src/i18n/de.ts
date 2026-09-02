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
      'Fertig montierte Prallschutzwand und Sportboden in einer Sporthalle',
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
        title: 'Aufmaß & Sonderanfertigung',
        body:
          'Nicht jede Halle folgt dem Standardmaß. Wir messen vor Ort auf und konstruieren die Elemente, die von der Norm abweichen – damit am Ende alles bündig sitzt.',
        bullets: [
          'Fensterrahmen und Laibungen',
          'Ballrollerboards',
          'Sonderelemente nach Ihren Vorgaben',
        ],
      },
      {
        id: 'handover',
        title: 'Abnahme & Dokumentation',
        body:
          'Die Abnahme findet in der Regel direkt im Anschluss an die Montage statt, durchgeführt von unseren qualifizierten Monteuren. Separate Abnahmetermine richten wir gerne ein.',
        note: 'Unsere Abnahmeberichte zeigen wir Ihnen auf Anfrage gerne vorab.',
      },
    ],
  },

  references: {
    title: 'Referenzen',
    subtitle: 'Die Bereiche, in denen wir seit Jahren zu Hause sind.',
    lead:
      'Ein Auszug aus unserer Arbeit. Für Referenzen in Ihrer Nähe oder zu einem bestimmten System sprechen Sie uns gerne an.',
    sectors: [
      {
        id: 'sports-halls',
        title: 'Sporthallen',
        body:
          'Prallschutz und Sportböden für Schul-, Vereins- und Mehrzweckhallen. Präzise ausgerichtet, sauber verfugt und so ausgeführt, dass die Halle jahrzehntelang hält.',
      },
      {
        id: 'hotels',
        title: 'Hotels',
        body:
          'Innenausbau für Hotellerie, Gewerbe und Wohnbau. Ausgeführt von erfahrenen Fachkräften, die wissen, dass im laufenden Betrieb jeder Tag zählt.',
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
      'SportPlus Montagen ist ein Montagebetrieb aus Rosenheim. Wir haben die Erfahrung, Schutzwände und Sportböden aller Art zu montieren – und den Anspruch, das jedes Mal richtig zu tun.',
      'Wir arbeiten für Unternehmen genauso wie für private Bauherren. Was in jedem Fall gleich bleibt: ein fester Ansprechpartner, verbindliche Termine und eine Baustelle, die wir so hinterlassen, wie wir sie selbst vorfinden möchten.',
    ],
    pillars: [
      {
        id: 'quality',
        title: 'Qualität',
        body:
          'Unsere Projekte werden mängelfrei abgenommen. Das ist kein Werbeversprechen, sondern nachlesbar – die aktuellen Abnahmeberichte zeigen wir Ihnen auf Anfrage.',
      },
      {
        id: 'reliability',
        title: 'Zuverlässigkeit',
        body:
          'Zugesagt ist zugesagt. Sie erreichen uns während des gesamten Projekts unter derselben Nummer und wissen jederzeit, wo Ihr Auftrag steht.',
      },
      {
        id: 'detail',
        title: 'Aufmerksamkeit zum Detail',
        body:
          'Kanten, Fugen, Übergänge: Die Details entscheiden darüber, ob eine Halle nach fünf Jahren noch gut aussieht. Wie das bei uns aussieht, sehen Sie in den Referenzen.',
      },
      {
        id: 'punctuality',
        title: 'Termintreue',
        body:
          'Wir haben bisher jedes Projekt termingerecht abgeschlossen und wollen das so halten. Verzögert sich eine Lieferung, suchen wir gemeinsam mit Ihnen nach einer Lösung, damit Ihr Termin steht.',
      },
    ],
    closing: {
      title: 'Überzeugen Sie sich selbst',
      body:
        'Rufen Sie uns an oder schreiben Sie uns kurz, was ansteht. Sie bekommen eine ehrliche Einschätzung – auch dann, wenn wir nicht der richtige Betrieb für Ihr Projekt sind.',
      cta: 'Kontakt aufnehmen',
    },
  },

  contact: {
    title: 'Kontakt',
    subtitle: 'Wir freuen uns auf Ihre Anfrage.',
    lead:
      'Beschreiben Sie kurz Ihr Projekt: Art der Halle oder des Gebäudes, ungefähre Fläche, gewünschtes System und Wunschtermin. Je mehr wir wissen, desto genauer fällt unsere Rückmeldung aus.',
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
      'Prallschutzwände und Sportböden für Sporthallen, Innenausbau für Hotellerie und Gewerbe. Aus Rosenheim, überregional im Einsatz.',
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
