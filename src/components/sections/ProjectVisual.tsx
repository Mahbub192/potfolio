import type { JSX, ReactNode } from "react";
import type { ProjectVisual as VisualKind } from "@/data/projects";
import { cn } from "@/lib/utils";

function Dots() {
  return (
    <span className="flex items-center gap-1.5">
      <span className="h-2 w-2 rounded-full bg-border-strong" />
      <span className="h-2 w-2 rounded-full bg-border-strong/70" />
      <span className="h-2 w-2 rounded-full bg-border-strong/50" />
    </span>
  );
}

function Bar({ className }: { className?: string }) {
  return <span className={cn("block h-1.5 rounded-full bg-border", className)} />;
}

function Browser({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-card shadow-soft">
      <div className="flex items-center gap-2 border-b border-border bg-muted/70 px-2.5 py-2">
        <Dots />
        <span className="ml-1 flex-1 truncate rounded bg-background px-2 py-[3px] font-mono text-[9px] text-muted-foreground">
          {url}
        </span>
      </div>
      <div className="p-2.5">{children}</div>
    </div>
  );
}

function BusinessMock() {
  const points = "0,52 26,44 52,48 78,30 104,36 130,18 156,24 182,8";
  return (
    <Browser url="app.internal/dashboard">
      <div className="flex gap-2">
        <div className="w-7 shrink-0 space-y-1.5 rounded border border-border bg-muted p-1.5">
          <span className="block h-2.5 w-2.5 rounded-sm bg-accent/60" />
          {["w", "w", "w", "w"].map((_, index) => (
            <Bar key={index} className="h-1 w-full" />
          ))}
        </div>

        <div className="min-w-0 flex-1 space-y-2">
          <div className="grid grid-cols-2 gap-1.5">
            {["Revenue", "Orders"].map((label) => (
              <div key={label} className="rounded border border-border bg-background p-1.5">
                <Bar className="h-1 w-9" />
                <div className="mt-1.5 h-2.5 w-10 rounded-sm bg-accent/40" />
              </div>
            ))}
          </div>

          <div className="rounded border border-border bg-background p-2">
            <div className="flex items-center justify-between">
              <Bar className="h-1 w-16" />
              <span className="rounded-full bg-accent/15 px-1.5 py-0.5 font-mono text-[7px] text-accent">
                30d
              </span>
            </div>
            <svg viewBox="0 0 182 56" className="mt-2 h-12 w-full" aria-hidden="true">
              <polyline
                points={points}
                fill="none"
                stroke="currentColor"
                className="text-accent"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points={points}
                fill="none"
                stroke="currentColor"
                className="text-border"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
            </svg>
          </div>

          <div className="flex items-center gap-2 rounded bg-muted px-2 py-1.5">
            <Bar className="h-1 flex-1" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
          </div>
        </div>
      </div>
    </Browser>
  );
}

function CommerceMock() {
  return (
    <Browser url="shop.example.com/products">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-accent/60" />
          <Bar className="h-1.5 w-16" />
          <span className="ml-auto rounded border border-border px-1.5 py-0.5 font-mono text-[8px] text-muted-foreground">
            Cart (2)
          </span>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {[0, 1, 2, 3].map((card) => (
            <div key={card} className="rounded border border-border bg-background p-1.5">
              <div className="h-9 rounded-sm bg-muted" />
              <Bar className="mt-1.5 h-1 w-full" />
              <div className="mt-1 flex items-center justify-between">
                <span className="h-1.5 w-6 rounded-sm bg-accent/50" />
                <span className="h-3 w-3 rounded-sm bg-border" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded bg-muted px-2 py-1.5">
          <Bar className="h-1 flex-1" />
          <span className="rounded-sm bg-accent/70 px-2 py-0.5 font-mono text-[7.5px] text-background">
            Checkout
          </span>
        </div>
      </div>
    </Browser>
  );
}

const mocks: Partial<Record<VisualKind, () => JSX.Element>> = {
  business: BusinessMock,
  commerce: CommerceMock,
};

interface ProjectVisualProps {
  kind: VisualKind;
  image?: string;
  alt?: string;
  featured?: boolean;
  className?: string;
}

export function ProjectVisual({
  kind,
  image,
  alt,
  featured = false,
  className,
}: ProjectVisualProps) {
  const Mock = image ? null : mocks[kind];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted/50",
        featured ? "h-full min-h-[300px]" : "h-[230px] sm:h-[250px]",
        className,
      )}
    >
      {image ? (
        <img
          src={image}
          alt={alt ?? ""}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <>
          <div className="dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
          {Mock ? (
            <div className="absolute inset-0 flex items-center justify-center p-5">
              <Mock />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
