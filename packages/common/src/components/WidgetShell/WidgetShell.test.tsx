import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { WidgetShell } from "./";

describe("WidgetShell", () => {
  it("renders children in ready state", () => {
    render(
      <WidgetShell state="ready" title="Revenue">
        <p>$12,450</p>
      </WidgetShell>
    );
    expect(screen.getByText("$12,450")).toBeInTheDocument();
    expect(screen.getByText("Revenue")).toBeInTheDocument();
  });

  it("shows skeleton in loading state", () => {
    render(
      <WidgetShell state="loading" title="Revenue">
        <p>Content</p>
      </WidgetShell>
    );
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("shows error state with retry button", () => {
    const onRetry = vi.fn();
    render(
      <WidgetShell state="error" title="Revenue" onRetry={onRetry}>
        <p>Content</p>
      </WidgetShell>
    );
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Retry"));
    expect(onRetry).toHaveBeenCalledOnce();
  });

  it("shows empty state", () => {
    render(
      <WidgetShell state="empty" title="Transactions">
        <p>Content</p>
      </WidgetShell>
    );
    expect(screen.getByText("No data")).toBeInTheDocument();
  });

  it("renders custom error content", () => {
    render(
      <WidgetShell state="error" errorContent={<p>Custom error</p>}>
        <p>Content</p>
      </WidgetShell>
    );
    expect(screen.getByText("Custom error")).toBeInTheDocument();
  });

  it("renders custom empty content", () => {
    render(
      <WidgetShell state="empty" emptyContent={<p>Nothing here</p>}>
        <p>Content</p>
      </WidgetShell>
    );
    expect(screen.getByText("Nothing here")).toBeInTheDocument();
  });

  it("defaults to ready state", () => {
    render(
      <WidgetShell>
        <p>Default content</p>
      </WidgetShell>
    );
    expect(screen.getByText("Default content")).toBeInTheDocument();
  });
});
