import { motion } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  /** true = download with URL filename, string = custom filename */
  download?: boolean | string;
  label?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const base =
  "group/btn inline-flex select-none items-center justify-center gap-2 rounded-lg font-medium tracking-tight whitespace-nowrap transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:bg-foreground/85",
  outline:
    "border border-border-strong bg-background text-foreground hover:bg-muted",
  ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  download = false,
  label,
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { y: 0, scale: 0.985 },
    transition: { type: "spring" as const, stiffness: 520, damping: 32 },
  };

  if (href) {
    const external = isExternal(href);
    return (
      <motion.a
        href={href}
        className={classes}
        aria-label={label}
        download={download || undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        onClick={onClick}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
