import { skills, education } from "@/lib/data";
import { GraduationCap, Code, Wrench } from "@/components/Icons";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-0 md:px-6 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-4">
            My Expertise & Learning
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="space-y-8">
            {/* Core Skills */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Code size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Core Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.core.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Frameworks */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Wrench size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Tools & Frameworks
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="glass-card p-6 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Education</h3>
            </div>
            <ul className="space-y-4">
              {education.map((edu, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground pb-4 border-b border-border/50 last:border-0 last:pb-0"
                >
                  <span className="text-primary mt-1">▹</span>
                  <span className="leading-relaxed">{edu}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
