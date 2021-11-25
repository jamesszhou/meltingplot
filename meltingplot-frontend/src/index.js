import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

// styles
// import "./assets/css/bootstrap.min.css";
// import "./assets/scss/paper-kit.scss";

// pages
import FrontPage from "./views/FrontPage.js";
import LoginPage from "./views/LoginPage.js";
import RegisterPage from "./views/RegisterPage.js";
import InteractivePage from "./views/InteractivePage.js";
import ProjectPage from "./views/ProjectPage.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/index" render={(props) => <FrontPage {...props} />} />
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Route path="/register-page" render={(props) => <RegisterPage {...props} />} />
      <Route path="/interactive-page" render={(props) => <InteractivePage {...props} />} />
      <Route path="/project-page" render={(props) => <ProjectPage {...props} />} />
      <Redirect to="/index"/>
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
