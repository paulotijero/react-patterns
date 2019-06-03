import React from "react";

import useVisibility from "./Visibility";

function App() {
  const state = useVisibility();

  return (
    <>
      <h1>{state.toString()}</h1>
    </>
  );
}

export default App;
