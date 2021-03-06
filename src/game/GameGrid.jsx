import React from "react";
import "./GameGrid.css";

export default function GameGrid({ gridSize, fruit, snake }) {
  const indexes = Array.from({ length: gridSize }).map((_, index) => index);
  console.log(["GameGrid"], { gridSize, indexes });

  function getCellClass(x, y) {
    if (snake.some((snakePart) => snakePart.x === x && snakePart.y === y)) {
      return "snakeCell";
    }

    if (x === fruit.x && y === fruit.y) {
      return "fruitCell";
    }

    return "gridCell";
  }

  return (
    <div className="grid">
      {indexes.map((x) => (
        <div className="gridRow" key={x}>
          {indexes.map((y) => (
            <div className={getCellClass(x, y)} key={`${x}x${y}`} />
          ))}
        </div>
      ))}
    </div>
  );
}
