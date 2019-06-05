import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("High Order Components Patter", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
