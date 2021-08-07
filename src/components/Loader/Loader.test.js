import { render, screen } from "@testing-library/react";
import Loader from "./index";

describe("Loader", () => {
  test("renders Loader", () => {
    render(<Loader />);

    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });
});
