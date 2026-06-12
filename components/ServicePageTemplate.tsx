import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { SiteHeader } from "@/components/SiteHeader";
import { phone, phoneHref, sellingPoints, serviceArea, serviceAreaSuburbs, servicePageMap, serviceUrl, trustSignals, type ServicePage } from "@/data/services";
import { faqSchema } from "@/lib/schema";

export function ServicePageTemplate({ service }: { service: ServicePage }) {
  const jsonLd = faqSchema(service.faqs);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative overflow-hidden bg-[#1f1f1f] text-white">
        <img className="absolute inset-0 h-full w-full object-cover" src={service.image} alt={service.imageAlt} />
        <div className="absolute inset-0 bg-black/52" />
        <SiteHeader variant="dark" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C6BF70]">Brighton & Bayside</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{service.h1}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/88">{service.heroText}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="rounded-[4px] bg-[#9D5324] px-6 py-4 text-center font-black uppercase text-white transition hover:bg-[#85461f]" href={phoneHref}>
                Call For A Free Quote
              </a>
              <a className="rounded-[4px] border border-white/70 px-6 py-4 text-center font-black uppercase text-white transition hover:bg-white/10" href="#contact-form">
                Request A Free Quote
              </a>
            </div>
          </div>
          <div className="bg-white p-3 shadow-2xl">
            <img className="h-80 w-full object-cover" src={service.image} alt={service.imageAlt} />
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
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#4A7C59]">{service.title}</p>
          <h2 className="mt-3 text-3xl font-black text-[#2B2B2B] sm:text-4xl">{service.title} for Brighton Homes</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#555]">
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF2EA] px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">{service.includedTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item) => (
              <div className="border-l-4 border-[#B79B55] bg-white p-5 text-base font-bold leading-6 text-[#2B2B2B]" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">Why Choose Greyline Landscaping Brighton?</h2>
            <p className="mt-5 text-lg leading-8 text-[#555]">
              Homeowners choose Greyline because the process is clear from first quote to clean finish, with local knowledge across Brighton and Bayside.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {sellingPoints.map((point) => (
              <div className="bg-[#EEF2EA] p-5 text-base font-black text-[#2B2B2B]" key={point}>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2B2B2B] px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black sm:text-4xl">A Clear Process From Quote To Clean Finish</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <article className="border border-white/16 bg-white/6 p-6" key={step.title}>
                <h3 className="text-2xl font-black uppercase text-[#C6BF70]">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/82">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">Related Services</h2>
              <p className="mt-3 text-[#555]">Plan the full yard with connected Greyline landscaping services.</p>
            </div>
            <Link className="font-black uppercase text-[#1F6B3A]" href="/services/">
              View all services
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.related.map((slug) => {
              const related = servicePageMap[slug];
              return (
                <Link className="bg-[#EEF2EA] p-5 transition hover:-translate-y-1" href={serviceUrl(slug)} key={slug}>
                  <h3 className="text-lg font-black text-[#2B2B2B]">{related.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#606060]">{related.heroText}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#5B6334] px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black sm:text-4xl">Local Service Area</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/88">{serviceArea}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {serviceAreaSuburbs.map((suburb) => (
              <span className="rounded-[4px] bg-white/12 px-3 py-2 text-sm font-bold" key={suburb}>
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection suburbName={service.title} faqs={service.faqs} title={`Frequently Asked Questions - ${service.h1}`} />

      <section className="bg-[#3F5637] px-5 py-14 text-center text-white">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#C6BF70]">FREE QUOTE</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">{service.finalCta}</h2>
        <a className="mt-6 inline-flex rounded-[4px] bg-[#9D5324] px-7 py-4 text-xl font-black text-white transition hover:bg-[#85461f]" href={phoneHref}>
          {phone}
        </a>
      </section>

      <ContactForm suburbName="Brighton & Bayside" nearbySuburbs={["Brighton East", "Hampton", "Beaumaris", "Sandringham"]} />
    </main>
  );
}
