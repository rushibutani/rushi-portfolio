"use client";

import { experience } from "@/lib/data";
import { MapPin, Calendar } from "@/components/Icons";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-0 md:px-6 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-heading">Experience</h2>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 relative overflow-hidden group"
            >
              {/* Accent Line */}
              <div className="absolute left-0 top-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors" />

              {/* Current Position Ribbon */}
              {job.duration.includes("Present") && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold rounded-bl-lg shadow-lg">
                  Currently Working
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {job.role}{" "}
                    <span className="text-primary">@ {job.company}</span>
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      {job.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      {job.location}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {job.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
