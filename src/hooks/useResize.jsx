import { useState, useEffect } from "react";

export const useResize = () => {
  const [widthScreen, setWidthScreen] = useState(
    document.documentElement.clientWidth
  );
  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(document.documentElement.clientWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return widthScreen;
};