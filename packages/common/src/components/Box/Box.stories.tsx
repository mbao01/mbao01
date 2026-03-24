import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "./Box";

const meta = {
  title: "Layout/Box",
  component: Box,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: "select",
      options: [
        "default",
        "outlined",
        "bordered",
        "elevated",
        "ghost",
        "gradient",
        "glass",
        "inset",
      ],
    },
    rounded: { control: "select", options: ["none", "sm", "md", "lg", "xl", "2xl", "full"] },
    padding: { control: "select", options: ["none", "sm", "md", "lg", "xl"] },
    shadow: { control: "select", options: ["none", "sm", "md", "lg", "xl"] },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-6 p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

const content = (
  <div className="space-y-1">
    <p className="font-semibold text-base-content">Total Revenue</p>
    <p className="text-2xl font-bold text-base-content">$48,352.00</p>
    <p className="text-xs text-base-content/60">+12.5% from last month</p>
  </div>
);

export const Default: Story = {
  args: {
    children: content,
    padding: "lg",
    rounded: "lg",
  },
};

export const Outlined: Story = {
  args: {
    children: content,
    style: "outlined",
    padding: "lg",
    rounded: "lg",
  },
};

export const DoubleBorder: Story = {
  args: {
    children: content,
    style: "bordered",
    padding: "lg",
    rounded: "xl",
  },
};

export const Elevated: Story = {
  args: {
    children: content,
    style: "elevated",
    padding: "lg",
    rounded: "xl",
  },
};

export const Ghost: Story = {
  args: {
    children: content,
    style: "ghost",
    padding: "lg",
    rounded: "lg",
  },
};

export const Gradient: Story = {
  args: {
    children: content,
    style: "gradient",
    padding: "lg",
    rounded: "xl",
  },
};

export const Glass: Story = {
  decorators: [
    (Story) => (
      <div className="rounded-xl bg-gradient-to-br from-primary to-secondary p-10">
        <Story />
      </div>
    ),
  ],
  args: {
    children: (
      <div className="space-y-1">
        <p className="font-semibold text-white">Glass Panel</p>
        <p className="text-2xl font-bold text-white">$48,352.00</p>
        <p className="text-xs text-white/70">+12.5% from last month</p>
      </div>
    ),
    style: "glass",
    padding: "lg",
    rounded: "xl",
  },
};

export const Inset: Story = {
  args: {
    children: content,
    style: "inset",
    padding: "lg",
    rounded: "lg",
  },
};

export const Allstyles: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      {(
        [
          "default",
          "outlined",
          "bordered",
          "elevated",
          "ghost",
          "gradient",
          "glass",
          "inset",
        ] as const
      ).map((style) => (
        <Box key={style} style={style} padding="md" rounded="xl">
          <p className="text-xs font-medium text-base-content/60 mb-1">{style}</p>
          <p className="font-semibold text-base-content">$24,500.00</p>
        </Box>
      ))}
    </div>
  ),
};

export const DashboardCards: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Box style="elevated" padding="lg" rounded="xl">
        <p className="text-sm text-base-content/60">Total Sales</p>
        <p className="mt-1 text-2xl font-bold">$842,560</p>
        <p className="mt-1 text-xs text-success">+4.3% vs last month</p>
      </Box>
      <Box style="bordered" padding="lg" rounded="xl">
        <p className="text-sm text-base-content/60">Active Users</p>
        <p className="mt-1 text-2xl font-bold">12,486</p>
        <p className="mt-1 text-xs text-success">+1.9% vs last month</p>
      </Box>
      <Box style="outlined" padding="lg" rounded="xl" shadow="sm">
        <p className="text-sm text-base-content/60">Conversion Rate</p>
        <p className="mt-1 text-2xl font-bold">4.8%</p>
        <p className="mt-1 text-xs text-error">-1.0% vs last month</p>
      </Box>
    </div>
  ),
};

export const Nested: Story = {
  render: () => (
    <Box style="elevated" padding="lg" rounded="2xl">
      <p className="text-lg font-semibold mb-3">Monthly Overview</p>
      <div className="grid grid-cols-2 gap-3">
        <Box style="ghost" padding="md" rounded="lg">
          <p className="text-xs text-base-content/60">Income</p>
          <p className="text-lg font-bold text-success">$12,450</p>
        </Box>
        <Box style="ghost" padding="md" rounded="lg">
          <p className="text-xs text-base-content/60">Expenses</p>
          <p className="text-lg font-bold text-error">$8,230</p>
        </Box>
        <Box style="inset" padding="md" rounded="lg" className="col-span-2">
          <p className="text-xs text-base-content/60">Net Savings</p>
          <p className="text-lg font-bold">$4,220</p>
        </Box>
      </div>
    </Box>
  ),
};
