/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++;
        grid[i][j] === '0'
        convertAdjacentTozero(i, j);
      }
    }
  }

  function convertAdjacentTozero(row, col) {
    const DIR = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1]
    ];
    for (let i = 0; i < DIR.length; i++) {
      let [x, y] = [row + DIR[i][0], col + DIR[i][1]];
      if (x > -1 && x < m && y > -1 && y < n) {
        if (grid[x][y] === '1') {
          grid[x][y] = '0';
          convertAdjacentTozero(x, y);
        }
      }
    }
  }
  console.log(count);
  return count;
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];
numIslands(grid);