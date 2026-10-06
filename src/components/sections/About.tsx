import { Check } from "lucide-react";
import portrait from "@/assets/images/Mahbub_Ali_passport_600x600_under_100KB.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, headingId } from "@/components/ui/Section";
import { about } from "@/data/about";
import { cn, containerCx } from "@/lib/utils";

export function About() {
  return (
    <Section id="about" ariaLabelledBy={headingId("about")}>
      <div className={containerCx}>
        <SectionHeading
          id="about"
          index="01"
          eyebrow="About"
          title="Engineer focused on software that ships."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <p
                  className={cn(
                    "leading-relaxed",
                    index === 0
                      ? "text-[16.5px] text-foreground/90 sm:text-[17.5px]"
                      : "mt-5 text-[15px] text-muted-foreground sm:text-[15.5px]",
                  )}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {about.highlights.map((highlight, index) => (
                <Reveal key={highlight.title} delay={0.08 + index * 0.05}>
                  <div className="h-full rounded-xl border border-border/80 bg-transparent p-5 transition-colors duration-300 hover:border-border-strong">
                    <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-muted">
                      <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-[15px] font-semibold tracking-tight">
                      {highlight.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                      {highlight.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft lg:sticky lg:top-28">
                <img
                  src={portrait}
                  alt="Portrait of Mahbub Ali"
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover object-top"
                />

                <div className="p-6">
                  <p className="font-mono text-[11px] font-medium tracking-[0.24em] text-accent uppercase">
                    At a glance
                  </p>

                  <dl className="mt-5 divide-y divide-border">
                    {about.facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                      >
                        <dt className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                          {fact.label}
                        </dt>
                        <dd className="text-sm font-medium text-foreground sm:text-right">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
