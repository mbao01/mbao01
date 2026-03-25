import type { Meta, StoryObj } from "@storybook/react-vite";
import { WidgetShell } from "./WidgetShell";

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
  args: {
    state: "loading",
    title: "Revenue",
    description: "Monthly overview",
    children: <p>Content</p>,
  },
};

export const Error: Story = {
  args: {
    state: "error",
    title: "Revenue",
    description: "Monthly overview",
    onRetry: () => alert("Retrying..."),
    children: <p>Content</p>,
  },
};

export const Empty: Story = {
  args: {
    state: "empty",
    title: "Recent Transactions",
    description: "Last 30 days",
    children: <p>Content</p>,
  },
};

export const AllStates: Story = {
  args: { children: null },
  render: function AllStatesStory() {
    return (
      <div className="flex flex-col gap-4 w-80">
        <WidgetShell state="loading" title="Loading Widget">
          <p>Content</p>
        </WidgetShell>
        <WidgetShell state="ready" title="Ready Widget">
          <p className="text-2xl font-bold">$45,231</p>
        </WidgetShell>
        <WidgetShell state="error" title="Error Widget">
          <p>Content</p>
        </WidgetShell>
        <WidgetShell state="empty" title="Empty Widget">
          <p>Content</p>
        </WidgetShell>
      </div>
    );
  },
};
