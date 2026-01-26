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
      {label && <p className="text-primary font-mono text-sm mb-4">{label}</p>}
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
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
    accent: "bg-secondary/30",
  };

  return (
    <section
      id={id}
      className={`py-24 px-0 md:px-6 ${variants[variant]} ${className}`}
    >
      <div className="container max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
