import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { GradientContextProvider } from "./context/GradientsContext";
import GradientPage from "./page/GradientPage";
import { Error404Page } from "./page/Error404Page";

ReactDOM.render(
  <React.StrictMode>
    <GradientContextProvider>
      <Router>
        <Switch>
          <Route exact path="/gradient/:id" component={GradientPage} />
          <Route exact path="/" component={App} />
          <Route path="*" component={Error404Page} />
          <Redirect to="/404" />
          <App />
        </Switch>
      </Router>
    </GradientContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
