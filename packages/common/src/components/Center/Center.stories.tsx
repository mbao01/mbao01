import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Center } from "./Center";

const meta = {
  component: Center,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Center>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "h-64 border border-dashed border-base-content/20",
    children: <Button>Centered Button</Button>,
  },
};

export const HorizontalOnly: Story = {
  args: {
    axis: "horizontal",
    className: "h-64 border border-dashed border-base-content/20",
    children: <Button>Horizontally Centered</Button>,
  },
};

export const VerticalOnly: Story = {
  args: {
    axis: "vertical",
    className: "h-64 border border-dashed border-base-content/20",
    children: <Button>Vertically Centered</Button>,
  },
};

export const Inline: Story = {
  render: () => (
    <div>
      Some text before{" "}
      <Center inline axis="horizontal" className="w-32 border border-dashed border-base-content/20">
        <span>centered</span>
      </Center>{" "}
      some text after
    </div>
  ),
};
