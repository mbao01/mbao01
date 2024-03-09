import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type ButtonProps } from "./types";
import { getButtonClasses } from "./constants";
import { Loading } from "../Loading";
import { cn } from "../../utilities";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as,
      className,
      outline,
      children,
      isLoading,
      variant,
      size,
      wide,
      ...props
    },
    ref
  ) => {
    const Comp = as ? Slot : "button";
    const SlotChild = as ? as : React.Fragment;

    return (
      <Comp
        ref={ref}
        className={cn(
          getButtonClasses({ size, wide, outline, variant, isLoading }),
          className
        )}
        {...props}
      >
        {/* slot merges it's prop into it's immediate child */}
        <SlotChild>
          {children}
          {isLoading ? (
            <span
              className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[inherit]"
              data-testid="loading"
            >
              <Loading />
            </span>
          ) : null}
        </SlotChild>
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
