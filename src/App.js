import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./user";
import UserDetails from "./userdetails";

const App = () => (
  <Router>
    <Switch>
      <Route path="/user/:id">
        <UserDetails />
      </Route>
      <Route path="/">
        <User />
      </Route>
    </Switch>
  </Router>
);

export default App;
