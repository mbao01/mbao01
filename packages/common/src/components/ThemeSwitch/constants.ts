import { cva } from "../../libs";

export const getThemeSwitchClasses = cva("", {
  variants: {
    swap: {
      false:
        "flex flex-row items-center justify-around h-6 w-18 border border-base-content/10 rounded-full",
    },
  },
});

export const getThemeSwitchIconClasses = cva(
  "cursor-pointer text-base-content/40 hover:text-base-content transition-colors",
  {
    variants: {
      isActive: {
        true: "rounded-[9999px] outline outline-1 outline-base-content/10",
      },
      swap: {
        false: "flex items-center justify-center w-6 h-full",
      },
    },
    compoundVariants: [
      {
        swap: false,
        isActive: true,
        className: "text-base-content",
      },
      {
        swap: true,
        isActive: false,
        className: "text-base-content",
      },
    ],
  }
);
