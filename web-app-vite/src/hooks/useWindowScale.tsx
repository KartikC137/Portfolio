import { useState, useEffect } from "react";

export function useWindowScale(baseWidth = 1920) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setScale(currentWidth / baseWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [baseWidth]);

  return scale;
}
