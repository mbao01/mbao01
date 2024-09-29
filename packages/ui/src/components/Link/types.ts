import type { LinkProps as RouterLinkProps, To } from "react-router-dom";
import { type VariantProps } from "@mbao01/common/libs";
import { getLinkClasses } from "./constant";

export type LinkProps = Omit<RouterLinkProps, "to"> & {
  isExternal?: boolean;
} & (
    | {
        isInternal?: false;
        href: string;
      }
    | {
        isInternal?: true;
        href: To;
      }
  ) &
  VariantProps<typeof getLinkClasses>;
