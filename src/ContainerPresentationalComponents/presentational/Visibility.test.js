import React from "react";
import { render } from "@testing-library/react";

import Visibility from "./Visibility";

test("Custom Hook Patter", () => {
  const { asFragment } = render(<Visibility state={true} />);
  expect(asFragment()).toMatchSnapshot();
});
