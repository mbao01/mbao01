import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpotlightCard } from "./SpotlightCard";

const meta = {
  title: "Effects/SpotlightCard",
  component: SpotlightCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SpotlightCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "w-80",
    children: (
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold">Spotlight Card</h3>
        <p className="text-sm text-base-content/70">
          Hover over this card to see the spotlight effect follow your cursor.
        </p>
      </div>
    ),
  },
};

export const CustomColor: Story = {
  args: {
    className: "w-80",
    spotlightColor: "oklch(0.7 0.2 140 / 0.2)",
    children: (
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold">Green Spotlight</h3>
        <p className="text-sm text-base-content/70">
          This card has a green-tinted spotlight effect.
        </p>
      </div>
    ),
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      {["Feature A", "Feature B", "Feature C", "Feature D"].map((title) => (
        <SpotlightCard key={title} className="w-48">
          <div className="p-4">
            <h4 className="mb-1 font-semibold">{title}</h4>
            <p className="text-xs text-base-content/60">
              Interactive spotlight effect on hover.
            </p>
          </div>
        </SpotlightCard>
      ))}
    </div>
  ),
};
