import type { Meta, StoryObj } from "@storybook/react-vite";
import { BellIcon, CheckIcon, InfoIcon, TriangleAlertIcon, XIcon } from "lucide-react";
import { Button } from "../Button";
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
    icon: <BellIcon className="h-6 w-6" />,
    title: "Notification",
    description: "You have a new message.",
  },
};

export const InfoBanner: Story = {
  args: {
    variant: "info",
    icon: <InfoIcon className="h-6 w-6" />,
    title: "New update available",
    description: "We have released a new version with exciting features.",
    action: <Button size="sm">Update</Button>,
  },
};

export const SuccessBanner: Story = {
  args: {
    variant: "success",
    icon: <CheckIcon className="h-6 w-6" />,
    title: "Payment successful",
    description: "Your order has been processed successfully.",
  },
};

export const WarningBanner: Story = {
  args: {
    variant: "warning",
    icon: <TriangleAlertIcon className="h-6 w-6" />,
    title: "Warning: Low disk space",
    description: "You are running low on storage space.",
    onClose: () => alert("Closed"),
  },
};

export const ErrorBanner: Story = {
  args: {
    variant: "error",
    icon: <XIcon className="h-6 w-6" />,
    title: "Error",
    description: "Something went wrong. Please try again later.",
    action: <Button size="sm">Retry</Button>,
  },
};

export const SoftBanner: Story = {
  args: {
    variant: "warning",
    border: "none",
    icon: <XIcon className="h-6 w-6" />,
    title: "Error",
    description: "Something went wrong. Please try again later.",
    action: <Button size="sm">Retry</Button>,
  },
};

export const DashBanner: Story = {
  args: {
    variant: "error",
    border: "dashed",
    icon: <XIcon className="h-6 w-6" />,
    title: "Error",
    description: "Something went wrong. Please try again later.",
    action: <Button size="sm">Retry</Button>,
  },
};

export const OutlineBanner: Story = {
  args: {
    variant: "success",
    border: "solid",
    icon: <XIcon className="h-6 w-6" />,
    title: "Hello",
    description: "Something went right. Do not try again later.",
    action: <Button size="sm">Close</Button>,
  },
};
