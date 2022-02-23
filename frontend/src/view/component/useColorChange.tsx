import { useEffect } from "react";
import { useState } from "react";

export const useColorChange = (): string => {
  const colors = ["#33eaff", "#9cffe3"];
  const [colorState, setState] = useState(colors[0]);

  let index = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setState(colors[index++ % 2]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return colorState;
};
