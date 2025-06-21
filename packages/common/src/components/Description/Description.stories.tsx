import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../Text";
import { Description } from "./Description";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Description,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <Description.Term>Name</Description.Term>
        <Description.Detail>Jonny Bravo</Description.Detail>
      </>
    ),
  },
};

export const MultipleItemsInList: Story = {
  args: {
    children: (
      <>
        <Description.Term>Name</Description.Term>
        <Description.Detail>Jonny Bravo</Description.Detail>
        <Description.Term>Age</Description.Term>
        <Description.Detail>28</Description.Detail>
        <Description.Term>Profession</Description.Term>
        <Description.Detail>Sporting Coach</Description.Detail>
        <Description.Detail>
          <Text size="base" className="italic">
            Associate
          </Text>
        </Description.Detail>
      </>
    ),
  },
};
