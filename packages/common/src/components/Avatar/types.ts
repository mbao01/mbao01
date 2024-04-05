import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { type VariantProps } from "../../libs";
import {
  getAvatarClasses,
  getAvatarFallbackClasses,
  getAvatarImageClasses,
} from "./constants";

export type AvatarProps = Omit<
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
  "asChild" | "size"
> &
  VariantProps<typeof getAvatarClasses>;

export type AvatarImageProps = Omit<
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>,
  "asChild"
> &
  VariantProps<typeof getAvatarImageClasses>;

export type AvatarFallbackProps = Omit<
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
  "asChild"
> &
  VariantProps<typeof getAvatarFallbackClasses>;
