import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Dialog } from "./Dialog";
import { type DialogContentProps } from "./types";

const withDialog = (_: StoryFn, context: StoryContext<DialogContentProps>) => {
  const { type, side } = context.args;
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button outline>Edit Profile</Button>
      </Dialog.Trigger>
      <Dialog.Content side={side} type={type} className={type ? undefined : "sm:max-w-[425px]"}>
        <Dialog.Header>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you are done.
          </Dialog.Description>
        </Dialog.Header>
        Some content goes here!
        <Dialog.Footer>
          <Button type="submit">Save changes</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Dialog",
  component: Dialog.Content,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      control: "select",
      options: ["dialog", "sheet"],
      defaultValue: "dialog",
    },
    side: {
      control: "select",
      options: ["bottom", "left", "right", "top"],
    },
  },
  decorators: [withDialog],
} satisfies Meta<typeof Dialog.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const Sheet: Story = {
  args: {
    side: "right",
    type: "sheet",
  },
};
