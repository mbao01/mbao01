import { useContext } from "react";
import { MultiSelectContext } from "../../MultiSelectContext";

export const useMultiSelect = () => {
  const context = useContext(MultiSelectContext);
  if (!context) {
    throw new Error("useMultiSelect must be used within MultiSelectProvider");
  }
  return context;
};
