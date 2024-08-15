import type { Dispatch, SetStateAction } from "react";
import type { DropzoneState, DropzoneOptions } from "react-dropzone";

export type FileUploaderProps = {
  value: File[] | null;
  reSelect?: boolean;
  onValueChange: (value: File[] | null) => void;
  dropzoneOptions: DropzoneOptions;
  orientation?: "horizontal" | "vertical";
} & React.HTMLAttributes<HTMLDivElement>;

export type FileUploaderInputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

export type DirectionOptions = "rtl" | "ltr" | undefined;

export type FileUploaderContextType = {
  dropzoneState: DropzoneState;
  isLOF: boolean;
  isFileTooBig: boolean;
  removeFileFromSet: (index: number) => void;
  removeAll: () => void;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  orientation: "horizontal" | "vertical";
  direction: DirectionOptions;
};