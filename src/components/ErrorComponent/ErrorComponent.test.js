import { render, screen } from "@testing-library/react";
import ErrorComponent from "./index";

describe("ErrorComponent", () => {
  test("renders ErrorComponent", () => {
    render(<ErrorComponent />);

    const title = screen.getByText(/Something went wrong!/i);
    const text = screen.getByText(/Please Refresh the page to continue./i);

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
