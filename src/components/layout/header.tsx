"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui";
import { navLinks, headerLogo } from "@/config/site";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="container max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-bold text-primary font-mono hover:opacity-80 transition-opacity"
          >
            {headerLogo}
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link text-sm font-medium">
                  <span className="text-primary font-mono text-xs mr-1">
                    0{index + 1}.
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/RushiButani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-primary text-primary rounded-md text-sm font-medium 
                           hover:bg-primary/10 transition-all duration-300"
              >
                Resume
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background/98 backdrop-blur-3xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ paddingTop: isScrolled ? "80px" : "96px" }}
      >
        <div className="overflow-y-auto">
          <ul className="flex flex-col pl-16 gap-6 pt-8 pb-8">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`transform transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm tracking-wider font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary font-mono text-xs mr-1">
                    0{index + 1}.
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
            <li
              className={`mt-2 transform transition-all duration-300 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${navLinks.length * 50}ms` }}
            >
              <a
                href="/RushiButani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 border border-primary text-primary rounded-md text-sm font-medium 
                           hover:bg-primary/10 transition-all duration-300 inline-block"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
