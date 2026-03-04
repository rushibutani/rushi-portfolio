import type { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]} ${className}`}>
      {label && (
        <p className="text-primary font-mono text-sm mb-4 font-semibold tracking-wider uppercase">
          {label}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 relative inline-block">
        <span className="relative z-10">{title}</span>
        <span className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-primary opacity-70" />
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mt-6">
          {description}
        </p>
      )}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "accent" | "subtle" | "surface";
  /** Adds a 1px #ffffff08 hairline at the very top of the section */
  topBorder?: boolean;
  /** Adds a 1px #ffffff06 hairline at the very bottom of the section */
  bottomBorder?: boolean;
}

export function Section({
  children,
  id,
  className = "",
  variant = "default",
  topBorder = false,
  bottomBorder = false,
}: SectionProps) {
  const needsRelative = variant !== "default" || topBorder || bottomBorder;

  return (
    <section
      id={id}
      className={`py-28 md:py-32 px-4 md:px-6 ${needsRelative ? "relative" : ""} ${className}`}
    >
      {/* ── Background layer ───────────────────────── */}
      {variant === "accent" && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[#efefef] dark:bg-[#111111]"
        />
      )}
      {variant === "subtle" && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[#f4f4f4] dark:bg-[#0f0f0f]"
        />
      )}
      {variant === "surface" && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-white dark:bg-[#111111]"
        />
      )}

      {/* ── Separator hairlines — theme-aware ──────────── */}
      {topBorder && (
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px pointer-events-none bg-black/[0.06] dark:bg-white/[0.031]"
        />
      )}
      {bottomBorder && (
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-px pointer-events-none bg-black/[0.05] dark:bg-white/[0.024]"
        />
      )}

      <div className="container max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
