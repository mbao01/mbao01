import { cva } from "../../libs";

export const getToggleClasses = cva(
  "transition-colors disabled:pointer-events-none disabled:opacity-50 data-[state=off]:btn-ghost",
  {
    variants: {
      variant: {
        accent: "data-[state=on]:btn-accent",
        default: "data-[state=on]:btn-default",
        error: "data-[state=on]:btn-error",
        info: "data-[state=on]:btn-info",
        link: "data-[state=on]:btn-link",
        neutral: "data-[state=on]:btn-neutral",
        primary: "data-[state=on]:btn-primary",
        secondary: "data-[state=on]:btn-secondary",
        success: "data-[state=on]:btn-success",
        warning: "data-[state=on]:btn-warning",
      },
    },
  }
);
