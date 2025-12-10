import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getToggleClasses = cva(
  "transition-colors disabled:pointer-events-none disabled:opacity-50 data-[state=off]:btn-ghost",
  {
    variants: createVariants({
      link: {
        true: "data-[state=on]:btn-link",
      },
      variant: {
        accent: "data-[state=on]:btn-accent",
        default: "data-[state=on]:btn-default",
        error: "data-[state=on]:btn-error",
        info: "data-[state=on]:btn-info",
        neutral: "data-[state=on]:btn-neutral",
        primary: "data-[state=on]:btn-primary",
        secondary: "data-[state=on]:btn-secondary",
        success: "data-[state=on]:btn-success",
        warning: "data-[state=on]:btn-warning",
      },
      outline: {
        true: "data-[state=on]:btn-outline",
      },
    }),
    compoundVariants: [
      {
        outline: true,
        variant: "accent",
        className: "data-[state=on]:border-accent",
      },
      {
        outline: true,
        variant: "default",
        className: "data-[state=on]:border-default",
      },
      {
        outline: true,
        variant: "error",
        className: "data-[state=on]:border-error",
      },
      {
        outline: true,
        variant: "info",
        className: "data-[state=on]:border-info",
      },
      {
        outline: true,
        variant: "neutral",
        className: "data-[state=on]:border-neutral",
      },
      {
        outline: true,
        variant: "primary",
        className: "data-[state=on]:border-primary",
      },
      {
        outline: true,
        variant: "secondary",
        className: "data-[state=on]:border-secondary",
      },
      {
        outline: true,
        variant: "success",
        className: "data-[state=on]:border-success",
      },
      {
        outline: true,
        variant: "warning",
        className: "data-[state=on]:border-warning",
      },
    ],
  }
);
