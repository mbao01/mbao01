import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../Badge";
import { Description } from "./Description";
import { DescriptionGroup } from "./DescriptionGroup";

const meta = {
  title: "Typography/Description",
  component: Description,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "card", "subtle"] },
    layout: { control: "select", options: ["vertical", "horizontal", "inline"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
  decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Description.Term>Name</Description.Term>
        <Description.Detail>Jonny Bravo</Description.Detail>
        <Description.Term>Email</Description.Term>
        <Description.Detail>jonny@example.com</Description.Detail>
        <Description.Term>Role</Description.Term>
        <Description.Detail>Software Engineer</Description.Detail>
      </>
    ),
  },
};

export const WithDividers: Story = {
  args: {
    dividers: true,
    children: (
      <>
        <Description.Term>Account</Description.Term>
        <Description.Detail>Premium Plan</Description.Detail>
        <Description.Term>Billing</Description.Term>
        <Description.Detail>$29/month</Description.Detail>
        <Description.Term>Next renewal</Description.Term>
        <Description.Detail>April 15, 2026</Description.Detail>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    layout: "horizontal",
    dividers: true,
    children: (
      <>
        <Description.Pair>
          <Description.Term>Status</Description.Term>
          <Description.Detail>
            <Badge variant="success">Active</Badge>
          </Description.Detail>
        </Description.Pair>
        <Description.Pair>
          <Description.Term>Created</Description.Term>
          <Description.Detail>March 12, 2026</Description.Detail>
        </Description.Pair>
        <Description.Pair>
          <Description.Term>Last login</Description.Term>
          <Description.Detail>2 hours ago</Description.Detail>
        </Description.Pair>
        <Description.Pair>
          <Description.Term>IP Address</Description.Term>
          <Description.Detail className="font-mono">192.168.1.42</Description.Detail>
        </Description.Pair>
      </>
    ),
  },
};

export const Inline: Story = {
  args: {
    layout: "inline",
    children: (
      <>
        <Description.Pair>
          <Description.Term>Type</Description.Term>
          <Description.Detail>Wire Transfer</Description.Detail>
        </Description.Pair>
        <Description.Pair>
          <Description.Term>Ref</Description.Term>
          <Description.Detail className="font-mono">TXN-29481</Description.Detail>
        </Description.Pair>
        <Description.Pair>
          <Description.Term>Date</Description.Term>
          <Description.Detail>Mar 24, 2026</Description.Detail>
        </Description.Pair>
      </>
    ),
  },
};

export const CardVariant: Story = {
  args: {
    variant: "card",
    dividers: true,
    children: (
      <>
        <Description.Term>Portfolio Value</Description.Term>
        <Description.Detail className="text-lg font-semibold">$142,850.00</Description.Detail>
        <Description.Term>Day Change</Description.Term>
        <Description.Detail className="text-success">+$1,234.56 (+0.87%)</Description.Detail>
        <Description.Term>Total Return</Description.Term>
        <Description.Detail className="text-success">+$42,850.00 (+42.85%)</Description.Detail>
      </>
    ),
  },
};

export const SubtleVariant: Story = {
  args: {
    variant: "subtle",
    children: (
      <>
        <Description.Term>Account Number</Description.Term>
        <Description.Detail className="font-mono">****-****-****-4829</Description.Detail>
        <Description.Term>Routing Number</Description.Term>
        <Description.Detail className="font-mono">021000021</Description.Detail>
      </>
    ),
  },
};

export const Striped: Story = {
  args: {
    striped: true,
    children: (
      <>
        <Description.Pair>
          <Description.Term>Gross Income</Description.Term>
          <Description.Detail>$85,000.00</Description.Detail>
        </Description.Pair>
        <Description.Pair>
          <Description.Term>Federal Tax</Description.Term>
          <Description.Detail>-$14,450.00</Description.Detail>
        </Description.Pair>
        <Description.Pair>
          <Description.Term>State Tax</Description.Term>
          <Description.Detail>-$4,250.00</Description.Detail>
        </Description.Pair>
        <Description.Pair>
          <Description.Term>Insurance</Description.Term>
          <Description.Detail>-$3,600.00</Description.Detail>
        </Description.Pair>
        <Description.Pair>
          <Description.Term>Net Income</Description.Term>
          <Description.Detail className="font-semibold">$62,700.00</Description.Detail>
        </Description.Pair>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    dividers: true,
    children: (
      <>
        <Description.Term>Fee</Description.Term>
        <Description.Detail>$2.50</Description.Detail>
        <Description.Term>Tax</Description.Term>
        <Description.Detail>$0.45</Description.Detail>
        <Description.Term>Total</Description.Term>
        <Description.Detail className="font-semibold">$2.95</Description.Detail>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    variant: "card",
    dividers: true,
    children: (
      <>
        <Description.Term>Company</Description.Term>
        <Description.Detail>Acme Corporation</Description.Detail>
        <Description.Term>Industry</Description.Term>
        <Description.Detail>Financial Technology</Description.Detail>
        <Description.Term>Founded</Description.Term>
        <Description.Detail>2019</Description.Detail>
      </>
    ),
  },
};

export const Group: StoryObj = {
  render: () => (
    <DescriptionGroup
      title="Account Overview"
      description="Personal and financial details"
      direction="column"
      dividers
    >
      <Description variant="default" dividers>
        <Description.Term>Full Name</Description.Term>
        <Description.Detail>Alexandra Chen</Description.Detail>
        <Description.Term>Email</Description.Term>
        <Description.Detail>alex.chen@example.com</Description.Detail>
        <Description.Term>Phone</Description.Term>
        <Description.Detail>+1 (555) 123-4567</Description.Detail>
      </Description>
      <Description variant="default" dividers>
        <Description.Term>Account Type</Description.Term>
        <Description.Detail>Investment Brokerage</Description.Detail>
        <Description.Term>Account Number</Description.Term>
        <Description.Detail className="font-mono">****-7842</Description.Detail>
        <Description.Term>Status</Description.Term>
        <Description.Detail>
          <Badge variant="success">Verified</Badge>
        </Description.Detail>
      </Description>
    </DescriptionGroup>
  ),
};

export const GroupRow: StoryObj = {
  render: () => (
    <div className="w-[700px]">
      <DescriptionGroup direction="row" dividers>
        <Description size="sm">
          <Description.Term>Open</Description.Term>
          <Description.Detail className="font-semibold">$182.45</Description.Detail>
          <Description.Term>High</Description.Term>
          <Description.Detail className="font-semibold text-success">$185.20</Description.Detail>
        </Description>
        <Description size="sm">
          <Description.Term>Low</Description.Term>
          <Description.Detail className="font-semibold text-error">$180.10</Description.Detail>
          <Description.Term>Close</Description.Term>
          <Description.Detail className="font-semibold">$184.75</Description.Detail>
        </Description>
        <Description size="sm">
          <Description.Term>Volume</Description.Term>
          <Description.Detail className="font-semibold">12.4M</Description.Detail>
          <Description.Term>Avg Volume</Description.Term>
          <Description.Detail className="font-semibold">8.2M</Description.Detail>
        </Description>
      </DescriptionGroup>
    </div>
  ),
};
