import type { To, LinkProps as RouterLinkProps } from "react-router-dom";
import { type VariantProps } from "@mbao01/common/helpers";
import { getLinkClasses } from "./constant";

export type LinkProps = Omit<RouterLinkProps, "to"> & {
  href: To;
} & VariantProps<typeof getLinkClasses>;
