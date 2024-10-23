"use client";

import { Sortable } from "../DragAndDrop";
import { useWidget } from "./hooks";
import { WidgetProps } from "./types";

export const Widget = ({ id, children, actions, ...props }: WidgetProps) => {
  const { widget, deleteWidget } = useWidget(id);

  if (!widget) return null;

  return (
    <Sortable id={id} actions={(args) => actions?.({ deleteWidget, ...args })} {...props}>
      {children}
    </Sortable>
  );
};
