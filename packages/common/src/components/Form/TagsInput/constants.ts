import { cva } from "../../../libs";

export const SPLITTER_REGEX = /[\n#?=&\t,./-]+/; // used for identifying the split char and used with pasting

export const FORMATTING_REGEX = /^[^a-zA-Z0-9]*|[^a-zA-Z0-9]*$/g; // used for formatting the pasted element for the correct value format to be added

export const getTagsClasses = cva(
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
        lg: "min-h-16 leading-loose px-5 text-lg",
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

export const getTagClasses = cva(
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

export const getTagsInputClasses = cva(
  "outline-0 border-none h-5 min-w-fit flex-1 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-0 placeholder:text-muted-foreground px-1",
  {
    variants: {
      size: {
        xs: "h-3 leading-relaxed text-xs",
        sm: "h-4 leading-8 text-sm",
        md: "h-5 text-sm",
        lg: "h-6 text-lg",
      },
    },
  }
);

export const getTagDeleteClasses = cva(
  "transition-all duration-300 disabled:cursor-not-allowed [&:hover:not(:disabled)]:text-error"
);
