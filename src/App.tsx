import { MotionConfig } from "framer-motion";
import { useEffect } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { HireCTA } from "@/components/sections/HireCTA";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { ThemeProvider } from "@/hooks/useTheme";

export default function App() {
  /**
   * Support direct deep links (e.g. /#projects): the browser tries to scroll
   * before React mounts, so we resolve the hash once the sections exist.
   */
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const target = document.getElementById(hash);
    if (target) target.scrollIntoView({ block: "start", behavior: "instant" });
  }, []);

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen bg-background text-foreground">
          <div className="page-grain pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          <Navbar />

          <main id="main-content">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <HireCTA />
            <Contact />
          </main>

          <Footer />
          <WhatsAppFloat />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}
