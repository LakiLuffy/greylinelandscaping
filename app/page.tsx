import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { SiteHeader } from "@/components/SiteHeader";
import { phone, phoneHref, servicePages, serviceUrl, trustSignals } from "@/data/services";
import { suburbs } from "@/data/suburbs";
import type { FAQ } from "@/lib/schema";

const portfolioItems = [
  {
    src: "/images/After-10.jpg",
    alt: "Fresh turf and garden edging by Greyline Landscaping Brighton",
    caption: "Fresh turf and garden edging",
  },
  {
    src: "/images/WhatsApp-Image-2025-06-27-at-16.49.43_685fd646.jpg",
    alt: "Finished timber decking and garden upgrade by Greyline Landscaping Brighton",
    caption: "Finished timber decking",
  },
  {
    src: "/images/multi-tier-concrete-sleeper-terracing.png",
    alt: "Tiered concrete sleeper retaining wall landscaping",
    caption: "Tiered retaining wall landscaping",
  },
  {
    src: "/images/Landscaping-Doncaster-qzywoxb5ytdktmpgz1qfnj6s7wlbpo1m4dk0m514x4.jpg",
    alt: "Paving and garden makeover with new planting",
    caption: "Paving and garden makeover",
  },
  {
    src: "/images/eHd1XncRnvOwLjCmvPisz1MpaglnYjT3z4qKoCGc.jpg",
    alt: "Raised garden beds and backyard planting",
    caption: "Raised garden beds and backyard planting",
  },
  {
    src: "/images/AdobeStock_491701637.webp",
    alt: "Lawn preparation and turf support for a residential yard",
    caption: "Lawn preparation and turf support",
  },
];

const processPanels = [
  {
    title: "CONSULT",
    text: "Tell us what you want fixed - patchy lawn, tired garden beds, drainage issues, retaining walls, paving, decking or a full outdoor makeover.",
    button: "Call Now",
    href: phoneHref,
    image: "/images/Landscaping-Doncaster-qzywoxb5ytdktmpgz1qfnj6s7wlbpo1m4dk0m514x4.jpg",
  },
  {
    title: "DESIGN",
    text: "We look at your yard, access, materials, drainage, retaining needs, turf area and project scope so the plan makes sense before work begins.",
    button: "Plan Your Yard",
    href: "#contact-form",
    image: "/images/eHd1XncRnvOwLjCmvPisz1MpaglnYjT3z4qKoCGc.jpg",
  },
  {
    title: "BUILD",
    text: "We complete the work with updates along the way and a clean finish when we leave.",
    button: "Get a Quote",
    href: "#contact-form",
    image: "/images/multi-tier-concrete-sleeper-terracing.png",
  },
];

const proofCards = ["Fully Insured", "Free Quotes", "Local Team", "Clear Quotes", "Updates While We Work", "Clean Finish"];

const faqs: FAQ[] = [
  {
    question: "Do you offer free quotes?",
    answer: `Yes. Call Greyline Landscaping Brighton on ${phone} or send an enquiry and we will discuss your yard, access, timing and project scope.`,
  },
  {
    question: "Do you show fixed prices online?",
    answer: "No. Every yard is different. Landscaping costs depend on access, materials, drainage, retaining needs, turf area, preparation work and project scope, so we provide a free quote based on your property.",
  },
  {
    question: "What areas do you service?",
    answer: "Greyline Landscaping Brighton services Bayside, Brighton, Brighton East, Hampton, Beaumaris, Sandringham and surrounding suburbs.",
  },
  {
    question: "What landscaping services do you offer?",
    answer: "We help with garden makeovers, garden design, garden design and construction, turf installation, retaining walls, paving, decking, drainage solutions, planting, mulching, edging and clean project finishing.",
  },
  {
    question: "Can you help with a tired or patchy backyard?",
    answer: "Yes. Patchy lawn, muddy areas, tired beds and underused spaces are common reasons homeowners call us. We can help plan the right mix of preparation, turf, planting, drainage and construction.",
  },
];

