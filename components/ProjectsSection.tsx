"use client";

import { projects } from "@/lib/data";
import { ExternalLink, Github, Folder } from "@/components/Icons";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-0 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-heading">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card flex flex-col h-full">
              {/* Project Image */}
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-secondary/50">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <Folder size={32} className="text-primary" />
                <div className="flex items-center gap-3">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github size={20} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/rushibutani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary 
                       rounded-md font-medium hover:bg-primary/10 transition-all duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
