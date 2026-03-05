import type { ReactNode } from "react";

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
