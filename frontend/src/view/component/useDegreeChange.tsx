import { useEffect } from "react";
import { useState } from "react";

export const useDegreeChange = (
  degree: number,
  timeInterval: number
): number => {
  const [degreeChange, setDegreeChange] = useState(degree);

  useEffect(() => {
    const interval = setInterval(() => {
      setDegreeChange(-degreeChange);
    }, timeInterval * 1000);

    return () => clearInterval(interval);
  }, [degreeChange]);

  return degreeChange;
};
