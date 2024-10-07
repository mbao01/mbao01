import { createContext } from "react";
import { type DatetimeInputContextProps } from "./types";

export const DatetimeInputContext = createContext<DatetimeInputContextProps | null>(null);
