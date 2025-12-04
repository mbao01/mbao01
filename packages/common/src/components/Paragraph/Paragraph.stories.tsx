import type { Meta, StoryObj } from "@storybook/react-vite";
import { Paragraph } from "./Paragraph";

const meta = {
  component: Paragraph,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Paragraph size="xs">Extra Small: Lorem ipsum dolor sit amet.</Paragraph>
      <Paragraph size="sm">Small: Lorem ipsum dolor sit amet.</Paragraph>
      <Paragraph size="base">Base: Lorem ipsum dolor sit amet.</Paragraph>
      <Paragraph size="lg">Large: Lorem ipsum dolor sit amet.</Paragraph>
      <Paragraph size="xl">Extra Large: Lorem ipsum dolor sit amet.</Paragraph>
    </div>
  ),
};

export const Leading: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-md">
      <div>
        <span className="text-sm text-gray-500 mb-2 block">Leading None</span>
        <Paragraph leading="none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Paragraph>
      </div>
      <div>
        <span className="text-sm text-gray-500 mb-2 block">Leading Normal</span>
        <Paragraph leading="normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Paragraph>
      </div>
      <div>
        <span className="text-sm text-gray-500 mb-2 block">Leading Loose</span>
        <Paragraph leading="loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Paragraph>
      </div>
    </div>
  ),
};
