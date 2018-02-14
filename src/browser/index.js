import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/App";

// <BrowserRouter> keep your UI in sync with the URL
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById("root")
);
