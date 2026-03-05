import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "subtle" | "surface";
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
      className={`py-28 md:py-32 px-0 md:px-6 ${needsRelative ? "relative" : ""} ${className}`}
    >
      {/* ── Background layer ───────────────────────── */}
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
