import type { Meta, StoryObj } from "@storybook/react";
import {
  restrictToHorizontalAxis,
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import { DraggableOverlayExample } from "./Draggable.example";
import { DraggableAxis } from "./types";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Draggable/DraggableOverlay",
  component: DraggableOverlayExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof DraggableOverlayExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const DisableDropAnimation: Story = {
  args: {
    label: "Drop animation disabled",
    dropAnimation: null,
  },
};

export const HorizontalAxis: Story = {
  args: {
    label: "I'm only draggable horizontally",
    axis: DraggableAxis.Horizontal,
    modifiers: [restrictToHorizontalAxis],
  },
};

export const VerticalAxis: Story = {
  args: {
    label: "I'm only draggable vertically",
    axis: DraggableAxis.Vertical,
    modifiers: [restrictToVerticalAxis],
  },
};

export const RestrictToWindowEdges: Story = {
  args: {
    label: "I'm only draggable within the window bounds",
    modifiers: [restrictToWindowEdges],
  },
};
