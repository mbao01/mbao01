import { createContext } from "react";
import type { FieldContextValue } from "./types";

export const FieldContext = createContext<FieldContextValue | undefined>(undefined);
