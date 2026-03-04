import { heroBadges } from "@/config/site";
import {
  Code,
  Layers,
  Zap,
  Briefcase,
  Wrench,
  Database,
  Package,
  MapPin,
} from "@/components/ui/icons";

/**
 * Value-signal badge strip shown below the hero section.
 * Badges scroll continuously right-to-left in a seamless marquee loop.
 */

const BADGE_ICONS = [
  Code,
  Layers,
  Zap,
  Briefcase,
  Wrench,
  Database,
  Package,
  MapPin,
];

export default function HeroBadges() {
  // Duplicate for seamless loop
  const items = [...heroBadges, ...heroBadges];

  return (
    <div className="relative w-full overflow-hidden border-y border-border/30 py-4 bg-secondary/10 dark:bg-transparent dark:border-white/[0.05]">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="flex items-center gap-3 animate-marquee w-max">
        {items.map((badge, i) => {
          const Icon = BADGE_ICONS[i % BADGE_ICONS.length];
          return (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/60 backdrop-blur-sm text-sm font-medium text-foreground/75 flex-shrink-0"
            >
              <Icon size={13} className="text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">{badge}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
