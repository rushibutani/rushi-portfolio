"use client";

import { useInView } from "@/hooks/use-in-view";

type RevealDirection = "up" | "down" | "left" | "right";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before the animation starts after the element enters the viewport */
  delay?: number;
  /** Direction the element travels from hidden → visible */
  direction?: RevealDirection;
  /** Travel distance in px — default 44 */
  distance?: number;
}

function getHiddenTransform(
  direction: RevealDirection,
  distance: number,
): string {
  switch (direction) {
    case "up":
      return `translateY(${distance}px)`;
    case "down":
      return `translateY(-${distance}px)`;
    case "left":
      return `translateX(${distance}px)`;
    case "right":
      return `translateX(-${distance}px)`;
  }
}

/**
 * Scroll-triggered reveal wrapper.
 * Use multiple instances within a section for staggered entry animations.
 *
 * @example
 * <SectionReveal delay={0}>              label + heading  </SectionReveal>
 * <SectionReveal delay={150} direction="left">  left col  </SectionReveal>
 * <SectionReveal delay={300} direction="right"> right col </SectionReveal>
 */
export function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 44,
}: SectionRevealProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? "translate(0,0)"
          : getHiddenTransform(direction, distance),
        transition: `opacity 850ms cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 850ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
