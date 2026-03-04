import { Heart } from "@/components/ui/icons";
import { footerContent } from "@/config/site";

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
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1.5">
          {footerContent.text}{" "}
          <Heart size={13} className="text-primary fill-primary" /> by{" "}
          <span className="font-medium text-foreground">
            {footerContent.author}
          </span>
        </p>
        <p className="text-muted-foreground/60 text-xs font-mono">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
