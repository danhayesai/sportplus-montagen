import type { SiteContent } from './types';

/** German content. German is the default language of the site. */
export const de: SiteContent = {
  meta: {
    localeTag: 'de-DE',
    tagline: 'Prallschutzwände und Sportböden – montiert mit Präzision.',
    description:
      'SportPlus Montagen GmbH aus Rosenheim montiert Prallschutzwände und Sportböden in Sporthallen. Dazu Innenausbau für Hotellerie und Gewerbe. Termingerecht, normgerecht und mängelfrei abgenommen.',
    skipToContent: 'Zum Inhalt springen',
  },

  media: {
    heroAlt:
      'Fertig montierte Prallschutzwand und Sportboden in einer Sporthalle',
    teamAlt: 'Fertiggestellte Sporthalle mit montierter Prallschutzwand',
    shareAlt:
      'Sporthalle mit von SportPlus Montagen montierter Prallschutzwand und Sportboden',
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
  },

  home: {
    hero: {
      eyebrow: 'Montagebetrieb aus Rosenheim',
      title: 'Der Montagepartner, auf den Sie sich verlassen können',
      subtitle:
        'Wir montieren Prallschutzwände und Sportböden in Sporthallen – nach aktuellem Stand der Technik, zum vereinbarten Termin und mängelfrei bei der Abnahme. Darüber hinaus übernehmen wir Innenausbau für Hotellerie und Gewerbe.',
      ctaPrimary: 'Projekt anfragen',
      ctaSecondary: 'Leistungen ansehen',
    },
    stats: [
      { value: 'Mängelfrei', label: 'Abnahme unserer Projekte' },
      { value: 'Aus einer Hand', label: 'Von der Demontage bis zur Abnahme' },
      { value: 'Termintreu', label: 'Bisher jedes Projekt pünktlich' },
    ],
    intro: {
      title: 'Sauber, präzise, termingerecht',
      body: [
        'SportPlus Montagen ist auf die Montage von Prallschutzwänden und Sportböden in Sporthallen spezialisiert. Was wir dort bauen, wird täglich benutzt – von Schulklassen und Vereinen. Entsprechend genau arbeiten wir.',
        'Wir übernehmen Aufträge für Bauunternehmen, Kommunen und private Bauherren – von der einzelnen Hallenwand bis zum kompletten Innenausbau.',
      ],
    },
    servicesTeaser: {
      title: 'Was wir für Sie übernehmen',
      subtitle:
        'Von der Demontage der alten Elemente bis zur Abnahme des fertigen Bodens – alles aus einer Hand.',
      cta: 'Alle Leistungen',
    },
    sectorsTeaser: {
      title: 'Wo wir arbeiten',
      subtitle: 'Die Bereiche, in denen wir seit Jahren zu Hause sind.',
      cta: 'Referenzen ansehen',
    },
    ctaBand: {
      title: 'Sie haben ein Projekt in Planung?',
      body:
        'Schicken Sie uns die Eckdaten – Hallengröße, Systemwunsch, Wunschtermin. Sie bekommen zeitnah eine belastbare Einschätzung.',
      cta: 'Jetzt anfragen',
    },
  },

  services: {
    title: 'Leistungen',
    subtitle: 'Montage, Demontage, Aufmaß und Abnahme aus einer Hand.',
    lead:
      'Wir übernehmen den kompletten Ablauf: alte Elemente zurückbauen, aufmessen, neu montieren und gemeinsam abnehmen. Ein Ansprechpartner, ein Termin, ein Ergebnis.',
    items: [
      {
        id: 'installation',
        title: 'Montage & Service',
        body:
          'Prallschutzwände und Sportböden montieren wir nach dem aktuellen Stand der Technik – sauber ausgerichtet, sicher befestigt und normgerecht ausgeführt. Wir arbeiten mit allen gängigen Systemen:',
        bullets: [
          'Schutzwände mit Holz- oder Metallrahmen, auf Wunsch mit Brandschutz',
          'Schaum- und Sperrholzpaneele, unter anderem Haro-Systeme',
          'Light 19 und Light 27 auf ebenen Wandflächen',
          'Textilschutzbeläge',
        ],
        note:
          'Ihr System ist nicht dabei? Sprechen Sie uns an – in der Regel finden wir eine Lösung.',
      },
      {
        id: 'dismantling',
        title: 'Demontage & Entsorgung',
        body:
          'Alte Elemente bauen wir sorgfältig zurück und entsorgen sie fachgerecht. Mit Spezialwerkzeug lösen wir Schutzwände und Sportböden, ohne die Bausubstanz darunter zu beschädigen.',
        bullets: [
          'Prallschutzwände und Sportböden aller Bauarten',
          'Alte Tribünen und Sportgeräte',
          'Einbauelemente, Tore und Türen',
          'Fachgerechte Entsorgung inklusive Nachweis',
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
        'Rufen Sie uns an oder schreiben Sie uns kurz, was ansteht. Wir melden uns zeitnah mit einer ehrlichen Einschätzung – auch dann, wenn wir nicht der richtige Betrieb für Ihr Projekt sind.',
      cta: 'Kontakt aufnehmen',
    },
  },

  contact: {
    title: 'Kontakt',
    subtitle: 'Wir freuen uns auf Ihre Anfrage.',
    lead:
      'Beschreiben Sie kurz Ihr Projekt: Art der Halle oder des Gebäudes, ungefähre Fläche, gewünschtes System und Wunschtermin. Je mehr wir wissen, desto genauer fällt unsere Rückmeldung aus.',
    form: {
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail',
      phone: 'Telefon',
      subject: 'Betreff',
      message: 'Ihre Nachricht',
      messagePlaceholder:
        'Um welches Projekt geht es? Art des Gebäudes, ungefähre Fläche, gewünschtes System, Wunschtermin …',
      consent:
        'Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage einverstanden.',
      submit: 'Anfrage senden',
      sending: 'Wird gesendet …',
      success:
        'Vielen Dank für Ihre Nachricht! Wir melden uns in der Regel innerhalb eines Werktages bei Ihnen.',
      error:
        'Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.',
      required: 'Pflichtfeld',
    },
    directTitle: 'Direkter Draht',
    phoneLabel: 'Telefon',
    emailLabel: 'E-Mail',
    addressLabel: 'Anschrift',
    hoursLabel: 'Erreichbarkeit',
    hours: 'Montag bis Freitag, 8:00 – 18:00 Uhr',
    responseNote: 'Wir antworten in der Regel innerhalb eines Werktages.',
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
