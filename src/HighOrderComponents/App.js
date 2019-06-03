import React from "react";

import withVisibility from "./Visibility";

function App({ state }) {
  return <>{state => <h1>{state.toString()}</h1>}</>;
}

const VisApp = withVisibility(App);

export default VisApp;
