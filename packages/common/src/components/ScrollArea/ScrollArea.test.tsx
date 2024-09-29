import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ScrollArea } from "./ScrollArea";

describe("ScrollArea", () => {
  const tags = Array.from({ length: 100 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

  const renderScrollArea = () =>
    render(
      <ScrollArea>
        <div className="p-4 h-32">
          {tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
      </ScrollArea>
    );

  it("renders a scrollable area", () => {
    const { asFragment } = renderScrollArea();

    expect(asFragment()).toMatchSnapshot();
  });
});
