import type { Suburb } from "@/data/suburbs";

const domain = "https://greylinelandscaping.com";

export type FAQ = {
  question: string;
  answer: string;
};

export function pageUrl(suburb: Suburb) {
  return `${domain}/landscaper-${suburb.slug}`;
}

export function localBusinessSchema(suburb: Suburb) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Greyline Landscaping Brighton",
    description: `Professional landscaping services in ${suburb.name} and the Bayside area`,
    url: pageUrl(suburb),
    telephone: "0468 247 861",
    areaServed: {
      "@type": "City",
      name: `${suburb.name}, VIC`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "197 Bay St",
      addressLocality: "Brighton",
      addressRegion: "VIC",
      postalCode: "3186",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-37.9075",
      longitude: "144.9868",
    },
    openingHours: "Mo-Fr 07:00-17:00, Sa 08:00-14:00",
    priceRange: "$$",
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

export function suburbFaqs(suburb: Suburb): FAQ[] {
  return [
    {
      question: `How much does landscaping cost in ${suburb.name}?`,
      answer: `Landscaping costs in ${suburb.name} depend on the size of the yard, access, materials, drainage and the amount of construction required. Greyline Landscaping provides free quotes so you can understand the scope before work begins.`,
    },
    {
      question: `Do you offer free quotes in ${suburb.name}?`,
      answer: `Yes, we offer free no-obligation landscaping quotes in ${suburb.name}. Call Greyline Landscaping on 0468 247 861 or send an enquiry and we will discuss your property, goals and timing.`,
    },
    {
      question: `What landscaping services do you offer in ${suburb.name}?`,
      answer: `In ${suburb.name}, we offer garden design, planting, turf installation, retaining walls, paving, decking, garden beds, mulching, hedge planting, backyard renovations, maintenance and drainage solutions. Your quote is matched to the condition and layout of your ${suburb.name} property.`,
    },
    {
      question: `How long does a typical landscaping project in ${suburb.name} take?`,
      answer: `Smaller ${suburb.name} landscaping jobs can often be completed in a few days, while full backyard renovations may take one to three weeks depending on weather, materials and access. We outline timing clearly before starting the project.`,
    },
    {
      question: `Do you build retaining walls in ${suburb.name}?`,
      answer: `Yes, we build retaining walls in ${suburb.name}, including timber, concrete sleeper and stone options where suitable. Retaining wall recommendations depend on site levels, drainage needs and the finish you want for your garden.`,
    },
  ];
}
