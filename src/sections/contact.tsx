import { personalInfo, contactContent } from "@/config/site";
import SocialLinks from "@/components/layout/social-links";
import { Section, SectionReveal, ContactForm } from "@/components/ui";
import { Mail, MapPin } from "@/components/ui/icons";

export default function Contact() {
  return (
    <Section id="contact" className="relative">
      {/* ── Stage-light glow — centered behind headline ─────────────── */}
      {/* Light: 4% opacity so it reads as a gentle brand tint on #fafafa  */}
      {/* Dark:  10% opacity for the prescribed stage-light effect         */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -z-10"
        style={{
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle at center top, rgba(124, 58, 237, 0.04) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -z-10 hidden dark:block"
        style={{
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle at center top, rgba(124, 58, 237, 0.06) 0%, transparent 65%)",
        }}
      />

      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* ── Left: Info — slides in from left ─────────────────────────── */}
        <SectionReveal direction="left" delay={0}>
          <div className="flex flex-col gap-8">
            {/* Label + Heading + Description */}
            <div className="flex flex-col gap-5">
              <p className="font-mono text-sm font-semibold tracking-widest text-primary uppercase">
                {contactContent.label}
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[1.08] text-foreground">
                {contactContent.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {i === 1 ? (
                      <span className="text-gradient">{line}</span>
                    ) : (
                      line
                    )}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h2>

              <p className="text-lg text-muted-foreground leading-[1.7] max-w-md">
                {contactContent.description}
              </p>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 self-start bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
              <span
                className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"
                aria-hidden
              />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                {personalInfo.availability}
              </span>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group w-fit"
              >
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm font-mono">{personalInfo.email}</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <SocialLinks />
          </div>
        </SectionReveal>

        {/* ── Right: Form — slides in from right with delay ────────────────────────── */}
        <SectionReveal direction="right" delay={260}>
          <div className="glass-card p-6 md:p-8 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-foreground">
                Send a Message
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                I usually respond within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </SectionReveal>
      </div>
    </Section>
  );
}
