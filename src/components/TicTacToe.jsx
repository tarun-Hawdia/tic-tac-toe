import React, { useState } from "react";

const TicTacToe = ({ currentUser, setCurrentUser, isWinnerFound, setIsWinnerFound, setWinner }) => {
  const [matrix, setMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);

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
    let matrixCopy = matrix.map((r) => r.slice());

    if (matrixCopy[row][col] === "" && !isWinnerFound) {
      let currUser = currentUser;
      matrixCopy[row][col] = currUser;

      let winner = findWinner(matrixCopy, currUser);
      if (winner) {
        setIsWinnerFound(true);
        setWinner(winner);
      }

      currUser = currUser === "x" ? "o" : "x";
      setMatrix(matrixCopy);
      setCurrentUser(currUser);
    }
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td onClick={() => onCellClick(0, 0)}>{matrix[0][0]}</td>
            <td onClick={() => onCellClick(0, 1)}>{matrix[0][1]}</td>
            <td onClick={() => onCellClick(0, 2)}>{matrix[0][2]}</td>
          </tr>
          <tr>
            <td onClick={() => onCellClick(1, 0)}>{matrix[1][0]}</td>
            <td onClick={() => onCellClick(1, 1)}>{matrix[1][1]}</td>
            <td onClick={() => onCellClick(1, 2)}>{matrix[1][2]}</td>
          </tr>
          <tr>
            <td onClick={() => onCellClick(2, 0)}>{matrix[2][0]}</td>
            <td onClick={() => onCellClick(2, 1)}>{matrix[2][1]}</td>
            <td onClick={() => onCellClick(2, 2)}>{matrix[2][2]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TicTacToe;
