import { ArrowDown } from "./Icons";
import { personalInfo } from "@/lib/data";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative px-0 md:px-6  pt-32 md:pt-20"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr,auto] gap-8 md:gap-12 items-center">
          {/* Profile Image - Shows first on mobile, second on desktop */}
          <div className="flex justify-center md:block animate-fade-up-delay-1 order-1 md:order-2">
            <div className="relative">
              <div className="relative w-64 h-64 md:w-96 md:h-96 grayscale lg:w-[22rem] lg:h-[22rem] rounded-2xl overflow-hidden">
                <img
                  src="/images/my-hero-img.png"
                  alt="Rushi Butani - Frontend Developer"
                  width="448"
                  height="448"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content - Shows second on mobile, first on desktop */}
          <div className="max-w-3xl order-2 md:order-1">
            <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up">
              Hi, my name is
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-up-delay-1">
              {personalInfo.name}.
            </h1>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 animate-fade-up-delay-2">
              I build things for the web.
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed animate-fade-up-delay-3">
              {personalInfo.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up-delay-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary/10 border border-primary 
                         text-primary rounded-md font-medium hover:bg-primary/20 transition-all duration-300"
              >
                Check out my work!
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground 
                         rounded-md font-medium hover:bg-primary/90 transition-all duration-300"
              >
                Get In Touch
              </a>
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
