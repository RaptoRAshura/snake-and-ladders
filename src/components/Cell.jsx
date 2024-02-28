import { useMemo } from "react";
import { getPlayers, getLadders, getSnakes } from "../helper";
import Player from "./Player";
import Snake from "./Snake";
import Ladder from "./Ladder";

const Cell = ({ value, index, players }) => {
  const snakes = getSnakes();
  const ladders = getLadders();

  const snakeStart = snakes.find((snake) => snake.start === value);
  const snakeEnd = snakes.find((snake) => snake.end === value);
  const ladderStart = ladders.find((ladder) => ladder.start === value);
  const ladderEnd = ladders.find((ladder) => ladder.end === value);
  const playersOnCurrentCell = players.filter(
    (player) => player.boardValue === value
  );

  const getBackgroundColor = useMemo(() => {
    let color;
    if (snakeStart || snakeEnd) {
      color = "orange";
      return color;
    }
    if (ladderEnd || ladderStart) {
      color = "lightgreen";
      return color;
    }
  }, [value]);

  return (
    <div
      style={{
        border: "1px solid black",
        height: "50px",
        width: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: getBackgroundColor,
        opacity: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {playersOnCurrentCell.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      {snakeStart || snakeEnd ? <Snake snake={snakeStart || snakeEnd} /> : null}
      {ladderStart || ladderEnd ? (
        <Ladder ladder={ladderStart || ladderEnd} />
      ) : null}
      <span style={{ fontSize: "20px", fontWeight: 500 }}>{value}</span>
    </div>
  );
};

export default Cell;
