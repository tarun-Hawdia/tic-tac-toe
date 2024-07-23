import './App.css';
import TicTacToe from "./components/TicTacToe";
import Chance from "./components/chance";
import Winner from "./components/winner";
import React, { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState("x");
  const [isWinnerFound, setIsWinnerFound] = useState(false);
  const [winner, setWinner] = useState("");

  return (
    <>
      <TicTacToe 
        currentUser={currentUser} 
        setCurrentUser={setCurrentUser} 
        isWinnerFound={isWinnerFound} 
        setIsWinnerFound={setIsWinnerFound}
        setWinner={setWinner}
      />
      <Chance 
      currentUser={currentUser} 
      isWinnerFound={isWinnerFound}
      />
      <Winner isWinnerFound={isWinnerFound} winner={winner} />
    </>
  );
}

export default App;