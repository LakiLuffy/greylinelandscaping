import type { Suburb } from "@/data/suburbs";

export const domain = "https://greylinelandscaping.com";

export type FAQ = {
  question: string;
  answer: string;
};

export function pageUrl(suburb: Suburb) {
  return `${domain}/landscaping-${suburb.slug}/`;
}

export function serviceAreasUrl() {
  return `${domain}/service-areas/`;
}

export function serviceSchema(suburb: Suburb) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Landscaping",
    name: `Landscaping ${suburb.name}`,
    description: suburb.metaDescription,
    url: pageUrl(suburb),
    provider: {
      "@type": "LocalBusiness",
      name: "Greyline Landscaping Brighton",
      url: domain,
      telephone: "0468 107 217",
    },
    areaServed: {
      "@type": "City",
      name: `${suburb.name}, VIC`,
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Landscaping services in ${suburb.name}`,
      itemListElement: [
        "Landscaping",
        "Landscape design",
        "Garden design",
        "Garden maintenance",
        "Lawn care",
        "Turf installation",
        "Turf laying",
        "Paving",
        "Retaining walls",
        "Planting",
        "Garden clean-ups",
        "Outdoor space upgrades",
      ].map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service} ${suburb.name}`,
        },
      })),
    },
  };
}

export function breadcrumbSchema(suburb: Suburb) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${domain}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: serviceAreasUrl(),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Landscaping ${suburb.name}`,
        item: pageUrl(suburb),
      },
    ],
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
