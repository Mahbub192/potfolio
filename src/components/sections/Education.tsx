import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, headingId } from "@/components/ui/Section";
import { education } from "@/data/education";
import { containerCx } from "@/lib/utils";

export function Education() {
  return (
    <Section id="education" ariaLabelledBy={headingId("education")}>
      <div className={containerCx}>
        <SectionHeading
          id="education"
          index="05"
          eyebrow="Education"
          title="Academic background."
        />

        <div
          className={
            education.length > 1 ? "mt-12 grid gap-4 md:grid-cols-2" : "mt-12 grid gap-4"
          }
        >
          {education.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-muted text-accent">
                    <GraduationCap className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-border bg-muted/70 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                    {entry.period}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {entry.degree}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{entry.institution}</p>

                <p className="mt-4 border-t border-border pt-4 text-[13.5px] leading-relaxed text-muted-foreground italic">
                  {entry.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
