import { cva } from "../../libs";

export const getActivityFeedClasses = cva("flex flex-col");

export const getActivityItemClasses = cva(
  "group relative flex gap-3 pb-4 last:pb-0 transition-colors duration-150"
);

export const getActivityIconClasses = cva(
  "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border bg-base-100 text-base-content/60 transition-colors duration-200 group-hover:border-primary/30 group-hover:text-primary"
);

export const getActivityLineClasses = cva(
  "absolute left-4 top-8 -bottom-0 w-px -translate-x-1/2 bg-base-300"
);

export const getActivityContentClasses = cva("flex min-w-0 flex-1 flex-col gap-0.5 pt-1");

export const getActivityTimestampClasses = cva("text-xs text-base-content/50 tabular-nums");
