import { cva } from "../../../libs";

export const getMultiSelectClasses = cva(
  "overflow-visible bg-transparent flex flex-col h-fit w-fit"
);

export const getMultiSelectTriggerClasses = cva(
  "flex items-center flex-wrap gap-1 h-fit px-1 py-2 rounded-md transition-all overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-0",
        accent: "border border-accent",
        error: "border border-error",
        ghost: "border border-ghost",
        info: "border border-info",
        primary: "border border-primary",
        secondary: "border border-secondary",
        success: "border border-success",
        warning: "border border-warning",
      },
      outline: {
        true: "border",
      },
      disabled: {
        true: "border-base-300",
      },
      wide: {
        true: "w-full",
      },
      size: {
        xs: "min-h-6 leading-relaxed px-2 py-1 text-xs",
        sm: "min-h-8 leading-8 px-3 py-1.5 text-sm",
        md: "min-h-12 leading-loose px-4 text-sm",
        lg: "min-h-16 leading-loose px-6 text-lg",
      },
    },
    compoundVariants: [
      {
        size: undefined,
        className: "min-h-10 px-4",
      },
      {
        variant: undefined,
        outline: true,
        className: "border-neutral-content",
      },
      {
        variant: "default",
        outline: true,
        className: "border-base-content",
      },
    ],
  }
);

export const getMultiSelectItemClasses = cva(
  "rounded-md cursor-pointer px-2 py-1 transition-colors flex justify-between",
  {
    variants: {
      included: {
        true: "opacity-50 cursor-default",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
      },
      size: {
        xs: "p-1 text-xs",
        sm: "px-1.5 text-sm",
        md: "px-2 text-sm",
        lg: "px-3 text-lg",
      },
    },
  }
);

export const getMultiSelectListClasses = cva(
  "p-2 flex flex-col gap-2 rounded-md scrollbar-thin scrollbar-track-transparent transition-colors scrollbar-thumb-muted-foreground dark:scrollbar-thumb-muted scrollbar-thumb-rounded-lg w-full absolute bg-background shadow-md z-10 border border-muted top-0",
  {
    variants: {
      size: {
        xs: "p-1",
        sm: "p-1.5",
        md: "p-2",
        lg: "p-3",
      },
    },
  }
);

export const getMultiSelectTagClasses = cva(
  "relative flex items-center gap-1 [&>span]:truncate [&>span]:max-w-24 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed focus-visible:outline-none",
  {
    variants: {
      size: {
        xs: "px-0.5 [&>span]:max-w-20 rounded",
        sm: "px-1",
        md: "px-1.5 [&>span]:max-w-28",
        lg: "px-2 [&>span]:max-w-32",
      },
    },
  }
);
