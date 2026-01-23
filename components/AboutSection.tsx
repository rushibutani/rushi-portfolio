"use client";

import { personalInfo, skills } from "@/lib/data";
import { MapPin, Mail, Phone, Briefcase } from "@/components/Icons";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-0 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-heading">About Me</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* About Text */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hello! I'm Rushi, a passionate frontend developer who enjoys
              creating things that live on the internet. My interest in web
              development started back in 2020 when I decided to try customizing
              website templates — turns out hacking together HTML & CSS taught
              me a lot about how the web works!
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Fast-forward to today, and I've had the privilege of working at a
              software company and collaborating with talented teams. My main
              focus these days is building accessible, inclusive products and
              digital experiences using React and modern frontend technologies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>

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
          <div className="glass-card p-6 h-fit space-y-4">
            {/* <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 mb-6 mx-auto relative">
              <img
                src="/images/my-Img-bw.webp"
                alt="Rushi Butani"
                width="128"
                height="128"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div> */}

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase size={18} className="text-primary" />
                <span className="text-primary font-medium">
                  {personalInfo.availability}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
