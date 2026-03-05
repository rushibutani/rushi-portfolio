import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "glass";
  className?: string;
}

export function Card({
  children,
  variant = "default",
  className = "",
}: CardProps) {
  const baseStyles = "rounded-2xl transition-all duration-300";

  const variants = {
    default: "bg-card border border-border",
    glass: "glass-card",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
