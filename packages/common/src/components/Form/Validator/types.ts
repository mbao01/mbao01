import type { ComponentProps, ReactNode } from "react";
import React from "react";
import { type VariantProps } from "../../../libs";
import { Text } from "../../Text";
import { getValidatorClasses, getValidatorHintClasses } from "./constants";

type FormElements = "input" | "select" | "textarea";
export type As<P = any> =
  | FormElements
  | React.ComponentType<P>
  | React.ForwardRefExoticComponent<P>;

type AllowedElements = Pick<React.JSX.IntrinsicElements, FormElements>;

export type ValidatorProps<T extends As> = (T extends FormElements
  ? AllowedElements[T]
  : T extends React.ForwardRefExoticComponent<infer P>
    ? P
    : T extends React.ComponentType<infer P>
      ? P
      : never) &
  VariantProps<typeof getValidatorClasses> & {
    as: T;
    children?: ReactNode;
    className?: string;
  };

export type ValidatorHintProps = ComponentProps<typeof Text> &
  VariantProps<typeof getValidatorHintClasses>;
