import { render, screen } from "@testing-library/react";
import InfoCard from "./index";

describe("InfoCard", () => {
  test("renders InfoCard", () => {
    render(<InfoCard title="Title" text="Test text" />);

    const title = screen.getByText(/Title/i);
    const text = screen.getByText(/Test text/i);

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test("renders InfoCard children", () => {
    render(
      <InfoCard title="Title">
        <div>Test text</div>
      </InfoCard>
    );

    const title = screen.getByText(/Title/i);
    const text = screen.getByText(/Test text/i);

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
