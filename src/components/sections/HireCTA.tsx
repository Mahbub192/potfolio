import { ArrowRight, MessageCircle } from "lucide-react";
import portrait from "@/assets/images/Mahbub_Ali_passport_600x600_under_100KB.jpg";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { links, profile, resumeFileName, whatsappChatUrl } from "@/data/profile";
import { containerCx } from "@/lib/utils";

export function HireCTA() {
  return (
    <section
      id="hire"
      aria-labelledby="hire-heading"
      className="relative overflow-hidden border-t border-border/70 py-16 md:py-20"
    >
      <div className="hire-band pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className={containerCx}>
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card/80 px-6 py-10 shadow-lift backdrop-blur md:px-10 md:py-12 lg:px-12 lg:py-14">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <p className="font-mono text-[11px] font-medium tracking-[0.22em] text-accent uppercase">
                  Available for hire
                </p>
                <h2
                  id="hire-heading"
                  className="mt-4 text-[1.75rem] leading-tight font-semibold tracking-[-0.03em] md:text-[2.35rem]"
                >
                  Looking for a Software Engineer who ships?
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
                  {profile.name} builds production web and mobile products — healthcare,
                  education, e-commerce, business tools and other custom software with React,
                  React Native, Angular, TypeScript, Node.js, Express.js, .NET Web API, REST
                  APIs, MySQL, MongoDB, Firebase and Expo. Open to full-time and remote roles.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="#contact" size="lg">
                    Start a conversation
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Button>
                  {links.whatsapp ? (
                    <Button href={whatsappChatUrl()} variant="outline" size="lg">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      WhatsApp
                    </Button>
                  ) : null}
                  <Button
                    href={links.resume}
                    variant="ghost"
                    size="lg"
                    download={resumeFileName}
                  >
                    Resume
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-border bg-muted shadow-soft sm:max-w-[320px] lg:ml-auto lg:mr-0">
                  <img
                    src={portrait}
                    alt={`${profile.name} — available for hire`}
                    width={600}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent px-4 pt-16 pb-4">
                    <p className="flex items-center gap-2 text-[13px] font-semibold tracking-tight">
                      <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-500" />
                      Available for hire
                    </p>
                    <p className="mt-1 font-mono text-[10.5px] tracking-wide text-muted-foreground uppercase">
                      {profile.role} · Full-time / Remote
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
