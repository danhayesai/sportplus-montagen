import type { SiteContent } from './types';

/** English content. Written as native English copy rather than a literal translation. */
export const en: SiteContent = {
  meta: {
    localeTag: 'en-US',
    tagline: 'Impact protection walls and sports flooring, installed with precision.',
    description:
      'SportPlus Montagen GmbH, based in Rosenheim, installs impact protection walls and sports flooring in sports halls, alongside interior fit-out for hospitality and commercial projects. On schedule, to standard, handed over without defects.',
    skipToContent: 'Skip to content',
  },

  media: {
    heroAlt:
      'Finished impact protection wall and sports flooring in a sports hall',
    shareAlt: 'SportPlus Montagen logo',
    galleryAltPrefix: 'Project example:',
  },

  nav: {
    home: 'Home',
    services: 'Services',
    references: 'References',
    about: 'About',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Choose language',
    callAriaLabel: 'Call us',
    callHours: 'Mon–Fri 7–17',
  },

  serviceArea: {
    title: 'Where we work',
    body:
      'We are based in Rosenheim and work throughout Germany. Where your hall is matters less than you might think — send us the project and we will sort the travel out with it.',
  },

  breadcrumb: {
    label: 'You are here',
    home: 'Home',
  },

  notFound: {
    title: 'Page not found',
    body:
      'This page does not exist, or no longer does. The address may have changed, or a link may be out of date. The navigation above will get you where you need to go — or simply give us a call.',
    cta: 'Back to the home page',
  },

  faq: {
    title: 'Frequently asked questions',
    subtitle: 'What clients most often ask us before a project starts.',
    items: [
      {
        question: 'How long does installing a sports hall take?',
        answer:
          'It depends on the size of the hall and the system chosen. We survey the areas on site and give you a date afterwards — and we keep to it.',
      },
      {
        question: 'Do you handle strip-out and disposal too?',
        answer:
          'Yes, both are part of the job. We carefully remove the old elements and dispose of them properly. There is no need to bring in a second contractor for it.',
      },
      {
        question: 'What does an impact protection wall cost?',
        answer:
          'That cannot honestly be answered before the survey, because wall area, system and any bespoke elements all drive the price. So we measure on site before quoting.',
      },
      {
        question: 'Do you work for private clients as well?',
        answer:
          'Yes. We work for companies and private clients alike. The process is the same either way: survey, quote, installation, handover.',
      },
    ],
  },

  home: {
    hero: {
      eyebrow: 'Installation specialists based in Rosenheim',
      title: 'The installation partner you can rely on',
      subtitle:
        'We install impact protection walls and sports flooring in sports halls — built to current technical standards, delivered on the agreed date and handed over without defects. We also take on interior fit-out for hospitality and commercial projects.',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'View our services',
    },
    stats: [
      { value: 'Defect-free', label: 'Handover on our projects' },
      { value: 'End to end', label: 'From strip-out to handover' },
      { value: 'On schedule', label: 'Every project delivered on time' },
    ],
    intro: {
      title: 'Clean work, precise fit, on the agreed date',
      body: [
        'SportPlus Montagen specialises in installing impact protection walls and sports flooring in sports halls. What we build there gets used every day — by school classes and sports clubs. We work to match.',
        'We take on work for construction firms, local authorities and private clients, from a single hall wall through to a complete interior fit-out.',
      ],
    },
    servicesTeaser: {
      title: 'What we take off your hands',
      subtitle:
        'From stripping out the old elements to signing off the finished floor — handled end to end.',
      cta: 'All services',
    },
    sectorsTeaser: {
      title: 'Our sectors',
      subtitle: 'The sectors we have worked in for years.',
      cta: 'View references',
    },
    process: {
      title: 'How a project runs with us',
      subtitle: 'Five steps, so you always know where things stand.',
      steps: [
        {
          title: 'Enquiry',
          body:
            'You tell us briefly about the project — the hall, approximate area, target date. A phone call is enough.',
        },
        {
          title: 'Site survey',
          body:
            'We measure the areas ourselves and settle the details the drawings do not show: substrate, reveals, bespoke elements.',
        },
        {
          title: 'Quote',
          body:
            'You get a written, itemised quote you can check line by line — including strip-out and disposal where those apply.',
        },
        {
          title: 'Installation',
          body:
            'We install on the agreed date, executed cleanly and handed over without defects.',
        },
        {
          title: 'Handover',
          body:
            'Handover normally takes place directly after installation. A separate appointment can be arranged on request.',
        },
      ],
    },
    ctaBand: {
      title: 'Have a project coming up?',
      body:
        'Send us the essentials — hall size, preferred system, target date. We will look at it and come back to you.',
      cta: 'Get in touch',
    },
  },

  services: {
    title: 'Services',
    subtitle: 'Installation, strip-out, surveying and handover from a single contractor.',
    lead:
      'We handle the whole sequence: strip out the old elements, survey the space, install the new system and walk the handover with you. One point of contact, one schedule, one result.',
    items: [
      {
        id: 'installation',
        title: 'Installation & Service',
        body:
          'We install impact protection walls and sports flooring to current technical standards — accurately aligned, securely fixed and executed to specification. We work with all the common systems:',
        bullets: [
          'Protection walls with timber or metal frames, with fire protection on request',
          'Foam and plywood panels, including Haro systems',
          'Light 19 and Light 27 on level wall surfaces',
          'Textile protective coverings',
        ],
        note:
          'System not listed? Get in touch — we can usually find a way to make it work.',
      },
      {
        id: 'dismantling',
        title: 'Strip-out & Disposal',
        body:
          'We remove old elements carefully and dispose of them properly. Specialist tooling lets us release protection walls and sports floors without damaging the building fabric underneath.',
        bullets: [
          'Impact protection walls and sports floors of all construction types',
          'Old grandstands and sports equipment',
          'Fitted units, gates and doors',
          'Proper disposal',
        ],
      },
      {
        id: 'surveying',
        title: 'Surveying & Bespoke Elements',
        body:
          'Not every hall follows standard dimensions. We survey on site and build the elements that fall outside the standard range, so everything sits flush at the end.',
        bullets: [
          'Window frames and reveals',
          'Ball roller boards',
          'Bespoke elements to your specification',
        ],
      },
      {
        id: 'handover',
        title: 'Handover & Documentation',
        body:
          'Handover normally takes place directly after installation, carried out by our qualified fitters. Separate handover appointments can be arranged on request.',
        note: 'We are happy to show you our recent handover reports in advance.',
      },
    ],
  },

  references: {
    title: 'References',
    subtitle: 'The sectors we have worked in for years.',
    lead:
      'A selection of our work. For references near you, or for a particular system, just ask.',
    sectors: [
      {
        id: 'sports-halls',
        title: 'Sports halls',
        body:
          'Impact protection and sports flooring for school, club and multi-purpose halls. Precisely aligned, cleanly jointed and built to last for decades.',
      },
      {
        id: 'hotels',
        title: 'Hotels',
        body:
          'Interior fit-out for hospitality, commercial and residential projects. Delivered by experienced tradespeople who understand that every day counts when a building stays open.',
      },
      {
        id: 'timber-houses',
        title: 'Timber buildings',
        body:
          'Timber construction for residential and non-residential buildings, plus energy-efficiency retrofits using natural, ecological materials.',
      },
    ],
    galleryNote:
      'We are happy to show you more project photographs on request, including a particular system or a hall near you.',
  },

  about: {
    title: 'About us',
    subtitle: 'One company, four principles.',
    lead: [
      'SportPlus Montagen is an installation company based in Rosenheim. We have the experience to install protection walls and sports floors of every kind — and the standards to get it right every time.',
      'We work for companies and private clients alike. What stays the same either way: a named point of contact, firm dates, and a site left the way we would want to find it ourselves.',
    ],
    pillars: [
      {
        id: 'quality',
        title: 'Quality',
        body:
          'Our projects are handed over free of defects. That is not a marketing line but a matter of record — we are happy to show you the recent handover reports on request.',
      },
      {
        id: 'reliability',
        title: 'Reliability',
        body:
          'A commitment is a commitment. You reach us on the same number throughout the project and always know where your job stands.',
      },
      {
        id: 'detail',
        title: 'Attention to detail',
        body:
          'Edges, joints, transitions: the details decide whether a hall still looks right after five years. You can see how we handle them in our references.',
      },
      {
        id: 'punctuality',
        title: 'On-time delivery',
        body:
          'We have completed every project to date on schedule and intend to keep it that way. If a delivery slips, we will work through the options with you so your date still holds.',
      },
    ],
    closing: {
      title: 'See for yourself',
      body:
        'Call us or drop us a line about what is coming up. You will get an honest assessment — including when we are not the right company for your project.',
      cta: 'Get in touch',
    },
  },

  contact: {
    title: 'Contact',
    subtitle: 'We would like to hear from you.',
    lead:
      'Tell us briefly about your project: the type of hall or building, approximate area, preferred system and target date. The more we know, the more precise our response can be.',
    preferCallTitle: 'A phone call is quickest',
    preferCallBody:
      'A short call settles most questions on the spot, especially around dates and feasibility. If you would rather write, or it is late in the evening, use the form instead.',
    formTitle: 'Or send us a message',
    form: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      phoneHint: 'Only if you would like a call back.',
      optional: 'optional',
      message: 'Your message',
      messagePlaceholder:
        'What is the project? Type of building, approximate area, preferred system, target date …',
      consent:
        'I have read the privacy policy and consent to my details being processed in order to handle my enquiry.',
      submit: 'Send enquiry',
      sending: 'Sending …',
      success:
        'Thank you for your message — we have received your enquiry and will get back to you.',
      error:
        'That did not go through. Please try again, or simply give us a call.',
      required: 'Required',
    },
    directTitle: 'Direct line',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Address',
    hours: 'Monday to Friday, 7:00 – 17:00',

    responseNote: 'If it is urgent, a phone call is quickest.',
  },

  footer: {
    about:
      'Impact protection walls and sports flooring for sports halls, interior fit-out for hospitality and commercial projects. Based in Rosenheim, working across the region.',
    quickLinksTitle: 'Navigation',
    contactTitle: 'Contact',
    legalTitle: 'Legal',
    imprint: 'Imprint',
    privacy: 'Privacy',
    rights: 'All rights reserved.',
  },

  legal: {
    imprintTitle: 'Imprint',
    privacyTitle: 'Privacy Policy',
  },
};
