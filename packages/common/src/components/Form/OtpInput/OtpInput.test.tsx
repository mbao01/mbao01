import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { OtpInput } from "./OtpInput";

describe("OtpInput", () => {
  it("renders with the correct initial state", () => {
    const { asFragment } = render(<OtpInput />);

    [1, 2, 3, 4].forEach((index) => {
      expect(
        screen.getByLabelText(`Please enter OTP character ${index}`)
      ).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
