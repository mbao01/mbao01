import type { Dispatch, Ref, SetStateAction } from "react";
import type { DropzoneOptions, DropzoneState } from "react-dropzone";

export type FileUploaderProps = {
  value: File[] | null;
  reSelect?: boolean;
  onValueChange: (value: File[] | null) => void;
  dropzoneOptions: DropzoneOptions;
  orientation?: "horizontal" | "vertical";
} & React.HTMLAttributes<HTMLDivElement>;

export type FileUploaderInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  classes?: Partial<{
    all: string;
    accepted: string;
    rejected: string;
    default: string;
  }>;
};

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
  hiddenInputRef: Ref<HTMLInputElement>;
};
