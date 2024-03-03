import type { LinkProps as NextLinkProps } from "next/link";
import { type VariantProps } from "@mbao01/common/libs";
import { getLinkClasses } from "./constant";

export type LinkProps<T> = NextLinkProps<T> &
  VariantProps<typeof getLinkClasses>;
