import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";

const withTooltip = () => (
  <Tooltip.Provider>
    <Tooltip>
      <Tooltip.Trigger>Hover on me</Tooltip.Trigger>
      <Tooltip.Content>
        This is a tooltip
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  </Tooltip.Provider>
);

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Molecules/Tooltip",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withTooltip],
} satisfies Meta<typeof Tooltip.Provider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
