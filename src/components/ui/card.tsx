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
  const baseStyles = "rounded-lg transition-all duration-300";

  const variants = {
    default: "bg-card border border-border",
    glass:
      "glass-card backdrop-blur-sm bg-secondary/10 border border-border/50 shadow-lg",
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

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export function CardBody({ children, className = "" }: CardBodyProps) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`px-6 pb-6 pt-4 border-t border-border/50 ${className}`}>
      {children}
    </div>
  );
}
