import { cva } from "../../../libs";

export const getSelectTriggerClasses = cva(
  "select flex items-center justify-between rounded-md text-sm text-left disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 transition-all duration-100",
  {
    variants: {
      variant: {
        default:
          "border border-base-content/20 [&:has(input:focus)]:border-[currentColor] [&:has(input:focus-within)]:border-[currentColor] [&:has(input:focus)]:outline-ghost [&:has(input:focus-within)]:outline-ghost",
        primary: "select-primary",
        secondary: "select-secondary",
        accent: "select-accent",
        success: "select-success",
        warning: "select-warning",
        info: "select-info",
        error: "select-error",
        ghost: "select-ghost bg-transparent",
      },
      outline: {
        true: "border border-input",
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
      {
        variant: undefined,
        outline: true,
        className: "border-base-content/20",
      },
    ],
  }
);

export const getSelectItemClasses = cva(
  "relative flex w-full cursor-pointer select-none items-center focus:bg-base-300 focus:text-base-content rounded-xs py-1.5 pl-2 pr-8 text-sm outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "focus:bg-transparent focus:text-base-content",
        primary: "focus:bg-primary focus:text-primary-content",
        secondary: "focus:bg-secondary focus:text-secondary-content",
        accent: "focus:bg-accent focus:text-accent-content",
        success: "focus:bg-success focus:text-success-content",
        warning: "focus:bg-warning focus:text-warning-content",
        info: "focus:bg-info focus:text-info-content",
        error: "focus:bg-error focus:text-error-content",
        ghost: "",
      },
    },
  }
);

export const getSelectLabelClasses = cva("px-2 py-1.5 text-sm font-semibold");

export const getSelectValueClasses = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
  },
});

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

export const getFloatingLabelClasses = cva("floating-label");

export const getLabelForSelectClasses = cva("", {
  variants: {
    floating: {
      true: "",
      false: "label",
    },
  },
  compoundVariants: [
    {
      floating: undefined,
      className: "label",
    },
  ],
});
