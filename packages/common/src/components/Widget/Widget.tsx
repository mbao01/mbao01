"use client";

import { Sortable } from "../DragAndDrop";
import { useWidget } from "./hooks";
import { WidgetProps } from "./types";

export const Widget = ({ id, children, ...props }: WidgetProps) => {
  const { widget } = useWidget(id);

  if (!widget) return null;

  return (
    <Sortable id={id} {...props}>
      {children || widget.id}
    </Sortable>
  );
};
