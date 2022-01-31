import React from "react";
import Leaderboard from "./Leaderboard";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2 className="Color-Picker">Color Picker!!!</h2>
      <Leaderboard />

      <Link to="/dashboard">
        <button className="start-btn">Start</button>
      </Link>
    </div>
  );
};

export default HomePage;
