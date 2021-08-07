![Logo](https://via.placeholder.com/700x100/000000/ffffff?text=User+Dashboard+Logo)

# User Dashboard

A user dashboard using the endpoints provided by [jsonplaceholder](http://jsonplaceholder.typicode.com/).

## Features

- Declarative Routing
- Functional Components
- Error Boundary Implemented
- Testcases with code coverage html report page generation.

## Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [Bootstrap](https://github.com/twbs/bootstrap) - Sleek, intuitive, and powerful front-end framework for faster and easier web development.
- [ReactStrap](https://github.com/reactstrap/reactstrap) - Stateless React Components for Bootstrap.
- [React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - Declarative routing for React.
- [React Testing Library](https://github.com/testing-library/react-testing-library) - Simple and complete React DOM testing utilities.
- [MSW](https://github.com/mswjs/msw) - An API mocking library for browser and Node.js.

## Installation and Run locally on dev server

Clone the project.

```bash
  git clone https://github.com/johnantoc/user-dashboard.git
```

Go to the project directory.

```bash
  cd user-dashboard
```

Install dependencies.

```bash
  npm install
```

Start the dev server.

```bash
  npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Running Tests

To run tests, run the following command

```bash
  npm test
```

Launches the test runner. Watch mode is set to false.\
Test coverage can be viewed from test_coverage/lcov-report/index.html.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## API Reference

#### Get all users.

```https
  GET https://jsonplaceholder.typicode.com/users
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |
| `-`       | `-`  | -           |

#### Get user detail.

```https
  GET https://jsonplaceholder.typicode.com/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of user to fetch |

#### Get user posts.

```https
  GET https://jsonplaceholder.typicode.com/posts?userId=${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of user to fetch |
