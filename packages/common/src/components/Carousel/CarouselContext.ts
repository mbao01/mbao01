import { createContext } from "react";
import { type CarouselContextProps } from "./types";

export const CarouselContext = createContext<CarouselContextProps | null>(null);
