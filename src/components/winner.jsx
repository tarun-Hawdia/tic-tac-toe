import React from "react";

const Winner = ({ isWinnerFound, winner }) => {
  return isWinnerFound ? <h1>Winner is {winner}</h1> : null;
};

export default Winner;

