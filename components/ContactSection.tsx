"use client";

import { personalInfo } from "@/lib/data";
import { Mail, MapPin, Phone } from "@/components/Icons";
import SocialLinks from "./SocialLinks";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-0 md:px-6">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a
          question, a project idea, or just want to say hi, my inbox is always
          open. I'll try my best to get back to you!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} className="text-primary" />
            {personalInfo.email}
          </a>
          <span className="hidden md:block w-px h-6 bg-border" />
          <span className="flex items-center gap-3 text-muted-foreground">
            <MapPin size={20} className="text-primary" />
            {personalInfo.location}
          </span>
          <span className="hidden md:block w-px h-6 bg-border" />
          <span className="flex items-center gap-3 text-muted-foreground">
            <Phone size={20} className="text-primary" />
            {personalInfo.phone}
          </span>
        </div>

        {/* CTA Button */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground 
                     rounded-md font-medium text-lg hover:bg-primary/90 transition-all duration-300 mb-12
                     shadow-lg shadow-primary/25"
        >
          Say Hello
        </a>

        {/* Social Links */}
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
