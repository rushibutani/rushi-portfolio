import { skills, education, skillsContent } from "@/config/site";
import { GraduationCap, Code, Wrench } from "@/components/ui/icons";
import { Section, SectionReveal } from "@/components/ui";

export default function Skills() {
  const cards = [
    {
      icon: <Code size={18} className="text-primary" />,
      label: skillsContent.sections.core,
      content: (
        <div className="flex flex-wrap gap-2">
          {skills.core.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      ),
    },
    {
      icon: <Wrench size={18} className="text-primary" />,
      label: skillsContent.sections.tools,
      content: (
        <div className="flex flex-wrap gap-2">
          {skills.tools.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      ),
    },
    {
      icon: <GraduationCap size={18} className="text-primary" />,
      label: skillsContent.sections.education,
      content: (
        <ul className="space-y-3.5">
          {education.map((edu, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-muted-foreground pb-3.5 border-b border-border/40 last:border-0 last:pb-0 text-sm leading-relaxed"
            >
              <span className="text-primary mt-0.5 flex-shrink-0 font-bold text-xs">
                ›
              </span>
              <span>{edu}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <Section id="skills" variant="surface" topBorder>
      <SectionReveal delay={0}>
        <div className="mb-14">
          <p className="font-mono text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            {skillsContent.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.02em] text-foreground">
            {skillsContent.title}
          </h2>
        </div>
      </SectionReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map(({ icon, label, content }, i) => (
          <SectionReveal key={label} delay={i * 160} direction="up">
            <div className="glass-card p-6 rounded-2xl flex flex-col gap-5 h-full hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-200">
                  {icon}
                </div>
                <h3 className="text-sm font-bold text-foreground">{label}</h3>
              </div>
              <div className="h-px bg-border/50" />
              {content}
            </div>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
