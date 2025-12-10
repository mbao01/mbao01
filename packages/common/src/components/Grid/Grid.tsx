import React from "react";
import { cn } from "../../utilities";
import { getGridClasses, getGridItemClasses } from "./constants";
import { type GridItemProps, type GridProps } from "./types";

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, columns, rows, gap, flow, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(getGridClasses({ columns, rows, gap, flow }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, colSpan, rowSpan, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(getGridItemClasses({ colSpan, rowSpan }), className)} {...props}>
        {children}
      </div>
    );
  }
);

GridItem.displayName = "GridItem";
