import type { Meta, StoryObj } from "@storybook/react";

import { Anchor } from "./Anchor";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Anchor,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    href: "/",
    hover: false,
    variant: "default",
    children: "Anchor",
  },
};

export const PrimaryAnchor: Story = {
  args: {
    href: "/",
    variant: "primary",
    children: "Anchor",
  },
};

export const AnchorWithTargetBlank: Story = {
  args: {
    href: "https://example.com",
    target: "_blank",
    children: "InternalWebsite.com",
  },
};

export const ExternalAnchor: Story = {
  args: {
    href: "https://google.com",
    children: "Google.com",
    isExternal: true,
  },
};

export const UnderlineAnchor: Story = {
  args: {
    href: "/",
    underline: true,
    children: "Hover on me",
  },
};

export const HoverAnchor: Story = {
  args: {
    href: "/",
    hover: true,
    children: "Hover on me",
  },
};
