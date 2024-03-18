function orangesRotting(grid: number[][]): number {
  let freshNum = 0;
  let rottens: [number, number][] = [];
  grid.forEach((col, i) =>
    col.forEach((cell, j) => {
      if (cell == 2) {
        rottens.push([i, j]);
      } else if (cell == 1) {
        freshNum++;
      }
    })
  );

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let steps = 0;
  while (rottens.length && freshNum != 0) {
    steps++;
    const newRottens: [number, number][] = [];
    for (const coords of rottens) {
      const [x, y] = coords;
      directions.forEach(([xOff, yOff]) => {
        if (grid[x + xOff] == undefined) {
          return;
        }

        if (grid[x + xOff][y + yOff] == 1) {
          newRottens.push([x + xOff, y + yOff]);
          grid[x + xOff][y + yOff] = 2;
          freshNum--;
        }
      });
    }
    rottens = newRottens;
  }

  return freshNum == 0 ? steps : -1;
}
