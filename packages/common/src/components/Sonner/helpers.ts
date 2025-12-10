import type { ToasterProps } from "./types";
import { cn } from "../../utilities";
import { getToastButtonClasses, getToastClasses } from "./constants";

export const toastClassnames = ({
  variant,
  outline,
  actionButton,
  cancelButton,
  closeButton,
}: Pick<ToasterProps, "variant" | "outline" | "actionButton" | "cancelButton" | "closeButton">) => {
  return {
    toast: cn(getToastClasses({ variant, outline })),
    actionButton: cn(getToastButtonClasses(actionButton)),
    cancelButton: cn(
      getToastButtonClasses({
        outline: true,
        variant: "default",
        ...cancelButton,
      })
    ),
    closeButton: cn(getToastButtonClasses({ variant: "neutral", ...closeButton })),
  };
};
