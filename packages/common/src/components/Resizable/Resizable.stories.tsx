import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Resizable } from "./Resizable";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Resizable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Resizable>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    direction: "horizontal",
    onLayout: fn(),
  },
  render: (args) => {
    return (
      <Resizable {...args} className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]">
        <Resizable.Panel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </Resizable.Panel>
      </Resizable>
    );
  },
};

export const VerticalResizable: Story = {
  args: {
    direction: "vertical",
    onLayout: fn(),
  },
  render: (args) => {
    return (
      <Resizable {...args} className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]">
        <Resizable.Panel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </Resizable.Panel>
      </Resizable>
    );
  },
};

export const ResizableWithHandle: Story = {
  args: {
    direction: "vertical",
    onLayout: fn(),
  },
  render: (args) => {
    return (
      <Resizable {...args} className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]">
        <Resizable.Panel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle bordered withHandle />
        <Resizable.Panel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </Resizable.Panel>
      </Resizable>
    );
  },
};

export const ResizablePanelGroups: Story = {
  args: {
    direction: "horizontal",
    onLayout: fn(),
  },
  render: (args) => {
    return (
      <Resizable {...args} className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]">
        <Resizable.Panel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle bordered withHandle />
        <Resizable.Panel defaultSize={50}>
          <Resizable direction="vertical">
            <Resizable.Panel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </Resizable.Panel>
            <Resizable.Handle bordered withHandle />
            <Resizable.Panel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </Resizable.Panel>
          </Resizable>
        </Resizable.Panel>
      </Resizable>
    );
  },
};
