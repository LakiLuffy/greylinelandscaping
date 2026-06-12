import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicePageMap } from "@/data/services";

const service = servicePageMap["garden-design-brighton"];

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.metaDescription,
  alternates: { canonical: "https://greylinelandscaping.com/garden-design-brighton/" },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: "https://greylinelandscaping.com/garden-design-brighton/", type: "website", locale: "en_AU", images: [{ url: service.image, alt: service.imageAlt }] },
};

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
