import React from "react";
import { render } from "react-dom";
import AppRenderProps from "./RenderProps/App";
import AppFunctionChildren from "./FunctionAsChildren/App";

// render(<AppRenderProps />, document.getElementById("root"));
render(<AppFunctionChildren />, document.getElementById("root"));
