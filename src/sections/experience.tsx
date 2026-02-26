import { experience, experienceContent } from "@/config/site";
import { Section, SectionReveal } from "@/components/ui";

export default function Experience() {
  return (
    <Section id="experience" variant="accent">
      <SectionReveal>
        {/* Section header */}
        <div className="mb-14">
          <p className="font-mono text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            {experienceContent.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            {experienceContent.title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="timeline-dot" />

                {/* Card */}
                <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group">
                  {/* Year chip */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="badge-pill font-mono text-xs">
                      {job.duration}
                    </span>
                    {job.duration.includes("Present") && (
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Currently Here
                      </span>
                    )}
                  </div>

                  {/* Role + Company */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                    {job.role}
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    {job.company}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {job.location}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-border/60 mb-6" />

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {job.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground text-sm md:text-base"
                      >
                        <span className="text-primary mt-0.5 leading-none text-base flex-shrink-0">
                          ▹
                        </span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </Section>
  );
}
