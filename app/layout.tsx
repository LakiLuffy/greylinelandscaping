import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://greylinelandscaping.com"),
  title: {
    default: "Brighton Landscaping | Greyline Landscaping Brighton",
    template: "%s | Greyline Landscaping Brighton",
  },
  description: "Brighton landscaping by Greyline Landscaping Brighton. Garden design, turf installation, retaining walls, paving, decking, drainage and backyard makeovers across Brighton and Bayside.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: "Greyline Landscaping Brighton",
    images: [
      {
        url: "/images/hero-gardening-worker.png",
        width: 1672,
        height: 941,
        alt: "Greyline Landscaping Brighton gardener planting in a residential backyard",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero-gardening-worker.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
