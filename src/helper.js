export const generateGrid = () => {
  const grid = [];
  let cellCount = 100;

  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      row.push(cellCount);
      cellCount--;
    }
    if (i % 2 == 0) {
      grid.push(...row);
    } else {
      grid.push(...row.reverse());
    }
  }

  return grid;
};

export const getPlayers = () => {
  const players = [
    { id: 0, boardValue: 0, color: "red" },
    { id: 1, boardValue: 0, color: "green" },
    { id: 2, boardValue: 0, color: "blue" },
    { id: 3, boardValue: 0, color: "yellow" },
  ];
  return players;
};

export const getSnakes = () => {
  const snakes = [
    { id: 0, start: 50, end: 10 },
    { id: 1, start: 99, end: 18 },
    { id: 2, start: 67, end: 33 },
  ];
  return snakes;
};

export const getLadders = () => {
  const ladders = [
    { id: 0, start: 13, end: 57 },
    { id: 1, start: 27, end: 91 },
    { id: 2, start: 45, end: 86 },
  ];
  return ladders;
};
