import { type UseDroppableArguments } from "@dnd-kit/core";

export type DroppableProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> &
  UseDroppableArguments &
  Partial<{
    isDragging: boolean;
  }>;
