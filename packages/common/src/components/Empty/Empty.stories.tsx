import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Empty, EmptyActions, EmptyDescription, EmptyImage, EmptyTitle } from "./Empty";

const meta = {
  component: Empty,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyImage>
        <Icon name="Box" className="h-10 w-10" />
      </EmptyImage>
      <EmptyTitle>No items found</EmptyTitle>
      <EmptyDescription>
        You haven&apos;t created any items yet. Start by creating a new item.
      </EmptyDescription>
      <EmptyActions>
        <Button variant="primary">Create Item</Button>
      </EmptyActions>
    </Empty>
  ),
};

export const Small: Story = {
  render: () => (
    <Empty size="sm">
      <EmptyTitle>No results</EmptyTitle>
      <EmptyDescription className="mb-0">Try adjusting your search filters.</EmptyDescription>
    </Empty>
  ),
};

export const CustomImage: Story = {
  render: () => (
    <Empty>
      <div className="mb-4 text-6xl">👻</div>
      <EmptyTitle>Ghost Town</EmptyTitle>
      <EmptyDescription>There&apos;s nothing here but ghosts.</EmptyDescription>
      <EmptyActions>
        <Button>Go Back</Button>
      </EmptyActions>
    </Empty>
  ),
};
