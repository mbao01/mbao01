import type { Meta, StoryObj } from "@storybook/react";
import c from "clsx";
import { Button } from "../Button";
import { Card } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const Example = (
  <>
    <Card.Body>
      <Card.Title>Nike Shoe!</Card.Title>
      If a dog chews shoes whose shoes does he choose?
      <Card.Actions>
        <Button name="hello" variant="secondary">
          Buy Now
        </Button>
      </Card.Actions>
    </Card.Body>
    <Card.Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
  </>
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    className: c("w-96"),
    children: Example,
  },
};

export const FullWidth: Story = {
  args: {
    children: Example,
  },
};

export const OverlayImageOnCard: Story = {
  args: {
    overlay: true,
    className: c("w-96"),
    children: Example,
  },
};

export const CompactCard: Story = {
  args: {
    compact: true,
    className: c("w-96"),
    children: Example,
  },
};

export const BorderedCard: Story = {
  args: {
    bordered: true,
    className: c("w-96"),
    children: Example,
  },
};

export const HorizontalCard: Story = {
  args: {
    horizontal: true,
    className: c("w-1/2"),
    bordered: true,
    children: Example,
  },
};
