import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./Separator";

const withSeparator = (Story: React.FC) => {
  return (
    <div className="h-80 w-80 flex justify-center items-center">
      <Story />
    </div>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Separator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withSeparator],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const VerticalSeparator: Story = {
  args: {
    orientation: "vertical",
  },
};

export const HorizontalSeparator: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const NonDecorativeSeparator: Story = {
  args: {
    decorative: false,
  },
};
