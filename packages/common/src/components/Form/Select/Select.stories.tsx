import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react-vite";
import { ReactNode } from "react";
import { Select } from "./Select";

type ArgsType = Partial<{
  size: "xs" | "sm" | "md" | "lg";
  wide: boolean;
  outline: boolean;
  variant:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "info"
    | "error"
    | "ghost";
  label: ReactNode;
  labelPosition: "start" | "end" | "floating";
  placeholder: string;
  className: string;
}>;

const withSelect = (_: StoryFn, context: StoryContext<ArgsType>) => {
  const { size, wide, variant, outline, label, labelPosition, placeholder, className } =
    context.args;

  return (
    <Select>
      <Select.Trigger
        size={size}
        wide={wide}
        variant={variant}
        outline={outline}
        label={label}
        labelPosition={labelPosition}
        className={className}
      >
        <Select.Value placeholder={placeholder} />
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
      options: [
        "default",
        "primary",
        "secondary",
        "accent",
        "success",
        "warning",
        "info",
        "error",
        "ghost",
      ],
    },
  },
  decorators: [withSelect],
} satisfies Meta<ArgsType>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: "Theme",
  },
};

export const PrimarySelect: Story = {
  args: {
    variant: "primary",
    placeholder: "Theme",
  },
};

export const OutlineSelect: Story = {
  args: {
    outline: true,
    placeholder: "Theme",
  },
};

export const TinySelect: Story = {
  args: {
    outline: true,
    size: "xs",
    placeholder: "Theme",
  },
};

export const FullWidthSelect: Story = {
  args: {
    outline: true,
    wide: true,
    placeholder: "Theme",
  },
};

export const LabelForSelect: Story = {
  args: {
    label: "Type",
    wide: true,
    outline: true,
    placeholder: "Theme",
  },
};

export const SuffixLabelForSelect: Story = {
  args: {
    label: "Be sure!",
    labelPosition: "end",
    wide: true,
    outline: true,
    placeholder: "Theme",
  },
};

export const FloatingLabelForSelect: Story = {
  args: {
    label: "Your Email",
    labelPosition: "floating",
    wide: true,
    outline: true,
    className: "min-w-xs",
  },
};
