export interface NavItem {
  name: string;
  href: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  author: string;
  keywords: string[];
  image: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
  twitter: string;
  facebook: string;
}

export interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  availability: string;
}

export interface Skills {
  core: string[];
  tools: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  liveUrl?: string;
  image: string;
}
