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
  bio: `Hi, I'm Rushi Butani, a Frontend Web Developer based in Gujarat, India.
I build fast, responsive, and SEO-friendly web applications using React,
Next.js, and modern frontend technologies.`,
  availability: "Available for freelance & collaborations",
};

// =============================================================================
// HERO SECTION
// =============================================================================

/**
 * Hero section content
 */
export const heroContent = {
  greeting: "Hi, my name is",
  subtitle: "I build things for the web.",
  cta: {
    primary: "Check out my work!",
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
    "Hello! I'm Rushi, a passionate frontend developer who enjoys creating things that live on the internet. My interest in web development started back in 2020 when I decided to try customizing website templates — turns out hacking together HTML & CSS taught me a lot about how the web works!",
    "Fast-forward to today, and I've had the privilege of working at a software company and collaborating with talented teams. My main focus these days is building accessible, inclusive products and digital experiences using React and modern frontend technologies.",
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
      "Built scalable React.js interfaces using modern UI libraries, improving maintainability and performance",
      "Integrated REST APIs and improved UI performance",
      "Worked in an Agile environment using Git for version control",
    ],
  },
  {
    role: "Freelance Frontend Developer (React.js)",
    company: "h-Case",
    duration: "Oct 2023 - Jan 2024",
    location: "Remote",
    highlights: [
      "Developed patient onboarding modules",
      "Designed reusable UI components",
      "Handled frontend architecture and UI workflows",
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
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website showcasing my skills and projects.",
    stack: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
    repo: "https://github.com/rushibutani/portfolio",
    liveUrl: "https://rushibutani.github.io/portfolio/",
    image: "/images/personal-portfolio-preview.webp",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application with search functionality, responsive UI, and optimized API handling.",
    stack: ["React.js", "SCSS (Sass)", "JavaScript"],
    repo: "https://github.com/rushibutani/weather-app",
    liveUrl: "https://rushibutani.github.io/weather-app/",
    image: "/images/weather-app-preview.webp",
  },
  {
    title: "iEducate Website",
    description:
      "Educational website clone built with clean HTML, CSS, and JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/rushibutani/Website-Clone-Projects/tree/main/iEducate%20Website",
    image: "/images/ieducate-website-preview.webp",
  },
  {
    title: "Veterinary PSD Clone",
    description: "Converted PSD design into responsive HTML/CSS layout.",
    stack: ["HTML", "CSS"],
    repo: "https://github.com/rushibutani/Website-Clone-Projects/tree/main/Veterinarian%20Psd%20Clone",
    image: "/images/veterinary-psd-clone-preview.webp",
  },
  {
    title: "Tesla Website Clone",
    description:
      "Tesla website clone focusing on responsive layouts and UI accuracy.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/rushibutani/Website-Clone-Projects/tree/main/Tesla%20Website%20Clone",
    image: "/images/tesla-website-clone-preview.webp",
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
  title: "Get In Touch",
  description:
    "I'm always open to meaningful conversations. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll do my best to get back to you!",
  ctaText: "Say Hello",
};
