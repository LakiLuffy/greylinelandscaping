import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPageTemplate } from "@/components/LocationPageTemplate";
import { getSuburbBySlug, suburbs } from "@/data/suburbs";
import { breadcrumbSchema, faqSchema, pageUrl, serviceSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ suburb: string }>;
};

function routeParamToSlug(routeParam: string) {
  return routeParam.startsWith("landscaping-") ? routeParam.replace(/^landscaping-/, "") : routeParam;
}

export function generateStaticParams() {
  return suburbs.map((suburb) => ({ suburb: `landscaping-${suburb.slug}` }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { suburb: routeParam } = await params;
  const suburb = getSuburbBySlug(routeParamToSlug(routeParam));

  if (!suburb || routeParam !== `landscaping-${suburb.slug}`) {
    return {};
  }

  return {
    title: suburb.metaTitle,
    description: suburb.metaDescription,
    alternates: {
      canonical: pageUrl(suburb),
    },
    openGraph: {
      title: suburb.metaTitle,
      description: suburb.metaDescription,
      type: "website",
      locale: "en_AU",
      url: pageUrl(suburb),
    },
  };
}

export default async function SuburbPage({ params }: PageProps) {
  const { suburb: routeParam } = await params;
  const suburb = getSuburbBySlug(routeParamToSlug(routeParam));

  if (!suburb || routeParam !== `landscaping-${suburb.slug}`) {
    notFound();
  }

  const jsonLd = [serviceSchema(suburb), breadcrumbSchema(suburb), faqSchema(suburb.faqs)];

  return <LocationPageTemplate suburb={suburb} jsonLd={jsonLd} />;
}
