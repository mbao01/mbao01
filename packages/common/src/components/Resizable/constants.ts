import { cva } from "../../libs";

export const getResizableClasses = cva(
  "flex h-full w-full data-[panel-group-direction=vertical]:flex-col"
);

export const getResizableHandleClasses = cva(
  "relative flex w-px items-center justify-center border-primary after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
  {
    variants: {
      bordered: {
        true: "border border-neutral-content",
      },
    },
  }
);

export const getResizableHandleIconWrapperClasses = cva(
  "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-base-100"
);

export const getResizableHandleIconClasses = cva("h-2.5 w-2.5");
