import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { ChevronsUpDownIcon } from "lucide-react";
import { Button } from "../Button";
import { Collapsible } from "./Collapsible";
import { type CollapsibleProps } from "./types";

const withCollapsible = (_: StoryFn, context: StoryContext<CollapsibleProps>) => {
  return (
    <Collapsible {...context.args} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">@mbao01 forked 3 repositories</h4>
        <Collapsible.Trigger asChild>
          <Button variant="ghost" size="sm" className="disabled:bg-transparent">
            <ChevronsUpDownIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </Collapsible.Trigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
        @radix-ui/primitives
      </div>
      <Collapsible.Content className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
          @stitches/react
        </div>
      </Collapsible.Content>
    </Collapsible>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Collapsible,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withCollapsible],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const OpenedByDefault: Story = {
  args: {
    defaultOpen: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
