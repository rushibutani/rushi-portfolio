import { skills, education, skillsContent } from "@/config/site";
import { GraduationCap, Code, Wrench } from "@/components/ui/icons";
import { Section, SectionReveal } from "@/components/ui";

export default function Skills() {
  const cards = [
    {
      icon: <Code size={20} className="text-primary" />,
      label: skillsContent.sections.core,
      content: (
        <div className="flex flex-wrap gap-2.5">
          {skills.core.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      ),
    },
    {
      icon: <Wrench size={20} className="text-primary" />,
      label: skillsContent.sections.tools,
      content: (
        <div className="flex flex-wrap gap-2.5">
          {skills.tools.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      ),
    },
    {
      icon: <GraduationCap size={20} className="text-primary" />,
      label: skillsContent.sections.education,
      content: (
        <ul className="space-y-4">
          {education.map((edu, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-muted-foreground pb-4 border-b border-border/50 last:border-0 last:pb-0 text-sm leading-relaxed"
            >
              <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
              <span>{edu}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <Section id="skills" variant="accent">
      <SectionReveal>
        {/* Section header */}
        <div className="mb-14">
          <p className="font-mono text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            {skillsContent.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            {skillsContent.title}
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon, label, content }) => (
            <div
              key={label}
              className="glass-card p-6 rounded-2xl flex flex-col gap-5 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              {/* Card header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <h3 className="text-base font-bold text-foreground">{label}</h3>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/60" />

              {/* Content */}
              {content}
            </div>
          ))}
        </div>
      </SectionReveal>
    </Section>
  );
}
