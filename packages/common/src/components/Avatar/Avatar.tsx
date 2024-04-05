"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import type {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
} from "./types";
import { cn } from "../../utilities";
import {
  getAvatarClasses,
  getAvatarImageClasses,
  getAvatarFallbackClasses,
} from "./constants";

const Avatar = ({ className, size, status, ...props }: AvatarProps) => (
  <AvatarPrimitive.Root
    className={cn(getAvatarClasses({ size, status }), className)}
    {...props}
  />
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = ({
  className,
  ring,
  shape,
  variant,
  ...props
}: AvatarImageProps) => (
  <AvatarPrimitive.Image
    className={cn(getAvatarImageClasses({ ring, shape, variant }), className)}
    {...props}
  />
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = ({
  className,
  size,
  ring,
  shape,
  variant,
  ...props
}: AvatarFallbackProps) => (
  <AvatarPrimitive.Fallback
    className={cn(
      getAvatarFallbackClasses({ ring, size, shape, variant }),
      className
    )}
    {...props}
  />
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;

export { Avatar };
