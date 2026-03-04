import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header, Footer } from "@/components/layout";
import { siteMetadata } from "@/config/site";
import { Analytics } from "@vercel/analytics/react";
import AnimatedBackground from "@/components/ui/animated-background";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import {
  generatePersonSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rushibutani.com"),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.image,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.image],
    creator: "@rushibutani_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <AnimatedBackground />

        <Header />
        <main className="min-h-screen relative z-10">{children}</main>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
