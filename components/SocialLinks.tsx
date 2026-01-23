import { Github, Linkedin, Instagram, Twitter, Facebook } from "./Icons";
import { socialLinks } from "@/lib/data";

export default function SocialLinks() {
  const links = [
    { icon: Github, href: socialLinks.github, label: "GitHub" },
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
    { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
    { icon: Facebook, href: socialLinks.facebook, label: "Facebook" },
  ];

  return (
    <div className="flex items-center gap-4">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
