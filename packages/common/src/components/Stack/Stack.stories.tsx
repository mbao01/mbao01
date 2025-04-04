import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Stack,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    direction: "start",
  },
  render: (args) => {
    return (
      <Stack {...args}>
        <div className="border-base-content card bg-base-100 border text-center">
          <div className="card-body">A</div>
        </div>
        <div className="border-base-content card bg-base-100 border text-center">
          <div className="card-body">B</div>
        </div>
        <div className="border-base-content card bg-base-100 border text-center">
          <div className="card-body">C</div>
        </div>
      </Stack>
    );
  },
};
