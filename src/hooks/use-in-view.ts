"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to detect when element is in viewport
 * Uses Intersection Observer for better performance
 */
export function useInView(
  threshold: number = 0.1,
  root: Element | null = null,
  rootMargin?: string
) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once in view, stop observing
          observer.unobserve(element);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin]);

  return { ref, isInView };
}
