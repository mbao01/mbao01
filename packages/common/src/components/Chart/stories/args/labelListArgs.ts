import { type ArgTypes } from "@storybook/react";

export const labelListArgs: ArgTypes = {
  dataKey: {
    description: "The key of a group of label values in data.",
    table: {
      type: {
        summary: "String | Number | Function",
      },
      category: "General",
    },
    control: "text",
  },
  valueAccessor: {
    description: "The accessor function to get the value of each label.",
    table: {
      category: "General",
    },
  },
  content: {
    description:
      "If set a React element, the option is the customized react element of rendering each label. " +
      "If set a function, the function will be called to render each label content.",
    defaultValue: null,
    table: {
      category: "General",
      type: {
        summary: "ReactElement | Function",
        detail:
          "<Label content={<CustomizedLabel external={external} />} />\n<Label content={renderLabel} />",
      },
    },
  },
  position: {
    description: "The position of each label relative to it view box.",
    table: {
      type: {
        summary: `'top' | 'left' | 'right' | 'bottom' | 'inside' | 'outside' | 'insideLeft' |
          'insideRight' | 'insideTop' | 'insideBottom' | 'insideTopLeft' |
          'insideBottomLeft' | 'insideTopRight' | 'insideBottomRight' |
          'insideStart' | 'insideEnd' | 'end' | 'center' | 'centerTop' | 'centerBottom' | 'middle'`,
      },
      category: "General",
    },
    control: "select",
    options: [
      "top",
      "left",
      "right",
      "bottom",
      "inside",
      "outside",
      "insideLeft",
      "insideRight",
      "insideTop",
      "insideBottom",
      "insideTopLeft",
      "insideBottomLeft",
      "insideTopRight",
      "insideBottomRight",
      "insideStart",
      "insideEnd",
      "end",
      "center",
      "centerTop",
      "centerBottom",
      "middle",
    ],
  },
  offset: {
    description: 'The offset to the specified "position"',
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "5",
      },
      category: "General",
    },
    control: "number",
  },
  formatter: {
    description:
      "The formatter function of label value which has only one parameter - the value of label.",
    table: {
      type: {
        summary: "Function",
      },
      category: "General",
    },
  },
  data: {
    description: "The data input to the charts.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "5",
      },
      category: "General",
    },
    control: "number",
  },
  clockWise: {
    description: "The parameter to calculate the view box of label in radial charts.",
    table: {
      type: {
        summary: "boolean",
      },
      category: "General",
    },
    control: "boolean",
  },
  id: {
    description:
      "The unique id of this component, which will be used to generate " +
      "unique clip path id internally. This props is suggested to be set in SSR.",
    table: {
      category: "General",
    },
  },
};
