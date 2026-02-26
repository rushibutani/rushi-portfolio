import { personalInfo, contactContent } from "@/config/site";
import SocialLinks from "@/components/layout/social-links";
import { Section, SectionReveal, Button } from "@/components/ui";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionReveal>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-10">
          {/* Label */}
          <p className="font-mono text-sm font-semibold tracking-widest text-primary uppercase">
            {contactContent.label}
          </p>

          {/* Big heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground">
            {contactContent.title.split("\n").map((line, i) => (
              <span key={i}>
                {i === 1 ? <span className="text-gradient">{line}</span> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            {contactContent.description}
          </p>

          {/* CTA */}
          <Button
            href={`mailto:${personalInfo.email}`}
            variant="primary"
            size="lg"
            className="rounded-2xl px-12 py-5 text-lg font-semibold shadow-xl hover:shadow-primary/25 transition-shadow"
          >
            {contactContent.ctaText}
          </Button>

          {/* Email visible link */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            {personalInfo.email}
          </a>

          {/* Social Links */}
          <SocialLinks />
        </div>
      </SectionReveal>
    </Section>
  );
}
