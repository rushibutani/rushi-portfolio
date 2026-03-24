"use client";

import type { ReactNode } from "react";
import { trackEvent, type AnalyticsProperties } from "@/lib/analytics";

interface TrackedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  ariaLabel?: string;
  analyticsEvent: string;
  analyticsProperties?: AnalyticsProperties;
}

export function TrackedLink({
  href,
  children,
  className,
  target,
  rel,
  ariaLabel,
  analyticsEvent,
  analyticsProperties,
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={() => trackEvent(analyticsEvent, analyticsProperties)}
    >
      {children}
    </a>
  );
}
