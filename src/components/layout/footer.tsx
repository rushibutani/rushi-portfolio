import { Heart } from "@/components/ui/icons";
import { footerContent } from "@/config/site";

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 border-t border-border/50">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          {footerContent.text}{" "}
          <Heart size={14} className="text-primary fill-primary" /> by{" "}
          {footerContent.author}
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2 font-mono">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
