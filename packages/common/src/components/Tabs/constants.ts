import { cva } from "../../libs";

export const getTabsListClasses = cva(
  "inline-flex h-9 items-center justify-center rounded-lg bg-base-200 p-1"
);

export const getTabsTriggerClasses = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-base-100 data-[state=active]:text-foreground data-[state=active]:shadow"
);

export const getTabsContentClasses = cva(
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
);
