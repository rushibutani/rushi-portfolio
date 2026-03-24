import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "@/components/ui/icons";
import { TrackedLink } from "@/components/ui";
import { socialLinks } from "@/config/site";

interface SocialLinksProps {
  location?: "hero" | "contact" | "footer";
}

export default function SocialLinks({ location = "hero" }: SocialLinksProps) {
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
        <TrackedLink
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          ariaLabel={label}
          analyticsEvent="social_click"
          analyticsProperties={{
            platform: label.toLowerCase(),
            location,
          }}
        >
          <Icon size={20} />
        </TrackedLink>
      ))}
    </div>
  );
}
