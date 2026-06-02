import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { NearbySuburbs } from "@/components/NearbySuburbs";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { allServices, getSuburbBySlug, suburbs } from "@/data/suburbs";
import { faqSchema, localBusinessSchema, pageUrl, suburbFaqs } from "@/lib/schema";

type PageProps = {
  params: Promise<{ suburb: string }>;
};

function routeParamToSlug(routeParam: string) {
  return routeParam.startsWith("landscaper-") ? routeParam.replace(/^landscaper-/, "") : routeParam;
}

export function generateStaticParams() {
  return suburbs.map((suburb) => ({ suburb: `landscaper-${suburb.slug}` }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { suburb: routeParam } = await params;
  const suburb = getSuburbBySlug(routeParamToSlug(routeParam));

  if (!suburb) {
    return {};
  }

  const description = `Professional landscaping services in ${suburb.name}, ${suburb.region}. Garden design, retaining walls, turf, paving & full backyard renovations. Free quotes. Call today.`;

  return {
    title: `Landscaper in ${suburb.name} | Greyline Landscaping ${suburb.region}`,
    description,
    alternates: {
      canonical: pageUrl(suburb),
    },
    openGraph: {
      title: `Landscaper in ${suburb.name} | Greyline Landscaping`,
      description,
      type: "website",
      locale: "en_AU",
      url: pageUrl(suburb),
    },
  };
}

export default async function SuburbPage({ params }: PageProps) {
  const { suburb: routeParam } = await params;
  const suburb = getSuburbBySlug(routeParamToSlug(routeParam));

  if (!suburb || routeParam !== `landscaper-${suburb.slug}`) {
    notFound();
  }

  const faqs = suburbFaqs(suburb);
  const jsonLd = [localBusinessSchema(suburb), faqSchema(faqs)];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection suburb={suburb} />
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#4A7C59]">{suburb.localLandmark}</p>
          <h2 className="mt-3 text-3xl font-black text-[#2D2D2D] sm:text-4xl">Trusted Landscaping in {suburb.name}</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#555]">
            {suburb.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              For {suburb.propertyTypes} in {suburb.name}, our team can plan and build a landscape that improves street appeal, outdoor function and long-term maintenance. Greyline Landscaping keeps {suburb.name} projects clear from quote to completion, with practical recommendations for the local Bayside setting.
            </p>
          </div>
        </div>
      </section>
      <ServicesGrid suburbName={suburb.name} services={[...allServices]} />
      <WhyChooseUs suburbName={suburb.name} />
      <NearbySuburbs suburbName={suburb.name} nearbySuburbs={suburb.nearbySuburbs} />
      <FAQSection suburbName={suburb.name} faqs={faqs} />
      <ContactForm suburbName={suburb.name} nearbySuburbs={suburb.nearbySuburbs} />
    </main>
  );
}
