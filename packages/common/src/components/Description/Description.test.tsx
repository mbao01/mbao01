import { render, screen, within } from "@testing-library/react";
import { Description } from "./Description";

describe("Description", () => {
  it("description list with a single term", () => {
    const { asFragment } = render(
      <Description>
        <Description.Term>Name</Description.Term>
        <Description.Detail>Evelyn Gilts</Description.Detail>
      </Description>
    );

    expect(screen.getByRole("term")).toHaveTextContent("Name");
    expect(screen.getByRole("definition")).toHaveTextContent("Evelyn Gilts");
    expect(asFragment()).toMatchSnapshot();
  });

  it("description list with multiple terms", () => {
    const { asFragment } = render(
      <Description>
        <Description.Term>Name</Description.Term>
        <Description.Detail>Evelyn Gilts</Description.Detail>
        <Description.Term>Age</Description.Term>
        <Description.Detail>23</Description.Detail>
        <Description.Term>Profession</Description.Term>
        <Description.Detail>AI Specialist</Description.Detail>
      </Description>
    );
    const terms = ["Name", "Age", "Profession"];
    const details = ["Evelyn Gilts", "23", "AI Specialist"];

    const termsEls = screen.getAllByRole("term");
    const definitionEls = screen.getAllByRole("definition");
    termsEls.forEach((termEl, index) => {
      expect(termEl).toHaveTextContent(terms[index]);
      expect(definitionEls[index]).toHaveTextContent(details[index]);
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
