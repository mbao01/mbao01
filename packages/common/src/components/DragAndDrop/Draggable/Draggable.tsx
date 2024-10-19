"use client";

import type { CSSProperties } from "react";
import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { Slot } from "@radix-ui/react-slot";
import { DragOverlay, useDndContext, useDraggable } from "@dnd-kit/core";
import type {
  DraggableActionProps,
  DraggableOverlayProps,
  DraggableProps,
  DraggableRootProps,
} from "./types";
import { cn } from "../../../utilities";
import { DROP_ANIMATION_CONFIG, getDraggableClasses, getDraggableRootClasses } from "./constants";

const Draggable = ({
  id,
  axis,
  data,
  disabled,
  attributes,
  style,
  handle,
  className,
  ...props
}: DraggableProps) => {
  const {
    attributes: draggableAttributes,
    isDragging,
    listeners,
    transform,
    setNodeRef,
    setActivatorNodeRef,
  } = useDraggable({
    id,
    data,
    disabled,
    attributes,
  });

  return (
    <DraggableRoot
      {...props}
      {...draggableAttributes}
      ref={setNodeRef}
      activatorNodeRef={setActivatorNodeRef}
      axis={axis}
      handle={handle}
      isDragging={isDragging}
      listeners={listeners}
      transform={transform}
      style={style}
      className={cn(className, getDraggableClasses({ isDragging }))}
      data-draggable={true}
      data-draggable-active={isDragging || undefined}
    />
  );
};

const DraggableRoot = forwardRef<HTMLDivElement, DraggableRootProps>(
  (
    {
      activatorNodeRef,
      className,
      isDragging,
      isDragOverlay,
      handle,
      listeners,
      transform,
      style,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        {...props}
        {...(handle ? {} : listeners)}
        ref={ref}
        style={
          {
            ...style,
            "--translate-x": `${transform?.x ?? 0}px`,
            "--translate-y": `${transform?.y ?? 0}px`,
          } as CSSProperties
        }
        className={cn(className, getDraggableRootClasses())}
      >
        {handle ? (
          <Slot {...listeners} ref={activatorNodeRef}>
            {handle}
          </Slot>
        ) : null}
        {children}
      </div>
    );
  }
);
DraggableRoot.displayName = "DraggableRoot";

const DraggableAction = forwardRef<HTMLButtonElement, DraggableActionProps>(
  ({ active, children, className, cursor, style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        tabIndex={0}
        className={className}
        style={
          {
            ...style,
            cursor,
            "--fill": active?.fill,
            "--background": active?.background,
          } as CSSProperties
        }
      >
        {children}
      </button>
    );
  }
);
DraggableAction.displayName = "DraggableAction";

const DraggableOverlay = ({
  axis,
  dropAnimation = DROP_ANIMATION_CONFIG,
  className,
  ...props
}: DraggableOverlayProps) => {
  const { active, activeNode } = useDndContext();

  return createPortal(
    <DragOverlay dropAnimation={dropAnimation} {...props}>
      {active ? (
        <DraggableRoot
          axis={axis}
          isDragging
          isDragOverlay
          className={cn(className, activeNode?.className)}
        >
          <div dangerouslySetInnerHTML={{ __html: activeNode?.innerHTML ?? "" }} />
        </DraggableRoot>
      ) : null}
    </DragOverlay>,
    document.body
  );
};
DraggableOverlay.displayName = "DraggableOverlay";

Draggable.Root = DraggableRoot;
Draggable.Action = DraggableAction;
Draggable.Overlay = DraggableOverlay;

export { Draggable };
