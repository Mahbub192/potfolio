import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, headingId } from "@/components/ui/Section";
import { skillGroups } from "@/data/skills";
import { containerCx } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="skills" ariaLabelledBy={headingId("skills")}>
      <div className={containerCx}>
        <SectionHeading
          id="skills"
          index="04"
          eyebrow="Technical Skills"
          title="The stack I use day to day."
          description="Grouped by area, taken from real project work — no invented proficiency percentages."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal
                key={group.id}
                delay={index * 0.05}
                className={group.wide ? "sm:col-span-2" : undefined}
              >
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-muted text-accent">
                      <Icon className="h-[17px] w-[17px]" aria-hidden="true" />
                    </span>
                    <h3 className="text-[15px] font-semibold tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[12.5px] leading-none font-medium tracking-tight text-muted-foreground transition-colors duration-200 hover:border-border-strong hover:text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
