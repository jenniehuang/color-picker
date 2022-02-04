import React from "react";
import Leaderboard from "./Leaderboard";
import help_btn from "../pics/btn.png";

const HomePage = ({ setStarted }) => {
  const start = () => {
    setStarted(true);
  };

  return (
    <div>
      <h2 className="Color-Picker">Color Picker!!!</h2>
      <Leaderboard />

      <button onClick={start} className="start-btn">
        Start
      </button>
      <p>
        click <img src={help_btn} alt="" /> on top right to learn more about the
        game.
      </p>
    </div>
  );
};

export default HomePage;
