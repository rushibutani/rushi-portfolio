/**
 * =============================================================================
 * TYPE DEFINITIONS
 * All TypeScript interfaces and types for the portfolio application
 * =============================================================================
 */

// =============================================================================
// UI COMPONENT TYPES
// =============================================================================

/**
 * Base props for all components
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Props for icon components
 */
export interface IconProps {
  size?: number;
  className?: string;
}

// =============================================================================
// SITE CONFIGURATION TYPES
// =============================================================================

/**
 * Navigation menu item
 */
export interface NavItem {
  name: string;
  href: string;
}

/**
 * SEO and site metadata
 */
export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  author: string;
  keywords: string[];
  image: string;
}

/**
 * Social media platform links
 */
export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
  twitter: string;
  facebook: string;
}

// =============================================================================
// PORTFOLIO CONTENT TYPES
// =============================================================================

/**
 * Personal contact and bio information
 */
export interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  availability: string;
}

/**
 * Technical skills and competencies
 */
export interface Skills {
  core: string[];
  tools: string[];
}

/**
 * Work experience entry
 */
export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
}

/**
 * Project portfolio item
 */
export interface Project {
  title: string;
  description: string;
  stack: string[];
  repo: string;
  liveUrl?: string;
  image: string;
}
