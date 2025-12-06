import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Banner } from "./Banner";

const meta = {
  component: Banner,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Icon name="Bell" className="h-6 w-6" />,
    title: "Notification",
    description: "You have a new message.",
  },
};

export const InfoBanner: Story = {
  args: {
    variant: "info",
    icon: <Icon name="Info" className="h-6 w-6" />,
    title: "New update available",
    description: "We have released a new version with exciting features.",
    action: <Button size="sm">Update</Button>,
  },
};

export const SuccessBanner: Story = {
  args: {
    variant: "success",
    icon: <Icon name="Check" className="h-6 w-6" />,
    title: "Payment successful",
    description: "Your order has been processed successfully.",
  },
};

export const WarningBanner: Story = {
  args: {
    variant: "warning",
    icon: <Icon name="TriangleAlert" className="h-6 w-6" />,
    title: "Warning: Low disk space",
    description: "You are running low on storage space.",
    onClose: () => alert("Closed"),
  },
};

export const ErrorBanner: Story = {
  args: {
    variant: "error",
    icon: <Icon name="X" className="h-6 w-6" />,
    title: "Error",
    description: "Something went wrong. Please try again later.",
    action: <Button size="sm">Retry</Button>,
  },
};

export const SoftBanner: Story = {
  args: {
    variant: "warning",
    border: "none",
    icon: <Icon name="X" className="h-6 w-6" />,
    title: "Error",
    description: "Something went wrong. Please try again later.",
    action: <Button size="sm">Retry</Button>,
  },
};

export const DashBanner: Story = {
  args: {
    variant: "error",
    border: "dashed",
    icon: <Icon name="X" className="h-6 w-6" />,
    title: "Error",
    description: "Something went wrong. Please try again later.",
    action: <Button size="sm">Retry</Button>,
  },
};

export const OutlineBanner: Story = {
  args: {
    variant: "success",
    border: "solid",
    icon: <Icon name="X" className="h-6 w-6" />,
    title: "Hello",
    description: "Something went right. Do not try again later.",
    action: <Button size="sm">Close</Button>,
  },
};
