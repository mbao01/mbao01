import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AnimatedCounter } from "./AnimatedCounter";

const meta = {
  title: "Effects/AnimatedCounter",
  component: AnimatedCounter,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof AnimatedCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 12450, prefix: "$", className: "text-4xl font-bold" },
};

export const WithDecimals: Story = {
  args: { value: 99.99, prefix: "$", decimalPlaces: 2, className: "text-4xl font-bold" },
};

export const Interactive: Story = {
  render: () => {
    const [val, setVal] = useState(1000);
    return (
      <div className="flex flex-col items-center gap-4">
        <AnimatedCounter value={val} prefix="$" className="text-5xl font-bold" />
        <div className="flex gap-2">
          <button className="btn btn-sm" onClick={() => setVal((v) => v + 100)}>+$100</button>
          <button className="btn btn-sm" onClick={() => setVal((v) => v - 100)}>-$100</button>
          <button className="btn btn-sm" onClick={() => setVal(Math.floor(Math.random() * 50000))}>Random</button>
        </div>
      </div>
    );
  },
};
