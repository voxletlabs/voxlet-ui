import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme/theme-provider";

// Self-hosted Inter (variable, latin subset) — identical to the Google-hosted font,
// but no network fetch at build time and faster builds.
const inter = localFont({
  src: "./fonts/inter-latin-var.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "https://ui.voxletstudio.com"),
  title: {
    default: "Voxlet UI - The Best Animated React & Tailwind Components for Fast Web Development",
    template: "%s - Voxlet UI",
  },
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
      url: "https://voxletstudio.com/",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://ui.voxletstudio.com",
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
    canonical: "https://ui.voxletstudio.com",
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
      <body
        className={`${inter.className} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
