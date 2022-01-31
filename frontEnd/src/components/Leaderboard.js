import React, { useEffect, useState } from "react";
import users from "../pics/users-2.png";

const Leaderboard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(async () => {
    let response = await fetch("/user_data");
    let data = await response.json();
    setUserData(data.user_data);
  }, []);

  return (
    <div className="leaderboard">
      <h3 className="board-title">
        <i id="users">
          <img src={users} alt="users" />
        </i>
        leaderboard
      </h3>

      <table>
        <thead>
          <tr id="title">
            <td>rank</td>
            <td>username</td>
            <td>score</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((v, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{v.username}</td>
              <td>{v.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
