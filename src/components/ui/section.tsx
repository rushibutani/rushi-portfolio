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
  variant?: "default" | "accent";
}

export function Section({
  children,
  id,
  className = "",
  variant = "default",
}: SectionProps) {
  const variants = {
    default: "",
    accent: "relative",
  };

  return (
    <section
      id={id}
      className={`py-28 md:py-32 px-4 md:px-6 ${variants[variant]} ${className}`}
    >
      {variant === "accent" && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-secondary/25 dark:bg-secondary/15"
        />
      )}
      <div className="container max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
