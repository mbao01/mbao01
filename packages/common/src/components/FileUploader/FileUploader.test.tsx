import { useState } from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FileUploader } from "./FileUploader";

describe("FileUploader", () => {
  const FileUpload = () => {
    const [files, setFiles] = useState<File[] | null>(null);

    const dropZoneConfig = {
      maxFiles: 5,
      maxSize: 1024 * 1024 * 4,
      multiple: true,
    };

    return (
      <FileUploader
        value={files}
        onValueChange={setFiles}
        dropzoneOptions={dropZoneConfig}
        className="relative bg-background rounded-lg p-2"
      >
        <FileUploader.Input
          classes={{ all: "outline-dashed outline-1 outline-neutral-content" }}
        >
          Click here to upload
        </FileUploader.Input>
      </FileUploader>
    );
  };

  it("should render", () => {
    const { asFragment } = render(<FileUpload />);

    expect(screen.getByText("Click here to upload")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
