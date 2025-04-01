import React from "react";
import { Fieldset } from "../components/Fieldset";
import { Label } from "../components/Label";
import { Input } from "../Input";
import { type TextFieldProps } from "./types";

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, name, info, error, label, ...props }: TextFieldProps, ref) => {
    const feedbackId = name ? `${name}-information` : undefined;

    return (
      <Fieldset>
        {Boolean(label ?? info) && (
          <Label className="flex justify-between" htmlFor={id}>
            <span>{label}</span>
            {info && <span>{info}</span>}
          </Label>
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
          <Label className="flex flex-col items-start" htmlFor={id} id={feedbackId}>
            {(Array.isArray(error) ? error : [error]).map((e) => (
              <span className="text-red-500">{e}</span>
            ))}
          </Label>
        )}
      </Fieldset>
    );
  }
);
TextField.displayName = "TextField";
