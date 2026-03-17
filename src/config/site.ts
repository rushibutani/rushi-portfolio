import type {
  PersonalInfo,
  Skills,
  Experience,
  Project,
  NavItem,
  SiteMetadata,
  SocialLinks,
} from "@/types";

export const siteMetadata: SiteMetadata = {
  title: "Rushi Butani | Frontend Developer",
  description:
    "Frontend Developer specializing in React.js, Next.js, and scalable UI systems. Based in Gujarat, India. Available for freelance & collaborations.",
  siteUrl: "https://rushibutani.com",
  author: "Rushi Butani",
  keywords: [
    "Frontend Developer",
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

export const headerLogo = "<RB />";

export const footerContent = {
  text: "Designed & Built with",
  author: "Rushi Butani",
};

export const navLinks: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks: SocialLinks = {
  linkedin: "https://in.linkedin.com/in/rushibutani",
  github: "https://github.com/rushibutani",
  instagram: "https://www.instagram.com/rushibutani/",
  twitter: "https://twitter.com/rushibutani_",
  facebook: "https://www.facebook.com/rushibutani",
};

export const personalInfo: PersonalInfo = {
  name: "Rushi Butani",
  location: "Gujarat, India",
  email: "rushibutani@gmail.com",
  phone: "+91 9638293911",
  bio: `Frontend developer with 2+ years building web applications with React. I enjoy crafting clean interfaces, writing maintainable code, and solving real problems through thoughtful design and engineering.`,
  availability: "Open to Interesting Projects & Collaborations",
};

export const heroContent = {
  greeting: "Crafting Modern Web Interfaces",
  subtitle:
    "Frontend Developer building fast, scalable React & Next.js products.",
  description:
    "I focus on performance, clean architecture, and intuitive user interfaces used by real users.",
  cta: {
    primary: "View My Work",
    secondary: "Get In Touch",
  },
};

export const heroBadges: string[] = [
  "2+ Years React Experience",
  "Production Fintech Applications",
  "Next.js + Performance Focus",
  "Available for Freelance",
  "Clean Code · Scalable Architecture",
  "TypeScript · Tailwind CSS",
  "UI Systems · Component Design",
];

export const aboutContent = {
  label: "About Me",
  title: "Building Reliable Interfaces\nfor Real Products",
  paragraphs: [
    "I'm a frontend developer with 2+ years of experience building production-grade web applications using React and modern frontend technologies.",
    "I specialize in building scalable UI architectures, optimizing performance, and delivering smooth user experiences for real-world products.",
    "Currently building production-grade fintech applications at Bankai Informatics.",
  ],
};

export const experienceContent = {
  label: "Professional Journey",
  title: "Professional Experience",
};

// Most recent first
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

export const projectsContent = {
  label: "Things I've Built",
  title: "Featured Projects",
  viewMoreText: "More on GitHub",
};

export const projects: Project[] = [
  {
    title: "Real-Time Weather Application",
    description:
      "Clean, location-based weather app demonstrating API integration and state management. Features real-time data updates, geolocation support, and responsive weather visualization.",
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
    repo: "https://github.com/rushibutani/rushi-portfolio",
    liveUrl: "https://rushibutani.vercel.app/",
    image: "/images/personal-portfolio-preview.webp",
  },
  {
    title: "GitHub Profile Analytics",
    description:
      "Production-grade analytics dashboard transforming GitHub API data into actionable insights. Features contribution heatmaps, language distribution charts, and repository metrics with optimized data fetching.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "GitHub REST API",
      "Recharts",
    ],
    repo: "https://github.com/rushibutani/github-profile-analytics",
    liveUrl: "https://github-profile-analytics.vercel.app",
    image: "/images/github-profile-analytics-preview.webp",
  },
];

export const skillsContent = {
  label: "Expertise & Learning",
  title: "Skills & Education",
  sections: {
    core: "Core Technologies",
    tools: "Tools & Frameworks",
    education: "Education",
  },
};

export const skills: Skills = {
  core: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  tools: [
    "Tailwind CSS",
    "Material UI (MUI)",
    "SCSS (Sass)",
    "Git",
    "GitHub",
    "jQuery",
    "Responsive Design",
  ],
};

export const education: string[] = [
  "Front-End Web Development Course in React.js - TOPS Technologies (2023)",
  "Complete Front-End Web Development Course - Udemy (2023)",
  "M.Sc. in Organic Chemistry - CCSIT College (2018 - 2020)",
];

export const contactContent = {
  label: "What's Next?",
  title: "Let's build something\ngreat together.",
  description:
    "Open to new opportunities, freelance projects, and interesting collaborations. If you have something in mind, I'd love to hear from you.",
  ctaText: "Say Hello",
};
