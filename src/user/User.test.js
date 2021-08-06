import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

import User from "./index";
import UserList from "./UserList";
import { getUsersList } from "../utils/constants";

const sampleData = `[
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
]`;

// Mock Service Worker.
const server = setupServer(
  rest.get(getUsersList, (req, res, ctx) => {
    return res(ctx.json(sampleData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("User Page", () => {
  test("renders User", () => {
    render(<User />);
    const sortByLabel = screen.getByLabelText("Sort By");
    const searchLabel = screen.getByLabelText("Search");

    expect(sortByLabel).toBeInTheDocument();
    expect(searchLabel).toBeInTheDocument();
  });

  test("Enter a Name in text", () => {
    render(<User />);
    const search = screen.getByLabelText("Search");

    userEvent.type(search, "Clementine Bauch");
    expect(search).toHaveValue("Clementine Bauch");
  });

  test("Default Select option", () => {
    render(<User />);

    expect(screen.getByRole("option", { name: "Name" }).selected).toBe(true);
  });

  test("Change select option", () => {
    render(<User />);
    const sortBy = screen.getByLabelText("Sort By");

    userEvent.selectOptions(sortBy, "Email");
    expect(screen.getByRole("option", { name: "Email" }).selected).toBe(true);
    expect(screen.getByRole("option", { name: "Name" }).selected).toBe(false);
    expect(screen.getByRole("option", { name: "Username" }).selected).toBe(
      false
    );
  });

  test("Loads the users list", async () => {
    render(<UserList search="" sortBy="Name" />);
    // Wait till the screen is populated with data.
    await waitFor(
      () =>
        screen.queryByText(/Leanne Graham/i) &&
        screen.queryByText(/Antonette/i) &&
        screen.queryByText(/Shanna@melissa.tv/i)
    );
  });
});
