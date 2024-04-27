import { cva } from "../../libs";

export const getPaginationClasses = cva("flex justify-center");

export const getPaginationContentClasses = cva(
  "flex flex-row items-center gap-1"
);

export const getPaginationEllipsisClasses = cva(
  "flex h-9 w-9 items-center justify-center"
);

export const getPaginationNextClasses = cva("gap-1 px-3");

export const getPaginationPreviousClasses = cva("gap-1 px-3");