export const metadata: Metadata = {
  title: "Brighton Landscaping | Greyline Landscaping Brighton",
  description:
    "Brighton landscaping by Greyline Landscaping Brighton. Garden design, turf installation, retaining walls, paving, decking, drainage and backyard makeovers across Brighton and Bayside.",
  alternates: {
    canonical: "https://greylinelandscaping.com",
  },
  openGraph: {
    title: "Brighton Landscaping | Greyline Landscaping Brighton",
    description:
      "Brighton landscaping by Greyline Landscaping Brighton. Garden design, turf installation, retaining walls, paving, decking, drainage and backyard makeovers across Brighton and Bayside.",
    url: "https://greylinelandscaping.com",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/images/hero-gardening-worker.png",
        width: 1672,
        height: 941,
        alt: "Greyline Landscaping Brighton gardener planting in a residential backyard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brighton Landscaping | Greyline Landscaping Brighton",
    description:
      "Brighton landscaping by Greyline Landscaping Brighton. Garden design, turf installation, retaining walls, paving, decking, drainage and backyard makeovers across Brighton and Bayside.",
    images: ["/images/hero-gardening-worker.png"],
  },
};

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#1f1f1f] text-white" id="home">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/hero-gardening-worker.png"
          alt="Professional landscaper planting shrubs in a residential backyard"
        />
        <div className="absolute inset-0 bg-black/40" />
        <SiteHeader variant="dark" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-5 pb-12 pt-8 text-center md:min-h-[calc(100vh-92px)]">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C6BF70]">Brighton & Bayside</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[0.98] sm:text-5xl lg:text-6xl">
            YOUR YARD CALLED.
            <span className="block">IT WANTS ITS WEEKENDS BACK.</span>
          </h1>
          <p className="mt-4 text-lg font-bold text-white sm:text-xl">Brighton & Bayside Landscaping That Actually Gets Done</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/88">
            Patchy lawn, tired garden beds, drainage issues or an outdoor space you never use? Greyline turns it into a cleaner, greener yard - with clear quotes, updates while we work and a clean finish when we leave.
          </p>
          <div className="mt-6 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <a className="rounded-[4px] bg-[#9D5324] px-6 py-4 text-center font-black uppercase text-white transition hover:bg-[#85461f]" href={phoneHref}>
              Call {phone}
            </a>
          </div>
          <div className="mt-7 w-full max-w-3xl">
            <ContactForm suburbName="Brighton & Bayside" nearbySuburbs={["Brighton East", "Hampton", "Beaumaris", "Sandringham"]} variant="hero" />
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-bold uppercase tracking-[0.08em] text-white/90">
            {trustSignals.map((signal) => (
              <span className="border border-white/35 px-3 py-2" key={signal}>
                {signal}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#5B6334] px-5 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.42fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#C6BF70]">Greyline Landscaping Brighton</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">We Turn Tired Yards Into Clean, Usable Outdoor Spaces</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/88">
              Greyline Landscaping Brighton helps homeowners across Brighton and Bayside transform patchy lawns, tired garden beds, drainage problems and unfinished outdoor areas into cleaner, greener spaces that are easier to enjoy.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/88">
              From garden makeovers and turf installation to retaining walls, paving, decking, drainage and complete garden design and construction, we keep the process clear from quote to clean finish.
            </p>
          </div>
          <a className="rounded-[4px] bg-[#9D5324] px-6 py-4 text-center font-black uppercase text-white transition hover:bg-[#85461f]" href={phoneHref}>
            Call For A Free Quote
          </a>
        </div>
      </section>

      <section className="bg-white px-5 py-16" id="portfolio">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">OUR PORTFOLIO</h2>
            <p className="mt-3 text-[#5f5f5f]">Real landscaping upgrades for cleaner, greener, more usable outdoor spaces.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <figure className="group overflow-hidden bg-[#EEF2EA]" key={item.src}>
                <img className="h-72 w-full object-cover transition duration-300 group-hover:scale-105" src={item.src} alt={item.alt} loading="lazy" />
                <figcaption className="p-4 text-sm font-bold uppercase tracking-[0.08em] text-[#2B2B2B]">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF2EA] px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-lg font-bold text-[#2B2B2B]">Greyline Landscaping Brighton is a local landscaping team for Brighton and Bayside homeowners.</p>
          <div className="flex flex-wrap gap-3">
            {trustSignals.map((signal) => (
              <span className="rounded-[4px] bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#3F5637]" key={signal}>
                {signal}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16" id="process">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black text-[#2B2B2B] sm:text-4xl">A Clear Process From Quote To Clean Finish</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {processPanels.map((panel) => (
              <article className="group relative min-h-[390px] overflow-hidden text-white" key={panel.title}>
                <img className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" src={panel.image} alt="" loading="lazy" />
                <div className="absolute inset-0 bg-black/48" />
                <div className="relative flex h-full min-h-[390px] flex-col justify-end p-6">
                  <h3 className="text-3xl font-black">{panel.title}</h3>
                  <p className="mt-4 leading-7 text-white/88">{panel.text}</p>
                  <a className="mt-6 inline-flex w-fit rounded-[4px] bg-[#9D5324] px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-[#85461f]" href={panel.href}>
                    {panel.button}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF2EA] px-5 py-16" id="services">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">Landscaping Services Across Brighton & Bayside</h2>
            <p className="mt-4 text-lg leading-8 text-[#555]">
              From small upgrades to full outdoor transformations, Greyline Landscaping Brighton helps homeowners create cleaner, more functional yards with clear quoting and a professional finish.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {servicePages.map((service) => (
              <article className="bg-white p-6 transition hover:-translate-y-1" key={service.title}>
                <h3 className="text-xl font-black text-[#2B2B2B]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#606060]">{service.heroText}</p>
                <a className="mt-5 inline-flex text-sm font-black uppercase text-[#1F6B3A]" href={serviceUrl(service.slug)}>
                  View service
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16" id="reviews">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">What Local Homeowners Want From A Landscaper</h2>
              <p className="mt-5 text-lg leading-8 text-[#555]">
                Homeowners choose Greyline because the process is simple: clear quotes before work starts, updates while the job is underway and a clean finish when the team leaves.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {proofCards.map((card) => (
                <div className="border-l-4 border-[#B79B55] bg-[#EEF2EA] p-5 text-lg font-black text-[#2B2B2B]" key={card}>
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2B2B2B] px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black sm:text-4xl">Follow Our Work</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <img className="h-64 w-full object-cover" src="/images/greyline-instagram-work.png" alt="Recent Greyline Landscaping Brighton work collage" loading="lazy" />
            <img className="h-64 w-full object-cover" src="/images/After-10.jpg" alt="Completed turf and garden edging project" loading="lazy" />
            <img className="h-64 w-full object-cover" src="/images/WhatsApp-Image-2025-06-27-at-16.49.43_685fd646.jpg" alt="Completed outdoor decking work by Greyline" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-[#5B6334] px-5 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
          {trustSignals.map((signal) => (
            <span className="border border-white/30 px-4 py-3 text-sm font-black uppercase tracking-[0.08em]" key={signal}>
              {signal}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#EEF2EA] px-5 py-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#4A7C59]">Landscaping ideas for Brighton homes</p>
            <h2 className="mt-2 text-2xl font-black text-[#2B2B2B]">Planning a new outdoor space?</h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#555]">Read our guide to the best landscaping ideas for Brighton and Bayside homes.</p>
          </div>
          <a className="rounded-[4px] bg-[#1F6B3A] px-5 py-3 text-center text-sm font-black uppercase text-white transition hover:bg-[#18542e]" href="/blog/best-landscaping-ideas-brighton/">
            Read the guide
          </a>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-[#2B2B2B] sm:text-4xl">Landscaping Across Brighton & Bayside</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#555]">
            Greyline Landscaping Brighton works with homeowners across Brighton, Bayside and surrounding suburbs, helping transform tired lawns, unfinished gardens and underused outdoor areas into cleaner, more functional spaces.
          </p>
          <a className="mt-6 inline-flex rounded-[4px] bg-[#1F6B3A] px-6 py-4 font-black uppercase text-white transition hover:bg-[#18542e]" href="/service-areas/">
            View landscaping service areas
          </a>
          <div className="mt-8 flex flex-wrap gap-2">
            {suburbs.map((suburb) => (
              <a className="rounded-[4px] bg-[#EEF2EA] px-3 py-2 text-sm font-bold text-[#3F5637]" href={`/landscaping-${suburb.slug}/`} key={suburb.slug}>
                Landscaping {suburb.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <FAQSection suburbName="Brighton & Bayside" faqs={faqs} />

      <section className="bg-[#3F5637] px-5 py-14 text-center text-white">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#C6BF70]">FREE QUOTE</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Get your yard sorted.</h2>
        <p className="mt-3 text-lg text-white/84">Brighton & Bayside landscaping that actually gets done.</p>
        <a className="mt-6 inline-flex rounded-[4px] bg-[#9D5324] px-7 py-4 text-xl font-black text-white transition hover:bg-[#85461f]" href={phoneHref}>
          {phone}
        </a>
      </section>
    </main>
  );
}
