import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SiteHeader } from "@/components/SiteHeader";
import { phone, phoneHref, servicePages, serviceUrl, supportingServices, trustSignals } from "@/data/services";

export const metadata: Metadata = {
  title: { absolute: "Landscaping Services Brighton | Greyline Landscaping" },
  description: "View Greyline Landscaping Brighton services across Brighton and Bayside, including garden makeovers, design, turf, retaining walls, paving, decking and drainage.",
  alternates: { canonical: "https://greylinelandscaping.com/services/" },
  openGraph: {
    title: "Landscaping Services Brighton | Greyline Landscaping",
    description: "Garden makeovers, garden design, turf installation, retaining walls, paving, decking and drainage solutions across Brighton and Bayside.",
    url: "https://greylinelandscaping.com/services/",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/images/hero-gardening-worker.png", alt: "Greyline Landscaping Brighton gardener planting in a residential backyard" }],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#1f1f1f] text-white">
        <img className="absolute inset-0 h-full w-full object-cover" src="/images/hero-gardening-worker.png" alt="Professional landscaper planting shrubs in a Brighton residential backyard" />
        <div className="absolute inset-0 bg-black/52" />
        <SiteHeader variant="dark" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 py-20 text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C6BF70]">Brighton & Bayside</p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Landscaping Services Brighton</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/88">
            Greyline Landscaping Brighton helps homeowners create cleaner, more usable outdoor spaces with garden makeovers, design, turf, retaining walls, paving, decking and drainage solutions.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="rounded-[4px] bg-[#9D5324] px-6 py-4 text-center font-black uppercase text-white transition hover:bg-[#85461f]" href={phoneHref}>
              Call For A Free Quote
            </a>
            <a className="rounded-[4px] border border-white/70 px-6 py-4 text-center font-black uppercase text-white transition hover:bg-white/10" href="#contact-form">
              Request A Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF2EA] px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
          {trustSignals.map((signal) => (
            <span className="rounded-[4px] bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#3F5637]" key={signal}>
              {signal}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">Main Landscaping Services</h2>
            <p className="mt-4 text-lg leading-8 text-[#555]">
              These are the main Greyline Landscaping Brighton services with dedicated pages for homeowners comparing options across Brighton and Bayside.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {servicePages.map((service) => (
              <Link className="bg-[#EEF2EA] p-6 transition hover:-translate-y-1" href={serviceUrl(service.slug)} key={service.slug}>
                <h3 className="text-xl font-black text-[#2B2B2B]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#606060]">{service.heroText}</p>
                <span className="mt-5 inline-flex text-sm font-black uppercase text-[#1F6B3A]">View service</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF2EA] px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">Supporting Services</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#555]">
            These services are included naturally inside relevant garden makeover, garden design and construction projects rather than thin standalone pages.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportingServices.map((service) => (
              <Link className="bg-white p-6 transition hover:-translate-y-1" href={service.href} key={service.title}>
                <h3 className="text-xl font-black text-[#2B2B2B]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#606060]">{service.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3F5637] px-5 py-14 text-center text-white">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#C6BF70]">FREE QUOTE</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Need landscaping in Brighton or Bayside?</h2>
        <p className="mt-3 text-lg text-white/84">Call {phone} or send your details for a free local quote.</p>
        <a className="mt-6 inline-flex rounded-[4px] bg-[#9D5324] px-7 py-4 text-xl font-black text-white transition hover:bg-[#85461f]" href={phoneHref}>
          {phone}
        </a>
      </section>

      <ContactForm suburbName="Brighton & Bayside" nearbySuburbs={["Brighton East", "Hampton", "Beaumaris", "Sandringham"]} />
    </main>
  );
}
