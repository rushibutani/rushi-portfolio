import { techStrip } from "@/config/site";

/**
 * Scrolling technology strip shown below the hero section.
 * Renders a seamless marquee of tech names.
 */
export default function TechStrip() {
  // Duplicate items so the marquee loops seamlessly
  const items = [...techStrip, ...techStrip];

  return (
    <div className="relative w-full overflow-hidden border-y border-border/40 bg-secondary/20 backdrop-blur-sm py-4">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-background to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="flex gap-4 animate-marquee w-max">
        {items.map((tech, i) => (
          <span key={i} className="tech-strip-item">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
