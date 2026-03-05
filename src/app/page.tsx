import Hero from "@/sections/hero";
import About from "@/sections/about";
import Experience from "@/sections/experience";
import Projects from "@/sections/projects";
import Skills from "@/sections/skills";
import Contact from "@/sections/contact";
import TechStrip from "@/components/ui/tech-strip";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
