import type { Meta, StoryObj } from "@storybook/react";
import {
  CollisionDetectionAlgorithmsDroppableExample,
  DroppableExample,
} from "./Droppable.example";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Droppable",
  component: DroppableExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof DroppableExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const MultipleDroppableContainers: Story = {
  args: {
    containers: ["A", "B", "C"],
  },
};

export const CollisionDetectionAlgorithms: Story = {
  args: {
    containers: ["A", "B", "C"],
    collisionDetection: "rectIntersection",
  },
  render: (props) => <CollisionDetectionAlgorithmsDroppableExample {...props} />,
};
