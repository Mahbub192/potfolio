import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile, links, resumeFileName } from "@/data/profile";
import { navLinks } from "@/data/navigation";
import { useScrollLock, useScrollState } from "@/hooks/useScrollState";
import { cn, containerCx } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export function Navbar() {
  const { scrolled, activeId, activateSection } = useScrollState(sectionIds);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  function goToSection(href: string) {
    const id = href.slice(1);
    activateSection(id);
    window.history.pushState(null, "", href);
    document.getElementById(id)?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  useScrollLock(open);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav aria-label="Main" className={cn(containerCx, "flex h-16 items-center justify-between gap-4 md:h-[72px]")}>
        <a
          href="#home"
          className="group flex items-center gap-2.5 rounded-md"
          aria-label={`${profile.name} — back to top`}
          onClick={(event) => {
            event.preventDefault();
            goToSection("#home");
          }}
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-foreground text-[12px] font-semibold tracking-tight text-background transition-transform duration-200 group-hover:scale-[1.06]">
            {profile.initials}
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight">
              {profile.name}
            </span>
            <span className="mt-1 hidden text-[11px] font-medium tracking-wide text-muted-foreground sm:block">
              {profile.role}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active ? "true" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    goToSection(link.href);
                  }}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute inset-x-3 -bottom-[10px] h-[2px] rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div className="hidden items-center gap-2 sm:flex">
            {links.github ? (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                title="GitHub"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/60 text-muted-foreground transition-all duration-200 hover:-translate-y-px hover:border-border-strong hover:text-foreground"
              >
                <GithubIcon className="h-[17px] w-[17px]" />
              </a>
            ) : null}
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/60 text-muted-foreground transition-all duration-200 hover:-translate-y-px hover:border-border-strong hover:text-foreground"
            >
              <LinkedinIcon className="h-[17px] w-[17px]" />
            </a>
          </div>

          <Button
            href={links.resume}
            variant="outline"
            size="sm"
            download={resumeFileName}
            className="hidden md:inline-flex"
          >
            Resume
          </Button>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/60 text-foreground transition-colors duration-200 hover:border-border-strong lg:hidden"
          >
            {open ? (
              <X className="h-[18px] w-[18px]" aria-hidden="true" />
            ) : (
              <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div
              className={cn(
                containerCx,
                "max-h-[calc(100dvh-4rem)] overflow-y-auto py-5",
              )}
            >
              <ul className="flex flex-col">
                {navLinks.map((link, index) => {
                  const active = activeId === link.href.slice(1);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + index * 0.035, duration: 0.25 }}
                    >
                      <a
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={link.href}
                        onClick={(event) => {
                          event.preventDefault();
                          goToSection(link.href);
                          setOpen(false);
                        }}
                        aria-current={active ? "true" : undefined}
                        className={cn(
                          "flex items-center justify-between border-b border-border/70 py-3.5 text-[15px] font-medium transition-colors",
                          active ? "text-accent" : "text-foreground",
                        )}
                      >
                        {link.label}
                        <span className="font-mono text-[11px] text-muted-foreground">
                          0{index + 1}
                        </span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-5 flex flex-col gap-3">
                <Button
                  href={links.resume}
                  variant="outline"
                  download={resumeFileName}
                  className="w-full"
                >
                  Download Resume
                </Button>
                <div className="flex items-center gap-2">
                  {links.github ? (
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-border text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <GithubIcon className="h-4 w-4" /> GitHub
                    </a>
                  ) : null}
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-border text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <LinkedinIcon className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
