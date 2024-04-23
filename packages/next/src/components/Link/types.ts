import { type UrlObject } from "url";
import type { LinkRestProps } from "next/link";
import { type VariantProps } from "@mbao01/common/libs";
import { getLinkClasses } from "./constant";

export type LinkProps<T> = LinkRestProps & {
  /**
   * The path or URL to navigate to. This is the only required prop. It can also be an object.
   * @see https://nextjs.org/docs/api-reference/next/link
   */
  href: __next_route_internal_types__.RouteImpl<T> | UrlObject;
} & VariantProps<typeof getLinkClasses>;
