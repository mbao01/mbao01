import type { DropAnimation, Modifiers, PointerActivationConstraint } from "@dnd-kit/core";
import type { Coordinates } from "@dnd-kit/utilities";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { createSnapModifier } from "@dnd-kit/modifiers";
import type { DraggableAxis } from "./types";
import { Draggable } from "./Draggable";
import { type DraggableHandleElement } from "./types";

type DraggableExampleProps = Partial<{
  activationConstraint: PointerActivationConstraint;
  axis: DraggableAxis;
  handle: DraggableHandleElement;
  modifiers: Modifiers;
  buttonStyle: CSSProperties;
  label: string;
}>;

export const DraggableExample = ({
  activationConstraint,
  axis,
  handle,
  modifiers,
  label = "Go ahead, drag me.",
}: DraggableExampleProps) => {
  const [{ x, y }, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint,
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint,
  });
  const keyboardSensor = useSensor(KeyboardSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={({ delta }) => {
        setCoordinates(({ x, y }) => {
          return {
            x: x + delta.x,
            y: y + delta.y,
          };
        });
      }}
      modifiers={modifiers}
    >
      <Draggable
        id="my-draggable"
        axis={axis}
        handle={handle}
        style={{ top: y, left: x }}
        className="w-fit border border-base-content rounded-md p-2 flex items-center gap-2"
      >
        {label}
      </Draggable>
    </DndContext>
  );
};

export const DraggableSnapToGridExample = () => {
  const [gridSize] = useState(30);
  const buttonStyle = {
    marginLeft: gridSize - 20 + 1,
    marginTop: gridSize - 20 + 1,
    width: gridSize * 8 - 1,
    height: gridSize * 2 - 1,
  };
  const snapToGrid = useMemo(() => createSnapModifier(gridSize), [gridSize]);

  return (
    <>
      <DraggableExample
        label={`Snapping to ${gridSize}px increments`}
        modifiers={[snapToGrid]}
        buttonStyle={buttonStyle}
        key={gridSize}
      />
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        style={
          {
            "--grid-size": `${gridSize}px`,
            backgroundSize: "var(--grid-size) var(--grid-size)",
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent calc(var(--grid-size) - 1px),
              #9999991a calc(var(--grid-size) - 1px),
              #9999991a var(--grid-size)
            ),
            repeating-linear-gradient(
              -90deg,
              transparent,
              transparent calc(var(--grid-size) - 1px),
              #9999991a calc(var(--grid-size) - 1px),
              #9999991a var(--grid-size)
            )`,
          } as React.CSSProperties
        }
      />
    </>
  );
};

type DraggableOverlayExampleProps = Partial<{
  activationConstraint: PointerActivationConstraint;
  axis: DraggableAxis;
  handle: DraggableHandleElement;
  modifiers: Modifiers;
  label: string;
  dragOverlayModifiers: Modifiers;
  dropAnimation: DropAnimation | null;
}>;

export const DraggableOverlayExample = ({
  axis,
  dropAnimation,
  handle,
  label = "Drag me to see the <Draggable.Overlay>",
  modifiers,
}: DraggableOverlayExampleProps) => {
  return (
    <DndContext modifiers={modifiers}>
      <div>
        <Draggable
          id="my-draggable"
          axis={axis}
          handle={handle}
          className="w-fit border border-base-content rounded-md p-2 flex items-center gap-2 data-draggable-active:opacity-0"
        >
          {label}
        </Draggable>
      </div>
      <Draggable.Overlay axis={axis} dropAnimation={dropAnimation} />
    </DndContext>
  );
};
