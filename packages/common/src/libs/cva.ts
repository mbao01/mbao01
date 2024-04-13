import { type VariantProps as OriginalVariantProps } from "class-variance-authority";

export { cva } from "class-variance-authority";

type ExcludeNull<T> = { [P in keyof T]: Exclude<T[P], null> };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VariantProps<T extends (...args: any) => any> = ExcludeNull<
  OriginalVariantProps<T>
>;
