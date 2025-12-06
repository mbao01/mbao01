import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, FieldDescription, FieldError, FieldLabel } from "./Field";
import { useField } from "./hooks";

const meta = {
  component: Field,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { inputId, descriptionId, errorId } = useField();
  return (
    <input
      className="input input-bordered w-full"
      id={inputId}
      aria-describedby={`${descriptionId} ${errorId}`}
      {...props}
    />
  );
};

export const Default: Story = {
  render: () => (
    <Field className="max-w-xs">
      <FieldLabel>Username</FieldLabel>
      <Input placeholder="Enter username" />
      <FieldDescription>This will be your public display name.</FieldDescription>
    </Field>
  ),
};

export const Required: Story = {
  render: () => (
    <Field className="max-w-xs">
      <FieldLabel required>Email</FieldLabel>
      <Input placeholder="Enter email" type="email" />
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field className="max-w-xs">
      <FieldLabel>Password</FieldLabel>
      <Input type="password" className="input input-bordered input-error w-full" />
      <FieldError>Password is too short</FieldError>
    </Field>
  ),
};

export const Complete: Story = {
  render: () => (
    <Field className="max-w-xs">
      <FieldLabel required>Profile URL</FieldLabel>
      <Input placeholder="https://..." />
      <FieldDescription>Link to your portfolio website.</FieldDescription>
      <FieldError>Invalid URL format</FieldError>
    </Field>
  ),
};
