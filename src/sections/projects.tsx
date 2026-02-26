import Image from "next/image";
import { projects, projectsContent, socialLinks } from "@/config/site";
import { ExternalLink, Github } from "@/components/ui/icons";
import { Section, Button, SectionReveal } from "@/components/ui";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects">
      <SectionReveal>
        {/* Section header */}
        <div className="mb-14">
          <p className="font-mono text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            {projectsContent.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            {projectsContent.title}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto">
          {/* Featured Project — spans full width on md+ */}
          <div className="project-card md:col-span-2 group">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="relative w-full lg:w-1/2 h-56 lg:h-auto flex-shrink-0 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={`${featured.title} preview`}
                  width={700}
                  height={400}
                  priority
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden lg:block" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 md:p-8 gap-4">
                <div>
                  <span className="text-xs font-semibold tracking-widest text-primary uppercase font-mono">
                    Featured Project
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground mt-2 mb-3 group-hover:text-primary transition-colors duration-200">
                    {featured.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {featured.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Stack */}
                  <ul className="flex flex-wrap gap-2">
                    {featured.stack.map((tech) => (
                      <li key={tech} className="badge-pill">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {featured.repo && (
                      <a
                        href={featured.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={18} /> GitHub
                      </a>
                    )}
                    {featured.liveUrl && (
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining Projects */}
          {rest.map((project, index) => (
            <div key={index} className="project-card group flex flex-col">
              {/* Image */}
              <div className="relative w-full h-44 overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={600}
                  height={176}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="badge-pill">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
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
