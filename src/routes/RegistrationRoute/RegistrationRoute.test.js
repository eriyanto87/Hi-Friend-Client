import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import RegistrationRoute from "./RegistrationRoute";

describe("Registration Route", () => {
  it("Registration Snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <RegistrationRoute />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <RegistrationRoute />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
