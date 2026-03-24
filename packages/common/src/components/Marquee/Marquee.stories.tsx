import type { Meta, StoryObj } from "@storybook/react-vite";
import { Marquee } from "./Marquee";

const meta = {
  title: "Effects/Marquee",
  component: Marquee,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

const TickerItem = ({ symbol, price, change }: { symbol: string; price: string; change: number }) => (
  <div className="flex items-center gap-2 rounded-md border px-3 py-1.5">
    <span className="text-sm font-semibold">{symbol}</span>
    <span className="text-sm tabular-nums">{price}</span>
    <span className={`text-xs font-medium ${change >= 0 ? "text-success" : "text-error"}`}>
      {change >= 0 ? "+" : ""}{change}%
    </span>
  </div>
);

export const StockTicker: Story = {
  args: { children: null },
  render: (args) => (
    <Marquee {...args} gap={12}>
      <TickerItem symbol="AAPL" price="$178.72" change={1.24} />
      <TickerItem symbol="GOOGL" price="$141.80" change={-0.53} />
      <TickerItem symbol="MSFT" price="$378.91" change={2.15} />
      <TickerItem symbol="AMZN" price="$178.25" change={0.89} />
      <TickerItem symbol="TSLA" price="$248.42" change={-1.67} />
      <TickerItem symbol="META" price="$505.75" change={3.21} />
      <TickerItem symbol="NVDA" price="$875.28" change={4.56} />
      <TickerItem symbol="BTC" price="$67,432" change={2.34} />
    </Marquee>
  ),
};

export const ReverseDirection: Story = {
  args: { children: null },
  render: (args) => (
    <Marquee {...args} direction="right" speed={30}>
      <TickerItem symbol="EUR/USD" price="1.0842" change={0.12} />
      <TickerItem symbol="GBP/USD" price="1.2654" change={-0.08} />
      <TickerItem symbol="USD/JPY" price="154.32" change={0.45} />
      <TickerItem symbol="USD/CHF" price="0.8912" change={-0.23} />
    </Marquee>
  ),
};
