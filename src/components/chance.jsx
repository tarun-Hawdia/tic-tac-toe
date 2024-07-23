import React from "react";

const Chance = ({ currentUser }) => {
  return (
    <div className="chance">
      Current turn: {currentUser.toUpperCase()}
    </div>
  );
};

export default Chance;
