import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
// import "./assets/css/bootstrap.min.css";
// import "./assets/scss/paper-kit.scss";

// pages
import FrontPage from "./views/FrontPage.js";
import InteractivePage from "./views/InteractivePage.js";
import ProjectsPage from "./views/ProjectsPage.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/index" render={(props) => <FrontPage {...props} />} />
      <Route path="/interactive-page" render={(props) => <InteractivePage {...props} />} />
      <Route path="/project-page" render={(props) => <ProjectsPage {...props} />} />
      <Redirect to="/index"/>
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
