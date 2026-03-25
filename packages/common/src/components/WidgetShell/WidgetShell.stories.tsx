import type { Meta, StoryObj } from "@storybook/react-vite";
import { EllipsisVerticalIcon } from "lucide-react";
import { WidgetShell } from "./WidgetShell";
import { WidgetShellSkeleton } from "./WidgetShellSkeleton";

const meta = {
  title: "Composable/WidgetShell",
  component: WidgetShell,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WidgetShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ready: Story = {
  args: {
    title: "Revenue",
    description: "Monthly overview",
    children: (
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">$12,450.00</span>
        <span className="text-sm text-success">+12.5% from last month</span>
      </div>
    ),
  },
};

export const Loading: Story = {
  args: { children: null },
  render: () => <WidgetShellSkeleton />,
};

export const LoadingNoHeader: Story = {
  args: { children: null },
  render: () => <WidgetShellSkeleton header={false} />,
};

export const LoadingWithHeader: Story = {
  args: {
    title: "Revenue",
    description: "Monthly overview",
    children: <WidgetShell.Loading />,
  },
};

export const Error: Story = {
  args: {
    title: "Revenue",
    description: "Monthly overview",
    children: <WidgetShell.Error onRetry={() => alert("Retrying...")} />,
  },
};

export const Empty: Story = {
  args: {
    title: "Recent Transactions",
    description: "Last 30 days",
    children: <WidgetShell.Empty />,
  },
};

export const WithAction: Story = {
  args: {
    title: "Revenue",
    description: "Monthly overview",
    action: (
      <button className="btn btn-ghost btn-xs btn-square">
        <EllipsisVerticalIcon className="size-4" />
      </button>
    ),
    children: (
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">$12,450.00</span>
        <span className="text-sm text-success">+12.5% from last month</span>
      </div>
    ),
  },
};

export const AllStates: Story = {
  args: { children: null },
  render: function AllStatesStory() {
    return (
      <div className="flex flex-col gap-4 w-80">
        <WidgetShellSkeleton />
        <WidgetShell title="Ready Widget">
          <p className="text-2xl font-bold">$45,231</p>
        </WidgetShell>
        <WidgetShell title="Error Widget">
          <WidgetShell.Error />
        </WidgetShell>
        <WidgetShell title="Empty Widget">
          <WidgetShell.Empty />
        </WidgetShell>
      </div>
    );
  },
};
