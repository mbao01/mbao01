import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Stat, Stats } from "./Stat";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Molecules/Stat",
  component: Stats,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

const StatContent = (
  <>
    <Stat.Title>Nike Shoe!</Stat.Title>
    <Stat.Value>$89,410</Stat.Value>
    <Stat.Description>↗︎ 400 (22%)</Stat.Description>
    <Stat.Actions className="gap-2">
      <Button size="xs" variant="success">
        Withdrawal
      </Button>{" "}
      <Button size="xs" name="hello" variant="secondary">
        Buy Now
      </Button>
    </Stat.Actions>
  </>
);

const StatExample = <Stat>{StatContent}</Stat>;

const CenteredStatExample = <Stat position="center">{StatContent}</Stat>;

const EndStatExample = <Stat position="end">{StatContent}</Stat>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: StatExample,
  },
};

export const MultipleStats: Story = {
  args: {
    children: (
      <>
        {StatExample}
        {CenteredStatExample}
        {EndStatExample}
      </>
    ),
  },
};

export const VerticalStats: Story = {
  args: {
    direction: "vertical",
    children: (
      <>
        {StatExample}
        {StatExample}
        {StatExample}
      </>
    ),
  },
};

export const BorderedStats: Story = {
  args: {
    className: "bg-base-100 border border-base-300",
    children: (
      <>
        {StatExample}
        {StatExample}
        {StatExample}
      </>
    ),
  },
  render: (args) => {
    return <Stats {...args} />;
  },
};
