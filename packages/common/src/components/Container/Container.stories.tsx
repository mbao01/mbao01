import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "./Container";

const meta = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const content = (
  <div className="border-base-content card bg-base-100 border p-6">
    <h2 className="text-2xl font-bold">Container Content</h2>
    <p className="mt-4">
      This container automatically centers content and applies responsive padding. Resize the
      browser to see the max-width constraints in action.
    </p>
  </div>
);

export const Default: Story = {
  args: {
    children: content,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: content,
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: content,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: content,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: content,
  },
};

export const FullWidth: Story = {
  args: {
    children: content,
  },
};

export const NoPadding: Story = {
  args: {
    padding: false,
    children: content,
  },
};

export const NotCentered: Story = {
  args: {
    center: false,
    children: content,
  },
};
