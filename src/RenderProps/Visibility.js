import React from "react";

function Visibility({ render }) {
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

  return render(state);
}

export default Visibility;
