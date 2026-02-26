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
        <div className="flex flex-col gap-0">
          {experience.map((job, index) => {
            const isLast = index === experience.length - 1;
            return (
              <div key={index} className="flex gap-6 md:gap-10">
                {/* ── Left: dot + connecting line ── */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {/* Dot */}
                  <div className="w-3 h-3 mt-[22px] rounded-full bg-primary ring-4 ring-background flex-shrink-0 z-10" />
                  {/* Line below dot — hidden on last item */}
                  {!isLast && (
                    <div className="w-px flex-1 mt-1 bg-gradient-to-b from-primary/50 via-border/60 to-transparent" />
                  )}
                </div>

                {/* ── Right: card ── */}
                <div className={`flex-1 ${isLast ? "pb-0" : "pb-10"}`}>
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
              </div>
            );
          })}
        </div>
      </SectionReveal>
    </Section>
  );
}
