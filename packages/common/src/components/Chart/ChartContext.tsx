import { createContext } from "react";
import { type ChartContextProps } from "./types";

export const ChartContext = createContext<ChartContextProps | null>(null);
