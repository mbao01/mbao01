import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { InfoIcon } from "lucide-react";
import { Alert } from "./Alert";
import { type AlertProps } from "./types";

const withAlert = (_: StoryFn, context: StoryContext<AlertProps>) => {
  return (
    <Alert {...context.args}>
      <InfoIcon className="h-4 w-4" />
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>You can add components to your app using the cli.</Alert.Description>
    </Alert>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withAlert],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const PrimaryAlert: Story = {
  args: {
    variant: "primary",
  },
};

export const SuccessAlert: Story = {
  args: {
    variant: "success",
  },
};

export const OutlineAlert: Story = {
  args: {
    outline: true,
    variant: "error",
  },
};
