import { createContext } from "react";
import { type MultiSelectContextProps } from "./types";

export const MultiSelectContext = createContext<MultiSelectContextProps | null>(null);
