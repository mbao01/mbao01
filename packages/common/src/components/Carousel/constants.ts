import { cva } from "../../libs";

export const getCarouselContentClasses = cva("flex", {
  variants: {
    orientation: {
      horizontal: "-ml-4",
      vertical: "-mt-4 flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export const getCarouselItemClasses = cva("min-w-0 shrink-0 grow-0 basis-full", {
  variants: {
    orientation: {
      horizontal: "pl-4",
      vertical: "pt-4",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export const getCarouselNextClasses = cva(
  "absolute h-8 w-8 rounded-full p-0 disabled:bg-transparent",
  {
    variants: {
      orientation: {
        horizontal: "-right-12 top-1/2 -translate-y-1/2",
        vertical: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

export const getCarouselPreviousClasses = cva(
  "absolute h-8 w-8 rounded-full p-0 disabled:bg-transparent",
  {
    variants: {
      orientation: {
        horizontal: "-left-12 top-1/2 -translate-y-1/2",
        vertical: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);
