import { render, screen } from "@testing-library/react";
import TextInput from "./index";

describe("Text Input", () => {
  test("renders Text Input", () => {
    render(
      <TextInput
        name="search"
        label="Search"
        size="lg"
        value="Er"
        onChangeHandler={jest.fn()}
      />
    );
    const sortByLabel = screen.getByLabelText("Search");
    const inputVal = screen.getByDisplayValue("Er");

    expect(sortByLabel).toBeInTheDocument();
    expect(inputVal).toBeInTheDocument();
  });
});
