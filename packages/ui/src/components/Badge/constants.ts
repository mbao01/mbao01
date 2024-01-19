import c from "clsx";
import type { BadgeSize, BadgeVariant } from "./types";

const BADGE_SIZE = {
  xs: c("badge-xs"),
  sm: c("badge-sm"),
  md: c("badge-md"),
  lg: c("badge-lg"),
} satisfies Record<BadgeSize, string>;

const BADGE_VARIANTS = {
  accent: c("badge-accent"),
  error: c("badge-error"),
  ghost: c("badge-ghost"),
  info: c("badge-info"),
  neutral: c("badge-neutral"),
  primary: c("badge-primary"),
  secondary: c("badge-secondary"),
  success: c("badge-success"),
  warning: c("badge-warning"),
} satisfies Record<BadgeVariant, string>;

export const getBadgeClasses = ({
  size,
  variant,
}: {
  size?: BadgeSize;
  variant?: BadgeVariant;
}) => {
  return c("badge", BADGE_VARIANTS[variant!], BADGE_SIZE[size!]);
};
