import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "./Box";

const meta = {
  title: "Layout/Box",
  component: Box,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    display: "flex",
    position: "relative",
    overflow: "hidden",
  },
};
