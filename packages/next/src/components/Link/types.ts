import type { LinkProps as OriginalLinkProps } from "next/dist/client/link.js";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { type UrlObject } from "url";
import { type VariantProps } from "@mbao01/common/libs";
import { getLinkClasses } from "./constant";

export type LinkProps<T> = Omit<
  Omit<
    DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    keyof OriginalLinkProps
  > &
    OriginalLinkProps,
  "href"
> & { isExternal?: boolean; hardNavigate?: boolean } & (
    | {
        href: __next_route_internal_types__.RouteImpl<T> | UrlObject;
        isInternal?: true;
      }
    | {
        href: string;
        isInternal?: false;
      }
  ) &
  VariantProps<typeof getLinkClasses>;
