import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Route, MemoryRouter } from "react-router-dom";

import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import { getUserPosts } from "../utils/constants";

const sampleUserData = {
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
};

const sampleUserPostsData = `[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
]`;

// Mock Service Worker.
const server = setupServer(
  rest.get(`${getUserPosts}`, (req, res, ctx) => {
    return res(ctx.json(sampleUserPostsData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("UserDetails Page", () => {
  test("renders UserInfo", async () => {
    render(
      <MemoryRouter initialEntries={["users/1"]}>
        <Route path="users/1">
          <UserInfo userDetail={sampleUserData} />
        </Route>
      </MemoryRouter>
    );

    // Wait till the screen is populated with data.
    await waitFor(() => screen.getByText("Users"));
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("Sincere@april.biz")).toBeInTheDocument();
  });

  test("Loads the User Posts list", async () => {
    render(
      <MemoryRouter initialEntries={["users/1"]}>
        <Route path="users/1">
          <UserPosts name="Leanne Graham" />
        </Route>
      </MemoryRouter>
    );

    // Wait till the screen is populated with data.
    await waitFor(() => screen.queryByText(/sunt aut/i));
    expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
  });
});
