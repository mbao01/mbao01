"use client";

import { useDroppable } from "@dnd-kit/core";
import { cn } from "../../../utilities";
import { getDroppableClasses } from "./constants";
import { type DroppableProps } from "./types";

export const Droppable = ({
  children,
  id,
  disabled,
  data,
  resizeObserverConfig,
  isDragging,
  className,
  ...props
}: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
    data,
    disabled,
    resizeObserverConfig,
  });
  const isEmpty = !children || undefined;

  return (
    <div
      ref={setNodeRef}
      className={cn(className, getDroppableClasses({ isDragging, isOver, isEmpty }))}
      data-empty={isEmpty}
      data-draggable-over={isOver || undefined}
      data-draggable-active={isDragging ?? undefined}
      {...props}
    >
      {children}
    </div>
  );
};
