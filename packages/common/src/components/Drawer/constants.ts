import { cva } from "../../libs";

export const getDrawerContentClasses = cva(
  "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-base-100 shadow-lg"
);

export const getDrawerDescriptionClasses = cva("text-sm");

export const getDrawerHeaderClasses = cva("grid gap-1.5 p-4 text-center sm:text-left");

export const getDrawerFooterClasses = cva("mt-auto flex flex-col gap-2 p-4");

export const getDrawerOverlayClasses = cva("fixed inset-0 z-50 bg-black/60 backdrop-blur-sm");

export const getDrawerTitleClasses = cva("text-lg font-semibold leading-none tracking-tight");

export const getDrawerCloseClasses = cva(
  "absolute right-4 top-4 cursor-pointer rounded-xs opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:rotate-90 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
);
