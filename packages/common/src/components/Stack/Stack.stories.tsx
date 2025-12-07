import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "./Stack";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Layout/Stack",
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

const cards = (
  <>
    <div className="border-base-content card bg-base-100 border text-center">
      <div className="card-body">A</div>
    </div>
    <div className="border-base-content card bg-base-100 border text-center">
      <div className="card-body">B</div>
    </div>
    <div className="border-base-content card bg-base-100 border text-center">
      <div className="card-body">C</div>
    </div>
  </>
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: cards,
  },
};

export const StackOnStart: Story = {
  args: {
    direction: "start",
    children: cards,
  },
};

export const StackOnEnd: Story = {
  args: {
    direction: "end",
    children: cards,
  },
};

export const StackOnTop: Story = {
  args: {
    direction: "top",
    children: cards,
  },
};

export const StackOnBottom: Story = {
  args: {
    direction: "bottom",
    children: cards,
  },
};
