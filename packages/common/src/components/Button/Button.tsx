import React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cn } from "../../utilities";
import { Loading } from "../Loading";
import { getButtonClasses } from "./constants";
import { type ButtonProps } from "./types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      className,
      outline,
      children,
      isLoading,
      variant,
      size,
      wide,
      rounded,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        disabled={disabled}
        className={cn(
          getButtonClasses({ size, wide, outline, variant, rounded, disabled, isLoading }),
          className
        )}
        {...props}
      >
        <Slottable>{children}</Slottable>
        {isLoading ? (
          <span
            className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[inherit]"
            data-testid="loading"
          >
            <Loading
              intent={!variant || variant === "link" || variant === "ghost" ? "default" : variant}
            />
          </span>
        ) : null}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
