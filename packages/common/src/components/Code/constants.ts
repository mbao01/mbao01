import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getCodeClasses = cva("font-mono", {
  variants: createVariants({
    inline: {
      true: "px-1.5 py-0.5 rounded bg-base-300 text-sm",
      false: "mockup-code overflow-x-auto",
    },
    colorScheme: {
      default: "",
      primary: "bg-primary/10 text-primary",
      secondary: "bg-secondary/10 text-secondary",
      accent: "bg-accent/10 text-accent",
    },
  }),
  compoundVariants: [
    {
      inline: false,
      colorScheme: undefined,
      className: "bg-base-200",
    },
  ],
  defaultVariants: {
    inline: true,
    colorScheme: "default",
  },
});
