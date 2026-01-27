import { personalInfo, contactContent } from "@/config/site";
import { Mail, MapPin, Phone } from "@/components/ui/icons";
import SocialLinks from "@/components/layout/social-links";
import { Section, InfoItem, SectionReveal, ContactForm } from "@/components/ui";

export default function Contact() {
  return (
    <Section id="contact" className="text-center">
      <SectionReveal className="max-w-4xl mx-auto">
        <p className="text-primary font-mono text-sm mb-4">
          {contactContent.label}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {contactContent.title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          {contactContent.description}
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-16">
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
        <div className="mb-16">
          <ContactForm />
        </div>

        {/* Social Links */}
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </SectionReveal>
    </Section>
  );
}
