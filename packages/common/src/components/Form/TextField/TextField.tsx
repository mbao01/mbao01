import React from "react";
import { FormControl } from "../components/FormControl/FormControl";
import { Input } from "../Input";
import { type TextFieldProps } from "./types";

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, name, info, error, label, ...props }: TextFieldProps, ref) => {
    const feedbackId = name ? `${name}-information` : undefined;

    return (
      <FormControl as="label" htmlFor={id}>
        {Boolean(label ?? info) && (
          <div className="label">
            <span className="label-text">{label}</span>
            {info && <span className="label-text-alt">{info}</span>}
          </div>
        )}
        <Input
          id={id}
          ref={ref}
          name={name}
          aria-invalid={error ? true : undefined}
          aria-describedby={feedbackId}
          {...props}
        />
        {Boolean(error) && (
          <div className="label">
            <span className="label-text-alt text-red-500" id={feedbackId}>
              {Array.isArray(error) ? error.join(", ") : error}
            </span>
          </div>
        )}
      </FormControl>
    );
  }
);
TextField.displayName = "TextField";
