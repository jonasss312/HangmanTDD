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
      {renderHead(wrongGuessesCount, colorState)}
      {renderLeftHand(wrongGuessesCount, colorState)}
      {renderRightHand(wrongGuessesCount, colorState)}
      {renderBody(wrongGuessesCount, colorState)}
      {renderRightLeg(wrongGuessesCount, colorState)}
      {renderLeftLeg(wrongGuessesCount, colorState)}
      {renderLeftEyeTwo(wrongGuessesCount, colorState)}
      {renderLeftEyeOne(wrongGuessesCount, colorState)}
      {renderRightEyeTwo(wrongGuessesCount, colorState)}
      {renderRightEyeOne(wrongGuessesCount, colorState)}
    </svg>
  );
};

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

const renderHead = (wrongGuessesCount: number, colorState: string) => {
  wrongGuessesCount >= 1 ? (COLOR = COLOR_AFTER) : (COLOR = colorState);
  return (
    <circle
      cx="298"
      cy="165"
      r="17"
      stroke={COLOR}
      strokeWidth={BODY_WIDTH}
      style={{ fillOpacity: 0 }}
    />
  );
};

const renderLeftHand = (wrongGuessesCount: number, colorState: string) => {
  wrongGuessesCount >= 3 ? (COLOR = COLOR_AFTER) : (COLOR = colorState);
  return (
    <line
      x1="298"
      y1="182"
      x2="278"
      y2="285"
      stroke={COLOR}
      strokeWidth={BODY_WIDTH}
    />
  );
};

const renderRightHand = (wrongGuessesCount: number, colorState: string) => {
  wrongGuessesCount >= 4 ? (COLOR = COLOR_AFTER) : (COLOR = colorState);
  return (
    <line
      x1="298"
      y1="182"
      x2="318"
      y2="285"
      stroke={COLOR}
      strokeWidth={BODY_WIDTH}
    />
  );
};

const renderBody = (wrongGuessesCount: number, colorState: string) => {
  wrongGuessesCount >= 2 ? (COLOR = COLOR_AFTER) : (COLOR = colorState);
  return (
    <line
      x1="298"
      y1="181"
      x2="298"
      y2="275"
      stroke={COLOR}
      strokeWidth={BODY_WIDTH}
    />
  );
};

const renderLeftLeg = (wrongGuessesCount: number, colorState: string) => {
  wrongGuessesCount >= 5 ? (COLOR = COLOR_AFTER) : (COLOR = colorState);
  return (
    <line
      x1="298"
      y1="275"
      x2="278"
      y2="375"
      stroke={COLOR}
      strokeWidth={BODY_WIDTH}
    />
  );
};

const renderRightLeg = (wrongGuessesCount: number, colorState: string) => {
  wrongGuessesCount >= 6 ? (COLOR = COLOR_AFTER) : (COLOR = colorState);
  return (
    <line
      x1="298"
      y1="275"
      x2="318"
      y2="375"
      stroke={COLOR}
      strokeWidth={BODY_WIDTH}
    />
  );
};

const renderLeftEyeOne = (wrongGuessesCount: number, colorState: string) => {
  wrongGuessesCount >= 7 ? (COLOR = COLOR_AFTER) : (COLOR = colorState);
  return (
    <line
      x1="288"
      y1="174"
      x2="297"
      y2="172"
      stroke={COLOR}
      strokeWidth={EYE_WIDTH}
    />
  );
};

const renderLeftEyeTwo = (wrongGuessesCount: number, colorState: string) => {
  wrongGuessesCount >= 8 ? (COLOR = COLOR_AFTER) : (COLOR = colorState);
  return (
    <line
      x1="297"
      y1="174"
      x2="288"
      y2="172"
      stroke={COLOR}
      strokeWidth={EYE_WIDTH}
    />
  );
};

const renderRightEyeOne = (wrongGuessesCount: number, colorState: string) => {
  wrongGuessesCount >= 9 ? (COLOR = COLOR_AFTER) : (COLOR = colorState);
  return (
    <line
      x1="308"
      y1="174"
      x2="299"
      y2="172"
      stroke={COLOR}
      strokeWidth={EYE_WIDTH}
    />
  );
};

const renderRightEyeTwo = (wrongGuessesCount: number, colorState: string) => {
  wrongGuessesCount >= 10 ? (COLOR = COLOR_AFTER) : (COLOR = colorState);
  return (
    <line
      x1="299"
      y1="174"
      x2="308"
      y2="172"
      stroke={COLOR}
      strokeWidth={EYE_WIDTH}
    />
  );
};
