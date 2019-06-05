import React from "react";

import Visibility from "../presentational/Visibility";

function VisibilityPresentational() {
  const [state, setState] = React.useState(true);

  React.useEffect(() => {
    function handleVisibility(event) {
      if (document.hidden) {
        console.log("Page is not visible");
        setState(false);
      } else {
        console.log("Page is visible");
        setState(true);
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [setState]);

  return <Visibility state={state} />;
}

export default VisibilityPresentational;
