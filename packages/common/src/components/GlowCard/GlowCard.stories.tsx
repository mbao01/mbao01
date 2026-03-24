import type { Meta, StoryObj } from "@storybook/react-vite";
import { GlowCard } from "./GlowCard";

const meta = {
  title: "Effects/GlowCard",
  component: GlowCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GlowCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <GlowCard {...args} className="w-80">
      <h3 className="text-lg font-semibold mb-2">Glow Card</h3>
      <p className="text-sm opacity-70">
        Hover over this card to see the glowing gradient border effect.
      </p>
    </GlowCard>
  ),
};

export const WarmColors: Story = {
  render: (args) => (
    <GlowCard
      {...args}
      className="w-80"
      gradientFrom="oklch(0.7 0.25 30)"
      gradientVia="oklch(0.7 0.2 60)"
      gradientTo="oklch(0.7 0.25 350)"
    >
      <h3 className="text-lg font-semibold mb-2">Warm Glow</h3>
      <p className="text-sm opacity-70">
        A warm-toned gradient border glow effect.
      </p>
    </GlowCard>
  ),
};
