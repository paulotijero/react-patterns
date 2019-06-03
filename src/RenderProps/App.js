import React from "react";

import Visibility from "./Visibility";

function App() {
  return (
    <>
      <Visibility render={state => <h1>{state.toString()}</h1>} />
    </>
  );
}

export default App;
