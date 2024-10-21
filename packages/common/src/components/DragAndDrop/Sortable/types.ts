import type { UseSortableArguments } from "@dnd-kit/sortable";
import type { CSSProperties } from "react";
import type { DraggableAxis, DraggableRootProps } from "../Draggable/types";

export type SortableProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> &
  UseSortableArguments &
  Pick<DraggableRootProps, "handle" | "actions"> &
  Partial<{
    axis: DraggableAxis;
    style: CSSProperties;
  }>;
