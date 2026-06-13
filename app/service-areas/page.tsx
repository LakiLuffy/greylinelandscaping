import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ServiceAreaLinks } from "@/components/ServiceAreaLinks";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { SiteHeader } from "@/components/SiteHeader";
import { phone, phoneHref } from "@/data/services";
import { serviceAreaIntroServices, suburbs } from "@/data/suburbs";
import { domain, serviceAreasUrl } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Landscaping Service Areas in Brighton and Bayside Melbourne",
  description:
    "Greyline Landscaping services Brighton and Bayside Melbourne with landscaping, garden maintenance, turf installation, paving and outdoor upgrades.",
  alternates: {
    canonical: serviceAreasUrl(),
  },
  openGraph: {
    title: "Landscaping Service Areas in Brighton and Bayside Melbourne",
    description:
      "Greyline Landscaping provides landscaping, garden maintenance, lawn care, turf installation, paving and retaining walls across Brighton and Bayside Melbourne.",
    url: serviceAreasUrl(),
    type: "website",
    locale: "en_AU",
  },
};

const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Landscaping Service Areas in Brighton and Bayside Melbourne",
  url: serviceAreasUrl(),
  about: {
    "@type": "Service",
    name: "Landscaping and garden maintenance across Brighton and Bayside Melbourne",
    provider: {
      "@type": "LocalBusiness",
      name: "Greyline Landscaping Brighton",
      url: domain,
      telephone: "0468 107 217",
    },
    areaServed: suburbs.map((suburb) => ({
      "@type": "City",
      name: `${suburb.name}, VIC`,
    })),
  },
};

export default function ServiceAreasPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }} />
      <section className="relative overflow-hidden bg-[#1f1f1f] text-white">
        <img className="absolute inset-0 h-full w-full object-cover" src="/images/hero-gardening-worker.png" alt="" />
        <div className="absolute inset-0 bg-black/50" />
        <SiteHeader variant="dark" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C6BF70]">Brighton & Bayside Melbourne</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Landscaping Service Areas in Brighton and Bayside Melbourne
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/88">
            Greyline Landscaping provides landscaping, garden maintenance, lawn care, turf installation, paving, retaining walls and outdoor upgrades across Brighton and surrounding Bayside Melbourne suburbs.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-[4px] bg-[#9D5324] px-6 py-4 text-center font-black uppercase text-white transition hover:bg-[#85461f]" href="#contact-form">
              Contact Greyline
            </a>
            <a className="rounded-[4px] border border-white/70 px-6 py-4 text-center font-black uppercase text-white transition hover:bg-white/10" href={phoneHref}>
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      <ServiceAreaLinks suburbs={suburbs} />

      <ServiceAreaMap />

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">Landscaping Services Available Across Our Service Area</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#555]">
            Greyline Landscaping helps homeowners across Brighton and nearby Bayside suburbs with practical residential landscaping. Common projects include landscaping, garden maintenance, lawn care, turf installation, turf laying, paving, retaining walls, planting, garden clean-ups, mulching, hedging, irrigation considerations and outdoor entertaining area upgrades.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreaIntroServices.map((service) => (
              <div className="border-l-4 border-[#B79B55] bg-[#EEF2EA] p-5 text-base font-bold capitalize leading-6 text-[#2B2B2B]" key={service}>
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3F5637] px-5 py-14 text-center text-white">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#C6BF70]">CONTACT</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Talk to Greyline about landscaping in Brighton and surrounding suburbs</h2>
        <p className="mx-auto mt-3 max-w-3xl text-lg text-white/84">
          Tell us about your garden, lawn, paving, retaining wall or outdoor space upgrade and we will help you take the next step.
        </p>
        <a className="mt-6 inline-flex rounded-[4px] bg-[#9D5324] px-7 py-4 text-xl font-black text-white transition hover:bg-[#85461f]" href={phoneHref}>
          {phone}
        </a>
      </section>

      <ContactForm suburbName="Brighton & Bayside Melbourne" nearbySuburbs={["Brighton", "Brighton East", "Hampton", "Sandringham"]} />
    </main>
  );
}
