import Image from "next/image";
import { ArrowDown } from "@/components/ui/icons";
import { personalInfo, heroContent } from "@/config/site";
import SocialLinks from "@/components/layout/social-links";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative px-4 md:px-6 pt-32 md:pt-25 lg:pt-20"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr,auto] gap-8 md:gap-12 items-center">
          {/* Profile Image - Shows first on mobile, second on desktop */}
          <div className="flex justify-center md:block animate-fade-up-delay-1 order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[22rem] lg:h-[22rem] rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-200">
              <Image
                src="/images/rushi-butani-profile.png"
                alt="Rushi Butani - Frontend Developer"
                width={448}
                height={448}
                priority
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Text Content - Shows second on mobile, first on desktop */}
          <div className="max-w-3xl order-2 md:order-1">
            <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up font-semibold tracking-wider">
              {heroContent.greeting}
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up-delay-1">
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6 animate-fade-up-delay-2 leading-tight">
              {heroContent.subtitle}
            </h2>

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-8 leading-relaxed animate-fade-up-delay-3">
              {heroContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up-delay-4">
              <Button href="#projects" variant="outline" size="lg">
                {heroContent.cta.primary}
              </Button>
              <Button href="#contact" variant="primary" size="lg">
                {heroContent.cta.secondary}
              </Button>
            </div>

            <div className="animate-fade-up-delay-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground 
                   hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
