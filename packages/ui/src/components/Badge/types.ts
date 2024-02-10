export type BadgeSize = "xs" | "sm" | "md" | "lg";

export type BadgeVariant =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "ghost"
  | "info"
  | "success"
  | "warning"
  | "error";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: BadgeSize;
  outline?: boolean;
  variant?: BadgeVariant;
};
