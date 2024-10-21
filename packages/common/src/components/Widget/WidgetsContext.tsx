import { useRef, useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { InternalWidgetsContext } from "./InternalWidgetsContext";
import { restrictToElement } from "./modifiers";
import { Widget, WidgetsContextProps } from "./types";

export const WidgetsContext = ({ children, initialWidgets }: WidgetsContextProps) => {
  const [activeId, setActiveId] = useState<Widget["id"] | null>(null);
  const [widgets, setWidgets] = useState<Widget[]>(initialWidgets ?? []);
  const boundingRef = useRef<HTMLDivElement>(null);
  const boundingRect = boundingRef.current?.getBoundingClientRect();

  const activeIndex = activeId ? widgets.findIndex((item) => item.id === activeId) : -1;

  const addWidget = (widget: Widget, insertIndex?: number) => {
    const isValid = Boolean(widget.id);
    const isExist = widgets.some((w) => w.id === widget.id);

    if (!isExist && isValid) {
      // if there's no existing widget in the list, then add it at the given index or at the end of the list
      setWidgets((widgets) => widgets.toSpliced(insertIndex ?? Infinity, 0, widget));
    }
  };

  const addWidgets = (_widgets: Widget[], startIndex?: number) => {
    setWidgets((widgets) => {
      // filter widgets that do NOT already exist do avoid duplicate IDs
      const newWidgets = _widgets.filter(
        (widget) => widget.id && !widgets.some((w) => w.id === widget.id)
      );

      // insert new widgets at the given start index or at the end of the list
      return widgets.toSpliced(startIndex ?? Infinity, 0, ...newWidgets);
    });
  };

  const deleteWidget = (widget: Widget) => {
    const widgetIndex = widgets.findIndex((w) => w.id === widget.id);

    if (widgetIndex >= 0) {
      // if the widget to be deleted exists in the list, then delete it.
      setWidgets((widgets) => widgets.toSpliced(widgetIndex, 1));
    }
  };

  const deleteWidgets = (_widgets: Widget[]) => {
    setWidgets((widgets) => {
      // filter widgets that do NOT exist in the deletion list
      return widgets.filter((widget) => !_widgets.some((w) => w.id === widget.id));
    });
  };

  const resetWidgets = () => {
    setWidgets(initialWidgets ?? []);
  };

  return (
    <DndContext
      modifiers={[restrictToElement(boundingRect)]}
      collisionDetection={closestCenter}
      onDragStart={({ active }) => {
        if (!active) {
          return;
        }

        setActiveId(active.id);
      }}
      onDragEnd={({ over }) => {
        setActiveId(null);

        if (over) {
          const overIndex = widgets.findIndex((item) => item.id === over.id);
          if (activeIndex !== overIndex) {
            setWidgets((w) => arrayMove(w, activeIndex, overIndex));
          }
        }
      }}
      onDragCancel={() => setActiveId(null)}
    >
      <SortableContext items={widgets}>
        <InternalWidgetsContext.Provider
          value={{
            widgets,
            addWidget,
            addWidgets,
            deleteWidget,
            deleteWidgets,
            resetWidgets,
          }}
        >
          <div ref={boundingRef}>{children}</div>
        </InternalWidgetsContext.Provider>
      </SortableContext>
    </DndContext>
  );
};
