import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid, GridItem } from "./Grid";

const meta = {
  component: Grid,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const gridItems = (
  <>
    <GridItem className="border-base-content card bg-base-100 border p-4 text-center">
      Item 1
    </GridItem>
    <GridItem className="border-base-content card bg-base-100 border p-4 text-center">
      Item 2
    </GridItem>
    <GridItem className="border-base-content card bg-base-100 border p-4 text-center">
      Item 3
    </GridItem>
    <GridItem className="border-base-content card bg-base-100 border p-4 text-center">
      Item 4
    </GridItem>
    <GridItem className="border-base-content card bg-base-100 border p-4 text-center">
      Item 5
    </GridItem>
    <GridItem className="border-base-content card bg-base-100 border p-4 text-center">
      Item 6
    </GridItem>
  </>
);

export const Default: Story = {
  args: {
    columns: 3,
    gap: 4,
    children: gridItems,
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    gap: 4,
    children: gridItems,
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: 4,
    children: gridItems,
  },
};

export const WithSpans: Story = {
  args: {
    columns: 3,
    gap: 4,
    children: (
      <>
        <GridItem colSpan={2} className="border-base-content card bg-primary text-primary-content border p-4 text-center">
          Span 2 columns
        </GridItem>
        <GridItem className="border-base-content card bg-base-100 border p-4 text-center">
          Item
        </GridItem>
        <GridItem className="border-base-content card bg-base-100 border p-4 text-center">
          Item
        </GridItem>
        <GridItem colSpan={2} className="border-base-content card bg-secondary text-secondary-content border p-4 text-center">
          Span 2 columns
        </GridItem>
      </>
    ),
  },
};

export const RowSpans: Story = {
  args: {
    columns: 3,
    rows: 3,
    gap: 4,
    children: (
      <>
        <GridItem rowSpan={2} className="border-base-content card bg-accent text-accent-content border p-4 text-center">
          Span 2 rows
        </GridItem>
        <GridItem className="border-base-content card bg-base-100 border p-4 text-center">
          Item 1
        </GridItem>
        <GridItem className="border-base-content card bg-base-100 border p-4 text-center">
          Item 2
        </GridItem>
        <GridItem className="border-base-content card bg-base-100 border p-4 text-center">
          Item 3
        </GridItem>
        <GridItem className="border-base-content card bg-base-100 border p-4 text-center">
          Item 4
        </GridItem>
        <GridItem colSpan={2} className="border-base-content card bg-base-100 border p-4 text-center">
          Span 2 columns
        </GridItem>
      </>
    ),
  },
};
