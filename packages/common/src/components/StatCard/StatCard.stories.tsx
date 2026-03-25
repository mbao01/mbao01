import type { Meta, StoryObj } from "@storybook/react-vite";
import { CreditCardIcon, DollarSignIcon, ShoppingCartIcon, UsersIcon } from "lucide-react";
import { StatCard } from "./StatCard";

const meta = {
  title: "Molecules/StatCard",
  component: StatCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-72 pt-8"><Story /></div>],
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <CreditCardIcon className="size-5 text-success" />,
    title: "Monthly income",
    value: "$16,281.48",
    trend: "+9,8%",
    trendLabel: "compared to last month",
  },
};

export const NegativeTrend: Story = {
  args: {
    icon: <ShoppingCartIcon className="size-5 text-primary" />,
    title: "Product Returns",
    value: "326",
    trend: "-3.2%",
    trendLabel: "Returns down vs last month",
  },
};

export const WithoutIcon: Story = {
  args: {
    title: "Conversion Rate",
    value: "4.8%",
    trend: "-1.0%",
    trendLabel: "Conversions up vs last month",
  },
};

export const WithDescription: Story = {
  args: {
    icon: <UsersIcon className="size-5 text-info" />,
    title: "Active Users",
    value: "12,486",
    description: "Updated just now",
  },
};

export const DashboardRow: Story = {
  args: { title: "Total Sales", value: "$842,560" },
  decorators: [
    (Story) => (
      <div className="grid w-[800px] grid-cols-3 gap-6 pt-8">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <StatCard
        icon={<DollarSignIcon className="size-5 text-success" />}
        title="Total Sales"
        value="$842,560"
        trend="+4.3%"
        trendLabel="Sales up vs last month"
      />
      <StatCard
        icon={<ShoppingCartIcon className="size-5 text-primary" />}
        title="Total Orders"
        value="12,486"
        trend="+1.9%"
        trendLabel="Orders up vs last month"
      />
      <StatCard
        icon={<CreditCardIcon className="size-5 text-warning" />}
        title="Monthly income"
        value="$16,281.48"
        trend="+9.8%"
        trendLabel="compared to last month"
      />
    </>
  ),
};
