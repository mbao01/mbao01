import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getPanelClasses = cva(
  "flex flex-col border-r border-base-200 bg-base-100 transition-all duration-300 ease-in-out",
  {
    variants: createVariants({
      width: {
        sm: "w-64",
        md: "w-80",
        lg: "w-96",
      },
      collapsed: {
        true: "w-[70px]",
        false: "",
      },
    }),
    defaultVariants: {
      width: "md",
      collapsed: false,
    },
  }
);

export const getPanelHeaderClasses = cva(
  "flex items-center justify-between p-4 border-b border-base-200 h-16"
);

export const getPanelContentClasses = cva("flex-1 overflow-y-auto p-4");

export const getPanelFooterClasses = cva("p-4 border-t border-base-200");
