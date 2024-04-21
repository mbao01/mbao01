import { cva } from "../../../libs";

const itemVariant = {
  primary: "focus:bg-primary focus:text-primary-content",
  secondary: "focus:bg-secondary focus:text-secondary-content",
  accent: "focus:bg-accent focus:text-accent-content",
  neutral: "focus:bg-neutral focus:text-neutral-content",
  base: "focus:bg-base-300 focus:text-base-content",
  info: "focus:bg-info focus:text-info-content",
  success: "focus:bg-success focus:text-success-content",
  warning: "focus:bg-warning focus:text-warning-content",
  error: "focus:bg-error focus:text-error-content",
};

const triggerVariant = {
  primary:
    "focus:bg-primary focus:text-primary-content data-[state=open]:bg-primary data-[state=open]:text-primary-content",
  secondary:
    "focus:bg-secondary focus:text-secondary-content data-[state=open]:bg-secondary data-[state=open]:text-secondary-content",
  accent:
    "focus:bg-accent focus:text-accent-content data-[state=open]:bg-accent data-[state=open]:text-accent-content",
  neutral:
    "focus:bg-neutral focus:text-neutral-content data-[state=open]:bg-neutral data-[state=open]:text-neutral-content",
  base: "focus:bg-base-300 focus:text-base-content data-[state=open]:bg-base-300 data-[state=open]:text-base-content",
  info: "focus:bg-info focus:text-info-content data-[state=open]:bg-info data-[state=open]:text-info-content",
  success:
    "focus:bg-success focus:text-success-content data-[state=open]:bg-success data-[state=open]:text-success-content",
  warning:
    "focus:bg-warning focus:text-warning-content data-[state=open]:bg-warning data-[state=open]:text-warning-content",
  error:
    "focus:bg-error focus:text-error-content data-[state=open]:bg-error data-[state=open]:text-error-content",
};

export const getMenubarClasses = cva(
  "flex h-9 items-center space-x-1 rounded-md border bg-base-100 p-1 shadow-sm"
);

export const getMenubarTriggerClasses = cva(
  "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none",
  {
    variants: {
      variant: triggerVariant,
    },
  }
);

export const getMenubarSubTriggerClasses = cva(
  "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
  {
    variants: {
      variant: triggerVariant,
      inset: {
        true: "pl-8",
      },
    },
  }
);

export const getMenubarContentClasses = cva(
  "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-base-100 p-1 text-base-content shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
);

export const getMenubarSubContentClasses = cva(
  "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-base-100 p-1 text-base-content shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
);

export const getMenubarItemClasses = cva(
  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: itemVariant,
      inset: {
        true: "pl-8",
      },
    },
  }
);

export const getMenubarCheckboxItemClasses = cva(
  "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: itemVariant,
    },
  }
);

export const getMenubarRadioItemClasses = cva(
  "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: itemVariant,
    },
  }
);

export const getMenubarLabelClasses = cva("px-2 py-1.5 text-sm font-semibold", {
  variants: {
    inset: {
      true: "pl-8",
    },
  },
});

export const getMenubarSeparatorClasses = cva("-mx-1 my-1 h-px bg-base-200");

export const getMenubarShortcutClasses = cva("ml-auto text-xs tracking-widest");
