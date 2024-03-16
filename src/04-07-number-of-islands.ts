const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function numIslands(grid: string[][]): number {
  function sinkIsland(i: number, j: number) {
    if (grid[i] == undefined || grid[i][j] == undefined) {
      return;
    }
    if (grid[i][j] == "0") {
      return;
    }
    // Pain island
    grid[i][j] = "0";

    directions.forEach(([x, y]) => sinkIsland(i + x, j + y));
  }

  let numIslands = 0;

  grid.forEach((row, i) =>
    row.forEach((_, j) => {
      if (grid[i][j] == "1") {
        numIslands++;
        sinkIsland(i, j);
      }
    })
  );

  return numIslands;
}
