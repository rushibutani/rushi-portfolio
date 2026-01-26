import { personalInfo, skills, aboutContent } from "@/config/site";
import { MapPin, Mail, Phone, Briefcase } from "@/components/ui/icons";
import {
  Section,
  SectionHeader,
  Card,
  InfoItem,
  SectionReveal,
} from "@/components/ui";

export default function About() {
  return (
    <Section id="about">
      <SectionReveal>
        <SectionHeader label={aboutContent.label} title={aboutContent.title} />

        <div className="grid md:grid-cols-3 gap-12">
          {/* About Text */}
          <div className="md:col-span-2 space-y-6">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Skills Grid */}
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
              {[...skills.core, ...skills.tools.slice(0, 4)].map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Info Card */}
          <Card variant="glass" className="p-6 h-fit space-y-4">
            <div className="space-y-3">
              <InfoItem icon={<MapPin size={18} className="text-primary" />}>
                {personalInfo.location}
              </InfoItem>
              <InfoItem
                icon={<Mail size={18} className="text-primary" />}
                href={`mailto:${personalInfo.email}`}
              >
                {personalInfo.email}
              </InfoItem>
              <InfoItem
                icon={<Phone size={18} className="text-primary" />}
                href={`tel:${personalInfo.phone}`}
              >
                {personalInfo.phone}
              </InfoItem>
              <InfoItem icon={<Briefcase size={18} className="text-primary" />}>
                <span className="text-primary font-medium">
                  {personalInfo.availability}
                </span>
              </InfoItem>
            </div>
          </Card>
        </div>
      </SectionReveal>
    </Section>
  );
}
