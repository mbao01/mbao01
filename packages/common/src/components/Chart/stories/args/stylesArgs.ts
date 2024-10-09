import type { Args, ArgTypes } from "@storybook/react";

export const hide: ArgTypes[0] = {
  description: "Hides the component when true, useful when toggling visibility state via legend",
  type: {
    name: "boolean",
  },
  table: {
    category: "Style",
    defaultValue: {
      summary: "false",
    },
  },
  control: "boolean",
};

export const generalStyleArgs: ArgTypes = {
  fill: {
    table: {
      category: "Style",
    },
    control: "color",
  },
  stroke: {
    table: {
      category: "Style",
    },
    control: "color",
  },
  strokeDasharray: {
    description: `The pattern of dashes and gaps used to paint the line.
      https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray`,
    table: {
      type: {
        summary: "string",
      },
      category: "Style",
    },
    control: "text",
  },
  strokeWidth: {
    description: "The width of the stroke.",
    table: {
      type: {
        summary: "string | number",
      },
      defaultValue: {
        summary: "1",
      },
      category: "Style",
    },
    control: "text",
  },
  strokeOpacity: {
    description: "The opacity of the stroke.",
    table: {
      type: {
        summary: "string | number",
      },
      defaultValue: {
        summary: "1",
      },
      category: "Style",
    },
    control: "text",
  },
};

// These label props are use by radial bar as as well as line and area.
const labelDescription = `If false set, labels will not be drawn. If true set, labels will be drawn which have
the props calculated internally. If object set, labels will be drawn which have the props merged
by the internal calculated props and the option. If ReactElement set, the option can be the custom
label element. If set a function, the function will be called to render customized label.`;

const labelSummary = "boolean | Object | ReactElement | Function";

export const lineStyleArgs: Args = {
  ...generalStyleArgs,
  connectNulls: {
    description: "Whether to connect a graph line across null points.",
    table: {
      type: {
        summary: "boolean",
      },
      category: "Style",
      defaultValue: {
        summary: "false",
      },
    },
    control: "boolean",
  },
  dot: {
    description: `If false set, dots will not be drawn. If true set, dots will be drawn which have the props
      calculated internally. If object set, dots will be drawn which have the props merged by the internal
      calculated props and the option. If ReactElement set, the option can be the custom dot element.If set
      a function, the function will be called to render customized dot.`,
    table: {
      type: {
        summary: "Boolean | Object | ReactElement | Function",
        detail:
          '<Line dataKey="value" dot={false} />\n' +
          "<Line dataKey=\"value\" dot={{ stroke: 'red', strokeWidth: 2 }} />\n" +
          '<Line dataKey="value" dot={<CustomizedDot />} />\n' +
          '<Line dataKey="value" dot={renderDot} />',
      },
      defaultValue: {
        summary: "true",
      },
      category: "Style",
    },
    control: "boolean",
  },
  hide,
  label: {
    description: labelDescription,
    table: {
      type: {
        summary: labelSummary,
        detail:
          '<Line dataKey="value" label />\n' +
          "<Line dataKey=\"value\" label={{ fill: 'red', fontSize: 20 }} />\n" +
          '<Line dataKey="value" label={<CustomizedLabel />} />\n' +
          '<Line dataKey="value" label={renderLabel} />',
      },
      defaultValue: {
        summary: "false",
      },
      category: "Style",
    },
    control: "boolean",
  },
  type: {
    description: `The interpolation type of line. It's the same as type in Area.
      And customized interpolation function can be set to type. https://github.com/d3/d3-shape#curves`,
    default: "linear",
    table: {
      category: "Style",
    },
    control: "select",
    options: [
      "basis",
      "basisClosed",
      "basisOpen",
      "bumpX",
      "bumpY",
      "bump",
      "linear",
      "linearClosed",
      "natural",
      "monotoneX",
      "monotoneY",
      "monotone",
      "step",
      "stepBefore",
      "stepAfter",
    ],
  },
};

