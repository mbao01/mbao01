import { Toaster } from "sonner";
import { type VariantProps } from "../../libs";
import { getToastButtonClasses, getToastClasses } from "./constants";

type ToastButtonVariantProps = VariantProps<typeof getToastButtonClasses>;

export type ToasterProps = Omit<React.ComponentProps<typeof Toaster>, "closeButton"> &
  VariantProps<typeof getToastClasses> &
  Partial<Record<"actionButton" | "cancelButton" | "closeButton", ToastButtonVariantProps>> & {
    showCloseButton?: boolean;
  };
