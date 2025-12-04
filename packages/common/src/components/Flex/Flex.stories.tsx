import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from "./Flex";

const meta = {
  component: Flex,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = (
  <>
    <div className="border-base-content card bg-base-100 border text-center">
      <div className="card-body">Item 1</div>
    </div>
    <div className="border-base-content card bg-base-100 border text-center">
      <div className="card-body">Item 2</div>
    </div>
    <div className="border-base-content card bg-base-100 border text-center">
      <div className="card-body">Item 3</div>
    </div>
  </>
);

export const Default: Story = {
  args: {
    children: items,
  },
};

export const Column: Story = {
  args: {
    direction: "col",
    children: items,
  },
};

export const CenterAligned: Story = {
  args: {
    align: "center",
    justify: "center",
    className: "h-64 border border-dashed border-base-content/20",
    children: items,
  },
};

export const SpaceBetween: Story = {
  args: {
    justify: "between",
    children: items,
  },
};

export const WithGap: Story = {
  args: {
    gap: 6,
    children: items,
  },
};

export const Wrap: Story = {
  args: {
    wrap: "wrap",
    gap: 4,
    className: "max-w-md",
    children: (
      <>
        {items}
        {items}
        {items}
      </>
    ),
  },
};
