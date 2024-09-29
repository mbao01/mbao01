import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { cn } from "../../utilities";
import { Separator } from "../Separator";
import { ScrollArea } from "./ScrollArea";
import { ScrollAreaProps } from "./types";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

const withScrollArea = (_: StoryFn, context: StoryContext<ScrollAreaProps>) => {
  const isHorizontal = context.args.scrollbar?.orientation === "horizontal";
  return (
    <ScrollArea
      className={cn("rounded-md border", isHorizontal ? "w-72" : "h-72 w-48")}
      {...context.args}
    >
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        <div className={cn(isHorizontal && "flex")}>
          {tags.map((tag, index) => (
            <>
              <div key={tag} className="text-sm text-nowrap">
                {tag}
              </div>
              {index + 1 !== tags.length && (
                <Separator
                  className={cn(isHorizontal ? "mx-2 h-[22px]" : "my-2")}
                  orientation={isHorizontal ? "vertical" : "horizontal"}
                />
              )}
            </>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: ScrollArea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withScrollArea],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const HorizontalScrollbar: Story = {
  args: {
    scrollbar: {
      orientation: "horizontal",
      variant: "base",
    },
  },
};

export const PrimaryScrollbar: Story = {
  args: {
    scrollbar: {
      variant: "primary",
    },
  },
};
