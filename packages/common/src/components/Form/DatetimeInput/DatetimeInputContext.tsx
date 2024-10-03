import { createContext } from "react";
import { DatetimeInputContextProps } from "./types";

export const DatetimeInputContext = createContext<DatetimeInputContextProps | null>(null);
