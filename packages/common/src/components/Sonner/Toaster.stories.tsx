import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { type ToasterProps } from "./types";
import { Toaster, toast } from "./";
import { Button } from "../Button";

const withToaster = (
  _: StoryFn,
  context: StoryContext<ToasterProps & { onClick?: () => void }>
) => {
  const { onClick, ...props } = context.args;

  const themes = {
    "🌔 Light": "light",
    "🌒 Dark": "dark",
    "🌓 System": "system",
  } as const;

  const theme =
    themes[context.globals.theme as keyof typeof themes] || "system";

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Button onClick={onClick}>Show toast</Button>
        <span>
          See more here{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://sonner.emilkowal.ski/toast"
            style={{ textDecoration: "underline" }}
          >
            https://sonner.emilkowal.ski/toast
          </a>
        </span>
      </div>
      <Toaster theme={theme} {...props} />
    </>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Toaster,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withToaster],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    onClick: () => toast("You should pay attention to me"),
  },
};

export const PrimaryToast: Story = {
  args: {
    onClick: () => toast("You should pay attention to me"),
    variant: "primary",
  },
};

export const InfoToast: Story = {
  args: {
    onClick: () => toast.info("You should pay attention to me"),
    variant: "info",
  },
};

export const SuccessToast: Story = {
  args: {
    onClick: () => toast.success("That went "),
    outline: true,
    variant: "success",
  },
};

export const ErrorToast: Story = {
  args: {
    onClick: () =>
      toast.error(
        "That did not go through. You should probably not try again!"
      ),
    outline: true,
    variant: "error",
  },
};

export const WarningToast: Story = {
  args: {
    onClick: () =>
      toast.warning(
        "That did not go through. You should probably not try again!"
      ),
    variant: "warning",
  },
};

export const RichToast: Story = {
  args: {
    onClick: () =>
      toast("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      }),
  },
};
