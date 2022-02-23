import React from "react";

interface Props {
  wrongGuessesCount: number;
}

export const HangmanDisplay = (props: Props) => {
  const wrongGuessesCount = props.wrongGuessesCount;
  const colorBefore: string = "#9cffe3";
  const colorAfter: string = "#ed00d7";
  const colorBase: string = "#33eaff";
  const baseWidth: string = "4%";
  const ropeWidth: string = "0.5%";
  const bodyWidth: string = "1%";
  const eyeWidth: string = "0.1%";

  let color;

  return (
    <svg height="650" width="800" viewBox="100 70 400 350">
      {/*bottom-line*/}
      <line
        x1="100"
        y1="400"
        x2="300"
        y2="400"
        stroke={colorBase}
        strokeWidth={baseWidth}
      />
      {/*left-line*/}
      <line
        x1="150"
        y1="400"
        x2="200"
        y2="100"
        stroke={colorBase}
        strokeWidth={baseWidth}
      />
      {/*top-line*/}
      <line
        x1="175"
        y1="100"
        x2="300"
        y2="100"
        stroke={colorBase}
        strokeWidth={baseWidth}
      />
      {/*top-line*/}
      <line
        x1="175"
        y1="100"
        x2="300"
        y2="100"
        stroke={colorBase}
        strokeWidth={baseWidth}
      />
      {/*rope*/}
      <line
        x1="298"
        y1="100"
        x2="298"
        y2="148"
        stroke={colorBase}
        strokeWidth={ropeWidth}
      />
      {/*head*/}
      {wrongGuessesCount >= 1 ? (color = colorAfter) : (color = colorBefore)}
      <circle
        cx="298"
        cy="165"
        r="17"
        stroke={color}
        strokeWidth={bodyWidth}
        style={{ fillOpacity: 0 }}
      />
      {/*left-hand*/}
      {wrongGuessesCount >= 3 ? (color = colorAfter) : (color = colorBefore)}
      <line
        x1="298"
        y1="182"
        x2="278"
        y2="285"
        stroke={color}
        strokeWidth={bodyWidth}
      />
      {/*right-hand*/}
      {wrongGuessesCount >= 4 ? (color = colorAfter) : (color = colorBefore)}
      <line
        x1="298"
        y1="182"
        x2="318"
        y2="285"
        stroke={color}
        strokeWidth={bodyWidth}
      />
      {/*body*/}
      {wrongGuessesCount >= 2 ? (color = colorAfter) : (color = colorBefore)}
      <line
        x1="298"
        y1="181"
        x2="298"
        y2="275"
        stroke={color}
        strokeWidth={bodyWidth}
      />
      {/*right-leg*/}
      {wrongGuessesCount >= 5 ? (color = colorAfter) : (color = colorBefore)}
      <line
        x1="298"
        y1="275"
        x2="278"
        y2="375"
        stroke={color}
        strokeWidth={bodyWidth}
      />
      {/*right-leg*/}
      {wrongGuessesCount >= 6 ? (color = colorAfter) : (color = colorBefore)}
      <line
        x1="298"
        y1="275"
        x2="318"
        y2="375"
        stroke={color}
        strokeWidth={bodyWidth}
      />
      {/*left-eye-one*/}
      {wrongGuessesCount >= 7 ? (color = colorAfter) : (color = colorBefore)}
      <line
        x1="288"
        y1="174"
        x2="297"
        y2="172"
        stroke={color}
        strokeWidth={eyeWidth}
      />
      {/*left-eye-two*/}
      {wrongGuessesCount >= 8 ? (color = colorAfter) : (color = colorBefore)}
      <line
        x1="297"
        y1="174"
        x2="288"
        y2="172"
        stroke={color}
        strokeWidth={eyeWidth}
      />
      {/*right-eye-one*/}
      {wrongGuessesCount >= 9 ? (color = colorAfter) : (color = colorBefore)}
      <line
        x1="308"
        y1="174"
        x2="299"
        y2="172"
        stroke={color}
        strokeWidth={eyeWidth}
      />
      {/*right-eye-two*/}
      {wrongGuessesCount >= 10 ? (color = colorAfter) : (color = colorBefore)}
      <line
        x1="299"
        y1="174"
        x2="308"
        y2="172"
        stroke={color}
        strokeWidth={eyeWidth}
      />
    </svg>
  );
};
