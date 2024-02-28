import "./styles.css";
import { generateGrid, getPlayers } from "./helper";
import { useState, useEffect } from "react";
import Cell from "./components/Cell";
import { getSnakes } from "./helper";
import { getLadders } from "./helper";

export default function App() {
  const [grid, setGrid] = useState(generateGrid());
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [players, setPlayers] = useState(getPlayers());
  const [diceValue, setDiceValue] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  useEffect(() => {
    if (!isGameStarted) return;
    checkForSnake();

    checkForLadder();

    setCurrentPlayer((prev) => (prev + 1) % players.length);
  }, [players]);

  const checkForSnake = () => {
    const snake = getSnakes().find(
      (snake) => players[currentPlayer].boardValue === snake.start
    );
    if (!snake) {
      return;
    }
    const newPlayers = [...players];
    newPlayers[currentPlayer].boardValue = snake.end;
    setPlayers(newPlayers);
    setCurrentPlayer((prev) => (prev + 1) % players.length);
  };
  const checkForLadder = () => {
    const ladder = getLadders().find(
      (ladder) => players[currentPlayer].boardValue === ladder.start
    );
    if (!ladder) return;
    console.log(ladder);
    const newPlayers = [...players];
    newPlayers[currentPlayer].boardValue = ladder.end;
    setPlayers(newPlayers);
  };

  const handleDiceRoll = () => {
    const diceVal = Math.floor(Math.random() * 6) + 1;
    setDiceValue(diceVal);
    const newPlayers = [...players];
    newPlayers[currentPlayer].boardValue += diceVal;
    if (newPlayers[currentPlayer].boardValue > 100) {
      setIsGameFinished(true);
      return;
    }
    setPlayers([...newPlayers]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        height: "100vh",
        width: "100%",
      }}
      className="container"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 50px)",
          border: "1px solid black",
        }}
      >
        {grid.map((cell, index) => (
          <Cell key={cell} value={cell} index={index} players={players} />
        ))}
      </div>
      {!isGameStarted ? (
        <button onClick={() => setIsGameStarted(true)}>Start new Game</button>
      ) : (
        <button disabled={isGameFinished} onClick={handleDiceRoll}>
          Player {currentPlayer + 1} roll the dice
        </button>
      )}

      {diceValue && !isGameFinished && isGameStarted ? (
        <span style={{ fontSize: "20px" }}>Player rolled {diceValue}</span>
      ) : null}
      {isGameFinished ? (
        <span style={{ fontSize: "20px" }}>
          Player {currentPlayer + 1} won the game!
        </span>
      ) : null}
    </div>
  );
}
