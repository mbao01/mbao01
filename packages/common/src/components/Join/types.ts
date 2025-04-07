import { type VariantProps } from "../../libs";
import { getJoinClasses, getJoinItemClasses } from "./constants";

type FormElements = keyof React.JSX.IntrinsicElements;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type As<P = any> =
  | FormElements
  | React.ComponentType<P>
  | React.ForwardRefExoticComponent<P>;

type AllowedElements = Pick<React.JSX.IntrinsicElements, FormElements>;

type AsProps<T extends As> = T extends FormElements
  ? AllowedElements[T]
  : T extends React.ForwardRefExoticComponent<infer P>
    ? P
    : T extends React.ComponentType<infer P>
      ? P
      : never;

export type JoinProps<T extends As> = AsProps<T> &
  VariantProps<typeof getJoinClasses> & {
    as: T;
  };

export type JoinItemProps<T extends As> = AsProps<T> &
  VariantProps<typeof getJoinItemClasses> & {
    as: T;
  };
