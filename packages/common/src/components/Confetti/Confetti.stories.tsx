import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Confetti } from "./Confetti";

const meta = {
  title: "Effects/Confetti",
  component: Confetti,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Confetti>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function DefaultStory() {
    const [active, setActive] = useState(false);
    return (
      <div className="flex flex-col items-center gap-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            setActive(false);
            setTimeout(() => setActive(true), 10);
          }}
        >
          Celebrate! 🎉
        </button>
        <p className="text-sm text-base-content/60">Click to trigger confetti</p>
        <Confetti active={active} />
      </div>
    );
  },
};

export const Milestone: Story = {
  render: function MilestoneStory() {
    const [active, setActive] = useState(false);
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl font-bold">$10,000</p>
        <p className="text-sm text-base-content/60">Savings milestone reached!</p>
        <button
          className="btn btn-success btn-sm"
          onClick={() => {
            setActive(false);
            setTimeout(() => setActive(true), 10);
          }}
        >
          Celebrate
        </button>
        <Confetti active={active} count={80} />
      </div>
    );
  },
};
