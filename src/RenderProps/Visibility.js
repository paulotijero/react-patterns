import React from "react";

function Visibility({ render }) {
  const [state, setState] = React.useState(true);

  React.useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        console.log("Page is not visible");
        setState(false);
      } else {
        console.log("Page is visible");
        setState(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [setState]);

  return render(state);
}

export default Visibility;
