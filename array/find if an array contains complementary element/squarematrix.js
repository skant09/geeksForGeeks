var squareMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const DIR = [[0, 1], [1, 0], [0, -1], [-1, 0]];
function spiralMatrix(squareMatrix) {
  // validate square matrix
  const SIZE = squareMatrix.length * squareMatrix.length;
  let x = 0;
  let y = 0;
  let dir = 0;
  let spiralMatrix = new Array(16).fill(0);
  for (var i = 0; i < SIZE; i++) {
    console.log(spiralMatrix);
    spiralMatrix[i] = squareMatrix[x][y];
    squareMatrix[x][y] = 0;
    x = x + DIR[dir][0];
    y = y + DIR[dir][1];
    if (
      x < 0 ||
      y < 0 ||
      x >= squareMatrix.length ||
      y >= squareMatrix.length ||
      squareMatrix[x][y] == 0
    ) {
      x = x - DIR[dir][0];
      y = y - DIR[dir][1];
      dir = (dir + 1) % 4;
      x = x + DIR[dir][0];
      y = y + DIR[dir][1];
    }
  }
  return spiralMatrix;
}
let spiralMatrix_1 = spiralMatrix(squareMatrix);
console.log(spiralMatrix_1);
