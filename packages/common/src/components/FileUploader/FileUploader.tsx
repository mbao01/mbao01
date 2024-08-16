"use client";

import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { toast } from "sonner";
import { TrashIcon } from "@radix-ui/react-icons";
import type {
  DirectionOptions,
  FileUploaderInputProps,
  FileUploaderProps,
} from "./types";
import { cn } from "../../utilities";
import { FileUploaderContext } from "./FileUploaderContext";
import { useFileUpload } from "./useFileUpload";

export const FileUploader = ({
  className,
  dropzoneOptions,
  value,
  onValueChange,
  reSelect,
  orientation = "vertical",
  children,
  dir,
  ...props
}: FileUploaderProps) => {
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [isFileTooBig, setIsFileTooBig] = useState(false);
  const [isLOF, setIsLOF] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const {
    accept = {
      "image/*": [".jpg", ".jpeg", ".png", ".gif"],
    },
    maxFiles = 1,
    maxSize = 4 * 1024 * 1024,
    multiple = true,
  } = dropzoneOptions;

  const reSelectAll = maxFiles === 1 ? true : reSelect;
  const direction: DirectionOptions = dir === "rtl" ? "rtl" : "ltr";

  const removeFileFromSet = useCallback(
    (i: number) => {
      if (!value) return;
      const newFiles = value.filter((_, index) => index !== i);
      onValueChange(newFiles);
    },
    [value, onValueChange]
  );

  const removeAll = useCallback(() => {
    onValueChange(null);
  }, [onValueChange]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const files = value ?? [];
      const KEY_LIST = [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Enter",
        "Space",
        "Delete",
        "Backspace",
        "Escape",
      ];

      if (KEY_LIST.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();

        const moveNext = () => {
          const nextIndex = activeIndex + 1;
          setActiveIndex(nextIndex > files.length - 1 ? 0 : nextIndex);
        };

        const movePrev = () => {
          const nextIndex = activeIndex - 1;
          setActiveIndex(nextIndex < 0 ? files.length - 1 : nextIndex);
        };

        const prevKey =
          orientation === "horizontal"
            ? direction === "ltr"
              ? "ArrowLeft"
              : "ArrowRight"
            : "ArrowUp";

        const nextKey =
          orientation === "horizontal"
            ? direction === "ltr"
              ? "ArrowRight"
              : "ArrowLeft"
            : "ArrowDown";

        if (e.key === nextKey) {
          moveNext();
        } else if (e.key === prevKey) {
          movePrev();
        } else if (e.key === "Enter" || e.key === "Space") {
          if (activeIndex === -1) {
            dropzoneState.inputRef.current?.click();
          }
        } else if (e.key === "Delete" || e.key === "Backspace") {
          if (activeIndex !== -1) {
            removeFileFromSet(activeIndex);
            if (files.length - 1 === 0) {
              setActiveIndex(-1);
              return;
            }
            movePrev();
          }
        } else if (e.key === "Escape") {
          setActiveIndex(-1);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value, activeIndex, removeFileFromSet]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const files = acceptedFiles;

      if (!files) {
        toast.error("file error , probably too big");
        return;
      }

      const newValues: File[] = value ? [...value] : [];

      if (reSelectAll) {
        newValues.splice(0, newValues.length);
      }

      files.forEach((file) => {
        if (newValues.length < maxFiles) {
          newValues.push(file);
        }
      });

      onValueChange(newValues);

      if (hiddenInputRef.current) {
        // Note the specific way we need to munge the file into the hidden input
        // https://stackoverflow.com/a/68182158/1068446
        const dataTransfer = new DataTransfer();
        newValues.forEach((v) => {
          dataTransfer.items.add(v);
        });
        hiddenInputRef.current.files = dataTransfer.files;
      }

      if (rejectedFiles.length > 0) {
        for (const rejectedFile of rejectedFiles) {
          if (rejectedFile.errors[0]?.code === "file-too-large") {
            toast.error(
              `File is too large. Max size is ${maxSize / 1024 / 1024}MB`
            );
            break;
          }
          if (rejectedFile.errors[0]?.message) {
            toast.error(rejectedFile.errors[0].message);
            break;
          }
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reSelectAll, value]
  );

  useEffect(() => {
    if (!value) return;
    if (value.length === maxFiles) {
      setIsLOF(true);
      return;
    }
    setIsLOF(false);
  }, [value, maxFiles]);

  const opts = dropzoneOptions
    ? dropzoneOptions
    : { accept, maxFiles, maxSize, multiple };

  const dropzoneState = useDropzone({
    ...opts,
    onDrop,
    onDropRejected: () => setIsFileTooBig(true),
    onDropAccepted: () => setIsFileTooBig(false),
  });

  return (
    <FileUploaderContext.Provider
      value={{
        dropzoneState,
        isLOF,
        isFileTooBig,
        removeFileFromSet,
        removeAll,
        activeIndex,
        setActiveIndex,
        orientation,
        direction,
        hiddenInputRef,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("grid w-full overflow-hidden", className, {
          "gap-2": value && value.length > 0,
        })}
        dir={dir}
        {...props}
        tabIndex={-1}
      >
        {children}
      </div>
    </FileUploaderContext.Provider>
  );
};

FileUploader.displayName = "FileUploader";

const FileUploaderContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const { orientation } = useFileUpload();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn("w-full px-1")}
      ref={containerRef}
      aria-description="content file holder"
    >
      <div
        {...props}
        ref={ref}
        className={cn(
          "flex rounded-xl gap-1",
          orientation === "horizontal" ? "flex-raw flex-wrap" : "flex-col",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
});

FileUploaderContent.displayName = "FileUploaderContent";

const FileUploaderItem = forwardRef<
  HTMLDivElement,
  { index: number } & React.HTMLAttributes<HTMLDivElement>
>(({ className, index, children, ...props }, ref) => {
  const { removeFileFromSet, activeIndex, direction } = useFileUpload();
  const isSelected = index === activeIndex;
  return (
    <div
      ref={ref}
      className={cn(
        "h-6 p-1 justify-between cursor-pointer relative rounded",
        { "bg-base-300": isSelected },
        className
      )}
      {...props}
    >
      <div className="text-sm leading-none tracking-tight flex items-center gap-1.5 h-full w-full">
        {children}
      </div>
      <button
        type="button"
        className={cn(
          "absolute",
          direction === "rtl" ? "top-1 left-1" : "top-1 right-1"
        )}
        onClick={() => removeFileFromSet(index)}
      >
        <span className="sr-only">remove item {index}</span>
        <TrashIcon
          className={cn(
            "w-4 h-4 shrink-0 hover:stroke-destructive duration-200 ease-in-out",
            { "text-error": isSelected }
          )}
        />
      </button>
    </div>
  );
});

FileUploaderItem.displayName = "FileUploaderItem";

const FileUploaderInput = ({
  classes,
  children,
  ...props
}: FileUploaderInputProps) => {
  const { dropzoneState, isFileTooBig, isLOF, hiddenInputRef } =
    useFileUpload();
  const rootProps = isLOF ? {} : dropzoneState.getRootProps();
  return (
    <div {...props} className="relative w-full">
      <div
        className={cn(
          classes?.all,
          "w-full rounded-lg duration-300 ease-in-out",
          isLOF ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          dropzoneState.isDragAccept
            ? classes?.accepted
            : dropzoneState.isDragReject || isFileTooBig
              ? classes?.rejected
              : classes?.default
        )}
        {...rootProps}
      >
        {children}
      </div>
      <input
        ref={hiddenInputRef}
        {...props}
        type="file"
        tabIndex={-1}
        className="hidden opacity-0"
      />
      <input
        ref={dropzoneState.inputRef}
        disabled={isLOF}
        {...dropzoneState.getInputProps()}
        tabIndex={-1}
        className={cn({ "cursor-not-allowed": isLOF })}
      />
    </div>
  );
};

FileUploaderInput.displayName = "FileInput";

FileUploader.Content = FileUploaderContent;
FileUploader.Input = FileUploaderInput;
FileUploader.Item = FileUploaderItem;
