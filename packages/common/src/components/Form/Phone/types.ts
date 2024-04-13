import { type InputProps } from "../Input/types";

export type PhoneProps = Omit<InputProps, "type" | "label" | "inputMode">;
