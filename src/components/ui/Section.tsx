import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
}

export function Section({ id, children, className, ariaLabelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative scroll-mt-24 border-t border-border/70 py-16 md:py-24",
        className,
      )}
    >
      {children}
    </section>
  );
}

interface SectionHeadingProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function headingId(id: string) {
  return `${id}-heading`;
}

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.24em] text-accent uppercase">
        <span aria-hidden="true">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
        {eyebrow}
      </p>
      <h2
        id={headingId(id)}
        className="mt-5 text-[1.9rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-4xl md:text-[2.6rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
