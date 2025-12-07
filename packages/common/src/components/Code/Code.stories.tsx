import type { Meta, StoryObj } from "@storybook/react-vite";
import { Code } from "./Code";

const meta = {
  component: Code,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  args: {
    inline: true,
    children: "npm install @mbao01/common",
  },
};

export const Block: Story = {
  args: {
    inline: false,
    skip: true,
    prefix: "numeric",
    children: [
      "function hello() {",
      '  console.log("Hello World");',
      <span key="1" className="text-error bg-error/10">
        {"  "}return false;
      </span>,
      <span key="2" data-prefix="3" className="text-success bg-success/10">
        {"  "}return true;
      </span>,
      "}",
    ],
  },
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        Default: <Code>const x = 1;</Code>
      </div>
      <div>
        Primary: <Code colorScheme="primary">const x = 1;</Code>
      </div>
      <div>
        Secondary: <Code colorScheme="secondary">const x = 1;</Code>
      </div>
      <div>
        Accent: <Code colorScheme="accent">const x = 1;</Code>
      </div>
    </div>
  ),
};
