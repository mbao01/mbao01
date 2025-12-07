import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getSheetClasses = cva(
  "fixed z-50 bg-base-100 shadow-xl transition-transform duration-300 ease-in-out",
  {
    variants: createVariants({
      side: {
        top: "top-0 left-0 right-0 border-b border-base-200",
        bottom: "bottom-0 left-0 right-0 border-t border-base-200",
        left: "top-0 bottom-0 left-0 border-r border-base-200 h-full",
        right: "top-0 bottom-0 right-0 border-l border-base-200 h-full",
      },
      open: {
        true: "translate-x-0 translate-y-0",
        false: "invisible", // Base invisible state, transforms handled by compound variants
      },
    }),
    compoundVariants: [
      { side: "top", open: false, class: "-translate-y-full" },
      { side: "bottom", open: false, class: "translate-y-full" },
      { side: "left", open: false, class: "-translate-x-full" },
      { side: "right", open: false, class: "translate-x-full" },
    ],
    defaultVariants: {
      side: "right",
      open: false,
    },
  }
);

export const getSheetOverlayClasses = cva(
  "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
  {
    variants: createVariants({
      open: {
        true: "opacity-100",
        false: "opacity-0 pointer-events-none",
      },
    }),
    defaultVariants: {
      open: false,
    },
  }
);
