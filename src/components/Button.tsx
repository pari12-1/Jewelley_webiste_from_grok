import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "gold" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-ivory border border-charcoal hover:bg-ink hover:-translate-y-px",
  secondary:
    "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory hover:-translate-y-px",
  gold: "bg-gold text-ivory border border-gold hover:bg-gold-light hover:-translate-y-px",
  ghost: "bg-transparent text-charcoal border-transparent hover:text-gold px-0",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-[0.7rem]",
  md: "px-7 py-3.5",
  lg: "px-8 py-4 text-[0.8rem]",
};

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-[0.08em] uppercase text-xs rounded-sm transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:not-disabled:scale-[0.96]";

type Common = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

type AppTo = "/" | "/collections" | "/about" | "/custom" | "/contact" | "/product/$id";

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  className,
  to,
  params,
}: Common & {
  to: AppTo;
  params?: { id: string };
}) {
  return (
    <Link
      to={to}
      params={params}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
