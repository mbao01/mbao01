import { useContext } from "react";
import { InternalWidgetsContext } from "../../InternalWidgetsContext";

export const useWidgets = () => {
  const context = useContext(InternalWidgetsContext);

  if (!context) {
    throw new Error("useWidgets must be used within a <WidgetsContext />");
  }

  return context;
};
