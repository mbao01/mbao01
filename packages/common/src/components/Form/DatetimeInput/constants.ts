import { cva } from "../../../libs";

export const DEFAULT_SIZE = 96;

export const getDatetimeCalendarTriggerClasses = cva(
  `size-8 rounded-md p-1 flex items-center justify-center font-normal
  outline-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-base-content focus-visible:ring-inset
  `,
  {
    variants: {
      size: {
        xs: "size-4 p-0 rounded-xs",
        sm: "size-6",
        md: "size-9",
        lg: "size-10",
      },
    },
  }
);

export const getDatetimeCalendarIconClasses = cva("", {
  variants: {
    size: {
      xs: "size-3",
      sm: "size-3",
      md: "size-5",
      lg: "size-6",
    },
  },
  compoundVariants: [
    {
      size: undefined,
      className: "size-4",
    },
  ],
});

export const getTimePickerClasses = cva(
  "border border-neutral-content bg-base-100 shadow-xs cursor-pointer ring-0 py-2 h-8 px-3 w-full text-sm outline-0 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-base-content disabled:pointer-events-none disabled:opacity-50 hover:bg-base-200",
  {
    variants: {
      selected: {
        true: "bg-primary border-primary text-primary-content hover:border-neutral-content hover:text-base-content",
      },
      suggested: {
        true: "bg-info border-info text-info-content hover:border-neutral-content hover:text-base-content",
      },
    },
  }
);

export const getTimePickerListClasses = cva(
  "flex items-center flex-col gap-1 h-full max-h-56 w-28 px-1 py-0.5"
);

export const getTimePickerScrollAreaClasses = cva(
  "h-[90%] w-full focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-0 py-0.5"
);

export const getNaturalLanguageInputClasses = cva(
  "flex-1 border-none bg-transparent outline-hidden ring-0 focus:outline-hidden focus:ring-0 focus-within:outline-hidden focus-within:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        xs: "h-4 px-1",
        sm: "h-6 px-1",
        md: "h-9 px-2",
        lg: "h-11 px-3",
      },
    },
    compoundVariants: [
      {
        size: undefined,
        className: "h-8 px-2",
      },
    ],
  }
);

export const getDatetimeCalendarClasses = cva(
  "peer flex justify-end bg-transparent focus:outline-hidden focus:ring-0 focus-within:outline-hidden focus-within:ring-0 sm:text-sm disabled:cursor-not-allowed disabled:opacity-50"
);
