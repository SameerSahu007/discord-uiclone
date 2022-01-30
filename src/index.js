import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
