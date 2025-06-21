import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react-vite";
import { useMemo, useState } from "react";
import { MultiSelect } from "./MultiSelect";
import { MultiSelectTriggerProps } from "./types";

const MultiSelectStory = ({ disabled, ...props }: MultiSelectTriggerProps) => {
  const [value, setValue] = useState<string[]>([]);

  const options = useMemo(
    () => [
      { label: "React", value: "react" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
    []
  );

  return (
    <MultiSelect values={value} onValuesChange={setValue}>
      <MultiSelect.Trigger disabled={disabled} {...props}>
        <MultiSelect.Input placeholder="Select your framework" disabled={disabled} />
      </MultiSelect.Trigger>
      <MultiSelect.Content>
        <MultiSelect.List size={props.size}>
          {options.map((option, i) => (
            <MultiSelect.Item key={i} value={option.value} label={option.label} size={props.size}>
              {option.label}
            </MultiSelect.Item>
          ))}
        </MultiSelect.List>
      </MultiSelect.Content>
    </MultiSelect>
  );
};

const withMultiSelect = (_: StoryFn, context: StoryContext<MultiSelectTriggerProps>) => {
  return <MultiSelectStory {...context.args} />;
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Form/MultiSelect",
  component: MultiSelect.Trigger,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    visual: {
      delay: 500, // wait 500ms for test before capturing snapshot
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withMultiSelect],
} satisfies Meta<typeof MultiSelect.Trigger>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const PrimaryMultiSelect: Story = {
  args: {
    variant: "primary",
  },
};

export const OutlineMultiSelect: Story = {
  args: {
    outline: true,
  },
};

export const SmallMultiSelect: Story = {
  args: {
    size: "sm",
  },
};

export const DisabledMultiSelect: Story = {
  args: {
    disabled: true,
  },
};
