import { type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes } from "react";
import { getButtonClasses } from "./constants";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof getButtonClasses> & {
    as?: keyof Pick<JSX.IntrinsicElements, "a" | "span" | "p">;
  };
