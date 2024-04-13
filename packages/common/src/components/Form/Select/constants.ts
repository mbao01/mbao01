import { cva } from "../../../libs";

export const getSelectTriggerClasses = cva(
  "select flex items-center justify-between rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
  {
    variants: {
      variant: {
        primary: "select-primary",
        secondary: "select-secondary",
        accent: "select-accent",
        success: "select-success",
        warning: "select-warning",
        info: "select-info",
        error: "select-error",
      },
      outline: {
        true: "select-bordered border border-input",
      },
      wide: {
        true: "w-full",
      },
      size: {
        xs: "select-xs",
        sm: "select-sm",
        md: "select-md",
        lg: "select-lg",
      },
    },
    compoundVariants: [
      {
        size: undefined,
        className: "min-h-fit h-10",
      },
    ],
  }
);

export const getSelectItemClasses = cva(
  "relative flex w-full cursor-pointer select-none items-center focus:bg-neutral focus:text-neutral-content rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        primary: "focus:bg-primary focus:text-primary-content",
        secondary: "focus:bg-secondary focus:text-secondary-content",
        accent: "focus:bg-accent focus:text-accent-content",
        success: "focus:bg-success focus:text-success-content",
        warning: "focus:bg-warning focus:text-warning-content",
        info: "focus:bg-info focus:text-info-content",
        error: "focus:bg-error focus:text-error-content",
      },
    },
  }
);

export const getSelectLabelClasses = cva("px-2 py-1.5 text-sm font-semibold");

export const getSelectSeparatorClasses = cva("-mx-1 my-1 h-px bg-muted");

export const getSelectContentClasses = cva(
  "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-base-100 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      position: {
        popper:
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        "item-aligned": "",
      },
    },
  }
);

export const getSelectViewportClasses = cva("p-1", {
  variants: {
    position: {
      popper:
        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
      "item-aligned": "",
    },
  },
});
