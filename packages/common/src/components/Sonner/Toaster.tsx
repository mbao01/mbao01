"use client";

import { Toaster as Sonner } from "sonner";
import { type ToasterProps } from "./types";
import { cn } from "../../utilities";
import { getToastButtonClasses, getToastClasses } from "./constants";

export const Toaster = ({
  theme,
  variant,
  actionButton,
  cancelButton,
  closeButton,
  showCloseButton,
  outline,
  ...props
}: ToasterProps) => {
  return (
    <Sonner
      theme={theme}
      closeButton={showCloseButton}
      toastOptions={{
        classNames: {
          toast: cn(getToastClasses({ variant, outline })),
          actionButton: cn(getToastButtonClasses(actionButton)),
          cancelButton: cn(
            getToastButtonClasses({
              outline: true,
              variant: "base",
              ...cancelButton,
            })
          ),
          closeButton: cn(
            getToastButtonClasses({ variant: "neutral", ...closeButton })
          ),
        },
      }}
      {...props}
    />
  );
};
