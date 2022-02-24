import { useEffect } from "react";
import { useState } from "react";

export const useColorChange = (colors: string[]): string => {
  const [colorState, setState] = useState(colors[0]);

  let index = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setState(colors[index++ % colors.length]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return colorState;
};
