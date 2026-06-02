import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://greylinelandscaping.com"),
  title: {
    default: "Greyline Landscaping Melbourne | Mornington Peninsula & Bayside Landscapers",
    template: "%s | Greyline Landscaping Melbourne",
  },
  description: "Professional landscaping services across Mornington Peninsula, Bayside and surrounding suburbs. Free quotes for garden design, turf, paving, retaining walls and backyard renovations.",
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
    siteName: "Greyline Landscaping Melbourne",
    images: [
      {
        url: "/images/hero-gardening-worker.png",
        width: 1672,
        height: 941,
        alt: "Greyline Landscaping Melbourne gardener planting in a residential backyard",
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
