import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Popover } from "./Popover";

const withPopover = (
  _: StoryFn,
  context: StoryContext<React.ComponentPropsWithoutRef<typeof Popover.Content>>
) => {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button outline>Open popover</Button>
      </Popover.Trigger>
      <Popover.Content className="w-80" {...context.args}>
        Here is some easter egg for you 🥚
      </Popover.Content>
    </Popover>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Popover",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withPopover],
} satisfies Meta<typeof Popover.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
