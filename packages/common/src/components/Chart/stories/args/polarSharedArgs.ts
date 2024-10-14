import { type ArgTypes } from "@storybook/react";
import { dataKey } from "./cartesianSharedArgs";

export const polarSharedArgs: ArgTypes = {
  data: {
    table: {
      category: "Internal",
    },
  },
  angleAxisId: {
    description: "The id of angle axis which is corresponding to the data.",
    table: {
      type: {
        summary: "string | number",
      },
      category: "General",
    },
    control: "text",
  },
  stackId: {
    description:
      "The stack id of bar, when two bars have the same stackId, then two bars are stacked in order.",
    table: {
      type: {
        summary: "string | number",
      },
      category: "General",
    },
    control: "text",
  },
  radiusAxisId: {
    description: "The id of radius axis which is corresponding to the data.",
    table: {
      type: {
        summary: "string | number",
      },
      category: "General",
    },
    control: "text",
  },
  dataKey,
};
