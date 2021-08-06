import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app", () => {
  render(<App />);
  const title = screen.getByText(/Users/i);
  const searchLabel = screen.getByLabelText("Search");
  const sortByLabel = screen.getByLabelText("Sort By");

  expect(title).toBeInTheDocument();
  expect(searchLabel).toBeInTheDocument();
  expect(sortByLabel).toBeInTheDocument();
});
