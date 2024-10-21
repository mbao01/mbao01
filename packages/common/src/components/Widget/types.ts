import type { Data, UniqueIdentifier } from "@dnd-kit/core";
import { type ReactNode } from "react";
import { type DraggableActionsArgs } from "../DragAndDrop/Draggable/types";
import { type SortableProps } from "../DragAndDrop/Sortable/types";

export type Widget = Data<{ id: UniqueIdentifier }>;

type WidgetActions = (
  args: Partial<DraggableActionsArgs> & { deleteWidget: DeleteWidget }
) => ReactNode;

export type WidgetProps = Omit<SortableProps, "actions"> & {
  actions?: WidgetActions;
};

export type WidgetsContextProps = {
  children?: ReactNode;
  initialWidgets?: Widget[];
};

type DeleteWidget = () => void;
export type InternalWidgetsContextProps = {
  widgets: Data<{ id: UniqueIdentifier }>[];
  addWidget: (widget: Widget, insertIndex?: number) => void;
  addWidgets: (widgets: Widget[], startIndex?: number) => void;
  deleteWidget: DeleteWidget;
  deleteWidgets: (widgets: Widget[]) => void;
  resetWidgets: () => void;
};
