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
        className="pointer-events-none absolute right-[-8%] top-[8%] w-[480px] h-[480px] rounded-full opacity-15 dark:opacity-[0.08] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(258 78% 65%), transparent 65%)",
        }}
      />

      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Text Content ─────────────────────── */}
          <div className="order-2 lg:order-1 flex flex-col gap-5">
            {/* Label */}
            <p className="animate-fade-up-delay-1 font-mono text-sm font-semibold tracking-widest text-primary uppercase">
              {heroContent.greeting}
            </p>

            {/* Name */}
            <h1 className="animate-fade-up-delay-2 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.0] tracking-[-0.03em]">
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
            <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row gap-3 pt-1">
              <Button href="#projects" variant="primary" size="lg">
                {heroContent.cta.primary}
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                {heroContent.cta.secondary}
              </Button>
            </div>

            {/* Social Links */}
            <div className="animate-fade-up-delay-5 pt-1">
              <SocialLinks />
            </div>
          </div>

          {/* ── Right: Profile Glass Card ──────────────── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="animate-fade-up-delay-2 relative">
              {/* Glow ring */}
              <div
                aria-hidden
                className="absolute inset-[-2px] rounded-3xl blur-2xl opacity-25 dark:opacity-20 scale-[1.06]"
                style={{ background: "hsl(258 78% 65%)" }}
              />

              {/* Glass card wrapper */}
              <div className="relative glass-card p-2.5 rounded-3xl animate-float">
                {/* Inner highlight ring */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-[18px] overflow-hidden ring-1 ring-white/10">
                  <Image
                    src="/images/rushi-butani-profile.png"
                    alt="Rushi Butani — Frontend Developer"
                    width={448}
                    height={448}
                    priority
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Subtle inner gradient overlay on image */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
                  />
                </div>
              </div>

              {/* Floating location badge */}
              <div
                className="absolute -bottom-3 -left-4 glass-card px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg"
                aria-label={`Location: ${personalInfo.location}`}
              >
                <span className="text-base" aria-hidden>
                  📍
                </span>
                <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5
                   text-muted-foreground hover:text-primary transition-colors group"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
          scroll
        </span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
