import { cva } from "../../libs";

export const getAvatarClasses = cva("avatar", {
  variants: {
    size: {
      4: "w-4 h-4",
      8: "w-8 h-8",
      12: "w-12 h-12",
      16: "w-16 h-16",
      24: "w-24 h-24",
      32: "w-32 h-32",
      48: "w-48 h-48",
      64: "w-64 h-64",
    },
    status: {
      online: "online",
      offline: "offline",
    },
  },
});

const classesConfig = {
  variants: {
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
      round: "rounded",
      circle: "rounded-full",
      hexagon: "mask mask-hexagon",
      triangle: "mask mask-triangle",
      television: "mask mask-squircle",
    },
    ring: {
      true: "ring ring-offset-base-100 ring-offset-2",
    },
  },
};

export const getAvatarImageClasses = cva("", classesConfig);

export const getAvatarFallbackClasses = cva(
  "flex items-center justify-center w-full",
  {
    ...classesConfig,
    variants: {
      ...classesConfig.variants,
      size: {
        4: "text-[4px]",
        8: "text-base",
        12: "text-lg",
        16: "text-xl",
        24: "text-2xl",
        32: "text-3xl",
        48: "text-4xl",
        64: "text-5xl",
      },
    },
  }
);
