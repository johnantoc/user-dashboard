import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import BreadCrumb from "./index";

describe("BreadCrumb", () => {
  test("renders BreadCrumb", () => {
    render(
      <Router>
        <BreadCrumb
          list={[
            { text: "Users", link: "/" },
            { text: "John", link: "" },
          ]}
        />
      </Router>
    );
    const name = screen.getByText(/John/i);
    const usersText = screen.getByText(/Users/i);

    expect(name).toBeInTheDocument();
    expect(usersText).toBeInTheDocument();
  });
});
