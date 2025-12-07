import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "../../utilities";
import { getSheetClasses, getSheetOverlayClasses } from "./constants";
import { type SheetProps } from "./types";

export const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ className, side, open, onClose, children, ...props }, ref) => {
    // Prevent body scroll when open
    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [open]);

    // Close on escape key
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (open && e.key === "Escape") {
          onClose?.();
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [open, onClose]);

    if (typeof document === "undefined") return null;

    return createPortal(
      <>
        <div className={getSheetOverlayClasses({ open })} onClick={onClose} aria-hidden="true" />
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={cn(getSheetClasses({ side, open }), className)}
          {...props}
        >
          {onClose && (
            <button
              onClick={onClose}
              className="absolute right-4 top-4 btn btn-sm btn-circle btn-ghost"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          {children}
        </div>
      </>,
      document.body
    );
  }
);

Sheet.displayName = "Sheet";

export const SheetHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col space-y-2 p-6", className)} {...props}>
        {children}
      </div>
    );
  }
);
SheetHeader.displayName = "SheetHeader";

export const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h2 ref={ref} className={cn("text-lg font-semibold text-base-content", className)} {...props}>
      {children}
    </h2>
  );
});
SheetTitle.displayName = "SheetTitle";

export const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p ref={ref} className={cn("text-sm text-base-content/70", className)} {...props}>
      {children}
    </p>
  );
});
SheetDescription.displayName = "SheetDescription";

export const SheetContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-6 pt-0", className)} {...props}>
        {children}
      </div>
    );
  }
);
SheetContent.displayName = "SheetContent";

export const SheetFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SheetFooter.displayName = "SheetFooter";
