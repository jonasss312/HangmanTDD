import React from "react";

interface Props {
  wrongGuessesCount: number;
  colorState: string;
}

const COLOR_AFTER: string = "#ed00d7";
const COLOR_BASE: string = "#33eaff";
const BASE_WIDTH: string = "4%";
const ROPE_WIDTH: string = "0.5%";
const BODY_WIDTH: string = "1%";
const EYE_WIDTH: string = "0.3%";

let COLOR;

export const HangmanDisplay = (props: Props) => {
  const colorState = props.colorState;
  const wrongGuessesCount = props.wrongGuessesCount;

  return (
    <svg height="650" width="800" viewBox="100 90 400 350">
      {renderBottomLine()}
      {renderLeftLine()}
      {renderTopLine()}
      {renderRope()}
      {renderHead(wrongGuessesCount >= 1 ? COLOR_AFTER : colorState)}
      {renderLeftHand(wrongGuessesCount >= 3 ? COLOR_AFTER : colorState)}
      {renderRightHand(wrongGuessesCount >= 4 ? COLOR_AFTER : colorState)}
      {renderBody(wrongGuessesCount >= 2 ? COLOR_AFTER : colorState)}
      {renderRightLeg(wrongGuessesCount >= 5 ? COLOR_AFTER : colorState)}
      {renderLeftLeg(wrongGuessesCount >= 6 ? COLOR_AFTER : colorState)}
      {renderLeftEyeOne(wrongGuessesCount >= 7 ? COLOR_AFTER : colorState)}
      {renderLeftEyeTwo(wrongGuessesCount >= 8 ? COLOR_AFTER : colorState)}
      {renderRightEyeOne(wrongGuessesCount >= 9 ? COLOR_AFTER : colorState)}
      {renderRightEyeTwo(wrongGuessesCount >= 10 ? COLOR_AFTER : colorState)}
    </svg>
  );
};

const renderBottomLine = () =>
  <line
    x1="100"
    y1="400"
    x2="300"
    y2="400"
    stroke={COLOR_BASE}
    strokeWidth={BASE_WIDTH}
  />

const renderLeftLine = () =>
  <line
    x1="150"
    y1="400"
    x2="200"
    y2="100"
    stroke={COLOR_BASE}
    strokeWidth={BASE_WIDTH}
  />

const renderTopLine = () =>
  <line
    x1="175"
    y1="100"
    x2="300"
    y2="100"
    stroke={COLOR_BASE}
    strokeWidth={BASE_WIDTH}
  />

const renderRope = () =>
  <line
    x1="298"
    y1="100"
    x2="298"
    y2="148"
    stroke={COLOR_BASE}
    strokeWidth={ROPE_WIDTH}
  />

const renderHead = (color: string) =>
  <circle
    cx="298"
    cy="165"
    r="17"
    stroke={color}
    strokeWidth={BODY_WIDTH}
    style={{ fillOpacity: 0 }}
  />

const renderBody = (color: string) =>
  <line
    x1="298"
    y1="181"
    x2="298"
    y2="275"
    stroke={color}
    strokeWidth={BODY_WIDTH}
  />

const renderLeftHand = (color: string) =>
  <line
    x1="298"
    y1="182"
    x2="278"
    y2="285"
    stroke={color}
    strokeWidth={BODY_WIDTH}
  />

const renderRightHand = (color: string) =>
  <line
    x1="298"
    y1="182"
    x2="318"
    y2="285"
    stroke={color}
    strokeWidth={BODY_WIDTH}
  />


const renderLeftLeg = (color: string) =>
  <line
    x1="298"
    y1="275"
    x2="278"
    y2="375"
    stroke={color}
    strokeWidth={BODY_WIDTH}
  />

const renderRightLeg = (color: string) =>
  <line
    x1="298"
    y1="275"
    x2="318"
    y2="375"
    stroke={color}
    strokeWidth={BODY_WIDTH}
  />

const renderLeftEyeOne = (color: string) =>
  <line
    x1="288"
    y1="174"
    x2="297"
    y2="172"
    stroke={color}
    strokeWidth={EYE_WIDTH}
  />

const renderLeftEyeTwo = (color: string) =>
  <line
    x1="297"
    y1="174"
    x2="288"
    y2="172"
    stroke={color}
    strokeWidth={EYE_WIDTH}
  />

const renderRightEyeOne = (color: string) =>
  <line
    x1="308"
    y1="174"
    x2="299"
    y2="172"
    stroke={color}
    strokeWidth={EYE_WIDTH}
  />

const renderRightEyeTwo = (color: string) =>
  <line
    x1="299"
    y1="174"
    x2="308"
    y2="172"
    stroke={color}
    strokeWidth={EYE_WIDTH}
  />
