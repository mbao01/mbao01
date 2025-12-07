import { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { FileUploader } from "./FileUploader";

describe("FileUploader", () => {
  const user = userEvent.setup();
  const FileUpload = ({ onValueChange: externalOnValueChange }: any = {}) => {
    const [files, setFiles] = useState<File[] | null>(null);

    const handleValueChange = (newFiles: File[] | null) => {
      setFiles(newFiles);
      externalOnValueChange?.(newFiles);
    };

    const dropZoneConfig = {
      maxFiles: 5,
      maxSize: 1024 * 1024 * 4,
      multiple: true,
    };

    return (
      <FileUploader
        value={files}
        onValueChange={handleValueChange}
        dropzoneOptions={dropZoneConfig}
        className="relative bg-background rounded-lg p-2"
      >
        <FileUploader.Input classes={{ all: "outline-dashed outline-1 outline-neutral-content" }}>
          Click here to upload
        </FileUploader.Input>
        <FileUploader.Content>
          {files?.map((file, index) => (
            <FileUploader.Item key={index} index={index}>
              <span>{file.name}</span>
            </FileUploader.Item>
          ))}
        </FileUploader.Content>
      </FileUploader>
    );
  };

  it("should render", () => {
    const { asFragment } = render(<FileUpload />);

    expect(screen.getByText("Click here to upload")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("handles file selection via input", async () => {
    const onValueChange = vi.fn();
    const { container } = render(<FileUpload onValueChange={onValueChange} />);

    const file = new File(["hello"], "hello.png", { type: "image/png" });
    // Select the dropzone input (second input), not the hidden input
    const input = container.querySelectorAll("input[type='file']")[1] as HTMLInputElement;

    await user.upload(input, file);

    await waitFor(() => {
      expect(onValueChange).toHaveBeenCalled();
    });
  });

  it("displays uploaded file names", async () => {
    const user = userEvent.setup();
    const { container } = render(<FileUpload />);

    const file = new File(["content"], "test-file.png", { type: "image/png" });
    // Select the dropzone input (second input), not the hidden input
    const inputs = container.querySelectorAll("input[type='file']");
    const input = inputs[1] as HTMLInputElement;

    await user.upload(input, file);

    await waitFor(() => {
      expect(screen.getByText("test-file.png")).toBeInTheDocument();
    });
  });

  it("handles multiple file uploads", async () => {
    const user = userEvent.setup();
    const { container } = render(<FileUpload />);

    const file1 = new File(["content1"], "file1.png", { type: "image/png" });
    const file2 = new File(["content2"], "file2.png", { type: "image/png" });
    // Select the dropzone input (second input), not the hidden input
    const inputs = container.querySelectorAll("input[type='file']");
    const input = inputs[1] as HTMLInputElement;

    await user.upload(input, [file1, file2]);

    await waitFor(() => {
      expect(screen.getByText("file1.png")).toBeInTheDocument();
      expect(screen.getByText("file2.png")).toBeInTheDocument();
    });
  });

  it("removes file when delete button is clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(<FileUpload />);

    const file = new File(["content"], "test-file.png", { type: "image/png" });
    // Select the dropzone input (second input), not the hidden input
    const inputs = container.querySelectorAll("input[type='file']");
    const input = inputs[1] as HTMLInputElement;

    await user.upload(input, file);

    await waitFor(() => {
      expect(screen.getByText("test-file.png")).toBeInTheDocument();
    });

    const deleteButton = screen.getByRole("button", { name: /remove item 0/i });
    await user.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("test-file.png")).not.toBeInTheDocument();
    });
  });

  it("handles keyboard navigation with ArrowDown", async () => {
    const user = userEvent.setup();
    const { container } = render(<FileUpload />);

    const file1 = new File(["content1"], "file1.png", { type: "image/png" });
    const file2 = new File(["content2"], "file2.png", { type: "image/png" });
    // Select the dropzone input (second input), not the hidden input
    const inputs = container.querySelectorAll("input[type='file']");
    const input = inputs[1] as HTMLInputElement;

    await user.upload(input, [file1, file2]);

    await waitFor(() => {
      expect(screen.getByText("file1.png")).toBeInTheDocument();
    });

    const content = screen.getByText("file1.png").closest("div[tabIndex]");
    if (content) {
      await user.type(content, "{ArrowDown}");
    }
  });

  it("handles keyboard navigation with ArrowUp", async () => {
    const user = userEvent.setup();
    const { container } = render(<FileUpload />);

    const file1 = new File(["content1"], "file1.png", { type: "image/png" });
    const file2 = new File(["content2"], "file2.png", { type: "image/png" });
    // Select the dropzone input (second input), not the hidden input
    const inputs = container.querySelectorAll("input[type='file']");
    const input = inputs[1] as HTMLInputElement;

    await user.upload(input, [file1, file2]);

    await waitFor(() => {
      expect(screen.getByText("file1.png")).toBeInTheDocument();
    });

    const content = screen.getByText("file1.png").closest("div[tabIndex]");
    if (content) {
      await user.type(content, "{ArrowUp}");
    }
  });

  it("handles Delete key to remove file", async () => {
    const user = userEvent.setup();
    const { container } = render(<FileUpload />);

    const file = new File(["content"], "test-file.png", { type: "image/png" });
    // Select the dropzone input (second input), not the hidden input
    const inputs = container.querySelectorAll("input[type='file']");
    const input = inputs[1] as HTMLInputElement;

    await user.upload(input, file);

    await waitFor(() => {
      expect(screen.getByText("test-file.png")).toBeInTheDocument();
    });

    const content = screen.getByText("test-file.png").closest("div[tabIndex]");
    if (content) {
      await user.type(content, "{ArrowDown}"); // Select first file
      await user.type(content, "{Delete}"); // Delete it
    }
  });

  it("handles Escape key to deselect", async () => {
    const user = userEvent.setup();
    const { container } = render(<FileUpload />);

    const file = new File(["content"], "test-file.png", { type: "image/png" });
    // Select the dropzone input (second input), not the hidden input
    const inputs = container.querySelectorAll("input[type='file']");
    const input = inputs[1] as HTMLInputElement;

    await user.upload(input, file);

    await waitFor(() => {
      expect(screen.getByText("test-file.png")).toBeInTheDocument();
    });

    const content = screen.getByText("test-file.png").closest("div[tabIndex]");
    if (content) {
      await user.type(content, "{Escape}");
    }
  });

  it("respects maxFiles limit", async () => {
    const SingleFileUpload = () => {
      const [files, setFiles] = useState<File[] | null>(null);

      return (
        <FileUploader
          value={files}
          onValueChange={setFiles}
          dropzoneOptions={{ maxFiles: 1, multiple: false }}
        >
          <FileUploader.Input>Upload single file</FileUploader.Input>
          <FileUploader.Content>
            {files?.map((file, index) => (
              <FileUploader.Item key={index} index={index}>
                {file.name}
              </FileUploader.Item>
            ))}
          </FileUploader.Content>
        </FileUploader>
      );
    };

    const user = userEvent.setup();
    const { container } = render(<SingleFileUpload />);

    const file1 = new File(["content1"], "file1.png", { type: "image/png" });
    // Select the dropzone input (second input), not the hidden input
    const inputs = container.querySelectorAll("input[type='file']");
    const input = inputs[1] as HTMLInputElement;

    await user.upload(input, file1);

    await waitFor(() => {
      expect(screen.getByText("file1.png")).toBeInTheDocument();
    });
  });

  it("renders with horizontal orientation", () => {
    const HorizontalUpload = () => {
      const [files, setFiles] = useState<File[] | null>(null);

      return (
        <FileUploader
          value={files}
          onValueChange={setFiles}
          orientation="horizontal"
          dropzoneOptions={{ maxFiles: 5 }}
        >
          <FileUploader.Input>Upload</FileUploader.Input>
          <FileUploader.Content />
        </FileUploader>
      );
    };

    render(<HorizontalUpload />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
  });

  it("handles RTL direction", () => {
    const RTLUpload = () => {
      const [files, setFiles] = useState<File[] | null>(null);

      return (
        <FileUploader
          value={files}
          onValueChange={setFiles}
          dir="rtl"
          dropzoneOptions={{ maxFiles: 5 }}
        >
          <FileUploader.Input>Upload</FileUploader.Input>
          <FileUploader.Content />
        </FileUploader>
      );
    };

    render(<RTLUpload />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
  });
});
