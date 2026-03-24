import type { Meta, StoryObj } from "@storybook/react-vite";
import { DollarSignIcon, TrendingUpIcon, UsersIcon, CreditCardIcon } from "lucide-react";
import { KPICard } from "./KPICard";

const meta = {
  title: "Data Display/KPICard",
  component: KPICard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof KPICard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Total Revenue",
    value: "$45,231.89",
    change: 20.1,
    description: "from last month",
    sparklineData: [10, 15, 12, 20, 18, 25, 30, 28, 35, 40, 38, 45],
    icon: <DollarSignIcon className="size-4" />,
  },
};

export const Negative: Story = {
  args: {
    title: "Churn Rate",
    value: "3.2%",
    change: -0.8,
    description: "from last month",
    sparklineData: [5, 4.5, 4.2, 3.8, 4, 3.5, 3.2],
    icon: <TrendingUpIcon className="size-4" />,
  },
};

export const Loading: Story = {
  args: {
    title: "Revenue",
    value: "$0",
    loading: true,
    icon: <DollarSignIcon className="size-4" />,
  },
};

export const DashboardRow: Story = {
  args: { title: "Total Revenue", value: "$45,231" },
  render: () => (
    <div className="grid grid-cols-4 gap-4 w-[900px]">
      <KPICard
        title="Total Revenue"
        value="$45,231"
        change={20.1}
        description="from last month"
        sparklineData={[10, 15, 12, 20, 18, 25, 30, 28, 35, 40, 38, 45]}
        icon={<DollarSignIcon className="size-4" />}
      />
      <KPICard
        title="Subscriptions"
        value="+2,350"
        change={180.1}
        description="from last month"
        sparklineData={[100, 200, 300, 500, 800, 1200, 1800, 2350]}
        icon={<UsersIcon className="size-4" />}
      />
      <KPICard
        title="Sales"
        value="+12,234"
        change={19}
        description="from last month"
        sparklineData={[5000, 6000, 7000, 8500, 9000, 10000, 11000, 12234]}
        icon={<CreditCardIcon className="size-4" />}
      />
      <KPICard
        title="Expenses"
        value="$8,200"
        change={-4.5}
        description="from last month"
        sparklineData={[9000, 8800, 8600, 8500, 8400, 8300, 8200]}
        icon={<TrendingUpIcon className="size-4" />}
      />
    </div>
  ),
};
