import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
