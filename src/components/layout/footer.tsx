export default function Footer() {
  return (
    <footer className="relative py-8 px-4 md:px-6 border-t border-border/40">
      {/* Subtle top glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), transparent)",
        }}
      />

      <div className="container max-w-6xl mx-auto text-center space-y-1.5">
        <p className="text-sm font-medium text-foreground">
          © {new Date().getFullYear()} Rushi Butani
        </p>
        <p className="text-xs text-muted-foreground">
          Frontend Developer • React • Next.js
        </p>
        <p className="text-xs text-muted-foreground/60 font-mono">
          Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
