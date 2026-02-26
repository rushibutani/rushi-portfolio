import { personalInfo, skills, aboutContent } from "@/config/site";
import { MapPin, Mail, Phone, Briefcase } from "@/components/ui/icons";
import { Section, Card, InfoItem, SectionReveal } from "@/components/ui";

export default function About() {
  return (
    <Section id="about">
      <SectionReveal>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* ── Left: Bold Heading ─────────────────────── */}
          <div className="flex flex-col gap-6">
            <p className="font-mono text-sm font-semibold tracking-widest text-primary uppercase">
              {aboutContent.label}
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground">
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

            {/* Skills pills */}
            <div className="pt-2">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                Technologies I work with
              </p>
              <ul className="flex flex-wrap gap-2">
                {[...skills.core, ...skills.tools].map((skill) => (
                  <li key={skill} className="skill-tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: Content ────────────────────────── */}
          <div className="flex flex-col gap-8">
            {/* Paragraphs */}
            <div className="space-y-5">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Info Card */}
            <Card variant="glass" className="p-6 space-y-4 rounded-2xl">
              <InfoItem icon={<MapPin size={16} className="text-primary" />}>
                {personalInfo.location}
              </InfoItem>
              <InfoItem
                icon={<Mail size={16} className="text-primary" />}
                href={`mailto:${personalInfo.email}`}
              >
                {personalInfo.email}
              </InfoItem>
              <InfoItem
                icon={<Phone size={16} className="text-primary" />}
                href={`tel:${personalInfo.phone}`}
              >
                {personalInfo.phone}
              </InfoItem>
              <InfoItem icon={<Briefcase size={16} className="text-primary" />}>
                <span className="text-primary font-semibold text-sm">
                  {personalInfo.availability}
                </span>
              </InfoItem>
            </Card>
          </div>
        </div>
      </SectionReveal>
    </Section>
  );
}
