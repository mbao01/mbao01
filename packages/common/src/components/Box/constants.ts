import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getBoxClasses = cva("", {
  variants: createVariants({
    style: {
      default: "",
      outlined: "border border-base-200",
      bordered: "border-[3px] border-double border-base-200",
      elevated: "border border-base-200 bg-base-100 shadow-md",
      ghost: "bg-base-200/40",
      gradient:
        "relative border-0 bg-base-100 before:absolute before:inset-0 before:-z-10 before:-m-[2px] before:rounded-[inherit] before:bg-gradient-to-br before:from-primary before:via-secondary before:to-accent",
      glass: "border border-white/20 bg-white/10 shadow-lg backdrop-blur-md",
      inset: "border border-base-200 bg-base-200/20 shadow-inner",
    },
    display: {
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
      flex: "flex",
      "inline-flex": "inline-flex",
      grid: "grid",
      "inline-grid": "inline-grid",
      hidden: "hidden",
    },
    position: {
      static: "static",
      fixed: "fixed",
      absolute: "absolute",
      relative: "relative",
      sticky: "sticky",
    },
    overflow: {
      auto: "overflow-auto",
      hidden: "overflow-hidden",
      visible: "overflow-visible",
      scroll: "overflow-scroll",
      "x-auto": "overflow-x-auto",
      "y-auto": "overflow-y-auto",
      "x-hidden": "overflow-x-hidden",
      "y-hidden": "overflow-y-hidden",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full",
    },
    padding: {
      none: "p-0",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      xl: "p-8",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
  }),
});
