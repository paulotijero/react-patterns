import React from "react";
import { render } from "@testing-library/react";

import Visibility from "./Visibility";

test("Presentational and Container Components Patter", () => {
  const { asFragment } = render(<Visibility state={true} />);
  expect(asFragment()).toMatchSnapshot();
});
