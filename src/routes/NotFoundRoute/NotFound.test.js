import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import NotFoundRoute from "./NotFoundRoute";

describe("NotFound component", () => {
  it("NotFound Snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <NotFoundRoute />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <NotFoundRoute />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
