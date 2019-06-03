import React from "react";

function Visibility({ children }) {
  const [state, setState] = React.useState(true);

  React.useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setState(false);
        console.log("Page is not visible");
      } else {
        setState(true);
        console.log("Page is visible");
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [setState]);

  return children(state);
}

export default Visibility;
