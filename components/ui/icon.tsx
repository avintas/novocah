import { forwardRef } from "react";
import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type IconProps = { icon: LucideIcon } & Omit<
  React.ComponentPropsWithoutRef<LucideIcon>,
  "ref"
>;

const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  {
    icon: Lucide,
    className,
    size = 18,
    strokeWidth = 1.75,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-hidden": ariaHiddenProp,
    ...rest
  },
  ref,
) {
  const isMeaningful = Boolean(ariaLabel ?? ariaLabelledBy);
  const ariaHidden =
    ariaHiddenProp !== undefined ? ariaHiddenProp : isMeaningful ? false : true;

  return (
    <Lucide
      ref={ref}
      className={cn("shrink-0", className)}
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...rest}
    />
  );
});

export { Icon };
