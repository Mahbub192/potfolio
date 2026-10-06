import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, headingId } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";
import { containerCx } from "@/lib/utils";

export function Experience() {
  return (
    <Section id="experience" ariaLabelledBy={headingId("experience")}>
      <div className={containerCx}>
        <SectionHeading
          id="experience"
          index="02"
          eyebrow="Professional Experience"
          title="Where I've shipped software."
          description="Product engineering on systems used by patients, clinics and school communities."
        />

        <div className="relative mt-12">
          <span
            className="absolute top-4 bottom-4 left-[15px] hidden w-px bg-border sm:block"
            aria-hidden="true"
          />

          <ol className="space-y-6">
            {experience.map((job, index) => (
              <li key={job.id}>
                <Reveal delay={index * 0.06}>
                  <div className="relative sm:pl-12">
                    <span
                      className="absolute top-6 left-0 hidden h-8 w-8 place-items-center rounded-full border border-border bg-card sm:grid"
                      aria-hidden="true"
                    >
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>

                    <article className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift md:p-8">
                      <header className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          {job.companyUrl ? (
                            <a
                              href={job.companyUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="font-mono text-[11px] font-medium tracking-[0.2em] text-accent uppercase transition-colors hover:underline"
                            >
                              {job.company}
                            </a>
                          ) : (
                            <p className="font-mono text-[11px] font-medium tracking-[0.2em] text-accent uppercase">
                              {job.company}
                            </p>
                          )}
                          <h3 className="mt-2.5 text-xl font-semibold tracking-[-0.015em] md:text-2xl">
                            {job.role}
                          </h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          {job.current ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              Current
                            </span>
                          ) : null}
                          <span className="rounded-full border border-border bg-muted/70 px-3 py-1 font-mono text-[11px] tracking-wide text-muted-foreground">
                            {job.period}
                          </span>
                        </div>
                      </header>

                      <p className="mt-5 text-[14.5px] leading-relaxed text-muted-foreground sm:text-[15px]">
                        {job.summary}
                      </p>

                      <div className="mt-6">
                        <p className="font-mono text-[10.5px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                          {job.modulesLabel ?? "Modules worked on"}
                        </p>
                        <ul className="mt-2.5 flex flex-wrap gap-1.5">
                          {job.modules.map((module) => (
                            <li key={module}>
                              <Badge variant="outline">{module}</Badge>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 border-t border-border pt-6">
                        <p className="font-mono text-[10.5px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                          Responsibilities
                        </p>
                        <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                          {job.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[14px] leading-snug text-muted-foreground"
                            >
                              <span
                                className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 border-t border-border pt-5">
                        <p className="font-mono text-[10.5px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                          Technology
                        </p>
                        <ul className="mt-2.5 flex flex-wrap gap-1.5">
                          {job.stack.map((tech) => (
                            <li key={tech}>
                              <Badge>{tech}</Badge>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
