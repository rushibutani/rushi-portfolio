import Image from "next/image";
import { projects, projectsContent, socialLinks } from "@/config/site";
import { ExternalLink, Github } from "@/components/ui/icons";
import { Section, Button, SectionReveal } from "@/components/ui";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects" topBorder bottomBorder>
      <SectionReveal delay={0}>
        <div className="mb-14">
          <p className="font-mono text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            {projectsContent.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.02em] text-foreground">
            {projectsContent.title}
          </h2>
        </div>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-auto">
        <SectionReveal delay={150} className="md:col-span-2">
          <article className="project-card group">
            <div className="flex flex-col lg:flex-row">
              <div className="relative w-full lg:w-[48%] flex-shrink-0 overflow-hidden bg-secondary/30">
                <div className="aspect-[16/9] lg:aspect-auto lg:h-full min-h-[200px]">
                  <Image
                    src={featured.image}
                    alt={`${featured.title} preview`}
                    width={700}
                    height={400}
                    priority
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/60 hidden lg:block pointer-events-none" />
              </div>

              <div className="flex flex-col justify-between p-6 md:p-8 gap-5">
                <div className="space-y-3">
                  <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">
                    Featured Project
                  </span>
                  <h3 className="text-2xl md:text-[1.65rem] font-black text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                    {featured.title}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75] text-[0.9375rem]">
                    {featured.description}
                  </p>
                </div>
                <div className="space-y-4">
                  <ul
                    className="flex flex-wrap gap-1.5"
                    aria-label="Tech stack"
                  >
                    {featured.stack.map((tech) => (
                      <li key={tech} className="badge-pill">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-5 pt-1">
                    {featured.repo && (
                      <a
                        href={featured.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`GitHub repository for ${featured.title}`}
                      >
                        <Github size={16} /> GitHub
                      </a>
                    )}
                    {featured.liveUrl && (
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Live demo for ${featured.title}`}
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </SectionReveal>

        {rest.map((project, index) => (
          <SectionReveal
            key={index}
            delay={320 + index * 140}
            direction={index % 2 === 0 ? "left" : "right"}
            distance={36}
          >
            <article className="project-card group flex flex-col h-full">
              <div className="relative w-full overflow-hidden flex-shrink-0 bg-secondary/30">
                <div className="aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={600}
                    height={338}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-[1.75] flex-1">
                  {project.description}
                </p>
                <ul
                  className="flex flex-wrap gap-1.5 mt-auto pt-1"
                  aria-label="Tech stack"
                >
                  {project.stack.map((tech) => (
                    <li key={tech} className="badge-pill">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-5 pt-1">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={300}>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            href={socialLinks.github}
            className="gap-2 rounded-xl"
          >
            <Github size={18} />
            {projectsContent.viewMoreText}
          </Button>
        </div>
      </SectionReveal>
    </Section>
  );
}
