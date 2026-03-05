"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to detect when element enters the viewport.
 * rootMargin "0px 0px -60px 0px" triggers the animation when the element
 * is 60px inside the viewport bottom — so it’s well underway when the
 * user’s eye lands on it, not just starting.
 */
export function useInView(
  threshold: number = 0.1,
  root: Element | null = null,
  rootMargin: string = "0px 0px -60px 0px",
) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect user preference for reduced motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold, root, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin]);

  return { ref, isInView };
}
