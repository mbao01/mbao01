import { ComponentPropsWithoutRef } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type VariantProps } from "../../../libs";
import { getCheckboxClasses } from "./constants";

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  "checked" | "onCheckedChange"
> &
  VariantProps<typeof getCheckboxClasses>;
