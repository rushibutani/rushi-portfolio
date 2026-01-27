import Image from "next/image";
import { projects, projectsContent } from "@/config/site";
import { ExternalLink, Github, Folder } from "@/components/ui/icons";
import {
  Section,
  SectionHeader,
  Button,
  Badge,
  IconLink,
  SectionReveal,
} from "@/components/ui";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionReveal>
        <SectionHeader
          label={projectsContent.label}
          title={projectsContent.title}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card flex flex-col h-full">
              {/* Project Image */}
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-secondary/50">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={400}
                  height={192}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <Folder size={32} className="text-primary" />
                <div className="flex items-center gap-3">
                  {project.repo && (
                    <IconLink
                      href={project.repo}
                      icon={<Github size={20} />}
                      label="View GitHub repository"
                    />
                  )}
                  {project.liveUrl && (
                    <IconLink
                      href={project.liveUrl}
                      icon={<ExternalLink size={20} />}
                      label="View live project"
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <Badge variant="primary">{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            href="https://github.com/rushibutani"
            className="gap-2"
          >
            <Github size={20} />
            {projectsContent.viewMoreText}
          </Button>
        </div>
      </SectionReveal>
    </Section>
  );
}
