import { render, screen } from "@testing-library/react";
import Seperator from "./index";

describe("Seperator", () => {
  test("renders Seperator", () => {
    render(<Seperator />);

    const seperator = screen.getByRole("separator");
    expect(seperator).toBeInTheDocument();
  });
});
