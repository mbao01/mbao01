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
    const descriptionList = screen.getByRole("list");

    expect(descriptionList).toHaveTextContent("NameEvelyn Gilts");
    expect(within(descriptionList).getByRole("listitem")).toHaveTextContent(
      "Name"
    );
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
    const descriptionList = screen.getByRole("list");
    const terms = ["Name", "Age", "Profession"];
    const details = ["Evelyn Gilts", "23", "AI Specialist"];

    expect(descriptionList).toHaveTextContent(
      "NameEvelyn GiltsAge23ProfessionAI Specialist"
    );
    const termsEls = within(descriptionList).getAllByRole("listitem");
    termsEls.forEach((termEl, index) => {
      expect(termEl).toHaveTextContent(terms[index]);
      expect(termEl.nextSibling).toHaveTextContent(details[index]);
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
