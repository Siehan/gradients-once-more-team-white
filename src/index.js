import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { GradientContextProvider } from "./context/GradientsContext";
import GradientPage from "./page/GradientPage";

ReactDOM.render(
  <React.StrictMode>
    <GradientContextProvider>
      <Router>
        <Switch>
          <Route exact path="/gradient/:id" component={GradientPage} />
          <Route exact path="/" component={App} />
          <App />
        </Switch>
      </Router>
    </GradientContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
