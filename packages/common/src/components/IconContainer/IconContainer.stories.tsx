import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bell, Check, CreditCard, Heart, Star } from "lucide-react";
import { IconContainer } from "./IconContainer";

const meta = {
  title: "Atoms/IconContainer",
  component: IconContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof IconContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <CreditCard />,
  },
};

export const PrimarySoft: Story = {
  args: {
    variant: "primary",
    soft: true,
    children: <Heart />,
  },
};

export const SuccessWithShadow: Story = {
  args: {
    variant: "success",
    soft: true,
    shadow: "md",
    children: <Check />,
  },
};

export const RoundedShape: Story = {
  args: {
    variant: "accent",
    shape: "rounded",
    children: <Bell />,
  },
};

export const WithOutline: Story = {
  args: {
    variant: "warning",
    outline: true,
    children: <Star />,
  },
};

export const LargeSize: Story = {
  args: {
    variant: "info",
    size: "xl",
    shadow: "lg",
    children: <CreditCard />,
  },
};

export const SmallSize: Story = {
  args: {
    variant: "error",
    size: "xs",
    children: <Bell />,
  },
};

export const Elevated: Story = {
  args: {
    variant: "success",
    raised: true,
    children: <CreditCard />,
  },
};

export const ElevatedLarge: Story = {
  args: {
    variant: "primary",
    raised: true,
    size: "xl",
    children: <Heart />,
  },
};
