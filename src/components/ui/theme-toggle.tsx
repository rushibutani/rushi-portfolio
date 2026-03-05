"use client";

import { useEffect, useRef, useState } from "react";
import { Sun, Moon } from "./icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
  // Increment to re-key the icon span → re-triggers the CSS spin animation
  const [iconTick, setIconTick] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = stored || "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    // Pin the ripple origin to the exact center of the toggle button
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--theme-toggle-x",
        `${rect.left + rect.width / 2}px`,
      );
      document.documentElement.style.setProperty(
        "--theme-toggle-y",
        `${rect.top + rect.height / 2}px`,
      );
    }

    const applyTheme = () => {
      setTheme(newTheme);
      setIconTick((t) => t + 1);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    // View Transitions API — circular reveal from button position
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      // Suppress CSS bg/color transitions so they don't fight the clip-path reveal
      document.documentElement.classList.add("vt-running");

      const vt = (
        document as Document & {
          startViewTransition: (cb: () => void) => { finished: Promise<void> };
        }
      ).startViewTransition(applyTheme);

      // Re-enable transitions once the view transition is fully done
      vt.finished.finally(() => {
        document.documentElement.classList.remove("vt-running");
      });
    } else {
      // Graceful fallback: no View Transitions API support
      applyTheme();
    }
  };

  if (!mounted) {
    return (
      <button
        className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground"
        aria-label="Toggle theme"
        aria-hidden="true"
        tabIndex={-1}
      >
        <Sun size={18} />
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground
                 hover:text-primary hover:bg-primary/8 active:scale-[0.88]
                 transition-colors duration-200"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* key change re-mounts the span, restarting the @keyframes spin */}
      <span key={iconTick} className="theme-icon">
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </span>
    </button>
  );
}
