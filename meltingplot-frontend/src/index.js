import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

// pages
import FrontPage from "./views/FrontPage.js";
import LandingPage from "./views/LandingPage.js";
// others

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/index" render={(props) => <FrontPage {...props} />} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
