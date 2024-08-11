import { createContext } from "react";
import { type FileUploaderContextType } from "./types";

export const FileUploaderContext =
  createContext<FileUploaderContextType | null>(null);
