import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

// pages

import LandingPage from "./views/LandingPage.js";
// others

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/index" render={(props) => <LandingPage {...props} />} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
