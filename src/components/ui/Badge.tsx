import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "subtle" | "outline" | "accent";

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  title?: string;
}

const variants: Record<Variant, string> = {
  subtle:
    "border-border bg-muted/70 text-muted-foreground group-hover:border-border-strong",
  outline: "border-border bg-card text-foreground/80",
  accent:
    "border-accent/25 bg-accent/8 text-accent hover:border-accent/45",
};

export function Badge({ children, variant = "subtle", className, title }: BadgeProps) {
  return (
    <span
      title={title}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-[5px] text-[12.5px] leading-none font-medium tracking-tight transition-colors duration-200",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
