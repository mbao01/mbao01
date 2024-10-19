import type { UniqueIdentifier } from "@dnd-kit/core";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { Draggable } from "../Draggable";
import { Sortable } from "./Sortable";
import { type SortableProps } from "./types";

type SortableExampleProps = Partial<SortableProps> & { hasDraggableOverlay?: boolean };

export const SortableExample = ({ hasDraggableOverlay, ...props }: SortableExampleProps) => {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [items, setItems] = useState<UniqueIdentifier[]>(["1", "2", "3", "4", "5", "6", "7", "8"]);

  const activeIndex = activeId ? items.indexOf(activeId) : -1;

  return (
    <DndContext
      onDragStart={({ active }) => {
        if (!active) {
          return;
        }

        setActiveId(active.id);
      }}
      onDragEnd={({ over }) => {
        setActiveId(null);

        if (over) {
          const overIndex = items.indexOf(over.id);
          if (activeIndex !== overIndex) {
            setItems((items) => arrayMove(items, activeIndex, overIndex));
          }
        }
      }}
      onDragCancel={() => setActiveId(null)}
    >
      <SortableContext items={items}>
        <div className="grid grid-cols-3 gap-4">
          {items.map((item) => (
            <Sortable
              {...props}
              key={item}
              id={item}
              className="flex items-center justify-center w-32 h-32 bg-base-100 border border-primary-content/30 shadow rounded-md text-sm p-2 data-[draggable-active]:opacity-30 data-[draggable-active]:z-20"
            >
              {item}
            </Sortable>
          ))}
          {hasDraggableOverlay ? <Draggable.Overlay className="bg-base-100 !shadow-lg" /> : null}
        </div>
      </SortableContext>
    </DndContext>
  );
};
