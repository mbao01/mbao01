import { cva } from "../../libs";

export const getAccordionItemClasses = cva("border-b");

export const getAccordionTriggerClasses = cva(
  "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all [&:hover:not(:disabled)]:underline disabled:opacity-50 [&[data-state=open]>svg]:rotate-180"
);

export const getAccordionContentClasses = cva(
  "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
);
