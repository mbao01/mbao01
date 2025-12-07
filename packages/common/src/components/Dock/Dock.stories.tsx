import type { Meta, StoryObj } from "@storybook/react-vite";
import { CogIcon, HomeIcon, InboxIcon } from "lucide-react";
import { Dock } from "./Dock";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Layout/Dock",
  component: Dock,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component:
          '⚠️ `<meta name="viewport" content="viewport-fit=cover">is required for responsiveness of the dock in iOS`',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Dock>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    className: "w-96 mx-auto",
  },
  render: ({ size, ...args }) => {
    return (
      <Dock size={size} {...args}>
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} size={size} />
          <Dock.Label>Home</Dock.Label>
        </Dock.Button>

        <Dock.Button active>
          <Dock.Icon icon={InboxIcon} size={size} />
          <Dock.Label>Inbox</Dock.Label>
        </Dock.Button>

        <Dock.Button>
          <Dock.Icon icon={CogIcon} size={size} />
          <Dock.Label>Setting</Dock.Label>
        </Dock.Button>
      </Dock>
    );
  },
};

export const TinyDock: Story = {
  args: {
    size: "xs",
    className: "w-96 mx-auto",
  },
  render: ({ size, ...args }) => {
    return (
      <Dock size={size} {...args}>
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} size={size} />
          <Dock.Label>Home</Dock.Label>
        </Dock.Button>

        <Dock.Button active>
          <Dock.Icon icon={InboxIcon} size={size} />
          <Dock.Label>Inbox</Dock.Label>
        </Dock.Button>

        <Dock.Button>
          <Dock.Icon icon={CogIcon} size={size} />
          <Dock.Label>Setting</Dock.Label>
        </Dock.Button>
      </Dock>
    );
  },
};

export const PrimaryDock: Story = {
  args: {
    variant: "primary",
    className: "w-96 mx-auto",
  },
  render: ({ size, ...args }) => {
    return (
      <Dock size={size} {...args}>
        <Dock.Button active>
          <Dock.Icon icon={HomeIcon} size={size} />
          <Dock.Label>Home</Dock.Label>
        </Dock.Button>

        <Dock.Button>
          <Dock.Icon icon={InboxIcon} size={size} />
          <Dock.Label>Inbox</Dock.Label>
        </Dock.Button>

        <Dock.Button>
          <Dock.Icon icon={CogIcon} size={size} />
          <Dock.Label>Setting</Dock.Label>
        </Dock.Button>
      </Dock>
    );
  },
};

export const OutlineDock: Story = {
  args: {
    outline: true,
    variant: "primary",
    className: "w-96 mx-auto",
  },
  render: ({ size, ...args }) => {
    return (
      <Dock size={size} {...args}>
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} size={size} />
          <Dock.Label>Home</Dock.Label>
        </Dock.Button>

        <Dock.Button>
          <Dock.Icon icon={InboxIcon} size={size} />
          <Dock.Label>Inbox</Dock.Label>
        </Dock.Button>

        <Dock.Button active>
          <Dock.Icon icon={CogIcon} size={size} />
          <Dock.Label>Setting</Dock.Label>
        </Dock.Button>
      </Dock>
    );
  },
};
