import React from "react";
import { render } from "react-dom";
import AppRenderProps from "./RenderProps/App";
import AppFunctionChildren from "./FunctionAsChildren/App";
import AppHighOrderComponents from "./HighOrderComponents/App";
import AppContainerPresentionalComponents from "./ContainerPresentationalComponents/App";

// render(<AppRenderProps />, document.getElementById("root"));
// render(<AppFunctionChildren />, document.getElementById("root"));
// render(<AppHighOrderComponents />, document.getElementById("root"));
render(<AppContainerPresentionalComponents />, document.getElementById("root"));
