import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Data from "./worldcupComonenent/data";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("contains world cup text in app", () => {
  const { getByText } = render(<App />);
  getByText(/World/gi);
  getByText(/Womens/gi);
  getByText(/Cup/gi);
});
