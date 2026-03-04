"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@/components/ui/icons";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setIsScrolling(false), 800);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={[
        // Layout
        "fixed bottom-6 right-6 z-50",
        "w-11 h-11 rounded-xl",
        // Visual — matches primary button in button.tsx
        "bg-gradient-to-br from-primary to-violet-500",
        "text-primary-foreground",
        "shadow-lg shadow-primary/30",
        // Border for subtle depth
        "ring-1 ring-primary/20",
        // Interactions
        "flex items-center justify-center",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40",
        "active:translate-y-0 active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        // Show / hide with fade + slide
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      ].join(" ")}
    >
      {/* Subtle inner glow overlay */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-xl bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-200"
      />

      {/* Arrow icon — animated when clicked */}
      <ArrowUp
        size={18}
        className={`relative transition-transform duration-300 ${
          isScrolling ? "-translate-y-0.5" : ""
        }`}
      />
    </button>
  );
}
