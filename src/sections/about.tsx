import { personalInfo, skills, aboutContent } from "@/config/site";
import { MapPin, Mail, Phone, Briefcase } from "@/components/ui/icons";
import { Section, Card, InfoItem, SectionReveal } from "@/components/ui";

export default function About() {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

        <div className="flex flex-col gap-7">
          <SectionReveal direction="left" delay={0}>
            <div className="flex flex-col gap-5">
              <p className="font-mono text-sm font-semibold tracking-widest text-primary uppercase">
                {aboutContent.label}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.08] tracking-[-0.02em] text-foreground">
                {aboutContent.title.split("\n").map((line, i) => (
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
            </div>
          </SectionReveal>

          <SectionReveal direction="left" delay={200}>
            <div className="pt-1">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                Technologies I work with
              </p>
              <ul className="flex flex-wrap gap-2" aria-label="Skills list">
                {[...skills.core, ...skills.tools].map((skill) => (
                  <li key={skill} className="skill-tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>

        <div className="flex flex-col gap-8">
          <SectionReveal direction="right" delay={150}>
            <div className="space-y-5">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground text-[1.05rem] leading-[1.8]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={340}>
            <Card
              variant="glass"
              className="p-5 space-y-3.5 rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              <InfoItem
                icon={
                  <MapPin size={15} className="text-primary flex-shrink-0" />
                }
              >
                {personalInfo.location}
              </InfoItem>
              <div className="h-px bg-border/40" />
              <InfoItem
                icon={<Mail size={15} className="text-primary flex-shrink-0" />}
                href={`mailto:${personalInfo.email}`}
              >
                {personalInfo.email}
              </InfoItem>
              <div className="h-px bg-border/40" />
              <InfoItem
                icon={
                  <Phone size={15} className="text-primary flex-shrink-0" />
                }
                href={`tel:${personalInfo.phone}`}
              >
                {personalInfo.phone}
              </InfoItem>
              <div className="h-px bg-border/40" />
              <InfoItem
                icon={
                  <Briefcase
                    size={15}
                    className="text-emerald-500 flex-shrink-0"
                  />
                }
              >
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                  {personalInfo.availability}
                </span>
              </InfoItem>
            </Card>
          </SectionReveal>
        </div>
      </div>
    </Section>
  );
}
