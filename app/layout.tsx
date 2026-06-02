import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://greylinelandscaping.com"),
  title: "Greyline Landscaping | Brighton & Bayside Landscapers",
  description: "Professional landscaping services across Brighton, Bayside and surrounding suburbs. Free quotes for garden design, turf, paving, retaining walls and backyard renovations.",
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
