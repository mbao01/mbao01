import type { Meta, StoryObj } from "@storybook/react";
import { ContextMenu } from "./ContextMenu";

const withContextMenu = () => {
  return (
    <ContextMenu>
      <ContextMenu.Trigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenu.Trigger>
      <ContextMenu.Content className="w-64">
        <ContextMenu.Item inset variant="base">
          Back
          <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item inset disabled>
          Forward
          <ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item inset variant="accent">
          Reload
          <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger inset>More Tools</ContextMenu.SubTrigger>
          <ContextMenu.SubContent className="w-48">
            <ContextMenu.Item>
              Save Page As...
              <ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
            </ContextMenu.Item>
            <ContextMenu.Item variant="error">
              Create Shortcut...
            </ContextMenu.Item>
            <ContextMenu.Item variant="info">Name Window...</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item variant="neutral">
              Developer Tools
            </ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
        <ContextMenu.Separator />
        <ContextMenu.CheckboxItem checked variant="warning">
          Show Bookmarks Bar
          <ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
        </ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem variant="primary">
          Show Full URLs
        </ContextMenu.CheckboxItem>
        <ContextMenu.Separator />
        <ContextMenu.RadioGroup value="pedro">
          <ContextMenu.Label inset>People</ContextMenu.Label>
          <ContextMenu.Separator />
          <ContextMenu.RadioItem value="pedro" variant="secondary">
            Pedro Duarte
          </ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="colm" variant="success">
            Colm Tuite
          </ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.Content>
    </ContextMenu>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: ContextMenu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    // backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withContextMenu],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
