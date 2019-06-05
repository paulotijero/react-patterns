import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("Custom Hooks Patter", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
