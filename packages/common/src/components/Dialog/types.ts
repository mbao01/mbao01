import * as DialogPrimitive from "@radix-ui/react-dialog";
import { type VariantProps } from "../../libs";
import {
  getDialogContentClasses,
  getDialogDescriptionClasses,
  getDialogFooterClasses,
  getDialogHeaderClasses,
  getDialogOverlayClasses,
  getDialogTitleClasses,
} from "./constants";

export type DialogProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Root
>;

export type DialogOverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
> &
  VariantProps<typeof getDialogOverlayClasses>;

export type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> &
  VariantProps<typeof getDialogContentClasses>;

export type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getDialogHeaderClasses>;

export type DialogFooterProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getDialogFooterClasses>;

export type DialogTitleProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
> &
  VariantProps<typeof getDialogTitleClasses>;

export type DialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
> &
  VariantProps<typeof getDialogDescriptionClasses>;