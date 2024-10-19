import type {
  DraggableSyntheticListeners,
  DragOverlayProps,
  DropAnimation,
  UseDraggableArguments,
} from "@dnd-kit/core";
import type { CSSProperties, Ref } from "react";
import { type Transform } from "@dnd-kit/utilities";

export enum DraggableAxis {
  All,
  Vertical,
  Horizontal,
}

type BaseDraggableProps = Partial<{
  axis: DraggableAxis;
  handle: JSX.Element;
  style: CSSProperties;
}> &
  React.HTMLAttributes<HTMLDivElement>;

export type DraggableProps = BaseDraggableProps & UseDraggableArguments;

export type DraggableRootProps = BaseDraggableProps &
  Partial<{
    isDragOverlay: boolean;

    isDragging: boolean;
    listeners: DraggableSyntheticListeners;
    transform: Transform | null;
    activatorNodeRef: Ref<HTMLElement>;
  }>;

export type DraggableActionProps = React.HTMLAttributes<HTMLButtonElement> & {
  active?: Partial<{
    fill: string;
    background: string;
  }>;
  cursor?: CSSProperties["cursor"];
};

export type DraggableOverlayProps = {
  axis?: DraggableRootProps["axis"];
  dropAnimation?: DropAnimation | null;
} & DragOverlayProps;