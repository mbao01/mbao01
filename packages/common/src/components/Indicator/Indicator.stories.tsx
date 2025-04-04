import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Status } from "../Status";
import { Indicator } from "./Indicator";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Indicator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Indicator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    as: "span",
  },
  render: (args) => {
    return (
      <Indicator {...args}>
        Hello world
        <Indicator.Item {...args}>😃</Indicator.Item>
      </Indicator>
    );
  },
};

export const IndicatorWithButtonAndStatus: Story = {
  args: {
    as: Button,
  },
  render: (args) => {
    return (
      <Indicator {...args}>
        Hello world
        <Indicator.Item as={Status} size="lg" variant="success" />
      </Indicator>
    );
  },
};

export const IndicatorWithButtonAndBadge: Story = {
  args: {
    as: Button,
  },
  render: (args) => {
    return (
      <Indicator position="start" {...args}>
        Email
        <Indicator.Item as={Badge} size="sm" variant="error">
          2
        </Indicator.Item>
      </Indicator>
    );
  },
};

export const IndicatorBottomLeft: Story = {
  args: {
    as: Button,
  },
  render: (args) => {
    return (
      <Indicator position={["start", "bottom"]} {...args}>
        Email
        <Indicator.Item as={Badge} size="sm" variant="error">
          2
        </Indicator.Item>
      </Indicator>
    );
  },
};
