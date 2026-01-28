import { personalInfo, contactContent } from "@/config/site";
import { Mail, MapPin, Phone } from "@/components/ui/icons";
import SocialLinks from "@/components/layout/social-links";
import {
  Section,
  SectionHeader,
  InfoItem,
  SectionReveal,
  ContactForm,
} from "@/components/ui";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionReveal>
        <SectionHeader
          label={contactContent.label}
          title={contactContent.title}
          description={contactContent.description}
          align="center"
        />

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <InfoItem
              icon={<Mail size={20} className="text-primary" />}
              href={`mailto:${personalInfo.email}`}
            >
              {personalInfo.email}
            </InfoItem>
            <span className="hidden md:block w-px h-6 bg-border" />
            <InfoItem
              icon={<Phone size={20} className="text-primary" />}
              href={`tel:${personalInfo.phone}`}
            >
              {personalInfo.phone}
            </InfoItem>
            <span className="hidden md:block w-px h-6 bg-border" />
            <InfoItem icon={<MapPin size={20} className="text-primary" />}>
              {personalInfo.location}
            </InfoItem>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Social Links */}
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </SectionReveal>
    </Section>
  );
}
