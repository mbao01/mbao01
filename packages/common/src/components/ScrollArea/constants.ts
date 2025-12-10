import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getScrollAreaClasses = cva("relative overflow-hidden");

export const getScrollAreaScrollbarClasses = cva("flex touch-none select-none transition-colors", {
  variants: createVariants({
    orientation: {
      horizontal: "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      vertical: "h-full w-2.5 border-l border-l-transparent p-[1px]",
    },
  }),
});

export const getScrollAreaThumbClasses = cva("relative flex-1 rounded-full", {
  variants: createVariants({
    variant: {
      accent: "bg-accent",
      default: "bg-base-300",
      error: "bg-error",
      ghost: "bg-ghost",
      info: "bg-info",
      neutral: "bg-neutral",
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      warning: "bg-warning",
    },
  }),
});

export const getScrollAreaViewportClasses = cva("h-full w-full rounded-[inherit]");
