import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { HeroVisual } from "./HeroVisual";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { links, profile, resumeFileName } from "@/data/profile";
import { containerCx } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="hero-atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className={containerCx}>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="min-w-0 lg:col-span-7"
          >
            <motion.p
              variants={item}
              className="font-mono text-[12px] font-medium tracking-[0.22em] text-accent uppercase"
            >
              {profile.availability}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 text-[clamp(2.4rem,6vw,4.25rem)] leading-[0.95] font-semibold tracking-[-0.04em]"
            >
              {profile.name}
            </motion.p>

            <motion.h1
              id="home-heading"
              variants={item}
              className="mt-5 max-w-xl text-[1.35rem] leading-snug font-medium tracking-[-0.02em] text-foreground/90 sm:text-[1.65rem]"
            >
              {profile.headline}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground sm:text-[17px]"
            >
              {profile.supporting}
            </motion.p>

            <motion.ul
              variants={item}
              className="mt-7 flex flex-wrap gap-2"
              aria-label="Core technologies"
            >
              {profile.heroStack.map((tech) => (
                <li key={tech}>
                  <Badge>{tech}</Badge>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#projects" size="lg">
                View My Work
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Hire me
              </Button>
              <Button
                href={links.resume}
                variant="ghost"
                size="lg"
                download={resumeFileName}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Resume
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                Find me on
              </span>
              <SocialLinks />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="min-w-0 lg:col-span-5"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
