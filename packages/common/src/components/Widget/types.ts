import type { Data, UniqueIdentifier } from "@dnd-kit/core";
import { type ReactNode } from "react";
import { type SortableProps } from "../DragAndDrop/Sortable/types";

export type Widget = Data<{ id: UniqueIdentifier }>;

export type WidgetProps = SortableProps;

export type WidgetsContextProps = {
  children?: ReactNode;
  initialWidgets?: Widget[];
};

export type InternalWidgetsContextProps = {
  widgets: Data<{ id: UniqueIdentifier }>[];
  addWidget: (widget: Widget, insertIndex?: number) => void;
  addWidgets: (widgets: Widget[], startIndex?: number) => void;
  deleteWidget: (widget: Widget) => void;
  deleteWidgets: (widgets: Widget[]) => void;
  resetWidgets: () => void;
};
