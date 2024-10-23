import { createContext } from "react";
import { type InternalWidgetsContextProps } from "./types";

export const InternalWidgetsContext = createContext<InternalWidgetsContextProps | null>(null);
