import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import faqData from "@/data/site-faq";

/**
 * Site chrome layout: wraps every marketing/docs page with the Navbar and Footer.
 * Preview pages live in the sibling `app/(preview)` route group without this chrome.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Analytics />
      <Footer />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        strategy="afterInteractive"
      />
    </>
  );
}
