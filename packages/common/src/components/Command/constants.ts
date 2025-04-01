import { cva } from "../../libs";

export const getCommandClasses = cva(
  "flex h-full w-full flex-col overflow-hidden rounded-md text-base-content"
);

export const getDialogContentClasses = cva("overflow-hidden p-0 shadow-lg");

export const getCommandDialogClasses = cva(
  "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
);

export const getCommandInputWrapperClasses = cva("flex items-center border-b px-3");

export const getCommandInputClasses = cva(
  "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
);

export const getCommandListClasses = cva("max-h-[300px] overflow-y-auto overflow-x-hidden");

export const getCommandEmptyClasses = cva("py-6 text-center text-sm");

export const getCommandGroupClasses = cva(
  "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
);

export const getCommandSeparatorClasses = cva("-mx-1 h-px bg-border");

export const getCommandItemClasses = cva(
  "relative flex cursor-pointer select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors aria-selected:bg-base-300 aria-selected:text-base-content aria-disabled:underline aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:cursor-default"
);

export const getCommandShortcutClasses = cva(
  "ml-auto text-xs tracking-widest text-muted-foreground"
);
