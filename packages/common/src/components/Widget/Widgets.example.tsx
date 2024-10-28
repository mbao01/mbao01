import { useState } from "react";
import { MoveIcon, OctagonXIcon } from "lucide-react";
import { Draggable } from "../DragAndDrop";
import { useWidgets } from "./hooks/useWidgets/useWidgets";
import { Widget } from "./Widget";
import { WidgetsContext } from "./WidgetsContext";

export const WidgetsExample = () => {
  return (
    <WidgetsContext
      initialWidgets={[
        { id: "A" },
        { id: "B" },
        { id: "C" },
        { id: "D" },
        { id: "E" },
        { id: "F" },
        { id: "G" },
      ]}
    >
      <Widgets />
    </WidgetsContext>
  );
};

const Widgets = () => {
  const [widgetId, setWidgetId] = useState<string>("");
  const [insertionIndex, setInsertionIndex] = useState<number>();
  const { widgets, addWidget, addWidgets, deleteWidget, deleteWidgets, resetWidgets } =
    useWidgets();

  const widgetIds = widgetId.split(",").map((id) => ({
    id,
  }));

  return (
    <div className="relative h-[calc(100dvh-50px)] border border-base-200 rounded-md p-6 overflow-y-auto">
      <div className="flex flex-col gap-2 mb-6">
        <span className="text-sm">Controls:</span>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Widget ID"
            className="input input-xs input-bordered rounded-md"
            value={widgetId}
            onChange={(e) => setWidgetId(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Insertion Index"
            className="input input-xs input-bordered rounded-md"
            value={insertionIndex}
            onChange={(e) => setInsertionIndex(Number(e.target.value))}
          />
        </div>
        <div className="flex gap-2">
          <button
            className="btn btn-outline btn-xs btn-success"
            onClick={() => addWidget(widgetIds[0], insertionIndex)}
          >
            Add widget
          </button>
          <button
            className="btn btn-outline btn-xs btn-info"
            onClick={() => addWidgets(widgetIds, insertionIndex)}
          >
            Add widgets
          </button>
          <button
            className="btn btn-outline btn-xs btn-warning"
            onClick={() => deleteWidget(widgetIds[0])}
          >
            Delete widget
          </button>
          <button
            className="btn btn-outline btn-xs btn-error"
            onClick={() => deleteWidgets(widgetIds)}
          >
            Delete widgets
          </button>
          <button className="btn btn-outline btn-xs" onClick={() => resetWidgets()}>
            Reset widgets
          </button>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-3 w-fit h-fit">
        {widgets.map((widget) => (
          <Widget
            key={widget.id}
            id={widget.id}
            actions={({ draggable, deleteWidget }) => (
              <div className="absolute top-1 right-1 opacity-0 flex gap-1 [&>*]:cursor-pointer [&_svg]:size-4 pointer-events-none transition-opacity duration-300 hover:opacity-100 group-hover:pointer-events-auto">
                <Draggable.Action
                  ref={draggable?.ref}
                  {...draggable?.listeners}
                  aria-label={`Drag widget ${widget.id}`}
                  className="transition-all hover:text-primary active:cursor-grabbing"
                >
                  <MoveIcon />
                </Draggable.Action>
                <Draggable.Action
                  onClick={deleteWidget}
                  aria-label={`Delete widget ${widget.id}`}
                  className="transition-all hover:text-error"
                >
                  <OctagonXIcon />
                </Draggable.Action>
              </div>
            )}
            className="group flex items-center justify-center w-32 h-32 bg-base-100 border border-primary-content/30 rounded-md text-sm p-2 cursor-default data-[draggable]:shadow data-[draggable-active]:z-20"
          >
            {widget.id}
          </Widget>
        ))}
      </div>
    </div>
  );
};
