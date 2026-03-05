"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui";
import { navLinks, headerLogo } from "@/config/site";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection via a single shared IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Escape key + focus trap for mobile nav
  useEffect(() => {
    const dialog = menuDialogRef.current;
    if (!dialog || !isMobileMenuOpen) return;

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const getFocusable = () =>
      Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector));

    getFocusable()[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = getFocusable();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // On cleanup (menu closes): remove listener and return focus to trigger button
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "border-b border-border/40 py-3" : "bg-transparent py-5"
        }`}
        style={
          isScrolled
            ? {
                background: "hsl(var(--background) / 0.88)",
                backdropFilter: "blur(28px) saturate(1.6)",
                WebkitBackdropFilter: "blur(28px) saturate(1.6)",
              }
            : undefined
        }
      >
        <nav
          className="container max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="font-mono font-black text-xl tracking-tight text-gradient hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Home"
          >
            {headerLogo}
          </a>

          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link px-3.5 py-2 text-sm rounded-lg hover:bg-primary/5 transition-colors ${
                      isActive ? "nav-link-active" : ""
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a
              href="/RushiButani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-primary border border-primary/40 rounded-xl
                         hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-sm
                         active:scale-[0.97] transition-all duration-200"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-border/60
                         text-muted-foreground hover:text-primary hover:border-primary/40
                         active:scale-[0.95] transition-all duration-200"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-dialog"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

        <div
        ref={menuDialogRef}
        id="mobile-nav-dialog"
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{
          background: "hsl(var(--background) / 0.97)",
          backdropFilter: "blur(28px) saturate(1.4)",
          WebkitBackdropFilter: "blur(28px) saturate(1.4)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="h-full flex flex-col items-center justify-center gap-1 px-6 pt-16">
          {navLinks.map((link, index) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full max-w-xs text-center py-4 text-2xl font-bold
                           border-b border-border/25 last:border-0
                           transition-all duration-300 ${
                             isActive
                               ? "text-primary"
                               : "text-foreground hover:text-primary"
                           } ${
                             isMobileMenuOpen
                               ? "translate-y-0 opacity-100"
                               : "translate-y-6 opacity-0"
                           }`}
                style={{ transitionDelay: `${index * 55}ms` }}
              >
                {link.name}
              </a>
            );
          })}

          <a
            href="/RushiButani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-8 px-8 py-3.5 rounded-xl font-semibold text-sm
                       bg-gradient-to-r from-primary to-violet-500 text-primary-foreground
                       shadow-lg shadow-primary/25 hover:shadow-primary/40
                       active:scale-[0.97] transition-all duration-300 ${
                         isMobileMenuOpen
                           ? "translate-y-0 opacity-100"
                           : "translate-y-6 opacity-0"
                       }`}
            style={{ transitionDelay: `${navLinks.length * 55}ms` }}
          >
            View Resume
          </a>
        </div>
      </div>
    </>
  );
}
