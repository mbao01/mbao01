"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import type {
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogOverlayProps,
  DialogProps,
  DialogTitleProps,
} from "./types";
import { cn } from "../../utilities";
import {
  getDialogCloseClasses,
  getDialogContentClasses,
  getDialogDescriptionClasses,
  getDialogFooterClasses,
  getDialogHeaderClasses,
  getDialogOverlayClasses,
  getDialogTitleClasses,
} from "./constants";

const Dialog = (props: DialogProps) => <DialogPrimitive.Root {...props} />;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(getDialogOverlayClasses(), className)}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(
  (
    {
      className,
      children,
      closeProps,
      type = "dialog",
      showClose = true,
      side = "right",
      ...props
    },
    ref
  ) => (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          getDialogContentClasses({
            type,
            side: type === "sheet" ? side : undefined,
          }),
          className
        )}
        {...props}
      >
        {children}
        {showClose ? (
          <DialogPrimitive.Close
            {...closeProps}
            className={cn(getDialogCloseClasses(), closeProps?.className)}
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        ) : null}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
  <div className={cn(getDialogHeaderClasses(), className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
  <div className={cn(getDialogFooterClasses(), className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn(getDialogTitleClasses(), className)} {...props} />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(getDialogDescriptionClasses(), className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Portal = DialogPrimitive.Portal;
Dialog.Close = DialogPrimitive.Close;
Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Content = DialogContent;
Dialog.Footer = DialogFooter;
Dialog.Overlay = DialogOverlay;

export { Dialog };
