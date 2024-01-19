import type { To, LinkProps as RouterLinkProps } from "react-router-dom";

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

export type LinkProps = Omit<RouterLinkProps, "to"> & {
  href: To;
  hover?: boolean;
  variant?: LinkVariant;
};
