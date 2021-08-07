import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ListItem from "./index";

describe("ListItem", () => {
  test("renders ListItem", () => {
    render(
      <ListItem
        id={1}
        image=""
        alt="Avatar"
        name="Chelsey Dietrich"
        username="Kamren"
        email="Lucio_Hettinger@annie.ca"
        bg="#fff"
      />
    );
    const name = screen.getByText("Chelsey Dietrich");
    const username = screen.getByText("Kamren");
    const email = screen.getByText("Lucio_Hettinger@annie.ca");

    expect(name).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  test("click list item", () => {
    render(
      <ListItem
        id={1}
        image=""
        alt="Avatar"
        name="Chelsey Dietrich"
        username="Kamren"
        email="Lucio_Hettinger@annie.ca"
        bg="#fff"
      />
    );

    userEvent.click(screen.getByRole("button"));
  });

  test("click mail", () => {
    render(
      <ListItem
        id={1}
        image=""
        alt="Avatar"
        name="Chelsey Dietrich"
        username="Kamren"
        email="Lucio_Hettinger@annie.ca"
        bg="#fff"
      />
    );

    userEvent.click(screen.getByText(/Lucio_Hettinger@annie.ca/i));
  });
});
