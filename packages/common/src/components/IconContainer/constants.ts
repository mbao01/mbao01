import { cva } from "../../libs";
import { createVariants } from "../../utilities";

const variants = createVariants({
  variant: {
    accent: "bg-accent text-accent-content",
    default: "bg-base-200 text-base-content",
    error: "bg-error text-error-content",
    ghost: "bg-ghost text-ghost-content",
    info: "bg-info text-info-content",
    neutral: "bg-neutral text-neutral-content",
    primary: "bg-primary text-primary-content",
    secondary: "bg-secondary text-secondary-content",
    success: "bg-success text-success-content",
    warning: "bg-warning text-warning-content",
  },
  size: {
    xs: "size-6 text-xs",
    sm: "size-8 text-sm",
    md: "size-10 text-base",
    lg: "size-12 text-lg",
    xl: "size-16 text-2xl",
  },
  shape: {
    circle: "rounded-full",
    square: "rounded-none",
    rounded: "rounded-lg",
  },
  shadow: {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  },
  outline: {
    true: "bg-transparent ring-2 ring-offset-2 ring-offset-base-100",
  },
  soft: {
    true: "",
  },
  raised: {
    true: "ring-3 ring-base-200 bg-base-200 [&>div]:bg-base-100 [&>div]:size-[inherit] [&>div]:rounded-[inherit]",
  },
});

export const getIconRaisedContainerClasses = cva(
  "inline-flex items-center justify-center shrink-0 [&>svg]:size-[1em]",
  {
    variants: createVariants({
      variant: {
        accent: "bg-accent text-accent",
        default: "bg-base-200 text-base",
        error: "bg-error text-error",
        ghost: "bg-ghost text-ghost",
        info: "bg-info text-info",
        neutral: "bg-neutral text-neutral",
        primary: "bg-primary text-primary",
        secondary: "bg-secondary text-secondary",
        success: "bg-success text-success",
        warning: "bg-warning text-warning",
      },
      size: variants.size,
      shadow: variants.shadow,
      raised: {
        true: "",
      },
    }),
    defaultVariants: {
      variant: "default",
      size: "md",
      shadow: "md",
    },
  }
);

export const getIconContainerClasses = cva(
  "inline-flex items-center justify-center shrink-0 [&>svg]:size-[1em]",
  {
    variants,
    compoundVariants: [
      // soft: pastel bg with colored icon
      { variant: "accent", soft: true, class: "bg-accent/10 text-accent" },
      { variant: "default", soft: true, class: "bg-base-200/50 text-base-content" },
      { variant: "error", soft: true, class: "bg-error/10 text-error" },
      { variant: "ghost", soft: true, class: "bg-base-100 text-base-content" },
      { variant: "info", soft: true, class: "bg-info/10 text-info" },
      { variant: "neutral", soft: true, class: "bg-neutral/10 text-neutral" },
      { variant: "primary", soft: true, class: "bg-primary/10 text-primary" },
      { variant: "secondary", soft: true, class: "bg-secondary/10 text-secondary" },
      { variant: "success", soft: true, class: "bg-success/10 text-success" },
      { variant: "warning", soft: true, class: "bg-warning/10 text-warning" },
      // outline: variant dictates ring color and icon color
      { variant: "accent", outline: true, class: "ring-accent text-accent" },
      { variant: "default", outline: true, class: "ring-base-300 text-base-content" },
      { variant: "error", outline: true, class: "ring-error text-error" },
      { variant: "ghost", outline: true, class: "ring-base-300 text-base-content" },
      { variant: "info", outline: true, class: "ring-info text-info" },
      { variant: "neutral", outline: true, class: "ring-neutral text-neutral" },
      { variant: "primary", outline: true, class: "ring-primary text-primary" },
      { variant: "secondary", outline: true, class: "ring-secondary text-secondary" },
      { variant: "success", outline: true, class: "ring-success text-success" },
      { variant: "warning", outline: true, class: "ring-warning text-warning" },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      shape: "circle",
      shadow: "md",
    },
  }
);
