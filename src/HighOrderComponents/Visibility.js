import React from "react";

function withVisibility(Component) {
  function Visibility() {
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

    return <Component state={state} />;
  }
  return Visibility;
}

export default withVisibility;
