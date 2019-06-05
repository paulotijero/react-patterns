import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("Function as Children Patter", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
