import { useContext } from "react";
import { UniqueIdentifier } from "@dnd-kit/core";
import { InternalWidgetsContext } from "../../InternalWidgetsContext";

export const useWidget = (id: UniqueIdentifier) => {
  const context = useContext(InternalWidgetsContext);

  if (!context) {
    throw new Error("useWidget must be used within a <WidgetsContext />");
  }

  const widget = context.widgets.find((widget) => widget.id === id);

  const deleteWidget = () => {
    if (widget) {
      context.deleteWidget(widget);
    }
  };

  return { widget, deleteWidget };
};
