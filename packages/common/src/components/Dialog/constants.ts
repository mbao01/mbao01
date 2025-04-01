import { cva } from "../../libs";

export const getDialogOverlayClasses = cva(
  "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
);

export const getDialogContentClasses = cva(
  "fixed z-50 gap-4 p-6 shadow-lg transition bg-base-100 w-full",
  {
    variants: {
      variant: {
        dialog:
          "border duration-200 left-[50%] top-[50%] grid max-w-lg translate-x-[-50%] translate-y-[-50%] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        sheet:
          "ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
      },
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      variant: "dialog",
    },
  }
);

export const getDialogHeaderClasses = cva("flex flex-col space-y-1.5 text-center sm:text-left");

export const getDialogFooterClasses = cva(
  "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
);

export const getDialogTitleClasses = cva("text-lg font-semibold leading-none tracking-tight");

export const getDialogDescriptionClasses = cva("text-sm text-muted-foreground");

export const getDialogCloseClasses = cva(
  "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
);
