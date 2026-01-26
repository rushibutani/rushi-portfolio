import type { ReactNode } from "react";

interface IconLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  external?: boolean;
  className?: string;
}

export function IconLink({
  href,
  icon,
  label,
  external = true,
  className = "",
}: IconLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`text-muted-foreground hover:text-primary transition-colors ${className}`}
      aria-label={label}
    >
      {icon}
    </a>
  );
}

interface InfoItemProps {
  icon: ReactNode;
  children: ReactNode;
  href?: string;
  className?: string;
}

export function InfoItem({
  icon,
  children,
  href,
  className = "",
}: InfoItemProps) {
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  const baseClasses = "flex items-center gap-3 text-muted-foreground";

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} hover:text-primary transition-colors ${className}`}
      >
        {content}
      </a>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{content}</div>;
}
