import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

// pages
import LandingPage from "./views/LandingPage.js";
import ProjectsPage from "./views/ProjectsPage.js";

// others

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/index">
        <LandingPage />
      </Route>
      <Route path="/project">
        <ProjectsPage />
      </Route>
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
