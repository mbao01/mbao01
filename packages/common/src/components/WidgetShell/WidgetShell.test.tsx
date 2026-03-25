import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { WidgetShell } from "./";

describe("WidgetShell", () => {
  it("renders children in ready state", () => {
    render(
      <WidgetShell title="Revenue">
        <p>$12,450</p>
      </WidgetShell>
    );
    expect(screen.getByText("$12,450")).toBeInTheDocument();
    expect(screen.getByText("Revenue")).toBeInTheDocument();
  });

  it("shows skeleton in loading state", () => {
    render(
      <WidgetShell title="Revenue">
        <WidgetShell.Loading />
      </WidgetShell>
    );
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("shows error state with retry button", () => {
    const onRetry = vi.fn();
    render(
      <WidgetShell title="Revenue">
        <WidgetShell.Error onRetry={onRetry} />
      </WidgetShell>
    );
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Retry"));
    expect(onRetry).toHaveBeenCalledOnce();
  });

  it("shows empty state", () => {
    render(
      <WidgetShell title="Transactions">
        <WidgetShell.Empty />
      </WidgetShell>
    );
    expect(screen.getByText("No data")).toBeInTheDocument();
  });

  it("renders custom error content", () => {
    render(
      <WidgetShell>
        <WidgetShell.Error>
          <p>Custom error</p>
        </WidgetShell.Error>
      </WidgetShell>
    );
    expect(screen.getByText("Custom error")).toBeInTheDocument();
  });

  it("renders custom empty content", () => {
    render(
      <WidgetShell>
        <WidgetShell.Empty>
          <p>Nothing here</p>
        </WidgetShell.Empty>
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
