import { useState } from "react";
import Square from "./Square";

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const getWinner = (squares) => {
  for (let [a, b, c] of winCondition) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const gameStatus = () => {
    const winner = getWinner(squares);
    if (winner) return `Winner: ${winner}`;

    if (squares.every((square) => square !== null)) return "It's a draw";

    return `Next Player: ${isX ? "X" : "O"}`;
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsX(true);
  };

  const handleClick = (index) => {
    if (squares[index] || getWinner(squares)) return;

    const copySquares = [...squares];
    copySquares[index] = isX ? "X" : "O";
    setSquares(copySquares);
    setIsX(!isX);
  };

  return (
    <>
      <div
        className={`text-center mb-8 font-bold text-2xl ${
          getWinner(squares) ? "text-green-400" : "text-amber-100"
        }`}
      >
        {gameStatus()}
      </div>

      <div className="grid grid-cols-3 gap-1 mb-7">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <button
        className="w-full bg-white text-3xl py-3 cursor-pointer rounded font-semibold"
        onClick={resetGame}
      >
        Reset
      </button>
    </>
  );
};

export default Board;
