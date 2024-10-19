import type { Modifiers, UniqueIdentifier } from "@dnd-kit/core";
import { useState } from "react";
import {
  closestCenter,
  closestCorners,
  DndContext,
  pointerWithin,
  rectIntersection,
} from "@dnd-kit/core";
import { Draggable } from "../Draggable";
import { Droppable } from "./Droppable";

type CollisionDetectionType =
  | "rectIntersection"
  | "closestCenter"
  | "closestCorners"
  | "pointerWithin";

const collisionDetectionAlgorithms = {
  rectIntersection,
  closestCenter,
  closestCorners,
  pointerWithin,
};

type DroppableExampleProps = {
  collisionDetection?: CollisionDetectionType;
  containers?: UniqueIdentifier[];
  modifiers?: Modifiers;
};

export const DroppableExample = ({
  containers = ["A"],
  collisionDetection = "rectIntersection",
  modifiers,
}: DroppableExampleProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [parentContainerId, setParentContainerId] = useState<UniqueIdentifier | null>(null);

  const item = (
    <Draggable
      id="my-draggable"
      className="border border-base-content rounded-md p-2 flex items-center gap-2 data-[draggable-active]:opacity-0"
    >
      Go ahead, drag me.
    </Draggable>
  );

  return (
    <DndContext
      collisionDetection={collisionDetectionAlgorithms[collisionDetection]}
      modifiers={parentContainerId !== null ? undefined : modifiers}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={({ over }) => {
        setParentContainerId(over ? over.id : null);
        setIsDragging(false);
      }}
      onDragCancel={() => setIsDragging(false)}
    >
      <div className="flex gap-6 items-center">
        <div className="my-10 w-52">{parentContainerId === null ? item : null}</div>
        <div className="grid grid-cols-2 gap-6">
          {containers.map((id) => (
            <Droppable
              key={id}
              id={id}
              isDragging={isDragging}
              className="relative p-6 border border-base-300 rounded-md w-72 h-72 bg-base-200 box-border data-[draggable-active]:opacity-80 data-[draggable-over]:opacity-100 transition-opacity"
            >
              <div className="absolute bottom-6">Container {id}</div>
              {parentContainerId === id ? item : null}
            </Droppable>
          ))}
        </div>
      </div>
      <Draggable.Overlay />
    </DndContext>
  );
};

export const CollisionDetectionAlgorithmsDroppableExample = ({
  collisionDetection,
  ...props
}: DroppableExampleProps) => {
  return <DroppableExample {...props} collisionDetection={collisionDetection} />;
};
