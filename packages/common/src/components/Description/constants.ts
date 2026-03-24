import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getDescriptionClasses = cva("", {
  variants: createVariants({
    variant: {
      default: "",
      card: "rounded-lg border border-base-200 bg-base-100 p-4 shadow-sm",
      subtle: "rounded-md bg-base-200/40 p-3",
    },
    layout: {
      vertical: "flex flex-col",
      horizontal: "grid grid-cols-[auto_1fr] gap-x-6",
      inline: "flex flex-wrap gap-x-6 gap-y-1",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  }),
  defaultVariants: {
    variant: "default",
    layout: "vertical",
    size: "md",
  },
});

export const getDescriptionTermClasses = cva("shrink-0 font-medium text-base-content/60", {
  variants: createVariants({
    size: {
      sm: "py-1 text-xs",
      md: "py-2 text-sm",
      lg: "py-2.5 text-base",
    },
    layout: {
      vertical: "",
      horizontal: "py-2",
      inline: "py-0",
    },
  }),
  defaultVariants: {
    size: "md",
    layout: "vertical",
  },
});

export const getDescriptionDetailClasses = cva("text-base-content transition-colors duration-150", {
  variants: createVariants({
    size: {
      sm: "py-1 text-xs",
      md: "py-2 text-sm",
      lg: "py-2.5 text-base",
    },
    layout: {
      vertical: "not-last:mb-1",
      horizontal: "py-2",
      inline: "py-0 font-medium",
    },
    dividers: {
      true: "",
      false: "",
    },
  }),
  compoundVariants: [
    { layout: "vertical", dividers: true, className: "border-b border-base-200 last:border-0" },
    { layout: "horizontal", dividers: true, className: "border-b border-base-200" },
  ],
  defaultVariants: {
    size: "md",
    layout: "vertical",
    dividers: false,
  },
});

export const getDescriptionPairClasses = cva("transition-colors duration-150", {
  variants: createVariants({
    layout: {
      vertical: "",
      horizontal: "contents",
      inline: "flex items-baseline gap-1.5",
    },
    striped: {
      true: "",
      false: "",
    },
  }),
  compoundVariants: [
    { layout: "vertical", striped: true, className: "even:bg-base-200/30 px-2 -mx-2 rounded" },
    { layout: "horizontal", striped: true, className: "" },
  ],
  defaultVariants: {
    layout: "vertical",
    striped: false,
  },
});

export const getDescriptionGroupClasses = cva("flex gap-6", {
  variants: createVariants({
    direction: {
      row: "flex-row flex-wrap",
      column: "flex-col",
    },
    dividers: {
      true: "",
      false: "",
    },
  }),
  compoundVariants: [
    {
      direction: "column",
      dividers: true,
      className: "[&>*+*]:border-t [&>*+*]:border-base-200 [&>*+*]:pt-6",
    },
    {
      direction: "row",
      dividers: true,
      className:
        "[&>*+*]:border-l [&>*+*]:border-base-200 [&>*+*]:pl-6",
    },
  ],
  defaultVariants: {
    direction: "column",
    dividers: false,
  },
});

export const getDescriptionGroupItemClasses = cva("flex-1 min-w-0");
