import type { SiteContent } from './types';

/** English content. Written as native English copy rather than a literal translation. */
export const en: SiteContent = {
  meta: {
    localeTag: 'en-US',
    tagline: 'Hotel fit-out and sports-hall installation, carried out with precision.',
    description:
      'SportPlus Montagen GmbH, based in Rosenheim, is an installation partner for hotel furnishings, interior fit-out components and impact-protection walls in sports halls. Working throughout Germany.',
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
      'Based in Rosenheim, we work throughout Germany. Send us your project and we will coordinate the practical details with you.',
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
        question: 'What do you install in hotels?',
        answer:
          'We install hotel furnishings and interior fit-out components, including furniture, kitchens, doors, bathroom furniture, shelving and other fitted elements.',
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
      eyebrow: 'Interior fit-out & installation | Nationwide',
      title: 'Installation for hotels and sports halls',
      subtitle:
        'We install hotel furnishings and interior fit-out components, as well as impact-protection walls for sports halls. Precisely delivered, well organised and available to clients throughout Germany.',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'View our services',
    },
    stats: [
      { value: 'Hotel fit-out', label: 'Furniture, kitchens, doors & fitted units' },
      { value: 'Impact protection', label: 'Installation for sports halls' },
      { value: 'Nationwide', label: 'Based in Rosenheim, working throughout Germany' },
    ],
    intro: {
      title: 'Installation built around the project',
      body: [
        'SportPlus Montagen is an installation company for interior fit-out. Our focus is installing hotel furnishings and impact-protection walls for sports halls.',
        'We mainly install materials supplied for the project. If needed, we can also include material supply in our quote — professional installation remains our core work.',
      ],
    },
    servicesTeaser: {
      title: 'What we take off your hands',
      subtitle:
        'From a single fitted component to a complete hotel fit-out: we organise the installation cleanly, methodically and with one named contact.',
      cta: 'All services',
    },
    sectorsTeaser: {
      title: 'Our main areas',
      subtitle: 'Hotel fit-out and impact-protection walls: two areas where precision matters.',
      cta: 'View references',
    },
    process: {
      title: 'How a project runs with us',
      subtitle: 'Five steps, so you always know where things stand.',
      steps: [
        {
          title: 'Enquiry',
          body:
            'You tell us briefly about the project — hotel fit-out or sports hall, scope, materials and target date. A phone call is enough.',
        },
        {
          title: 'Site survey',
          body:
            'Where needed, we coordinate dimensions, connections and specific installation situations with you on site.',
        },
        {
          title: 'Quote',
          body:
            'You receive a written, itemised quote. We can include material supply where required.',
        },
        {
          title: 'Installation',
          body:
            'We install the agreed scope cleanly, precisely and in line with the project requirements.',
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
        'Send us the essentials — hotel fit-out or sports hall, the elements to be installed and the target date. We will look at it and come back to you.',
      cta: 'Get in touch',
    },
  },

  services: {
    title: 'Services',
    subtitle: 'Hotel fit-out, impact-protection walls and complementary installation work.',
    lead:
      'Installation is our focus: hotel furnishings and interior components on one side, impact-protection walls for sports halls on the other. We agree any complementary work around your specific project.',
    items: [
      {
        id: 'installation',
        title: 'Hotel fit-out & interior installation',
        body:
          'We install hotel furnishings and interior fit-out components to your specification — accurately fitted, securely fixed and tailored to each room:',
        bullets: [
          'Hotel furniture and room furnishings',
          'Kitchens and kitchenettes',
          'Doors, bathroom furniture and shelving systems',
          'Fitted components and individual interior installations',
        ],
        note:
          'We normally install materials supplied for the project. If needed, we can also quote for supply and installation.',
      },
      {
        id: 'dismantling',
        title: 'Impact-protection walls for sports halls',
        body:
          'Impact-protection walls are our second main focus. We install common systems for school, club and multi-purpose halls accurately and professionally.',
        bullets: [
          'Impact-protection walls with timber or metal frames',
          'Foam, plywood and textile systems',
          'Additional sports-hall elements where required',
          'Installation to survey and specification',
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
