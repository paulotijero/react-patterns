import React from "react";

import Visibility from "./Visibility";

function App() {
  return (
    <>
      <Visibility>{state => <h1>{state.toString()}</h1>}</Visibility>
    </>
  );
}

export default App;
