import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/NewFooter";
import { siteMetadata } from "@/lib/data";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a202e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rushibutani.com"),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rushi Butani",
    url: "https://rushibutani.com",
    image: "https://rushibutani.com/images/og-image.jpg",
    jobTitle: "Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Bankai Informatics Pvt. Ltd.",
    },
    sameAs: [
      "https://github.com/rushibutani",
      "https://in.linkedin.com/in/rushibutani",
      "https://twitter.com/rushibutani_",
    ],
    knowsAbout: [
      "React",
      "JavaScript",
      "Frontend Development",
      "Web Development",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
