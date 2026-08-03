import { useState, useEffect } from "react";

export function useWindowScale(baseWidth = 1920) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Calculate the ratio of the current screen to your base design
      const currentWidth = window.innerWidth;
      setScale(currentWidth / baseWidth);
    };

    // Set initial scale
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [baseWidth]);

  return scale;
}
