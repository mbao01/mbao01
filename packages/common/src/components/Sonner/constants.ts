import { cva } from "../../libs";

export const getToastClasses = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-inherit",
  {
    variants: {
      variant: {
        accent: "bg-accent text-accent-content border-accent",
        default: "bg-default text-default-content border-default",
        error: "bg-error text-error-content border-error",
        ghost: "bg-ghost text-ghost-content border-transparent",
        info: "bg-info text-info-content border-info",
        neutral: "bg-neutral text-neutral-content border-neutral",
        primary: "bg-primary text-primary-content border-primary",
        secondary: "bg-secondary text-secondary-content border-secondary",
        success: "bg-success text-success-content border-success",
        warning: "bg-warning text-warning-content border-warning",
      },
      outline: {
        true: "border bg-default",
      },
    },
    compoundVariants: [
      { outline: true, variant: "accent", className: "text-accent" },
      { outline: true, variant: "default", className: "text-default" },
      { outline: true, variant: "error", className: "text-error" },
      { outline: true, variant: "ghost", className: "text-ghost" },
      { outline: true, variant: "info", className: "text-info" },
      { outline: true, variant: "neutral", className: "text-neutral" },
      { outline: true, variant: "primary", className: "text-primary" },
      { outline: true, variant: "secondary", className: "text-secondary" },
      { outline: true, variant: "success", className: "text-success" },
      { outline: true, variant: "warning", className: "text-warning" },
    ],
    defaultVariants: {
      variant: "default",
    },
  }
);
