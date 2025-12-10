import { describe, expect, it } from "vitest";
import { toastClassnames } from "./helpers";

describe("toastClassnames", () => {
  it("generates classnames for neutral variant", () => {
    const result = toastClassnames({ variant: "neutral" });
    expect(result.toast).toBeDefined();
    expect(result.toast).toContain("bg-neutral");
    expect(result.toast).toContain("text-neutral-content");
    expect(result.actionButton).toBeDefined();
    expect(result.cancelButton).toBeDefined();
    expect(result.closeButton).toBeDefined();
  });

  it("generates classnames for primary variant", () => {
    const result = toastClassnames({ variant: "primary" });
    expect(result.toast).toContain("bg-primary");
    expect(result.toast).toContain("text-primary-content");
  });

  it("generates classnames for secondary variant", () => {
    const result = toastClassnames({ variant: "secondary" });
    expect(result.toast).toContain("bg-secondary");
    expect(result.toast).toContain("text-secondary-content");
  });

  it("generates classnames for accent variant", () => {
    const result = toastClassnames({ variant: "accent" });
    expect(result.toast).toContain("bg-accent");
    expect(result.toast).toContain("text-accent-content");
  });

  it("generates classnames for info variant", () => {
    const result = toastClassnames({ variant: "info" });
    expect(result.toast).toContain("bg-info");
    expect(result.toast).toContain("text-info-content");
  });

  it("generates classnames for success variant", () => {
    const result = toastClassnames({ variant: "success" });
    expect(result.toast).toContain("bg-success");
    expect(result.toast).toContain("text-success-content");
  });

  it("generates classnames for warning variant", () => {
    const result = toastClassnames({ variant: "warning" });
    expect(result.toast).toContain("bg-warning");
    expect(result.toast).toContain("text-warning-content");
  });

  it("generates classnames for error variant", () => {
    const result = toastClassnames({ variant: "error" });
    expect(result.toast).toContain("bg-error");
    expect(result.toast).toContain("text-error-content");
  });

  it("applies outline styling when outline is true", () => {
    const result = toastClassnames({ variant: "primary", outline: true });
    expect(result.toast).toContain("border");
    expect(result.toast).toContain("bg-default");
    expect(result.toast).toContain("text-primary");
  });

  it("applies custom actionButton props with success variant", () => {
    const result = toastClassnames({
      variant: "primary",
      actionButton: { variant: "success", outline: true },
    });
    expect(result.actionButton).toContain("border-success");
    expect(result.actionButton).toContain("text-success");
    expect(result.actionButton).toContain("bg-transparent");
  });

  it("applies custom cancelButton props with error variant", () => {
    const result = toastClassnames({
      variant: "primary",
      cancelButton: { variant: "error" },
    });
    expect(result.cancelButton).toContain("border-error");
    expect(result.cancelButton).toContain("text-error");
  });

  it("applies default outline to cancelButton", () => {
    const result = toastClassnames({
      variant: "primary",
      cancelButton: {},
    });
    expect(result.cancelButton).toContain("border");
    expect(result.cancelButton).toContain("bg-transparent");
  });

  it("applies custom closeButton props with error variant", () => {
    const result = toastClassnames({
      variant: "primary",
      closeButton: { variant: "error" },
    });
    expect(result.closeButton).toContain("bg-error");
    expect(result.closeButton).toContain("text-error-content");
  });

  it("applies default neutral variant to closeButton", () => {
    const result = toastClassnames({
      variant: "primary",
      closeButton: {},
    });
    expect(result.closeButton).toContain("bg-neutral");
    expect(result.closeButton).toContain("text-neutral-content");
  });
});
