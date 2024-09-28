import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Accordion } from "./Accordion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withAccordion = (_: StoryFn, context: StoryContext<any>) => {
  const items = [
    {
      value: "item-1",
      trigger: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      value: "item-2",
      trigger: "Is it styled?",
      content: "Yes. It comes with default styles that matches the other components aesthetic.",
    },
    {
      trigger: "Is it animated?",
      content: "Yes. It's animated by default, but you can disable it if you prefer.",
      value: "item-3",
    },
  ];

  const disabled = (context.args as { disabled: boolean }).disabled;

  return (
    <Accordion {...context.args} className="w-[320px]">
      {items.map((item) => (
        <Accordion.Item value={item.value} key={item.value}>
          <Accordion.Trigger disabled={item.value === "item-3" ? disabled : false}>
            {item.trigger}
            <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </Accordion.Trigger>
          <Accordion.Content>{item.content}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    // backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withAccordion],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
  },
};

export const ExpandMultipleItems: Story = {
  args: {
    type: "multiple",
  },
};

export const SingleExpandedItem: Story = {
  args: {
    type: "single",
    defaultValue: "item-2",
    collapsible: true,
  },
};

export const MultipleExpandedItems: Story = {
  args: {
    type: "multiple",
    defaultValue: ["item-1", "item-3"],
  },
};

export const NonCollapsible: Story = {
  args: {
    type: "single",
    collapsible: false,
  },
};

export const DisabledLastItem: Story = {
  args: {
    type: "single",
    collapsible: true,
    disabled: true,
  },
};
