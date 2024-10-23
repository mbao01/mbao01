"use client";

import type { CSSProperties, Ref } from "react";
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
      handle,
      actions,
      activatorNodeRef,
      className,
      isDragging,
      isDragOverlay,
      listeners,
      transform,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const draggable = { listeners, ref: activatorNodeRef };

    return (
      <div
        {...props}
        {...(actions || handle ? {} : listeners)}
        ref={ref}
        style={
          {
            ...style,
            "--translate-x": `${transform?.x ?? 0}px`,
            "--translate-y": `${transform?.y ?? 0}px`,
          } as CSSProperties
        }
        className={cn(className, getDraggableRootClasses({ isDragging, isDragOverlay }))}
      >
        {actions?.({ draggable })}
        {handle ? (
          <Slot {...draggable.listeners} ref={draggable.ref}>
            {handle}
          </Slot>
        ) : null}
        {children}
      </div>
    );
  }
);
DraggableRoot.displayName = "DraggableRoot";

const DraggableAction = forwardRef<HTMLElement, DraggableActionProps>(
  ({ active, children, className, cursor, style, ...props }, ref) => {
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
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
