type ValidateKeys<V, Allowed extends string> = keyof V extends Allowed
  ? V
  : { [K in keyof V]: K extends Allowed ? V[K] : never };

type VariantConstraint<T, K extends keyof T, Allowed extends string> = T extends {
  [Key in K]: infer V;
}
  ? V extends Partial<Record<Allowed, unknown>>
    ? ValidateKeys<V, Allowed>
    : Partial<Record<Allowed, unknown>>
  : Partial<Record<Allowed, unknown>>;

export type CreateVariantsArgs<T extends Record<string, unknown>> = {
  variant: VariantConstraint<
    T,
    "variant",
    | "accent"
    | "default"
    | "error"
    | "ghost"
    | "info"
    | "neutral"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
  >;
} & Omit<T, "variant">;
