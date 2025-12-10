import type { Meta, StoryObj } from "@storybook/react-vite";
import { Blockquote } from "./Blockquote";

const meta = {
  title: "Typography/Blockquote",
  component: Blockquote,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    cite: "Steve Jobs",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(
        [
          "default",
          "primary",
          "secondary",
          "accent",
          "error",
          "success",
          "warning",
          "ghost",
          "info",
          "neutral",
        ] as const
      ).map((variant) => (
        <Blockquote key={variant} variant={variant}>
          {variant.toUpperCase()}: Simplicity is the ultimate sophistication.
        </Blockquote>
      ))}
    </div>
  ),
};
