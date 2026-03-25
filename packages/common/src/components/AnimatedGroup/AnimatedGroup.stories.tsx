import type { Meta, StoryObj } from "@storybook/react-vite";
import { AnimatedGroup } from "./AnimatedGroup";
import { Card } from "../Card";

const meta = {
  title: "Effects/AnimatedGroup",
  component: AnimatedGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AnimatedGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = ["Feature One", "Feature Two", "Feature Three", "Feature Four"];

export const FadeIn: Story = {
  args: {
    preset: "fade",
    className: "flex gap-4",
    children: items.map((item) => (
      <Card key={item} border="solid" className="w-40">
        <Card.Body>
          <Card.Title>{item}</Card.Title>
        </Card.Body>
      </Card>
    )),
  },
};

export const SlideUp: Story = {
  args: {
    preset: "slide",
    className: "flex gap-4",
    children: items.map((item) => (
      <Card key={item} border="solid" className="w-40">
        <Card.Body>
          <Card.Title>{item}</Card.Title>
        </Card.Body>
      </Card>
    )),
  },
};

export const ScaleIn: Story = {
  args: {
    preset: "scale",
    className: "flex gap-4",
    children: items.map((item) => (
      <Card key={item} border="solid" className="w-40">
        <Card.Body>
          <Card.Title>{item}</Card.Title>
        </Card.Body>
      </Card>
    )),
  },
};

export const BlurSlide: Story = {
  args: {
    preset: "blur-slide",
    className: "flex gap-4",
    staggerDelay: 0.15,
    children: items.map((item) => (
      <Card key={item} border="solid" className="w-40">
        <Card.Body>
          <Card.Title>{item}</Card.Title>
        </Card.Body>
      </Card>
    )),
  },
};
