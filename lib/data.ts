// TypeScript Interfaces
interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  availability: string;
}

interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
  twitter: string;
  facebook: string;
}

interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
}

interface Project {
  title: string;
  description: string;
  stack: string[];
  repo: string;
  liveUrl?: string;
  image: string;
}

interface Skills {
  core: string[];
  tools: string[];
}

interface NavItem {
  name: string;
  href: string;
}

interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  author: string;
  keywords: string[];
  image: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Rushi Butani",
  location: "Gujarat, India",
  email: "rushibutani@gmail.com",
  phone: "+91 9638293911",
  bio: `Hi, I'm Rushi Butani, a Frontend Web Developer based in Gujarat, India.
I build fast, responsive, and SEO-friendly web applications using React,
Next.js, and modern frontend technologies.`,
  availability: "Open to freelance & full-time opportunities",
};

// Social Links
export const socialLinks: SocialLinks = {
  linkedin: "https://in.linkedin.com/in/rushibutani",
  github: "https://github.com/rushibutani",
  instagram: "https://www.instagram.com/rushibutani/",
  twitter: "https://twitter.com/rushibutani_",
  facebook: "https://www.facebook.com/rushibutani",
};

// Experience
export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "Bankai Informatics Pvt. Ltd.",
    duration: "Jan 2024 - Present",
    location: "Ahmedabad, Gujarat",
    highlights: [
      "Built scalable React.js interfaces using modern UI libraries",
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

// Projects
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
      "Real-time weather application with search functionality and dynamic UI.",
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

// Education
export const education: string[] = [
  "Front-End Web Development Course in React.js - TOPS Technologies (2023)",
  "Complete Front-End Web Development Course - Udemy (2023)",
  "M.Sc. in Organic Chemistry - CCSIT College (2018 - 2020)",
];

// Skills
export const skills: Skills = {
  core: ["HTML", "CSS", "JavaScript"],
  tools: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Bootstrap",
    "SCSS (Sass)",
    "jQuery",
    "Responsive Design",
  ],
};

// Navigation
export const navLinks: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

// SEO Metadata
export const siteMetadata: SiteMetadata = {
  title: "Rushi Butani | Frontend Developer",
  description:
    "Frontend Web Developer specializing in React.js, Next.js, and modern web technologies. Based in Gujarat, India. Open to freelance and full-time opportunities.",
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
