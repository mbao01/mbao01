import type { Meta, StoryObj } from "@storybook/react-vite";
import { Status } from "./Status";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atoms/Status",
  component: Status,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const TinyStatus: Story = {
  args: {
    size: "xs",
  },
};

export const InfoStatus: Story = {
  args: {
    animate: "ping",
    variant: "info",
  },
  render: (args) => {
    return (
      <>
        <Status {...args} /> New message
      </>
    );
  },
};

export const PrimaryStatus: Story = {
  args: {
    variant: "primary",
  },
};

export const SuccessStatus: Story = {
  args: {
    variant: "success",
  },
};
