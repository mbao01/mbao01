import { type ButtonHTMLAttributes } from "react";
import { type VariantProps } from "../../libs";
import { getButtonClasses } from "./constants";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof getButtonClasses> & {
    asChild?: boolean;
  };
