import { render, screen } from "@testing-library/react";
import SelectInput from "./index";
import { sortByOptions } from "../../utils/constants";

describe("Select Input", () => {
  test("renders Select Input", () => {
    render(
      <SelectInput
        name="sortby"
        label="Sort By"
        size="lg"
        value="Name"
        onChangeHandler={() => null}
        options={sortByOptions}
      />
    );
    const sortByLabel = screen.getByLabelText("Sort By");
    const selectedVal = screen.getByDisplayValue("Name");

    expect(sortByLabel).toBeInTheDocument();
    expect(selectedVal).toBeInTheDocument();
  });
});
