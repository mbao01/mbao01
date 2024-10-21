import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "../../../utilities";
import { Draggable } from "../Draggable";
import { getSortableClasses } from "./constants";
import { type SortableProps } from "./types";

export const Sortable = ({
  id,
  data,
  style,
  className,
  children,
  disabled,
  attributes,
  resizeObserverConfig,
  animateLayoutChanges,
  getNewIndex,
  strategy,
  transition,
  ...props
}: SortableProps) => {
  const {
    attributes: sortableAttributes,
    isDragging,
    isSorting,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition: sortableTransition,
  } = useSortable({
    id,
    data,
    disabled,
    attributes,
    transition,
    resizeObserverConfig,
    animateLayoutChanges,
    getNewIndex,
    strategy,
  });

  return (
    <Draggable.Root
      {...props}
      {...sortableAttributes}
      ref={setNodeRef}
      activatorNodeRef={setActivatorNodeRef}
      isDragging={isDragging}
      listeners={listeners}
      transform={transform}
      style={{
        ...style,
        transform: CSS.Transform.toString(transform),
        transition: sortableTransition,
      }}
      className={cn(className, getSortableClasses({ isDragging, isSorting }))}
      data-draggable={true}
      data-draggable-active={isDragging || undefined}
    >
      {children}
    </Draggable.Root>
  );
};
