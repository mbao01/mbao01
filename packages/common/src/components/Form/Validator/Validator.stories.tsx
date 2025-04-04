import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Input";
import { Select } from "../Select";
import { Textarea } from "../Textarea";
import { ValidatorProps } from "./types";
import { Validator } from "./Validator";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Validator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Validator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    as: "input",
    className: "input",
    type: "email",
    required: true,
    placeholder: "mail@site.com",
  },
};

export const ValidatorWithHint: Story = {
  args: {
    as: "input",
    className: "input",
    type: "email",
    required: true,
    placeholder: "mail@site.com",
  },
  render: (args) => {
    return (
      <>
        <Validator {...args} />
        <Validator.Hint as="span">Enter valid email address</Validator.Hint>
      </>
    );
  },
};

export const ValidatorWithVisibleHint: Story = {
  args: {
    as: "input",
    className: "input",
    type: "email",
    required: true,
    placeholder: "mail@site.com",
  },
  render: (args) => {
    return (
      <>
        <Validator {...args} />
        <Validator.Hint visible as="span">
          Enter valid email address
        </Validator.Hint>
      </>
    );
  },
};

export const PasswordValidator: Story = {
  args: {
    as: "input",
    type: "password",
    className: "input input-primary",
    required: true,
    placeholder: "Password",
    minLength: 8,
    pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
    title: "Must be more than 8 characters, including number, lowercase letter, uppercase letter",
  },
  render: (args) => {
    return (
      <>
        <Validator {...args} />
        <Validator.Hint as="p">
          Must be more than 8 characters, including
          <br />
          At least one number
          <br />
          At least one lowercase letter
          <br />
          At least one uppercase letter
        </Validator.Hint>
      </>
    );
  },
};

export const UsernameValidator: Story = {
  args: {
    as: "input",
    type: "input",
    className: "input",
    required: true,
    placeholder: "Username",
    pattern: "[A-Za-z][A-Za-z0-9\-]*",
    minLength: 3,
    maxLength: 30,
    title: "Only letters, numbers or dash",
  },
  render: (args) => {
    return (
      <>
        <Validator {...args} />
        <Validator.Hint as="p">
          Must be 3 to 30 characters
          <br />
          containing only letters, numbers or dash
        </Validator.Hint>
      </>
    );
  },
};

export const PhoneNumberValidator: Story = {
  args: {
    as: "input",
    type: "tel",
    className: "input tabular-nums",
    required: true,
    placeholder: "Phone",
    pattern: "[0-9]*",
    minLength: 10,
    maxLength: 10,
    title: "Must be 10 digits",
  },
  render: (args) => {
    return (
      <>
        <Validator {...args} />
        <Validator.Hint as="p">Must be 10 digits</Validator.Hint>
      </>
    );
  },
};

export const UrlValidator: Story = {
  args: {
    as: "input",
    type: "url",
    className: "input",
    required: true,
    placeholder: "https://",
    value: "https://",
    pattern: "^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$",
    title: "Must be valid URL",
  },
  render: (args) => {
    return (
      <>
        <Validator {...args} />
        <Validator.Hint as="p">Must be valid URL</Validator.Hint>
      </>
    );
  },
};

export const NumberValidator: Story = {
  args: {
    as: "input",
    type: "number",
    className: "input",
    required: true,
    placeholder: "Type a number between 1 to 10",
    min: "1",
    max: "10",
    title: "Must be between be 1 to 10",
  },
  render: (args) => {
    return (
      <>
        <Validator {...args} />
        <Validator.Hint as="p">Must be between be 1 to 10</Validator.Hint>
      </>
    );
  },
};

export const DateValidator: Story = {
  args: {
    as: "input",
    type: "date",
    className: "input",
    required: true,
    placeholder: "Pick a date in 2025",
    min: "2025-01-01",
    max: "2025-12-31",
    title: "Must be valid URL",
  },
  render: (args) => {
    return (
      <>
        <Validator {...args} />
        <Validator.Hint as="p">Must be 2025</Validator.Hint>
      </>
    );
  },
};

export const CheckboxValidator: Story = {
  args: {
    as: "input",
    type: "checkbox",
    className: "checkbox",
    required: true,
    // equired: true,
    title: "Required",
  },
  render: (args) => {
    return (
      <>
        <Validator {...args} />
        <Validator.Hint as="span">Required</Validator.Hint>
      </>
    );
  },
};

export const RadioValidator: Story = {
  args: {
    as: "input",
    type: "checkbox",
    className: "toggle",
    required: true,
    title: "Required",
  },
  render: (args) => {
    return (
      <>
        <Validator {...args} />
        <Validator.Hint as="p">Required</Validator.Hint>
      </>
    );
  },
};

export const SelectValidator: Story = {
  args: {
    as: "select",
    className: "select",
    required: true,
  },
  render: (args) => {
    return (
      <form>
        <Validator {...args}>
          <option disabled selected value="">
            Choose:
          </option>
          <option>Tabs</option>
          <option>Spaces</option>
        </Validator>
        <Validator.Hint as="p">Required</Validator.Hint>
        <button className="btn" type="submit">
          Submit form
        </button>
      </form>
    );
  },
};

export const CustomInputValidator: Story = {
  args: {
    as: Input,
    outline: true,
    type: "email",
    required: true,
    placeholder: "mail@site.com",
  } satisfies ValidatorProps<typeof Input>,
  render: (args) => {
    return (
      <>
        <Validator {...args} />
        <Validator.Hint as="span">Enter valid email address</Validator.Hint>
      </>
    );
  },
};

export const CustomTextareaValidator: Story = {
  args: {
    as: Textarea,
    required: true,
    outline: true,
    variant: "primary",
    placeholder: "Tell me about you",
  } satisfies ValidatorProps<typeof Textarea>,
  render: (args) => {
    return (
      <>
        <Validator {...args} />
        <Validator.Hint as="span">You must tell me something about you</Validator.Hint>
      </>
    );
  },
};

export const CustomSelectValidator: Story = {
  args: {
    as: Select,
    required: true,
    placeholder: "You must select a theme",
  },
  render: (args) => {
    return (
      <form>
        <Validator {...args}>
          <Select.Trigger outline>
            <Select.Value placeholder="Theme" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="light">Light</Select.Item>
            <Select.Item value="dark">Dark</Select.Item>
            <Select.Item value="system">System</Select.Item>
          </Select.Content>
        </Validator>
        <Validator.Hint as="span">You must select a theme</Validator.Hint>
        <button className="btn" type="submit">
          Submit form
        </button>
      </form>
    );
  },
};
