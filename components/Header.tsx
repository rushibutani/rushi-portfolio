"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "./Icons";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold text-primary font-mono hover:opacity-80 transition-opacity"
        >
          {"<RB />"}
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
              href="#contact"
              className="px-4 py-2 border border-primary text-primary rounded-md text-sm font-medium 
                         hover:bg-primary/10 transition-all duration-300"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-md transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-8 h-full">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary font-mono text-sm block mb-1">
                  0{index + 1}.
                </span>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-6 py-3 border border-primary text-primary rounded-md font-medium 
                         hover:bg-primary/10 transition-all duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
