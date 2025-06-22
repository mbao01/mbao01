import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  TimelineAlternateExample,
  TimelineExample,
  TimelineLabelsExample,
  TimelineLeftExample,
  TimelineRightExample,
} from "./Timeline.example";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: TimelineExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof TimelineExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const TimelineLabels: Story = {
  args: {},
  render: (props) => <TimelineLabelsExample {...props} />,
};

export const TimelineAlternate: Story = {
  args: {},
  render: (props) => <TimelineAlternateExample {...props} />,
};

export const TimelineRight: Story = {
  args: {},
  render: (props) => <TimelineRightExample {...props} />,
};

export const TimelineLeft: Story = {
  args: {},
  render: (props) => <TimelineLeftExample {...props} />,
};
