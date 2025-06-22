/*
 * This file both exports the documentation of shared props separately, to be reused in places where only single props
 * are documented, as well as grouped in case a whole group is needed.
 */

import { type ArgTypes } from "@storybook/react-vite";

export const animateNewValues: ArgTypes[0] = { table: { category: "Animation" } };
export const animationBegin: ArgTypes[0] = {
  description: "Specifies when the animation should begin, the unit of this option is ms.",
  type: { name: "number" },
  table: {
    defaultValue: {
      summary: "0",
    },
    category: "Animation",
  },
  control: "number",
};
export const animationDuration: ArgTypes[0] = {
  description: "Specifies the duration of animation, the unit of this option is ms.",
  table: {
    type: {
      summary: "number",
    },
    category: "Animation",
  },
  control: "number",
};
export const animationEasing: ArgTypes[0] = {
  description: "The type of easing function.",
  table: {
    type: {
      summary: "'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'",
    },
    category: "Animation",
  },
  control: "select",
  options: ["ease", "ease-in", "ease-out", "ease-in-out", "linear"],
};

export const isAnimationActive: ArgTypes[0] = {
  description:
    "If set false, animation of component will be disabled. This is `true` in CSR, and `false` in SSR",
  table: {
    type: {
      summary: "boolean",
    },
    defaultValue: {
      detail: "true in CSR, and false in SSR",
    },
    category: "Animation",
  },
  control: "boolean",
};

/**
 * Caveat: If any prop is added here, it would falsely be add to the documentation of the component where this group
 * is used. If the group is to be extended, then only single props should be imported by each component that does not
 * use all of them.
 * */
export const animationArgs: ArgTypes = {
  animationBegin,
  animationEasing,
  animationDuration,
  isAnimationActive,
};
