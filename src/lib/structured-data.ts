import { personalInfo, siteMetadata, projects } from "@/config/site";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    url: siteMetadata.siteUrl,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    image: `${siteMetadata.siteUrl}/images/rushi-butani-profile.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    jobTitle: "Frontend Developer",
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Frontend Development",
      "UI Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Bankai Informatics Pvt. Ltd.",
    },
    sameAs: [
      "https://in.linkedin.com/in/rushibutani",
      "https://github.com/rushibutani",
      "https://twitter.com/rushibutani_",
      "https://www.instagram.com/rushibutani/",
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
        item: `${siteMetadata.siteUrl}/#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experience",
        item: `${siteMetadata.siteUrl}/#experience`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: `${siteMetadata.siteUrl}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: `${siteMetadata.siteUrl}/#contact`,
      },
    ],
  };
}

// Renders as a rich ItemList in Google Search for project portfolio
export function generateProjectsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Projects by Rushi Butani",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.liveUrl ?? project.repo,
        creator: {
          "@type": "Person",
          name: personalInfo.name,
        },
        keywords: project.stack.join(", "),
      },
    })),
  };
}
