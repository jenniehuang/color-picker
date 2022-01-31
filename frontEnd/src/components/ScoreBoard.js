import React from "react";

const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board">
      <h3>Your Score: {score}</h3>
    </div>
  );
};

export default ScoreBoard;
