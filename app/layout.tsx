import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme/theme-provider";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voxlet UI - Build Faster with Ready-to-Use Components, Blocks & Templates",
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
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  authors: [
    {
      name: "Voxlet Team",
      url: "https://voxlet.vercel.app/",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://voxlet-ui.vercel.app/",
    title: "Voxlet UI - Build Faster with Ready-to-Use Components, Blocks & Templates",
    description:
      "Voxlet UI provides a collection of high-quality UI components, blocks, and templates to accelerate your web development workflow.",
    siteName: "Voxlet UI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voxlet UI - Build Faster with Ready-to-Use Components, Blocks & Templates",
      },
    ],
  },
  alternates: {
    canonical: "https://voxlet-ui.vercel.app/",
  },
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
