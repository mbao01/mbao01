import { cva } from "../../libs";

export const getDrawerContentClasses = cva(
  "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-base-100"
);

export const getDrawerDescriptionClasses = cva("text-sm");

export const getDrawerHeaderClasses = cva(
  "grid gap-1.5 p-4 text-center sm:text-left"
);

export const getDrawerFooterClasses = cva("mt-auto flex flex-col gap-2 p-4");

export const getDrawerOverlayClasses = cva("fixed inset-0 z-50 bg-black/80");

export const getDrawerTitleClasses = cva(
  "text-lg font-semibold leading-none tracking-tight"
);
