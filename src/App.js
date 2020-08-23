import React, { useState } from "react";
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

  const direction = "up";
  const speed = 500;

  return <GameGrid gridSize={GridSize} fruit={fruit} snake={snake} />;
}

export default App;
