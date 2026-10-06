import { ArrowUpRight, Check, ExternalLink, Smartphone } from "lucide-react";
import { ProjectVisual } from "./ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, headingId } from "@/components/ui/Section";
import { projects, type Project } from "@/data/projects";
import { containerCx } from "@/lib/utils";

function ProjectContent({ project }: { project: Project }) {
  const hasLinks = project.links.length > 0;

  return (
    <div className="flex flex-1 flex-col p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
          {project.category}
        </p>
        <span
          className="font-mono text-[11px] text-muted-foreground"
          aria-hidden="true"
        >
          {project.index}
        </span>
      </div>

      <h3 className="mt-3 text-xl font-semibold tracking-[-0.015em] md:text-[1.4rem]">
        {project.name}
      </h3>

      {project.period ? (
        <p className="mt-1.5 font-mono text-[11px] tracking-wide text-muted-foreground">
          {project.period}
        </p>
      ) : null}

      <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-4 rounded-lg border border-border bg-muted/60 px-3.5 py-3">
        <p className="font-mono text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          {project.problemLabel ?? "Problem addressed"}
        </p>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/85">
          {project.problem}
        </p>
      </div>

      <div className="mt-4">
        <p className="font-mono text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Key features
        </p>
        <ul className="mt-2 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-[13.5px] leading-snug text-muted-foreground"
            >
              <Check
                className="mt-[3px] h-3.5 w-3.5 shrink-0 text-accent"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {project.contribution ? (
        <div className="mt-4 rounded-lg border border-border bg-muted/60 px-3.5 py-3">
          <p className="font-mono text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            My contribution
          </p>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {project.contribution.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[13.5px] leading-snug text-foreground/85"
              >
                <Check
                  className="mt-[3px] h-3.5 w-3.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${project.name} technologies`}>
        {project.tech.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-6">
        {hasLinks ? (
          project.links.map((link) => {
            const StoreIcon =
              link.kind === "play" || link.kind === "app" ? Smartphone : ExternalLink;
            return (
              <Button
                key={link.href}
                href={link.href}
                variant={link.kind === "site" || link.kind === "demo" ? "primary" : "outline"}
                size="sm"
              >
                <StoreIcon className="h-4 w-4" aria-hidden="true" />
                {link.label}
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Button>
            );
          })
        ) : (
          <p className="text-[13px] text-muted-foreground italic">
            Walkthrough available on request.
          </p>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const lead = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" ariaLabelledBy={headingId("projects")}>
      <div className={containerCx}>
        <SectionHeading
          id="projects"
          index="03"
          eyebrow="Featured Projects"
          title="Real applications, shipped to users."
          description="Shipped healthcare and education products across mobile and web — with the problem each one solves and what I contributed."
        />

        <div className="mt-12 space-y-6">
          {lead.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <article className="group grid overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift md:grid-cols-12">
                <ProjectVisual
                  kind={project.visual}
                  image={project.image}
                  alt={`${project.name} application screenshot`}
                  featured
                  className="border-b border-border md:col-span-5 md:border-r md:border-b-0"
                />
                <div className="flex md:col-span-7">
                  <ProjectContent project={project} />
                </div>
              </article>
            </Reveal>
          ))}

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.06} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift">
                  <ProjectVisual
                    kind={project.visual}
                    image={project.image}
                    alt={`${project.name} application screenshot`}
                    className="border-b border-border"
                  />
                  <ProjectContent project={project} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
