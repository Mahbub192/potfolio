import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, headingId } from "@/components/ui/Section";
import { services } from "@/data/services";
import { containerCx } from "@/lib/utils";

export function Services() {
  return (
    <Section id="services" ariaLabelledBy={headingId("services")}>
      <div className={containerCx}>
        <SectionHeading
          id="services"
          index="05"
          eyebrow="What I Do"
          title="Where I add the most value."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const last = index === services.length - 1;
            return (
              <Reveal
                key={service.id}
                delay={index * 0.06}
                className={last ? "h-full sm:col-span-2 lg:col-span-1" : "h-full"}
              >
                <div className="group/service relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-soft">
                  <span
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover/service:scale-x-100"
                    aria-hidden="true"
                  />

                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-muted text-accent transition-colors duration-300 group-hover/service:border-accent/40">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-[15.5px] font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>

                  <ArrowRight
                    className="mt-5 h-4 w-4 text-muted-foreground/50 transition-all duration-300 group-hover/service:translate-x-1 group-hover/service:text-accent"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
