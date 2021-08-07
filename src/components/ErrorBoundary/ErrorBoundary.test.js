import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ErrorBoundary from "./index";

// In test case console, error will be logged which is okay.
export function ErrorComp({ error }) {
  if (error)
    throw new Error(
      "This is from the test case for testing error scenario in Error Boundary. Ignore this error because this is thrown purposefully."
    );
  return <div>No Error</div>;
}

describe("ErrorBoundary", () => {
  test("renders ErrorBoundary", () => {
    render(
      <ErrorBoundary>
        <div>Test text</div>
      </ErrorBoundary>
    );
    const text = screen.getByText(/Test text/i);
    expect(text).toBeInTheDocument();
  });

  test("renders with error", async () => {
    render(
      <ErrorBoundary>
        <ErrorComp error="true" />
      </ErrorBoundary>
    );
    await waitFor(() => screen.getByText(/Something went wrong!/i));
    expect(screen.getByText(/Something went wrong!/i)).toBeInTheDocument();
  });
});
