import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CurrentFocus } from "@/components/sections/CurrentFocus";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Education } from "@/components/sections/Education";
import { DeveloperProfiles } from "@/components/sections/DeveloperProfiles";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <CurrentFocus />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <DeveloperProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