// Currently these props are exclusive to radial bar.
export const radialBarStyleArgs: Args = {
  minPointSize: {
    description: "The minimum angle of the radial bar.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "0",
      },
      category: "Style",
    },
    control: "number",
  },
  label: {
    description: labelDescription,
    table: {
      type: {
        summary: labelSummary,
        detail:
          '<Bar dataKey="value" label />\n' +
          "<Bar dataKey=\"value\" label={{ fill: '#333', fontSize: 15, position: 'insideStart' }} />\n" +
          '<Bar dataKey="value" label={<CustomizedLabel />} />\n' +
          '<Bar dataKey="value" label={renderLabel} />',
      },
      defaultValue: {
        summary: "false",
      },
      category: "Style",
    },
    control: "number",
  },
  // Object example is not included as the only props which seem to be supported
  // are cx and cy which not seem to provide much value.
  background: {
    description: `If false set, background of bars will not be drawn. If true set, background of bars will be
    drawn which have the props calculated internally. If object set, background of bars will be drawn which
    have the props merged by the internal calculated props and the option. If ReactElement set, the option
    can be the custom background element. If set a function, the function will be called to render customized
    background.`,
    table: {
      type: {
        summary: "boolean | Object | ReactElement | Function",
        detail:
          '<Bar dataKey="value" background />\n' +
          '<Bar dataKey="value" background={<CustomizedBackground />} />\n' +
          '<Bar dataKey="value" background={renderBackground} />',
      },
      defaultValue: false,
      category: "Style",
    },
    control: "object",
  },
  cornerRadius: {
    description: "The radius of the corner of the bar.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "0",
      },
      category: "Style",
    },
    control: "number",
  },
  forceCornerRadius: {
    description:
      "Whether or not force to render round corner when the angle of sector is very small",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
      category: "Style",
    },
    control: "boolean",
  },
  cornerIsExternal: {
    description: `If true the rounded corner will lie outside the RadialBar, by default the rounded
        corner inside the length of the RadialBar`,
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
      category: "Style",
    },
    control: "boolean",
  },
  shape: {
    description: "Custom shape for the bar.",
    table: {
      type: {
        summary: "ReactElement | Function",
        detail:
          '<Bar dataKey="value" shape={<CustomizedShape />} />\n<Bar dataKey="value" shape={renderShape} />',
      },
      category: "Style",
    },
  },
  hide,
  activeShape: {
    description: "The custom active shape.",
    table: {
      type: {
        summary: "ReactElement | Function",
        detail:
          '<Bar dataKey="value" activeShape={<CustomizedActiveShape />} />\n' +
          '<Bar dataKey="value" activeShape={renderActiveShape} />',
      },
      category: "Style",
    },
  },
  activeIndex: {
    description: "The index of the active bar, this option can be changed in mouse event handlers.",
    table: {
      type: {
        summary: "number | number[]",
        detail:
          '<Bar dataKey="value" activeIndex={0} />\n<Bar dataKey="value" activeIndex={[0, 1]} />',
      },
      category: "Style",
      control: "object",
    },
  },
  maxBarSize: {
    description: "The maximum width of the bar.",
    table: {
      type: {
        summary: "number",
      },
      category: "Style",
    },
    control: "number",
  },
  stroke: {
    description: "The color of the stroke.",
    table: {
      type: {
        summary: "string",
      },
      category: "Style",
    },
    control: "color",
  },
  strokeWidth: {
    description: "The width of the stroke.",
    table: {
      type: {
        summary: "number",
      },
      category: "Style",
    },
    control: "number",
  },
  strokeOpacity: {
    description: "The opacity of the stroke.",
    table: {
      type: {
        summary: "number",
      },
      category: "Style",
    },
    control: "number",
  },
  fillOpacity: {
    description: "The opacity of the fill.",
    table: {
      type: {
        summary: "number",
      },
      category: "Style",
    },
    control: "number",
  },
};
