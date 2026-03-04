import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "glass" | "bordered";
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  variant = "default",
  className = "",
  hover = false,
}: CardProps) {
  const baseStyles = "rounded-2xl transition-all duration-300";

  const variants = {
    default: "bg-card border border-border",
    glass: "glass-card",
    bordered: "border-2 border-border hover:border-primary/50",
  };

  const hoverStyles = hover
    ? "hover:shadow-xl hover:-translate-y-1 hover:border-primary/30"
    : "";

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
