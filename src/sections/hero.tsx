import Image from "next/image";
import { ArrowDown } from "@/components/ui/icons";
import { personalInfo, heroContent } from "@/config/site";
import SocialLinks from "@/components/layout/social-links";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 md:px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Decorative accent orb behind the profile card */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-5%] top-[10%] w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(262 83% 65%), transparent 70%)",
        }}
      />

      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Text Content ─────────────────────── */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            {/* Label */}
            <p className="animate-fade-up font-mono text-sm font-semibold tracking-widest text-primary uppercase">
              {heroContent.greeting}
            </p>

            {/* Name */}
            <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.0] tracking-tight">
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            {/* Headline */}
            <h2 className="animate-fade-up-delay-2 text-xl md:text-2xl font-semibold text-foreground leading-snug max-w-lg">
              {heroContent.subtitle}
            </h2>

            {/* Description */}
            <p className="animate-fade-up-delay-3 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              {heroContent.description}
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row gap-3">
              <Button href="#projects" variant="primary" size="lg">
                {heroContent.cta.primary}
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                {heroContent.cta.secondary}
              </Button>
            </div>

            {/* Social Links */}
            <div className="animate-fade-up-delay-5">
              <SocialLinks />
            </div>
          </div>

          {/* ── Right: Profile Glass Card ──────────────── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="animate-fade-up-delay-2 relative">
              {/* Glow ring */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30 dark:opacity-20 scale-105"
                style={{ background: "hsl(262 83% 65%)" }}
              />

              {/* Glass card wrapper */}
              <div className="relative glass-card p-3 rounded-3xl animate-float">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/rushi-butani-profile.png"
                    alt="Rushi Butani — Frontend Engineer"
                    width={448}
                    height={448}
                    priority
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground
                   hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
