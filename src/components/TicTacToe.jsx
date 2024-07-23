import React, { useState } from "react";
import Chance from "./chance";

const TicTacToe = () => {
  const [matrix, setMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);

  const [currentUser, setCurrentUser] = useState("x");
  const [isWinnerFound, setIsWinnerFound] = useState(false);
  const [winner, setWinner] = useState("");

  const findWinner = (mat, user) => {
    // Check horizontal
    for (let i = 0; i < 3; i++) {
      if (mat[i][0] === user && mat[i][0] === mat[i][1] && mat[i][0] === mat[i][2]) {
        return user;
      }
    }

    // Check vertical
    for (let i = 0; i < 3; i++) {
      if (mat[0][i] === user && mat[0][i] === mat[1][i] && mat[0][i] === mat[2][i]) {
        return user;
      }
    }

    // Check diagonal
    if (mat[0][0] === user && mat[0][0] === mat[1][1] && mat[1][1] === mat[2][2]) {
      return user;
    }

    if (mat[0][2] === user && mat[0][2] === mat[1][1] && mat[1][1] === mat[2][0]) {
      return user;
    }

    return "";
  };

  const onCellClick = (row, col) => {
    if (matrix[row][col] === "" && !isWinnerFound) {
      const matrixCopy = matrix.map((r) => r.slice());

      let currUser = currentUser;
      matrixCopy[row][col] = currUser;

      const winner = findWinner(matrixCopy, currUser);
      if (winner) {
        setIsWinnerFound(true);
        setWinner(winner);
      } else {
        currUser = currUser === "x" ? "o" : "x";
        setCurrentUser(currUser);
      }

      setMatrix(matrixCopy);
    }
  };

  return (
    <>
      <Chance currentUser={currentUser} />
      <table>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => onCellClick(rowIndex, colIndex)}
                  style={{ width: "50px", height: "50px", textAlign: "center", border: "1px solid black", cursor: "pointer" }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isWinnerFound && <p>Winner is: {winner}</p>}
    </>
  );
};

export default TicTacToe;

