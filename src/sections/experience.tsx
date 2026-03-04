import { experience, experienceContent } from "@/config/site";
import { Section, SectionReveal } from "@/components/ui";

export default function Experience() {
  return (
    <Section id="experience" variant="accent">
      <SectionReveal>
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            {experienceContent.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.02em] text-foreground">
            {experienceContent.title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-0">
          {experience.map((job, index) => {
            const isLast = index === experience.length - 1;
            return (
              <div key={index} className="flex gap-6 md:gap-8">
                {/* ── Left: dot + connecting line ── */}
                <div className="flex flex-col items-center flex-shrink-0 pt-1">
                  {/* Dot with ring */}
                  <div className="relative mt-5 flex-shrink-0 z-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary ring-[3px] ring-background shadow-sm" />
                    {/* Pulse ring for current job */}
                    {job.duration.includes("Present") && (
                      <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                    )}
                  </div>
                  {/* Connecting line */}
                  <div className="w-px flex-1 mt-2 bg-gradient-to-b from-primary/40 via-border/40 to-transparent" />
                </div>

                {/* ── Right: card ── */}
                <div className={`flex-1 ${isLast ? "pb-0" : "pb-8 md:pb-10"}`}>
                  <div className="glass-card p-6 md:p-7 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 group overflow-hidden relative">
                    {/* Subtle left accent border */}
                    <div className="absolute left-0 inset-y-0 w-[3px] rounded-r-full bg-gradient-to-b from-primary/60 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Header row */}
                    <div className="flex flex-wrap items-start gap-3 mb-4">
                      <span className="badge-pill font-mono text-xs">
                        {job.duration}
                      </span>
                      {job.duration.includes("Present") && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 dark:text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Currently Here
                        </span>
                      )}
                    </div>

                    {/* Role + Company */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                      {job.role}
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-0.5">
                      {job.company}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono mb-5">
                      {job.location}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-border/50 mb-5" />

                    {/* Highlights */}
                    <ul
                      className="space-y-2.5"
                      aria-label={`Highlights for ${job.role}`}
                    >
                      {job.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground text-sm md:text-[0.9375rem] leading-relaxed"
                        >
                          <span className="text-primary mt-[3px] leading-none text-sm flex-shrink-0 font-bold">
                            ›
                          </span>
                          <span>{highlight}</span>
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
