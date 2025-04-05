import type { LucideProps } from "lucide-react";
import React from "react";
import { type VariantProps } from "../../libs";
import {
  getDockButtonClasses,
  getDockClasses,
  getDockIconClasses,
  getDockLabelClasses,
} from "./constants";

export type DockProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof getDockClasses>;

export type DockButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof getDockButtonClasses>;

export type DockLabelProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof getDockLabelClasses>;

type P = Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>;
export type DockIconProps = P &
  VariantProps<typeof getDockIconClasses> & {
    icon: React.ForwardRefExoticComponent<P>;
  };
