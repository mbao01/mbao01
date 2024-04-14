"use client";

import { Toaster as Sonner } from "sonner";
import { type ToasterProps } from "./types";
import { cn } from "../../utilities";
import { getToastClasses } from "./constants";

export const Toaster = ({
  theme,
  variant,
  outline,
  className,
  ...props
}: ToasterProps) => {
  return (
    <Sonner
      theme={theme}
      className={cn("toaster group", className)}
      toastOptions={{
        classNames: {
          toast: cn(
            "group sonn group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            getToastClasses({ variant, outline })
          ),
          description: "group-[.sonn]:text-muted-foreground",
          actionButton:
            "group-[.sonn]:bg-primary group-[.sonn]:text-primary-foreground",
          cancelButton:
            "group-[.sonn]:bg-muted group-[.sonn]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};
