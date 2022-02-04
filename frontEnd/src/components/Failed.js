import React, { useState } from "react";

import failed from "../pics/failed.png";
import success from "../pics/success.png";

const Failed = ({
  score,
  setScore,
  setOriginalRGB,
  setCorrectColor,
  setIsFailed,
  setStarted,
}) => {
  const [userName, setUserName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [message, setMessage] = useState("");

  const submitUserName = async () => {
    if (!userName) {
      setIsSubmitted(false);
      setMessage("Username Not Allow, try again");
    } else {
      try {
        const data = { userName, score };
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/add_user`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        setIsSubmitted(true);
      } catch (e) {
        setMessage(e);
        setIsSubmitted(false);
      }
    }
  };

  return (
    <div>
      {isSubmitted === null && (
        <div>
          <h1>you failed!!!</h1>
          <h2>Your Score: {score}</h2>
        </div>
      )}
      {isSubmitted === true && (
        <div className="success-area">
          <i id="success">
            <img src={success} alt="success" />
          </i>
          <h2>submit success</h2>
        </div>
      )}
      {isSubmitted === false && (
        <div className="error-area">
          <i id="failed">
            <img src={failed} alt="failed" />
          </i>
          <h2>submit failed</h2>
          <div>{message && <h3>{message}</h3>}</div>
        </div>
      )}
      <button
        onClick={() => {
          setIsFailed(false);
          setScore(0);
          let originalR = Math.floor(Math.random() * 255) + 1;
          let originalG = Math.floor(Math.random() * 255) + 1;
          let originalB = Math.floor(Math.random() * 255) + 1;
          let correctR = 255 - originalR;
          let correctG = 255 - originalG;
          let correctB = 255 - originalB;
          setOriginalRGB([originalR, originalG, originalB]);
          setCorrectColor([correctR, correctG, correctB]);
        }}
        className="play-again-btn"
      >
        Play Again!
      </button>

      <button
        onClick={() => {
          setStarted(false);
        }}
        className="back-to-hp-btn"
      >
        Back to Homepage
      </button>

      {!isSubmitted && (
        <div className="submit-form">
          <input
            type="text"
            placeholder="enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={submitUserName}>submit to leaderboard</button>
        </div>
      )}
    </div>
  );
};

export default Failed;
