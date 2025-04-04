import type { KbdProps } from "./types";
import { cn } from "../../utilities";
import { getKbdClasses } from "./constants";

export const Kbd = ({ outline, variant, size, className, ...props }: KbdProps) => (
  <kbd className={cn(getKbdClasses({ outline, variant, size }), className)} {...props} />
);
