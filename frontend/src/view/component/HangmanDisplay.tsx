import React from "react";
import { useDegreeChange } from "./useDegreeChange";

const COLOR_AFTER: string = "#ed00d7";
const COLOR_BASE: string = "#33eaff";
const COLOR_BODY = "#FFEB3B";
const BASE_WIDTH: string = "4%";
const ROPE_WIDTH: string = "0.5%";
const BODY_WIDTH: string = "1%";
const EYE_WIDTH: string = "0.3%";

const DURATION: number = 1.5;
const DEGREE: number = 2;

const style = (degree: number) => {
  return {
    transform: `rotate(${degree}deg)`,
    transformOrigin: "298px 100px",
    transition: `transform ${DURATION}s`,
  };
};

interface Props {
  wrongGuessesCount: number;
}

export const HangmanDisplay = (props: Props) => {
  const wrongGuessesCount = props.wrongGuessesCount;
  const degreeState = useDegreeChange(DEGREE, DURATION);

  return (
    <svg height="650" width="800" viewBox="100 90 400 350">
      {renderBottomLine()}
      {renderLeftLine()}
      {renderTopLine()}
      <g fill="white" style={style(degreeState)}>
        {renderRope()}
        {renderHead(getColor(wrongGuessesCount, 1))}
        {renderLeftHand(getColor(wrongGuessesCount, 3))}
        {renderRightHand(getColor(wrongGuessesCount, 4))}
        {renderBody(getColor(wrongGuessesCount, 2))}
        {renderLeftLeg(getColor(wrongGuessesCount, 6))}
        {renderRightLeg(getColor(wrongGuessesCount, 5))}
        {renderLeftEyeOne(getColor(wrongGuessesCount, 7))}
        {renderLeftEyeTwo(getColor(wrongGuessesCount, 8))}
        {renderRightEyeOne(getColor(wrongGuessesCount, 9))}
        {renderRightEyeTwo(getColor(wrongGuessesCount, 10))}
      </g>
    </svg>
  );
};

function getColor(
  currentWrongGuessesCount: number,
  count: number
): string {
  return currentWrongGuessesCount >= count ? COLOR_AFTER : COLOR_BODY;
}

const renderBottomLine = () => (
  <line
    x1="100"
    y1="400"
    x2="300"
    y2="400"
    stroke={COLOR_BASE}
    strokeWidth={BASE_WIDTH}
  />
);

const renderLeftLine = () => (
  <line
    x1="150"
    y1="400"
    x2="200"
    y2="100"
    stroke={COLOR_BASE}
    strokeWidth={BASE_WIDTH}
  />
);

const renderTopLine = () => (
  <line
    x1="175"
    y1="100"
    x2="300"
    y2="100"
    stroke={COLOR_BASE}
    strokeWidth={BASE_WIDTH}
  />
);

const renderRope = () => (
  <line
    x1="298"
    y1="100"
    x2="298"
    y2="148"
    stroke={COLOR_BASE}
    strokeWidth={ROPE_WIDTH}
  />
);

const renderHead = (color: string) => (
  <circle
    cx="298"
    cy="165"
    r="17"
    stroke={color}
    strokeWidth={BODY_WIDTH}
    style={{ fillOpacity: 0 }}
  />
);

const renderBody = (color: string) => (
  <line
    x1="298"
    y1="181"
    x2="298"
    y2="275"
    stroke={color}
    strokeWidth={BODY_WIDTH}
  />
);

const renderLeftHand = (color: string) => (
  <line
    x1="298"
    y1="182"
    x2="278"
    y2="285"
    stroke={color}
    strokeWidth={BODY_WIDTH}
  />
);

const renderRightHand = (color: string) => (
  <line
    x1="298"
    y1="182"
    x2="318"
    y2="285"
    stroke={color}
    strokeWidth={BODY_WIDTH}
  />
);

const renderLeftLeg = (color: string) => (
  <line
    x1="298"
    y1="275"
    x2="278"
    y2="375"
    stroke={color}
    strokeWidth={BODY_WIDTH}
  />
);

const renderRightLeg = (color: string) => (
  <line
    x1="298"
    y1="275"
    x2="318"
    y2="375"
    stroke={color}
    strokeWidth={BODY_WIDTH}
  />
);

const renderLeftEyeOne = (color: string) => (
  <line
    x1="288"
    y1="174"
    x2="297"
    y2="172"
    stroke={color}
    strokeWidth={EYE_WIDTH}
  />
);

const renderLeftEyeTwo = (color: string) => (
  <line
    x1="297"
    y1="174"
    x2="288"
    y2="172"
    stroke={color}
    strokeWidth={EYE_WIDTH}
  />
);

const renderRightEyeOne = (color: string) => (
  <line
    x1="308"
    y1="174"
    x2="299"
    y2="172"
    stroke={color}
    strokeWidth={EYE_WIDTH}
  />
);

const renderRightEyeTwo = (color: string) => (
  <line
    x1="299"
    y1="174"
    x2="308"
    y2="172"
    stroke={color}
    strokeWidth={EYE_WIDTH}
  />
);
