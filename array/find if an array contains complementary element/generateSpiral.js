const DIR = [[0, 1], [1, 0], [0, -1], [-1, 0]];

function spiralMatrix(length) {
  var squareMatrix = [...new Array(length)].map(i => new Array(length));
  // validate square matrix
  const SIZE = length * length;
  let x = 0;
  let y = 0;
  let dir = 0;
  for (var i = 0; i < SIZE; i++) {
    squareMatrix[x][y] = i + 1;
    x = x + DIR[dir][0];
    y = y + DIR[dir][1];
    if (x < 0 || y < 0 || x >= length || y >= length || squareMatrix[x][y]) {
      x = x - DIR[dir][0];
      y = y - DIR[dir][1];
      dir = (dir + 1) % 4;
      x = x + DIR[dir][0];
      y = y + DIR[dir][1];
    }
  }
  return squareMatrix;
}
let spiralMatrix_1 = spiralMatrix(3);
console.log(spiralMatrix_1);
