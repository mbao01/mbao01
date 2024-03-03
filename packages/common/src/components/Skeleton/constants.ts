import { cva } from "../../helpers";

export const getSkeletonClasses = cva("skeleton", {
  variants: {
    variant: { pulse: "animate-pulse" },
    width: {
      2: "w-2",
      4: "w-4",
      8: "w-8",
      12: "w-12",
      16: "w-16",
      24: "w-24",
      32: "w-32",
      48: "w-48",
      64: "w-64",
      full: "w-full",
    },
    height: {
      2: "h-2",
      4: "h-4",
      8: "h-8",
      12: "h-12",
      16: "h-16",
      24: "h-24",
      32: "h-32",
      48: "h-48",
      64: "h-64",
      full: "h-full",
    },
    round: {
      true: "rounded-full",
      false: "rounded-md",
    },
  },
  defaultVariants: {
    width: "full",
    height: 4,
    round: false,
  },
});
