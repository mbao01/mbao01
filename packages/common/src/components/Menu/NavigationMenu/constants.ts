import { cva } from "../../../libs";
import { createVariants } from "../../../utilities";

export const getNavigationMenuClasses = cva(
  "relative z-10 flex max-w-max flex-1 items-center justify-center"
);

export const getNavigationMenuListClasses = cva(
  "group flex flex-1 list-none items-center justify-center space-x-1"
);

export const getNavigationMenuTriggerClasses = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-hidden disabled:pointer-events-none disabled:opacity-50",
  {
    variants: createVariants({
      variant: {
        primary:
          "hover:bg-primary hover:text-primary-content focus:bg-primary focus:text-primary-content data-active:bg-primary/50 data-[state=open]:bg-primary/50",
        secondary:
          "hover:bg-secondary hover:text-secondary-content focus:bg-secondary focus:text-secondary-content data-active:bg-secondary/50 data-[state=open]:bg-secondary/50",
        accent:
          "hover:bg-accent hover:text-accent-content focus:bg-accent focus:text-accent-content data-active:bg-accent/50 data-[state=open]:bg-accent/50",
        neutral:
          "hover:bg-neutral hover:text-neutral-content focus:bg-neutral focus:text-neutral-content data-active:bg-neutral/50 data-[state=open]:bg-neutral/50",
        default:
          "hover:bg-base-300 hover:text-base-content focus:bg-base-300 focus:text-base-content data-active:bg-base-300/50 data-[state=open]:bg-base-300/50",
        info: "hover:bg-info hover:text-info-content focus:bg-info focus:text-info-content data-active:bg-info/50 data-[state=open]:bg-info/50",
        success:
          "hover:bg-success hover:text-success-content focus:bg-success focus:text-success-content data-active:bg-success/50 data-[state=open]:bg-success/50",
        warning:
          "hover:bg-warning hover:text-warning-content focus:bg-warning focus:text-warning-content data-active:bg-warning/50 data-[state=open]:bg-warning/50",
        error:
          "hover:bg-error hover:text-error-content focus:bg-error focus:text-error-content data-active:bg-error/50 data-[state=open]:bg-error/50",
      },
    }),
  }
);

export const getNavigationMenuContentClasses = cva(
  "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto"
);

export const getNavigationMenuViewportClasses = cva(
  "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-base-100 shadow-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]"
);

export const getNavigationMenuIndicatorClasses = cva(
  "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in"
);
