import type { DateFormat, DatetimeFormatDefaults, InputPlaceholders, TimeFormat } from "./types";
import { cva } from "../../libs";

export const DEFAULTS = [
  ["days", "months", "years"],
  ["hours", "minutes", "am/pm"],
] as DatetimeFormatDefaults;

export const INPUT_PLACEHOLDERS: InputPlaceholders = {
  months: "MM",
  days: "DD",
  years: "YYYY",
  hours: "HH",
  minutes: "MM",
  seconds: "SS",
  "am/pm": "AM/PM",
};

export const getDatetimeGridClasses = cva(
  "flex items-center w-fit p-1 rounded-md rounded-md transition-all duration-100 gap-1 selection:bg-transparent selection:text-base-content",
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
        xs: "h-6 leading-relaxed px-2 text-xs",
        sm: "h-8 leading-8 px-3 text-sm",
        md: "h-12 leading-loose px-4 text-sm",
        lg: "h-16 leading-loose px-5 text-lg",
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

export const getDatetimeSeparatorClasses = cva("text-xs text-gray-400");

export const getDatetimeInputClasses = cva(
  "min-w-8 p-1 inline tabular-nums h-fit border-none outline-none select-none content-box caret-transparent rounded-sm min-w-8 text-center focus:bg-base-content/20 focus-visible:ring-0 focus-visible:outline-none",
  {
    variants: {
      size: {
        xs: "max-h-4",
        sm: "max-h-6",
        md: "",
        lg: "min-w-8",
      },
      unit: {
        years: "min-w-12",
        "am/pm": "bg-base-content/15",
      } as Record<DateFormat | TimeFormat, string>,
    },
    compoundVariants: [
      {
        size: "lg",
        unit: "years",
        className: "min-w-14",
      },
      {
        size: "lg",
        unit: "am/pm",
        className: "min-w-10",
      },
    ],
  }
);
