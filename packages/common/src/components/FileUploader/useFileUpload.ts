import { useContext } from "react";
import { FileUploaderContext } from "./FileUploaderContext";

export const useFileUpload = () => {
  const context = useContext(FileUploaderContext);
  if (!context) {
    throw new Error("useFileUpload must be used within a FileUploaderProvider");
  }
  return context;
};
