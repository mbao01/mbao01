import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeProvider } from "./ThemeProvider";
import { Button } from "../Button";
import { Card } from "../Card";
import { Badge } from "../Badge";

const meta = {
  title: "Foundation/ThemeProvider",
  component: ThemeProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <div className="flex flex-col gap-4 p-6">
    <h2 className="text-2xl font-bold">Brand Preview</h2>
    <div className="flex gap-2">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button outline>Outline</Button>
    </div>
    <div className="flex gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="info">Info</Badge>
    </div>
    <Card border="solid" className="max-w-sm">
      <Card.Body>
        <Card.Title>Branded Card</Card.Title>
        <p>This card inherits the brand's design tokens for consistent styling.</p>
        <Card.Actions>
          <Button variant="primary" size="sm">
            Action
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  </div>
);

export const Default: Story = {
  args: {
    children: <DemoContent />,
  },
};

export const CustomBrand: Story = {
  args: {
    brand: {
      name: "acme",
      tokens: {
        "radius-md": "0.75rem",
        "radius-lg": "1rem",
      },
    },
    children: <DemoContent />,
  },
};

export const MultipleBrands: Story = {
  render: () => (
    <div className="flex gap-8">
      <ThemeProvider brand={{ name: "default" }}>
        <div className="rounded-lg border p-4">
          <h3 className="mb-3 font-semibold">Default Brand</h3>
          <div className="flex gap-2">
            <Button variant="primary">Button</Button>
            <Badge variant="primary">Badge</Badge>
          </div>
        </div>
      </ThemeProvider>
      <ThemeProvider
        brand={{
          name: "ocean",
          tokens: {
            "radius-md": "1rem",
            "radius-lg": "1.5rem",
          },
        }}
      >
        <div className="rounded-lg border p-4">
          <h3 className="mb-3 font-semibold">Ocean Brand</h3>
          <div className="flex gap-2">
            <Button variant="primary">Button</Button>
            <Badge variant="primary">Badge</Badge>
          </div>
        </div>
      </ThemeProvider>
    </div>
  ),
};
