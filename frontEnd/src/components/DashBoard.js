import React, { useState } from "react";
import ColorBox from "./ColorBox";
import ScoreBoard from "./ScoreBoard";
import Timer from "./Timer";

import Failed from "./Failed";

const DashBoard = ({ setStarted }) => {
  const [score, setScore] = useState(0);

  let originalR = Math.floor(Math.random() * 255) + 1;
  let originalG = Math.floor(Math.random() * 255) + 1;
  let originalB = Math.floor(Math.random() * 255) + 1;

  const [originalRGB, setOriginalRGB] = useState([
    originalR,
    originalG,
    originalB,
  ]);

  const boxCount = 36;
  let correctNumber = Math.floor(Math.random() * boxCount);
  let firstBoxArr = [];

  const firstBoxStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: `rgb(${originalRGB[0]}, ${originalRGB[1]}, ${originalRGB[2]})`,
  };

  const boxClass = "color-box";

  const [isFailed, setIsFailed] = useState(false);
  const failedAction = () => {
    setIsFailed(true);
  };

  for (let i = 0; i < boxCount; i++) {
    let boxInfo = [];

    boxInfo.push(firstBoxStyle); //1
    boxInfo.push(boxClass); //2
    boxInfo.push(failedAction); //3

    firstBoxArr.push(boxInfo);
  }

  //----------------------------------------------------------------
  let correctR = 255 - originalR;
  let correctG = 255 - originalG;
  let correctB = 255 - originalB;

  const [correctBoxColor, setCorrectColor] = useState([
    correctR,
    correctG,
    correctB,
  ]);

  const correctBoxStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: `rgb(${correctBoxColor[0]}, ${correctBoxColor[1]}, ${correctBoxColor[2]})`,
  };

  const correctFunction = () => {
    let newRGB = [];
    for (let i = 0; i <= 2; i++) {
      newRGB[i] =
        correctBoxColor[i] + (originalRGB[i] - correctBoxColor[i]) / 10;
    }
    setCorrectColor(newRGB);
    setScore(score + 1);
  };

  firstBoxArr[correctNumber] = [correctBoxStyle, "color-box", correctFunction];

  //---------------------------------------------------------------
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);

  return (
    <div className={"dashboard"}>
      {!isFailed && <ScoreBoard score={score} />}
      {!isFailed && (
        <Timer score={score} expiryTimestamp={time} setIsFailed={setIsFailed} />
      )}
      {!isFailed &&
        firstBoxArr.map((v, i) => (
          <ColorBox
            key={i}
            firstBoxStyle={v[0]}
            classes={v[1]}
            clickFunction={v[2]}
          />
        ))}
      {isFailed && (
        <Failed
          score={score}
          setScore={setScore}
          setOriginalRGB={setOriginalRGB}
          setCorrectColor={setCorrectColor}
          setIsFailed={setIsFailed}
          setStarted={setStarted}
        />
      )}
    </div>
  );
};

export default DashBoard;
