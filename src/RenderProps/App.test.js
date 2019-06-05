import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("Render Props Patter", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
