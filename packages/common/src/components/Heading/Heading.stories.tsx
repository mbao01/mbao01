import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta = {
  component: Heading,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Heading",
  },
};

export const Levels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading level={3} weight="normal">
        Heading Normal
      </Heading>
      <Heading level={3} weight="medium">
        Heading Medium
      </Heading>
      <Heading level={3} weight="semibold">
        Heading Semibold
      </Heading>
      <Heading level={3} weight="bold">
        Heading Bold
      </Heading>
      <Heading level={3} weight="extrabold">
        Heading Extrabold
      </Heading>
    </div>
  ),
};

export const Polymorphic: Story = {
  args: {
    as: "h1",
    level: 3,
    children: "Rendered as H1 but styled as H3",
  },
};
