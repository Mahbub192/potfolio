import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, headingId } from "@/components/ui/Section";
import { process } from "@/data/process";
import { containerCx } from "@/lib/utils";

export function Process() {
  return (
    <Section id="process" ariaLabelledBy={headingId("process")}>
      <div className={containerCx}>
        <SectionHeading
          id="process"
          index="06"
          eyebrow="Development Approach"
          title="From requirements to production."
          description="A straightforward process I follow for features, products and fixes alike."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.step}>
                <Reveal delay={index * 0.05} className="h-full">
                  <div className="group/step relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-soft">
                    <span
                      className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover/step:scale-x-100"
                      aria-hidden="true"
                    />

                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-muted font-mono text-[12.5px] font-medium text-accent">
                        {step.step}
                      </span>
                      <Icon
                        className="h-5 w-5 text-muted-foreground/50 transition-colors duration-300 group-hover/step:text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-6 text-[16.5px] font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
