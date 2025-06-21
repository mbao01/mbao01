import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReactNode } from "react";
import { List } from "./List";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: List,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    visual: {
      delay: 500, // wait 500ms for test before capturing snapshot
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const ListContent: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <List>
    <List.Item>{children}</List.Item>
    <List.Item>{children}</List.Item>
    <List.Item>{children}</List.Item>
  </List>
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
  render: () => (
    <ListContent>
      <span>A</span> <span>Nike</span> <span>Shoe!</span>
    </ListContent>
  ),
};

export const LongList: Story = {
  args: {},
  render: () => (
    <ListContent>
      <span>A</span>
      <span>Nike</span>
      <span>Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe!</span>
      <span>Cool!</span>
    </ListContent>
  ),
};

export const ListContentGrow: Story = {
  args: {},
  render: () => (
    <ListContent>
      <span>A</span>
      <span>Nike</span>
      <List.Column flex="grow">
        Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe!
      </List.Column>
      <span>Cool!</span>
    </ListContent>
  ),
};

export const ListContentWrap: Story = {
  args: {},
  render: () => (
    <ListContent>
      <span>A</span>
      <span>Nike</span>
      <List.Column flex="wrap">
        Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe Shoe!
      </List.Column>
      <span>Cool!</span>
    </ListContent>
  ),
};
