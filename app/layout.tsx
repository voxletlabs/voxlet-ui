import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme/theme-provider";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import faqData from "@/data/site-faq";

// Self-hosted Inter (variable, latin subset) — identical to the Google-hosted font,
// but no network fetch at build time and faster builds.
const inter = localFont({
  src: "./fonts/inter-latin-var.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voxlet-ui.vercel.app/"),
  title: "Voxlet UI - The Best Animated React & Tailwind Components for Fast Web Development",
  description:
    "Voxlet UI is a modern component library offering high-quality, customizable UI components, blocks, and templates for developers and designers. Build sleek, responsive, and scalable websites effortlessly.",
  icons: {
    icon: "/favicon/favicon.ico",
  },
  keywords: [
    "Voxlet UI",
    "UI Components",
    "React UI Kit",
    "Tailwind Components",
    "Next.js UI Library",
    "Frontend Development",
    "Website Blocks",
    "UI Templates",
    "Reusable Components",
    "Modern Web Design",
    "Open Source UI",
    "Design System",
    "Web App UI",
    "Component Library",
    "Best React Components",
    "Voxlet UI components",
    "React UI library",
    "Next.js Tailwind UI",
    "Best UI components",
    "Frontend UI kit",
    "Modern web design",
    "React Tailwind components",
    "Web development templates",
    "Open source UI library",
    "Vercel Next.js components",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: "Voxlet Team",
      url: "https://voxlet.vercel.app/",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://voxlet-ui.vercel.app/",
    title: "Voxlet UI - The Best Animated React & Tailwind Components for Fast Web Development",
    description:
      "Voxlet UI provides a collection of high-quality UI components, blocks, and templates to accelerate your web development workflow.",
    siteName: "Voxlet UI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voxlet UI - The Best Animated React & Tailwind Components for Fast Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@voxletlabs",
    creator: "@MuhammadKaif999",
    title: "Voxlet UI - The Best Animated React & Tailwind Components for Fast Web Development",
    description: "Voxlet UI provides a collection of high-quality UI components, blocks, and templates to accelerate your web development workflow.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://voxlet-ui.vercel.app/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="u35ajoIK8hJpbI_GtR4wWT6dvyO1P2_srNIuFKAuLTQ" />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.className} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
