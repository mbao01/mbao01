import { cva } from "../../libs";

export const getBreadcrumbListClasses = cva(
  "flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5"
);

export const getBreadcrumbItemClasses = cva("inline-flex items-center gap-1.5");

export const getBreadcrumbLinkClasses = cva("transition-colors");

export const getBreadcrumbPageClasses = cva("font-normal");

export const getBreadcrumbSeparatorClasses = cva("[&>svg]:w-3.5 [&>svg]:h-3.5");

export const getBreadcrumbEllipsisClasses = cva("flex h-9 w-9 items-center justify-center");
