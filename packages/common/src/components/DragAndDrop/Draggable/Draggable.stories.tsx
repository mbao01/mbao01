import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  restrictToHorizontalAxis,
  restrictToVerticalAxis,
  restrictToWindowEdges,
  snapCenterToCursor,
} from "@dnd-kit/modifiers";
import { GripVerticalIcon } from "lucide-react";
import { DraggableExample, DraggableSnapToGridExample } from "./Draggable.example";
import { DraggableAxis } from "./types";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Drag and Drop/Draggable",
  component: DraggableExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof DraggableExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const DragHandle: Story = {
  args: {
    label: "Drag with the handle",
    handle: <GripVerticalIcon className="w-4 h-4 absolute right-0 -top-5" />,
  },
};

export const PressDelay: Story = {
  args: {
    label: "Hold me to drag",
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  },
};

export const PressDelayOrDistance: Story = {
  args: {
    label: "Activated dragging 3px or holding 250ms",
    activationConstraint: {
      delay: 250,
      distance: 3,
      tolerance: 10,
    },
  },
};

export const MinimumDistance: Story = {
  args: {
    label: "I'm activated after dragging 25px",
    activationConstraint: {
      distance: 25,
    },
  },
};

export const MinimumDistanceOnXAxis: Story = {
  args: {
    label: "I'm activated after dragging 25px on the X axis",
    activationConstraint: {
      distance: { x: 25 },
    },
  },
};

export const MinimumDistanceOnYAxis: Story = {
  args: {
    label: "I'm activated after dragging 25px on the Y axis",
    activationConstraint: {
      distance: { y: 25 },
    },
  },
};

export const MinimumDistanceOnXAndYAxis: Story = {
  args: {
    label: "I'm activated after dragging 25px on the X and Y axis",
    activationConstraint: {
      distance: { x: 25, y: 25 },
    },
  },
};

export const MinimumDistanceXAxisToleranceY: Story = {
  args: {
    label:
      "I'm activated after dragging 15px on the X axis and aborted after dragging 30px on the Y axis",
    activationConstraint: {
      distance: { x: 15 },
      tolerance: { y: 30 },
    },
  },
};

export const MinimumDistanceYAxisToleranceX: Story = {
  args: {
    label:
      "I'm activated after dragging 15px on the Y axis and aborted after dragging 30px on the X axis",
    activationConstraint: {
      distance: { y: 15 },
      tolerance: { x: 30 },
    },
  },
};

export const HorizontalAxis: Story = {
  args: {
    label: "Draggable horizontally",
    axis: DraggableAxis.Horizontal,
    modifiers: [restrictToHorizontalAxis],
  },
};

export const VerticalAxis: Story = {
  args: {
    label: "Draggable vertically",
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

export const SnapToGrid: Story = {
  args: {},
  render: () => <DraggableSnapToGridExample />,
};

export const SnapCenterToCursor: Story = {
  args: {
    label: "When you grab me, my center will move to where the cursor is.",
    modifiers: [snapCenterToCursor],
  },
};
