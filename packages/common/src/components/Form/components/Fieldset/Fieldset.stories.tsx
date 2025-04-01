import type { Meta, StoryObj } from "@storybook/react";
import { Fieldset } from "./Fieldset";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Fieldset,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    className: "border border-base-300 p-4 rounded-box",
    children: (
      <>
        <Fieldset.Legend>Page title</Fieldset.Legend>
        <input className="input" />
        <Fieldset.Label as="p">Enter your unique username above</Fieldset.Label>
      </>
    ),
  },
};

export const FieldsetWithLegend: Story = {
  args: {
    children: (
      <>
        <Fieldset.Legend>
          <b>Page title</b>
        </Fieldset.Legend>
        <input className="input" />
      </>
    ),
  },
};

export const FieldsetWithLabel: Story = {
  args: {
    children: (
      <>
        <Fieldset.Label htmlFor="username">Username</Fieldset.Label>
        <input id="username" name="username" className="input" />
        <Fieldset.Label as="p">Enter your unique username above</Fieldset.Label>
      </>
    ),
  },
};

export const FieldsetWithBackground: Story = {
  args: {
    className: "w-xs bg-base-200 border border-base-300 p-4 rounded-box",
    children: (
      <>
        <Fieldset.Legend>Page title</Fieldset.Legend>
        <label htmlFor="name" className="fieldset-label">
          Name
        </label>
        <input id="name" name="name" className="input" />

        <label htmlFor="slug" className="fieldset-label">
          Slug
        </label>
        <input id="slug" name="slug" className="input" placeholder="my-awesome-page" />

        <label htmlFor="author" className="fieldset-label">
          Author
        </label>
        <input id="author" name="author" className="input" placeholder="Name" />

        <Fieldset.Label as="p" className="mt-2">
          Please fill in this form and press Enter when you are done!
        </Fieldset.Label>
      </>
    ),
  },
};
