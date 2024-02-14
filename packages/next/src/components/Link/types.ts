import type { LinkProps as NextLinkProps } from "next/link";

export type LinkVariant =
  | "default"
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "link"
  | "info"
  | "success"
  | "warning"
  | "error";

export type LinkProps<T> = NextLinkProps<T> & {
  hover?: boolean;
  variant?: LinkVariant;
};
