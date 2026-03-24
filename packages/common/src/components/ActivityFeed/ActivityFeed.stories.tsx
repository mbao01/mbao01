import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CreditCardIcon,
  FileTextIcon,
  UserPlusIcon,
} from "lucide-react";
import { ActivityFeed } from "./ActivityFeed";

const meta = {
  title: "Data Display/ActivityFeed",
  component: ActivityFeed,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof ActivityFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: "1",
        icon: <ArrowDownIcon className="size-4 text-success" />,
        content: (
          <span>
            <strong>$2,500.00</strong> received from <strong>Acme Inc</strong>
          </span>
        ),
        timestamp: "2 min ago",
        meta: <span className="text-xs font-medium text-success">+$2,500</span>,
      },
      {
        id: "2",
        icon: <ArrowUpIcon className="size-4 text-error" />,
        content: (
          <span>
            <strong>$450.00</strong> sent to <strong>AWS</strong>
          </span>
        ),
        timestamp: "1 hour ago",
        meta: <span className="text-xs font-medium text-error">-$450</span>,
      },
      {
        id: "3",
        icon: <FileTextIcon className="size-4" />,
        content: (
          <span>
            Invoice <strong>#INV-0042</strong> generated
          </span>
        ),
        timestamp: "3 hours ago",
      },
      {
        id: "4",
        icon: <CreditCardIcon className="size-4" />,
        content: <span>New card ending in **4242** added</span>,
        timestamp: "Yesterday",
      },
      {
        id: "5",
        icon: <UserPlusIcon className="size-4" />,
        content: (
          <span>
            <strong>Jane Doe</strong> was added as admin
          </span>
        ),
        timestamp: "2 days ago",
      },
    ],
  },
};

export const Limited: Story = {
  args: {
    ...Default.args,
    maxItems: 3,
  },
};
