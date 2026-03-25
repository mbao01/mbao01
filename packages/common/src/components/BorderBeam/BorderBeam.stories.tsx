import type { Meta, StoryObj } from "@storybook/react-vite";
import { BorderBeam } from "./BorderBeam";
import { Card } from "../Card";

const meta = {
  title: "Effects/BorderBeam",
  component: BorderBeam,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BorderBeam>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card border="solid" className="relative w-80">
      <Card.Body>
        <Card.Title>Border Beam</Card.Title>
        <p>A glowing border effect that animates around the card.</p>
      </Card.Body>
      <BorderBeam {...args} />
    </Card>
  ),
};

export const CustomColors: Story = {
  render: (args) => (
    <Card border="solid" className="relative w-80">
      <Card.Body>
        <Card.Title>Custom Colors</Card.Title>
        <p>Border beam with custom gradient colors.</p>
      </Card.Body>
      <BorderBeam {...args} colorFrom="oklch(0.8 0.2 140)" colorTo="oklch(0.6 0.25 280)" />
    </Card>
  ),
};

export const FastBeam: Story = {
  render: (args) => (
    <Card border="solid" className="relative w-80">
      <Card.Body>
        <Card.Title>Fast Beam</Card.Title>
        <p>A faster border beam animation.</p>
      </Card.Body>
      <BorderBeam {...args} duration={2} size={150} />
    </Card>
  ),
};
