"use client";

import { useInView } from "@/hooks/use-in-view";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Client component wrapper for scroll-triggered animations
 * Wraps server components to add reveal animations on scroll
 */
export function SectionReveal({
  children,
  className = "",
}: SectionRevealProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
