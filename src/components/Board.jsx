import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setisX] = useState(true);

  const handleClick = (index) => {
    if (squares[index]) return; // Don't allow overwriting

    const copySquares = [...squares];
    copySquares[index] = isX ? "X" : "O";
    setSquares(copySquares);
    setisX(!isX);
  };

  return (
    <div className="grid grid-cols-3 gap-1">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Board;
