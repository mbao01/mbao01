import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Panel, PanelContent, PanelFooter, PanelHeader } from "./Panel";

const meta = {
  component: Panel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex h-[500px] w-full bg-base-200">
      <Panel>
        <PanelHeader>
          <span className="font-bold">Panel Title</span>
        </PanelHeader>
        <PanelContent>
          <p>Panel content goes here.</p>
        </PanelContent>
        <PanelFooter>
          <Button className="w-full">Action</Button>
        </PanelFooter>
      </Panel>
      <div className="flex-1 p-8">Main Content</div>
    </div>
  ),
};

export const Collapsible: Story = {
  render: function CollapsibleExample() {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <div className="flex h-[500px] w-full bg-base-200">
        <Panel collapsed={collapsed}>
          <PanelHeader>
            {!collapsed && <span className="font-bold">Sidebar</span>}
            <Button
              variant="ghost"
              size="sm"
              className="ml-auto"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Icon name={collapsed ? "ChevronRight" : "ChevronLeft"} className="h-4 w-4" />
            </Button>
          </PanelHeader>
          <PanelContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Icon name="House" className="h-5 w-5" />
                {!collapsed && <span>Home</span>}
              </div>
              <div className="flex items-center gap-4">
                <Icon name="Settings" className="h-5 w-5" />
                {!collapsed && <span>Settings</span>}
              </div>
            </div>
          </PanelContent>
        </Panel>
        <div className="flex-1 p-8">Main Content</div>
      </div>
    );
  },
};
