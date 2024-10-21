import { type Modifier } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";

export const restrictToElement = (rect: DOMRect | null | undefined) => {
  const modifier: Modifier = (args) =>
    restrictToParentElement({ ...args, containerNodeRect: rect ?? null });
  return modifier;
};
