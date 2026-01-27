import { personalInfo, siteMetadata } from "@/config/site";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    url: siteMetadata.siteUrl,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location,
    },
    jobTitle: "Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Bankai Informatics Pvt. Ltd.",
    },
    sameAs: [
      "https://in.linkedin.com/in/rushibutani",
      "https://github.com/rushibutani",
      "https://twitter.com/rushibutani_",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMetadata.title,
    url: siteMetadata.siteUrl,
    description: siteMetadata.description,
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
  };
}

export function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteMetadata.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${siteMetadata.siteUrl}#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: `${siteMetadata.siteUrl}#projects`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: `${siteMetadata.siteUrl}#contact`,
      },
    ],
  };
}
