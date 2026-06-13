import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { NearbySuburbs } from "@/components/NearbySuburbs";
import { SiteHeader } from "@/components/SiteHeader";
import { locationServices, type Suburb } from "@/data/suburbs";
import { phone, phoneHref } from "@/data/services";

const serviceNotes: Record<(typeof locationServices)[number], string> = {
  Landscaping: "Complete outdoor improvements for front yards, backyards, courtyards, pathways, lawns and residential landscapes.",
  "Garden design": "Practical garden design covering layout, planting, lawn areas, access, materials, drainage and maintenance expectations.",
  "Garden maintenance": "Garden maintenance, hedging, mulching, lawn mowing and clean-ups to keep outdoor areas tidy and usable.",
  "Turf installation": "Turf installation and turf laying for worn, patchy or unfinished lawn areas, with preparation and edging considered.",
  "Lawn care": "Lawn care support for greener, cleaner front and back lawns, including mowing, edging and turf advice.",
  Paving: "Paving for paths, side access, courtyards and outdoor entertaining areas that need cleaner movement and less mud.",
  "Retaining walls": "Retaining walls and garden edges for level changes, bed structure and outdoor areas that need stronger support.",
  Planting: "Planting for privacy, street appeal, coastal gardens, garden beds and lower-maintenance outdoor spaces.",
  "Garden clean-ups": "Garden clean-ups for overgrown beds, tired lawns, messy edges and outdoor areas that need a reset.",
  "Outdoor space upgrades": "Outdoor space upgrades for Bayside homes, including entertaining areas, courtyards, lawns, pathways and planting.",
};

const whyCards = [
  "Free no-obligation quotes",
  "Local Bayside service area",
  "Clear scope before work starts",
  "Clean, tidy project finishing",
  "Practical planting and material advice",
  "Residential landscaping focus",
];

export function LocationPageTemplate({ suburb, jsonLd }: { suburb: Suburb; jsonLd: unknown[] }) {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden bg-[#1f1f1f] text-white">
        <img className="absolute inset-0 h-full w-full object-cover" src="/images/hero-gardening-worker.png" alt="" />
        <div className="absolute inset-0 bg-black/50" />
        <SiteHeader variant="dark" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C6BF70]">{suburb.postcode} VIC | Bayside Melbourne</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Landscaping {suburb.name}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/88">{suburb.heroText}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Local support for landscaping, garden maintenance, lawn care, turf installation, paving, retaining walls, planting and garden clean-ups.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="rounded-[4px] bg-[#9D5324] px-6 py-4 text-center font-black uppercase text-white transition hover:bg-[#85461f]" href="#contact-form">
                Request a Quote
              </a>
              <a className="rounded-[4px] border border-white/70 px-6 py-4 text-center font-black uppercase text-white transition hover:bg-white/10" href={phoneHref}>
                Call {phone}
              </a>
            </div>
          </div>
          <div className="bg-white p-3 shadow-2xl">
            <img className="h-80 w-full object-cover" src="/images/After-10.jpg" alt={`Landscaping and lawn care project for homes near ${suburb.name}`} />
          </div>
        </div>
      </section>

      <section className="bg-[#EEF2EA] px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
          {["Free Quotes", "Fully Insured", "Local Bayside Service Area", "Clean Project Finishing"].map((signal) => (
            <span className="rounded-[4px] bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#3F5637]" key={signal}>
              {signal}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#4A7C59]">{suburb.localLandmark}</p>
          <h2 className="mt-3 text-3xl font-black text-[#2B2B2B] sm:text-4xl">Professional Landscaping in {suburb.name}</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#555]">
            {suburb.descriptions.professional.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              We work with {suburb.propertyTypes}, tailoring the scope to the site rather than forcing a standard package. Each quote considers access, drainage, lawn condition, planting, materials and how the finished garden should be maintained.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF2EA] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">Garden Maintenance and Lawn Care in {suburb.name}</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#555]">
            {suburb.descriptions.maintenance.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">Turf Installation, Paving and Retaining Walls</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#555]">
            {suburb.descriptions.construction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF2EA] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">Outdoor Spaces Designed for Bayside Homes</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#555]">
            {suburb.descriptions.outdoor.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black text-[#2B2B2B] sm:text-4xl">Landscaping Services in {suburb.name}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locationServices.map((service) => (
              <article className="border-l-4 border-[#B79B55] bg-[#EEF2EA] p-6" key={service}>
                <h3 className="text-xl font-black text-[#2B2B2B]">{service}</h3>
                <p className="mt-3 text-sm leading-6 text-[#606060]">{serviceNotes[service]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2B2B2B] px-5 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">Why Choose Greyline Landscaping in {suburb.name}?</h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-white/82">
              {suburb.descriptions.why.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyCards.map((card) => (
              <div className="border border-white/16 bg-white/6 p-5 text-base font-black text-white" key={card}>
                {card}
              </div>
            ))}
          </div>
        </div>
      </section>

      <NearbySuburbs suburbName={suburb.name} nearbySuburbs={suburb.nearbySuburbs} />

      <section className="bg-white px-5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#4A7C59]">Service areas</p>
            <h2 className="mt-2 text-2xl font-black text-[#2B2B2B]">Landscaping across Brighton and Bayside Melbourne</h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#555]">
              View all suburbs serviced by Greyline Landscaping, including Brighton, Hampton, Sandringham, Elwood, Bentleigh, Caulfield, Black Rock and Beaumaris.
            </p>
          </div>
          <Link className="shrink-0 rounded-[4px] bg-[#1F6B3A] px-5 py-3 text-center text-sm font-black uppercase text-white transition hover:bg-[#18542e]" href="/service-areas/">
            View service areas
          </Link>
        </div>
      </section>

      <FAQSection suburbName={suburb.name} faqs={suburb.faqs} />

      <section className="bg-[#3F5637] px-5 py-14 text-center text-white">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#C6BF70]">FREE QUOTE</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Request a quote for landscaping in {suburb.name}</h2>
        <p className="mx-auto mt-3 max-w-3xl text-lg text-white/84">
          Tell us about your garden maintenance, turf installation, paving, retaining wall, lawn care or outdoor space upgrade.
        </p>
        <a className="mt-6 inline-flex rounded-[4px] bg-[#9D5324] px-7 py-4 text-xl font-black text-white transition hover:bg-[#85461f]" href={phoneHref}>
          {phone}
        </a>
      </section>

      <ContactForm suburbName={suburb.name} nearbySuburbs={suburb.nearbySuburbs} />
    </main>
  );
}
