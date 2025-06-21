import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  SidebarExample,
  SidebarInADialogExample,
  SidebarLeftAndRightExample,
  SidebarOnTheRightExample,
  SidebarWithCollapsibleGroupExample,
  SidebarWithCollapsibleTreeExample,
  SidebarWithSecondaryNavigationExample,
  SidebarWithSubMenuExample,
} from "./examples/Sidebar.example";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Sidebar",
  component: SidebarExample,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SidebarExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const SidebarWithCollapsibleGroup: Story = {
  args: {},
  render: (props) => <SidebarWithCollapsibleGroupExample {...props} />,
};

export const SidebarWithSubMenu: Story = {
  args: {},
  render: (props) => <SidebarWithSubMenuExample {...props} />,
};

export const SidebarWithIcons: Story = {
  args: {
    collapsible: "icon",
  },
  render: (props) => <SidebarWithSubMenuExample {...props} />,
};

export const SidebarWithSecondaryNavigation: Story = {
  args: {
    variant: "inset",
  },
  render: (props) => <SidebarWithSecondaryNavigationExample {...props} />,
};

export const SidebarWithCollapsibleTree: Story = {
  args: {
    collapsible: "none",
  },
  render: (props) => <SidebarWithCollapsibleTreeExample {...props} />,
};

export const SidebarInADialog: Story = {
  args: {},
  render: (props) => <SidebarInADialogExample {...props} />,
};

export const SidebarOnTheRight: Story = {
  args: {
    side: "right",
  },
  render: (props) => <SidebarOnTheRightExample {...props} />,
};

export const SidebarLeftAndRight: Story = {
  args: {},
  render: (props) => <SidebarLeftAndRightExample {...props} />,
};
