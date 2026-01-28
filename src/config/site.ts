/**
 * =============================================================================
 * SITE CONFIGURATION & PORTFOLIO DATA
 * Central data store for all portfolio content and site configuration
 * =============================================================================
 */

import type {
  PersonalInfo,
  Skills,
  Experience,
  Project,
  NavItem,
  SiteMetadata,
  SocialLinks,
} from "@/types";

// =============================================================================
// SITE METADATA & BRANDING
// =============================================================================

/**
 * Site metadata for SEO optimization
 */
export const siteMetadata: SiteMetadata = {
  title: "Rushi Butani | Frontend Developer",
  description:
    "Frontend Web Developer specializing in React.js, Next.js, and modern web technologies. Based in Gujarat, India. Available for freelance & collaborations.",
  siteUrl: "https://rushibutani.com",
  author: "Rushi Butani",
  keywords: [
    "Frontend Developer",
    "Frontend Engineer",
    "React.js Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "JavaScript",
    "React.js",
    "Next.js",
    "Portfolio",
  ],
  image: "/images/og-image.svg",
};

/**
 * Header logo text
 */
export const headerLogo = "<RB />";

/**
 * Footer content
 */
export const footerContent = {
  text: "Designed & Built with",
  author: "Rushi Butani",
};

// =============================================================================
// NAVIGATION
// =============================================================================

/**
 * Main navigation menu items
 */
export const navLinks: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

/**
 * Social media profile links
 */
export const socialLinks: SocialLinks = {
  linkedin: "https://in.linkedin.com/in/rushibutani",
  github: "https://github.com/rushibutani",
  instagram: "https://www.instagram.com/rushibutani/",
  twitter: "https://twitter.com/rushibutani_",
  facebook: "https://www.facebook.com/rushibutani",
};

// =============================================================================
// PERSONAL INFORMATION
// =============================================================================

/**
 * Personal contact details and bio
 */
export const personalInfo: PersonalInfo = {
  name: "Rushi Butani",
  location: "Gujarat, India",
  email: "rushibutani@gmail.com",
  phone: "+91 9638293911",
  bio: `Frontend developer with 2+ years building web applications with React. I enjoy crafting clean interfaces, writing maintainable code, and solving real problems through thoughtful design and engineering.`,
  availability: "Open to Interesting Projects & Collaborations",
};

// =============================================================================
// HERO SECTION
// =============================================================================

/**
 * Hero section content
 */
export const heroContent = {
  greeting: "Frontend Engineer",
  subtitle: "Turning complex requirements into clean, usable React interfaces.",
  description:
    "I focus on building responsive interfaces, writing maintainable code, and creating smooth user experiences.",
  cta: {
    primary: "View My Work",
    secondary: "Get In Touch",
  },
};

// =============================================================================
// ABOUT SECTION
// =============================================================================

/**
 * About section content
 */
export const aboutContent = {
  label: "Get To Know More",
  title: "About Me",
  paragraphs: [
    "Hi, I'm  Rushi, a frontend developer who enjoys building clean, reliable interfaces for real-world web applications. My journey into frontend development started in 2020, where experimenting with HTML and CSS helped me understand how the web works at a foundational level.",
    ,
    "Since then, I've worked on real client projects and production applications, which helped me move beyond tutorials and understand the importance of maintainable code, accessibility, and collaboration. Today, I focus on building user-friendly interfaces using React and modern frontend technologies while continuously improving my development practices.",
    "Here are a few technologies I've been working with recently:",
  ],
};

// =============================================================================
// EXPERIENCE SECTION
// =============================================================================

/**
 * Experience section content
 */
export const experienceContent = {
  label: "My Professional Journey",
  title: "Work Experience",
};

/**
 * Professional work history (most recent first)
 */
export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "Bankai Informatics Pvt. Ltd.",
    duration: "Jan 2024 - Present",
    location: "Ahmedabad, Gujarat",
    highlights: [
      "Develop and maintain React-based user interfaces for banking and financial web applications",
      "Work on feature implementation, UI improvements, and bug fixes in existing production systems",
      "Collaborate with backend developers and product teams to integrate APIs and deliver requirements",
      "Improve code readability and component reuse within the frontend codebase",
    ],
  },
  {
    role: "Freelance Frontend Developer (React.js)",
    company: "h-Case",
    duration: "Oct 2023 - Jan 2024",
    location: "Remote",
    highlights: [
      "Worked on frontend modules for a healthcare patient onboarding system",
      "Implemented form screens, basic validation, and UI components using React",
      "Collaborated with senior developers and followed existing code patterns",
      "Gained hands-on experience working on a real client project during early career",
    ],
  },
];

// =============================================================================
// PROJECTS SECTION
// =============================================================================

/**
 * Projects section content
 */
export const projectsContent = {
  label: "Things I've Built",
  title: "Featured Projects",
  viewMoreText: "View More on GitHub",
};

/**
 * Featured projects showcase (display order)
 */
export const projects: Project[] = [
  {
    title: "Healthcare Onboarding – Frontend Contribution",
    description:
      "Contributed to frontend modules of a healthcare onboarding system during a freelance engagement, focusing on form screens, validation logic, and responsive UI under senior guidance.",
    stack: ["React.js", "Material UI", "React Hook Form"],
    image: "/images/hcase-project.svg",
  },
  {
    title: "Real-Time Weather Application",
    description:
      "Personal project built to practice real-world API integration and state management. Implements live weather data, location-based search, and responsive UI with clear visual hierarchy.",
    stack: ["React.js", "OpenWeather API", "SCSS", "JavaScript"],
    repo: "https://github.com/rushibutani/weather-app",
    liveUrl: "https://rushibutani.github.io/weather-app/",
    image: "/images/weather-app-preview.webp",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and built my personal portfolio to showcase real project experience, focusing on clean architecture, performance, accessibility, and maintainable UI using Next.js.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "React"],
    repo: "https://github.com/rushibutani/portfolio",
    liveUrl: "https://rushibutani.com",
    image: "/images/personal-portfolio-preview.webp",
  },
];

// =============================================================================
// SKILLS SECTION
// =============================================================================

/**
 * Skills section content
 */
export const skillsContent = {
  label: "My Expertise & Learning",
  title: "Skills & Education",
  sections: {
    core: "Core Technologies",
    tools: "Tools & Frameworks",
    education: "Education",
  },
};

/**
 * Technical skills - core technologies and tools/frameworks
 */
export const skills: Skills = {
  core: ["HTML", "CSS", "JavaScript"],
  tools: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Material UI (MUI)",
    "Git",
    "GitHub",
    "SCSS (Sass)",
    "jQuery",
    "Responsive Design",
  ],
};

/**
 * Educational background and certifications
 */
export const education: string[] = [
  "Front-End Web Development Course in React.js - TOPS Technologies (2023)",
  "Complete Front-End Web Development Course - Udemy (2023)",
  "M.Sc. in Organic Chemistry - CCSIT College (2018 - 2020)",
];

// =============================================================================
// CONTACT SECTION
// =============================================================================

/**
 * Contact section content
 */
export const contactContent = {
  label: "What's Next?",
  title: "Let's Work Together",
  description:
    "I'm always open to meaningful conversations. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll do my best to get back to you!",
  ctaText: "Get In Touch",
};
