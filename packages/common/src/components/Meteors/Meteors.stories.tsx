import type { Meta, StoryObj } from "@storybook/react-vite";
import { Meteors } from "./Meteors";
import { Card } from "../Card";

const meta = {
  title: "Effects/Meteors",
  component: Meteors,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Meteors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card className="relative w-80 overflow-hidden">
      <Card.Body>
        <Card.Title>Meteors</Card.Title>
        <p>Animated meteor shower background effect.</p>
      </Card.Body>
      <Meteors {...args} />
    </Card>
  ),
};

export const FewMeteors: Story = {
  render: (args) => (
    <Card className="relative w-80 overflow-hidden">
      <Card.Body>
        <Card.Title>Subtle</Card.Title>
        <p>Fewer meteors for a subtle effect.</p>
      </Card.Body>
      <Meteors {...args} count={8} />
    </Card>
  ),
};
