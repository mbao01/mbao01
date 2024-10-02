import type { Meta, StoryObj } from "@storybook/react";
import { TagsInput } from "./TagsInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Form/TagsInput",
  component: TagsInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    // backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  // decorators: [withTagsInput],
} satisfies Meta<typeof TagsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const SmallTagsInput: Story = {
  args: {
    size: "sm",
    defaultTags: ["Hello", "World"],
    maxItems: 2,
  },
};

export const OutlineTagsInput: Story = {
  args: {
    outline: true,
  },
};

export const PrimaryTagsInput: Story = {
  args: {
    variant: "primary",
  },
};

export const DisabledTagsInput: Story = {
  args: {
    disabled: true,
    placeholder: "Enter something",
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Enter anything",
  },
};

export const WithDefaultTags: Story = {
  args: {
    defaultTags: ["Hello", "World"],
  },
};
