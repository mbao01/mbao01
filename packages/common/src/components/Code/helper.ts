import { CodeProps } from "./types";

export const getDataPrefix = (prefix: CodeProps["prefix"], index: number) => {
  if (prefix === "numeric") {
    return index + 1;
  } else if (prefix === "uppercase" || prefix === "lowercase") {
    return String.fromCharCode(prefix === "uppercase" ? 65 : 97 + index);
  }
  return "";
};
