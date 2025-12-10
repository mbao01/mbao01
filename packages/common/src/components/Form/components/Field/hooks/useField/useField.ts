import { useContext } from "react";
import { FieldContext } from "../../FieldContext";

export const useField = () => {
  const context = useContext(FieldContext);
  if (!context) {
    throw new Error("Field compound components must be used within a Field component");
  }
  return context;
};
