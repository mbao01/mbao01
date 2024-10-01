import { forwardRef, Fragment } from "react";
import type { DatetimeGridProps } from "./types";
import { cn } from "../../utilities";
import { Input } from "../Form";
import {
  getDatetimeGridClasses,
  getDatetimeInputClasses,
  getDatetimeSeparatorClasses,
} from "./constants";

export const DatetimeGrid = forwardRef<HTMLDivElement, DatetimeGridProps>(
  ({ format, disabled, className, timescape, placeholders, variant, outline, wide, size }, ref) => {
    return (
      <div
        className={cn(
          getDatetimeGridClasses({ size, wide, outline, variant, disabled }),
          className
        )}
        {...timescape.getRootProps()}
        ref={ref}
      >
        {format?.length
          ? format.map((group, i) => (
              <Fragment key={`group-${i}`}>
                {group?.length
                  ? group.map((unit, j) => (
                      <Fragment key={unit}>
                        <Input
                          size={size}
                          disabled={disabled}
                          className={cn(getDatetimeInputClasses({ size, unit }))}
                          {...timescape.getInputProps(unit)}
                          placeholder={placeholders[unit]}
                        />
                        {i === 0 && j < group.length - 1 ? (
                          // date separator
                          <span className={cn(getDatetimeSeparatorClasses())}>/</span>
                        ) : (
                          j < group.length - 2 && (
                            // time separator
                            <span className={cn(getDatetimeSeparatorClasses())}>:</span>
                          )
                        )}
                      </Fragment>
                    ))
                  : null}
                {format[1]?.length && !i ? (
                  // date-time separator - only if both date and time are present
                  <span className={cn(getDatetimeSeparatorClasses(), "opacity-30 text-xl")}>|</span>
                ) : null}
              </Fragment>
            ))
          : null}
      </div>
    );
  }
);

DatetimeGrid.displayName = "DatetimeGrid";
