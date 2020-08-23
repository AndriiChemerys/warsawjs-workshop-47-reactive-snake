import React, { useState, useEffect, useRef } from "react";
import GameGrid from "./game/GameGrid";

const GridSize = 10;

function randomIndex(n) {
  return Math.floor(Math.random() * n);
}

function App() {
  const [snake, setSnake] = useState([
    { x: GridSize / 2, y: GridSize / 2 },
    { x: GridSize / 2, y: GridSize / 2 + 1 },
    { x: GridSize / 2, y: GridSize / 2 + 2 },
  ]);
  const [fruit, setFruit] = useState({
    x: randomIndex(GridSize),
    y: randomIndex(GridSize),
  });

  const direction = useRef("up");
  const [speed, setSpeed] = useState(500);

  useEffect(() => {
    const interval = setInterval(() => {
      const [snakeHead] = snake;
      const newSnakeHead = { ...snakeHead };

      if (direction === "up") {
        newSnakeHead.x -= 1;
      } else if (direction === "down") {
        newSnakeHead.x += 1;
      } else if (direction === "right") {
        newSnakeHead.y += 1;
      } else if (direction === "left") {
        newSnakeHead.y -= 1;
      }

      const newSnake = [newSnakeHead, ...snake.slice(0, snake.length - 1)];
      setSnake(newSnake);
    }, speed);
    return () => {
      clearInterval(interval);
    };
  }, [snake]);

  function handleKeyDown(event) {
    if (event.key === "ArrowUp") {
      direction.current = "up";
    } else if (event.key === "ArrowDown") {
      direction.current = "down";
    } else if (event.key === "ArrowLeft") {
      direction.current = "left";
    } else if (event.key === "ArrowRight") {
      direction.current = "right";
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  // return direction.current;
  return <GameGrid gridSize={GridSize} fruit={fruit} snake={snake} />;
}

export default App;
