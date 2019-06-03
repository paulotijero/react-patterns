import React from "react";

function useVisibility(status = true) {
  const [state, setState] = React.useState(status);

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

  return { state };
}

export default useVisibility;
