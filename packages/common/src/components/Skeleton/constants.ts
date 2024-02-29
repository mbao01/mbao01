import c from "clsx";
import { Size } from "./types";

const WIDTH_SIZES = {
  2: c("w-2"),
  4: c("w-4"),
  8: c("w-8"),
  12: c("w-12"),
  16: c("w-16"),
  24: c("w-24"),
  32: c("w-32"),
  48: c("w-48"),
  64: c("w-64"),
  full: c("w-full"),
} satisfies Record<Size, string>;

const HEIGHT_SIZES = {
  2: c("h-2"),
  4: c("h-4"),
  8: c("h-8"),
  12: c("h-12"),
  16: c("h-16"),
  24: c("h-24"),
  32: c("h-32"),
  48: c("h-48"),
  64: c("h-64"),
  full: c("h-full"),
} satisfies Record<Size, string>;

export const getSkeletonSize = ({
  width,
  height,
}: {
  width?: Size;
  height?: Size;
}) => {
  return c(WIDTH_SIZES[width!] ?? "w-full", HEIGHT_SIZES[height!] ?? "h-4");
};
