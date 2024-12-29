import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { ToggleGroup } from "./ToggleGroup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withToggleGroup = (_: StoryFn, context: StoryContext<any>) => {
  const { type, variant, defaultValue } = context.args;

  return (
    <ToggleGroup type={type} variant={variant} defaultValue={defaultValue}>
      <ToggleGroup.Item value="bold" aria-label="Toggle bold">
        <BoldIcon className="h-4 w-4" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="italic" aria-label="Toggle italic">
        <ItalicIcon className="h-4 w-4" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="strikethrough" aria-label="Toggle strikethrough">
        <UnderlineIcon className="h-4 w-4" />
      </ToggleGroup.Item>
    </ToggleGroup>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: ToggleGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withToggleGroup],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
    type: "multiple",
  },
};

export const PrimaryToggle: Story = {
  args: {
    variant: "primary",
    type: "multiple",
  },
};

export const SingleToggle: Story = {
  args: {
    type: "single",
    variant: "accent",
  },
};

export const SinglePreselectedToggle: Story = {
  args: {
    type: "single",
    defaultValue: "italic",
  },
};

export const MultiplePreselectedToggle: Story = {
  args: {
    type: "multiple",
    variant: "warning",
    defaultValue: ["italic", "bold"],
  },
};
