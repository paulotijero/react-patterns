import React from "react";

import withVisibility from "./Visibility";

function App({ state }) {
  return (
    <>
      <h1>{state.toString()}</h1>
    </>
  );
}

export default withVisibility(App);
