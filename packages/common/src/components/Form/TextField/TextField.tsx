import React from "react";
import { type TextFieldProps } from "./types";
import { cn } from "../../../utilities";
import { getTextFieldClasses } from "./constants";
import { FormControl } from "../components/FormControl/FormControl";

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, type, error, label, info, ...props }: TextFieldProps, ref) => {
    const errorId = `${id}-error`;

    return (
      <FormControl as="label" htmlFor={id}>
        {Boolean(label ?? info) && (
          <div className="label">
            <span className="label-text">{label}</span>
            {info && <span className="label-text-alt">{info}</span>}
          </div>
        )}
        <input
          {...props}
          id={id}
          ref={ref}
          type={type}
          className={cn(
            getTextFieldClasses(),
            { "input input-bordered": type !== "file" },
            props.className
          )}
          placeholder={props.placeholder ?? " "}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
        />
        {Boolean(error) && (
          <div className="label">
            <span className="label-text-alt text-red-500" id={errorId}>
              {Array.isArray(error) ? error.join(", ") : error}
            </span>
          </div>
        )}
      </FormControl>
    );
  }
);
TextField.displayName = "TextField";
