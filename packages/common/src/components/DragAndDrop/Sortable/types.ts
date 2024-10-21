import type { UseSortableArguments } from "@dnd-kit/sortable";
import type { CSSProperties } from "react";
import type { DraggableAxis } from "../Draggable/types";

export type SortableProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> &
  UseSortableArguments &
  Partial<{
    axis: DraggableAxis;
    style: CSSProperties;
    handle: JSX.Element;
  }>;
