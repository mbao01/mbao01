import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from "../Flex";
import { Spacer } from "./Spacer";

const meta = {
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
      <Spacer size={8} />
      <div className="border-base-content card bg-base-100 border p-4">Item 2</div>
      <Spacer size={4} />
      <div className="border-base-content card bg-base-100 border p-4">Item 3</div>
    </Flex>
  ),
};

export const HorizontalSpacing: Story = {
  render: () => (
    <Flex direction="row">
      <div className="border-base-content card bg-base-100 border p-4">Item 1</div>
      <Spacer axis="horizontal" size={8} />
      <div className="border-base-content card bg-base-100 border p-4">Item 2</div>
      <Spacer axis="horizontal" size={4} />
      <div className="border-base-content card bg-base-100 border p-4">Item 3</div>
    </Flex>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <Flex direction="col">
      <div className="text-sm">Size 1</div>
      <Spacer size={1} className="bg-base-300" />
      <div className="text-sm">Size 4</div>
      <Spacer size={4} className="bg-base-300" />
      <div className="text-sm">Size 8</div>
      <Spacer size={8} className="bg-base-300" />
      <div className="text-sm">Size 16</div>
      <Spacer size={16} className="bg-base-300" />
      <div className="text-sm">End</div>
    </Flex>
  ),
};
