import type { CreateVariantsArgs } from "./type";

export const createVariants = <T extends CreateVariantsArgs<T>>(variants: T): T => {
  return variants;
};
