import { useContext } from "react";
import { DatetimeInputContext } from "../../DatetimeInputContext";

export const useDateInput = () => {
  const context = useContext(DatetimeInputContext);
  if (!context) {
    throw new Error("useDateInput must be used within SmartDateInputProvider");
  }
  return context;
};
