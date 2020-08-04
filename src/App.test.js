import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  expect(() => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  }).not.toThrow();
});
