import { type VariantProps } from "../../libs";
import {
  getIndicatorClasses,
  getIndicatorItemClasses,
  getIndicatorPositionClasses,
} from "./constants";

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

export type IndicatorProps<T extends As> = AsProps<T> &
  VariantProps<typeof getIndicatorClasses> & {
    as: T;
    position?: Parameters<typeof getIndicatorPositionClasses>[0]["position"];
  };

export type IndicatorItemProps<T extends As> = AsProps<T> &
  VariantProps<typeof getIndicatorItemClasses> & {
    as: T;
  };
