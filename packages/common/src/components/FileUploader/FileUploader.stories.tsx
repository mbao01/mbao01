import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { FileIcon } from "lucide-react";
import { FileUploader } from "./FileUploader";

const FileSvgDraw = () => {
  return (
    <>
      <svg
        className="w-8 h-8 mb-3 text-base-content"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-1 text-sm text-base-content px-4">
        <span className="font-semibold">Click to upload</span>
        &nbsp; or drag and drop
      </p>
      <p className="text-xs text-base-content">SVG, PNG, JPG, JPEG or GIF</p>
    </>
  );
};

const FileUpload = () => {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
    accept: {
      "image/png": [".PNG"],
      "image/jpg": [".JPG"],
      "image/jpeg": [".JPEG"],
      "image/svg+xml": [".SVG"],
      "image/gif": [".GIF"],
    },
  };

  return (
    <FileUploader
      value={files}
      onValueChange={setFiles}
      dropzoneOptions={dropZoneConfig}
      className="relative bg-background rounded-lg p-2"
    >
      <FileUploader.Input
        classes={{
          all: "outline-dashed outline-1 focus:ring-2 focus:outline-hidden",
          accepted: "outline-green-500",
          rejected: "outline-red-500",
          default: "outline-neutral-content",
        }}
      >
        <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
          <FileSvgDraw />
        </div>
      </FileUploader.Input>
      <FileUploader.Content>
        {files &&
          files.length > 0 &&
          files.map((file, i) => (
            <FileUploader.Item key={i} index={i}>
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="block text-ellipsis max-w-48 overflow-hidden text-nowrap">
                {file.name}
              </span>
            </FileUploader.Item>
          ))}
      </FileUploader.Content>
    </FileUploader>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Molecules/FileUploader",
  component: FileUpload,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
