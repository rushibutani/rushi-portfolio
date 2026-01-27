import { experience, experienceContent } from "@/config/site";
import { MapPin, Calendar } from "@/components/ui/icons";
import {
  Section,
  SectionHeader,
  Card,
  Badge,
  SectionReveal,
} from "@/components/ui";

export default function Experience() {
  return (
    <Section id="experience" variant="accent">
      <SectionReveal>
        <SectionHeader
          label={experienceContent.label}
          title={experienceContent.title}
        />

        <div className="space-y-8">
          {experience.map((job, index) => (
            <Card
              key={index}
              variant="glass"
              className="p-6 md:p-8 relative overflow-hidden hover:border-primary/30 transition-all duration-200"
            >
              {/* Current Position Badge */}
              {job.duration.includes("Present") && (
                <div className="absolute top-0 right-0">
                  <Badge
                    variant="success"
                    className="rounded-bl-lg rounded-tr-none shadow-lg"
                  >
                    Currently Working
                  </Badge>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {job.role}{" "}
                    <span className="text-primary">@ {job.company}</span>
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      {job.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      {job.location}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {job.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionReveal>
    </Section>
  );
}
