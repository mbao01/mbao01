import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./Progress";

const withProgress = (Story: React.FC) => {
  return (
    <div className="h-80 w-80 flex justify-center items-center">
      <Story />
    </div>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Molecules/Progress",
  component: Progress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withProgress],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    "aria-label": "Loading...",
  },
};

export const VerticalProgress: Story = {
  args: {
    value: 50,
    "aria-label": "Loading...",
  },
};

export const HorizontalProgress: Story = {
  args: {
    value: 75,
    "aria-label": "Loading...",
  },
};

export const NonDecorativeProgress: Story = {
  args: {
    value: 75,
    max: 50,
    "aria-label": "Loading...",
  },
};

export const ProgressWithCustomLabel: Story = {
  args: {
    value: 75,
    max: 100,
    "aria-label": "Loading...",
    getValueLabel: (value, max) => `${value} of ${max}`,
  },
};
