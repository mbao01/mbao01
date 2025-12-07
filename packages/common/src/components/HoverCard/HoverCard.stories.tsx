import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { HoverCard } from "./HoverCard";
import { type HoverCardProps } from "./types";

const withHoverCard = (_: StoryFn, context: StoryContext<HoverCardProps>) => {
  return (
    <HoverCard {...context.args}>
      <HoverCard.Trigger asChild>
        <Button link>@nextjs</Button>
      </HoverCard.Trigger>
      <HoverCard.Content className="w-80">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">The React Framework - created and maintained by @vercel.</p>
          <div className="flex items-center pt-2">
            <span className="text-xs text-muted-foreground">Joined December 2021</span>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Molecules/HoverCard",
  component: HoverCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withHoverCard],
} satisfies Meta<typeof HoverCard>;

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

export const WithOpenDelay: Story = {
  args: {
    openDelay: 3000,
  },
};

export const WithCloseDelay: Story = {
  args: {
    closeDelay: 3000,
  },
};
