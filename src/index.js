import { render } from "react-dom";
import "./index.css";
import App from "./App";

import { HashRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <Router>
    <App />
  </Router>,
  rootElement
);
