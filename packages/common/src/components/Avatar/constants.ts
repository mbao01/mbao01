import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getAvatarClasses = cva("avatar", {
  variants: createVariants({
    size: {
      xs: "w-6 h-6",
      sm: "w-12 h-12",
      md: "w-16 h-16",
      lg: "w-24 h-24",
      xl: "w-32 h-32",
    },
    status: {
      online: "avatar-online",
      offline: "avatar-offline",
    },
  }),
});

const classesConfig = {
  variants: createVariants({
    variant: {
      accent: "bg-accent text-accent-content ring-accent",
      default: "bg-base-200 text-base-content ring-default",
      error: "bg-error text-error-content ring-error",
      ghost: "bg-ghost text-ghost-content ring-ghost",
      info: "bg-info text-info-content ring-info",
      neutral: "bg-neutral text-neutral-content ring-neutral",
      primary: "bg-primary text-primary-content ring-primary",
      secondary: "bg-secondary text-secondary-content ring-secondary",
      success: "bg-success text-success-content ring-success",
      warning: "bg-warning text-warning-content ring-warning",
    },
    shape: {
      round: "rounded-sm",
      circle: "rounded-full",
      hexagon: "mask mask-hexagon",
      triangle: "mask mask-triangle",
      television: "mask mask-squircle",
    },
    ring: {
      true: "ring-3 ring-offset-base-100 ring-offset-2",
    },
  }),
};

export const getAvatarImageClasses = cva("", classesConfig);

export const getAvatarFallbackClasses = cva("flex items-center justify-center w-full", {
  ...classesConfig,
  variants: createVariants({
    ...classesConfig.variants,
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  }),
});
