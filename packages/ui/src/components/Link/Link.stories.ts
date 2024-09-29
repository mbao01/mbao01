import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { Link } from "./Link";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Link,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    href: "/",
    hover: false,
    variant: "default",
    children: "Link",
  },
};

export const PrimaryLink: Story = {
  args: {
    href: "/",
    variant: "primary",
    children: "Link",
  },
};

export const ExternalLink: Story = {
  args: {
    isExternal: true,
    href: "https://google.com",
    children: "Google.com",
  },
};

export const UnderlineLink: Story = {
  args: {
    href: "/",
    underline: true,
    children: "Hover on me",
  },
};

export const HoverLink: Story = {
  args: {
    href: "/",
    hover: true,
    children: "Hover on me",
  },
};
