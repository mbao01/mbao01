import type { Meta, StoryObj } from "@storybook/react-vite";
import { CreditCardIcon, DollarSignIcon, TrendingUpIcon, UsersIcon } from "lucide-react";
import { MiniAreaChart } from "../MiniAreaChart";
import { MiniBarChart } from "../MiniBarChart";
import { MiniDonutChart } from "../MiniDonutChart";
import { MiniStackedBar } from "../MiniStackedBar";
import { Sparkline } from "../Sparkline";
import { KPICard } from "./KPICard";

const meta = {
  title: "Data Display/KPICard",
  component: KPICard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[280px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof KPICard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Total Revenue",
    value: "$45,231.89",
    change: 20.1,
    description: "from last month",
    chart: (
      <Sparkline
        data={[10, 15, 12, 20, 18, 25, 30, 28, 35, 40, 38, 45]}
        color="oklch(0.7 0.2 150)"
        filled
        width={80}
        height={32}
      />
    ),
    icon: <DollarSignIcon className="size-4" />,
  },
};

export const WithBarChart: Story = {
  args: {
    title: "Weekly Sales",
    value: "+2,350",
    change: 12.5,
    description: "from last week",
    chart: (
      <MiniBarChart data={[30, 45, 28, 55, 42, 60, 48]} color="oklch(0.7 0.2 150)" highlightLast />
    ),
    icon: <CreditCardIcon className="size-4" />,
  },
};

export const WithAreaChart: Story = {
  args: {
    title: "Active Users",
    value: "1,429",
    change: 8.3,
    description: "from last month",
    chart: (
      <MiniAreaChart data={[800, 950, 1100, 1050, 1200, 1350, 1429]} color="oklch(0.7 0.15 250)" width={80} height={32} />
    ),
    icon: <UsersIcon className="size-4" />,
  },
};

export const WithDonutChart: Story = {
  args: {
    title: "Traffic Sources",
    value: "24,500",
    description: "total visits",
    chart: (
      <MiniDonutChart
        segments={[
          { value: 60, label: "Direct" },
          { value: 25, label: "Referral" },
          { value: 15, label: "Social" },
        ]}
        size={40}
      />
    ),
    icon: <TrendingUpIcon className="size-4" />,
  },
};

export const WithStackedBar: Story = {
  args: {
    title: "Budget Allocation",
    value: "$120,000",
    description: "quarterly budget",
    chart: (
      <MiniStackedBar
        segments={[
          { value: 50, label: "Engineering" },
          { value: 30, label: "Marketing" },
          { value: 20, label: "Operations" },
        ]}
        height={6}
      />
    ),
    icon: <DollarSignIcon className="size-4" />,
  },
};

export const Negative: Story = {
  args: {
    title: "Churn Rate",
    value: "3.2%",
    change: -0.8,
    description: "from last month",
    chart: (
      <Sparkline
        data={[5, 4.5, 4.2, 3.8, 4, 3.5, 3.2]}
        color="oklch(0.65 0.25 25)"
        filled
        width={80}
        height={32}
      />
    ),
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
  decorators: [],
  render: () => (
    <div className="grid grid-cols-4 gap-4 w-[900px]">
      <KPICard
        title="Total Revenue"
        value="$45,231"
        change={20.1}
        description="from last month"
        chart={
          <Sparkline
            data={[10, 15, 12, 20, 18, 25, 30, 28, 35, 40, 38, 45]}
            color="oklch(0.7 0.2 150)"
            filled
            width={80}
            height={32}
          />
        }
        icon={<DollarSignIcon className="size-4" />}
      />
      <KPICard
        title="Subscriptions"
        value="+2,350"
        change={180.1}
        description="from last month"
        chart={
          <MiniBarChart
            data={[100, 200, 300, 500, 800, 1200, 1800, 2350]}
            color="oklch(0.7 0.15 250)"
            highlightLast
          />
        }
        icon={<UsersIcon className="size-4" />}
      />
      <KPICard
        title="Sales"
        value="+12,234"
        change={19}
        description="from last month"
        chart={
          <MiniAreaChart
            data={[5000, 6000, 7000, 8500, 9000, 10000, 11000, 12234]}
            color="oklch(0.7 0.2 150)"
            width={80}
            height={32}
          />
        }
        icon={<CreditCardIcon className="size-4" />}
      />
      <KPICard
        title="Expenses"
        value="$8,200"
        change={-4.5}
        description="from last month"
        chart={
          <Sparkline
            data={[9000, 8800, 8600, 8500, 8400, 8300, 8200]}
            color="oklch(0.65 0.25 25)"
            filled
            width={80}
            height={32}
          />
        }
        icon={<TrendingUpIcon className="size-4" />}
      />
    </div>
  ),
};
