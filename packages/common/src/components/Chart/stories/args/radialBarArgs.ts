import { type ArgTypes } from "@storybook/react-vite";
import { animationArgs } from "./animationArgs";
import { dataKey } from "./chartArgs";
import { eventArgs } from "./events";
import { legendType } from "./legendArgs";
import { polarSharedArgs } from "./polarSharedArgs";
import { radialBarStyleArgs } from "./stylesArgs";
import { tooltipType } from "./tooltipArgs";

export const radialBarArgs: ArgTypes = {
  dataKey,
  tooltipType,
  ...eventArgs,
  ...animationArgs,
  legendType,
  ...polarSharedArgs,
  ...radialBarStyleArgs,
  // Deprecated
  dangerouslySetInnerHTML: {
    table: {
      category: "Deprecated",
    },
    hide: true,
    disable: true,
  },
  startAngle: {
    table: { category: "Deprecated" },
    hide: true,
    disable: true,
  },
  endAngle: {
    table: { category: "Deprecated" },
    hide: true,
    disable: true,
  },
};
