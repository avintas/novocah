import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "accent"
  | "outline"
  | "outlineOnDark"
  | "white";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-brand-foreground hover:bg-brand-hover focus-visible:ring-brand",
  accent:
    "bg-accent text-accent-foreground hover:bg-accent-hover focus-visible:ring-accent",
  outline:
    "border border-brand text-brand hover:bg-brand-muted focus-visible:ring-brand",
  outlineOnDark:
    "border border-white/40 text-white hover:bg-white/10 focus-visible:ring-white",
  white: "bg-white text-brand hover:bg-white/90 focus-visible:ring-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(base, variantStyles[variant], sizeStyles[size], className)}
    >
      {children}
    </Link>
  );
}
