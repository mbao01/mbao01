import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Indicator } from "../Indicator";
import { Join } from "./Join";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Join,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Join>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    as: "span",
  },
  render: (args) => {
    return (
      <Join {...args}>
        <Join.Item {...args}>😃</Join.Item>
        <Join.Item {...args}>😅</Join.Item>
      </Join>
    );
  },
};

export const JoinTwoButtons: Story = {
  args: {
    as: "span",
  },
  render: (args) => {
    return (
      <Join {...args}>
        <Join.Item as={Button} size="lg" variant="success">
          Hello
        </Join.Item>
        <Join.Item as={Button} size="lg" outline variant="primary">
          World
        </Join.Item>
      </Join>
    );
  },
};

export const JoinTwoButtonWiths: Story = {
  args: {
    as: "span",
  },
  render: (args) => {
    return (
      <Join {...args}>
        <Join.Item as={Button} size="lg" outline variant="success">
          Hello
        </Join.Item>
        <Indicator as="span" position={["start", "top"]}>
          <Indicator.Item as={Badge} size="sm" variant="error">
            2
          </Indicator.Item>
          <Join.Item as={Button} size="lg" variant="primary">
            World
          </Join.Item>
        </Indicator>
      </Join>
    );
  },
};
