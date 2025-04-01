import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { Select } from "./Select";

type ArgsType = Partial<{
  size: "xs" | "sm" | "md" | "lg";
  wide: boolean;
  outline: boolean;
  variant: "primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error";
}>;

const withSelect = (_: StoryFn, context: StoryContext<ArgsType>) => {
  const { size, variant, outline } = context.args;

  return (
    <Select>
      <Select.Trigger size={size} variant={variant} outline={outline}>
        <Select.Value placeholder="Theme" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="light" variant={variant}>
          Light
        </Select.Item>
        <Select.Item value="dark" variant={variant}>
          Dark
        </Select.Item>
        <Select.Item value="system" variant={variant}>
          System
        </Select.Item>
      </Select.Content>
    </Select>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Form/Select",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    a11y: {
      config: {
        rules: [
          {
            // @fixme
            id: "button-name",
            reviewOnFail: true,
          },
        ],
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    wide: false,
    outline: false,
    size: undefined,
    variant: undefined,
  },
  argTypes: {
    wide: { control: "boolean" },
    outline: { control: "boolean" },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "accent", "success", "warning", "info", "error"],
    },
  },
  decorators: [withSelect],
} satisfies Meta<ArgsType>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const PrimarySelect: Story = {
  args: {
    variant: "primary",
  },
};

export const OutlineSelect: Story = {
  args: {
    outline: true,
  },
};

export const TinySelect: Story = {
  args: {
    outline: true,
    size: "xs",
  },
};

export const FullWidthSelect: Story = {
  args: {
    outline: true,
    wide: true,
  },
};
