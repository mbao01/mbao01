import { type LinkRestProps } from "next/link";
import { type UrlObject } from "url";
import { type VariantProps } from "@mbao01/common/libs";
import { getLinkClasses } from "./constant";

// export type LinkProps<
//   T,
//   I = boolean,
//   H = I extends true
//     ? /**
//        * The path or URL to navigate to. This is the only required prop. It can also be an object.
//        * @see https://nextjs.org/docs/api-reference/next/link
//        */
//       __next_route_internal_types__.RouteImpl<T> | UrlObject
//     : string,
// > = LinkRestProps & {
//   href: H;
//   isInternal?: I;
//   isExternal?: boolean;
// } & VariantProps<typeof getLinkClasses>;

export type LinkProps<T> = LinkRestProps & { isExternal?: boolean } & (
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
