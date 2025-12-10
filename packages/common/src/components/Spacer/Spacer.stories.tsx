import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from "../Flex";
import { Spacer } from "./Spacer";

const meta = {
  title: "Layout/Spacer",
  component: Spacer,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalSpacing: Story = {
  render: () => (
    <Flex direction="col">
      <div className="border-base-content card bg-base-100 border p-4">Item 1</div>
      <Spacer gap={8} />
      <div className="border-base-content card bg-base-100 border p-4">Item 2</div>
      <Spacer gap={4} />
      <div className="border-base-content card bg-base-100 border p-4">Item 3</div>
    </Flex>
  ),
};

export const HorizontalSpacing: Story = {
  render: () => (
    <Flex direction="row">
      <div className="border-base-content card bg-base-100 border p-4">Item 1</div>
      <Spacer axis="horizontal" gap={8} />
      <div className="border-base-content card bg-base-100 border p-4">Item 2</div>
      <Spacer axis="horizontal" gap={4} />
      <div className="border-base-content card bg-base-100 border p-4">Item 3</div>
    </Flex>
  ),
};

export const Differentgaps: Story = {
  render: () => (
    <Flex direction="col">
      <div className="text-sm">gap 1</div>
      <Spacer gap={1} className="bg-base-300" />
      <div className="text-sm">gap 4</div>
      <Spacer gap={4} className="bg-base-300" />
      <div className="text-sm">gap 8</div>
      <Spacer gap={8} className="bg-base-300" />
      <div className="text-sm">gap 16</div>
      <Spacer gap={16} className="bg-base-300" />
      <div className="text-sm">End</div>
    </Flex>
  ),
};
