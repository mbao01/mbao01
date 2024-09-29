import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { type VariantProps } from "../../libs";
import { getButtonClasses } from "../Button/constants";
import {
  getDialogContentClasses,
  getDialogDescriptionClasses,
  getDialogFooterClasses,
  getDialogHeaderClasses,
  getDialogOverlayClasses,
  getDialogTitleClasses,
} from "../Dialog/constants";

export type AlertDialogProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root>;

export type AlertDialogOverlayProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Overlay
> &
  VariantProps<typeof getDialogOverlayClasses>;

export type AlertDialogContentProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
> &
  VariantProps<typeof getDialogContentClasses>;

export type AlertDialogHeaderProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getDialogHeaderClasses>;

export type AlertDialogFooterProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getDialogFooterClasses>;

export type AlertDialogTitleProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
> &
  VariantProps<typeof getDialogTitleClasses>;

export type AlertDialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
> &
  VariantProps<typeof getDialogDescriptionClasses>;

export type AlertDialogActionProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
> &
  VariantProps<typeof getButtonClasses>;

export type AlertDialogCancelProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
> &
  VariantProps<typeof getButtonClasses>;
