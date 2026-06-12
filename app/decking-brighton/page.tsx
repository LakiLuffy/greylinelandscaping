import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicePageMap } from "@/data/services";

const service = servicePageMap["decking-brighton"];

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.metaDescription,
  alternates: { canonical: "https://greylinelandscaping.com/decking-brighton/" },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: "https://greylinelandscaping.com/decking-brighton/", type: "website", locale: "en_AU", images: [{ url: service.image, alt: service.imageAlt }] },
};

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
